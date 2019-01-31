import { IBaseCollection } from "../../";
import { SP } from "../../";
import { IBaseExecution } from "../../";

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
export interface IThemeManager extends ThemeManagerProps,ThemeManagerMethods,IBaseExecution<ThemeManager> {

}

/*********************************************
* ThemeManager
**********************************************/
export interface ThemeManager extends ThemeManagerProps, ThemeManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ThemeManagerProps
**********************************************/
export interface ThemeManagerProps {
	ContextThemeManager<T=SP.Utilities.ThemeManager>(): IBaseExecution<T>;
}

/*********************************************
* ThemeManagerMethods
**********************************************/
export interface ThemeManagerMethods {
	addTenantTheme<T=boolean>(name?: string, themeJson?: string): IBaseExecution<T>;
	applyTheme<T=string>(name?: string, themeJson?: string): IBaseExecution<T>;
	deleteTenantTheme<T=any>(name?: string): IBaseExecution<T>;
	getAvailableThemes<T=Array<SP.Utilities.JsonTheme>>(): IBaseExecution<T>;
	getHideDefaultThemes<T=boolean>(): IBaseExecution<T>;
	getTenantTheme<T=SP.Utilities.JsonTheme>(name?: string): IBaseExecution<T>;
	getTenantThemingOptions<T=SP.Utilities.ThemingOptions>(): IBaseExecution<T>;
	setHideDefaultThemes<T=boolean>(hideDefaultThemes?: boolean): IBaseExecution<T>;
	updateTenantTheme<T=boolean>(name?: string, themeJson?: string): IBaseExecution<T>;
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
