import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";

/*********************************************
* IDocumentId
**********************************************/
export interface IDocumentId extends DocumentIdCollections,DocumentIdMethods,IBaseQuery<IDocumentIdQuery> {

}

/*********************************************
* IDocumentIdQuery
**********************************************/
export interface IDocumentIdQuery extends DocumentIdQuery,DocumentIdMethods {

}

/*********************************************
* DocumentId
**********************************************/
export interface DocumentId extends DocumentIdCollections, DocumentIdMethods {

}

/*********************************************
* DocumentIdProps
**********************************************/
export interface DocumentIdProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentIdPropMethods
**********************************************/
export interface DocumentIdPropMethods {

}

/*********************************************
* DocumentIdCollections
**********************************************/
export interface DocumentIdCollections extends DocumentIdProps, DocumentIdPropMethods {

}

/*********************************************
* DocumentIdQuery
**********************************************/
export interface DocumentIdQuery extends DocumentIdProps,DocumentIdMethods {

}

/*********************************************
* DocumentIdMethods
**********************************************/
export interface DocumentIdMethods {
	resetDocIdByServerRelativePath(DecodedUrl?: string): IBaseExecution<any>;
	resetDocIdsInLibrary(DecodedUrl?: string, contentTypeId?: string): IBaseExecution<any>;
}
