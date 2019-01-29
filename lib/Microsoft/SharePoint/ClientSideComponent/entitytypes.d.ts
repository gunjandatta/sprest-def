

/*********************************************
* HostedAppsManager
**********************************************/
export interface HostedAppsManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppsManagerMethods
**********************************************/
export interface HostedAppsManagerMethods {
	add<T=number>(webPartDataAsJson?: string, hostType?: string): T;
	getById<T=Microsoft.SharePoint.ClientSideComponent.HostedApp>(id?: number): T;
}

/*********************************************
* HostedApp
**********************************************/
export interface HostedApp {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppMethods
**********************************************/
export interface HostedAppMethods {
	delete<T=void>(): T;
	updateWebPartData<T=void>(webPartDataAsJson?: string): T;
}

/*********************************************
* StorageEntity
**********************************************/
export interface StorageEntity {
	Comment?: string;
	Description?: string;
	Value?: string;
}
