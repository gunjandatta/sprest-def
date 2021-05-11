import { Base } from "../../../";

/*********************************************
* ComplianceTagInfo
**********************************************/
export interface ComplianceTagInfo {
	IsRecord?: boolean;
	IsRegulatory?: boolean;
	ShouldKeep?: boolean;
	TagName?: string;
	UnifiedRuleId?: any;
	UnifiedTagId?: any;
}

/*********************************************
* ComplianceTagInfoCollections
**********************************************/
export interface ComplianceTagInfoCollections {

}

/*********************************************
* PreservedCloudAttachment
**********************************************/
export interface PreservedCloudAttachment {
	CompositeDocumentId?: string;
	Url?: string;
}

/*********************************************
* PreservedCloudAttachmentCollections
**********************************************/
export interface PreservedCloudAttachmentCollections {

}
