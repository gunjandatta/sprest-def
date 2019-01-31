import { IBaseExecution } from "../../../";

/*********************************************
* IActivityLogger
**********************************************/
export interface IActivityLogger extends ActivityLoggerProps,ActivityLoggerMethods,IBaseExecution<ActivityLogger> {

}

/*********************************************
* ActivityLogger
**********************************************/
export interface ActivityLogger extends ActivityLoggerProps, ActivityLoggerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ActivityLoggerProps
**********************************************/
export interface ActivityLoggerProps {

}

/*********************************************
* ActivityLoggerMethods
**********************************************/
export interface ActivityLoggerMethods {
	feedbackDirect<T=any>(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): IBaseExecution<T>;
	feedbackIndirect<T=any>(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): IBaseExecution<T>;
	logActivity<T=any>(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string): IBaseExecution<T>;
}

/*********************************************
* TrackedItemService
**********************************************/
export interface TrackedItemService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
