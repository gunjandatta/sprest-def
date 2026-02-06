import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ITemplateAPI
**********************************************/
export interface ITemplateAPI extends TemplateAPICollections, TemplateAPIMethods, Base.IBaseQuery<TemplateAPI, ITemplateAPIQuery> {

}

/*********************************************
* ITemplateAPICollection
**********************************************/
export interface ITemplateAPICollection extends Base.IBaseResults<TemplateAPI> {
	done?: (resolve: (value?: Array<TemplateAPI>) => void) => void;
}

/*********************************************
* ITemplateAPIQueryCollection
**********************************************/
export interface ITemplateAPIQueryCollection extends Base.IBaseResults<TemplateAPIOData> {
	done?: (resolve: (value?: Array<TemplateAPIOData>) => void) => void;
}

/*********************************************
* ITemplateAPIQuery
**********************************************/
export interface ITemplateAPIQuery extends TemplateAPIOData, TemplateAPIMethods {

}

/*********************************************
* TemplateAPI
**********************************************/
export interface TemplateAPI extends Base.IBaseResult, TemplateAPIProps, TemplateAPICollections, TemplateAPIMethods {

}

/*********************************************
* TemplateAPIProps
**********************************************/
export interface TemplateAPIProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TemplateAPIPropMethods
**********************************************/
export interface TemplateAPIPropMethods {

}

/*********************************************
* TemplateAPICollections
**********************************************/
export interface TemplateAPICollections extends TemplateAPIPropMethods {

}

/*********************************************
* TemplateAPIOData
**********************************************/
export interface TemplateAPIOData extends Base.IBaseResult, TemplateAPIProps, TemplateAPIMethods {

}

/*********************************************
* TemplateAPIMethods
**********************************************/
export interface TemplateAPIMethods {
	addFields(request?: Microsoft.SharePoint.ContentSolution.Models.Requests.AddTemplateFieldsRequest): Base.IBaseCollection<Microsoft.SharePoint.ContentSolution.Models.Entities.DocumentField>;
	createTemplate(request?: Microsoft.SharePoint.ContentSolution.Models.Requests.CreateTemplateRequest): Base.IBaseExecution<Microsoft.SharePoint.ContentSolution.Models.Entities.Template>;
	createTemplateUsingStream(DocumentFolderId?: number, DocumentLibraryId?: any, DocumentSiteId?: any, DocumentWebId?: any, FormId?: string, TemplateName?: string, contentStream?: any): Base.IBaseExecution<Microsoft.SharePoint.ContentSolution.Models.Entities.Template>;
	getContentControlStandardContent(templateId?: any, fetchConditionalsOnly?: boolean): Base.IBaseCollection<Microsoft.SharePoint.ContentSolution.Models.Responses.ContentControlStdContent>;
	getFields(templateId?: any, versionType?: number): Base.IBaseCollection<Microsoft.SharePoint.ContentSolution.Models.Entities.DocumentField>;
	updateField(request?: Microsoft.SharePoint.ContentSolution.Models.Requests.UpdateTemplateFieldRequest): Base.IBaseExecution<Microsoft.SharePoint.ContentSolution.Models.Entities.DocumentField>;
}
