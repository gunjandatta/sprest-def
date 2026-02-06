import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* AddTemplateFieldsRequest
**********************************************/
export interface AddTemplateFieldsRequest {
	Fields?: { results: Array<Microsoft.SharePoint.ContentSolution.Models.Requests.FieldInput> };
	TemplateId?: string;
}

/*********************************************
* AddTemplateFieldsRequestCollections
**********************************************/
export interface AddTemplateFieldsRequestCollections {

}

/*********************************************
* FieldInput
**********************************************/
export interface FieldInput {
	AdditionalFieldsData?: string;
	ColumnId?: string;
	DataType?: string;
	Description?: string;
	DisplayName?: string;
	IsColumnMappingActive?: boolean;
	IsMandatory?: boolean;
	Name?: string;
	Source?: string;
}

/*********************************************
* FieldInputCollections
**********************************************/
export interface FieldInputCollections {

}

/*********************************************
* CreateTemplateRequest
**********************************************/
export interface CreateTemplateRequest {
	DocumentLocation?: Microsoft.SharePoint.ContentSolution.Models.Requests.DocumentLocation;
	Fields?: { results: Array<Microsoft.SharePoint.ContentSolution.Models.Requests.FieldInput> };
	FormId?: string;
	SourceFileReference?: Microsoft.SharePoint.ContentSolution.Models.Requests.FileReference;
	TemplateName?: string;
}

/*********************************************
* CreateTemplateRequestCollections
**********************************************/
export interface CreateTemplateRequestCollections {

}

/*********************************************
* DocumentLocation
**********************************************/
export interface DocumentLocation {
	FolderId?: number;
	LibraryId?: any;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* DocumentLocationCollections
**********************************************/
export interface DocumentLocationCollections {

}

/*********************************************
* FileReference
**********************************************/
export interface FileReference {
	LibraryId?: any;
	SiteId?: any;
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* FileReferenceCollections
**********************************************/
export interface FileReferenceCollections {

}

/*********************************************
* CreateTemplateUsingStreamRequest
**********************************************/
export interface CreateTemplateUsingStreamRequest {
	DocumentFolderId?: number;
	DocumentLibraryId?: any;
	DocumentSiteId?: any;
	DocumentWebId?: any;
	FormId?: string;
	TemplateName?: string;
}

/*********************************************
* CreateTemplateUsingStreamRequestCollections
**********************************************/
export interface CreateTemplateUsingStreamRequestCollections {

}

/*********************************************
* FieldUpdate
**********************************************/
export interface FieldUpdate {
	AdditionalFieldsData?: string;
	DataType?: string;
	Description?: string;
	DisplayName?: string;
	IsColumnMappingActive?: boolean;
	IsMandatory?: boolean;
	Name?: string;
	Source?: string;
}

/*********************************************
* FieldUpdateCollections
**********************************************/
export interface FieldUpdateCollections {

}

/*********************************************
* UpdateTemplateFieldRequest
**********************************************/
export interface UpdateTemplateFieldRequest {
	FieldId?: string;
	TemplateId?: string;
	UpdatedField?: Microsoft.SharePoint.ContentSolution.Models.Requests.FieldUpdate;
}

/*********************************************
* UpdateTemplateFieldRequestCollections
**********************************************/
export interface UpdateTemplateFieldRequestCollections {

}
