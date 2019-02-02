import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
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
* CollaborationMailboxResponseCollections
**********************************************/
export interface CollaborationMailboxResponseCollections {

}

/*********************************************
* GroupCreationContext
**********************************************/
export interface GroupCreationContext {
	ClassificationDescriptions?: { results: Array<SP.KeyValue> };
	ClassificationDescriptionsNew?: { results: Array<SP.KeyValue> };
	ClassificationPrivacy?: { results: Array<SP.KeyValue> };
	CustomFormUrl?: string;
	DataClassificationOptions?: { results: Array<string> };
	DataClassificationOptionsNew?: { results: Array<SP.KeyValue> };
	DefaultClassification?: string;
	ExternalInvitationEnabled?: boolean;
	RequireSecondaryContact?: boolean;
	SitePath?: string;
	UsageGuidelineUrl?: string;
}

/*********************************************
* GroupCreationContextCollections
**********************************************/
export interface GroupCreationContextCollections {

}

/*********************************************
* GroupCreationParams
**********************************************/
export interface GroupCreationParams {
	Classification?: string;
	CreationOptions?: { results: Array<string> };
	Description?: string;
	Owners?: { results: Array<string> };
}

/*********************************************
* GroupCreationParamsCollections
**********************************************/
export interface GroupCreationParamsCollections {

}

/*********************************************
* GroupSiteConversionInfo
**********************************************/
export interface GroupSiteConversionInfo {
	GroupType?: number;
	IsGroupifyDisabled?: boolean;
	IsRegionRestricted?: boolean;
	IsWrongPdl?: boolean;
	SuggestedMembers?: { results: Array<string> };
	SuggestedOwners?: { results: Array<string> };
	UnsuggestablePrincipals?: { results: Array<string> };
}

/*********************************************
* GroupSiteConversionInfoCollections
**********************************************/
export interface GroupSiteConversionInfoCollections {

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
* GroupSiteInfoCollections
**********************************************/
export interface GroupSiteInfoCollections {

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
* LinkedSiteContractCollections
**********************************************/
export interface LinkedSiteContractCollections {

}

/*********************************************
* LinkedSitesListContract
**********************************************/
export interface LinkedSitesListContract {
	LinkedSites?: { results: Array<Microsoft.SharePoint.Portal.LinkedSiteContract> };
}

/*********************************************
* LinkedSitesListContractCollections
**********************************************/
export interface LinkedSitesListContractCollections {

}

/*********************************************
* SPSiteCreationResponse
**********************************************/
export interface SPSiteCreationResponse {
	SiteStatus?: number;
	SiteUrl?: string;
}

/*********************************************
* SPSiteCreationResponseCollections
**********************************************/
export interface SPSiteCreationResponseCollections {

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

/*********************************************
* SPSiteCreationRequestCollections
**********************************************/
export interface SPSiteCreationRequestCollections {

}
