

/*********************************************
* AppCollection
**********************************************/
export interface AppCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCollectionMethods
**********************************************/
export interface AppCollectionMethods {
	getAppsFromStore<T=string>(addInType?: string, queryString?: string): T;
	getByType<T=string>(type?: string): T;
}
