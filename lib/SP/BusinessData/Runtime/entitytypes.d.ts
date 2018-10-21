import { SP } from "../../../";

/*********************************************
* EntityIdentity
**********************************************/
export interface EntityIdentity {
	IdentifierCount?: number;
}

/*********************************************
* NotificationCallback
**********************************************/
export interface NotificationCallback {
	NotificationContext?: string;
	NotificationEndpoint?: string;
	NotificationForwarderType?: string;
}

/*********************************************
* Subscription
**********************************************/
export interface Subscription {
	Hash?: string;
	ID?: Array<SP.KeyValue>;
}

/*********************************************
* EntityInstance
**********************************************/
export interface EntityInstance {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
