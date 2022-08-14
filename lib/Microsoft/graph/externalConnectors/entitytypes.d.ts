import { Base } from "../../../";
import { graph } from "../../../";
import { microsoft } from "../../../";

/*********************************************
* connectionOperation
**********************************************/
export interface connectionOperation {
	error?: graph.publicError;
	status?: microsoft.graph.externalConnectors.connectionOperationStatus;
}

/*********************************************
* connectionOperationCollections
**********************************************/
export interface connectionOperationCollections {

}

/*********************************************
* external
**********************************************/
export interface external {

}

/*********************************************
* externalCollections
**********************************************/
export interface externalCollections {

}

/*********************************************
* externalConnection
**********************************************/
export interface externalConnection {
	configuration?: microsoft.graph.externalConnectors.configuration;
	description?: string;
	name?: string;
	state?: microsoft.graph.externalConnectors.connectionState;
}

/*********************************************
* externalConnectionCollections
**********************************************/
export interface externalConnectionCollections {

}

/*********************************************
* externalGroup
**********************************************/
export interface externalGroup {
	description?: string;
	displayName?: string;
}

/*********************************************
* externalGroupCollections
**********************************************/
export interface externalGroupCollections {

}

/*********************************************
* externalItem
**********************************************/
export interface externalItem {
	acl?: { results: Array<microsoft.graph.externalConnectors.acl> };
	content?: microsoft.graph.externalConnectors.externalItemContent;
	properties?: microsoft.graph.externalConnectors.properties;
}

/*********************************************
* externalItemCollections
**********************************************/
export interface externalItemCollections {

}

/*********************************************
* schema
**********************************************/
export interface schema {
	baseType?: string;
	properties?: { results: Array<microsoft.graph.externalConnectors.property> };
}

/*********************************************
* schemaCollections
**********************************************/
export interface schemaCollections {

}

/*********************************************
* identity
**********************************************/
export interface identity {
	type?: microsoft.graph.externalConnectors.identityType;
}

/*********************************************
* identityCollections
**********************************************/
export interface identityCollections {

}
