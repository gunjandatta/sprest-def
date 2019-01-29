import { Microsoft } from "../../../../../";

/*********************************************
* SignalStore
**********************************************/
export interface SignalStore {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SignalStoreMethods<T = any>
**********************************************/
export interface SignalStoreMethods<T = any> {
	signals(signals?: Array<Microsoft.SharePoint.Client.Search.Analytics.AnalyticsSignal>): T;
}
