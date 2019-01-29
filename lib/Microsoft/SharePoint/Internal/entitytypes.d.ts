

/*********************************************
* ActivityLogger
**********************************************/
export interface ActivityLogger {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ActivityLoggerMethods
**********************************************/
export interface ActivityLoggerMethods {
	feedbackDirect<T=void>(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): T;
	feedbackIndirect<T=void>(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): T;
	logActivity<T=void>(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string): T;
}

/*********************************************
* TrackedItemService
**********************************************/
export interface TrackedItemService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
