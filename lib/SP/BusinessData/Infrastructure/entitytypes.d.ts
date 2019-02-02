import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";

/*********************************************
* IExternalSubscriptionStore
**********************************************/
export interface IExternalSubscriptionStore extends ExternalSubscriptionStoreCollections, ExternalSubscriptionStoreMethods, IBaseQuery<IExternalSubscriptionStoreQuery> {

}

/*********************************************
* IExternalSubscriptionStoreCollection
**********************************************/
export interface IExternalSubscriptionStoreCollection extends IBaseResults<ExternalSubscriptionStore> {
	done?: (resolve: (value?: Array<ExternalSubscriptionStore>) => void) => void;
}

/*********************************************
* IExternalSubscriptionStoreQueryCollection
**********************************************/
export interface IExternalSubscriptionStoreQueryCollection extends IBaseResults<ExternalSubscriptionStoreQuery> {
	done?: (resolve: (value?: Array<ExternalSubscriptionStoreQuery>) => void) => void;
}

/*********************************************
* IExternalSubscriptionStoreQuery
**********************************************/
export interface IExternalSubscriptionStoreQuery extends ExternalSubscriptionStoreQuery, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStore
**********************************************/
export interface ExternalSubscriptionStore extends IBaseResult, ExternalSubscriptionStoreProps, ExternalSubscriptionStoreCollections, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStoreProps
**********************************************/
export interface ExternalSubscriptionStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ExternalSubscriptionStorePropMethods
**********************************************/
export interface ExternalSubscriptionStorePropMethods {

}

/*********************************************
* ExternalSubscriptionStoreCollections
**********************************************/
export interface ExternalSubscriptionStoreCollections extends ExternalSubscriptionStorePropMethods {

}

/*********************************************
* ExternalSubscriptionStoreQuery
**********************************************/
export interface ExternalSubscriptionStoreQuery extends IBaseResult, ExternalSubscriptionStoreProps, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStoreMethods
**********************************************/
export interface ExternalSubscriptionStoreMethods {
	indexStore(): IBaseExecution<any>;
}
