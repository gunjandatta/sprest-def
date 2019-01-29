import { SP } from "../../../../";

/*********************************************
* NavigationServiceRest
**********************************************/
export interface NavigationServiceRest {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NavigationServiceRestMethods<T = any>
**********************************************/
export interface NavigationServiceRestMethods<T = any> {
	getPublishingNavigationProviderType(mapProviderName?: string): T;
	menuNodeKey(currentUrl?: string, mapProviderName?: string): T;
	menuState(menuNodeKey?: string, mapProviderName?: string, depth?: number, customProperties?: string): T;
	saveMenuState(menuState?: SP.MenuState, mapProviderName?: string): T;
}
