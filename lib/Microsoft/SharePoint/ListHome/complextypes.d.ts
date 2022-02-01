import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ListHomeItem
**********************************************/
export interface ListHomeItem {
	color?: string;
	icon?: string;
	isDefaultDocumentLibrary?: boolean;
	isDocLib?: boolean;
	listId?: string;
	listUrl?: string;
	siteAcronym?: string;
	siteColor?: string;
	siteIconUrl?: string;
	siteId?: string;
	siteTitle?: string;
	siteUrl?: string;
	title?: string;
	webId?: string;
	webTemplateConfiguration?: string;
}

/*********************************************
* ListHomeItemCollections
**********************************************/
export interface ListHomeItemCollections {

}

/*********************************************
* FavoriteListHomeItem
**********************************************/
export interface FavoriteListHomeItem {
	favoritesOrder?: any;
	lastPolled?: any;
	order?: number;
}

/*********************************************
* FavoriteListHomeItemCollections
**********************************************/
export interface FavoriteListHomeItemCollections {

}
