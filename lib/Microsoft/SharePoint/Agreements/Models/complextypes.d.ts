import { Base } from "../../../../";
import { SP } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ApproveItemApprovalRequestPayload
**********************************************/
export interface ApproveItemApprovalRequestPayload {
	approvalId?: string;
	comments?: string;
	itemId?: string;
	url?: string;
	version?: string;
}

/*********************************************
* ApproveItemApprovalRequestPayloadCollections
**********************************************/
export interface ApproveItemApprovalRequestPayloadCollections {

}

/*********************************************
* CancelItemApprovalRequestPayload
**********************************************/
export interface CancelItemApprovalRequestPayload {
	approvalId?: string;
	itemId?: string;
	makeDocumentDraft?: boolean;
	url?: string;
	version?: string;
}

/*********************************************
* CancelItemApprovalRequestPayloadCollections
**********************************************/
export interface CancelItemApprovalRequestPayloadCollections {

}

/*********************************************
* CreateItemApprovalRequestPayload
**********************************************/
export interface CreateItemApprovalRequestPayload {
	approvalConfig?: string;
	restrictDocEdit?: boolean;
}

/*********************************************
* CreateItemApprovalRequestPayloadCollections
**********************************************/
export interface CreateItemApprovalRequestPayloadCollections {

}

/*********************************************
* FieldCreationParameters
**********************************************/
export interface FieldCreationParameters {
	DataSource?: string;
	DataType?: string;
	Description?: string;
	Title?: string;
}

/*********************************************
* FieldCreationParametersCollections
**********************************************/
export interface FieldCreationParametersCollections {

}

/*********************************************
* FieldInsertionItem
**********************************************/
export interface FieldInsertionItem {
	Content?: string;
	DataType?: string;
	Name?: string;
}

/*********************************************
* FieldInsertionItemCollections
**********************************************/
export interface FieldInsertionItemCollections {

}

/*********************************************
* FieldInsertionPayload
**********************************************/
export interface FieldInsertionPayload {
	Items?: { results: Array<Microsoft.SharePoint.Agreements.Models.FieldInsertionItem> };
	TemplateUrl?: string;
}

/*********************************************
* FieldInsertionPayloadCollections
**********************************************/
export interface FieldInsertionPayloadCollections {

}

/*********************************************
* FieldItemInsertionDetails
**********************************************/
export interface FieldItemInsertionDetails {
	ColumnId?: string;
	DataType?: string;
	FieldId?: string;
	Occurrences?: number;
	Text?: string;
	Title?: string;
}

/*********************************************
* FieldItemInsertionDetailsCollections
**********************************************/
export interface FieldItemInsertionDetailsCollections {

}

/*********************************************
* RejectItemApprovalRequestPayload
**********************************************/
export interface RejectItemApprovalRequestPayload {
	approvalId?: string;
	comments?: string;
	itemId?: string;
	url?: string;
	version?: string;
}

/*********************************************
* RejectItemApprovalRequestPayloadCollections
**********************************************/
export interface RejectItemApprovalRequestPayloadCollections {

}

/*********************************************
* TemplateCreationParameters
**********************************************/
export interface TemplateCreationParameters {
	SourceFileUniqueId?: string;
	SourceLibraryId?: string;
	TemplateName?: string;
}

/*********************************************
* TemplateCreationParametersCollections
**********************************************/
export interface TemplateCreationParametersCollections {

}
