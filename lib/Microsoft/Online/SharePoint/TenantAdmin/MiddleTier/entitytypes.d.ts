import { IBaseExecution, IBaseResult } from "../../../../../";

/*********************************************
* IDDIAdapter
**********************************************/
export interface IDDIAdapter extends DDIAdapterCollections,DDIAdapterMethods,IBaseQuery<IDDIAdapterQuery> {

}

/*********************************************
* IDDIAdapterCollection
**********************************************/
export interface IDDIAdapterCollection extends IBaseResults<DDIAdapter> {
	done(resolve: (value?: Array<DDIAdapter | any>) => void);
}

/*********************************************
* IDDIAdapterQueryCollection
**********************************************/
export interface IDDIAdapterQueryCollection extends IBaseResults<DDIAdapterQuery> {
	done(resolve: (value?: Array<DDIAdapterQuery | any>) => void);
}

/*********************************************
* IDDIAdapterQuery
**********************************************/
export interface IDDIAdapterQuery extends DDIAdapterQuery, DDIAdapterMethods {

}

/*********************************************
* DDIAdapter
**********************************************/
export interface DDIAdapter extends IBaseResult, DDIAdapterProps, DDIAdapterCollections, DDIAdapterMethods {

}

/*********************************************
* DDIAdapterProps
**********************************************/
export interface DDIAdapterProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DDIAdapterPropMethods
**********************************************/
export interface DDIAdapterPropMethods {

}

/*********************************************
* DDIAdapterCollections
**********************************************/
export interface DDIAdapterCollections extends DDIAdapterPropMethods {

}

/*********************************************
* DDIAdapterQuery
**********************************************/
export interface DDIAdapterQuery extends IBaseResult, DDIAdapterProps, DDIAdapterMethods {

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
