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
* ISPPolicyStoreProxyCollection
**********************************************/
export interface ISPPolicyStoreProxyCollection extends IBaseResults<SPPolicyStoreProxy> {

}

/*********************************************
* ISPPolicyStoreProxyQueryCollection
**********************************************/
export interface ISPPolicyStoreProxyQueryCollection extends IBaseResults<SPPolicyStoreProxyQuery> {

}

/*********************************************
* ISPPolicyStoreProxyQuery
**********************************************/
export interface ISPPolicyStoreProxyQuery extends SPPolicyStoreProxyQuery, SPPolicyStoreProxyMethods {

}

/*********************************************
* SPPolicyStoreProxy
**********************************************/
export interface SPPolicyStoreProxy extends SPPolicyStoreProxyProps, SPPolicyStoreProxyCollections, SPPolicyStoreProxyMethods {

}

/*********************************************
* SPPolicyStoreProxyProps
**********************************************/
export interface SPPolicyStoreProxyProps {
	PolicyStoreUrl?: string;
	ReviewCenterUrl?: string;
	SupportContentTypeRetention?: boolean;
}

/*********************************************
* SPPolicyStoreProxyPropMethods
**********************************************/
export interface SPPolicyStoreProxyPropMethods {

}

/*********************************************
* SPPolicyStoreProxyCollections
**********************************************/
export interface SPPolicyStoreProxyCollections extends SPPolicyStoreProxyPropMethods {

}

/*********************************************
* SPPolicyStoreProxyQuery
**********************************************/
export interface SPPolicyStoreProxyQuery extends SPPolicyStoreProxyProps, SPPolicyStoreProxyMethods {

}

/*********************************************
* SPPolicyStoreProxyMethods
**********************************************/
export interface SPPolicyStoreProxyMethods {
	addDynamicScopeBinding(identity?: string, siteId?: string): IBaseExecution<any>;
	bulkUpdateDynamicScopeBindings(scopesToAdd?: Array<string>, scopesToRemove?: Array<string>, siteId?: string): IBaseExecution<any>;
	deleteDynamicScopeBinding(identity?: string, siteId?: string): IBaseExecution<any>;
	extendReviewItemsRetention(itemIds?: Array<number>, extensionDate?: any): IBaseCollection<number>;
	getDynamicScopeBindingBySiteId(siteId?: string): IBaseCollection<string>;
	markReviewItemsForDeletion(itemIds?: Array<number>): IBaseCollection<number>;
	openBinaryStreamForOriginalItem(itemId?: number): IBaseExecution<any>;
	removeContainerRetentionPolicy(siteId?: string): IBaseExecution<any>;
	removeContainerSettings(externalId?: Array<string>): IBaseExecution<any>;
	retagReviewItems(itemIds?: Array<number>, newTag?: string, newTagIsRecord?: boolean, newTagBlockDelete?: boolean, newTagIsEventBased?: boolean): IBaseCollection<number>;
	retagReviewItemsWithMetas(itemIds?: Array<number>, newTagName?: string, newTagMetas?: Array<string>): IBaseCollection<number>;
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
