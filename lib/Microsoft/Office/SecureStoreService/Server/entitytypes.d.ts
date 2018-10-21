

/*********************************************
* TargetApplicationField
**********************************************/
export interface TargetApplicationField {
	CredentialType?: number;
	IsMasked?: boolean;
	Name?: string;
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
