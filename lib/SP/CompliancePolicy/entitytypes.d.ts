

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
