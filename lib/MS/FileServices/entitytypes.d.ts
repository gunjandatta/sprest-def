import { MS } from "../../";
import { IBaseExecution } from "../../";
import { IBaseCollection } from "../../";

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
* IFile
**********************************************/
export interface IFile extends FileProps,FileMethods,IBaseExecution<File> {

}

/*********************************************
* File
**********************************************/
export interface File extends MS.FileServices.FileSystemItem, FileProps, FileMethods {

}

/*********************************************
* FileProps
**********************************************/
export interface FileProps {

}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	copyTo<T=any>(target?: string, overwrite?: boolean): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	download<T=any>(): IBaseExecution<T>;
	moveTo<T=any>(target?: string, overwrite?: boolean): IBaseExecution<T>;
	upload<T=any>(stream?: any): IBaseExecution<T>;
}

/*********************************************
* FileService
**********************************************/
export interface FileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IFolder
**********************************************/
export interface IFolder extends FolderProps,FolderMethods,IBaseExecution<Folder> {

}

/*********************************************
* Folder
**********************************************/
export interface Folder extends MS.FileServices.FileSystemItem, FolderProps, FolderMethods {
	ChildrenCount?: number;
}

/*********************************************
* FolderProps
**********************************************/
export interface FolderProps {
	Children<T=MS.FileServices.FileSystemItem>(): IBaseCollection<T>;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	moveTo<T=any>(target?: string): IBaseExecution<T>;
}

/*********************************************
* MeFileService
**********************************************/
export interface MeFileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IFileSystemItemCollection
**********************************************/
export interface IFileSystemItemCollection extends FileSystemItemCollectionProps,FileSystemItemCollectionMethods,IBaseExecution<FileSystemItemCollection> {

}

/*********************************************
* FileSystemItemCollection
**********************************************/
export interface FileSystemItemCollection extends FileSystemItemCollectionProps, FileSystemItemCollectionMethods {

}

/*********************************************
* FileSystemItemCollectionProps
**********************************************/
export interface FileSystemItemCollectionProps {

}

/*********************************************
* FileSystemItemCollectionMethods
**********************************************/
export interface FileSystemItemCollectionMethods {
	add<T=MS.FileServices.File>(name?: string, overwrite?: boolean, content?: any): IBaseExecution<T>;
	getById<T=MS.FileServices.FileSystemItem>(id?: string): IBaseExecution<T>;
}
