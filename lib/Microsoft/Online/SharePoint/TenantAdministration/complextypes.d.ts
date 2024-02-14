import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* AutoQuotaEnabled
**********************************************/
export interface AutoQuotaEnabled {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* AutoQuotaEnabledCollections
**********************************************/
export interface AutoQuotaEnabledCollections {

}

/*********************************************
* CommentsOnSitePagesDisabled
**********************************************/
export interface CommentsOnSitePagesDisabled {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* CommentsOnSitePagesDisabledCollections
**********************************************/
export interface CommentsOnSitePagesDisabledCollections {

}

/*********************************************
* CreatePolicyRequest
**********************************************/
export interface CreatePolicyRequest {
	isPreviewRun?: boolean;
	policyCustomName?: string;
	policyDefinitionDetails?: string;
	policyDescription?: string;
	policyFrequencyUnit?: number;
	policyFrequencyValue?: number;
	policyId?: any;
	policyTemplate?: number;
	policyType?: number;
}

/*********************************************
* CreatePolicyRequestCollections
**********************************************/
export interface CreatePolicyRequestCollections {

}

/*********************************************
* CustomFormUrl
**********************************************/
export interface CustomFormUrl {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* CustomFormUrlCollections
**********************************************/
export interface CustomFormUrlCollections {

}

/*********************************************
* DisableGroupify
**********************************************/
export interface DisableGroupify {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* DisableGroupifyCollections
**********************************************/
export interface DisableGroupifyCollections {

}

/*********************************************
* DisableSelfServiceSiteCreation
**********************************************/
export interface DisableSelfServiceSiteCreation {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* DisableSelfServiceSiteCreationCollections
**********************************************/
export interface DisableSelfServiceSiteCreationCollections {

}

/*********************************************
* EnableAutoNewsDigest
**********************************************/
export interface EnableAutoNewsDigest {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* EnableAutoNewsDigestCollections
**********************************************/
export interface EnableAutoNewsDigestCollections {

}

/*********************************************
* EsignatureThirdPartyProvidersInfo
**********************************************/
export interface EsignatureThirdPartyProvidersInfo {
	IsEnabled?: boolean;
	ProviderName?: string;
}

/*********************************************
* EsignatureThirdPartyProvidersInfoCollections
**********************************************/
export interface EsignatureThirdPartyProvidersInfoCollections {

}

/*********************************************
* GroupInfo
**********************************************/
export interface GroupInfo {
	GroupStatusInAAD?: number;
	SiteUrl?: string;
}

/*********************************************
* GroupInfoCollections
**********************************************/
export interface GroupInfoCollections {

}

/*********************************************
* HubSitePermission
**********************************************/
export interface HubSitePermission {
	DisplayName?: string;
	PrincipalName?: string;
	Rights?: number;
}

/*********************************************
* HubSitePermissionCollections
**********************************************/
export interface HubSitePermissionCollections {

}

/*********************************************
* IBSegmentInfo
**********************************************/
export interface IBSegmentInfo {
	DisplayName?: string;
	ObjectId?: any;
}

/*********************************************
* IBSegmentInfoCollections
**********************************************/
export interface IBSegmentInfoCollections {

}

/*********************************************
* IncludeAtAGlanceInShareEmails
**********************************************/
export interface IncludeAtAGlanceInShareEmails {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* IncludeAtAGlanceInShareEmailsCollections
**********************************************/
export interface IncludeAtAGlanceInShareEmailsCollections {

}

/*********************************************
* MailFromAddress
**********************************************/
export interface MailFromAddress {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* MailFromAddressCollections
**********************************************/
export interface MailFromAddressCollections {

}

/*********************************************
* MessagesFieldsData
**********************************************/
export interface MessagesFieldsData {
	bearToken?: string;
	environment?: string;
}

/*********************************************
* MessagesFieldsDataCollections
**********************************************/
export interface MessagesFieldsDataCollections {

}

/*********************************************
* MobileNotificationIsEnabledForSharepoint
**********************************************/
export interface MobileNotificationIsEnabledForSharepoint {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* MobileNotificationIsEnabledForSharepointCollections
**********************************************/
export interface MobileNotificationIsEnabledForSharepointCollections {

}

/*********************************************
* NewSiteManagedPath
**********************************************/
export interface NewSiteManagedPath {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* NewSiteManagedPathCollections
**********************************************/
export interface NewSiteManagedPathCollections {

}

/*********************************************
* NewSubsiteInModernOffForAll
**********************************************/
export interface NewSubsiteInModernOffForAll {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* NewSubsiteInModernOffForAllCollections
**********************************************/
export interface NewSubsiteInModernOffForAllCollections {

}

/*********************************************
* NewSubsiteInModernOffForModernTemplates
**********************************************/
export interface NewSubsiteInModernOffForModernTemplates {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* NewSubsiteInModernOffForModernTemplatesCollections
**********************************************/
export interface NewSubsiteInModernOffForModernTemplatesCollections {

}

/*********************************************
* NewTeamSiteManagedPath
**********************************************/
export interface NewTeamSiteManagedPath {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* NewTeamSiteManagedPathCollections
**********************************************/
export interface NewTeamSiteManagedPathCollections {

}

/*********************************************
* ParentSiteUrl
**********************************************/
export interface ParentSiteUrl {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* ParentSiteUrlCollections
**********************************************/
export interface ParentSiteUrlCollections {

}

/*********************************************
* PolicyOption
**********************************************/
export interface PolicyOption {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* PolicyOptionCollections
**********************************************/
export interface PolicyOptionCollections {

}

/*********************************************
* PowerAppsEnvironment
**********************************************/
export interface PowerAppsEnvironment {
	AllocatedAICredits?: number;
	DisplayName?: string;
	IsDefault?: boolean;
	Name?: string;
	PurchasedAICredits?: number;
}

/*********************************************
* PowerAppsEnvironmentCollections
**********************************************/
export interface PowerAppsEnvironmentCollections {

}

/*********************************************
* RecentAdminActionReportPayload
**********************************************/
export interface RecentAdminActionReportPayload {
	actions?: string;
	name?: string;
	queryEndDate?: any;
	queryStartDate?: any;
	reportType?: number;
	sites?: string;
	users?: string;
}

/*********************************************
* RecentAdminActionReportPayloadCollections
**********************************************/
export interface RecentAdminActionReportPayloadCollections {

}

/*********************************************
* RequireSecondaryContact
**********************************************/
export interface RequireSecondaryContact {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* RequireSecondaryContactCollections
**********************************************/
export interface RequireSecondaryContactCollections {

}

/*********************************************
* SecondaryAdministratorsFieldsData
**********************************************/
export interface SecondaryAdministratorsFieldsData {
	secondaryAdministratorEmails?: { results: Array<string> };
	secondaryAdministratorLoginNames?: { results: Array<string> };
	siteId?: any;
}

/*********************************************
* SecondaryAdministratorsFieldsDataCollections
**********************************************/
export interface SecondaryAdministratorsFieldsDataCollections {

}

/*********************************************
* SecondaryAdministratorsInfo
**********************************************/
export interface SecondaryAdministratorsInfo {
	email?: string;
	loginName?: string;
	name?: string;
	userPrincipalName?: string;
}

/*********************************************
* SecondaryAdministratorsInfoCollections
**********************************************/
export interface SecondaryAdministratorsInfoCollections {

}

/*********************************************
* ShowNextGenerationSyncClientOnTeamSite
**********************************************/
export interface ShowNextGenerationSyncClientOnTeamSite {
	IsHidden?: boolean;
	IsReadOnly?: boolean;
	ReadOnlyReasonCode?: number;
	Value?: boolean;
}

/*********************************************
* ShowNextGenerationSyncClientOnTeamSiteCollections
**********************************************/
export interface ShowNextGenerationSyncClientOnTeamSiteCollections {

}

/*********************************************
* ShowSelfServiceSiteCreation
**********************************************/
export interface ShowSelfServiceSiteCreation {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* ShowSelfServiceSiteCreationCollections
**********************************************/
export interface ShowSelfServiceSiteCreationCollections {

}

/*********************************************
* SiteAdministratorsFieldsData
**********************************************/
export interface SiteAdministratorsFieldsData {
	siteAdministrators?: { results: Array<string> };
	siteId?: any;
}

/*********************************************
* SiteAdministratorsFieldsDataCollections
**********************************************/
export interface SiteAdministratorsFieldsDataCollections {

}

/*********************************************
* SiteAdministratorsInfo
**********************************************/
export interface SiteAdministratorsInfo {
	email?: string;
	loginName?: string;
	name?: string;
	userPrincipalName?: string;
}

/*********************************************
* SiteAdministratorsInfoCollections
**********************************************/
export interface SiteAdministratorsInfoCollections {

}

/*********************************************
* SiteCohortsSummary
**********************************************/
export interface SiteCohortsSummary {
	ExternallySharedSitesCount?: number;
	GroupConnectedSitesCount?: number;
	InactiveSitesCount?: number;
	TotalSitesCount?: number;
}

/*********************************************
* SiteCohortsSummaryCollections
**********************************************/
export interface SiteCohortsSummaryCollections {

}

/*********************************************
* SiteCreationData
**********************************************/
export interface SiteCreationData {
	Count?: number;
	SiteCreationSourceGuid?: string;
}

/*********************************************
* SiteCreationDataCollections
**********************************************/
export interface SiteCreationDataCollections {

}

/*********************************************
* SiteCreationDefaultStorageQuota
**********************************************/
export interface SiteCreationDefaultStorageQuota {
	IsReadOnly?: boolean;
	Value?: number;
}

/*********************************************
* SiteCreationDefaultStorageQuotaCollections
**********************************************/
export interface SiteCreationDefaultStorageQuotaCollections {

}

/*********************************************
* SiteCreationNewUX
**********************************************/
export interface SiteCreationNewUX {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* SiteCreationNewUXCollections
**********************************************/
export interface SiteCreationNewUXCollections {

}

/*********************************************
* SiteCreationProperties
**********************************************/
export interface SiteCreationProperties {
	CompatibilityLevel?: number;
	Lcid?: number;
	Owner?: string;
	StorageMaximumLevel?: number;
	StorageWarningLevel?: number;
	Template?: string;
	TimeZoneId?: number;
	Title?: string;
	Url?: string;
	UserCodeMaximumLevel?: number;
	UserCodeWarningLevel?: number;
}

/*********************************************
* SiteCreationPropertiesCollections
**********************************************/
export interface SiteCreationPropertiesCollections {

}

/*********************************************
* SiteCreationSource
**********************************************/
export interface SiteCreationSource {
	IsSyncThresholdLimitReached?: boolean;
	LastRefreshTimeStamp?: any;
	SiteCreationData?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteCreationData> };
	SyncThresholdLimit?: number;
	TotalSitesCount?: number;
}

/*********************************************
* SiteCreationSourceCollections
**********************************************/
export interface SiteCreationSourceCollections {

}

/*********************************************
* SiteInfoForSitePicker
**********************************************/
export interface SiteInfoForSitePicker {
	Error?: string;
	SiteId?: any;
	SiteName?: string;
	Url?: string;
}

/*********************************************
* SiteInfoForSitePickerCollections
**********************************************/
export interface SiteInfoForSitePickerCollections {

}

/*********************************************
* SitePagesEnabled
**********************************************/
export interface SitePagesEnabled {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* SitePagesEnabledCollections
**********************************************/
export interface SitePagesEnabledCollections {

}

/*********************************************
* SPOSitePropertiesEnumerableFilter
**********************************************/
export interface SPOSitePropertiesEnumerableFilter {
	ArchiveStatus?: string;
	Filter?: string;
	GroupIdDefined?: number;
	IncludeDetail?: boolean;
	IncludePersonalSite?: number;
	StartIndex?: string;
	Template?: string;
}

/*********************************************
* SPOSitePropertiesEnumerableFilterCollections
**********************************************/
export interface SPOSitePropertiesEnumerableFilterCollections {

}

/*********************************************
* SiteStateProperties
**********************************************/
export interface SiteStateProperties {
	GroupSiteRelationship?: number;
	IsArchived?: boolean;
	IsSiteOnHold?: boolean;
	LockState?: number;
}

/*********************************************
* SiteStatePropertiesCollections
**********************************************/
export interface SiteStatePropertiesCollections {

}

/*********************************************
* SiteUserGroupInfo
**********************************************/
export interface SiteUserGroupInfo {
	userGroup?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo> };
}

/*********************************************
* SiteUserGroupInfoCollections
**********************************************/
export interface SiteUserGroupInfoCollections {

}

/*********************************************
* UserInfo
**********************************************/
export interface UserInfo {
	email?: string;
	loginName?: string;
	name?: string;
	userPrincipalName?: string;
}

/*********************************************
* UserInfoCollections
**********************************************/
export interface UserInfoCollections {

}

/*********************************************
* SiteUserGroupsData
**********************************************/
export interface SiteUserGroupsData {
	members?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo> };
	owners?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo> };
	siteId?: any;
	visitors?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo> };
}

/*********************************************
* SiteUserGroupsDataCollections
**********************************************/
export interface SiteUserGroupsDataCollections {

}

/*********************************************
* SmtpServer
**********************************************/
export interface SmtpServer {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* SmtpServerCollections
**********************************************/
export interface SmtpServerCollections {

}

/*********************************************
* SPContainerCollection
**********************************************/
export interface SPContainerCollection {
	ContainerCollection?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SPContainerProperties> };
	PagingToken?: string;
}

/*********************************************
* SPContainerCollectionCollections
**********************************************/
export interface SPContainerCollectionCollections {

}

/*********************************************
* SPContainerProperties
**********************************************/
export interface SPContainerProperties {
	AllowEditing?: boolean;
	AuthenticationContextName?: string;
	BlockDownloadPolicy?: boolean;
	ConditionalAccessPolicy?: number;
	ContainerApiUrl?: string;
	ContainerId?: string;
	ContainerName?: string;
	ContainerSiteUrl?: string;
	ContainerTypeId?: any;
	CreatedBy?: string;
	CreatedOn?: any;
	Description?: string;
	ExcludeBlockDownloadPolicyContainerOwners?: boolean;
	LimitedAccessFileType?: number;
	Managers?: { results: Array<string> };
	Owners?: { results: Array<string> };
	OwningApplicationId?: any;
	OwningApplicationName?: string;
	Readers?: { results: Array<string> };
	ReadOnlyForBlockDownloadPolicy?: boolean;
	ReadOnlyForUnmanagedDevices?: boolean;
	SensitivityLabel?: string;
	SharingAllowedDomainList?: string;
	SharingBlockedDomainList?: string;
	SharingDomainRestrictionMode?: number;
	Status?: string;
	StorageUsed?: number;
	Writers?: { results: Array<string> };
}

/*********************************************
* SPContainerPropertiesCollections
**********************************************/
export interface SPContainerPropertiesCollections {

}

/*********************************************
* SPContainerTypeConfigurationProperties
**********************************************/
export interface SPContainerTypeConfigurationProperties {
	ApplicationRedirectUrl?: string;
	Classification?: number;
	ContainerTypeId?: any;
	ContainerTypeName?: string;
	IsDiscoverablilityDisabled?: boolean;
	IsMoveDisabled?: boolean;
	IsRenameDisabled?: boolean;
	IsSharingRestricted?: boolean;
	OwningAppId?: any;
}

/*********************************************
* SPContainerTypeConfigurationPropertiesCollections
**********************************************/
export interface SPContainerTypeConfigurationPropertiesCollections {

}

/*********************************************
* SPContainerTypeProperties
**********************************************/
export interface SPContainerTypeProperties {
	AzureSubscriptionId?: any;
	ContainerTypeId?: any;
	CreationDate?: string;
	DisplayName?: string;
	ExpiryDate?: string;
	IsBillingProfileRequired?: boolean;
	OwningAppId?: any;
	OwningTenantId?: any;
	Region?: string;
	ResourceGroup?: string;
	SPContainerTypeBillingClassification?: number;
}

/*********************************************
* SPContainerTypePropertiesCollections
**********************************************/
export interface SPContainerTypePropertiesCollections {

}

/*********************************************
* SPDeletedContainerProperties
**********************************************/
export interface SPDeletedContainerProperties {
	ContainerId?: string;
	ContainerName?: string;
	CreatedOn?: any;
	DeletedOn?: any;
}

/*********************************************
* SPDeletedContainerPropertiesCollections
**********************************************/
export interface SPDeletedContainerPropertiesCollections {

}

/*********************************************
* SPDeletedContainerTypeProperties
**********************************************/
export interface SPDeletedContainerTypeProperties {
	ContainerTypeId?: any;
}

/*********************************************
* SPDeletedContainerTypePropertiesCollections
**********************************************/
export interface SPDeletedContainerTypePropertiesCollections {

}

/*********************************************
* SPListModernUXOff
**********************************************/
export interface SPListModernUXOff {
	IsHidden?: boolean;
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* SPListModernUXOffCollections
**********************************************/
export interface SPListModernUXOffCollections {

}

/*********************************************
* SPOSiteCreationSource
**********************************************/
export interface SPOSiteCreationSource {
	DisplayName?: string;
	Id?: string;
	Name?: string;
}

/*********************************************
* SPOSiteCreationSourceCollections
**********************************************/
export interface SPOSiteCreationSourceCollections {

}

/*********************************************
* SPSyntexApplicationProperties
**********************************************/
export interface SPSyntexApplicationProperties {
	ApplicationId?: any;
	ApplicationName?: string;
	Applications?: { results: Array<any> };
	AppOnlyPermissions?: { results: Array<string> };
	DelegatedPermissions?: { results: Array<string> };
	OwningApplicationId?: any;
	OwningApplicationName?: string;
}

/*********************************************
* SPSyntexApplicationPropertiesCollections
**********************************************/
export interface SPSyntexApplicationPropertiesCollections {

}

/*********************************************
* SyntexBillingContext
**********************************************/
export interface SyntexBillingContext {
	ActivationStatus?: number;
	AzureResourceId?: string;
	AzureSubscriptionState?: number;
	EnabledFeatures?: number;
	Location?: string;
	Updated?: any;
}

/*********************************************
* SyntexBillingContextCollections
**********************************************/
export interface SyntexBillingContextCollections {

}

/*********************************************
* SyntexPowerAppsEnvironmentsContext
**********************************************/
export interface SyntexPowerAppsEnvironmentsContext {
	Environments?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.PowerAppsEnvironmentContext> };
	TimerJobSyncDisabled?: boolean;
}

/*********************************************
* SyntexPowerAppsEnvironmentsContextCollections
**********************************************/
export interface SyntexPowerAppsEnvironmentsContextCollections {

}

/*********************************************
* PowerAppsEnvironmentContext
**********************************************/
export interface PowerAppsEnvironmentContext {
	DataverseInstanceUrl?: string;
	DisplayName?: string;
	IsTestEnvironment?: boolean;
	LastGetEnvironmentError?: string;
	Name?: string;
	UpdatedUTC?: any;
}

/*********************************************
* PowerAppsEnvironmentContextCollections
**********************************************/
export interface PowerAppsEnvironmentContextCollections {

}

/*********************************************
* SyntexPremiumFeatureSettings
**********************************************/
export interface SyntexPremiumFeatureSettings {
	SiteList?: { results: Array<any> };
	SiteListFileName?: string;
	Status?: number;
}

/*********************************************
* SyntexPremiumFeatureSettingsCollections
**********************************************/
export interface SyntexPremiumFeatureSettingsCollections {

}

/*********************************************
* TenantDefaultTimeZoneId
**********************************************/
export interface TenantDefaultTimeZoneId {
	IsReadOnly?: boolean;
	Value?: number;
}

/*********************************************
* TenantDefaultTimeZoneIdCollections
**********************************************/
export interface TenantDefaultTimeZoneIdCollections {

}

/*********************************************
* UpdateGroupSitePropertiesParameters
**********************************************/
export interface UpdateGroupSitePropertiesParameters {
	storageMaximumLevel?: number;
	storageWarningLevel?: number;
}

/*********************************************
* UpdateGroupSitePropertiesParametersCollections
**********************************************/
export interface UpdateGroupSitePropertiesParametersCollections {

}

/*********************************************
* UserVoiceForFeedbackEnabled
**********************************************/
export interface UserVoiceForFeedbackEnabled {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* UserVoiceForFeedbackEnabledCollections
**********************************************/
export interface UserVoiceForFeedbackEnabledCollections {

}

/*********************************************
* SPOTenantWebTemplate
**********************************************/
export interface SPOTenantWebTemplate {
	CompatibilityLevel?: number;
	Description?: string;
	DisplayCategory?: string;
	Id?: number;
	Lcid?: number;
	Name?: string;
	Title?: string;
}

/*********************************************
* SPOTenantWebTemplateCollections
**********************************************/
export interface SPOTenantWebTemplateCollections {

}
