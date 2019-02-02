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
export interface IAppLauncherQueryCollection extends IBaseResults<AppLauncherOData> {
	done?: (resolve: (value?: Array<AppLauncherOData>) => void) => void;
}

/*********************************************
* IAppLauncherQuery
**********************************************/
export interface IAppLauncherQuery extends AppLauncherOData, AppLauncherMethods {

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
* AppLauncherOData
**********************************************/
export interface AppLauncherOData extends IBaseResult, AppLauncherProps, AppLauncherMethods {

}

/*********************************************
* AppLauncherMethods
**********************************************/
export interface AppLauncherMethods {
	getData(suiteVersion?: number, isMobileRequest?: boolean, locale?: string, onPremVer?: string): IBaseExecution<string>;
}
