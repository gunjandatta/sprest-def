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
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ExternalSubscriptionStoreProps
**********************************************/
export interface ExternalSubscriptionStoreProps {

}

/*********************************************
* ExternalSubscriptionStoreCollections
**********************************************/
export interface ExternalSubscriptionStoreCollections extends ExternalSubscriptionStoreProps {

}

/*********************************************
* ExternalSubscriptionStoreQuery
**********************************************/
export interface ExternalSubscriptionStoreQuery extends ExternalSubscriptionStoreProps {

}

/*********************************************
* ExternalSubscriptionStoreMethods
**********************************************/
export interface ExternalSubscriptionStoreMethods {
	indexStore(): IBaseExecution<any>;
}
