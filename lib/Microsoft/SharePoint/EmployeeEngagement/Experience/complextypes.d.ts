import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* DashboardContent
**********************************************/
export interface DashboardContent {
	DashboardCardDetails?: { results: Array<Microsoft.SharePoint.EmployeeEngagement.Experience.DashboardCardDetails> };
	DashboardFormFactor?: string;
	DashboardId?: string;
	LastModifiedDate?: any;
}

/*********************************************
* DashboardContentCollections
**********************************************/
export interface DashboardContentCollections {

}

/*********************************************
* DashboardCardDetails
**********************************************/
export interface DashboardCardDetails {
	ControlIndex?: number;
	InstanceId?: string;
	State?: string;
}

/*********************************************
* DashboardCardDetailsCollections
**********************************************/
export interface DashboardCardDetailsCollections {

}

/*********************************************
* AnnouncementAction
**********************************************/
export interface AnnouncementAction {
	Type?: string;
	value?: boolean;
}

/*********************************************
* AnnouncementActionCollections
**********************************************/
export interface AnnouncementActionCollections {

}

/*********************************************
* AnnouncementState
**********************************************/
export interface AnnouncementState {
	Action?: Microsoft.SharePoint.EmployeeEngagement.Experience.AnnouncementAction;
	ExpiresOn?: any;
	Id?: string;
}

/*********************************************
* AnnouncementStateCollections
**********************************************/
export interface AnnouncementStateCollections {

}
