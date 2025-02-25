import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ColumnDef
**********************************************/
export interface ColumnDef {
	CustomFormatter?: string;
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
* SPClassificationPublishConfig
**********************************************/
export interface SPClassificationPublishConfig {
	ClassifierId?: any;
	ColumnName?: string;
	ColumnType?: string;
	ContentType?: string;
	Kind?: string;
	ModelClassification?: string;
	ModelId?: string;
	RetentionLabel?: Microsoft.Office.Server.ContentCenter.SPRetentionLabelConfig;
	SensitivityLabel?: Microsoft.Office.Server.ContentCenter.SPSensitivityLabelConfig;
}

/*********************************************
* SPClassificationPublishConfigCollections
**********************************************/
export interface SPClassificationPublishConfigCollections {

}

/*********************************************
* SPRetentionLabelConfig
**********************************************/
export interface SPRetentionLabelConfig {
	Id?: string;
	Name?: string;
}

/*********************************************
* SPRetentionLabelConfigCollections
**********************************************/
export interface SPRetentionLabelConfigCollections {

}

/*********************************************
* SPSensitivityLabelConfig
**********************************************/
export interface SPSensitivityLabelConfig {
	Id?: string;
	Name?: string;
}

/*********************************************
* SPSensitivityLabelConfigCollections
**********************************************/
export interface SPSensitivityLabelConfigCollections {

}

/*********************************************
* SPDependentModel
**********************************************/
export interface SPDependentModel {
	LastRefereshedTimeUtc?: any;
	ModelId?: string;
	ModelType?: string;
}

/*********************************************
* SPDependentModelCollections
**********************************************/
export interface SPDependentModelCollections {

}

/*********************************************
* SPExtractorPublishConfig
**********************************************/
export interface SPExtractorPublishConfig {
	ColumnInternalName?: string;
	ColumnName?: string;
	ColumnType?: string;
	ExtractorId?: any;
}

/*********************************************
* SPExtractorPublishConfigCollections
**********************************************/
export interface SPExtractorPublishConfigCollections {

}

/*********************************************
* SPModelDependencies
**********************************************/
export interface SPModelDependencies {
	DependentModels?: { results: Array<Microsoft.Office.Server.ContentCenter.SPDependentModel> };
}

/*********************************************
* SPModelDependenciesCollections
**********************************************/
export interface SPModelDependenciesCollections {

}

/*********************************************
* SPModelPublishConfig
**********************************************/
export interface SPModelPublishConfig {
	ClassificationPublishConfigs?: { results: Array<Microsoft.Office.Server.ContentCenter.SPClassificationPublishConfig> };
	ExtractorPublishConfigs?: { results: Array<Microsoft.Office.Server.ContentCenter.SPExtractorPublishConfig> };
}

/*********************************************
* SPModelPublishConfigCollections
**********************************************/
export interface SPModelPublishConfigCollections {

}

/*********************************************
* SPMachineLearningPublicationEntityData
**********************************************/
export interface SPMachineLearningPublicationEntityData {
	ModelUniqueId?: any;
	RemoveSitePromotionEnabled?: boolean;
	TargetLibraryServerRelativeUrl?: string;
	TargetSiteUrl?: string;
	TargetTableListServerRelativeUrl?: string;
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
