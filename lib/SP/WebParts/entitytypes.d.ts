

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager {
	WebParts?: () => Array<SP.WebParts.WebPartDefinition>;
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition {
	WebPart?: () => SP.WebParts.WebPart;
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPart
**********************************************/
export interface WebPart {
	Properties?: () => SP.PropertyValues;
	ExportMode?: number;
	Hidden?: boolean;
	IsClosed?: boolean;
	Subtitle?: string;
	Title?: string;
	TitleUrl?: string;
	ZoneIndex?: number;
}
