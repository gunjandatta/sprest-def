import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../";

/*********************************************
* IAppLauncher
**********************************************/
export interface IAppLauncher extends AppLauncherCollections, AppLauncherMethods, IBaseQuery<IAppLauncherQuery> {

}

/*********************************************
* IAppLauncherCollection
**********************************************/
export interface IAppLauncherCollection extends IBaseResults<AppLauncher> {
	done?: (resolve: (value?: Array<AppLauncher>) => void) => void;
}

/*********************************************
* IAppLauncherQueryCollection
**********************************************/
export interface IAppLauncherQueryCollection extends IBaseResults<AppLauncherQuery> {
	done?: (resolve: (value?: Array<AppLauncherQuery>) => void) => void;
}

/*********************************************
* IAppLauncherQuery
**********************************************/
export interface IAppLauncherQuery extends AppLauncherQuery, AppLauncherMethods {

}

/*********************************************
* AppLauncher
**********************************************/
export interface AppLauncher extends IBaseResult, AppLauncherProps, AppLauncherCollections, AppLauncherMethods {

}

/*********************************************
* AppLauncherProps
**********************************************/
export interface AppLauncherProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppLauncherPropMethods
**********************************************/
export interface AppLauncherPropMethods {

}

/*********************************************
* AppLauncherCollections
**********************************************/
export interface AppLauncherCollections extends AppLauncherPropMethods {

}

/*********************************************
* AppLauncherQuery
**********************************************/
export interface AppLauncherQuery extends IBaseResult, AppLauncherProps, AppLauncherMethods {

}

/*********************************************
* AppLauncherMethods
**********************************************/
export interface AppLauncherMethods {
	getData(suiteVersion?: number, isMobileRequest?: boolean, locale?: string, onPremVer?: string): IBaseExecution<string>;
}
