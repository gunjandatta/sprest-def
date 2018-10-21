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
* ProfileDateTime
**********************************************/
export interface ProfileDateTime {
	DateTimeType?: number;
	DateTimeValue?: any;
}

/*********************************************
* DateTimeCustomProperty
**********************************************/
export interface DateTimeCustomProperty {
	CustomPropertyName?: string;
}

/*********************************************
* ViewData
**********************************************/
export interface ViewData {
	TotalHits?: number;
	TotalUsers?: number;
}

/*********************************************
* ItemViewsAnalyticsData
**********************************************/
export interface ItemViewsAnalyticsData {
	Days?: Array<SP.Publishing.TimeFrameStatistics>;
	Months?: Array<SP.Publishing.TimeFrameStatistics>;
}

/*********************************************
* TimeFrameStatistics
**********************************************/
export interface TimeFrameStatistics {
	Date?: any;
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
* PersonCustomProperty
**********************************************/
export interface PersonCustomProperty {
	CustomPropertyName?: string;
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
* PersonMagazineUserProfileDirectsData
**********************************************/
export interface PersonMagazineUserProfileDirectsData {
	DirectReports?: Array<SP.Publishing.PersonMagazineUserProfile>;
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
	DateTimeCustomProperties?: Array<SP.Publishing.DateTimeCustomProperty>;
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
	PersonTypeCustomProperties?: Array<SP.Publishing.PersonCustomProperty>;
	Phone?: string;
	PictureUrl?: string;
	PointPublishingPersonalSiteUrl?: string;
	Responsibilities?: string;
	Schools?: string;
	Skills?: string;
	SpsDepartment?: string;
	SpsJobTitle?: string;
	StringCustomProperties?: Array<SP.KeyValue>;
	Title?: string;
	UserName?: string;
}

/*********************************************
* PersonMagazineUserProfileData
**********************************************/
export interface PersonMagazineUserProfileData {
	ManagerChain?: Array<SP.Publishing.PersonMagazineUserProfile>;
	Primary?: SP.Publishing.PersonMagazineUserProfile;
}

/*********************************************
* ProfileCoreProperties
**********************************************/
export interface ProfileCoreProperties {
	PictureUrl?: string;
	Title?: string;
}

/*********************************************
* ProfileDirectsData
**********************************************/
export interface ProfileDirectsData {
	DirectReports?: Array<SP.Publishing.ProfileCoreProperties>;
}

/*********************************************
* ProfileData
**********************************************/
export interface ProfileData {
	ManagerChain?: Array<SP.Publishing.ProfileCoreProperties>;
	Primary?: SP.Publishing.PersonMagazineUserProfile;
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
* PropertyValue
**********************************************/
export interface PropertyValue {
	TermId?: string;
	Value?: string;
}

/*********************************************
* SitePageFieldsData
**********************************************/
export interface SitePageFieldsData {
	AuthorByline?: Array<string>;
	BannerImageUrl?: string;
	CanvasContent1?: string;
	CanvasJson1?: string;
	Description?: string;
	LayoutWebpartsContent?: string;
	Modified?: any;
	Title?: string;
	TopicHeader?: string;
}

/*********************************************
* RepostPageFieldsData
**********************************************/
export interface RepostPageFieldsData {

}

/*********************************************
* SharePagePreviewByEmailFieldsData
**********************************************/
export interface SharePagePreviewByEmailFieldsData {
	message?: string;
	recipientEmails?: Array<string>;
}

/*********************************************
* SitePageVersionInfo
**********************************************/
export interface SitePageVersionInfo {
	LastVersionCreated?: any;
	LastVersionCreatedBy?: string;
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
* TaxonomicProperties
**********************************************/
export interface TaxonomicProperties {
	Interest?: Array<SP.Publishing.PropertyValue>;
	PastProjects?: Array<SP.Publishing.PropertyValue>;
	Responsibilities?: Array<SP.Publishing.PropertyValue>;
	Schools?: Array<SP.Publishing.PropertyValue>;
	Skills?: Array<SP.Publishing.PropertyValue>;
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
* TextValueWithLanguage
**********************************************/
export interface TextValueWithLanguage {
	ColorSeed?: string;
	Lcid?: number;
	Text?: string;
}

/*********************************************
* ViewProgressAnalyticsData
**********************************************/
export interface ViewProgressAnalyticsData {
	PercentageViewed?: number;
}

/*********************************************
* CommunicationSiteCreationResponse
**********************************************/
export interface CommunicationSiteCreationResponse {
	SiteStatus?: number;
	SiteUrl?: string;
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
	SiteDesignId?: any;
	Title?: string;
	Url?: string;
	WebTemplateExtensionId?: any;
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
* FilePickerOptions
**********************************************/
export interface FilePickerOptions {
	BingSearchEnabled?: boolean;
	CentralAssetRepository?: Microsoft.SharePoint.Administration.CentralAssetRepository;
}
