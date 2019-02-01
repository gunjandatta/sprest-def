import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* IActivityLogger
**********************************************/
export interface IActivityLogger extends ActivityLoggerCollections,ActivityLoggerMethods,IBaseQuery<IActivityLoggerQuery> {

}

/*********************************************
* IActivityLoggerQuery
**********************************************/
export interface IActivityLoggerQuery extends ActivityLoggerQuery,ActivityLoggerMethods {

}

/*********************************************
* ActivityLogger
**********************************************/
export interface ActivityLogger extends ActivityLoggerCollections, ActivityLoggerMethods {

}

/*********************************************
* ActivityLoggerProps
**********************************************/
export interface ActivityLoggerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ActivityLoggerPropMethods
**********************************************/
export interface ActivityLoggerPropMethods {

}

/*********************************************
* ActivityLoggerCollections
**********************************************/
export interface ActivityLoggerCollections extends ActivityLoggerProps, ActivityLoggerPropMethods {

}

/*********************************************
* ActivityLoggerQuery
**********************************************/
export interface ActivityLoggerQuery extends ActivityLoggerProps,ActivityLoggerMethods {

}

/*********************************************
* ActivityLoggerMethods
**********************************************/
export interface ActivityLoggerMethods {
	feedbackDirect(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): IBaseExecution<any>;
	feedbackIndirect(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): IBaseExecution<any>;
	logActivity(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string): IBaseExecution<any>;
}

/*********************************************
* TrackedItemService
**********************************************/
export interface TrackedItemService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TrackedItemServiceCollections
**********************************************/
export interface TrackedItemServiceCollections {

}
