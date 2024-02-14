import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ElementUpdate
**********************************************/
export interface ElementUpdate {
	action?: string;
	element?: Microsoft.SharePoint.ActionableMessage.UpdateCardElement;
	elementId?: string;
}

/*********************************************
* ElementUpdateCollections
**********************************************/
export interface ElementUpdateCollections {

}

/*********************************************
* UpdateCardElement
**********************************************/
export interface UpdateCardElement {
	isVisible?: boolean;
	type?: string;
	value?: string;
}

/*********************************************
* UpdateCardElementCollections
**********************************************/
export interface UpdateCardElementCollections {

}

/*********************************************
* UpdateCard
**********************************************/
export interface UpdateCard {
	cardUpdates?: { results: Array<Microsoft.SharePoint.ActionableMessage.ElementUpdate> };
	type?: string;
}

/*********************************************
* UpdateCardCollections
**********************************************/
export interface UpdateCardCollections {

}
