import { IBaseExecution } from "../../";
import { IBaseCollection } from "../../";
import { IBaseQuery } from "../../";
import { IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* ILimitedWebPartManager
**********************************************/
export interface ILimitedWebPartManager extends LimitedWebPartManagerCollections,LimitedWebPartManagerMethods,IBaseQuery<ILimitedWebPartManagerQuery> {

}

/*********************************************
* ILimitedWebPartManagerQuery
**********************************************/
export interface ILimitedWebPartManagerQuery extends LimitedWebPartManagerQuery,LimitedWebPartManagerMethods {

}

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager extends LimitedWebPartManagerCollections, LimitedWebPartManagerMethods {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* LimitedWebPartManagerProps
**********************************************/
export interface LimitedWebPartManagerProps {

}

/*********************************************
* LimitedWebPartManagerCollections
**********************************************/
export interface LimitedWebPartManagerCollections extends LimitedWebPartManagerProps {
	WebParts(): IBaseCollection<SP.WebParts.WebPartDefinition> & SP.WebParts.WebPartDefinitionCollectionMethods;
	WebParts(id: string | number): IBaseQuery<SP.WebParts.WebPartDefinition> & SP.WebParts.WebPartDefinitionCollections;
}

/*********************************************
* LimitedWebPartManagerQuery
**********************************************/
export interface LimitedWebPartManagerQuery extends LimitedWebPartManagerProps {
	WebParts: IBaseResults<SP.WebParts.WebPartDefinition>;
}

/*********************************************
* LimitedWebPartManagerMethods
**********************************************/
export interface LimitedWebPartManagerMethods {
	exportWebPart(webPartId?: any): IBaseExecution<string>;
	importWebPart(webPartXml?: string): IBaseExecution<SP.WebParts.WebPartDefinition>;
}

/*********************************************
* IWebPartDefinition
**********************************************/
export interface IWebPartDefinition extends WebPartDefinitionCollections,WebPartDefinitionMethods,IBaseQuery<IWebPartDefinitionQuery> {

}

/*********************************************
* IWebPartDefinitionQuery
**********************************************/
export interface IWebPartDefinitionQuery extends WebPartDefinitionQuery,WebPartDefinitionMethods {

}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition extends WebPartDefinitionCollections, WebPartDefinitionMethods {
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPartDefinitionProps
**********************************************/
export interface WebPartDefinitionProps {
	WebPart(): IBaseExecution<SP.WebParts.WebPart>;
}

/*********************************************
* WebPartDefinitionCollections
**********************************************/
export interface WebPartDefinitionCollections extends WebPartDefinitionProps {

}

/*********************************************
* WebPartDefinitionCollectionMethods
**********************************************/
export interface WebPartDefinitionCollectionMethods {
	getByControlId(controlId?: string): IBaseExecution<SP.WebParts.WebPartDefinition>;
	getById(id?: any): IBaseExecution<SP.WebParts.WebPartDefinition>;
}

/*********************************************
* WebPartDefinitionQuery
**********************************************/
export interface WebPartDefinitionQuery extends WebPartDefinitionProps {

}

/*********************************************
* WebPartDefinitionMethods
**********************************************/
export interface WebPartDefinitionMethods {
	closeWebPart(): IBaseExecution<any>;
	deleteWebPart(): IBaseExecution<any>;
	moveWebPartTo(zoneID?: string, zoneIndex?: number): IBaseExecution<any>;
	openWebPart(): IBaseExecution<any>;
	saveWebPartChanges(): IBaseExecution<any>;
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

}
