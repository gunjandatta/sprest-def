import { IBaseExecution } from "../../";

/*********************************************
* IDocumentId
**********************************************/
export interface IDocumentId extends DocumentIdProps,DocumentIdMethods,IBaseExecution<DocumentId> {

}

/*********************************************
* DocumentId
**********************************************/
export interface DocumentId extends DocumentIdProps, DocumentIdMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentIdProps
**********************************************/
export interface DocumentIdProps {

}

/*********************************************
* DocumentIdMethods
**********************************************/
export interface DocumentIdMethods {
	resetDocIdByServerRelativePath<T=any>(DecodedUrl?: string): IBaseExecution<T>;
	resetDocIdsInLibrary<T=any>(DecodedUrl?: string, contentTypeId?: string): IBaseExecution<T>;
}
