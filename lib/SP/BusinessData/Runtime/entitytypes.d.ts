import { SP } from "../../../";
import { IBaseExecution } from "../../../";

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
* IEntityInstance
**********************************************/
export interface IEntityInstance extends EntityInstanceProps,EntityInstanceMethods,IBaseExecution<EntityInstance> {

}

/*********************************************
* EntityInstance
**********************************************/
export interface EntityInstance extends EntityInstanceProps, EntityInstanceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityInstanceProps
**********************************************/
export interface EntityInstanceProps {

}

/*********************************************
* EntityInstanceMethods
**********************************************/
export interface EntityInstanceMethods {
	createCollectionInstance<T=any>(fieldDotNotation?: string, size?: number): IBaseExecution<T>;
	createInstance<T=any>(fieldInstanceDotNotation?: string, fieldDotNotation?: string): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	fromXml<T=any>(xml?: string): IBaseExecution<T>;
	getIdentity<T=SP.BusinessData.Runtime.EntityIdentity>(): IBaseExecution<T>;
	toXml<T=string>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IEntityFieldValueDictionary
**********************************************/
export interface IEntityFieldValueDictionary extends EntityFieldValueDictionaryProps,EntityFieldValueDictionaryMethods,IBaseExecution<EntityFieldValueDictionary> {

}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary extends EntityFieldValueDictionaryProps, EntityFieldValueDictionaryMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityFieldValueDictionaryProps
**********************************************/
export interface EntityFieldValueDictionaryProps {

}

/*********************************************
* EntityFieldValueDictionaryMethods
**********************************************/
export interface EntityFieldValueDictionaryMethods {
	createCollectionInstance<T=any>(fieldDotNotation?: string, size?: number): IBaseExecution<T>;
	createInstance<T=any>(fieldInstanceDotNotation?: string, fieldDotNotation?: string): IBaseExecution<T>;
	fromXml<T=any>(xml?: string): IBaseExecution<T>;
	getCollectionSize<T=number>(fieldDotNotation?: string): IBaseExecution<T>;
	toXml<T=string>(): IBaseExecution<T>;
}
