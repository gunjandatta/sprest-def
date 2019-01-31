import { IBaseExecution } from "../../";

/*********************************************
* IAppCollection
**********************************************/
export interface IAppCollection extends AppCollectionProps,AppCollectionMethods,IBaseExecution<AppCollection> {

}

/*********************************************
* AppCollection
**********************************************/
export interface AppCollection extends AppCollectionProps, AppCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCollectionProps
**********************************************/
export interface AppCollectionProps {

}

/*********************************************
* AppCollectionMethods
**********************************************/
export interface AppCollectionMethods {
	getAppsFromStore<T=string>(addInType?: string, queryString?: string): IBaseExecution<T>;
	getByType<T=string>(type?: string): IBaseExecution<T>;
}
