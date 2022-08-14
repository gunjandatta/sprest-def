import { Base } from "../../../";

/*********************************************
* ocrSettings
**********************************************/
export interface ocrSettings {
	isEnabled?: boolean;
	maxImageSize?: number;
	timeout?: number;
}

/*********************************************
* ocrSettingsCollections
**********************************************/
export interface ocrSettingsCollections {

}

/*********************************************
* redundancyDetectionSettings
**********************************************/
export interface redundancyDetectionSettings {
	isEnabled?: boolean;
	maxWords?: number;
	minWords?: number;
	similarityThreshold?: number;
}

/*********************************************
* redundancyDetectionSettingsCollections
**********************************************/
export interface redundancyDetectionSettingsCollections {

}

/*********************************************
* stringValueDictionary
**********************************************/
export interface stringValueDictionary {

}

/*********************************************
* stringValueDictionaryCollections
**********************************************/
export interface stringValueDictionaryCollections {

}

/*********************************************
* topicModelingSettings
**********************************************/
export interface topicModelingSettings {
	dynamicallyAdjustTopicCount?: boolean;
	ignoreNumbers?: boolean;
	isEnabled?: boolean;
	topicCount?: number;
}

/*********************************************
* topicModelingSettingsCollections
**********************************************/
export interface topicModelingSettingsCollections {

}
