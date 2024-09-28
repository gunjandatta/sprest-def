import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* IHomeSiteNavigationSettings
**********************************************/
export interface IHomeSiteNavigationSettings extends HomeSiteNavigationSettingsCollections, HomeSiteNavigationSettingsMethods, Base.IBaseQuery<HomeSiteNavigationSettings, IHomeSiteNavigationSettingsQuery> {

}

/*********************************************
* IHomeSiteNavigationSettingsCollection
**********************************************/
export interface IHomeSiteNavigationSettingsCollection extends Base.IBaseResults<HomeSiteNavigationSettings> {
	done?: (resolve: (value?: Array<HomeSiteNavigationSettings>) => void) => void;
}

/*********************************************
* IHomeSiteNavigationSettingsQueryCollection
**********************************************/
export interface IHomeSiteNavigationSettingsQueryCollection extends Base.IBaseResults<HomeSiteNavigationSettingsOData> {
	done?: (resolve: (value?: Array<HomeSiteNavigationSettingsOData>) => void) => void;
}

/*********************************************
* IHomeSiteNavigationSettingsQuery
**********************************************/
export interface IHomeSiteNavigationSettingsQuery extends HomeSiteNavigationSettingsOData, HomeSiteNavigationSettingsMethods {

}

/*********************************************
* HomeSiteNavigationSettings
**********************************************/
export interface HomeSiteNavigationSettings extends Base.IBaseResult, HomeSiteNavigationSettingsProps, HomeSiteNavigationSettingsCollections, HomeSiteNavigationSettingsMethods {

}

/*********************************************
* HomeSiteNavigationSettingsProps
**********************************************/
export interface HomeSiteNavigationSettingsProps {
	IsEnabled?: boolean;
}

/*********************************************
* HomeSiteNavigationSettingsPropMethods
**********************************************/
export interface HomeSiteNavigationSettingsPropMethods {

}

/*********************************************
* HomeSiteNavigationSettingsCollections
**********************************************/
export interface HomeSiteNavigationSettingsCollections extends HomeSiteNavigationSettingsPropMethods {

}

/*********************************************
* HomeSiteNavigationSettingsOData
**********************************************/
export interface HomeSiteNavigationSettingsOData extends Base.IBaseResult, HomeSiteNavigationSettingsProps, HomeSiteNavigationSettingsMethods {

}

/*********************************************
* HomeSiteNavigationSettingsMethods
**********************************************/
export interface HomeSiteNavigationSettingsMethods {
	enableGlobalNavigation(isEnabled?: boolean): Base.IBaseExecution<any>;
}

/*********************************************
* INavigationServiceRest
**********************************************/
export interface INavigationServiceRest extends NavigationServiceRestCollections, NavigationServiceRestMethods, Base.IBaseQuery<NavigationServiceRest, INavigationServiceRestQuery> {

}

/*********************************************
* INavigationServiceRestCollection
**********************************************/
export interface INavigationServiceRestCollection extends Base.IBaseResults<NavigationServiceRest> {
	done?: (resolve: (value?: Array<NavigationServiceRest>) => void) => void;
}

/*********************************************
* INavigationServiceRestQueryCollection
**********************************************/
export interface INavigationServiceRestQueryCollection extends Base.IBaseResults<NavigationServiceRestOData> {
	done?: (resolve: (value?: Array<NavigationServiceRestOData>) => void) => void;
}

/*********************************************
* INavigationServiceRestQuery
**********************************************/
export interface INavigationServiceRestQuery extends NavigationServiceRestOData, NavigationServiceRestMethods {

}

/*********************************************
* NavigationServiceRest
**********************************************/
export interface NavigationServiceRest extends Base.IBaseResult, NavigationServiceRestProps, NavigationServiceRestCollections, NavigationServiceRestMethods {

}

/*********************************************
* NavigationServiceRestProps
**********************************************/
export interface NavigationServiceRestProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NavigationServiceRestPropMethods
**********************************************/
export interface NavigationServiceRestPropMethods {
	HomeSiteSettings(): Base.IBaseExecution<Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettings> & Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettingsCollections & Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettingsMethods;
}

/*********************************************
* NavigationServiceRestCollections
**********************************************/
export interface NavigationServiceRestCollections extends NavigationServiceRestPropMethods {

}

/*********************************************
* NavigationServiceRestOData
**********************************************/
export interface NavigationServiceRestOData extends Base.IBaseResult, NavigationServiceRestProps, NavigationServiceRestMethods {
	HomeSiteSettings: Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettings & Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettingsCollections;
}

/*********************************************
* NavigationServiceRestMethods
**********************************************/
export interface NavigationServiceRestMethods {
	currentResourcesNav(source?: number, includeVivaResources?: boolean): Base.IBaseExecution<SP.MenuState>;
	getPublishingNavigationProviderType(mapProviderName?: string): Base.IBaseExecution<number>;
	globalNav(source?: string, includeVivaResources?: boolean): Base.IBaseExecution<SP.MenuState>;
	globalNavEnabled(): Base.IBaseExecution<boolean>;
	homeSiteNavigation(source?: number): Base.IBaseExecution<SP.MenuState>;
	menuNodeKey(currentUrl?: string, mapProviderName?: string): Base.IBaseExecution<string>;
	menuState(menuNodeKey?: string, mapProviderName?: string, depth?: number, customProperties?: string): Base.IBaseExecution<SP.MenuState>;
	saveMenuState(menuState?: SP.MenuState, mapProviderName?: string): Base.IBaseExecution<number>;
	setGlobalNavEnabled(isEnabled?: boolean): Base.IBaseExecution<any>;
}
