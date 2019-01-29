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
* EntityInstanceMethods
**********************************************/
export interface EntityInstanceMethods {
	createCollectionInstance<T=void>(fieldDotNotation?: string, size?: number): T;
	createInstance<T=void>(fieldInstanceDotNotation?: string, fieldDotNotation?: string): T;
	deleteObject<T=void>(): T;
	fromXml<T=void>(xml?: string): T;
	getIdentity<T=SP.BusinessData.Runtime.EntityIdentity>(): T;
	toXml<T=string>(): T;
	update<T=void>(): T;
}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityFieldValueDictionaryMethods
**********************************************/
export interface EntityFieldValueDictionaryMethods {
	createCollectionInstance<T=void>(fieldDotNotation?: string, size?: number): T;
	createInstance<T=void>(fieldInstanceDotNotation?: string, fieldDotNotation?: string): T;
	fromXml<T=void>(xml?: string): T;
	getCollectionSize<T=number>(fieldDotNotation?: string): T;
	toXml<T=string>(): T;
}
