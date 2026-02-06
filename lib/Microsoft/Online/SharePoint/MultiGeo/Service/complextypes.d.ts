import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* SerilizableMoveJobEntityData
**********************************************/
export interface SerilizableMoveJobEntityData {
	ApiVersion?: string;
	BatchId?: any;
	CancelTriggeredBy?: string;
	DestinationDataLocation?: string;
	Direction?: number;
	ErrorMessage?: string;
	FinishedDateInUtc?: any;
	Id?: any;
	IsReadOnlyAlertRaised?: boolean;
	JobPhase?: number;
	Notify?: string;
	Option?: number;
	PreferredMoveBeginDateInUtc?: any;
	PreferredMoveEndDateInUtc?: any;
	Reserve?: string;
	SiteId?: any;
	SourceDataLocation?: string;
	State?: number;
	SubType?: number;
	TriggeredBy?: string;
	Type?: number;
}

/*********************************************
* SerilizableMoveJobEntityDataCollections
**********************************************/
export interface SerilizableMoveJobEntityDataCollections {

}

/*********************************************
* CommonMoveJobEntityData
**********************************************/
export interface CommonMoveJobEntityData {
	EnableRestoreOnSiteToMove?: boolean;
	EnableSiteToMoveDatastore?: boolean;
	GroupName?: string;
	HasOdbInSourceDataLocation?: boolean;
	SourceCompanyId?: any;
	SourceInstanceId?: any;
	SourceMySiteHostUrl?: string;
	SourceSiteSubscriptionId?: any;
	SourceSiteUrl?: string;
	TargetCompanyId?: any;
	TargetFarmId?: string;
	TargetInstanceId?: any;
	TargetSiteSubscriptionId?: any;
	TargetSiteUrl?: string;
	TenantMergeSourceMySiteHostUrl?: string;
	TenantMergeTargetMySiteHostUrl?: string;
	UserPrincipalName?: string;
	ValidationResult?: number;
}

/*********************************************
* CommonMoveJobEntityDataCollections
**********************************************/
export interface CommonMoveJobEntityDataCollections {

}

/*********************************************
* CommonMoveJob
**********************************************/
export interface CommonMoveJob {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CommonMoveJobCollections
**********************************************/
export interface CommonMoveJobCollections {

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
* GeoAdministratorEntityDataCollections
**********************************************/
export interface GeoAdministratorEntityDataCollections {

}

/*********************************************
* GeoMoveTenantPropertyCompatibilityCheck
**********************************************/
export interface GeoMoveTenantPropertyCompatibilityCheck {
	GeoMoveTenantPropertyCheckResult?: number;
	PropertyName?: string;
}

/*********************************************
* GeoMoveTenantPropertyCompatibilityCheckCollections
**********************************************/
export interface GeoMoveTenantPropertyCompatibilityCheckCollections {

}
