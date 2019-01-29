import { SP } from "../../../";

/*********************************************
* DirectoryNotification
**********************************************/
export interface DirectoryNotification {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectoryNotificationMethods<T = any>
**********************************************/
export interface DirectoryNotificationMethods<T = any> {
	notifyChanges(directoryObjectChanges?: SP.Directory.Provider.DirectoryObjectChanges): T;
}

/*********************************************
* SharePointDirectoryProvider
**********************************************/
export interface SharePointDirectoryProvider {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointDirectoryProviderMethods<T = any>
**********************************************/
export interface SharePointDirectoryProviderMethods<T = any> {
	createDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): T;
	deleteDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): T;
	getOrCreateUnifiedGroupTenantInstanceId(groupId?: any, tenantInstanceId?: any): T;
	notifyDataChanges(data?: SP.Directory.Provider.DirectoryObjectData): T;
	readDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): T;
	readDirectoryObjectBatch(ids?: Array<any>, objectType?: number): T;
	updateCache(data?: SP.Directory.Provider.DirectoryObjectData): T;
	updateDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): T;
}
