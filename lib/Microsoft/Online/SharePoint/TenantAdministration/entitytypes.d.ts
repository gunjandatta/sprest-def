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
* OneDriveSiteSharingInsights
**********************************************/
export interface OneDriveSiteSharingInsights {
	Anyone?: number;
	EndDate?: string;
	External?: number;
	FileName?: string;
	Internal?: number;
	IsMissing?: boolean;
	TenantId?: any;
	SchemaVersion?: number;
	SecurityGroup?: number;
	SensitivityLabel?: string;
	SharePointGroup?: number;
	SiteId?: any;
	SiteName?: string;
	SiteOwner?: string;
	SiteTemplateId?: number;
	SiteUrl?: string;
	StartDate?: string;
	Total?: number;
}

/*********************************************
* OneDriveSiteSharingInsightsCollections
**********************************************/
export interface OneDriveSiteSharingInsightsCollections {

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
* SharePointSiteSharingInsights
**********************************************/
export interface SharePointSiteSharingInsights {
	Anyone?: number;
	EndDate?: string;
	External?: number;
	Internal?: number;
	IsMissing?: boolean;
	IsTeamsConnected?: boolean;
	TenantId?: any;
	SchemaVersion?: number;
	SecurityGroup?: number;
	SensitivityLabel?: string;
	SharePointGroup?: number;
	SiteId?: any;
	SiteName?: string;
	SiteOwner?: string;
	SiteTemplateId?: number;
	SiteUrl?: string;
	StartDate?: string;
	Total?: number;
}

/*********************************************
* SharePointSiteSharingInsightsCollections
**********************************************/
export interface SharePointSiteSharingInsightsCollections {

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
	exportCSVFile(viewXml?: string, timeZoneId?: number): Base.IBaseExecution<string>;
	getSiteCohortsSummary(view?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteCohortsSummary>;
	getSiteCreationSource(): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteCreationSource>;
	getSiteDescription(siteId?: any): Base.IBaseExecution<string>;
	getTrackViewFeatureAlwaysVisible(): Base.IBaseExecution<boolean>;
	office365ProvidedSharepointSiteActivityDataReady(): Base.IBaseExecution<boolean>;
	resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData(): Base.IBaseExecution<any>;
	setTrackViewFeatureAlwaysVisible(): Base.IBaseExecution<boolean>;
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
	ArchiveStatus?: string;
	AuthContextStrength?: string;
	AuthenticationContextLimitedAccess?: boolean;
	AuthenticationContextName?: string;
	AverageResourceUsage?: number;
	BlockDownloadLinksFileType?: number;
	BlockDownloadMicrosoft365GroupIds?: { results: Array<any> };
	BlockDownloadPolicy?: boolean;
	BlockGuestsAsSiteAdmin?: number;
	BonusDiskQuota?: number;
	ClearRestrictedAccessControl?: boolean;
	CommentsOnSitePagesDisabled?: boolean;
	CompatibilityLevel?: number;
	ConditionalAccessPolicy?: number;
	CurrentResourceUsage?: number;
	DefaultLinkPermission?: number;
	DefaultLinkToExistingAccess?: boolean;
	DefaultLinkToExistingAccessReset?: boolean;
	DefaultShareLinkRole?: number;
	DefaultShareLinkScope?: number;
	DefaultSharingLinkType?: number;
	DenyAddAndCustomizePages?: number;
	Description?: string;
	DisableAppViews?: number;
	DisableCompanyWideSharingLinks?: number;
	DisableFlows?: number;
	ExcludeBlockDownloadPolicySiteOwners?: boolean;
	ExcludeBlockDownloadSharePointGroups?: { results: Array<string> };
	ExcludedBlockDownloadGroupIds?: { results: Array<any> };
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
	ListsShowHeaderAndNavigation?: boolean;
	LockIssue?: string;
	LockState?: string;
	LoopDefaultSharingLinkRole?: number;
	LoopDefaultSharingLinkScope?: number;
	LoopOverrideSharingCapability?: boolean;
	LoopSharingCapability?: number;
	MediaTranscription?: number;
	OverrideBlockUserInfoVisibility?: number;
	OverrideSharingCapability?: boolean;
	OverrideTenantAnonymousLinkExpirationPolicy?: boolean;
	OverrideTenantExternalUserExpirationPolicy?: boolean;
	Owner?: string;
	OwnerEmail?: string;
	OwnerLoginName?: string;
	OwnerName?: string;
	PWAEnabled?: number;
	ReadOnlyAccessPolicy?: boolean;
	ReadOnlyForBlockDownloadPolicy?: boolean;
	ReadOnlyForUnmanagedDevices?: boolean;
	RelatedGroupId?: any;
	RequestFilesLinkEnabled?: boolean;
	RequestFilesLinkExpirationInDays?: number;
	RestrictedAccessControl?: boolean;
	RestrictedAccessControlGroups?: { results: Array<any> };
	RestrictedAccessControlGroupsToAdd?: { results: Array<any> };
	RestrictedAccessControlGroupsToRemove?: { results: Array<any> };
	RestrictedToRegion?: number;
	SandboxedCodeActivationCapability?: number;
	SensitivityLabel?: any;
	SensitivityLabel2?: string;
	SetOwnerWithoutUpdatingSecondaryAdmin?: boolean;
	SharingAllowedDomainList?: string;
	SharingBlockedDomainList?: string;
	SharingCapability?: number;
	SharingDomainRestrictionMode?: number;
	SharingLockDownCanBeCleared?: boolean;
	SharingLockDownEnabled?: boolean;
	ShowPeoplePickerSuggestionsForGuestUsers?: boolean;
	SiteDefinedSharingCapability?: number;
	SiteId?: any;
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
	TitleTranslations?: { results: Array<SP.SPResourceEntry> };
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
	addAsGroupOwnerAndMember(groupId?: any, userId?: any, userPrincipalName?: string): Base.IBaseExecution<any>;
	addGroupMember(groupId?: any, memberId?: any, memberPrincipalName?: string): Base.IBaseExecution<any>;
	addGroupOwner(groupId?: any, ownerId?: any, ownerPrincipalName?: string): Base.IBaseExecution<any>;
	getGroupInfo(groupId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.GroupInfo>;
	removeAsGroupOwnerAndMember(groupId?: any, userId?: any): Base.IBaseExecution<any>;
	removeGroupMember(groupId?: any, memberId?: any): Base.IBaseExecution<any>;
	removeGroupOwner(groupId?: any, ownerId?: any): Base.IBaseExecution<any>;
	updateGroupProperties(groupId?: any, displayName?: string): Base.IBaseExecution<any>;
	updateGroupPropertiesBySiteId(groupId?: any, siteId?: any, displayName?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ISPOMalwareFile
**********************************************/
export interface ISPOMalwareFile extends SPOMalwareFileCollections, SPOMalwareFileMethods, Base.IBaseQuery<SPOMalwareFile, ISPOMalwareFileQuery> {

}

/*********************************************
* ISPOMalwareFileCollection
**********************************************/
export interface ISPOMalwareFileCollection extends Base.IBaseResults<SPOMalwareFile> {
	done?: (resolve: (value?: Array<SPOMalwareFile>) => void) => void;
}

/*********************************************
* ISPOMalwareFileQueryCollection
**********************************************/
export interface ISPOMalwareFileQueryCollection extends Base.IBaseResults<SPOMalwareFileOData> {
	done?: (resolve: (value?: Array<SPOMalwareFileOData>) => void) => void;
}

/*********************************************
* ISPOMalwareFileQuery
**********************************************/
export interface ISPOMalwareFileQuery extends SPOMalwareFileOData, SPOMalwareFileMethods {

}

/*********************************************
* SPOMalwareFile
**********************************************/
export interface SPOMalwareFile extends Base.IBaseResult, SPOMalwareFileProps, SPOMalwareFileCollections, SPOMalwareFileMethods {

}

/*********************************************
* SPOMalwareFileProps
**********************************************/
export interface SPOMalwareFileProps {
	FilePath?: SP.ResourcePath;
	MalwareInfo?: string;
	MalwareStatus?: any;
	SiteURL?: string;
}

/*********************************************
* SPOMalwareFilePropMethods
**********************************************/
export interface SPOMalwareFilePropMethods {
	File(): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
}

/*********************************************
* SPOMalwareFileCollections
**********************************************/
export interface SPOMalwareFileCollections extends SPOMalwareFilePropMethods {

}

/*********************************************
* SPOMalwareFileOData
**********************************************/
export interface SPOMalwareFileOData extends Base.IBaseResult, SPOMalwareFileProps, SPOMalwareFileMethods {
	File: SP.File & SP.FileCollections & SP.FileCollectionMethods;
}

/*********************************************
* SPOMalwareFileMethods
**********************************************/
export interface SPOMalwareFileMethods {
	getMalwareFileStream(): Base.IBaseExecution<any>;
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
* ISPOWebAppServicePrincipalPublic
**********************************************/
export interface ISPOWebAppServicePrincipalPublic extends SPOWebAppServicePrincipalPublicCollections, SPOWebAppServicePrincipalPublicMethods, Base.IBaseQuery<SPOWebAppServicePrincipalPublic, ISPOWebAppServicePrincipalPublicQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPublicCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPublicCollection extends Base.IBaseResults<SPOWebAppServicePrincipalPublic> {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPublic>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPublicQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPublicQueryCollection extends Base.IBaseResults<SPOWebAppServicePrincipalPublicOData> {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPublicOData>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPublicQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPublicQuery extends SPOWebAppServicePrincipalPublicOData, SPOWebAppServicePrincipalPublicMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPublic
**********************************************/
export interface SPOWebAppServicePrincipalPublic extends Base.IBaseResult, SPOWebAppServicePrincipalPublicProps, SPOWebAppServicePrincipalPublicCollections, SPOWebAppServicePrincipalPublicMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPublicProps
**********************************************/
export interface SPOWebAppServicePrincipalPublicProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPOWebAppServicePrincipalPublicPropMethods
**********************************************/
export interface SPOWebAppServicePrincipalPublicPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPublicCollections
**********************************************/
export interface SPOWebAppServicePrincipalPublicCollections extends SPOWebAppServicePrincipalPublicPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPublicOData
**********************************************/
export interface SPOWebAppServicePrincipalPublicOData extends Base.IBaseResult, SPOWebAppServicePrincipalPublicProps, SPOWebAppServicePrincipalPublicMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPublicMethods
**********************************************/
export interface SPOWebAppServicePrincipalPublicMethods {
	addCustomSpfx3rdPartyAppPrincipal(appId?: string, appUri?: string, clientSecret?: string): Base.IBaseExecution<any>;
	getCustomSpfx3rdPartyAppPrincipal(): Base.IBaseExecution<Microsoft.SharePoint.ClientSideComponent.Spfx3rdPartyCustomPrincipalInfo>;
	removeCustomSpfx3rdPartyAppPrincipal(): Base.IBaseExecution<any>;
	updateCustomSpfx3rdPartyAppPrincipalClientSecret(clientSecret?: string): Base.IBaseExecution<any>;
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
	AADAdminCenterEndpoint?: string;
	CdnDefaultEndpoint?: string;
	CFRMSGraphEndpoint?: string;
	MigrationAgentUrl?: string;
	MiniMavenEndpoint?: string;
	O365AdminCenterEndpoint?: string;
	O365MessageCenterEndpoint?: string;
	SPMigrationToolUrl?: string;
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
	DisableSelfServiceSiteCreation?: Microsoft.Online.SharePoint.TenantAdministration.DisableSelfServiceSiteCreation;
	EnableAutoNewsDigest?: Microsoft.Online.SharePoint.TenantAdministration.EnableAutoNewsDigest;
	IncludeAtAGlanceInShareEmails?: Microsoft.Online.SharePoint.TenantAdministration.IncludeAtAGlanceInShareEmails;
	MailFromAddress?: Microsoft.Online.SharePoint.TenantAdministration.MailFromAddress;
	MobileNotificationIsEnabledForSharepoint?: Microsoft.Online.SharePoint.TenantAdministration.MobileNotificationIsEnabledForSharepoint;
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
	AIBuilderEnabledInContentCenter?: number;
	AIBuilderSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	AIBuilderSiteList?: { results: Array<any> };
	AIBuilderSiteListFileName?: string;
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
	AllowSelectSGsInODBListInTenant?: { results: Array<string> };
	AllowSensitivityLabelOnRecords?: boolean;
	AmplifyAdminSettings?: string;
	AnyoneLinkTrackUsers?: boolean;
	AppBypassInformationBarriers?: boolean;
	ApplyAppEnforcedRestrictionsToAdHocRecipients?: boolean;
	AppOnlyBypassPeoplePickerPolicies?: boolean;
	ArchiveRedirectUrl?: string;
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
	BlockSendLabelMismatchEmail?: boolean;
	BlockUserInfoVisibility?: string;
	BlockUserInfoVisibilityInOneDrive?: number;
	BlockUserInfoVisibilityInSharePoint?: number;
	BonusStorageQuotaMB?: number;
	BusinessConnectivityServiceDisabled?: boolean;
	CommentsOnFilesDisabled?: boolean;
	CommentsOnListItemsDisabled?: boolean;
	CommentsOnSitePagesDisabled?: boolean;
	CompatibilityRange?: string;
	ConditionalAccessPolicy?: number;
	ConditionalAccessPolicyErrorHelpLink?: string;
	ContainerDefaultLinkToExistingAccess?: boolean;
	ContainerDefaultShareLinkRole?: number;
	ContainerDefaultShareLinkScope?: number;
	ContainerLoopDefaultShareLinkRole?: number;
	ContainerLoopDefaultShareLinkScope?: number;
	ContainerSharingCapability?: number;
	ContentTypeSyncSiteTemplatesList?: { results: Array<string> };
	CoreBlockGuestsAsSiteAdmin?: number;
	CoreDefaultLinkToExistingAccess?: boolean;
	CoreDefaultShareLinkRole?: number;
	CoreDefaultShareLinkScope?: number;
	CoreLoopDefaultSharingLinkRole?: number;
	CoreLoopDefaultSharingLinkScope?: number;
	CoreLoopSharingCapability?: number;
	CoreRequestFilesLinkEnabled?: boolean;
	CoreRequestFilesLinkExpirationInDays?: number;
	CoreSharingCapability?: number;
	CustomizedExternalSharingServiceUrl?: string;
	DefaultContentCenterSite?: Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker;
	DefaultLinkPermission?: number;
	DefaultODBMode?: string;
	DefaultSharingLinkType?: number;
	DelayDenyAddAndCustomizePagesEnforcement?: boolean;
	DenySelectSecurityGroupsInSPSitesList?: { results: Array<string> };
	DenySelectSGsInODBListInTenant?: { results: Array<string> };
	DisableAddToOneDrive?: boolean;
	DisableBackToClassic?: boolean;
	DisableCustomAppAuthentication?: boolean;
	DisabledModernListTemplateIds?: { results: Array<any> };
	DisableDocumentLibraryDefaultLabeling?: boolean;
	DisabledWebPartIds?: { results: Array<any> };
	DisableOutlookPSTVersionTrimming?: boolean;
	DisablePersonalListCreation?: boolean;
	DisableReportProblemDialog?: boolean;
	DisableSpacesActivation?: boolean;
	DisableVivaConnectionsAnalytics?: boolean;
	DisallowInfectedFileDownload?: boolean;
	DisplayNamesOfFileViewers?: boolean;
	DisplayNamesOfFileViewersInSpo?: boolean;
	DisplayStartASiteOption?: boolean;
	DocumentUnderstandingEnabled?: boolean;
	DocumentUnderstandingSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	DocumentUnderstandingSiteList?: { results: Array<any> };
	DocumentUnderstandingSiteListFileName?: string;
	EmailAttestationEnabled?: boolean;
	EmailAttestationReAuthDays?: number;
	EmailAttestationRequired?: boolean;
	EnableAIPIntegration?: boolean;
	EnableAutoExpirationVersionTrim?: boolean;
	EnableAutoNewsDigest?: boolean;
	EnableAzureADB2BIntegration?: boolean;
	EnabledFlightAllowAADB2BSkipCheckingOTP?: boolean;
	EnableGuestSignInAcceleration?: boolean;
	EnableMinimumVersionRequirement?: boolean;
	EnableMipSiteLabel?: boolean;
	EnablePromotedFileHandlers?: boolean;
	EnableRestrictedAccessControl?: boolean;
	EnableSensitivityLabelForPDF?: boolean;
	EnableSiteArchive?: boolean;
	EnableTenantRestrictionsInsights?: boolean;
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
	GuestSharingGroupAllowListInTenant?: string;
	GuestSharingGroupAllowListInTenantByPrincipalIdentity?: { results: Array<string> };
	HasAdminCompletedCUConfiguration?: boolean;
	HasIntelligentContentServicesCapability?: boolean;
	HasTopicExperiencesCapability?: boolean;
	HideDefaultThemes?: boolean;
	HideSyncButtonOnDocLib?: boolean;
	HideSyncButtonOnODB?: boolean;
	IBImplicitGroupBased?: boolean;
	ImageTaggingOption?: number;
	IncludeAtAGlanceInShareEmails?: boolean;
	InformationBarriersSuspension?: boolean;
	IPAddressAllowList?: string;
	IPAddressEnforcement?: boolean;
	IPAddressWACTokenLifetime?: number;
	IsAppBarTemporarilyDisabled?: boolean;
	IsCollabMeetingNotesFluidEnabled?: boolean;
	IsDataAccessInCardDesignerEnabled?: boolean;
	IsEnableAppAuthPopUpEnabled?: boolean;
	IsFluidEnabled?: boolean;
	IsHubSitesMultiGeoFlightEnabled?: boolean;
	IsLoopEnabled?: boolean;
	IsMnAFlightEnabled?: boolean;
	IsMultiGeo?: boolean;
	IsMultipleHomeSitesFlightEnabled?: boolean;
	IsMultipleVivaConnectionsFlightEnabled?: boolean;
	IsRansomwareProtectionEnabled?: boolean;
	IsUnmanagedSyncClientForTenantRestricted?: boolean;
	IsUnmanagedSyncClientRestrictionFlightEnabled?: boolean;
	IsVivaHomeFlightEnabled?: boolean;
	IsVivaHomeGAFlightEnabled?: boolean;
	IsWBFluidEnabled?: boolean;
	LabelMismatchEmailHelpLink?: string;
	LegacyAuthProtocolsEnabled?: boolean;
	LegacyBrowserAuthProtocolsEnabled?: boolean;
	LimitedAccessFileType?: number;
	MachineLearningCaptureEnabled?: boolean;
	MajorVersionLimit?: number;
	ManagedPathsForSiteCreation?: { results: Array<string> };
	MarkAllFilesAsSensitiveByDefault?: boolean;
	MarkNewFilesSensitiveByDefault?: number;
	MassDeleteNotificationDisabled?: boolean;
	MediaTranscription?: number;
	MediaTranscriptionAutomaticFeatures?: number;
	MobileFriendlyUrlEnabledInTenant?: boolean;
	NoAccessRedirectUrl?: string;
	NotificationsInOneDriveForBusinessEnabled?: boolean;
	NotificationsInSharePointEnabled?: boolean;
	NotifyOwnersWhenInvitationsAccepted?: boolean;
	NotifyOwnersWhenItemsReshared?: boolean;
	OCRAdminSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	OCRAdminSiteList?: { results: Array<any> };
	OCRAdminSiteListFileName?: string;
	OCRComplianceSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	OCRComplianceSiteList?: { results: Array<any> };
	OCRComplianceSiteListFileName?: string;
	OCRModeForAdminSites?: number;
	OCRModeForComplianceODBs?: number;
	OCRModeForComplianceSites?: number;
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
	OneDriveLoopSharingCapability?: number;
	OneDriveRequestFilesLinkEnabled?: boolean;
	OneDriveRequestFilesLinkExpirationInDays?: number;
	OneDriveStorageQuota?: number;
	OptOutOfGrooveBlock?: boolean;
	OptOutOfGrooveSoftBlock?: boolean;
	OrgNewsSiteUrl?: string;
	OrphanedPersonalSitesRetentionPeriod?: number;
	OwnerAnonymousNotification?: boolean;
	PermissiveBrowserFileHandlingOverride?: boolean;
	PrebuiltEnabled?: boolean;
	PrebuiltSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	PrebuiltSiteList?: { results: Array<any> };
	PrebuiltSiteListFileName?: string;
	PreventExternalUsersFromResharing?: boolean;
	ProvisionSharedWithEveryoneFolder?: boolean;
	PublicCdnAllowedFileTypes?: string;
	PublicCdnEnabled?: boolean;
	PublicCdnOrigins?: { results: Array<string> };
	ReactivationCost?: number;
	RecycleBinRetentionPeriod?: number;
	ReduceTempTokenLifetimeEnabled?: boolean;
	ReduceTempTokenLifetimeValue?: number;
	RequireAcceptingAccountMatchInvitedAccount?: boolean;
	RequireAnonymousLinksExpireInDays?: number;
	ResourceQuota?: number;
	ResourceQuotaAllocated?: number;
	RestrictedOneDriveLicense?: boolean;
	RestrictedSharePointLicense?: boolean;
	RootSiteUrl?: string;
	SearchResolveExactEmailOrUPN?: boolean;
	SharePointAddInsDisabled?: boolean;
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
	SpecialCharactersStateInFileFolderNames?: number;
	StartASiteFormUrl?: string;
	StopNew2010Workflows?: boolean;
	StopNew2013Workflows?: boolean;
	StorageQuota?: number;
	StorageQuotaAllocated?: number;
	StreamLaunchConfig?: number;
	StreamLaunchConfigLastUpdated?: any;
	StreamLaunchConfigUpdateCount?: number;
	SyncPrivacyProfileProperties?: boolean;
	SyntexBillingSubscriptionSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexBillingContext;
	SyntexExternalVideoSharingSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPremiumFeatureSettings;
	SyntexHighResolutionPlaybackSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPremiumFeatureSettings;
	SyntexInternalFeatureFlags?: { results: Array<SP.KeyValue> };
	SyntexMediaAnalyticsSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPremiumFeatureSettings;
	SyntexPaygFeatureActivations?: { results: Array<SP.KeyValue> };
	SyntexPlaybackTranscriptTranslationSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPremiumFeatureSettings;
	SyntexPowerAppsEnvironmentsContext?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPowerAppsEnvironmentsContext;
	TaxonomyTaggingEnabled?: boolean;
	TaxonomyTaggingSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	TaxonomyTaggingSiteList?: { results: Array<any> };
	TaxonomyTaggingSiteListFileName?: string;
	TlsTokenBindingPolicyValue?: number;
	TranslationEnabled?: boolean;
	TranslationSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	TranslationSiteList?: { results: Array<any> };
	TranslationSiteListFileName?: string;
	UnlicensedOneDriveForBusinessTenantMetricsData?: Microsoft.SharePoint.Administration.SPOUnlicensedODB.UnlicensedOdbTenantMetrics;
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
	TotalTenantArchiveFileSizeAggregation(): Base.IBaseExecution<Microsoft.SharePoint.Administration.Archiving.ArchiveFileSizeMetric> & Microsoft.SharePoint.Administration.Archiving.ArchiveFileSizeMetricCollections;
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
	TotalTenantArchiveFileSizeAggregation: Microsoft.SharePoint.Administration.Archiving.ArchiveFileSizeMetric & Microsoft.SharePoint.Administration.Archiving.ArchiveFileSizeMetricCollections;
}

/*********************************************
* TenantMethods
**********************************************/
export interface TenantMethods {
	acceptSyntexRepositoryTermsOfService(): Base.IBaseExecution<any>;
	addBrandFontPackage(creationInformation?: SP.FontPackageCreationParameters): Base.IBaseExecution<SP.FontPackage>;
	addHomeSite(homeSiteUrl?: string, order?: number, audiences?: Array<any>): Base.IBaseExecution<SP.TargetedSiteDetails>;
	addRecentAdminAction(payload?: Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRecentActionPayload): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRecentAction>;
	addRecentAdminActionReport(payload?: Microsoft.Online.SharePoint.TenantAdministration.RecentAdminActionReportPayload): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.RecentAdminActionReport>;
	addRecentAdminActions(payload?: Array<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRecentActionPayload>): Base.IBaseCollection<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRecentAction>;
	addSPORestrictedSearchAllowedList(siteIds?: Array<any>): Base.IBaseExecution<any>;
	addTenantAdminListItem(columnValues?: Array<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminListItemColumnValue>, listName?: string): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	addTenantAdminListView(parameters?: SP.ViewCreationInformation): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	addToOrgAssetsLibAndCdnV2(cdnType?: number, libUrl?: string, thumbnailUrl?: string, orgAssetType?: number, defaultOriginAdded?: boolean): Base.IBaseExecution<any>;
	addToOrgAssetsLibAndCdnWithType(cdnType?: number, libUrl?: string, thumbnailUrl?: string, orgAssetType?: number): Base.IBaseExecution<any>;
	archiveSiteById(siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	bootstrapPolicyAutomationResources(): Base.IBaseExecution<boolean>;
	checkTenantIntuneLicense(): Base.IBaseExecution<boolean>;
	checkTenantLicenses(licenses?: Array<string>): Base.IBaseExecution<boolean>;
	clearRestrictedAccessControlOneDrive(): Base.IBaseExecution<any>;
	clearRestrictedAccessControlSharePoint(): Base.IBaseExecution<any>;
	connectSiteToHubSiteById(siteUrl?: string, hubSiteId?: any): Base.IBaseExecution<any>;
	createPolicyDefinition(policyInputParameters?: Microsoft.Online.SharePoint.TenantAdministration.CreatePolicyRequest): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminPolicyDefinition>;
	createSite(siteCreationProperties?: Microsoft.Online.SharePoint.TenantAdministration.SiteCreationProperties): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	deletePolicyDefinition(itemId?: number): Base.IBaseExecution<any>;
	deleteRecentAdminActionReport(reportId?: number): Base.IBaseExecution<any>;
	deleteSPOContainerTypeById(containerTypeId?: any): Base.IBaseExecution<any>;
	disableCollaborationInsightsDataCollection(): Base.IBaseExecution<any>;
	downloadRansomwareImpactedAssetsReport(driveId?: string, fileName?: string, reportNameType?: number): Base.IBaseExecution<any>;
	downloadSharingInsights(queryMode?: number, insightsType?: number): Base.IBaseExecution<string>;
	downloadSPOContainers(active?: boolean): Base.IBaseExecution<any>;
	enableCollaborationInsightsDataCollection(): Base.IBaseExecution<any>;
	ensureBrandCenterFeature(): Base.IBaseExecution<any>;
	exportAdminListToCSV(viewXml?: string, listName?: string): Base.IBaseExecution<string>;
	exportCSVFile(timeZoneId?: number): Base.IBaseExecution<string>;
	exportToCSV(viewXml?: string, timeZoneId?: number): Base.IBaseExecution<string>;
	exportUnlicensedOneDriveForBusinessListToCSV(): Base.IBaseExecution<string>;
	getAdminListViews(): Base.IBaseCollection<SP.View, SP.ViewOData, Base.IBaseExecution & SP.ViewCollectionMethods> & Base.IBaseExecution & SP.ViewCollectionMethods;
	getBrandCenterConfiguration(): Base.IBaseExecution<SP.BrandCenterConfiguration>;
	getBrandFontPackages(): Base.IBaseCollection<SP.FontPackage> & SP.FontPackageCollectionMethods;
	getChatGptResponse(requestOptions?: Microsoft.SharePoint.Internal.ChatGptRequestOptions): Base.IBaseExecution<Microsoft.SharePoint.Internal.ChatGptResponse>;
	getCollaborationInsightsData(): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.CollaborationInsightsData>;
	getCollaborationInsightsOverview(): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.CollaborationInsightsOverview>;
	getFilteredSPListItems(columnName?: string, columnValue?: string, columnType?: string, listName?: string): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	getGptEmbeddings(requestOptions?: Microsoft.SharePoint.Internal.GptEmbeddingsRequestOptions): Base.IBaseExecution<Microsoft.SharePoint.Internal.GptEmbeddingsResponse>;
	getGptResponse(requestOptions?: Microsoft.SharePoint.Internal.GptRequestOptions): Base.IBaseExecution<Microsoft.SharePoint.Internal.GptResponse>;
	getHomeSites(): Base.IBaseCollection<SP.HomeSitesDetails>;
	getHomeSitesDetails(): Base.IBaseCollection<SP.HomeSitesDetails>;
	getIBVersionForTenant(): Base.IBaseExecution<string>;
	getIdleSessionSignOutForUnmanagedDevices(): Base.IBaseExecution<string>;
	getInsightsSummary(insightsScenario?: number, dataFileName?: string, content?: string, pageIndex?: number): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.InsightsSummaryResponse>;
	getOneDriveSiteSharingInsights(queryMode?: number): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.OneDriveSiteSharingInsights>;
	getOrgAssets(): Base.IBaseExecution<Microsoft.SharePoint.Administration.OrgAssets>;
	getPowerAppsEnvironments(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.PowerAppsEnvironment>;
	getRansomwareActivities(parameters?: SP.RenderListDataParameters): Base.IBaseExecution<any>;
	getRansomwareActivitiesOverview(eventId?: string): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRansomwareActivitiesOverview>;
	getRansomwareEvents(parameters?: SP.RenderListDataParameters): Base.IBaseExecution<any>;
	getRansomwareEventsOverview(): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRansomwareEventsOverview>;
	getSharePointSiteSharingInsights(queryMode?: number): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SharePointSiteSharingInsights>;
	getSiteAdministrators(siteId?: any): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SiteAdministratorsInfo>;
	getSiteHealthStatus(sourceUrl?: string): Base.IBaseExecution<SP.Publishing.PortalHealthStatus>;
	getSitePropertiesByUrl(url?: string, includeDetail?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>;
	getSitePropertiesFromSharePointByFilters(speFilter?: Microsoft.Online.SharePoint.TenantAdministration.SPOSitePropertiesEnumerableFilter): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollectionMethods;
	getSitesByState(states?: Array<number>): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	getSiteSecondaryAdministrators(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsInfo>;
	getSiteSubscriptionId(): Base.IBaseExecution<any>;
	getSiteThumbnailLogo(siteUrl?: string): Base.IBaseExecution<any>;
	getSPHSiteUrl(): Base.IBaseExecution<string>;
	getSPListItemCount(listName?: string): Base.IBaseExecution<number>;
	getSPListRootFolderProperties(listName?: string): Base.IBaseExecution<SP.PropertyValues>;
	getSPOAllWebTemplates(cultureName?: string, compatibilityLevel?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>;
	getSPOContainerByContainerId(containerId?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerProperties>;
	getSPOContainerByContainerSiteUrl(containerSiteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerProperties>;
	getSPOContainersByApplicationId(owningApplicationId?: any, paged?: boolean, pagingToken?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerCollection>;
	getSPOContainerTypeById(containerTypeId?: any, containerTenantType?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeProperties>;
	getSPOContainerTypeConfigurationByContainerTypeId(containerTypeId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeConfigurationProperties>;
	getSPOContainerTypes(containerTenantType?: number): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeProperties>;
	getSPODeletedContainers(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SPDeletedContainerProperties>;
	getSPORestrictedSearchAllowedList(): Base.IBaseCollection<string>;
	getSPORestrictedSearchMode(): Base.IBaseExecution<number>;
	getSPOSiteCreationSources(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SPOSiteCreationSource>;
	getSPOSyntexApplications(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SPSyntexApplicationProperties>;
	getSPOSyntexConsumingApplications(owningApplicationId?: any, applicationId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPSyntexApplicationProperties>;
	getSPOTenantAllWebTemplates(): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>;
	getSPOTenantWebTemplates(localeId?: number, compatibilityLevel?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>;
	getTargetedSitesDetails(): Base.IBaseCollection<SP.TargetedSiteDetails>;
	getTargetedSitesDetailsByUserId(userId?: string): Base.IBaseCollection<SP.TargetedSiteDetails>;
	getTenantAllOrCompatibleIBSegments(segments?: Array<any>): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.IBSegmentInfo>;
	getTopFilesSharingInsights(queryMode?: number): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.TopFilesSharingInsights>;
	getViewByDisplayName(viewName?: string, listName?: string): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	getVivaConnectionsLicense(): Base.IBaseExecution<SP.VivaConnectionsLicense>;
	grantHubSiteRightsById(hubSiteId?: any, principals?: Array<string>, grantedRights?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	hasValidEducationLicense(): Base.IBaseExecution<boolean>;
	isSyntexRepositoryTermsOfServiceAccepted(): Base.IBaseExecution<boolean>;
	newSPOContainerType(containerTypeProperties?: Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeProperties): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeProperties>;
	purgeContainer(containerId?: string): Base.IBaseExecution<any>;
	purgeSPODeletedContainerByContainerId(containerId?: string): Base.IBaseExecution<boolean>;
	purgeSPODeletedContainerByContainerSiteUrl(containerSiteUrl?: string): Base.IBaseExecution<boolean>;
	recentAdminActionReportIsAuditEnabled(): Base.IBaseExecution<boolean>;
	registerHubSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	registerHubSiteWithCreationInformation(siteUrl?: string, creationInformation?: SP.HubSiteCreationInformation): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	removeContainer(containerId?: string): Base.IBaseExecution<any>;
	removeDeletedSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeDeletedSitePreferId(siteUrl?: string, siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeFromOrgAssets(libUrl?: string, listId?: any): Base.IBaseExecution<any>;
	removeHomeSite(homeSiteUrl?: string): Base.IBaseExecution<any>;
	removeSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeSPHSite(): Base.IBaseExecution<string>;
	removeSPListItem(listItemId?: number, listName?: string): Base.IBaseExecution<any>;
	removeSPOContainerByContainerId(containerId?: string): Base.IBaseExecution<any>;
	removeSPOContainerByContainerSiteUrl(containerSiteUrl?: string): Base.IBaseExecution<any>;
	removeSPOContainerType(spDeletedContainerTypeProperties?: Microsoft.Online.SharePoint.TenantAdministration.SPDeletedContainerTypeProperties): Base.IBaseExecution<any>;
	removeSPORestrictedSearchAllowedList(siteIds?: Array<any>): Base.IBaseExecution<any>;
	removeTargetedSite(siteId?: any): Base.IBaseExecution<any>;
	removeTenantAdminListView(viewId?: string): Base.IBaseExecution<any>;
	renderActiveContainers(containerId?: string, viewXml?: string): Base.IBaseExecution<any>;
	renderAdminListData(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters, listName?: string): Base.IBaseExecution<any>;
	renderDeletedContainers(viewXml?: string): Base.IBaseExecution<any>;
	renderFilteredAdminListData(parameters?: SP.RenderListFilterDataParameters, listName?: string): Base.IBaseExecution<any>;
	renderFilteredAdminListDataByGroupId(groupId?: any): Base.IBaseExecution<any>;
	renderIBSegmentListDataAsStream(parameters?: SP.RenderListDataParameters, segments?: Array<any>, CascDelWarnMessage?: string, CustomAction?: string, DrillDown?: string, Field?: string, FieldInternalName?: string, Filter?: string, FilterData?: string, FilterData1?: string, FilterData10?: string, FilterData2?: string, FilterData3?: string, FilterData4?: string, FilterData5?: string, FilterData6?: string, FilterData7?: string, FilterData8?: string, FilterData9?: string, FilterField?: string, FilterField1?: string, FilterField10?: string, FilterField2?: string, FilterField3?: string, FilterField4?: string, FilterField5?: string, FilterField6?: string, FilterField7?: string, FilterField8?: string, FilterField9?: string, FilterFields?: string, FilterFields1?: string, FilterFields10?: string, FilterFields2?: string, FilterFields3?: string, FilterFields4?: string, FilterFields5?: string, FilterFields6?: string, FilterFields7?: string, FilterFields8?: string, FilterFields9?: string, FilterLookupId?: string, FilterLookupId1?: string, FilterLookupId10?: string, FilterLookupId2?: string, FilterLookupId3?: string, FilterLookupId4?: string, FilterLookupId5?: string, FilterLookupId6?: string, FilterLookupId7?: string, FilterLookupId8?: string, FilterLookupId9?: string, FilterOp?: string, FilterOp1?: string, FilterOp10?: string, FilterOp2?: string, FilterOp3?: string, FilterOp4?: string, FilterOp5?: string, FilterOp6?: string, FilterOp7?: string, FilterOp8?: string, FilterOp9?: string, FilterValue?: string, FilterValue1?: string, FilterValue10?: string, FilterValue2?: string, FilterValue3?: string, FilterValue4?: string, FilterValue5?: string, FilterValue6?: string, FilterValue7?: string, FilterValue8?: string, FilterValue9?: string, FilterValues?: string, FilterValues1?: string, FilterValues10?: string, FilterValues2?: string, FilterValues3?: string, FilterValues4?: string, FilterValues5?: string, FilterValues6?: string, FilterValues7?: string, FilterValues8?: string, FilterValues9?: string, GroupString?: string, HasOverrideSelectCommand?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsGroupRender?: string, IsXslView?: string, ListViewPageUrl?: string, OverrideRowLimit?: string, OverrideScope?: string, OverrideSelectCommand?: string, PageFirstRow?: string, PageLastRow?: string, QueryParams?: Array<SP.KeyValue>, RootFolder?: string, RootFolderUniqueId?: string, SortDir?: string, SortDir1?: string, SortDir10?: string, SortDir2?: string, SortDir3?: string, SortDir4?: string, SortDir5?: string, SortDir6?: string, SortDir7?: string, SortDir8?: string, SortDir9?: string, SortField?: string, SortField1?: string, SortField10?: string, SortField2?: string, SortField3?: string, SortField4?: string, SortField5?: string, SortField6?: string, SortField7?: string, SortField8?: string, SortField9?: string, SortFields?: string, SortFieldValues?: string, View?: string, ViewCount?: string, ViewId?: string, ViewPath?: string, WebPartId?: string, FilterIBSegmentsBasedOnAndCondition?: boolean): Base.IBaseExecution<any>;
	renderIBSegmentListFilterData(parameters?: SP.RenderListFilterDataParameters): Base.IBaseExecution<any>;
	renderOwnershipPolicyStorageSPList(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters): Base.IBaseExecution<any>;
	renderPolicyDefinitionList(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters): Base.IBaseExecution<any>;
	renderPolicyExecutionsHistory(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters): Base.IBaseExecution<any>;
	renderPolicyReport(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters): Base.IBaseExecution<any>;
	renderRecentAdminActionReport(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters): Base.IBaseExecution<any>;
	renderRecentAdminActions(parameters?: SP.RenderListDataParameters, overrideParameters?: SP.RenderListDataOverrideParameters, isAutoRefresh?: boolean): Base.IBaseExecution<any>;
	reorderTargetedSites(siteIds?: Array<any>): Base.IBaseCollection<SP.TargetedSiteDetails>;
	restoreContainer(containerId?: string): Base.IBaseExecution<any>;
	restoreDeletedSite(siteUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	restoreDeletedSiteById(siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	restoreDeletedSitePreferId(siteUrl?: string, siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	restoreSPODeletedContainerByContainerId(containerId?: string): Base.IBaseExecution<boolean>;
	restoreSPODeletedContainerByContainerSiteUrl(containerSiteUrl?: string): Base.IBaseExecution<boolean>;
	revokeHubSiteRightsById(hubSiteId?: any, principals?: Array<string>): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	sendEmail(siteUrl?: string, status?: number, customizedEmail?: boolean): Base.IBaseExecution<boolean>;
	setDefaultView(viewId?: string, listName?: string): Base.IBaseExecution<any>;
	setFileVersionPolicy(isAutoTrimEnabled?: boolean, majorVersionLimit?: number, expireVersionsAfterDays?: number): Base.IBaseExecution<any>;
	setIBSegmentsOnSite(siteId?: any, segments?: Array<any>, ibMode?: string): Base.IBaseExecution<string>;
	setIdleSessionSignOutForUnmanagedDevices(enabled?: boolean, warnAfter?: any, signOutAfter?: any): Base.IBaseExecution<boolean>;
	setJitDlpPolicyData(markAllFilesAsSensitiveByDefault?: boolean, odbSensitivityRefreshWindowInHours?: number): Base.IBaseExecution<any>;
	setOrgAssetsWithType(libUrl?: string, thumbnailUrl?: string, orgAssetType?: number): Base.IBaseExecution<any>;
	setSiteAdministrators(siteAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SiteAdministratorsFieldsData): Base.IBaseExecution<any>;
	setSiteSecondaryAdministrators(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): Base.IBaseExecution<any>;
	setSiteUserGroups(siteUserGroupsData?: Microsoft.Online.SharePoint.TenantAdministration.SiteUserGroupsData): Base.IBaseExecution<any>;
	setSPHSite(sphSiteUrl?: string): Base.IBaseExecution<string>;
	setSPHSiteWithConfiguration(sphSiteUrl?: string, configuration?: Microsoft.SharePoint.PortalAndOrgNews.HomeSiteConfigurationParam): Base.IBaseExecution<string>;
	setSPOContainerProperties(spContainerProperties?: Microsoft.Online.SharePoint.TenantAdministration.SPContainerProperties): Base.IBaseExecution<any>;
	setSPOContainerType(containerTypeProperties?: Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeProperties): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeProperties>;
	setSPOContainerTypeConfiguration(spContainerTypeConfigurationProperties?: Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeConfigurationProperties): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeConfigurationProperties>;
	setSPORestrictedSearchMode(mode?: number): Base.IBaseExecution<any>;
	setSyntexPaygFeatureActivation(featureName?: string, activationStatus?: string): Base.IBaseExecution<any>;
	swapSite(sourceUrl?: string, targetUrl?: string, archiveUrl?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	swapSiteWithSmartGestureOption(sourceUrl?: string, targetUrl?: string, archiveUrl?: string, includeSmartGestures?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	swapSiteWithSmartGestureOptionForce(sourceUrl?: string, targetUrl?: string, archiveUrl?: string, includeSmartGestures?: boolean, force?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	unarchiveSiteById(siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	unregisterHubSite(siteUrl?: string): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
	updateFileSearchVisibility(url?: string, isHidden?: boolean): Base.IBaseExecution<boolean>;
	updateGroupSiteProperties(groupId?: any, siteId?: any, updateType?: string, parameters?: Microsoft.Online.SharePoint.TenantAdministration.UpdateGroupSitePropertiesParameters): Base.IBaseExecution<string>;
	updatePolicyDefinition(itemId?: number, policyInputParameters?: Microsoft.Online.SharePoint.TenantAdministration.CreatePolicyRequest, policyOperation?: string): Base.IBaseExecution<any>;
	updateRansomwareActivity(listItemId?: number, columnValues?: Array<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminListItemColumnValue>): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRansomwareActivity>;
	updateRansomwareEvent(listItemId?: number, columnValues?: Array<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminListItemColumnValue>, forceResolveActivity?: boolean): Base.IBaseExecution<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminRansomwareEvent>;
	updateSiteActivityData(): Base.IBaseExecution<any>;
	updateTargetedSite(siteUrl?: string, configurationParam?: Microsoft.SharePoint.PortalAndOrgNews.HomeSiteConfigurationParam): Base.IBaseExecution<SP.TargetedSiteDetails>;
	updateTenantAdminListItem(listItemId?: number, columnValues?: Array<Microsoft.SharePoint.Administration.TenantAdmin.TenantAdminListItemColumnValue>, listName?: string): Base.IBaseExecution<any>;
	updateTenantAdminListView(viewId?: string, viewXml?: string): Base.IBaseExecution<any>;
	validateHomeSite(validationActionType?: number, siteUrl?: string): Base.IBaseExecution<any>;
	validateMultipleHomeSitesParameterExists(hasParameters?: boolean): Base.IBaseExecution<any>;
}

/*********************************************
* TopFilesSharingInsights
**********************************************/
export interface TopFilesSharingInsights {
	Anyone?: number;
	EndDate?: string;
	External?: number;
	FileName?: string;
	Internal?: number;
	IsMissing?: boolean;
	ItemName?: string;
	ItemType?: string;
	ItemURL?: string;
	TenantId?: any;
	SchemaVersion?: number;
	SecurityGroup?: number;
	SharePointGroup?: number;
	SiteId?: any;
	SiteUrl?: string;
	StartDate?: string;
	Total?: number;
	WebId?: any;
}

/*********************************************
* TopFilesSharingInsightsCollections
**********************************************/
export interface TopFilesSharingInsightsCollections {

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
