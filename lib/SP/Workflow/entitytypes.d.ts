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
* WorkflowAssociationMethods
**********************************************/
export interface WorkflowAssociationMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* SPWorkflowTaskMethods
**********************************************/
export interface SPWorkflowTaskMethods {
	breakRoleInheritance<T=void>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance<T=void>(): T;
	deleteObject<T=void>(): T;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): T;
	getHashtags<T=Array<SP.Hashtag>>(): T;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): T;
	getWOPIFrameUrl<T=string>(action?: number): T;
	mediaServiceUpdate<T=void>(parameters?: SP.MediaServiceUpdateParameters): T;
	mediaServiceUpdateV2<T=void>(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): T;
	overridePolicyTip<T=number>(userAction?: number, justification?: string): T;
	parseAndSetFieldValue<T=void>(fieldName?: string, value?: string): T;
	recycle<T=any>(): T;
	setCommentsDisabled<T=void>(value?: boolean): T;
	setComplianceTag<T=void>(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): T;
	setComplianceTagWithExplicitMetasUpdate<T=void>(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): T;
	setComplianceTagWithHold<T=void>(complianceTag?: string): T;
	setComplianceTagWithMetaInfo<T=void>(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): T;
	setComplianceTagWithNoHold<T=void>(complianceTag?: string): T;
	setComplianceTagWithRecord<T=void>(complianceTag?: string): T;
	systemUpdate<T=void>(): T;
	update<T=void>(): T;
	updateEx<T=void>(parameters?: SP.ListItemUpdateParameters): T;
	updateHashtags<T=Array<SP.Hashtag>>(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): T;
	updateOverwriteVersion<T=void>(): T;
	validateUpdateListItem<T=Array<SP.ListItemFormUpdateValue>>(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
}
