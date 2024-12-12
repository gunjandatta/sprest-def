import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ClientAmplifyEndpointInfo
**********************************************/
export interface ClientAmplifyEndpointInfo {
	endpointSubType?: string;
	endpointType?: string;
	href?: string;
	id?: string;
	name?: string;
}

/*********************************************
* ClientAmplifyEndpointInfoCollections
**********************************************/
export interface ClientAmplifyEndpointInfoCollections {

}

/*********************************************
* ClientAmplifyExtraProperty
**********************************************/
export interface ClientAmplifyExtraProperty {
	name?: string;
	value?: string;
}

/*********************************************
* ClientAmplifyExtraPropertyCollections
**********************************************/
export interface ClientAmplifyExtraPropertyCollections {

}

/*********************************************
* ClientAmplifyResults
**********************************************/
export interface ClientAmplifyResults {
	errors?: { results: Array<Microsoft.SharePoint.Publishing.Amplify.Client.ClientAmplifyResult> };
	messages?: { results: Array<Microsoft.SharePoint.Publishing.Amplify.Client.ClientAmplifyResult> };
	warnings?: { results: Array<Microsoft.SharePoint.Publishing.Amplify.Client.ClientAmplifyResult> };
}

/*********************************************
* ClientAmplifyResultsCollections
**********************************************/
export interface ClientAmplifyResultsCollections {

}

/*********************************************
* ClientAmplifyResult
**********************************************/
export interface ClientAmplifyResult {
	canvasElement?: string;
	code?: string;
	endpoint?: Microsoft.SharePoint.Publishing.Amplify.Client.ClientAmplifyEndpointInfo;
	eventId?: string;
	extraProperties?: { results: Array<Microsoft.SharePoint.Publishing.Amplify.Client.ClientAmplifyExtraProperty> };
	internalDescription?: string;
	origin?: string;
	stage?: string;
	step?: string;
	timestampUTC?: string;
	upstreamErrorCode?: string;
	upstreamHttpStatusCode?: number;
}

/*********************************************
* ClientAmplifyResultCollections
**********************************************/
export interface ClientAmplifyResultCollections {

}
