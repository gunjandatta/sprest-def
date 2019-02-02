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
* ILimitedWebPartManagerCollection
**********************************************/
export interface ILimitedWebPartManagerCollection extends IBaseResults<LimitedWebPartManager> {

}

/*********************************************
* ILimitedWebPartManagerQueryCollection
**********************************************/
export interface ILimitedWebPartManagerQueryCollection extends IBaseResults<LimitedWebPartManagerQuery> {

}

/*********************************************
* ILimitedWebPartManagerQuery
**********************************************/
export interface ILimitedWebPartManagerQuery extends LimitedWebPartManagerQuery, LimitedWebPartManagerMethods {

}

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager extends LimitedWebPartManagerProps, LimitedWebPartManagerCollections, LimitedWebPartManagerMethods {

}

/*********************************************
* LimitedWebPartManagerProps
**********************************************/
export interface LimitedWebPartManagerProps {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* LimitedWebPartManagerPropMethods
**********************************************/
export interface LimitedWebPartManagerPropMethods {

}

/*********************************************
* LimitedWebPartManagerCollections
**********************************************/
export interface LimitedWebPartManagerCollections extends LimitedWebPartManagerPropMethods {
	WebParts(): IBaseCollection<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionQuery, SP.WebParts.WebPartDefinitionCollectionMethods> & SP.WebParts.WebPartDefinitionCollectionMethods;
	WebParts(id: string | number): IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionQuery> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
}

/*********************************************
* LimitedWebPartManagerQuery
**********************************************/
export interface LimitedWebPartManagerQuery extends LimitedWebPartManagerProps, LimitedWebPartManagerMethods {
	WebParts: IBaseResults<SP.WebParts.WebPartDefinition>;
}

/*********************************************
* LimitedWebPartManagerMethods
**********************************************/
export interface LimitedWebPartManagerMethods {
	exportWebPart(webPartId?: any): IBaseExecution<string>;
	importWebPart(webPartXml?: string): IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionQuery> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
}

/*********************************************
* IWebPartDefinition
**********************************************/
export interface IWebPartDefinition extends WebPartDefinitionCollections,WebPartDefinitionMethods,IBaseQuery<IWebPartDefinitionQuery> {

}

/*********************************************
* IWebPartDefinitionCollection
**********************************************/
export interface IWebPartDefinitionCollection extends IBaseResults<WebPartDefinition>, WebPartDefinitionCollectionMethods {

}

/*********************************************
* IWebPartDefinitionQueryCollection
**********************************************/
export interface IWebPartDefinitionQueryCollection extends IBaseResults<WebPartDefinitionQuery>, WebPartDefinitionCollectionMethods {

}

/*********************************************
* IWebPartDefinitionQuery
**********************************************/
export interface IWebPartDefinitionQuery extends WebPartDefinitionQuery, WebPartDefinitionMethods {

}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition extends WebPartDefinitionProps, WebPartDefinitionCollections, WebPartDefinitionMethods {

}

/*********************************************
* WebPartDefinitionProps
**********************************************/
export interface WebPartDefinitionProps {
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPartDefinitionPropMethods
**********************************************/
export interface WebPartDefinitionPropMethods {
	WebPart(): IBaseQuery<SP.WebParts.WebPart, SP.WebParts.WebPartQuery> & SP.WebParts.WebPartCollections;
}

/*********************************************
* WebPartDefinitionCollections
**********************************************/
export interface WebPartDefinitionCollections extends WebPartDefinitionPropMethods {

}

/*********************************************
* WebPartDefinitionCollectionMethods
**********************************************/
export interface WebPartDefinitionCollectionMethods {
	getByControlId(controlId?: string): IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionQuery> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
	getById(id?: any): IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionQuery> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
}

/*********************************************
* WebPartDefinitionQuery
**********************************************/
export interface WebPartDefinitionQuery extends WebPartDefinitionProps, WebPartDefinitionMethods {
	WebPart: SP.WebParts.WebPart & SP.WebParts.WebPartCollections;
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

/*********************************************
* WebPartQuery
**********************************************/
export interface WebPartQuery extends WebPart {
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
}
