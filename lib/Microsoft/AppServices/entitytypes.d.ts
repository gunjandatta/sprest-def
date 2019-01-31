import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";

/*********************************************
* IAppCollection
**********************************************/
export interface IAppCollection extends AppCollectionCollections,AppCollectionMethods,IBaseQuery<IAppCollectionQuery> {

}

/*********************************************
* IAppCollectionQuery
**********************************************/
export interface IAppCollectionQuery extends AppCollectionQuery,AppCollectionMethods {

}

/*********************************************
* AppCollection
**********************************************/
export interface AppCollection extends AppCollectionCollections, AppCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCollectionProps
**********************************************/
export interface AppCollectionProps {

}

/*********************************************
* AppCollectionCollections
**********************************************/
export interface AppCollectionCollections extends AppCollectionProps {

}

/*********************************************
* AppCollectionQuery
**********************************************/
export interface AppCollectionQuery extends AppCollectionProps {

}

/*********************************************
* AppCollectionMethods
**********************************************/
export interface AppCollectionMethods {
	getAppsFromStore(addInType?: string, queryString?: string): IBaseExecution<string>;
	getByType(type?: string): IBaseExecution<string>;
}
