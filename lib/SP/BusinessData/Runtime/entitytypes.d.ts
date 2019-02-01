import { IBaseExecution } from "../../../";
import { SP } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* EntityIdentity
**********************************************/
export interface EntityIdentity {
	IdentifierCount?: number;
}

/*********************************************
* EntityIdentityCollections
**********************************************/
export interface EntityIdentityCollections {

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
* NotificationCallbackCollections
**********************************************/
export interface NotificationCallbackCollections {

}

/*********************************************
* Subscription
**********************************************/
export interface Subscription {
	Hash?: string;
	ID?: Array<SP.KeyValue>;
}

/*********************************************
* SubscriptionCollections
**********************************************/
export interface SubscriptionCollections {

}

/*********************************************
* IEntityInstance
**********************************************/
export interface IEntityInstance extends EntityInstanceCollections,EntityInstanceMethods,IBaseQuery<IEntityInstanceQuery> {

}

/*********************************************
* IEntityInstanceQuery
**********************************************/
export interface IEntityInstanceQuery extends EntityInstanceQuery, EntityInstanceMethods {

}

/*********************************************
* EntityInstance
**********************************************/
export interface EntityInstance extends EntityInstanceProps, EntityInstanceCollections, EntityInstanceMethods {

}

/*********************************************
* EntityInstanceProps
**********************************************/
export interface EntityInstanceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityInstancePropMethods
**********************************************/
export interface EntityInstancePropMethods {

}

/*********************************************
* EntityInstanceCollections
**********************************************/
export interface EntityInstanceCollections extends EntityInstancePropMethods {

}

/*********************************************
* EntityInstanceQuery
**********************************************/
export interface EntityInstanceQuery extends EntityInstanceProps, EntityInstanceMethods {

}

/*********************************************
* EntityInstanceMethods
**********************************************/
export interface EntityInstanceMethods {
	createCollectionInstance(fieldDotNotation?: string, size?: number): IBaseExecution<any>;
	createInstance(fieldInstanceDotNotation?: string, fieldDotNotation?: string): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	fromXml(xml?: string): IBaseExecution<any>;
	getIdentity(): IBaseExecution<SP.BusinessData.Runtime.EntityIdentity>;
	toXml(): IBaseExecution<string>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IEntityFieldValueDictionary
**********************************************/
export interface IEntityFieldValueDictionary extends EntityFieldValueDictionaryCollections,EntityFieldValueDictionaryMethods,IBaseQuery<IEntityFieldValueDictionaryQuery> {

}

/*********************************************
* IEntityFieldValueDictionaryQuery
**********************************************/
export interface IEntityFieldValueDictionaryQuery extends EntityFieldValueDictionaryQuery, EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary extends EntityFieldValueDictionaryProps, EntityFieldValueDictionaryCollections, EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionaryProps
**********************************************/
export interface EntityFieldValueDictionaryProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityFieldValueDictionaryPropMethods
**********************************************/
export interface EntityFieldValueDictionaryPropMethods {

}

/*********************************************
* EntityFieldValueDictionaryCollections
**********************************************/
export interface EntityFieldValueDictionaryCollections extends EntityFieldValueDictionaryPropMethods {

}

/*********************************************
* EntityFieldValueDictionaryQuery
**********************************************/
export interface EntityFieldValueDictionaryQuery extends EntityFieldValueDictionaryProps, EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionaryMethods
**********************************************/
export interface EntityFieldValueDictionaryMethods {
	createCollectionInstance(fieldDotNotation?: string, size?: number): IBaseExecution<any>;
	createInstance(fieldInstanceDotNotation?: string, fieldDotNotation?: string): IBaseExecution<any>;
	fromXml(xml?: string): IBaseExecution<any>;
	getCollectionSize(fieldDotNotation?: string): IBaseExecution<number>;
	toXml(): IBaseExecution<string>;
}
