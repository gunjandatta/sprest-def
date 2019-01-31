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
export interface IEntityInstance extends EntityInstanceCollections,EntityInstanceMethods,IBaseQuery<IEntityInstanceQuery> {

}

/*********************************************
* IEntityInstanceQuery
**********************************************/
export interface IEntityInstanceQuery extends EntityInstanceQuery,EntityInstanceMethods {

}

/*********************************************
* EntityInstance
**********************************************/
export interface EntityInstance extends EntityInstanceCollections, EntityInstanceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityInstanceProps
**********************************************/
export interface EntityInstanceProps {

}

/*********************************************
* EntityInstanceCollections
**********************************************/
export interface EntityInstanceCollections extends EntityInstanceProps {

}

/*********************************************
* EntityInstanceQuery
**********************************************/
export interface EntityInstanceQuery extends EntityInstanceProps {

}

/*********************************************
* EntityInstanceMethods
**********************************************/
export interface EntityInstanceMethods {
	createCollectionInstance(fieldDotNotation?: string, size?: number): IBaseExecution<any>;
	createInstance(fieldInstanceDotNotation?: string, fieldDotNotation?: string): IBaseExecution<any>;
	deleteObject(): IBaseExecution<any>;
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
export interface IEntityFieldValueDictionaryQuery extends EntityFieldValueDictionaryQuery,EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary extends EntityFieldValueDictionaryCollections, EntityFieldValueDictionaryMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityFieldValueDictionaryProps
**********************************************/
export interface EntityFieldValueDictionaryProps {

}

/*********************************************
* EntityFieldValueDictionaryCollections
**********************************************/
export interface EntityFieldValueDictionaryCollections extends EntityFieldValueDictionaryProps {

}

/*********************************************
* EntityFieldValueDictionaryQuery
**********************************************/
export interface EntityFieldValueDictionaryQuery extends EntityFieldValueDictionaryProps {

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
