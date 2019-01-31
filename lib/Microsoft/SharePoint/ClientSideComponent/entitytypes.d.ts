import { IBaseExecution } from "../../../";

/*********************************************
* IHostedAppsManager
**********************************************/
export interface IHostedAppsManager extends HostedAppsManagerProps,HostedAppsManagerMethods,IBaseExecution<HostedAppsManager> {

}

/*********************************************
* HostedAppsManager
**********************************************/
export interface HostedAppsManager extends HostedAppsManagerProps, HostedAppsManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppsManagerProps
**********************************************/
export interface HostedAppsManagerProps {

}

/*********************************************
* HostedAppsManagerMethods
**********************************************/
export interface HostedAppsManagerMethods {
	add<T=number>(webPartDataAsJson?: string, hostType?: string): IBaseExecution<T>;
	getById<T=Microsoft.SharePoint.ClientSideComponent.HostedApp>(id?: number): IBaseExecution<T>;
}

/*********************************************
* IHostedApp
**********************************************/
export interface IHostedApp extends HostedAppProps,HostedAppMethods,IBaseExecution<HostedApp> {

}

/*********************************************
* HostedApp
**********************************************/
export interface HostedApp extends HostedAppProps, HostedAppMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppProps
**********************************************/
export interface HostedAppProps {

}

/*********************************************
* HostedAppMethods
**********************************************/
export interface HostedAppMethods {
	delete<T=any>(): IBaseExecution<T>;
	updateWebPartData<T=any>(webPartDataAsJson?: string): IBaseExecution<T>;
}

/*********************************************
* StorageEntity
**********************************************/
export interface StorageEntity {
	Comment?: string;
	Description?: string;
	Value?: string;
}
