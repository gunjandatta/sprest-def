import { Base } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* FileStatus
**********************************************/
export interface FileStatus {
	ErrorCode?: number;
	InitialCreation?: boolean;
	ListItemId?: number;
	ParentListId?: any;
	Path?: SP.ResourcePath;
	Succeeded?: boolean;
	UniqueId?: any;
}

/*********************************************
* FileStatusCollections
**********************************************/
export interface FileStatusCollections {

}

/*********************************************
* RemovedStatus
**********************************************/
export interface RemovedStatus {
	ErrorCode?: number;
	FoundAndRemovedFile?: boolean;
	Succeeded?: boolean;
}

/*********************************************
* RemovedStatusCollections
**********************************************/
export interface RemovedStatusCollections {

}
