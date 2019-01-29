

/*********************************************
* HostedAppsManager
**********************************************/
export interface HostedAppsManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppsManagerMethods<T = any>
**********************************************/
export interface HostedAppsManagerMethods<T = any> {
	add(webPartDataAsJson?: string, hostType?: string): T;
	getById(id?: number): T;
}

/*********************************************
* HostedApp
**********************************************/
export interface HostedApp {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppMethods<T = any>
**********************************************/
export interface HostedAppMethods<T = any> {
	delete(): T;
	updateWebPartData(webPartDataAsJson?: string): T;
}

/*********************************************
* StorageEntity
**********************************************/
export interface StorageEntity {
	Comment?: string;
	Description?: string;
	Value?: string;
}
