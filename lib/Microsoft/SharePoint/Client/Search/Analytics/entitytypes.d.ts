import { IBaseExecution, IBaseResult } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISignalStore
**********************************************/
export interface ISignalStore extends SignalStoreCollections,SignalStoreMethods,IBaseQuery<ISignalStoreQuery> {

}

/*********************************************
* ISignalStoreCollection
**********************************************/
export interface ISignalStoreCollection extends IBaseResults<SignalStore> {
	done(resolve: (value?: Array<SignalStore | any>) => void);
}

/*********************************************
* ISignalStoreQueryCollection
**********************************************/
export interface ISignalStoreQueryCollection extends IBaseResults<SignalStoreQuery> {
	done(resolve: (value?: Array<SignalStoreQuery | any>) => void);
}

/*********************************************
* ISignalStoreQuery
**********************************************/
export interface ISignalStoreQuery extends SignalStoreQuery, SignalStoreMethods {

}

/*********************************************
* SignalStore
**********************************************/
export interface SignalStore extends IBaseResult, SignalStoreProps, SignalStoreCollections, SignalStoreMethods {

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
export interface SignalStoreCollections extends SignalStorePropMethods {

}

/*********************************************
* SignalStoreQuery
**********************************************/
export interface SignalStoreQuery extends IBaseResult, SignalStoreProps, SignalStoreMethods {

}

/*********************************************
* SignalStoreMethods
**********************************************/
export interface SignalStoreMethods {
	signals(signals?: Array<Microsoft.SharePoint.Client.Search.Analytics.AnalyticsSignal>): IBaseExecution<any>;
}
