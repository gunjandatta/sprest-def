import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* SPDefaultDocumentLibrary
**********************************************/
export interface SPDefaultDocumentLibrary {
	lastModifiedBy?: string;
	lastModifiedDateTime?: any;
}

/*********************************************
* SPDefaultDocumentLibraryCollections
**********************************************/
export interface SPDefaultDocumentLibraryCollections {

}

/*********************************************
* SPRubySite
**********************************************/
export interface SPRubySite {
	channelGroupId?: any;
	createdDateTime?: any;
	defaultDocumentLibrary?: Microsoft.SharePoint.IdentityModel.SPDefaultDocumentLibrary;
	description?: string;
	id?: any;
	lastModifiedDateTime?: any;
	name?: string;
	webUrl?: string;
}

/*********************************************
* SPRubySiteCollections
**********************************************/
export interface SPRubySiteCollections {

}
