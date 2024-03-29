import { Base } from "../../../";

/*********************************************
* ContentTypeInfo
**********************************************/
export interface ContentTypeInfo {
	Description?: string;
	Group?: string;
	Id?: string;
	IsHidden?: boolean;
	IsSealed?: boolean;
	Name?: string;
	ParentName?: string;
}

/*********************************************
* ContentTypeInfoCollections
**********************************************/
export interface ContentTypeInfoCollections {

}

/*********************************************
* ContentTypeSyndicationResult
**********************************************/
export interface ContentTypeSyndicationResult {
	FailedContentTypeErrors?: { results: Array<string> };
	FailedContentTypeIDs?: { results: Array<string> };
	FailedReason?: number;
	IsPassed?: boolean;
}

/*********************************************
* ContentTypeSyndicationResultCollections
**********************************************/
export interface ContentTypeSyndicationResultCollections {

}
