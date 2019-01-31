import { IBaseCollection } from "../../";
import { SP } from "../../";
import { IBaseExecution } from "../../";

/*********************************************
* ILimitedWebPartManager
**********************************************/
export interface ILimitedWebPartManager extends LimitedWebPartManagerProps,LimitedWebPartManagerMethods,IBaseExecution<LimitedWebPartManager> {

}

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager extends LimitedWebPartManagerProps, LimitedWebPartManagerMethods {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* LimitedWebPartManagerProps
**********************************************/
export interface LimitedWebPartManagerProps {
	WebParts<T=SP.WebParts.WebPartDefinition>(): IBaseCollection<T>;
}

/*********************************************
* LimitedWebPartManagerMethods
**********************************************/
export interface LimitedWebPartManagerMethods {
	exportWebPart<T=string>(webPartId?: any): IBaseExecution<T>;
	importWebPart<T=SP.WebParts.WebPartDefinition>(webPartXml?: string): IBaseExecution<T>;
}

/*********************************************
* IWebPartDefinition
**********************************************/
export interface IWebPartDefinition extends WebPartDefinitionProps,WebPartDefinitionMethods,IBaseExecution<WebPartDefinition> {

}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition extends WebPartDefinitionProps, WebPartDefinitionMethods {
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPartDefinitionProps
**********************************************/
export interface WebPartDefinitionProps {
	WebPart<T=SP.WebParts.WebPart>(): IBaseExecution<T>;
}

/*********************************************
* WebPartDefinitionMethods
**********************************************/
export interface WebPartDefinitionMethods {
	closeWebPart<T=any>(): IBaseExecution<T>;
	deleteWebPart<T=any>(): IBaseExecution<T>;
	moveWebPartTo<T=any>(zoneID?: string, zoneIndex?: number): IBaseExecution<T>;
	openWebPart<T=any>(): IBaseExecution<T>;
	saveWebPartChanges<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IWebPart
**********************************************/
export interface IWebPart extends WebPartProps,WebPartMethods,IBaseExecution<WebPart> {

}

/*********************************************
* WebPart
**********************************************/
export interface WebPart extends WebPartProps, WebPartMethods {
	ExportMode?: number;
	Hidden?: boolean;
	IsClosed?: boolean;
	Subtitle?: string;
	Title?: string;
	TitleUrl?: string;
	ZoneIndex?: number;
}

/*********************************************
* WebPartProps
**********************************************/
export interface WebPartProps {
	Properties<T=SP.PropertyValues>(): IBaseExecution<T>;
}

/*********************************************
* WebPartMethods
**********************************************/
export interface WebPartMethods {

}
