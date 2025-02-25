import { Base } from "../../";
import { SP } from "../../";
import { Microsoft } from "../../";

/*********************************************
* AcronymInformation
**********************************************/
export interface AcronymInformation {
	Acronym?: string;
	Color?: string;
	Lcid?: number;
	Text?: string;
}

/*********************************************
* AcronymInformationCollections
**********************************************/
export interface AcronymInformationCollections {

}

/*********************************************
* AmplifyRequestEndpoint
**********************************************/
export interface AmplifyRequestEndpoint {
	Data?: string;
	EndpointType?: number;
}

/*********************************************
* AmplifyRequestEndpointCollections
**********************************************/
export interface AmplifyRequestEndpointCollections {

}

/*********************************************
* AmplifyRequestParams
**********************************************/
export interface AmplifyRequestParams {
	Endpoints?: { results: Array<SP.Publishing.AmplifyRequestEndpoint> };
	UseNewPublishingStack?: boolean;
}

/*********************************************
* AmplifyRequestParamsCollections
**********************************************/
export interface AmplifyRequestParamsCollections {

}

/*********************************************
* AnnouncementAuthor
**********************************************/
export interface AnnouncementAuthor {
	Email?: string;
	ID?: string;
	Name?: string;
}

/*********************************************
* AnnouncementAuthorCollections
**********************************************/
export interface AnnouncementAuthorCollections {

}

/*********************************************
* AnnouncementsData
**********************************************/
export interface AnnouncementsData {
	CallToAction?: SP.Publishing.CallToAction;
	Dismissable?: boolean;
	ExpiresOn?: any;
	Icon?: SP.Publishing.Icon;
	ID?: any;
	Message?: string;
	PublishStartDate?: any;
	Title?: string;
}

/*********************************************
* AnnouncementsDataCollections
**********************************************/
export interface AnnouncementsDataCollections {

}

/*********************************************
* CallToAction
**********************************************/
export interface CallToAction {
	IsTranspileReady?: boolean;
	Text?: string;
	Url?: string;
}

/*********************************************
* CallToActionCollections
**********************************************/
export interface CallToActionCollections {

}

/*********************************************
* Icon
**********************************************/
export interface Icon {
	Color?: string;
	Name?: string;
}

/*********************************************
* IconCollections
**********************************************/
export interface IconCollections {

}

/*********************************************
* SitePageAuthoringMetadata
**********************************************/
export interface SitePageAuthoringMetadata {
	ClientOperation?: number;
	FluidContainerCustomId?: any;
	IsSingleUserSession?: boolean;
	RestoredFrom?: string;
	RestoreTo?: string;
	SequenceId?: number;
	SessionId?: any;
}

/*********************************************
* SitePageAuthoringMetadataCollections
**********************************************/
export interface SitePageAuthoringMetadataCollections {

}

/*********************************************
* AuthoringSchemaFeatureVersion
**********************************************/
export interface AuthoringSchemaFeatureVersion {
	Name?: string;
	Version?: string;
}

/*********************************************
* AuthoringSchemaFeatureVersionCollections
**********************************************/
export interface AuthoringSchemaFeatureVersionCollections {

}

/*********************************************
* BoostFieldsData
**********************************************/
export interface BoostFieldsData {
	BoostOrderType?: number;
	BoostUntilSeen?: boolean;
	Expiry?: any;
	Impressions?: number;
	NextItemId?: number;
	NextItemVersion?: number;
	PreviousItemId?: number;
	PreviousItemVersion?: number;
}

/*********************************************
* BoostFieldsDataCollections
**********************************************/
export interface BoostFieldsDataCollections {

}

/*********************************************
* SitePageBoostProperties
**********************************************/
export interface SitePageBoostProperties {
	BoostOrder?: number;
	BoostOrderVersion?: number;
	BoostUntilExpiryDate?: any;
	BoostUntilSeen?: boolean;
	BoostUntilUsersViewedCount?: number;
}

/*********************************************
* SitePageBoostPropertiesCollections
**********************************************/
export interface SitePageBoostPropertiesCollections {

}

/*********************************************
* SitePageFieldsData
**********************************************/
export interface SitePageFieldsData {
	AuthorByline?: { results: Array<string> };
	AuthoringMetadata?: SP.Publishing.SitePageAuthoringMetadata;
	BannerImageUrl?: string;
	BoostProperties?: SP.Publishing.SitePageBoostProperties;
	CallToAction?: string;
	CanvasContent1?: string;
	CanvasJson1?: string;
	Categories?: string;
	CoAuthState?: SP.Publishing.SitePageCoAuthState;
	Collaborators?: { results: Array<SP.Publishing.SitePageCollaborator> };
	Description?: string;
	EmailTranspileContent?: string;
	HiddenHighlightsMetadata?: string;
	HideListEditorMetadata?: string;
	LayoutWebpartsContent?: string;
	Modified?: any;
	PublishStartDate?: any;
	TeamsTranspileContent?: string;
	Title?: string;
	TopicHeader?: string;
	WebTranspileContent?: string;
}

/*********************************************
* SitePageFieldsDataCollections
**********************************************/
export interface SitePageFieldsDataCollections {

}

/*********************************************
* SitePageCoAuthState
**********************************************/
export interface SitePageCoAuthState {
	Action?: number;
	AuthoringSchemaFeatureVersions?: { results: Array<SP.Publishing.AuthoringSchemaFeatureVersion> };
	HasReachedMinorVersionsLimit?: boolean;
	IsNewSession?: boolean;
	IsPartitionFlushed?: boolean;
	LockAction?: number;
	LockDuration?: number;
	OverwriteExistingVersion?: boolean;
	SharedLockId?: string;
}

/*********************************************
* SitePageCoAuthStateCollections
**********************************************/
export interface SitePageCoAuthStateCollections {

}

/*********************************************
* SitePageCollaborator
**********************************************/
export interface SitePageCollaborator {
	DisplayName?: string;
	LoginName?: string;
	UserId?: number;
}

/*********************************************
* SitePageCollaboratorCollections
**********************************************/
export interface SitePageCollaboratorCollections {

}

/*********************************************
* CampaignPublicationFieldsData
**********************************************/
export interface CampaignPublicationFieldsData {
	EndpointEmail?: string;
	EndpointSharePoint?: string;
	EndpointTeams?: string;
	EndpointVivaEngage?: string;
	EndpointYammer?: string;
	PublicationMetadata?: string;
	PublicationStatus?: number;
}

/*********************************************
* CampaignPublicationFieldsDataCollections
**********************************************/
export interface CampaignPublicationFieldsDataCollections {

}

/*********************************************
* CampaignPublicationMailDraftData
**********************************************/
export interface CampaignPublicationMailDraftData {
	DraftId?: string;
	GroupUpn?: string;
}

/*********************************************
* CampaignPublicationMailDraftDataCollections
**********************************************/
export interface CampaignPublicationMailDraftDataCollections {

}

/*********************************************
* ChannelAnnouncement
**********************************************/
export interface ChannelAnnouncement {
	Author?: SP.Publishing.AnnouncementAuthor;
	CallToAction?: SP.Publishing.CallToAction;
	ChannelName?: string;
	Icon?: SP.Publishing.Icon;
	ID?: number;
	IsRead?: boolean;
	Message?: string;
	PublishStartDate?: string;
	Title?: string;
}

/*********************************************
* ChannelAnnouncementCollections
**********************************************/
export interface ChannelAnnouncementCollections {

}

/*********************************************
* CopyToParams
**********************************************/
export interface CopyToParams {
	AsNews?: boolean;
	AsPrivateAuthoringPage?: boolean;
	AsTemplate?: boolean;
	CanvasContentOnly?: boolean;
	ComponentJSONString?: string;
	CreateCopyForEdit?: boolean;
	CreateCopyWithTitleSuffix?: boolean;
	CreateIfMissing?: boolean;
	DeleteSourcePage?: boolean;
	DependencyPropertyTypesToDeepCopy?: { results: Array<number> };
	DestinationPageUniqueId?: any;
	DestinationType?: number;
	DestinationWebUrl?: string;
	ScenarioID?: number;
	ScenarioPayload?: string;
	SitePageFlags?: string;
}

/*********************************************
* CopyToParamsCollections
**********************************************/
export interface CopyToParamsCollections {

}

/*********************************************
* ProfileDateTime
**********************************************/
export interface ProfileDateTime {
	DateTimeType?: number;
	DateTimeValue?: any;
}

/*********************************************
* ProfileDateTimeCollections
**********************************************/
export interface ProfileDateTimeCollections {

}

/*********************************************
* DateTimeCustomProperty
**********************************************/
export interface DateTimeCustomProperty {
	CustomPropertyName?: string;
}

/*********************************************
* DateTimeCustomPropertyCollections
**********************************************/
export interface DateTimeCustomPropertyCollections {

}

/*********************************************
* EmailPublishingStatus
**********************************************/
export interface EmailPublishingStatus {
	DestinationURL?: string;
	ErrorCode?: number;
	Status?: number;
}

/*********************************************
* EmailPublishingStatusCollections
**********************************************/
export interface EmailPublishingStatusCollections {

}

/*********************************************
* Error
**********************************************/
export interface Error {
	Details?: { results: Array<string> };
}

/*********************************************
* ErrorCollections
**********************************************/
export interface ErrorCollections {

}

/*********************************************
* RepostPageFieldsData
**********************************************/
export interface RepostPageFieldsData {

}

/*********************************************
* RepostPageFieldsDataCollections
**********************************************/
export interface RepostPageFieldsDataCollections {

}

/*********************************************
* FeedVideoPageFieldsData
**********************************************/
export interface FeedVideoPageFieldsData {

}

/*********************************************
* FeedVideoPageFieldsDataCollections
**********************************************/
export interface FeedVideoPageFieldsDataCollections {

}

/*********************************************
* ViewData
**********************************************/
export interface ViewData {
	TotalHits?: number;
	TotalUsers?: number;
}

/*********************************************
* ViewDataCollections
**********************************************/
export interface ViewDataCollections {

}

/*********************************************
* ItemViewsAnalyticsData
**********************************************/
export interface ItemViewsAnalyticsData {
	Days?: { results: Array<SP.Publishing.TimeFrameStatistics> };
	Months?: { results: Array<SP.Publishing.TimeFrameStatistics> };
}

/*********************************************
* ItemViewsAnalyticsDataCollections
**********************************************/
export interface ItemViewsAnalyticsDataCollections {

}

/*********************************************
* TimeFrameStatistics
**********************************************/
export interface TimeFrameStatistics {
	Date?: any;
}

/*********************************************
* TimeFrameStatisticsCollections
**********************************************/
export interface TimeFrameStatisticsCollections {

}

/*********************************************
* PageMoveParams
**********************************************/
export interface PageMoveParams {
	DestinationWebUrl?: string;
	ShouldPublish?: boolean;
}

/*********************************************
* PageMoveParamsCollections
**********************************************/
export interface PageMoveParamsCollections {

}

/*********************************************
* PersonCore
**********************************************/
export interface PersonCore {
	AadObjectId?: string;
	DisplayName?: string;
	UserName?: string;
}

/*********************************************
* PersonCoreCollections
**********************************************/
export interface PersonCoreCollections {

}

/*********************************************
* PersonCustomProperty
**********************************************/
export interface PersonCustomProperty {
	CustomPropertyName?: string;
}

/*********************************************
* PersonCustomPropertyCollections
**********************************************/
export interface PersonCustomPropertyCollections {

}

/*********************************************
* PersonIdentity
**********************************************/
export interface PersonIdentity {
	AadObjectId?: string;
	DisplayName?: string;
	UserName?: string;
}

/*********************************************
* PersonIdentityCollections
**********************************************/
export interface PersonIdentityCollections {

}

/*********************************************
* PersonMagazineData
**********************************************/
export interface PersonMagazineData {
	AboutMe?: string;
	BackgroundImageUrl?: string;
	BackgroundImageX?: number;
	BackgroundImageY?: number;
	DepartmentName?: string;
	DisplayName?: string;
	Email?: string;
	HasEditPermission?: boolean;
	Office?: string;
	Phone?: string;
	PictureUrl?: string;
	Title?: string;
}

/*********************************************
* PersonMagazineDataCollections
**********************************************/
export interface PersonMagazineDataCollections {

}

/*********************************************
* PersonMagazineUserProfileDirectsData
**********************************************/
export interface PersonMagazineUserProfileDirectsData {
	DirectReports?: { results: Array<SP.Publishing.PersonMagazineUserProfile> };
}

/*********************************************
* PersonMagazineUserProfileDirectsDataCollections
**********************************************/
export interface PersonMagazineUserProfileDirectsDataCollections {

}

/*********************************************
* PersonMagazineUserProfile
**********************************************/
export interface PersonMagazineUserProfile {
	AadObjectId?: string;
	AboutMe?: string;
	AboutMeTruncated?: string;
	Assistant?: SP.Publishing.PersonCore;
	BirthDate?: SP.Publishing.ProfileDateTime;
	Birthday?: string;
	DateTimeCustomProperties?: { results: Array<SP.Publishing.DateTimeCustomProperty> };
	DepartmentName?: string;
	DisplayName?: string;
	Email?: string;
	Fax?: string;
	HasEditPermission?: boolean;
	HireDate?: SP.Publishing.ProfileDateTime;
	HomePhone?: string;
	Interest?: string;
	Lync?: string;
	MobilePhone?: string;
	Office?: string;
	OfficeLocation?: string;
	OneDriveUrl?: string;
	PastProjects?: string;
	PersonTypeCustomProperties?: { results: Array<SP.Publishing.PersonCustomProperty> };
	Phone?: string;
	PictureUrl?: string;
	PointPublishingPersonalSiteUrl?: string;
	Responsibilities?: string;
	Schools?: string;
	Skills?: string;
	SpsDepartment?: string;
	SpsJobTitle?: string;
	StringCustomProperties?: { results: Array<SP.KeyValue> };
	Title?: string;
	UserName?: string;
}

/*********************************************
* PersonMagazineUserProfileCollections
**********************************************/
export interface PersonMagazineUserProfileCollections {

}

/*********************************************
* PersonMagazineUserProfileData
**********************************************/
export interface PersonMagazineUserProfileData {
	ManagerChain?: { results: Array<SP.Publishing.PersonMagazineUserProfile> };
	Primary?: SP.Publishing.PersonMagazineUserProfile;
}

/*********************************************
* PersonMagazineUserProfileDataCollections
**********************************************/
export interface PersonMagazineUserProfileDataCollections {

}

/*********************************************
* PortalHealthStatusDetails
**********************************************/
export interface PortalHealthStatusDetails {
	ErrorReason?: string;
	HelpLink?: string;
	PortalHealthErrorCode?: number;
	Status?: number;
}

/*********************************************
* PortalHealthStatusDetailsCollections
**********************************************/
export interface PortalHealthStatusDetailsCollections {

}

/*********************************************
* PortalHealthStatus
**********************************************/
export interface PortalHealthStatus {
	Details?: { results: Array<SP.Publishing.PortalHealthStatusDetails> };
	Status?: number;
}

/*********************************************
* PortalHealthStatusCollections
**********************************************/
export interface PortalHealthStatusCollections {

}

/*********************************************
* PrePublishValidationsErrorCodesForEmail
**********************************************/
export interface PrePublishValidationsErrorCodesForEmail {
	EmailAddress?: string;
	ErrorCodes?: { results: Array<number> };
}

/*********************************************
* PrePublishValidationsErrorCodesForEmailCollections
**********************************************/
export interface PrePublishValidationsErrorCodesForEmailCollections {

}

/*********************************************
* PrePublishValidationsErrorCodesForSharePointSite
**********************************************/
export interface PrePublishValidationsErrorCodesForSharePointSite {
	ErrorCodes?: { results: Array<number> };
	SiteId?: string;
}

/*********************************************
* PrePublishValidationsErrorCodesForSharePointSiteCollections
**********************************************/
export interface PrePublishValidationsErrorCodesForSharePointSiteCollections {

}

/*********************************************
* PrePublishValidationsErrorCodesForTeams
**********************************************/
export interface PrePublishValidationsErrorCodesForTeams {
	AudienceId?: string;
	ErrorCodes?: { results: Array<number> };
	NumberOfImagesInPayload?: number;
}

/*********************************************
* PrePublishValidationsErrorCodesForTeamsCollections
**********************************************/
export interface PrePublishValidationsErrorCodesForTeamsCollections {

}

/*********************************************
* PrePublishValidationsErrorCodesForVivaEngage
**********************************************/
export interface PrePublishValidationsErrorCodesForVivaEngage {
	DestinationName?: string;
	DestinationType?: number;
	ErrorCodes?: { results: Array<number> };
	NumberOfImageAttachments?: number;
	VivaEngageDestinationV2?: SP.Publishing.VivaEngageDestinationV2;
}

/*********************************************
* PrePublishValidationsErrorCodesForVivaEngageCollections
**********************************************/
export interface PrePublishValidationsErrorCodesForVivaEngageCollections {

}

/*********************************************
* VivaEngageDestinationV2
**********************************************/
export interface VivaEngageDestinationV2 {
	DestinationName?: string;
	DestinationType?: number;
}

/*********************************************
* VivaEngageDestinationV2Collections
**********************************************/
export interface VivaEngageDestinationV2Collections {

}

/*********************************************
* PrePublishValidationsResponse
**********************************************/
export interface PrePublishValidationsResponse {
	ErrorCodes?: { results: Array<number> };
	PrePublishValidationsErrorCodesForEmails?: { results: Array<SP.Publishing.PrePublishValidationsErrorCodesForEmail> };
	PrePublishValidationsErrorCodesForSharePointSites?: { results: Array<SP.Publishing.PrePublishValidationsErrorCodesForSharePointSite> };
	PrePublishValidationsErrorCodesForTeams?: { results: Array<SP.Publishing.PrePublishValidationsErrorCodesForTeams> };
	PrePublishValidationsErrorCodesForVivaEngage?: SP.Publishing.PrePublishValidationsErrorCodesForVivaEngage;
	PrePublishValidationsErrorCodesForVivaEngageV2?: { results: Array<SP.Publishing.PrePublishValidationsErrorCodesForVivaEngage> };
}

/*********************************************
* PrePublishValidationsResponseCollections
**********************************************/
export interface PrePublishValidationsResponseCollections {

}

/*********************************************
* ProfileCoreProperties
**********************************************/
export interface ProfileCoreProperties {
	PictureUrl?: string;
	Title?: string;
}

/*********************************************
* ProfileCorePropertiesCollections
**********************************************/
export interface ProfileCorePropertiesCollections {

}

/*********************************************
* ProfileDirectsData
**********************************************/
export interface ProfileDirectsData {
	DirectReports?: { results: Array<SP.Publishing.ProfileCoreProperties> };
}

/*********************************************
* ProfileDirectsDataCollections
**********************************************/
export interface ProfileDirectsDataCollections {

}

/*********************************************
* ProfileData
**********************************************/
export interface ProfileData {
	ManagerChain?: { results: Array<SP.Publishing.ProfileCoreProperties> };
	Primary?: SP.Publishing.PersonMagazineUserProfile;
}

/*********************************************
* ProfileDataCollections
**********************************************/
export interface ProfileDataCollections {

}

/*********************************************
* ProfileFullProperties
**********************************************/
export interface ProfileFullProperties {
	AboutMe?: string;
	AboutMeTruncated?: string;
	Assistant?: SP.Publishing.PersonIdentity;
	BirthDate?: SP.Publishing.ProfileDateTime;
	DepartmentName?: string;
	Email?: string;
	Fax?: string;
	HasEditPermission?: boolean;
	HireDate?: SP.Publishing.ProfileDateTime;
	HomePhone?: string;
	Interest?: string;
	Lync?: string;
	MobilePhone?: string;
	Office?: string;
	OfficeLocation?: string;
	OneDriveUrl?: string;
	PastProjects?: string;
	Phone?: string;
	PointPublishingPersonalSiteUrl?: string;
	Responsibilities?: string;
	Schools?: string;
	Skills?: string;
	SpsDepartment?: string;
	SpsJobTitle?: string;
}

/*********************************************
* ProfileFullPropertiesCollections
**********************************************/
export interface ProfileFullPropertiesCollections {

}

/*********************************************
* ProfilePropertyViewEditPolicy
**********************************************/
export interface ProfilePropertyViewEditPolicy {
	IsDisabled?: boolean;
	IsRequired?: boolean;
	IsTaxonomic?: boolean;
	IsUserEditable?: boolean;
	IsVisibleOnEditor?: boolean;
	Privacy?: number;
	UserOverridePrivacy?: boolean;
}

/*********************************************
* ProfilePropertyViewEditPolicyCollections
**********************************************/
export interface ProfilePropertyViewEditPolicyCollections {

}

/*********************************************
* ProfileViewEditPolicies
**********************************************/
export interface ProfileViewEditPolicies {
	AboutMe?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Assistant?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Birthday?: SP.Publishing.ProfilePropertyViewEditPolicy;
	CellPhone?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Department?: SP.Publishing.ProfilePropertyViewEditPolicy;
	DisplayName?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Fax?: SP.Publishing.ProfilePropertyViewEditPolicy;
	HireDate?: SP.Publishing.ProfilePropertyViewEditPolicy;
	HomePhone?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Interests?: SP.Publishing.ProfilePropertyViewEditPolicy;
	JobTitle?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Location?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Office?: SP.Publishing.ProfilePropertyViewEditPolicy;
	PersonalSiteUrl?: SP.Publishing.ProfilePropertyViewEditPolicy;
	PictureUrl?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Projects?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Responsibilities?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Schools?: SP.Publishing.ProfilePropertyViewEditPolicy;
	SipAddress?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Skills?: SP.Publishing.ProfilePropertyViewEditPolicy;
	SpsDepartment?: SP.Publishing.ProfilePropertyViewEditPolicy;
	SpsJobTitle?: SP.Publishing.ProfilePropertyViewEditPolicy;
	WorkEmail?: SP.Publishing.ProfilePropertyViewEditPolicy;
	WorkPhone?: SP.Publishing.ProfilePropertyViewEditPolicy;
}

/*********************************************
* ProfileViewEditPoliciesCollections
**********************************************/
export interface ProfileViewEditPoliciesCollections {

}

/*********************************************
* PropertyValue
**********************************************/
export interface PropertyValue {
	TermId?: string;
	Value?: string;
}

/*********************************************
* PropertyValueCollections
**********************************************/
export interface PropertyValueCollections {

}

/*********************************************
* PublishingStatusResponse
**********************************************/
export interface PublishingStatusResponse {
	EmailPublishingStatus?: SP.Publishing.EmailPublishingStatus;
	LastTriedAt?: any;
	PrePublishValidationErrorCode?: number;
	PublishingStatus?: number;
	SharePointPublishingStatus?: { results: Array<SP.Publishing.SharePointPublishingStatusResponse> };
	TeamsPublishingStatus?: { results: Array<SP.Publishing.TeamsPublishingStatusResponse> };
	VivaEngagePublishingStatus?: SP.Publishing.VivaEngagePublishingStatus;
	VivaEngageV2PublishingStatus?: { results: Array<SP.Publishing.VivaEngagePublishingStatus> };
	YammerPublishingStatus?: { results: Array<SP.KeyValue> };
}

/*********************************************
* PublishingStatusResponseCollections
**********************************************/
export interface PublishingStatusResponseCollections {

}

/*********************************************
* SharePointPublishingStatusResponse
**********************************************/
export interface SharePointPublishingStatusResponse {
	SiteId?: string;
	Status?: SP.Publishing.SharePointPublishingStatus;
	WebId?: string;
}

/*********************************************
* SharePointPublishingStatusResponseCollections
**********************************************/
export interface SharePointPublishingStatusResponseCollections {

}

/*********************************************
* SharePointPublishingStatus
**********************************************/
export interface SharePointPublishingStatus {
	DestinationPageURL?: string;
	ErrorCode?: number;
	Status?: number;
}

/*********************************************
* SharePointPublishingStatusCollections
**********************************************/
export interface SharePointPublishingStatusCollections {

}

/*********************************************
* TeamsPublishingStatusResponse
**********************************************/
export interface TeamsPublishingStatusResponse {
	AudienceId?: string;
	Status?: SP.Publishing.TeamsPublishingStatus;
}

/*********************************************
* TeamsPublishingStatusResponseCollections
**********************************************/
export interface TeamsPublishingStatusResponseCollections {

}

/*********************************************
* TeamsPublishingStatus
**********************************************/
export interface TeamsPublishingStatus {
	AudienceId?: string;
	ErrorCode?: number;
	ErrorMessage?: string;
	HttpStatusCode?: number;
	Status?: number;
}

/*********************************************
* TeamsPublishingStatusCollections
**********************************************/
export interface TeamsPublishingStatusCollections {

}

/*********************************************
* VivaEngagePublishingStatus
**********************************************/
export interface VivaEngagePublishingStatus {
	DestinationId?: string;
	ErrorCode?: number;
	ErrorMessage?: string;
	Status?: number;
}

/*********************************************
* VivaEngagePublishingStatusCollections
**********************************************/
export interface VivaEngagePublishingStatusCollections {

}

/*********************************************
* PublishPublicationResponse
**********************************************/
export interface PublishPublicationResponse {
	ErrorCode?: number;
	Message?: string;
	Status?: boolean;
}

/*********************************************
* PublishPublicationResponseCollections
**********************************************/
export interface PublishPublicationResponseCollections {

}

/*********************************************
* RuleErrorDetails
**********************************************/
export interface RuleErrorDetails {
	errorHeaders?: { results: Array<string> };
	errors?: { results: Array<SP.Publishing.Error> };
}

/*********************************************
* RuleErrorDetailsCollections
**********************************************/
export interface RuleErrorDetailsCollections {

}

/*********************************************
* RuleResult
**********************************************/
export interface RuleResult {
	ActionToTake?: string;
	Details?: SP.Publishing.RuleErrorDetails;
	description?: string;
	LearnMoreLink?: string;
	ResultCount?: number;
	RuleType?: string;
	Status?: number;
	Title?: string;
}

/*********************************************
* RuleResultCollections
**********************************************/
export interface RuleResultCollections {

}

/*********************************************
* SchedulePublicationResponse
**********************************************/
export interface SchedulePublicationResponse {
	PublicationStatus?: number;
}

/*********************************************
* SchedulePublicationResponseCollections
**********************************************/
export interface SchedulePublicationResponseCollections {

}

/*********************************************
* SendTestEmailResponse
**********************************************/
export interface SendTestEmailResponse {
	ErrorCode?: number;
	Response?: boolean;
}

/*********************************************
* SendTestEmailResponseCollections
**********************************************/
export interface SendTestEmailResponseCollections {

}

/*********************************************
* SendTestTeamsMessageResponse
**********************************************/
export interface SendTestTeamsMessageResponse {
	ErrorCode?: number;
	Response?: boolean;
}

/*********************************************
* SendTestTeamsMessageResponseCollections
**********************************************/
export interface SendTestTeamsMessageResponseCollections {

}

/*********************************************
* SharePagePreviewByEmailFieldsData
**********************************************/
export interface SharePagePreviewByEmailFieldsData {
	message?: string;
	recipientEmails?: { results: Array<string> };
}

/*********************************************
* SharePagePreviewByEmailFieldsDataCollections
**********************************************/
export interface SharePagePreviewByEmailFieldsDataCollections {

}

/*********************************************
* SitePage3DFieldsData
**********************************************/
export interface SitePage3DFieldsData {
	SpaceContent?: string;
}

/*********************************************
* SitePage3DFieldsDataCollections
**********************************************/
export interface SitePage3DFieldsDataCollections {

}

/*********************************************
* SitePageDependencyMetadata
**********************************************/
export interface SitePageDependencyMetadata {
	DependencyItemPath?: string;
	IsInPageSiteAssetsFolder?: boolean;
	ListId?: any;
	RelatedWebParts?: { results: Array<any> };
	RelatedWebPartsDetails?: { results: Array<SP.Publishing.WebPartDetailsWrapper> };
	SiteId?: any;
	Type?: string;
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* SitePageDependencyMetadataCollections
**********************************************/
export interface SitePageDependencyMetadataCollections {

}

/*********************************************
* WebPartDetailsWrapper
**********************************************/
export interface WebPartDetailsWrapper {
	InstanceId?: any;
	IsInternal?: boolean;
	ManifestId?: any;
}

/*********************************************
* WebPartDetailsWrapperCollections
**********************************************/
export interface WebPartDetailsWrapperCollections {

}

/*********************************************
* SitePageStreamContent
**********************************************/
export interface SitePageStreamContent {

}

/*********************************************
* SitePageStreamContentCollections
**********************************************/
export interface SitePageStreamContentCollections {

}

/*********************************************
* SitePagStreamData
**********************************************/
export interface SitePagStreamData {
	CoAuthState?: SP.Publishing.SitePageCoAuthState;
	StreamContents?: { results: Array<SP.Publishing.SitePageStreamContent> };
}

/*********************************************
* SitePagStreamDataCollections
**********************************************/
export interface SitePagStreamDataCollections {

}

/*********************************************
* SitePageVersionInfoCollection
**********************************************/
export interface SitePageVersionInfoCollection {
	Created?: any;
	CreatedBy?: string;
}

/*********************************************
* SitePageVersionInfoCollectionCollections
**********************************************/
export interface SitePageVersionInfoCollectionCollections {

}

/*********************************************
* SitePageVersionInfo
**********************************************/
export interface SitePageVersionInfo {
	LastVersionCreated?: any;
	LastVersionCreatedBy?: string;
}

/*********************************************
* SitePageVersionInfoCollections
**********************************************/
export interface SitePageVersionInfoCollections {

}

/*********************************************
* SiteSharingEmailContext
**********************************************/
export interface SiteSharingEmailContext {
	CustomDescription?: string;
	CustomTitle?: string;
	Message?: string;
	Url?: string;
}

/*********************************************
* SiteSharingEmailContextCollections
**********************************************/
export interface SiteSharingEmailContextCollections {

}

/*********************************************
* StartCoAuthMetaData
**********************************************/
export interface StartCoAuthMetaData {
	AuthoringSchemaFeatureVersions?: { results: Array<SP.Publishing.AuthoringSchemaFeatureVersion> };
	ForceCheckin?: boolean;
	IsUserConsentProvidedForModerationStatus?: boolean;
}

/*********************************************
* StartCoAuthMetaDataCollections
**********************************************/
export interface StartCoAuthMetaDataCollections {

}

/*********************************************
* TaxonomicProperties
**********************************************/
export interface TaxonomicProperties {
	Interest?: { results: Array<SP.Publishing.PropertyValue> };
	PastProjects?: { results: Array<SP.Publishing.PropertyValue> };
	Responsibilities?: { results: Array<SP.Publishing.PropertyValue> };
	Schools?: { results: Array<SP.Publishing.PropertyValue> };
	Skills?: { results: Array<SP.Publishing.PropertyValue> };
}

/*********************************************
* TaxonomicPropertiesCollections
**********************************************/
export interface TaxonomicPropertiesCollections {

}

/*********************************************
* TaxonomyMetadata
**********************************************/
export interface TaxonomyMetadata {
	anchorId?: any;
	excludedTermset?: any;
	excludeKeyword?: boolean;
	isAddTerms?: boolean;
	isIncludeDeprecated?: boolean;
	isIncludePathData?: boolean;
	isIncludeUnavailable?: boolean;
	isSpanTermSets?: boolean;
	isSpanTermStores?: boolean;
	lcid?: number;
	sspList?: string;
	termSetList?: string;
}

/*********************************************
* TaxonomyMetadataCollections
**********************************************/
export interface TaxonomyMetadataCollections {

}

/*********************************************
* TextValueWithLanguage
**********************************************/
export interface TextValueWithLanguage {
	ColorSeed?: string;
	Lcid?: number;
	Text?: string;
}

/*********************************************
* TextValueWithLanguageCollections
**********************************************/
export interface TextValueWithLanguageCollections {

}

/*********************************************
* TopicPageFieldsData
**********************************************/
export interface TopicPageFieldsData {
	EntityId?: string;
	EntityRelations?: string;
	EntityType?: string;
	VerifiedTopicAllowedEditors?: string;
}

/*********************************************
* TopicPageFieldsDataCollections
**********************************************/
export interface TopicPageFieldsDataCollections {

}

/*********************************************
* ViewProgressAnalyticsData
**********************************************/
export interface ViewProgressAnalyticsData {
	PercentageViewed?: number;
}

/*********************************************
* ViewProgressAnalyticsDataCollections
**********************************************/
export interface ViewProgressAnalyticsDataCollections {

}

/*********************************************
* ApprovalRequestResponse
**********************************************/
export interface ApprovalRequestResponse {
	ApprovalStatus?: number;
	PublicationStatus?: number;
}

/*********************************************
* ApprovalRequestResponseCollections
**********************************************/
export interface ApprovalRequestResponseCollections {

}

/*********************************************
* ApprovalRequestCreationInfo
**********************************************/
export interface ApprovalRequestCreationInfo {
	Approvers?: { results: Array<string> };
	AwaitAll?: boolean;
	DistributionChannel?: { results: Array<string> };
	Important?: boolean;
	Message?: string;
	PublishOption?: string;
	SchedulePublishDate?: any;
}

/*********************************************
* ApprovalRequestCreationInfoCollections
**********************************************/
export interface ApprovalRequestCreationInfoCollections {

}

/*********************************************
* CampaignPublicationLoadMailDraftParam
**********************************************/
export interface CampaignPublicationLoadMailDraftParam {
	IsPreview?: boolean;
}

/*********************************************
* CampaignPublicationLoadMailDraftParamCollections
**********************************************/
export interface CampaignPublicationLoadMailDraftParamCollections {

}

/*********************************************
* CampaignPublicationResetEndpointParam
**********************************************/
export interface CampaignPublicationResetEndpointParam {
	EmailTranspileContent?: string;
	EngageTranspileContent?: string;
	ResetEndpoint?: { results: Array<string> };
	TeamsTranspileContent?: string;
}

/*********************************************
* CampaignPublicationResetEndpointParamCollections
**********************************************/
export interface CampaignPublicationResetEndpointParamCollections {

}

/*********************************************
* CampaignPublicationSaveMailDraftParam
**********************************************/
export interface CampaignPublicationSaveMailDraftParam {
	IsOpxContentModified?: boolean;
}

/*********************************************
* CampaignPublicationSaveMailDraftParamCollections
**********************************************/
export interface CampaignPublicationSaveMailDraftParamCollections {

}

/*********************************************
* CommunicationSiteCreationResponse
**********************************************/
export interface CommunicationSiteCreationResponse {
	SiteStatus?: number;
	SiteUrl?: string;
}

/*********************************************
* CommunicationSiteCreationResponseCollections
**********************************************/
export interface CommunicationSiteCreationResponseCollections {

}

/*********************************************
* CommunicationSiteCreationRequest
**********************************************/
export interface CommunicationSiteCreationRequest {
	AllowFileSharingForGuestUsers?: boolean;
	Classification?: string;
	Description?: string;
	lcid?: number;
	SensitivityLabel?: any;
	SensitivityLabel2?: string;
	SiteDesignId?: any;
	Title?: string;
	Url?: string;
	WebTemplateExtensionId?: any;
}

/*********************************************
* CommunicationSiteCreationRequestCollections
**********************************************/
export interface CommunicationSiteCreationRequestCollections {

}

/*********************************************
* PublishSiteInformation
**********************************************/
export interface PublishSiteInformation {
	SiteType?: number;
	SiteUrl?: string;
	Title?: string;
}

/*********************************************
* PublishSiteInformationCollections
**********************************************/
export interface PublishSiteInformationCollections {

}

/*********************************************
* FilePickerOptions
**********************************************/
export interface FilePickerOptions {
	BingSearchEnabled?: boolean;
	CentralAssetRepository?: Microsoft.SharePoint.Administration.OrgAssets;
	OrgAssets?: Microsoft.SharePoint.Administration.OrgAssets;
}

/*********************************************
* FilePickerOptionsCollections
**********************************************/
export interface FilePickerOptionsCollections {

}
