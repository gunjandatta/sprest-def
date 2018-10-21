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
* DirectoryObjectChanges
**********************************************/
export interface DirectoryObjectChanges {
	DirectoryObjectSubType?: number;
	DirectoryObjectType?: number;
	Id?: any;
	LinkChanges?: Array<SP.Directory.Provider.LinkChange>;
	PropertyChanges?: Array<SP.Directory.Provider.PropertyChange>;
}

/*********************************************
* LinkChange
**********************************************/
export interface LinkChange {
	Added?: Array<SP.Directory.Provider.LinkTarget>;
	Name?: string;
	Removed?: Array<SP.Directory.Provider.LinkTarget>;
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
* PropertyChange
**********************************************/
export interface PropertyChange {
	Name?: string;
	Value?: string;
	Values?: Array<string>;
}

/*********************************************
* DirectoryObjectData
**********************************************/
export interface DirectoryObjectData {
	AlternateId?: SP.Directory.Provider.AlternateIdData;
	AttributeExpirationTimes?: Array<SP.KeyValue>;
	ChangeMarker?: string;
	DirectoryObjectSubType?: number;
	DirectoryObjectType?: number;
	Id?: any;
	IsNew?: boolean;
	LastModifiedTime?: any;
	TenantContextId?: any;
	Version?: number;
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
* ExtendedAttributeData
**********************************************/
export interface ExtendedAttributeData {
	Value?: any;
}

/*********************************************
* PropertyCollectionData
**********************************************/
export interface PropertyCollectionData {
	TotalCount?: number;
}

/*********************************************
* PropertyData
**********************************************/
export interface PropertyData {
	Value?: any;
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
}

/*********************************************
* RelationSetData
**********************************************/
export interface RelationSetData {
	TotalCount?: number;
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
}

/*********************************************
* StateData
**********************************************/
export interface StateData {
	AdapterName?: string;
	Value?: any;
}
