import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";

/*********************************************
* IAppCollection
**********************************************/
export interface IAppCollection extends AppCollectionCollections, AppCollectionMethods, IBaseQuery<IAppCollectionQuery> {

}

/*********************************************
* IAppCollectionCollection
**********************************************/
export interface IAppCollectionCollection extends IBaseResults<AppCollection> {
	done?: (resolve: (value?: Array<AppCollection>) => void) => void;
}

/*********************************************
* IAppCollectionQueryCollection
**********************************************/
export interface IAppCollectionQueryCollection extends IBaseResults<AppCollectionOData> {
	done?: (resolve: (value?: Array<AppCollectionOData>) => void) => void;
}

/*********************************************
* IAppCollectionQuery
**********************************************/
export interface IAppCollectionQuery extends AppCollectionOData, AppCollectionMethods {

}

/*********************************************
* AppCollection
**********************************************/
export interface AppCollection extends IBaseResult, AppCollectionProps, AppCollectionCollections, AppCollectionMethods {

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
* AppCollectionOData
**********************************************/
export interface AppCollectionOData extends IBaseResult, AppCollectionProps, AppCollectionMethods {

}

/*********************************************
* AppCollectionMethods
**********************************************/
export interface AppCollectionMethods {
	getAppsFromStore(addInType?: string, queryString?: string): IBaseExecution<string>;
	getByType(type?: string): IBaseExecution<string>;
}
