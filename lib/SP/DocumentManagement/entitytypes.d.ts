

/*********************************************
* DocumentId
**********************************************/
export interface DocumentId {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentIdMethods<T = any>
**********************************************/
export interface DocumentIdMethods<T = any> {
	resetDocIdByServerRelativePath(DecodedUrl?: string): T;
	resetDocIdsInLibrary(DecodedUrl?: string, contentTypeId?: string): T;
}
