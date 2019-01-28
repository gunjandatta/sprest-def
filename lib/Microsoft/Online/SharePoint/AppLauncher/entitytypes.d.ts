

/*********************************************
* AppLauncher
**********************************************/
export interface AppLauncher {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppLauncherMethods
**********************************************/
export interface AppLauncherMethods {
	getData<T=string>(suiteVersion?: number, isMobileRequest?: boolean, locale?: string, onPremVer?: string): T;
}
