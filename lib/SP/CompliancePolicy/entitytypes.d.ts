import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";

/*********************************************
* PolicyEvaluationInfo
**********************************************/
export interface PolicyEvaluationInfo {
	ApplicablePolicies?: Array<string>;
	DlpAccessScope?: number;
	MatchedRules?: Array<string>;
	OverriddenRules?: Array<string>;
}

/*********************************************
* PolicyEvaluationInfoCollections
**********************************************/
export interface PolicyEvaluationInfoCollections {

}

/*********************************************
* ISPPolicyStoreProxy
**********************************************/
export interface ISPPolicyStoreProxy extends SPPolicyStoreProxyCollections,SPPolicyStoreProxyMethods,IBaseQuery<ISPPolicyStoreProxyQuery> {

}

/*********************************************
* ISPPolicyStoreProxyQuery
**********************************************/
export interface ISPPolicyStoreProxyQuery extends SPPolicyStoreProxyQuery,SPPolicyStoreProxyMethods {

}

/*********************************************
* SPPolicyStoreProxy
**********************************************/
export interface SPPolicyStoreProxy extends SPPolicyStoreProxyCollections, SPPolicyStoreProxyMethods {
	PolicyStoreUrl?: string;
	ReviewCenterUrl?: string;
	SupportContentTypeRetention?: boolean;
}

/*********************************************
* SPPolicyStoreProxyProps
**********************************************/
export interface SPPolicyStoreProxyProps {

}

/*********************************************
* SPPolicyStoreProxyCollections
**********************************************/
export interface SPPolicyStoreProxyCollections extends SPPolicyStoreProxyProps {

}

/*********************************************
* SPPolicyStoreProxyQuery
**********************************************/
export interface SPPolicyStoreProxyQuery extends SPPolicyStoreProxyProps {

}

/*********************************************
* SPPolicyStoreProxyMethods
**********************************************/
export interface SPPolicyStoreProxyMethods {
	addDynamicScopeBinding(identity?: string, siteId?: string): IBaseExecution<any>;
	bulkUpdateDynamicScopeBindings(scopesToAdd?: Array<string>, scopesToRemove?: Array<string>, siteId?: string): IBaseExecution<any>;
	deleteDynamicScopeBinding(identity?: string, siteId?: string): IBaseExecution<any>;
	extendReviewItemsRetention(itemIds?: Array<number>, extensionDate?: any): IBaseExecution<Array<number>>;
	getDynamicScopeBindingBySiteId(siteId?: string): IBaseExecution<Array<string>>;
	markReviewItemsForDeletion(itemIds?: Array<number>): IBaseExecution<Array<number>>;
	openBinaryStreamForOriginalItem(itemId?: number): IBaseExecution<any>;
	removeContainerRetentionPolicy(siteId?: string): IBaseExecution<any>;
	removeContainerSettings(externalId?: Array<string>): IBaseExecution<any>;
	retagReviewItems(itemIds?: Array<number>, newTag?: string, newTagIsRecord?: boolean, newTagBlockDelete?: boolean, newTagIsEventBased?: boolean): IBaseExecution<Array<number>>;
	retagReviewItemsWithMetas(itemIds?: Array<number>, newTagName?: string, newTagMetas?: Array<string>): IBaseExecution<Array<number>>;
	setContainerRetentionPolicy(siteId?: string, defaultContainerLabel?: any): IBaseExecution<any>;
	updateContainerSetting(siteId?: string, externalId?: string, settingType?: number, setting?: string): IBaseExecution<any>;
}

/*********************************************
* SPSitePreservationUtility
**********************************************/
export interface SPSitePreservationUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSitePreservationUtilityCollections
**********************************************/
export interface SPSitePreservationUtilityCollections {

}
