import { Base } from "../../../";
import { graph } from "../../";
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
* _case
**********************************************/
export interface _case {
	createdDateTime?: any;
	description?: string;
	displayName?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: any;
	status?: microsoft.graph.caseStatus;
}

/*********************************************
* _caseCollections
**********************************************/
export interface _caseCollections {

}

/*********************************************
* caseOperation
**********************************************/
export interface caseOperation {
	action?: microsoft.graph.caseAction;
	completedDateTime?: any;
	createdBy?: graph.identitySet;
	createdDateTime?: any;
	percentProgress?: number;
	resultInfo?: graph.resultInfo;
	status?: microsoft.graph.caseOperationStatus;
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
	closedDateTime?: any;
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
	createdDateTime?: any;
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
	createdDateTime?: any;
	displayName?: string;
	holdStatus?: microsoft.graph.dataSourceHoldStatus;
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
	createdDateTime?: any;
	displayName?: string;
	holdStatus?: microsoft.graph.dataSourceHoldStatus;
	lastModifiedDateTime?: any;
	releasedDateTime?: any;
	status?: microsoft.graph.dataSourceContainerStatus;
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
	createdDateTime?: any;
	description?: string;
	displayName?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: any;
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
	dataSourceScopes?: microsoft.graph.dataSourceScopes;
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
	acknowledgedDateTime?: any;
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
	lastModifiedDateTime?: any;
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
	childSelectability?: microsoft.graph.childSelectability;
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
	includedSources?: microsoft.graph.sourceType;
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
	includedSources?: microsoft.graph.sourceType;
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
