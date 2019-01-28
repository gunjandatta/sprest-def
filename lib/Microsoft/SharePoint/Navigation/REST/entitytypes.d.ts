

/*********************************************
* NavigationServiceRest
**********************************************/
export interface NavigationServiceRest {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NavigationServiceRestMethods
**********************************************/
export interface NavigationServiceRestMethods {
	getPublishingNavigationProviderType<T=number>(mapProviderName?: string): T;
	menuNodeKey<T=string>(currentUrl?: string, mapProviderName?: string): T;
	menuState<T=SP.MenuState>(menuNodeKey?: string, mapProviderName?: string, depth?: number, customProperties?: string): T;
	saveMenuState<T=number>(menuState?: SP.MenuState, mapProviderName?: string): T;
}
