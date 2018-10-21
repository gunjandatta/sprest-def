import { Microsoft } from "../../../../";

/*********************************************
* FormulaCreationInfo
**********************************************/
export interface FormulaCreationInfo {
	Description?: string;
	DesignPackageGuid?: any;
	IsDefault?: boolean;
	PreviewImageAltText?: string;
	PreviewImageUrl?: string;
	RecipeGuids?: Array<any>;
	Title?: string;
	Version?: number;
	WebTemplate?: string;
}

/*********************************************
* FormulaMetadata
**********************************************/
export interface FormulaMetadata {
	FormulaGuid?: any;
}

/*********************************************
* RecipeCreationInfo
**********************************************/
export interface RecipeCreationInfo {
	Content?: string;
	Description?: string;
	Title?: string;
}

/*********************************************
* RecipeMetadata
**********************************************/
export interface RecipeMetadata {
	Description?: string;
	RecipeGuid?: any;
	Title?: string;
	Version?: number;
}

/*********************************************
* SiteDesignCreationInfo
**********************************************/
export interface SiteDesignCreationInfo {
	Description?: string;
	IsDefault?: boolean;
	PreviewImageAltText?: string;
	PreviewImageUrl?: string;
	SiteScriptIds?: Array<any>;
	Title?: string;
	WebTemplate?: string;
}

/*********************************************
* SiteDesignMetadata
**********************************************/
export interface SiteDesignMetadata {
	Id?: any;
	Version?: number;
}

/*********************************************
* SiteScriptActionResult
**********************************************/
export interface SiteScriptActionResult {
	Outcome?: number;
	OutcomeText?: string;
	Title?: string;
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
* SiteScriptMetadata
**********************************************/
export interface SiteScriptMetadata {
	Content?: string;
	Description?: string;
	Id?: any;
	Title?: string;
	Version?: number;
}

/*********************************************
* SiteScriptUpdateInfo
**********************************************/
export interface SiteScriptUpdateInfo {
	Id?: any;
	Version?: number;
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
* SPSiteScriptStatusAndSchema
**********************************************/
export interface SPSiteScriptStatusAndSchema {
	ActionStatus?: Array<Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptActionStatus>;
	Schema?: string;
}
