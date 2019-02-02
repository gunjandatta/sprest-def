import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* INavigationServiceRest
**********************************************/
export interface INavigationServiceRest extends NavigationServiceRestCollections, NavigationServiceRestMethods, IBaseQuery<INavigationServiceRestQuery> {

}

/*********************************************
* INavigationServiceRestCollection
**********************************************/
export interface INavigationServiceRestCollection extends IBaseResults<NavigationServiceRest> {
	done?: (resolve: (value?: Array<NavigationServiceRest>) => void) => void;
}

/*********************************************
* INavigationServiceRestQueryCollection
**********************************************/
export interface INavigationServiceRestQueryCollection extends IBaseResults<NavigationServiceRestOData> {
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
export interface NavigationServiceRest extends IBaseResult, NavigationServiceRestProps, NavigationServiceRestCollections, NavigationServiceRestMethods {

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

}

/*********************************************
* NavigationServiceRestCollections
**********************************************/
export interface NavigationServiceRestCollections extends NavigationServiceRestPropMethods {

}

/*********************************************
* NavigationServiceRestOData
**********************************************/
export interface NavigationServiceRestOData extends IBaseResult, NavigationServiceRestProps, NavigationServiceRestMethods {

}

/*********************************************
* NavigationServiceRestMethods
**********************************************/
export interface NavigationServiceRestMethods {
	getPublishingNavigationProviderType(mapProviderName?: string): IBaseExecution<number>;
	menuNodeKey(currentUrl?: string, mapProviderName?: string): IBaseExecution<string>;
	menuState(menuNodeKey?: string, mapProviderName?: string, depth?: number, customProperties?: string): IBaseExecution<SP.MenuState>;
	saveMenuState(menuState?: SP.MenuState, mapProviderName?: string): IBaseExecution<number>;
}
