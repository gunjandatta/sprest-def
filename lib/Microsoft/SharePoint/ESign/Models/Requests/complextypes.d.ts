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
* CreateAgreementModel
**********************************************/
export interface CreateAgreementModel {
	agreementId?: any;
	documents?: string;
	expirationDateTime?: any;
	formFieldSets?: string;
	locale?: string;
	message?: string;
	name?: string;
	recipientSets?: string;
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
