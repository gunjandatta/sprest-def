import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* IExternalSubscriptionStore
**********************************************/
export interface IExternalSubscriptionStore extends ExternalSubscriptionStoreCollections,ExternalSubscriptionStoreMethods,IBaseQuery<IExternalSubscriptionStoreQuery> {

}

/*********************************************
* IExternalSubscriptionStoreQuery
**********************************************/
export interface IExternalSubscriptionStoreQuery extends ExternalSubscriptionStoreQuery,ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStore
**********************************************/
export interface ExternalSubscriptionStore extends ExternalSubscriptionStoreCollections, ExternalSubscriptionStoreMethods {

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
export interface ExternalSubscriptionStoreCollections extends ExternalSubscriptionStoreProps, ExternalSubscriptionStorePropMethods {

}

/*********************************************
* ExternalSubscriptionStoreQuery
**********************************************/
export interface ExternalSubscriptionStoreQuery extends ExternalSubscriptionStoreProps,ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStoreMethods
**********************************************/
export interface ExternalSubscriptionStoreMethods {
	indexStore(): IBaseExecution<any>;
}
