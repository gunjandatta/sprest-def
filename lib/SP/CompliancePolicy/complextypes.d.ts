import { IBaseExecution } from "../../";

/*********************************************
* PendingReviewItemsStatistics
**********************************************/
export interface PendingReviewItemsStatistics {
	LabelId?: string;
	LabelName?: string;
	PendingReviewItemsCount?: number;
}

/*********************************************
* ComplianceTag
**********************************************/
export interface ComplianceTag {
	AcceptMessagesOnlyFromSendersOrMembers?: boolean;
	AccessType?: string;
	AllowAccessFromUnmanagedDevice?: string;
	AutoDelete?: boolean;
	BlockDelete?: boolean;
	BlockEdit?: boolean;
	ContainsSiteLabel?: boolean;
	DisplayName?: string;
	EncryptionRMSTemplateId?: string;
	HasRetentionAction?: boolean;
	IsEventTag?: boolean;
	Notes?: string;
	RequireSenderAuthenticationEnabled?: boolean;
	ReviewerEmail?: string;
	SharingCapabilities?: string;
	SuperLock?: boolean;
	TagDuration?: number;
	TagId?: any;
	TagName?: string;
	TagRetentionBasedOn?: string;
}

/*********************************************
* DlpClassificationResult
**********************************************/
export interface DlpClassificationResult {
	ClassificationId?: string;
	Confidence?: number;
	Count?: number;
}
