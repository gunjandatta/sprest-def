import { Base } from "../../../";
import { graph } from "../../../";
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
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	parentSiteId?: string;
	scope?: microsoft.graph.termStore.termGroupScope;
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
	createdDateTime?: anyOffset;
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
	relationship?: microsoft.graph.termStore.relationType;
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
	createdDateTime?: anyOffset;
	descriptions?: { results: Array<microsoft.graph.termStore.localizedDescription> };
	labels?: { results: Array<microsoft.graph.termStore.localizedLabel> };
	lastModifiedDateTime?: anyOffset;
	properties?: { results: Array<graph.keyValue> };
}

/*********************************************
* termCollections
**********************************************/
export interface termCollections {

}
