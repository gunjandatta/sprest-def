

/*********************************************
* DocumentId
**********************************************/
export interface DocumentId {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentIdMethods
**********************************************/
export interface DocumentIdMethods {
	resetDocIdByServerRelativePath<T=void>(DecodedUrl?: string): T;
	resetDocIdsInLibrary<T=void>(DecodedUrl?: string, contentTypeId?: string): T;
}
