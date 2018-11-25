

/*********************************************
* MarketplaceUtilities
**********************************************/
export interface MarketplaceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ShortcutLink
**********************************************/
export interface ShortcutLink {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ShortcutTargetInfo
**********************************************/
export interface ShortcutTargetInfo {
	siteId?: any;
	uniqueId?: any;
	url?: string;
	webId?: any;
}

/*********************************************
* FileHandlerWopiProperties
**********************************************/
export interface FileHandlerWopiProperties {
	FileGetUrl?: string;
	FileId?: string;
	FilePutUrl?: string;
	ResourceId?: string;
}

/*********************************************
* NewsUtility
**********************************************/
export interface NewsUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSocialSwitch
**********************************************/
export interface SPSocialSwitch {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SpotlightResult
**********************************************/
export interface SpotlightResult {
	Order?: Array<number>;
	ResultCode?: number;
}

/*********************************************
* ThemeManager
**********************************************/
export interface ThemeManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ThemeManagerCollections
**********************************************/
export interface ThemeManagerCollections {
	ContextThemeManager?: () => SP.Utilities.ThemeManager;
}

/*********************************************
* ThemeManagerQuery
**********************************************/
export interface ThemeManagerQuery {
	ContextThemeManager?: SP.Utilities.ThemeManager;
}

/*********************************************
* Utility
**********************************************/
export interface Utility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WopiHostUtility
**********************************************/
export interface WopiHostUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WopiProperties
**********************************************/
export interface WopiProperties {
	AccessToken?: string;
	AccessTokenTtl?: number;
	AppIconUrl?: string;
	ErrorMessageToDisplay?: string;
	RedirectUrl?: string;
	WebApplicationUrl?: string;
}

/*********************************************
* UploadStatus
**********************************************/
export interface UploadStatus {
	ExpectedContentRange?: string;
	ExpirationDateTime?: any;
	UploadId?: any;
}
