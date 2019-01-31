import { IBaseExecution } from "../../../../";

/*********************************************
* IAppLauncher
**********************************************/
export interface IAppLauncher extends AppLauncherProps,AppLauncherMethods,IBaseExecution<AppLauncher> {

}

/*********************************************
* AppLauncher
**********************************************/
export interface AppLauncher extends AppLauncherProps, AppLauncherMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppLauncherProps
**********************************************/
export interface AppLauncherProps {

}

/*********************************************
* AppLauncherMethods
**********************************************/
export interface AppLauncherMethods {
	getData<T=string>(suiteVersion?: number, isMobileRequest?: boolean, locale?: string, onPremVer?: string): IBaseExecution<T>;
}
