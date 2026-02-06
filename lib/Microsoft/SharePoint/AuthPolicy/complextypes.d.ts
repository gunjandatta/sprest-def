import { Base } from "../../../";

/*********************************************
* BaselineSecurityModeThirdPartyAppHPASetting
**********************************************/
export interface BaselineSecurityModeThirdPartyAppHPASetting {
	AdditionalApps?: { results: Array<string> };
	Allowlist?: { results: Array<string> };
	Block3PHPA?: boolean;
	RemovedApps?: { results: Array<string> };
}

/*********************************************
* BaselineSecurityModeThirdPartyAppHPASettingCollections
**********************************************/
export interface BaselineSecurityModeThirdPartyAppHPASettingCollections {

}

/*********************************************
* SPJitDlpPolicyData
**********************************************/
export interface SPJitDlpPolicyData {
	ExecutionMode?: number;
	IsPolicyEnabled?: boolean;
	ODBSensitivityRefreshWindowInHours?: number;
}

/*********************************************
* SPJitDlpPolicyDataCollections
**********************************************/
export interface SPJitDlpPolicyDataCollections {

}
