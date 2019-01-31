import { IBaseExecution } from "../../../";
import { SP } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CollaborationMailboxResponse
**********************************************/
export interface CollaborationMailboxResponse {
	AlternateUrl?: string;
	CorrelationId?: string;
	ErrorCode?: number;
	Status?: number;
	Url?: string;
}

/*********************************************
* GroupCreationContext
**********************************************/
export interface GroupCreationContext {
	ClassificationDescriptions?: Array<SP.KeyValue>;
	ClassificationDescriptionsNew?: Array<SP.KeyValue>;
	ClassificationPrivacy?: Array<SP.KeyValue>;
	CustomFormUrl?: string;
	DataClassificationOptions?: Array<string>;
	DataClassificationOptionsNew?: Array<SP.KeyValue>;
	DefaultClassification?: string;
	ExternalInvitationEnabled?: boolean;
	RequireSecondaryContact?: boolean;
	SitePath?: string;
	UsageGuidelineUrl?: string;
}

/*********************************************
* GroupCreationParams
**********************************************/
export interface GroupCreationParams {
	Classification?: string;
	CreationOptions?: Array<string>;
	Description?: string;
	Owners?: Array<string>;
}

/*********************************************
* GroupSiteConversionInfo
**********************************************/
export interface GroupSiteConversionInfo {
	GroupType?: number;
	IsGroupifyDisabled?: boolean;
	IsRegionRestricted?: boolean;
	IsWrongPdl?: boolean;
	SuggestedMembers?: Array<string>;
	SuggestedOwners?: Array<string>;
	UnsuggestablePrincipals?: Array<string>;
}

/*********************************************
* GroupSiteInfo
**********************************************/
export interface GroupSiteInfo {
	DocumentsUrl?: string;
	ErrorMessage?: string;
	GroupId?: any;
	SiteStatus?: number;
	SiteUrl?: string;
}

/*********************************************
* LinkedSiteContract
**********************************************/
export interface LinkedSiteContract {
	DisplayName?: string;
	GroupId?: string;
	PictureUrl?: string;
	SiteId?: string;
	Url?: string;
	WebId?: string;
}

/*********************************************
* LinkedSitesListContract
**********************************************/
export interface LinkedSitesListContract {
	LinkedSites?: Array<Microsoft.SharePoint.Portal.LinkedSiteContract>;
}

/*********************************************
* SPSiteCreationResponse
**********************************************/
export interface SPSiteCreationResponse {
	SiteStatus?: number;
	SiteUrl?: string;
}

/*********************************************
* SPSiteCreationRequest
**********************************************/
export interface SPSiteCreationRequest {
	Classification?: string;
	Description?: string;
	HubSiteId?: any;
	Lcid?: number;
	Owner?: string;
	SensitivityLabel?: any;
	ShareByEmailEnabled?: boolean;
	SiteDesignId?: any;
	TimeZoneId?: number;
	Title?: string;
	Url?: string;
	WebTemplate?: string;
	WebTemplateExtensionId?: any;
}
