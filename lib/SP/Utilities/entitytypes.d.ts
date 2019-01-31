import { IBaseExecution } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";
import { SP } from "../../";
import { IBaseQuery } from "../../";

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
* IThemeManager
**********************************************/
export interface IThemeManager extends ThemeManagerCollections,ThemeManagerMethods,IBaseQuery<IThemeManagerQuery> {

}

/*********************************************
* IThemeManagerQuery
**********************************************/
export interface IThemeManagerQuery extends ThemeManagerQuery,ThemeManagerMethods {

}

/*********************************************
* ThemeManager
**********************************************/
export interface ThemeManager extends ThemeManagerCollections, ThemeManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ThemeManagerProps
**********************************************/
export interface ThemeManagerProps {
	ContextThemeManager(): IBaseExecution<SP.Utilities.ThemeManager>;
}

/*********************************************
* ThemeManagerCollections
**********************************************/
export interface ThemeManagerCollections extends ThemeManagerProps {

}

/*********************************************
* ThemeManagerQuery
**********************************************/
export interface ThemeManagerQuery extends ThemeManagerProps {

}

/*********************************************
* ThemeManagerMethods
**********************************************/
export interface ThemeManagerMethods {
	addTenantTheme(name?: string, themeJson?: string): IBaseExecution<boolean>;
	applyTheme(name?: string, themeJson?: string): IBaseExecution<string>;
	deleteTenantTheme(name?: string): IBaseExecution<any>;
	getAvailableThemes(): IBaseExecution<Array<SP.Utilities.JsonTheme>>;
	getHideDefaultThemes(): IBaseExecution<boolean>;
	getTenantTheme(name?: string): IBaseExecution<SP.Utilities.JsonTheme>;
	getTenantThemingOptions(): IBaseExecution<SP.Utilities.ThemingOptions>;
	setHideDefaultThemes(hideDefaultThemes?: boolean): IBaseExecution<boolean>;
	updateTenantTheme(name?: string, themeJson?: string): IBaseExecution<boolean>;
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
