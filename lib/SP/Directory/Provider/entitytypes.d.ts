import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";
import { SP } from "../../../";

/*********************************************
* IDirectoryNotification
**********************************************/
export interface IDirectoryNotification extends DirectoryNotificationCollections,DirectoryNotificationMethods,IBaseQuery<IDirectoryNotificationQuery> {

}

/*********************************************
* IDirectoryNotificationQuery
**********************************************/
export interface IDirectoryNotificationQuery extends DirectoryNotificationQuery, DirectoryNotificationMethods {

}

/*********************************************
* DirectoryNotification
**********************************************/
export interface DirectoryNotification extends DirectoryNotificationProps, DirectoryNotificationCollections, DirectoryNotificationMethods {

}

/*********************************************
* DirectoryNotificationProps
**********************************************/
export interface DirectoryNotificationProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectoryNotificationPropMethods
**********************************************/
export interface DirectoryNotificationPropMethods {

}

/*********************************************
* DirectoryNotificationCollections
**********************************************/
export interface DirectoryNotificationCollections extends DirectoryNotificationPropMethods {

}

/*********************************************
* DirectoryNotificationQuery
**********************************************/
export interface DirectoryNotificationQuery extends DirectoryNotificationProps, DirectoryNotificationMethods {

}

/*********************************************
* DirectoryNotificationMethods
**********************************************/
export interface DirectoryNotificationMethods {
	notifyChanges(directoryObjectChanges?: SP.Directory.Provider.DirectoryObjectChanges): IBaseExecution<any>;
}

/*********************************************
* ISharePointDirectoryProvider
**********************************************/
export interface ISharePointDirectoryProvider extends SharePointDirectoryProviderCollections,SharePointDirectoryProviderMethods,IBaseQuery<ISharePointDirectoryProviderQuery> {

}

/*********************************************
* ISharePointDirectoryProviderQuery
**********************************************/
export interface ISharePointDirectoryProviderQuery extends SharePointDirectoryProviderQuery, SharePointDirectoryProviderMethods {

}

/*********************************************
* SharePointDirectoryProvider
**********************************************/
export interface SharePointDirectoryProvider extends SharePointDirectoryProviderProps, SharePointDirectoryProviderCollections, SharePointDirectoryProviderMethods {

}

/*********************************************
* SharePointDirectoryProviderProps
**********************************************/
export interface SharePointDirectoryProviderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointDirectoryProviderPropMethods
**********************************************/
export interface SharePointDirectoryProviderPropMethods {

}

/*********************************************
* SharePointDirectoryProviderCollections
**********************************************/
export interface SharePointDirectoryProviderCollections extends SharePointDirectoryProviderPropMethods {

}

/*********************************************
* SharePointDirectoryProviderQuery
**********************************************/
export interface SharePointDirectoryProviderQuery extends SharePointDirectoryProviderProps, SharePointDirectoryProviderMethods {

}

/*********************************************
* SharePointDirectoryProviderMethods
**********************************************/
export interface SharePointDirectoryProviderMethods {
	createDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<SP.Directory.Provider.DirectoryObjectData>;
	deleteDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<any>;
	getOrCreateUnifiedGroupTenantInstanceId(groupId?: any, tenantInstanceId?: any): IBaseExecution<any>;
	notifyDataChanges(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<any>;
	readDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<SP.Directory.Provider.DirectoryObjectData>;
	readDirectoryObjectBatch(ids?: Array<any>, objectType?: number): IBaseCollection<SP.Directory.Provider.DirectoryObjectData>;
	updateCache(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<any>;
	updateDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<any>;
}
