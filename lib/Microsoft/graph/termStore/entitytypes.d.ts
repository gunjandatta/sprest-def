import { Base } from "../../../";
import { graph } from "../../";
import { microsoft } from "../../../";

/*********************************************
* store
**********************************************/
export interface store {
	defaultLanguageTag?: string;
	languageTags?: { results: Array<string> };
}

/*********************************************
* storeCollections
**********************************************/
export interface storeCollections {

}

/*********************************************
* group
**********************************************/
export interface group {
	createdDateTime?: any;
	description?: string;
	displayName?: string;
	parentSiteId?: string;
	scope?: microsoft.graph.termGroupScope;
}

/*********************************************
* groupCollections
**********************************************/
export interface groupCollections {

}

/*********************************************
* set
**********************************************/
export interface set {
	createdDateTime?: any;
	description?: string;
	localizedNames?: { results: Array<microsoft.graph.termStore.localizedName> };
	properties?: { results: Array<graph.keyValue> };
}

/*********************************************
* setCollections
**********************************************/
export interface setCollections {

}

/*********************************************
* relation
**********************************************/
export interface relation {
	relationship?: microsoft.graph.relationType;
}

/*********************************************
* relationCollections
**********************************************/
export interface relationCollections {

}

/*********************************************
* term
**********************************************/
export interface term {
	createdDateTime?: any;
	descriptions?: { results: Array<microsoft.graph.termStore.localizedDescription> };
	labels?: { results: Array<microsoft.graph.termStore.localizedLabel> };
	lastModifiedDateTime?: any;
	properties?: { results: Array<graph.keyValue> };
}

/*********************************************
* termCollections
**********************************************/
export interface termCollections {

}
