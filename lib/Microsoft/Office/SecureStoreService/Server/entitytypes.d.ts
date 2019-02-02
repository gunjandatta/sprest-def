import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../";

/*********************************************
* TargetApplicationField
**********************************************/
export interface TargetApplicationField {
	CredentialType?: number;
	IsMasked?: boolean;
	Name?: string;
}

/*********************************************
* TargetApplicationFieldCollections
**********************************************/
export interface TargetApplicationFieldCollections {

}

/*********************************************
* TargetApplication
**********************************************/
export interface TargetApplication {
	ApplicationId?: string;
	ContactEmail?: string;
	FriendlyName?: string;
	TargetAppType?: number;
}

/*********************************************
* TargetApplicationCollections
**********************************************/
export interface TargetApplicationCollections {

}
