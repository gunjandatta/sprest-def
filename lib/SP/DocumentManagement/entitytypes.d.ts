import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";

/*********************************************
* IDocumentId
**********************************************/
export interface IDocumentId extends DocumentIdCollections,DocumentIdMethods,IBaseQuery<IDocumentIdQuery> {

}

/*********************************************
* IDocumentIdCollection
**********************************************/
export interface IDocumentIdCollection extends IBaseResults<DocumentId> {
	done(resolve: (value?: Array<DocumentId | any>) => void);
}

/*********************************************
* IDocumentIdQueryCollection
**********************************************/
export interface IDocumentIdQueryCollection extends IBaseResults<DocumentIdQuery> {
	done(resolve: (value?: Array<DocumentIdQuery | any>) => void);
}

/*********************************************
* IDocumentIdQuery
**********************************************/
export interface IDocumentIdQuery extends DocumentIdQuery, DocumentIdMethods {

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
* DocumentIdQuery
**********************************************/
export interface DocumentIdQuery extends IBaseResult, DocumentIdProps, DocumentIdMethods {

}

/*********************************************
* DocumentIdMethods
**********************************************/
export interface DocumentIdMethods {
	resetDocIdByServerRelativePath(DecodedUrl?: string): IBaseExecution<any>;
	resetDocIdsInLibrary(DecodedUrl?: string, contentTypeId?: string): IBaseExecution<any>;
}
