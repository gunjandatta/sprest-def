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
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ActivityLoggerProps
**********************************************/
export interface ActivityLoggerProps {

}

/*********************************************
* ActivityLoggerCollections
**********************************************/
export interface ActivityLoggerCollections extends ActivityLoggerProps {

}

/*********************************************
* ActivityLoggerQuery
**********************************************/
export interface ActivityLoggerQuery extends ActivityLoggerProps {

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
