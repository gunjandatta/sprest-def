import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* IHubSiteProperties
**********************************************/
export interface IHubSiteProperties extends HubSitePropertiesCollections, HubSitePropertiesMethods, Base.IBaseQuery<HubSiteProperties, IHubSitePropertiesQuery> {

}

/*********************************************
* IHubSitePropertiesCollection
**********************************************/
export interface IHubSitePropertiesCollection extends Base.IBaseResults<HubSiteProperties> {
	done?: (resolve: (value?: Array<HubSiteProperties>) => void) => void;
}

/*********************************************
* IHubSitePropertiesQueryCollection
**********************************************/
export interface IHubSitePropertiesQueryCollection extends Base.IBaseResults<HubSitePropertiesOData> {
	done?: (resolve: (value?: Array<HubSitePropertiesOData>) => void) => void;
}

/*********************************************
* IHubSitePropertiesQuery
**********************************************/
export interface IHubSitePropertiesQuery extends HubSitePropertiesOData, HubSitePropertiesMethods {

}

/*********************************************
* HubSiteProperties
**********************************************/
export interface HubSiteProperties extends Base.IBaseResult, HubSitePropertiesProps, HubSitePropertiesCollections, HubSitePropertiesMethods {

}

/*********************************************
* HubSitePropertiesProps
**********************************************/
export interface HubSitePropertiesProps {
	Description?: string;
	EnablePermissionsSync?: boolean;
	HideNameInNavigation?: boolean;
	ID?: any;
	LogoUrl?: string;
	ParentHubSiteId?: any;
	Permissions?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.HubSitePermission> };
	RequiresJoinApproval?: boolean;
	SiteDesignId?: any;
	SiteId?: any;
	SiteUrl?: string;
	Title?: string;
}

/*********************************************
* HubSitePropertiesPropMethods
**********************************************/
export interface HubSitePropertiesPropMethods {

}

/*********************************************
* HubSitePropertiesCollections
**********************************************/
export interface HubSitePropertiesCollections extends HubSitePropertiesPropMethods {

}

/*********************************************
* HubSitePropertiesOData
**********************************************/
export interface HubSitePropertiesOData extends Base.IBaseResult, HubSitePropertiesProps, HubSitePropertiesMethods {

}

/*********************************************
* HubSitePropertiesMethods
**********************************************/
export interface HubSitePropertiesMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IOffice365CommsMessagesServiceProxy
**********************************************/
export interface IOffice365CommsMessagesServiceProxy extends Office365CommsMessagesServiceProxyCollections, Office365CommsMessagesServiceProxyMethods, Base.IBaseQuery<Office365CommsMessagesServiceProxy, IOffice365CommsMessagesServiceProxyQuery> {

}

/*********************************************
* IOffice365CommsMessagesServiceProxyCollection
**********************************************/
export interface IOffice365CommsMessagesServiceProxyCollection extends Base.IBaseResults<Office365CommsMessagesServiceProxy> {
	done?: (resolve: (value?: Array<Office365CommsMessagesServiceProxy>) => void) => void;
}

/*********************************************
* IOffice365CommsMessagesServiceProxyQueryCollection
**********************************************/
export interface IOffice365CommsMessagesServiceProxyQueryCollection extends Base.IBaseResults<Office365CommsMessagesServiceProxyOData> {
	done?: (resolve: (value?: Array<Office365CommsMessagesServiceProxyOData>) => void) => void;
}

/*********************************************
* IOffice365CommsMessagesServiceProxyQuery
**********************************************/
export interface IOffice365CommsMessagesServiceProxyQuery extends Office365CommsMessagesServiceProxyOData, Office365CommsMessagesServiceProxyMethods {

}

/*********************************************
* Office365CommsMessagesServiceProxy
**********************************************/
export interface Office365CommsMessagesServiceProxy extends Base.IBaseResult, Office365CommsMessagesServiceProxyProps, Office365CommsMessagesServiceProxyCollections, Office365CommsMessagesServiceProxyMethods {

}

/*********************************************
* Office365CommsMessagesServiceProxyProps
**********************************************/
export interface Office365CommsMessagesServiceProxyProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* Office365CommsMessagesServiceProxyPropMethods
**********************************************/
export interface Office365CommsMessagesServiceProxyPropMethods {

}

/*********************************************
* Office365CommsMessagesServiceProxyCollections
**********************************************/
export interface Office365CommsMessagesServiceProxyCollections extends Office365CommsMessagesServiceProxyPropMethods {

}

/*********************************************
* Office365CommsMessagesServiceProxyOData
**********************************************/
export interface Office365CommsMessagesServiceProxyOData extends Base.IBaseResult, Office365CommsMessagesServiceProxyProps, Office365CommsMessagesServiceProxyMethods {

}

/*********************************************
* Office365CommsMessagesServiceProxyMethods
**********************************************/
export interface Office365CommsMessagesServiceProxyMethods {
	messageCenterMessages(messagesFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.MessagesFieldsData): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.ResponseMessageCenter>;
	serviceHealthMessages(messagesFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.MessagesFieldsData): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.ResponseServiceHealth>;
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
export interface ISiteCollectionManagementService extends SiteCollectionManagementServiceCollections, SiteCollectionManagementServiceMethods, Base.IBaseQuery<SiteCollectionManagementService, ISiteCollectionManagementServiceQuery> {

}

/*********************************************
* ISiteCollectionManagementServiceCollection
**********************************************/
export interface ISiteCollectionManagementServiceCollection extends Base.IBaseResults<SiteCollectionManagementService> {
	done?: (resolve: (value?: Array<SiteCollectionManagementService>) => void) => void;
}

/*********************************************
* ISiteCollectionManagementServiceQueryCollection
**********************************************/
export interface ISiteCollectionManagementServiceQueryCollection extends Base.IBaseResults<SiteCollectionManagementServiceOData> {
	done?: (resolve: (value?: Array<SiteCollectionManagementServiceOData>) => void) => void;
}

/*********************************************
* ISiteCollectionManagementServiceQuery
**********************************************/
export interface ISiteCollectionManagementServiceQuery extends SiteCollectionManagementServiceOData, SiteCollectionManagementServiceMethods {

}

/*********************************************
* SiteCollectionManagementService
**********************************************/
export interface SiteCollectionManagementService extends Base.IBaseResult, SiteCollectionManagementServiceProps, SiteCollectionManagementServiceCollections, SiteCollectionManagementServiceMethods {

}

/*********************************************
* SiteCollectionManagementServiceProps
**********************************************/
export interface SiteCollectionManagementServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionManagementServicePropMethods
**********************************************/
export interface SiteCollectionManagementServicePropMethods {

}

/*********************************************
* SiteCollectionManagementServiceCollections
**********************************************/
export interface SiteCollectionManagementServiceCollections extends SiteCollectionManagementServicePropMethods {

}

/*********************************************
* SiteCollectionManagementServiceOData
**********************************************/
export interface SiteCollectionManagementServiceOData extends Base.IBaseResult, SiteCollectionManagementServiceProps, SiteCollectionManagementServiceMethods {

}

/*********************************************
* SiteCollectionManagementServiceMethods
**********************************************/
export interface SiteCollectionManagementServiceMethods {
	exportCSVFile(viewXml?: string): Base.IBaseExecution<string>;
	getSiteCohortsSummary(view?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteCohortsSummary>;
	getSiteCreationSource(): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteCreationSource>;
	getSiteDescription(siteId?: any): Base.IBaseExecution<string>;
	getTrackViewFeatureAlwaysVisible(): Base.IBaseExecution<boolean>;
	office365ProvidedSharepointSiteActivityDataReady(): Base.IBaseExecution<boolean>;
	resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData(): Base.IBaseExecution<any>;
	setTrackViewFeatureAlwaysVisible(): Base.IBaseExecution<boolean>;
	updateOffice365ProvidedSharepointSiteActivityData(oauthToken?: string): Base.IBaseExecution<boolean>;
}

/*********************************************
* ISiteProperties
**********************************************/
export interface ISiteProperties extends SitePropertiesCollections, SitePropertiesMethods, Base.IBaseQuery<SiteProperties, ISitePropertiesQuery> {

}

/*********************************************
* ISitePropertiesCollection
**********************************************/
export interface ISitePropertiesCollection extends Base.IBaseResults<SiteProperties>, SitePropertiesCollectionMethods {
	done?: (resolve: (value?: Array<SiteProperties>) => void) => void;
}

/*********************************************
* ISitePropertiesQueryCollection
**********************************************/
export interface ISitePropertiesQueryCollection extends Base.IBaseResults<SitePropertiesOData>, SitePropertiesCollectionMethods {
	done?: (resolve: (value?: Array<SitePropertiesOData>) => void) => void;
}

/*********************************************
* ISitePropertiesQuery
**********************************************/
export interface ISitePropertiesQuery extends SitePropertiesOData, SitePropertiesMethods {

}

/*********************************************
* SiteProperties
**********************************************/
export interface SiteProperties extends Base.IBaseResult, SitePropertiesProps, SitePropertiesCollections, SitePropertiesMethods {

}

/*********************************************
* SitePropertiesProps
**********************************************/
export interface SitePropertiesProps {
	AllowDownloadingNonWebViewableFiles?: boolean;
	AllowEditing?: boolean;
	AllowSelfServiceUpgrade?: boolean;
	AnonymousLinkExpirationInDays?: number;
	AuthContextStrength?: string;
	AuthenticationContextName?: string;
	AverageResourceUsage?: number;
	BlockDownloadLinksFileType?: number;
	CommentsOnSitePagesDisabled?: boolean;
	CompatibilityLevel?: number;
	ConditionalAccessPolicy?: number;
	CurrentResourceUsage?: number;
	DefaultLinkPermission?: number;
	DefaultLinkToExistingAccess?: boolean;
	DefaultLinkToExistingAccessReset?: boolean;
	DefaultSharingLinkType?: number;
	DenyAddAndCustomizePages?: number;
	Description?: string;
	DisableAppViews?: number;
	DisableCompanyWideSharingLinks?: number;
	DisableFlows?: number;
	ExternalUserExpirationInDays?: number;
	GroupId?: any;
	GroupOwnerLoginName?: string;
	HasHolds?: boolean;
	HubSiteId?: any;
	IBMode?: string;
	IBSegments?: { results: Array<any> };
	IBSegmentsToAdd?: { results: Array<any> };
	IBSegmentsToRemove?: { results: Array<any> };
	IsGroupOwnerSiteAdmin?: boolean;
	IsHubSite?: boolean;
	IsTeamsChannelConnected?: boolean;
	IsTeamsConnected?: boolean;
	LastContentModifiedDate?: any;
	Lcid?: number;
	LimitedAccessFileType?: number;
	LockIssue?: string;
	LockState?: string;
	MediaTranscription?: number;
	OverrideBlockUserInfoVisibility?: number;
	OverrideTenantAnonymousLinkExpirationPolicy?: boolean;
	OverrideTenantExternalUserExpirationPolicy?: boolean;
	Owner?: string;
	OwnerEmail?: string;
	OwnerLoginName?: string;
	OwnerName?: string;
	PWAEnabled?: number;
	RelatedGroupId?: any;
	RestrictedToRegion?: number;
	SandboxedCodeActivationCapability?: number;
	SensitivityLabel?: any;
	SensitivityLabel2?: string;
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
	TeamsChannelType?: number;
	Template?: string;
	TimeZoneId?: number;
	Title?: string;
	Url?: string;
	UserCodeMaximumLevel?: number;
	UserCodeWarningLevel?: number;
	WebsCount?: number;
}

/*********************************************
* SitePropertiesPropMethods
**********************************************/
export interface SitePropertiesPropMethods {

}

/*********************************************
* SitePropertiesCollections
**********************************************/
export interface SitePropertiesCollections extends SitePropertiesPropMethods {

}

/*********************************************
* SitePropertiesCollectionMethods
**********************************************/
export interface SitePropertiesCollectionMethods {
	checkSiteIsArchivedById(siteId?: any): Base.IBaseExecution<boolean>;
	getById(siteId?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollections & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesMethods;
	getGroupSiteRelationship(siteId?: any): Base.IBaseExecution<number>;
	getLockStateById(siteId?: any): Base.IBaseExecution<number>;
	getSiteStateProperties(siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteStateProperties>;
	getSiteUserGroups(siteId?: any, userGroupIds?: Array<number>): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.TenantAdministration.SiteUserGroupInfo>>;
}

/*********************************************
* SitePropertiesOData
**********************************************/
export interface SitePropertiesOData extends Base.IBaseResult, SitePropertiesProps, SitePropertiesMethods {

}

/*********************************************
* SitePropertiesMethods
**********************************************/
export interface SitePropertiesMethods {
	update(): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
}

/*********************************************
* ISPOGroup
**********************************************/
export interface ISPOGroup extends SPOGroupCollections, SPOGroupMethods, Base.IBaseQuery<SPOGroup, ISPOGroupQuery> {

}

/*********************************************
* ISPOGroupCollection
**********************************************/
export interface ISPOGroupCollection extends Base.IBaseResults<SPOGroup> {
	done?: (resolve: (value?: Array<SPOGroup>) => void) => void;
}

/*********************************************
* ISPOGroupQueryCollection
**********************************************/
export interface ISPOGroupQueryCollection extends Base.IBaseResults<SPOGroupOData> {
	done?: (resolve: (value?: Array<SPOGroupOData>) => void) => void;
}

/*********************************************
* ISPOGroupQuery
**********************************************/
export interface ISPOGroupQuery extends SPOGroupOData, SPOGroupMethods {

}

/*********************************************
* SPOGroup
**********************************************/
export interface SPOGroup extends Base.IBaseResult, SPOGroupProps, SPOGroupCollections, SPOGroupMethods {

}

/*********************************************
* SPOGroupProps
**********************************************/
export interface SPOGroupProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPOGroupPropMethods
**********************************************/
export interface SPOGroupPropMethods {

}

/*********************************************
* SPOGroupCollections
**********************************************/
export interface SPOGroupCollections extends SPOGroupPropMethods {

}

/*********************************************
* SPOGroupOData
**********************************************/
export interface SPOGroupOData extends Base.IBaseResult, SPOGroupProps, SPOGroupMethods {

}

/*********************************************
* SPOGroupMethods
**********************************************/
export interface SPOGroupMethods {
	getGroupInfo(groupId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.GroupInfo>;
	updateGroupProperties(groupId?: any, displayName?: string): Base.IBaseExecution<any>;
	updateGroupPropertiesBySiteId(groupId?: any, siteId?: any, displayName?: string): Base.IBaseExecution<any>;
}

/*********************************************
* SPOPortalLaunchValidator
**********************************************/
export interface SPOPortalLaunchValidator {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPOPortalLaunchValidatorCollections
**********************************************/
export interface SPOPortalLaunchValidatorCollections {

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
	Items?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplate> };
}

/*********************************************
* SPOTenantWebTemplateCollectionCollections
**********************************************/
export interface SPOTenantWebTemplateCollectionCollections {

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
export interface ITenantAdminSettingsService extends TenantAdminSettingsServiceCollections, TenantAdminSettingsServiceMethods, Base.IBaseQuery<TenantAdminSettingsService, ITenantAdminSettingsServiceQuery> {

}

/*********************************************
* ITenantAdminSettingsServiceCollection
**********************************************/
export interface ITenantAdminSettingsServiceCollection extends Base.IBaseResults<TenantAdminSettingsService> {
	done?: (resolve: (value?: Array<TenantAdminSettingsService>) => void) => void;
}

/*********************************************
* ITenantAdminSettingsServiceQueryCollection
**********************************************/
export interface ITenantAdminSettingsServiceQueryCollection extends Base.IBaseResults<TenantAdminSettingsServiceOData> {
	done?: (resolve: (value?: Array<TenantAdminSettingsServiceOData>) => void) => void;
}

/*********************************************
* ITenantAdminSettingsServiceQuery
**********************************************/
export interface ITenantAdminSettingsServiceQuery extends TenantAdminSettingsServiceOData, TenantAdminSettingsServiceMethods {

}

/*********************************************
* TenantAdminSettingsService
**********************************************/
export interface TenantAdminSettingsService extends Base.IBaseResult, TenantAdminSettingsServiceProps, TenantAdminSettingsServiceCollections, TenantAdminSettingsServiceMethods {

}

/*********************************************
* TenantAdminSettingsServiceProps
**********************************************/
export interface TenantAdminSettingsServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	AutoQuotaEnabled?: Microsoft.Online.SharePoint.TenantAdministration.AutoQuotaEnabled;
	AvailableManagedPathsForSiteCreation?: { results: Array<string> };
	CommentsOnSitePagesDisabled?: Microsoft.Online.SharePoint.TenantAdministration.CommentsOnSitePagesDisabled;
	CustomFormUrl?: Microsoft.Online.SharePoint.TenantAdministration.CustomFormUrl;
	DisableGroupify?: Microsoft.Online.SharePoint.TenantAdministration.DisableGroupify;
	EnableAutoNewsDigest?: Microsoft.Online.SharePoint.TenantAdministration.EnableAutoNewsDigest;
	IncludeAtAGlanceInShareEmails?: Microsoft.Online.SharePoint.TenantAdministration.IncludeAtAGlanceInShareEmails;
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
	SitePagesEnabled?: Microsoft.Online.SharePoint.TenantAdministration.SitePagesEnabled;
	SmtpServer?: Microsoft.Online.SharePoint.TenantAdministration.SmtpServer;
	SPListModernUXOff?: Microsoft.Online.SharePoint.TenantAdministration.SPListModernUXOff;
	TenantDefaultTimeZoneId?: Microsoft.Online.SharePoint.TenantAdministration.TenantDefaultTimeZoneId;
	UserVoiceForFeedbackEnabled?: Microsoft.Online.SharePoint.TenantAdministration.UserVoiceForFeedbackEnabled;
}

/*********************************************
* TenantAdminSettingsServicePropMethods
**********************************************/
export interface TenantAdminSettingsServicePropMethods {

}

/*********************************************
* TenantAdminSettingsServiceCollections
**********************************************/
export interface TenantAdminSettingsServiceCollections extends TenantAdminSettingsServicePropMethods {

}

/*********************************************
* TenantAdminSettingsServiceOData
**********************************************/
export interface TenantAdminSettingsServiceOData extends Base.IBaseResult, TenantAdminSettingsServiceProps, TenantAdminSettingsServiceMethods {

}

/*********************************************
* TenantAdminSettingsServiceMethods
**********************************************/
export interface TenantAdminSettingsServiceMethods {
	getTenantSharingStatus(): Base.IBaseExecution<number>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ITenant
**********************************************/
export interface ITenant extends TenantCollections, TenantMethods, Base.IBaseQuery<Tenant, ITenantQuery> {

}

/*********************************************
* ITenantCollection
**********************************************/
export interface ITenantCollection extends Base.IBaseResults<Tenant> {
	done?: (resolve: (value?: Array<Tenant>) => void) => void;
}

/*********************************************
* ITenantQueryCollection
**********************************************/
export interface ITenantQueryCollection extends Base.IBaseResults<TenantOData> {
	done?: (resolve: (value?: Array<TenantOData>) => void) => void;
}

/*********************************************
* ITenantQuery
**********************************************/
export interface ITenantQuery extends TenantOData, TenantMethods {

}

/*********************************************
* Tenant
**********************************************/
export interface Tenant extends Base.IBaseResult, TenantProps, TenantCollections, TenantMethods {

}

/*********************************************
* TenantProps
**********************************************/
export interface TenantProps {
	AddressbarLinkPermission?: number;
	AIBuilderDefaultPowerAppsEnvironment?: string;
	AIBuilderEnabled?: boolean;
	AIBuilderSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	AIBuilderSiteList?: { results: Array<any> };
	AIBuilderSiteListFileName?: string;
	AllowCommentsTextOnEmailEnabled?: boolean;
	AllowDownloadingNonWebViewableFiles?: boolean;
	AllowedDomainListForSyncClient?: { results: Array<any> };
	AllowEditing?: boolean;
	AllowGuestUserShareToUsersNotInSiteCollection?: boolean;
	AllowLimitedAccessOnUnmanagedDevices?: boolean;
	AllowOverrideForBlockUserInfoVisibility?: boolean;
	AllowSelectSGsInODBListInTenant?: { results: Array<string> };
	AnyoneLinkTrackUsers?: boolean;
	ApplyAppEnforcedRestrictionsToAdHocRecipients?: boolean;
	BccExternalSharingInvitations?: boolean;
	BccExternalSharingInvitationsList?: string;
	BlockAccessOnUnmanagedDevices?: boolean;
	BlockDownloadLinksFileType?: number;
	BlockDownloadOfAllFilesForGuests?: boolean;
	BlockDownloadOfAllFilesOnUnmanagedDevices?: boolean;
	BlockDownloadOfViewableFilesForGuests?: boolean;
	BlockDownloadOfViewableFilesOnUnmanagedDevices?: boolean;
	BlockMacSync?: boolean;
	BlockSendLabelMismatchEmail?: boolean;
	BlockUserInfoVisibility?: string;
	BlockUserInfoVisibilityInOneDrive?: number;
	BlockUserInfoVisibilityInSharePoint?: number;
	ChannelMeetingRecordingPermission?: number;
	CommentsOnFilesDisabled?: boolean;
	CommentsOnListItemsDisabled?: boolean;
	CommentsOnSitePagesDisabled?: boolean;
	CompatibilityRange?: string;
	ConditionalAccessPolicy?: number;
	ConditionalAccessPolicyErrorHelpLink?: string;
	ContentTypeSyncSiteTemplatesList?: { results: Array<string> };
	CustomizedExternalSharingServiceUrl?: string;
	DefaultContentCenterSite?: Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker;
	DefaultLinkPermission?: number;
	DefaultODBMode?: string;
	DefaultSharingLinkType?: number;
	DisableAddToOneDrive?: boolean;
	DisableBackToClassic?: boolean;
	DisableCustomAppAuthentication?: boolean;
	DisabledModernListTemplateIds?: { results: Array<any> };
	DisabledWebPartIds?: { results: Array<any> };
	DisableOutlookPSTVersionTrimming?: boolean;
	DisablePersonalListCreation?: boolean;
	DisableReportProblemDialog?: boolean;
	DisableSpacesActivation?: boolean;
	DisallowInfectedFileDownload?: boolean;
	DisplayNamesOfFileViewers?: boolean;
	DisplayNamesOfFileViewersInSpo?: boolean;
	DisplayStartASiteOption?: boolean;
	EmailAttestationEnabled?: boolean;
	EmailAttestationReAuthDays?: number;
	EmailAttestationRequired?: boolean;
	EnableAIPIntegration?: boolean;
	EnableAutoNewsDigest?: boolean;
	EnableAzureADB2BIntegration?: boolean;
	EnabledFlightAllowAADB2BSkipCheckingOTP?: boolean;
	EnableGuestSignInAcceleration?: boolean;
	EnableMinimumVersionRequirement?: boolean;
	EnableMipSiteLabel?: boolean;
	EnablePromotedFileHandlers?: boolean;
	ExcludedFileExtensionsForSyncClient?: { results: Array<string> };
	ExternalServicesEnabled?: boolean;
	ExternalUserExpirationRequired?: boolean;
	ExternalUserExpireInDays?: number;
	FileAnonymousLinkType?: number;
	FilePickerExternalImageSearchEnabled?: boolean;
	FolderAnonymousLinkType?: number;
	GuestSharingGroupAllowListInTenant?: string;
	GuestSharingGroupAllowListInTenantByPrincipalIdentity?: { results: Array<string> };
	HasAdminCompletedCUConfiguration?: boolean;
	HasIntelligentContentServicesCapability?: boolean;
	HasTopicExperiencesCapability?: boolean;
	HideDefaultThemes?: boolean;
	HideSyncButtonOnDocLib?: boolean;
	HideSyncButtonOnODB?: boolean;
	ImageTaggingOption?: number;
	IncludeAtAGlanceInShareEmails?: boolean;
	InformationBarriersSuspension?: boolean;
	IPAddressAllowList?: string;
	IPAddressEnforcement?: boolean;
	IPAddressWACTokenLifetime?: number;
	IsAppBarTemporarilyDisabled?: boolean;
	IsCollabMeetingNotesFluidEnabled?: boolean;
	IsFluidEnabled?: boolean;
	IsHubSitesMultiGeoFlightEnabled?: boolean;
	IsMnAFlightEnabled?: boolean;
	IsMultiGeo?: boolean;
	IsUnmanagedSyncClientForTenantRestricted?: boolean;
	IsUnmanagedSyncClientRestrictionFlightEnabled?: boolean;
	IsWBFluidEnabled?: boolean;
	LabelMismatchEmailHelpLink?: string;
	LegacyAuthProtocolsEnabled?: boolean;
	LimitedAccessFileType?: number;
	MachineLearningCaptureEnabled?: boolean;
	ManagedPathsForSiteCreation?: { results: Array<string> };
	MarkNewFilesSensitiveByDefault?: number;
	MediaTranscription?: number;
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
	PublicCdnOrigins?: { results: Array<string> };
	RequireAcceptingAccountMatchInvitedAccount?: boolean;
	RequireAnonymousLinksExpireInDays?: number;
	ResourceQuota?: number;
	ResourceQuotaAllocated?: number;
	RestrictedOneDriveLicense?: boolean;
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
	StopNew2010Workflows?: boolean;
	StopNew2013Workflows?: boolean;
	StorageQuota?: number;
	StorageQuotaAllocated?: number;
	StreamLaunchConfig?: number;
	StreamLaunchConfigLastUpdated?: any;
	SyncAadB2BManagementPolicy?: boolean;
	SyncPrivacyProfileProperties?: boolean;
	UseFindPeopleInPeoplePicker?: boolean;
	UsePersistentCookiesForExplorerView?: boolean;
	UserVoiceForFeedbackEnabled?: boolean;
	ViewersCanCommentOnMediaDisabled?: boolean;
	ViewInFileExplorerEnabled?: boolean;
	WhoCanShareAllowListInTenant?: string;
	WhoCanShareAllowListInTenantByPrincipalIdentity?: { results: Array<string> };
	Workflow2010Disabled?: boolean;
	Workflows2013State?: number;
}

/*********************************************
* TenantPropMethods
**********************************************/
export interface TenantPropMethods {

}

/*********************************************
* TenantCollections
**********************************************/
export interface TenantCollections extends TenantPropMethods {
	Sites(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollectionMethods;
	Sites(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollections & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesMethods;
}

/*********************************************
* TenantOData
**********************************************/
export interface TenantOData extends Base.IBaseResult, TenantProps, TenantMethods {
	Sites: Base.IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollectionMethods;
}

/*********************************************
* TenantMethods
**********************************************/
export interface TenantMethods {
	addTenantAdminListItem(columnValues?: Array<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminListItemColumnValue>, listName?: string): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	addTenantAdminListView(parameters?: SP.ViewCreationInformation): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	checkTenantIntuneLicense(): Base.IBaseExecution<boolean>;
	checkTenantLicenses(licenses?: Array<string>): Base.IBaseExecution<boolean>;
	connectSiteToHubSiteById(siteUrl?: string, hubSiteId?: any): Base.IBaseExecution<any>;
	createSite(siteCreationProperties?: Microsoft.Online.SharePoint.TenantAdministration.SiteCreationProperties): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	getAdminListViews(): Base.IBaseCollection<SP.View, SP.ViewOData, Base.IBaseExecution & SP.ViewCollectionMethods> & Base.IBaseExecution & SP.ViewCollectionMethods;
	getFilteredSPListItems(columnName?: string, columnValue?: string, listName?: string): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	getIdleSessionSignOutForUnmanagedDevices(): Base.IBaseExecution<string>;
	getPowerAppsEnvironments(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.PowerAppsEnvironment>;
	getSiteHealthStatus(sourceUrl?: string): Base.IBaseExecution<SP.Publishing.PortalHealthStatus>;
	getSitePropertiesByUrl(url?: string, includeDetail?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>;
	getSitePropertiesFromSharePointByFilters(speFilter?: Microsoft.Online.SharePoint.TenantAdministration.SPOSitePropertiesEnumerableFilter): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollectionMethods;
	getSitesByState(states?: Array<number>): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	getSiteSecondaryAdministrators(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsInfo>;
	getSiteSubscriptionId(): Base.IBaseExecution<any>;
	getSPHSiteUrl(): Base.IBaseExecution<string>;
	getSPListItemCount(listName?: string): Base.IBaseExecution<number>;
	getSPListRootFolderProperties(listName?: string): Base.IBaseExecution<SP.PropertyValues>;
	getSPOAllWebTemplates(cultureName?: string, compatibilityLevel?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>;
	getSPOSiteCreationSources(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SPOSiteCreationSource>;
	getSPOTenantAllWebTemplates(): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>;
	getSPOTenantWebTemplates(localeId?: number, compatibilityLevel?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>;
	getTenantAllOrCompatibleIBSegments(segments?: Array<any>): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.IBSegmentInfo>;
	getViewByDisplayName(viewName?: string, listName?: string): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	grantHubSiteRightsById(hubSiteId?: any, principals?: Array<string>, grantedRights?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	hasValidEducationLicense(): Base.IBaseExecution<boolean>;
	registerHubSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	registerHubSiteWithCreationInformation(siteUrl?: string, creationInformation?: SP.HubSiteCreationInformation): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	removeDeletedSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeDeletedSitePreferId(siteUrl?: string, siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeSPHSite(): Base.IBaseExecution<string>;
	removeSPListItem(listItemId?: number, listName?: string): Base.IBaseExecution<any>;
	removeTenantAdminListView(viewId?: string): Base.IBaseExecution<any>;
	renderAdminListData(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters, listName?: string): Base.IBaseExecution<any>;
	renderFilteredAdminListData(parameters?: SP.RenderListFilterDataParameters, listName?: string): Base.IBaseExecution<any>;
	renderIBSegmentListDataAsStream(parameters?: SP.RenderListDataParameters, segments?: Array<any>, CascDelWarnMessage?: string, CustomAction?: string, DrillDown?: string, Field?: string, FieldInternalName?: string, Filter?: string, FilterData?: string, FilterData1?: string, FilterData10?: string, FilterData2?: string, FilterData3?: string, FilterData4?: string, FilterData5?: string, FilterData6?: string, FilterData7?: string, FilterData8?: string, FilterData9?: string, FilterField?: string, FilterField1?: string, FilterField10?: string, FilterField2?: string, FilterField3?: string, FilterField4?: string, FilterField5?: string, FilterField6?: string, FilterField7?: string, FilterField8?: string, FilterField9?: string, FilterFields?: string, FilterFields1?: string, FilterFields10?: string, FilterFields2?: string, FilterFields3?: string, FilterFields4?: string, FilterFields5?: string, FilterFields6?: string, FilterFields7?: string, FilterFields8?: string, FilterFields9?: string, FilterLookupId?: string, FilterLookupId1?: string, FilterLookupId10?: string, FilterLookupId2?: string, FilterLookupId3?: string, FilterLookupId4?: string, FilterLookupId5?: string, FilterLookupId6?: string, FilterLookupId7?: string, FilterLookupId8?: string, FilterLookupId9?: string, FilterOp?: string, FilterOp1?: string, FilterOp10?: string, FilterOp2?: string, FilterOp3?: string, FilterOp4?: string, FilterOp5?: string, FilterOp6?: string, FilterOp7?: string, FilterOp8?: string, FilterOp9?: string, FilterValue?: string, FilterValue1?: string, FilterValue10?: string, FilterValue2?: string, FilterValue3?: string, FilterValue4?: string, FilterValue5?: string, FilterValue6?: string, FilterValue7?: string, FilterValue8?: string, FilterValue9?: string, FilterValues?: string, FilterValues1?: string, FilterValues10?: string, FilterValues2?: string, FilterValues3?: string, FilterValues4?: string, FilterValues5?: string, FilterValues6?: string, FilterValues7?: string, FilterValues8?: string, FilterValues9?: string, GroupString?: string, HasOverrideSelectCommand?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsGroupRender?: string, IsXslView?: string, ListViewPageUrl?: string, OverrideRowLimit?: string, OverrideScope?: string, OverrideSelectCommand?: string, PageFirstRow?: string, PageLastRow?: string, QueryParams?: Array<SP.KeyValue>, RootFolder?: string, RootFolderUniqueId?: string, SortDir?: string, SortDir1?: string, SortDir10?: string, SortDir2?: string, SortDir3?: string, SortDir4?: string, SortDir5?: string, SortDir6?: string, SortDir7?: string, SortDir8?: string, SortDir9?: string, SortField?: string, SortField1?: string, SortField10?: string, SortField2?: string, SortField3?: string, SortField4?: string, SortField5?: string, SortField6?: string, SortField7?: string, SortField8?: string, SortField9?: string, SortFields?: string, SortFieldValues?: string, View?: string, ViewCount?: string, ViewId?: string, ViewPath?: string, WebPartId?: string): Base.IBaseExecution<any>;
	renderIBSegmentListFilterData(parameters?: SP.RenderListFilterDataParameters): Base.IBaseExecution<any>;
	restoreDeletedSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	restoreDeletedSitePreferId(siteUrl?: string, siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	revokeHubSiteRightsById(hubSiteId?: any, principals?: Array<string>): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	setDefaultView(viewId?: string, listName?: string): Base.IBaseExecution<any>;
	setIBSegmentsOnSite(siteId?: any, segments?: Array<any>, ibMode?: string): Base.IBaseExecution<any>;
	setIdleSessionSignOutForUnmanagedDevices(enabled?: boolean, warnAfter?: any, signOutAfter?: any): Base.IBaseExecution<boolean>;
	setSiteSecondaryAdministrators(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): Base.IBaseExecution<any>;
	setSiteUserGroups(siteUserGroupsData?: Microsoft.Online.SharePoint.TenantAdministration.SiteUserGroupsData): Base.IBaseExecution<any>;
	setSPHSite(sphSiteUrl?: string): Base.IBaseExecution<string>;
	swapSite(sourceUrl?: string, targetUrl?: string, archiveUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	swapSiteWithSmartGestureOption(sourceUrl?: string, targetUrl?: string, archiveUrl?: string, includeSmartGestures?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	swapSiteWithSmartGestureOptionForce(sourceUrl?: string, targetUrl?: string, archiveUrl?: string, includeSmartGestures?: boolean, force?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	unregisterHubSite(siteUrl?: string): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
	updateTenantAdminListItem(listItemId?: number, columnValues?: Array<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminListItemColumnValue>, listName?: string): Base.IBaseExecution<any>;
	updateTenantAdminListView(viewId?: string, viewXml?: string): Base.IBaseExecution<any>;
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
