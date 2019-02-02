import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IHostedAppsManager
**********************************************/
export interface IHostedAppsManager extends HostedAppsManagerCollections, HostedAppsManagerMethods, IBaseQuery<IHostedAppsManagerQuery> {

}

/*********************************************
* IHostedAppsManagerCollection
**********************************************/
export interface IHostedAppsManagerCollection extends IBaseResults<HostedAppsManager> {
	done?: (resolve: (value?: Array<HostedAppsManager>) => void) => void;
}

/*********************************************
* IHostedAppsManagerQueryCollection
**********************************************/
export interface IHostedAppsManagerQueryCollection extends IBaseResults<HostedAppsManagerQuery> {
	done?: (resolve: (value?: Array<HostedAppsManagerQuery>) => void) => void;
}

/*********************************************
* IHostedAppsManagerQuery
**********************************************/
export interface IHostedAppsManagerQuery extends HostedAppsManagerQuery, HostedAppsManagerMethods {

}

/*********************************************
* HostedAppsManager
**********************************************/
export interface HostedAppsManager extends IBaseResult, HostedAppsManagerProps, HostedAppsManagerCollections, HostedAppsManagerMethods {

}

/*********************************************
* HostedAppsManagerProps
**********************************************/
export interface HostedAppsManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppsManagerPropMethods
**********************************************/
export interface HostedAppsManagerPropMethods {

}

/*********************************************
* HostedAppsManagerCollections
**********************************************/
export interface HostedAppsManagerCollections extends HostedAppsManagerPropMethods {

}

/*********************************************
* HostedAppsManagerQuery
**********************************************/
export interface HostedAppsManagerQuery extends IBaseResult, HostedAppsManagerProps, HostedAppsManagerMethods {

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
export interface IHostedApp extends HostedAppCollections, HostedAppMethods, IBaseQuery<IHostedAppQuery> {

}

/*********************************************
* IHostedAppCollection
**********************************************/
export interface IHostedAppCollection extends IBaseResults<HostedApp> {
	done?: (resolve: (value?: Array<HostedApp>) => void) => void;
}

/*********************************************
* IHostedAppQueryCollection
**********************************************/
export interface IHostedAppQueryCollection extends IBaseResults<HostedAppQuery> {
	done?: (resolve: (value?: Array<HostedAppQuery>) => void) => void;
}

/*********************************************
* IHostedAppQuery
**********************************************/
export interface IHostedAppQuery extends HostedAppQuery, HostedAppMethods {

}

/*********************************************
* HostedApp
**********************************************/
export interface HostedApp extends IBaseResult, HostedAppProps, HostedAppCollections, HostedAppMethods {

}

/*********************************************
* HostedAppProps
**********************************************/
export interface HostedAppProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppPropMethods
**********************************************/
export interface HostedAppPropMethods {

}

/*********************************************
* HostedAppCollections
**********************************************/
export interface HostedAppCollections extends HostedAppPropMethods {

}

/*********************************************
* HostedAppQuery
**********************************************/
export interface HostedAppQuery extends IBaseResult, HostedAppProps, HostedAppMethods {

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

/*********************************************
* StorageEntityCollections
**********************************************/
export interface StorageEntityCollections {

}
