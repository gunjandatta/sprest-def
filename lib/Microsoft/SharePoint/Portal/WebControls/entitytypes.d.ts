import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../";

/*********************************************
* RecentDocument
**********************************************/
export interface RecentDocument {
	Application?: string;
	FileName?: string;
	IconUrl?: string;
	Id?: number;
	IsPinned?: boolean;
	LinkLocation?: string;
	TimeStamp?: any;
}

/*********************************************
* RecentDocumentCollections
**********************************************/
export interface RecentDocumentCollections {

}
