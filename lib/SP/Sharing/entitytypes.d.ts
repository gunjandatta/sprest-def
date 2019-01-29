import { SP } from "../../";

/*********************************************
* SharedDocumentInfo
**********************************************/
export interface SharedDocumentInfo {
	Author?: SP.Sharing.Principal;
	CallerStack?: string;
	ContentTypeId?: SP.ContentTypeId;
	DriveAccessToken?: string;
	DriveAccessTokenV21?: string;
	DriveUrl?: string;
	Editor?: SP.Sharing.Principal;
	Extension?: string;
	FileLeafRef?: string;
	FileRef?: string;
	IsContainer?: boolean;
	LinkingUrl?: string;
	ListId?: any;
	ListItemId?: number;
	MediaBaseUrl?: string;
	Modified?: any;
	OfficeBundleGenerate?: string;
	OfficeBundleGetFragment?: string;
	PdfConversionUrl?: string;
	ProgId?: string;
	ServerRedirectedEmbedUrl?: string;
	ServerRedirectedPreviewUrl?: string;
	ServerRedirectedUrl?: string;
	SiteId?: any;
	SiteUrl?: string;
	SpItemUrl?: string;
	SpResourceUrl?: string;
	ThumbnailUrl?: string;
	Title?: string;
	UniqueId?: any;
	UrlPath?: string;
	VideoManifestUrl?: string;
	WebId?: any;
}

/*********************************************
* PersonalWeb
**********************************************/
export interface PersonalWeb {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharingInformation
**********************************************/
export interface SharingInformation {
	accessRequestSettings?: SP.Sharing.AccessRequestSettings;
	anonymousLinkExpirationRestrictionDays?: number;
	blockPeoplePickerAndSharing?: boolean;
	canAddExternalPrincipal?: boolean;
	canAddInternalPrincipal?: boolean;
	canRequestAccessForGrantAccess?: boolean;
	canSendEmail?: boolean;
	canUseSimplifiedRoles?: boolean;
	currentRole?: number;
	customizedExternalSharingServiceUrl?: string;
	defaultLinkKind?: number;
	defaultShareLinkPermission?: number;
	directUrl?: string;
	domainRestrictionSettings?: SP.Sharing.DomainRestrictionSettings;
	hasUniquePermissions?: boolean;
	microserviceShareUiUrl?: string;
	permissionsInformation?: SP.Sharing.PermissionCollection;
	sharedObjectType?: number;
	shareUiUrl?: string;
	sharingAbilities?: SP.Sharing.SharingAbilities;
	sharingLinkTemplates?: SP.Sharing.SharingLinkDefaultTemplatesCollection;
	sharingStatus?: number;
	showExternalSharingWarning?: boolean;
	webTemplateId?: number;
	webUrl?: string;
}

/*********************************************
* SharingInformationCollections<T = any>
**********************************************/
export interface SharingInformationCollections<T = any> {
	pickerSettings(): T;
}

/*********************************************
* SharingInformationQuery<T = any>
**********************************************/
export interface SharingInformationQuery<T = any> {
	pickerSettings(): T;
}

/*********************************************
* DocumentSharingManager
**********************************************/
export interface DocumentSharingManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SecurableObjectExtensions
**********************************************/
export interface SecurableObjectExtensions {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteSharingReportHelper
**********************************************/
export interface SiteSharingReportHelper {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WebSharingManager
**********************************************/
export interface WebSharingManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
