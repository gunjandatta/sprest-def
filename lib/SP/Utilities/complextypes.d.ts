import { IBaseExecution } from "../../";
import { SP } from "../../";

/*********************************************
* EmailProperties
**********************************************/
export interface EmailProperties {
	AdditionalHeaders?: Array<SP.KeyValue>;
	BCC?: Array<string>;
	Body?: string;
	CC?: Array<string>;
	From?: string;
	Subject?: string;
	To?: Array<string>;
}

/*********************************************
* JsonTheme
**********************************************/
export interface JsonTheme {
	name?: string;
	themeJson?: string;
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
* NewsItem
**********************************************/
export interface NewsItem extends SP.Utilities.NewsItemMetaData {
	backupPictureUrl?: string;
	caption?: string;
	itemId?: number;
	pictureAltText?: string;
	pictureUrl?: string;
	properties?: string;
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
* WebAppUrlsByAction
**********************************************/
export interface WebAppUrlsByAction {
	Action?: string;
	UrlsByExt?: Array<SP.Utilities.WebAppExtUrlPair>;
}

/*********************************************
* WebAppExtUrlPair
**********************************************/
export interface WebAppExtUrlPair {
	Ext?: string;
	WacUrl?: string;
}

/*********************************************
* WikiPageCreationInformation
**********************************************/
export interface WikiPageCreationInformation {
	ServerRelativeUrl?: string;
	WikiHtmlContent?: string;
}

/*********************************************
* WopiWebAppProperties
**********************************************/
export interface WopiWebAppProperties {
	App?: string;
	BootstrapperUrl?: string;
	ListByAction?: Array<SP.Utilities.WebAppUrlsByAction>;
}

/*********************************************
* ThemingOptions
**********************************************/
export interface ThemingOptions {
	hideDefaultThemes?: boolean;
	themePreviews?: Array<SP.Utilities.JsonTheme>;
}
