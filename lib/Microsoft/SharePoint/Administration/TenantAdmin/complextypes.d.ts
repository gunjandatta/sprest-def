import { Base } from "../../../../";

/*********************************************
* TenantAdminListItemColumnValue
**********************************************/
export interface TenantAdminListItemColumnValue {
	columnName?: string;
	columnValue?: string;
}

/*********************************************
* TenantAdminListItemColumnValueCollections
**********************************************/
export interface TenantAdminListItemColumnValueCollections {

}

/*********************************************
* TenantAdminRecentAction
**********************************************/
export interface TenantAdminRecentAction {
	adminActionId?: string;
	adminActionSource?: number;
	adminActionStatus?: number;
	adminActionType?: number;
	clientOperationId?: string;
	correlationId?: any;
	errorCode?: number;
	errorMessage?: string;
	key?: string;
	lastUpdatedTime?: any;
	metadata?: string;
	name?: string;
	requestedTime?: any;
	startTime?: any;
	url?: string;
	userEmail?: string;
	userId?: number;
	userName?: string;
}

/*********************************************
* TenantAdminRecentActionCollections
**********************************************/
export interface TenantAdminRecentActionCollections {

}
