import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* AutofillColumnInfo
**********************************************/
export interface AutofillColumnInfo {
	ColumnDataType?: string;
	columnName?: string;
	isEnabled?: boolean;
	prompt?: string;
}

/*********************************************
* AutofillColumnInfoCollections
**********************************************/
export interface AutofillColumnInfoCollections {

}

/*********************************************
* EmailProperties
**********************************************/
export interface EmailProperties {
	AdditionalHeaders?: { results: Array<SP.KeyValue> };
	BCC?: { results: Array<string> };
	Body?: string;
	CC?: { results: Array<string> };
	From?: string;
	Subject?: string;
	To?: { results: Array<string> };
}

/*********************************************
* EmailPropertiesCollections
**********************************************/
export interface EmailPropertiesCollections {

}

/*********************************************
* JsonTheme
**********************************************/
export interface JsonTheme {
	name?: string;
	themeJson?: string;
}

/*********************************************
* JsonThemeCollections
**********************************************/
export interface JsonThemeCollections {

}

/*********************************************
* LLMColumnInfo
**********************************************/
export interface LLMColumnInfo {
	AnalyzeImageDetailLevel?: string;
	AnalyzeImageWithVision?: boolean;
	AutofillColumnType?: string;
	CustomModelId?: string;
	CustomParametersJson?: string;
	IsEnabled?: boolean;
	Prompt?: string;
}

/*********************************************
* LLMColumnInfoCollections
**********************************************/
export interface LLMColumnInfoCollections {

}

/*********************************************
* NewsItemMetaData
**********************************************/
export interface NewsItemMetaData {
	fileExtension?: string;
	newsType?: number;
	progId?: string;
	siteId?: any;
	title?: string;
	uniqueId?: any;
	url?: string;
	webId?: any;
}

/*********************************************
* NewsItemMetaDataCollections
**********************************************/
export interface NewsItemMetaDataCollections {

}

/*********************************************
* NewsItem
**********************************************/
export interface NewsItem {
	backupPictureUrl?: string;
	caption?: string;
	itemId?: number;
	pictureAltText?: string;
	pictureUrl?: string;
	properties?: string;
}

/*********************************************
* NewsItemCollections
**********************************************/
export interface NewsItemCollections {

}

/*********************************************
* PrincipalInfo
**********************************************/
export interface PrincipalInfo {
	Department?: string;
	DisplayName?: string;
	Email?: string;
	JobTitle?: string;
	LoginName?: string;
	Mobile?: string;
	PrincipalId?: number;
	PrincipalType?: number;
	SIPAddress?: string;
}

/*********************************************
* PrincipalInfoCollections
**********************************************/
export interface PrincipalInfoCollections {

}

/*********************************************
* WebAppUrlsByAction
**********************************************/
export interface WebAppUrlsByAction {
	Action?: string;
	UrlsByExt?: { results: Array<SP.Utilities.WebAppExtUrlPair> };
}

/*********************************************
* WebAppUrlsByActionCollections
**********************************************/
export interface WebAppUrlsByActionCollections {

}

/*********************************************
* WebAppExtUrlPair
**********************************************/
export interface WebAppExtUrlPair {
	Ext?: string;
	WacUrl?: string;
}

/*********************************************
* WebAppExtUrlPairCollections
**********************************************/
export interface WebAppExtUrlPairCollections {

}

/*********************************************
* WikiPageCreationInformation
**********************************************/
export interface WikiPageCreationInformation {
	ServerRelativeUrl?: string;
	WikiHtmlContent?: string;
}

/*********************************************
* WikiPageCreationInformationCollections
**********************************************/
export interface WikiPageCreationInformationCollections {

}

/*********************************************
* WopiWebAppProperties
**********************************************/
export interface WopiWebAppProperties {
	App?: string;
	BootstrapperUrl?: string;
	ListByAction?: { results: Array<SP.Utilities.WebAppUrlsByAction> };
}

/*********************************************
* WopiWebAppPropertiesCollections
**********************************************/
export interface WopiWebAppPropertiesCollections {

}

/*********************************************
* ThemingOptions
**********************************************/
export interface ThemingOptions {
	hideDefaultThemes?: boolean;
	themePreviews?: { results: Array<SP.Utilities.JsonTheme> };
}

/*********************************************
* ThemingOptionsCollections
**********************************************/
export interface ThemingOptionsCollections {

}
