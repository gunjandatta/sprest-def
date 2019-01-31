import { IBaseExecution } from "../../../../../";

/*********************************************
* ISignalStore
**********************************************/
export interface ISignalStore extends SignalStoreProps,SignalStoreMethods,IBaseExecution<SignalStore> {

}

/*********************************************
* SignalStore
**********************************************/
export interface SignalStore extends SignalStoreProps, SignalStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SignalStoreProps
**********************************************/
export interface SignalStoreProps {

}

/*********************************************
* SignalStoreMethods
**********************************************/
export interface SignalStoreMethods {
	signals<T=any>(signals?: Array<Microsoft.SharePoint.Client.Search.Analytics.AnalyticsSignal>): IBaseExecution<T>;
}
