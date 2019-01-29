import { SP } from "../../";

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* LimitedWebPartManagerCollections<T = any>
**********************************************/
export interface LimitedWebPartManagerCollections<T = any> {
	WebParts(): T;
}

/*********************************************
* LimitedWebPartManagerQuery<T = any>
**********************************************/
export interface LimitedWebPartManagerQuery<T = any> {
	WebParts(): T;
}

/*********************************************
* LimitedWebPartManagerMethods<T = any>
**********************************************/
export interface LimitedWebPartManagerMethods<T = any> {
	exportWebPart(webPartId?: any): T;
	importWebPart(webPartXml?: string): T;
}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition {
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPartDefinitionCollections<T = any>
**********************************************/
export interface WebPartDefinitionCollections<T = any> {
	WebPart(): T;
}

/*********************************************
* WebPartDefinitionQuery<T = any>
**********************************************/
export interface WebPartDefinitionQuery<T = any> {
	WebPart(): T;
}

/*********************************************
* WebPartDefinitionMethods<T = any>
**********************************************/
export interface WebPartDefinitionMethods<T = any> {
	closeWebPart(): T;
	deleteWebPart(): T;
	moveWebPartTo(zoneID?: string, zoneIndex?: number): T;
	openWebPart(): T;
	saveWebPartChanges(): T;
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
* WebPartCollections<T = any>
**********************************************/
export interface WebPartCollections<T = any> {
	Properties(): T;
}

/*********************************************
* WebPartQuery<T = any>
**********************************************/
export interface WebPartQuery<T = any> {
	Properties(): T;
}
