import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* OutOfBoxSiteTemplateSettings
**********************************************/
export interface OutOfBoxSiteTemplateSettings {
	Id?: any;
	IsHidden?: boolean;
}

/*********************************************
* OutOfBoxSiteTemplateSettingsCollections
**********************************************/
export interface OutOfBoxSiteTemplateSettingsCollections {

}

/*********************************************
* SiteDesignCreationInfo
**********************************************/
export interface SiteDesignCreationInfo {
	Description?: string;
	DesignPackageId?: any;
	DesignType?: number;
	ExpandedPreviewImages?: { results: Array<Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignImage> };
	InternalName?: string;
	IsDefault?: boolean;
	IsOutOfBoxTemplate?: boolean;
	IsTenantAdminOnly?: boolean;
	ListColor?: number;
	ListIcon?: number;
	PreviewImageAltText?: string;
	PreviewImageUrl?: string;
	RequiresClassConnected?: boolean;
	RequiresGroupConnected?: boolean;
	RequiresSyntexLicense?: boolean;
	RequiresTeamsConnected?: boolean;
	RequiresYammerConnected?: boolean;
	SiteScriptIds?: { results: Array<any> };
	SupportedWebTemplates?: { results: Array<string> };
	TargetPlatforms?: { results: Array<string> };
	TeamChannels?: { results: Array<string> };
	TeamImageAltText?: string;
	TeamImageUrl?: string;
	TeamInstalledApps?: { results: Array<Microsoft.SharePoint.Utilities.WebTemplateExtensions.TeamAppInfo> };
	TeamTemplate?: string;
	TemplateAssets?: { results: Array<string> };
	TemplateFeatures?: { results: Array<string> };
	ThumbnailUrl?: string;
	Title?: string;
	WebTemplate?: string;
}

/*********************************************
* SiteDesignCreationInfoCollections
**********************************************/
export interface SiteDesignCreationInfoCollections {

}

/*********************************************
* SiteDesignImage
**********************************************/
export interface SiteDesignImage {
	DisplayName?: string;
	ImageUrl?: string;
}

/*********************************************
* SiteDesignImageCollections
**********************************************/
export interface SiteDesignImageCollections {

}

/*********************************************
* TeamAppInfo
**********************************************/
export interface TeamAppInfo {
	Children?: { results: Array<string> };
	Name?: string;
}

/*********************************************
* TeamAppInfoCollections
**********************************************/
export interface TeamAppInfoCollections {

}

/*********************************************
* SiteDesignMetadata
**********************************************/
export interface SiteDesignMetadata {
	Id?: any;
	Order?: number;
	Version?: number;
}

/*********************************************
* SiteDesignMetadataCollections
**********************************************/
export interface SiteDesignMetadataCollections {

}

/*********************************************
* SiteScriptActionResult
**********************************************/
export interface SiteScriptActionResult {
	ErrorCode?: number;
	Outcome?: number;
	OutcomeText?: string;
	Target?: string;
	TargetId?: string;
	Title?: string;
	Verb?: string;
}

/*********************************************
* SiteScriptActionResultCollections
**********************************************/
export interface SiteScriptActionResultCollections {

}

/*********************************************
* SiteScriptCreationInfo
**********************************************/
export interface SiteScriptCreationInfo {
	Content?: string;
	Description?: string;
	Title?: string;
}

/*********************************************
* SiteScriptCreationInfoCollections
**********************************************/
export interface SiteScriptCreationInfoCollections {

}

/*********************************************
* SiteScriptMetadata
**********************************************/
export interface SiteScriptMetadata {
	Content?: string;
	Description?: string;
	Id?: any;
	IsSiteScriptPackage?: boolean;
	Title?: string;
	Version?: number;
}

/*********************************************
* SiteScriptMetadataCollections
**********************************************/
export interface SiteScriptMetadataCollections {

}

/*********************************************
* SiteScriptSerializationInfo
**********************************************/
export interface SiteScriptSerializationInfo {
	IncludeBranding?: boolean;
	IncludedLists?: { results: Array<string> };
	IncludedPages?: { results: Array<string> };
	IncludeLinksToExportedItems?: boolean;
	IncludeRegionalSettings?: boolean;
	IncludeSiteExternalSharingCapability?: boolean;
	IncludeTheme?: boolean;
}

/*********************************************
* SiteScriptSerializationInfoCollections
**********************************************/
export interface SiteScriptSerializationInfoCollections {

}

/*********************************************
* SiteScriptSerializationResult
**********************************************/
export interface SiteScriptSerializationResult {
	JSON?: string;
	Warnings?: { results: Array<string> };
}

/*********************************************
* SiteScriptSerializationResultCollections
**********************************************/
export interface SiteScriptSerializationResultCollections {

}

/*********************************************
* SiteScriptUpdateInfo
**********************************************/
export interface SiteScriptUpdateInfo {
	Id?: any;
	Version?: number;
}

/*********************************************
* SiteScriptUpdateInfoCollections
**********************************************/
export interface SiteScriptUpdateInfoCollections {

}

/*********************************************
* SiteDesignTask
**********************************************/
export interface SiteDesignTask {
	ID?: any;
	LogonName?: string;
	SiteDesignID?: any;
	SiteDesignStore?: number;
	SiteID?: any;
	WebID?: any;
}

/*********************************************
* SiteDesignTaskCollections
**********************************************/
export interface SiteDesignTaskCollections {

}

/*********************************************
* SiteScriptActionStatus
**********************************************/
export interface SiteScriptActionStatus {
	ActionIndex?: number;
	ActionKey?: any;
	ActionTitle?: string;
	ActionVerb?: string;
	LastModified?: number;
	OrdinalIndex?: number;
	OutcomeCode?: number;
	OutcomeText?: string;
	SiteScriptID?: any;
	SiteScriptIndex?: number;
	SiteScriptTitle?: string;
}

/*********************************************
* SiteScriptActionStatusCollections
**********************************************/
export interface SiteScriptActionStatusCollections {

}

/*********************************************
* SPSiteScriptStatusAndSchema
**********************************************/
export interface SPSiteScriptStatusAndSchema {
	ActionStatus?: { results: Array<Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptActionStatus> };
	Schema?: string;
}

/*********************************************
* SPSiteScriptStatusAndSchemaCollections
**********************************************/
export interface SPSiteScriptStatusAndSchemaCollections {

}
