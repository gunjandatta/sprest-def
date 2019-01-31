import { IBaseExecution } from "../../../../";
import { IBaseQuery } from "../../../../";

/*********************************************
* IAppLauncher
**********************************************/
export interface IAppLauncher extends AppLauncherCollections,AppLauncherMethods,IBaseQuery<IAppLauncherQuery> {

}

/*********************************************
* IAppLauncherQuery
**********************************************/
export interface IAppLauncherQuery extends AppLauncherQuery,AppLauncherMethods {

}

/*********************************************
* AppLauncher
**********************************************/
export interface AppLauncher extends AppLauncherCollections, AppLauncherMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppLauncherProps
**********************************************/
export interface AppLauncherProps {

}

/*********************************************
* AppLauncherCollections
**********************************************/
export interface AppLauncherCollections extends AppLauncherProps {

}

/*********************************************
* AppLauncherQuery
**********************************************/
export interface AppLauncherQuery extends AppLauncherProps {

}

/*********************************************
* AppLauncherMethods
**********************************************/
export interface AppLauncherMethods {
	getData(suiteVersion?: number, isMobileRequest?: boolean, locale?: string, onPremVer?: string): IBaseExecution<string>;
}
