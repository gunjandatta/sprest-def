import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ColumnDef
**********************************************/
export interface ColumnDef {
	Id?: string;
	Name?: string;
	Type?: string;
}

/*********************************************
* ColumnDefCollections
**********************************************/
export interface ColumnDefCollections {

}

/*********************************************
* PrebuiltModelInfo
**********************************************/
export interface PrebuiltModelInfo {
	FormRecognizerApiVersion?: string;
	FormRecognizerPrebuiltModelName?: string;
}

/*********************************************
* PrebuiltModelInfoCollections
**********************************************/
export interface PrebuiltModelInfoCollections {

}

/*********************************************
* SiteCreationProperties
**********************************************/
export interface SiteCreationProperties {
	CompatibilityLevel?: number;
	Lcid?: string;
	Owner?: string;
	OwnerName?: string;
	SiteUniName?: string;
	TimeZoneId?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* SiteCreationPropertiesCollections
**********************************************/
export interface SiteCreationPropertiesCollections {

}

/*********************************************
* SPAzureCognitiveModelEntityData
**********************************************/
export interface SPAzureCognitiveModelEntityData {
	AzureCognitivePrebuiltModelName?: string;
	ColumnId?: string;
	ColumnName?: string;
	ColumnType?: string;
	ContentTypeGroup?: string;
	ContentTypeName?: string;
}

/*********************************************
* SPAzureCognitiveModelEntityDataCollections
**********************************************/
export interface SPAzureCognitiveModelEntityDataCollections {

}

/*********************************************
* SPMachineLearningPublicationEntityData
**********************************************/
export interface SPMachineLearningPublicationEntityData {
	ModelUniqueId?: any;
	TargetLibraryServerRelativeUrl?: string;
	TargetSiteUrl?: string;
	TargetWebServerRelativeUrl?: string;
	ViewOption?: string;
}

/*********************************************
* SPMachineLearningPublicationEntityDataCollections
**********************************************/
export interface SPMachineLearningPublicationEntityDataCollections {

}

/*********************************************
* SPMachineLearningPublicationResult
**********************************************/
export interface SPMachineLearningPublicationResult {
	ErrorMessage?: string;
	Publication?: Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData;
	StatusCode?: number;
}

/*********************************************
* SPMachineLearningPublicationResultCollections
**********************************************/
export interface SPMachineLearningPublicationResultCollections {

}
