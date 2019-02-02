import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";

/*********************************************
* IDocumentId
**********************************************/
export interface IDocumentId extends DocumentIdCollections, DocumentIdMethods, IBaseQuery<IDocumentIdQuery> {

}

/*********************************************
* IDocumentIdCollection
**********************************************/
export interface IDocumentIdCollection extends IBaseResults<DocumentId> {
	done?: (resolve: (value?: Array<DocumentId>) => void) => void;
}

/*********************************************
* IDocumentIdQueryCollection
**********************************************/
export interface IDocumentIdQueryCollection extends IBaseResults<DocumentIdOData> {
	done?: (resolve: (value?: Array<DocumentIdOData>) => void) => void;
}

/*********************************************
* IDocumentIdQuery
**********************************************/
export interface IDocumentIdQuery extends DocumentIdOData, DocumentIdMethods {

}

/*********************************************
* DocumentId
**********************************************/
export interface DocumentId extends IBaseResult, DocumentIdProps, DocumentIdCollections, DocumentIdMethods {

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
export interface DocumentIdCollections extends DocumentIdPropMethods {

}

/*********************************************
* DocumentIdOData
**********************************************/
export interface DocumentIdOData extends IBaseResult, DocumentIdProps, DocumentIdMethods {

}

/*********************************************
* DocumentIdMethods
**********************************************/
export interface DocumentIdMethods {
	resetDocIdByServerRelativePath(DecodedUrl?: string): IBaseExecution<any>;
	resetDocIdsInLibrary(DecodedUrl?: string, contentTypeId?: string): IBaseExecution<any>;
}
