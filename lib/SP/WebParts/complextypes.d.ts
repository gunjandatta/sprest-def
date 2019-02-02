import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";

/*********************************************
* TileData
**********************************************/
export interface TileData {
	BackgroundCollageImageLocations?: { results: Array<string> };
	BackgroundImageLocation?: string;
	BackgroundImageRendersAsIcon?: boolean;
	BodyText?: string;
	Description?: string;
	HoverDisabled?: boolean;
	ID?: number;
	IsWide?: boolean;
	LinkLocation?: string;
	TileOrder?: number;
	Title?: string;
	TransparentOverlay?: boolean;
}

/*********************************************
* TileDataCollections
**********************************************/
export interface TileDataCollections {

}
