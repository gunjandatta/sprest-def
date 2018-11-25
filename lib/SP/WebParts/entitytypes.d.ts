

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
	WebParts?: () => Array<SP.WebParts.WebPartDefinition>;
}

/*********************************************
* LimitedWebPartManagerQuery
**********************************************/
export interface LimitedWebPartManagerQuery {
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
* WebPartDefinitionCollections
**********************************************/
export interface WebPartDefinitionCollections {
	WebPart?: () => SP.WebParts.WebPart;
}

/*********************************************
* WebPartDefinitionQuery
**********************************************/
export interface WebPartDefinitionQuery {
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
* WebPartCollections
**********************************************/
export interface WebPartCollections {
	Properties?: () => SP.PropertyValues;
}

/*********************************************
* WebPartQuery
**********************************************/
export interface WebPartQuery {
	Properties?: SP.PropertyValues;
}
