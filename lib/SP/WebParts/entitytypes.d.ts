import { SP } from "../../";

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* LimitedWebPartManagerCollections
**********************************************/
export interface LimitedWebPartManagerCollections {
	WebParts<T=Array<SP.WebParts.WebPartDefinition>>(): T;
}

/*********************************************
* LimitedWebPartManagerQuery
**********************************************/
export interface LimitedWebPartManagerQuery {
	WebParts<T=Array<SP.WebParts.WebPartDefinition>>(): T;
}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition {
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPartDefinitionCollections
**********************************************/
export interface WebPartDefinitionCollections {
	WebPart<T=SP.WebParts.WebPart>(): T;
}

/*********************************************
* WebPartDefinitionQuery
**********************************************/
export interface WebPartDefinitionQuery {
	WebPart<T=SP.WebParts.WebPart>(): T;
}

/*********************************************
* WebPart
**********************************************/
export interface WebPart {
	ExportMode?: number;
	Hidden?: boolean;
	IsClosed?: boolean;
	Subtitle?: string;
	Title?: string;
	TitleUrl?: string;
	ZoneIndex?: number;
}

/*********************************************
* WebPartCollections
**********************************************/
export interface WebPartCollections {
	Properties<T=SP.PropertyValues>(): T;
}

/*********************************************
* WebPartQuery
**********************************************/
export interface WebPartQuery {
	Properties<T=SP.PropertyValues>(): T;
}
