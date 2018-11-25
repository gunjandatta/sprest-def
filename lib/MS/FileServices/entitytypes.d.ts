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
* FileService
**********************************************/
export interface FileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* Folder
**********************************************/
export interface Folder extends MS.FileServices.FileSystemItem {
	Children?: () => MS.FileServices.MS_FileServices_Folder_Children_MS_FileServices_FileSystemItem_ChildrenPartner;
	ChildrenCount?: number;
}

/*********************************************
* MeFileService
**********************************************/
export interface MeFileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
