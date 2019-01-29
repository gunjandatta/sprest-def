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
* FileMethods<T = any>
**********************************************/
export interface FileMethods<T = any> {
	copyTo(target?: string, overwrite?: boolean): T;
	deleteObject(): T;
	download(): T;
	moveTo(target?: string, overwrite?: boolean): T;
	upload(stream?: any): T;
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
* FolderCollections<T = any>
**********************************************/
export interface FolderCollections<T = any> {
	Children(): T;
}

/*********************************************
* FolderQuery
**********************************************/
export interface FolderQuery {
	Children(): T;
}

/*********************************************
* FolderMethods<T = any>
**********************************************/
export interface FolderMethods<T = any> {
	deleteObject(): T;
	moveTo(target?: string): T;
}

/*********************************************
* MeFileService
**********************************************/
export interface MeFileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
