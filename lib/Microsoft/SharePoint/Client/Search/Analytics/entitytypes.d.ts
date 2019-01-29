

/*********************************************
* SignalStore
**********************************************/
export interface SignalStore {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SignalStoreMethods
**********************************************/
export interface SignalStoreMethods {
	signals<T=void>(signals?: Array<Microsoft.SharePoint.Client.Search.Analytics.AnalyticsSignal>): T;
}
