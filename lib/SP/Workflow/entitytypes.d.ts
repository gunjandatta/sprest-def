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
* WorkflowAssociationMethods<T = any>
**********************************************/
export interface WorkflowAssociationMethods<T = any> {
	deleteObject(): T;
	update(): T;
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
export interface SPWorkflowTask extends SP.ListItem {

}

/*********************************************
* SPWorkflowTaskMethods<T = any>
**********************************************/
export interface SPWorkflowTaskMethods<T = any> {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance(): T;
	deleteObject(): T;
	getChanges(query?: SP.ChangeQuery): T;
	getHashtags(): T;
	getUserEffectivePermissions(userName?: string): T;
	getWOPIFrameUrl(action?: number): T;
	mediaServiceUpdate(parameters?: SP.MediaServiceUpdateParameters): T;
	mediaServiceUpdateV2(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): T;
	overridePolicyTip(userAction?: number, justification?: string): T;
	parseAndSetFieldValue(fieldName?: string, value?: string): T;
	recycle(): T;
	setCommentsDisabled(value?: boolean): T;
	setComplianceTag(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): T;
	setComplianceTagWithExplicitMetasUpdate(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): T;
	setComplianceTagWithHold(complianceTag?: string): T;
	setComplianceTagWithMetaInfo(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): T;
	setComplianceTagWithNoHold(complianceTag?: string): T;
	setComplianceTagWithRecord(complianceTag?: string): T;
	systemUpdate(): T;
	update(): T;
	updateEx(parameters?: SP.ListItemUpdateParameters): T;
	updateHashtags(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): T;
	updateOverwriteVersion(): T;
	validateUpdateListItem(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
}
