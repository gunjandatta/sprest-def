

/*********************************************
* DDIAdapter
**********************************************/
export interface DDIAdapter {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DDIAdapterMethods<T = any>
**********************************************/
export interface DDIAdapterMethods<T = any> {
	getList(schema?: string, workflow?: string, stream?: any): T;
	getObject(schema?: string, workflow?: string, stream?: any): T;
	multiObjectExecute(schema?: string, workflow?: string, stream?: any): T;
	newObject(schema?: string, workflow?: string, stream?: any): T;
	removeObjects(schema?: string, workflow?: string, stream?: any): T;
	setObject(schema?: string, workflow?: string, stream?: any): T;
}
