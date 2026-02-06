import { Base } from "../../../../";

/*********************************************
* CAnonymousLinkUseLimit
**********************************************/
export interface CAnonymousLinkUseLimit {
	dailyLimitPerSite?: number;
	expiration?: any;
}

/*********************************************
* CAnonymousLinkUseLimitCollections
**********************************************/
export interface CAnonymousLinkUseLimitCollections {

}

/*********************************************
* CExternalSharingEnforcement
**********************************************/
export interface CExternalSharingEnforcement {
	enforceBlock?: boolean;
	expiration?: any;
}

/*********************************************
* CExternalSharingEnforcementCollections
**********************************************/
export interface CExternalSharingEnforcementCollections {

}

/*********************************************
* CExternalSharingThrottling
**********************************************/
export interface CExternalSharingThrottling {
	expiration?: any;
	limitLevel?: number;
}

/*********************************************
* CExternalSharingThrottlingCollections
**********************************************/
export interface CExternalSharingThrottlingCollections {

}

/*********************************************
* SPSharingWorkItemAuthCryptoProvider
**********************************************/
export interface SPSharingWorkItemAuthCryptoProvider {

}

/*********************************************
* SPSharingWorkItemAuthCryptoProviderCollections
**********************************************/
export interface SPSharingWorkItemAuthCryptoProviderCollections {

}
