import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* SectionModel
**********************************************/
export interface SectionModel {
	index?: number;
	webParts?: { results: Array<Microsoft.SharePoint.SectionDesignIdeas.WebPartModel> };
}

/*********************************************
* SectionModelCollections
**********************************************/
export interface SectionModelCollections {

}

/*********************************************
* WebPartModel
**********************************************/
export interface WebPartModel {
	content?: string;
	index?: number;
	properties?: { results: Array<SP.KeyValue> };
	sectionIndex?: number;
	type?: string;
}

/*********************************************
* WebPartModelCollections
**********************************************/
export interface WebPartModelCollections {

}

/*********************************************
* ZoneModel
**********************************************/
export interface ZoneModel {
	index?: number;
	sections?: { results: Array<Microsoft.SharePoint.SectionDesignIdeas.SectionModel> };
}

/*********************************************
* ZoneModelCollections
**********************************************/
export interface ZoneModelCollections {

}
