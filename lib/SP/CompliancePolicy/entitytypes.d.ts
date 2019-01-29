

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
* SPPolicyStoreProxyMethods<T = any>
**********************************************/
export interface SPPolicyStoreProxyMethods<T = any> {
	addDynamicScopeBinding(identity?: string, siteId?: string): T;
	bulkUpdateDynamicScopeBindings(scopesToAdd?: Array<string>, scopesToRemove?: Array<string>, siteId?: string): T;
	deleteDynamicScopeBinding(identity?: string, siteId?: string): T;
	extendReviewItemsRetention(itemIds?: Array<number>, extensionDate?: any): T;
	getDynamicScopeBindingBySiteId(siteId?: string): T;
	markReviewItemsForDeletion(itemIds?: Array<number>): T;
	openBinaryStreamForOriginalItem(itemId?: number): T;
	removeContainerRetentionPolicy(siteId?: string): T;
	removeContainerSettings(externalId?: Array<string>): T;
	retagReviewItems(itemIds?: Array<number>, newTag?: string, newTagIsRecord?: boolean, newTagBlockDelete?: boolean, newTagIsEventBased?: boolean): T;
	retagReviewItemsWithMetas(itemIds?: Array<number>, newTagName?: string, newTagMetas?: Array<string>): T;
	setContainerRetentionPolicy(siteId?: string, defaultContainerLabel?: any): T;
	updateContainerSetting(siteId?: string, externalId?: string, settingType?: number, setting?: string): T;
}

/*********************************************
* SPSitePreservationUtility
**********************************************/
export interface SPSitePreservationUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
