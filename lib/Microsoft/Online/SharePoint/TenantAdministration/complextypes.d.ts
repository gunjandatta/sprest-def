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
	policyTags?: string;
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
* ErrorFacet
**********************************************/
export interface ErrorFacet {
	Code?: string;
	Message?: string;
}

/*********************************************
* ErrorFacetCollections
**********************************************/
export interface ErrorFacetCollections {

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
* columnsInfo
**********************************************/
export interface columnsInfo {
	columnName?: string;
	viewFieldName?: string;
}

/*********************************************
* columnsInfoCollections
**********************************************/
export interface columnsInfoCollections {

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
* MonthlyUsage
**********************************************/
export interface MonthlyUsage {
	CreatedDate?: string;
	PromotionGranted?: number;
	PromotionRemaining?: number;
	PromotionUsed?: number;
}

/*********************************************
* MonthlyUsageCollections
**********************************************/
export interface MonthlyUsageCollections {

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
* SettingDataProperty
**********************************************/
export interface SettingDataProperty {
	AvailableInGraph?: boolean;
	AvailableInPowerShell?: boolean;
	AvailableInSharePointAdminCenter?: boolean;
	Category?: number;
	Description?: string;
	SettingName?: string;
	SettingValue?: string;
}

/*********************************************
* SettingDataPropertyCollections
**********************************************/
export interface SettingDataPropertyCollections {

}

/*********************************************
* SharePointEmbeddedClientLogProperties
**********************************************/
export interface SharePointEmbeddedClientLogProperties {
	Identifier?: string;
	LogMessage?: string;
	LogType?: number;
	Operation?: number;
	OperationStatus?: number;
}

/*********************************************
* SharePointEmbeddedClientLogPropertiesCollections
**********************************************/
export interface SharePointEmbeddedClientLogPropertiesCollections {

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
	EnableAgreementsSolution?: boolean;
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
	ArchivedBy?: string;
	ArchivedTime?: any;
	ArchiveStatus?: string;
	Filter?: string;
	GroupIdDefined?: number;
	IncludeDetail?: boolean;
	IncludePersonalSite?: number;
	IncludeSystemUserSite?: boolean;
	IsAuthoritative?: boolean;
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
* SPAuditDataCollectionResponse
**********************************************/
export interface SPAuditDataCollectionResponse {
	DataCollectionStatus?: number;
	OptInDateTime?: any;
	OptOutDateTime?: any;
	ReportEntity?: number;
}

/*********************************************
* SPAuditDataCollectionResponseCollections
**********************************************/
export interface SPAuditDataCollectionResponseCollections {

}

/*********************************************
* SPContainerApplicationProperties
**********************************************/
export interface SPContainerApplicationProperties {
	ContainerTypeId?: any;
	IsGovernableByAdmin?: boolean;
	OwningApplicationId?: any;
	OwningApplicationName?: string;
}

/*********************************************
* SPContainerApplicationPropertiesCollections
**********************************************/
export interface SPContainerApplicationPropertiesCollections {

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
	ArchivedBy?: string;
	ArchiveStatus?: number;
	AuthenticationContextName?: string;
	BlockDownloadPolicy?: boolean;
	ClearRestrictedAccessControl?: boolean;
	ConditionalAccessPolicy?: number;
	ContainerApiUrl?: string;
	ContainerId?: string;
	ContainerName?: string;
	ContainerRedirectUrl?: string;
	ContainerSiteUrl?: string;
	ContainerTypeId?: any;
	CreatedBy?: string;
	CreatedOn?: any;
	Description?: string;
	EnableRestrictedAccessControl?: boolean;
	ExcludeBlockDownloadPolicyContainerOwners?: boolean;
	LastArchivedDateTime?: any;
	LimitedAccessFileType?: number;
	Managers?: { results: Array<string> };
	NewPrincipalOwnerIdentifier?: string;
	Owners?: { results: Array<string> };
	OwnersCount?: number;
	OwnershipType?: string;
	OwningApplicationId?: any;
	OwningApplicationName?: string;
	PrincipalOwnerIdentifier?: string;
	Readers?: { results: Array<string> };
	ReadOnlyForBlockDownloadPolicy?: boolean;
	ReadOnlyForUnmanagedDevices?: boolean;
	RestrictContentOrgWideSearch?: boolean;
	RestrictedAccessControlGroups?: { results: Array<any> };
	RestrictedAccessControlGroupsToAdd?: { results: Array<any> };
	RestrictedAccessControlGroupsToRemove?: { results: Array<any> };
	SensitivityLabel?: string;
	SharingAllowedDomainList?: string;
	SharingBlockedDomainList?: string;
	SharingDomainRestrictionMode?: number;
	Status?: string;
	StorageUsed?: number;
	TransferFromPrincipalOwnerIdentifier?: string;
	Writers?: { results: Array<string> };
}

/*********************************************
* SPContainerPropertiesCollections
**********************************************/
export interface SPContainerPropertiesCollections {

}

/*********************************************
* SPContainerFilterOrder
**********************************************/
export interface SPContainerFilterOrder {
	ArchiveStatus?: number;
	CreatedBeforeDays?: number;
	DeletedBeforeDays?: number;
	FilteringApplicationId?: string;
	FilteringApplicationName?: string;
	FilteringContainerTypeId?: string;
	FilteringField?: number;
	FilteringSensitivityLabels?: { results: Array<string> };
	OpticalCharacterRecognitionEnabled?: boolean;
	OwnersCount?: number;
	OwnershipType?: number;
	PrincipalOwnerIdentifier?: string;
	PublisherName?: string;
}

/*********************************************
* SPContainerFilterOrderCollections
**********************************************/
export interface SPContainerFilterOrderCollections {

}

/*********************************************
* SPContainerSearchParameters
**********************************************/
export interface SPContainerSearchParameters {
	SearchText?: string;
}

/*********************************************
* SPContainerSearchParametersCollections
**********************************************/
export interface SPContainerSearchParametersCollections {

}

/*********************************************
* SPContainerSortOrder
**********************************************/
export interface SPContainerSortOrder {
	Ascending?: boolean;
	SortingField?: number;
}

/*********************************************
* SPContainerSortOrderCollections
**********************************************/
export interface SPContainerSortOrderCollections {

}

/*********************************************
* SPContainerTypeBillingProperties
**********************************************/
export interface SPContainerTypeBillingProperties {
	AzureSubscriptionId?: any;
	BillingPolicyId?: any;
	Region?: string;
	ResourceGroup?: string;
}

/*********************************************
* SPContainerTypeBillingPropertiesCollections
**********************************************/
export interface SPContainerTypeBillingPropertiesCollections {

}

/*********************************************
* SPContainerTypeConfigurationProperties
**********************************************/
export interface SPContainerTypeConfigurationProperties {
	AnonymousLinkExpirationInDays?: number;
	ApplicationRedirectUrl?: string;
	Classification?: number;
	ContainerTypeId?: any;
	ContainerTypeName?: string;
	CopilotEmbeddedChatHosts?: { results: Array<string> };
	IsArchiveEnabled?: number;
	IsDiscoverablilityDisabled?: number;
	IsMoveDisabled?: number;
	IsRenameDisabled?: number;
	IsSharingRestricted?: number;
	OverrideTenantWhoCanShareAnonymousAllowList?: number;
	OverrideTenantWhoCanShareAuthenticatedGuestAllowList?: number;
	OwningAppId?: any;
	WhoCanShareAnonymousAllowList?: { results: Array<any> };
	WhoCanShareAuthenticatedGuestAllowList?: { results: Array<any> };
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
	ApplicationRedirectUrl?: string;
	AzureSubscriptionId?: any;
	BillingProperties?: Microsoft.Online.SharePoint.TenantAdministration.SPContainerTypeBillingProperties;
	ContainerTypeId?: any;
	CreationDate?: string;
	DisplayName?: string;
	ExpiryDate?: string;
	IsArchiveEnabled?: number;
	IsBillingProfileRequired?: boolean;
	IsGovernableByAdmin?: boolean;
	IsGovernableByAdminNullable?: number;
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
* SPContainerTypeStatus
**********************************************/
export interface SPContainerTypeStatus {
	BillingClassification?: number;
	ContainerTypeId?: any;
	IsActiveBillingProfile?: boolean;
	IsArchivable?: boolean;
}

/*********************************************
* SPContainerTypeStatusCollections
**********************************************/
export interface SPContainerTypeStatusCollections {

}

/*********************************************
* SPDataGovernanceInsightCreateParameters
**********************************************/
export interface SPDataGovernanceInsightCreateParameters {
	CountOfUsersMoreThan?: number;
	FileSensitivityLabelGUID?: string;
	FileSensitivityLabelName?: string;
	Name?: string;
	Privacy?: string;
	ReportEntity?: number;
	ReportType?: number;
	SiteSensitivityLabelGUID?: { results: Array<any> };
	Template?: { results: Array<number> };
	UserEmailList?: { results: Array<string> };
	UserIDList?: { results: Array<any> };
	Workload?: number;
}

/*********************************************
* SPDataGovernanceInsightCreateParametersCollections
**********************************************/
export interface SPDataGovernanceInsightCreateParametersCollections {

}

/*********************************************
* SPDataGovernanceInsightExportedReport
**********************************************/
export interface SPDataGovernanceInsightExportedReport {
	CreatedDateTime?: string;
	LabelName?: string;
	ReportContent?: string;
	ReportEntity?: string;
	ReportNameEEEU?: string;
	ReportNameSitePermissions?: string;
	ReportNameUserPermissions?: string;
	SharingLinkType?: string;
}

/*********************************************
* SPDataGovernanceInsightExportedReportCollections
**********************************************/
export interface SPDataGovernanceInsightExportedReportCollections {

}

/*********************************************
* SPDataGovernanceInsightMetadata
**********************************************/
export interface SPDataGovernanceInsightMetadata {
	ReportId?: any;
	Status?: string;
}

/*********************************************
* SPDataGovernanceInsightMetadataCollections
**********************************************/
export interface SPDataGovernanceInsightMetadataCollections {

}

/*********************************************
* SPDataGovernanceInsightQueryParameters
**********************************************/
export interface SPDataGovernanceInsightQueryParameters {
	IncludeWorkload?: boolean;
	ReportEntity?: number;
	Workload?: number;
}

/*********************************************
* SPDataGovernanceInsightQueryParametersCollections
**********************************************/
export interface SPDataGovernanceInsightQueryParametersCollections {

}

/*********************************************
* SPDataGovernanceInsightResponse
**********************************************/
export interface SPDataGovernanceInsightResponse {
	CountOfSitesInReport?: number;
	CountOfSitesInReportUserPermissions?: number;
	CountOfSitesInTenant?: number;
	CountOfSitesInTenantUserPermissions?: number;
	CreatedDateTime?: string;
	EEEUType?: string;
	InvalidUserEntries?: { results: Array<string> };
	LabelId?: any;
	LabelName?: string;
	PrivacyEEEU?: { results: Array<string> };
	PrivacySitePermissions?: string;
	ReportEndTimeEEEU?: string;
	ReportEndTimeSharingLink?: string;
	ReportEntity?: string;
	ReportFormat?: string;
	ReportId?: any;
	ReportNameEEEU?: string;
	ReportNameSitePermissions?: string;
	ReportNameUserPermissions?: string;
	ReportStartTimeEEEU?: string;
	ReportStartTimeSharingLink?: string;
	ReportType?: string;
	SensitivityEEEU?: { results: Array<string> };
	SensitivitySitePermissions?: { results: Array<string> };
	SharingLinkType?: string;
	SitesFoundEEEU?: number;
	SitesFoundSharingLink?: number;
	Status?: string;
	TemplatesEEEU?: { results: Array<string> };
	TemplatesSitePermissions?: { results: Array<string> };
	TriggeredDateTime?: string;
	UserEmailList?: { results: Array<string> };
	UserID?: any;
	UserIDList?: { results: Array<any> };
	UserLimit?: number;
	Variation?: string;
	Version?: string;
	Workload?: string;
}

/*********************************************
* SPDataGovernanceInsightResponseCollections
**********************************************/
export interface SPDataGovernanceInsightResponseCollections {

}

/*********************************************
* SPDataGovernanceOptInParameters
**********************************************/
export interface SPDataGovernanceOptInParameters {
	OptInStatus?: boolean;
	ReportEntity?: number;
}

/*********************************************
* SPDataGovernanceOptInParametersCollections
**********************************************/
export interface SPDataGovernanceOptInParametersCollections {

}

/*********************************************
* SPDataGovernanceSARStartSiteReviewResponse
**********************************************/
export interface SPDataGovernanceSARStartSiteReviewResponse {
	AdminComment?: string;
	Error?: Microsoft.Online.SharePoint.TenantAdministration.ErrorFacet;
	ReportEntity?: number;
	ReviewId?: any;
	ReviewInitiatedDateTime?: any;
	SiteId?: any;
	SiteName?: string;
	Status?: string;
}

/*********************************************
* SPDataGovernanceSARStartSiteReviewResponseCollections
**********************************************/
export interface SPDataGovernanceSARStartSiteReviewResponseCollections {

}

/*********************************************
* SPDataGovernanceSiteReviewsResponse
**********************************************/
export interface SPDataGovernanceSiteReviewsResponse {
	AdminComment?: string;
	ReportCreatedDateTime?: any;
	ReportEndDateTime?: any;
	ReportEntity?: number;
	ReviewCompletedDateTime?: any;
	ReviewerComment?: string;
	ReviewerEmail?: string;
	ReviewId?: any;
	ReviewInitiatedDateTime?: any;
	SiteId?: any;
	SiteName?: string;
	Status?: string;
}

/*********************************************
* SPDataGovernanceSiteReviewsResponseCollections
**********************************************/
export interface SPDataGovernanceSiteReviewsResponseCollections {

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
* SPOAppBillingProperties
**********************************************/
export interface SPOAppBillingProperties {
	ApplicationId?: any;
	AzureRegion?: string;
	IsActivated?: boolean;
	ResourceGroup?: string;
	SubscriptionId?: any;
	SubscriptionState?: string;
	UsageCharges?: string;
}

/*********************************************
* SPOAppBillingPropertiesCollections
**********************************************/
export interface SPOAppBillingPropertiesCollections {

}

/*********************************************
* SPOContainerQueryParams
**********************************************/
export interface SPOContainerQueryParams {
	FilterByColumnsList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SPContainerFilterOrder> };
	OrderByColumnsList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SPContainerSortOrder> };
	PagingToken?: string;
}

/*********************************************
* SPOContainerQueryParamsCollections
**********************************************/
export interface SPOContainerQueryParamsCollections {

}

/*********************************************
* SPOContentSecurityPolicyEntry
**********************************************/
export interface SPOContentSecurityPolicyEntry {
	Manual?: boolean;
	Modified?: any;
	Source?: string;
}

/*********************************************
* SPOContentSecurityPolicyEntryCollections
**********************************************/
export interface SPOContentSecurityPolicyEntryCollections {

}

/*********************************************
* SPOCopilotAgentInsightsCopilotAgentsOnSitesDetails
**********************************************/
export interface SPOCopilotAgentInsightsCopilotAgentsOnSitesDetails {
	AgentCreatedDate?: string;
	CopilotName?: string;
	CreatedBy?: string;
	ExternalSharing?: string;
	RestrictSiteAccessEnabled?: string;
	RestrictSiteDiscoveryEnabled?: string;
	Sensitivity?: string;
	SiteName?: string;
	SiteOwner?: string;
	Template?: string;
	URL?: string;
}

/*********************************************
* SPOCopilotAgentInsightsCopilotAgentsOnSitesDetailsCollections
**********************************************/
export interface SPOCopilotAgentInsightsCopilotAgentsOnSitesDetailsCollections {

}

/*********************************************
* SPOCopilotAgentInsightsReportMetadata
**********************************************/
export interface SPOCopilotAgentInsightsReportMetadata {
	CreatedDateTimeInUtc?: string;
	Id?: any;
	ReportPeriodInDays?: number;
	Status?: number;
}

/*********************************************
* SPOCopilotAgentInsightsReportMetadataCollections
**********************************************/
export interface SPOCopilotAgentInsightsReportMetadataCollections {

}

/*********************************************
* SPOCopilotAgentInsightsSiteDistribution
**********************************************/
export interface SPOCopilotAgentInsightsSiteDistribution {
	CopilotAgents?: number;
	Sites?: number;
	Template?: string;
}

/*********************************************
* SPOCopilotAgentInsightsSiteDistributionCollections
**********************************************/
export interface SPOCopilotAgentInsightsSiteDistributionCollections {

}

/*********************************************
* SPOCopilotAgentInsightsTopSitesDetails
**********************************************/
export interface SPOCopilotAgentInsightsTopSitesDetails {
	CopilotAgents?: number;
	ExternalSharing?: string;
	RestrictSiteAccessEnabled?: string;
	RestrictSiteDiscoveryEnabled?: string;
	Sensitivity?: string;
	SiteName?: string;
	SiteOwner?: string;
	Template?: string;
	URL?: string;
}

/*********************************************
* SPOCopilotAgentInsightsTopSitesDetailsCollections
**********************************************/
export interface SPOCopilotAgentInsightsTopSitesDetailsCollections {

}

/*********************************************
* SPOCopilotPromoUsage
**********************************************/
export interface SPOCopilotPromoUsage {
	IsCopilotPromoEligible?: boolean;
	IsCopilotPromoStatusEnabled?: boolean;
	MonthlyUsage?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.MonthlyUsage> };
}

/*********************************************
* SPOCopilotPromoUsageCollections
**********************************************/
export interface SPOCopilotPromoUsageCollections {

}

/*********************************************
* SPOFileVersionBatchDeleteJobProgress
**********************************************/
export interface SPOFileVersionBatchDeleteJobProgress {
	BatchDeleteMode?: number;
	CompleteTimeInUTC?: any;
	DeleteOlderThan?: any;
	ErrorMessage?: string;
	FilesProcessed?: number;
	FileTypeSelections?: string;
	LastProcessTimeInUTC?: any;
	ListsProcessed?: number;
	ListsSynced?: number;
	ListSyncFailed?: number;
	MajorVersionLimit?: number;
	MajorWithMinorVersionsLimit?: number;
	RequestTimeInUTC?: any;
	Status?: string;
	StorageReleasedInBytes?: number;
	SyncListPolicy?: boolean;
	Url?: string;
	VersionsDeleted?: number;
	VersionsFailed?: number;
	VersionsProcessed?: number;
	WorkItemId?: any;
}

/*********************************************
* SPOFileVersionBatchDeleteJobProgressCollections
**********************************************/
export interface SPOFileVersionBatchDeleteJobProgressCollections {

}

/*********************************************
* SPOFileVersionExpirationReportJobProgress
**********************************************/
export interface SPOFileVersionExpirationReportJobProgress {
	ErrorMessage?: string;
	ReportUrl?: string;
	Status?: string;
	Url?: string;
}

/*********************************************
* SPOFileVersionExpirationReportJobProgressCollections
**********************************************/
export interface SPOFileVersionExpirationReportJobProgressCollections {

}

/*********************************************
* SPOFileVersionFileTypePolicySettings
**********************************************/
export interface SPOFileVersionFileTypePolicySettings {
	EnableAutoExpirationVersionTrim?: boolean;
	ExpireVersionsAfter?: any;
	Extensions?: { results: Array<string> };
	MajorVersionLimit?: number;
	MajorWithMinorVersionsLimit?: number;
	Name?: string;
}

/*********************************************
* SPOFileVersionFileTypePolicySettingsCollections
**********************************************/
export interface SPOFileVersionFileTypePolicySettingsCollections {

}

/*********************************************
* SPOFileVersionPolicySettings
**********************************************/
export interface SPOFileVersionPolicySettings {
	EnableAutoExpirationVersionTrim?: boolean;
	ExpireVersionsAfterDays?: number;
	FileTypesForVersionExpiration?: { results: Array<string> };
	MajorVersionLimit?: number;
	MajorWithMinorVersionsLimit?: number;
	MinorVersionsEnabled?: boolean;
	VersioningEnabled?: boolean;
	VersionPolicyFileTypeOverride?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SPOFileVersionFileTypePolicySettings> };
}

/*********************************************
* SPOFileVersionPolicySettingsCollections
**********************************************/
export interface SPOFileVersionPolicySettingsCollections {

}

/*********************************************
* SPOInsightsReportMetadata
**********************************************/
export interface SPOInsightsReportMetadata {
	CreatedDateTimeInUtc?: string;
	Id?: any;
	Status?: number;
}

/*********************************************
* SPOInsightsReportMetadataCollections
**********************************************/
export interface SPOInsightsReportMetadataCollections {

}

/*********************************************
* SPOListParameters
**********************************************/
export interface SPOListParameters {
	Id?: any;
	Title?: string;
}

/*********************************************
* SPOListParametersCollections
**********************************************/
export interface SPOListParametersCollections {

}

/*********************************************
* SPOM365AgentInsightsM365AgentsOnSitesDetails
**********************************************/
export interface SPOM365AgentInsightsM365AgentsOnSitesDetails {
	AgentID?: string;
	AgentName?: string;
	AgentType?: string;
	AgentVersion?: string;
	ExternalSharing?: string;
	RequestVolume?: number;
	RestrictSiteAccessEnabled?: string;
	RestrictSiteDiscoveryEnabled?: string;
	Sensitivity?: string;
	SiteID?: string;
	SiteName?: string;
	SiteOwner?: string;
	SiteType?: string;
	SiteURL?: string;
	TotalAgents?: number;
	TotalRequestVolume?: number;
}

/*********************************************
* SPOM365AgentInsightsM365AgentsOnSitesDetailsCollections
**********************************************/
export interface SPOM365AgentInsightsM365AgentsOnSitesDetailsCollections {

}

/*********************************************
* SPOM365AgentInsightsReportMetadata
**********************************************/
export interface SPOM365AgentInsightsReportMetadata {
	CreatedDateTimeInUtc?: string;
	Id?: any;
	ReportPeriodInDays?: number;
	Status?: number;
}

/*********************************************
* SPOM365AgentInsightsReportMetadataCollections
**********************************************/
export interface SPOM365AgentInsightsReportMetadataCollections {

}

/*********************************************
* SPOM365AgentInsightsSiteDistributionDetails
**********************************************/
export interface SPOM365AgentInsightsSiteDistributionDetails {
	Agents?: number;
	RequestVolume?: number;
	Sites?: number;
	Template?: string;
}

/*********************************************
* SPOM365AgentInsightsSiteDistributionDetailsCollections
**********************************************/
export interface SPOM365AgentInsightsSiteDistributionDetailsCollections {

}

/*********************************************
* SPORestrictedContentDiscoverabilitySiteDetails
**********************************************/
export interface SPORestrictedContentDiscoverabilitySiteDetails {
	LastModified?: any;
	SiteOwnerEmail?: string;
	SiteTitle?: string;
	SiteUrl?: string;
	TimeCreated?: any;
}

/*********************************************
* SPORestrictedContentDiscoverabilitySiteDetailsCollections
**********************************************/
export interface SPORestrictedContentDiscoverabilitySiteDetailsCollections {

}

/*********************************************
* SPOServicePrioritizationAppRegistrations
**********************************************/
export interface SPOServicePrioritizationAppRegistrations {
	Registrations?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SPOServicePrioritizationAppRegistration> };
}

/*********************************************
* SPOServicePrioritizationAppRegistrationsCollections
**********************************************/
export interface SPOServicePrioritizationAppRegistrationsCollections {

}

/*********************************************
* SPOServicePrioritizationAppRegistration
**********************************************/
export interface SPOServicePrioritizationAppRegistration {
	AppId?: string;
	Enabled?: boolean;
	PolicyId?: string;
	QuotaMultiplier?: number;
}

/*********************************************
* SPOServicePrioritizationAppRegistrationCollections
**********************************************/
export interface SPOServicePrioritizationAppRegistrationCollections {

}

/*********************************************
* SPOServicePrioritizationBillingPayload
**********************************************/
export interface SPOServicePrioritizationBillingPayload {
	AzureRegion?: string;
	AzureSubscription?: string;
	Feature?: string;
	FriendlyName?: string;
	IdentityId?: string;
	IdentityType?: string;
	PolicyId?: string;
	ResourceGroup?: string;
	Scope?: string;
	Service?: string;
	Tags?: string;
}

/*********************************************
* SPOServicePrioritizationBillingPayloadCollections
**********************************************/
export interface SPOServicePrioritizationBillingPayloadCollections {

}

/*********************************************
* SPOServicePrioritizationPolicyFromTenantStore
**********************************************/
export interface SPOServicePrioritizationPolicyFromTenantStore {
	AzureRegion?: string;
	AzureSubscriptionId?: any;
	FriendlyName?: string;
	PolicyId?: any;
	ResourceGroup?: string;
}

/*********************************************
* SPOServicePrioritizationPolicyFromTenantStoreCollections
**********************************************/
export interface SPOServicePrioritizationPolicyFromTenantStoreCollections {

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
* SPSitePageCopyJobProgress
**********************************************/
export interface SPSitePageCopyJobProgress {
	ErrorMessage?: string;
	JobState?: string;
	NewPageUrl?: string;
	SourcePageName?: string;
	StatusMessage?: string;
	WorkItemId?: any;
}

/*********************************************
* SPSitePageCopyJobProgressCollections
**********************************************/
export interface SPSitePageCopyJobProgressCollections {

}

/*********************************************
* SPSitePage
**********************************************/
export interface SPSitePage {
	CreatedBy?: string;
	CreatedDateTime?: any;
	LastModifiedDateTime?: any;
	Name?: string;
	Title?: string;
	UniqueId?: any;
}

/*********************************************
* SPSitePageCollections
**********************************************/
export interface SPSitePageCollections {

}

/*********************************************
* SPSyntexApplicationProperties
**********************************************/
export interface SPSyntexApplicationProperties {
	ApplicationId?: any;
	ApplicationName?: string;
	Applications?: { results: Array<any> };
	AppOnlyPermissions?: { results: Array<string> };
	CopilotEmbeddedChatHosts?: { results: Array<string> };
	DelegatedPermissions?: { results: Array<string> };
	OverrideTenantSharingCapability?: boolean;
	OverrideTenantSharingCapabilityNullable?: number;
	OwningApplicationId?: any;
	OwningApplicationName?: string;
	SharingCapability?: number;
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
* SyntexCheckManagementAllowedResponse
**********************************************/
export interface SyntexCheckManagementAllowedResponse {
	allowedBillingOnly?: boolean;
	allowedLicenseOrBilling?: boolean;
}

/*********************************************
* SyntexCheckManagementAllowedResponseCollections
**********************************************/
export interface SyntexCheckManagementAllowedResponseCollections {

}

/*********************************************
* SyntexFeatureScopeSettingsValues
**********************************************/
export interface SyntexFeatureScopeSettingsValues {
	Enabled?: boolean;
	FileName?: string;
	SiteScopingMode?: number;
}

/*********************************************
* SyntexFeatureScopeSettingsValuesCollections
**********************************************/
export interface SyntexFeatureScopeSettingsValuesCollections {

}

/*********************************************
* SyntexGetModifiedListResponse
**********************************************/
export interface SyntexGetModifiedListResponse {
	IgnoredUrlsList?: { results: Array<string> };
	ModifiedSelectedSitesList?: { results: Array<any> };
}

/*********************************************
* SyntexGetModifiedListResponseCollections
**********************************************/
export interface SyntexGetModifiedListResponseCollections {

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
