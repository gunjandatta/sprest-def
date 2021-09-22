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
	IsDefault?: boolean;
	IsOutOfBoxTemplate?: boolean;
	IsTenantAdminOnly?: boolean;
	ListColor?: number;
	ListIcon?: number;
	PreviewImageAltText?: string;
	PreviewImageUrl?: string;
	RequiresGroupConnected?: boolean;
	RequiresTeamsConnected?: boolean;
	RequiresYammerConnected?: boolean;
	SiteScriptIds?: Array<any>;
	SupportedWebTemplates?: Array<string>;
	TemplateFeatures?: Array<string>;
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
	IncludedLists?: Array<string>;
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
	Warnings?: Array<string>;
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
	ActionStatus?: Array<Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptActionStatus>;
	Schema?: string;
}

/*********************************************
* SPSiteScriptStatusAndSchemaCollections
**********************************************/
export interface SPSiteScriptStatusAndSchemaCollections {

}
