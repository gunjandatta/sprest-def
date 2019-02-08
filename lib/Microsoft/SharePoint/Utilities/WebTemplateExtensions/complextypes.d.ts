import { Base } from "../../../../";
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
* FormulaCreationInfoCollections
**********************************************/
export interface FormulaCreationInfoCollections {

}

/*********************************************
* FormulaMetadata
**********************************************/
export interface FormulaMetadata {
	FormulaGuid?: any;
}

/*********************************************
* FormulaMetadataCollections
**********************************************/
export interface FormulaMetadataCollections {

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
* RecipeCreationInfoCollections
**********************************************/
export interface RecipeCreationInfoCollections {

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
* RecipeMetadataCollections
**********************************************/
export interface RecipeMetadataCollections {

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
* SiteDesignCreationInfoCollections
**********************************************/
export interface SiteDesignCreationInfoCollections {

}

/*********************************************
* SiteDesignMetadata
**********************************************/
export interface SiteDesignMetadata {
	Id?: any;
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
	Outcome?: number;
	OutcomeText?: string;
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
	Title?: string;
	Version?: number;
}

/*********************************************
* SiteScriptMetadataCollections
**********************************************/
export interface SiteScriptMetadataCollections {

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
