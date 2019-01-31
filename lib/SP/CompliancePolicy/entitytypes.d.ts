import { IBaseExecution } from "../../";

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
* ISPPolicyStoreProxy
**********************************************/
export interface ISPPolicyStoreProxy extends SPPolicyStoreProxyProps,SPPolicyStoreProxyMethods,IBaseExecution<SPPolicyStoreProxy> {

}

/*********************************************
* SPPolicyStoreProxy
**********************************************/
export interface SPPolicyStoreProxy extends SPPolicyStoreProxyProps, SPPolicyStoreProxyMethods {
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
* SPPolicyStoreProxyMethods
**********************************************/
export interface SPPolicyStoreProxyMethods {
	addDynamicScopeBinding<T=any>(identity?: string, siteId?: string): IBaseExecution<T>;
	bulkUpdateDynamicScopeBindings<T=any>(scopesToAdd?: Array<string>, scopesToRemove?: Array<string>, siteId?: string): IBaseExecution<T>;
	deleteDynamicScopeBinding<T=any>(identity?: string, siteId?: string): IBaseExecution<T>;
	extendReviewItemsRetention<T=Array<number>>(itemIds?: Array<number>, extensionDate?: any): IBaseExecution<T>;
	getDynamicScopeBindingBySiteId<T=Array<string>>(siteId?: string): IBaseExecution<T>;
	markReviewItemsForDeletion<T=Array<number>>(itemIds?: Array<number>): IBaseExecution<T>;
	openBinaryStreamForOriginalItem<T=any>(itemId?: number): IBaseExecution<T>;
	removeContainerRetentionPolicy<T=any>(siteId?: string): IBaseExecution<T>;
	removeContainerSettings<T=any>(externalId?: Array<string>): IBaseExecution<T>;
	retagReviewItems<T=Array<number>>(itemIds?: Array<number>, newTag?: string, newTagIsRecord?: boolean, newTagBlockDelete?: boolean, newTagIsEventBased?: boolean): IBaseExecution<T>;
	retagReviewItemsWithMetas<T=Array<number>>(itemIds?: Array<number>, newTagName?: string, newTagMetas?: Array<string>): IBaseExecution<T>;
	setContainerRetentionPolicy<T=any>(siteId?: string, defaultContainerLabel?: any): IBaseExecution<T>;
	updateContainerSetting<T=any>(siteId?: string, externalId?: string, settingType?: number, setting?: string): IBaseExecution<T>;
}

/*********************************************
* SPSitePreservationUtility
**********************************************/
export interface SPSitePreservationUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
