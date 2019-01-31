import { IBaseExecution } from "../../../";

/*********************************************
* IExternalSubscriptionStore
**********************************************/
export interface IExternalSubscriptionStore extends ExternalSubscriptionStoreProps,ExternalSubscriptionStoreMethods,IBaseExecution<ExternalSubscriptionStore> {

}

/*********************************************
* ExternalSubscriptionStore
**********************************************/
export interface ExternalSubscriptionStore extends ExternalSubscriptionStoreProps, ExternalSubscriptionStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ExternalSubscriptionStoreProps
**********************************************/
export interface ExternalSubscriptionStoreProps {

}

/*********************************************
* ExternalSubscriptionStoreMethods
**********************************************/
export interface ExternalSubscriptionStoreMethods {
	indexStore<T=any>(): IBaseExecution<T>;
}
