import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* IHostedAppsManager
**********************************************/
export interface IHostedAppsManager extends HostedAppsManagerCollections,HostedAppsManagerMethods,IBaseQuery<IHostedAppsManagerQuery> {

}

/*********************************************
* IHostedAppsManagerQuery
**********************************************/
export interface IHostedAppsManagerQuery extends HostedAppsManagerQuery,HostedAppsManagerMethods {

}

/*********************************************
* HostedAppsManager
**********************************************/
export interface HostedAppsManager extends HostedAppsManagerCollections, HostedAppsManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppsManagerProps
**********************************************/
export interface HostedAppsManagerProps {

}

/*********************************************
* HostedAppsManagerCollections
**********************************************/
export interface HostedAppsManagerCollections extends HostedAppsManagerProps {

}

/*********************************************
* HostedAppsManagerQuery
**********************************************/
export interface HostedAppsManagerQuery extends HostedAppsManagerProps {

}

/*********************************************
* HostedAppsManagerMethods
**********************************************/
export interface HostedAppsManagerMethods {
	add(webPartDataAsJson?: string, hostType?: string): IBaseExecution<number>;
	getById(id?: number): IBaseExecution<Microsoft.SharePoint.ClientSideComponent.HostedApp>;
}

/*********************************************
* IHostedApp
**********************************************/
export interface IHostedApp extends HostedAppCollections,HostedAppMethods,IBaseQuery<IHostedAppQuery> {

}

/*********************************************
* IHostedAppQuery
**********************************************/
export interface IHostedAppQuery extends HostedAppQuery,HostedAppMethods {

}

/*********************************************
* HostedApp
**********************************************/
export interface HostedApp extends HostedAppCollections, HostedAppMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppProps
**********************************************/
export interface HostedAppProps {

}

/*********************************************
* HostedAppCollections
**********************************************/
export interface HostedAppCollections extends HostedAppProps {

}

/*********************************************
* HostedAppQuery
**********************************************/
export interface HostedAppQuery extends HostedAppProps {

}

/*********************************************
* HostedAppMethods
**********************************************/
export interface HostedAppMethods {
	delete(): IBaseExecution<any>;
	updateWebPartData(webPartDataAsJson?: string): IBaseExecution<any>;
}

/*********************************************
* StorageEntity
**********************************************/
export interface StorageEntity {
	Comment?: string;
	Description?: string;
	Value?: string;
}
