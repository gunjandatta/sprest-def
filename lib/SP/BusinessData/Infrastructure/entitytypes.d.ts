import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* IExternalSubscriptionStore
**********************************************/
export interface IExternalSubscriptionStore extends ExternalSubscriptionStoreCollections,ExternalSubscriptionStoreMethods,IBaseQuery<IExternalSubscriptionStoreQuery> {

}

/*********************************************
* IExternalSubscriptionStoreCollection
**********************************************/
export interface IExternalSubscriptionStoreCollection extends IBaseResults<ExternalSubscriptionStore> {

}

/*********************************************
* IExternalSubscriptionStoreQueryCollection
**********************************************/
export interface IExternalSubscriptionStoreQueryCollection extends IBaseResults<ExternalSubscriptionStoreQuery> {

}

/*********************************************
* IExternalSubscriptionStoreQuery
**********************************************/
export interface IExternalSubscriptionStoreQuery extends ExternalSubscriptionStoreQuery, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStore
**********************************************/
export interface ExternalSubscriptionStore extends ExternalSubscriptionStoreProps, ExternalSubscriptionStoreCollections, ExternalSubscriptionStoreMethods {

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
export interface ExternalSubscriptionStoreQuery extends ExternalSubscriptionStoreProps, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStoreMethods
**********************************************/
export interface ExternalSubscriptionStoreMethods {
	indexStore(): IBaseExecution<any>;
}
