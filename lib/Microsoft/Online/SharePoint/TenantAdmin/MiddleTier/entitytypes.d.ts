import { IBaseExecution } from "../../../../../";
import { IBaseQuery } from "../../../../../";

/*********************************************
* IDDIAdapter
**********************************************/
export interface IDDIAdapter extends DDIAdapterCollections,DDIAdapterMethods,IBaseQuery<IDDIAdapterQuery> {

}

/*********************************************
* IDDIAdapterQuery
**********************************************/
export interface IDDIAdapterQuery extends DDIAdapterQuery,DDIAdapterMethods {

}

/*********************************************
* DDIAdapter
**********************************************/
export interface DDIAdapter extends DDIAdapterCollections, DDIAdapterMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DDIAdapterProps
**********************************************/
export interface DDIAdapterProps {

}

/*********************************************
* DDIAdapterCollections
**********************************************/
export interface DDIAdapterCollections extends DDIAdapterProps {

}

/*********************************************
* DDIAdapterQuery
**********************************************/
export interface DDIAdapterQuery extends DDIAdapterProps {

}

/*********************************************
* DDIAdapterMethods
**********************************************/
export interface DDIAdapterMethods {
	getList(schema?: string, workflow?: string, stream?: any): IBaseExecution<string>;
	getObject(schema?: string, workflow?: string, stream?: any): IBaseExecution<string>;
	multiObjectExecute(schema?: string, workflow?: string, stream?: any): IBaseExecution<string>;
	newObject(schema?: string, workflow?: string, stream?: any): IBaseExecution<string>;
	removeObjects(schema?: string, workflow?: string, stream?: any): IBaseExecution<string>;
	setObject(schema?: string, workflow?: string, stream?: any): IBaseExecution<string>;
}
