import { IBaseExecution } from "../../../";

/*********************************************
* IDirectoryNotification
**********************************************/
export interface IDirectoryNotification extends DirectoryNotificationProps,DirectoryNotificationMethods,IBaseExecution<DirectoryNotification> {

}

/*********************************************
* DirectoryNotification
**********************************************/
export interface DirectoryNotification extends DirectoryNotificationProps, DirectoryNotificationMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectoryNotificationProps
**********************************************/
export interface DirectoryNotificationProps {

}

/*********************************************
* DirectoryNotificationMethods
**********************************************/
export interface DirectoryNotificationMethods {
	notifyChanges<T=any>(directoryObjectChanges?: SP.Directory.Provider.DirectoryObjectChanges): IBaseExecution<T>;
}

/*********************************************
* ISharePointDirectoryProvider
**********************************************/
export interface ISharePointDirectoryProvider extends SharePointDirectoryProviderProps,SharePointDirectoryProviderMethods,IBaseExecution<SharePointDirectoryProvider> {

}

/*********************************************
* SharePointDirectoryProvider
**********************************************/
export interface SharePointDirectoryProvider extends SharePointDirectoryProviderProps, SharePointDirectoryProviderMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointDirectoryProviderProps
**********************************************/
export interface SharePointDirectoryProviderProps {

}

/*********************************************
* SharePointDirectoryProviderMethods
**********************************************/
export interface SharePointDirectoryProviderMethods {
	createDirectoryObject<T=SP.Directory.Provider.DirectoryObjectData>(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<T>;
	deleteDirectoryObject<T=any>(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<T>;
	getOrCreateUnifiedGroupTenantInstanceId<T=any>(groupId?: any, tenantInstanceId?: any): IBaseExecution<T>;
	notifyDataChanges<T=any>(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<T>;
	readDirectoryObject<T=SP.Directory.Provider.DirectoryObjectData>(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<T>;
	readDirectoryObjectBatch<T=Array<SP.Directory.Provider.DirectoryObjectData>>(ids?: Array<any>, objectType?: number): IBaseExecution<T>;
	updateCache<T=any>(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<T>;
	updateDirectoryObject<T=any>(data?: SP.Directory.Provider.DirectoryObjectData): IBaseExecution<T>;
}
