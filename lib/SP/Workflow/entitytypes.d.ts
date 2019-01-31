import { IBaseExecution } from "../../";
import { SP } from "../../";

/*********************************************
* IWorkflowAssociation
**********************************************/
export interface IWorkflowAssociation extends WorkflowAssociationProps,WorkflowAssociationMethods,IBaseExecution<WorkflowAssociation> {

}

/*********************************************
* WorkflowAssociation
**********************************************/
export interface WorkflowAssociation extends WorkflowAssociationProps, WorkflowAssociationMethods {
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
* WorkflowAssociationProps
**********************************************/
export interface WorkflowAssociationProps {

}

/*********************************************
* WorkflowAssociationMethods
**********************************************/
export interface WorkflowAssociationMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* ISPWorkflowTask
**********************************************/
export interface ISPWorkflowTask extends SPWorkflowTaskProps,SPWorkflowTaskMethods,IBaseExecution<SPWorkflowTask> {

}

/*********************************************
* SPWorkflowTask
**********************************************/
export interface SPWorkflowTask extends SP.ListItem, SPWorkflowTaskProps, SPWorkflowTaskMethods {

}

/*********************************************
* SPWorkflowTaskProps
**********************************************/
export interface SPWorkflowTaskProps {

}

/*********************************************
* SPWorkflowTaskMethods
**********************************************/
export interface SPWorkflowTaskMethods {
	breakRoleInheritance<T=any>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<T>;
	resetRoleInheritance<T=any>(): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): IBaseExecution<T>;
	getHashtags<T=Array<SP.Hashtag>>(): IBaseExecution<T>;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): IBaseExecution<T>;
	getWOPIFrameUrl<T=string>(action?: number): IBaseExecution<T>;
	mediaServiceUpdate<T=any>(parameters?: SP.MediaServiceUpdateParameters): IBaseExecution<T>;
	mediaServiceUpdateV2<T=any>(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): IBaseExecution<T>;
	overridePolicyTip<T=number>(userAction?: number, justification?: string): IBaseExecution<T>;
	parseAndSetFieldValue<T=any>(fieldName?: string, value?: string): IBaseExecution<T>;
	recycle<T=any>(): IBaseExecution<T>;
	setCommentsDisabled<T=any>(value?: boolean): IBaseExecution<T>;
	setComplianceTag<T=any>(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): IBaseExecution<T>;
	setComplianceTagWithExplicitMetasUpdate<T=any>(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): IBaseExecution<T>;
	setComplianceTagWithHold<T=any>(complianceTag?: string): IBaseExecution<T>;
	setComplianceTagWithMetaInfo<T=any>(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): IBaseExecution<T>;
	setComplianceTagWithNoHold<T=any>(complianceTag?: string): IBaseExecution<T>;
	setComplianceTagWithRecord<T=any>(complianceTag?: string): IBaseExecution<T>;
	systemUpdate<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
	updateEx<T=any>(parameters?: SP.ListItemUpdateParameters): IBaseExecution<T>;
	updateHashtags<T=Array<SP.Hashtag>>(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): IBaseExecution<T>;
	updateOverwriteVersion<T=any>(): IBaseExecution<T>;
	validateUpdateListItem<T=Array<SP.ListItemFormUpdateValue>>(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseExecution<T>;
}
