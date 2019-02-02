import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";
import { SP } from "../../";

/*********************************************
* IWorkflowAssociation
**********************************************/
export interface IWorkflowAssociation extends WorkflowAssociationCollections,WorkflowAssociationMethods,IBaseQuery<IWorkflowAssociationQuery> {

}

/*********************************************
* IWorkflowAssociationCollection
**********************************************/
export interface IWorkflowAssociationCollection extends IBaseResults<WorkflowAssociation> {

}

/*********************************************
* IWorkflowAssociationQueryCollection
**********************************************/
export interface IWorkflowAssociationQueryCollection extends IBaseResults<WorkflowAssociationQuery> {

}

/*********************************************
* IWorkflowAssociationQuery
**********************************************/
export interface IWorkflowAssociationQuery extends WorkflowAssociationQuery, WorkflowAssociationMethods {

}

/*********************************************
* WorkflowAssociation
**********************************************/
export interface WorkflowAssociation extends WorkflowAssociationProps, WorkflowAssociationCollections, WorkflowAssociationMethods {

}

/*********************************************
* WorkflowAssociationProps
**********************************************/
export interface WorkflowAssociationProps {
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
* WorkflowAssociationPropMethods
**********************************************/
export interface WorkflowAssociationPropMethods {

}

/*********************************************
* WorkflowAssociationCollections
**********************************************/
export interface WorkflowAssociationCollections extends WorkflowAssociationPropMethods {

}

/*********************************************
* WorkflowAssociationCollectionMethods
**********************************************/
export interface WorkflowAssociationCollectionMethods {
	add(parameters?: SP.Workflow.WorkflowAssociationCreationInformation): IBaseExecution<SP.Workflow.WorkflowAssociation>;
	getById(associationId?: any): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationMethods;
	getByName(name?: string): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationMethods;
}

/*********************************************
* WorkflowAssociationQuery
**********************************************/
export interface WorkflowAssociationQuery extends WorkflowAssociationProps, WorkflowAssociationMethods {

}

/*********************************************
* WorkflowAssociationMethods
**********************************************/
export interface WorkflowAssociationMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
* WorkflowTemplateCollections
**********************************************/
export interface WorkflowTemplateCollections extends WorkflowTemplateCollectionMethods {

}

/*********************************************
* WorkflowTemplateCollectionMethods
**********************************************/
export interface WorkflowTemplateCollectionMethods {
	getById(templateId?: any): IBaseQuery<SP.Workflow.WorkflowTemplate>;
	getByName(name?: string): IBaseQuery<SP.Workflow.WorkflowTemplate>;
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
* SPWorkflowCollections
**********************************************/
export interface SPWorkflowCollections {

}

/*********************************************
* SPWorkflowManager
**********************************************/
export interface SPWorkflowManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWorkflowManagerCollections
**********************************************/
export interface SPWorkflowManagerCollections {

}

/*********************************************
* ISPWorkflowTask
**********************************************/
export interface ISPWorkflowTask extends SPWorkflowTaskCollections,SPWorkflowTaskMethods,IBaseQuery<ISPWorkflowTaskQuery> {

}

/*********************************************
* ISPWorkflowTaskCollection
**********************************************/
export interface ISPWorkflowTaskCollection extends IBaseResults<SPWorkflowTask> {

}

/*********************************************
* ISPWorkflowTaskQueryCollection
**********************************************/
export interface ISPWorkflowTaskQueryCollection extends IBaseResults<SPWorkflowTaskQuery> {

}

/*********************************************
* ISPWorkflowTaskQuery
**********************************************/
export interface ISPWorkflowTaskQuery extends SPWorkflowTaskQuery, SPWorkflowTaskMethods {

}

/*********************************************
* SPWorkflowTask
**********************************************/
export interface SPWorkflowTask extends SP.ListItem, SPWorkflowTaskProps, SPWorkflowTaskCollections, SPWorkflowTaskMethods {

}

/*********************************************
* SPWorkflowTaskProps
**********************************************/
export interface SPWorkflowTaskProps {

}

/*********************************************
* SPWorkflowTaskPropMethods
**********************************************/
export interface SPWorkflowTaskPropMethods {

}

/*********************************************
* SPWorkflowTaskCollections
**********************************************/
export interface SPWorkflowTaskCollections extends SPWorkflowTaskPropMethods {

}

/*********************************************
* SPWorkflowTaskQuery
**********************************************/
export interface SPWorkflowTaskQuery extends SPWorkflowTaskProps, SPWorkflowTaskMethods {

}

/*********************************************
* SPWorkflowTaskMethods
**********************************************/
export interface SPWorkflowTaskMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<any>;
	resetRoleInheritance(): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	getChanges(query?: SP.ChangeQuery): IBaseCollection<SP.Change>;
	getHashtags(): IBaseCollection<SP.Hashtag>;
	getUserEffectivePermissions(userName?: string): IBaseExecution<SP.BasePermissions>;
	getWOPIFrameUrl(action?: number): IBaseExecution<string>;
	mediaServiceUpdate(parameters?: SP.MediaServiceUpdateParameters): IBaseExecution<any>;
	mediaServiceUpdateV2(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): IBaseExecution<any>;
	overridePolicyTip(userAction?: number, justification?: string): IBaseExecution<number>;
	parseAndSetFieldValue(fieldName?: string, value?: string): IBaseExecution<any>;
	recycle(): IBaseExecution<any>;
	setCommentsDisabled(value?: boolean): IBaseExecution<any>;
	setComplianceTag(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): IBaseExecution<any>;
	setComplianceTagWithExplicitMetasUpdate(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): IBaseExecution<any>;
	setComplianceTagWithHold(complianceTag?: string): IBaseExecution<any>;
	setComplianceTagWithMetaInfo(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): IBaseExecution<any>;
	setComplianceTagWithNoHold(complianceTag?: string): IBaseExecution<any>;
	setComplianceTagWithRecord(complianceTag?: string): IBaseExecution<any>;
	systemUpdate(): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
	updateEx(parameters?: SP.ListItemUpdateParameters): IBaseExecution<any>;
	updateHashtags(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): IBaseCollection<SP.Hashtag>;
	updateOverwriteVersion(): IBaseExecution<any>;
	validateUpdateListItem(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseCollection<SP.ListItemFormUpdateValue>;
	update(properties?: any): IBaseExecution<any>;
}
