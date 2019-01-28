

/*********************************************
* DDIAdapter
**********************************************/
export interface DDIAdapter {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DDIAdapterMethods
**********************************************/
export interface DDIAdapterMethods {
	getList<T=string>(schema?: string, workflow?: string, stream?: any): T;
	getObject<T=string>(schema?: string, workflow?: string, stream?: any): T;
	multiObjectExecute<T=string>(schema?: string, workflow?: string, stream?: any): T;
	newObject<T=string>(schema?: string, workflow?: string, stream?: any): T;
	removeObjects<T=string>(schema?: string, workflow?: string, stream?: any): T;
	setObject<T=string>(schema?: string, workflow?: string, stream?: any): T;
}
