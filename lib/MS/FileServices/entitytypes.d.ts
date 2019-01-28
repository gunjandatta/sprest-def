import { MS } from "../../";

/*********************************************
* FileSystemItem
**********************************************/
export interface FileSystemItem {
	CreatedBy?: MS.FileServices.UserInformation;
	ETag?: string;
	Id?: string;
	LastModifiedBy?: MS.FileServices.UserInformation;
	Name?: string;
	Size?: number;
	TimeCreated?: any;
	TimeLastModified?: any;
	Url?: string;
}

/*********************************************
* File
**********************************************/
export interface File extends MS.FileServices.FileSystemItem {

}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	copyTo<T=void>(target?: string, overwrite?: boolean): T;
	deleteObject<T=void>(): T;
	download<T=any>(): T;
	moveTo<T=void>(target?: string, overwrite?: boolean): T;
	upload<T=void>(stream?: any): T;
}

/*********************************************
* FileService
**********************************************/
export interface FileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* Folder
**********************************************/
export interface Folder extends MS.FileServices.FileSystemItem {
	ChildrenCount?: number;
}

/*********************************************
* FolderCollections
**********************************************/
export interface FolderCollections {
	Children<T=Array<MS.FileServices.FileSystemItem>>(): T;
}

/*********************************************
* FolderQuery
**********************************************/
export interface FolderQuery {
	Children<T=Array<MS.FileServices.FileSystemItem>>(): T;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	deleteObject<T=void>(): T;
	moveTo<T=void>(target?: string): T;
}

/*********************************************
* MeFileService
**********************************************/
export interface MeFileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
