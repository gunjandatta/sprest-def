import { IBaseExecution } from "../../../../../";
import { IBaseQuery } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISignalStore
**********************************************/
export interface ISignalStore extends SignalStoreCollections,SignalStoreMethods,IBaseQuery<ISignalStoreQuery> {

}

/*********************************************
* ISignalStoreQuery
**********************************************/
export interface ISignalStoreQuery extends SignalStoreQuery,SignalStoreMethods {

}

/*********************************************
* SignalStore
**********************************************/
export interface SignalStore extends SignalStoreCollections, SignalStoreMethods {

}

/*********************************************
* SignalStoreProps
**********************************************/
export interface SignalStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SignalStorePropMethods
**********************************************/
export interface SignalStorePropMethods {

}

/*********************************************
* SignalStoreCollections
**********************************************/
export interface SignalStoreCollections extends SignalStoreProps, SignalStorePropMethods {

}

/*********************************************
* SignalStoreQuery
**********************************************/
export interface SignalStoreQuery extends SignalStoreProps,SignalStoreMethods {

}

/*********************************************
* SignalStoreMethods
**********************************************/
export interface SignalStoreMethods {
	signals(signals?: Array<Microsoft.SharePoint.Client.Search.Analytics.AnalyticsSignal>): IBaseExecution<any>;
}
