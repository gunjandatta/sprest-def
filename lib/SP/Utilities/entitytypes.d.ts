import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* MarketplaceUtilities
**********************************************/
export interface MarketplaceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MarketplaceUtilitiesCollections
**********************************************/
export interface MarketplaceUtilitiesCollections {

}

/*********************************************
* ShortcutLink
**********************************************/
export interface ShortcutLink {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ShortcutLinkCollections
**********************************************/
export interface ShortcutLinkCollections {

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
* ShortcutTargetInfoCollections
**********************************************/
export interface ShortcutTargetInfoCollections {

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
* FileHandlerWopiPropertiesCollections
**********************************************/
export interface FileHandlerWopiPropertiesCollections {

}

/*********************************************
* NewsUtility
**********************************************/
export interface NewsUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NewsUtilityCollections
**********************************************/
export interface NewsUtilityCollections {

}

/*********************************************
* SPSocialSwitch
**********************************************/
export interface SPSocialSwitch {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSocialSwitchCollections
**********************************************/
export interface SPSocialSwitchCollections {

}

/*********************************************
* SpotlightResult
**********************************************/
export interface SpotlightResult {
	Order?: Array<number>;
	ResultCode?: number;
}

/*********************************************
* SpotlightResultCollections
**********************************************/
export interface SpotlightResultCollections {

}

/*********************************************
* IThemeManager
**********************************************/
export interface IThemeManager extends ThemeManagerCollections, ThemeManagerMethods, IBaseQuery<IThemeManagerQuery> {

}

/*********************************************
* IThemeManagerCollection
**********************************************/
export interface IThemeManagerCollection extends IBaseResults<ThemeManager> {
	done?: (resolve: (value?: Array<ThemeManager>) => void) => void;
}

/*********************************************
* IThemeManagerQueryCollection
**********************************************/
export interface IThemeManagerQueryCollection extends IBaseResults<ThemeManagerQuery> {
	done?: (resolve: (value?: Array<ThemeManagerQuery>) => void) => void;
}

/*********************************************
* IThemeManagerQuery
**********************************************/
export interface IThemeManagerQuery extends ThemeManagerQuery, ThemeManagerMethods {

}

/*********************************************
* ThemeManager
**********************************************/
export interface ThemeManager extends IBaseResult, ThemeManagerProps, ThemeManagerCollections, ThemeManagerMethods {

}

/*********************************************
* ThemeManagerProps
**********************************************/
export interface ThemeManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ThemeManagerPropMethods
**********************************************/
export interface ThemeManagerPropMethods {
	ContextThemeManager(): IBaseQuery<SP.Utilities.ThemeManager, SP.Utilities.ThemeManagerQuery> & SP.Utilities.ThemeManagerCollections & SP.Utilities.ThemeManagerMethods;
}

/*********************************************
* ThemeManagerCollections
**********************************************/
export interface ThemeManagerCollections extends ThemeManagerPropMethods {

}

/*********************************************
* ThemeManagerQuery
**********************************************/
export interface ThemeManagerQuery extends IBaseResult, ThemeManagerProps, ThemeManagerMethods {
	ContextThemeManager: SP.Utilities.ThemeManager & SP.Utilities.ThemeManagerCollections;
}

/*********************************************
* ThemeManagerMethods
**********************************************/
export interface ThemeManagerMethods {
	addTenantTheme(name?: string, themeJson?: string): IBaseExecution<boolean>;
	applyTheme(name?: string, themeJson?: string): IBaseExecution<string>;
	deleteTenantTheme(name?: string): IBaseExecution<any>;
	getAvailableThemes(): IBaseCollection<SP.Utilities.JsonTheme>;
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
* UtilityCollections
**********************************************/
export interface UtilityCollections {

}

/*********************************************
* WopiHostUtility
**********************************************/
export interface WopiHostUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WopiHostUtilityCollections
**********************************************/
export interface WopiHostUtilityCollections {

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
* WopiPropertiesCollections
**********************************************/
export interface WopiPropertiesCollections {

}

/*********************************************
* UploadStatus
**********************************************/
export interface UploadStatus {
	ExpectedContentRange?: string;
	ExpirationDateTime?: any;
	UploadId?: any;
}

/*********************************************
* UploadStatusCollections
**********************************************/
export interface UploadStatusCollections {

}
