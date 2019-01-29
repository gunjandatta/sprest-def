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
* EntityInstanceMethods<T = any>
**********************************************/
export interface EntityInstanceMethods<T = any> {
	createCollectionInstance(fieldDotNotation?: string, size?: number): T;
	createInstance(fieldInstanceDotNotation?: string, fieldDotNotation?: string): T;
	deleteObject(): T;
	fromXml(xml?: string): T;
	getIdentity(): T;
	toXml(): T;
	update(): T;
}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityFieldValueDictionaryMethods<T = any>
**********************************************/
export interface EntityFieldValueDictionaryMethods<T = any> {
	createCollectionInstance(fieldDotNotation?: string, size?: number): T;
	createInstance(fieldInstanceDotNotation?: string, fieldDotNotation?: string): T;
	fromXml(xml?: string): T;
	getCollectionSize(fieldDotNotation?: string): T;
	toXml(): T;
}
