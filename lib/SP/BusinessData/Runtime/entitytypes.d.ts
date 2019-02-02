import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
import { SP } from "../../../";

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
	ID?: { results: Array<SP.KeyValue> };
}

/*********************************************
* SubscriptionCollections
**********************************************/
export interface SubscriptionCollections {

}

/*********************************************
* IEntityInstance
**********************************************/
export interface IEntityInstance extends EntityInstanceCollections, EntityInstanceMethods, IBaseQuery<IEntityInstanceQuery> {

}

/*********************************************
* IEntityInstanceCollection
**********************************************/
export interface IEntityInstanceCollection extends IBaseResults<EntityInstance> {
	done?: (resolve: (value?: Array<EntityInstance>) => void) => void;
}

/*********************************************
* IEntityInstanceQueryCollection
**********************************************/
export interface IEntityInstanceQueryCollection extends IBaseResults<EntityInstanceOData> {
	done?: (resolve: (value?: Array<EntityInstanceOData>) => void) => void;
}

/*********************************************
* IEntityInstanceQuery
**********************************************/
export interface IEntityInstanceQuery extends EntityInstanceOData, EntityInstanceMethods {

}

/*********************************************
* EntityInstance
**********************************************/
export interface EntityInstance extends IBaseResult, EntityInstanceProps, EntityInstanceCollections, EntityInstanceMethods {

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
* EntityInstanceOData
**********************************************/
export interface EntityInstanceOData extends IBaseResult, EntityInstanceProps, EntityInstanceMethods {

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
export interface IEntityFieldValueDictionary extends EntityFieldValueDictionaryCollections, EntityFieldValueDictionaryMethods, IBaseQuery<IEntityFieldValueDictionaryQuery> {

}

/*********************************************
* IEntityFieldValueDictionaryCollection
**********************************************/
export interface IEntityFieldValueDictionaryCollection extends IBaseResults<EntityFieldValueDictionary> {
	done?: (resolve: (value?: Array<EntityFieldValueDictionary>) => void) => void;
}

/*********************************************
* IEntityFieldValueDictionaryQueryCollection
**********************************************/
export interface IEntityFieldValueDictionaryQueryCollection extends IBaseResults<EntityFieldValueDictionaryOData> {
	done?: (resolve: (value?: Array<EntityFieldValueDictionaryOData>) => void) => void;
}

/*********************************************
* IEntityFieldValueDictionaryQuery
**********************************************/
export interface IEntityFieldValueDictionaryQuery extends EntityFieldValueDictionaryOData, EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary extends IBaseResult, EntityFieldValueDictionaryProps, EntityFieldValueDictionaryCollections, EntityFieldValueDictionaryMethods {

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
* EntityFieldValueDictionaryOData
**********************************************/
export interface EntityFieldValueDictionaryOData extends IBaseResult, EntityFieldValueDictionaryProps, EntityFieldValueDictionaryMethods {

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
