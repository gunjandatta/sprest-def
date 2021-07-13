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
* NewPortalAsDefault
**********************************************/
export interface NewPortalAsDefault {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* NewPortalAsDefaultCollections
**********************************************/
export interface NewPortalAsDefaultCollections {

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
	secondaryAdministratorEmails?: Array<string>;
	secondaryAdministratorLoginNames?: Array<string>;
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
	SiteCreationData?: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteCreationData>;
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
	userGroup?: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo>;
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
	members?: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo>;
	owners?: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo>;
	siteId?: any;
	visitors?: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo>;
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
