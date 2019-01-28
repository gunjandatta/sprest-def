

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
* SPPolicyStoreProxy
**********************************************/
export interface SPPolicyStoreProxy {
	PolicyStoreUrl?: string;
	ReviewCenterUrl?: string;
	SupportContentTypeRetention?: boolean;
}

/*********************************************
* SPPolicyStoreProxyMethods
**********************************************/
export interface SPPolicyStoreProxyMethods {
	addDynamicScopeBinding<T=void>(identity?: string, siteId?: string): T;
	bulkUpdateDynamicScopeBindings<T=void>(scopesToAdd?: Array<string>, scopesToRemove?: Array<string>, siteId?: string): T;
	deleteDynamicScopeBinding<T=void>(identity?: string, siteId?: string): T;
	extendReviewItemsRetention<T=Array<number>>(itemIds?: Array<number>, extensionDate?: any): T;
	getDynamicScopeBindingBySiteId<T=Array<string>>(siteId?: string): T;
	markReviewItemsForDeletion<T=Array<number>>(itemIds?: Array<number>): T;
	openBinaryStreamForOriginalItem<T=any>(itemId?: number): T;
	removeContainerRetentionPolicy<T=void>(siteId?: string): T;
	removeContainerSettings<T=void>(externalId?: Array<string>): T;
	retagReviewItems<T=Array<number>>(itemIds?: Array<number>, newTag?: string, newTagIsRecord?: boolean, newTagBlockDelete?: boolean, newTagIsEventBased?: boolean): T;
	retagReviewItemsWithMetas<T=Array<number>>(itemIds?: Array<number>, newTagName?: string, newTagMetas?: Array<string>): T;
	setContainerRetentionPolicy<T=void>(siteId?: string, defaultContainerLabel?: any): T;
	updateContainerSetting<T=void>(siteId?: string, externalId?: string, settingType?: number, setting?: string): T;
}

/*********************************************
* SPSitePreservationUtility
**********************************************/
export interface SPSitePreservationUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
