import { Base } from "../../../../../";

/*********************************************
* AddAuditTrailEntryModel
**********************************************/
export interface AddAuditTrailEntryModel {
	action?: string;
	actionDateTime?: any;
	documentId?: any;
	isEntryVisible?: boolean;
	location?: string;
	name?: string;
}

/*********************************************
* AddAuditTrailEntryModelCollections
**********************************************/
export interface AddAuditTrailEntryModelCollections {

}

/*********************************************
* CancelAgreementModel
**********************************************/
export interface CancelAgreementModel {
	documentId?: any;
	reason?: string;
}

/*********************************************
* CancelAgreementModelCollections
**********************************************/
export interface CancelAgreementModelCollections {

}

/*********************************************
* CompleteAgreementModelV4
**********************************************/
export interface CompleteAgreementModelV4 {
	documentId?: any;
}

/*********************************************
* CompleteAgreementModelV4Collections
**********************************************/
export interface CompleteAgreementModelV4Collections {

}

/*********************************************
* CompleteAgreementModel
**********************************************/
export interface CompleteAgreementModel {
	documentId?: any;
	originalDocName?: string;
	targetFolderUri?: string;
}

/*********************************************
* CompleteAgreementModelCollections
**********************************************/
export interface CompleteAgreementModelCollections {

}

/*********************************************
* CreateAgreementModelV2
**********************************************/
export interface CreateAgreementModelV2 {
	agreementId?: any;
	agreementSource?: string;
	documents?: string;
	expirationDateTime?: any;
	formFieldSets?: string;
	locale?: string;
	message?: string;
	name?: string;
	recipientSets?: string;
	signingMode?: string;
	targetFolderUri?: string;
}

/*********************************************
* CreateAgreementModelV2Collections
**********************************************/
export interface CreateAgreementModelV2Collections {

}

/*********************************************
* CreateAgreementModel
**********************************************/
export interface CreateAgreementModel {
	agreementId?: any;
	agreementSource?: string;
	documents?: string;
	expirationDateTime?: any;
	formFieldSets?: string;
	locale?: string;
	message?: string;
	name?: string;
	recipientSets?: string;
	signingMode?: string;
}

/*********************************************
* CreateAgreementModelCollections
**********************************************/
export interface CreateAgreementModelCollections {

}

/*********************************************
* DeclineAgreementModel
**********************************************/
export interface DeclineAgreementModel {
	documentId?: any;
	reason?: string;
}

/*********************************************
* DeclineAgreementModelCollections
**********************************************/
export interface DeclineAgreementModelCollections {

}

/*********************************************
* SignAgreementModel
**********************************************/
export interface SignAgreementModel {
	agreements?: string;
	documentId?: any;
	signatureFields?: string;
}

/*********************************************
* SignAgreementModelCollections
**********************************************/
export interface SignAgreementModelCollections {

}

/*********************************************
* UpdateAuditTrailEntryModel
**********************************************/
export interface UpdateAuditTrailEntryModel {
	auditTrailEntryId?: any;
	documentId?: any;
	shouldRemoveEntry?: boolean;
}

/*********************************************
* UpdateAuditTrailEntryModelCollections
**********************************************/
export interface UpdateAuditTrailEntryModelCollections {

}
