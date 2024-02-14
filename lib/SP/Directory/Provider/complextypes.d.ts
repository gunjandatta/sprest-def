import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* AlternateIdData
**********************************************/
export interface AlternateIdData {
	Email?: string;
	IdentifyingProperty?: number;
	UserPrincipalName?: string;
}

/*********************************************
* AlternateIdDataCollections
**********************************************/
export interface AlternateIdDataCollections {

}

/*********************************************
* DirectoryObjectChanges
**********************************************/
export interface DirectoryObjectChanges {
	DirectoryObjectSubType?: number;
	DirectoryObjectType?: number;
	Id?: any;
	LinkChanges?: { results: Array<SP.Directory.Provider.LinkChange> };
	PropertyChanges?: { results: Array<SP.Directory.Provider.PropertyChange> };
}

/*********************************************
* DirectoryObjectChangesCollections
**********************************************/
export interface DirectoryObjectChangesCollections {

}

/*********************************************
* LinkChange
**********************************************/
export interface LinkChange {
	Added?: { results: Array<SP.Directory.Provider.LinkTarget> };
	Name?: string;
	Removed?: { results: Array<SP.Directory.Provider.LinkTarget> };
}

/*********************************************
* LinkChangeCollections
**********************************************/
export interface LinkChangeCollections {

}

/*********************************************
* LinkTarget
**********************************************/
export interface LinkTarget {
	ObjectId?: any;
	ObjectSubType?: number;
	ObjectType?: number;
}

/*********************************************
* LinkTargetCollections
**********************************************/
export interface LinkTargetCollections {

}

/*********************************************
* PropertyChange
**********************************************/
export interface PropertyChange {
	Name?: string;
	Value?: string;
	Values?: { results: Array<string> };
}

/*********************************************
* PropertyChangeCollections
**********************************************/
export interface PropertyChangeCollections {

}

/*********************************************
* DirectoryObjectData
**********************************************/
export interface DirectoryObjectData {
	AlternateId?: SP.Directory.Provider.AlternateIdData;
	AttributeExpirationTimes?: { results: Array<SP.KeyValue> };
	ChangeMarker?: string;
	DirectoryObjectSubType?: number;
	DirectoryObjectType?: number;
	DirectorySessionData?: SP.Directory.Provider.DirectorySessionData;
	Id?: any;
	IsNew?: boolean;
	LastModifiedTime?: any;
	TenantContextId?: any;
	Version?: number;
}

/*********************************************
* DirectoryObjectDataCollections
**********************************************/
export interface DirectoryObjectDataCollections {

}

/*********************************************
* DirectorySessionData
**********************************************/
export interface DirectorySessionData {
	ClientType?: string;
	SessionOptions?: string;
}

/*********************************************
* DirectorySessionDataCollections
**********************************************/
export interface DirectorySessionDataCollections {

}

/*********************************************
* SchemaData
**********************************************/
export interface SchemaData {
	AttributeDataSource?: number;
	DelayLoad?: boolean;
	IsInitialized?: boolean;
	Name?: string;
	Privacy?: number;
}

/*********************************************
* SchemaDataCollections
**********************************************/
export interface SchemaDataCollections {

}

/*********************************************
* ExtendedAttributeData
**********************************************/
export interface ExtendedAttributeData {
	Value?: any;
	ValueJsonString?: string;
}

/*********************************************
* ExtendedAttributeDataCollections
**********************************************/
export interface ExtendedAttributeDataCollections {

}

/*********************************************
* PropertyCollectionData
**********************************************/
export interface PropertyCollectionData {
	TotalCount?: number;
}

/*********************************************
* PropertyCollectionDataCollections
**********************************************/
export interface PropertyCollectionDataCollections {

}

/*********************************************
* PropertyData
**********************************************/
export interface PropertyData {
	Value?: any;
	ValueJsonString?: string;
}

/*********************************************
* PropertyDataCollections
**********************************************/
export interface PropertyDataCollections {

}

/*********************************************
* RelationData
**********************************************/
export interface RelationData {
	AttributeDataSource?: number;
	TargetObjectId?: any;
	TargetObjectSubtype?: number;
	TargetObjectType?: number;
	Value?: any;
	ValueJsonString?: string;
}

/*********************************************
* RelationDataCollections
**********************************************/
export interface RelationDataCollections {

}

/*********************************************
* RelationSetData
**********************************************/
export interface RelationSetData {
	TotalCount?: number;
}

/*********************************************
* RelationSetDataCollections
**********************************************/
export interface RelationSetDataCollections {

}

/*********************************************
* ResourceData
**********************************************/
export interface ResourceData {
	ErrorCode?: number;
	ErrorMessage?: string;
	ResourceAction?: number;
	State?: number;
	Value?: any;
	ValueJsonString?: string;
}

/*********************************************
* ResourceDataCollections
**********************************************/
export interface ResourceDataCollections {

}

/*********************************************
* StateData
**********************************************/
export interface StateData {
	AdapterName?: string;
	Value?: any;
	ValueJsonString?: string;
}

/*********************************************
* StateDataCollections
**********************************************/
export interface StateDataCollections {

}
