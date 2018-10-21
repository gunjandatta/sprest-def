

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition {
	Id?: any;
	ZoneId?: string;
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
