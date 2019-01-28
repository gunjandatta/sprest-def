

/*********************************************
* DirectoryNotification
**********************************************/
export interface DirectoryNotification {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectoryNotificationMethods
**********************************************/
export interface DirectoryNotificationMethods {
	notifyChanges<T=void>(directoryObjectChanges?: SP.Directory.Provider.DirectoryObjectChanges): T;
}

/*********************************************
* SharePointDirectoryProvider
**********************************************/
export interface SharePointDirectoryProvider {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointDirectoryProviderMethods
**********************************************/
export interface SharePointDirectoryProviderMethods {
	createDirectoryObject<T=SP.Directory.Provider.DirectoryObjectData>(data?: SP.Directory.Provider.DirectoryObjectData): T;
	deleteDirectoryObject<T=void>(data?: SP.Directory.Provider.DirectoryObjectData): T;
	getOrCreateUnifiedGroupTenantInstanceId<T=any>(groupId?: any, tenantInstanceId?: any): T;
	notifyDataChanges<T=void>(data?: SP.Directory.Provider.DirectoryObjectData): T;
	readDirectoryObject<T=SP.Directory.Provider.DirectoryObjectData>(data?: SP.Directory.Provider.DirectoryObjectData): T;
	readDirectoryObjectBatch<T=Array<SP.Directory.Provider.DirectoryObjectData>>(ids?: Array<any>, objectType?: number): T;
	updateCache<T=void>(data?: SP.Directory.Provider.DirectoryObjectData): T;
	updateDirectoryObject<T=void>(data?: SP.Directory.Provider.DirectoryObjectData): T;
}
