import { Base } from "../../../";
import { microsoft } from "../../../";

/*********************************************
* acl
**********************************************/
export interface acl {
	accessType?: microsoft.graph.accessType;
	type?: microsoft.graph.aclType;
	value?: string;
}

/*********************************************
* aclCollections
**********************************************/
export interface aclCollections {

}

/*********************************************
* configuration
**********************************************/
export interface configuration {
	authorizedAppIds?: Array<string>;
}

/*********************************************
* configurationCollections
**********************************************/
export interface configurationCollections {

}

/*********************************************
* externalItemContent
**********************************************/
export interface externalItemContent {
	type?: microsoft.graph.externalItemContentType;
	value?: string;
}

/*********************************************
* externalItemContentCollections
**********************************************/
export interface externalItemContentCollections {

}

/*********************************************
* properties
**********************************************/
export interface properties {

}

/*********************************************
* propertiesCollections
**********************************************/
export interface propertiesCollections {

}

/*********************************************
* property
**********************************************/
export interface property {
	aliases?: Array<string>;
	isQueryable?: boolean;
	isRefinable?: boolean;
	isRetrievable?: boolean;
	isSearchable?: boolean;
	labels?: Array<microsoft.graph.externalConnectors.label>;
	name?: string;
	type?: microsoft.graph.propertyType;
}

/*********************************************
* propertyCollections
**********************************************/
export interface propertyCollections {

}
