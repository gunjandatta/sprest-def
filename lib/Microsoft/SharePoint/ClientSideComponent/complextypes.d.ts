import { Base } from "../../../";

/*********************************************
* SPClientSideComponentQueryResult
**********************************************/
export interface SPClientSideComponentQueryResult {
	ComponentType?: number;
	Id?: string;
	Manifest?: string;
	ManifestActivatedTime?: any;
	ManifestType?: number;
	Name?: string;
	Status?: number;
}

/*********************************************
* SPClientSideComponentQueryResultCollections
**********************************************/
export interface SPClientSideComponentQueryResultCollections {

}

/*********************************************
* SPClientSideComponentIdentifier
**********************************************/
export interface SPClientSideComponentIdentifier {
	id?: string;
	version?: string;
}

/*********************************************
* SPClientSideComponentIdentifierCollections
**********************************************/
export interface SPClientSideComponentIdentifierCollections {

}

/*********************************************
* SPTeamsAppComponent
**********************************************/
export interface SPTeamsAppComponent {
	appDescription?: string;
	appId?: string;
	appName?: string;
	botId?: string;
	componentId?: string;
	defaultSize?: string;
	description?: string;
	externalAppId?: string;
	groupId?: string;
	iconUrl?: string;
	name?: string;
	officeUIFabricIconName?: string;
	version?: string;
}

/*********************************************
* SPTeamsAppComponentCollections
**********************************************/
export interface SPTeamsAppComponentCollections {

}
