import { IBaseExecution } from "../../";
import { MS } from "../../";
import { IBaseQuery } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";

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
* FileSystemItemCollections
**********************************************/
export interface FileSystemItemCollections extends FileSystemItemCollectionMethods {

}

/*********************************************
* FileSystemItemCollectionMethods
**********************************************/
export interface FileSystemItemCollectionMethods {
	add(name?: string, overwrite?: boolean, content?: any): IBaseExecution<MS.FileServices.File>;
	getById(id?: string): IBaseExecution<MS.FileServices.FileSystemItem>;
}

/*********************************************
* IFile
**********************************************/
export interface IFile extends FileCollections,FileMethods,IBaseQuery<IFileQuery> {

}

/*********************************************
* IFileQuery
**********************************************/
export interface IFileQuery extends FileQuery,FileMethods {

}

/*********************************************
* File
**********************************************/
export interface File extends MS.FileServices.FileSystemItem, FileCollections, FileMethods {

}

/*********************************************
* FileProps
**********************************************/
export interface FileProps {

}

/*********************************************
* FileCollections
**********************************************/
export interface FileCollections extends FileProps {

}

/*********************************************
* FileQuery
**********************************************/
export interface FileQuery extends FileProps {

}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	copyTo(target?: string, overwrite?: boolean): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	download(): IBaseExecution<any>;
	moveTo(target?: string, overwrite?: boolean): IBaseExecution<any>;
	upload(stream?: any): IBaseExecution<any>;
}

/*********************************************
* FileService
**********************************************/
export interface FileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* FileServiceCollections
**********************************************/
export interface FileServiceCollections {

}

/*********************************************
* IFolder
**********************************************/
export interface IFolder extends FolderCollections,FolderMethods,IBaseQuery<IFolderQuery> {

}

/*********************************************
* IFolderQuery
**********************************************/
export interface IFolderQuery extends FolderQuery,FolderMethods {

}

/*********************************************
* Folder
**********************************************/
export interface Folder extends MS.FileServices.FileSystemItem, FolderCollections, FolderMethods {
	ChildrenCount?: number;
}

/*********************************************
* FolderProps
**********************************************/
export interface FolderProps {

}

/*********************************************
* FolderCollections
**********************************************/
export interface FolderCollections extends FolderProps {
	Children(): IBaseCollection<MS.FileServices.FileSystemItem> & MS.FileServices.FileSystemItemCollectionMethods;
	Children(id: string | number): IBaseQuery<MS.FileServices.FileSystemItem> & MS.FileServices.FileSystemItemCollections;
}

/*********************************************
* FolderQuery
**********************************************/
export interface FolderQuery extends FolderProps {
	Children: IBaseResults<MS.FileServices.FileSystemItem>;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	delete(): IBaseExecution<any>;
	moveTo(target?: string): IBaseExecution<any>;
}

/*********************************************
* MeFileService
**********************************************/
export interface MeFileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MeFileServiceCollections
**********************************************/
export interface MeFileServiceCollections {

}
