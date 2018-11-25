

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager {
	WebParts?: () => SP.WebParts.SP_WebParts_LimitedWebPartManager_WebParts_SP_WebParts_WebPartDefinition_WebPartsPartner;
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition {
	WebPart?: () => SP.WebParts.SP_WebParts_WebPartDefinition_WebPart_SP_WebParts_WebPart_WebPartPartner;
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPart
**********************************************/
export interface WebPart {
	Properties?: () => SP.SP_WebParts_WebPart_Properties_SP_PropertyValues_PropertiesPartner;
	ExportMode?: number;
	Hidden?: boolean;
	IsClosed?: boolean;
	Subtitle?: string;
	Title?: string;
	TitleUrl?: string;
	ZoneIndex?: number;
}
