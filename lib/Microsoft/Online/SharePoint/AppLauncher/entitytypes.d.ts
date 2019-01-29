

/*********************************************
* AppLauncher
**********************************************/
export interface AppLauncher {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppLauncherMethods<T = any>
**********************************************/
export interface AppLauncherMethods<T = any> {
	getData(suiteVersion?: number, isMobileRequest?: boolean, locale?: string, onPremVer?: string): T;
}
