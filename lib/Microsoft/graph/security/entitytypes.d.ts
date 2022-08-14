import { Base } from "../../../";
import { graph } from "../../../";
import { microsoft } from "../../../";

/*********************************************
* casesRoot
**********************************************/
export interface casesRoot {

}

/*********************************************
* casesRootCollections
**********************************************/
export interface casesRootCollections {

}

/*********************************************
* case
**********************************************/
export interface case {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
	status?: microsoft.graph.security.caseStatus;
}

/*********************************************
* caseCollections
**********************************************/
export interface caseCollections {

}

/*********************************************
* caseOperation
**********************************************/
export interface caseOperation {
	action?: microsoft.graph.security.caseAction;
	completedDateTime?: anyOffset;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	percentProgress?: number;
	resultInfo?: graph.resultInfo;
	status?: microsoft.graph.security.caseOperationStatus;
}

/*********************************************
* caseOperationCollections
**********************************************/
export interface caseOperationCollections {

}

/*********************************************
* ediscoveryCase
**********************************************/
export interface ediscoveryCase {
	closedBy?: graph.identitySet;
	closedDateTime?: anyOffset;
	externalId?: string;
}

/*********************************************
* ediscoveryCaseCollections
**********************************************/
export interface ediscoveryCaseCollections {

}

/*********************************************
* dataSet
**********************************************/
export interface dataSet {
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	displayName?: string;
}

/*********************************************
* dataSetCollections
**********************************************/
export interface dataSetCollections {

}

/*********************************************
* dataSource
**********************************************/
export interface dataSource {
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	displayName?: string;
	holdStatus?: microsoft.graph.security.dataSourceHoldStatus;
}

/*********************************************
* dataSourceCollections
**********************************************/
export interface dataSourceCollections {

}

/*********************************************
* dataSourceContainer
**********************************************/
export interface dataSourceContainer {
	createdDateTime?: anyOffset;
	displayName?: string;
	holdStatus?: microsoft.graph.security.dataSourceHoldStatus;
	lastModifiedDateTime?: anyOffset;
	releasedDateTime?: anyOffset;
	status?: microsoft.graph.security.dataSourceContainerStatus;
}

/*********************************************
* dataSourceContainerCollections
**********************************************/
export interface dataSourceContainerCollections {

}

/*********************************************
* ediscoveryAddToReviewSetOperation
**********************************************/
export interface ediscoveryAddToReviewSetOperation {

}

/*********************************************
* ediscoveryAddToReviewSetOperationCollections
**********************************************/
export interface ediscoveryAddToReviewSetOperationCollections {

}

/*********************************************
* ediscoveryReviewSet
**********************************************/
export interface ediscoveryReviewSet {

}

/*********************************************
* ediscoveryReviewSetCollections
**********************************************/
export interface ediscoveryReviewSetCollections {

}

/*********************************************
* search
**********************************************/
export interface search {
	contentQuery?: string;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* searchCollections
**********************************************/
export interface searchCollections {

}

/*********************************************
* ediscoverySearch
**********************************************/
export interface ediscoverySearch {
	dataSourceScopes?: microsoft.graph.security.dataSourceScopes;
}

/*********************************************
* ediscoverySearchCollections
**********************************************/
export interface ediscoverySearchCollections {

}

/*********************************************
* ediscoveryCustodian
**********************************************/
export interface ediscoveryCustodian {
	acknowledgedDateTime?: anyOffset;
	email?: string;
}

/*********************************************
* ediscoveryCustodianCollections
**********************************************/
export interface ediscoveryCustodianCollections {

}

/*********************************************
* ediscoveryNoncustodialDataSource
**********************************************/
export interface ediscoveryNoncustodialDataSource {

}

/*********************************************
* ediscoveryNoncustodialDataSourceCollections
**********************************************/
export interface ediscoveryNoncustodialDataSourceCollections {

}

/*********************************************
* ediscoveryCaseSettings
**********************************************/
export interface ediscoveryCaseSettings {
	ocr?: microsoft.graph.security.ocrSettings;
	redundancyDetection?: microsoft.graph.security.redundancyDetectionSettings;
	topicModeling?: microsoft.graph.security.topicModelingSettings;
}

/*********************************************
* ediscoveryCaseSettingsCollections
**********************************************/
export interface ediscoveryCaseSettingsCollections {

}

/*********************************************
* tag
**********************************************/
export interface tag {
	createdBy?: graph.identitySet;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* tagCollections
**********************************************/
export interface tagCollections {

}

/*********************************************
* ediscoveryReviewTag
**********************************************/
export interface ediscoveryReviewTag {
	childSelectability?: microsoft.graph.security.childSelectability;
}

/*********************************************
* ediscoveryReviewTagCollections
**********************************************/
export interface ediscoveryReviewTagCollections {

}

/*********************************************
* ediscoveryIndexOperation
**********************************************/
export interface ediscoveryIndexOperation {

}

/*********************************************
* ediscoveryIndexOperationCollections
**********************************************/
export interface ediscoveryIndexOperationCollections {

}

/*********************************************
* siteSource
**********************************************/
export interface siteSource {

}

/*********************************************
* siteSourceCollections
**********************************************/
export interface siteSourceCollections {

}

/*********************************************
* unifiedGroupSource
**********************************************/
export interface unifiedGroupSource {
	includedSources?: microsoft.graph.security.sourceType;
}

/*********************************************
* unifiedGroupSourceCollections
**********************************************/
export interface unifiedGroupSourceCollections {

}

/*********************************************
* userSource
**********************************************/
export interface userSource {
	email?: string;
	includedSources?: microsoft.graph.security.sourceType;
	siteWebUrl?: string;
}

/*********************************************
* userSourceCollections
**********************************************/
export interface userSourceCollections {

}

/*********************************************
* ediscoveryEstimateOperation
**********************************************/
export interface ediscoveryEstimateOperation {
	indexedItemCount?: number;
	indexedItemsSize?: number;
	mailboxCount?: number;
	siteCount?: number;
	unindexedItemCount?: number;
	unindexedItemsSize?: number;
}

/*********************************************
* ediscoveryEstimateOperationCollections
**********************************************/
export interface ediscoveryEstimateOperationCollections {

}

/*********************************************
* ediscoveryHoldOperation
**********************************************/
export interface ediscoveryHoldOperation {

}

/*********************************************
* ediscoveryHoldOperationCollections
**********************************************/
export interface ediscoveryHoldOperationCollections {

}

/*********************************************
* ediscoveryReviewSetQuery
**********************************************/
export interface ediscoveryReviewSetQuery {

}

/*********************************************
* ediscoveryReviewSetQueryCollections
**********************************************/
export interface ediscoveryReviewSetQueryCollections {

}

/*********************************************
* ediscoveryTagOperation
**********************************************/
export interface ediscoveryTagOperation {

}

/*********************************************
* ediscoveryTagOperationCollections
**********************************************/
export interface ediscoveryTagOperationCollections {

}
