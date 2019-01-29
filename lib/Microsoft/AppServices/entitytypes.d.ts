

/*********************************************
* AppCollection
**********************************************/
export interface AppCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCollectionMethods<T = any>
**********************************************/
export interface AppCollectionMethods<T = any> {
	getAppsFromStore(addInType?: string, queryString?: string): T;
	getByType(type?: string): T;
}
