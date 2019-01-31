import { IBaseExecution } from "../../../../../";

/*********************************************
* IDDIAdapter
**********************************************/
export interface IDDIAdapter extends DDIAdapterProps,DDIAdapterMethods,IBaseExecution<DDIAdapter> {

}

/*********************************************
* DDIAdapter
**********************************************/
export interface DDIAdapter extends DDIAdapterProps, DDIAdapterMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DDIAdapterProps
**********************************************/
export interface DDIAdapterProps {

}

/*********************************************
* DDIAdapterMethods
**********************************************/
export interface DDIAdapterMethods {
	getList<T=string>(schema?: string, workflow?: string, stream?: any): IBaseExecution<T>;
	getObject<T=string>(schema?: string, workflow?: string, stream?: any): IBaseExecution<T>;
	multiObjectExecute<T=string>(schema?: string, workflow?: string, stream?: any): IBaseExecution<T>;
	newObject<T=string>(schema?: string, workflow?: string, stream?: any): IBaseExecution<T>;
	removeObjects<T=string>(schema?: string, workflow?: string, stream?: any): IBaseExecution<T>;
	setObject<T=string>(schema?: string, workflow?: string, stream?: any): IBaseExecution<T>;
}
