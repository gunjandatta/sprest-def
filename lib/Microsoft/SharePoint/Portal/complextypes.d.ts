import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* ChannelInfoCollection
**********************************************/
export interface ChannelInfoCollection {
	CacheUpdatedTime?: any;
	value?: Array<Microsoft.SharePoint.Portal.ChannelInfo>;
}

/*********************************************
* ChannelInfoCollectionCollections
**********************************************/
export interface ChannelInfoCollectionCollections {

}

/*********************************************
* ChannelInfo
**********************************************/
export interface ChannelInfo {
	description?: string;
	displayName?: string;
	filesFolderWebUrl?: string;
	id?: string;
	memberShipType?: number;
	webUrl?: string;
}

/*********************************************
* ChannelInfoCollections
**********************************************/
export interface ChannelInfoCollections {

}

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
* EnsureTeamForGroupExResponse
**********************************************/
export interface EnsureTeamForGroupExResponse {
	teamsId?: string;
	teamsUrl?: string;
}

/*********************************************
* EnsureTeamForGroupExResponseCollections
**********************************************/
export interface EnsureTeamForGroupExResponseCollections {

}

/*********************************************
* GroupCreationContext
**********************************************/
export interface GroupCreationContext {
	ClassificationDescriptions?: Array<SP.KeyValue>;
	ClassificationDescriptionsNew?: Array<SP.KeyValue>;
	ClassificationExtSharingValue?: Array<SP.KeyValue>;
	ClassificationPrivacyValue?: Array<SP.KeyValue>;
	CustomFormUrl?: string;
	DataClassificationOptions?: Array<string>;
	DataClassificationOptionsNew?: Array<SP.KeyValue>;
	DefaultClassification?: string;
	ExternalInvitationEnabled?: boolean;
	MachineLearningCaptureEnabled?: boolean;
	MachineLearningExperienceEnabled?: boolean;
	PreferredLanguage?: number;
	RequireSecondaryContact?: boolean;
	SensitivityLabelPolicyMandatory?: boolean;
	ShowSelfServiceSiteCreation?: boolean;
	SiteCreationNewUX?: boolean;
	SitePath?: string;
	SiteSensitivityLabelId?: string;
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
	CreationOptions?: Array<string>;
	Description?: string;
	Owners?: Array<string>;
	PreferredDataLocation?: string;
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
	SuggestedMembers?: Array<string>;
	SuggestedOwners?: Array<string>;
	UnsuggestablePrincipals?: Array<string>;
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
	LinkedSites?: Array<Microsoft.SharePoint.Portal.LinkedSiteContract>;
}

/*********************************************
* LinkedSitesListContractCollections
**********************************************/
export interface LinkedSitesListContractCollections {

}

/*********************************************
* M365TabItem
**********************************************/
export interface M365TabItem {
	displayName?: string;
	isDefault?: boolean;
	itemType?: number;
	url?: string;
}

/*********************************************
* M365TabItemCollections
**********************************************/
export interface M365TabItemCollections {

}

/*********************************************
* OrgLabelsContext
**********************************************/
export interface OrgLabelsContext {
	DisplayName?: string;
	LabelApplicableTo?: string;
	ObjectId?: string;
}

/*********************************************
* OrgLabelsContextCollections
**********************************************/
export interface OrgLabelsContextCollections {

}

/*********************************************
* OrgLabelsContextList
**********************************************/
export interface OrgLabelsContextList {
	IsLastPage?: boolean;
	Labels?: Array<Microsoft.SharePoint.Portal.OrgLabelsContext>;
}

/*********************************************
* OrgLabelsContextListCollections
**********************************************/
export interface OrgLabelsContextListCollections {

}

/*********************************************
* ParentGroup
**********************************************/
export interface ParentGroup {
	DisplayName?: string;
	ID?: string;
}

/*********************************************
* ParentGroupCollections
**********************************************/
export interface ParentGroupCollections {

}

/*********************************************
* PinToTeamParams
**********************************************/
export interface PinToTeamParams {
	tabs?: Array<Microsoft.SharePoint.Portal.M365TabItem>;
	teamsId?: string;
}

/*********************************************
* PinToTeamParamsCollections
**********************************************/
export interface PinToTeamParamsCollections {

}

/*********************************************
* PinToTeamResponse
**********************************************/
export interface PinToTeamResponse {
	FailedPinning?: Array<Microsoft.SharePoint.Portal.M365TabItem>;
	SuccessfulPinning?: Array<Microsoft.SharePoint.Portal.M365TabItem>;
}

/*********************************************
* PinToTeamResponseCollections
**********************************************/
export interface PinToTeamResponseCollections {

}

/*********************************************
* RecentAndJoinedTeamsResponse
**********************************************/
export interface RecentAndJoinedTeamsResponse {
	joinedTeams?: string;
	joinedTeamsError?: string;
	joinedTeamsErrorCode?: number;
	pinnedItems?: Array<Microsoft.SharePoint.ListHome.FavoriteListHomeItem>;
	pinnedItemsError?: string;
	pinnedItemsErrorCode?: number;
	quickAccessItems?: string;
	quickAccessItemsError?: string;
	quickAccessItemsErrorCode?: number;
}

/*********************************************
* RecentAndJoinedTeamsResponseCollections
**********************************************/
export interface RecentAndJoinedTeamsResponseCollections {

}

/*********************************************
* SPSiteCreationResponse
**********************************************/
export interface SPSiteCreationResponse {
	SiteId?: string;
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
	ChannelGroupId?: any;
	Classification?: string;
	Description?: string;
	HubSiteId?: any;
	Lcid?: number;
	Owner?: string;
	RelatedGroupId?: any;
	SensitivityLabel?: any;
	SensitivityLabel2?: string;
	ShareByEmailEnabled?: boolean;
	SiteDesignId?: any;
	TeamsChannelType?: number;
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
* GetTeamChannelSiteOwnerResponse
**********************************************/
export interface GetTeamChannelSiteOwnerResponse {
	Owner?: string;
	SecondaryContact?: string;
}

/*********************************************
* GetTeamChannelSiteOwnerResponseCollections
**********************************************/
export interface GetTeamChannelSiteOwnerResponseCollections {

}
