

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* LimitedWebPartManagerMethods
**********************************************/
export interface LimitedWebPartManagerMethods extends LimitedWebPartManager {
	WebParts?: () => Array<SP.WebParts.WebPartDefinition>;
}

/*********************************************
* LimitedWebPartManagerQuery
**********************************************/
export interface LimitedWebPartManagerQuery extends LimitedWebPartManager {
	WebParts?: Array<SP.WebParts.WebPartDefinition>;
}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition {
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPartDefinitionMethods
**********************************************/
export interface WebPartDefinitionMethods extends WebPartDefinition {
	WebPart?: () => SP.WebParts.WebPart;
}

/*********************************************
* WebPartDefinitionQuery
**********************************************/
export interface WebPartDefinitionQuery extends WebPartDefinition {
	WebPart?: SP.WebParts.WebPart;
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
* WebPartMethods
**********************************************/
export interface WebPartMethods extends WebPart {
	Properties?: () => SP.PropertyValues;
}

/*********************************************
* WebPartQuery
**********************************************/
export interface WebPartQuery extends WebPart {
	Properties?: SP.PropertyValues;
}
