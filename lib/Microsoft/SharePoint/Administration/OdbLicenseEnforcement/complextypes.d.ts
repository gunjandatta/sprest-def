import { Base } from "../../../../";

/*********************************************
* UnlicensedOdbLicenseEnforcementWarningContext
**********************************************/
export interface UnlicensedOdbLicenseEnforcementWarningContext {
	WarningStatus?: number;
	WarningStatusEffectiveUntil?: any;
}

/*********************************************
* UnlicensedOdbLicenseEnforcementWarningContextCollections
**********************************************/
export interface UnlicensedOdbLicenseEnforcementWarningContextCollections {

}

/*********************************************
* UnlicensedOdbTenantMetrics
**********************************************/
export interface UnlicensedOdbTenantMetrics {
	complianceHoldCount?: number;
	complianceHoldSizeBytes?: number;
	count?: number;
	duplicateSiteCount?: number;
	duplicateSiteSizeBytes?: number;
	invalidLicenseCount?: number;
	invalidLicenseSizeBytes?: number;
	lastRefreshOn?: any;
	restoredByTenantAdminCount?: number;
	restoredByTenantAdminSizeBytes?: number;
	retentionPeriodCount?: number;
	retentionPeriodSizeBytes?: number;
	sizeBytes?: number;
}

/*********************************************
* UnlicensedOdbTenantMetricsCollections
**********************************************/
export interface UnlicensedOdbTenantMetricsCollections {

}
