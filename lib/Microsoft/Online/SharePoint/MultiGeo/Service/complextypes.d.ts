import { IBaseExecution } from "../../../../../";

/*********************************************
* GeoCredentials
**********************************************/
export interface GeoCredentials {
	AltDatabaseCredentials?: Array<string>;
	FarmCredentials?: Array<string>;
	FarmCredentialsExpirationTime?: any;
}

/*********************************************
* GeoAdministratorEntityData
**********************************************/
export interface GeoAdministratorEntityData {
	DisplayName?: string;
	LoginName?: string;
	MemberType?: number;
	ObjectId?: any;
}

/*********************************************
* GeoMoveTenantPropertyCompatibilityCheck
**********************************************/
export interface GeoMoveTenantPropertyCompatibilityCheck {
	GeoMoveTenantPropertyCheckResult?: number;
	PropertyName?: string;
}
