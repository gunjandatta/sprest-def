import { SP } from "../../";

/*********************************************
* WorkflowAssociation
**********************************************/
export interface WorkflowAssociation {
	AllowManual?: boolean;
	AssociationData?: string;
	AutoStartChange?: boolean;
	AutoStartCreate?: boolean;
	BaseId?: any;
	Created?: any;
	Description?: string;
	Enabled?: boolean;
	HistoryListTitle?: string;
	Id?: any;
	InstantiationUrl?: string;
	InternalName?: string;
	IsDeclarative?: boolean;
	ListId?: any;
	Modified?: any;
	Name?: string;
	TaskListTitle?: string;
	WebId?: any;
}

/*********************************************
* WorkflowTemplate
**********************************************/
export interface WorkflowTemplate {
	AllowManual?: boolean;
	AssociationUrl?: string;
	AutoStartChange?: boolean;
	AutoStartCreate?: boolean;
	Description?: string;
	Id?: any;
	IsDeclarative?: boolean;
	Name?: string;
	PermissionsManual?: SP.BasePermissions;
}

/*********************************************
* SPWorkflow
**********************************************/
export interface SPWorkflow {
	AssociationId?: any;
	InstanceId?: any;
	IsCompleted?: boolean;
	StatusText?: string;
}

/*********************************************
* SPWorkflowManager
**********************************************/
export interface SPWorkflowManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWorkflowTask
**********************************************/
export interface SPWorkflowTask {

}
