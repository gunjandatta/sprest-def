import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";

/*********************************************
* IAppCollection
**********************************************/
export interface IAppCollection extends AppCollectionCollections,AppCollectionMethods,IBaseQuery<IAppCollectionQuery> {

}

/*********************************************
* IAppCollectionCollection
**********************************************/
export interface IAppCollectionCollection extends IBaseResults<AppCollection> {

}

/*********************************************
* IAppCollectionQueryCollection
**********************************************/
export interface IAppCollectionQueryCollection extends IBaseResults<AppCollectionQuery> {

}

/*********************************************
* IAppCollectionQuery
**********************************************/
export interface IAppCollectionQuery extends AppCollectionQuery, AppCollectionMethods {

}

/*********************************************
* AppCollection
**********************************************/
export interface AppCollection extends AppCollectionProps, AppCollectionCollections, AppCollectionMethods {

}

/*********************************************
* AppCollectionProps
**********************************************/
export interface AppCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCollectionPropMethods
**********************************************/
export interface AppCollectionPropMethods {

}

/*********************************************
* AppCollectionCollections
**********************************************/
export interface AppCollectionCollections extends AppCollectionPropMethods {

}

/*********************************************
* AppCollectionQuery
**********************************************/
export interface AppCollectionQuery extends AppCollectionProps, AppCollectionMethods {

}

/*********************************************
* AppCollectionMethods
**********************************************/
export interface AppCollectionMethods {
	getAppsFromStore(addInType?: string, queryString?: string): IBaseExecution<string>;
	getByType(type?: string): IBaseExecution<string>;
}
