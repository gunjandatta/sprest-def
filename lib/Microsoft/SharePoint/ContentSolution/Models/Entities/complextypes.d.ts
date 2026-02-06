import { Base } from "../../../../../";

/*********************************************
* DocumentField
**********************************************/
export interface DocumentField {
	AdditionalFieldsData?: string;
	ColumnId?: string;
	DataType?: string;
	Description?: string;
	DisplayName?: string;
	Id?: string;
	InsertionsCount?: number;
	IsColumnMappingActive?: boolean;
	IsMandatory?: boolean;
	Name?: string;
	Source?: string;
}

/*********************************************
* DocumentFieldCollections
**********************************************/
export interface DocumentFieldCollections {

}

/*********************************************
* Template
**********************************************/
export interface Template {
	FullUrl?: string;
	Id?: any;
	ListItemId?: number;
	Name?: string;
	ServerRelativeUrl?: string;
	Status?: string;
}

/*********************************************
* TemplateCollections
**********************************************/
export interface TemplateCollections {

}
