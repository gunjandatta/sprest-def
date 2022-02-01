import { Base } from "../../../";

/*********************************************
* SmartCacheItem
**********************************************/
export interface SmartCacheItem {
	accessUrl?: string;
	containerTitle?: string;
	contentClass?: string;
	isDefaultDocumentLibrary?: boolean;
	isTeamsChannelSite?: boolean;
	isTeamsConnectedSite?: boolean;
	lastAccessDateTime?: any;
	listId?: any;
	listItemId?: number;
	operation?: number;
	pinOrder?: number;
	properties?: string;
	siteAcronym?: string;
	siteColor?: string;
	siteId?: any;
	siteLogoUrl?: string;
	spoId?: string;
	title?: string;
	uniqueId?: any;
	webId?: any;
	webUrl?: string;
}

/*********************************************
* SmartCacheItemCollections
**********************************************/
export interface SmartCacheItemCollections {

}
