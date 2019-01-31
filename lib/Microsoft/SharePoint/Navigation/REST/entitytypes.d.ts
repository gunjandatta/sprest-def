import { IBaseExecution } from "../../../../";

/*********************************************
* INavigationServiceRest
**********************************************/
export interface INavigationServiceRest extends NavigationServiceRestProps,NavigationServiceRestMethods,IBaseExecution<NavigationServiceRest> {

}

/*********************************************
* NavigationServiceRest
**********************************************/
export interface NavigationServiceRest extends NavigationServiceRestProps, NavigationServiceRestMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NavigationServiceRestProps
**********************************************/
export interface NavigationServiceRestProps {

}

/*********************************************
* NavigationServiceRestMethods
**********************************************/
export interface NavigationServiceRestMethods {
	getPublishingNavigationProviderType<T=number>(mapProviderName?: string): IBaseExecution<T>;
	menuNodeKey<T=string>(currentUrl?: string, mapProviderName?: string): IBaseExecution<T>;
	menuState<T=SP.MenuState>(menuNodeKey?: string, mapProviderName?: string, depth?: number, customProperties?: string): IBaseExecution<T>;
	saveMenuState<T=number>(menuState?: SP.MenuState, mapProviderName?: string): IBaseExecution<T>;
}
