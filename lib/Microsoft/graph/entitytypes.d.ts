import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResults } from "../../base";
import * as ComplexTypes from "./complexTypes.d";
import * as EnumTypes from "./enumTypes.d";
/*********************************************
* _case
**********************************************/
export interface _case extends _caseProps, _caseMethods { }
export interface _caseProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.caseStatus;
}
export interface _caseMethods extends entityMethods {

}
export interface _caseOData extends entityOData {

}
/*********************************************
* aadUserConversationMember
**********************************************/
export interface aadUserConversationMember extends aadUserConversationMemberProps, aadUserConversationMemberMethods { }
export interface aadUserConversationMemberProps extends  conversationMemberProps {
	email: string;
	tenantId: string;
	userId: string;
}
export interface aadUserConversationMemberMethods extends conversationMemberMethods {
	user(): IBaseQuery<user> & userMethods;
}
export interface aadUserConversationMemberOData extends conversationMemberOData {
	user: user;
}
/*********************************************
* accessPackage
**********************************************/
export interface accessPackage extends accessPackageProps, accessPackageMethods { }
export interface accessPackageProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	isHidden: boolean;
	modifiedDateTime: any;
}
export interface accessPackageMethods extends entityMethods {
	accessPackagesIncompatibleWith(): accessPackageCollection;
	accessPackagesIncompatibleWith(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	assignmentPolicies(): accessPackageAssignmentPolicyCollection;
	assignmentPolicies(id: string | number): IBaseQuery<accessPackageAssignmentPolicy> & accessPackageAssignmentPolicyMethods;
	catalog(): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	incompatibleAccessPackages(): accessPackageCollection;
	incompatibleAccessPackages(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	incompatibleGroups(): groupCollection;
	incompatibleGroups(id: string | number): IBaseQuery<group> & groupMethods;
	resourceRoleScopes(): accessPackageResourceRoleScopeCollection;
	resourceRoleScopes(id: string | number): IBaseQuery<accessPackageResourceRoleScope> & accessPackageResourceRoleScopeMethods;
	getApplicablePolicyRequirements(): IBaseExecution<ComplexTypes.accessPackageAssignmentRequestRequirements[]>;
}
export interface accessPackageOData extends entityOData {
	accessPackagesIncompatibleWith: IBaseResults<accessPackage>;
	assignmentPolicies: IBaseResults<accessPackageAssignmentPolicy>;
	catalog: accessPackageCatalog;
	incompatibleAccessPackages: IBaseResults<accessPackage>;
	incompatibleGroups: IBaseResults<group>;
	resourceRoleScopes: IBaseResults<accessPackageResourceRoleScope>;
	getApplicablePolicyRequirements(): IBaseExecution<ComplexTypes.accessPackageAssignmentRequestRequirements[]>;
}
export interface accessPackageCollection extends IBaseCollection<accessPackage, accessPackageOData & accessPackageProps> {
    add(values?: any): IBaseExecution<accessPackage>;
}
/*********************************************
* accessPackageAssignment
**********************************************/
export interface accessPackageAssignment extends accessPackageAssignmentProps, accessPackageAssignmentMethods { }
export interface accessPackageAssignmentProps extends  entityProps {
	customExtensionCalloutInstances: ComplexTypes.customExtensionCalloutInstance[];
	expiredDateTime: any;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageAssignmentState;
	status: string;
}
export interface accessPackageAssignmentMethods extends entityMethods {
	accessPackage(): IBaseQuery<accessPackage> & accessPackageMethods;
	assignmentPolicy(): IBaseQuery<accessPackageAssignmentPolicy> & accessPackageAssignmentPolicyMethods;
	target(): IBaseQuery<accessPackageSubject> & accessPackageSubjectMethods;
	reprocess(): IBaseExecution<void>;
}
export interface accessPackageAssignmentOData extends entityOData {
	accessPackage: accessPackage;
	assignmentPolicy: accessPackageAssignmentPolicy;
	target: accessPackageSubject;
	reprocess(): IBaseExecution<void>;
}
export interface accessPackageAssignmentCollection extends IBaseCollection<accessPackageAssignment, accessPackageAssignmentOData & accessPackageAssignmentProps> {
    add(values?: any): IBaseExecution<accessPackageAssignment>;
}
/*********************************************
* accessPackageAssignmentPolicy
**********************************************/
export interface accessPackageAssignmentPolicy extends accessPackageAssignmentPolicyProps, accessPackageAssignmentPolicyMethods { }
export interface accessPackageAssignmentPolicyProps extends  entityProps {
	allowedTargetScope: EnumTypes.allowedTargetScope;
	automaticRequestSettings: ComplexTypes.accessPackageAutomaticRequestSettings;
	createdDateTime: any;
	description: string;
	displayName: string;
	expiration: ComplexTypes.expirationPattern;
	modifiedDateTime: any;
	requestApprovalSettings: ComplexTypes.accessPackageAssignmentApprovalSettings;
	requestorSettings: ComplexTypes.accessPackageAssignmentRequestorSettings;
	reviewSettings: ComplexTypes.accessPackageAssignmentReviewSettings;
	specificAllowedTargets: ComplexTypes.subjectSet[];
}
export interface accessPackageAssignmentPolicyMethods extends entityMethods {
	accessPackage(): IBaseQuery<accessPackage> & accessPackageMethods;
	catalog(): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	customExtensionStageSettings(): customExtensionStageSettingCollection;
	customExtensionStageSettings(id: string | number): IBaseQuery<customExtensionStageSetting> & customExtensionStageSettingMethods;
	questions(): accessPackageQuestionCollection;
	questions(id: string | number): IBaseQuery<accessPackageQuestion> & accessPackageQuestionMethods;
}
export interface accessPackageAssignmentPolicyOData extends entityOData {
	accessPackage: accessPackage;
	catalog: accessPackageCatalog;
	customExtensionStageSettings: IBaseResults<customExtensionStageSetting>;
	questions: IBaseResults<accessPackageQuestion>;
}
export interface accessPackageAssignmentPolicyCollection extends IBaseCollection<accessPackageAssignmentPolicy, accessPackageAssignmentPolicyOData & accessPackageAssignmentPolicyProps> {
    add(values?: any): IBaseExecution<accessPackageAssignmentPolicy>;
}
/*********************************************
* accessPackageAssignmentRequest
**********************************************/
export interface accessPackageAssignmentRequest extends accessPackageAssignmentRequestProps, accessPackageAssignmentRequestMethods { }
export interface accessPackageAssignmentRequestProps extends  entityProps {
	answers: ComplexTypes.accessPackageAnswer[];
	completedDateTime: any;
	createdDateTime: any;
	customExtensionCalloutInstances: ComplexTypes.customExtensionCalloutInstance[];
	requestType: EnumTypes.accessPackageRequestType;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageRequestState;
	status: string;
}
export interface accessPackageAssignmentRequestMethods extends entityMethods {
	accessPackage(): IBaseQuery<accessPackage> & accessPackageMethods;
	assignment(): IBaseQuery<accessPackageAssignment> & accessPackageAssignmentMethods;
	requestor(): IBaseQuery<accessPackageSubject> & accessPackageSubjectMethods;
	cancel(): IBaseExecution<void>;
	reprocess(): IBaseExecution<void>;
	resume(source, type, data): IBaseExecution<void>;
}
export interface accessPackageAssignmentRequestOData extends entityOData {
	accessPackage: accessPackage;
	assignment: accessPackageAssignment;
	requestor: accessPackageSubject;
	cancel(): IBaseExecution<void>;
	reprocess(): IBaseExecution<void>;
	resume(source, type, data): IBaseExecution<void>;
}
export interface accessPackageAssignmentRequestCollection extends IBaseCollection<accessPackageAssignmentRequest, accessPackageAssignmentRequestOData & accessPackageAssignmentRequestProps> {
    add(values?: any): IBaseExecution<accessPackageAssignmentRequest>;
}
/*********************************************
* accessPackageAssignmentRequestWorkflowExtension
**********************************************/
export interface accessPackageAssignmentRequestWorkflowExtension extends accessPackageAssignmentRequestWorkflowExtensionProps, accessPackageAssignmentRequestWorkflowExtensionMethods { }
export interface accessPackageAssignmentRequestWorkflowExtensionProps extends  customCalloutExtensionProps {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdBy: string;
	createdDateTime: any;
	lastModifiedBy: string;
	lastModifiedDateTime: any;
}
export interface accessPackageAssignmentRequestWorkflowExtensionMethods extends customCalloutExtensionMethods {

}
export interface accessPackageAssignmentRequestWorkflowExtensionOData extends customCalloutExtensionOData {

}
/*********************************************
* accessPackageAssignmentWorkflowExtension
**********************************************/
export interface accessPackageAssignmentWorkflowExtension extends accessPackageAssignmentWorkflowExtensionProps, accessPackageAssignmentWorkflowExtensionMethods { }
export interface accessPackageAssignmentWorkflowExtensionProps extends  customCalloutExtensionProps {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdBy: string;
	createdDateTime: any;
	lastModifiedBy: string;
	lastModifiedDateTime: any;
}
export interface accessPackageAssignmentWorkflowExtensionMethods extends customCalloutExtensionMethods {

}
export interface accessPackageAssignmentWorkflowExtensionOData extends customCalloutExtensionOData {

}
/*********************************************
* accessPackageCatalog
**********************************************/
export interface accessPackageCatalog extends accessPackageCatalogProps, accessPackageCatalogMethods { }
export interface accessPackageCatalogProps extends  entityProps {
	catalogType: EnumTypes.accessPackageCatalogType;
	createdDateTime: any;
	description: string;
	displayName: string;
	isExternallyVisible: boolean;
	modifiedDateTime: any;
	state: EnumTypes.accessPackageCatalogState;
}
export interface accessPackageCatalogMethods extends entityMethods {
	accessPackages(): accessPackageCollection;
	accessPackages(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	customWorkflowExtensions(): customCalloutExtensionCollection;
	customWorkflowExtensions(id: string | number): IBaseQuery<customCalloutExtension> & customCalloutExtensionMethods;
	resourceRoles(): accessPackageResourceRoleCollection;
	resourceRoles(id: string | number): IBaseQuery<accessPackageResourceRole> & accessPackageResourceRoleMethods;
	resources(): accessPackageResourceCollection;
	resources(id: string | number): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
	resourceScopes(): accessPackageResourceScopeCollection;
	resourceScopes(id: string | number): IBaseQuery<accessPackageResourceScope> & accessPackageResourceScopeMethods;
}
export interface accessPackageCatalogOData extends entityOData {
	accessPackages: IBaseResults<accessPackage>;
	customWorkflowExtensions: IBaseResults<customCalloutExtension>;
	resourceRoles: IBaseResults<accessPackageResourceRole>;
	resources: IBaseResults<accessPackageResource>;
	resourceScopes: IBaseResults<accessPackageResourceScope>;
}
export interface accessPackageCatalogCollection extends IBaseCollection<accessPackageCatalog, accessPackageCatalogOData & accessPackageCatalogProps> {
    add(values?: any): IBaseExecution<accessPackageCatalog>;
}
/*********************************************
* accessPackageMultipleChoiceQuestion
**********************************************/
export interface accessPackageMultipleChoiceQuestion extends accessPackageMultipleChoiceQuestionProps, accessPackageMultipleChoiceQuestionMethods { }
export interface accessPackageMultipleChoiceQuestionProps extends  accessPackageQuestionProps {
	choices: ComplexTypes.accessPackageAnswerChoice[];
	isMultipleSelectionAllowed: boolean;
}
export interface accessPackageMultipleChoiceQuestionMethods extends accessPackageQuestionMethods {

}
export interface accessPackageMultipleChoiceQuestionOData extends accessPackageQuestionOData {

}
/*********************************************
* accessPackageQuestion
**********************************************/
export interface accessPackageQuestion extends accessPackageQuestionProps, accessPackageQuestionMethods { }
export interface accessPackageQuestionProps extends  entityProps {
	isAnswerEditable: boolean;
	isRequired: boolean;
	localizations: ComplexTypes.accessPackageLocalizedText[];
	sequence: number;
	text: string;
}
export interface accessPackageQuestionMethods extends entityMethods {

}
export interface accessPackageQuestionOData extends entityOData {

}
export interface accessPackageQuestionCollection extends IBaseCollection<accessPackageQuestion, accessPackageQuestionOData & accessPackageQuestionProps> {
    add(values?: any): IBaseExecution<accessPackageQuestion>;
}
/*********************************************
* accessPackageResource
**********************************************/
export interface accessPackageResource extends accessPackageResourceProps, accessPackageResourceMethods { }
export interface accessPackageResourceProps extends  entityProps {
	attributes: ComplexTypes.accessPackageResourceAttribute[];
	createdDateTime: any;
	description: string;
	displayName: string;
	modifiedDateTime: any;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceMethods extends entityMethods {
	environment(): IBaseQuery<accessPackageResourceEnvironment> & accessPackageResourceEnvironmentMethods;
	roles(): accessPackageResourceRoleCollection;
	roles(id: string | number): IBaseQuery<accessPackageResourceRole> & accessPackageResourceRoleMethods;
	scopes(): accessPackageResourceScopeCollection;
	scopes(id: string | number): IBaseQuery<accessPackageResourceScope> & accessPackageResourceScopeMethods;
}
export interface accessPackageResourceOData extends entityOData {
	environment: accessPackageResourceEnvironment;
	roles: IBaseResults<accessPackageResourceRole>;
	scopes: IBaseResults<accessPackageResourceScope>;
}
export interface accessPackageResourceCollection extends IBaseCollection<accessPackageResource, accessPackageResourceOData & accessPackageResourceProps> {
    add(values?: any): IBaseExecution<accessPackageResource>;
}
/*********************************************
* accessPackageResourceEnvironment
**********************************************/
export interface accessPackageResourceEnvironment extends accessPackageResourceEnvironmentProps, accessPackageResourceEnvironmentMethods { }
export interface accessPackageResourceEnvironmentProps extends  entityProps {
	connectionInfo: ComplexTypes.connectionInfo;
	createdDateTime: any;
	description: string;
	displayName: string;
	isDefaultEnvironment: boolean;
	modifiedDateTime: any;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceEnvironmentMethods extends entityMethods {
	resources(): accessPackageResourceCollection;
	resources(id: string | number): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
}
export interface accessPackageResourceEnvironmentOData extends entityOData {
	resources: IBaseResults<accessPackageResource>;
}
export interface accessPackageResourceEnvironmentCollection extends IBaseCollection<accessPackageResourceEnvironment, accessPackageResourceEnvironmentOData & accessPackageResourceEnvironmentProps> {
    add(values?: any): IBaseExecution<accessPackageResourceEnvironment>;
}
/*********************************************
* accessPackageResourceRequest
**********************************************/
export interface accessPackageResourceRequest extends accessPackageResourceRequestProps, accessPackageResourceRequestMethods { }
export interface accessPackageResourceRequestProps extends  entityProps {
	createdDateTime: any;
	requestType: EnumTypes.accessPackageRequestType;
	state: EnumTypes.accessPackageRequestState;
}
export interface accessPackageResourceRequestMethods extends entityMethods {
	catalog(): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	resource(): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
}
export interface accessPackageResourceRequestOData extends entityOData {
	catalog: accessPackageCatalog;
	resource: accessPackageResource;
}
export interface accessPackageResourceRequestCollection extends IBaseCollection<accessPackageResourceRequest, accessPackageResourceRequestOData & accessPackageResourceRequestProps> {
    add(values?: any): IBaseExecution<accessPackageResourceRequest>;
}
/*********************************************
* accessPackageResourceRole
**********************************************/
export interface accessPackageResourceRole extends accessPackageResourceRoleProps, accessPackageResourceRoleMethods { }
export interface accessPackageResourceRoleProps extends  entityProps {
	description: string;
	displayName: string;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceRoleMethods extends entityMethods {
	resource(): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
}
export interface accessPackageResourceRoleOData extends entityOData {
	resource: accessPackageResource;
}
export interface accessPackageResourceRoleCollection extends IBaseCollection<accessPackageResourceRole, accessPackageResourceRoleOData & accessPackageResourceRoleProps> {
    add(values?: any): IBaseExecution<accessPackageResourceRole>;
}
/*********************************************
* accessPackageResourceRoleScope
**********************************************/
export interface accessPackageResourceRoleScope extends accessPackageResourceRoleScopeProps, accessPackageResourceRoleScopeMethods { }
export interface accessPackageResourceRoleScopeProps extends  entityProps {
	createdDateTime: any;
}
export interface accessPackageResourceRoleScopeMethods extends entityMethods {
	role(): IBaseQuery<accessPackageResourceRole> & accessPackageResourceRoleMethods;
	scope(): IBaseQuery<accessPackageResourceScope> & accessPackageResourceScopeMethods;
}
export interface accessPackageResourceRoleScopeOData extends entityOData {
	role: accessPackageResourceRole;
	scope: accessPackageResourceScope;
}
export interface accessPackageResourceRoleScopeCollection extends IBaseCollection<accessPackageResourceRoleScope, accessPackageResourceRoleScopeOData & accessPackageResourceRoleScopeProps> {
    add(values?: any): IBaseExecution<accessPackageResourceRoleScope>;
}
/*********************************************
* accessPackageResourceScope
**********************************************/
export interface accessPackageResourceScope extends accessPackageResourceScopeProps, accessPackageResourceScopeMethods { }
export interface accessPackageResourceScopeProps extends  entityProps {
	description: string;
	displayName: string;
	isRootScope: boolean;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceScopeMethods extends entityMethods {
	resource(): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
}
export interface accessPackageResourceScopeOData extends entityOData {
	resource: accessPackageResource;
}
export interface accessPackageResourceScopeCollection extends IBaseCollection<accessPackageResourceScope, accessPackageResourceScopeOData & accessPackageResourceScopeProps> {
    add(values?: any): IBaseExecution<accessPackageResourceScope>;
}
/*********************************************
* accessPackageSubject
**********************************************/
export interface accessPackageSubject extends accessPackageSubjectProps, accessPackageSubjectMethods { }
export interface accessPackageSubjectProps extends  entityProps {
	displayName: string;
	email: string;
	objectId: string;
	onPremisesSecurityIdentifier: string;
	principalName: string;
	subjectType: EnumTypes.accessPackageSubjectType;
}
export interface accessPackageSubjectMethods extends entityMethods {
	connectedOrganization(): IBaseQuery<connectedOrganization> & connectedOrganizationMethods;
}
export interface accessPackageSubjectOData extends entityOData {
	connectedOrganization: connectedOrganization;
}
/*********************************************
* accessPackageTextInputQuestion
**********************************************/
export interface accessPackageTextInputQuestion extends accessPackageTextInputQuestionProps, accessPackageTextInputQuestionMethods { }
export interface accessPackageTextInputQuestionProps extends  accessPackageQuestionProps {
	isSingleLineQuestion: boolean;
	regexPattern: string;
}
export interface accessPackageTextInputQuestionMethods extends accessPackageQuestionMethods {

}
export interface accessPackageTextInputQuestionOData extends accessPackageQuestionOData {

}
/*********************************************
* accessReviewHistoryDefinition
**********************************************/
export interface accessReviewHistoryDefinition extends accessReviewHistoryDefinitionProps, accessReviewHistoryDefinitionMethods { }
export interface accessReviewHistoryDefinitionProps extends  entityProps {
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	decisions: EnumTypes.accessReviewHistoryDecisionFilter[];
	displayName: string;
	reviewHistoryPeriodEndDateTime: any;
	reviewHistoryPeriodStartDateTime: any;
	scheduleSettings: ComplexTypes.accessReviewHistoryScheduleSettings;
	scopes: ComplexTypes.accessReviewScope[];
	status: EnumTypes.accessReviewHistoryStatus;
}
export interface accessReviewHistoryDefinitionMethods extends entityMethods {
	instances(): accessReviewHistoryInstanceCollection;
	instances(id: string | number): IBaseQuery<accessReviewHistoryInstance> & accessReviewHistoryInstanceMethods;
}
export interface accessReviewHistoryDefinitionOData extends entityOData {
	instances: IBaseResults<accessReviewHistoryInstance>;
}
export interface accessReviewHistoryDefinitionCollection extends IBaseCollection<accessReviewHistoryDefinition, accessReviewHistoryDefinitionOData & accessReviewHistoryDefinitionProps> {
    add(values?: any): IBaseExecution<accessReviewHistoryDefinition>;
}
/*********************************************
* accessReviewHistoryInstance
**********************************************/
export interface accessReviewHistoryInstance extends accessReviewHistoryInstanceProps, accessReviewHistoryInstanceMethods { }
export interface accessReviewHistoryInstanceProps extends  entityProps {
	downloadUri: string;
	expirationDateTime: any;
	fulfilledDateTime: any;
	reviewHistoryPeriodEndDateTime: any;
	reviewHistoryPeriodStartDateTime: any;
	runDateTime: any;
	status: EnumTypes.accessReviewHistoryStatus;
}
export interface accessReviewHistoryInstanceMethods extends entityMethods {
	generateDownloadUri(): IBaseExecution<accessReviewHistoryInstance>;
}
export interface accessReviewHistoryInstanceOData extends entityOData {
	generateDownloadUri(): IBaseExecution<accessReviewHistoryInstance>;
}
export interface accessReviewHistoryInstanceCollection extends IBaseCollection<accessReviewHistoryInstance, accessReviewHistoryInstanceOData & accessReviewHistoryInstanceProps> {
    add(values?: any): IBaseExecution<accessReviewHistoryInstance>;
}
/*********************************************
* accessReviewInstance
**********************************************/
export interface accessReviewInstance extends accessReviewInstanceProps, accessReviewInstanceMethods { }
export interface accessReviewInstanceProps extends  entityProps {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	scope: ComplexTypes.accessReviewScope;
	startDateTime: any;
	status: string;
}
export interface accessReviewInstanceMethods extends entityMethods {
	contactedReviewers(): accessReviewReviewerCollection;
	contactedReviewers(id: string | number): IBaseQuery<accessReviewReviewer> & accessReviewReviewerMethods;
	decisions(): accessReviewInstanceDecisionItemCollection;
	decisions(id: string | number): IBaseQuery<accessReviewInstanceDecisionItem> & accessReviewInstanceDecisionItemMethods;
	stages(): accessReviewStageCollection;
	stages(id: string | number): IBaseQuery<accessReviewStage> & accessReviewStageMethods;
	acceptRecommendations(): IBaseExecution<void>;
	applyDecisions(): IBaseExecution<void>;
	batchRecordDecisions(decision, justification, principalId, resourceId): IBaseExecution<void>;
	resetDecisions(): IBaseExecution<void>;
	sendReminder(): IBaseExecution<void>;
	stop(): IBaseExecution<void>;
}
export interface accessReviewInstanceOData extends entityOData {
	contactedReviewers: IBaseResults<accessReviewReviewer>;
	decisions: IBaseResults<accessReviewInstanceDecisionItem>;
	stages: IBaseResults<accessReviewStage>;
	acceptRecommendations(): IBaseExecution<void>;
	applyDecisions(): IBaseExecution<void>;
	batchRecordDecisions(decision, justification, principalId, resourceId): IBaseExecution<void>;
	resetDecisions(): IBaseExecution<void>;
	sendReminder(): IBaseExecution<void>;
	stop(): IBaseExecution<void>;
}
export interface accessReviewInstanceCollection extends IBaseCollection<accessReviewInstance, accessReviewInstanceOData & accessReviewInstanceProps> {
    add(values?: any): IBaseExecution<accessReviewInstance>;
}
/*********************************************
* accessReviewInstanceDecisionItem
**********************************************/
export interface accessReviewInstanceDecisionItem extends accessReviewInstanceDecisionItemProps, accessReviewInstanceDecisionItemMethods { }
export interface accessReviewInstanceDecisionItemProps extends  entityProps {
	accessReviewId: string;
	appliedBy: ComplexTypes.userIdentity;
	appliedDateTime: any;
	applyResult: string;
	decision: string;
	justification: string;
	principal: ComplexTypes.identity;
	principalLink: string;
	recommendation: string;
	resource: ComplexTypes.accessReviewInstanceDecisionItemResource;
	resourceLink: string;
	reviewedBy: ComplexTypes.userIdentity;
	reviewedDateTime: any;
}
export interface accessReviewInstanceDecisionItemMethods extends entityMethods {
	insights(): governanceInsightCollection;
	insights(id: string | number): IBaseQuery<governanceInsight> & governanceInsightMethods;
}
export interface accessReviewInstanceDecisionItemOData extends entityOData {
	insights: IBaseResults<governanceInsight>;
}
export interface accessReviewInstanceDecisionItemCollection extends IBaseCollection<accessReviewInstanceDecisionItem, accessReviewInstanceDecisionItemOData & accessReviewInstanceDecisionItemProps> {
    add(values?: any): IBaseExecution<accessReviewInstanceDecisionItem>;
}
/*********************************************
* accessReviewReviewer
**********************************************/
export interface accessReviewReviewer extends accessReviewReviewerProps, accessReviewReviewerMethods { }
export interface accessReviewReviewerProps extends  entityProps {
	createdDateTime: any;
	displayName: string;
	userPrincipalName: string;
}
export interface accessReviewReviewerMethods extends entityMethods {

}
export interface accessReviewReviewerOData extends entityOData {

}
export interface accessReviewReviewerCollection extends IBaseCollection<accessReviewReviewer, accessReviewReviewerOData & accessReviewReviewerProps> {
    add(values?: any): IBaseExecution<accessReviewReviewer>;
}
/*********************************************
* accessReviewScheduleDefinition
**********************************************/
export interface accessReviewScheduleDefinition extends accessReviewScheduleDefinitionProps, accessReviewScheduleDefinitionMethods { }
export interface accessReviewScheduleDefinitionProps extends  entityProps {
	additionalNotificationRecipients: ComplexTypes.accessReviewNotificationRecipientItem[];
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	descriptionForAdmins: string;
	descriptionForReviewers: string;
	displayName: string;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	instanceEnumerationScope: ComplexTypes.accessReviewScope;
	lastModifiedDateTime: any;
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	scope: ComplexTypes.accessReviewScope;
	settings: ComplexTypes.accessReviewScheduleSettings;
	stageSettings: ComplexTypes.accessReviewStageSettings[];
	status: string;
}
export interface accessReviewScheduleDefinitionMethods extends entityMethods {
	instances(): accessReviewInstanceCollection;
	instances(id: string | number): IBaseQuery<accessReviewInstance> & accessReviewInstanceMethods;
	stop(): IBaseExecution<void>;
}
export interface accessReviewScheduleDefinitionOData extends entityOData {
	instances: IBaseResults<accessReviewInstance>;
	stop(): IBaseExecution<void>;
}
export interface accessReviewScheduleDefinitionCollection extends IBaseCollection<accessReviewScheduleDefinition, accessReviewScheduleDefinitionOData & accessReviewScheduleDefinitionProps> {
    add(values?: any): IBaseExecution<accessReviewScheduleDefinition>;
}
/*********************************************
* accessReviewSet
**********************************************/
export interface accessReviewSet extends accessReviewSetProps, accessReviewSetMethods { }
export interface accessReviewSetProps extends  entityProps {

}
export interface accessReviewSetMethods extends entityMethods {
	definitions(): accessReviewScheduleDefinitionCollection;
	definitions(id: string | number): IBaseQuery<accessReviewScheduleDefinition> & accessReviewScheduleDefinitionMethods;
	historyDefinitions(): accessReviewHistoryDefinitionCollection;
	historyDefinitions(id: string | number): IBaseQuery<accessReviewHistoryDefinition> & accessReviewHistoryDefinitionMethods;
}
export interface accessReviewSetOData extends entityOData {
	definitions: IBaseResults<accessReviewScheduleDefinition>;
	historyDefinitions: IBaseResults<accessReviewHistoryDefinition>;
}
/*********************************************
* accessReviewStage
**********************************************/
export interface accessReviewStage extends accessReviewStageProps, accessReviewStageMethods { }
export interface accessReviewStageProps extends  entityProps {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	startDateTime: any;
	status: string;
}
export interface accessReviewStageMethods extends entityMethods {
	decisions(): accessReviewInstanceDecisionItemCollection;
	decisions(id: string | number): IBaseQuery<accessReviewInstanceDecisionItem> & accessReviewInstanceDecisionItemMethods;
	stop(): IBaseExecution<void>;
}
export interface accessReviewStageOData extends entityOData {
	decisions: IBaseResults<accessReviewInstanceDecisionItem>;
	stop(): IBaseExecution<void>;
}
export interface accessReviewStageCollection extends IBaseCollection<accessReviewStage, accessReviewStageOData & accessReviewStageProps> {
    add(values?: any): IBaseExecution<accessReviewStage>;
}
/*********************************************
* acronym
**********************************************/
export interface acronym extends acronymProps, acronymMethods { }
export interface acronymProps extends  searchAnswerProps {
	standsFor: string;
	state: EnumTypes.answerState;
}
export interface acronymMethods extends searchAnswerMethods {

}
export interface acronymOData extends searchAnswerOData {

}
/*********************************************
* activityBasedTimeoutPolicy
**********************************************/
export interface activityBasedTimeoutPolicy extends activityBasedTimeoutPolicyProps, activityBasedTimeoutPolicyMethods { }
export interface activityBasedTimeoutPolicyProps extends  stsPolicyProps {

}
export interface activityBasedTimeoutPolicyMethods extends stsPolicyMethods {

}
export interface activityBasedTimeoutPolicyOData extends stsPolicyOData {

}
export interface activityBasedTimeoutPolicyCollection extends IBaseCollection<activityBasedTimeoutPolicy, activityBasedTimeoutPolicyOData & activityBasedTimeoutPolicyProps> {
    add(values?: any): IBaseExecution<activityBasedTimeoutPolicy>;
}
/*********************************************
* activityHistoryItem
**********************************************/
export interface activityHistoryItem extends activityHistoryItemProps, activityHistoryItemMethods { }
export interface activityHistoryItemProps extends  entityProps {
	activeDurationSeconds: number;
	createdDateTime: any;
	expirationDateTime: any;
	lastActiveDateTime: any;
	lastModifiedDateTime: any;
	startedDateTime: any;
	status: EnumTypes.status;
	userTimezone: string;
}
export interface activityHistoryItemMethods extends entityMethods {
	activity(): IBaseQuery<userActivity> & userActivityMethods;
}
export interface activityHistoryItemOData extends entityOData {
	activity: userActivity;
}
export interface activityHistoryItemCollection extends IBaseCollection<activityHistoryItem, activityHistoryItemOData & activityHistoryItemProps> {
    add(values?: any): IBaseExecution<activityHistoryItem>;
}
/*********************************************
* addLargeGalleryViewOperation
**********************************************/
export interface addLargeGalleryViewOperation extends addLargeGalleryViewOperationProps, addLargeGalleryViewOperationMethods { }
export interface addLargeGalleryViewOperationProps extends  commsOperationProps {

}
export interface addLargeGalleryViewOperationMethods extends commsOperationMethods {

}
export interface addLargeGalleryViewOperationOData extends commsOperationOData {

}
/*********************************************
* admin
**********************************************/
export interface admin extends adminProps, adminMethods { }
export interface adminProps   {

}
export interface adminMethods {
	edge(): IBaseQuery<edge> & edgeMethods;
	sharepoint(): IBaseQuery<sharepoint> & sharepointMethods;
	microsoft365Apps(): IBaseQuery<adminMicrosoft365Apps> & adminMicrosoft365AppsMethods;
	serviceAnnouncement(): IBaseQuery<serviceAnnouncement> & serviceAnnouncementMethods;
	reportSettings(): IBaseQuery<adminReportSettings> & adminReportSettingsMethods;
	people(): IBaseQuery<peopleAdminSettings> & peopleAdminSettingsMethods;
}
export interface adminOData {
	edge: edge;
	sharepoint: sharepoint;
	microsoft365Apps: adminMicrosoft365Apps;
	serviceAnnouncement: serviceAnnouncement;
	reportSettings: adminReportSettings;
	people: peopleAdminSettings;
}
/*********************************************
* adminConsentRequestPolicy
**********************************************/
export interface adminConsentRequestPolicy extends adminConsentRequestPolicyProps, adminConsentRequestPolicyMethods { }
export interface adminConsentRequestPolicyProps extends  entityProps {
	isEnabled: boolean;
	notifyReviewers: boolean;
	remindersEnabled: boolean;
	requestDurationInDays: number;
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	version: number;
}
export interface adminConsentRequestPolicyMethods extends entityMethods {

}
export interface adminConsentRequestPolicyOData extends entityOData {

}
/*********************************************
* adminMicrosoft365Apps
**********************************************/
export interface adminMicrosoft365Apps extends adminMicrosoft365AppsProps, adminMicrosoft365AppsMethods { }
export interface adminMicrosoft365AppsProps extends  entityProps {

}
export interface adminMicrosoft365AppsMethods extends entityMethods {
	installationOptions(): IBaseQuery<m365AppsInstallationOptions> & m365AppsInstallationOptionsMethods;
}
export interface adminMicrosoft365AppsOData extends entityOData {
	installationOptions: m365AppsInstallationOptions;
}
/*********************************************
* adminReportSettings
**********************************************/
export interface adminReportSettings extends adminReportSettingsProps, adminReportSettingsMethods { }
export interface adminReportSettingsProps extends  entityProps {
	displayConcealedNames: boolean;
}
export interface adminReportSettingsMethods extends entityMethods {

}
export interface adminReportSettingsOData extends entityOData {

}
/*********************************************
* administrativeUnit
**********************************************/
export interface administrativeUnit extends administrativeUnitProps, administrativeUnitMethods { }
export interface administrativeUnitProps extends  directoryObjectProps {
	description: string;
	displayName: string;
	isMemberManagementRestricted: boolean;
	membershipRule: string;
	membershipRuleProcessingState: string;
	membershipType: string;
	visibility: string;
}
export interface administrativeUnitMethods extends directoryObjectMethods {
	members(): directoryObjectCollection;
	members(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	scopedRoleMembers(): scopedRoleMembershipCollection;
	scopedRoleMembers(id: string | number): IBaseQuery<scopedRoleMembership> & scopedRoleMembershipMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
}
export interface administrativeUnitOData extends directoryObjectOData {
	members: IBaseResults<directoryObject>;
	scopedRoleMembers: IBaseResults<scopedRoleMembership>;
	extensions: IBaseResults<extension>;
}
export interface administrativeUnitCollection extends IBaseCollection<administrativeUnit, administrativeUnitOData & administrativeUnitProps> {
    add(values?: any): IBaseExecution<administrativeUnit>;
}
/*********************************************
* agreement
**********************************************/
export interface agreement extends agreementProps, agreementMethods { }
export interface agreementProps extends  entityProps {
	displayName: string;
	isPerDeviceAcceptanceRequired: boolean;
	isViewingBeforeAcceptanceRequired: boolean;
	termsExpiration: ComplexTypes.termsExpiration;
	userReacceptRequiredFrequency: number;
}
export interface agreementMethods extends entityMethods {
	acceptances(): agreementAcceptanceCollection;
	acceptances(id: string | number): IBaseQuery<agreementAcceptance> & agreementAcceptanceMethods;
	file(): IBaseQuery<agreementFile> & agreementFileMethods;
	files(): agreementFileLocalizationCollection;
	files(id: string | number): IBaseQuery<agreementFileLocalization> & agreementFileLocalizationMethods;
}
export interface agreementOData extends entityOData {
	acceptances: IBaseResults<agreementAcceptance>;
	file: agreementFile;
	files: IBaseResults<agreementFileLocalization>;
}
export interface agreementCollection extends IBaseCollection<agreement, agreementOData & agreementProps> {
    add(values?: any): IBaseExecution<agreement>;
}
/*********************************************
* agreementAcceptance
**********************************************/
export interface agreementAcceptance extends agreementAcceptanceProps, agreementAcceptanceMethods { }
export interface agreementAcceptanceProps extends  entityProps {
	agreementFileId: string;
	agreementId: string;
	deviceDisplayName: string;
	deviceId: string;
	deviceOSType: string;
	deviceOSVersion: string;
	expirationDateTime: any;
	recordedDateTime: any;
	state: EnumTypes.agreementAcceptanceState;
	userDisplayName: string;
	userEmail: string;
	userId: string;
	userPrincipalName: string;
}
export interface agreementAcceptanceMethods extends entityMethods {

}
export interface agreementAcceptanceOData extends entityOData {

}
export interface agreementAcceptanceCollection extends IBaseCollection<agreementAcceptance, agreementAcceptanceOData & agreementAcceptanceProps> {
    add(values?: any): IBaseExecution<agreementAcceptance>;
}
/*********************************************
* agreementFile
**********************************************/
export interface agreementFile extends agreementFileProps, agreementFileMethods { }
export interface agreementFileProps extends  agreementFilePropertiesProps {

}
export interface agreementFileMethods extends agreementFilePropertiesMethods {
	localizations(): agreementFileLocalizationCollection;
	localizations(id: string | number): IBaseQuery<agreementFileLocalization> & agreementFileLocalizationMethods;
}
export interface agreementFileOData extends agreementFilePropertiesOData {
	localizations: IBaseResults<agreementFileLocalization>;
}
/*********************************************
* agreementFileLocalization
**********************************************/
export interface agreementFileLocalization extends agreementFileLocalizationProps, agreementFileLocalizationMethods { }
export interface agreementFileLocalizationProps extends  agreementFilePropertiesProps {

}
export interface agreementFileLocalizationMethods extends agreementFilePropertiesMethods {
	versions(): agreementFileVersionCollection;
	versions(id: string | number): IBaseQuery<agreementFileVersion> & agreementFileVersionMethods;
}
export interface agreementFileLocalizationOData extends agreementFilePropertiesOData {
	versions: IBaseResults<agreementFileVersion>;
}
export interface agreementFileLocalizationCollection extends IBaseCollection<agreementFileLocalization, agreementFileLocalizationOData & agreementFileLocalizationProps> {
    add(values?: any): IBaseExecution<agreementFileLocalization>;
}
/*********************************************
* agreementFileProperties
**********************************************/
export interface agreementFileProperties extends agreementFilePropertiesProps, agreementFilePropertiesMethods { }
export interface agreementFilePropertiesProps extends  entityProps {
	createdDateTime: any;
	displayName: string;
	fileData: ComplexTypes.agreementFileData;
	fileName: string;
	isDefault: boolean;
	isMajorVersion: boolean;
	language: string;
}
export interface agreementFilePropertiesMethods extends entityMethods {

}
export interface agreementFilePropertiesOData extends entityOData {

}
/*********************************************
* agreementFileVersion
**********************************************/
export interface agreementFileVersion extends agreementFileVersionProps, agreementFileVersionMethods { }
export interface agreementFileVersionProps extends  agreementFilePropertiesProps {

}
export interface agreementFileVersionMethods extends agreementFilePropertiesMethods {

}
export interface agreementFileVersionOData extends agreementFilePropertiesOData {

}
export interface agreementFileVersionCollection extends IBaseCollection<agreementFileVersion, agreementFileVersionOData & agreementFileVersionProps> {
    add(values?: any): IBaseExecution<agreementFileVersion>;
}
/*********************************************
* alert
**********************************************/
export interface alert extends alertProps, alertMethods { }
export interface alertProps extends  entityProps {
	actorDisplayName: string;
	additionalData: ComplexTypes.dictionary;
	alertPolicyId: string;
	alertWebUrl: string;
	assignedTo: string;
	category: string;
	classification: EnumTypes.alertClassification;
	comments: ComplexTypes.alertComment[];
	createdDateTime: any;
	description: string;
	detectionSource: EnumTypes.detectionSource;
	detectorId: string;
	determination: EnumTypes.alertDetermination;
	evidence: ComplexTypes.alertEvidence[];
	firstActivityDateTime: any;
	incidentId: string;
	incidentWebUrl: string;
	lastActivityDateTime: any;
	lastUpdateDateTime: any;
	mitreTechniques: Array<string>[];
	productName: string;
	providerAlertId: string;
	recommendedActions: string;
	resolvedDateTime: any;
	serviceSource: EnumTypes.serviceSource;
	severity: EnumTypes.alertSeverity;
	status: EnumTypes.alertStatus;
	systemTags: Array<string>[];
	tenantId: string;
	threatDisplayName: string;
	threatFamilyName: string;
	title: string;
}
export interface alertMethods extends entityMethods {

}
export interface alertOData extends entityOData {

}
export interface alertCollection extends IBaseCollection<alert, alertOData & alertProps> {
    add(values?: any): IBaseExecution<alert>;
}
/*********************************************
* allowedValue
**********************************************/
export interface allowedValue extends allowedValueProps, allowedValueMethods { }
export interface allowedValueProps extends  entityProps {
	isActive: boolean;
}
export interface allowedValueMethods extends entityMethods {

}
export interface allowedValueOData extends entityOData {

}
export interface allowedValueCollection extends IBaseCollection<allowedValue, allowedValueOData & allowedValueProps> {
    add(values?: any): IBaseExecution<allowedValue>;
}
/*********************************************
* androidCompliancePolicy
**********************************************/
export interface androidCompliancePolicy extends androidCompliancePolicyProps, androidCompliancePolicyMethods { }
export interface androidCompliancePolicyProps extends  deviceCompliancePolicyProps {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	minAndroidSecurityPatchLevel: string;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.androidRequiredPasswordType;
	securityBlockJailbrokenDevices: boolean;
	securityDisableUsbDebugging: boolean;
	securityPreventInstallAppsFromUnknownSources: boolean;
	securityRequireCompanyPortalAppIntegrity: boolean;
	securityRequireGooglePlayServices: boolean;
	securityRequireSafetyNetAttestationBasicIntegrity: boolean;
	securityRequireSafetyNetAttestationCertifiedDevice: boolean;
	securityRequireUpToDateSecurityProviders: boolean;
	securityRequireVerifyApps: boolean;
	storageRequireEncryption: boolean;
}
export interface androidCompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface androidCompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* androidCustomConfiguration
**********************************************/
export interface androidCustomConfiguration extends androidCustomConfigurationProps, androidCustomConfigurationMethods { }
export interface androidCustomConfigurationProps extends  deviceConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface androidCustomConfigurationMethods extends deviceConfigurationMethods {

}
export interface androidCustomConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* androidGeneralDeviceConfiguration
**********************************************/
export interface androidGeneralDeviceConfiguration extends androidGeneralDeviceConfigurationProps, androidGeneralDeviceConfigurationMethods { }
export interface androidGeneralDeviceConfigurationProps extends  deviceConfigurationProps {
	appsBlockClipboardSharing: boolean;
	appsBlockCopyPaste: boolean;
	appsBlockYouTube: boolean;
	appsHideList: ComplexTypes.appListItem[];
	appsInstallAllowList: ComplexTypes.appListItem[];
	appsLaunchBlockList: ComplexTypes.appListItem[];
	bluetoothBlocked: boolean;
	cameraBlocked: boolean;
	cellularBlockDataRoaming: boolean;
	cellularBlockMessaging: boolean;
	cellularBlockVoiceRoaming: boolean;
	cellularBlockWiFiTethering: boolean;
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	deviceSharingAllowed: boolean;
	diagnosticDataBlockSubmission: boolean;
	factoryResetBlocked: boolean;
	googleAccountBlockAutoSync: boolean;
	googlePlayStoreBlocked: boolean;
	kioskModeApps: ComplexTypes.appListItem[];
	kioskModeBlockSleepButton: boolean;
	kioskModeBlockVolumeButtons: boolean;
	locationServicesBlocked: boolean;
	nfcBlocked: boolean;
	passwordBlockFingerprintUnlock: boolean;
	passwordBlockTrustAgents: boolean;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.androidRequiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	powerOffBlocked: boolean;
	screenCaptureBlocked: boolean;
	securityRequireVerifyApps: boolean;
	storageBlockGoogleBackup: boolean;
	storageBlockRemovableStorage: boolean;
	storageRequireDeviceEncryption: boolean;
	storageRequireRemovableStorageEncryption: boolean;
	voiceAssistantBlocked: boolean;
	voiceDialingBlocked: boolean;
	webBrowserBlockAutofill: boolean;
	webBrowserBlocked: boolean;
	webBrowserBlockJavaScript: boolean;
	webBrowserBlockPopups: boolean;
	webBrowserCookieSettings: EnumTypes.webBrowserCookieSettings;
	wiFiBlocked: boolean;
}
export interface androidGeneralDeviceConfigurationMethods extends deviceConfigurationMethods {

}
export interface androidGeneralDeviceConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* androidLobApp
**********************************************/
export interface androidLobApp extends androidLobAppProps, androidLobAppMethods { }
export interface androidLobAppProps extends  mobileLobAppProps {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;
}
export interface androidLobAppMethods extends mobileLobAppMethods {

}
export interface androidLobAppOData extends mobileLobAppOData {

}
/*********************************************
* androidManagedAppProtection
**********************************************/
export interface androidManagedAppProtection extends androidManagedAppProtectionProps, androidManagedAppProtectionMethods { }
export interface androidManagedAppProtectionProps extends  targetedManagedAppProtectionProps {
	customBrowserDisplayName: string;
	customBrowserPackageId: string;
	deployedAppCount: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
	encryptAppData: boolean;
	minimumRequiredPatchVersion: string;
	minimumWarningPatchVersion: string;
	screenCaptureBlocked: boolean;
}
export interface androidManagedAppProtectionMethods extends targetedManagedAppProtectionMethods {
	apps(): managedMobileAppCollection;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
}
export interface androidManagedAppProtectionOData extends targetedManagedAppProtectionOData {
	apps: IBaseResults<managedMobileApp>;
	deploymentSummary: managedAppPolicyDeploymentSummary;
}
export interface androidManagedAppProtectionCollection extends IBaseCollection<androidManagedAppProtection, androidManagedAppProtectionOData & androidManagedAppProtectionProps> {
    add(values?: any): IBaseExecution<androidManagedAppProtection>;
}
/*********************************************
* androidManagedAppRegistration
**********************************************/
export interface androidManagedAppRegistration extends androidManagedAppRegistrationProps, androidManagedAppRegistrationMethods { }
export interface androidManagedAppRegistrationProps extends  managedAppRegistrationProps {

}
export interface androidManagedAppRegistrationMethods extends managedAppRegistrationMethods {

}
export interface androidManagedAppRegistrationOData extends managedAppRegistrationOData {

}
/*********************************************
* androidStoreApp
**********************************************/
export interface androidStoreApp extends androidStoreAppProps, androidStoreAppMethods { }
export interface androidStoreAppProps extends  mobileAppProps {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
}
export interface androidStoreAppMethods extends mobileAppMethods {

}
export interface androidStoreAppOData extends mobileAppOData {

}
/*********************************************
* androidWorkProfileCompliancePolicy
**********************************************/
export interface androidWorkProfileCompliancePolicy extends androidWorkProfileCompliancePolicyProps, androidWorkProfileCompliancePolicyMethods { }
export interface androidWorkProfileCompliancePolicyProps extends  deviceCompliancePolicyProps {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	minAndroidSecurityPatchLevel: string;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.androidRequiredPasswordType;
	securityBlockJailbrokenDevices: boolean;
	securityDisableUsbDebugging: boolean;
	securityPreventInstallAppsFromUnknownSources: boolean;
	securityRequireCompanyPortalAppIntegrity: boolean;
	securityRequireGooglePlayServices: boolean;
	securityRequireSafetyNetAttestationBasicIntegrity: boolean;
	securityRequireSafetyNetAttestationCertifiedDevice: boolean;
	securityRequireUpToDateSecurityProviders: boolean;
	securityRequireVerifyApps: boolean;
	storageRequireEncryption: boolean;
}
export interface androidWorkProfileCompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface androidWorkProfileCompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* androidWorkProfileCustomConfiguration
**********************************************/
export interface androidWorkProfileCustomConfiguration extends androidWorkProfileCustomConfigurationProps, androidWorkProfileCustomConfigurationMethods { }
export interface androidWorkProfileCustomConfigurationProps extends  deviceConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface androidWorkProfileCustomConfigurationMethods extends deviceConfigurationMethods {

}
export interface androidWorkProfileCustomConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* androidWorkProfileGeneralDeviceConfiguration
**********************************************/
export interface androidWorkProfileGeneralDeviceConfiguration extends androidWorkProfileGeneralDeviceConfigurationProps, androidWorkProfileGeneralDeviceConfigurationMethods { }
export interface androidWorkProfileGeneralDeviceConfigurationProps extends  deviceConfigurationProps {
	passwordBlockFingerprintUnlock: boolean;
	passwordBlockTrustAgents: boolean;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequiredType: EnumTypes.androidWorkProfileRequiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	securityRequireVerifyApps: boolean;
	workProfileBlockAddingAccounts: boolean;
	workProfileBlockCamera: boolean;
	workProfileBlockCrossProfileCallerId: boolean;
	workProfileBlockCrossProfileContactsSearch: boolean;
	workProfileBlockCrossProfileCopyPaste: boolean;
	workProfileBlockNotificationsWhileDeviceLocked: boolean;
	workProfileBlockScreenCapture: boolean;
	workProfileBluetoothEnableContactSharing: boolean;
	workProfileDataSharingType: EnumTypes.androidWorkProfileCrossProfileDataSharingType;
	workProfileDefaultAppPermissionPolicy: EnumTypes.androidWorkProfileDefaultAppPermissionPolicyType;
	workProfilePasswordBlockFingerprintUnlock: boolean;
	workProfilePasswordBlockTrustAgents: boolean;
	workProfilePasswordExpirationDays: number;
	workProfilePasswordMinimumLength: number;
	workProfilePasswordMinLetterCharacters: number;
	workProfilePasswordMinLowerCaseCharacters: number;
	workProfilePasswordMinNonLetterCharacters: number;
	workProfilePasswordMinNumericCharacters: number;
	workProfilePasswordMinSymbolCharacters: number;
	workProfilePasswordMinUpperCaseCharacters: number;
	workProfilePasswordMinutesOfInactivityBeforeScreenTimeout: number;
	workProfilePasswordPreviousPasswordBlockCount: number;
	workProfilePasswordRequiredType: EnumTypes.androidWorkProfileRequiredPasswordType;
	workProfilePasswordSignInFailureCountBeforeFactoryReset: number;
	workProfileRequirePassword: boolean;
}
export interface androidWorkProfileGeneralDeviceConfigurationMethods extends deviceConfigurationMethods {

}
export interface androidWorkProfileGeneralDeviceConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* anonymousGuestConversationMember
**********************************************/
export interface anonymousGuestConversationMember extends anonymousGuestConversationMemberProps, anonymousGuestConversationMemberMethods { }
export interface anonymousGuestConversationMemberProps extends  conversationMemberProps {
	anonymousGuestId: string;
}
export interface anonymousGuestConversationMemberMethods extends conversationMemberMethods {

}
export interface anonymousGuestConversationMemberOData extends conversationMemberOData {

}
/*********************************************
* appCatalogs
**********************************************/
export interface appCatalogs extends appCatalogsProps, appCatalogsMethods { }
export interface appCatalogsProps extends  entityProps {

}
export interface appCatalogsMethods extends entityMethods {
	teamsApps(): teamsAppCollection;
	teamsApps(id: string | number): IBaseQuery<teamsApp> & teamsAppMethods;
}
export interface appCatalogsOData extends entityOData {
	teamsApps: IBaseResults<teamsApp>;
}
/*********************************************
* appConsentApprovalRoute
**********************************************/
export interface appConsentApprovalRoute extends appConsentApprovalRouteProps, appConsentApprovalRouteMethods { }
export interface appConsentApprovalRouteProps extends  entityProps {

}
export interface appConsentApprovalRouteMethods extends entityMethods {
	appConsentRequests(): appConsentRequestCollection;
	appConsentRequests(id: string | number): IBaseQuery<appConsentRequest> & appConsentRequestMethods;
}
export interface appConsentApprovalRouteOData extends entityOData {
	appConsentRequests: IBaseResults<appConsentRequest>;
}
/*********************************************
* appConsentRequest
**********************************************/
export interface appConsentRequest extends appConsentRequestProps, appConsentRequestMethods { }
export interface appConsentRequestProps extends  entityProps {
	appDisplayName: string;
	appId: string;
	pendingScopes: ComplexTypes.appConsentRequestScope[];
}
export interface appConsentRequestMethods extends entityMethods {
	userConsentRequests(): userConsentRequestCollection;
	userConsentRequests(id: string | number): IBaseQuery<userConsentRequest> & userConsentRequestMethods;
}
export interface appConsentRequestOData extends entityOData {
	userConsentRequests: IBaseResults<userConsentRequest>;
}
export interface appConsentRequestCollection extends IBaseCollection<appConsentRequest, appConsentRequestOData & appConsentRequestProps> {
    add(values?: any): IBaseExecution<appConsentRequest>;
}
/*********************************************
* appLogCollectionRequest
**********************************************/
export interface appLogCollectionRequest extends appLogCollectionRequestProps, appLogCollectionRequestMethods { }
export interface appLogCollectionRequestProps extends  entityProps {
	completedDateTime: any;
	customLogFolders: Array<string>[];
	errorMessage: string;
	status: EnumTypes.appLogUploadState;
}
export interface appLogCollectionRequestMethods extends entityMethods {
	createDownloadUrl(): IBaseExecution<ComplexTypes.appLogCollectionDownloadDetails>;
}
export interface appLogCollectionRequestOData extends entityOData {
	createDownloadUrl(): IBaseExecution<ComplexTypes.appLogCollectionDownloadDetails>;
}
export interface appLogCollectionRequestCollection extends IBaseCollection<appLogCollectionRequest, appLogCollectionRequestOData & appLogCollectionRequestProps> {
    add(values?: any): IBaseExecution<appLogCollectionRequest>;
}
/*********************************************
* appManagementPolicy
**********************************************/
export interface appManagementPolicy extends appManagementPolicyProps, appManagementPolicyMethods { }
export interface appManagementPolicyProps extends  policyBaseProps {
	isEnabled: boolean;
	restrictions: ComplexTypes.customAppManagementConfiguration;
}
export interface appManagementPolicyMethods extends policyBaseMethods {
	appliesTo(): directoryObjectCollection;
	appliesTo(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface appManagementPolicyOData extends policyBaseOData {
	appliesTo: IBaseResults<directoryObject>;
}
export interface appManagementPolicyCollection extends IBaseCollection<appManagementPolicy, appManagementPolicyOData & appManagementPolicyProps> {
    add(values?: any): IBaseExecution<appManagementPolicy>;
}
/*********************************************
* appRoleAssignment
**********************************************/
export interface appRoleAssignment extends appRoleAssignmentProps, appRoleAssignmentMethods { }
export interface appRoleAssignmentProps extends  directoryObjectProps {
	appRoleId: any;
	createdDateTime: any;
	principalDisplayName: string;
	principalId: any;
	principalType: string;
	resourceDisplayName: string;
	resourceId: any;
}
export interface appRoleAssignmentMethods extends directoryObjectMethods {

}
export interface appRoleAssignmentOData extends directoryObjectOData {

}
export interface appRoleAssignmentCollection extends IBaseCollection<appRoleAssignment, appRoleAssignmentOData & appRoleAssignmentProps> {
    add(values?: any): IBaseExecution<appRoleAssignment>;
}
/*********************************************
* appScope
**********************************************/
export interface appScope extends appScopeProps, appScopeMethods { }
export interface appScopeProps extends  entityProps {
	displayName: string;
	type: string;
}
export interface appScopeMethods extends entityMethods {

}
export interface appScopeOData extends entityOData {

}
/*********************************************
* appleDeviceFeaturesConfigurationBase
**********************************************/
export interface appleDeviceFeaturesConfigurationBase extends appleDeviceFeaturesConfigurationBaseProps, appleDeviceFeaturesConfigurationBaseMethods { }
export interface appleDeviceFeaturesConfigurationBaseProps extends  deviceConfigurationProps {

}
export interface appleDeviceFeaturesConfigurationBaseMethods extends deviceConfigurationMethods {

}
export interface appleDeviceFeaturesConfigurationBaseOData extends deviceConfigurationOData {

}
/*********************************************
* appleManagedIdentityProvider
**********************************************/
export interface appleManagedIdentityProvider extends appleManagedIdentityProviderProps, appleManagedIdentityProviderMethods { }
export interface appleManagedIdentityProviderProps extends  identityProviderBaseProps {
	certificateData: string;
	developerId: string;
	keyId: string;
	serviceId: string;
}
export interface appleManagedIdentityProviderMethods extends identityProviderBaseMethods {

}
export interface appleManagedIdentityProviderOData extends identityProviderBaseOData {

}
/*********************************************
* applePushNotificationCertificate
**********************************************/
export interface applePushNotificationCertificate extends applePushNotificationCertificateProps, applePushNotificationCertificateMethods { }
export interface applePushNotificationCertificateProps extends  entityProps {
	appleIdentifier: string;
	certificate: string;
	certificateSerialNumber: string;
	certificateUploadFailureReason: string;
	certificateUploadStatus: string;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	topicIdentifier: string;
}
export interface applePushNotificationCertificateMethods extends entityMethods {
	downloadApplePushNotificationCertificateSigningRequest(): string;
}
export interface applePushNotificationCertificateOData extends entityOData {
	downloadApplePushNotificationCertificateSigningRequest(): string;
}
/*********************************************
* application
**********************************************/
export interface application extends applicationProps, applicationMethods { }
export interface applicationProps extends  directoryObjectProps {
	addIns: ComplexTypes.addIn[];
	api: ComplexTypes.apiApplication;
	appId: string;
	applicationTemplateId: string;
	appRoles: ComplexTypes.appRole[];
	certification: ComplexTypes.certification;
	createdDateTime: any;
	defaultRedirectUri: string;
	description: string;
	disabledByMicrosoftStatus: string;
	displayName: string;
	groupMembershipClaims: string;
	identifierUris: Array<string>[];
	info: ComplexTypes.informationalUrl;
	isDeviceOnlyAuthSupported: boolean;
	isFallbackPublicClient: boolean;
	keyCredentials: ComplexTypes.keyCredential[];
	logo: any;
	nativeAuthenticationApisEnabled: EnumTypes.nativeAuthenticationApisEnabled;
	notes: string;
	oauth2RequirePostResponse: boolean;
	optionalClaims: ComplexTypes.optionalClaims;
	parentalControlSettings: ComplexTypes.parentalControlSettings;
	passwordCredentials: ComplexTypes.passwordCredential[];
	publicClient: ComplexTypes.publicClientApplication;
	publisherDomain: string;
	requestSignatureVerification: ComplexTypes.requestSignatureVerification;
	requiredResourceAccess: ComplexTypes.requiredResourceAccess[];
	samlMetadataUrl: string;
	serviceManagementReference: string;
	servicePrincipalLockConfiguration: ComplexTypes.servicePrincipalLockConfiguration;
	signInAudience: string;
	spa: ComplexTypes.spaApplication;
	tags: Array<string>[];
	tokenEncryptionKeyId: any;
	uniqueName: string;
	verifiedPublisher: ComplexTypes.verifiedPublisher;
	web: ComplexTypes.webApplication;
}
export interface applicationMethods extends directoryObjectMethods {
	appManagementPolicies(): appManagementPolicyCollection;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy> & appManagementPolicyMethods;
	createdOnBehalfOf(): IBaseQuery<directoryObject> & directoryObjectMethods;
	extensionProperties(): extensionPropertyCollection;
	extensionProperties(id: string | number): IBaseQuery<extensionProperty> & extensionPropertyMethods;
	federatedIdentityCredentials(): federatedIdentityCredentialCollection;
	federatedIdentityCredentials(id: string | number): IBaseQuery<federatedIdentityCredential> & federatedIdentityCredentialMethods;
	homeRealmDiscoveryPolicies(): homeRealmDiscoveryPolicyCollection;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy> & homeRealmDiscoveryPolicyMethods;
	owners(): directoryObjectCollection;
	owners(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	tokenIssuancePolicies(): tokenIssuancePolicyCollection;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy> & tokenIssuancePolicyMethods;
	tokenLifetimePolicies(): tokenLifetimePolicyCollection;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy> & tokenLifetimePolicyMethods;
	synchronization(): IBaseQuery<synchronization> & synchronizationMethods;
	setVerifiedPublisher(verifiedPublisherId): IBaseExecution<void>;
	unsetVerifiedPublisher(): IBaseExecution<void>;
	addKey(keyCredential, passwordCredential, proof): IBaseExecution<ComplexTypes.keyCredential>;
	addPassword(passwordCredential): IBaseExecution<ComplexTypes.passwordCredential>;
	removeKey(keyId, proof): IBaseExecution<void>;
	removePassword(keyId): IBaseExecution<void>;
}
export interface applicationOData extends directoryObjectOData {
	appManagementPolicies: IBaseResults<appManagementPolicy>;
	createdOnBehalfOf: directoryObject;
	extensionProperties: IBaseResults<extensionProperty>;
	federatedIdentityCredentials: IBaseResults<federatedIdentityCredential>;
	homeRealmDiscoveryPolicies: IBaseResults<homeRealmDiscoveryPolicy>;
	owners: IBaseResults<directoryObject>;
	tokenIssuancePolicies: IBaseResults<tokenIssuancePolicy>;
	tokenLifetimePolicies: IBaseResults<tokenLifetimePolicy>;
	synchronization: synchronization;
	setVerifiedPublisher(verifiedPublisherId): IBaseExecution<void>;
	unsetVerifiedPublisher(): IBaseExecution<void>;
	addKey(keyCredential, passwordCredential, proof): IBaseExecution<ComplexTypes.keyCredential>;
	addPassword(passwordCredential): IBaseExecution<ComplexTypes.passwordCredential>;
	removeKey(keyId, proof): IBaseExecution<void>;
	removePassword(keyId): IBaseExecution<void>;
}
/*********************************************
* applicationTemplate
**********************************************/
export interface applicationTemplate extends applicationTemplateProps, applicationTemplateMethods { }
export interface applicationTemplateProps extends  entityProps {
	categories: Array<string>[];
	description: string;
	displayName: string;
	homePageUrl: string;
	logoUrl: string;
	publisher: string;
	supportedProvisioningTypes: Array<string>[];
	supportedSingleSignOnModes: Array<string>[];
}
export interface applicationTemplateMethods extends entityMethods {
	instantiate(displayName, serviceManagementReference): IBaseExecution<ComplexTypes.applicationServicePrincipal>;
}
export interface applicationTemplateOData extends entityOData {
	instantiate(displayName, serviceManagementReference): IBaseExecution<ComplexTypes.applicationServicePrincipal>;
}
/*********************************************
* approval
**********************************************/
export interface approval extends approvalProps, approvalMethods { }
export interface approvalProps extends  entityProps {

}
export interface approvalMethods extends entityMethods {
	stages(): approvalStageCollection;
	stages(id: string | number): IBaseQuery<approvalStage> & approvalStageMethods;
}
export interface approvalOData extends entityOData {
	stages: IBaseResults<approvalStage>;
}
export interface approvalCollection extends IBaseCollection<approval, approvalOData & approvalProps> {
    add(values?: any): IBaseExecution<approval>;
}
/*********************************************
* approvalStage
**********************************************/
export interface approvalStage extends approvalStageProps, approvalStageMethods { }
export interface approvalStageProps extends  entityProps {
	assignedToMe: boolean;
	displayName: string;
	justification: string;
	reviewedBy: ComplexTypes.identity;
	reviewedDateTime: any;
	reviewResult: string;
	status: string;
}
export interface approvalStageMethods extends entityMethods {

}
export interface approvalStageOData extends entityOData {

}
export interface approvalStageCollection extends IBaseCollection<approvalStage, approvalStageOData & approvalStageProps> {
    add(values?: any): IBaseExecution<approvalStage>;
}
/*********************************************
* article
**********************************************/
export interface article extends articleProps, articleMethods { }
export interface articleProps extends  entityProps {
	body: ComplexTypes.formattedContent;
	createdDateTime: any;
	imageUrl: string;
	isFeatured: boolean;
	lastUpdatedDateTime: any;
	summary: ComplexTypes.formattedContent;
	tags: Array<string>[];
	title: string;
}
export interface articleMethods extends entityMethods {
	indicators(): IBaseCollection<articleIndicator, entity & articleIndicatorOData & articleIndicatorProps>;
	indicators(id: string | number): IBaseQuery<articleIndicator> & articleIndicatorMethods;
}
export interface articleOData extends entityOData {
	indicators: IBaseResults<articleIndicator>;
}
/*********************************************
* articleIndicator
**********************************************/
export interface articleIndicator extends articleIndicatorProps, articleIndicatorMethods { }
export interface articleIndicatorProps extends  indicatorProps {

}
export interface articleIndicatorMethods extends indicatorMethods {

}
export interface articleIndicatorOData extends indicatorOData {

}
/*********************************************
* artifact
**********************************************/
export interface artifact extends artifactProps, artifactMethods { }
export interface artifactProps extends  entityProps {

}
export interface artifactMethods extends entityMethods {

}
export interface artifactOData extends entityOData {

}
/*********************************************
* associatedTeamInfo
**********************************************/
export interface associatedTeamInfo extends associatedTeamInfoProps, associatedTeamInfoMethods { }
export interface associatedTeamInfoProps extends  teamInfoProps {

}
export interface associatedTeamInfoMethods extends teamInfoMethods {

}
export interface associatedTeamInfoOData extends teamInfoOData {

}
export interface associatedTeamInfoCollection extends IBaseCollection<associatedTeamInfo, associatedTeamInfoOData & associatedTeamInfoProps> {
    add(values?: any): IBaseExecution<associatedTeamInfo>;
}
/*********************************************
* attachment
**********************************************/
export interface attachment extends attachmentProps, attachmentMethods { }
export interface attachmentProps extends  entityProps {
	contentType: string;
	isInline: boolean;
	lastModifiedDateTime: any;
	name: string;
	size: number;
}
export interface attachmentMethods extends entityMethods {

}
export interface attachmentOData extends entityOData {

}
export interface attachmentCollection extends IBaseCollection<attachment, attachmentOData & attachmentProps> {
    add(values?: any): IBaseExecution<attachment>;
}
/*********************************************
* attachmentBase
**********************************************/
export interface attachmentBase extends attachmentBaseProps, attachmentBaseMethods { }
export interface attachmentBaseProps extends  entityProps {
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;
}
export interface attachmentBaseMethods extends entityMethods {

}
export interface attachmentBaseOData extends entityOData {

}
export interface attachmentBaseCollection extends IBaseCollection<attachmentBase, attachmentBaseOData & attachmentBaseProps> {
    add(values?: any): IBaseExecution<attachmentBase>;
}
/*********************************************
* attachmentSession
**********************************************/
export interface attachmentSession extends attachmentSessionProps, attachmentSessionMethods { }
export interface attachmentSessionProps extends  entityProps {
	content: any;
	expirationDateTime: any;
	nextExpectedRanges: Array<string>[];
}
export interface attachmentSessionMethods extends entityMethods {

}
export interface attachmentSessionOData extends entityOData {

}
export interface attachmentSessionCollection extends IBaseCollection<attachmentSession, attachmentSessionOData & attachmentSessionProps> {
    add(values?: any): IBaseExecution<attachmentSession>;
}
/*********************************************
* attackSimulationOperation
**********************************************/
export interface attackSimulationOperation extends attackSimulationOperationProps, attackSimulationOperationMethods { }
export interface attackSimulationOperationProps extends  longRunningOperationProps {
	percentageCompleted: number;
	tenantId: string;
	type: EnumTypes.attackSimulationOperationType;
}
export interface attackSimulationOperationMethods extends longRunningOperationMethods {

}
export interface attackSimulationOperationOData extends longRunningOperationOData {

}
export interface attackSimulationOperationCollection extends IBaseCollection<attackSimulationOperation, attackSimulationOperationOData & attackSimulationOperationProps> {
    add(values?: any): IBaseExecution<attackSimulationOperation>;
}
/*********************************************
* attackSimulationRoot
**********************************************/
export interface attackSimulationRoot extends attackSimulationRootProps, attackSimulationRootMethods { }
export interface attackSimulationRootProps extends  entityProps {

}
export interface attackSimulationRootMethods extends entityMethods {
	endUserNotifications(): endUserNotificationCollection;
	endUserNotifications(id: string | number): IBaseQuery<endUserNotification> & endUserNotificationMethods;
	landingPages(): landingPageCollection;
	landingPages(id: string | number): IBaseQuery<landingPage> & landingPageMethods;
	loginPages(): loginPageCollection;
	loginPages(id: string | number): IBaseQuery<loginPage> & loginPageMethods;
	operations(): attackSimulationOperationCollection;
	operations(id: string | number): IBaseQuery<attackSimulationOperation> & attackSimulationOperationMethods;
	payloads(): payloadCollection;
	payloads(id: string | number): IBaseQuery<payload> & payloadMethods;
	simulationAutomations(): simulationAutomationCollection;
	simulationAutomations(id: string | number): IBaseQuery<simulationAutomation> & simulationAutomationMethods;
	simulations(): simulationCollection;
	simulations(id: string | number): IBaseQuery<simulation> & simulationMethods;
	trainings(): trainingCollection;
	trainings(id: string | number): IBaseQuery<training> & trainingMethods;
}
export interface attackSimulationRootOData extends entityOData {
	endUserNotifications: IBaseResults<endUserNotification>;
	landingPages: IBaseResults<landingPage>;
	loginPages: IBaseResults<loginPage>;
	operations: IBaseResults<attackSimulationOperation>;
	payloads: IBaseResults<payload>;
	simulationAutomations: IBaseResults<simulationAutomation>;
	simulations: IBaseResults<simulation>;
	trainings: IBaseResults<training>;
}
/*********************************************
* attendanceRecord
**********************************************/
export interface attendanceRecord extends attendanceRecordProps, attendanceRecordMethods { }
export interface attendanceRecordProps extends  entityProps {
	attendanceIntervals: ComplexTypes.attendanceInterval[];
	emailAddress: string;
	identity: ComplexTypes.identity;
	role: string;
	totalAttendanceInSeconds: number;
}
export interface attendanceRecordMethods extends entityMethods {

}
export interface attendanceRecordOData extends entityOData {

}
export interface attendanceRecordCollection extends IBaseCollection<attendanceRecord, attendanceRecordOData & attendanceRecordProps> {
    add(values?: any): IBaseExecution<attendanceRecord>;
}
/*********************************************
* attributeMappingFunctionSchema
**********************************************/
export interface attributeMappingFunctionSchema extends attributeMappingFunctionSchemaProps, attributeMappingFunctionSchemaMethods { }
export interface attributeMappingFunctionSchemaProps extends  entityProps {
	parameters: ComplexTypes.attributeMappingParameterSchema[];
}
export interface attributeMappingFunctionSchemaMethods extends entityMethods {

}
export interface attributeMappingFunctionSchemaOData extends entityOData {

}
/*********************************************
* attributeSet
**********************************************/
export interface attributeSet extends attributeSetProps, attributeSetMethods { }
export interface attributeSetProps extends  entityProps {
	description: string;
	maxAttributesPerSet: number;
}
export interface attributeSetMethods extends entityMethods {

}
export interface attributeSetOData extends entityOData {

}
export interface attributeSetCollection extends IBaseCollection<attributeSet, attributeSetOData & attributeSetProps> {
    add(values?: any): IBaseExecution<attributeSet>;
}
/*********************************************
* audioRoutingGroup
**********************************************/
export interface audioRoutingGroup extends audioRoutingGroupProps, audioRoutingGroupMethods { }
export interface audioRoutingGroupProps extends  entityProps {
	receivers: Array<string>[];
	routingMode: EnumTypes.routingMode;
	sources: Array<string>[];
}
export interface audioRoutingGroupMethods extends entityMethods {

}
export interface audioRoutingGroupOData extends entityOData {

}
export interface audioRoutingGroupCollection extends IBaseCollection<audioRoutingGroup, audioRoutingGroupOData & audioRoutingGroupProps> {
    add(values?: any): IBaseExecution<audioRoutingGroup>;
}
/*********************************************
* auditEvent
**********************************************/
export interface auditEvent extends auditEventProps, auditEventMethods { }
export interface auditEventProps extends  entityProps {
	activity: string;
	activityDateTime: any;
	activityOperationType: string;
	activityResult: string;
	activityType: string;
	actor: ComplexTypes.auditActor;
	category: string;
	componentName: string;
	correlationId: any;
	displayName: string;
	resources: ComplexTypes.auditResource[];
}
export interface auditEventMethods extends entityMethods {

}
export interface auditEventOData extends entityOData {

}
export interface auditEventCollection extends IBaseCollection<auditEvent, auditEventOData & auditEventProps> {
    add(values?: any): IBaseExecution<auditEvent>;
}
/*********************************************
* auditLogRoot
**********************************************/
export interface auditLogRoot extends auditLogRootProps, auditLogRootMethods { }
export interface auditLogRootProps   {

}
export interface auditLogRootMethods {
	directoryAudits(): directoryAuditCollection;
	directoryAudits(id: string | number): IBaseQuery<directoryAudit> & directoryAuditMethods;
	provisioning(): provisioningObjectSummaryCollection;
	provisioning(id: string | number): IBaseQuery<provisioningObjectSummary> & provisioningObjectSummaryMethods;
	signIns(): signInCollection;
	signIns(id: string | number): IBaseQuery<signIn> & signInMethods;
}
export interface auditLogRootOData {
	directoryAudits: IBaseResults<directoryAudit>;
	provisioning: IBaseResults<provisioningObjectSummary>;
	signIns: IBaseResults<signIn>;
}
/*********************************************
* authentication
**********************************************/
export interface authentication extends authenticationProps, authenticationMethods { }
export interface authenticationProps extends  entityProps {

}
export interface authenticationMethods extends entityMethods {
	emailMethods(): emailAuthenticationMethodCollection;
	emailMethods(id: string | number): IBaseQuery<emailAuthenticationMethod> & emailAuthenticationMethodMethods;
	fido2Methods(): fido2AuthenticationMethodCollection;
	fido2Methods(id: string | number): IBaseQuery<fido2AuthenticationMethod> & fido2AuthenticationMethodMethods;
	methods(): authenticationMethodCollection;
	methods(id: string | number): IBaseQuery<authenticationMethod> & authenticationMethodMethods;
	microsoftAuthenticatorMethods(): microsoftAuthenticatorAuthenticationMethodCollection;
	microsoftAuthenticatorMethods(id: string | number): IBaseQuery<microsoftAuthenticatorAuthenticationMethod> & microsoftAuthenticatorAuthenticationMethodMethods;
	operations(): longRunningOperationCollection;
	operations(id: string | number): IBaseQuery<longRunningOperation> & longRunningOperationMethods;
	passwordMethods(): passwordAuthenticationMethodCollection;
	passwordMethods(id: string | number): IBaseQuery<passwordAuthenticationMethod> & passwordAuthenticationMethodMethods;
	phoneMethods(): phoneAuthenticationMethodCollection;
	phoneMethods(id: string | number): IBaseQuery<phoneAuthenticationMethod> & phoneAuthenticationMethodMethods;
	softwareOathMethods(): softwareOathAuthenticationMethodCollection;
	softwareOathMethods(id: string | number): IBaseQuery<softwareOathAuthenticationMethod> & softwareOathAuthenticationMethodMethods;
	temporaryAccessPassMethods(): temporaryAccessPassAuthenticationMethodCollection;
	temporaryAccessPassMethods(id: string | number): IBaseQuery<temporaryAccessPassAuthenticationMethod> & temporaryAccessPassAuthenticationMethodMethods;
	windowsHelloForBusinessMethods(): windowsHelloForBusinessAuthenticationMethodCollection;
	windowsHelloForBusinessMethods(id: string | number): IBaseQuery<windowsHelloForBusinessAuthenticationMethod> & windowsHelloForBusinessAuthenticationMethodMethods;
}
export interface authenticationOData extends entityOData {
	emailMethods: IBaseResults<emailAuthenticationMethod>;
	fido2Methods: IBaseResults<fido2AuthenticationMethod>;
	methods: IBaseResults<authenticationMethod>;
	microsoftAuthenticatorMethods: IBaseResults<microsoftAuthenticatorAuthenticationMethod>;
	operations: IBaseResults<longRunningOperation>;
	passwordMethods: IBaseResults<passwordAuthenticationMethod>;
	phoneMethods: IBaseResults<phoneAuthenticationMethod>;
	softwareOathMethods: IBaseResults<softwareOathAuthenticationMethod>;
	temporaryAccessPassMethods: IBaseResults<temporaryAccessPassAuthenticationMethod>;
	windowsHelloForBusinessMethods: IBaseResults<windowsHelloForBusinessAuthenticationMethod>;
}
/*********************************************
* authenticationCombinationConfiguration
**********************************************/
export interface authenticationCombinationConfiguration extends authenticationCombinationConfigurationProps, authenticationCombinationConfigurationMethods { }
export interface authenticationCombinationConfigurationProps extends  entityProps {
	appliesToCombinations: EnumTypes.authenticationMethodModes[];
}
export interface authenticationCombinationConfigurationMethods extends entityMethods {

}
export interface authenticationCombinationConfigurationOData extends entityOData {

}
export interface authenticationCombinationConfigurationCollection extends IBaseCollection<authenticationCombinationConfiguration, authenticationCombinationConfigurationOData & authenticationCombinationConfigurationProps> {
    add(values?: any): IBaseExecution<authenticationCombinationConfiguration>;
}
/*********************************************
* authenticationConditionApplication
**********************************************/
export interface authenticationConditionApplication extends authenticationConditionApplicationProps, authenticationConditionApplicationMethods { }
export interface authenticationConditionApplicationProps   {
	appId: string;
}
export interface authenticationConditionApplicationMethods {

}
export interface authenticationConditionApplicationOData {

}
/*********************************************
* authenticationContextClassReference
**********************************************/
export interface authenticationContextClassReference extends authenticationContextClassReferenceProps, authenticationContextClassReferenceMethods { }
export interface authenticationContextClassReferenceProps extends  entityProps {
	description: string;
	displayName: string;
	isAvailable: boolean;
}
export interface authenticationContextClassReferenceMethods extends entityMethods {

}
export interface authenticationContextClassReferenceOData extends entityOData {

}
export interface authenticationContextClassReferenceCollection extends IBaseCollection<authenticationContextClassReference, authenticationContextClassReferenceOData & authenticationContextClassReferenceProps> {
    add(values?: any): IBaseExecution<authenticationContextClassReference>;
}
/*********************************************
* authenticationEventListener
**********************************************/
export interface authenticationEventListener extends authenticationEventListenerProps, authenticationEventListenerMethods { }
export interface authenticationEventListenerProps extends  entityProps {
	authenticationEventsFlowId: string;
	conditions: ComplexTypes.authenticationConditions;
}
export interface authenticationEventListenerMethods extends entityMethods {

}
export interface authenticationEventListenerOData extends entityOData {

}
export interface authenticationEventListenerCollection extends IBaseCollection<authenticationEventListener, authenticationEventListenerOData & authenticationEventListenerProps> {
    add(values?: any): IBaseExecution<authenticationEventListener>;
}
/*********************************************
* authenticationEventsFlow
**********************************************/
export interface authenticationEventsFlow extends authenticationEventsFlowProps, authenticationEventsFlowMethods { }
export interface authenticationEventsFlowProps extends  entityProps {
	conditions: ComplexTypes.authenticationConditions;
	description: string;
	displayName: string;
}
export interface authenticationEventsFlowMethods extends entityMethods {

}
export interface authenticationEventsFlowOData extends entityOData {

}
export interface authenticationEventsFlowCollection extends IBaseCollection<authenticationEventsFlow, authenticationEventsFlowOData & authenticationEventsFlowProps> {
    add(values?: any): IBaseExecution<authenticationEventsFlow>;
}
/*********************************************
* authenticationFlowsPolicy
**********************************************/
export interface authenticationFlowsPolicy extends authenticationFlowsPolicyProps, authenticationFlowsPolicyMethods { }
export interface authenticationFlowsPolicyProps extends  entityProps {
	description: string;
	displayName: string;
	selfServiceSignUp: ComplexTypes.selfServiceSignUpAuthenticationFlowConfiguration;
}
export interface authenticationFlowsPolicyMethods extends entityMethods {

}
export interface authenticationFlowsPolicyOData extends entityOData {

}
/*********************************************
* authenticationMethod
**********************************************/
export interface authenticationMethod extends authenticationMethodProps, authenticationMethodMethods { }
export interface authenticationMethodProps extends  entityProps {

}
export interface authenticationMethodMethods extends entityMethods {
	resetPassword(newPassword): IBaseExecution<ComplexTypes.passwordResetResponse>;
}
export interface authenticationMethodOData extends entityOData {
	resetPassword(newPassword): IBaseExecution<ComplexTypes.passwordResetResponse>;
}
export interface authenticationMethodCollection extends IBaseCollection<authenticationMethod, authenticationMethodOData & authenticationMethodProps> {
    add(values?: any): IBaseExecution<authenticationMethod>;
}
/*********************************************
* authenticationMethodConfiguration
**********************************************/
export interface authenticationMethodConfiguration extends authenticationMethodConfigurationProps, authenticationMethodConfigurationMethods { }
export interface authenticationMethodConfigurationProps extends  entityProps {
	excludeTargets: ComplexTypes.excludeTarget[];
	state: EnumTypes.authenticationMethodState;
}
export interface authenticationMethodConfigurationMethods extends entityMethods {

}
export interface authenticationMethodConfigurationOData extends entityOData {

}
export interface authenticationMethodConfigurationCollection extends IBaseCollection<authenticationMethodConfiguration, authenticationMethodConfigurationOData & authenticationMethodConfigurationProps> {
    add(values?: any): IBaseExecution<authenticationMethodConfiguration>;
}
/*********************************************
* authenticationMethodModeDetail
**********************************************/
export interface authenticationMethodModeDetail extends authenticationMethodModeDetailProps, authenticationMethodModeDetailMethods { }
export interface authenticationMethodModeDetailProps extends  entityProps {
	authenticationMethod: EnumTypes.baseAuthenticationMethod;
	displayName: string;
}
export interface authenticationMethodModeDetailMethods extends entityMethods {

}
export interface authenticationMethodModeDetailOData extends entityOData {

}
export interface authenticationMethodModeDetailCollection extends IBaseCollection<authenticationMethodModeDetail, authenticationMethodModeDetailOData & authenticationMethodModeDetailProps> {
    add(values?: any): IBaseExecution<authenticationMethodModeDetail>;
}
/*********************************************
* authenticationMethodTarget
**********************************************/
export interface authenticationMethodTarget extends authenticationMethodTargetProps, authenticationMethodTargetMethods { }
export interface authenticationMethodTargetProps extends  entityProps {
	isRegistrationRequired: boolean;
	targetType: EnumTypes.authenticationMethodTargetType;
}
export interface authenticationMethodTargetMethods extends entityMethods {

}
export interface authenticationMethodTargetOData extends entityOData {

}
export interface authenticationMethodTargetCollection extends IBaseCollection<authenticationMethodTarget, authenticationMethodTargetOData & authenticationMethodTargetProps> {
    add(values?: any): IBaseExecution<authenticationMethodTarget>;
}
/*********************************************
* authenticationMethodsPolicy
**********************************************/
export interface authenticationMethodsPolicy extends authenticationMethodsPolicyProps, authenticationMethodsPolicyMethods { }
export interface authenticationMethodsPolicyProps extends  entityProps {
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	policyMigrationState: EnumTypes.authenticationMethodsPolicyMigrationState;
	policyVersion: string;
	reconfirmationInDays: number;
	registrationEnforcement: ComplexTypes.registrationEnforcement;
}
export interface authenticationMethodsPolicyMethods extends entityMethods {
	authenticationMethodConfigurations(): authenticationMethodConfigurationCollection;
	authenticationMethodConfigurations(id: string | number): IBaseQuery<authenticationMethodConfiguration> & authenticationMethodConfigurationMethods;
}
export interface authenticationMethodsPolicyOData extends entityOData {
	authenticationMethodConfigurations: IBaseResults<authenticationMethodConfiguration>;
}
/*********************************************
* authenticationMethodsRoot
**********************************************/
export interface authenticationMethodsRoot extends authenticationMethodsRootProps, authenticationMethodsRootMethods { }
export interface authenticationMethodsRootProps extends  entityProps {

}
export interface authenticationMethodsRootMethods extends entityMethods {
	userRegistrationDetails(): userRegistrationDetailsCollection;
	userRegistrationDetails(id: string | number): IBaseQuery<userRegistrationDetails> & userRegistrationDetailsMethods;
	usersRegisteredByFeature(): ComplexTypes.userRegistrationFeatureSummary;
	usersRegisteredByFeature(includedUserTypes, includedUserRoles): ComplexTypes.userRegistrationFeatureSummary;
	usersRegisteredByMethod(): ComplexTypes.userRegistrationMethodSummary;
	usersRegisteredByMethod(includedUserTypes, includedUserRoles): ComplexTypes.userRegistrationMethodSummary;
}
export interface authenticationMethodsRootOData extends entityOData {
	userRegistrationDetails: IBaseResults<userRegistrationDetails>;
	usersRegisteredByFeature(): ComplexTypes.userRegistrationFeatureSummary;
	usersRegisteredByFeature(includedUserTypes, includedUserRoles): ComplexTypes.userRegistrationFeatureSummary;
	usersRegisteredByMethod(): ComplexTypes.userRegistrationMethodSummary;
	usersRegisteredByMethod(includedUserTypes, includedUserRoles): ComplexTypes.userRegistrationMethodSummary;
}
/*********************************************
* authenticationStrengthPolicy
**********************************************/
export interface authenticationStrengthPolicy extends authenticationStrengthPolicyProps, authenticationStrengthPolicyMethods { }
export interface authenticationStrengthPolicyProps extends  entityProps {
	allowedCombinations: EnumTypes.authenticationMethodModes[];
	createdDateTime: any;
	description: string;
	displayName: string;
	modifiedDateTime: any;
	policyType: EnumTypes.authenticationStrengthPolicyType;
	requirementsSatisfied: EnumTypes.authenticationStrengthRequirements;
}
export interface authenticationStrengthPolicyMethods extends entityMethods {
	combinationConfigurations(): authenticationCombinationConfigurationCollection;
	combinationConfigurations(id: string | number): IBaseQuery<authenticationCombinationConfiguration> & authenticationCombinationConfigurationMethods;
	updateAllowedCombinations(allowedCombinations): IBaseExecution<ComplexTypes.updateAllowedCombinationsResult>;
	usage(): ComplexTypes.authenticationStrengthUsage;
}
export interface authenticationStrengthPolicyOData extends entityOData {
	combinationConfigurations: IBaseResults<authenticationCombinationConfiguration>;
	updateAllowedCombinations(allowedCombinations): IBaseExecution<ComplexTypes.updateAllowedCombinationsResult>;
	usage(): ComplexTypes.authenticationStrengthUsage;
}
export interface authenticationStrengthPolicyCollection extends IBaseCollection<authenticationStrengthPolicy, authenticationStrengthPolicyOData & authenticationStrengthPolicyProps> {
    add(values?: any): IBaseExecution<authenticationStrengthPolicy>;
}
/*********************************************
* authenticationStrengthRoot
**********************************************/
export interface authenticationStrengthRoot extends authenticationStrengthRootProps, authenticationStrengthRootMethods { }
export interface authenticationStrengthRootProps extends  entityProps {
	combinations: EnumTypes.authenticationMethodModes[];
}
export interface authenticationStrengthRootMethods extends entityMethods {
	authenticationMethodModes(): authenticationMethodModeDetailCollection;
	authenticationMethodModes(id: string | number): IBaseQuery<authenticationMethodModeDetail> & authenticationMethodModeDetailMethods;
	policies(): authenticationStrengthPolicyCollection;
	policies(id: string | number): IBaseQuery<authenticationStrengthPolicy> & authenticationStrengthPolicyMethods;
}
export interface authenticationStrengthRootOData extends entityOData {
	authenticationMethodModes: IBaseResults<authenticationMethodModeDetail>;
	policies: IBaseResults<authenticationStrengthPolicy>;
}
/*********************************************
* authoredNote
**********************************************/
export interface authoredNote extends authoredNoteProps, authoredNoteMethods { }
export interface authoredNoteProps extends  entityProps {
	author: ComplexTypes.identity;
	content: ComplexTypes.itemBody;
	createdDateTime: any;
}
export interface authoredNoteMethods extends entityMethods {

}
export interface authoredNoteOData extends entityOData {

}
export interface authoredNoteCollection extends IBaseCollection<authoredNote, authoredNoteOData & authoredNoteProps> {
    add(values?: any): IBaseExecution<authoredNote>;
}
/*********************************************
* authorityTemplate
**********************************************/
export interface authorityTemplate extends authorityTemplateProps, authorityTemplateMethods { }
export interface authorityTemplateProps extends  filePlanDescriptorTemplateProps {

}
export interface authorityTemplateMethods extends filePlanDescriptorTemplateMethods {

}
export interface authorityTemplateOData extends filePlanDescriptorTemplateOData {

}
/*********************************************
* authorizationPolicy
**********************************************/
export interface authorizationPolicy extends authorizationPolicyProps, authorizationPolicyMethods { }
export interface authorizationPolicyProps extends  policyBaseProps {
	allowedToSignUpEmailBasedSubscriptions: boolean;
	allowedToUseSSPR: boolean;
	allowEmailVerifiedUsersToJoinOrganization: boolean;
	allowInvitesFrom: EnumTypes.allowInvitesFrom;
	allowUserConsentForRiskyApps: boolean;
	blockMsolPowerShell: boolean;
	defaultUserRolePermissions: ComplexTypes.defaultUserRolePermissions;
	guestUserRoleId: any;
}
export interface authorizationPolicyMethods extends policyBaseMethods {

}
export interface authorizationPolicyOData extends policyBaseOData {

}
/*********************************************
* azureCommunicationServicesUserConversationMember
**********************************************/
export interface azureCommunicationServicesUserConversationMember extends azureCommunicationServicesUserConversationMemberProps, azureCommunicationServicesUserConversationMemberMethods { }
export interface azureCommunicationServicesUserConversationMemberProps extends  conversationMemberProps {
	azureCommunicationServicesId: string;
}
export interface azureCommunicationServicesUserConversationMemberMethods extends conversationMemberMethods {

}
export interface azureCommunicationServicesUserConversationMemberOData extends conversationMemberOData {

}
/*********************************************
* azureUsage
**********************************************/
export interface azureUsage extends azureUsageProps, azureUsageMethods { }
export interface azureUsageProps extends  entityProps {

}
export interface azureUsageMethods extends entityMethods {
	billed(): IBaseQuery<billedUsage> & billedUsageMethods;
	unbilled(): IBaseQuery<unbilledUsage> & unbilledUsageMethods;
}
export interface azureUsageOData extends entityOData {
	billed: billedUsage;
	unbilled: unbilledUsage;
}
/*********************************************
* b2xIdentityUserFlow
**********************************************/
export interface b2xIdentityUserFlow extends b2xIdentityUserFlowProps, b2xIdentityUserFlowMethods { }
export interface b2xIdentityUserFlowProps extends  identityUserFlowProps {
	apiConnectorConfiguration: ComplexTypes.userFlowApiConnectorConfiguration;
}
export interface b2xIdentityUserFlowMethods extends identityUserFlowMethods {
	identityProviders(): identityProviderCollection;
	identityProviders(id: string | number): IBaseQuery<identityProvider> & identityProviderMethods;
	languages(): userFlowLanguageConfigurationCollection;
	languages(id: string | number): IBaseQuery<userFlowLanguageConfiguration> & userFlowLanguageConfigurationMethods;
	userAttributeAssignments(): identityUserFlowAttributeAssignmentCollection;
	userAttributeAssignments(id: string | number): IBaseQuery<identityUserFlowAttributeAssignment> & identityUserFlowAttributeAssignmentMethods;
	userFlowIdentityProviders(): identityProviderBaseCollection;
	userFlowIdentityProviders(id: string | number): IBaseQuery<identityProviderBase> & identityProviderBaseMethods;
}
export interface b2xIdentityUserFlowOData extends identityUserFlowOData {
	identityProviders: IBaseResults<identityProvider>;
	languages: IBaseResults<userFlowLanguageConfiguration>;
	userAttributeAssignments: IBaseResults<identityUserFlowAttributeAssignment>;
	userFlowIdentityProviders: IBaseResults<identityProviderBase>;
}
export interface b2xIdentityUserFlowCollection extends IBaseCollection<b2xIdentityUserFlow, b2xIdentityUserFlowOData & b2xIdentityUserFlowProps> {
    add(values?: any): IBaseExecution<b2xIdentityUserFlow>;
}
/*********************************************
* backupRestoreRoot
**********************************************/
export interface backupRestoreRoot extends backupRestoreRootProps, backupRestoreRootMethods { }
export interface backupRestoreRootProps extends  entityProps {
	serviceStatus: ComplexTypes.serviceStatus;
}
export interface backupRestoreRootMethods extends entityMethods {
	driveInclusionRules(): driveProtectionRuleCollection;
	driveInclusionRules(id: string | number): IBaseQuery<driveProtectionRule> & driveProtectionRuleMethods;
	driveProtectionUnits(): driveProtectionUnitCollection;
	driveProtectionUnits(id: string | number): IBaseQuery<driveProtectionUnit> & driveProtectionUnitMethods;
	exchangeProtectionPolicies(): exchangeProtectionPolicyCollection;
	exchangeProtectionPolicies(id: string | number): IBaseQuery<exchangeProtectionPolicy> & exchangeProtectionPolicyMethods;
	exchangeRestoreSessions(): exchangeRestoreSessionCollection;
	exchangeRestoreSessions(id: string | number): IBaseQuery<exchangeRestoreSession> & exchangeRestoreSessionMethods;
	mailboxInclusionRules(): mailboxProtectionRuleCollection;
	mailboxInclusionRules(id: string | number): IBaseQuery<mailboxProtectionRule> & mailboxProtectionRuleMethods;
	mailboxProtectionUnits(): mailboxProtectionUnitCollection;
	mailboxProtectionUnits(id: string | number): IBaseQuery<mailboxProtectionUnit> & mailboxProtectionUnitMethods;
	oneDriveForBusinessProtectionPolicies(): oneDriveForBusinessProtectionPolicyCollection;
	oneDriveForBusinessProtectionPolicies(id: string | number): IBaseQuery<oneDriveForBusinessProtectionPolicy> & oneDriveForBusinessProtectionPolicyMethods;
	oneDriveForBusinessRestoreSessions(): oneDriveForBusinessRestoreSessionCollection;
	oneDriveForBusinessRestoreSessions(id: string | number): IBaseQuery<oneDriveForBusinessRestoreSession> & oneDriveForBusinessRestoreSessionMethods;
	protectionPolicies(): protectionPolicyBaseCollection;
	protectionPolicies(id: string | number): IBaseQuery<protectionPolicyBase> & protectionPolicyBaseMethods;
	protectionUnits(): protectionUnitBaseCollection;
	protectionUnits(id: string | number): IBaseQuery<protectionUnitBase> & protectionUnitBaseMethods;
	restorePoints(): restorePointCollection;
	restorePoints(id: string | number): IBaseQuery<restorePoint> & restorePointMethods;
	restoreSessions(): restoreSessionBaseCollection;
	restoreSessions(id: string | number): IBaseQuery<restoreSessionBase> & restoreSessionBaseMethods;
	serviceApps(): serviceAppCollection;
	serviceApps(id: string | number): IBaseQuery<serviceApp> & serviceAppMethods;
	sharePointProtectionPolicies(): sharePointProtectionPolicyCollection;
	sharePointProtectionPolicies(id: string | number): IBaseQuery<sharePointProtectionPolicy> & sharePointProtectionPolicyMethods;
	sharePointRestoreSessions(): sharePointRestoreSessionCollection;
	sharePointRestoreSessions(id: string | number): IBaseQuery<sharePointRestoreSession> & sharePointRestoreSessionMethods;
	siteInclusionRules(): siteProtectionRuleCollection;
	siteInclusionRules(id: string | number): IBaseQuery<siteProtectionRule> & siteProtectionRuleMethods;
	siteProtectionUnits(): siteProtectionUnitCollection;
	siteProtectionUnits(id: string | number): IBaseQuery<siteProtectionUnit> & siteProtectionUnitMethods;
	enable(appOwnerTenantId): IBaseExecution<ComplexTypes.serviceStatus>;
}
export interface backupRestoreRootOData extends entityOData {
	driveInclusionRules: IBaseResults<driveProtectionRule>;
	driveProtectionUnits: IBaseResults<driveProtectionUnit>;
	exchangeProtectionPolicies: IBaseResults<exchangeProtectionPolicy>;
	exchangeRestoreSessions: IBaseResults<exchangeRestoreSession>;
	mailboxInclusionRules: IBaseResults<mailboxProtectionRule>;
	mailboxProtectionUnits: IBaseResults<mailboxProtectionUnit>;
	oneDriveForBusinessProtectionPolicies: IBaseResults<oneDriveForBusinessProtectionPolicy>;
	oneDriveForBusinessRestoreSessions: IBaseResults<oneDriveForBusinessRestoreSession>;
	protectionPolicies: IBaseResults<protectionPolicyBase>;
	protectionUnits: IBaseResults<protectionUnitBase>;
	restorePoints: IBaseResults<restorePoint>;
	restoreSessions: IBaseResults<restoreSessionBase>;
	serviceApps: IBaseResults<serviceApp>;
	sharePointProtectionPolicies: IBaseResults<sharePointProtectionPolicy>;
	sharePointRestoreSessions: IBaseResults<sharePointRestoreSession>;
	siteInclusionRules: IBaseResults<siteProtectionRule>;
	siteProtectionUnits: IBaseResults<siteProtectionUnit>;
	enable(appOwnerTenantId): IBaseExecution<ComplexTypes.serviceStatus>;
}
/*********************************************
* baseItem
**********************************************/
export interface baseItem extends baseItemProps, baseItemMethods { }
export interface baseItemProps extends ComplexTypes.itemReference , entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	eTag: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	name: string;
	webUrl: string;
}
export interface baseItemMethods extends entityMethods {
	createdByUser(): IBaseQuery<user> & userMethods;
	lastModifiedByUser(): IBaseQuery<user> & userMethods;
}
export interface baseItemOData extends entityOData {
	createdByUser: user;
	lastModifiedByUser: user;
}
export interface baseItemCollection extends IBaseCollection<baseItem, baseItemOData & baseItemProps> {
    add(values?: any): IBaseExecution<baseItem>;
}
/*********************************************
* baseItemVersion
**********************************************/
export interface baseItemVersion extends baseItemVersionProps, baseItemVersionMethods { }
export interface baseItemVersionProps extends  entityProps {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publication: ComplexTypes.publicationFacet;
}
export interface baseItemVersionMethods extends entityMethods {

}
export interface baseItemVersionOData extends entityOData {

}
/*********************************************
* baseSitePage
**********************************************/
export interface baseSitePage extends baseSitePageProps, baseSitePageMethods { }
export interface baseSitePageProps extends  baseItemProps {
	pageLayout: EnumTypes.pageLayoutType;
	publishingState: ComplexTypes.publicationFacet;
	title: string;
}
export interface baseSitePageMethods extends baseItemMethods {

}
export interface baseSitePageOData extends baseItemOData {

}
export interface baseSitePageCollection extends IBaseCollection<baseSitePage, baseSitePageOData & baseSitePageProps> {
    add(values?: any): IBaseExecution<baseSitePage>;
}
/*********************************************
* billedReconciliation
**********************************************/
export interface billedReconciliation extends billedReconciliationProps, billedReconciliationMethods { }
export interface billedReconciliationProps extends  entityProps {

}
export interface billedReconciliationMethods extends entityMethods {

}
export interface billedReconciliationOData extends entityOData {

}
/*********************************************
* billedUsage
**********************************************/
export interface billedUsage extends billedUsageProps, billedUsageMethods { }
export interface billedUsageProps extends  entityProps {

}
export interface billedUsageMethods extends entityMethods {

}
export interface billedUsageOData extends entityOData {

}
/*********************************************
* billing
**********************************************/
export interface billing extends billingProps, billingMethods { }
export interface billingProps extends  entityProps {

}
export interface billingMethods extends entityMethods {
	manifests(): IBaseCollection<manifest, entity & manifestOData & manifestProps>;
	manifests(id: string | number): IBaseQuery<manifest> & manifestMethods;
	operations(): IBaseCollection<operation, entity & operationOData & operationProps>;
	operations(id: string | number): IBaseQuery<operation> & operationMethods;
	reconciliation(): IBaseQuery<billingReconciliation> & billingReconciliationMethods;
	usage(): IBaseQuery<azureUsage> & azureUsageMethods;
}
export interface billingOData extends entityOData {
	manifests: IBaseResults<manifest>;
	operations: IBaseResults<operation>;
	reconciliation: billingReconciliation;
	usage: azureUsage;
}
/*********************************************
* billingReconciliation
**********************************************/
export interface billingReconciliation extends billingReconciliationProps, billingReconciliationMethods { }
export interface billingReconciliationProps extends  entityProps {

}
export interface billingReconciliationMethods extends entityMethods {
	billed(): IBaseQuery<billedReconciliation> & billedReconciliationMethods;
}
export interface billingReconciliationOData extends entityOData {
	billed: billedReconciliation;
}
/*********************************************
* bitlocker
**********************************************/
export interface bitlocker extends bitlockerProps, bitlockerMethods { }
export interface bitlockerProps extends  entityProps {

}
export interface bitlockerMethods extends entityMethods {
	recoveryKeys(): bitlockerRecoveryKeyCollection;
	recoveryKeys(id: string | number): IBaseQuery<bitlockerRecoveryKey> & bitlockerRecoveryKeyMethods;
}
export interface bitlockerOData extends entityOData {
	recoveryKeys: IBaseResults<bitlockerRecoveryKey>;
}
/*********************************************
* bitlockerRecoveryKey
**********************************************/
export interface bitlockerRecoveryKey extends bitlockerRecoveryKeyProps, bitlockerRecoveryKeyMethods { }
export interface bitlockerRecoveryKeyProps extends  entityProps {
	createdDateTime: any;
	deviceId: string;
	key: string;
	volumeType: EnumTypes.volumeType;
}
export interface bitlockerRecoveryKeyMethods extends entityMethods {

}
export interface bitlockerRecoveryKeyOData extends entityOData {

}
export interface bitlockerRecoveryKeyCollection extends IBaseCollection<bitlockerRecoveryKey, bitlockerRecoveryKeyOData & bitlockerRecoveryKeyProps> {
    add(values?: any): IBaseExecution<bitlockerRecoveryKey>;
}
/*********************************************
* bookingAppointment
**********************************************/
export interface bookingAppointment extends bookingAppointmentProps, bookingAppointmentMethods { }
export interface bookingAppointmentProps extends  entityProps {
	additionalInformation: string;
	anonymousJoinWebUrl: string;
	appointmentLabel: string;
	createdDateTime: any;
	customerEmailAddress: string;
	customerName: string;
	customerNotes: string;
	customerPhone: string;
	customers: ComplexTypes.bookingCustomerInformationBase[];
	customerTimeZone: string;
	duration: number;
	endDateTime: ComplexTypes.dateTimeTimeZone;
	filledAttendeesCount: number;
	isCustomerAllowedToManageBooking: boolean;
	isLocationOnline: boolean;
	joinWebUrl: string;
	lastUpdatedDateTime: any;
	maximumAttendeesCount: number;
	optOutOfCustomerEmail: boolean;
	postBuffer: number;
	preBuffer: number;
	price: number;
	priceType: EnumTypes.bookingPriceType;
	reminders: ComplexTypes.bookingReminder[];
	selfServiceAppointmentId: string;
	serviceId: string;
	serviceLocation: ComplexTypes.location;
	serviceName: string;
	serviceNotes: string;
	smsNotificationsEnabled: boolean;
	staffMemberIds: Array<string>[];
	startDateTime: ComplexTypes.dateTimeTimeZone;
}
export interface bookingAppointmentMethods extends entityMethods {

}
export interface bookingAppointmentOData extends entityOData {

}
export interface bookingAppointmentCollection extends IBaseCollection<bookingAppointment, bookingAppointmentOData & bookingAppointmentProps> {
    add(values?: any): IBaseExecution<bookingAppointment>;
}
/*********************************************
* bookingBusiness
**********************************************/
export interface bookingBusiness extends bookingBusinessProps, bookingBusinessMethods { }
export interface bookingBusinessProps extends  entityProps {
	address: ComplexTypes.physicalAddress;
	bookingPageSettings: ComplexTypes.bookingPageSettings;
	businessHours: ComplexTypes.bookingWorkHours[];
	businessType: string;
	createdDateTime: any;
	defaultCurrencyIso: string;
	displayName: string;
	email: string;
	isPublished: boolean;
	languageTag: string;
	lastUpdatedDateTime: any;
	phone: string;
	publicUrl: string;
	schedulingPolicy: ComplexTypes.bookingSchedulingPolicy;
	webSiteUrl: string;
}
export interface bookingBusinessMethods extends entityMethods {
	appointments(): bookingAppointmentCollection;
	appointments(id: string | number): IBaseQuery<bookingAppointment> & bookingAppointmentMethods;
	calendarView(): bookingAppointmentCollection;
	calendarView(id: string | number): IBaseQuery<bookingAppointment> & bookingAppointmentMethods;
	customers(): bookingCustomerBaseCollection;
	customers(id: string | number): IBaseQuery<bookingCustomerBase> & bookingCustomerBaseMethods;
	customQuestions(): bookingCustomQuestionCollection;
	customQuestions(id: string | number): IBaseQuery<bookingCustomQuestion> & bookingCustomQuestionMethods;
	services(): bookingServiceCollection;
	services(id: string | number): IBaseQuery<bookingService> & bookingServiceMethods;
	staffMembers(): bookingStaffMemberBaseCollection;
	staffMembers(id: string | number): IBaseQuery<bookingStaffMemberBase> & bookingStaffMemberBaseMethods;
}
export interface bookingBusinessOData extends entityOData {
	appointments: IBaseResults<bookingAppointment>;
	calendarView: IBaseResults<bookingAppointment>;
	customers: IBaseResults<bookingCustomerBase>;
	customQuestions: IBaseResults<bookingCustomQuestion>;
	services: IBaseResults<bookingService>;
	staffMembers: IBaseResults<bookingStaffMemberBase>;
}
export interface bookingBusinessCollection extends IBaseCollection<bookingBusiness, bookingBusinessOData & bookingBusinessProps> {
    add(values?: any): IBaseExecution<bookingBusiness>;
}
/*********************************************
* bookingCurrency
**********************************************/
export interface bookingCurrency extends bookingCurrencyProps, bookingCurrencyMethods { }
export interface bookingCurrencyProps extends  entityProps {
	symbol: string;
}
export interface bookingCurrencyMethods extends entityMethods {

}
export interface bookingCurrencyOData extends entityOData {

}
export interface bookingCurrencyCollection extends IBaseCollection<bookingCurrency, bookingCurrencyOData & bookingCurrencyProps> {
    add(values?: any): IBaseExecution<bookingCurrency>;
}
/*********************************************
* bookingCustomQuestion
**********************************************/
export interface bookingCustomQuestion extends bookingCustomQuestionProps, bookingCustomQuestionMethods { }
export interface bookingCustomQuestionProps extends  entityProps {
	answerInputType: EnumTypes.answerInputType;
	answerOptions: Array<string>[];
	createdDateTime: any;
	displayName: string;
	lastUpdatedDateTime: any;
}
export interface bookingCustomQuestionMethods extends entityMethods {

}
export interface bookingCustomQuestionOData extends entityOData {

}
export interface bookingCustomQuestionCollection extends IBaseCollection<bookingCustomQuestion, bookingCustomQuestionOData & bookingCustomQuestionProps> {
    add(values?: any): IBaseExecution<bookingCustomQuestion>;
}
/*********************************************
* bookingCustomer
**********************************************/
export interface bookingCustomer extends bookingCustomerProps, bookingCustomerMethods { }
export interface bookingCustomerProps extends  bookingCustomerBaseProps {
	addresses: ComplexTypes.physicalAddress[];
	createdDateTime: any;
	displayName: string;
	emailAddress: string;
	lastUpdatedDateTime: any;
	phones: ComplexTypes.phone[];
}
export interface bookingCustomerMethods extends bookingCustomerBaseMethods {

}
export interface bookingCustomerOData extends bookingCustomerBaseOData {

}
/*********************************************
* bookingCustomerBase
**********************************************/
export interface bookingCustomerBase extends bookingCustomerBaseProps, bookingCustomerBaseMethods { }
export interface bookingCustomerBaseProps extends  entityProps {

}
export interface bookingCustomerBaseMethods extends entityMethods {

}
export interface bookingCustomerBaseOData extends entityOData {

}
export interface bookingCustomerBaseCollection extends IBaseCollection<bookingCustomerBase, bookingCustomerBaseOData & bookingCustomerBaseProps> {
    add(values?: any): IBaseExecution<bookingCustomerBase>;
}
/*********************************************
* bookingService
**********************************************/
export interface bookingService extends bookingServiceProps, bookingServiceMethods { }
export interface bookingServiceProps extends  entityProps {
	additionalInformation: string;
	createdDateTime: any;
	customQuestions: ComplexTypes.bookingQuestionAssignment[];
	defaultDuration: number;
	defaultLocation: ComplexTypes.location;
	defaultPrice: number;
	defaultPriceType: EnumTypes.bookingPriceType;
	defaultReminders: ComplexTypes.bookingReminder[];
	description: string;
	displayName: string;
	isAnonymousJoinEnabled: boolean;
	isCustomerAllowedToManageBooking: boolean;
	isHiddenFromCustomers: boolean;
	isLocationOnline: boolean;
	languageTag: string;
	lastUpdatedDateTime: any;
	maximumAttendeesCount: number;
	notes: string;
	postBuffer: number;
	preBuffer: number;
	schedulingPolicy: ComplexTypes.bookingSchedulingPolicy;
	smsNotificationsEnabled: boolean;
	staffMemberIds: Array<string>[];
	webUrl: string;
}
export interface bookingServiceMethods extends entityMethods {

}
export interface bookingServiceOData extends entityOData {

}
export interface bookingServiceCollection extends IBaseCollection<bookingService, bookingServiceOData & bookingServiceProps> {
    add(values?: any): IBaseExecution<bookingService>;
}
/*********************************************
* bookingStaffMember
**********************************************/
export interface bookingStaffMember extends bookingStaffMemberProps, bookingStaffMemberMethods { }
export interface bookingStaffMemberProps extends  bookingStaffMemberBaseProps {
	availabilityIsAffectedByPersonalCalendar: boolean;
	createdDateTime: any;
	displayName: string;
	emailAddress: string;
	isEmailNotificationEnabled: boolean;
	lastUpdatedDateTime: any;
	membershipStatus: EnumTypes.bookingStaffMembershipStatus;
	role: EnumTypes.bookingStaffRole;
	timeZone: string;
	useBusinessHours: boolean;
	workingHours: ComplexTypes.bookingWorkHours[];
}
export interface bookingStaffMemberMethods extends bookingStaffMemberBaseMethods {

}
export interface bookingStaffMemberOData extends bookingStaffMemberBaseOData {

}
/*********************************************
* bookingStaffMemberBase
**********************************************/
export interface bookingStaffMemberBase extends bookingStaffMemberBaseProps, bookingStaffMemberBaseMethods { }
export interface bookingStaffMemberBaseProps extends  entityProps {

}
export interface bookingStaffMemberBaseMethods extends entityMethods {

}
export interface bookingStaffMemberBaseOData extends entityOData {

}
export interface bookingStaffMemberBaseCollection extends IBaseCollection<bookingStaffMemberBase, bookingStaffMemberBaseOData & bookingStaffMemberBaseProps> {
    add(values?: any): IBaseExecution<bookingStaffMemberBase>;
}
/*********************************************
* bookmark
**********************************************/
export interface bookmark extends bookmarkProps, bookmarkMethods { }
export interface bookmarkProps extends  searchAnswerProps {
	availabilityEndDateTime: any;
	availabilityStartDateTime: any;
	categories: Array<string>[];
	groupIds: Array<string>[];
	isSuggested: boolean;
	keywords: ComplexTypes.answerKeyword;
	languageTags: Array<string>[];
	platforms: EnumTypes.devicePlatformType[];
	powerAppIds: Array<string>[];
	state: EnumTypes.answerState;
	targetedVariations: ComplexTypes.answerVariant[];
}
export interface bookmarkMethods extends searchAnswerMethods {

}
export interface bookmarkOData extends searchAnswerOData {

}
/*********************************************
* browserSharedCookie
**********************************************/
export interface browserSharedCookie extends browserSharedCookieProps, browserSharedCookieMethods { }
export interface browserSharedCookieProps extends  entityProps {
	comment: string;
	createdDateTime: any;
	deletedDateTime: any;
	displayName: string;
	history: ComplexTypes.browserSharedCookieHistory[];
	hostOnly: boolean;
	hostOrDomain: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	path: string;
	sourceEnvironment: EnumTypes.browserSharedCookieSourceEnvironment;
	status: EnumTypes.browserSharedCookieStatus;
}
export interface browserSharedCookieMethods extends entityMethods {

}
export interface browserSharedCookieOData extends entityOData {

}
export interface browserSharedCookieCollection extends IBaseCollection<browserSharedCookie, browserSharedCookieOData & browserSharedCookieProps> {
    add(values?: any): IBaseExecution<browserSharedCookie>;
}
/*********************************************
* browserSite
**********************************************/
export interface browserSite extends browserSiteProps, browserSiteMethods { }
export interface browserSiteProps extends  entityProps {
	allowRedirect: boolean;
	comment: string;
	compatibilityMode: EnumTypes.browserSiteCompatibilityMode;
	createdDateTime: any;
	deletedDateTime: any;
	history: ComplexTypes.browserSiteHistory[];
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	mergeType: EnumTypes.browserSiteMergeType;
	status: EnumTypes.browserSiteStatus;
	targetEnvironment: EnumTypes.browserSiteTargetEnvironment;
	webUrl: string;
}
export interface browserSiteMethods extends entityMethods {

}
export interface browserSiteOData extends entityOData {

}
export interface browserSiteCollection extends IBaseCollection<browserSite, browserSiteOData & browserSiteProps> {
    add(values?: any): IBaseExecution<browserSite>;
}
/*********************************************
* browserSiteList
**********************************************/
export interface browserSiteList extends browserSiteListProps, browserSiteListMethods { }
export interface browserSiteListProps extends  entityProps {
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publishedBy: ComplexTypes.identitySet;
	publishedDateTime: any;
	revision: string;
	status: EnumTypes.browserSiteListStatus;
}
export interface browserSiteListMethods extends entityMethods {
	sharedCookies(): browserSharedCookieCollection;
	sharedCookies(id: string | number): IBaseQuery<browserSharedCookie> & browserSharedCookieMethods;
	sites(): browserSiteCollection;
	sites(id: string | number): IBaseQuery<browserSite> & browserSiteMethods;
	publish(revision, sites, sharedCookies): IBaseExecution<browserSiteList>;
}
export interface browserSiteListOData extends entityOData {
	sharedCookies: IBaseResults<browserSharedCookie>;
	sites: IBaseResults<browserSite>;
	publish(revision, sites, sharedCookies): IBaseExecution<browserSiteList>;
}
export interface browserSiteListCollection extends IBaseCollection<browserSiteList, browserSiteListOData & browserSiteListProps> {
    add(values?: any): IBaseExecution<browserSiteList>;
}
/*********************************************
* builtInIdentityProvider
**********************************************/
export interface builtInIdentityProvider extends builtInIdentityProviderProps, builtInIdentityProviderMethods { }
export interface builtInIdentityProviderProps extends  identityProviderBaseProps {
	identityProviderType: string;
}
export interface builtInIdentityProviderMethods extends identityProviderBaseMethods {

}
export interface builtInIdentityProviderOData extends identityProviderBaseOData {

}
/*********************************************
* bulkUpload
**********************************************/
export interface bulkUpload extends bulkUploadProps, bulkUploadMethods { }
export interface bulkUploadProps extends  entityProps {

}
export interface bulkUploadMethods extends entityMethods {

}
export interface bulkUploadOData extends entityOData {

}
/*********************************************
* calendar
**********************************************/
export interface calendar extends calendarProps, calendarMethods { }
export interface calendarProps extends  entityProps {
	allowedOnlineMeetingProviders: EnumTypes.onlineMeetingProviderType[];
	canEdit: boolean;
	canShare: boolean;
	canViewPrivateItems: boolean;
	changeKey: string;
	color: EnumTypes.calendarColor;
	defaultOnlineMeetingProvider: EnumTypes.onlineMeetingProviderType;
	hexColor: string;
	isDefaultCalendar: boolean;
	isRemovable: boolean;
	isTallyingResponses: boolean;
	name: string;
	owner: ComplexTypes.emailAddress;
}
export interface calendarMethods extends entityMethods {
	calendarPermissions(): calendarPermissionCollection;
	calendarPermissions(id: string | number): IBaseQuery<calendarPermission> & calendarPermissionMethods;
	calendarView(): eventCollection;
	calendarView(id: string | number): IBaseQuery<event> & eventMethods;
	events(): eventCollection;
	events(id: string | number): IBaseQuery<event> & eventMethods;
	multiValueExtendedProperties(): multiValueLegacyExtendedPropertyCollection;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): singleValueLegacyExtendedPropertyCollection;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
	getSchedule(Schedules, EndTime, StartTime, AvailabilityViewInterval): IBaseExecution<ComplexTypes.scheduleInformation[]>;
}
export interface calendarOData extends entityOData {
	calendarPermissions: IBaseResults<calendarPermission>;
	calendarView: IBaseResults<event>;
	events: IBaseResults<event>;
	multiValueExtendedProperties: IBaseResults<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties: IBaseResults<singleValueLegacyExtendedProperty>;
	getSchedule(Schedules, EndTime, StartTime, AvailabilityViewInterval): IBaseExecution<ComplexTypes.scheduleInformation[]>;
}
export interface calendarCollection extends IBaseCollection<calendar, calendarOData & calendarProps> {
    add(values?: any): IBaseExecution<calendar>;
}
/*********************************************
* calendarGroup
**********************************************/
export interface calendarGroup extends calendarGroupProps, calendarGroupMethods { }
export interface calendarGroupProps extends  entityProps {
	changeKey: string;
	classId: any;
	name: string;
}
export interface calendarGroupMethods extends entityMethods {
	calendars(): calendarCollection;
	calendars(id: string | number): IBaseQuery<calendar> & calendarMethods;
}
export interface calendarGroupOData extends entityOData {
	calendars: IBaseResults<calendar>;
}
export interface calendarGroupCollection extends IBaseCollection<calendarGroup, calendarGroupOData & calendarGroupProps> {
    add(values?: any): IBaseExecution<calendarGroup>;
}
/*********************************************
* calendarPermission
**********************************************/
export interface calendarPermission extends calendarPermissionProps, calendarPermissionMethods { }
export interface calendarPermissionProps extends  entityProps {
	allowedRoles: EnumTypes.calendarRoleType[];
	emailAddress: ComplexTypes.emailAddress;
	isInsideOrganization: boolean;
	isRemovable: boolean;
	role: EnumTypes.calendarRoleType;
}
export interface calendarPermissionMethods extends entityMethods {

}
export interface calendarPermissionOData extends entityOData {

}
export interface calendarPermissionCollection extends IBaseCollection<calendarPermission, calendarPermissionOData & calendarPermissionProps> {
    add(values?: any): IBaseExecution<calendarPermission>;
}
/*********************************************
* calendarSharingMessage
**********************************************/
export interface calendarSharingMessage extends calendarSharingMessageProps, calendarSharingMessageMethods { }
export interface calendarSharingMessageProps extends  messageProps {
	canAccept: boolean;
	sharingMessageAction: ComplexTypes.calendarSharingMessageAction;
	sharingMessageActions: ComplexTypes.calendarSharingMessageAction[];
	suggestedCalendarName: string;
}
export interface calendarSharingMessageMethods extends messageMethods {
	accept(): IBaseExecution<calendar>;
}
export interface calendarSharingMessageOData extends messageOData {
	accept(): IBaseExecution<calendar>;
}
/*********************************************
* call
**********************************************/
export interface call extends callProps, callMethods { }
export interface callProps extends  entityProps {
	callbackUri: string;
	callChainId: string;
	callOptions: ComplexTypes.callOptions;
	callRoutes: ComplexTypes.callRoute[];
	chatInfo: ComplexTypes.chatInfo;
	direction: EnumTypes.callDirection;
	incomingContext: ComplexTypes.incomingContext;
	mediaConfig: ComplexTypes.mediaConfig;
	mediaState: ComplexTypes.callMediaState;
	meetingInfo: ComplexTypes.meetingInfo;
	myParticipantId: string;
	requestedModalities: EnumTypes.modality[];
	resultInfo: ComplexTypes.resultInfo;
	source: ComplexTypes.participantInfo;
	state: EnumTypes.callState;
	subject: string;
	targets: ComplexTypes.invitationParticipantInfo[];
	tenantId: string;
	toneInfo: ComplexTypes.toneInfo;
	transcription: ComplexTypes.callTranscriptionInfo;
}
export interface callMethods extends entityMethods {
	audioRoutingGroups(): audioRoutingGroupCollection;
	audioRoutingGroups(id: string | number): IBaseQuery<audioRoutingGroup> & audioRoutingGroupMethods;
	contentSharingSessions(): contentSharingSessionCollection;
	contentSharingSessions(id: string | number): IBaseQuery<contentSharingSession> & contentSharingSessionMethods;
	operations(): commsOperationCollection;
	operations(id: string | number): IBaseQuery<commsOperation> & commsOperationMethods;
	participants(): participantCollection;
	participants(id: string | number): IBaseQuery<participant> & participantMethods;
	redirect(targets, timeout, callbackUri): IBaseExecution<void>;
	addLargeGalleryView(clientContext): IBaseExecution<addLargeGalleryViewOperation>;
	answer(callbackUri, mediaConfig, acceptedModalities, participantCapacity, callOptions): IBaseExecution<void>;
	cancelMediaProcessing(clientContext): IBaseExecution<cancelMediaProcessingOperation>;
	changeScreenSharingRole(role): IBaseExecution<void>;
	keepAlive(): IBaseExecution<void>;
	mute(clientContext): IBaseExecution<muteParticipantOperation>;
	playPrompt(prompts, clientContext): IBaseExecution<playPromptOperation>;
	recordResponse(prompts, bargeInAllowed, initialSilenceTimeoutInSeconds, maxSilenceTimeoutInSeconds, maxRecordDurationInSeconds, playBeep, stopTones, clientContext): IBaseExecution<recordOperation>;
	reject(reason, callbackUri): IBaseExecution<void>;
	sendDtmfTones(tones, delayBetweenTonesMs, clientContext): IBaseExecution<sendDtmfTonesOperation>;
	subscribeToTone(clientContext): IBaseExecution<subscribeToToneOperation>;
	transfer(transferTarget, transferee): IBaseExecution<void>;
	unmute(clientContext): IBaseExecution<unmuteParticipantOperation>;
	updateRecordingStatus(status, clientContext): IBaseExecution<updateRecordingStatusOperation>;
}
export interface callOData extends entityOData {
	audioRoutingGroups: IBaseResults<audioRoutingGroup>;
	contentSharingSessions: IBaseResults<contentSharingSession>;
	operations: IBaseResults<commsOperation>;
	participants: IBaseResults<participant>;
	redirect(targets, timeout, callbackUri): IBaseExecution<void>;
	addLargeGalleryView(clientContext): IBaseExecution<addLargeGalleryViewOperation>;
	answer(callbackUri, mediaConfig, acceptedModalities, participantCapacity, callOptions): IBaseExecution<void>;
	cancelMediaProcessing(clientContext): IBaseExecution<cancelMediaProcessingOperation>;
	changeScreenSharingRole(role): IBaseExecution<void>;
	keepAlive(): IBaseExecution<void>;
	mute(clientContext): IBaseExecution<muteParticipantOperation>;
	playPrompt(prompts, clientContext): IBaseExecution<playPromptOperation>;
	recordResponse(prompts, bargeInAllowed, initialSilenceTimeoutInSeconds, maxSilenceTimeoutInSeconds, maxRecordDurationInSeconds, playBeep, stopTones, clientContext): IBaseExecution<recordOperation>;
	reject(reason, callbackUri): IBaseExecution<void>;
	sendDtmfTones(tones, delayBetweenTonesMs, clientContext): IBaseExecution<sendDtmfTonesOperation>;
	subscribeToTone(clientContext): IBaseExecution<subscribeToToneOperation>;
	transfer(transferTarget, transferee): IBaseExecution<void>;
	unmute(clientContext): IBaseExecution<unmuteParticipantOperation>;
	updateRecordingStatus(status, clientContext): IBaseExecution<updateRecordingStatusOperation>;
}
export interface callCollection extends IBaseCollection<call, callOData & callProps> {
    add(values?: any): IBaseExecution<call>;
}
/*********************************************
* callRecord
**********************************************/
export interface callRecord extends callRecordProps, callRecordMethods { }
export interface callRecordProps extends  entityProps {
	endDateTime: any;
	joinWebUrl: string;
	lastModifiedDateTime: any;
	modalities: EnumTypes.modality[];
	organizer: ComplexTypes.identitySet;
	participants: ComplexTypes.identitySet[];
	startDateTime: any;
	type: EnumTypes.callType;
	version: number;
}
export interface callRecordMethods extends entityMethods {
	organizer_v2(): IBaseQuery<organizer> & organizerMethods;
	participants_v2(): participantCollection;
	participants_v2(id: string | number): IBaseQuery<participant> & participantMethods;
	sessions(): IBaseCollection<session, entity & sessionOData & sessionProps>;
	sessions(id: string | number): IBaseQuery<session> & sessionMethods;
}
export interface callRecordOData extends entityOData {
	organizer_v2: organizer;
	participants_v2: IBaseResults<participant>;
	sessions: IBaseResults<session>;
}
/*********************************************
* callRecording
**********************************************/
export interface callRecording extends callRecordingProps, callRecordingMethods { }
export interface callRecordingProps extends  entityProps {
	callId: string;
	content: any;
	contentCorrelationId: string;
	createdDateTime: any;
	endDateTime: any;
	meetingId: string;
	meetingOrganizer: ComplexTypes.identitySet;
	recordingContentUrl: string;
}
export interface callRecordingMethods extends entityMethods {

}
export interface callRecordingOData extends entityOData {

}
export interface callRecordingCollection extends IBaseCollection<callRecording, callRecordingOData & callRecordingProps> {
    add(values?: any): IBaseExecution<callRecording>;
}
/*********************************************
* callTranscript
**********************************************/
export interface callTranscript extends callTranscriptProps, callTranscriptMethods { }
export interface callTranscriptProps extends  entityProps {
	callId: string;
	content: any;
	contentCorrelationId: string;
	createdDateTime: any;
	endDateTime: any;
	meetingId: string;
	meetingOrganizer: ComplexTypes.identitySet;
	metadataContent: any;
	transcriptContentUrl: string;
}
export interface callTranscriptMethods extends entityMethods {

}
export interface callTranscriptOData extends entityOData {

}
export interface callTranscriptCollection extends IBaseCollection<callTranscript, callTranscriptOData & callTranscriptProps> {
    add(values?: any): IBaseExecution<callTranscript>;
}
/*********************************************
* cancelMediaProcessingOperation
**********************************************/
export interface cancelMediaProcessingOperation extends cancelMediaProcessingOperationProps, cancelMediaProcessingOperationMethods { }
export interface cancelMediaProcessingOperationProps extends  commsOperationProps {

}
export interface cancelMediaProcessingOperationMethods extends commsOperationMethods {

}
export interface cancelMediaProcessingOperationOData extends commsOperationOData {

}
/*********************************************
* canvasLayout
**********************************************/
export interface canvasLayout extends canvasLayoutProps, canvasLayoutMethods { }
export interface canvasLayoutProps extends  entityProps {

}
export interface canvasLayoutMethods extends entityMethods {
	horizontalSections(): horizontalSectionCollection;
	horizontalSections(id: string | number): IBaseQuery<horizontalSection> & horizontalSectionMethods;
	verticalSection(): IBaseQuery<verticalSection> & verticalSectionMethods;
}
export interface canvasLayoutOData extends entityOData {
	horizontalSections: IBaseResults<horizontalSection>;
	verticalSection: verticalSection;
}
/*********************************************
* caseOperation
**********************************************/
export interface caseOperation extends caseOperationProps, caseOperationMethods { }
export interface caseOperationProps extends  entityProps {
	action: EnumTypes.caseAction;
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	percentProgress: number;
	resultInfo: ComplexTypes.resultInfo;
	status: EnumTypes.caseOperationStatus;
}
export interface caseOperationMethods extends entityMethods {

}
export interface caseOperationOData extends entityOData {

}
/*********************************************
* casesRoot
**********************************************/
export interface casesRoot extends casesRootProps, casesRootMethods { }
export interface casesRootProps extends  entityProps {

}
export interface casesRootMethods extends entityMethods {
	ediscoveryCases(): IBaseCollection<ediscoveryCase, entity & ediscoveryCaseOData & ediscoveryCaseProps>;
	ediscoveryCases(id: string | number): IBaseQuery<ediscoveryCase> & ediscoveryCaseMethods;
}
export interface casesRootOData extends entityOData {
	ediscoveryCases: IBaseResults<ediscoveryCase>;
}
/*********************************************
* categoryTemplate
**********************************************/
export interface categoryTemplate extends categoryTemplateProps, categoryTemplateMethods { }
export interface categoryTemplateProps extends  filePlanDescriptorTemplateProps {

}
export interface categoryTemplateMethods extends filePlanDescriptorTemplateMethods {
	subcategories(): IBaseCollection<subcategoryTemplate, filePlanDescriptorTemplate & subcategoryTemplateOData & subcategoryTemplateProps>;
	subcategories(id: string | number): IBaseQuery<subcategoryTemplate> & subcategoryTemplateMethods;
}
export interface categoryTemplateOData extends filePlanDescriptorTemplateOData {
	subcategories: IBaseResults<subcategoryTemplate>;
}
/*********************************************
* certificateBasedAuthConfiguration
**********************************************/
export interface certificateBasedAuthConfiguration extends certificateBasedAuthConfigurationProps, certificateBasedAuthConfigurationMethods { }
export interface certificateBasedAuthConfigurationProps extends  entityProps {
	certificateAuthorities: ComplexTypes.certificateAuthority[];
}
export interface certificateBasedAuthConfigurationMethods extends entityMethods {

}
export interface certificateBasedAuthConfigurationOData extends entityOData {

}
export interface certificateBasedAuthConfigurationCollection extends IBaseCollection<certificateBasedAuthConfiguration, certificateBasedAuthConfigurationOData & certificateBasedAuthConfigurationProps> {
    add(values?: any): IBaseExecution<certificateBasedAuthConfiguration>;
}
/*********************************************
* changeTrackedEntity
**********************************************/
export interface changeTrackedEntity extends changeTrackedEntityProps, changeTrackedEntityMethods { }
export interface changeTrackedEntityProps extends  entityProps {
	createdDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface changeTrackedEntityMethods extends entityMethods {

}
export interface changeTrackedEntityOData extends entityOData {

}
/*********************************************
* channel
**********************************************/
export interface channel extends channelProps, channelMethods { }
export interface channelProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	email: string;
	isArchived: boolean;
	isFavoriteByDefault: boolean;
	membershipType: EnumTypes.channelMembershipType;
	summary: ComplexTypes.channelSummary;
	tenantId: string;
	webUrl: string;
}
export interface channelMethods extends entityMethods {
	filesFolder(): IBaseQuery<driveItem> & driveItemMethods;
	members(): conversationMemberCollection;
	members(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
	messages(): chatMessageCollection;
	messages(id: string | number): IBaseQuery<chatMessage> & chatMessageMethods;
	sharedWithTeams(): sharedWithChannelTeamInfoCollection;
	sharedWithTeams(id: string | number): IBaseQuery<sharedWithChannelTeamInfo> & sharedWithChannelTeamInfoMethods;
	tabs(): teamsTabCollection;
	tabs(id: string | number): IBaseQuery<teamsTab> & teamsTabMethods;
	archive(shouldSetSpoSiteReadOnlyForMembers): IBaseExecution<void>;
	unarchive(): IBaseExecution<void>;
	completeMigration(): IBaseExecution<void>;
	provisionEmail(): IBaseExecution<ComplexTypes.provisionChannelEmailResult>;
	removeEmail(): IBaseExecution<void>;
	doesUserHaveAccess(userId, tenantId, userPrincipalName): boolean;
}
export interface channelOData extends entityOData {
	filesFolder: driveItem;
	members: IBaseResults<conversationMember>;
	messages: IBaseResults<chatMessage>;
	sharedWithTeams: IBaseResults<sharedWithChannelTeamInfo>;
	tabs: IBaseResults<teamsTab>;
	archive(shouldSetSpoSiteReadOnlyForMembers): IBaseExecution<void>;
	unarchive(): IBaseExecution<void>;
	completeMigration(): IBaseExecution<void>;
	provisionEmail(): IBaseExecution<ComplexTypes.provisionChannelEmailResult>;
	removeEmail(): IBaseExecution<void>;
	doesUserHaveAccess(userId, tenantId, userPrincipalName): boolean;
}
export interface channelCollection extends IBaseCollection<channel, channelOData & channelProps> {
    add(values?: any): IBaseExecution<channel>;
}
/*********************************************
* chat
**********************************************/
export interface chat extends chatProps, chatMethods { }
export interface chatProps extends  entityProps {
	chatType: EnumTypes.chatType;
	createdDateTime: any;
	lastUpdatedDateTime: any;
	onlineMeetingInfo: ComplexTypes.teamworkOnlineMeetingInfo;
	tenantId: string;
	topic: string;
	viewpoint: ComplexTypes.chatViewpoint;
	webUrl: string;
}
export interface chatMethods extends entityMethods {
	installedApps(): teamsAppInstallationCollection;
	installedApps(id: string | number): IBaseQuery<teamsAppInstallation> & teamsAppInstallationMethods;
	lastMessagePreview(): IBaseQuery<chatMessageInfo> & chatMessageInfoMethods;
	members(): conversationMemberCollection;
	members(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
	messages(): chatMessageCollection;
	messages(id: string | number): IBaseQuery<chatMessage> & chatMessageMethods;
	permissionGrants(): resourceSpecificPermissionGrantCollection;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant> & resourceSpecificPermissionGrantMethods;
	pinnedMessages(): pinnedChatMessageInfoCollection;
	pinnedMessages(id: string | number): IBaseQuery<pinnedChatMessageInfo> & pinnedChatMessageInfoMethods;
	tabs(): teamsTabCollection;
	tabs(id: string | number): IBaseQuery<teamsTab> & teamsTabMethods;
	sendActivityNotification(topic, activityType, chainId, previewText, teamsAppId, templateParameters, recipient): IBaseExecution<void>;
	hideForUser(user): IBaseExecution<void>;
	markChatReadForUser(user): IBaseExecution<void>;
	markChatUnreadForUser(user, lastMessageReadDateTime): IBaseExecution<void>;
	unhideForUser(user): IBaseExecution<void>;
}
export interface chatOData extends entityOData {
	installedApps: IBaseResults<teamsAppInstallation>;
	lastMessagePreview: chatMessageInfo;
	members: IBaseResults<conversationMember>;
	messages: IBaseResults<chatMessage>;
	permissionGrants: IBaseResults<resourceSpecificPermissionGrant>;
	pinnedMessages: IBaseResults<pinnedChatMessageInfo>;
	tabs: IBaseResults<teamsTab>;
	sendActivityNotification(topic, activityType, chainId, previewText, teamsAppId, templateParameters, recipient): IBaseExecution<void>;
	hideForUser(user): IBaseExecution<void>;
	markChatReadForUser(user): IBaseExecution<void>;
	markChatUnreadForUser(user, lastMessageReadDateTime): IBaseExecution<void>;
	unhideForUser(user): IBaseExecution<void>;
}
export interface chatCollection extends IBaseCollection<chat, chatOData & chatProps> {
    add(values?: any): IBaseExecution<chat>;
}
/*********************************************
* chatMessage
**********************************************/
export interface chatMessage extends chatMessageProps, chatMessageMethods { }
export interface chatMessageProps extends  entityProps {
	attachments: ComplexTypes.chatMessageAttachment[];
	body: ComplexTypes.itemBody;
	channelIdentity: ComplexTypes.channelIdentity;
	chatId: string;
	createdDateTime: any;
	deletedDateTime: any;
	etag: string;
	eventDetail: ComplexTypes.eventMessageDetail;
	from: ComplexTypes.chatMessageFromIdentitySet;
	importance: EnumTypes.chatMessageImportance;
	lastEditedDateTime: any;
	lastModifiedDateTime: any;
	locale: string;
	mentions: ComplexTypes.chatMessageMention[];
	messageHistory: ComplexTypes.chatMessageHistoryItem[];
	messageType: EnumTypes.chatMessageType;
	policyViolation: ComplexTypes.chatMessagePolicyViolation;
	reactions: ComplexTypes.chatMessageReaction[];
	replyToId: string;
	subject: string;
	summary: string;
	webUrl: string;
}
export interface chatMessageMethods extends entityMethods {
	hostedContents(): chatMessageHostedContentCollection;
	hostedContents(id: string | number): IBaseQuery<chatMessageHostedContent> & chatMessageHostedContentMethods;
	replies(): chatMessageCollection;
	replies(id: string | number): IBaseQuery<chatMessage> & chatMessageMethods;
	setReaction(reactionType): IBaseExecution<void>;
	softDelete(): IBaseExecution<void>;
	undoSoftDelete(): IBaseExecution<void>;
	unsetReaction(reactionType): IBaseExecution<void>;
}
export interface chatMessageOData extends entityOData {
	hostedContents: IBaseResults<chatMessageHostedContent>;
	replies: IBaseResults<chatMessage>;
	setReaction(reactionType): IBaseExecution<void>;
	softDelete(): IBaseExecution<void>;
	undoSoftDelete(): IBaseExecution<void>;
	unsetReaction(reactionType): IBaseExecution<void>;
}
export interface chatMessageCollection extends IBaseCollection<chatMessage, chatMessageOData & chatMessageProps> {
    add(values?: any): IBaseExecution<chatMessage>;
}
/*********************************************
* chatMessageHostedContent
**********************************************/
export interface chatMessageHostedContent extends chatMessageHostedContentProps, chatMessageHostedContentMethods { }
export interface chatMessageHostedContentProps extends  teamworkHostedContentProps {

}
export interface chatMessageHostedContentMethods extends teamworkHostedContentMethods {

}
export interface chatMessageHostedContentOData extends teamworkHostedContentOData {

}
export interface chatMessageHostedContentCollection extends IBaseCollection<chatMessageHostedContent, chatMessageHostedContentOData & chatMessageHostedContentProps> {
    add(values?: any): IBaseExecution<chatMessageHostedContent>;
}
/*********************************************
* chatMessageInfo
**********************************************/
export interface chatMessageInfo extends chatMessageInfoProps, chatMessageInfoMethods { }
export interface chatMessageInfoProps extends  entityProps {
	body: ComplexTypes.itemBody;
	createdDateTime: any;
	eventDetail: ComplexTypes.eventMessageDetail;
	from: ComplexTypes.chatMessageFromIdentitySet;
	isDeleted: boolean;
	messageType: EnumTypes.chatMessageType;
}
export interface chatMessageInfoMethods extends entityMethods {

}
export interface chatMessageInfoOData extends entityOData {

}
/*********************************************
* checklistItem
**********************************************/
export interface checklistItem extends checklistItemProps, checklistItemMethods { }
export interface checklistItemProps extends  entityProps {
	checkedDateTime: any;
	createdDateTime: any;
	displayName: string;
	isChecked: boolean;
}
export interface checklistItemMethods extends entityMethods {

}
export interface checklistItemOData extends entityOData {

}
export interface checklistItemCollection extends IBaseCollection<checklistItem, checklistItemOData & checklistItemProps> {
    add(values?: any): IBaseExecution<checklistItem>;
}
/*********************************************
* citationTemplate
**********************************************/
export interface citationTemplate extends citationTemplateProps, citationTemplateMethods { }
export interface citationTemplateProps extends  filePlanDescriptorTemplateProps {
	citationJurisdiction: string;
	citationUrl: string;
}
export interface citationTemplateMethods extends filePlanDescriptorTemplateMethods {

}
export interface citationTemplateOData extends filePlanDescriptorTemplateOData {

}
/*********************************************
* claimsMappingPolicy
**********************************************/
export interface claimsMappingPolicy extends claimsMappingPolicyProps, claimsMappingPolicyMethods { }
export interface claimsMappingPolicyProps extends  stsPolicyProps {

}
export interface claimsMappingPolicyMethods extends stsPolicyMethods {

}
export interface claimsMappingPolicyOData extends stsPolicyOData {

}
export interface claimsMappingPolicyCollection extends IBaseCollection<claimsMappingPolicy, claimsMappingPolicyOData & claimsMappingPolicyProps> {
    add(values?: any): IBaseExecution<claimsMappingPolicy>;
}
/*********************************************
* cloudClipboardItem
**********************************************/
export interface cloudClipboardItem extends cloudClipboardItemProps, cloudClipboardItemMethods { }
export interface cloudClipboardItemProps extends  entityProps {
	createdDateTime: any;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	payloads: ComplexTypes.cloudClipboardItemPayload[];
}
export interface cloudClipboardItemMethods extends entityMethods {

}
export interface cloudClipboardItemOData extends entityOData {

}
export interface cloudClipboardItemCollection extends IBaseCollection<cloudClipboardItem, cloudClipboardItemOData & cloudClipboardItemProps> {
    add(values?: any): IBaseExecution<cloudClipboardItem>;
}
/*********************************************
* cloudClipboardRoot
**********************************************/
export interface cloudClipboardRoot extends cloudClipboardRootProps, cloudClipboardRootMethods { }
export interface cloudClipboardRootProps extends  entityProps {

}
export interface cloudClipboardRootMethods extends entityMethods {
	items(): cloudClipboardItemCollection;
	items(id: string | number): IBaseQuery<cloudClipboardItem> & cloudClipboardItemMethods;
}
export interface cloudClipboardRootOData extends entityOData {
	items: IBaseResults<cloudClipboardItem>;
}
/*********************************************
* cloudCommunications
**********************************************/
export interface cloudCommunications extends cloudCommunicationsProps, cloudCommunicationsMethods { }
export interface cloudCommunicationsProps   {

}
export interface cloudCommunicationsMethods {
	callRecords(): IBaseCollection<callRecord, callRecordOData & callRecordProps>;
	callRecords(id: string | number): IBaseQuery<callRecord> & callRecordMethods;
	calls(): callCollection;
	calls(id: string | number): IBaseQuery<call> & callMethods;
	onlineMeetings(): onlineMeetingCollection;
	onlineMeetings(id: string | number): IBaseQuery<onlineMeeting> & onlineMeetingMethods;
	presences(): presenceCollection;
	presences(id: string | number): IBaseQuery<presence> & presenceMethods;
	getPresencesByUserId(ids): IBaseExecution<presence[]>;
}
export interface cloudCommunicationsOData {
	callRecords: IBaseResults<callRecord>;
	calls: IBaseResults<call>;
	onlineMeetings: IBaseResults<onlineMeeting>;
	presences: IBaseResults<presence>;
	getPresencesByUserId(ids): IBaseExecution<presence[]>;
}
/*********************************************
* cloudPC
**********************************************/
export interface cloudPC extends cloudPCProps, cloudPCMethods { }
export interface cloudPCProps extends  entityProps {
	aadDeviceId: string;
	displayName: string;
	gracePeriodEndDateTime: any;
	imageDisplayName: string;
	lastModifiedDateTime: any;
	managedDeviceId: string;
	managedDeviceName: string;
	onPremisesConnectionName: string;
	provisioningPolicyId: string;
	provisioningPolicyName: string;
	provisioningType: EnumTypes.cloudPcProvisioningType;
	servicePlanId: string;
	servicePlanName: string;
	userPrincipalName: string;
}
export interface cloudPCMethods extends entityMethods {
	endGracePeriod(): IBaseExecution<void>;
	reboot(): IBaseExecution<void>;
	rename(displayName): IBaseExecution<void>;
	restore(cloudPcSnapshotId): IBaseExecution<void>;
	troubleshoot(): IBaseExecution<void>;
}
export interface cloudPCOData extends entityOData {
	endGracePeriod(): IBaseExecution<void>;
	reboot(): IBaseExecution<void>;
	rename(displayName): IBaseExecution<void>;
	restore(cloudPcSnapshotId): IBaseExecution<void>;
	troubleshoot(): IBaseExecution<void>;
}
export interface cloudPCCollection extends IBaseCollection<cloudPC, cloudPCOData & cloudPCProps> {
    add(values?: any): IBaseExecution<cloudPC>;
}
/*********************************************
* cloudPcAuditEvent
**********************************************/
export interface cloudPcAuditEvent extends cloudPcAuditEventProps, cloudPcAuditEventMethods { }
export interface cloudPcAuditEventProps extends  entityProps {
	activity: string;
	activityDateTime: any;
	activityOperationType: EnumTypes.cloudPcAuditActivityOperationType;
	activityResult: EnumTypes.cloudPcAuditActivityResult;
	activityType: string;
	actor: ComplexTypes.cloudPcAuditActor;
	category: EnumTypes.cloudPcAuditCategory;
	componentName: string;
	correlationId: string;
	displayName: string;
	resources: ComplexTypes.cloudPcAuditResource[];
}
export interface cloudPcAuditEventMethods extends entityMethods {

}
export interface cloudPcAuditEventOData extends entityOData {

}
export interface cloudPcAuditEventCollection extends IBaseCollection<cloudPcAuditEvent, cloudPcAuditEventOData & cloudPcAuditEventProps> {
    add(values?: any): IBaseExecution<cloudPcAuditEvent>;
}
/*********************************************
* cloudPcDeviceImage
**********************************************/
export interface cloudPcDeviceImage extends cloudPcDeviceImageProps, cloudPcDeviceImageMethods { }
export interface cloudPcDeviceImageProps extends  entityProps {
	displayName: string;
	errorCode: EnumTypes.cloudPcDeviceImageErrorCode;
	expirationDate: any;
	lastModifiedDateTime: any;
	operatingSystem: string;
	osBuildNumber: string;
	osStatus: EnumTypes.cloudPcDeviceImageOsStatus;
	sourceImageResourceId: string;
	status: EnumTypes.cloudPcDeviceImageStatus;
	version: string;
}
export interface cloudPcDeviceImageMethods extends entityMethods {

}
export interface cloudPcDeviceImageOData extends entityOData {

}
export interface cloudPcDeviceImageCollection extends IBaseCollection<cloudPcDeviceImage, cloudPcDeviceImageOData & cloudPcDeviceImageProps> {
    add(values?: any): IBaseExecution<cloudPcDeviceImage>;
}
/*********************************************
* cloudPcGalleryImage
**********************************************/
export interface cloudPcGalleryImage extends cloudPcGalleryImageProps, cloudPcGalleryImageMethods { }
export interface cloudPcGalleryImageProps extends  entityProps {
	displayName: string;
	endDate: any;
	expirationDate: any;
	offerName: string;
	publisherName: string;
	sizeInGB: number;
	skuName: string;
	startDate: any;
	status: EnumTypes.cloudPcGalleryImageStatus;
}
export interface cloudPcGalleryImageMethods extends entityMethods {

}
export interface cloudPcGalleryImageOData extends entityOData {

}
export interface cloudPcGalleryImageCollection extends IBaseCollection<cloudPcGalleryImage, cloudPcGalleryImageOData & cloudPcGalleryImageProps> {
    add(values?: any): IBaseExecution<cloudPcGalleryImage>;
}
/*********************************************
* cloudPcOnPremisesConnection
**********************************************/
export interface cloudPcOnPremisesConnection extends cloudPcOnPremisesConnectionProps, cloudPcOnPremisesConnectionMethods { }
export interface cloudPcOnPremisesConnectionProps extends  entityProps {
	adDomainName: string;
	adDomainPassword: string;
	adDomainUsername: string;
	alternateResourceUrl: string;
	connectionType: EnumTypes.cloudPcOnPremisesConnectionType;
	displayName: string;
	healthCheckStatus: EnumTypes.cloudPcOnPremisesConnectionStatus;
	healthCheckStatusDetail: ComplexTypes.cloudPcOnPremisesConnectionStatusDetail;
	inUse: boolean;
	organizationalUnit: string;
	resourceGroupId: string;
	subnetId: string;
	subscriptionId: string;
	subscriptionName: string;
	virtualNetworkId: string;
	virtualNetworkLocation: string;
}
export interface cloudPcOnPremisesConnectionMethods extends entityMethods {
	runHealthChecks(): IBaseExecution<void>;
}
export interface cloudPcOnPremisesConnectionOData extends entityOData {
	runHealthChecks(): IBaseExecution<void>;
}
export interface cloudPcOnPremisesConnectionCollection extends IBaseCollection<cloudPcOnPremisesConnection, cloudPcOnPremisesConnectionOData & cloudPcOnPremisesConnectionProps> {
    add(values?: any): IBaseExecution<cloudPcOnPremisesConnection>;
}
/*********************************************
* cloudPcProvisioningPolicy
**********************************************/
export interface cloudPcProvisioningPolicy extends cloudPcProvisioningPolicyProps, cloudPcProvisioningPolicyMethods { }
export interface cloudPcProvisioningPolicyProps extends  entityProps {
	alternateResourceUrl: string;
	cloudPcGroupDisplayName: string;
	cloudPcNamingTemplate: string;
	description: string;
	displayName: string;
	domainJoinConfigurations: ComplexTypes.cloudPcDomainJoinConfiguration[];
	enableSingleSignOn: boolean;
	gracePeriodInHours: number;
	imageDisplayName: string;
	imageId: string;
	imageType: EnumTypes.cloudPcProvisioningPolicyImageType;
	localAdminEnabled: boolean;
	microsoftManagedDesktop: ComplexTypes.microsoftManagedDesktop;
	provisioningType: EnumTypes.cloudPcProvisioningType;
	windowsSetting: ComplexTypes.cloudPcWindowsSetting;
}
export interface cloudPcProvisioningPolicyMethods extends entityMethods {
	assignments(): cloudPcProvisioningPolicyAssignmentCollection;
	assignments(id: string | number): IBaseQuery<cloudPcProvisioningPolicyAssignment> & cloudPcProvisioningPolicyAssignmentMethods;
	assign(assignments): IBaseExecution<void>;
}
export interface cloudPcProvisioningPolicyOData extends entityOData {
	assignments: IBaseResults<cloudPcProvisioningPolicyAssignment>;
	assign(assignments): IBaseExecution<void>;
}
export interface cloudPcProvisioningPolicyCollection extends IBaseCollection<cloudPcProvisioningPolicy, cloudPcProvisioningPolicyOData & cloudPcProvisioningPolicyProps> {
    add(values?: any): IBaseExecution<cloudPcProvisioningPolicy>;
}
/*********************************************
* cloudPcProvisioningPolicyAssignment
**********************************************/
export interface cloudPcProvisioningPolicyAssignment extends cloudPcProvisioningPolicyAssignmentProps, cloudPcProvisioningPolicyAssignmentMethods { }
export interface cloudPcProvisioningPolicyAssignmentProps extends  entityProps {
	target: ComplexTypes.cloudPcManagementAssignmentTarget;
}
export interface cloudPcProvisioningPolicyAssignmentMethods extends entityMethods {
	assignedUsers(): userCollection;
	assignedUsers(id: string | number): IBaseQuery<user> & userMethods;
}
export interface cloudPcProvisioningPolicyAssignmentOData extends entityOData {
	assignedUsers: IBaseResults<user>;
}
export interface cloudPcProvisioningPolicyAssignmentCollection extends IBaseCollection<cloudPcProvisioningPolicyAssignment, cloudPcProvisioningPolicyAssignmentOData & cloudPcProvisioningPolicyAssignmentProps> {
    add(values?: any): IBaseExecution<cloudPcProvisioningPolicyAssignment>;
}
/*********************************************
* cloudPcUserSetting
**********************************************/
export interface cloudPcUserSetting extends cloudPcUserSettingProps, cloudPcUserSettingMethods { }
export interface cloudPcUserSettingProps extends  entityProps {
	createdDateTime: any;
	displayName: string;
	lastModifiedDateTime: any;
	localAdminEnabled: boolean;
	resetEnabled: boolean;
	restorePointSetting: ComplexTypes.cloudPcRestorePointSetting;
}
export interface cloudPcUserSettingMethods extends entityMethods {
	assignments(): cloudPcUserSettingAssignmentCollection;
	assignments(id: string | number): IBaseQuery<cloudPcUserSettingAssignment> & cloudPcUserSettingAssignmentMethods;
	assign(assignments): IBaseExecution<void>;
}
export interface cloudPcUserSettingOData extends entityOData {
	assignments: IBaseResults<cloudPcUserSettingAssignment>;
	assign(assignments): IBaseExecution<void>;
}
export interface cloudPcUserSettingCollection extends IBaseCollection<cloudPcUserSetting, cloudPcUserSettingOData & cloudPcUserSettingProps> {
    add(values?: any): IBaseExecution<cloudPcUserSetting>;
}
/*********************************************
* cloudPcUserSettingAssignment
**********************************************/
export interface cloudPcUserSettingAssignment extends cloudPcUserSettingAssignmentProps, cloudPcUserSettingAssignmentMethods { }
export interface cloudPcUserSettingAssignmentProps extends  entityProps {
	createdDateTime: any;
	target: ComplexTypes.cloudPcManagementAssignmentTarget;
}
export interface cloudPcUserSettingAssignmentMethods extends entityMethods {

}
export interface cloudPcUserSettingAssignmentOData extends entityOData {

}
export interface cloudPcUserSettingAssignmentCollection extends IBaseCollection<cloudPcUserSettingAssignment, cloudPcUserSettingAssignmentOData & cloudPcUserSettingAssignmentProps> {
    add(values?: any): IBaseExecution<cloudPcUserSettingAssignment>;
}
/*********************************************
* columnDefinition
**********************************************/
export interface columnDefinition extends columnDefinitionProps, columnDefinitionMethods { }
export interface columnDefinitionProps extends  entityProps {
	boolean: ComplexTypes.booleanColumn;
	calculated: ComplexTypes.calculatedColumn;
	choice: ComplexTypes.choiceColumn;
	columnGroup: string;
	contentApprovalStatus: ComplexTypes.contentApprovalStatusColumn;
	currency: ComplexTypes.currencyColumn;
	dateTime: ComplexTypes.dateTimeColumn;
	defaultValue: ComplexTypes.defaultColumnValue;
	description: string;
	displayName: string;
	enforceUniqueValues: boolean;
	geolocation: ComplexTypes.geolocationColumn;
	hidden: boolean;
	hyperlinkOrPicture: ComplexTypes.hyperlinkOrPictureColumn;
	indexed: boolean;
	isDeletable: boolean;
	isReorderable: boolean;
	isSealed: boolean;
	lookup: ComplexTypes.lookupColumn;
	name: string;
	number: ComplexTypes.numberColumn;
	personOrGroup: ComplexTypes.personOrGroupColumn;
	propagateChanges: boolean;
	readOnly: boolean;
	required: boolean;
	sourceContentType: ComplexTypes.contentTypeInfo;
	term: ComplexTypes.termColumn;
	text: ComplexTypes.textColumn;
	thumbnail: ComplexTypes.thumbnailColumn;
	type: EnumTypes.columnTypes;
	validation: ComplexTypes.columnValidation;
}
export interface columnDefinitionMethods extends entityMethods {
	sourceColumn(): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	update(values: any): IBaseExecution<void>;
}
export interface columnDefinitionOData extends entityOData {
	sourceColumn: columnDefinition;
	update(values: any): IBaseExecution<void>;
}
export interface columnDefinitionCollection extends IBaseCollection<columnDefinition, columnDefinitionOData & columnDefinitionProps> {
    add(values?: any): IBaseExecution<columnDefinition>;
}
/*********************************************
* columnLink
**********************************************/
export interface columnLink extends columnLinkProps, columnLinkMethods { }
export interface columnLinkProps extends  entityProps {
	name: string;
}
export interface columnLinkMethods extends entityMethods {

}
export interface columnLinkOData extends entityOData {

}
export interface columnLinkCollection extends IBaseCollection<columnLink, columnLinkOData & columnLinkProps> {
    add(values?: any): IBaseExecution<columnLink>;
}
/*********************************************
* commsOperation
**********************************************/
export interface commsOperation extends commsOperationProps, commsOperationMethods { }
export interface commsOperationProps extends  entityProps {
	clientContext: string;
	resultInfo: ComplexTypes.resultInfo;
	status: EnumTypes.operationStatus;
}
export interface commsOperationMethods extends entityMethods {

}
export interface commsOperationOData extends entityOData {

}
export interface commsOperationCollection extends IBaseCollection<commsOperation, commsOperationOData & commsOperationProps> {
    add(values?: any): IBaseExecution<commsOperation>;
}
/*********************************************
* community
**********************************************/
export interface community extends communityProps, communityMethods { }
export interface communityProps extends  entityProps {
	description: string;
	displayName: string;
	groupId: string;
	privacy: EnumTypes.communityPrivacy;
}
export interface communityMethods extends entityMethods {
	group(): IBaseQuery<group> & groupMethods;
	owners(): userCollection;
	owners(id: string | number): IBaseQuery<user> & userMethods;
}
export interface communityOData extends entityOData {
	group: group;
	owners: IBaseResults<user>;
}
export interface communityCollection extends IBaseCollection<community, communityOData & communityProps> {
    add(values?: any): IBaseExecution<community>;
}
/*********************************************
* companySubscription
**********************************************/
export interface companySubscription extends companySubscriptionProps, companySubscriptionMethods { }
export interface companySubscriptionProps extends  entityProps {
	commerceSubscriptionId: string;
	createdDateTime: any;
	isTrial: boolean;
	nextLifecycleDateTime: any;
	ownerId: string;
	ownerTenantId: string;
	ownerType: string;
	serviceStatus: ComplexTypes.servicePlanInfo[];
	skuId: string;
	skuPartNumber: string;
	status: string;
	totalLicenses: number;
}
export interface companySubscriptionMethods extends entityMethods {

}
export interface companySubscriptionOData extends entityOData {

}
export interface companySubscriptionCollection extends IBaseCollection<companySubscription, companySubscriptionOData & companySubscriptionProps> {
    add(values?: any): IBaseExecution<companySubscription>;
}
/*********************************************
* compliance
**********************************************/
export interface compliance extends complianceProps, complianceMethods { }
export interface complianceProps   {

}
export interface complianceMethods {

}
export interface complianceOData {

}
/*********************************************
* complianceManagementPartner
**********************************************/
export interface complianceManagementPartner extends complianceManagementPartnerProps, complianceManagementPartnerMethods { }
export interface complianceManagementPartnerProps extends  entityProps {
	androidEnrollmentAssignments: ComplexTypes.complianceManagementPartnerAssignment[];
	androidOnboarded: boolean;
	displayName: string;
	iosEnrollmentAssignments: ComplexTypes.complianceManagementPartnerAssignment[];
	iosOnboarded: boolean;
	lastHeartbeatDateTime: any;
	macOsEnrollmentAssignments: ComplexTypes.complianceManagementPartnerAssignment[];
	macOsOnboarded: boolean;
	partnerState: EnumTypes.deviceManagementPartnerTenantState;
}
export interface complianceManagementPartnerMethods extends entityMethods {

}
export interface complianceManagementPartnerOData extends entityOData {

}
export interface complianceManagementPartnerCollection extends IBaseCollection<complianceManagementPartner, complianceManagementPartnerOData & complianceManagementPartnerProps> {
    add(values?: any): IBaseExecution<complianceManagementPartner>;
}
/*********************************************
* conditionalAccessPolicy
**********************************************/
export interface conditionalAccessPolicy extends conditionalAccessPolicyProps, conditionalAccessPolicyMethods { }
export interface conditionalAccessPolicyProps extends  entityProps {
	conditions: ComplexTypes.conditionalAccessConditionSet;
	createdDateTime: any;
	description: string;
	displayName: string;
	grantControls: ComplexTypes.conditionalAccessGrantControls;
	modifiedDateTime: any;
	sessionControls: ComplexTypes.conditionalAccessSessionControls;
	state: EnumTypes.conditionalAccessPolicyState;
	templateId: string;
}
export interface conditionalAccessPolicyMethods extends entityMethods {

}
export interface conditionalAccessPolicyOData extends entityOData {

}
export interface conditionalAccessPolicyCollection extends IBaseCollection<conditionalAccessPolicy, conditionalAccessPolicyOData & conditionalAccessPolicyProps> {
    add(values?: any): IBaseExecution<conditionalAccessPolicy>;
}
/*********************************************
* conditionalAccessRoot
**********************************************/
export interface conditionalAccessRoot extends conditionalAccessRootProps, conditionalAccessRootMethods { }
export interface conditionalAccessRootProps extends  entityProps {

}
export interface conditionalAccessRootMethods extends entityMethods {
	authenticationStrength(): IBaseQuery<authenticationStrengthRoot> & authenticationStrengthRootMethods;
	authenticationContextClassReferences(): authenticationContextClassReferenceCollection;
	authenticationContextClassReferences(id: string | number): IBaseQuery<authenticationContextClassReference> & authenticationContextClassReferenceMethods;
	namedLocations(): namedLocationCollection;
	namedLocations(id: string | number): IBaseQuery<namedLocation> & namedLocationMethods;
	policies(): conditionalAccessPolicyCollection;
	policies(id: string | number): IBaseQuery<conditionalAccessPolicy> & conditionalAccessPolicyMethods;
	templates(): conditionalAccessTemplateCollection;
	templates(id: string | number): IBaseQuery<conditionalAccessTemplate> & conditionalAccessTemplateMethods;
}
export interface conditionalAccessRootOData extends entityOData {
	authenticationStrength: authenticationStrengthRoot;
	authenticationContextClassReferences: IBaseResults<authenticationContextClassReference>;
	namedLocations: IBaseResults<namedLocation>;
	policies: IBaseResults<conditionalAccessPolicy>;
	templates: IBaseResults<conditionalAccessTemplate>;
}
/*********************************************
* conditionalAccessTemplate
**********************************************/
export interface conditionalAccessTemplate extends conditionalAccessTemplateProps, conditionalAccessTemplateMethods { }
export interface conditionalAccessTemplateProps extends  entityProps {
	description: string;
	details: ComplexTypes.conditionalAccessPolicyDetail;
	name: string;
	scenarios: EnumTypes.templateScenarios;
}
export interface conditionalAccessTemplateMethods extends entityMethods {

}
export interface conditionalAccessTemplateOData extends entityOData {

}
export interface conditionalAccessTemplateCollection extends IBaseCollection<conditionalAccessTemplate, conditionalAccessTemplateOData & conditionalAccessTemplateProps> {
    add(values?: any): IBaseExecution<conditionalAccessTemplate>;
}
/*********************************************
* connectedOrganization
**********************************************/
export interface connectedOrganization extends connectedOrganizationProps, connectedOrganizationMethods { }
export interface connectedOrganizationProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	identitySources: ComplexTypes.identitySource[];
	modifiedDateTime: any;
	state: EnumTypes.connectedOrganizationState;
}
export interface connectedOrganizationMethods extends entityMethods {
	externalSponsors(): directoryObjectCollection;
	externalSponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	internalSponsors(): directoryObjectCollection;
	internalSponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface connectedOrganizationOData extends entityOData {
	externalSponsors: IBaseResults<directoryObject>;
	internalSponsors: IBaseResults<directoryObject>;
}
export interface connectedOrganizationCollection extends IBaseCollection<connectedOrganization, connectedOrganizationOData & connectedOrganizationProps> {
    add(values?: any): IBaseExecution<connectedOrganization>;
}
/*********************************************
* connectionOperation
**********************************************/
export interface connectionOperation extends connectionOperationProps, connectionOperationMethods { }
export interface connectionOperationProps extends  entityProps {
	error: ComplexTypes.publicError;
	status: EnumTypes.connectionOperationStatus;
}
export interface connectionOperationMethods extends entityMethods {

}
export interface connectionOperationOData extends entityOData {

}
/*********************************************
* contact
**********************************************/
export interface contact extends contactProps, contactMethods { }
export interface contactProps extends  outlookItemProps {
	assistantName: string;
	birthday: any;
	businessAddress: ComplexTypes.physicalAddress;
	businessHomePage: string;
	businessPhones: Array<string>[];
	children: Array<string>[];
	companyName: string;
	department: string;
	displayName: string;
	emailAddresses: ComplexTypes.emailAddress[];
	fileAs: string;
	generation: string;
	givenName: string;
	homeAddress: ComplexTypes.physicalAddress;
	homePhones: Array<string>[];
	imAddresses: Array<string>[];
	initials: string;
	jobTitle: string;
	manager: string;
	middleName: string;
	mobilePhone: string;
	nickName: string;
	officeLocation: string;
	otherAddress: ComplexTypes.physicalAddress;
	parentFolderId: string;
	personalNotes: string;
	profession: string;
	spouseName: string;
	surname: string;
	title: string;
	yomiCompanyName: string;
	yomiGivenName: string;
	yomiSurname: string;
}
export interface contactMethods extends outlookItemMethods {
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	multiValueExtendedProperties(): multiValueLegacyExtendedPropertyCollection;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	photo(): IBaseQuery<profilePhoto> & profilePhotoMethods;
	singleValueExtendedProperties(): singleValueLegacyExtendedPropertyCollection;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
}
export interface contactOData extends outlookItemOData {
	extensions: IBaseResults<extension>;
	multiValueExtendedProperties: IBaseResults<multiValueLegacyExtendedProperty>;
	photo: profilePhoto;
	singleValueExtendedProperties: IBaseResults<singleValueLegacyExtendedProperty>;
}
export interface contactCollection extends IBaseCollection<contact, contactOData & contactProps> {
    add(values?: any): IBaseExecution<contact>;
}
/*********************************************
* contactFolder
**********************************************/
export interface contactFolder extends contactFolderProps, contactFolderMethods { }
export interface contactFolderProps extends  entityProps {
	displayName: string;
	parentFolderId: string;
}
export interface contactFolderMethods extends entityMethods {
	childFolders(): contactFolderCollection;
	childFolders(id: string | number): IBaseQuery<contactFolder> & contactFolderMethods;
	contacts(): contactCollection;
	contacts(id: string | number): IBaseQuery<contact> & contactMethods;
	multiValueExtendedProperties(): multiValueLegacyExtendedPropertyCollection;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): singleValueLegacyExtendedPropertyCollection;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
}
export interface contactFolderOData extends entityOData {
	childFolders: IBaseResults<contactFolder>;
	contacts: IBaseResults<contact>;
	multiValueExtendedProperties: IBaseResults<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties: IBaseResults<singleValueLegacyExtendedProperty>;
}
export interface contactFolderCollection extends IBaseCollection<contactFolder, contactFolderOData & contactFolderProps> {
    add(values?: any): IBaseExecution<contactFolder>;
}
/*********************************************
* contentSharingSession
**********************************************/
export interface contentSharingSession extends contentSharingSessionProps, contentSharingSessionMethods { }
export interface contentSharingSessionProps extends  entityProps {

}
export interface contentSharingSessionMethods extends entityMethods {

}
export interface contentSharingSessionOData extends entityOData {

}
export interface contentSharingSessionCollection extends IBaseCollection<contentSharingSession, contentSharingSessionOData & contentSharingSessionProps> {
    add(values?: any): IBaseExecution<contentSharingSession>;
}
/*********************************************
* contentType
**********************************************/
export interface contentType extends contentTypeProps, contentTypeMethods { }
export interface contentTypeProps extends  entityProps {
	associatedHubsUrls: Array<string>[];
	description: string;
	documentSet: ComplexTypes.documentSet;
	documentTemplate: ComplexTypes.documentSetContent;
	group: string;
	hidden: boolean;
	inheritedFrom: ComplexTypes.itemReference;
	isBuiltIn: boolean;
	name: string;
	order: ComplexTypes.contentTypeOrder;
	parentId: string;
	propagateChanges: boolean;
	readOnly: boolean;
	sealed: boolean;
}
export interface contentTypeMethods extends entityMethods {
	base(): IBaseQuery<contentType> & contentTypeMethods;
	baseTypes(): contentTypeCollection;
	baseTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	columnLinks(): columnLinkCollection;
	columnLinks(id: string | number): IBaseQuery<columnLink> & columnLinkMethods;
	columnPositions(): columnDefinitionCollection;
	columnPositions(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	columns(): columnDefinitionCollection;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	update(values: any): IBaseExecution<void>;
	publish(): IBaseExecution<void>;
	unpublish(): IBaseExecution<void>;
	associateWithHubSites(hubSiteUrls, propagateToExistingLists): IBaseExecution<void>;
	copyToDefaultContentLocation(sourceFile, destinationFileName): IBaseExecution<void>;
	isPublished(): boolean;
}
export interface contentTypeOData extends entityOData {
	base: contentType;
	baseTypes: IBaseResults<contentType>;
	columnLinks: IBaseResults<columnLink>;
	columnPositions: IBaseResults<columnDefinition>;
	columns: IBaseResults<columnDefinition>;
	update(values: any): IBaseExecution<void>;
	publish(): IBaseExecution<void>;
	unpublish(): IBaseExecution<void>;
	associateWithHubSites(hubSiteUrls, propagateToExistingLists): IBaseExecution<void>;
	copyToDefaultContentLocation(sourceFile, destinationFileName): IBaseExecution<void>;
	isPublished(): boolean;
}
export interface contentTypeCollection extends IBaseCollection<contentType, contentTypeOData & contentTypeProps> {
    add(values?: any): IBaseExecution<contentType>;
}
/*********************************************
* contract
**********************************************/
export interface contract extends contractProps, contractMethods { }
export interface contractProps extends  directoryObjectProps {
	contractType: string;
	customerId: any;
	defaultDomainName: string;
	displayName: string;
}
export interface contractMethods extends directoryObjectMethods {

}
export interface contractOData extends directoryObjectOData {

}
/*********************************************
* conversation
**********************************************/
export interface conversation extends conversationProps, conversationMethods { }
export interface conversationProps extends  entityProps {
	hasAttachments: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	uniqueSenders: Array<string>[];
}
export interface conversationMethods extends entityMethods {
	threads(): conversationThreadCollection;
	threads(id: string | number): IBaseQuery<conversationThread> & conversationThreadMethods;
}
export interface conversationOData extends entityOData {
	threads: IBaseResults<conversationThread>;
}
export interface conversationCollection extends IBaseCollection<conversation, conversationOData & conversationProps> {
    add(values?: any): IBaseExecution<conversation>;
}
/*********************************************
* conversationMember
**********************************************/
export interface conversationMember extends conversationMemberProps, conversationMemberMethods { }
export interface conversationMemberProps extends  entityProps {
	displayName: string;
	roles: Array<string>[];
	visibleHistoryStartDateTime: any;
}
export interface conversationMemberMethods extends entityMethods {

}
export interface conversationMemberOData extends entityOData {

}
export interface conversationMemberCollection extends IBaseCollection<conversationMember, conversationMemberOData & conversationMemberProps> {
    add(values?: any): IBaseExecution<conversationMember>;
}
/*********************************************
* conversationThread
**********************************************/
export interface conversationThread extends conversationThreadProps, conversationThreadMethods { }
export interface conversationThreadProps extends  entityProps {
	ccRecipients: ComplexTypes.recipient[];
	hasAttachments: boolean;
	isLocked: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	toRecipients: ComplexTypes.recipient[];
	uniqueSenders: Array<string>[];
}
export interface conversationThreadMethods extends entityMethods {
	posts(): postCollection;
	posts(id: string | number): IBaseQuery<post> & postMethods;
	reply(Post): IBaseExecution<void>;
}
export interface conversationThreadOData extends entityOData {
	posts: IBaseResults<post>;
	reply(Post): IBaseExecution<void>;
}
export interface conversationThreadCollection extends IBaseCollection<conversationThread, conversationThreadOData & conversationThreadProps> {
    add(values?: any): IBaseExecution<conversationThread>;
}
/*********************************************
* countryNamedLocation
**********************************************/
export interface countryNamedLocation extends countryNamedLocationProps, countryNamedLocationMethods { }
export interface countryNamedLocationProps extends  namedLocationProps {
	countriesAndRegions: Array<string>[];
	countryLookupMethod: EnumTypes.countryLookupMethodType;
	includeUnknownCountriesAndRegions: boolean;
}
export interface countryNamedLocationMethods extends namedLocationMethods {

}
export interface countryNamedLocationOData extends namedLocationOData {

}
/*********************************************
* crossTenantAccessPolicy
**********************************************/
export interface crossTenantAccessPolicy extends crossTenantAccessPolicyProps, crossTenantAccessPolicyMethods { }
export interface crossTenantAccessPolicyProps extends  policyBaseProps {
	allowedCloudEndpoints: Array<string>[];
}
export interface crossTenantAccessPolicyMethods extends policyBaseMethods {
	default(): IBaseQuery<crossTenantAccessPolicyConfigurationDefault> & crossTenantAccessPolicyConfigurationDefaultMethods;
	partners(): IBaseCollection<crossTenantAccessPolicyConfigurationPartner, policyBase & crossTenantAccessPolicyConfigurationPartnerOData & crossTenantAccessPolicyConfigurationPartnerProps>;
	partners(id: string | number): IBaseQuery<crossTenantAccessPolicyConfigurationPartner> & crossTenantAccessPolicyConfigurationPartnerMethods;
	templates(): IBaseQuery<policyTemplate> & policyTemplateMethods;
}
export interface crossTenantAccessPolicyOData extends policyBaseOData {
	default: crossTenantAccessPolicyConfigurationDefault;
	partners: IBaseResults<crossTenantAccessPolicyConfigurationPartner>;
	templates: policyTemplate;
}
/*********************************************
* crossTenantAccessPolicyConfigurationDefault
**********************************************/
export interface crossTenantAccessPolicyConfigurationDefault extends crossTenantAccessPolicyConfigurationDefaultProps, crossTenantAccessPolicyConfigurationDefaultMethods { }
export interface crossTenantAccessPolicyConfigurationDefaultProps extends  entityProps {
	automaticUserConsentSettings: ComplexTypes.inboundOutboundPolicyConfiguration;
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	invitationRedemptionIdentityProviderConfiguration: ComplexTypes.defaultInvitationRedemptionIdentityProviderConfiguration;
	isServiceDefault: boolean;
	tenantRestrictions: ComplexTypes.crossTenantAccessPolicyTenantRestrictions;
}
export interface crossTenantAccessPolicyConfigurationDefaultMethods extends entityMethods {
	resetToSystemDefault(): IBaseExecution<void>;
}
export interface crossTenantAccessPolicyConfigurationDefaultOData extends entityOData {
	resetToSystemDefault(): IBaseExecution<void>;
}
/*********************************************
* crossTenantAccessPolicyConfigurationPartner
**********************************************/
export interface crossTenantAccessPolicyConfigurationPartner extends crossTenantAccessPolicyConfigurationPartnerProps, crossTenantAccessPolicyConfigurationPartnerMethods { }
export interface crossTenantAccessPolicyConfigurationPartnerProps   {
	automaticUserConsentSettings: ComplexTypes.inboundOutboundPolicyConfiguration;
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	isInMultiTenantOrganization: boolean;
	isServiceProvider: boolean;
	tenantId: string;
	tenantRestrictions: ComplexTypes.crossTenantAccessPolicyTenantRestrictions;
}
export interface crossTenantAccessPolicyConfigurationPartnerMethods {
	identitySynchronization(): IBaseQuery<crossTenantIdentitySyncPolicyPartner> & crossTenantIdentitySyncPolicyPartnerMethods;
}
export interface crossTenantAccessPolicyConfigurationPartnerOData {
	identitySynchronization: crossTenantIdentitySyncPolicyPartner;
}
/*********************************************
* crossTenantIdentitySyncPolicyPartner
**********************************************/
export interface crossTenantIdentitySyncPolicyPartner extends crossTenantIdentitySyncPolicyPartnerProps, crossTenantIdentitySyncPolicyPartnerMethods { }
export interface crossTenantIdentitySyncPolicyPartnerProps   {
	displayName: string;
	tenantId: string;
	userSyncInbound: ComplexTypes.crossTenantUserSyncInbound;
}
export interface crossTenantIdentitySyncPolicyPartnerMethods {

}
export interface crossTenantIdentitySyncPolicyPartnerOData {

}
/*********************************************
* customAuthenticationExtension
**********************************************/
export interface customAuthenticationExtension extends customAuthenticationExtensionProps, customAuthenticationExtensionMethods { }
export interface customAuthenticationExtensionProps extends  customCalloutExtensionProps {

}
export interface customAuthenticationExtensionMethods extends customCalloutExtensionMethods {
	validateAuthenticationConfiguration(): IBaseExecution<ComplexTypes.authenticationConfigurationValidation>;
}
export interface customAuthenticationExtensionOData extends customCalloutExtensionOData {
	validateAuthenticationConfiguration(): IBaseExecution<ComplexTypes.authenticationConfigurationValidation>;
}
export interface customAuthenticationExtensionCollection extends IBaseCollection<customAuthenticationExtension, customAuthenticationExtensionOData & customAuthenticationExtensionProps> {
    add(values?: any): IBaseExecution<customAuthenticationExtension>;
}
/*********************************************
* customCalloutExtension
**********************************************/
export interface customCalloutExtension extends customCalloutExtensionProps, customCalloutExtensionMethods { }
export interface customCalloutExtensionProps extends  entityProps {
	authenticationConfiguration: ComplexTypes.customExtensionAuthenticationConfiguration;
	clientConfiguration: ComplexTypes.customExtensionClientConfiguration;
	description: string;
	displayName: string;
	endpointConfiguration: ComplexTypes.customExtensionEndpointConfiguration;
}
export interface customCalloutExtensionMethods extends entityMethods {

}
export interface customCalloutExtensionOData extends entityOData {

}
export interface customCalloutExtensionCollection extends IBaseCollection<customCalloutExtension, customCalloutExtensionOData & customCalloutExtensionProps> {
    add(values?: any): IBaseExecution<customCalloutExtension>;
}
/*********************************************
* customExtensionStageSetting
**********************************************/
export interface customExtensionStageSetting extends customExtensionStageSettingProps, customExtensionStageSettingMethods { }
export interface customExtensionStageSettingProps extends  entityProps {
	stage: EnumTypes.accessPackageCustomExtensionStage;
}
export interface customExtensionStageSettingMethods extends entityMethods {
	customExtension(): IBaseQuery<customCalloutExtension> & customCalloutExtensionMethods;
}
export interface customExtensionStageSettingOData extends entityOData {
	customExtension: customCalloutExtension;
}
export interface customExtensionStageSettingCollection extends IBaseCollection<customExtensionStageSetting, customExtensionStageSettingOData & customExtensionStageSettingProps> {
    add(values?: any): IBaseExecution<customExtensionStageSetting>;
}
/*********************************************
* customSecurityAttributeDefinition
**********************************************/
export interface customSecurityAttributeDefinition extends customSecurityAttributeDefinitionProps, customSecurityAttributeDefinitionMethods { }
export interface customSecurityAttributeDefinitionProps extends  entityProps {
	attributeSet: string;
	description: string;
	isCollection: boolean;
	isSearchable: boolean;
	name: string;
	status: string;
	type: string;
	usePreDefinedValuesOnly: boolean;
}
export interface customSecurityAttributeDefinitionMethods extends entityMethods {
	allowedValues(): allowedValueCollection;
	allowedValues(id: string | number): IBaseQuery<allowedValue> & allowedValueMethods;
}
export interface customSecurityAttributeDefinitionOData extends entityOData {
	allowedValues: IBaseResults<allowedValue>;
}
export interface customSecurityAttributeDefinitionCollection extends IBaseCollection<customSecurityAttributeDefinition, customSecurityAttributeDefinitionOData & customSecurityAttributeDefinitionProps> {
    add(values?: any): IBaseExecution<customSecurityAttributeDefinition>;
}
/*********************************************
* customTaskExtension
**********************************************/
export interface customTaskExtension extends customTaskExtensionProps, customTaskExtensionMethods { }
export interface customTaskExtensionProps extends  customCalloutExtensionProps {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdDateTime: any;
	lastModifiedDateTime: any;
}
export interface customTaskExtensionMethods extends customCalloutExtensionMethods {
	createdBy(): IBaseQuery<user> & userMethods;
	lastModifiedBy(): IBaseQuery<user> & userMethods;
}
export interface customTaskExtensionOData extends customCalloutExtensionOData {
	createdBy: user;
	lastModifiedBy: user;
}
/*********************************************
* dataPolicyOperation
**********************************************/
export interface dataPolicyOperation extends dataPolicyOperationProps, dataPolicyOperationMethods { }
export interface dataPolicyOperationProps extends  entityProps {
	completedDateTime: any;
	progress: number;
	status: EnumTypes.dataPolicyOperationStatus;
	storageLocation: string;
	submittedDateTime: any;
	userId: string;
}
export interface dataPolicyOperationMethods extends entityMethods {

}
export interface dataPolicyOperationOData extends entityOData {

}
/*********************************************
* dataSet
**********************************************/
export interface dataSet extends dataSetProps, dataSetMethods { }
export interface dataSetProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
}
export interface dataSetMethods extends entityMethods {

}
export interface dataSetOData extends entityOData {

}
/*********************************************
* dataSource
**********************************************/
export interface dataSource extends dataSourceProps, dataSourceMethods { }
export interface dataSourceProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	holdStatus: EnumTypes.dataSourceHoldStatus;
}
export interface dataSourceMethods extends entityMethods {

}
export interface dataSourceOData extends entityOData {

}
/*********************************************
* dataSourceContainer
**********************************************/
export interface dataSourceContainer extends dataSourceContainerProps, dataSourceContainerMethods { }
export interface dataSourceContainerProps extends  entityProps {
	createdDateTime: any;
	displayName: string;
	holdStatus: EnumTypes.dataSourceHoldStatus;
	lastModifiedDateTime: any;
	releasedDateTime: any;
	status: EnumTypes.dataSourceContainerStatus;
}
export interface dataSourceContainerMethods extends entityMethods {

}
export interface dataSourceContainerOData extends entityOData {

}
/*********************************************
* defaultManagedAppProtection
**********************************************/
export interface defaultManagedAppProtection extends defaultManagedAppProtectionProps, defaultManagedAppProtectionMethods { }
export interface defaultManagedAppProtectionProps extends  managedAppProtectionProps {
	appDataEncryptionType: EnumTypes.managedAppDataEncryptionType;
	customSettings: ComplexTypes.keyValuePair[];
	deployedAppCount: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
	encryptAppData: boolean;
	faceIdBlocked: boolean;
	minimumRequiredPatchVersion: string;
	minimumRequiredSdkVersion: string;
	minimumWarningPatchVersion: string;
	screenCaptureBlocked: boolean;
}
export interface defaultManagedAppProtectionMethods extends managedAppProtectionMethods {
	apps(): managedMobileAppCollection;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
}
export interface defaultManagedAppProtectionOData extends managedAppProtectionOData {
	apps: IBaseResults<managedMobileApp>;
	deploymentSummary: managedAppPolicyDeploymentSummary;
}
export interface defaultManagedAppProtectionCollection extends IBaseCollection<defaultManagedAppProtection, defaultManagedAppProtectionOData & defaultManagedAppProtectionProps> {
    add(values?: any): IBaseExecution<defaultManagedAppProtection>;
}
/*********************************************
* delegatedAdminAccessAssignment
**********************************************/
export interface delegatedAdminAccessAssignment extends delegatedAdminAccessAssignmentProps, delegatedAdminAccessAssignmentMethods { }
export interface delegatedAdminAccessAssignmentProps extends  entityProps {
	accessContainer: ComplexTypes.delegatedAdminAccessContainer;
	accessDetails: ComplexTypes.delegatedAdminAccessDetails;
	createdDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminAccessAssignmentStatus;
}
export interface delegatedAdminAccessAssignmentMethods extends entityMethods {

}
export interface delegatedAdminAccessAssignmentOData extends entityOData {

}
export interface delegatedAdminAccessAssignmentCollection extends IBaseCollection<delegatedAdminAccessAssignment, delegatedAdminAccessAssignmentOData & delegatedAdminAccessAssignmentProps> {
    add(values?: any): IBaseExecution<delegatedAdminAccessAssignment>;
}
/*********************************************
* delegatedAdminCustomer
**********************************************/
export interface delegatedAdminCustomer extends delegatedAdminCustomerProps, delegatedAdminCustomerMethods { }
export interface delegatedAdminCustomerProps extends  entityProps {
	displayName: string;
	tenantId: string;
}
export interface delegatedAdminCustomerMethods extends entityMethods {
	serviceManagementDetails(): delegatedAdminServiceManagementDetailCollection;
	serviceManagementDetails(id: string | number): IBaseQuery<delegatedAdminServiceManagementDetail> & delegatedAdminServiceManagementDetailMethods;
}
export interface delegatedAdminCustomerOData extends entityOData {
	serviceManagementDetails: IBaseResults<delegatedAdminServiceManagementDetail>;
}
export interface delegatedAdminCustomerCollection extends IBaseCollection<delegatedAdminCustomer, delegatedAdminCustomerOData & delegatedAdminCustomerProps> {
    add(values?: any): IBaseExecution<delegatedAdminCustomer>;
}
/*********************************************
* delegatedAdminRelationship
**********************************************/
export interface delegatedAdminRelationship extends delegatedAdminRelationshipProps, delegatedAdminRelationshipMethods { }
export interface delegatedAdminRelationshipProps extends  entityProps {
	accessDetails: ComplexTypes.delegatedAdminAccessDetails;
	activatedDateTime: any;
	autoExtendDuration: number;
	createdDateTime: any;
	customer: ComplexTypes.delegatedAdminRelationshipCustomerParticipant;
	displayName: string;
	duration: number;
	endDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminRelationshipStatus;
}
export interface delegatedAdminRelationshipMethods extends entityMethods {
	accessAssignments(): delegatedAdminAccessAssignmentCollection;
	accessAssignments(id: string | number): IBaseQuery<delegatedAdminAccessAssignment> & delegatedAdminAccessAssignmentMethods;
	operations(): delegatedAdminRelationshipOperationCollection;
	operations(id: string | number): IBaseQuery<delegatedAdminRelationshipOperation> & delegatedAdminRelationshipOperationMethods;
	requests(): delegatedAdminRelationshipRequestCollection;
	requests(id: string | number): IBaseQuery<delegatedAdminRelationshipRequest> & delegatedAdminRelationshipRequestMethods;
}
export interface delegatedAdminRelationshipOData extends entityOData {
	accessAssignments: IBaseResults<delegatedAdminAccessAssignment>;
	operations: IBaseResults<delegatedAdminRelationshipOperation>;
	requests: IBaseResults<delegatedAdminRelationshipRequest>;
}
export interface delegatedAdminRelationshipCollection extends IBaseCollection<delegatedAdminRelationship, delegatedAdminRelationshipOData & delegatedAdminRelationshipProps> {
    add(values?: any): IBaseExecution<delegatedAdminRelationship>;
}
/*********************************************
* delegatedAdminRelationshipOperation
**********************************************/
export interface delegatedAdminRelationshipOperation extends delegatedAdminRelationshipOperationProps, delegatedAdminRelationshipOperationMethods { }
export interface delegatedAdminRelationshipOperationProps extends  entityProps {
	createdDateTime: any;
	data: string;
	lastModifiedDateTime: any;
	operationType: EnumTypes.delegatedAdminRelationshipOperationType;
	status: EnumTypes.longRunningOperationStatus;
}
export interface delegatedAdminRelationshipOperationMethods extends entityMethods {

}
export interface delegatedAdminRelationshipOperationOData extends entityOData {

}
export interface delegatedAdminRelationshipOperationCollection extends IBaseCollection<delegatedAdminRelationshipOperation, delegatedAdminRelationshipOperationOData & delegatedAdminRelationshipOperationProps> {
    add(values?: any): IBaseExecution<delegatedAdminRelationshipOperation>;
}
/*********************************************
* delegatedAdminRelationshipRequest
**********************************************/
export interface delegatedAdminRelationshipRequest extends delegatedAdminRelationshipRequestProps, delegatedAdminRelationshipRequestMethods { }
export interface delegatedAdminRelationshipRequestProps extends  entityProps {
	action: EnumTypes.delegatedAdminRelationshipRequestAction;
	createdDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminRelationshipRequestStatus;
}
export interface delegatedAdminRelationshipRequestMethods extends entityMethods {

}
export interface delegatedAdminRelationshipRequestOData extends entityOData {

}
export interface delegatedAdminRelationshipRequestCollection extends IBaseCollection<delegatedAdminRelationshipRequest, delegatedAdminRelationshipRequestOData & delegatedAdminRelationshipRequestProps> {
    add(values?: any): IBaseExecution<delegatedAdminRelationshipRequest>;
}
/*********************************************
* delegatedAdminServiceManagementDetail
**********************************************/
export interface delegatedAdminServiceManagementDetail extends delegatedAdminServiceManagementDetailProps, delegatedAdminServiceManagementDetailMethods { }
export interface delegatedAdminServiceManagementDetailProps extends  entityProps {
	serviceManagementUrl: string;
	serviceName: string;
}
export interface delegatedAdminServiceManagementDetailMethods extends entityMethods {

}
export interface delegatedAdminServiceManagementDetailOData extends entityOData {

}
export interface delegatedAdminServiceManagementDetailCollection extends IBaseCollection<delegatedAdminServiceManagementDetail, delegatedAdminServiceManagementDetailOData & delegatedAdminServiceManagementDetailProps> {
    add(values?: any): IBaseExecution<delegatedAdminServiceManagementDetail>;
}
/*********************************************
* delegatedPermissionClassification
**********************************************/
export interface delegatedPermissionClassification extends delegatedPermissionClassificationProps, delegatedPermissionClassificationMethods { }
export interface delegatedPermissionClassificationProps extends  entityProps {
	classification: EnumTypes.permissionClassificationType;
	permissionId: string;
	permissionName: string;
}
export interface delegatedPermissionClassificationMethods extends entityMethods {

}
export interface delegatedPermissionClassificationOData extends entityOData {

}
export interface delegatedPermissionClassificationCollection extends IBaseCollection<delegatedPermissionClassification, delegatedPermissionClassificationOData & delegatedPermissionClassificationProps> {
    add(values?: any): IBaseExecution<delegatedPermissionClassification>;
}
/*********************************************
* deletedChat
**********************************************/
export interface deletedChat extends deletedChatProps, deletedChatMethods { }
export interface deletedChatProps extends  entityProps {

}
export interface deletedChatMethods extends entityMethods {
	undoDelete(): IBaseExecution<void>;
}
export interface deletedChatOData extends entityOData {
	undoDelete(): IBaseExecution<void>;
}
export interface deletedChatCollection extends IBaseCollection<deletedChat, deletedChatOData & deletedChatProps> {
    add(values?: any): IBaseExecution<deletedChat>;
}
/*********************************************
* deletedItemContainer
**********************************************/
export interface deletedItemContainer extends deletedItemContainerProps, deletedItemContainerMethods { }
export interface deletedItemContainerProps extends  entityProps {

}
export interface deletedItemContainerMethods extends entityMethods {
	workflows(): IBaseCollection<workflow, entity & workflowOData & workflowProps>;
	workflows(id: string | number): IBaseQuery<workflow> & workflowMethods;
}
export interface deletedItemContainerOData extends entityOData {
	workflows: IBaseResults<workflow>;
}
/*********************************************
* deletedTeam
**********************************************/
export interface deletedTeam extends deletedTeamProps, deletedTeamMethods { }
export interface deletedTeamProps extends  entityProps {

}
export interface deletedTeamMethods extends entityMethods {
	channels(): channelCollection;
	channels(id: string | number): IBaseQuery<channel> & channelMethods;
}
export interface deletedTeamOData extends entityOData {
	channels: IBaseResults<channel>;
}
export interface deletedTeamCollection extends IBaseCollection<deletedTeam, deletedTeamOData & deletedTeamProps> {
    add(values?: any): IBaseExecution<deletedTeam>;
}
/*********************************************
* deltaParticipants
**********************************************/
export interface deltaParticipants extends deltaParticipantsProps, deltaParticipantsMethods { }
export interface deltaParticipantsProps extends  entityProps {
	sequenceNumber: number;
}
export interface deltaParticipantsMethods extends entityMethods {
	participants(): participantCollection;
	participants(id: string | number): IBaseQuery<participant> & participantMethods;
}
export interface deltaParticipantsOData extends entityOData {
	participants: IBaseResults<participant>;
}
/*********************************************
* departmentTemplate
**********************************************/
export interface departmentTemplate extends departmentTemplateProps, departmentTemplateMethods { }
export interface departmentTemplateProps extends  filePlanDescriptorTemplateProps {

}
export interface departmentTemplateMethods extends filePlanDescriptorTemplateMethods {

}
export interface departmentTemplateOData extends filePlanDescriptorTemplateOData {

}
/*********************************************
* detectedApp
**********************************************/
export interface detectedApp extends detectedAppProps, detectedAppMethods { }
export interface detectedAppProps extends  entityProps {
	deviceCount: number;
	displayName: string;
	platform: EnumTypes.detectedAppPlatformType;
	publisher: string;
	sizeInByte: number;
	version: string;
}
export interface detectedAppMethods extends entityMethods {
	managedDevices(): managedDeviceCollection;
	managedDevices(id: string | number): IBaseQuery<managedDevice> & managedDeviceMethods;
}
export interface detectedAppOData extends entityOData {
	managedDevices: IBaseResults<managedDevice>;
}
export interface detectedAppCollection extends IBaseCollection<detectedApp, detectedAppOData & detectedAppProps> {
    add(values?: any): IBaseExecution<detectedApp>;
}
/*********************************************
* device
**********************************************/
export interface device extends deviceProps, deviceMethods { }
export interface deviceProps extends  directoryObjectProps {
	accountEnabled: boolean;
	alternativeSecurityIds: ComplexTypes.alternativeSecurityId[];
	approximateLastSignInDateTime: any;
	complianceExpirationDateTime: any;
	deviceCategory: string;
	deviceId: string;
	deviceMetadata: string;
	deviceOwnership: string;
	deviceVersion: number;
	displayName: string;
	enrollmentProfileName: string;
	enrollmentType: string;
	isCompliant: boolean;
	isManaged: boolean;
	isManagementRestricted: boolean;
	isRooted: boolean;
	managementType: string;
	manufacturer: string;
	mdmAppId: string;
	model: string;
	onPremisesLastSyncDateTime: any;
	onPremisesSecurityIdentifier: string;
	onPremisesSyncEnabled: boolean;
	operatingSystem: string;
	operatingSystemVersion: string;
	physicalIds: Array<string>[];
	profileType: string;
	registrationDateTime: any;
	systemLabels: Array<string>[];
	trustType: string;
}
export interface deviceMethods extends directoryObjectMethods {
	memberOf(): directoryObjectCollection;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	registeredOwners(): directoryObjectCollection;
	registeredOwners(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	registeredUsers(): directoryObjectCollection;
	registeredUsers(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	transitiveMemberOf(): directoryObjectCollection;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
}
export interface deviceOData extends directoryObjectOData {
	memberOf: IBaseResults<directoryObject>;
	registeredOwners: IBaseResults<directoryObject>;
	registeredUsers: IBaseResults<directoryObject>;
	transitiveMemberOf: IBaseResults<directoryObject>;
	extensions: IBaseResults<extension>;
}
/*********************************************
* deviceAndAppManagementRoleAssignment
**********************************************/
export interface deviceAndAppManagementRoleAssignment extends deviceAndAppManagementRoleAssignmentProps, deviceAndAppManagementRoleAssignmentMethods { }
export interface deviceAndAppManagementRoleAssignmentProps extends  roleAssignmentProps {
	members: Array<string>[];
}
export interface deviceAndAppManagementRoleAssignmentMethods extends roleAssignmentMethods {

}
export interface deviceAndAppManagementRoleAssignmentOData extends roleAssignmentOData {

}
export interface deviceAndAppManagementRoleAssignmentCollection extends IBaseCollection<deviceAndAppManagementRoleAssignment, deviceAndAppManagementRoleAssignmentOData & deviceAndAppManagementRoleAssignmentProps> {
    add(values?: any): IBaseExecution<deviceAndAppManagementRoleAssignment>;
}
/*********************************************
* deviceAndAppManagementRoleDefinition
**********************************************/
export interface deviceAndAppManagementRoleDefinition extends deviceAndAppManagementRoleDefinitionProps, deviceAndAppManagementRoleDefinitionMethods { }
export interface deviceAndAppManagementRoleDefinitionProps extends  roleDefinitionProps {

}
export interface deviceAndAppManagementRoleDefinitionMethods extends roleDefinitionMethods {

}
export interface deviceAndAppManagementRoleDefinitionOData extends roleDefinitionOData {

}
/*********************************************
* deviceAppManagement
**********************************************/
export interface deviceAppManagement extends deviceAppManagementProps, deviceAppManagementMethods { }
export interface deviceAppManagementProps extends  entityProps {
	isEnabledForMicrosoftStoreForBusiness: boolean;
	microsoftStoreForBusinessLanguage: string;
	microsoftStoreForBusinessLastCompletedApplicationSyncTime: any;
	microsoftStoreForBusinessLastSuccessfulSyncDateTime: any;
}
export interface deviceAppManagementMethods extends entityMethods {
	managedEBooks(): managedEBookCollection;
	managedEBooks(id: string | number): IBaseQuery<managedEBook> & managedEBookMethods;
	mobileAppCategories(): mobileAppCategoryCollection;
	mobileAppCategories(id: string | number): IBaseQuery<mobileAppCategory> & mobileAppCategoryMethods;
	mobileAppConfigurations(): managedDeviceMobileAppConfigurationCollection;
	mobileAppConfigurations(id: string | number): IBaseQuery<managedDeviceMobileAppConfiguration> & managedDeviceMobileAppConfigurationMethods;
	mobileApps(): mobileAppCollection;
	mobileApps(id: string | number): IBaseQuery<mobileApp> & mobileAppMethods;
	vppTokens(): vppTokenCollection;
	vppTokens(id: string | number): IBaseQuery<vppToken> & vppTokenMethods;
	androidManagedAppProtections(): androidManagedAppProtectionCollection;
	androidManagedAppProtections(id: string | number): IBaseQuery<androidManagedAppProtection> & androidManagedAppProtectionMethods;
	defaultManagedAppProtections(): defaultManagedAppProtectionCollection;
	defaultManagedAppProtections(id: string | number): IBaseQuery<defaultManagedAppProtection> & defaultManagedAppProtectionMethods;
	iosManagedAppProtections(): iosManagedAppProtectionCollection;
	iosManagedAppProtections(id: string | number): IBaseQuery<iosManagedAppProtection> & iosManagedAppProtectionMethods;
	managedAppPolicies(): managedAppPolicyCollection;
	managedAppPolicies(id: string | number): IBaseQuery<managedAppPolicy> & managedAppPolicyMethods;
	managedAppRegistrations(): managedAppRegistrationCollection;
	managedAppRegistrations(id: string | number): IBaseQuery<managedAppRegistration> & managedAppRegistrationMethods;
	managedAppStatuses(): managedAppStatusCollection;
	managedAppStatuses(id: string | number): IBaseQuery<managedAppStatus> & managedAppStatusMethods;
	mdmWindowsInformationProtectionPolicies(): mdmWindowsInformationProtectionPolicyCollection;
	mdmWindowsInformationProtectionPolicies(id: string | number): IBaseQuery<mdmWindowsInformationProtectionPolicy> & mdmWindowsInformationProtectionPolicyMethods;
	targetedManagedAppConfigurations(): targetedManagedAppConfigurationCollection;
	targetedManagedAppConfigurations(id: string | number): IBaseQuery<targetedManagedAppConfiguration> & targetedManagedAppConfigurationMethods;
	windowsInformationProtectionPolicies(): windowsInformationProtectionPolicyCollection;
	windowsInformationProtectionPolicies(id: string | number): IBaseQuery<windowsInformationProtectionPolicy> & windowsInformationProtectionPolicyMethods;
	syncMicrosoftStoreForBusinessApps(): IBaseExecution<void>;
}
export interface deviceAppManagementOData extends entityOData {
	managedEBooks: IBaseResults<managedEBook>;
	mobileAppCategories: IBaseResults<mobileAppCategory>;
	mobileAppConfigurations: IBaseResults<managedDeviceMobileAppConfiguration>;
	mobileApps: IBaseResults<mobileApp>;
	vppTokens: IBaseResults<vppToken>;
	androidManagedAppProtections: IBaseResults<androidManagedAppProtection>;
	defaultManagedAppProtections: IBaseResults<defaultManagedAppProtection>;
	iosManagedAppProtections: IBaseResults<iosManagedAppProtection>;
	managedAppPolicies: IBaseResults<managedAppPolicy>;
	managedAppRegistrations: IBaseResults<managedAppRegistration>;
	managedAppStatuses: IBaseResults<managedAppStatus>;
	mdmWindowsInformationProtectionPolicies: IBaseResults<mdmWindowsInformationProtectionPolicy>;
	targetedManagedAppConfigurations: IBaseResults<targetedManagedAppConfiguration>;
	windowsInformationProtectionPolicies: IBaseResults<windowsInformationProtectionPolicy>;
	syncMicrosoftStoreForBusinessApps(): IBaseExecution<void>;
}
/*********************************************
* deviceCategory
**********************************************/
export interface deviceCategory extends deviceCategoryProps, deviceCategoryMethods { }
export interface deviceCategoryProps extends  entityProps {
	description: string;
	displayName: string;
}
export interface deviceCategoryMethods extends entityMethods {

}
export interface deviceCategoryOData extends entityOData {

}
export interface deviceCategoryCollection extends IBaseCollection<deviceCategory, deviceCategoryOData & deviceCategoryProps> {
    add(values?: any): IBaseExecution<deviceCategory>;
}
/*********************************************
* deviceComplianceActionItem
**********************************************/
export interface deviceComplianceActionItem extends deviceComplianceActionItemProps, deviceComplianceActionItemMethods { }
export interface deviceComplianceActionItemProps extends  entityProps {
	actionType: EnumTypes.deviceComplianceActionType;
	gracePeriodHours: number;
	notificationMessageCCList: Array<string>[];
	notificationTemplateId: string;
}
export interface deviceComplianceActionItemMethods extends entityMethods {

}
export interface deviceComplianceActionItemOData extends entityOData {

}
export interface deviceComplianceActionItemCollection extends IBaseCollection<deviceComplianceActionItem, deviceComplianceActionItemOData & deviceComplianceActionItemProps> {
    add(values?: any): IBaseExecution<deviceComplianceActionItem>;
}
/*********************************************
* deviceComplianceDeviceOverview
**********************************************/
export interface deviceComplianceDeviceOverview extends deviceComplianceDeviceOverviewProps, deviceComplianceDeviceOverviewMethods { }
export interface deviceComplianceDeviceOverviewProps extends  entityProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceComplianceDeviceOverviewMethods extends entityMethods {

}
export interface deviceComplianceDeviceOverviewOData extends entityOData {

}
/*********************************************
* deviceComplianceDeviceStatus
**********************************************/
export interface deviceComplianceDeviceStatus extends deviceComplianceDeviceStatusProps, deviceComplianceDeviceStatusMethods { }
export interface deviceComplianceDeviceStatusProps extends  entityProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;
}
export interface deviceComplianceDeviceStatusMethods extends entityMethods {

}
export interface deviceComplianceDeviceStatusOData extends entityOData {

}
export interface deviceComplianceDeviceStatusCollection extends IBaseCollection<deviceComplianceDeviceStatus, deviceComplianceDeviceStatusOData & deviceComplianceDeviceStatusProps> {
    add(values?: any): IBaseExecution<deviceComplianceDeviceStatus>;
}
/*********************************************
* deviceCompliancePolicy
**********************************************/
export interface deviceCompliancePolicy extends deviceCompliancePolicyProps, deviceCompliancePolicyMethods { }
export interface deviceCompliancePolicyProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
}
export interface deviceCompliancePolicyMethods extends entityMethods {
	assignments(): deviceCompliancePolicyAssignmentCollection;
	assignments(id: string | number): IBaseQuery<deviceCompliancePolicyAssignment> & deviceCompliancePolicyAssignmentMethods;
	deviceSettingStateSummaries(): settingStateDeviceSummaryCollection;
	deviceSettingStateSummaries(id: string | number): IBaseQuery<settingStateDeviceSummary> & settingStateDeviceSummaryMethods;
	deviceStatuses(): deviceComplianceDeviceStatusCollection;
	deviceStatuses(id: string | number): IBaseQuery<deviceComplianceDeviceStatus> & deviceComplianceDeviceStatusMethods;
	deviceStatusOverview(): IBaseQuery<deviceComplianceDeviceOverview> & deviceComplianceDeviceOverviewMethods;
	scheduledActionsForRule(): deviceComplianceScheduledActionForRuleCollection;
	scheduledActionsForRule(id: string | number): IBaseQuery<deviceComplianceScheduledActionForRule> & deviceComplianceScheduledActionForRuleMethods;
	userStatuses(): deviceComplianceUserStatusCollection;
	userStatuses(id: string | number): IBaseQuery<deviceComplianceUserStatus> & deviceComplianceUserStatusMethods;
	userStatusOverview(): IBaseQuery<deviceComplianceUserOverview> & deviceComplianceUserOverviewMethods;
	assign(assignments): IBaseExecution<deviceCompliancePolicyAssignment[]>;
	scheduleActionsForRules(deviceComplianceScheduledActionForRules): IBaseExecution<void>;
}
export interface deviceCompliancePolicyOData extends entityOData {
	assignments: IBaseResults<deviceCompliancePolicyAssignment>;
	deviceSettingStateSummaries: IBaseResults<settingStateDeviceSummary>;
	deviceStatuses: IBaseResults<deviceComplianceDeviceStatus>;
	deviceStatusOverview: deviceComplianceDeviceOverview;
	scheduledActionsForRule: IBaseResults<deviceComplianceScheduledActionForRule>;
	userStatuses: IBaseResults<deviceComplianceUserStatus>;
	userStatusOverview: deviceComplianceUserOverview;
	assign(assignments): IBaseExecution<deviceCompliancePolicyAssignment[]>;
	scheduleActionsForRules(deviceComplianceScheduledActionForRules): IBaseExecution<void>;
}
export interface deviceCompliancePolicyCollection extends IBaseCollection<deviceCompliancePolicy, deviceCompliancePolicyOData & deviceCompliancePolicyProps> {
    add(values?: any): IBaseExecution<deviceCompliancePolicy>;
}
/*********************************************
* deviceCompliancePolicyAssignment
**********************************************/
export interface deviceCompliancePolicyAssignment extends deviceCompliancePolicyAssignmentProps, deviceCompliancePolicyAssignmentMethods { }
export interface deviceCompliancePolicyAssignmentProps extends  entityProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface deviceCompliancePolicyAssignmentMethods extends entityMethods {

}
export interface deviceCompliancePolicyAssignmentOData extends entityOData {

}
export interface deviceCompliancePolicyAssignmentCollection extends IBaseCollection<deviceCompliancePolicyAssignment, deviceCompliancePolicyAssignmentOData & deviceCompliancePolicyAssignmentProps> {
    add(values?: any): IBaseExecution<deviceCompliancePolicyAssignment>;
}
/*********************************************
* deviceCompliancePolicyDeviceStateSummary
**********************************************/
export interface deviceCompliancePolicyDeviceStateSummary extends deviceCompliancePolicyDeviceStateSummaryProps, deviceCompliancePolicyDeviceStateSummaryMethods { }
export interface deviceCompliancePolicyDeviceStateSummaryProps extends  entityProps {
	compliantDeviceCount: number;
	configManagerCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	inGracePeriodCount: number;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	remediatedDeviceCount: number;
	unknownDeviceCount: number;
}
export interface deviceCompliancePolicyDeviceStateSummaryMethods extends entityMethods {

}
export interface deviceCompliancePolicyDeviceStateSummaryOData extends entityOData {

}
/*********************************************
* deviceCompliancePolicySettingStateSummary
**********************************************/
export interface deviceCompliancePolicySettingStateSummary extends deviceCompliancePolicySettingStateSummaryProps, deviceCompliancePolicySettingStateSummaryMethods { }
export interface deviceCompliancePolicySettingStateSummaryProps extends  entityProps {
	compliantDeviceCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	platformType: EnumTypes.policyPlatformType;
	remediatedDeviceCount: number;
	setting: string;
	settingName: string;
	unknownDeviceCount: number;
}
export interface deviceCompliancePolicySettingStateSummaryMethods extends entityMethods {
	deviceComplianceSettingStates(): deviceComplianceSettingStateCollection;
	deviceComplianceSettingStates(id: string | number): IBaseQuery<deviceComplianceSettingState> & deviceComplianceSettingStateMethods;
}
export interface deviceCompliancePolicySettingStateSummaryOData extends entityOData {
	deviceComplianceSettingStates: IBaseResults<deviceComplianceSettingState>;
}
export interface deviceCompliancePolicySettingStateSummaryCollection extends IBaseCollection<deviceCompliancePolicySettingStateSummary, deviceCompliancePolicySettingStateSummaryOData & deviceCompliancePolicySettingStateSummaryProps> {
    add(values?: any): IBaseExecution<deviceCompliancePolicySettingStateSummary>;
}
/*********************************************
* deviceCompliancePolicyState
**********************************************/
export interface deviceCompliancePolicyState extends deviceCompliancePolicyStateProps, deviceCompliancePolicyStateMethods { }
export interface deviceCompliancePolicyStateProps extends  entityProps {
	displayName: string;
	platformType: EnumTypes.policyPlatformType;
	settingCount: number;
	settingStates: ComplexTypes.deviceCompliancePolicySettingState[];
	state: EnumTypes.complianceStatus;
	version: number;
}
export interface deviceCompliancePolicyStateMethods extends entityMethods {

}
export interface deviceCompliancePolicyStateOData extends entityOData {

}
export interface deviceCompliancePolicyStateCollection extends IBaseCollection<deviceCompliancePolicyState, deviceCompliancePolicyStateOData & deviceCompliancePolicyStateProps> {
    add(values?: any): IBaseExecution<deviceCompliancePolicyState>;
}
/*********************************************
* deviceComplianceScheduledActionForRule
**********************************************/
export interface deviceComplianceScheduledActionForRule extends deviceComplianceScheduledActionForRuleProps, deviceComplianceScheduledActionForRuleMethods { }
export interface deviceComplianceScheduledActionForRuleProps extends  entityProps {
	ruleName: string;
}
export interface deviceComplianceScheduledActionForRuleMethods extends entityMethods {
	scheduledActionConfigurations(): deviceComplianceActionItemCollection;
	scheduledActionConfigurations(id: string | number): IBaseQuery<deviceComplianceActionItem> & deviceComplianceActionItemMethods;
}
export interface deviceComplianceScheduledActionForRuleOData extends entityOData {
	scheduledActionConfigurations: IBaseResults<deviceComplianceActionItem>;
}
export interface deviceComplianceScheduledActionForRuleCollection extends IBaseCollection<deviceComplianceScheduledActionForRule, deviceComplianceScheduledActionForRuleOData & deviceComplianceScheduledActionForRuleProps> {
    add(values?: any): IBaseExecution<deviceComplianceScheduledActionForRule>;
}
/*********************************************
* deviceComplianceSettingState
**********************************************/
export interface deviceComplianceSettingState extends deviceComplianceSettingStateProps, deviceComplianceSettingStateMethods { }
export interface deviceComplianceSettingStateProps extends  entityProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceId: string;
	deviceModel: string;
	deviceName: string;
	setting: string;
	settingName: string;
	state: EnumTypes.complianceStatus;
	userEmail: string;
	userId: string;
	userName: string;
	userPrincipalName: string;
}
export interface deviceComplianceSettingStateMethods extends entityMethods {

}
export interface deviceComplianceSettingStateOData extends entityOData {

}
export interface deviceComplianceSettingStateCollection extends IBaseCollection<deviceComplianceSettingState, deviceComplianceSettingStateOData & deviceComplianceSettingStateProps> {
    add(values?: any): IBaseExecution<deviceComplianceSettingState>;
}
/*********************************************
* deviceComplianceUserOverview
**********************************************/
export interface deviceComplianceUserOverview extends deviceComplianceUserOverviewProps, deviceComplianceUserOverviewMethods { }
export interface deviceComplianceUserOverviewProps extends  entityProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceComplianceUserOverviewMethods extends entityMethods {

}
export interface deviceComplianceUserOverviewOData extends entityOData {

}
/*********************************************
* deviceComplianceUserStatus
**********************************************/
export interface deviceComplianceUserStatus extends deviceComplianceUserStatusProps, deviceComplianceUserStatusMethods { }
export interface deviceComplianceUserStatusProps extends  entityProps {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface deviceComplianceUserStatusMethods extends entityMethods {

}
export interface deviceComplianceUserStatusOData extends entityOData {

}
export interface deviceComplianceUserStatusCollection extends IBaseCollection<deviceComplianceUserStatus, deviceComplianceUserStatusOData & deviceComplianceUserStatusProps> {
    add(values?: any): IBaseExecution<deviceComplianceUserStatus>;
}
/*********************************************
* deviceConfiguration
**********************************************/
export interface deviceConfiguration extends deviceConfigurationProps, deviceConfigurationMethods { }
export interface deviceConfigurationProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
}
export interface deviceConfigurationMethods extends entityMethods {
	assignments(): deviceConfigurationAssignmentCollection;
	assignments(id: string | number): IBaseQuery<deviceConfigurationAssignment> & deviceConfigurationAssignmentMethods;
	deviceSettingStateSummaries(): settingStateDeviceSummaryCollection;
	deviceSettingStateSummaries(id: string | number): IBaseQuery<settingStateDeviceSummary> & settingStateDeviceSummaryMethods;
	deviceStatuses(): deviceConfigurationDeviceStatusCollection;
	deviceStatuses(id: string | number): IBaseQuery<deviceConfigurationDeviceStatus> & deviceConfigurationDeviceStatusMethods;
	deviceStatusOverview(): IBaseQuery<deviceConfigurationDeviceOverview> & deviceConfigurationDeviceOverviewMethods;
	userStatuses(): deviceConfigurationUserStatusCollection;
	userStatuses(id: string | number): IBaseQuery<deviceConfigurationUserStatus> & deviceConfigurationUserStatusMethods;
	userStatusOverview(): IBaseQuery<deviceConfigurationUserOverview> & deviceConfigurationUserOverviewMethods;
	assign(assignments): IBaseExecution<deviceConfigurationAssignment[]>;
	getOmaSettingPlainTextValue(secretReferenceValueId): string;
}
export interface deviceConfigurationOData extends entityOData {
	assignments: IBaseResults<deviceConfigurationAssignment>;
	deviceSettingStateSummaries: IBaseResults<settingStateDeviceSummary>;
	deviceStatuses: IBaseResults<deviceConfigurationDeviceStatus>;
	deviceStatusOverview: deviceConfigurationDeviceOverview;
	userStatuses: IBaseResults<deviceConfigurationUserStatus>;
	userStatusOverview: deviceConfigurationUserOverview;
	assign(assignments): IBaseExecution<deviceConfigurationAssignment[]>;
	getOmaSettingPlainTextValue(secretReferenceValueId): string;
}
export interface deviceConfigurationCollection extends IBaseCollection<deviceConfiguration, deviceConfigurationOData & deviceConfigurationProps> {
    add(values?: any): IBaseExecution<deviceConfiguration>;
}
/*********************************************
* deviceConfigurationAssignment
**********************************************/
export interface deviceConfigurationAssignment extends deviceConfigurationAssignmentProps, deviceConfigurationAssignmentMethods { }
export interface deviceConfigurationAssignmentProps extends  entityProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface deviceConfigurationAssignmentMethods extends entityMethods {

}
export interface deviceConfigurationAssignmentOData extends entityOData {

}
export interface deviceConfigurationAssignmentCollection extends IBaseCollection<deviceConfigurationAssignment, deviceConfigurationAssignmentOData & deviceConfigurationAssignmentProps> {
    add(values?: any): IBaseExecution<deviceConfigurationAssignment>;
}
/*********************************************
* deviceConfigurationDeviceOverview
**********************************************/
export interface deviceConfigurationDeviceOverview extends deviceConfigurationDeviceOverviewProps, deviceConfigurationDeviceOverviewMethods { }
export interface deviceConfigurationDeviceOverviewProps extends  entityProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceConfigurationDeviceOverviewMethods extends entityMethods {

}
export interface deviceConfigurationDeviceOverviewOData extends entityOData {

}
/*********************************************
* deviceConfigurationDeviceStateSummary
**********************************************/
export interface deviceConfigurationDeviceStateSummary extends deviceConfigurationDeviceStateSummaryProps, deviceConfigurationDeviceStateSummaryMethods { }
export interface deviceConfigurationDeviceStateSummaryProps extends  entityProps {
	compliantDeviceCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	remediatedDeviceCount: number;
	unknownDeviceCount: number;
}
export interface deviceConfigurationDeviceStateSummaryMethods extends entityMethods {

}
export interface deviceConfigurationDeviceStateSummaryOData extends entityOData {

}
/*********************************************
* deviceConfigurationDeviceStatus
**********************************************/
export interface deviceConfigurationDeviceStatus extends deviceConfigurationDeviceStatusProps, deviceConfigurationDeviceStatusMethods { }
export interface deviceConfigurationDeviceStatusProps extends  entityProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;
}
export interface deviceConfigurationDeviceStatusMethods extends entityMethods {

}
export interface deviceConfigurationDeviceStatusOData extends entityOData {

}
export interface deviceConfigurationDeviceStatusCollection extends IBaseCollection<deviceConfigurationDeviceStatus, deviceConfigurationDeviceStatusOData & deviceConfigurationDeviceStatusProps> {
    add(values?: any): IBaseExecution<deviceConfigurationDeviceStatus>;
}
/*********************************************
* deviceConfigurationState
**********************************************/
export interface deviceConfigurationState extends deviceConfigurationStateProps, deviceConfigurationStateMethods { }
export interface deviceConfigurationStateProps extends  entityProps {
	displayName: string;
	platformType: EnumTypes.policyPlatformType;
	settingCount: number;
	settingStates: ComplexTypes.deviceConfigurationSettingState[];
	state: EnumTypes.complianceStatus;
	version: number;
}
export interface deviceConfigurationStateMethods extends entityMethods {

}
export interface deviceConfigurationStateOData extends entityOData {

}
export interface deviceConfigurationStateCollection extends IBaseCollection<deviceConfigurationState, deviceConfigurationStateOData & deviceConfigurationStateProps> {
    add(values?: any): IBaseExecution<deviceConfigurationState>;
}
/*********************************************
* deviceConfigurationUserOverview
**********************************************/
export interface deviceConfigurationUserOverview extends deviceConfigurationUserOverviewProps, deviceConfigurationUserOverviewMethods { }
export interface deviceConfigurationUserOverviewProps extends  entityProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceConfigurationUserOverviewMethods extends entityMethods {

}
export interface deviceConfigurationUserOverviewOData extends entityOData {

}
/*********************************************
* deviceConfigurationUserStatus
**********************************************/
export interface deviceConfigurationUserStatus extends deviceConfigurationUserStatusProps, deviceConfigurationUserStatusMethods { }
export interface deviceConfigurationUserStatusProps extends  entityProps {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface deviceConfigurationUserStatusMethods extends entityMethods {

}
export interface deviceConfigurationUserStatusOData extends entityOData {

}
export interface deviceConfigurationUserStatusCollection extends IBaseCollection<deviceConfigurationUserStatus, deviceConfigurationUserStatusOData & deviceConfigurationUserStatusProps> {
    add(values?: any): IBaseExecution<deviceConfigurationUserStatus>;
}
/*********************************************
* deviceEnrollmentConfiguration
**********************************************/
export interface deviceEnrollmentConfiguration extends deviceEnrollmentConfigurationProps, deviceEnrollmentConfigurationMethods { }
export interface deviceEnrollmentConfigurationProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	priority: number;
	version: number;
}
export interface deviceEnrollmentConfigurationMethods extends entityMethods {
	assignments(): enrollmentConfigurationAssignmentCollection;
	assignments(id: string | number): IBaseQuery<enrollmentConfigurationAssignment> & enrollmentConfigurationAssignmentMethods;
	assign(enrollmentConfigurationAssignments): IBaseExecution<void>;
	setPriority(priority): IBaseExecution<void>;
}
export interface deviceEnrollmentConfigurationOData extends entityOData {
	assignments: IBaseResults<enrollmentConfigurationAssignment>;
	assign(enrollmentConfigurationAssignments): IBaseExecution<void>;
	setPriority(priority): IBaseExecution<void>;
}
export interface deviceEnrollmentConfigurationCollection extends IBaseCollection<deviceEnrollmentConfiguration, deviceEnrollmentConfigurationOData & deviceEnrollmentConfigurationProps> {
    add(values?: any): IBaseExecution<deviceEnrollmentConfiguration>;
}
/*********************************************
* deviceEnrollmentLimitConfiguration
**********************************************/
export interface deviceEnrollmentLimitConfiguration extends deviceEnrollmentLimitConfigurationProps, deviceEnrollmentLimitConfigurationMethods { }
export interface deviceEnrollmentLimitConfigurationProps extends  deviceEnrollmentConfigurationProps {
	limit: number;
}
export interface deviceEnrollmentLimitConfigurationMethods extends deviceEnrollmentConfigurationMethods {

}
export interface deviceEnrollmentLimitConfigurationOData extends deviceEnrollmentConfigurationOData {

}
/*********************************************
* deviceEnrollmentPlatformRestrictionsConfiguration
**********************************************/
export interface deviceEnrollmentPlatformRestrictionsConfiguration extends deviceEnrollmentPlatformRestrictionsConfigurationProps, deviceEnrollmentPlatformRestrictionsConfigurationMethods { }
export interface deviceEnrollmentPlatformRestrictionsConfigurationProps extends  deviceEnrollmentConfigurationProps {
	androidRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	iosRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	macOSRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsMobileRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
}
export interface deviceEnrollmentPlatformRestrictionsConfigurationMethods extends deviceEnrollmentConfigurationMethods {

}
export interface deviceEnrollmentPlatformRestrictionsConfigurationOData extends deviceEnrollmentConfigurationOData {

}
/*********************************************
* deviceEnrollmentWindowsHelloForBusinessConfiguration
**********************************************/
export interface deviceEnrollmentWindowsHelloForBusinessConfiguration extends deviceEnrollmentWindowsHelloForBusinessConfigurationProps, deviceEnrollmentWindowsHelloForBusinessConfigurationMethods { }
export interface deviceEnrollmentWindowsHelloForBusinessConfigurationProps extends  deviceEnrollmentConfigurationProps {
	enhancedBiometricsState: EnumTypes.enablement;
	pinExpirationInDays: number;
	pinLowercaseCharactersUsage: EnumTypes.windowsHelloForBusinessPinUsage;
	pinMaximumLength: number;
	pinMinimumLength: number;
	pinPreviousBlockCount: number;
	pinSpecialCharactersUsage: EnumTypes.windowsHelloForBusinessPinUsage;
	pinUppercaseCharactersUsage: EnumTypes.windowsHelloForBusinessPinUsage;
	remotePassportEnabled: boolean;
	securityDeviceRequired: boolean;
	state: EnumTypes.enablement;
	unlockWithBiometricsEnabled: boolean;
}
export interface deviceEnrollmentWindowsHelloForBusinessConfigurationMethods extends deviceEnrollmentConfigurationMethods {

}
export interface deviceEnrollmentWindowsHelloForBusinessConfigurationOData extends deviceEnrollmentConfigurationOData {

}
/*********************************************
* deviceInstallState
**********************************************/
export interface deviceInstallState extends deviceInstallStateProps, deviceInstallStateMethods { }
export interface deviceInstallStateProps extends  entityProps {
	deviceId: string;
	deviceName: string;
	errorCode: string;
	installState: EnumTypes.installState;
	lastSyncDateTime: any;
	osDescription: string;
	osVersion: string;
	userName: string;
}
export interface deviceInstallStateMethods extends entityMethods {

}
export interface deviceInstallStateOData extends entityOData {

}
export interface deviceInstallStateCollection extends IBaseCollection<deviceInstallState, deviceInstallStateOData & deviceInstallStateProps> {
    add(values?: any): IBaseExecution<deviceInstallState>;
}
/*********************************************
* deviceLocalCredentialInfo
**********************************************/
export interface deviceLocalCredentialInfo extends deviceLocalCredentialInfoProps, deviceLocalCredentialInfoMethods { }
export interface deviceLocalCredentialInfoProps extends  entityProps {
	credentials: ComplexTypes.deviceLocalCredential[];
	deviceName: string;
	lastBackupDateTime: any;
	refreshDateTime: any;
}
export interface deviceLocalCredentialInfoMethods extends entityMethods {

}
export interface deviceLocalCredentialInfoOData extends entityOData {

}
export interface deviceLocalCredentialInfoCollection extends IBaseCollection<deviceLocalCredentialInfo, deviceLocalCredentialInfoOData & deviceLocalCredentialInfoProps> {
    add(values?: any): IBaseExecution<deviceLocalCredentialInfo>;
}
/*********************************************
* deviceLogCollectionResponse
**********************************************/
export interface deviceLogCollectionResponse extends deviceLogCollectionResponseProps, deviceLogCollectionResponseMethods { }
export interface deviceLogCollectionResponseProps extends  entityProps {
	enrolledByUser: string;
	expirationDateTimeUTC: any;
	initiatedByUserPrincipalName: string;
	managedDeviceId: any;
	receivedDateTimeUTC: any;
	requestedDateTimeUTC: any;
	sizeInKB: number;
	status: EnumTypes.appLogUploadState;
}
export interface deviceLogCollectionResponseMethods extends entityMethods {
	createDownloadUrl(): IBaseExecution<string>;
}
export interface deviceLogCollectionResponseOData extends entityOData {
	createDownloadUrl(): IBaseExecution<string>;
}
export interface deviceLogCollectionResponseCollection extends IBaseCollection<deviceLogCollectionResponse, deviceLogCollectionResponseOData & deviceLogCollectionResponseProps> {
    add(values?: any): IBaseExecution<deviceLogCollectionResponse>;
}
/*********************************************
* deviceManagement
**********************************************/
export interface deviceManagement extends deviceManagementProps, deviceManagementMethods { }
export interface deviceManagementProps extends  entityProps {
	intuneAccountId: any;
	settings: ComplexTypes.deviceManagementSettings;
	intuneBrand: ComplexTypes.intuneBrand;
	deviceProtectionOverview: ComplexTypes.deviceProtectionOverview;
	subscriptionState: EnumTypes.deviceManagementSubscriptionState;
	userExperienceAnalyticsSettings: ComplexTypes.userExperienceAnalyticsSettings;
	windowsMalwareOverview: ComplexTypes.windowsMalwareOverview;
}
export interface deviceManagementMethods extends entityMethods {
	auditEvents(): auditEventCollection;
	auditEvents(id: string | number): IBaseQuery<auditEvent> & auditEventMethods;
	virtualEndpoint(): IBaseQuery<virtualEndpoint> & virtualEndpointMethods;
	termsAndConditions(): termsAndConditionsCollection;
	termsAndConditions(id: string | number): IBaseQuery<termsAndConditions> & termsAndConditionsMethods;
	deviceCompliancePolicies(): deviceCompliancePolicyCollection;
	deviceCompliancePolicies(id: string | number): IBaseQuery<deviceCompliancePolicy> & deviceCompliancePolicyMethods;
	deviceCompliancePolicyDeviceStateSummary(): IBaseQuery<deviceCompliancePolicyDeviceStateSummary> & deviceCompliancePolicyDeviceStateSummaryMethods;
	deviceCompliancePolicySettingStateSummaries(): deviceCompliancePolicySettingStateSummaryCollection;
	deviceCompliancePolicySettingStateSummaries(id: string | number): IBaseQuery<deviceCompliancePolicySettingStateSummary> & deviceCompliancePolicySettingStateSummaryMethods;
	deviceConfigurationDeviceStateSummaries(): IBaseQuery<deviceConfigurationDeviceStateSummary> & deviceConfigurationDeviceStateSummaryMethods;
	deviceConfigurations(): deviceConfigurationCollection;
	deviceConfigurations(id: string | number): IBaseQuery<deviceConfiguration> & deviceConfigurationMethods;
	iosUpdateStatuses(): iosUpdateDeviceStatusCollection;
	iosUpdateStatuses(id: string | number): IBaseQuery<iosUpdateDeviceStatus> & iosUpdateDeviceStatusMethods;
	softwareUpdateStatusSummary(): IBaseQuery<softwareUpdateStatusSummary> & softwareUpdateStatusSummaryMethods;
	complianceManagementPartners(): complianceManagementPartnerCollection;
	complianceManagementPartners(id: string | number): IBaseQuery<complianceManagementPartner> & complianceManagementPartnerMethods;
	conditionalAccessSettings(): IBaseQuery<onPremisesConditionalAccessSettings> & onPremisesConditionalAccessSettingsMethods;
	deviceCategories(): deviceCategoryCollection;
	deviceCategories(id: string | number): IBaseQuery<deviceCategory> & deviceCategoryMethods;
	deviceEnrollmentConfigurations(): deviceEnrollmentConfigurationCollection;
	deviceEnrollmentConfigurations(id: string | number): IBaseQuery<deviceEnrollmentConfiguration> & deviceEnrollmentConfigurationMethods;
	deviceManagementPartners(): deviceManagementPartnerCollection;
	deviceManagementPartners(id: string | number): IBaseQuery<deviceManagementPartner> & deviceManagementPartnerMethods;
	exchangeConnectors(): deviceManagementExchangeConnectorCollection;
	exchangeConnectors(id: string | number): IBaseQuery<deviceManagementExchangeConnector> & deviceManagementExchangeConnectorMethods;
	mobileThreatDefenseConnectors(): mobileThreatDefenseConnectorCollection;
	mobileThreatDefenseConnectors(id: string | number): IBaseQuery<mobileThreatDefenseConnector> & mobileThreatDefenseConnectorMethods;
	applePushNotificationCertificate(): IBaseQuery<applePushNotificationCertificate> & applePushNotificationCertificateMethods;
	detectedApps(): detectedAppCollection;
	detectedApps(id: string | number): IBaseQuery<detectedApp> & detectedAppMethods;
	managedDeviceOverview(): IBaseQuery<managedDeviceOverview> & managedDeviceOverviewMethods;
	managedDevices(): managedDeviceCollection;
	managedDevices(id: string | number): IBaseQuery<managedDevice> & managedDeviceMethods;
	mobileAppTroubleshootingEvents(): mobileAppTroubleshootingEventCollection;
	mobileAppTroubleshootingEvents(id: string | number): IBaseQuery<mobileAppTroubleshootingEvent> & mobileAppTroubleshootingEventMethods;
	userExperienceAnalyticsAppHealthApplicationPerformance(): userExperienceAnalyticsAppHealthApplicationPerformanceCollection;
	userExperienceAnalyticsAppHealthApplicationPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthApplicationPerformance> & userExperienceAnalyticsAppHealthApplicationPerformanceMethods;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails(): userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollection;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails> & userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsMethods;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId(): userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollection;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId> & userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdMethods;
	userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion(): userExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollection;
	userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion> & userExperienceAnalyticsAppHealthAppPerformanceByOSVersionMethods;
	userExperienceAnalyticsAppHealthDeviceModelPerformance(): userExperienceAnalyticsAppHealthDeviceModelPerformanceCollection;
	userExperienceAnalyticsAppHealthDeviceModelPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDeviceModelPerformance> & userExperienceAnalyticsAppHealthDeviceModelPerformanceMethods;
	userExperienceAnalyticsAppHealthDevicePerformance(): userExperienceAnalyticsAppHealthDevicePerformanceCollection;
	userExperienceAnalyticsAppHealthDevicePerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformance> & userExperienceAnalyticsAppHealthDevicePerformanceMethods;
	userExperienceAnalyticsAppHealthDevicePerformanceDetails(): userExperienceAnalyticsAppHealthDevicePerformanceDetailsCollection;
	userExperienceAnalyticsAppHealthDevicePerformanceDetails(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformanceDetails> & userExperienceAnalyticsAppHealthDevicePerformanceDetailsMethods;
	userExperienceAnalyticsAppHealthOSVersionPerformance(): userExperienceAnalyticsAppHealthOSVersionPerformanceCollection;
	userExperienceAnalyticsAppHealthOSVersionPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthOSVersionPerformance> & userExperienceAnalyticsAppHealthOSVersionPerformanceMethods;
	userExperienceAnalyticsAppHealthOverview(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	userExperienceAnalyticsBaselines(): userExperienceAnalyticsBaselineCollection;
	userExperienceAnalyticsBaselines(id: string | number): IBaseQuery<userExperienceAnalyticsBaseline> & userExperienceAnalyticsBaselineMethods;
	userExperienceAnalyticsCategories(): userExperienceAnalyticsCategoryCollection;
	userExperienceAnalyticsCategories(id: string | number): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	userExperienceAnalyticsDevicePerformance(): userExperienceAnalyticsDevicePerformanceCollection;
	userExperienceAnalyticsDevicePerformance(id: string | number): IBaseQuery<userExperienceAnalyticsDevicePerformance> & userExperienceAnalyticsDevicePerformanceMethods;
	userExperienceAnalyticsDeviceScores(): userExperienceAnalyticsDeviceScoresCollection;
	userExperienceAnalyticsDeviceScores(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceScores> & userExperienceAnalyticsDeviceScoresMethods;
	userExperienceAnalyticsDeviceStartupHistory(): userExperienceAnalyticsDeviceStartupHistoryCollection;
	userExperienceAnalyticsDeviceStartupHistory(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupHistory> & userExperienceAnalyticsDeviceStartupHistoryMethods;
	userExperienceAnalyticsDeviceStartupProcesses(): userExperienceAnalyticsDeviceStartupProcessCollection;
	userExperienceAnalyticsDeviceStartupProcesses(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupProcess> & userExperienceAnalyticsDeviceStartupProcessMethods;
	userExperienceAnalyticsDeviceStartupProcessPerformance(): userExperienceAnalyticsDeviceStartupProcessPerformanceCollection;
	userExperienceAnalyticsDeviceStartupProcessPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupProcessPerformance> & userExperienceAnalyticsDeviceStartupProcessPerformanceMethods;
	userExperienceAnalyticsMetricHistory(): userExperienceAnalyticsMetricHistoryCollection;
	userExperienceAnalyticsMetricHistory(id: string | number): IBaseQuery<userExperienceAnalyticsMetricHistory> & userExperienceAnalyticsMetricHistoryMethods;
	userExperienceAnalyticsModelScores(): userExperienceAnalyticsModelScoresCollection;
	userExperienceAnalyticsModelScores(id: string | number): IBaseQuery<userExperienceAnalyticsModelScores> & userExperienceAnalyticsModelScoresMethods;
	userExperienceAnalyticsOverview(): IBaseQuery<userExperienceAnalyticsOverview> & userExperienceAnalyticsOverviewMethods;
	userExperienceAnalyticsScoreHistory(): userExperienceAnalyticsScoreHistoryCollection;
	userExperienceAnalyticsScoreHistory(id: string | number): IBaseQuery<userExperienceAnalyticsScoreHistory> & userExperienceAnalyticsScoreHistoryMethods;
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric(): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric> & userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricMethods;
	userExperienceAnalyticsWorkFromAnywhereMetrics(): userExperienceAnalyticsWorkFromAnywhereMetricCollection;
	userExperienceAnalyticsWorkFromAnywhereMetrics(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereMetric> & userExperienceAnalyticsWorkFromAnywhereMetricMethods;
	userExperienceAnalyticsWorkFromAnywhereModelPerformance(): userExperienceAnalyticsWorkFromAnywhereModelPerformanceCollection;
	userExperienceAnalyticsWorkFromAnywhereModelPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereModelPerformance> & userExperienceAnalyticsWorkFromAnywhereModelPerformanceMethods;
	windowsMalwareInformation(): windowsMalwareInformationCollection;
	windowsMalwareInformation(id: string | number): IBaseQuery<windowsMalwareInformation> & windowsMalwareInformationMethods;
	importedWindowsAutopilotDeviceIdentities(): importedWindowsAutopilotDeviceIdentityCollection;
	importedWindowsAutopilotDeviceIdentities(id: string | number): IBaseQuery<importedWindowsAutopilotDeviceIdentity> & importedWindowsAutopilotDeviceIdentityMethods;
	windowsAutopilotDeviceIdentities(): windowsAutopilotDeviceIdentityCollection;
	windowsAutopilotDeviceIdentities(id: string | number): IBaseQuery<windowsAutopilotDeviceIdentity> & windowsAutopilotDeviceIdentityMethods;
	notificationMessageTemplates(): notificationMessageTemplateCollection;
	notificationMessageTemplates(id: string | number): IBaseQuery<notificationMessageTemplate> & notificationMessageTemplateMethods;
	resourceOperations(): resourceOperationCollection;
	resourceOperations(id: string | number): IBaseQuery<resourceOperation> & resourceOperationMethods;
	roleAssignments(): deviceAndAppManagementRoleAssignmentCollection;
	roleAssignments(id: string | number): IBaseQuery<deviceAndAppManagementRoleAssignment> & deviceAndAppManagementRoleAssignmentMethods;
	roleDefinitions(): roleDefinitionCollection;
	roleDefinitions(id: string | number): IBaseQuery<roleDefinition> & roleDefinitionMethods;
	remoteAssistancePartners(): remoteAssistancePartnerCollection;
	remoteAssistancePartners(id: string | number): IBaseQuery<remoteAssistancePartner> & remoteAssistancePartnerMethods;
	reports(): IBaseQuery<deviceManagementReports> & deviceManagementReportsMethods;
	telecomExpenseManagementPartners(): telecomExpenseManagementPartnerCollection;
	telecomExpenseManagementPartners(id: string | number): IBaseQuery<telecomExpenseManagementPartner> & telecomExpenseManagementPartnerMethods;
	troubleshootingEvents(): deviceManagementTroubleshootingEventCollection;
	troubleshootingEvents(id: string | number): IBaseQuery<deviceManagementTroubleshootingEvent> & deviceManagementTroubleshootingEventMethods;
	windowsInformationProtectionAppLearningSummaries(): windowsInformationProtectionAppLearningSummaryCollection;
	windowsInformationProtectionAppLearningSummaries(id: string | number): IBaseQuery<windowsInformationProtectionAppLearningSummary> & windowsInformationProtectionAppLearningSummaryMethods;
	windowsInformationProtectionNetworkLearningSummaries(): windowsInformationProtectionNetworkLearningSummaryCollection;
	windowsInformationProtectionNetworkLearningSummaries(id: string | number): IBaseQuery<windowsInformationProtectionNetworkLearningSummary> & windowsInformationProtectionNetworkLearningSummaryMethods;
	verifyWindowsEnrollmentAutoDiscovery(domainName): boolean;
	userExperienceAnalyticsSummarizeWorkFromAnywhereDevices(): ComplexTypes.userExperienceAnalyticsWorkFromAnywhereDevicesSummary;
	getEffectivePermissions(scope): ComplexTypes.rolePermission[];
}
export interface deviceManagementOData extends entityOData {
	auditEvents: IBaseResults<auditEvent>;
	virtualEndpoint: virtualEndpoint;
	termsAndConditions: IBaseResults<termsAndConditions>;
	deviceCompliancePolicies: IBaseResults<deviceCompliancePolicy>;
	deviceCompliancePolicyDeviceStateSummary: deviceCompliancePolicyDeviceStateSummary;
	deviceCompliancePolicySettingStateSummaries: IBaseResults<deviceCompliancePolicySettingStateSummary>;
	deviceConfigurationDeviceStateSummaries: deviceConfigurationDeviceStateSummary;
	deviceConfigurations: IBaseResults<deviceConfiguration>;
	iosUpdateStatuses: IBaseResults<iosUpdateDeviceStatus>;
	softwareUpdateStatusSummary: softwareUpdateStatusSummary;
	complianceManagementPartners: IBaseResults<complianceManagementPartner>;
	conditionalAccessSettings: onPremisesConditionalAccessSettings;
	deviceCategories: IBaseResults<deviceCategory>;
	deviceEnrollmentConfigurations: IBaseResults<deviceEnrollmentConfiguration>;
	deviceManagementPartners: IBaseResults<deviceManagementPartner>;
	exchangeConnectors: IBaseResults<deviceManagementExchangeConnector>;
	mobileThreatDefenseConnectors: IBaseResults<mobileThreatDefenseConnector>;
	applePushNotificationCertificate: applePushNotificationCertificate;
	detectedApps: IBaseResults<detectedApp>;
	managedDeviceOverview: managedDeviceOverview;
	managedDevices: IBaseResults<managedDevice>;
	mobileAppTroubleshootingEvents: IBaseResults<mobileAppTroubleshootingEvent>;
	userExperienceAnalyticsAppHealthApplicationPerformance: IBaseResults<userExperienceAnalyticsAppHealthApplicationPerformance>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails: IBaseResults<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId: IBaseResults<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion: IBaseResults<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion>;
	userExperienceAnalyticsAppHealthDeviceModelPerformance: IBaseResults<userExperienceAnalyticsAppHealthDeviceModelPerformance>;
	userExperienceAnalyticsAppHealthDevicePerformance: IBaseResults<userExperienceAnalyticsAppHealthDevicePerformance>;
	userExperienceAnalyticsAppHealthDevicePerformanceDetails: IBaseResults<userExperienceAnalyticsAppHealthDevicePerformanceDetails>;
	userExperienceAnalyticsAppHealthOSVersionPerformance: IBaseResults<userExperienceAnalyticsAppHealthOSVersionPerformance>;
	userExperienceAnalyticsAppHealthOverview: userExperienceAnalyticsCategory;
	userExperienceAnalyticsBaselines: IBaseResults<userExperienceAnalyticsBaseline>;
	userExperienceAnalyticsCategories: IBaseResults<userExperienceAnalyticsCategory>;
	userExperienceAnalyticsDevicePerformance: IBaseResults<userExperienceAnalyticsDevicePerformance>;
	userExperienceAnalyticsDeviceScores: IBaseResults<userExperienceAnalyticsDeviceScores>;
	userExperienceAnalyticsDeviceStartupHistory: IBaseResults<userExperienceAnalyticsDeviceStartupHistory>;
	userExperienceAnalyticsDeviceStartupProcesses: IBaseResults<userExperienceAnalyticsDeviceStartupProcess>;
	userExperienceAnalyticsDeviceStartupProcessPerformance: IBaseResults<userExperienceAnalyticsDeviceStartupProcessPerformance>;
	userExperienceAnalyticsMetricHistory: IBaseResults<userExperienceAnalyticsMetricHistory>;
	userExperienceAnalyticsModelScores: IBaseResults<userExperienceAnalyticsModelScores>;
	userExperienceAnalyticsOverview: userExperienceAnalyticsOverview;
	userExperienceAnalyticsScoreHistory: IBaseResults<userExperienceAnalyticsScoreHistory>;
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric;
	userExperienceAnalyticsWorkFromAnywhereMetrics: IBaseResults<userExperienceAnalyticsWorkFromAnywhereMetric>;
	userExperienceAnalyticsWorkFromAnywhereModelPerformance: IBaseResults<userExperienceAnalyticsWorkFromAnywhereModelPerformance>;
	windowsMalwareInformation: IBaseResults<windowsMalwareInformation>;
	importedWindowsAutopilotDeviceIdentities: IBaseResults<importedWindowsAutopilotDeviceIdentity>;
	windowsAutopilotDeviceIdentities: IBaseResults<windowsAutopilotDeviceIdentity>;
	notificationMessageTemplates: IBaseResults<notificationMessageTemplate>;
	resourceOperations: IBaseResults<resourceOperation>;
	roleAssignments: IBaseResults<deviceAndAppManagementRoleAssignment>;
	roleDefinitions: IBaseResults<roleDefinition>;
	remoteAssistancePartners: IBaseResults<remoteAssistancePartner>;
	reports: deviceManagementReports;
	telecomExpenseManagementPartners: IBaseResults<telecomExpenseManagementPartner>;
	troubleshootingEvents: IBaseResults<deviceManagementTroubleshootingEvent>;
	windowsInformationProtectionAppLearningSummaries: IBaseResults<windowsInformationProtectionAppLearningSummary>;
	windowsInformationProtectionNetworkLearningSummaries: IBaseResults<windowsInformationProtectionNetworkLearningSummary>;
	verifyWindowsEnrollmentAutoDiscovery(domainName): boolean;
	userExperienceAnalyticsSummarizeWorkFromAnywhereDevices(): ComplexTypes.userExperienceAnalyticsWorkFromAnywhereDevicesSummary;
	getEffectivePermissions(scope): ComplexTypes.rolePermission[];
}
/*********************************************
* deviceManagementCachedReportConfiguration
**********************************************/
export interface deviceManagementCachedReportConfiguration extends deviceManagementCachedReportConfigurationProps, deviceManagementCachedReportConfigurationMethods { }
export interface deviceManagementCachedReportConfigurationProps extends  entityProps {

}
export interface deviceManagementCachedReportConfigurationMethods extends entityMethods {

}
export interface deviceManagementCachedReportConfigurationOData extends entityOData {

}
/*********************************************
* deviceManagementExchangeConnector
**********************************************/
export interface deviceManagementExchangeConnector extends deviceManagementExchangeConnectorProps, deviceManagementExchangeConnectorMethods { }
export interface deviceManagementExchangeConnectorProps extends  entityProps {
	connectorServerName: string;
	exchangeAlias: string;
	exchangeConnectorType: EnumTypes.deviceManagementExchangeConnectorType;
	exchangeOrganization: string;
	lastSyncDateTime: any;
	primarySmtpAddress: string;
	serverName: string;
	status: EnumTypes.deviceManagementExchangeConnectorStatus;
	version: string;
}
export interface deviceManagementExchangeConnectorMethods extends entityMethods {
	sync(syncType): IBaseExecution<void>;
}
export interface deviceManagementExchangeConnectorOData extends entityOData {
	sync(syncType): IBaseExecution<void>;
}
export interface deviceManagementExchangeConnectorCollection extends IBaseCollection<deviceManagementExchangeConnector, deviceManagementExchangeConnectorOData & deviceManagementExchangeConnectorProps> {
    add(values?: any): IBaseExecution<deviceManagementExchangeConnector>;
}
/*********************************************
* deviceManagementExportJob
**********************************************/
export interface deviceManagementExportJob extends deviceManagementExportJobProps, deviceManagementExportJobMethods { }
export interface deviceManagementExportJobProps extends  entityProps {
	expirationDateTime: any;
	filter: string;
	format: EnumTypes.deviceManagementReportFileFormat;
	localizationType: EnumTypes.deviceManagementExportJobLocalizationType;
	reportName: string;
	requestDateTime: any;
	select: Array<string>[];
	snapshotId: string;
	status: EnumTypes.deviceManagementReportStatus;
	url: string;
}
export interface deviceManagementExportJobMethods extends entityMethods {

}
export interface deviceManagementExportJobOData extends entityOData {

}
export interface deviceManagementExportJobCollection extends IBaseCollection<deviceManagementExportJob, deviceManagementExportJobOData & deviceManagementExportJobProps> {
    add(values?: any): IBaseExecution<deviceManagementExportJob>;
}
/*********************************************
* deviceManagementPartner
**********************************************/
export interface deviceManagementPartner extends deviceManagementPartnerProps, deviceManagementPartnerMethods { }
export interface deviceManagementPartnerProps extends  entityProps {
	displayName: string;
	groupsRequiringPartnerEnrollment: ComplexTypes.deviceManagementPartnerAssignment[];
	isConfigured: boolean;
	lastHeartbeatDateTime: any;
	partnerAppType: EnumTypes.deviceManagementPartnerAppType;
	partnerState: EnumTypes.deviceManagementPartnerTenantState;
	singleTenantAppId: string;
	whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: any;
	whenPartnerDevicesWillBeRemovedDateTime: any;
}
export interface deviceManagementPartnerMethods extends entityMethods {
	terminate(): IBaseExecution<void>;
}
export interface deviceManagementPartnerOData extends entityOData {
	terminate(): IBaseExecution<void>;
}
export interface deviceManagementPartnerCollection extends IBaseCollection<deviceManagementPartner, deviceManagementPartnerOData & deviceManagementPartnerProps> {
    add(values?: any): IBaseExecution<deviceManagementPartner>;
}
/*********************************************
* deviceManagementReports
**********************************************/
export interface deviceManagementReports extends deviceManagementReportsProps, deviceManagementReportsMethods { }
export interface deviceManagementReportsProps extends  entityProps {

}
export interface deviceManagementReportsMethods extends entityMethods {
	exportJobs(): deviceManagementExportJobCollection;
	exportJobs(id: string | number): IBaseQuery<deviceManagementExportJob> & deviceManagementExportJobMethods;
	retrieveDeviceAppInstallationStatusReport(name, select, search, groupBy, orderBy, skip, top, sessionId, filter): IBaseExecution<any>;
	getCachedReport(id, select, groupBy, orderBy, search, skip, top): IBaseExecution<any>;
	getCompliancePolicyNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getCompliancePolicyNonComplianceSummaryReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getComplianceSettingNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getConfigurationPolicyNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getConfigurationPolicyNonComplianceSummaryReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getConfigurationSettingNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDeviceManagementIntentPerSettingContributingProfiles(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDeviceManagementIntentSettingsReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDeviceNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDevicesWithoutCompliancePolicyReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getHistoricalReport(name, select, groupBy, orderBy, search, skip, top, filter): IBaseExecution<any>;
	getNoncompliantDevicesAndSettingsReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getPolicyNonComplianceMetadata(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getPolicyNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getPolicyNonComplianceSummaryReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getReportFilters(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getSettingNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
}
export interface deviceManagementReportsOData extends entityOData {
	exportJobs: IBaseResults<deviceManagementExportJob>;
	retrieveDeviceAppInstallationStatusReport(name, select, search, groupBy, orderBy, skip, top, sessionId, filter): IBaseExecution<any>;
	getCachedReport(id, select, groupBy, orderBy, search, skip, top): IBaseExecution<any>;
	getCompliancePolicyNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getCompliancePolicyNonComplianceSummaryReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getComplianceSettingNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getConfigurationPolicyNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getConfigurationPolicyNonComplianceSummaryReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getConfigurationSettingNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDeviceManagementIntentPerSettingContributingProfiles(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDeviceManagementIntentSettingsReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDeviceNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getDevicesWithoutCompliancePolicyReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getHistoricalReport(name, select, groupBy, orderBy, search, skip, top, filter): IBaseExecution<any>;
	getNoncompliantDevicesAndSettingsReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getPolicyNonComplianceMetadata(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getPolicyNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getPolicyNonComplianceSummaryReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getReportFilters(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
	getSettingNonComplianceReport(name, select, groupBy, orderBy, search, skip, top, sessionId, filter): IBaseExecution<any>;
}
/*********************************************
* deviceManagementTroubleshootingEvent
**********************************************/
export interface deviceManagementTroubleshootingEvent extends deviceManagementTroubleshootingEventProps, deviceManagementTroubleshootingEventMethods { }
export interface deviceManagementTroubleshootingEventProps extends  entityProps {
	correlationId: string;
	eventDateTime: any;
}
export interface deviceManagementTroubleshootingEventMethods extends entityMethods {

}
export interface deviceManagementTroubleshootingEventOData extends entityOData {

}
export interface deviceManagementTroubleshootingEventCollection extends IBaseCollection<deviceManagementTroubleshootingEvent, deviceManagementTroubleshootingEventOData & deviceManagementTroubleshootingEventProps> {
    add(values?: any): IBaseExecution<deviceManagementTroubleshootingEvent>;
}
/*********************************************
* deviceRegistrationPolicy
**********************************************/
export interface deviceRegistrationPolicy extends deviceRegistrationPolicyProps, deviceRegistrationPolicyMethods { }
export interface deviceRegistrationPolicyProps extends  entityProps {
	azureADJoin: ComplexTypes.azureADJoinPolicy;
	azureADRegistration: ComplexTypes.azureADRegistrationPolicy;
	description: string;
	displayName: string;
	localAdminPassword: ComplexTypes.localAdminPasswordSettings;
	multiFactorAuthConfiguration: EnumTypes.multiFactorAuthConfiguration;
	userDeviceQuota: number;
}
export interface deviceRegistrationPolicyMethods extends entityMethods {

}
export interface deviceRegistrationPolicyOData extends entityOData {

}
/*********************************************
* directory
**********************************************/
export interface directory extends directoryProps, directoryMethods { }
export interface directoryProps extends  entityProps {

}
export interface directoryMethods extends entityMethods {
	deviceLocalCredentials(): deviceLocalCredentialInfoCollection;
	deviceLocalCredentials(id: string | number): IBaseQuery<deviceLocalCredentialInfo> & deviceLocalCredentialInfoMethods;
	administrativeUnits(): administrativeUnitCollection;
	administrativeUnits(id: string | number): IBaseQuery<administrativeUnit> & administrativeUnitMethods;
	attributeSets(): attributeSetCollection;
	attributeSets(id: string | number): IBaseQuery<attributeSet> & attributeSetMethods;
	customSecurityAttributeDefinitions(): customSecurityAttributeDefinitionCollection;
	customSecurityAttributeDefinitions(id: string | number): IBaseQuery<customSecurityAttributeDefinition> & customSecurityAttributeDefinitionMethods;
	deletedItems(): directoryObjectCollection;
	deletedItems(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	federationConfigurations(): identityProviderBaseCollection;
	federationConfigurations(id: string | number): IBaseQuery<identityProviderBase> & identityProviderBaseMethods;
	onPremisesSynchronization(): onPremisesDirectorySynchronizationCollection;
	onPremisesSynchronization(id: string | number): IBaseQuery<onPremisesDirectorySynchronization> & onPremisesDirectorySynchronizationMethods;
	subscriptions(): companySubscriptionCollection;
	subscriptions(id: string | number): IBaseQuery<companySubscription> & companySubscriptionMethods;
}
export interface directoryOData extends entityOData {
	deviceLocalCredentials: IBaseResults<deviceLocalCredentialInfo>;
	administrativeUnits: IBaseResults<administrativeUnit>;
	attributeSets: IBaseResults<attributeSet>;
	customSecurityAttributeDefinitions: IBaseResults<customSecurityAttributeDefinition>;
	deletedItems: IBaseResults<directoryObject>;
	federationConfigurations: IBaseResults<identityProviderBase>;
	onPremisesSynchronization: IBaseResults<onPremisesDirectorySynchronization>;
	subscriptions: IBaseResults<companySubscription>;
}
/*********************************************
* directoryAudit
**********************************************/
export interface directoryAudit extends directoryAuditProps, directoryAuditMethods { }
export interface directoryAuditProps extends  entityProps {
	activityDateTime: any;
	activityDisplayName: string;
	additionalDetails: ComplexTypes.keyValue[];
	category: string;
	correlationId: string;
	initiatedBy: ComplexTypes.auditActivityInitiator;
	loggedByService: string;
	operationType: string;
	result: EnumTypes.operationResult;
	resultReason: string;
	targetResources: ComplexTypes.targetResource[];
}
export interface directoryAuditMethods extends entityMethods {

}
export interface directoryAuditOData extends entityOData {

}
export interface directoryAuditCollection extends IBaseCollection<directoryAudit, directoryAuditOData & directoryAuditProps> {
    add(values?: any): IBaseExecution<directoryAudit>;
}
/*********************************************
* directoryDefinition
**********************************************/
export interface directoryDefinition extends directoryDefinitionProps, directoryDefinitionMethods { }
export interface directoryDefinitionProps extends  entityProps {
	discoverabilities: EnumTypes.directoryDefinitionDiscoverabilities;
	discoveryDateTime: any;
	name: string;
	objects: ComplexTypes.objectDefinition[];
	readOnly: boolean;
	version: string;
}
export interface directoryDefinitionMethods extends entityMethods {
	discover(): IBaseExecution<directoryDefinition>;
}
export interface directoryDefinitionOData extends entityOData {
	discover(): IBaseExecution<directoryDefinition>;
}
export interface directoryDefinitionCollection extends IBaseCollection<directoryDefinition, directoryDefinitionOData & directoryDefinitionProps> {
    add(values?: any): IBaseExecution<directoryDefinition>;
}
/*********************************************
* directoryObject
**********************************************/
export interface directoryObject extends directoryObjectProps, directoryObjectMethods { }
export interface directoryObjectProps extends  entityProps {
	deletedDateTime: any;
}
export interface directoryObjectMethods extends entityMethods {
	restore(autoReconcileProxyConflict): IBaseExecution<directoryObject>;
	checkMemberGroups(groupIds): IBaseExecution<Array<string>[]>;
	checkMemberObjects(ids): IBaseExecution<Array<string>[]>;
	getMemberGroups(securityEnabledOnly): IBaseExecution<Array<string>[]>;
	getMemberObjects(securityEnabledOnly): IBaseExecution<Array<string>[]>;
}
export interface directoryObjectOData extends entityOData {
	restore(autoReconcileProxyConflict): IBaseExecution<directoryObject>;
	checkMemberGroups(groupIds): IBaseExecution<Array<string>[]>;
	checkMemberObjects(ids): IBaseExecution<Array<string>[]>;
	getMemberGroups(securityEnabledOnly): IBaseExecution<Array<string>[]>;
	getMemberObjects(securityEnabledOnly): IBaseExecution<Array<string>[]>;
}
export interface directoryObjectCollection extends IBaseCollection<directoryObject, directoryObjectOData & directoryObjectProps> {
    add(values?: any): IBaseExecution<directoryObject>;
}
/*********************************************
* directoryObjectPartnerReference
**********************************************/
export interface directoryObjectPartnerReference extends directoryObjectPartnerReferenceProps, directoryObjectPartnerReferenceMethods { }
export interface directoryObjectPartnerReferenceProps extends  directoryObjectProps {
	description: string;
	displayName: string;
	externalPartnerTenantId: any;
	objectType: string;
}
export interface directoryObjectPartnerReferenceMethods extends directoryObjectMethods {

}
export interface directoryObjectPartnerReferenceOData extends directoryObjectOData {

}
/*********************************************
* directoryRole
**********************************************/
export interface directoryRole extends directoryRoleProps, directoryRoleMethods { }
export interface directoryRoleProps extends  directoryObjectProps {
	description: string;
	displayName: string;
	roleTemplateId: string;
}
export interface directoryRoleMethods extends directoryObjectMethods {
	members(): directoryObjectCollection;
	members(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	scopedMembers(): scopedRoleMembershipCollection;
	scopedMembers(id: string | number): IBaseQuery<scopedRoleMembership> & scopedRoleMembershipMethods;
}
export interface directoryRoleOData extends directoryObjectOData {
	members: IBaseResults<directoryObject>;
	scopedMembers: IBaseResults<scopedRoleMembership>;
}
/*********************************************
* directoryRoleTemplate
**********************************************/
export interface directoryRoleTemplate extends directoryRoleTemplateProps, directoryRoleTemplateMethods { }
export interface directoryRoleTemplateProps extends  directoryObjectProps {
	description: string;
	displayName: string;
}
export interface directoryRoleTemplateMethods extends directoryObjectMethods {

}
export interface directoryRoleTemplateOData extends directoryObjectOData {

}
/*********************************************
* dispositionReviewStage
**********************************************/
export interface dispositionReviewStage extends dispositionReviewStageProps, dispositionReviewStageMethods { }
export interface dispositionReviewStageProps   {
	name: string;
	reviewersEmailAddresses: Array<string>[];
	stageNumber: string;
}
export interface dispositionReviewStageMethods {

}
export interface dispositionReviewStageOData {

}
/*********************************************
* documentSetVersion
**********************************************/
export interface documentSetVersion extends documentSetVersionProps, documentSetVersionMethods { }
export interface documentSetVersionProps extends  listItemVersionProps {
	comment: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	items: ComplexTypes.documentSetVersionItem[];
	shouldCaptureMinorVersion: boolean;
}
export interface documentSetVersionMethods extends listItemVersionMethods {
	restore(): IBaseExecution<void>;
}
export interface documentSetVersionOData extends listItemVersionOData {
	restore(): IBaseExecution<void>;
}
export interface documentSetVersionCollection extends IBaseCollection<documentSetVersion, documentSetVersionOData & documentSetVersionProps> {
    add(values?: any): IBaseExecution<documentSetVersion>;
}
/*********************************************
* domain
**********************************************/
export interface domain extends domainProps, domainMethods { }
export interface domainProps extends  entityProps {
	authenticationType: string;
	availabilityStatus: string;
	isAdminManaged: boolean;
	isDefault: boolean;
	isInitial: boolean;
	isRoot: boolean;
	isVerified: boolean;
	manufacturer: string;
	model: string;
	passwordNotificationWindowInDays: number;
	passwordValidityPeriodInDays: number;
	state: ComplexTypes.domainState;
	supportedServices: Array<string>[];
}
export interface domainMethods extends entityMethods {
	domainNameReferences(): directoryObjectCollection;
	domainNameReferences(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	federationConfiguration(): internalDomainFederationCollection;
	federationConfiguration(id: string | number): IBaseQuery<internalDomainFederation> & internalDomainFederationMethods;
	rootDomain(): IBaseQuery<domain> & domainMethods;
	serviceConfigurationRecords(): domainDnsRecordCollection;
	serviceConfigurationRecords(id: string | number): IBaseQuery<domainDnsRecord> & domainDnsRecordMethods;
	verificationDnsRecords(): domainDnsRecordCollection;
	verificationDnsRecords(id: string | number): IBaseQuery<domainDnsRecord> & domainDnsRecordMethods;
	forceDelete(disableUserAccounts): IBaseExecution<void>;
	promote(): IBaseExecution<boolean>;
	verify(forceTakeover): IBaseExecution<domain>;
}
export interface domainOData extends entityOData {
	domainNameReferences: IBaseResults<directoryObject>;
	federationConfiguration: IBaseResults<internalDomainFederation>;
	rootDomain: domain;
	serviceConfigurationRecords: IBaseResults<domainDnsRecord>;
	verificationDnsRecords: IBaseResults<domainDnsRecord>;
	forceDelete(disableUserAccounts): IBaseExecution<void>;
	promote(): IBaseExecution<boolean>;
	verify(forceTakeover): IBaseExecution<domain>;
}
/*********************************************
* domainDnsCnameRecord
**********************************************/
export interface domainDnsCnameRecord extends domainDnsCnameRecordProps, domainDnsCnameRecordMethods { }
export interface domainDnsCnameRecordProps extends  domainDnsRecordProps {
	canonicalName: string;
}
export interface domainDnsCnameRecordMethods extends domainDnsRecordMethods {

}
export interface domainDnsCnameRecordOData extends domainDnsRecordOData {

}
/*********************************************
* domainDnsMxRecord
**********************************************/
export interface domainDnsMxRecord extends domainDnsMxRecordProps, domainDnsMxRecordMethods { }
export interface domainDnsMxRecordProps extends  domainDnsRecordProps {
	mailExchange: string;
	preference: number;
}
export interface domainDnsMxRecordMethods extends domainDnsRecordMethods {

}
export interface domainDnsMxRecordOData extends domainDnsRecordOData {

}
/*********************************************
* domainDnsRecord
**********************************************/
export interface domainDnsRecord extends domainDnsRecordProps, domainDnsRecordMethods { }
export interface domainDnsRecordProps extends  entityProps {
	isOptional: boolean;
	label: string;
	recordType: string;
	supportedService: string;
	ttl: number;
}
export interface domainDnsRecordMethods extends entityMethods {

}
export interface domainDnsRecordOData extends entityOData {

}
export interface domainDnsRecordCollection extends IBaseCollection<domainDnsRecord, domainDnsRecordOData & domainDnsRecordProps> {
    add(values?: any): IBaseExecution<domainDnsRecord>;
}
/*********************************************
* domainDnsSrvRecord
**********************************************/
export interface domainDnsSrvRecord extends domainDnsSrvRecordProps, domainDnsSrvRecordMethods { }
export interface domainDnsSrvRecordProps extends  domainDnsRecordProps {
	nameTarget: string;
	port: number;
	priority: number;
	protocol: string;
	service: string;
	weight: number;
}
export interface domainDnsSrvRecordMethods extends domainDnsRecordMethods {

}
export interface domainDnsSrvRecordOData extends domainDnsRecordOData {

}
/*********************************************
* domainDnsTxtRecord
**********************************************/
export interface domainDnsTxtRecord extends domainDnsTxtRecordProps, domainDnsTxtRecordMethods { }
export interface domainDnsTxtRecordProps extends  domainDnsRecordProps {
	text: string;
}
export interface domainDnsTxtRecordMethods extends domainDnsRecordMethods {

}
export interface domainDnsTxtRecordOData extends domainDnsRecordOData {

}
/*********************************************
* domainDnsUnavailableRecord
**********************************************/
export interface domainDnsUnavailableRecord extends domainDnsUnavailableRecordProps, domainDnsUnavailableRecordMethods { }
export interface domainDnsUnavailableRecordProps extends  domainDnsRecordProps {
	description: string;
}
export interface domainDnsUnavailableRecordMethods extends domainDnsRecordMethods {

}
export interface domainDnsUnavailableRecordOData extends domainDnsRecordOData {

}
/*********************************************
* drive
**********************************************/
export interface drive extends driveProps, driveMethods { }
export interface driveProps extends  baseItemProps {
	driveType: string;
	owner: ComplexTypes.identitySet;
	quota: ComplexTypes.quota;
	sharePointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
}
export interface driveMethods extends baseItemMethods {
	bundles(): driveItemCollection;
	bundles(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	following(): driveItemCollection;
	following(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	items(): driveItemCollection;
	items(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	list(): IBaseQuery<list> & listMethods;
	root(): IBaseQuery<driveItem> & driveItemMethods;
	special(): driveItemCollection;
	special(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	search(q): driveItem[];
	recent(): driveItem[];
	sharedWithMe(): driveItem[];
}
export interface driveOData extends baseItemOData {
	bundles: IBaseResults<driveItem>;
	following: IBaseResults<driveItem>;
	items: IBaseResults<driveItem>;
	list: list;
	root: driveItem;
	special: IBaseResults<driveItem>;
	search(q): driveItem[];
	recent(): driveItem[];
	sharedWithMe(): driveItem[];
}
export interface driveCollection extends IBaseCollection<drive, driveOData & driveProps> {
    add(values?: any): IBaseExecution<drive>;
}
/*********************************************
* driveItem
**********************************************/
export interface driveItem extends driveItemProps, driveItemMethods { }
export interface driveItemProps extends  baseItemProps {
	audio: ComplexTypes.audio;
	bundle: ComplexTypes.bundle;
	content: any;
	cTag: string;
	deleted: ComplexTypes.deleted;
	file: ComplexTypes.file;
	fileSystemInfo: ComplexTypes.fileSystemInfo;
	folder: ComplexTypes.folder;
	image: ComplexTypes.image;
	location: ComplexTypes.geoCoordinates;
	malware: ComplexTypes.malware;
	package: ComplexTypes.package;
	pendingOperations: ComplexTypes.pendingOperations;
	photo: ComplexTypes.photo;
	publication: ComplexTypes.publicationFacet;
	remoteItem: ComplexTypes.remoteItem;
	root: ComplexTypes.root;
	searchResult: ComplexTypes.searchResult;
	shared: ComplexTypes.shared;
	sharepointIds: ComplexTypes.sharepointIds;
	size: number;
	specialFolder: ComplexTypes.specialFolder;
	video: ComplexTypes.video;
	webDavUrl: string;
}
export interface driveItemMethods extends baseItemMethods {
	workbook(): IBaseQuery<workbook> & workbookMethods;
	analytics(): IBaseQuery<itemAnalytics> & itemAnalyticsMethods;
	children(): driveItemCollection;
	children(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	listItem(): IBaseQuery<listItem> & listItemMethods;
	permissions(): permissionCollection;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
	retentionLabel(): IBaseQuery<itemRetentionLabel> & itemRetentionLabelMethods;
	subscriptions(): subscriptionCollection;
	subscriptions(id: string | number): IBaseQuery<subscription> & subscriptionMethods;
	thumbnails(): thumbnailSetCollection;
	thumbnails(id: string | number): IBaseQuery<thumbnailSet> & thumbnailSetMethods;
	versions(): driveItemVersionCollection;
	versions(id: string | number): IBaseQuery<driveItemVersion> & driveItemVersionMethods;
	setSensitivityLabel(actionSource: string, assignmentMethod: string, id: string, justificationText: string): IBaseExecution<void>;
	restore(parentReference, name): IBaseExecution<driveItem>;
	copy(name, parentReference): IBaseExecution<driveItem>;
	createUploadSession(item, deferCommit): IBaseExecution<ComplexTypes.uploadSession>;
	permanentDelete(): IBaseExecution<void>;
	assignSensitivityLabel(sensitivityLabelId, assignmentMethod, justificationText): IBaseExecution<void>;
	checkin(checkInAs, comment): IBaseExecution<void>;
	checkout(): IBaseExecution<void>;
	createLink(type, scope, expirationDateTime, password, message, recipients, retainInheritedPermissions, sendNotification): IBaseExecution<permission>;
	follow(): IBaseExecution<driveItem>;
	invite(requireSignIn, roles, sendInvitation, message, recipients, retainInheritedPermissions, expirationDateTime, password): IBaseExecution<permission[]>;
	preview(page, zoom): IBaseExecution<ComplexTypes.itemPreviewInfo>;
	unfollow(): IBaseExecution<void>;
	validatePermission(challengeToken, password): IBaseExecution<void>;
	delta(): driveItem[];
	delta(token): driveItem[];
	search(q): driveItem[];
	getActivitiesByInterval(): itemActivityStat[];
	getActivitiesByInterval(startDateTime, endDateTime, interval): itemActivityStat[];
}
export interface driveItemOData extends baseItemOData {
	workbook: workbook;
	analytics: itemAnalytics;
	children: IBaseResults<driveItem>;
	listItem: listItem;
	permissions: IBaseResults<permission>;
	retentionLabel: itemRetentionLabel;
	subscriptions: IBaseResults<subscription>;
	thumbnails: IBaseResults<thumbnailSet>;
	versions: IBaseResults<driveItemVersion>;
	setSensitivityLabel(actionSource: string, assignmentMethod: string, id: string, justificationText: string): IBaseExecution<void>;
	restore(parentReference, name): IBaseExecution<driveItem>;
	copy(name, parentReference): IBaseExecution<driveItem>;
	createUploadSession(item, deferCommit): IBaseExecution<ComplexTypes.uploadSession>;
	permanentDelete(): IBaseExecution<void>;
	assignSensitivityLabel(sensitivityLabelId, assignmentMethod, justificationText): IBaseExecution<void>;
	checkin(checkInAs, comment): IBaseExecution<void>;
	checkout(): IBaseExecution<void>;
	createLink(type, scope, expirationDateTime, password, message, recipients, retainInheritedPermissions, sendNotification): IBaseExecution<permission>;
	follow(): IBaseExecution<driveItem>;
	invite(requireSignIn, roles, sendInvitation, message, recipients, retainInheritedPermissions, expirationDateTime, password): IBaseExecution<permission[]>;
	preview(page, zoom): IBaseExecution<ComplexTypes.itemPreviewInfo>;
	unfollow(): IBaseExecution<void>;
	validatePermission(challengeToken, password): IBaseExecution<void>;
	delta(): driveItem[];
	delta(token): driveItem[];
	search(q): driveItem[];
	getActivitiesByInterval(): itemActivityStat[];
	getActivitiesByInterval(startDateTime, endDateTime, interval): itemActivityStat[];
}
export interface driveItemCollection extends IBaseCollection<driveItem, driveItemOData & driveItemProps> {
    add(values?: any): IBaseExecution<driveItem>;
}
/*********************************************
* driveItemVersion
**********************************************/
export interface driveItemVersion extends driveItemVersionProps, driveItemVersionMethods { }
export interface driveItemVersionProps extends  baseItemVersionProps {
	content: any;
	size: number;
}
export interface driveItemVersionMethods extends baseItemVersionMethods {
	restoreVersion(): IBaseExecution<void>;
}
export interface driveItemVersionOData extends baseItemVersionOData {
	restoreVersion(): IBaseExecution<void>;
}
export interface driveItemVersionCollection extends IBaseCollection<driveItemVersion, driveItemVersionOData & driveItemVersionProps> {
    add(values?: any): IBaseExecution<driveItemVersion>;
}
/*********************************************
* driveProtectionRule
**********************************************/
export interface driveProtectionRule extends driveProtectionRuleProps, driveProtectionRuleMethods { }
export interface driveProtectionRuleProps extends  protectionRuleBaseProps {
	driveExpression: string;
}
export interface driveProtectionRuleMethods extends protectionRuleBaseMethods {

}
export interface driveProtectionRuleOData extends protectionRuleBaseOData {

}
export interface driveProtectionRuleCollection extends IBaseCollection<driveProtectionRule, driveProtectionRuleOData & driveProtectionRuleProps> {
    add(values?: any): IBaseExecution<driveProtectionRule>;
}
/*********************************************
* driveProtectionUnit
**********************************************/
export interface driveProtectionUnit extends driveProtectionUnitProps, driveProtectionUnitMethods { }
export interface driveProtectionUnitProps extends  protectionUnitBaseProps {
	directoryObjectId: string;
	displayName: string;
	email: string;
}
export interface driveProtectionUnitMethods extends protectionUnitBaseMethods {

}
export interface driveProtectionUnitOData extends protectionUnitBaseOData {

}
export interface driveProtectionUnitCollection extends IBaseCollection<driveProtectionUnit, driveProtectionUnitOData & driveProtectionUnitProps> {
    add(values?: any): IBaseExecution<driveProtectionUnit>;
}
/*********************************************
* driveRestoreArtifact
**********************************************/
export interface driveRestoreArtifact extends driveRestoreArtifactProps, driveRestoreArtifactMethods { }
export interface driveRestoreArtifactProps extends  restoreArtifactBaseProps {
	restoredSiteId: string;
	restoredSiteName: string;
	restoredSiteWebUrl: string;
}
export interface driveRestoreArtifactMethods extends restoreArtifactBaseMethods {

}
export interface driveRestoreArtifactOData extends restoreArtifactBaseOData {

}
export interface driveRestoreArtifactCollection extends IBaseCollection<driveRestoreArtifact, driveRestoreArtifactOData & driveRestoreArtifactProps> {
    add(values?: any): IBaseExecution<driveRestoreArtifact>;
}
/*********************************************
* eBookInstallSummary
**********************************************/
export interface eBookInstallSummary extends eBookInstallSummaryProps, eBookInstallSummaryMethods { }
export interface eBookInstallSummaryProps extends  entityProps {
	failedDeviceCount: number;
	failedUserCount: number;
	installedDeviceCount: number;
	installedUserCount: number;
	notInstalledDeviceCount: number;
	notInstalledUserCount: number;
}
export interface eBookInstallSummaryMethods extends entityMethods {

}
export interface eBookInstallSummaryOData extends entityOData {

}
/*********************************************
* edge
**********************************************/
export interface edge extends edgeProps, edgeMethods { }
export interface edgeProps extends  entityProps {

}
export interface edgeMethods extends entityMethods {
	internetExplorerMode(): IBaseQuery<internetExplorerMode> & internetExplorerModeMethods;
}
export interface edgeOData extends entityOData {
	internetExplorerMode: internetExplorerMode;
}
/*********************************************
* ediscoveryAddToReviewSetOperation
**********************************************/
export interface ediscoveryAddToReviewSetOperation extends ediscoveryAddToReviewSetOperationProps, ediscoveryAddToReviewSetOperationMethods { }
export interface ediscoveryAddToReviewSetOperationProps extends  caseOperationProps {

}
export interface ediscoveryAddToReviewSetOperationMethods extends caseOperationMethods {
	reviewSet(): IBaseQuery<ediscoveryReviewSet> & ediscoveryReviewSetMethods;
	search(): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
}
export interface ediscoveryAddToReviewSetOperationOData extends caseOperationOData {
	reviewSet: ediscoveryReviewSet;
	search: ediscoverySearch;
}
/*********************************************
* ediscoveryCase
**********************************************/
export interface ediscoveryCase extends ediscoveryCaseProps, ediscoveryCaseMethods { }
export interface ediscoveryCaseProps   {
	closedBy: ComplexTypes.identitySet;
	closedDateTime: any;
	externalId: string;
}
export interface ediscoveryCaseMethods {
	custodians(): IBaseCollection<ediscoveryCustodian, ediscoveryCustodianOData & ediscoveryCustodianProps>;
	custodians(id: string | number): IBaseQuery<ediscoveryCustodian> & ediscoveryCustodianMethods;
	noncustodialDataSources(): IBaseCollection<ediscoveryNoncustodialDataSource, ediscoveryNoncustodialDataSourceOData & ediscoveryNoncustodialDataSourceProps>;
	noncustodialDataSources(id: string | number): IBaseQuery<ediscoveryNoncustodialDataSource> & ediscoveryNoncustodialDataSourceMethods;
	operations(): IBaseCollection<caseOperation, caseOperationOData & caseOperationProps>;
	operations(id: string | number): IBaseQuery<caseOperation> & caseOperationMethods;
	reviewSets(): IBaseCollection<ediscoveryReviewSet, ediscoveryReviewSetOData & ediscoveryReviewSetProps>;
	reviewSets(id: string | number): IBaseQuery<ediscoveryReviewSet> & ediscoveryReviewSetMethods;
	searches(): IBaseCollection<ediscoverySearch, ediscoverySearchOData & ediscoverySearchProps>;
	searches(id: string | number): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
	settings(): IBaseQuery<ediscoveryCaseSettings> & ediscoveryCaseSettingsMethods;
	tags(): IBaseCollection<ediscoveryReviewTag, ediscoveryReviewTagOData & ediscoveryReviewTagProps>;
	tags(id: string | number): IBaseQuery<ediscoveryReviewTag> & ediscoveryReviewTagMethods;
}
export interface ediscoveryCaseOData {
	custodians: IBaseResults<ediscoveryCustodian>;
	noncustodialDataSources: IBaseResults<ediscoveryNoncustodialDataSource>;
	operations: IBaseResults<caseOperation>;
	reviewSets: IBaseResults<ediscoveryReviewSet>;
	searches: IBaseResults<ediscoverySearch>;
	settings: ediscoveryCaseSettings;
	tags: IBaseResults<ediscoveryReviewTag>;
}
/*********************************************
* ediscoveryCaseSettings
**********************************************/
export interface ediscoveryCaseSettings extends ediscoveryCaseSettingsProps, ediscoveryCaseSettingsMethods { }
export interface ediscoveryCaseSettingsProps extends  entityProps {
	ocr: ComplexTypes.ocrSettings;
	redundancyDetection: ComplexTypes.redundancyDetectionSettings;
	topicModeling: ComplexTypes.topicModelingSettings;
}
export interface ediscoveryCaseSettingsMethods extends entityMethods {

}
export interface ediscoveryCaseSettingsOData extends entityOData {

}
/*********************************************
* ediscoveryCustodian
**********************************************/
export interface ediscoveryCustodian extends ediscoveryCustodianProps, ediscoveryCustodianMethods { }
export interface ediscoveryCustodianProps extends  dataSourceContainerProps {
	acknowledgedDateTime: any;
	email: string;
}
export interface ediscoveryCustodianMethods extends dataSourceContainerMethods {
	lastIndexOperation(): IBaseQuery<ediscoveryIndexOperation> & ediscoveryIndexOperationMethods;
	siteSources(): IBaseCollection<siteSource, dataSourceContainer & siteSourceOData & siteSourceProps>;
	siteSources(id: string | number): IBaseQuery<siteSource> & siteSourceMethods;
	unifiedGroupSources(): IBaseCollection<unifiedGroupSource, dataSourceContainer & unifiedGroupSourceOData & unifiedGroupSourceProps>;
	unifiedGroupSources(id: string | number): IBaseQuery<unifiedGroupSource> & unifiedGroupSourceMethods;
	userSources(): IBaseCollection<userSource, dataSourceContainer & userSourceOData & userSourceProps>;
	userSources(id: string | number): IBaseQuery<userSource> & userSourceMethods;
}
export interface ediscoveryCustodianOData extends dataSourceContainerOData {
	lastIndexOperation: ediscoveryIndexOperation;
	siteSources: IBaseResults<siteSource>;
	unifiedGroupSources: IBaseResults<unifiedGroupSource>;
	userSources: IBaseResults<userSource>;
}
/*********************************************
* ediscoveryEstimateOperation
**********************************************/
export interface ediscoveryEstimateOperation extends ediscoveryEstimateOperationProps, ediscoveryEstimateOperationMethods { }
export interface ediscoveryEstimateOperationProps extends  caseOperationProps {
	indexedItemCount: number;
	indexedItemsSize: number;
	mailboxCount: number;
	siteCount: number;
	unindexedItemCount: number;
	unindexedItemsSize: number;
}
export interface ediscoveryEstimateOperationMethods extends caseOperationMethods {
	search(): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
}
export interface ediscoveryEstimateOperationOData extends caseOperationOData {
	search: ediscoverySearch;
}
/*********************************************
* ediscoveryExportOperation
**********************************************/
export interface ediscoveryExportOperation extends ediscoveryExportOperationProps, ediscoveryExportOperationMethods { }
export interface ediscoveryExportOperationProps extends  caseOperationProps {
	description: string;
	exportFileMetadata: ComplexTypes.exportFileMetadata[];
	exportOptions: EnumTypes.exportOptions;
	exportStructure: EnumTypes.exportFileStructure;
	outputName: string;
}
export interface ediscoveryExportOperationMethods extends caseOperationMethods {
	reviewSet(): IBaseQuery<ediscoveryReviewSet> & ediscoveryReviewSetMethods;
	reviewSetQuery(): IBaseQuery<ediscoveryReviewSetQuery> & ediscoveryReviewSetQueryMethods;
}
export interface ediscoveryExportOperationOData extends caseOperationOData {
	reviewSet: ediscoveryReviewSet;
	reviewSetQuery: ediscoveryReviewSetQuery;
}
/*********************************************
* ediscoveryHoldOperation
**********************************************/
export interface ediscoveryHoldOperation extends ediscoveryHoldOperationProps, ediscoveryHoldOperationMethods { }
export interface ediscoveryHoldOperationProps extends  caseOperationProps {

}
export interface ediscoveryHoldOperationMethods extends caseOperationMethods {

}
export interface ediscoveryHoldOperationOData extends caseOperationOData {

}
/*********************************************
* ediscoveryIndexOperation
**********************************************/
export interface ediscoveryIndexOperation extends ediscoveryIndexOperationProps, ediscoveryIndexOperationMethods { }
export interface ediscoveryIndexOperationProps extends  caseOperationProps {

}
export interface ediscoveryIndexOperationMethods extends caseOperationMethods {

}
export interface ediscoveryIndexOperationOData extends caseOperationOData {

}
/*********************************************
* ediscoveryNoncustodialDataSource
**********************************************/
export interface ediscoveryNoncustodialDataSource extends ediscoveryNoncustodialDataSourceProps, ediscoveryNoncustodialDataSourceMethods { }
export interface ediscoveryNoncustodialDataSourceProps extends  dataSourceContainerProps {

}
export interface ediscoveryNoncustodialDataSourceMethods extends dataSourceContainerMethods {
	dataSource(): IBaseQuery<dataSource> & dataSourceMethods;
	lastIndexOperation(): IBaseQuery<ediscoveryIndexOperation> & ediscoveryIndexOperationMethods;
}
export interface ediscoveryNoncustodialDataSourceOData extends dataSourceContainerOData {
	dataSource: dataSource;
	lastIndexOperation: ediscoveryIndexOperation;
}
/*********************************************
* ediscoveryPurgeDataOperation
**********************************************/
export interface ediscoveryPurgeDataOperation extends ediscoveryPurgeDataOperationProps, ediscoveryPurgeDataOperationMethods { }
export interface ediscoveryPurgeDataOperationProps extends  caseOperationProps {

}
export interface ediscoveryPurgeDataOperationMethods extends caseOperationMethods {

}
export interface ediscoveryPurgeDataOperationOData extends caseOperationOData {

}
/*********************************************
* ediscoveryReviewSet
**********************************************/
export interface ediscoveryReviewSet extends ediscoveryReviewSetProps, ediscoveryReviewSetMethods { }
export interface ediscoveryReviewSetProps extends  dataSetProps {

}
export interface ediscoveryReviewSetMethods extends dataSetMethods {
	queries(): IBaseCollection<ediscoveryReviewSetQuery, dataSet & ediscoveryReviewSetQueryOData & ediscoveryReviewSetQueryProps>;
	queries(id: string | number): IBaseQuery<ediscoveryReviewSetQuery> & ediscoveryReviewSetQueryMethods;
}
export interface ediscoveryReviewSetOData extends dataSetOData {
	queries: IBaseResults<ediscoveryReviewSetQuery>;
}
/*********************************************
* ediscoveryReviewSetQuery
**********************************************/
export interface ediscoveryReviewSetQuery extends ediscoveryReviewSetQueryProps, ediscoveryReviewSetQueryMethods { }
export interface ediscoveryReviewSetQueryProps extends  searchProps {

}
export interface ediscoveryReviewSetQueryMethods extends searchMethods {

}
export interface ediscoveryReviewSetQueryOData extends searchOData {

}
/*********************************************
* ediscoveryReviewTag
**********************************************/
export interface ediscoveryReviewTag extends ediscoveryReviewTagProps, ediscoveryReviewTagMethods { }
export interface ediscoveryReviewTagProps extends  tagProps {
	childSelectability: EnumTypes.childSelectability;
}
export interface ediscoveryReviewTagMethods extends tagMethods {
	childTags(): IBaseCollection<ediscoveryReviewTag, tag & ediscoveryReviewTagOData & ediscoveryReviewTagProps>;
	childTags(id: string | number): IBaseQuery<ediscoveryReviewTag> & ediscoveryReviewTagMethods;
	parent(): IBaseQuery<ediscoveryReviewTag> & ediscoveryReviewTagMethods;
}
export interface ediscoveryReviewTagOData extends tagOData {
	childTags: IBaseResults<ediscoveryReviewTag>;
	parent: ediscoveryReviewTag;
}
/*********************************************
* ediscoverySearch
**********************************************/
export interface ediscoverySearch extends ediscoverySearchProps, ediscoverySearchMethods { }
export interface ediscoverySearchProps extends  searchProps {
	dataSourceScopes: EnumTypes.dataSourceScopes;
}
export interface ediscoverySearchMethods extends searchMethods {
	additionalSources(): IBaseCollection<dataSource, search & dataSourceOData & dataSourceProps>;
	additionalSources(id: string | number): IBaseQuery<dataSource> & dataSourceMethods;
	addToReviewSetOperation(): IBaseQuery<ediscoveryAddToReviewSetOperation> & ediscoveryAddToReviewSetOperationMethods;
	custodianSources(): IBaseCollection<dataSource, search & dataSourceOData & dataSourceProps>;
	custodianSources(id: string | number): IBaseQuery<dataSource> & dataSourceMethods;
	lastEstimateStatisticsOperation(): IBaseQuery<ediscoveryEstimateOperation> & ediscoveryEstimateOperationMethods;
	noncustodialSources(): IBaseCollection<ediscoveryNoncustodialDataSource, search & ediscoveryNoncustodialDataSourceOData & ediscoveryNoncustodialDataSourceProps>;
	noncustodialSources(id: string | number): IBaseQuery<ediscoveryNoncustodialDataSource> & ediscoveryNoncustodialDataSourceMethods;
}
export interface ediscoverySearchOData extends searchOData {
	additionalSources: IBaseResults<dataSource>;
	addToReviewSetOperation: ediscoveryAddToReviewSetOperation;
	custodianSources: IBaseResults<dataSource>;
	lastEstimateStatisticsOperation: ediscoveryEstimateOperation;
	noncustodialSources: IBaseResults<ediscoveryNoncustodialDataSource>;
}
/*********************************************
* ediscoverySearchExportOperation
**********************************************/
export interface ediscoverySearchExportOperation extends ediscoverySearchExportOperationProps, ediscoverySearchExportOperationMethods { }
export interface ediscoverySearchExportOperationProps extends  caseOperationProps {
	additionalOptions: EnumTypes.additionalOptions;
	description: string;
	displayName: string;
	exportCriteria: EnumTypes.exportCriteria;
	exportFileMetadata: ComplexTypes.exportFileMetadata[];
	exportFormat: EnumTypes.exportFormat;
	exportLocation: EnumTypes.exportLocation;
	exportSingleItems: boolean;
}
export interface ediscoverySearchExportOperationMethods extends caseOperationMethods {
	search(): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
}
export interface ediscoverySearchExportOperationOData extends caseOperationOData {
	search: ediscoverySearch;
}
/*********************************************
* ediscoveryTagOperation
**********************************************/
export interface ediscoveryTagOperation extends ediscoveryTagOperationProps, ediscoveryTagOperationMethods { }
export interface ediscoveryTagOperationProps extends  caseOperationProps {

}
export interface ediscoveryTagOperationMethods extends caseOperationMethods {

}
export interface ediscoveryTagOperationOData extends caseOperationOData {

}
/*********************************************
* editionUpgradeConfiguration
**********************************************/
export interface editionUpgradeConfiguration extends editionUpgradeConfigurationProps, editionUpgradeConfigurationMethods { }
export interface editionUpgradeConfigurationProps extends  deviceConfigurationProps {
	license: string;
	licenseType: EnumTypes.editionUpgradeLicenseType;
	productKey: string;
	targetEdition: EnumTypes.windows10EditionType;
}
export interface editionUpgradeConfigurationMethods extends deviceConfigurationMethods {

}
export interface editionUpgradeConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* educationAssignment
**********************************************/
export interface educationAssignment extends educationAssignmentProps, educationAssignmentMethods { }
export interface educationAssignmentProps extends  entityProps {
	addedStudentAction: EnumTypes.educationAddedStudentAction;
	addToCalendarAction: EnumTypes.educationAddToCalendarOptions;
	allowLateSubmissions: boolean;
	allowStudentsToAddResourcesToSubmission: boolean;
	assignDateTime: any;
	assignedDateTime: any;
	assignTo: ComplexTypes.educationAssignmentRecipient;
	classId: string;
	closeDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	dueDateTime: any;
	feedbackResourcesFolderUrl: string;
	grading: ComplexTypes.educationAssignmentGradeType;
	instructions: ComplexTypes.educationItemBody;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	moduleUrl: string;
	notificationChannelUrl: string;
	resourcesFolderUrl: string;
	status: EnumTypes.educationAssignmentStatus;
	webUrl: string;
}
export interface educationAssignmentMethods extends entityMethods {
	categories(): educationCategoryCollection;
	categories(id: string | number): IBaseQuery<educationCategory> & educationCategoryMethods;
	gradingCategory(): IBaseQuery<educationGradingCategory> & educationGradingCategoryMethods;
	resources(): educationAssignmentResourceCollection;
	resources(id: string | number): IBaseQuery<educationAssignmentResource> & educationAssignmentResourceMethods;
	rubric(): IBaseQuery<educationRubric> & educationRubricMethods;
	submissions(): educationSubmissionCollection;
	submissions(id: string | number): IBaseQuery<educationSubmission> & educationSubmissionMethods;
	publish(): IBaseExecution<educationAssignment>;
	activate(): IBaseExecution<educationAssignment>;
	deactivate(): IBaseExecution<educationAssignment>;
	setUpFeedbackResourcesFolder(): IBaseExecution<educationAssignment>;
	setUpResourcesFolder(): IBaseExecution<educationAssignment>;
}
export interface educationAssignmentOData extends entityOData {
	categories: IBaseResults<educationCategory>;
	gradingCategory: educationGradingCategory;
	resources: IBaseResults<educationAssignmentResource>;
	rubric: educationRubric;
	submissions: IBaseResults<educationSubmission>;
	publish(): IBaseExecution<educationAssignment>;
	activate(): IBaseExecution<educationAssignment>;
	deactivate(): IBaseExecution<educationAssignment>;
	setUpFeedbackResourcesFolder(): IBaseExecution<educationAssignment>;
	setUpResourcesFolder(): IBaseExecution<educationAssignment>;
}
export interface educationAssignmentCollection extends IBaseCollection<educationAssignment, educationAssignmentOData & educationAssignmentProps> {
    add(values?: any): IBaseExecution<educationAssignment>;
}
/*********************************************
* educationAssignmentDefaults
**********************************************/
export interface educationAssignmentDefaults extends educationAssignmentDefaultsProps, educationAssignmentDefaultsMethods { }
export interface educationAssignmentDefaultsProps extends  entityProps {
	addedStudentAction: EnumTypes.educationAddedStudentAction;
	addToCalendarAction: EnumTypes.educationAddToCalendarOptions;
	dueTime: any;
	notificationChannelUrl: string;
}
export interface educationAssignmentDefaultsMethods extends entityMethods {

}
export interface educationAssignmentDefaultsOData extends entityOData {

}
/*********************************************
* educationAssignmentResource
**********************************************/
export interface educationAssignmentResource extends educationAssignmentResourceProps, educationAssignmentResourceMethods { }
export interface educationAssignmentResourceProps extends  entityProps {
	distributeForStudentWork: boolean;
	resource: ComplexTypes.educationResource;
}
export interface educationAssignmentResourceMethods extends entityMethods {

}
export interface educationAssignmentResourceOData extends entityOData {

}
export interface educationAssignmentResourceCollection extends IBaseCollection<educationAssignmentResource, educationAssignmentResourceOData & educationAssignmentResourceProps> {
    add(values?: any): IBaseExecution<educationAssignmentResource>;
}
/*********************************************
* educationAssignmentSettings
**********************************************/
export interface educationAssignmentSettings extends educationAssignmentSettingsProps, educationAssignmentSettingsMethods { }
export interface educationAssignmentSettingsProps extends  entityProps {
	submissionAnimationDisabled: boolean;
}
export interface educationAssignmentSettingsMethods extends entityMethods {
	gradingCategories(): educationGradingCategoryCollection;
	gradingCategories(id: string | number): IBaseQuery<educationGradingCategory> & educationGradingCategoryMethods;
}
export interface educationAssignmentSettingsOData extends entityOData {
	gradingCategories: IBaseResults<educationGradingCategory>;
}
/*********************************************
* educationCategory
**********************************************/
export interface educationCategory extends educationCategoryProps, educationCategoryMethods { }
export interface educationCategoryProps extends  entityProps {
	displayName: string;
}
export interface educationCategoryMethods extends entityMethods {

}
export interface educationCategoryOData extends entityOData {

}
export interface educationCategoryCollection extends IBaseCollection<educationCategory, educationCategoryOData & educationCategoryProps> {
    add(values?: any): IBaseExecution<educationCategory>;
}
/*********************************************
* educationClass
**********************************************/
export interface educationClass extends educationClassProps, educationClassMethods { }
export interface educationClassProps extends  entityProps {
	classCode: string;
	course: ComplexTypes.educationCourse;
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	externalId: string;
	externalName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;
	grade: string;
	mailNickname: string;
	term: ComplexTypes.educationTerm;
}
export interface educationClassMethods extends entityMethods {
	assignmentCategories(): educationCategoryCollection;
	assignmentCategories(id: string | number): IBaseQuery<educationCategory> & educationCategoryMethods;
	assignmentDefaults(): IBaseQuery<educationAssignmentDefaults> & educationAssignmentDefaultsMethods;
	assignments(): educationAssignmentCollection;
	assignments(id: string | number): IBaseQuery<educationAssignment> & educationAssignmentMethods;
	assignmentSettings(): IBaseQuery<educationAssignmentSettings> & educationAssignmentSettingsMethods;
	modules(): educationModuleCollection;
	modules(id: string | number): IBaseQuery<educationModule> & educationModuleMethods;
	group(): IBaseQuery<group> & groupMethods;
	members(): educationUserCollection;
	members(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
	schools(): educationSchoolCollection;
	schools(id: string | number): IBaseQuery<educationSchool> & educationSchoolMethods;
	teachers(): educationUserCollection;
	teachers(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
}
export interface educationClassOData extends entityOData {
	assignmentCategories: IBaseResults<educationCategory>;
	assignmentDefaults: educationAssignmentDefaults;
	assignments: IBaseResults<educationAssignment>;
	assignmentSettings: educationAssignmentSettings;
	modules: IBaseResults<educationModule>;
	group: group;
	members: IBaseResults<educationUser>;
	schools: IBaseResults<educationSchool>;
	teachers: IBaseResults<educationUser>;
}
export interface educationClassCollection extends IBaseCollection<educationClass, educationClassOData & educationClassProps> {
    add(values?: any): IBaseExecution<educationClass>;
}
/*********************************************
* educationFeedbackOutcome
**********************************************/
export interface educationFeedbackOutcome extends educationFeedbackOutcomeProps, educationFeedbackOutcomeMethods { }
export interface educationFeedbackOutcomeProps extends  educationOutcomeProps {
	feedback: ComplexTypes.educationFeedback;
	publishedFeedback: ComplexTypes.educationFeedback;
}
export interface educationFeedbackOutcomeMethods extends educationOutcomeMethods {

}
export interface educationFeedbackOutcomeOData extends educationOutcomeOData {

}
/*********************************************
* educationFeedbackResourceOutcome
**********************************************/
export interface educationFeedbackResourceOutcome extends educationFeedbackResourceOutcomeProps, educationFeedbackResourceOutcomeMethods { }
export interface educationFeedbackResourceOutcomeProps extends  educationOutcomeProps {
	feedbackResource: ComplexTypes.educationResource;
	resourceStatus: EnumTypes.educationFeedbackResourceOutcomeStatus;
}
export interface educationFeedbackResourceOutcomeMethods extends educationOutcomeMethods {

}
export interface educationFeedbackResourceOutcomeOData extends educationOutcomeOData {

}
/*********************************************
* educationGradingCategory
**********************************************/
export interface educationGradingCategory extends educationGradingCategoryProps, educationGradingCategoryMethods { }
export interface educationGradingCategoryProps extends  entityProps {
	displayName: string;
	percentageWeight: number;
}
export interface educationGradingCategoryMethods extends entityMethods {

}
export interface educationGradingCategoryOData extends entityOData {

}
export interface educationGradingCategoryCollection extends IBaseCollection<educationGradingCategory, educationGradingCategoryOData & educationGradingCategoryProps> {
    add(values?: any): IBaseExecution<educationGradingCategory>;
}
/*********************************************
* educationModule
**********************************************/
export interface educationModule extends educationModuleProps, educationModuleMethods { }
export interface educationModuleProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	isPinned: boolean;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	resourcesFolderUrl: string;
	status: EnumTypes.educationModuleStatus;
}
export interface educationModuleMethods extends entityMethods {
	resources(): educationModuleResourceCollection;
	resources(id: string | number): IBaseQuery<educationModuleResource> & educationModuleResourceMethods;
	publish(): IBaseExecution<educationModule>;
	setUpResourcesFolder(): IBaseExecution<educationModule>;
	pin(): IBaseExecution<educationModule>;
	unpin(): IBaseExecution<educationModule>;
}
export interface educationModuleOData extends entityOData {
	resources: IBaseResults<educationModuleResource>;
	publish(): IBaseExecution<educationModule>;
	setUpResourcesFolder(): IBaseExecution<educationModule>;
	pin(): IBaseExecution<educationModule>;
	unpin(): IBaseExecution<educationModule>;
}
export interface educationModuleCollection extends IBaseCollection<educationModule, educationModuleOData & educationModuleProps> {
    add(values?: any): IBaseExecution<educationModule>;
}
/*********************************************
* educationModuleResource
**********************************************/
export interface educationModuleResource extends educationModuleResourceProps, educationModuleResourceMethods { }
export interface educationModuleResourceProps extends  entityProps {
	resource: ComplexTypes.educationResource;
}
export interface educationModuleResourceMethods extends entityMethods {

}
export interface educationModuleResourceOData extends entityOData {

}
export interface educationModuleResourceCollection extends IBaseCollection<educationModuleResource, educationModuleResourceOData & educationModuleResourceProps> {
    add(values?: any): IBaseExecution<educationModuleResource>;
}
/*********************************************
* educationOrganization
**********************************************/
export interface educationOrganization extends educationOrganizationProps, educationOrganizationMethods { }
export interface educationOrganizationProps extends  entityProps {
	description: string;
	displayName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;
}
export interface educationOrganizationMethods extends entityMethods {

}
export interface educationOrganizationOData extends entityOData {

}
/*********************************************
* educationOutcome
**********************************************/
export interface educationOutcome extends educationOutcomeProps, educationOutcomeMethods { }
export interface educationOutcomeProps extends  entityProps {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface educationOutcomeMethods extends entityMethods {

}
export interface educationOutcomeOData extends entityOData {

}
export interface educationOutcomeCollection extends IBaseCollection<educationOutcome, educationOutcomeOData & educationOutcomeProps> {
    add(values?: any): IBaseExecution<educationOutcome>;
}
/*********************************************
* educationPointsOutcome
**********************************************/
export interface educationPointsOutcome extends educationPointsOutcomeProps, educationPointsOutcomeMethods { }
export interface educationPointsOutcomeProps extends  educationOutcomeProps {
	points: ComplexTypes.educationAssignmentPointsGrade;
	publishedPoints: ComplexTypes.educationAssignmentPointsGrade;
}
export interface educationPointsOutcomeMethods extends educationOutcomeMethods {

}
export interface educationPointsOutcomeOData extends educationOutcomeOData {

}
/*********************************************
* educationRoot
**********************************************/
export interface educationRoot extends educationRootProps, educationRootMethods { }
export interface educationRootProps   {

}
export interface educationRootMethods {
	classes(): educationClassCollection;
	classes(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	me(): IBaseQuery<educationUser> & educationUserMethods;
	schools(): educationSchoolCollection;
	schools(id: string | number): IBaseQuery<educationSchool> & educationSchoolMethods;
	users(): educationUserCollection;
	users(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
}
export interface educationRootOData {
	classes: IBaseResults<educationClass>;
	me: educationUser;
	schools: IBaseResults<educationSchool>;
	users: IBaseResults<educationUser>;
}
/*********************************************
* educationRubric
**********************************************/
export interface educationRubric extends educationRubricProps, educationRubricMethods { }
export interface educationRubricProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: ComplexTypes.educationItemBody;
	displayName: string;
	grading: ComplexTypes.educationAssignmentGradeType;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	levels: ComplexTypes.rubricLevel[];
	qualities: ComplexTypes.rubricQuality[];
}
export interface educationRubricMethods extends entityMethods {

}
export interface educationRubricOData extends entityOData {

}
export interface educationRubricCollection extends IBaseCollection<educationRubric, educationRubricOData & educationRubricProps> {
    add(values?: any): IBaseExecution<educationRubric>;
}
/*********************************************
* educationRubricOutcome
**********************************************/
export interface educationRubricOutcome extends educationRubricOutcomeProps, educationRubricOutcomeMethods { }
export interface educationRubricOutcomeProps extends  educationOutcomeProps {
	publishedRubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	publishedRubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];
	rubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	rubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];
}
export interface educationRubricOutcomeMethods extends educationOutcomeMethods {

}
export interface educationRubricOutcomeOData extends educationOutcomeOData {

}
/*********************************************
* educationSchool
**********************************************/
export interface educationSchool extends educationSchoolProps, educationSchoolMethods { }
export interface educationSchoolProps extends  educationOrganizationProps {
	address: ComplexTypes.physicalAddress;
	createdBy: ComplexTypes.identitySet;
	externalId: string;
	externalPrincipalId: string;
	fax: string;
	highestGrade: string;
	lowestGrade: string;
	phone: string;
	principalEmail: string;
	principalName: string;
	schoolNumber: string;
}
export interface educationSchoolMethods extends educationOrganizationMethods {
	administrativeUnit(): IBaseQuery<administrativeUnit> & administrativeUnitMethods;
	classes(): educationClassCollection;
	classes(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	users(): educationUserCollection;
	users(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
}
export interface educationSchoolOData extends educationOrganizationOData {
	administrativeUnit: administrativeUnit;
	classes: IBaseResults<educationClass>;
	users: IBaseResults<educationUser>;
}
export interface educationSchoolCollection extends IBaseCollection<educationSchool, educationSchoolOData & educationSchoolProps> {
    add(values?: any): IBaseExecution<educationSchool>;
}
/*********************************************
* educationSubmission
**********************************************/
export interface educationSubmission extends educationSubmissionProps, educationSubmissionMethods { }
export interface educationSubmissionProps extends  entityProps {
	excusedBy: ComplexTypes.identitySet;
	excusedDateTime: any;
	reassignedBy: ComplexTypes.identitySet;
	reassignedDateTime: any;
	recipient: ComplexTypes.educationSubmissionRecipient;
	resourcesFolderUrl: string;
	returnedBy: ComplexTypes.identitySet;
	returnedDateTime: any;
	status: EnumTypes.educationSubmissionStatus;
	submittedBy: ComplexTypes.identitySet;
	submittedDateTime: any;
	unsubmittedBy: ComplexTypes.identitySet;
	unsubmittedDateTime: any;
	webUrl: string;
}
export interface educationSubmissionMethods extends entityMethods {
	outcomes(): educationOutcomeCollection;
	outcomes(id: string | number): IBaseQuery<educationOutcome> & educationOutcomeMethods;
	resources(): educationSubmissionResourceCollection;
	resources(id: string | number): IBaseQuery<educationSubmissionResource> & educationSubmissionResourceMethods;
	submittedResources(): educationSubmissionResourceCollection;
	submittedResources(id: string | number): IBaseQuery<educationSubmissionResource> & educationSubmissionResourceMethods;
	setUpResourcesFolder(): IBaseExecution<educationSubmission>;
	excuse(): IBaseExecution<educationSubmission>;
	reassign(): IBaseExecution<educationSubmission>;
	_return(): IBaseExecution<educationSubmission>;
	submit(): IBaseExecution<educationSubmission>;
	unsubmit(): IBaseExecution<educationSubmission>;
}
export interface educationSubmissionOData extends entityOData {
	outcomes: IBaseResults<educationOutcome>;
	resources: IBaseResults<educationSubmissionResource>;
	submittedResources: IBaseResults<educationSubmissionResource>;
	setUpResourcesFolder(): IBaseExecution<educationSubmission>;
	excuse(): IBaseExecution<educationSubmission>;
	reassign(): IBaseExecution<educationSubmission>;
	_return(): IBaseExecution<educationSubmission>;
	submit(): IBaseExecution<educationSubmission>;
	unsubmit(): IBaseExecution<educationSubmission>;
}
export interface educationSubmissionCollection extends IBaseCollection<educationSubmission, educationSubmissionOData & educationSubmissionProps> {
    add(values?: any): IBaseExecution<educationSubmission>;
}
/*********************************************
* educationSubmissionResource
**********************************************/
export interface educationSubmissionResource extends educationSubmissionResourceProps, educationSubmissionResourceMethods { }
export interface educationSubmissionResourceProps extends  entityProps {
	assignmentResourceUrl: string;
	resource: ComplexTypes.educationResource;
}
export interface educationSubmissionResourceMethods extends entityMethods {

}
export interface educationSubmissionResourceOData extends entityOData {

}
export interface educationSubmissionResourceCollection extends IBaseCollection<educationSubmissionResource, educationSubmissionResourceOData & educationSubmissionResourceProps> {
    add(values?: any): IBaseExecution<educationSubmissionResource>;
}
/*********************************************
* educationUser
**********************************************/
export interface educationUser extends educationUserProps, educationUserMethods { }
export interface educationUserProps extends  entityProps {
	relatedContacts: ComplexTypes.relatedContact[];
	accountEnabled: boolean;
	assignedLicenses: ComplexTypes.assignedLicense[];
	assignedPlans: ComplexTypes.assignedPlan[];
	businessPhones: Array<string>[];
	createdBy: ComplexTypes.identitySet;
	department: string;
	displayName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;
	givenName: string;
	mail: string;
	mailingAddress: ComplexTypes.physicalAddress;
	mailNickname: string;
	middleName: string;
	mobilePhone: string;
	officeLocation: string;
	onPremisesInfo: ComplexTypes.educationOnPremisesInfo;
	passwordPolicies: string;
	passwordProfile: ComplexTypes.passwordProfile;
	preferredLanguage: string;
	primaryRole: EnumTypes.educationUserRole;
	provisionedPlans: ComplexTypes.provisionedPlan[];
	refreshTokensValidFromDateTime: any;
	residenceAddress: ComplexTypes.physicalAddress;
	showInAddressList: boolean;
	student: ComplexTypes.educationStudent;
	surname: string;
	teacher: ComplexTypes.educationTeacher;
	usageLocation: string;
	userPrincipalName: string;
	userType: string;
}
export interface educationUserMethods extends entityMethods {
	assignments(): educationAssignmentCollection;
	assignments(id: string | number): IBaseQuery<educationAssignment> & educationAssignmentMethods;
	rubrics(): educationRubricCollection;
	rubrics(id: string | number): IBaseQuery<educationRubric> & educationRubricMethods;
	classes(): educationClassCollection;
	classes(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	schools(): educationSchoolCollection;
	schools(id: string | number): IBaseQuery<educationSchool> & educationSchoolMethods;
	taughtClasses(): educationClassCollection;
	taughtClasses(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	user(): IBaseQuery<user> & userMethods;
}
export interface educationUserOData extends entityOData {
	assignments: IBaseResults<educationAssignment>;
	rubrics: IBaseResults<educationRubric>;
	classes: IBaseResults<educationClass>;
	schools: IBaseResults<educationSchool>;
	taughtClasses: IBaseResults<educationClass>;
	user: user;
}
export interface educationUserCollection extends IBaseCollection<educationUser, educationUserOData & educationUserProps> {
    add(values?: any): IBaseExecution<educationUser>;
}
/*********************************************
* emailAuthenticationMethod
**********************************************/
export interface emailAuthenticationMethod extends emailAuthenticationMethodProps, emailAuthenticationMethodMethods { }
export interface emailAuthenticationMethodProps extends  authenticationMethodProps {
	emailAddress: string;
}
export interface emailAuthenticationMethodMethods extends authenticationMethodMethods {

}
export interface emailAuthenticationMethodOData extends authenticationMethodOData {

}
export interface emailAuthenticationMethodCollection extends IBaseCollection<emailAuthenticationMethod, emailAuthenticationMethodOData & emailAuthenticationMethodProps> {
    add(values?: any): IBaseExecution<emailAuthenticationMethod>;
}
/*********************************************
* emailAuthenticationMethodConfiguration
**********************************************/
export interface emailAuthenticationMethodConfiguration extends emailAuthenticationMethodConfigurationProps, emailAuthenticationMethodConfigurationMethods { }
export interface emailAuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {
	allowExternalIdToUseEmailOtp: EnumTypes.externalEmailOtpState;
}
export interface emailAuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): authenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
}
export interface emailAuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<authenticationMethodTarget>;
}
/*********************************************
* emailFileAssessmentRequest
**********************************************/
export interface emailFileAssessmentRequest extends emailFileAssessmentRequestProps, emailFileAssessmentRequestMethods { }
export interface emailFileAssessmentRequestProps extends  threatAssessmentRequestProps {
	contentData: string;
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	recipientEmail: string;
}
export interface emailFileAssessmentRequestMethods extends threatAssessmentRequestMethods {

}
export interface emailFileAssessmentRequestOData extends threatAssessmentRequestOData {

}
/*********************************************
* employeeExperience
**********************************************/
export interface employeeExperience extends employeeExperienceProps, employeeExperienceMethods { }
export interface employeeExperienceProps   {

}
export interface employeeExperienceMethods {
	communities(): communityCollection;
	communities(id: string | number): IBaseQuery<community> & communityMethods;
	engagementAsyncOperations(): engagementAsyncOperationCollection;
	engagementAsyncOperations(id: string | number): IBaseQuery<engagementAsyncOperation> & engagementAsyncOperationMethods;
	learningCourseActivities(): learningCourseActivityCollection;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity> & learningCourseActivityMethods;
	learningProviders(): learningProviderCollection;
	learningProviders(id: string | number): IBaseQuery<learningProvider> & learningProviderMethods;
}
export interface employeeExperienceOData {
	communities: IBaseResults<community>;
	engagementAsyncOperations: IBaseResults<engagementAsyncOperation>;
	learningCourseActivities: IBaseResults<learningCourseActivity>;
	learningProviders: IBaseResults<learningProvider>;
}
/*********************************************
* employeeExperienceUser
**********************************************/
export interface employeeExperienceUser extends employeeExperienceUserProps, employeeExperienceUserMethods { }
export interface employeeExperienceUserProps extends  entityProps {

}
export interface employeeExperienceUserMethods extends entityMethods {
	learningCourseActivities(): learningCourseActivityCollection;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity> & learningCourseActivityMethods;
}
export interface employeeExperienceUserOData extends entityOData {
	learningCourseActivities: IBaseResults<learningCourseActivity>;
}
/*********************************************
* endUserNotification
**********************************************/
export interface endUserNotification extends endUserNotificationProps, endUserNotificationMethods { }
export interface endUserNotificationProps extends  entityProps {
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	notificationType: EnumTypes.endUserNotificationType;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
	supportedLocales: Array<string>[];
}
export interface endUserNotificationMethods extends entityMethods {
	details(): endUserNotificationDetailCollection;
	details(id: string | number): IBaseQuery<endUserNotificationDetail> & endUserNotificationDetailMethods;
}
export interface endUserNotificationOData extends entityOData {
	details: IBaseResults<endUserNotificationDetail>;
}
export interface endUserNotificationCollection extends IBaseCollection<endUserNotification, endUserNotificationOData & endUserNotificationProps> {
    add(values?: any): IBaseExecution<endUserNotification>;
}
/*********************************************
* endUserNotificationDetail
**********************************************/
export interface endUserNotificationDetail extends endUserNotificationDetailProps, endUserNotificationDetailMethods { }
export interface endUserNotificationDetailProps extends  entityProps {
	emailContent: string;
	isDefaultLangauge: boolean;
	language: string;
	locale: string;
	sentFrom: ComplexTypes.emailIdentity;
	subject: string;
}
export interface endUserNotificationDetailMethods extends entityMethods {

}
export interface endUserNotificationDetailOData extends entityOData {

}
export interface endUserNotificationDetailCollection extends IBaseCollection<endUserNotificationDetail, endUserNotificationDetailOData & endUserNotificationDetailProps> {
    add(values?: any): IBaseExecution<endUserNotificationDetail>;
}
/*********************************************
* endpoint
**********************************************/
export interface endpoint extends endpointProps, endpointMethods { }
export interface endpointProps extends  directoryObjectProps {
	capability: string;
	providerId: string;
	providerName: string;
	providerResourceId: string;
	uri: string;
}
export interface endpointMethods extends directoryObjectMethods {

}
export interface endpointOData extends directoryObjectOData {

}
export interface endpointCollection extends IBaseCollection<endpoint, endpointOData & endpointProps> {
    add(values?: any): IBaseExecution<endpoint>;
}
/*********************************************
* engagementAsyncOperation
**********************************************/
export interface engagementAsyncOperation extends engagementAsyncOperationProps, engagementAsyncOperationMethods { }
export interface engagementAsyncOperationProps extends  longRunningOperationProps {
	operationType: EnumTypes.engagementAsyncOperationType;
	resourceId: string;
}
export interface engagementAsyncOperationMethods extends longRunningOperationMethods {

}
export interface engagementAsyncOperationOData extends longRunningOperationOData {

}
export interface engagementAsyncOperationCollection extends IBaseCollection<engagementAsyncOperation, engagementAsyncOperationOData & engagementAsyncOperationProps> {
    add(values?: any): IBaseExecution<engagementAsyncOperation>;
}
/*********************************************
* enrollmentConfigurationAssignment
**********************************************/
export interface enrollmentConfigurationAssignment extends enrollmentConfigurationAssignmentProps, enrollmentConfigurationAssignmentMethods { }
export interface enrollmentConfigurationAssignmentProps extends  entityProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface enrollmentConfigurationAssignmentMethods extends entityMethods {

}
export interface enrollmentConfigurationAssignmentOData extends entityOData {

}
export interface enrollmentConfigurationAssignmentCollection extends IBaseCollection<enrollmentConfigurationAssignment, enrollmentConfigurationAssignmentOData & enrollmentConfigurationAssignmentProps> {
    add(values?: any): IBaseExecution<enrollmentConfigurationAssignment>;
}
/*********************************************
* enrollmentTroubleshootingEvent
**********************************************/
export interface enrollmentTroubleshootingEvent extends enrollmentTroubleshootingEventProps, enrollmentTroubleshootingEventMethods { }
export interface enrollmentTroubleshootingEventProps extends  deviceManagementTroubleshootingEventProps {
	deviceId: string;
	enrollmentType: EnumTypes.deviceEnrollmentType;
	failureCategory: EnumTypes.deviceEnrollmentFailureReason;
	failureReason: string;
	managedDeviceIdentifier: string;
	operatingSystem: string;
	osVersion: string;
	userId: string;
}
export interface enrollmentTroubleshootingEventMethods extends deviceManagementTroubleshootingEventMethods {

}
export interface enrollmentTroubleshootingEventOData extends deviceManagementTroubleshootingEventOData {

}
/*********************************************
* enterpriseCodeSigningCertificate
**********************************************/
export interface enterpriseCodeSigningCertificate extends enterpriseCodeSigningCertificateProps, enterpriseCodeSigningCertificateMethods { }
export interface enterpriseCodeSigningCertificateProps extends  entityProps {
	content: any;
	expirationDateTime: any;
	issuer: string;
	issuerName: string;
	status: EnumTypes.certificateStatus;
	subject: string;
	subjectName: string;
	uploadDateTime: any;
}
export interface enterpriseCodeSigningCertificateMethods extends entityMethods {

}
export interface enterpriseCodeSigningCertificateOData extends entityOData {

}
/*********************************************
* entitlementManagement
**********************************************/
export interface entitlementManagement extends entitlementManagementProps, entitlementManagementMethods { }
export interface entitlementManagementProps extends  entityProps {

}
export interface entitlementManagementMethods extends entityMethods {
	accessPackageAssignmentApprovals(): approvalCollection;
	accessPackageAssignmentApprovals(id: string | number): IBaseQuery<approval> & approvalMethods;
	accessPackages(): accessPackageCollection;
	accessPackages(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	assignmentPolicies(): accessPackageAssignmentPolicyCollection;
	assignmentPolicies(id: string | number): IBaseQuery<accessPackageAssignmentPolicy> & accessPackageAssignmentPolicyMethods;
	assignmentRequests(): accessPackageAssignmentRequestCollection;
	assignmentRequests(id: string | number): IBaseQuery<accessPackageAssignmentRequest> & accessPackageAssignmentRequestMethods;
	assignments(): accessPackageAssignmentCollection;
	assignments(id: string | number): IBaseQuery<accessPackageAssignment> & accessPackageAssignmentMethods;
	catalogs(): accessPackageCatalogCollection;
	catalogs(id: string | number): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	connectedOrganizations(): connectedOrganizationCollection;
	connectedOrganizations(id: string | number): IBaseQuery<connectedOrganization> & connectedOrganizationMethods;
	resourceEnvironments(): accessPackageResourceEnvironmentCollection;
	resourceEnvironments(id: string | number): IBaseQuery<accessPackageResourceEnvironment> & accessPackageResourceEnvironmentMethods;
	resourceRequests(): accessPackageResourceRequestCollection;
	resourceRequests(id: string | number): IBaseQuery<accessPackageResourceRequest> & accessPackageResourceRequestMethods;
	resourceRoleScopes(): accessPackageResourceRoleScopeCollection;
	resourceRoleScopes(id: string | number): IBaseQuery<accessPackageResourceRoleScope> & accessPackageResourceRoleScopeMethods;
	resources(): accessPackageResourceCollection;
	resources(id: string | number): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
	settings(): IBaseQuery<entitlementManagementSettings> & entitlementManagementSettingsMethods;
}
export interface entitlementManagementOData extends entityOData {
	accessPackageAssignmentApprovals: IBaseResults<approval>;
	accessPackages: IBaseResults<accessPackage>;
	assignmentPolicies: IBaseResults<accessPackageAssignmentPolicy>;
	assignmentRequests: IBaseResults<accessPackageAssignmentRequest>;
	assignments: IBaseResults<accessPackageAssignment>;
	catalogs: IBaseResults<accessPackageCatalog>;
	connectedOrganizations: IBaseResults<connectedOrganization>;
	resourceEnvironments: IBaseResults<accessPackageResourceEnvironment>;
	resourceRequests: IBaseResults<accessPackageResourceRequest>;
	resourceRoleScopes: IBaseResults<accessPackageResourceRoleScope>;
	resources: IBaseResults<accessPackageResource>;
	settings: entitlementManagementSettings;
}
/*********************************************
* entitlementManagementSettings
**********************************************/
export interface entitlementManagementSettings extends entitlementManagementSettingsProps, entitlementManagementSettingsMethods { }
export interface entitlementManagementSettingsProps extends  entityProps {
	durationUntilExternalUserDeletedAfterBlocked: number;
	externalUserLifecycleAction: EnumTypes.accessPackageExternalUserLifecycleAction;
}
export interface entitlementManagementSettingsMethods extends entityMethods {

}
export interface entitlementManagementSettingsOData extends entityOData {

}
/*********************************************
* entity
**********************************************/
export interface entity extends entityProps, entityMethods { }
export interface entityProps   {
	id: string;
}
export interface entityMethods {

}
export interface entityOData {

}
/*********************************************
* event
**********************************************/
export interface event extends eventProps, eventMethods { }
export interface eventProps extends  outlookItemProps {
	allowNewTimeProposals: boolean;
	attendees: ComplexTypes.attendee[];
	body: ComplexTypes.itemBody;
	bodyPreview: string;
	end: ComplexTypes.dateTimeTimeZone;
	hasAttachments: boolean;
	hideAttendees: boolean;
	iCalUId: string;
	importance: EnumTypes.importance;
	isAllDay: boolean;
	isCancelled: boolean;
	isDraft: boolean;
	isOnlineMeeting: boolean;
	isOrganizer: boolean;
	isReminderOn: boolean;
	location: ComplexTypes.location;
	locations: ComplexTypes.location[];
	onlineMeeting: ComplexTypes.onlineMeetingInfo;
	onlineMeetingProvider: EnumTypes.onlineMeetingProviderType;
	onlineMeetingUrl: string;
	organizer: ComplexTypes.recipient;
	originalEndTimeZone: string;
	originalStart: any;
	originalStartTimeZone: string;
	recurrence: ComplexTypes.patternedRecurrence;
	reminderMinutesBeforeStart: number;
	responseRequested: boolean;
	responseStatus: ComplexTypes.responseStatus;
	sensitivity: EnumTypes.sensitivity;
	seriesMasterId: string;
	showAs: EnumTypes.freeBusyStatus;
	start: ComplexTypes.dateTimeTimeZone;
	subject: string;
	transactionId: string;
	type: EnumTypes.eventType;
	webLink: string;
}
export interface eventMethods extends outlookItemMethods {
	attachments(): attachmentCollection;
	attachments(id: string | number): IBaseQuery<attachment> & attachmentMethods;
	calendar(): IBaseQuery<calendar> & calendarMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	instances(): eventCollection;
	instances(id: string | number): IBaseQuery<event> & eventMethods;
	multiValueExtendedProperties(): multiValueLegacyExtendedPropertyCollection;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): singleValueLegacyExtendedPropertyCollection;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
	cancel(Comment): IBaseExecution<void>;
	accept(SendResponse, Comment): IBaseExecution<void>;
	decline(ProposedNewTime, SendResponse, Comment): IBaseExecution<void>;
	dismissReminder(): IBaseExecution<void>;
	forward(ToRecipients, Comment): IBaseExecution<void>;
	snoozeReminder(NewReminderTime): IBaseExecution<void>;
	tentativelyAccept(ProposedNewTime, SendResponse, Comment): IBaseExecution<void>;
}
export interface eventOData extends outlookItemOData {
	attachments: IBaseResults<attachment>;
	calendar: calendar;
	extensions: IBaseResults<extension>;
	instances: IBaseResults<event>;
	multiValueExtendedProperties: IBaseResults<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties: IBaseResults<singleValueLegacyExtendedProperty>;
	cancel(Comment): IBaseExecution<void>;
	accept(SendResponse, Comment): IBaseExecution<void>;
	decline(ProposedNewTime, SendResponse, Comment): IBaseExecution<void>;
	dismissReminder(): IBaseExecution<void>;
	forward(ToRecipients, Comment): IBaseExecution<void>;
	snoozeReminder(NewReminderTime): IBaseExecution<void>;
	tentativelyAccept(ProposedNewTime, SendResponse, Comment): IBaseExecution<void>;
}
export interface eventCollection extends IBaseCollection<event, eventOData & eventProps> {
    add(values?: any): IBaseExecution<event>;
}
/*********************************************
* eventMessage
**********************************************/
export interface eventMessage extends eventMessageProps, eventMessageMethods { }
export interface eventMessageProps extends  messageProps {
	endDateTime: ComplexTypes.dateTimeTimeZone;
	isAllDay: boolean;
	isDelegated: boolean;
	isOutOfDate: boolean;
	location: ComplexTypes.location;
	meetingMessageType: EnumTypes.meetingMessageType;
	recurrence: ComplexTypes.patternedRecurrence;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	type: EnumTypes.eventType;
}
export interface eventMessageMethods extends messageMethods {
	event(): IBaseQuery<event> & eventMethods;
}
export interface eventMessageOData extends messageOData {
	event: event;
}
/*********************************************
* eventMessageRequest
**********************************************/
export interface eventMessageRequest extends eventMessageRequestProps, eventMessageRequestMethods { }
export interface eventMessageRequestProps extends  eventMessageProps {
	allowNewTimeProposals: boolean;
	meetingRequestType: EnumTypes.meetingRequestType;
	previousEndDateTime: ComplexTypes.dateTimeTimeZone;
	previousLocation: ComplexTypes.location;
	previousStartDateTime: ComplexTypes.dateTimeTimeZone;
	responseRequested: boolean;
}
export interface eventMessageRequestMethods extends eventMessageMethods {

}
export interface eventMessageRequestOData extends eventMessageOData {

}
/*********************************************
* eventMessageResponse
**********************************************/
export interface eventMessageResponse extends eventMessageResponseProps, eventMessageResponseMethods { }
export interface eventMessageResponseProps extends  eventMessageProps {
	proposedNewTime: ComplexTypes.timeSlot;
	responseType: EnumTypes.responseType;
}
export interface eventMessageResponseMethods extends eventMessageMethods {

}
export interface eventMessageResponseOData extends eventMessageOData {

}
/*********************************************
* exchangeProtectionPolicy
**********************************************/
export interface exchangeProtectionPolicy extends exchangeProtectionPolicyProps, exchangeProtectionPolicyMethods { }
export interface exchangeProtectionPolicyProps extends  protectionPolicyBaseProps {

}
export interface exchangeProtectionPolicyMethods extends protectionPolicyBaseMethods {
	mailboxInclusionRules(): mailboxProtectionRuleCollection;
	mailboxInclusionRules(id: string | number): IBaseQuery<mailboxProtectionRule> & mailboxProtectionRuleMethods;
	mailboxProtectionUnits(): mailboxProtectionUnitCollection;
	mailboxProtectionUnits(id: string | number): IBaseQuery<mailboxProtectionUnit> & mailboxProtectionUnitMethods;
}
export interface exchangeProtectionPolicyOData extends protectionPolicyBaseOData {
	mailboxInclusionRules: IBaseResults<mailboxProtectionRule>;
	mailboxProtectionUnits: IBaseResults<mailboxProtectionUnit>;
}
export interface exchangeProtectionPolicyCollection extends IBaseCollection<exchangeProtectionPolicy, exchangeProtectionPolicyOData & exchangeProtectionPolicyProps> {
    add(values?: any): IBaseExecution<exchangeProtectionPolicy>;
}
/*********************************************
* exchangeRestoreSession
**********************************************/
export interface exchangeRestoreSession extends exchangeRestoreSessionProps, exchangeRestoreSessionMethods { }
export interface exchangeRestoreSessionProps extends  restoreSessionBaseProps {

}
export interface exchangeRestoreSessionMethods extends restoreSessionBaseMethods {
	granularMailboxRestoreArtifacts(): granularMailboxRestoreArtifactCollection;
	granularMailboxRestoreArtifacts(id: string | number): IBaseQuery<granularMailboxRestoreArtifact> & granularMailboxRestoreArtifactMethods;
	mailboxRestoreArtifacts(): mailboxRestoreArtifactCollection;
	mailboxRestoreArtifacts(id: string | number): IBaseQuery<mailboxRestoreArtifact> & mailboxRestoreArtifactMethods;
}
export interface exchangeRestoreSessionOData extends restoreSessionBaseOData {
	granularMailboxRestoreArtifacts: IBaseResults<granularMailboxRestoreArtifact>;
	mailboxRestoreArtifacts: IBaseResults<mailboxRestoreArtifact>;
}
export interface exchangeRestoreSessionCollection extends IBaseCollection<exchangeRestoreSession, exchangeRestoreSessionOData & exchangeRestoreSessionProps> {
    add(values?: any): IBaseExecution<exchangeRestoreSession>;
}
/*********************************************
* exportSuccessOperation
**********************************************/
export interface exportSuccessOperation extends exportSuccessOperationProps, exportSuccessOperationMethods { }
export interface exportSuccessOperationProps extends  operationProps {

}
export interface exportSuccessOperationMethods extends operationMethods {
	resourceLocation(): IBaseQuery<manifest> & manifestMethods;
}
export interface exportSuccessOperationOData extends operationOData {
	resourceLocation: manifest;
}
/*********************************************
* extension
**********************************************/
export interface extension extends extensionProps, extensionMethods { }
export interface extensionProps extends  entityProps {

}
export interface extensionMethods extends entityMethods {

}
export interface extensionOData extends entityOData {

}
export interface extensionCollection extends IBaseCollection<extension, extensionOData & extensionProps> {
    add(values?: any): IBaseExecution<extension>;
}
/*********************************************
* extensionProperty
**********************************************/
export interface extensionProperty extends extensionPropertyProps, extensionPropertyMethods { }
export interface extensionPropertyProps extends  directoryObjectProps {
	appDisplayName: string;
	dataType: string;
	isMultiValued: boolean;
	isSyncedFromOnPremises: boolean;
	name: string;
	targetObjects: Array<string>[];
}
export interface extensionPropertyMethods extends directoryObjectMethods {

}
export interface extensionPropertyOData extends directoryObjectOData {

}
export interface extensionPropertyCollection extends IBaseCollection<extensionProperty, extensionPropertyOData & extensionPropertyProps> {
    add(values?: any): IBaseExecution<extensionProperty>;
}
/*********************************************
* external
**********************************************/
export interface external extends externalProps, externalMethods { }
export interface externalProps   {

}
export interface externalMethods {
	connections(): IBaseCollection<externalConnection, externalConnectionOData & externalConnectionProps>;
	connections(id: string | number): IBaseQuery<externalConnection> & externalConnectionMethods;
}
export interface externalOData {
	connections: IBaseResults<externalConnection>;
}
/*********************************************
* externalActivity
**********************************************/
export interface externalActivity extends externalActivityProps, externalActivityMethods { }
export interface externalActivityProps extends  entityProps {
	startDateTime: any;
	type: EnumTypes.externalActivityType;
}
export interface externalActivityMethods extends entityMethods {
	performedBy(): IBaseQuery<ComplexTypes.identity>;
}
export interface externalActivityOData extends entityOData {
	performedBy: ComplexTypes.identity;
}
/*********************************************
* externalActivityResult
**********************************************/
export interface externalActivityResult extends externalActivityResultProps, externalActivityResultMethods { }
export interface externalActivityResultProps extends  externalActivityProps {
	error: ComplexTypes.publicError;
}
export interface externalActivityResultMethods extends externalActivityMethods {

}
export interface externalActivityResultOData extends externalActivityOData {

}
/*********************************************
* externalConnection
**********************************************/
export interface externalConnection extends externalConnectionProps, externalConnectionMethods { }
export interface externalConnectionProps extends  entityProps {
	activitySettings: ComplexTypes.activitySettings;
	configuration: ComplexTypes.configuration;
	connectorId: string;
	description: string;
	name: string;
	searchSettings: ComplexTypes.searchSettings;
	state: EnumTypes.connectionState;
}
export interface externalConnectionMethods extends entityMethods {
	groups(): IBaseCollection<externalGroup, entity & externalGroupOData & externalGroupProps>;
	groups(id: string | number): IBaseQuery<externalGroup> & externalGroupMethods;
	items(): IBaseCollection<externalItem, entity & externalItemOData & externalItemProps>;
	items(id: string | number): IBaseQuery<externalItem> & externalItemMethods;
	operations(): IBaseCollection<connectionOperation, entity & connectionOperationOData & connectionOperationProps>;
	operations(id: string | number): IBaseQuery<connectionOperation> & connectionOperationMethods;
	schema(): IBaseQuery<schema> & schemaMethods;
}
export interface externalConnectionOData extends entityOData {
	groups: IBaseResults<externalGroup>;
	items: IBaseResults<externalItem>;
	operations: IBaseResults<connectionOperation>;
	schema: schema;
}
/*********************************************
* externalDomainName
**********************************************/
export interface externalDomainName extends externalDomainNameProps, externalDomainNameMethods { }
export interface externalDomainNameProps extends  entityProps {

}
export interface externalDomainNameMethods extends entityMethods {

}
export interface externalDomainNameOData extends entityOData {

}
export interface externalDomainNameCollection extends IBaseCollection<externalDomainName, externalDomainNameOData & externalDomainNameProps> {
    add(values?: any): IBaseExecution<externalDomainName>;
}
/*********************************************
* externalGroup
**********************************************/
export interface externalGroup extends externalGroupProps, externalGroupMethods { }
export interface externalGroupProps extends  entityProps {
	description: string;
	displayName: string;
}
export interface externalGroupMethods extends entityMethods {
	members(): IBaseCollection<ComplexTypes.identity>;
	members(id: string | number): IBaseQuery<ComplexTypes.identity>;
}
export interface externalGroupOData extends entityOData {
	members: IBaseResults<ComplexTypes.identity>;
}
/*********************************************
* externalItem
**********************************************/
export interface externalItem extends externalItemProps, externalItemMethods { }
export interface externalItemProps extends  entityProps {
	acl: ComplexTypes.acl[];
	content: ComplexTypes.externalItemContent;
	properties: ComplexTypes.properties;
}
export interface externalItemMethods extends entityMethods {
	activities(): IBaseCollection<externalActivity, entity & externalActivityOData & externalActivityProps>;
	activities(id: string | number): IBaseQuery<externalActivity> & externalActivityMethods;
}
export interface externalItemOData extends entityOData {
	activities: IBaseResults<externalActivity>;
}
/*********************************************
* externalUsersSelfServiceSignUpEventsFlow
**********************************************/
export interface externalUsersSelfServiceSignUpEventsFlow extends externalUsersSelfServiceSignUpEventsFlowProps, externalUsersSelfServiceSignUpEventsFlowMethods { }
export interface externalUsersSelfServiceSignUpEventsFlowProps extends  authenticationEventsFlowProps {
	onAttributeCollection: ComplexTypes.onAttributeCollectionHandler;
	onAuthenticationMethodLoadStart: ComplexTypes.onAuthenticationMethodLoadStartHandler;
	onInteractiveAuthFlowStart: ComplexTypes.onInteractiveAuthFlowStartHandler;
	onUserCreateStart: ComplexTypes.onUserCreateStartHandler;
}
export interface externalUsersSelfServiceSignUpEventsFlowMethods extends authenticationEventsFlowMethods {

}
export interface externalUsersSelfServiceSignUpEventsFlowOData extends authenticationEventsFlowOData {

}
/*********************************************
* failedOperation
**********************************************/
export interface failedOperation extends failedOperationProps, failedOperationMethods { }
export interface failedOperationProps extends  operationProps {
	error: ComplexTypes.publicError;
}
export interface failedOperationMethods extends operationMethods {

}
export interface failedOperationOData extends operationOData {

}
/*********************************************
* featureRolloutPolicy
**********************************************/
export interface featureRolloutPolicy extends featureRolloutPolicyProps, featureRolloutPolicyMethods { }
export interface featureRolloutPolicyProps extends  entityProps {
	description: string;
	displayName: string;
	feature: EnumTypes.stagedFeatureName;
	isAppliedToOrganization: boolean;
	isEnabled: boolean;
}
export interface featureRolloutPolicyMethods extends entityMethods {
	appliesTo(): directoryObjectCollection;
	appliesTo(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface featureRolloutPolicyOData extends entityOData {
	appliesTo: IBaseResults<directoryObject>;
}
export interface featureRolloutPolicyCollection extends IBaseCollection<featureRolloutPolicy, featureRolloutPolicyOData & featureRolloutPolicyProps> {
    add(values?: any): IBaseExecution<featureRolloutPolicy>;
}
/*********************************************
* federatedIdentityCredential
**********************************************/
export interface federatedIdentityCredential extends federatedIdentityCredentialProps, federatedIdentityCredentialMethods { }
export interface federatedIdentityCredentialProps extends  entityProps {
	audiences: Array<string>[];
	description: string;
	issuer: string;
	name: string;
	subject: string;
}
export interface federatedIdentityCredentialMethods extends entityMethods {

}
export interface federatedIdentityCredentialOData extends entityOData {

}
export interface federatedIdentityCredentialCollection extends IBaseCollection<federatedIdentityCredential, federatedIdentityCredentialOData & federatedIdentityCredentialProps> {
    add(values?: any): IBaseExecution<federatedIdentityCredential>;
}
/*********************************************
* fido2AuthenticationMethod
**********************************************/
export interface fido2AuthenticationMethod extends fido2AuthenticationMethodProps, fido2AuthenticationMethodMethods { }
export interface fido2AuthenticationMethodProps extends  authenticationMethodProps {
	aaGuid: string;
	attestationCertificates: Array<string>[];
	attestationLevel: EnumTypes.attestationLevel;
	createdDateTime: any;
	displayName: string;
	model: string;
}
export interface fido2AuthenticationMethodMethods extends authenticationMethodMethods {

}
export interface fido2AuthenticationMethodOData extends authenticationMethodOData {

}
export interface fido2AuthenticationMethodCollection extends IBaseCollection<fido2AuthenticationMethod, fido2AuthenticationMethodOData & fido2AuthenticationMethodProps> {
    add(values?: any): IBaseExecution<fido2AuthenticationMethod>;
}
/*********************************************
* fido2AuthenticationMethodConfiguration
**********************************************/
export interface fido2AuthenticationMethodConfiguration extends fido2AuthenticationMethodConfigurationProps, fido2AuthenticationMethodConfigurationMethods { }
export interface fido2AuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {
	isAttestationEnforced: boolean;
	isSelfServiceRegistrationAllowed: boolean;
	keyRestrictions: ComplexTypes.fido2KeyRestrictions;
}
export interface fido2AuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): authenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
}
export interface fido2AuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<authenticationMethodTarget>;
}
/*********************************************
* fido2CombinationConfiguration
**********************************************/
export interface fido2CombinationConfiguration extends fido2CombinationConfigurationProps, fido2CombinationConfigurationMethods { }
export interface fido2CombinationConfigurationProps extends  authenticationCombinationConfigurationProps {
	allowedAAGUIDs: Array<string>[];
}
export interface fido2CombinationConfigurationMethods extends authenticationCombinationConfigurationMethods {

}
export interface fido2CombinationConfigurationOData extends authenticationCombinationConfigurationOData {

}
/*********************************************
* fieldValueSet
**********************************************/
export interface fieldValueSet extends fieldValueSetProps, fieldValueSetMethods { }
export interface fieldValueSetProps extends  entityProps {

}
export interface fieldValueSetMethods extends entityMethods {

}
export interface fieldValueSetOData extends entityOData {

}
/*********************************************
* fileAssessmentRequest
**********************************************/
export interface fileAssessmentRequest extends fileAssessmentRequestProps, fileAssessmentRequestMethods { }
export interface fileAssessmentRequestProps extends  threatAssessmentRequestProps {
	contentData: string;
	fileName: string;
}
export interface fileAssessmentRequestMethods extends threatAssessmentRequestMethods {

}
export interface fileAssessmentRequestOData extends threatAssessmentRequestOData {

}
/*********************************************
* fileAttachment
**********************************************/
export interface fileAttachment extends fileAttachmentProps, fileAttachmentMethods { }
export interface fileAttachmentProps extends  attachmentProps {
	contentBytes: any;
	contentId: string;
	contentLocation: string;
}
export interface fileAttachmentMethods extends attachmentMethods {

}
export interface fileAttachmentOData extends attachmentOData {

}
/*********************************************
* filePlanDescriptor
**********************************************/
export interface filePlanDescriptor extends filePlanDescriptorProps, filePlanDescriptorMethods { }
export interface filePlanDescriptorProps extends  entityProps {
	authority: ComplexTypes.filePlanAuthority;
	category: ComplexTypes.filePlanAppliedCategory;
	citation: ComplexTypes.filePlanCitation;
	department: ComplexTypes.filePlanDepartment;
	filePlanReference: ComplexTypes.filePlanReference;
}
export interface filePlanDescriptorMethods extends entityMethods {
	authorityTemplate(): IBaseQuery<authorityTemplate> & authorityTemplateMethods;
	categoryTemplate(): IBaseQuery<categoryTemplate> & categoryTemplateMethods;
	citationTemplate(): IBaseQuery<citationTemplate> & citationTemplateMethods;
	departmentTemplate(): IBaseQuery<departmentTemplate> & departmentTemplateMethods;
	filePlanReferenceTemplate(): IBaseQuery<filePlanReferenceTemplate> & filePlanReferenceTemplateMethods;
}
export interface filePlanDescriptorOData extends entityOData {
	authorityTemplate: authorityTemplate;
	categoryTemplate: categoryTemplate;
	citationTemplate: citationTemplate;
	departmentTemplate: departmentTemplate;
	filePlanReferenceTemplate: filePlanReferenceTemplate;
}
/*********************************************
* filePlanDescriptorTemplate
**********************************************/
export interface filePlanDescriptorTemplate extends filePlanDescriptorTemplateProps, filePlanDescriptorTemplateMethods { }
export interface filePlanDescriptorTemplateProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
}
export interface filePlanDescriptorTemplateMethods extends entityMethods {

}
export interface filePlanDescriptorTemplateOData extends entityOData {

}
/*********************************************
* filePlanReferenceTemplate
**********************************************/
export interface filePlanReferenceTemplate extends filePlanReferenceTemplateProps, filePlanReferenceTemplateMethods { }
export interface filePlanReferenceTemplateProps extends  filePlanDescriptorTemplateProps {

}
export interface filePlanReferenceTemplateMethods extends filePlanDescriptorTemplateMethods {

}
export interface filePlanReferenceTemplateOData extends filePlanDescriptorTemplateOData {

}
/*********************************************
* fileStorage
**********************************************/
export interface fileStorage extends fileStorageProps, fileStorageMethods { }
export interface fileStorageProps extends  entityProps {

}
export interface fileStorageMethods extends entityMethods {
	containers(): fileStorageContainerCollection;
	containers(id: string | number): IBaseQuery<fileStorageContainer> & fileStorageContainerMethods;
}
export interface fileStorageOData extends entityOData {
	containers: IBaseResults<fileStorageContainer>;
}
/*********************************************
* fileStorageContainer
**********************************************/
export interface fileStorageContainer extends fileStorageContainerProps, fileStorageContainerMethods { }
export interface fileStorageContainerProps extends  entityProps {
	containerTypeId: any;
	createdDateTime: any;
	customProperties: ComplexTypes.fileStorageContainerCustomPropertyDictionary;
	description: string;
	displayName: string;
	settings: ComplexTypes.fileStorageContainerSettings;
	status: EnumTypes.fileStorageContainerStatus;
	viewpoint: ComplexTypes.fileStorageContainerViewpoint;
}
export interface fileStorageContainerMethods extends entityMethods {
	drive(): IBaseQuery<drive> & driveMethods;
	permissions(): permissionCollection;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
	permanentDelete(): IBaseExecution<void>;
}
export interface fileStorageContainerOData extends entityOData {
	drive: drive;
	permissions: IBaseResults<permission>;
	permanentDelete(): IBaseExecution<void>;
}
export interface fileStorageContainerCollection extends IBaseCollection<fileStorageContainer, fileStorageContainerOData & fileStorageContainerProps> {
    add(values?: any): IBaseExecution<fileStorageContainer>;
}
/*********************************************
* filterOperatorSchema
**********************************************/
export interface filterOperatorSchema extends filterOperatorSchemaProps, filterOperatorSchemaMethods { }
export interface filterOperatorSchemaProps extends  entityProps {
	arity: EnumTypes.scopeOperatorType;
	multivaluedComparisonType: EnumTypes.scopeOperatorMultiValuedComparisonType;
	supportedAttributeTypes: EnumTypes.attributeType[];
}
export interface filterOperatorSchemaMethods extends entityMethods {

}
export interface filterOperatorSchemaOData extends entityOData {

}
/*********************************************
* governanceInsight
**********************************************/
export interface governanceInsight extends governanceInsightProps, governanceInsightMethods { }
export interface governanceInsightProps extends  entityProps {
	insightCreatedDateTime: any;
}
export interface governanceInsightMethods extends entityMethods {

}
export interface governanceInsightOData extends entityOData {

}
export interface governanceInsightCollection extends IBaseCollection<governanceInsight, governanceInsightOData & governanceInsightProps> {
    add(values?: any): IBaseExecution<governanceInsight>;
}
/*********************************************
* granularMailboxRestoreArtifact
**********************************************/
export interface granularMailboxRestoreArtifact extends granularMailboxRestoreArtifactProps, granularMailboxRestoreArtifactMethods { }
export interface granularMailboxRestoreArtifactProps extends  mailboxRestoreArtifactProps {
	artifactCount: number;
	searchResponseId: string;
}
export interface granularMailboxRestoreArtifactMethods extends mailboxRestoreArtifactMethods {

}
export interface granularMailboxRestoreArtifactOData extends mailboxRestoreArtifactOData {

}
export interface granularMailboxRestoreArtifactCollection extends IBaseCollection<granularMailboxRestoreArtifact, granularMailboxRestoreArtifactOData & granularMailboxRestoreArtifactProps> {
    add(values?: any): IBaseExecution<granularMailboxRestoreArtifact>;
}
/*********************************************
* group
**********************************************/
export interface group extends groupProps, groupMethods { }
export interface groupProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	parentSiteId: string;
	scope: EnumTypes.termGroupScope;
}
export interface groupMethods extends entityMethods {
	sets(): IBaseCollection<set, entity & setOData & setProps>;
	sets(id: string | number): IBaseQuery<set> & setMethods;
	assignLicense(addLicenses, removeLicenses): IBaseExecution<group>;
	retryServiceProvisioning(): IBaseExecution<void>;
	checkGrantedPermissionsForApp(): IBaseExecution<resourceSpecificPermissionGrant[]>;
	validateProperties(displayName, mailNickname, onBehalfOfUserId): IBaseExecution<void>;
	addFavorite(): IBaseExecution<void>;
	removeFavorite(): IBaseExecution<void>;
	resetUnseenCount(): IBaseExecution<void>;
	subscribeByMail(): IBaseExecution<void>;
	unsubscribeByMail(): IBaseExecution<void>;
	renew(): IBaseExecution<void>;
}
export interface groupOData extends entityOData {
	sets: IBaseResults<set>;
	assignLicense(addLicenses, removeLicenses): IBaseExecution<group>;
	retryServiceProvisioning(): IBaseExecution<void>;
	checkGrantedPermissionsForApp(): IBaseExecution<resourceSpecificPermissionGrant[]>;
	validateProperties(displayName, mailNickname, onBehalfOfUserId): IBaseExecution<void>;
	addFavorite(): IBaseExecution<void>;
	removeFavorite(): IBaseExecution<void>;
	resetUnseenCount(): IBaseExecution<void>;
	subscribeByMail(): IBaseExecution<void>;
	unsubscribeByMail(): IBaseExecution<void>;
	renew(): IBaseExecution<void>;
}
export interface groupCollection extends IBaseCollection<group, groupOData & groupProps> {
    add(values?: any): IBaseExecution<group>;
}
/*********************************************
* groupLifecyclePolicy
**********************************************/
export interface groupLifecyclePolicy extends groupLifecyclePolicyProps, groupLifecyclePolicyMethods { }
export interface groupLifecyclePolicyProps extends  entityProps {
	alternateNotificationEmails: string;
	groupLifetimeInDays: number;
	managedGroupTypes: string;
}
export interface groupLifecyclePolicyMethods extends entityMethods {
	addGroup(groupId): IBaseExecution<boolean>;
	removeGroup(groupId): IBaseExecution<boolean>;
}
export interface groupLifecyclePolicyOData extends entityOData {
	addGroup(groupId): IBaseExecution<boolean>;
	removeGroup(groupId): IBaseExecution<boolean>;
}
export interface groupLifecyclePolicyCollection extends IBaseCollection<groupLifecyclePolicy, groupLifecyclePolicyOData & groupLifecyclePolicyProps> {
    add(values?: any): IBaseExecution<groupLifecyclePolicy>;
}
/*********************************************
* groupSetting
**********************************************/
export interface groupSetting extends groupSettingProps, groupSettingMethods { }
export interface groupSettingProps extends  entityProps {
	displayName: string;
	templateId: string;
	values: ComplexTypes.settingValue[];
}
export interface groupSettingMethods extends entityMethods {

}
export interface groupSettingOData extends entityOData {

}
export interface groupSettingCollection extends IBaseCollection<groupSetting, groupSettingOData & groupSettingProps> {
    add(values?: any): IBaseExecution<groupSetting>;
}
/*********************************************
* groupSettingTemplate
**********************************************/
export interface groupSettingTemplate extends groupSettingTemplateProps, groupSettingTemplateMethods { }
export interface groupSettingTemplateProps extends  directoryObjectProps {
	description: string;
	displayName: string;
	values: ComplexTypes.settingTemplateValue[];
}
export interface groupSettingTemplateMethods extends directoryObjectMethods {

}
export interface groupSettingTemplateOData extends directoryObjectOData {

}
/*********************************************
* healthIssue
**********************************************/
export interface healthIssue extends healthIssueProps, healthIssueMethods { }
export interface healthIssueProps extends  entityProps {
	additionalInformation: Array<string>[];
	createdDateTime: any;
	description: string;
	displayName: string;
	domainNames: Array<string>[];
	healthIssueType: EnumTypes.healthIssueType;
	issueTypeId: string;
	lastModifiedDateTime: any;
	recommendations: Array<string>[];
	recommendedActionCommands: Array<string>[];
	sensorDNSNames: Array<string>[];
	severity: EnumTypes.healthIssueSeverity;
	status: EnumTypes.healthIssueStatus;
}
export interface healthIssueMethods extends entityMethods {

}
export interface healthIssueOData extends entityOData {

}
/*********************************************
* homeRealmDiscoveryPolicy
**********************************************/
export interface homeRealmDiscoveryPolicy extends homeRealmDiscoveryPolicyProps, homeRealmDiscoveryPolicyMethods { }
export interface homeRealmDiscoveryPolicyProps extends  stsPolicyProps {

}
export interface homeRealmDiscoveryPolicyMethods extends stsPolicyMethods {

}
export interface homeRealmDiscoveryPolicyOData extends stsPolicyOData {

}
export interface homeRealmDiscoveryPolicyCollection extends IBaseCollection<homeRealmDiscoveryPolicy, homeRealmDiscoveryPolicyOData & homeRealmDiscoveryPolicyProps> {
    add(values?: any): IBaseExecution<homeRealmDiscoveryPolicy>;
}
/*********************************************
* horizontalSection
**********************************************/
export interface horizontalSection extends horizontalSectionProps, horizontalSectionMethods { }
export interface horizontalSectionProps extends  entityProps {
	emphasis: EnumTypes.sectionEmphasisType;
	layout: EnumTypes.horizontalSectionLayoutType;
}
export interface horizontalSectionMethods extends entityMethods {
	columns(): horizontalSectionColumnCollection;
	columns(id: string | number): IBaseQuery<horizontalSectionColumn> & horizontalSectionColumnMethods;
}
export interface horizontalSectionOData extends entityOData {
	columns: IBaseResults<horizontalSectionColumn>;
}
export interface horizontalSectionCollection extends IBaseCollection<horizontalSection, horizontalSectionOData & horizontalSectionProps> {
    add(values?: any): IBaseExecution<horizontalSection>;
}
/*********************************************
* horizontalSectionColumn
**********************************************/
export interface horizontalSectionColumn extends horizontalSectionColumnProps, horizontalSectionColumnMethods { }
export interface horizontalSectionColumnProps extends  entityProps {
	width: number;
}
export interface horizontalSectionColumnMethods extends entityMethods {
	webparts(): webPartCollection;
	webparts(id: string | number): IBaseQuery<webPart> & webPartMethods;
}
export interface horizontalSectionColumnOData extends entityOData {
	webparts: IBaseResults<webPart>;
}
export interface horizontalSectionColumnCollection extends IBaseCollection<horizontalSectionColumn, horizontalSectionColumnOData & horizontalSectionColumnProps> {
    add(values?: any): IBaseExecution<horizontalSectionColumn>;
}
/*********************************************
* host
**********************************************/
export interface host extends hostProps, hostMethods { }
export interface hostProps extends  artifactProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
}
export interface hostMethods extends artifactMethods {
	childHostPairs(): IBaseCollection<hostPair, artifact & hostPairOData & hostPairProps>;
	childHostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	components(): IBaseCollection<hostComponent, artifact & hostComponentOData & hostComponentProps>;
	components(id: string | number): IBaseQuery<hostComponent> & hostComponentMethods;
	cookies(): IBaseCollection<hostCookie, artifact & hostCookieOData & hostCookieProps>;
	cookies(id: string | number): IBaseQuery<hostCookie> & hostCookieMethods;
	hostPairs(): IBaseCollection<hostPair, artifact & hostPairOData & hostPairProps>;
	hostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	parentHostPairs(): IBaseCollection<hostPair, artifact & hostPairOData & hostPairProps>;
	parentHostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	passiveDns(): IBaseCollection<passiveDnsRecord, artifact & passiveDnsRecordOData & passiveDnsRecordProps>;
	passiveDns(id: string | number): IBaseQuery<passiveDnsRecord> & passiveDnsRecordMethods;
	passiveDnsReverse(): IBaseCollection<passiveDnsRecord, artifact & passiveDnsRecordOData & passiveDnsRecordProps>;
	passiveDnsReverse(id: string | number): IBaseQuery<passiveDnsRecord> & passiveDnsRecordMethods;
	ports(): IBaseCollection<hostPort, artifact & hostPortOData & hostPortProps>;
	ports(id: string | number): IBaseQuery<hostPort> & hostPortMethods;
	reputation(): IBaseQuery<hostReputation> & hostReputationMethods;
	sslCertificates(): IBaseCollection<hostSslCertificate, artifact & hostSslCertificateOData & hostSslCertificateProps>;
	sslCertificates(id: string | number): IBaseQuery<hostSslCertificate> & hostSslCertificateMethods;
	subdomains(): IBaseCollection<subdomain, artifact & subdomainOData & subdomainProps>;
	subdomains(id: string | number): IBaseQuery<subdomain> & subdomainMethods;
	trackers(): IBaseCollection<hostTracker, artifact & hostTrackerOData & hostTrackerProps>;
	trackers(id: string | number): IBaseQuery<hostTracker> & hostTrackerMethods;
	whois(): IBaseQuery<whoisRecord> & whoisRecordMethods;
}
export interface hostOData extends artifactOData {
	childHostPairs: IBaseResults<hostPair>;
	components: IBaseResults<hostComponent>;
	cookies: IBaseResults<hostCookie>;
	hostPairs: IBaseResults<hostPair>;
	parentHostPairs: IBaseResults<hostPair>;
	passiveDns: IBaseResults<passiveDnsRecord>;
	passiveDnsReverse: IBaseResults<passiveDnsRecord>;
	ports: IBaseResults<hostPort>;
	reputation: hostReputation;
	sslCertificates: IBaseResults<hostSslCertificate>;
	subdomains: IBaseResults<subdomain>;
	trackers: IBaseResults<hostTracker>;
	whois: whoisRecord;
}
/*********************************************
* hostComponent
**********************************************/
export interface hostComponent extends hostComponentProps, hostComponentMethods { }
export interface hostComponentProps extends  artifactProps {
	category: string;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	name: string;
	version: string;
}
export interface hostComponentMethods extends artifactMethods {
	host(): IBaseQuery<host> & hostMethods;
}
export interface hostComponentOData extends artifactOData {
	host: host;
}
/*********************************************
* hostCookie
**********************************************/
export interface hostCookie extends hostCookieProps, hostCookieMethods { }
export interface hostCookieProps extends  artifactProps {
	domain: string;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	name: string;
}
export interface hostCookieMethods extends artifactMethods {
	host(): IBaseQuery<host> & hostMethods;
}
export interface hostCookieOData extends artifactOData {
	host: host;
}
/*********************************************
* hostPair
**********************************************/
export interface hostPair extends hostPairProps, hostPairMethods { }
export interface hostPairProps extends  entityProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	linkKind: string;
}
export interface hostPairMethods extends entityMethods {
	childHost(): IBaseQuery<host> & hostMethods;
	parentHost(): IBaseQuery<host> & hostMethods;
}
export interface hostPairOData extends entityOData {
	childHost: host;
	parentHost: host;
}
/*********************************************
* hostPort
**********************************************/
export interface hostPort extends hostPortProps, hostPortMethods { }
export interface hostPortProps extends  entityProps {
	banners: ComplexTypes.hostPortBanner[];
	firstSeenDateTime: any;
	lastScanDateTime: any;
	lastSeenDateTime: any;
	port: number;
	protocol: EnumTypes.hostPortProtocol;
	services: ComplexTypes.hostPortComponent[];
	status: EnumTypes.hostPortStatus;
	timesObserved: number;
}
export interface hostPortMethods extends entityMethods {
	host(): IBaseQuery<host> & hostMethods;
	mostRecentSslCertificate(): IBaseQuery<sslCertificate> & sslCertificateMethods;
}
export interface hostPortOData extends entityOData {
	host: host;
	mostRecentSslCertificate: sslCertificate;
}
/*********************************************
* hostReputation
**********************************************/
export interface hostReputation extends hostReputationProps, hostReputationMethods { }
export interface hostReputationProps extends  entityProps {
	classification: EnumTypes.hostReputationClassification;
	rules: ComplexTypes.hostReputationRule[];
	score: number;
}
export interface hostReputationMethods extends entityMethods {

}
export interface hostReputationOData extends entityOData {

}
/*********************************************
* hostSslCertificate
**********************************************/
export interface hostSslCertificate extends hostSslCertificateProps, hostSslCertificateMethods { }
export interface hostSslCertificateProps extends  artifactProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	ports: ComplexTypes.hostSslCertificatePort[];
}
export interface hostSslCertificateMethods extends artifactMethods {
	host(): IBaseQuery<host> & hostMethods;
	sslCertificate(): IBaseQuery<sslCertificate> & sslCertificateMethods;
}
export interface hostSslCertificateOData extends artifactOData {
	host: host;
	sslCertificate: sslCertificate;
}
/*********************************************
* hostTracker
**********************************************/
export interface hostTracker extends hostTrackerProps, hostTrackerMethods { }
export interface hostTrackerProps extends  artifactProps {
	firstSeenDateTime: any;
	kind: string;
	lastSeenDateTime: any;
	value: string;
}
export interface hostTrackerMethods extends artifactMethods {
	host(): IBaseQuery<host> & hostMethods;
}
export interface hostTrackerOData extends artifactOData {
	host: host;
}
/*********************************************
* hostname
**********************************************/
export interface hostname extends hostnameProps, hostnameMethods { }
export interface hostnameProps extends  hostProps {
	registrant: string;
	registrar: string;
}
export interface hostnameMethods extends hostMethods {

}
export interface hostnameOData extends hostOData {

}
/*********************************************
* identity
**********************************************/
export interface identity extends identityProps, identityMethods { }
export interface identityProps extends  entityProps {
	type: EnumTypes.identityType;
}
export interface identityMethods extends entityMethods {

}
export interface identityOData extends entityOData {

}
/*********************************************
* identityApiConnector
**********************************************/
export interface identityApiConnector extends identityApiConnectorProps, identityApiConnectorMethods { }
export interface identityApiConnectorProps extends  entityProps {
	authenticationConfiguration: ComplexTypes.apiAuthenticationConfigurationBase;
	displayName: string;
	targetUrl: string;
}
export interface identityApiConnectorMethods extends entityMethods {
	uploadClientCertificate(pkcs12Value, password): IBaseExecution<identityApiConnector>;
}
export interface identityApiConnectorOData extends entityOData {
	uploadClientCertificate(pkcs12Value, password): IBaseExecution<identityApiConnector>;
}
export interface identityApiConnectorCollection extends IBaseCollection<identityApiConnector, identityApiConnectorOData & identityApiConnectorProps> {
    add(values?: any): IBaseExecution<identityApiConnector>;
}
/*********************************************
* identityBuiltInUserFlowAttribute
**********************************************/
export interface identityBuiltInUserFlowAttribute extends identityBuiltInUserFlowAttributeProps, identityBuiltInUserFlowAttributeMethods { }
export interface identityBuiltInUserFlowAttributeProps extends  identityUserFlowAttributeProps {

}
export interface identityBuiltInUserFlowAttributeMethods extends identityUserFlowAttributeMethods {

}
export interface identityBuiltInUserFlowAttributeOData extends identityUserFlowAttributeOData {

}
/*********************************************
* identityContainer
**********************************************/
export interface identityContainer extends identityContainerProps, identityContainerMethods { }
export interface identityContainerProps extends  entityProps {

}
export interface identityContainerMethods extends entityMethods {
	healthIssues(): IBaseCollection<healthIssue, entity & healthIssueOData & healthIssueProps>;
	healthIssues(id: string | number): IBaseQuery<healthIssue> & healthIssueMethods;
	sensors(): IBaseCollection<sensor, entity & sensorOData & sensorProps>;
	sensors(id: string | number): IBaseQuery<sensor> & sensorMethods;
}
export interface identityContainerOData extends entityOData {
	healthIssues: IBaseResults<healthIssue>;
	sensors: IBaseResults<sensor>;
}
/*********************************************
* identityCustomUserFlowAttribute
**********************************************/
export interface identityCustomUserFlowAttribute extends identityCustomUserFlowAttributeProps, identityCustomUserFlowAttributeMethods { }
export interface identityCustomUserFlowAttributeProps extends  identityUserFlowAttributeProps {

}
export interface identityCustomUserFlowAttributeMethods extends identityUserFlowAttributeMethods {

}
export interface identityCustomUserFlowAttributeOData extends identityUserFlowAttributeOData {

}
/*********************************************
* identityGovernance
**********************************************/
export interface identityGovernance extends identityGovernanceProps, identityGovernanceMethods { }
export interface identityGovernanceProps   {

}
export interface identityGovernanceMethods {
	lifecycleWorkflows(): IBaseQuery<lifecycleWorkflowsContainer> & lifecycleWorkflowsContainerMethods;
	accessReviews(): IBaseQuery<accessReviewSet> & accessReviewSetMethods;
	appConsent(): IBaseQuery<appConsentApprovalRoute> & appConsentApprovalRouteMethods;
	termsOfUse(): IBaseQuery<termsOfUseContainer> & termsOfUseContainerMethods;
	entitlementManagement(): IBaseQuery<entitlementManagement> & entitlementManagementMethods;
	privilegedAccess(): IBaseQuery<privilegedAccessRoot> & privilegedAccessRootMethods;
}
export interface identityGovernanceOData {
	lifecycleWorkflows: lifecycleWorkflowsContainer;
	accessReviews: accessReviewSet;
	appConsent: appConsentApprovalRoute;
	termsOfUse: termsOfUseContainer;
	entitlementManagement: entitlementManagement;
	privilegedAccess: privilegedAccessRoot;
}
/*********************************************
* identityProtectionRoot
**********************************************/
export interface identityProtectionRoot extends identityProtectionRootProps, identityProtectionRootMethods { }
export interface identityProtectionRootProps   {

}
export interface identityProtectionRootMethods {
	riskDetections(): riskDetectionCollection;
	riskDetections(id: string | number): IBaseQuery<riskDetection> & riskDetectionMethods;
	riskyServicePrincipals(): riskyServicePrincipalCollection;
	riskyServicePrincipals(id: string | number): IBaseQuery<riskyServicePrincipal> & riskyServicePrincipalMethods;
	riskyUsers(): riskyUserCollection;
	riskyUsers(id: string | number): IBaseQuery<riskyUser> & riskyUserMethods;
	servicePrincipalRiskDetections(): servicePrincipalRiskDetectionCollection;
	servicePrincipalRiskDetections(id: string | number): IBaseQuery<servicePrincipalRiskDetection> & servicePrincipalRiskDetectionMethods;
}
export interface identityProtectionRootOData {
	riskDetections: IBaseResults<riskDetection>;
	riskyServicePrincipals: IBaseResults<riskyServicePrincipal>;
	riskyUsers: IBaseResults<riskyUser>;
	servicePrincipalRiskDetections: IBaseResults<servicePrincipalRiskDetection>;
}
/*********************************************
* identityProvider
**********************************************/
export interface identityProvider extends identityProviderProps, identityProviderMethods { }
export interface identityProviderProps extends  entityProps {
	clientId: string;
	clientSecret: string;
	name: string;
	type: string;
}
export interface identityProviderMethods extends entityMethods {

}
export interface identityProviderOData extends entityOData {

}
export interface identityProviderCollection extends IBaseCollection<identityProvider, identityProviderOData & identityProviderProps> {
    add(values?: any): IBaseExecution<identityProvider>;
}
/*********************************************
* identityProviderBase
**********************************************/
export interface identityProviderBase extends identityProviderBaseProps, identityProviderBaseMethods { }
export interface identityProviderBaseProps extends  entityProps {
	displayName: string;
}
export interface identityProviderBaseMethods extends entityMethods {

}
export interface identityProviderBaseOData extends entityOData {

}
export interface identityProviderBaseCollection extends IBaseCollection<identityProviderBase, identityProviderBaseOData & identityProviderBaseProps> {
    add(values?: any): IBaseExecution<identityProviderBase>;
}
/*********************************************
* identitySecurityDefaultsEnforcementPolicy
**********************************************/
export interface identitySecurityDefaultsEnforcementPolicy extends identitySecurityDefaultsEnforcementPolicyProps, identitySecurityDefaultsEnforcementPolicyMethods { }
export interface identitySecurityDefaultsEnforcementPolicyProps extends  policyBaseProps {
	isEnabled: boolean;
}
export interface identitySecurityDefaultsEnforcementPolicyMethods extends policyBaseMethods {

}
export interface identitySecurityDefaultsEnforcementPolicyOData extends policyBaseOData {

}
/*********************************************
* identityUserFlow
**********************************************/
export interface identityUserFlow extends identityUserFlowProps, identityUserFlowMethods { }
export interface identityUserFlowProps extends  entityProps {
	userFlowType: EnumTypes.userFlowType;
	userFlowTypeVersion: any;
}
export interface identityUserFlowMethods extends entityMethods {

}
export interface identityUserFlowOData extends entityOData {

}
/*********************************************
* identityUserFlowAttribute
**********************************************/
export interface identityUserFlowAttribute extends identityUserFlowAttributeProps, identityUserFlowAttributeMethods { }
export interface identityUserFlowAttributeProps extends  entityProps {
	dataType: EnumTypes.identityUserFlowAttributeDataType;
	description: string;
	displayName: string;
	userFlowAttributeType: EnumTypes.identityUserFlowAttributeType;
}
export interface identityUserFlowAttributeMethods extends entityMethods {

}
export interface identityUserFlowAttributeOData extends entityOData {

}
export interface identityUserFlowAttributeCollection extends IBaseCollection<identityUserFlowAttribute, identityUserFlowAttributeOData & identityUserFlowAttributeProps> {
    add(values?: any): IBaseExecution<identityUserFlowAttribute>;
}
/*********************************************
* identityUserFlowAttributeAssignment
**********************************************/
export interface identityUserFlowAttributeAssignment extends identityUserFlowAttributeAssignmentProps, identityUserFlowAttributeAssignmentMethods { }
export interface identityUserFlowAttributeAssignmentProps extends  entityProps {
	displayName: string;
	isOptional: boolean;
	requiresVerification: boolean;
	userAttributeValues: ComplexTypes.userAttributeValuesItem[];
	userInputType: EnumTypes.identityUserFlowAttributeInputType;
}
export interface identityUserFlowAttributeAssignmentMethods extends entityMethods {
	userAttribute(): IBaseQuery<identityUserFlowAttribute> & identityUserFlowAttributeMethods;
}
export interface identityUserFlowAttributeAssignmentOData extends entityOData {
	userAttribute: identityUserFlowAttribute;
}
export interface identityUserFlowAttributeAssignmentCollection extends IBaseCollection<identityUserFlowAttributeAssignment, identityUserFlowAttributeAssignmentOData & identityUserFlowAttributeAssignmentProps> {
    add(values?: any): IBaseExecution<identityUserFlowAttributeAssignment>;
}
/*********************************************
* importedWindowsAutopilotDeviceIdentity
**********************************************/
export interface importedWindowsAutopilotDeviceIdentity extends importedWindowsAutopilotDeviceIdentityProps, importedWindowsAutopilotDeviceIdentityMethods { }
export interface importedWindowsAutopilotDeviceIdentityProps extends  entityProps {
	assignedUserPrincipalName: string;
	groupTag: string;
	hardwareIdentifier: any;
	importId: string;
	productKey: string;
	serialNumber: string;
	state: ComplexTypes.importedWindowsAutopilotDeviceIdentityState;
}
export interface importedWindowsAutopilotDeviceIdentityMethods extends entityMethods {

}
export interface importedWindowsAutopilotDeviceIdentityOData extends entityOData {

}
export interface importedWindowsAutopilotDeviceIdentityCollection extends IBaseCollection<importedWindowsAutopilotDeviceIdentity, importedWindowsAutopilotDeviceIdentityOData & importedWindowsAutopilotDeviceIdentityProps> {
    add(values?: any): IBaseExecution<importedWindowsAutopilotDeviceIdentity>;
}
/*********************************************
* importedWindowsAutopilotDeviceIdentityUpload
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityUpload extends importedWindowsAutopilotDeviceIdentityUploadProps, importedWindowsAutopilotDeviceIdentityUploadMethods { }
export interface importedWindowsAutopilotDeviceIdentityUploadProps extends  entityProps {
	createdDateTimeUtc: any;
	status: EnumTypes.importedWindowsAutopilotDeviceIdentityUploadStatus;
}
export interface importedWindowsAutopilotDeviceIdentityUploadMethods extends entityMethods {
	deviceIdentities(): importedWindowsAutopilotDeviceIdentityCollection;
	deviceIdentities(id: string | number): IBaseQuery<importedWindowsAutopilotDeviceIdentity> & importedWindowsAutopilotDeviceIdentityMethods;
}
export interface importedWindowsAutopilotDeviceIdentityUploadOData extends entityOData {
	deviceIdentities: IBaseResults<importedWindowsAutopilotDeviceIdentity>;
}
/*********************************************
* incident
**********************************************/
export interface incident extends incidentProps, incidentMethods { }
export interface incidentProps extends  entityProps {
	assignedTo: string;
	classification: EnumTypes.alertClassification;
	comments: ComplexTypes.alertComment[];
	createdDateTime: any;
	customTags: Array<string>[];
	description: string;
	determination: EnumTypes.alertDetermination;
	displayName: string;
	incidentWebUrl: string;
	lastModifiedBy: string;
	lastUpdateDateTime: any;
	redirectIncidentId: string;
	resolvingComment: string;
	severity: EnumTypes.alertSeverity;
	status: EnumTypes.incidentStatus;
	summary: string;
	systemTags: Array<string>[];
	tenantId: string;
}
export interface incidentMethods extends entityMethods {
	alerts(): alertCollection;
	alerts(id: string | number): IBaseQuery<alert> & alertMethods;
}
export interface incidentOData extends entityOData {
	alerts: IBaseResults<alert>;
}
/*********************************************
* indicator
**********************************************/
export interface indicator extends indicatorProps, indicatorMethods { }
export interface indicatorProps extends  entityProps {
	source: EnumTypes.indicatorSource;
}
export interface indicatorMethods extends entityMethods {
	artifact(): IBaseQuery<artifact> & artifactMethods;
}
export interface indicatorOData extends entityOData {
	artifact: artifact;
}
/*********************************************
* inferenceClassification
**********************************************/
export interface inferenceClassification extends inferenceClassificationProps, inferenceClassificationMethods { }
export interface inferenceClassificationProps extends  entityProps {

}
export interface inferenceClassificationMethods extends entityMethods {
	overrides(): inferenceClassificationOverrideCollection;
	overrides(id: string | number): IBaseQuery<inferenceClassificationOverride> & inferenceClassificationOverrideMethods;
}
export interface inferenceClassificationOData extends entityOData {
	overrides: IBaseResults<inferenceClassificationOverride>;
}
/*********************************************
* inferenceClassificationOverride
**********************************************/
export interface inferenceClassificationOverride extends inferenceClassificationOverrideProps, inferenceClassificationOverrideMethods { }
export interface inferenceClassificationOverrideProps extends  entityProps {
	classifyAs: EnumTypes.inferenceClassificationType;
	senderEmailAddress: ComplexTypes.emailAddress;
}
export interface inferenceClassificationOverrideMethods extends entityMethods {

}
export interface inferenceClassificationOverrideOData extends entityOData {

}
export interface inferenceClassificationOverrideCollection extends IBaseCollection<inferenceClassificationOverride, inferenceClassificationOverrideOData & inferenceClassificationOverrideProps> {
    add(values?: any): IBaseExecution<inferenceClassificationOverride>;
}
/*********************************************
* informationProtection
**********************************************/
export interface informationProtection extends informationProtectionProps, informationProtectionMethods { }
export interface informationProtectionProps   {

}
export interface informationProtectionMethods {
	bitlocker(): IBaseQuery<bitlocker> & bitlockerMethods;
	threatAssessmentRequests(): threatAssessmentRequestCollection;
	threatAssessmentRequests(id: string | number): IBaseQuery<threatAssessmentRequest> & threatAssessmentRequestMethods;
}
export interface informationProtectionOData {
	bitlocker: bitlocker;
	threatAssessmentRequests: IBaseResults<threatAssessmentRequest>;
}
/*********************************************
* insights
**********************************************/
export interface insights extends insightsProps, insightsMethods { }
export interface insightsProps extends  entityProps {

}
export interface insightsMethods extends entityMethods {

}
export interface insightsOData extends entityOData {

}
/*********************************************
* insightsSettings
**********************************************/
export interface insightsSettings extends insightsSettingsProps, insightsSettingsMethods { }
export interface insightsSettingsProps extends  entityProps {
	disabledForGroup: string;
	isEnabledInOrganization: boolean;
}
export interface insightsSettingsMethods extends entityMethods {

}
export interface insightsSettingsOData extends entityOData {

}
/*********************************************
* intelligenceProfile
**********************************************/
export interface intelligenceProfile extends intelligenceProfileProps, intelligenceProfileMethods { }
export interface intelligenceProfileProps extends  entityProps {
	aliases: Array<string>[];
	countriesOrRegionsOfOrigin: ComplexTypes.intelligenceProfileCountryOrRegionOfOrigin[];
	description: ComplexTypes.formattedContent;
	firstActiveDateTime: any;
	kind: EnumTypes.intelligenceProfileKind;
	summary: ComplexTypes.formattedContent;
	targets: Array<string>[];
	title: string;
	tradecraft: ComplexTypes.formattedContent;
}
export interface intelligenceProfileMethods extends entityMethods {
	indicators(): IBaseCollection<intelligenceProfileIndicator, entity & intelligenceProfileIndicatorOData & intelligenceProfileIndicatorProps>;
	indicators(id: string | number): IBaseQuery<intelligenceProfileIndicator> & intelligenceProfileIndicatorMethods;
}
export interface intelligenceProfileOData extends entityOData {
	indicators: IBaseResults<intelligenceProfileIndicator>;
}
/*********************************************
* intelligenceProfileIndicator
**********************************************/
export interface intelligenceProfileIndicator extends intelligenceProfileIndicatorProps, intelligenceProfileIndicatorMethods { }
export interface intelligenceProfileIndicatorProps extends  indicatorProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
}
export interface intelligenceProfileIndicatorMethods extends indicatorMethods {

}
export interface intelligenceProfileIndicatorOData extends indicatorOData {

}
/*********************************************
* internalDomainFederation
**********************************************/
export interface internalDomainFederation extends internalDomainFederationProps, internalDomainFederationMethods { }
export interface internalDomainFederationProps extends  samlOrWsFedProviderProps {
	activeSignInUri: string;
	federatedIdpMfaBehavior: EnumTypes.federatedIdpMfaBehavior;
	isSignedAuthenticationRequestRequired: boolean;
	nextSigningCertificate: string;
	promptLoginBehavior: EnumTypes.promptLoginBehavior;
	signingCertificateUpdateStatus: ComplexTypes.signingCertificateUpdateStatus;
	signOutUri: string;
}
export interface internalDomainFederationMethods extends samlOrWsFedProviderMethods {

}
export interface internalDomainFederationOData extends samlOrWsFedProviderOData {

}
export interface internalDomainFederationCollection extends IBaseCollection<internalDomainFederation, internalDomainFederationOData & internalDomainFederationProps> {
    add(values?: any): IBaseExecution<internalDomainFederation>;
}
/*********************************************
* internetExplorerMode
**********************************************/
export interface internetExplorerMode extends internetExplorerModeProps, internetExplorerModeMethods { }
export interface internetExplorerModeProps extends  entityProps {

}
export interface internetExplorerModeMethods extends entityMethods {
	siteLists(): browserSiteListCollection;
	siteLists(id: string | number): IBaseQuery<browserSiteList> & browserSiteListMethods;
}
export interface internetExplorerModeOData extends entityOData {
	siteLists: IBaseResults<browserSiteList>;
}
/*********************************************
* invitation
**********************************************/
export interface invitation extends invitationProps, invitationMethods { }
export interface invitationProps extends  entityProps {
	invitedUserDisplayName: string;
	invitedUserEmailAddress: string;
	invitedUserMessageInfo: ComplexTypes.invitedUserMessageInfo;
	invitedUserType: string;
	inviteRedeemUrl: string;
	inviteRedirectUrl: string;
	resetRedemption: boolean;
	sendInvitationMessage: boolean;
	status: string;
}
export interface invitationMethods extends entityMethods {
	invitedUser(): IBaseQuery<user> & userMethods;
	invitedUserSponsors(): directoryObjectCollection;
	invitedUserSponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface invitationOData extends entityOData {
	invitedUser: user;
	invitedUserSponsors: IBaseResults<directoryObject>;
}
/*********************************************
* inviteParticipantsOperation
**********************************************/
export interface inviteParticipantsOperation extends inviteParticipantsOperationProps, inviteParticipantsOperationMethods { }
export interface inviteParticipantsOperationProps extends  commsOperationProps {
	participants: ComplexTypes.invitationParticipantInfo[];
}
export interface inviteParticipantsOperationMethods extends commsOperationMethods {

}
export interface inviteParticipantsOperationOData extends commsOperationOData {

}
/*********************************************
* iosCertificateProfile
**********************************************/
export interface iosCertificateProfile extends iosCertificateProfileProps, iosCertificateProfileMethods { }
export interface iosCertificateProfileProps extends  deviceConfigurationProps {

}
export interface iosCertificateProfileMethods extends deviceConfigurationMethods {

}
export interface iosCertificateProfileOData extends deviceConfigurationOData {

}
/*********************************************
* iosCompliancePolicy
**********************************************/
export interface iosCompliancePolicy extends iosCompliancePolicyProps, iosCompliancePolicyMethods { }
export interface iosCompliancePolicyProps extends  deviceCompliancePolicyProps {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	managedEmailProfileRequired: boolean;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passcodeBlockSimple: boolean;
	passcodeExpirationDays: number;
	passcodeMinimumCharacterSetCount: number;
	passcodeMinimumLength: number;
	passcodeMinutesOfInactivityBeforeLock: number;
	passcodePreviousPasscodeBlockCount: number;
	passcodeRequired: boolean;
	passcodeRequiredType: EnumTypes.requiredPasswordType;
	securityBlockJailbrokenDevices: boolean;
}
export interface iosCompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface iosCompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* iosCustomConfiguration
**********************************************/
export interface iosCustomConfiguration extends iosCustomConfigurationProps, iosCustomConfigurationMethods { }
export interface iosCustomConfigurationProps extends  deviceConfigurationProps {
	payload: any;
	payloadFileName: string;
	payloadName: string;
}
export interface iosCustomConfigurationMethods extends deviceConfigurationMethods {

}
export interface iosCustomConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* iosDeviceFeaturesConfiguration
**********************************************/
export interface iosDeviceFeaturesConfiguration extends iosDeviceFeaturesConfigurationProps, iosDeviceFeaturesConfigurationMethods { }
export interface iosDeviceFeaturesConfigurationProps extends  appleDeviceFeaturesConfigurationBaseProps {
	assetTagTemplate: string;
	homeScreenDockIcons: ComplexTypes.iosHomeScreenItem[];
	homeScreenPages: ComplexTypes.iosHomeScreenPage[];
	lockScreenFootnote: string;
	notificationSettings: ComplexTypes.iosNotificationSettings[];
}
export interface iosDeviceFeaturesConfigurationMethods extends appleDeviceFeaturesConfigurationBaseMethods {

}
export interface iosDeviceFeaturesConfigurationOData extends appleDeviceFeaturesConfigurationBaseOData {

}
/*********************************************
* iosGeneralDeviceConfiguration
**********************************************/
export interface iosGeneralDeviceConfiguration extends iosGeneralDeviceConfigurationProps, iosGeneralDeviceConfigurationMethods { }
export interface iosGeneralDeviceConfigurationProps extends  deviceConfigurationProps {
	accountBlockModification: boolean;
	activationLockAllowWhenSupervised: boolean;
	airDropBlocked: boolean;
	airDropForceUnmanagedDropTarget: boolean;
	airPlayForcePairingPasswordForOutgoingRequests: boolean;
	appleNewsBlocked: boolean;
	appleWatchBlockPairing: boolean;
	appleWatchForceWristDetection: boolean;
	appsSingleAppModeList: ComplexTypes.appListItem[];
	appStoreBlockAutomaticDownloads: boolean;
	appStoreBlocked: boolean;
	appStoreBlockInAppPurchases: boolean;
	appStoreBlockUIAppInstallation: boolean;
	appStoreRequirePassword: boolean;
	appsVisibilityList: ComplexTypes.appListItem[];
	appsVisibilityListType: EnumTypes.appListType;
	bluetoothBlockModification: boolean;
	cameraBlocked: boolean;
	cellularBlockDataRoaming: boolean;
	cellularBlockGlobalBackgroundFetchWhileRoaming: boolean;
	cellularBlockPerAppDataModification: boolean;
	cellularBlockPersonalHotspot: boolean;
	cellularBlockVoiceRoaming: boolean;
	certificatesBlockUntrustedTlsCertificates: boolean;
	classroomAppBlockRemoteScreenObservation: boolean;
	classroomAppForceUnpromptedScreenObservation: boolean;
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	configurationProfileBlockChanges: boolean;
	definitionLookupBlocked: boolean;
	deviceBlockEnableRestrictions: boolean;
	deviceBlockEraseContentAndSettings: boolean;
	deviceBlockNameModification: boolean;
	diagnosticDataBlockSubmission: boolean;
	diagnosticDataBlockSubmissionModification: boolean;
	documentsBlockManagedDocumentsInUnmanagedApps: boolean;
	documentsBlockUnmanagedDocumentsInManagedApps: boolean;
	emailInDomainSuffixes: Array<string>[];
	enterpriseAppBlockTrust: boolean;
	enterpriseAppBlockTrustModification: boolean;
	faceTimeBlocked: boolean;
	findMyFriendsBlocked: boolean;
	gameCenterBlocked: boolean;
	gamingBlockGameCenterFriends: boolean;
	gamingBlockMultiplayer: boolean;
	hostPairingBlocked: boolean;
	iBooksStoreBlocked: boolean;
	iBooksStoreBlockErotica: boolean;
	iCloudBlockActivityContinuation: boolean;
	iCloudBlockBackup: boolean;
	iCloudBlockDocumentSync: boolean;
	iCloudBlockManagedAppsSync: boolean;
	iCloudBlockPhotoLibrary: boolean;
	iCloudBlockPhotoStreamSync: boolean;
	iCloudBlockSharedPhotoStream: boolean;
	iCloudRequireEncryptedBackup: boolean;
	iTunesBlockExplicitContent: boolean;
	iTunesBlockMusicService: boolean;
	iTunesBlockRadio: boolean;
	keyboardBlockAutoCorrect: boolean;
	keyboardBlockDictation: boolean;
	keyboardBlockPredictive: boolean;
	keyboardBlockShortcuts: boolean;
	keyboardBlockSpellCheck: boolean;
	kioskModeAllowAssistiveSpeak: boolean;
	kioskModeAllowAssistiveTouchSettings: boolean;
	kioskModeAllowAutoLock: boolean;
	kioskModeAllowColorInversionSettings: boolean;
	kioskModeAllowRingerSwitch: boolean;
	kioskModeAllowScreenRotation: boolean;
	kioskModeAllowSleepButton: boolean;
	kioskModeAllowTouchscreen: boolean;
	kioskModeAllowVoiceOverSettings: boolean;
	kioskModeAllowVolumeButtons: boolean;
	kioskModeAllowZoomSettings: boolean;
	kioskModeAppStoreUrl: string;
	kioskModeBuiltInAppId: string;
	kioskModeManagedAppId: string;
	kioskModeRequireAssistiveTouch: boolean;
	kioskModeRequireColorInversion: boolean;
	kioskModeRequireMonoAudio: boolean;
	kioskModeRequireVoiceOver: boolean;
	kioskModeRequireZoom: boolean;
	lockScreenBlockControlCenter: boolean;
	lockScreenBlockNotificationView: boolean;
	lockScreenBlockPassbook: boolean;
	lockScreenBlockTodayView: boolean;
	mediaContentRatingApps: EnumTypes.ratingAppsType;
	mediaContentRatingAustralia: ComplexTypes.mediaContentRatingAustralia;
	mediaContentRatingCanada: ComplexTypes.mediaContentRatingCanada;
	mediaContentRatingFrance: ComplexTypes.mediaContentRatingFrance;
	mediaContentRatingGermany: ComplexTypes.mediaContentRatingGermany;
	mediaContentRatingIreland: ComplexTypes.mediaContentRatingIreland;
	mediaContentRatingJapan: ComplexTypes.mediaContentRatingJapan;
	mediaContentRatingNewZealand: ComplexTypes.mediaContentRatingNewZealand;
	mediaContentRatingUnitedKingdom: ComplexTypes.mediaContentRatingUnitedKingdom;
	mediaContentRatingUnitedStates: ComplexTypes.mediaContentRatingUnitedStates;
	messagesBlocked: boolean;
	networkUsageRules: ComplexTypes.iosNetworkUsageRule[];
	notificationsBlockSettingsModification: boolean;
	passcodeBlockFingerprintModification: boolean;
	passcodeBlockFingerprintUnlock: boolean;
	passcodeBlockModification: boolean;
	passcodeBlockSimple: boolean;
	passcodeExpirationDays: number;
	passcodeMinimumCharacterSetCount: number;
	passcodeMinimumLength: number;
	passcodeMinutesOfInactivityBeforeLock: number;
	passcodeMinutesOfInactivityBeforeScreenTimeout: number;
	passcodePreviousPasscodeBlockCount: number;
	passcodeRequired: boolean;
	passcodeRequiredType: EnumTypes.requiredPasswordType;
	passcodeSignInFailureCountBeforeWipe: number;
	podcastsBlocked: boolean;
	safariBlockAutofill: boolean;
	safariBlocked: boolean;
	safariBlockJavaScript: boolean;
	safariBlockPopups: boolean;
	safariCookieSettings: EnumTypes.webBrowserCookieSettings;
	safariManagedDomains: Array<string>[];
	safariPasswordAutoFillDomains: Array<string>[];
	safariRequireFraudWarning: boolean;
	screenCaptureBlocked: boolean;
	siriBlocked: boolean;
	siriBlockedWhenLocked: boolean;
	siriBlockUserGeneratedContent: boolean;
	siriRequireProfanityFilter: boolean;
	spotlightBlockInternetResults: boolean;
	voiceDialingBlocked: boolean;
	wallpaperBlockModification: boolean;
	wiFiConnectOnlyToConfiguredNetworks: boolean;
}
export interface iosGeneralDeviceConfigurationMethods extends deviceConfigurationMethods {

}
export interface iosGeneralDeviceConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* iosLobApp
**********************************************/
export interface iosLobApp extends iosLobAppProps, iosLobAppMethods { }
export interface iosLobAppProps extends  mobileLobAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	buildNumber: string;
	bundleId: string;
	expirationDateTime: any;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
	versionNumber: string;
}
export interface iosLobAppMethods extends mobileLobAppMethods {

}
export interface iosLobAppOData extends mobileLobAppOData {

}
/*********************************************
* iosLobAppProvisioningConfigurationAssignment
**********************************************/
export interface iosLobAppProvisioningConfigurationAssignment extends iosLobAppProvisioningConfigurationAssignmentProps, iosLobAppProvisioningConfigurationAssignmentMethods { }
export interface iosLobAppProvisioningConfigurationAssignmentProps extends  entityProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface iosLobAppProvisioningConfigurationAssignmentMethods extends entityMethods {

}
export interface iosLobAppProvisioningConfigurationAssignmentOData extends entityOData {

}
/*********************************************
* iosManagedAppProtection
**********************************************/
export interface iosManagedAppProtection extends iosManagedAppProtectionProps, iosManagedAppProtectionMethods { }
export interface iosManagedAppProtectionProps extends  targetedManagedAppProtectionProps {
	appDataEncryptionType: EnumTypes.managedAppDataEncryptionType;
	customBrowserProtocol: string;
	deployedAppCount: number;
	faceIdBlocked: boolean;
	minimumRequiredSdkVersion: string;
}
export interface iosManagedAppProtectionMethods extends targetedManagedAppProtectionMethods {
	apps(): managedMobileAppCollection;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
}
export interface iosManagedAppProtectionOData extends targetedManagedAppProtectionOData {
	apps: IBaseResults<managedMobileApp>;
	deploymentSummary: managedAppPolicyDeploymentSummary;
}
export interface iosManagedAppProtectionCollection extends IBaseCollection<iosManagedAppProtection, iosManagedAppProtectionOData & iosManagedAppProtectionProps> {
    add(values?: any): IBaseExecution<iosManagedAppProtection>;
}
/*********************************************
* iosManagedAppRegistration
**********************************************/
export interface iosManagedAppRegistration extends iosManagedAppRegistrationProps, iosManagedAppRegistrationMethods { }
export interface iosManagedAppRegistrationProps extends  managedAppRegistrationProps {

}
export interface iosManagedAppRegistrationMethods extends managedAppRegistrationMethods {

}
export interface iosManagedAppRegistrationOData extends managedAppRegistrationOData {

}
/*********************************************
* iosMobileAppConfiguration
**********************************************/
export interface iosMobileAppConfiguration extends iosMobileAppConfigurationProps, iosMobileAppConfigurationMethods { }
export interface iosMobileAppConfigurationProps extends  managedDeviceMobileAppConfigurationProps {
	encodedSettingXml: any;
	settings: ComplexTypes.appConfigurationSettingItem[];
}
export interface iosMobileAppConfigurationMethods extends managedDeviceMobileAppConfigurationMethods {

}
export interface iosMobileAppConfigurationOData extends managedDeviceMobileAppConfigurationOData {

}
/*********************************************
* iosStoreApp
**********************************************/
export interface iosStoreApp extends iosStoreAppProps, iosStoreAppMethods { }
export interface iosStoreAppProps extends  mobileAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
}
export interface iosStoreAppMethods extends mobileAppMethods {

}
export interface iosStoreAppOData extends mobileAppOData {

}
/*********************************************
* iosUpdateConfiguration
**********************************************/
export interface iosUpdateConfiguration extends iosUpdateConfigurationProps, iosUpdateConfigurationMethods { }
export interface iosUpdateConfigurationProps extends  deviceConfigurationProps {
	activeHoursEnd: any;
	activeHoursStart: any;
	scheduledInstallDays: EnumTypes.dayOfWeek[];
	utcTimeOffsetInMinutes: number;
}
export interface iosUpdateConfigurationMethods extends deviceConfigurationMethods {

}
export interface iosUpdateConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* iosUpdateDeviceStatus
**********************************************/
export interface iosUpdateDeviceStatus extends iosUpdateDeviceStatusProps, iosUpdateDeviceStatusMethods { }
export interface iosUpdateDeviceStatusProps extends  entityProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceId: string;
	deviceModel: string;
	installStatus: EnumTypes.iosUpdatesInstallStatus;
	lastReportedDateTime: any;
	osVersion: string;
	status: EnumTypes.complianceStatus;
	userId: string;
	userName: string;
	userPrincipalName: string;
}
export interface iosUpdateDeviceStatusMethods extends entityMethods {

}
export interface iosUpdateDeviceStatusOData extends entityOData {

}
export interface iosUpdateDeviceStatusCollection extends IBaseCollection<iosUpdateDeviceStatus, iosUpdateDeviceStatusOData & iosUpdateDeviceStatusProps> {
    add(values?: any): IBaseExecution<iosUpdateDeviceStatus>;
}
/*********************************************
* iosVppApp
**********************************************/
export interface iosVppApp extends iosVppAppProps, iosVppAppMethods { }
export interface iosVppAppProps extends  mobileAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	licensingType: ComplexTypes.vppLicensingType;
	releaseDateTime: any;
	totalLicenseCount: number;
	usedLicenseCount: number;
	vppTokenAccountType: EnumTypes.vppTokenAccountType;
	vppTokenAppleId: string;
	vppTokenOrganizationName: string;
}
export interface iosVppAppMethods extends mobileAppMethods {

}
export interface iosVppAppOData extends mobileAppOData {

}
/*********************************************
* iosVppEBook
**********************************************/
export interface iosVppEBook extends iosVppEBookProps, iosVppEBookMethods { }
export interface iosVppEBookProps extends  managedEBookProps {
	appleId: string;
	genres: Array<string>[];
	language: string;
	seller: string;
	totalLicenseCount: number;
	usedLicenseCount: number;
	vppOrganizationName: string;
	vppTokenId: any;
}
export interface iosVppEBookMethods extends managedEBookMethods {

}
export interface iosVppEBookOData extends managedEBookOData {

}
/*********************************************
* iosVppEBookAssignment
**********************************************/
export interface iosVppEBookAssignment extends iosVppEBookAssignmentProps, iosVppEBookAssignmentMethods { }
export interface iosVppEBookAssignmentProps extends  managedEBookAssignmentProps {

}
export interface iosVppEBookAssignmentMethods extends managedEBookAssignmentMethods {

}
export interface iosVppEBookAssignmentOData extends managedEBookAssignmentOData {

}
/*********************************************
* iosiPadOSWebClip
**********************************************/
export interface iosiPadOSWebClip extends iosiPadOSWebClipProps, iosiPadOSWebClipMethods { }
export interface iosiPadOSWebClipProps extends  mobileAppProps {
	appUrl: string;
	useManagedBrowser: boolean;
}
export interface iosiPadOSWebClipMethods extends mobileAppMethods {

}
export interface iosiPadOSWebClipOData extends mobileAppOData {

}
/*********************************************
* ipAddress
**********************************************/
export interface ipAddress extends ipAddressProps, ipAddressMethods { }
export interface ipAddressProps extends  hostProps {
	autonomousSystem: ComplexTypes.autonomousSystem;
	countryOrRegion: string;
	hostingProvider: string;
	netblock: string;
}
export interface ipAddressMethods extends hostMethods {

}
export interface ipAddressOData extends hostOData {

}
/*********************************************
* ipNamedLocation
**********************************************/
export interface ipNamedLocation extends ipNamedLocationProps, ipNamedLocationMethods { }
export interface ipNamedLocationProps extends  namedLocationProps {
	ipRanges: ComplexTypes.ipRange[];
	isTrusted: boolean;
}
export interface ipNamedLocationMethods extends namedLocationMethods {

}
export interface ipNamedLocationOData extends namedLocationOData {

}
/*********************************************
* itemActivity
**********************************************/
export interface itemActivity extends itemActivityProps, itemActivityMethods { }
export interface itemActivityProps extends  entityProps {
	access: ComplexTypes.accessAction;
	activityDateTime: any;
	actor: ComplexTypes.identitySet;
}
export interface itemActivityMethods extends entityMethods {
	driveItem(): IBaseQuery<driveItem> & driveItemMethods;
}
export interface itemActivityOData extends entityOData {
	driveItem: driveItem;
}
export interface itemActivityCollection extends IBaseCollection<itemActivity, itemActivityOData & itemActivityProps> {
    add(values?: any): IBaseExecution<itemActivity>;
}
/*********************************************
* itemActivityStat
**********************************************/
export interface itemActivityStat extends itemActivityStatProps, itemActivityStatMethods { }
export interface itemActivityStatProps extends  entityProps {
	access: ComplexTypes.itemActionStat;
	create: ComplexTypes.itemActionStat;
	delete: ComplexTypes.itemActionStat;
	edit: ComplexTypes.itemActionStat;
	endDateTime: any;
	incompleteData: ComplexTypes.incompleteData;
	isTrending: boolean;
	move: ComplexTypes.itemActionStat;
	startDateTime: any;
}
export interface itemActivityStatMethods extends entityMethods {
	activities(): itemActivityCollection;
	activities(id: string | number): IBaseQuery<itemActivity> & itemActivityMethods;
}
export interface itemActivityStatOData extends entityOData {
	activities: IBaseResults<itemActivity>;
}
export interface itemActivityStatCollection extends IBaseCollection<itemActivityStat, itemActivityStatOData & itemActivityStatProps> {
    add(values?: any): IBaseExecution<itemActivityStat>;
}
/*********************************************
* itemAnalytics
**********************************************/
export interface itemAnalytics extends itemAnalyticsProps, itemAnalyticsMethods { }
export interface itemAnalyticsProps extends  entityProps {

}
export interface itemAnalyticsMethods extends entityMethods {
	allTime(): IBaseQuery<itemActivityStat> & itemActivityStatMethods;
	itemActivityStats(): itemActivityStatCollection;
	itemActivityStats(id: string | number): IBaseQuery<itemActivityStat> & itemActivityStatMethods;
	lastSevenDays(): IBaseQuery<itemActivityStat> & itemActivityStatMethods;
}
export interface itemAnalyticsOData extends entityOData {
	allTime: itemActivityStat;
	itemActivityStats: IBaseResults<itemActivityStat>;
	lastSevenDays: itemActivityStat;
}
/*********************************************
* itemAttachment
**********************************************/
export interface itemAttachment extends itemAttachmentProps, itemAttachmentMethods { }
export interface itemAttachmentProps extends  attachmentProps {

}
export interface itemAttachmentMethods extends attachmentMethods {
	item(): IBaseQuery<outlookItem> & outlookItemMethods;
}
export interface itemAttachmentOData extends attachmentOData {
	item: outlookItem;
}
/*********************************************
* itemInsights
**********************************************/
export interface itemInsights extends itemInsightsProps, itemInsightsMethods { }
export interface itemInsightsProps extends  officeGraphInsightsProps {

}
export interface itemInsightsMethods extends officeGraphInsightsMethods {

}
export interface itemInsightsOData extends officeGraphInsightsOData {

}
/*********************************************
* itemRetentionLabel
**********************************************/
export interface itemRetentionLabel extends itemRetentionLabelProps, itemRetentionLabelMethods { }
export interface itemRetentionLabelProps extends  entityProps {
	isLabelAppliedExplicitly: boolean;
	labelAppliedBy: ComplexTypes.identitySet;
	labelAppliedDateTime: any;
	name: string;
	retentionSettings: ComplexTypes.retentionLabelSettings;
}
export interface itemRetentionLabelMethods extends entityMethods {

}
export interface itemRetentionLabelOData extends entityOData {

}
/*********************************************
* labelsRoot
**********************************************/
export interface labelsRoot extends labelsRootProps, labelsRootMethods { }
export interface labelsRootProps extends  entityProps {

}
export interface labelsRootMethods extends entityMethods {
	authorities(): IBaseCollection<authorityTemplate, entity & authorityTemplateOData & authorityTemplateProps>;
	authorities(id: string | number): IBaseQuery<authorityTemplate> & authorityTemplateMethods;
	categories(): IBaseCollection<categoryTemplate, entity & categoryTemplateOData & categoryTemplateProps>;
	categories(id: string | number): IBaseQuery<categoryTemplate> & categoryTemplateMethods;
	citations(): IBaseCollection<citationTemplate, entity & citationTemplateOData & citationTemplateProps>;
	citations(id: string | number): IBaseQuery<citationTemplate> & citationTemplateMethods;
	departments(): IBaseCollection<departmentTemplate, entity & departmentTemplateOData & departmentTemplateProps>;
	departments(id: string | number): IBaseQuery<departmentTemplate> & departmentTemplateMethods;
	filePlanReferences(): IBaseCollection<filePlanReferenceTemplate, entity & filePlanReferenceTemplateOData & filePlanReferenceTemplateProps>;
	filePlanReferences(id: string | number): IBaseQuery<filePlanReferenceTemplate> & filePlanReferenceTemplateMethods;
	retentionLabels(): IBaseCollection<retentionLabel, entity & retentionLabelOData & retentionLabelProps>;
	retentionLabels(id: string | number): IBaseQuery<retentionLabel> & retentionLabelMethods;
}
export interface labelsRootOData extends entityOData {
	authorities: IBaseResults<authorityTemplate>;
	categories: IBaseResults<categoryTemplate>;
	citations: IBaseResults<citationTemplate>;
	departments: IBaseResults<departmentTemplate>;
	filePlanReferences: IBaseResults<filePlanReferenceTemplate>;
	retentionLabels: IBaseResults<retentionLabel>;
}
/*********************************************
* landingPage
**********************************************/
export interface landingPage extends landingPageProps, landingPageMethods { }
export interface landingPageProps extends  entityProps {
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	locale: string;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
	supportedLocales: Array<string>[];
}
export interface landingPageMethods extends entityMethods {
	details(): landingPageDetailCollection;
	details(id: string | number): IBaseQuery<landingPageDetail> & landingPageDetailMethods;
}
export interface landingPageOData extends entityOData {
	details: IBaseResults<landingPageDetail>;
}
export interface landingPageCollection extends IBaseCollection<landingPage, landingPageOData & landingPageProps> {
    add(values?: any): IBaseExecution<landingPage>;
}
/*********************************************
* landingPageDetail
**********************************************/
export interface landingPageDetail extends landingPageDetailProps, landingPageDetailMethods { }
export interface landingPageDetailProps extends  entityProps {
	content: string;
	isDefaultLangauge: boolean;
	language: string;
}
export interface landingPageDetailMethods extends entityMethods {

}
export interface landingPageDetailOData extends entityOData {

}
export interface landingPageDetailCollection extends IBaseCollection<landingPageDetail, landingPageDetailOData & landingPageDetailProps> {
    add(values?: any): IBaseExecution<landingPageDetail>;
}
/*********************************************
* learningAssignment
**********************************************/
export interface learningAssignment extends learningAssignmentProps, learningAssignmentMethods { }
export interface learningAssignmentProps extends  learningCourseActivityProps {
	assignedDateTime: any;
	assignerUserId: string;
	assignmentType: EnumTypes.assignmentType;
	dueDateTime: ComplexTypes.dateTimeTimeZone;
	notes: ComplexTypes.itemBody;
}
export interface learningAssignmentMethods extends learningCourseActivityMethods {

}
export interface learningAssignmentOData extends learningCourseActivityOData {

}
/*********************************************
* learningContent
**********************************************/
export interface learningContent extends learningContentProps, learningContentMethods { }
export interface learningContentProps extends  entityProps {
	additionalTags: Array<string>[];
	contentWebUrl: string;
	contributors: Array<string>[];
	createdDateTime: any;
	description: string;
	duration: number;
	externalId: string;
	format: string;
	isActive: boolean;
	isPremium: boolean;
	isSearchable: boolean;
	languageTag: string;
	lastModifiedDateTime: any;
	level: EnumTypes.level;
	numberOfPages: number;
	skillTags: Array<string>[];
	sourceName: string;
	thumbnailWebUrl: string;
	title: string;
}
export interface learningContentMethods extends entityMethods {

}
export interface learningContentOData extends entityOData {

}
export interface learningContentCollection extends IBaseCollection<learningContent, learningContentOData & learningContentProps> {
    add(values?: any): IBaseExecution<learningContent>;
}
/*********************************************
* learningCourseActivity
**********************************************/
export interface learningCourseActivity extends learningCourseActivityProps, learningCourseActivityMethods { }
export interface learningCourseActivityProps extends  entityProps {
	completedDateTime: any;
	completionPercentage: number;
	externalcourseActivityId: string;
	learnerUserId: string;
	learningContentId: string;
	learningProviderId: string;
	status: EnumTypes.courseStatus;
}
export interface learningCourseActivityMethods extends entityMethods {

}
export interface learningCourseActivityOData extends entityOData {

}
export interface learningCourseActivityCollection extends IBaseCollection<learningCourseActivity, learningCourseActivityOData & learningCourseActivityProps> {
    add(values?: any): IBaseExecution<learningCourseActivity>;
}
/*********************************************
* learningProvider
**********************************************/
export interface learningProvider extends learningProviderProps, learningProviderMethods { }
export interface learningProviderProps extends  entityProps {
	displayName: string;
	isCourseActivitySyncEnabled: boolean;
	loginWebUrl: string;
	longLogoWebUrlForDarkTheme: string;
	longLogoWebUrlForLightTheme: string;
	squareLogoWebUrlForDarkTheme: string;
	squareLogoWebUrlForLightTheme: string;
}
export interface learningProviderMethods extends entityMethods {
	learningContents(): learningContentCollection;
	learningContents(id: string | number): IBaseQuery<learningContent> & learningContentMethods;
	learningCourseActivities(): learningCourseActivityCollection;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity> & learningCourseActivityMethods;
}
export interface learningProviderOData extends entityOData {
	learningContents: IBaseResults<learningContent>;
	learningCourseActivities: IBaseResults<learningCourseActivity>;
}
export interface learningProviderCollection extends IBaseCollection<learningProvider, learningProviderOData & learningProviderProps> {
    add(values?: any): IBaseExecution<learningProvider>;
}
/*********************************************
* learningSelfInitiatedCourse
**********************************************/
export interface learningSelfInitiatedCourse extends learningSelfInitiatedCourseProps, learningSelfInitiatedCourseMethods { }
export interface learningSelfInitiatedCourseProps extends  learningCourseActivityProps {
	startedDateTime: any;
}
export interface learningSelfInitiatedCourseMethods extends learningCourseActivityMethods {

}
export interface learningSelfInitiatedCourseOData extends learningCourseActivityOData {

}
/*********************************************
* licenseDetails
**********************************************/
export interface licenseDetails extends licenseDetailsProps, licenseDetailsMethods { }
export interface licenseDetailsProps extends  entityProps {
	servicePlans: ComplexTypes.servicePlanInfo[];
	skuId: any;
	skuPartNumber: string;
}
export interface licenseDetailsMethods extends entityMethods {

}
export interface licenseDetailsOData extends entityOData {

}
export interface licenseDetailsCollection extends IBaseCollection<licenseDetails, licenseDetailsOData & licenseDetailsProps> {
    add(values?: any): IBaseExecution<licenseDetails>;
}
/*********************************************
* lifecycleManagementSettings
**********************************************/
export interface lifecycleManagementSettings extends lifecycleManagementSettingsProps, lifecycleManagementSettingsMethods { }
export interface lifecycleManagementSettingsProps extends  entityProps {
	emailSettings: ComplexTypes.emailSettings;
	workflowScheduleIntervalInHours: number;
}
export interface lifecycleManagementSettingsMethods extends entityMethods {

}
export interface lifecycleManagementSettingsOData extends entityOData {

}
/*********************************************
* lifecycleWorkflowsContainer
**********************************************/
export interface lifecycleWorkflowsContainer extends lifecycleWorkflowsContainerProps, lifecycleWorkflowsContainerMethods { }
export interface lifecycleWorkflowsContainerProps extends  entityProps {

}
export interface lifecycleWorkflowsContainerMethods extends entityMethods {
	customTaskExtensions(): IBaseCollection<customTaskExtension, entity & customTaskExtensionOData & customTaskExtensionProps>;
	customTaskExtensions(id: string | number): IBaseQuery<customTaskExtension> & customTaskExtensionMethods;
	deletedItems(): IBaseQuery<deletedItemContainer> & deletedItemContainerMethods;
	insights(): IBaseQuery<insights> & insightsMethods;
	settings(): IBaseQuery<lifecycleManagementSettings> & lifecycleManagementSettingsMethods;
	taskDefinitions(): IBaseCollection<taskDefinition, entity & taskDefinitionOData & taskDefinitionProps>;
	taskDefinitions(id: string | number): IBaseQuery<taskDefinition> & taskDefinitionMethods;
	workflows(): IBaseCollection<workflow, entity & workflowOData & workflowProps>;
	workflows(id: string | number): IBaseQuery<workflow> & workflowMethods;
	workflowTemplates(): IBaseCollection<workflowTemplate, entity & workflowTemplateOData & workflowTemplateProps>;
	workflowTemplates(id: string | number): IBaseQuery<workflowTemplate> & workflowTemplateMethods;
}
export interface lifecycleWorkflowsContainerOData extends entityOData {
	customTaskExtensions: IBaseResults<customTaskExtension>;
	deletedItems: deletedItemContainer;
	insights: insights;
	settings: lifecycleManagementSettings;
	taskDefinitions: IBaseResults<taskDefinition>;
	workflows: IBaseResults<workflow>;
	workflowTemplates: IBaseResults<workflowTemplate>;
}
/*********************************************
* linkedResource
**********************************************/
export interface linkedResource extends linkedResourceProps, linkedResourceMethods { }
export interface linkedResourceProps extends  entityProps {
	applicationName: string;
	displayName: string;
	externalId: string;
	webUrl: string;
}
export interface linkedResourceMethods extends entityMethods {

}
export interface linkedResourceOData extends entityOData {

}
export interface linkedResourceCollection extends IBaseCollection<linkedResource, linkedResourceOData & linkedResourceProps> {
    add(values?: any): IBaseExecution<linkedResource>;
}
/*********************************************
* list
**********************************************/
export interface list extends listProps, listMethods { }
export interface listProps extends  baseItemProps {
	displayName: string;
	list: ComplexTypes.listInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
}
export interface listMethods extends baseItemMethods {
	columns(): columnDefinitionCollection;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): contentTypeCollection;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive> & driveMethods;
	items(): listItemCollection;
	items(id: string | number): IBaseQuery<listItem> & listItemMethods;
	operations(): richLongRunningOperationCollection;
	operations(id: string | number): IBaseQuery<richLongRunningOperation> & richLongRunningOperationMethods;
	subscriptions(): subscriptionCollection;
	subscriptions(id: string | number): IBaseQuery<subscription> & subscriptionMethods;
	update(values: any): IBaseExecution<void>;
}
export interface listOData extends baseItemOData {
	columns: IBaseResults<columnDefinition>;
	contentTypes: IBaseResults<contentType>;
	drive: drive;
	items: IBaseResults<listItem>;
	operations: IBaseResults<richLongRunningOperation>;
	subscriptions: IBaseResults<subscription>;
	update(values: any): IBaseExecution<void>;
}
export interface listCollection extends IBaseCollection<list, listOData & listProps> {
    add(values?: any): IBaseExecution<list>;
}
/*********************************************
* listItem
**********************************************/
export interface listItem extends listItemProps, listItemMethods { }
export interface listItemProps extends  baseItemProps {
	contentType: ComplexTypes.contentTypeInfo;
	sharepointIds: ComplexTypes.sharepointIds;
}
export interface listItemMethods extends baseItemMethods {
	analytics(): IBaseQuery<itemAnalytics> & itemAnalyticsMethods;
	documentSetVersions(): documentSetVersionCollection;
	documentSetVersions(id: string | number): IBaseQuery<documentSetVersion> & documentSetVersionMethods;
	driveItem(): IBaseQuery<driveItem> & driveItemMethods;
	fields(): IBaseQuery<fieldValueSet> & fieldValueSetMethods;
	versions(): listItemVersionCollection;
	versions(id: string | number): IBaseQuery<listItemVersion> & listItemVersionMethods;
	update(values: any): IBaseExecution<void>;
	createLink(type, scope, expirationDateTime, password, message, recipients, retainInheritedPermissions, sendNotification): IBaseExecution<permission>;
	getActivitiesByInterval(): itemActivityStat[];
	getActivitiesByInterval(startDateTime, endDateTime, interval): itemActivityStat[];
}
export interface listItemOData extends baseItemOData {
	analytics: itemAnalytics;
	documentSetVersions: IBaseResults<documentSetVersion>;
	driveItem: driveItem;
	fields: fieldValueSet;
	versions: IBaseResults<listItemVersion>;
	update(values: any): IBaseExecution<void>;
	createLink(type, scope, expirationDateTime, password, message, recipients, retainInheritedPermissions, sendNotification): IBaseExecution<permission>;
	getActivitiesByInterval(): itemActivityStat[];
	getActivitiesByInterval(startDateTime, endDateTime, interval): itemActivityStat[];
}
export interface listItemCollection extends IBaseCollection<listItem, listItemOData & listItemProps> {
    add(values?: any): IBaseExecution<listItem>;
}
/*********************************************
* listItemVersion
**********************************************/
export interface listItemVersion extends listItemVersionProps, listItemVersionMethods { }
export interface listItemVersionProps extends  baseItemVersionProps {

}
export interface listItemVersionMethods extends baseItemVersionMethods {
	fields(): IBaseQuery<fieldValueSet> & fieldValueSetMethods;
	restoreVersion(): IBaseExecution<void>;
}
export interface listItemVersionOData extends baseItemVersionOData {
	fields: fieldValueSet;
	restoreVersion(): IBaseExecution<void>;
}
export interface listItemVersionCollection extends IBaseCollection<listItemVersion, listItemVersionOData & listItemVersionProps> {
    add(values?: any): IBaseExecution<listItemVersion>;
}
/*********************************************
* localizedNotificationMessage
**********************************************/
export interface localizedNotificationMessage extends localizedNotificationMessageProps, localizedNotificationMessageMethods { }
export interface localizedNotificationMessageProps extends  entityProps {
	isDefault: boolean;
	lastModifiedDateTime: any;
	locale: string;
	messageTemplate: string;
	subject: string;
}
export interface localizedNotificationMessageMethods extends entityMethods {

}
export interface localizedNotificationMessageOData extends entityOData {

}
export interface localizedNotificationMessageCollection extends IBaseCollection<localizedNotificationMessage, localizedNotificationMessageOData & localizedNotificationMessageProps> {
    add(values?: any): IBaseExecution<localizedNotificationMessage>;
}
/*********************************************
* loginPage
**********************************************/
export interface loginPage extends loginPageProps, loginPageMethods { }
export interface loginPageProps extends  entityProps {
	content: string;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	language: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
}
export interface loginPageMethods extends entityMethods {

}
export interface loginPageOData extends entityOData {

}
export interface loginPageCollection extends IBaseCollection<loginPage, loginPageOData & loginPageProps> {
    add(values?: any): IBaseExecution<loginPage>;
}
/*********************************************
* longRunningOperation
**********************************************/
export interface longRunningOperation extends longRunningOperationProps, longRunningOperationMethods { }
export interface longRunningOperationProps extends  entityProps {
	createdDateTime: any;
	lastActionDateTime: any;
	resourceLocation: string;
	status: EnumTypes.longRunningOperationStatus;
	statusDetail: string;
}
export interface longRunningOperationMethods extends entityMethods {

}
export interface longRunningOperationOData extends entityOData {

}
export interface longRunningOperationCollection extends IBaseCollection<longRunningOperation, longRunningOperationOData & longRunningOperationProps> {
    add(values?: any): IBaseExecution<longRunningOperation>;
}
/*********************************************
* m365AppsInstallationOptions
**********************************************/
export interface m365AppsInstallationOptions extends m365AppsInstallationOptionsProps, m365AppsInstallationOptionsMethods { }
export interface m365AppsInstallationOptionsProps extends  entityProps {
	appsForMac: ComplexTypes.appsInstallationOptionsForMac;
	appsForWindows: ComplexTypes.appsInstallationOptionsForWindows;
	updateChannel: EnumTypes.appsUpdateChannelType;
}
export interface m365AppsInstallationOptionsMethods extends entityMethods {

}
export interface m365AppsInstallationOptionsOData extends entityOData {

}
/*********************************************
* macOSCompliancePolicy
**********************************************/
export interface macOSCompliancePolicy extends macOSCompliancePolicyProps, macOSCompliancePolicyMethods { }
export interface macOSCompliancePolicyProps extends  deviceCompliancePolicyProps {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	firewallBlockAllIncoming: boolean;
	firewallEnabled: boolean;
	firewallEnableStealthMode: boolean;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	storageRequireEncryption: boolean;
	systemIntegrityProtectionEnabled: boolean;
}
export interface macOSCompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface macOSCompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* macOSCustomConfiguration
**********************************************/
export interface macOSCustomConfiguration extends macOSCustomConfigurationProps, macOSCustomConfigurationMethods { }
export interface macOSCustomConfigurationProps extends  deviceConfigurationProps {
	payload: any;
	payloadFileName: string;
	payloadName: string;
}
export interface macOSCustomConfigurationMethods extends deviceConfigurationMethods {

}
export interface macOSCustomConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* macOSDeviceFeaturesConfiguration
**********************************************/
export interface macOSDeviceFeaturesConfiguration extends macOSDeviceFeaturesConfigurationProps, macOSDeviceFeaturesConfigurationMethods { }
export interface macOSDeviceFeaturesConfigurationProps extends  appleDeviceFeaturesConfigurationBaseProps {

}
export interface macOSDeviceFeaturesConfigurationMethods extends appleDeviceFeaturesConfigurationBaseMethods {

}
export interface macOSDeviceFeaturesConfigurationOData extends appleDeviceFeaturesConfigurationBaseOData {

}
/*********************************************
* macOSDmgApp
**********************************************/
export interface macOSDmgApp extends macOSDmgAppProps, macOSDmgAppMethods { }
export interface macOSDmgAppProps extends  mobileLobAppProps {
	ignoreVersionDetection: boolean;
	includedApps: ComplexTypes.macOSIncludedApp[];
	minimumSupportedOperatingSystem: ComplexTypes.macOSMinimumOperatingSystem;
	primaryBundleId: string;
	primaryBundleVersion: string;
}
export interface macOSDmgAppMethods extends mobileLobAppMethods {

}
export interface macOSDmgAppOData extends mobileLobAppOData {

}
/*********************************************
* macOSGeneralDeviceConfiguration
**********************************************/
export interface macOSGeneralDeviceConfiguration extends macOSGeneralDeviceConfigurationProps, macOSGeneralDeviceConfigurationMethods { }
export interface macOSGeneralDeviceConfigurationProps extends  deviceConfigurationProps {
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	emailInDomainSuffixes: Array<string>[];
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
}
export interface macOSGeneralDeviceConfigurationMethods extends deviceConfigurationMethods {

}
export interface macOSGeneralDeviceConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* macOSLobApp
**********************************************/
export interface macOSLobApp extends macOSLobAppProps, macOSLobAppMethods { }
export interface macOSLobAppProps extends  mobileLobAppProps {
	buildNumber: string;
	bundleId: string;
	childApps: ComplexTypes.macOSLobChildApp[];
	ignoreVersionDetection: boolean;
	installAsManaged: boolean;
	md5Hash: Array<string>[];
	md5HashChunkSize: number;
	minimumSupportedOperatingSystem: ComplexTypes.macOSMinimumOperatingSystem;
	versionNumber: string;
}
export interface macOSLobAppMethods extends mobileLobAppMethods {

}
export interface macOSLobAppOData extends mobileLobAppOData {

}
/*********************************************
* macOSMicrosoftDefenderApp
**********************************************/
export interface macOSMicrosoftDefenderApp extends macOSMicrosoftDefenderAppProps, macOSMicrosoftDefenderAppMethods { }
export interface macOSMicrosoftDefenderAppProps extends  mobileAppProps {

}
export interface macOSMicrosoftDefenderAppMethods extends mobileAppMethods {

}
export interface macOSMicrosoftDefenderAppOData extends mobileAppOData {

}
/*********************************************
* macOSMicrosoftEdgeApp
**********************************************/
export interface macOSMicrosoftEdgeApp extends macOSMicrosoftEdgeAppProps, macOSMicrosoftEdgeAppMethods { }
export interface macOSMicrosoftEdgeAppProps extends  mobileAppProps {
	channel: EnumTypes.microsoftEdgeChannel;
}
export interface macOSMicrosoftEdgeAppMethods extends mobileAppMethods {

}
export interface macOSMicrosoftEdgeAppOData extends mobileAppOData {

}
/*********************************************
* macOSOfficeSuiteApp
**********************************************/
export interface macOSOfficeSuiteApp extends macOSOfficeSuiteAppProps, macOSOfficeSuiteAppMethods { }
export interface macOSOfficeSuiteAppProps extends  mobileAppProps {

}
export interface macOSOfficeSuiteAppMethods extends mobileAppMethods {

}
export interface macOSOfficeSuiteAppOData extends mobileAppOData {

}
/*********************************************
* mailAssessmentRequest
**********************************************/
export interface mailAssessmentRequest extends mailAssessmentRequestProps, mailAssessmentRequestMethods { }
export interface mailAssessmentRequestProps extends  threatAssessmentRequestProps {
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	messageUri: string;
	recipientEmail: string;
}
export interface mailAssessmentRequestMethods extends threatAssessmentRequestMethods {

}
export interface mailAssessmentRequestOData extends threatAssessmentRequestOData {

}
/*********************************************
* mailFolder
**********************************************/
export interface mailFolder extends mailFolderProps, mailFolderMethods { }
export interface mailFolderProps extends  entityProps {
	childFolderCount: number;
	displayName: string;
	isHidden: boolean;
	parentFolderId: string;
	totalItemCount: number;
	unreadItemCount: number;
}
export interface mailFolderMethods extends entityMethods {
	childFolders(): mailFolderCollection;
	childFolders(id: string | number): IBaseQuery<mailFolder> & mailFolderMethods;
	messageRules(): messageRuleCollection;
	messageRules(id: string | number): IBaseQuery<messageRule> & messageRuleMethods;
	messages(): messageCollection;
	messages(id: string | number): IBaseQuery<message> & messageMethods;
	multiValueExtendedProperties(): multiValueLegacyExtendedPropertyCollection;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): singleValueLegacyExtendedPropertyCollection;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
	copy(DestinationId): IBaseExecution<mailFolder>;
	move(DestinationId): IBaseExecution<mailFolder>;
}
export interface mailFolderOData extends entityOData {
	childFolders: IBaseResults<mailFolder>;
	messageRules: IBaseResults<messageRule>;
	messages: IBaseResults<message>;
	multiValueExtendedProperties: IBaseResults<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties: IBaseResults<singleValueLegacyExtendedProperty>;
	copy(DestinationId): IBaseExecution<mailFolder>;
	move(DestinationId): IBaseExecution<mailFolder>;
}
export interface mailFolderCollection extends IBaseCollection<mailFolder, mailFolderOData & mailFolderProps> {
    add(values?: any): IBaseExecution<mailFolder>;
}
/*********************************************
* mailSearchFolder
**********************************************/
export interface mailSearchFolder extends mailSearchFolderProps, mailSearchFolderMethods { }
export interface mailSearchFolderProps extends  mailFolderProps {
	filterQuery: string;
	includeNestedFolders: boolean;
	isSupported: boolean;
	sourceFolderIds: Array<string>[];
}
export interface mailSearchFolderMethods extends mailFolderMethods {

}
export interface mailSearchFolderOData extends mailFolderOData {

}
/*********************************************
* mailboxProtectionRule
**********************************************/
export interface mailboxProtectionRule extends mailboxProtectionRuleProps, mailboxProtectionRuleMethods { }
export interface mailboxProtectionRuleProps extends  protectionRuleBaseProps {
	mailboxExpression: string;
}
export interface mailboxProtectionRuleMethods extends protectionRuleBaseMethods {

}
export interface mailboxProtectionRuleOData extends protectionRuleBaseOData {

}
export interface mailboxProtectionRuleCollection extends IBaseCollection<mailboxProtectionRule, mailboxProtectionRuleOData & mailboxProtectionRuleProps> {
    add(values?: any): IBaseExecution<mailboxProtectionRule>;
}
/*********************************************
* mailboxProtectionUnit
**********************************************/
export interface mailboxProtectionUnit extends mailboxProtectionUnitProps, mailboxProtectionUnitMethods { }
export interface mailboxProtectionUnitProps extends  protectionUnitBaseProps {
	directoryObjectId: string;
	displayName: string;
	email: string;
}
export interface mailboxProtectionUnitMethods extends protectionUnitBaseMethods {

}
export interface mailboxProtectionUnitOData extends protectionUnitBaseOData {

}
export interface mailboxProtectionUnitCollection extends IBaseCollection<mailboxProtectionUnit, mailboxProtectionUnitOData & mailboxProtectionUnitProps> {
    add(values?: any): IBaseExecution<mailboxProtectionUnit>;
}
/*********************************************
* mailboxRestoreArtifact
**********************************************/
export interface mailboxRestoreArtifact extends mailboxRestoreArtifactProps, mailboxRestoreArtifactMethods { }
export interface mailboxRestoreArtifactProps extends  restoreArtifactBaseProps {
	restoredFolderId: string;
	restoredFolderName: string;
}
export interface mailboxRestoreArtifactMethods extends restoreArtifactBaseMethods {

}
export interface mailboxRestoreArtifactOData extends restoreArtifactBaseOData {

}
export interface mailboxRestoreArtifactCollection extends IBaseCollection<mailboxRestoreArtifact, mailboxRestoreArtifactOData & mailboxRestoreArtifactProps> {
    add(values?: any): IBaseExecution<mailboxRestoreArtifact>;
}
/*********************************************
* malwareStateForWindowsDevice
**********************************************/
export interface malwareStateForWindowsDevice extends malwareStateForWindowsDeviceProps, malwareStateForWindowsDeviceMethods { }
export interface malwareStateForWindowsDeviceProps extends  entityProps {
	detectionCount: number;
	deviceName: string;
	executionState: EnumTypes.windowsMalwareExecutionState;
	initialDetectionDateTime: any;
	lastStateChangeDateTime: any;
	threatState: EnumTypes.windowsMalwareThreatState;
}
export interface malwareStateForWindowsDeviceMethods extends entityMethods {

}
export interface malwareStateForWindowsDeviceOData extends entityOData {

}
export interface malwareStateForWindowsDeviceCollection extends IBaseCollection<malwareStateForWindowsDevice, malwareStateForWindowsDeviceOData & malwareStateForWindowsDeviceProps> {
    add(values?: any): IBaseExecution<malwareStateForWindowsDevice>;
}
/*********************************************
* managedAndroidLobApp
**********************************************/
export interface managedAndroidLobApp extends managedAndroidLobAppProps, managedAndroidLobAppMethods { }
export interface managedAndroidLobAppProps extends  managedMobileLobAppProps {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;
}
export interface managedAndroidLobAppMethods extends managedMobileLobAppMethods {

}
export interface managedAndroidLobAppOData extends managedMobileLobAppOData {

}
/*********************************************
* managedAndroidStoreApp
**********************************************/
export interface managedAndroidStoreApp extends managedAndroidStoreAppProps, managedAndroidStoreAppMethods { }
export interface managedAndroidStoreAppProps extends  managedAppProps {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
}
export interface managedAndroidStoreAppMethods extends managedAppMethods {

}
export interface managedAndroidStoreAppOData extends managedAppOData {

}
/*********************************************
* managedApp
**********************************************/
export interface managedApp extends managedAppProps, managedAppMethods { }
export interface managedAppProps extends  mobileAppProps {
	appAvailability: EnumTypes.managedAppAvailability;
	version: string;
}
export interface managedAppMethods extends mobileAppMethods {

}
export interface managedAppOData extends mobileAppOData {

}
/*********************************************
* managedAppConfiguration
**********************************************/
export interface managedAppConfiguration extends managedAppConfigurationProps, managedAppConfigurationMethods { }
export interface managedAppConfigurationProps extends  managedAppPolicyProps {
	customSettings: ComplexTypes.keyValuePair[];
}
export interface managedAppConfigurationMethods extends managedAppPolicyMethods {

}
export interface managedAppConfigurationOData extends managedAppPolicyOData {

}
/*********************************************
* managedAppOperation
**********************************************/
export interface managedAppOperation extends managedAppOperationProps, managedAppOperationMethods { }
export interface managedAppOperationProps extends  entityProps {
	displayName: string;
	lastModifiedDateTime: any;
	state: string;
	version: string;
}
export interface managedAppOperationMethods extends entityMethods {

}
export interface managedAppOperationOData extends entityOData {

}
export interface managedAppOperationCollection extends IBaseCollection<managedAppOperation, managedAppOperationOData & managedAppOperationProps> {
    add(values?: any): IBaseExecution<managedAppOperation>;
}
/*********************************************
* managedAppPolicy
**********************************************/
export interface managedAppPolicy extends managedAppPolicyProps, managedAppPolicyMethods { }
export interface managedAppPolicyProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: string;
}
export interface managedAppPolicyMethods extends entityMethods {
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
export interface managedAppPolicyOData extends entityOData {
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
export interface managedAppPolicyCollection extends IBaseCollection<managedAppPolicy, managedAppPolicyOData & managedAppPolicyProps> {
    add(values?: any): IBaseExecution<managedAppPolicy>;
}
/*********************************************
* managedAppPolicyDeploymentSummary
**********************************************/
export interface managedAppPolicyDeploymentSummary extends managedAppPolicyDeploymentSummaryProps, managedAppPolicyDeploymentSummaryMethods { }
export interface managedAppPolicyDeploymentSummaryProps extends  entityProps {
	configurationDeployedUserCount: number;
	configurationDeploymentSummaryPerApp: ComplexTypes.managedAppPolicyDeploymentSummaryPerApp[];
	displayName: string;
	lastRefreshTime: any;
	version: string;
}
export interface managedAppPolicyDeploymentSummaryMethods extends entityMethods {

}
export interface managedAppPolicyDeploymentSummaryOData extends entityOData {

}
/*********************************************
* managedAppProtection
**********************************************/
export interface managedAppProtection extends managedAppProtectionProps, managedAppProtectionMethods { }
export interface managedAppProtectionProps extends  managedAppPolicyProps {
	allowedDataStorageLocations: EnumTypes.managedAppDataStorageLocation[];
	allowedInboundDataTransferSources: EnumTypes.managedAppDataTransferLevel;
	allowedOutboundClipboardSharingLevel: EnumTypes.managedAppClipboardSharingLevel;
	allowedOutboundDataTransferDestinations: EnumTypes.managedAppDataTransferLevel;
	contactSyncBlocked: boolean;
	dataBackupBlocked: boolean;
	deviceComplianceRequired: boolean;
	disableAppPinIfDevicePinIsSet: boolean;
	fingerprintBlocked: boolean;
	managedBrowser: EnumTypes.managedBrowserType;
	managedBrowserToOpenLinksRequired: boolean;
	maximumPinRetries: number;
	minimumPinLength: number;
	minimumRequiredAppVersion: string;
	minimumRequiredOsVersion: string;
	minimumWarningAppVersion: string;
	minimumWarningOsVersion: string;
	organizationalCredentialsRequired: boolean;
	periodBeforePinReset: number;
	periodOfflineBeforeAccessCheck: number;
	periodOfflineBeforeWipeIsEnforced: number;
	periodOnlineBeforeAccessCheck: number;
	pinCharacterSet: EnumTypes.managedAppPinCharacterSet;
	pinRequired: boolean;
	printBlocked: boolean;
	saveAsBlocked: boolean;
	simplePinBlocked: boolean;
}
export interface managedAppProtectionMethods extends managedAppPolicyMethods {
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
export interface managedAppProtectionOData extends managedAppPolicyOData {
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
/*********************************************
* managedAppRegistration
**********************************************/
export interface managedAppRegistration extends managedAppRegistrationProps, managedAppRegistrationMethods { }
export interface managedAppRegistrationProps extends  entityProps {
	appIdentifier: ComplexTypes.mobileAppIdentifier;
	applicationVersion: string;
	createdDateTime: any;
	deviceName: string;
	deviceTag: string;
	deviceType: string;
	flaggedReasons: EnumTypes.managedAppFlaggedReason[];
	lastSyncDateTime: any;
	managementSdkVersion: string;
	platformVersion: string;
	userId: string;
	version: string;
}
export interface managedAppRegistrationMethods extends entityMethods {
	appliedPolicies(): managedAppPolicyCollection;
	appliedPolicies(id: string | number): IBaseQuery<managedAppPolicy> & managedAppPolicyMethods;
	intendedPolicies(): managedAppPolicyCollection;
	intendedPolicies(id: string | number): IBaseQuery<managedAppPolicy> & managedAppPolicyMethods;
	operations(): managedAppOperationCollection;
	operations(id: string | number): IBaseQuery<managedAppOperation> & managedAppOperationMethods;
}
export interface managedAppRegistrationOData extends entityOData {
	appliedPolicies: IBaseResults<managedAppPolicy>;
	intendedPolicies: IBaseResults<managedAppPolicy>;
	operations: IBaseResults<managedAppOperation>;
}
export interface managedAppRegistrationCollection extends IBaseCollection<managedAppRegistration, managedAppRegistrationOData & managedAppRegistrationProps> {
    add(values?: any): IBaseExecution<managedAppRegistration>;
}
/*********************************************
* managedAppStatus
**********************************************/
export interface managedAppStatus extends managedAppStatusProps, managedAppStatusMethods { }
export interface managedAppStatusProps extends  entityProps {
	displayName: string;
	version: string;
}
export interface managedAppStatusMethods extends entityMethods {

}
export interface managedAppStatusOData extends entityOData {

}
export interface managedAppStatusCollection extends IBaseCollection<managedAppStatus, managedAppStatusOData & managedAppStatusProps> {
    add(values?: any): IBaseExecution<managedAppStatus>;
}
/*********************************************
* managedAppStatusRaw
**********************************************/
export interface managedAppStatusRaw extends managedAppStatusRawProps, managedAppStatusRawMethods { }
export interface managedAppStatusRawProps extends  managedAppStatusProps {
	content: ComplexTypes.Json;
}
export interface managedAppStatusRawMethods extends managedAppStatusMethods {

}
export interface managedAppStatusRawOData extends managedAppStatusOData {

}
/*********************************************
* managedDevice
**********************************************/
export interface managedDevice extends managedDeviceProps, managedDeviceMethods { }
export interface managedDeviceProps extends  entityProps {
	activationLockBypassCode: string;
	androidSecurityPatchLevel: string;
	azureADDeviceId: string;
	azureADRegistered: boolean;
	complianceGracePeriodExpirationDateTime: any;
	complianceState: EnumTypes.complianceState;
	configurationManagerClientEnabledFeatures: ComplexTypes.configurationManagerClientEnabledFeatures;
	deviceActionResults: ComplexTypes.deviceActionResult[];
	deviceCategoryDisplayName: string;
	deviceEnrollmentType: EnumTypes.deviceEnrollmentType;
	deviceHealthAttestationState: ComplexTypes.deviceHealthAttestationState;
	deviceName: string;
	deviceRegistrationState: EnumTypes.deviceRegistrationState;
	easActivated: boolean;
	easActivationDateTime: any;
	easDeviceId: string;
	emailAddress: string;
	enrolledDateTime: any;
	enrollmentProfileName: string;
	ethernetMacAddress: string;
	exchangeAccessState: EnumTypes.deviceManagementExchangeAccessState;
	exchangeAccessStateReason: EnumTypes.deviceManagementExchangeAccessStateReason;
	exchangeLastSuccessfulSyncDateTime: any;
	freeStorageSpaceInBytes: number;
	iccid: string;
	imei: string;
	isEncrypted: boolean;
	isSupervised: boolean;
	jailBroken: string;
	lastSyncDateTime: any;
	managedDeviceName: string;
	managedDeviceOwnerType: EnumTypes.managedDeviceOwnerType;
	managementAgent: EnumTypes.managementAgentType;
	managementCertificateExpirationDate: any;
	manufacturer: string;
	meid: string;
	model: string;
	notes: string;
	operatingSystem: string;
	osVersion: string;
	partnerReportedThreatState: EnumTypes.managedDevicePartnerReportedHealthState;
	phoneNumber: string;
	physicalMemoryInBytes: number;
	remoteAssistanceSessionErrorDetails: string;
	remoteAssistanceSessionUrl: string;
	requireUserEnrollmentApproval: boolean;
	serialNumber: string;
	subscriberCarrier: string;
	totalStorageSpaceInBytes: number;
	udid: string;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;
	wiFiMacAddress: string;
}
export interface managedDeviceMethods extends entityMethods {
	deviceCompliancePolicyStates(): deviceCompliancePolicyStateCollection;
	deviceCompliancePolicyStates(id: string | number): IBaseQuery<deviceCompliancePolicyState> & deviceCompliancePolicyStateMethods;
	deviceConfigurationStates(): deviceConfigurationStateCollection;
	deviceConfigurationStates(id: string | number): IBaseQuery<deviceConfigurationState> & deviceConfigurationStateMethods;
	deviceCategory(): IBaseQuery<deviceCategory> & deviceCategoryMethods;
	logCollectionRequests(): deviceLogCollectionResponseCollection;
	logCollectionRequests(id: string | number): IBaseQuery<deviceLogCollectionResponse> & deviceLogCollectionResponseMethods;
	users(): userCollection;
	users(id: string | number): IBaseQuery<user> & userMethods;
	windowsProtectionState(): IBaseQuery<windowsProtectionState> & windowsProtectionStateMethods;
	bypassActivationLock(): IBaseExecution<void>;
	cleanWindowsDevice(keepUserData): IBaseExecution<void>;
	deleteUserFromSharedAppleDevice(userPrincipalName): IBaseExecution<void>;
	disableLostMode(): IBaseExecution<void>;
	locateDevice(): IBaseExecution<void>;
	logoutSharedAppleDeviceActiveUser(): IBaseExecution<void>;
	rebootNow(): IBaseExecution<void>;
	recoverPasscode(): IBaseExecution<void>;
	remoteLock(): IBaseExecution<void>;
	requestRemoteAssistance(): IBaseExecution<void>;
	resetPasscode(): IBaseExecution<void>;
	retire(): IBaseExecution<void>;
	shutDown(): IBaseExecution<void>;
	syncDevice(): IBaseExecution<void>;
	updateWindowsDeviceAccount(updateWindowsDeviceAccountActionParameter): IBaseExecution<void>;
	windowsDefenderScan(quickScan): IBaseExecution<void>;
	windowsDefenderUpdateSignatures(): IBaseExecution<void>;
	wipe(keepEnrollmentData, keepUserData, macOsUnlockCode, persistEsimDataPlan): IBaseExecution<void>;
}
export interface managedDeviceOData extends entityOData {
	deviceCompliancePolicyStates: IBaseResults<deviceCompliancePolicyState>;
	deviceConfigurationStates: IBaseResults<deviceConfigurationState>;
	deviceCategory: deviceCategory;
	logCollectionRequests: IBaseResults<deviceLogCollectionResponse>;
	users: IBaseResults<user>;
	windowsProtectionState: windowsProtectionState;
	bypassActivationLock(): IBaseExecution<void>;
	cleanWindowsDevice(keepUserData): IBaseExecution<void>;
	deleteUserFromSharedAppleDevice(userPrincipalName): IBaseExecution<void>;
	disableLostMode(): IBaseExecution<void>;
	locateDevice(): IBaseExecution<void>;
	logoutSharedAppleDeviceActiveUser(): IBaseExecution<void>;
	rebootNow(): IBaseExecution<void>;
	recoverPasscode(): IBaseExecution<void>;
	remoteLock(): IBaseExecution<void>;
	requestRemoteAssistance(): IBaseExecution<void>;
	resetPasscode(): IBaseExecution<void>;
	retire(): IBaseExecution<void>;
	shutDown(): IBaseExecution<void>;
	syncDevice(): IBaseExecution<void>;
	updateWindowsDeviceAccount(updateWindowsDeviceAccountActionParameter): IBaseExecution<void>;
	windowsDefenderScan(quickScan): IBaseExecution<void>;
	windowsDefenderUpdateSignatures(): IBaseExecution<void>;
	wipe(keepEnrollmentData, keepUserData, macOsUnlockCode, persistEsimDataPlan): IBaseExecution<void>;
}
export interface managedDeviceCollection extends IBaseCollection<managedDevice, managedDeviceOData & managedDeviceProps> {
    add(values?: any): IBaseExecution<managedDevice>;
}
/*********************************************
* managedDeviceMobileAppConfiguration
**********************************************/
export interface managedDeviceMobileAppConfiguration extends managedDeviceMobileAppConfigurationProps, managedDeviceMobileAppConfigurationMethods { }
export interface managedDeviceMobileAppConfigurationProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	targetedMobileApps: Array<string>[];
	version: number;
}
export interface managedDeviceMobileAppConfigurationMethods extends entityMethods {
	assignments(): managedDeviceMobileAppConfigurationAssignmentCollection;
	assignments(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationAssignment> & managedDeviceMobileAppConfigurationAssignmentMethods;
	deviceStatuses(): managedDeviceMobileAppConfigurationDeviceStatusCollection;
	deviceStatuses(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationDeviceStatus> & managedDeviceMobileAppConfigurationDeviceStatusMethods;
	deviceStatusSummary(): IBaseQuery<managedDeviceMobileAppConfigurationDeviceSummary> & managedDeviceMobileAppConfigurationDeviceSummaryMethods;
	userStatuses(): managedDeviceMobileAppConfigurationUserStatusCollection;
	userStatuses(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationUserStatus> & managedDeviceMobileAppConfigurationUserStatusMethods;
	userStatusSummary(): IBaseQuery<managedDeviceMobileAppConfigurationUserSummary> & managedDeviceMobileAppConfigurationUserSummaryMethods;
	assign(assignments): IBaseExecution<void>;
}
export interface managedDeviceMobileAppConfigurationOData extends entityOData {
	assignments: IBaseResults<managedDeviceMobileAppConfigurationAssignment>;
	deviceStatuses: IBaseResults<managedDeviceMobileAppConfigurationDeviceStatus>;
	deviceStatusSummary: managedDeviceMobileAppConfigurationDeviceSummary;
	userStatuses: IBaseResults<managedDeviceMobileAppConfigurationUserStatus>;
	userStatusSummary: managedDeviceMobileAppConfigurationUserSummary;
	assign(assignments): IBaseExecution<void>;
}
export interface managedDeviceMobileAppConfigurationCollection extends IBaseCollection<managedDeviceMobileAppConfiguration, managedDeviceMobileAppConfigurationOData & managedDeviceMobileAppConfigurationProps> {
    add(values?: any): IBaseExecution<managedDeviceMobileAppConfiguration>;
}
/*********************************************
* managedDeviceMobileAppConfigurationAssignment
**********************************************/
export interface managedDeviceMobileAppConfigurationAssignment extends managedDeviceMobileAppConfigurationAssignmentProps, managedDeviceMobileAppConfigurationAssignmentMethods { }
export interface managedDeviceMobileAppConfigurationAssignmentProps extends  entityProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface managedDeviceMobileAppConfigurationAssignmentMethods extends entityMethods {

}
export interface managedDeviceMobileAppConfigurationAssignmentOData extends entityOData {

}
export interface managedDeviceMobileAppConfigurationAssignmentCollection extends IBaseCollection<managedDeviceMobileAppConfigurationAssignment, managedDeviceMobileAppConfigurationAssignmentOData & managedDeviceMobileAppConfigurationAssignmentProps> {
    add(values?: any): IBaseExecution<managedDeviceMobileAppConfigurationAssignment>;
}
/*********************************************
* managedDeviceMobileAppConfigurationDeviceStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceStatus extends managedDeviceMobileAppConfigurationDeviceStatusProps, managedDeviceMobileAppConfigurationDeviceStatusMethods { }
export interface managedDeviceMobileAppConfigurationDeviceStatusProps extends  entityProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;
}
export interface managedDeviceMobileAppConfigurationDeviceStatusMethods extends entityMethods {

}
export interface managedDeviceMobileAppConfigurationDeviceStatusOData extends entityOData {

}
export interface managedDeviceMobileAppConfigurationDeviceStatusCollection extends IBaseCollection<managedDeviceMobileAppConfigurationDeviceStatus, managedDeviceMobileAppConfigurationDeviceStatusOData & managedDeviceMobileAppConfigurationDeviceStatusProps> {
    add(values?: any): IBaseExecution<managedDeviceMobileAppConfigurationDeviceStatus>;
}
/*********************************************
* managedDeviceMobileAppConfigurationDeviceSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceSummary extends managedDeviceMobileAppConfigurationDeviceSummaryProps, managedDeviceMobileAppConfigurationDeviceSummaryMethods { }
export interface managedDeviceMobileAppConfigurationDeviceSummaryProps extends  entityProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface managedDeviceMobileAppConfigurationDeviceSummaryMethods extends entityMethods {

}
export interface managedDeviceMobileAppConfigurationDeviceSummaryOData extends entityOData {

}
/*********************************************
* managedDeviceMobileAppConfigurationUserStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationUserStatus extends managedDeviceMobileAppConfigurationUserStatusProps, managedDeviceMobileAppConfigurationUserStatusMethods { }
export interface managedDeviceMobileAppConfigurationUserStatusProps extends  entityProps {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface managedDeviceMobileAppConfigurationUserStatusMethods extends entityMethods {

}
export interface managedDeviceMobileAppConfigurationUserStatusOData extends entityOData {

}
export interface managedDeviceMobileAppConfigurationUserStatusCollection extends IBaseCollection<managedDeviceMobileAppConfigurationUserStatus, managedDeviceMobileAppConfigurationUserStatusOData & managedDeviceMobileAppConfigurationUserStatusProps> {
    add(values?: any): IBaseExecution<managedDeviceMobileAppConfigurationUserStatus>;
}
/*********************************************
* managedDeviceMobileAppConfigurationUserSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationUserSummary extends managedDeviceMobileAppConfigurationUserSummaryProps, managedDeviceMobileAppConfigurationUserSummaryMethods { }
export interface managedDeviceMobileAppConfigurationUserSummaryProps extends  entityProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface managedDeviceMobileAppConfigurationUserSummaryMethods extends entityMethods {

}
export interface managedDeviceMobileAppConfigurationUserSummaryOData extends entityOData {

}
/*********************************************
* managedDeviceOverview
**********************************************/
export interface managedDeviceOverview extends managedDeviceOverviewProps, managedDeviceOverviewMethods { }
export interface managedDeviceOverviewProps extends  entityProps {
	deviceExchangeAccessStateSummary: ComplexTypes.deviceExchangeAccessStateSummary;
	deviceOperatingSystemSummary: ComplexTypes.deviceOperatingSystemSummary;
	dualEnrolledDeviceCount: number;
	enrolledDeviceCount: number;
	mdmEnrolledCount: number;
}
export interface managedDeviceOverviewMethods extends entityMethods {

}
export interface managedDeviceOverviewOData extends entityOData {

}
/*********************************************
* managedEBook
**********************************************/
export interface managedEBook extends managedEBookProps, managedEBookMethods { }
export interface managedEBookProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	informationUrl: string;
	largeCover: ComplexTypes.mimeContent;
	lastModifiedDateTime: any;
	privacyInformationUrl: string;
	publishedDateTime: any;
	publisher: string;
}
export interface managedEBookMethods extends entityMethods {
	assignments(): managedEBookAssignmentCollection;
	assignments(id: string | number): IBaseQuery<managedEBookAssignment> & managedEBookAssignmentMethods;
	deviceStates(): deviceInstallStateCollection;
	deviceStates(id: string | number): IBaseQuery<deviceInstallState> & deviceInstallStateMethods;
	installSummary(): IBaseQuery<eBookInstallSummary> & eBookInstallSummaryMethods;
	userStateSummary(): userInstallStateSummaryCollection;
	userStateSummary(id: string | number): IBaseQuery<userInstallStateSummary> & userInstallStateSummaryMethods;
	assign(managedEBookAssignments): IBaseExecution<void>;
}
export interface managedEBookOData extends entityOData {
	assignments: IBaseResults<managedEBookAssignment>;
	deviceStates: IBaseResults<deviceInstallState>;
	installSummary: eBookInstallSummary;
	userStateSummary: IBaseResults<userInstallStateSummary>;
	assign(managedEBookAssignments): IBaseExecution<void>;
}
export interface managedEBookCollection extends IBaseCollection<managedEBook, managedEBookOData & managedEBookProps> {
    add(values?: any): IBaseExecution<managedEBook>;
}
/*********************************************
* managedEBookAssignment
**********************************************/
export interface managedEBookAssignment extends managedEBookAssignmentProps, managedEBookAssignmentMethods { }
export interface managedEBookAssignmentProps extends  entityProps {
	installIntent: EnumTypes.installIntent;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface managedEBookAssignmentMethods extends entityMethods {

}
export interface managedEBookAssignmentOData extends entityOData {

}
export interface managedEBookAssignmentCollection extends IBaseCollection<managedEBookAssignment, managedEBookAssignmentOData & managedEBookAssignmentProps> {
    add(values?: any): IBaseExecution<managedEBookAssignment>;
}
/*********************************************
* managedIOSLobApp
**********************************************/
export interface managedIOSLobApp extends managedIOSLobAppProps, managedIOSLobAppMethods { }
export interface managedIOSLobAppProps extends  managedMobileLobAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	buildNumber: string;
	bundleId: string;
	expirationDateTime: any;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
	versionNumber: string;
}
export interface managedIOSLobAppMethods extends managedMobileLobAppMethods {

}
export interface managedIOSLobAppOData extends managedMobileLobAppOData {

}
/*********************************************
* managedIOSStoreApp
**********************************************/
export interface managedIOSStoreApp extends managedIOSStoreAppProps, managedIOSStoreAppMethods { }
export interface managedIOSStoreAppProps extends  managedAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
}
export interface managedIOSStoreAppMethods extends managedAppMethods {

}
export interface managedIOSStoreAppOData extends managedAppOData {

}
/*********************************************
* managedMobileApp
**********************************************/
export interface managedMobileApp extends managedMobileAppProps, managedMobileAppMethods { }
export interface managedMobileAppProps extends  entityProps {
	mobileAppIdentifier: ComplexTypes.mobileAppIdentifier;
	version: string;
}
export interface managedMobileAppMethods extends entityMethods {

}
export interface managedMobileAppOData extends entityOData {

}
export interface managedMobileAppCollection extends IBaseCollection<managedMobileApp, managedMobileAppOData & managedMobileAppProps> {
    add(values?: any): IBaseExecution<managedMobileApp>;
}
/*********************************************
* managedMobileLobApp
**********************************************/
export interface managedMobileLobApp extends managedMobileLobAppProps, managedMobileLobAppMethods { }
export interface managedMobileLobAppProps extends  managedAppProps {
	committedContentVersion: string;
	fileName: string;
	size: number;
}
export interface managedMobileLobAppMethods extends managedAppMethods {
	contentVersions(): mobileAppContentCollection;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent> & mobileAppContentMethods;
}
export interface managedMobileLobAppOData extends managedAppOData {
	contentVersions: IBaseResults<mobileAppContent>;
}
/*********************************************
* manifest
**********************************************/
export interface manifest extends manifestProps, manifestMethods { }
export interface manifestProps extends  entityProps {
	blobCount: number;
	blobs: ComplexTypes.blob[];
	createdDateTime: any;
	dataFormat: string;
	eTag: string;
	partitionType: string;
	partnerTenantId: string;
	rootDirectory: string;
	sasToken: string;
	schemaVersion: string;
}
export interface manifestMethods extends entityMethods {

}
export interface manifestOData extends entityOData {

}
/*********************************************
* mdmWindowsInformationProtectionPolicy
**********************************************/
export interface mdmWindowsInformationProtectionPolicy extends mdmWindowsInformationProtectionPolicyProps, mdmWindowsInformationProtectionPolicyMethods { }
export interface mdmWindowsInformationProtectionPolicyProps extends  windowsInformationProtectionProps {

}
export interface mdmWindowsInformationProtectionPolicyMethods extends windowsInformationProtectionMethods {

}
export interface mdmWindowsInformationProtectionPolicyOData extends windowsInformationProtectionOData {

}
export interface mdmWindowsInformationProtectionPolicyCollection extends IBaseCollection<mdmWindowsInformationProtectionPolicy, mdmWindowsInformationProtectionPolicyOData & mdmWindowsInformationProtectionPolicyProps> {
    add(values?: any): IBaseExecution<mdmWindowsInformationProtectionPolicy>;
}
/*********************************************
* meetingAttendanceReport
**********************************************/
export interface meetingAttendanceReport extends meetingAttendanceReportProps, meetingAttendanceReportMethods { }
export interface meetingAttendanceReportProps extends  entityProps {
	meetingEndDateTime: any;
	meetingStartDateTime: any;
	totalParticipantCount: number;
}
export interface meetingAttendanceReportMethods extends entityMethods {
	attendanceRecords(): attendanceRecordCollection;
	attendanceRecords(id: string | number): IBaseQuery<attendanceRecord> & attendanceRecordMethods;
}
export interface meetingAttendanceReportOData extends entityOData {
	attendanceRecords: IBaseResults<attendanceRecord>;
}
export interface meetingAttendanceReportCollection extends IBaseCollection<meetingAttendanceReport, meetingAttendanceReportOData & meetingAttendanceReportProps> {
    add(values?: any): IBaseExecution<meetingAttendanceReport>;
}
/*********************************************
* membershipOutlierInsight
**********************************************/
export interface membershipOutlierInsight extends membershipOutlierInsightProps, membershipOutlierInsightMethods { }
export interface membershipOutlierInsightProps extends  governanceInsightProps {
	containerId: string;
	memberId: string;
	outlierContainerType: EnumTypes.outlierContainerType;
	outlierMemberType: EnumTypes.outlierMemberType;
}
export interface membershipOutlierInsightMethods extends governanceInsightMethods {
	container(): IBaseQuery<directoryObject> & directoryObjectMethods;
	lastModifiedBy(): IBaseQuery<user> & userMethods;
	member(): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface membershipOutlierInsightOData extends governanceInsightOData {
	container: directoryObject;
	lastModifiedBy: user;
	member: directoryObject;
}
/*********************************************
* message
**********************************************/
export interface message extends messageProps, messageMethods { }
export interface messageProps extends  outlookItemProps {
	bccRecipients: ComplexTypes.recipient[];
	body: ComplexTypes.itemBody;
	bodyPreview: string;
	ccRecipients: ComplexTypes.recipient[];
	conversationId: string;
	conversationIndex: any;
	flag: ComplexTypes.followupFlag;
	from: ComplexTypes.recipient;
	hasAttachments: boolean;
	importance: EnumTypes.importance;
	inferenceClassification: EnumTypes.inferenceClassificationType;
	internetMessageHeaders: ComplexTypes.internetMessageHeader[];
	internetMessageId: string;
	isDeliveryReceiptRequested: boolean;
	isDraft: boolean;
	isRead: boolean;
	isReadReceiptRequested: boolean;
	parentFolderId: string;
	receivedDateTime: any;
	replyTo: ComplexTypes.recipient[];
	sender: ComplexTypes.recipient;
	sentDateTime: any;
	subject: string;
	toRecipients: ComplexTypes.recipient[];
	uniqueBody: ComplexTypes.itemBody;
	webLink: string;
}
export interface messageMethods extends outlookItemMethods {
	attachments(): attachmentCollection;
	attachments(id: string | number): IBaseQuery<attachment> & attachmentMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	multiValueExtendedProperties(): multiValueLegacyExtendedPropertyCollection;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): singleValueLegacyExtendedPropertyCollection;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
	forward(ToRecipients, Message, Comment): IBaseExecution<void>;
	copy(DestinationId): IBaseExecution<message>;
	move(DestinationId): IBaseExecution<message>;
	createForward(ToRecipients, Message, Comment): IBaseExecution<message>;
	createReply(Message, Comment): IBaseExecution<message>;
	createReplyAll(Message, Comment): IBaseExecution<message>;
	reply(Message, Comment): IBaseExecution<void>;
	replyAll(Message, Comment): IBaseExecution<void>;
	send(): IBaseExecution<void>;
}
export interface messageOData extends outlookItemOData {
	attachments: IBaseResults<attachment>;
	extensions: IBaseResults<extension>;
	multiValueExtendedProperties: IBaseResults<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties: IBaseResults<singleValueLegacyExtendedProperty>;
	forward(ToRecipients, Message, Comment): IBaseExecution<void>;
	copy(DestinationId): IBaseExecution<message>;
	move(DestinationId): IBaseExecution<message>;
	createForward(ToRecipients, Message, Comment): IBaseExecution<message>;
	createReply(Message, Comment): IBaseExecution<message>;
	createReplyAll(Message, Comment): IBaseExecution<message>;
	reply(Message, Comment): IBaseExecution<void>;
	replyAll(Message, Comment): IBaseExecution<void>;
	send(): IBaseExecution<void>;
}
export interface messageCollection extends IBaseCollection<message, messageOData & messageProps> {
    add(values?: any): IBaseExecution<message>;
}
/*********************************************
* messageRule
**********************************************/
export interface messageRule extends messageRuleProps, messageRuleMethods { }
export interface messageRuleProps extends  entityProps {
	actions: ComplexTypes.messageRuleActions;
	conditions: ComplexTypes.messageRulePredicates;
	displayName: string;
	exceptions: ComplexTypes.messageRulePredicates;
	hasError: boolean;
	isEnabled: boolean;
	isReadOnly: boolean;
	sequence: number;
}
export interface messageRuleMethods extends entityMethods {

}
export interface messageRuleOData extends entityOData {

}
export interface messageRuleCollection extends IBaseCollection<messageRule, messageRuleOData & messageRuleProps> {
    add(values?: any): IBaseExecution<messageRule>;
}
/*********************************************
* microsoftAccountUserConversationMember
**********************************************/
export interface microsoftAccountUserConversationMember extends microsoftAccountUserConversationMemberProps, microsoftAccountUserConversationMemberMethods { }
export interface microsoftAccountUserConversationMemberProps extends  conversationMemberProps {
	userId: string;
}
export interface microsoftAccountUserConversationMemberMethods extends conversationMemberMethods {

}
export interface microsoftAccountUserConversationMemberOData extends conversationMemberOData {

}
/*********************************************
* microsoftAuthenticatorAuthenticationMethod
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethod extends microsoftAuthenticatorAuthenticationMethodProps, microsoftAuthenticatorAuthenticationMethodMethods { }
export interface microsoftAuthenticatorAuthenticationMethodProps extends  authenticationMethodProps {
	createdDateTime: any;
	deviceTag: string;
	displayName: string;
	phoneAppVersion: string;
}
export interface microsoftAuthenticatorAuthenticationMethodMethods extends authenticationMethodMethods {
	device(): IBaseQuery<device> & deviceMethods;
}
export interface microsoftAuthenticatorAuthenticationMethodOData extends authenticationMethodOData {
	device: device;
}
export interface microsoftAuthenticatorAuthenticationMethodCollection extends IBaseCollection<microsoftAuthenticatorAuthenticationMethod, microsoftAuthenticatorAuthenticationMethodOData & microsoftAuthenticatorAuthenticationMethodProps> {
    add(values?: any): IBaseExecution<microsoftAuthenticatorAuthenticationMethod>;
}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodConfiguration
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodConfiguration extends microsoftAuthenticatorAuthenticationMethodConfigurationProps, microsoftAuthenticatorAuthenticationMethodConfigurationMethods { }
export interface microsoftAuthenticatorAuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {
	featureSettings: ComplexTypes.microsoftAuthenticatorFeatureSettings;
	isSoftwareOathEnabled: boolean;
}
export interface microsoftAuthenticatorAuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): microsoftAuthenticatorAuthenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<microsoftAuthenticatorAuthenticationMethodTarget> & microsoftAuthenticatorAuthenticationMethodTargetMethods;
}
export interface microsoftAuthenticatorAuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<microsoftAuthenticatorAuthenticationMethodTarget>;
}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodTarget
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodTarget extends microsoftAuthenticatorAuthenticationMethodTargetProps, microsoftAuthenticatorAuthenticationMethodTargetMethods { }
export interface microsoftAuthenticatorAuthenticationMethodTargetProps extends  authenticationMethodTargetProps {
	authenticationMode: EnumTypes.microsoftAuthenticatorAuthenticationMode;
}
export interface microsoftAuthenticatorAuthenticationMethodTargetMethods extends authenticationMethodTargetMethods {

}
export interface microsoftAuthenticatorAuthenticationMethodTargetOData extends authenticationMethodTargetOData {

}
export interface microsoftAuthenticatorAuthenticationMethodTargetCollection extends IBaseCollection<microsoftAuthenticatorAuthenticationMethodTarget, microsoftAuthenticatorAuthenticationMethodTargetOData & microsoftAuthenticatorAuthenticationMethodTargetProps> {
    add(values?: any): IBaseExecution<microsoftAuthenticatorAuthenticationMethodTarget>;
}
/*********************************************
* microsoftStoreForBusinessApp
**********************************************/
export interface microsoftStoreForBusinessApp extends microsoftStoreForBusinessAppProps, microsoftStoreForBusinessAppMethods { }
export interface microsoftStoreForBusinessAppProps extends  mobileAppProps {
	licenseType: EnumTypes.microsoftStoreForBusinessLicenseType;
	packageIdentityName: string;
	productKey: string;
	totalLicenseCount: number;
	usedLicenseCount: number;
}
export interface microsoftStoreForBusinessAppMethods extends mobileAppMethods {

}
export interface microsoftStoreForBusinessAppOData extends mobileAppOData {

}
/*********************************************
* mobileApp
**********************************************/
export interface mobileApp extends mobileAppProps, mobileAppMethods { }
export interface mobileAppProps extends  entityProps {
	createdDateTime: any;
	description: string;
	developer: string;
	displayName: string;
	informationUrl: string;
	isFeatured: boolean;
	largeIcon: ComplexTypes.mimeContent;
	lastModifiedDateTime: any;
	notes: string;
	owner: string;
	privacyInformationUrl: string;
	publisher: string;
	publishingState: EnumTypes.mobileAppPublishingState;
}
export interface mobileAppMethods extends entityMethods {
	assignments(): mobileAppAssignmentCollection;
	assignments(id: string | number): IBaseQuery<mobileAppAssignment> & mobileAppAssignmentMethods;
	categories(): mobileAppCategoryCollection;
	categories(id: string | number): IBaseQuery<mobileAppCategory> & mobileAppCategoryMethods;
	assign(mobileAppAssignments): IBaseExecution<void>;
}
export interface mobileAppOData extends entityOData {
	assignments: IBaseResults<mobileAppAssignment>;
	categories: IBaseResults<mobileAppCategory>;
	assign(mobileAppAssignments): IBaseExecution<void>;
}
export interface mobileAppCollection extends IBaseCollection<mobileApp, mobileAppOData & mobileAppProps> {
    add(values?: any): IBaseExecution<mobileApp>;
}
/*********************************************
* mobileAppAssignment
**********************************************/
export interface mobileAppAssignment extends mobileAppAssignmentProps, mobileAppAssignmentMethods { }
export interface mobileAppAssignmentProps extends  entityProps {
	intent: EnumTypes.installIntent;
	settings: ComplexTypes.mobileAppAssignmentSettings;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface mobileAppAssignmentMethods extends entityMethods {

}
export interface mobileAppAssignmentOData extends entityOData {

}
export interface mobileAppAssignmentCollection extends IBaseCollection<mobileAppAssignment, mobileAppAssignmentOData & mobileAppAssignmentProps> {
    add(values?: any): IBaseExecution<mobileAppAssignment>;
}
/*********************************************
* mobileAppCategory
**********************************************/
export interface mobileAppCategory extends mobileAppCategoryProps, mobileAppCategoryMethods { }
export interface mobileAppCategoryProps extends  entityProps {
	displayName: string;
	lastModifiedDateTime: any;
}
export interface mobileAppCategoryMethods extends entityMethods {

}
export interface mobileAppCategoryOData extends entityOData {

}
export interface mobileAppCategoryCollection extends IBaseCollection<mobileAppCategory, mobileAppCategoryOData & mobileAppCategoryProps> {
    add(values?: any): IBaseExecution<mobileAppCategory>;
}
/*********************************************
* mobileAppContent
**********************************************/
export interface mobileAppContent extends mobileAppContentProps, mobileAppContentMethods { }
export interface mobileAppContentProps extends  entityProps {

}
export interface mobileAppContentMethods extends entityMethods {
	containedApps(): mobileContainedAppCollection;
	containedApps(id: string | number): IBaseQuery<mobileContainedApp> & mobileContainedAppMethods;
	files(): mobileAppContentFileCollection;
	files(id: string | number): IBaseQuery<mobileAppContentFile> & mobileAppContentFileMethods;
}
export interface mobileAppContentOData extends entityOData {
	containedApps: IBaseResults<mobileContainedApp>;
	files: IBaseResults<mobileAppContentFile>;
}
export interface mobileAppContentCollection extends IBaseCollection<mobileAppContent, mobileAppContentOData & mobileAppContentProps> {
    add(values?: any): IBaseExecution<mobileAppContent>;
}
/*********************************************
* mobileAppContentFile
**********************************************/
export interface mobileAppContentFile extends mobileAppContentFileProps, mobileAppContentFileMethods { }
export interface mobileAppContentFileProps extends  entityProps {
	azureStorageUri: string;
	azureStorageUriExpirationDateTime: any;
	createdDateTime: any;
	isCommitted: boolean;
	isDependency: boolean;
	manifest: any;
	name: string;
	size: number;
	sizeEncrypted: number;
	uploadState: EnumTypes.mobileAppContentFileUploadState;
}
export interface mobileAppContentFileMethods extends entityMethods {
	commit(fileEncryptionInfo): IBaseExecution<void>;
	renewUpload(): IBaseExecution<void>;
}
export interface mobileAppContentFileOData extends entityOData {
	commit(fileEncryptionInfo): IBaseExecution<void>;
	renewUpload(): IBaseExecution<void>;
}
export interface mobileAppContentFileCollection extends IBaseCollection<mobileAppContentFile, mobileAppContentFileOData & mobileAppContentFileProps> {
    add(values?: any): IBaseExecution<mobileAppContentFile>;
}
/*********************************************
* mobileAppTroubleshootingEvent
**********************************************/
export interface mobileAppTroubleshootingEvent extends mobileAppTroubleshootingEventProps, mobileAppTroubleshootingEventMethods { }
export interface mobileAppTroubleshootingEventProps extends  entityProps {

}
export interface mobileAppTroubleshootingEventMethods extends entityMethods {
	appLogCollectionRequests(): appLogCollectionRequestCollection;
	appLogCollectionRequests(id: string | number): IBaseQuery<appLogCollectionRequest> & appLogCollectionRequestMethods;
}
export interface mobileAppTroubleshootingEventOData extends entityOData {
	appLogCollectionRequests: IBaseResults<appLogCollectionRequest>;
}
export interface mobileAppTroubleshootingEventCollection extends IBaseCollection<mobileAppTroubleshootingEvent, mobileAppTroubleshootingEventOData & mobileAppTroubleshootingEventProps> {
    add(values?: any): IBaseExecution<mobileAppTroubleshootingEvent>;
}
/*********************************************
* mobileContainedApp
**********************************************/
export interface mobileContainedApp extends mobileContainedAppProps, mobileContainedAppMethods { }
export interface mobileContainedAppProps extends  entityProps {

}
export interface mobileContainedAppMethods extends entityMethods {

}
export interface mobileContainedAppOData extends entityOData {

}
export interface mobileContainedAppCollection extends IBaseCollection<mobileContainedApp, mobileContainedAppOData & mobileContainedAppProps> {
    add(values?: any): IBaseExecution<mobileContainedApp>;
}
/*********************************************
* mobileLobApp
**********************************************/
export interface mobileLobApp extends mobileLobAppProps, mobileLobAppMethods { }
export interface mobileLobAppProps extends  mobileAppProps {
	committedContentVersion: string;
	fileName: string;
	size: number;
}
export interface mobileLobAppMethods extends mobileAppMethods {
	contentVersions(): mobileAppContentCollection;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent> & mobileAppContentMethods;
}
export interface mobileLobAppOData extends mobileAppOData {
	contentVersions: IBaseResults<mobileAppContent>;
}
/*********************************************
* mobileThreatDefenseConnector
**********************************************/
export interface mobileThreatDefenseConnector extends mobileThreatDefenseConnectorProps, mobileThreatDefenseConnectorMethods { }
export interface mobileThreatDefenseConnectorProps extends  entityProps {
	allowPartnerToCollectIOSApplicationMetadata: boolean;
	allowPartnerToCollectIOSPersonalApplicationMetadata: boolean;
	androidDeviceBlockedOnMissingPartnerData: boolean;
	androidEnabled: boolean;
	androidMobileApplicationManagementEnabled: boolean;
	iosDeviceBlockedOnMissingPartnerData: boolean;
	iosEnabled: boolean;
	iosMobileApplicationManagementEnabled: boolean;
	lastHeartbeatDateTime: any;
	microsoftDefenderForEndpointAttachEnabled: boolean;
	partnerState: EnumTypes.mobileThreatPartnerTenantState;
	partnerUnresponsivenessThresholdInDays: number;
	partnerUnsupportedOsVersionBlocked: boolean;
	windowsDeviceBlockedOnMissingPartnerData: boolean;
	windowsEnabled: boolean;
}
export interface mobileThreatDefenseConnectorMethods extends entityMethods {

}
export interface mobileThreatDefenseConnectorOData extends entityOData {

}
export interface mobileThreatDefenseConnectorCollection extends IBaseCollection<mobileThreatDefenseConnector, mobileThreatDefenseConnectorOData & mobileThreatDefenseConnectorProps> {
    add(values?: any): IBaseExecution<mobileThreatDefenseConnector>;
}
/*********************************************
* multiTenantOrganization
**********************************************/
export interface multiTenantOrganization extends multiTenantOrganizationProps, multiTenantOrganizationMethods { }
export interface multiTenantOrganizationProps extends  entityProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	state: EnumTypes.multiTenantOrganizationState;
}
export interface multiTenantOrganizationMethods extends entityMethods {
	joinRequest(): IBaseQuery<multiTenantOrganizationJoinRequestRecord> & multiTenantOrganizationJoinRequestRecordMethods;
	tenants(): multiTenantOrganizationMemberCollection;
	tenants(id: string | number): IBaseQuery<multiTenantOrganizationMember> & multiTenantOrganizationMemberMethods;
}
export interface multiTenantOrganizationOData extends entityOData {
	joinRequest: multiTenantOrganizationJoinRequestRecord;
	tenants: IBaseResults<multiTenantOrganizationMember>;
}
/*********************************************
* multiTenantOrganizationIdentitySyncPolicyTemplate
**********************************************/
export interface multiTenantOrganizationIdentitySyncPolicyTemplate extends multiTenantOrganizationIdentitySyncPolicyTemplateProps, multiTenantOrganizationIdentitySyncPolicyTemplateMethods { }
export interface multiTenantOrganizationIdentitySyncPolicyTemplateProps extends  entityProps {
	templateApplicationLevel: EnumTypes.templateApplicationLevel;
	userSyncInbound: ComplexTypes.crossTenantUserSyncInbound;
}
export interface multiTenantOrganizationIdentitySyncPolicyTemplateMethods extends entityMethods {

}
export interface multiTenantOrganizationIdentitySyncPolicyTemplateOData extends entityOData {

}
/*********************************************
* multiTenantOrganizationJoinRequestRecord
**********************************************/
export interface multiTenantOrganizationJoinRequestRecord extends multiTenantOrganizationJoinRequestRecordProps, multiTenantOrganizationJoinRequestRecordMethods { }
export interface multiTenantOrganizationJoinRequestRecordProps extends  entityProps {
	addedByTenantId: string;
	memberState: EnumTypes.multiTenantOrganizationMemberState;
	role: EnumTypes.multiTenantOrganizationMemberRole;
	transitionDetails: ComplexTypes.multiTenantOrganizationJoinRequestTransitionDetails;
}
export interface multiTenantOrganizationJoinRequestRecordMethods extends entityMethods {

}
export interface multiTenantOrganizationJoinRequestRecordOData extends entityOData {

}
/*********************************************
* multiTenantOrganizationMember
**********************************************/
export interface multiTenantOrganizationMember extends multiTenantOrganizationMemberProps, multiTenantOrganizationMemberMethods { }
export interface multiTenantOrganizationMemberProps extends  directoryObjectProps {
	addedByTenantId: any;
	addedDateTime: any;
	displayName: string;
	joinedDateTime: any;
	role: EnumTypes.multiTenantOrganizationMemberRole;
	state: EnumTypes.multiTenantOrganizationMemberState;
	tenantId: string;
	transitionDetails: ComplexTypes.multiTenantOrganizationMemberTransitionDetails;
}
export interface multiTenantOrganizationMemberMethods extends directoryObjectMethods {

}
export interface multiTenantOrganizationMemberOData extends directoryObjectOData {

}
export interface multiTenantOrganizationMemberCollection extends IBaseCollection<multiTenantOrganizationMember, multiTenantOrganizationMemberOData & multiTenantOrganizationMemberProps> {
    add(values?: any): IBaseExecution<multiTenantOrganizationMember>;
}
/*********************************************
* multiTenantOrganizationPartnerConfigurationTemplate
**********************************************/
export interface multiTenantOrganizationPartnerConfigurationTemplate extends multiTenantOrganizationPartnerConfigurationTemplateProps, multiTenantOrganizationPartnerConfigurationTemplateMethods { }
export interface multiTenantOrganizationPartnerConfigurationTemplateProps extends  entityProps {
	automaticUserConsentSettings: ComplexTypes.inboundOutboundPolicyConfiguration;
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	templateApplicationLevel: EnumTypes.templateApplicationLevel;
}
export interface multiTenantOrganizationPartnerConfigurationTemplateMethods extends entityMethods {

}
export interface multiTenantOrganizationPartnerConfigurationTemplateOData extends entityOData {

}
/*********************************************
* multiValueLegacyExtendedProperty
**********************************************/
export interface multiValueLegacyExtendedProperty extends multiValueLegacyExtendedPropertyProps, multiValueLegacyExtendedPropertyMethods { }
export interface multiValueLegacyExtendedPropertyProps extends  entityProps {
	value: Array<string>[];
}
export interface multiValueLegacyExtendedPropertyMethods extends entityMethods {

}
export interface multiValueLegacyExtendedPropertyOData extends entityOData {

}
export interface multiValueLegacyExtendedPropertyCollection extends IBaseCollection<multiValueLegacyExtendedProperty, multiValueLegacyExtendedPropertyOData & multiValueLegacyExtendedPropertyProps> {
    add(values?: any): IBaseExecution<multiValueLegacyExtendedProperty>;
}
/*********************************************
* muteParticipantOperation
**********************************************/
export interface muteParticipantOperation extends muteParticipantOperationProps, muteParticipantOperationMethods { }
export interface muteParticipantOperationProps extends  commsOperationProps {

}
export interface muteParticipantOperationMethods extends commsOperationMethods {

}
export interface muteParticipantOperationOData extends commsOperationOData {

}
/*********************************************
* namedLocation
**********************************************/
export interface namedLocation extends namedLocationProps, namedLocationMethods { }
export interface namedLocationProps extends  entityProps {
	createdDateTime: any;
	displayName: string;
	modifiedDateTime: any;
}
export interface namedLocationMethods extends entityMethods {

}
export interface namedLocationOData extends entityOData {

}
export interface namedLocationCollection extends IBaseCollection<namedLocation, namedLocationOData & namedLocationProps> {
    add(values?: any): IBaseExecution<namedLocation>;
}
/*********************************************
* networkAdapter
**********************************************/
export interface networkAdapter extends networkAdapterProps, networkAdapterMethods { }
export interface networkAdapterProps extends  entityProps {
	isEnabled: boolean;
	name: string;
}
export interface networkAdapterMethods extends entityMethods {

}
export interface networkAdapterOData extends entityOData {

}
/*********************************************
* notebook
**********************************************/
export interface notebook extends notebookProps, notebookMethods { }
export interface notebookProps extends  onenoteEntityHierarchyModelProps {
	isDefault: boolean;
	isShared: boolean;
	links: ComplexTypes.notebookLinks;
	sectionGroupsUrl: string;
	sectionsUrl: string;
	userRole: EnumTypes.onenoteUserRole;
}
export interface notebookMethods extends onenoteEntityHierarchyModelMethods {
	sectionGroups(): sectionGroupCollection;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sections(): onenoteSectionCollection;
	sections(id: string | number): IBaseQuery<onenoteSection> & onenoteSectionMethods;
	copyNotebook(groupId, renameAs, notebookFolder, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
}
export interface notebookOData extends onenoteEntityHierarchyModelOData {
	sectionGroups: IBaseResults<sectionGroup>;
	sections: IBaseResults<onenoteSection>;
	copyNotebook(groupId, renameAs, notebookFolder, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
}
export interface notebookCollection extends IBaseCollection<notebook, notebookOData & notebookProps> {
    add(values?: any): IBaseExecution<notebook>;
}
/*********************************************
* notificationMessageTemplate
**********************************************/
export interface notificationMessageTemplate extends notificationMessageTemplateProps, notificationMessageTemplateMethods { }
export interface notificationMessageTemplateProps extends  entityProps {
	brandingOptions: EnumTypes.notificationTemplateBrandingOptions;
	defaultLocale: string;
	displayName: string;
	lastModifiedDateTime: any;
	roleScopeTagIds: Array<string>[];
}
export interface notificationMessageTemplateMethods extends entityMethods {
	localizedNotificationMessages(): localizedNotificationMessageCollection;
	localizedNotificationMessages(id: string | number): IBaseQuery<localizedNotificationMessage> & localizedNotificationMessageMethods;
	sendTestMessage(): IBaseExecution<void>;
}
export interface notificationMessageTemplateOData extends entityOData {
	localizedNotificationMessages: IBaseResults<localizedNotificationMessage>;
	sendTestMessage(): IBaseExecution<void>;
}
export interface notificationMessageTemplateCollection extends IBaseCollection<notificationMessageTemplate, notificationMessageTemplateOData & notificationMessageTemplateProps> {
    add(values?: any): IBaseExecution<notificationMessageTemplate>;
}
/*********************************************
* oAuth2PermissionGrant
**********************************************/
export interface oAuth2PermissionGrant extends oAuth2PermissionGrantProps, oAuth2PermissionGrantMethods { }
export interface oAuth2PermissionGrantProps extends  entityProps {
	clientId: string;
	consentType: string;
	principalId: string;
	resourceId: string;
	scope: string;
}
export interface oAuth2PermissionGrantMethods extends entityMethods {

}
export interface oAuth2PermissionGrantOData extends entityOData {

}
export interface oAuth2PermissionGrantCollection extends IBaseCollection<oAuth2PermissionGrant, oAuth2PermissionGrantOData & oAuth2PermissionGrantProps> {
    add(values?: any): IBaseExecution<oAuth2PermissionGrant>;
}
/*********************************************
* offerShiftRequest
**********************************************/
export interface offerShiftRequest extends offerShiftRequestProps, offerShiftRequestMethods { }
export interface offerShiftRequestProps extends  scheduleChangeRequestProps {
	recipientActionDateTime: any;
	recipientActionMessage: string;
	recipientUserId: string;
	senderShiftId: string;
}
export interface offerShiftRequestMethods extends scheduleChangeRequestMethods {

}
export interface offerShiftRequestOData extends scheduleChangeRequestOData {

}
export interface offerShiftRequestCollection extends IBaseCollection<offerShiftRequest, offerShiftRequestOData & offerShiftRequestProps> {
    add(values?: any): IBaseExecution<offerShiftRequest>;
}
/*********************************************
* officeGraphInsights
**********************************************/
export interface officeGraphInsights extends officeGraphInsightsProps, officeGraphInsightsMethods { }
export interface officeGraphInsightsProps extends  entityProps {

}
export interface officeGraphInsightsMethods extends entityMethods {
	shared(): sharedInsightCollection;
	shared(id: string | number): IBaseQuery<sharedInsight> & sharedInsightMethods;
	trending(): trendingCollection;
	trending(id: string | number): IBaseQuery<trending> & trendingMethods;
	used(): usedInsightCollection;
	used(id: string | number): IBaseQuery<usedInsight> & usedInsightMethods;
}
export interface officeGraphInsightsOData extends entityOData {
	shared: IBaseResults<sharedInsight>;
	trending: IBaseResults<trending>;
	used: IBaseResults<usedInsight>;
}
/*********************************************
* onAttributeCollectionListener
**********************************************/
export interface onAttributeCollectionListener extends onAttributeCollectionListenerProps, onAttributeCollectionListenerMethods { }
export interface onAttributeCollectionListenerProps extends  authenticationEventListenerProps {
	handler: ComplexTypes.onAttributeCollectionHandler;
}
export interface onAttributeCollectionListenerMethods extends authenticationEventListenerMethods {

}
export interface onAttributeCollectionListenerOData extends authenticationEventListenerOData {

}
/*********************************************
* onAuthenticationMethodLoadStartListener
**********************************************/
export interface onAuthenticationMethodLoadStartListener extends onAuthenticationMethodLoadStartListenerProps, onAuthenticationMethodLoadStartListenerMethods { }
export interface onAuthenticationMethodLoadStartListenerProps extends  authenticationEventListenerProps {
	handler: ComplexTypes.onAuthenticationMethodLoadStartHandler;
}
export interface onAuthenticationMethodLoadStartListenerMethods extends authenticationEventListenerMethods {

}
export interface onAuthenticationMethodLoadStartListenerOData extends authenticationEventListenerOData {

}
/*********************************************
* onInteractiveAuthFlowStartListener
**********************************************/
export interface onInteractiveAuthFlowStartListener extends onInteractiveAuthFlowStartListenerProps, onInteractiveAuthFlowStartListenerMethods { }
export interface onInteractiveAuthFlowStartListenerProps extends  authenticationEventListenerProps {
	handler: ComplexTypes.onInteractiveAuthFlowStartHandler;
}
export interface onInteractiveAuthFlowStartListenerMethods extends authenticationEventListenerMethods {

}
export interface onInteractiveAuthFlowStartListenerOData extends authenticationEventListenerOData {

}
/*********************************************
* onPremisesConditionalAccessSettings
**********************************************/
export interface onPremisesConditionalAccessSettings extends onPremisesConditionalAccessSettingsProps, onPremisesConditionalAccessSettingsMethods { }
export interface onPremisesConditionalAccessSettingsProps extends  entityProps {
	enabled: boolean;
	excludedGroups: Array<any>[];
	includedGroups: Array<any>[];
	overrideDefaultRule: boolean;
}
export interface onPremisesConditionalAccessSettingsMethods extends entityMethods {

}
export interface onPremisesConditionalAccessSettingsOData extends entityOData {

}
/*********************************************
* onPremisesDirectorySynchronization
**********************************************/
export interface onPremisesDirectorySynchronization extends onPremisesDirectorySynchronizationProps, onPremisesDirectorySynchronizationMethods { }
export interface onPremisesDirectorySynchronizationProps extends  entityProps {
	configuration: ComplexTypes.onPremisesDirectorySynchronizationConfiguration;
	features: ComplexTypes.onPremisesDirectorySynchronizationFeature;
}
export interface onPremisesDirectorySynchronizationMethods extends entityMethods {

}
export interface onPremisesDirectorySynchronizationOData extends entityOData {

}
export interface onPremisesDirectorySynchronizationCollection extends IBaseCollection<onPremisesDirectorySynchronization, onPremisesDirectorySynchronizationOData & onPremisesDirectorySynchronizationProps> {
    add(values?: any): IBaseExecution<onPremisesDirectorySynchronization>;
}
/*********************************************
* onTokenIssuanceStartCustomExtension
**********************************************/
export interface onTokenIssuanceStartCustomExtension extends onTokenIssuanceStartCustomExtensionProps, onTokenIssuanceStartCustomExtensionMethods { }
export interface onTokenIssuanceStartCustomExtensionProps extends  customAuthenticationExtensionProps {
	claimsForTokenConfiguration: ComplexTypes.onTokenIssuanceStartReturnClaim[];
}
export interface onTokenIssuanceStartCustomExtensionMethods extends customAuthenticationExtensionMethods {

}
export interface onTokenIssuanceStartCustomExtensionOData extends customAuthenticationExtensionOData {

}
/*********************************************
* onTokenIssuanceStartListener
**********************************************/
export interface onTokenIssuanceStartListener extends onTokenIssuanceStartListenerProps, onTokenIssuanceStartListenerMethods { }
export interface onTokenIssuanceStartListenerProps extends  authenticationEventListenerProps {
	handler: ComplexTypes.onTokenIssuanceStartHandler;
}
export interface onTokenIssuanceStartListenerMethods extends authenticationEventListenerMethods {

}
export interface onTokenIssuanceStartListenerOData extends authenticationEventListenerOData {

}
/*********************************************
* onUserCreateStartListener
**********************************************/
export interface onUserCreateStartListener extends onUserCreateStartListenerProps, onUserCreateStartListenerMethods { }
export interface onUserCreateStartListenerProps extends  authenticationEventListenerProps {
	handler: ComplexTypes.onUserCreateStartHandler;
}
export interface onUserCreateStartListenerMethods extends authenticationEventListenerMethods {

}
export interface onUserCreateStartListenerOData extends authenticationEventListenerOData {

}
/*********************************************
* oneDriveForBusinessProtectionPolicy
**********************************************/
export interface oneDriveForBusinessProtectionPolicy extends oneDriveForBusinessProtectionPolicyProps, oneDriveForBusinessProtectionPolicyMethods { }
export interface oneDriveForBusinessProtectionPolicyProps extends  protectionPolicyBaseProps {

}
export interface oneDriveForBusinessProtectionPolicyMethods extends protectionPolicyBaseMethods {
	driveInclusionRules(): driveProtectionRuleCollection;
	driveInclusionRules(id: string | number): IBaseQuery<driveProtectionRule> & driveProtectionRuleMethods;
	driveProtectionUnits(): driveProtectionUnitCollection;
	driveProtectionUnits(id: string | number): IBaseQuery<driveProtectionUnit> & driveProtectionUnitMethods;
}
export interface oneDriveForBusinessProtectionPolicyOData extends protectionPolicyBaseOData {
	driveInclusionRules: IBaseResults<driveProtectionRule>;
	driveProtectionUnits: IBaseResults<driveProtectionUnit>;
}
export interface oneDriveForBusinessProtectionPolicyCollection extends IBaseCollection<oneDriveForBusinessProtectionPolicy, oneDriveForBusinessProtectionPolicyOData & oneDriveForBusinessProtectionPolicyProps> {
    add(values?: any): IBaseExecution<oneDriveForBusinessProtectionPolicy>;
}
/*********************************************
* oneDriveForBusinessRestoreSession
**********************************************/
export interface oneDriveForBusinessRestoreSession extends oneDriveForBusinessRestoreSessionProps, oneDriveForBusinessRestoreSessionMethods { }
export interface oneDriveForBusinessRestoreSessionProps extends  restoreSessionBaseProps {

}
export interface oneDriveForBusinessRestoreSessionMethods extends restoreSessionBaseMethods {
	driveRestoreArtifacts(): driveRestoreArtifactCollection;
	driveRestoreArtifacts(id: string | number): IBaseQuery<driveRestoreArtifact> & driveRestoreArtifactMethods;
}
export interface oneDriveForBusinessRestoreSessionOData extends restoreSessionBaseOData {
	driveRestoreArtifacts: IBaseResults<driveRestoreArtifact>;
}
export interface oneDriveForBusinessRestoreSessionCollection extends IBaseCollection<oneDriveForBusinessRestoreSession, oneDriveForBusinessRestoreSessionOData & oneDriveForBusinessRestoreSessionProps> {
    add(values?: any): IBaseExecution<oneDriveForBusinessRestoreSession>;
}
/*********************************************
* onenote
**********************************************/
export interface onenote extends onenoteProps, onenoteMethods { }
export interface onenoteProps extends  entityProps {

}
export interface onenoteMethods extends entityMethods {
	notebooks(): notebookCollection;
	notebooks(id: string | number): IBaseQuery<notebook> & notebookMethods;
	operations(): onenoteOperationCollection;
	operations(id: string | number): IBaseQuery<onenoteOperation> & onenoteOperationMethods;
	pages(): onenotePageCollection;
	pages(id: string | number): IBaseQuery<onenotePage> & onenotePageMethods;
	resources(): onenoteResourceCollection;
	resources(id: string | number): IBaseQuery<onenoteResource> & onenoteResourceMethods;
	sectionGroups(): sectionGroupCollection;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sections(): onenoteSectionCollection;
	sections(id: string | number): IBaseQuery<onenoteSection> & onenoteSectionMethods;
}
export interface onenoteOData extends entityOData {
	notebooks: IBaseResults<notebook>;
	operations: IBaseResults<onenoteOperation>;
	pages: IBaseResults<onenotePage>;
	resources: IBaseResults<onenoteResource>;
	sectionGroups: IBaseResults<sectionGroup>;
	sections: IBaseResults<onenoteSection>;
}
/*********************************************
* onenoteEntityBaseModel
**********************************************/
export interface onenoteEntityBaseModel extends onenoteEntityBaseModelProps, onenoteEntityBaseModelMethods { }
export interface onenoteEntityBaseModelProps extends  entityProps {
	self: string;
}
export interface onenoteEntityBaseModelMethods extends entityMethods {

}
export interface onenoteEntityBaseModelOData extends entityOData {

}
/*********************************************
* onenoteEntityHierarchyModel
**********************************************/
export interface onenoteEntityHierarchyModel extends onenoteEntityHierarchyModelProps, onenoteEntityHierarchyModelMethods { }
export interface onenoteEntityHierarchyModelProps extends  onenoteEntitySchemaObjectModelProps {
	createdBy: ComplexTypes.identitySet;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface onenoteEntityHierarchyModelMethods extends onenoteEntitySchemaObjectModelMethods {

}
export interface onenoteEntityHierarchyModelOData extends onenoteEntitySchemaObjectModelOData {

}
/*********************************************
* onenoteEntitySchemaObjectModel
**********************************************/
export interface onenoteEntitySchemaObjectModel extends onenoteEntitySchemaObjectModelProps, onenoteEntitySchemaObjectModelMethods { }
export interface onenoteEntitySchemaObjectModelProps extends  onenoteEntityBaseModelProps {
	createdDateTime: any;
}
export interface onenoteEntitySchemaObjectModelMethods extends onenoteEntityBaseModelMethods {

}
export interface onenoteEntitySchemaObjectModelOData extends onenoteEntityBaseModelOData {

}
/*********************************************
* onenoteOperation
**********************************************/
export interface onenoteOperation extends onenoteOperationProps, onenoteOperationMethods { }
export interface onenoteOperationProps extends  operationProps {
	error: ComplexTypes.onenoteOperationError;
	percentComplete: string;
	resourceId: string;
	resourceLocation: string;
}
export interface onenoteOperationMethods extends operationMethods {

}
export interface onenoteOperationOData extends operationOData {

}
export interface onenoteOperationCollection extends IBaseCollection<onenoteOperation, onenoteOperationOData & onenoteOperationProps> {
    add(values?: any): IBaseExecution<onenoteOperation>;
}
/*********************************************
* onenotePage
**********************************************/
export interface onenotePage extends onenotePageProps, onenotePageMethods { }
export interface onenotePageProps extends  onenoteEntitySchemaObjectModelProps {
	content: any;
	contentUrl: string;
	createdByAppId: string;
	lastModifiedDateTime: any;
	level: number;
	links: ComplexTypes.pageLinks;
	order: number;
	title: string;
	userTags: Array<string>[];
}
export interface onenotePageMethods extends onenoteEntitySchemaObjectModelMethods {
	parentNotebook(): IBaseQuery<notebook> & notebookMethods;
	parentSection(): IBaseQuery<onenoteSection> & onenoteSectionMethods;
	copyToSection(id, groupId, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
	onenotePatchContent(commands): IBaseExecution<void>;
	preview(): ComplexTypes.onenotePagePreview;
}
export interface onenotePageOData extends onenoteEntitySchemaObjectModelOData {
	parentNotebook: notebook;
	parentSection: onenoteSection;
	copyToSection(id, groupId, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
	onenotePatchContent(commands): IBaseExecution<void>;
	preview(): ComplexTypes.onenotePagePreview;
}
export interface onenotePageCollection extends IBaseCollection<onenotePage, onenotePageOData & onenotePageProps> {
    add(values?: any): IBaseExecution<onenotePage>;
}
/*********************************************
* onenoteResource
**********************************************/
export interface onenoteResource extends onenoteResourceProps, onenoteResourceMethods { }
export interface onenoteResourceProps extends  onenoteEntityBaseModelProps {
	content: any;
	contentUrl: string;
}
export interface onenoteResourceMethods extends onenoteEntityBaseModelMethods {

}
export interface onenoteResourceOData extends onenoteEntityBaseModelOData {

}
export interface onenoteResourceCollection extends IBaseCollection<onenoteResource, onenoteResourceOData & onenoteResourceProps> {
    add(values?: any): IBaseExecution<onenoteResource>;
}
/*********************************************
* onenoteSection
**********************************************/
export interface onenoteSection extends onenoteSectionProps, onenoteSectionMethods { }
export interface onenoteSectionProps extends  onenoteEntityHierarchyModelProps {
	isDefault: boolean;
	links: ComplexTypes.sectionLinks;
	pagesUrl: string;
}
export interface onenoteSectionMethods extends onenoteEntityHierarchyModelMethods {
	pages(): onenotePageCollection;
	pages(id: string | number): IBaseQuery<onenotePage> & onenotePageMethods;
	parentNotebook(): IBaseQuery<notebook> & notebookMethods;
	parentSectionGroup(): IBaseQuery<sectionGroup> & sectionGroupMethods;
	copyToNotebook(id, groupId, renameAs, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
	copyToSectionGroup(id, groupId, renameAs, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
}
export interface onenoteSectionOData extends onenoteEntityHierarchyModelOData {
	pages: IBaseResults<onenotePage>;
	parentNotebook: notebook;
	parentSectionGroup: sectionGroup;
	copyToNotebook(id, groupId, renameAs, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
	copyToSectionGroup(id, groupId, renameAs, siteCollectionId, siteId): IBaseExecution<onenoteOperation>;
}
export interface onenoteSectionCollection extends IBaseCollection<onenoteSection, onenoteSectionOData & onenoteSectionProps> {
    add(values?: any): IBaseExecution<onenoteSection>;
}
/*********************************************
* onlineMeeting
**********************************************/
export interface onlineMeeting extends onlineMeetingProps, onlineMeetingMethods { }
export interface onlineMeetingProps extends  onlineMeetingBaseProps {
	attendeeReport: any;
	broadcastSettings: ComplexTypes.broadcastMeetingSettings;
	creationDateTime: any;
	endDateTime: any;
	externalId: string;
	isBroadcast: boolean;
	participants: ComplexTypes.meetingParticipants;
	startDateTime: any;
}
export interface onlineMeetingMethods extends onlineMeetingBaseMethods {
	recordings(): callRecordingCollection;
	recordings(id: string | number): IBaseQuery<callRecording> & callRecordingMethods;
	transcripts(): callTranscriptCollection;
	transcripts(id: string | number): IBaseQuery<callTranscript> & callTranscriptMethods;
	sendVirtualAppointmentReminderSms(remindBeforeTimeInMinutesType, attendees): IBaseExecution<void>;
	sendVirtualAppointmentSms(messageType, attendees): IBaseExecution<void>;
	getVirtualAppointmentJoinWebUrl(): string;
}
export interface onlineMeetingOData extends onlineMeetingBaseOData {
	recordings: IBaseResults<callRecording>;
	transcripts: IBaseResults<callTranscript>;
	sendVirtualAppointmentReminderSms(remindBeforeTimeInMinutesType, attendees): IBaseExecution<void>;
	sendVirtualAppointmentSms(messageType, attendees): IBaseExecution<void>;
	getVirtualAppointmentJoinWebUrl(): string;
}
export interface onlineMeetingCollection extends IBaseCollection<onlineMeeting, onlineMeetingOData & onlineMeetingProps> {
    add(values?: any): IBaseExecution<onlineMeeting>;
}
/*********************************************
* onlineMeetingBase
**********************************************/
export interface onlineMeetingBase extends onlineMeetingBaseProps, onlineMeetingBaseMethods { }
export interface onlineMeetingBaseProps extends  entityProps {
	allowAttendeeToEnableCamera: boolean;
	allowAttendeeToEnableMic: boolean;
	allowedPresenters: EnumTypes.onlineMeetingPresenters;
	allowMeetingChat: EnumTypes.meetingChatMode;
	allowParticipantsToChangeName: boolean;
	allowTeamworkReactions: boolean;
	audioConferencing: ComplexTypes.audioConferencing;
	chatInfo: ComplexTypes.chatInfo;
	isEntryExitAnnounced: boolean;
	joinInformation: ComplexTypes.itemBody;
	joinMeetingIdSettings: ComplexTypes.joinMeetingIdSettings;
	joinWebUrl: string;
	lobbyBypassSettings: ComplexTypes.lobbyBypassSettings;
	recordAutomatically: boolean;
	shareMeetingChatHistoryDefault: EnumTypes.meetingChatHistoryDefaultMode;
	subject: string;
	videoTeleconferenceId: string;
	watermarkProtection: ComplexTypes.watermarkProtectionValues;
}
export interface onlineMeetingBaseMethods extends entityMethods {
	attendanceReports(): meetingAttendanceReportCollection;
	attendanceReports(id: string | number): IBaseQuery<meetingAttendanceReport> & meetingAttendanceReportMethods;
}
export interface onlineMeetingBaseOData extends entityOData {
	attendanceReports: IBaseResults<meetingAttendanceReport>;
}
/*********************************************
* openShift
**********************************************/
export interface openShift extends openShiftProps, openShiftMethods { }
export interface openShiftProps extends  changeTrackedEntityProps {
	draftOpenShift: ComplexTypes.openShiftItem;
	schedulingGroupId: string;
	sharedOpenShift: ComplexTypes.openShiftItem;
}
export interface openShiftMethods extends changeTrackedEntityMethods {

}
export interface openShiftOData extends changeTrackedEntityOData {

}
export interface openShiftCollection extends IBaseCollection<openShift, openShiftOData & openShiftProps> {
    add(values?: any): IBaseExecution<openShift>;
}
/*********************************************
* openShiftChangeRequest
**********************************************/
export interface openShiftChangeRequest extends openShiftChangeRequestProps, openShiftChangeRequestMethods { }
export interface openShiftChangeRequestProps extends  scheduleChangeRequestProps {
	openShiftId: string;
}
export interface openShiftChangeRequestMethods extends scheduleChangeRequestMethods {

}
export interface openShiftChangeRequestOData extends scheduleChangeRequestOData {

}
export interface openShiftChangeRequestCollection extends IBaseCollection<openShiftChangeRequest, openShiftChangeRequestOData & openShiftChangeRequestProps> {
    add(values?: any): IBaseExecution<openShiftChangeRequest>;
}
/*********************************************
* openTypeExtension
**********************************************/
export interface openTypeExtension extends openTypeExtensionProps, openTypeExtensionMethods { }
export interface openTypeExtensionProps extends  extensionProps {
	extensionName: string;
}
export interface openTypeExtensionMethods extends extensionMethods {

}
export interface openTypeExtensionOData extends extensionOData {

}
/*********************************************
* operation
**********************************************/
export interface operation extends operationProps, operationMethods { }
export interface operationProps extends  entityProps {
	createdDateTime: any;
	lastActionDateTime: any;
	status: EnumTypes.longRunningOperationStatus;
}
export interface operationMethods extends entityMethods {

}
export interface operationOData extends entityOData {

}
/*********************************************
* orgContact
**********************************************/
export interface orgContact extends orgContactProps, orgContactMethods { }
export interface orgContactProps extends  directoryObjectProps {
	addresses: ComplexTypes.physicalOfficeAddress[];
	companyName: string;
	department: string;
	displayName: string;
	givenName: string;
	jobTitle: string;
	mail: string;
	mailNickname: string;
	onPremisesLastSyncDateTime: any;
	onPremisesProvisioningErrors: ComplexTypes.onPremisesProvisioningError[];
	onPremisesSyncEnabled: boolean;
	phones: ComplexTypes.phone[];
	proxyAddresses: Array<string>[];
	serviceProvisioningErrors: ComplexTypes.serviceProvisioningError[];
	surname: string;
}
export interface orgContactMethods extends directoryObjectMethods {
	directReports(): directoryObjectCollection;
	directReports(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	manager(): IBaseQuery<directoryObject> & directoryObjectMethods;
	memberOf(): directoryObjectCollection;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	transitiveMemberOf(): directoryObjectCollection;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	retryServiceProvisioning(): IBaseExecution<void>;
}
export interface orgContactOData extends directoryObjectOData {
	directReports: IBaseResults<directoryObject>;
	manager: directoryObject;
	memberOf: IBaseResults<directoryObject>;
	transitiveMemberOf: IBaseResults<directoryObject>;
	retryServiceProvisioning(): IBaseExecution<void>;
}
/*********************************************
* organization
**********************************************/
export interface organization extends organizationProps, organizationMethods { }
export interface organizationProps extends  directoryObjectProps {
	assignedPlans: ComplexTypes.assignedPlan[];
	businessPhones: Array<string>[];
	city: string;
	country: string;
	countryLetterCode: string;
	createdDateTime: any;
	defaultUsageLocation: string;
	displayName: string;
	marketingNotificationEmails: Array<string>[];
	onPremisesLastSyncDateTime: any;
	onPremisesSyncEnabled: boolean;
	partnerTenantType: EnumTypes.partnerTenantType;
	postalCode: string;
	preferredLanguage: string;
	privacyProfile: ComplexTypes.privacyProfile;
	provisionedPlans: ComplexTypes.provisionedPlan[];
	securityComplianceNotificationMails: Array<string>[];
	securityComplianceNotificationPhones: Array<string>[];
	state: string;
	street: string;
	technicalNotificationMails: Array<string>[];
	tenantType: string;
	verifiedDomains: ComplexTypes.verifiedDomain[];
	mobileDeviceManagementAuthority: EnumTypes.mdmAuthority;
}
export interface organizationMethods extends directoryObjectMethods {
	branding(): IBaseQuery<organizationalBranding> & organizationalBrandingMethods;
	certificateBasedAuthConfiguration(): certificateBasedAuthConfigurationCollection;
	certificateBasedAuthConfiguration(id: string | number): IBaseQuery<certificateBasedAuthConfiguration> & certificateBasedAuthConfigurationMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	setMobileDeviceManagementAuthority(): IBaseExecution<number>;
}
export interface organizationOData extends directoryObjectOData {
	branding: organizationalBranding;
	certificateBasedAuthConfiguration: IBaseResults<certificateBasedAuthConfiguration>;
	extensions: IBaseResults<extension>;
	setMobileDeviceManagementAuthority(): IBaseExecution<number>;
}
/*********************************************
* organizationalBranding
**********************************************/
export interface organizationalBranding extends organizationalBrandingProps, organizationalBrandingMethods { }
export interface organizationalBrandingProps extends  organizationalBrandingPropertiesProps {

}
export interface organizationalBrandingMethods extends organizationalBrandingPropertiesMethods {
	localizations(): organizationalBrandingLocalizationCollection;
	localizations(id: string | number): IBaseQuery<organizationalBrandingLocalization> & organizationalBrandingLocalizationMethods;
}
export interface organizationalBrandingOData extends organizationalBrandingPropertiesOData {
	localizations: IBaseResults<organizationalBrandingLocalization>;
}
/*********************************************
* organizationalBrandingLocalization
**********************************************/
export interface organizationalBrandingLocalization extends organizationalBrandingLocalizationProps, organizationalBrandingLocalizationMethods { }
export interface organizationalBrandingLocalizationProps extends  organizationalBrandingPropertiesProps {

}
export interface organizationalBrandingLocalizationMethods extends organizationalBrandingPropertiesMethods {

}
export interface organizationalBrandingLocalizationOData extends organizationalBrandingPropertiesOData {

}
export interface organizationalBrandingLocalizationCollection extends IBaseCollection<organizationalBrandingLocalization, organizationalBrandingLocalizationOData & organizationalBrandingLocalizationProps> {
    add(values?: any): IBaseExecution<organizationalBrandingLocalization>;
}
/*********************************************
* organizationalBrandingProperties
**********************************************/
export interface organizationalBrandingProperties extends organizationalBrandingPropertiesProps, organizationalBrandingPropertiesMethods { }
export interface organizationalBrandingPropertiesProps extends  entityProps {
	backgroundColor: string;
	backgroundImage: any;
	backgroundImageRelativeUrl: string;
	bannerLogo: any;
	bannerLogoRelativeUrl: string;
	cdnList: Array<string>[];
	contentCustomization: ComplexTypes.contentCustomization;
	customAccountResetCredentialsUrl: string;
	customCannotAccessYourAccountText: string;
	customCannotAccessYourAccountUrl: string;
	customCSS: any;
	customCSSRelativeUrl: string;
	customForgotMyPasswordText: string;
	customPrivacyAndCookiesText: string;
	customPrivacyAndCookiesUrl: string;
	customResetItNowText: string;
	customTermsOfUseText: string;
	customTermsOfUseUrl: string;
	favicon: any;
	faviconRelativeUrl: string;
	headerBackgroundColor: string;
	headerLogo: any;
	headerLogoRelativeUrl: string;
	loginPageLayoutConfiguration: ComplexTypes.loginPageLayoutConfiguration;
	loginPageTextVisibilitySettings: ComplexTypes.loginPageTextVisibilitySettings;
	signInPageText: string;
	squareLogo: any;
	squareLogoDark: any;
	squareLogoDarkRelativeUrl: string;
	squareLogoRelativeUrl: string;
	usernameHintText: string;
}
export interface organizationalBrandingPropertiesMethods extends entityMethods {

}
export interface organizationalBrandingPropertiesOData extends entityOData {

}
/*********************************************
* organizer
**********************************************/
export interface organizer extends organizerProps, organizerMethods { }
export interface organizerProps extends  participantBaseProps {

}
export interface organizerMethods extends participantBaseMethods {

}
export interface organizerOData extends participantBaseOData {

}
/*********************************************
* outlookCategory
**********************************************/
export interface outlookCategory extends outlookCategoryProps, outlookCategoryMethods { }
export interface outlookCategoryProps extends  entityProps {
	color: EnumTypes.categoryColor;
	displayName: string;
}
export interface outlookCategoryMethods extends entityMethods {

}
export interface outlookCategoryOData extends entityOData {

}
export interface outlookCategoryCollection extends IBaseCollection<outlookCategory, outlookCategoryOData & outlookCategoryProps> {
    add(values?: any): IBaseExecution<outlookCategory>;
}
/*********************************************
* outlookItem
**********************************************/
export interface outlookItem extends outlookItemProps, outlookItemMethods { }
export interface outlookItemProps extends  entityProps {
	categories: Array<string>[];
	changeKey: string;
	createdDateTime: any;
	lastModifiedDateTime: any;
}
export interface outlookItemMethods extends entityMethods {

}
export interface outlookItemOData extends entityOData {

}
/*********************************************
* outlookUser
**********************************************/
export interface outlookUser extends outlookUserProps, outlookUserMethods { }
export interface outlookUserProps extends  entityProps {

}
export interface outlookUserMethods extends entityMethods {
	masterCategories(): outlookCategoryCollection;
	masterCategories(id: string | number): IBaseQuery<outlookCategory> & outlookCategoryMethods;
}
export interface outlookUserOData extends entityOData {
	masterCategories: IBaseResults<outlookCategory>;
}
/*********************************************
* participant
**********************************************/
export interface participant extends participantProps, participantMethods { }
export interface participantProps extends  participantBaseProps {

}
export interface participantMethods extends participantBaseMethods {
	mute(clientContext): IBaseExecution<muteParticipantOperation>;
	startHoldMusic(customPrompt, clientContext): IBaseExecution<startHoldMusicOperation>;
	stopHoldMusic(clientContext): IBaseExecution<stopHoldMusicOperation>;
}
export interface participantOData extends participantBaseOData {
	mute(clientContext): IBaseExecution<muteParticipantOperation>;
	startHoldMusic(customPrompt, clientContext): IBaseExecution<startHoldMusicOperation>;
	stopHoldMusic(clientContext): IBaseExecution<stopHoldMusicOperation>;
}
export interface participantCollection extends IBaseCollection<participant, participantOData & participantProps> {
    add(values?: any): IBaseExecution<participant>;
}
/*********************************************
* participantBase
**********************************************/
export interface participantBase extends participantBaseProps, participantBaseMethods { }
export interface participantBaseProps extends  entityProps {
	administrativeUnitInfos: ComplexTypes.administrativeUnitInfo[];
	identity: ComplexTypes.communicationsIdentitySet;
}
export interface participantBaseMethods extends entityMethods {

}
export interface participantBaseOData extends entityOData {

}
/*********************************************
* participantJoiningNotification
**********************************************/
export interface participantJoiningNotification extends participantJoiningNotificationProps, participantJoiningNotificationMethods { }
export interface participantJoiningNotificationProps extends  entityProps {

}
export interface participantJoiningNotificationMethods extends entityMethods {
	call(): IBaseQuery<call> & callMethods;
}
export interface participantJoiningNotificationOData extends entityOData {
	call: call;
}
/*********************************************
* participantLeftNotification
**********************************************/
export interface participantLeftNotification extends participantLeftNotificationProps, participantLeftNotificationMethods { }
export interface participantLeftNotificationProps extends  entityProps {
	participantId: string;
}
export interface participantLeftNotificationMethods extends entityMethods {
	call(): IBaseQuery<call> & callMethods;
}
export interface participantLeftNotificationOData extends entityOData {
	call: call;
}
/*********************************************
* partners
**********************************************/
export interface partners extends partnersProps, partnersMethods { }
export interface partnersProps extends  entityProps {

}
export interface partnersMethods extends entityMethods {
	billing(): IBaseQuery<billing> & billingMethods;
}
export interface partnersOData extends entityOData {
	billing: billing;
}
/*********************************************
* passiveDnsRecord
**********************************************/
export interface passiveDnsRecord extends passiveDnsRecordProps, passiveDnsRecordMethods { }
export interface passiveDnsRecordProps extends  artifactProps {
	collectedDateTime: any;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	recordType: string;
}
export interface passiveDnsRecordMethods extends artifactMethods {
	artifact(): IBaseQuery<artifact> & artifactMethods;
	parentHost(): IBaseQuery<host> & hostMethods;
}
export interface passiveDnsRecordOData extends artifactOData {
	artifact: artifact;
	parentHost: host;
}
/*********************************************
* passwordAuthenticationMethod
**********************************************/
export interface passwordAuthenticationMethod extends passwordAuthenticationMethodProps, passwordAuthenticationMethodMethods { }
export interface passwordAuthenticationMethodProps extends  authenticationMethodProps {
	createdDateTime: any;
	password: string;
}
export interface passwordAuthenticationMethodMethods extends authenticationMethodMethods {

}
export interface passwordAuthenticationMethodOData extends authenticationMethodOData {

}
export interface passwordAuthenticationMethodCollection extends IBaseCollection<passwordAuthenticationMethod, passwordAuthenticationMethodOData & passwordAuthenticationMethodProps> {
    add(values?: any): IBaseExecution<passwordAuthenticationMethod>;
}
/*********************************************
* payload
**********************************************/
export interface payload extends payloadProps, payloadMethods { }
export interface payloadProps extends  entityProps {
	brand: EnumTypes.payloadBrand;
	complexity: EnumTypes.payloadComplexity;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	detail: ComplexTypes.payloadDetail;
	displayName: string;
	industry: EnumTypes.payloadIndustry;
	isAutomated: boolean;
	isControversial: boolean;
	isCurrentEvent: boolean;
	language: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	payloadTags: Array<string>[];
	platform: EnumTypes.payloadDeliveryPlatform;
	predictedCompromiseRate: number;
	simulationAttackType: EnumTypes.simulationAttackType;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
	technique: EnumTypes.simulationAttackTechnique;
	theme: EnumTypes.payloadTheme;
}
export interface payloadMethods extends entityMethods {

}
export interface payloadOData extends entityOData {

}
export interface payloadCollection extends IBaseCollection<payload, payloadOData & payloadProps> {
    add(values?: any): IBaseExecution<payload>;
}
/*********************************************
* peopleAdminSettings
**********************************************/
export interface peopleAdminSettings extends peopleAdminSettingsProps, peopleAdminSettingsMethods { }
export interface peopleAdminSettingsProps extends  entityProps {

}
export interface peopleAdminSettingsMethods extends entityMethods {
	profileCardProperties(): profileCardPropertyCollection;
	profileCardProperties(id: string | number): IBaseQuery<profileCardProperty> & profileCardPropertyMethods;
	pronouns(): IBaseQuery<pronounsSettings> & pronounsSettingsMethods;
	itemInsights(): IBaseQuery<insightsSettings> & insightsSettingsMethods;
}
export interface peopleAdminSettingsOData extends entityOData {
	profileCardProperties: IBaseResults<profileCardProperty>;
	pronouns: pronounsSettings;
	itemInsights: insightsSettings;
}
/*********************************************
* permission
**********************************************/
export interface permission extends permissionProps, permissionMethods { }
export interface permissionProps extends  entityProps {
	expirationDateTime: any;
	grantedTo: ComplexTypes.identitySet;
	grantedToIdentities: ComplexTypes.identitySet[];
	grantedToIdentitiesV2: ComplexTypes.sharePointIdentitySet[];
	grantedToV2: ComplexTypes.sharePointIdentitySet;
	hasPassword: boolean;
	inheritedFrom: ComplexTypes.itemReference;
	invitation: ComplexTypes.sharingInvitation;
	link: ComplexTypes.sharingLink;
	roles: Array<string>[];
	shareId: string;
}
export interface permissionMethods extends entityMethods {
	update(values: any): IBaseExecution<void>;
	grant(roles, recipients): IBaseExecution<permission[]>;
}
export interface permissionOData extends entityOData {
	update(values: any): IBaseExecution<void>;
	grant(roles, recipients): IBaseExecution<permission[]>;
}
export interface permissionCollection extends IBaseCollection<permission, permissionOData & permissionProps> {
    add(values?: any): IBaseExecution<permission>;
}
/*********************************************
* permissionGrantConditionSet
**********************************************/
export interface permissionGrantConditionSet extends permissionGrantConditionSetProps, permissionGrantConditionSetMethods { }
export interface permissionGrantConditionSetProps extends  entityProps {
	clientApplicationIds: Array<string>[];
	clientApplicationPublisherIds: Array<string>[];
	clientApplicationsFromVerifiedPublisherOnly: boolean;
	clientApplicationTenantIds: Array<string>[];
	permissionClassification: string;
	permissions: Array<string>[];
	permissionType: EnumTypes.permissionType;
	resourceApplication: string;
}
export interface permissionGrantConditionSetMethods extends entityMethods {

}
export interface permissionGrantConditionSetOData extends entityOData {

}
export interface permissionGrantConditionSetCollection extends IBaseCollection<permissionGrantConditionSet, permissionGrantConditionSetOData & permissionGrantConditionSetProps> {
    add(values?: any): IBaseExecution<permissionGrantConditionSet>;
}
/*********************************************
* permissionGrantPolicy
**********************************************/
export interface permissionGrantPolicy extends permissionGrantPolicyProps, permissionGrantPolicyMethods { }
export interface permissionGrantPolicyProps extends  policyBaseProps {

}
export interface permissionGrantPolicyMethods extends policyBaseMethods {
	excludes(): permissionGrantConditionSetCollection;
	excludes(id: string | number): IBaseQuery<permissionGrantConditionSet> & permissionGrantConditionSetMethods;
	includes(): permissionGrantConditionSetCollection;
	includes(id: string | number): IBaseQuery<permissionGrantConditionSet> & permissionGrantConditionSetMethods;
}
export interface permissionGrantPolicyOData extends policyBaseOData {
	excludes: IBaseResults<permissionGrantConditionSet>;
	includes: IBaseResults<permissionGrantConditionSet>;
}
export interface permissionGrantPolicyCollection extends IBaseCollection<permissionGrantPolicy, permissionGrantPolicyOData & permissionGrantPolicyProps> {
    add(values?: any): IBaseExecution<permissionGrantPolicy>;
}
/*********************************************
* person
**********************************************/
export interface person extends personProps, personMethods { }
export interface personProps extends  entityProps {
	birthday: string;
	companyName: string;
	department: string;
	displayName: string;
	givenName: string;
	imAddress: string;
	isFavorite: boolean;
	jobTitle: string;
	officeLocation: string;
	personNotes: string;
	personType: ComplexTypes.personType;
	phones: ComplexTypes.phone[];
	postalAddresses: ComplexTypes.location[];
	profession: string;
	scoredEmailAddresses: ComplexTypes.scoredEmailAddress[];
	surname: string;
	userPrincipalName: string;
	websites: ComplexTypes.website[];
	yomiCompany: string;
}
export interface personMethods extends entityMethods {

}
export interface personOData extends entityOData {

}
export interface personCollection extends IBaseCollection<person, personOData & personProps> {
    add(values?: any): IBaseExecution<person>;
}
/*********************************************
* phoneAuthenticationMethod
**********************************************/
export interface phoneAuthenticationMethod extends phoneAuthenticationMethodProps, phoneAuthenticationMethodMethods { }
export interface phoneAuthenticationMethodProps extends  authenticationMethodProps {
	phoneNumber: string;
	phoneType: EnumTypes.authenticationPhoneType;
	smsSignInState: EnumTypes.authenticationMethodSignInState;
}
export interface phoneAuthenticationMethodMethods extends authenticationMethodMethods {
	disableSmsSignIn(): IBaseExecution<void>;
	enableSmsSignIn(): IBaseExecution<void>;
}
export interface phoneAuthenticationMethodOData extends authenticationMethodOData {
	disableSmsSignIn(): IBaseExecution<void>;
	enableSmsSignIn(): IBaseExecution<void>;
}
export interface phoneAuthenticationMethodCollection extends IBaseCollection<phoneAuthenticationMethod, phoneAuthenticationMethodOData & phoneAuthenticationMethodProps> {
    add(values?: any): IBaseExecution<phoneAuthenticationMethod>;
}
/*********************************************
* pinnedChatMessageInfo
**********************************************/
export interface pinnedChatMessageInfo extends pinnedChatMessageInfoProps, pinnedChatMessageInfoMethods { }
export interface pinnedChatMessageInfoProps extends  entityProps {

}
export interface pinnedChatMessageInfoMethods extends entityMethods {
	message(): IBaseQuery<chatMessage> & chatMessageMethods;
}
export interface pinnedChatMessageInfoOData extends entityOData {
	message: chatMessage;
}
export interface pinnedChatMessageInfoCollection extends IBaseCollection<pinnedChatMessageInfo, pinnedChatMessageInfoOData & pinnedChatMessageInfoProps> {
    add(values?: any): IBaseExecution<pinnedChatMessageInfo>;
}
/*********************************************
* place
**********************************************/
export interface place extends placeProps, placeMethods { }
export interface placeProps extends  entityProps {
	address: ComplexTypes.physicalAddress;
	displayName: string;
	geoCoordinates: ComplexTypes.outlookGeoCoordinates;
	phone: string;
}
export interface placeMethods extends entityMethods {

}
export interface placeOData extends entityOData {

}
/*********************************************
* planner
**********************************************/
export interface planner extends plannerProps, plannerMethods { }
export interface plannerProps extends  entityProps {

}
export interface plannerMethods extends entityMethods {
	buckets(): plannerBucketCollection;
	buckets(id: string | number): IBaseQuery<plannerBucket> & plannerBucketMethods;
	plans(): plannerPlanCollection;
	plans(id: string | number): IBaseQuery<plannerPlan> & plannerPlanMethods;
	tasks(): plannerTaskCollection;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
}
export interface plannerOData extends entityOData {
	buckets: IBaseResults<plannerBucket>;
	plans: IBaseResults<plannerPlan>;
	tasks: IBaseResults<plannerTask>;
}
/*********************************************
* plannerAssignedToTaskBoardTaskFormat
**********************************************/
export interface plannerAssignedToTaskBoardTaskFormat extends plannerAssignedToTaskBoardTaskFormatProps, plannerAssignedToTaskBoardTaskFormatMethods { }
export interface plannerAssignedToTaskBoardTaskFormatProps extends  entityProps {
	orderHintsByAssignee: ComplexTypes.plannerOrderHintsByAssignee;
	unassignedOrderHint: string;
}
export interface plannerAssignedToTaskBoardTaskFormatMethods extends entityMethods {

}
export interface plannerAssignedToTaskBoardTaskFormatOData extends entityOData {

}
/*********************************************
* plannerBucket
**********************************************/
export interface plannerBucket extends plannerBucketProps, plannerBucketMethods { }
export interface plannerBucketProps extends  entityProps {
	name: string;
	orderHint: string;
	planId: string;
}
export interface plannerBucketMethods extends entityMethods {
	tasks(): plannerTaskCollection;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
}
export interface plannerBucketOData extends entityOData {
	tasks: IBaseResults<plannerTask>;
}
export interface plannerBucketCollection extends IBaseCollection<plannerBucket, plannerBucketOData & plannerBucketProps> {
    add(values?: any): IBaseExecution<plannerBucket>;
}
/*********************************************
* plannerBucketTaskBoardTaskFormat
**********************************************/
export interface plannerBucketTaskBoardTaskFormat extends plannerBucketTaskBoardTaskFormatProps, plannerBucketTaskBoardTaskFormatMethods { }
export interface plannerBucketTaskBoardTaskFormatProps extends  entityProps {
	orderHint: string;
}
export interface plannerBucketTaskBoardTaskFormatMethods extends entityMethods {

}
export interface plannerBucketTaskBoardTaskFormatOData extends entityOData {

}
/*********************************************
* plannerGroup
**********************************************/
export interface plannerGroup extends plannerGroupProps, plannerGroupMethods { }
export interface plannerGroupProps extends  entityProps {

}
export interface plannerGroupMethods extends entityMethods {
	plans(): plannerPlanCollection;
	plans(id: string | number): IBaseQuery<plannerPlan> & plannerPlanMethods;
}
export interface plannerGroupOData extends entityOData {
	plans: IBaseResults<plannerPlan>;
}
/*********************************************
* plannerPlan
**********************************************/
export interface plannerPlan extends plannerPlanProps, plannerPlanMethods { }
export interface plannerPlanProps extends  entityProps {
	container: ComplexTypes.plannerPlanContainer;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	owner: string;
	title: string;
}
export interface plannerPlanMethods extends entityMethods {
	buckets(): plannerBucketCollection;
	buckets(id: string | number): IBaseQuery<plannerBucket> & plannerBucketMethods;
	details(): IBaseQuery<plannerPlanDetails> & plannerPlanDetailsMethods;
	tasks(): plannerTaskCollection;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
}
export interface plannerPlanOData extends entityOData {
	buckets: IBaseResults<plannerBucket>;
	details: plannerPlanDetails;
	tasks: IBaseResults<plannerTask>;
}
export interface plannerPlanCollection extends IBaseCollection<plannerPlan, plannerPlanOData & plannerPlanProps> {
    add(values?: any): IBaseExecution<plannerPlan>;
}
/*********************************************
* plannerPlanDetails
**********************************************/
export interface plannerPlanDetails extends plannerPlanDetailsProps, plannerPlanDetailsMethods { }
export interface plannerPlanDetailsProps extends  entityProps {
	categoryDescriptions: ComplexTypes.plannerCategoryDescriptions;
	sharedWith: ComplexTypes.plannerUserIds;
}
export interface plannerPlanDetailsMethods extends entityMethods {

}
export interface plannerPlanDetailsOData extends entityOData {

}
/*********************************************
* plannerProgressTaskBoardTaskFormat
**********************************************/
export interface plannerProgressTaskBoardTaskFormat extends plannerProgressTaskBoardTaskFormatProps, plannerProgressTaskBoardTaskFormatMethods { }
export interface plannerProgressTaskBoardTaskFormatProps extends  entityProps {
	orderHint: string;
}
export interface plannerProgressTaskBoardTaskFormatMethods extends entityMethods {

}
export interface plannerProgressTaskBoardTaskFormatOData extends entityOData {

}
/*********************************************
* plannerTask
**********************************************/
export interface plannerTask extends plannerTaskProps, plannerTaskMethods { }
export interface plannerTaskProps extends  entityProps {
	activeChecklistItemCount: number;
	appliedCategories: ComplexTypes.plannerAppliedCategories;
	assigneePriority: string;
	assignments: ComplexTypes.plannerAssignments;
	bucketId: string;
	checklistItemCount: number;
	completedBy: ComplexTypes.identitySet;
	completedDateTime: any;
	conversationThreadId: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	dueDateTime: any;
	hasDescription: boolean;
	orderHint: string;
	percentComplete: number;
	planId: string;
	previewType: EnumTypes.plannerPreviewType;
	priority: number;
	referenceCount: number;
	startDateTime: any;
	title: string;
}
export interface plannerTaskMethods extends entityMethods {
	assignedToTaskBoardFormat(): IBaseQuery<plannerAssignedToTaskBoardTaskFormat> & plannerAssignedToTaskBoardTaskFormatMethods;
	bucketTaskBoardFormat(): IBaseQuery<plannerBucketTaskBoardTaskFormat> & plannerBucketTaskBoardTaskFormatMethods;
	details(): IBaseQuery<plannerTaskDetails> & plannerTaskDetailsMethods;
	progressTaskBoardFormat(): IBaseQuery<plannerProgressTaskBoardTaskFormat> & plannerProgressTaskBoardTaskFormatMethods;
}
export interface plannerTaskOData extends entityOData {
	assignedToTaskBoardFormat: plannerAssignedToTaskBoardTaskFormat;
	bucketTaskBoardFormat: plannerBucketTaskBoardTaskFormat;
	details: plannerTaskDetails;
	progressTaskBoardFormat: plannerProgressTaskBoardTaskFormat;
}
export interface plannerTaskCollection extends IBaseCollection<plannerTask, plannerTaskOData & plannerTaskProps> {
    add(values?: any): IBaseExecution<plannerTask>;
}
/*********************************************
* plannerTaskDetails
**********************************************/
export interface plannerTaskDetails extends plannerTaskDetailsProps, plannerTaskDetailsMethods { }
export interface plannerTaskDetailsProps extends  entityProps {
	checklist: ComplexTypes.plannerChecklistItems;
	description: string;
	previewType: EnumTypes.plannerPreviewType;
	references: ComplexTypes.plannerExternalReferences;
}
export interface plannerTaskDetailsMethods extends entityMethods {

}
export interface plannerTaskDetailsOData extends entityOData {

}
/*********************************************
* plannerUser
**********************************************/
export interface plannerUser extends plannerUserProps, plannerUserMethods { }
export interface plannerUserProps extends  entityProps {

}
export interface plannerUserMethods extends entityMethods {
	plans(): plannerPlanCollection;
	plans(id: string | number): IBaseQuery<plannerPlan> & plannerPlanMethods;
	tasks(): plannerTaskCollection;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
}
export interface plannerUserOData extends entityOData {
	plans: IBaseResults<plannerPlan>;
	tasks: IBaseResults<plannerTask>;
}
/*********************************************
* playPromptOperation
**********************************************/
export interface playPromptOperation extends playPromptOperationProps, playPromptOperationMethods { }
export interface playPromptOperationProps extends  commsOperationProps {

}
export interface playPromptOperationMethods extends commsOperationMethods {

}
export interface playPromptOperationOData extends commsOperationOData {

}
/*********************************************
* policyBase
**********************************************/
export interface policyBase extends policyBaseProps, policyBaseMethods { }
export interface policyBaseProps extends  directoryObjectProps {
	description: string;
	displayName: string;
}
export interface policyBaseMethods extends directoryObjectMethods {

}
export interface policyBaseOData extends directoryObjectOData {

}
/*********************************************
* policyRoot
**********************************************/
export interface policyRoot extends policyRootProps, policyRootMethods { }
export interface policyRootProps extends  entityProps {

}
export interface policyRootMethods extends entityMethods {
	authenticationMethodsPolicy(): IBaseQuery<authenticationMethodsPolicy> & authenticationMethodsPolicyMethods;
	authenticationStrengthPolicies(): authenticationStrengthPolicyCollection;
	authenticationStrengthPolicies(id: string | number): IBaseQuery<authenticationStrengthPolicy> & authenticationStrengthPolicyMethods;
	authenticationFlowsPolicy(): IBaseQuery<authenticationFlowsPolicy> & authenticationFlowsPolicyMethods;
	deviceRegistrationPolicy(): IBaseQuery<deviceRegistrationPolicy> & deviceRegistrationPolicyMethods;
	activityBasedTimeoutPolicies(): activityBasedTimeoutPolicyCollection;
	activityBasedTimeoutPolicies(id: string | number): IBaseQuery<activityBasedTimeoutPolicy> & activityBasedTimeoutPolicyMethods;
	appManagementPolicies(): appManagementPolicyCollection;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy> & appManagementPolicyMethods;
	authorizationPolicy(): IBaseQuery<authorizationPolicy> & authorizationPolicyMethods;
	claimsMappingPolicies(): claimsMappingPolicyCollection;
	claimsMappingPolicies(id: string | number): IBaseQuery<claimsMappingPolicy> & claimsMappingPolicyMethods;
	crossTenantAccessPolicy(): IBaseQuery<crossTenantAccessPolicy> & crossTenantAccessPolicyMethods;
	defaultAppManagementPolicy(): IBaseQuery<tenantAppManagementPolicy> & tenantAppManagementPolicyMethods;
	homeRealmDiscoveryPolicies(): homeRealmDiscoveryPolicyCollection;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy> & homeRealmDiscoveryPolicyMethods;
	permissionGrantPolicies(): permissionGrantPolicyCollection;
	permissionGrantPolicies(id: string | number): IBaseQuery<permissionGrantPolicy> & permissionGrantPolicyMethods;
	tokenIssuancePolicies(): tokenIssuancePolicyCollection;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy> & tokenIssuancePolicyMethods;
	tokenLifetimePolicies(): tokenLifetimePolicyCollection;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy> & tokenLifetimePolicyMethods;
	featureRolloutPolicies(): featureRolloutPolicyCollection;
	featureRolloutPolicies(id: string | number): IBaseQuery<featureRolloutPolicy> & featureRolloutPolicyMethods;
	adminConsentRequestPolicy(): IBaseQuery<adminConsentRequestPolicy> & adminConsentRequestPolicyMethods;
	conditionalAccessPolicies(): conditionalAccessPolicyCollection;
	conditionalAccessPolicies(id: string | number): IBaseQuery<conditionalAccessPolicy> & conditionalAccessPolicyMethods;
	identitySecurityDefaultsEnforcementPolicy(): IBaseQuery<identitySecurityDefaultsEnforcementPolicy> & identitySecurityDefaultsEnforcementPolicyMethods;
	roleManagementPolicies(): unifiedRoleManagementPolicyCollection;
	roleManagementPolicies(id: string | number): IBaseQuery<unifiedRoleManagementPolicy> & unifiedRoleManagementPolicyMethods;
	roleManagementPolicyAssignments(): unifiedRoleManagementPolicyAssignmentCollection;
	roleManagementPolicyAssignments(id: string | number): IBaseQuery<unifiedRoleManagementPolicyAssignment> & unifiedRoleManagementPolicyAssignmentMethods;
}
export interface policyRootOData extends entityOData {
	authenticationMethodsPolicy: authenticationMethodsPolicy;
	authenticationStrengthPolicies: IBaseResults<authenticationStrengthPolicy>;
	authenticationFlowsPolicy: authenticationFlowsPolicy;
	deviceRegistrationPolicy: deviceRegistrationPolicy;
	activityBasedTimeoutPolicies: IBaseResults<activityBasedTimeoutPolicy>;
	appManagementPolicies: IBaseResults<appManagementPolicy>;
	authorizationPolicy: authorizationPolicy;
	claimsMappingPolicies: IBaseResults<claimsMappingPolicy>;
	crossTenantAccessPolicy: crossTenantAccessPolicy;
	defaultAppManagementPolicy: tenantAppManagementPolicy;
	homeRealmDiscoveryPolicies: IBaseResults<homeRealmDiscoveryPolicy>;
	permissionGrantPolicies: IBaseResults<permissionGrantPolicy>;
	tokenIssuancePolicies: IBaseResults<tokenIssuancePolicy>;
	tokenLifetimePolicies: IBaseResults<tokenLifetimePolicy>;
	featureRolloutPolicies: IBaseResults<featureRolloutPolicy>;
	adminConsentRequestPolicy: adminConsentRequestPolicy;
	conditionalAccessPolicies: IBaseResults<conditionalAccessPolicy>;
	identitySecurityDefaultsEnforcementPolicy: identitySecurityDefaultsEnforcementPolicy;
	roleManagementPolicies: IBaseResults<unifiedRoleManagementPolicy>;
	roleManagementPolicyAssignments: IBaseResults<unifiedRoleManagementPolicyAssignment>;
}
/*********************************************
* policyTemplate
**********************************************/
export interface policyTemplate extends policyTemplateProps, policyTemplateMethods { }
export interface policyTemplateProps extends  entityProps {

}
export interface policyTemplateMethods extends entityMethods {
	multiTenantOrganizationIdentitySynchronization(): IBaseQuery<multiTenantOrganizationIdentitySyncPolicyTemplate> & multiTenantOrganizationIdentitySyncPolicyTemplateMethods;
	multiTenantOrganizationPartnerConfiguration(): IBaseQuery<multiTenantOrganizationPartnerConfigurationTemplate> & multiTenantOrganizationPartnerConfigurationTemplateMethods;
}
export interface policyTemplateOData extends entityOData {
	multiTenantOrganizationIdentitySynchronization: multiTenantOrganizationIdentitySyncPolicyTemplate;
	multiTenantOrganizationPartnerConfiguration: multiTenantOrganizationPartnerConfigurationTemplate;
}
/*********************************************
* post
**********************************************/
export interface post extends postProps, postMethods { }
export interface postProps extends  outlookItemProps {
	body: ComplexTypes.itemBody;
	conversationId: string;
	conversationThreadId: string;
	from: ComplexTypes.recipient;
	hasAttachments: boolean;
	newParticipants: ComplexTypes.recipient[];
	receivedDateTime: any;
	sender: ComplexTypes.recipient;
}
export interface postMethods extends outlookItemMethods {
	attachments(): attachmentCollection;
	attachments(id: string | number): IBaseQuery<attachment> & attachmentMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	inReplyTo(): IBaseQuery<post> & postMethods;
	multiValueExtendedProperties(): multiValueLegacyExtendedPropertyCollection;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): singleValueLegacyExtendedPropertyCollection;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
	forward(Comment, ToRecipients): IBaseExecution<void>;
	reply(Post): IBaseExecution<void>;
}
export interface postOData extends outlookItemOData {
	attachments: IBaseResults<attachment>;
	extensions: IBaseResults<extension>;
	inReplyTo: post;
	multiValueExtendedProperties: IBaseResults<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties: IBaseResults<singleValueLegacyExtendedProperty>;
	forward(Comment, ToRecipients): IBaseExecution<void>;
	reply(Post): IBaseExecution<void>;
}
export interface postCollection extends IBaseCollection<post, postOData & postProps> {
    add(values?: any): IBaseExecution<post>;
}
/*********************************************
* presence
**********************************************/
export interface presence extends presenceProps, presenceMethods { }
export interface presenceProps extends  entityProps {
	activity: string;
	availability: string;
	statusMessage: ComplexTypes.presenceStatusMessage;
}
export interface presenceMethods extends entityMethods {
	clearPresence(sessionId): IBaseExecution<void>;
	clearUserPreferredPresence(): IBaseExecution<void>;
	setPresence(sessionId, availability, activity, expirationDuration): IBaseExecution<void>;
	setStatusMessage(statusMessage): IBaseExecution<void>;
	setUserPreferredPresence(availability, activity, expirationDuration): IBaseExecution<void>;
}
export interface presenceOData extends entityOData {
	clearPresence(sessionId): IBaseExecution<void>;
	clearUserPreferredPresence(): IBaseExecution<void>;
	setPresence(sessionId, availability, activity, expirationDuration): IBaseExecution<void>;
	setStatusMessage(statusMessage): IBaseExecution<void>;
	setUserPreferredPresence(availability, activity, expirationDuration): IBaseExecution<void>;
}
export interface presenceCollection extends IBaseCollection<presence, presenceOData & presenceProps> {
    add(values?: any): IBaseExecution<presence>;
}
/*********************************************
* print
**********************************************/
export interface print extends printProps, printMethods { }
export interface printProps   {
	settings: ComplexTypes.printSettings;
}
export interface printMethods {
	connectors(): printConnectorCollection;
	connectors(id: string | number): IBaseQuery<printConnector> & printConnectorMethods;
	operations(): printOperationCollection;
	operations(id: string | number): IBaseQuery<printOperation> & printOperationMethods;
	printers(): printerCollection;
	printers(id: string | number): IBaseQuery<printer> & printerMethods;
	services(): printServiceCollection;
	services(id: string | number): IBaseQuery<printService> & printServiceMethods;
	shares(): printerShareCollection;
	shares(id: string | number): IBaseQuery<printerShare> & printerShareMethods;
	taskDefinitions(): printTaskDefinitionCollection;
	taskDefinitions(id: string | number): IBaseQuery<printTaskDefinition> & printTaskDefinitionMethods;
}
export interface printOData {
	connectors: IBaseResults<printConnector>;
	operations: IBaseResults<printOperation>;
	printers: IBaseResults<printer>;
	services: IBaseResults<printService>;
	shares: IBaseResults<printerShare>;
	taskDefinitions: IBaseResults<printTaskDefinition>;
}
/*********************************************
* printConnector
**********************************************/
export interface printConnector extends printConnectorProps, printConnectorMethods { }
export interface printConnectorProps extends  entityProps {
	appVersion: string;
	displayName: string;
	fullyQualifiedDomainName: string;
	location: ComplexTypes.printerLocation;
	operatingSystem: string;
	registeredDateTime: any;
}
export interface printConnectorMethods extends entityMethods {

}
export interface printConnectorOData extends entityOData {

}
export interface printConnectorCollection extends IBaseCollection<printConnector, printConnectorOData & printConnectorProps> {
    add(values?: any): IBaseExecution<printConnector>;
}
/*********************************************
* printDocument
**********************************************/
export interface printDocument extends printDocumentProps, printDocumentMethods { }
export interface printDocumentProps extends  entityProps {
	contentType: string;
	displayName: string;
	size: number;
}
export interface printDocumentMethods extends entityMethods {
	createUploadSession(properties): IBaseExecution<ComplexTypes.uploadSession>;
}
export interface printDocumentOData extends entityOData {
	createUploadSession(properties): IBaseExecution<ComplexTypes.uploadSession>;
}
export interface printDocumentCollection extends IBaseCollection<printDocument, printDocumentOData & printDocumentProps> {
    add(values?: any): IBaseExecution<printDocument>;
}
/*********************************************
* printJob
**********************************************/
export interface printJob extends printJobProps, printJobMethods { }
export interface printJobProps extends  entityProps {
	configuration: ComplexTypes.printJobConfiguration;
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	isFetchable: boolean;
	redirectedFrom: string;
	redirectedTo: string;
	status: ComplexTypes.printJobStatus;
}
export interface printJobMethods extends entityMethods {
	documents(): printDocumentCollection;
	documents(id: string | number): IBaseQuery<printDocument> & printDocumentMethods;
	tasks(): printTaskCollection;
	tasks(id: string | number): IBaseQuery<printTask> & printTaskMethods;
	cancel(): IBaseExecution<void>;
	start(): IBaseExecution<ComplexTypes.printJobStatus>;
	abort(reason): IBaseExecution<void>;
	redirect(destinationPrinterId, configuration): IBaseExecution<printJob>;
}
export interface printJobOData extends entityOData {
	documents: IBaseResults<printDocument>;
	tasks: IBaseResults<printTask>;
	cancel(): IBaseExecution<void>;
	start(): IBaseExecution<ComplexTypes.printJobStatus>;
	abort(reason): IBaseExecution<void>;
	redirect(destinationPrinterId, configuration): IBaseExecution<printJob>;
}
export interface printJobCollection extends IBaseCollection<printJob, printJobOData & printJobProps> {
    add(values?: any): IBaseExecution<printJob>;
}
/*********************************************
* printOperation
**********************************************/
export interface printOperation extends printOperationProps, printOperationMethods { }
export interface printOperationProps extends  entityProps {
	createdDateTime: any;
	status: ComplexTypes.printOperationStatus;
}
export interface printOperationMethods extends entityMethods {

}
export interface printOperationOData extends entityOData {

}
export interface printOperationCollection extends IBaseCollection<printOperation, printOperationOData & printOperationProps> {
    add(values?: any): IBaseExecution<printOperation>;
}
/*********************************************
* printService
**********************************************/
export interface printService extends printServiceProps, printServiceMethods { }
export interface printServiceProps extends  entityProps {

}
export interface printServiceMethods extends entityMethods {
	endpoints(): printServiceEndpointCollection;
	endpoints(id: string | number): IBaseQuery<printServiceEndpoint> & printServiceEndpointMethods;
}
export interface printServiceOData extends entityOData {
	endpoints: IBaseResults<printServiceEndpoint>;
}
export interface printServiceCollection extends IBaseCollection<printService, printServiceOData & printServiceProps> {
    add(values?: any): IBaseExecution<printService>;
}
/*********************************************
* printServiceEndpoint
**********************************************/
export interface printServiceEndpoint extends printServiceEndpointProps, printServiceEndpointMethods { }
export interface printServiceEndpointProps extends  entityProps {
	displayName: string;
	uri: string;
}
export interface printServiceEndpointMethods extends entityMethods {

}
export interface printServiceEndpointOData extends entityOData {

}
export interface printServiceEndpointCollection extends IBaseCollection<printServiceEndpoint, printServiceEndpointOData & printServiceEndpointProps> {
    add(values?: any): IBaseExecution<printServiceEndpoint>;
}
/*********************************************
* printTask
**********************************************/
export interface printTask extends printTaskProps, printTaskMethods { }
export interface printTaskProps extends  entityProps {
	parentUrl: string;
	status: ComplexTypes.printTaskStatus;
}
export interface printTaskMethods extends entityMethods {
	definition(): IBaseQuery<printTaskDefinition> & printTaskDefinitionMethods;
	trigger(): IBaseQuery<printTaskTrigger> & printTaskTriggerMethods;
}
export interface printTaskOData extends entityOData {
	definition: printTaskDefinition;
	trigger: printTaskTrigger;
}
export interface printTaskCollection extends IBaseCollection<printTask, printTaskOData & printTaskProps> {
    add(values?: any): IBaseExecution<printTask>;
}
/*********************************************
* printTaskDefinition
**********************************************/
export interface printTaskDefinition extends printTaskDefinitionProps, printTaskDefinitionMethods { }
export interface printTaskDefinitionProps extends  entityProps {
	createdBy: ComplexTypes.appIdentity;
	displayName: string;
}
export interface printTaskDefinitionMethods extends entityMethods {
	tasks(): printTaskCollection;
	tasks(id: string | number): IBaseQuery<printTask> & printTaskMethods;
}
export interface printTaskDefinitionOData extends entityOData {
	tasks: IBaseResults<printTask>;
}
export interface printTaskDefinitionCollection extends IBaseCollection<printTaskDefinition, printTaskDefinitionOData & printTaskDefinitionProps> {
    add(values?: any): IBaseExecution<printTaskDefinition>;
}
/*********************************************
* printTaskTrigger
**********************************************/
export interface printTaskTrigger extends printTaskTriggerProps, printTaskTriggerMethods { }
export interface printTaskTriggerProps extends  entityProps {
	event: EnumTypes.printEvent;
}
export interface printTaskTriggerMethods extends entityMethods {
	definition(): IBaseQuery<printTaskDefinition> & printTaskDefinitionMethods;
}
export interface printTaskTriggerOData extends entityOData {
	definition: printTaskDefinition;
}
export interface printTaskTriggerCollection extends IBaseCollection<printTaskTrigger, printTaskTriggerOData & printTaskTriggerProps> {
    add(values?: any): IBaseExecution<printTaskTrigger>;
}
/*********************************************
* printUsage
**********************************************/
export interface printUsage extends printUsageProps, printUsageMethods { }
export interface printUsageProps extends  entityProps {
	blackAndWhitePageCount: number;
	colorPageCount: number;
	completedBlackAndWhiteJobCount: number;
	completedColorJobCount: number;
	completedJobCount: number;
	doubleSidedSheetCount: number;
	incompleteJobCount: number;
	mediaSheetCount: number;
	pageCount: number;
	singleSidedSheetCount: number;
	usageDate: any;
}
export interface printUsageMethods extends entityMethods {

}
export interface printUsageOData extends entityOData {

}
/*********************************************
* printUsageByPrinter
**********************************************/
export interface printUsageByPrinter extends printUsageByPrinterProps, printUsageByPrinterMethods { }
export interface printUsageByPrinterProps extends  printUsageProps {
	printerId: string;
	printerName: string;
}
export interface printUsageByPrinterMethods extends printUsageMethods {

}
export interface printUsageByPrinterOData extends printUsageOData {

}
export interface printUsageByPrinterCollection extends IBaseCollection<printUsageByPrinter, printUsageByPrinterOData & printUsageByPrinterProps> {
    add(values?: any): IBaseExecution<printUsageByPrinter>;
}
/*********************************************
* printUsageByUser
**********************************************/
export interface printUsageByUser extends printUsageByUserProps, printUsageByUserMethods { }
export interface printUsageByUserProps extends  printUsageProps {
	userPrincipalName: string;
}
export interface printUsageByUserMethods extends printUsageMethods {

}
export interface printUsageByUserOData extends printUsageOData {

}
export interface printUsageByUserCollection extends IBaseCollection<printUsageByUser, printUsageByUserOData & printUsageByUserProps> {
    add(values?: any): IBaseExecution<printUsageByUser>;
}
/*********************************************
* printer
**********************************************/
export interface printer extends printerProps, printerMethods { }
export interface printerProps extends  printerBaseProps {
	hasPhysicalDevice: boolean;
	isShared: boolean;
	lastSeenDateTime: any;
	registeredDateTime: any;
}
export interface printerMethods extends printerBaseMethods {
	connectors(): printConnectorCollection;
	connectors(id: string | number): IBaseQuery<printConnector> & printConnectorMethods;
	shares(): printerShareCollection;
	shares(id: string | number): IBaseQuery<printerShare> & printerShareMethods;
	taskTriggers(): printTaskTriggerCollection;
	taskTriggers(id: string | number): IBaseQuery<printTaskTrigger> & printTaskTriggerMethods;
	restoreFactoryDefaults(): IBaseExecution<void>;
}
export interface printerOData extends printerBaseOData {
	connectors: IBaseResults<printConnector>;
	shares: IBaseResults<printerShare>;
	taskTriggers: IBaseResults<printTaskTrigger>;
	restoreFactoryDefaults(): IBaseExecution<void>;
}
export interface printerCollection extends IBaseCollection<printer, printerOData & printerProps> {
    add(values?: any): IBaseExecution<printer>;
}
/*********************************************
* printerBase
**********************************************/
export interface printerBase extends printerBaseProps, printerBaseMethods { }
export interface printerBaseProps extends  entityProps {
	capabilities: ComplexTypes.printerCapabilities;
	defaults: ComplexTypes.printerDefaults;
	displayName: string;
	isAcceptingJobs: boolean;
	location: ComplexTypes.printerLocation;
	manufacturer: string;
	model: string;
	status: ComplexTypes.printerStatus;
}
export interface printerBaseMethods extends entityMethods {
	jobs(): printJobCollection;
	jobs(id: string | number): IBaseQuery<printJob> & printJobMethods;
}
export interface printerBaseOData extends entityOData {
	jobs: IBaseResults<printJob>;
}
/*********************************************
* printerCreateOperation
**********************************************/
export interface printerCreateOperation extends printerCreateOperationProps, printerCreateOperationMethods { }
export interface printerCreateOperationProps extends  printOperationProps {
	certificate: string;
}
export interface printerCreateOperationMethods extends printOperationMethods {
	printer(): IBaseQuery<printer> & printerMethods;
}
export interface printerCreateOperationOData extends printOperationOData {
	printer: printer;
}
/*********************************************
* printerShare
**********************************************/
export interface printerShare extends printerShareProps, printerShareMethods { }
export interface printerShareProps extends  printerBaseProps {
	allowAllUsers: boolean;
	createdDateTime: any;
	viewPoint: ComplexTypes.printerShareViewpoint;
}
export interface printerShareMethods extends printerBaseMethods {
	allowedGroups(): groupCollection;
	allowedGroups(id: string | number): IBaseQuery<group> & groupMethods;
	allowedUsers(): userCollection;
	allowedUsers(id: string | number): IBaseQuery<user> & userMethods;
	printer(): IBaseQuery<printer> & printerMethods;
}
export interface printerShareOData extends printerBaseOData {
	allowedGroups: IBaseResults<group>;
	allowedUsers: IBaseResults<user>;
	printer: printer;
}
export interface printerShareCollection extends IBaseCollection<printerShare, printerShareOData & printerShareProps> {
    add(values?: any): IBaseExecution<printerShare>;
}
/*********************************************
* privacy
**********************************************/
export interface privacy extends privacyProps, privacyMethods { }
export interface privacyProps   {

}
export interface privacyMethods {
	subjectRightsRequests(): subjectRightsRequestCollection;
	subjectRightsRequests(id: string | number): IBaseQuery<subjectRightsRequest> & subjectRightsRequestMethods;
}
export interface privacyOData {
	subjectRightsRequests: IBaseResults<subjectRightsRequest>;
}
/*********************************************
* privilegedAccessGroup
**********************************************/
export interface privilegedAccessGroup extends privilegedAccessGroupProps, privilegedAccessGroupMethods { }
export interface privilegedAccessGroupProps extends  entityProps {

}
export interface privilegedAccessGroupMethods extends entityMethods {
	assignmentApprovals(): approvalCollection;
	assignmentApprovals(id: string | number): IBaseQuery<approval> & approvalMethods;
	assignmentScheduleInstances(): privilegedAccessGroupAssignmentScheduleInstanceCollection;
	assignmentScheduleInstances(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentScheduleInstance> & privilegedAccessGroupAssignmentScheduleInstanceMethods;
	assignmentScheduleRequests(): privilegedAccessGroupAssignmentScheduleRequestCollection;
	assignmentScheduleRequests(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentScheduleRequest> & privilegedAccessGroupAssignmentScheduleRequestMethods;
	assignmentSchedules(): privilegedAccessGroupAssignmentScheduleCollection;
	assignmentSchedules(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentSchedule> & privilegedAccessGroupAssignmentScheduleMethods;
	eligibilityScheduleInstances(): privilegedAccessGroupEligibilityScheduleInstanceCollection;
	eligibilityScheduleInstances(id: string | number): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance> & privilegedAccessGroupEligibilityScheduleInstanceMethods;
	eligibilityScheduleRequests(): privilegedAccessGroupEligibilityScheduleRequestCollection;
	eligibilityScheduleRequests(id: string | number): IBaseQuery<privilegedAccessGroupEligibilityScheduleRequest> & privilegedAccessGroupEligibilityScheduleRequestMethods;
	eligibilitySchedules(): privilegedAccessGroupEligibilityScheduleCollection;
	eligibilitySchedules(id: string | number): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
}
export interface privilegedAccessGroupOData extends entityOData {
	assignmentApprovals: IBaseResults<approval>;
	assignmentScheduleInstances: IBaseResults<privilegedAccessGroupAssignmentScheduleInstance>;
	assignmentScheduleRequests: IBaseResults<privilegedAccessGroupAssignmentScheduleRequest>;
	assignmentSchedules: IBaseResults<privilegedAccessGroupAssignmentSchedule>;
	eligibilityScheduleInstances: IBaseResults<privilegedAccessGroupEligibilityScheduleInstance>;
	eligibilityScheduleRequests: IBaseResults<privilegedAccessGroupEligibilityScheduleRequest>;
	eligibilitySchedules: IBaseResults<privilegedAccessGroupEligibilitySchedule>;
}
/*********************************************
* privilegedAccessGroupAssignmentSchedule
**********************************************/
export interface privilegedAccessGroupAssignmentSchedule extends privilegedAccessGroupAssignmentScheduleProps, privilegedAccessGroupAssignmentScheduleMethods { }
export interface privilegedAccessGroupAssignmentScheduleProps extends  privilegedAccessScheduleProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	assignmentType: EnumTypes.privilegedAccessGroupAssignmentType;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupAssignmentScheduleMethods extends privilegedAccessScheduleMethods {
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface privilegedAccessGroupAssignmentScheduleOData extends privilegedAccessScheduleOData {
	activatedUsing: privilegedAccessGroupEligibilitySchedule;
	group: group;
	principal: directoryObject;
}
export interface privilegedAccessGroupAssignmentScheduleCollection extends IBaseCollection<privilegedAccessGroupAssignmentSchedule, privilegedAccessGroupAssignmentScheduleOData & privilegedAccessGroupAssignmentScheduleProps> {
    add(values?: any): IBaseExecution<privilegedAccessGroupAssignmentSchedule>;
}
/*********************************************
* privilegedAccessGroupAssignmentScheduleInstance
**********************************************/
export interface privilegedAccessGroupAssignmentScheduleInstance extends privilegedAccessGroupAssignmentScheduleInstanceProps, privilegedAccessGroupAssignmentScheduleInstanceMethods { }
export interface privilegedAccessGroupAssignmentScheduleInstanceProps extends  privilegedAccessScheduleInstanceProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	assignmentScheduleId: string;
	assignmentType: EnumTypes.privilegedAccessGroupAssignmentType;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupAssignmentScheduleInstanceMethods extends privilegedAccessScheduleInstanceMethods {
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance> & privilegedAccessGroupEligibilityScheduleInstanceMethods;
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface privilegedAccessGroupAssignmentScheduleInstanceOData extends privilegedAccessScheduleInstanceOData {
	activatedUsing: privilegedAccessGroupEligibilityScheduleInstance;
	group: group;
	principal: directoryObject;
}
export interface privilegedAccessGroupAssignmentScheduleInstanceCollection extends IBaseCollection<privilegedAccessGroupAssignmentScheduleInstance, privilegedAccessGroupAssignmentScheduleInstanceOData & privilegedAccessGroupAssignmentScheduleInstanceProps> {
    add(values?: any): IBaseExecution<privilegedAccessGroupAssignmentScheduleInstance>;
}
/*********************************************
* privilegedAccessGroupAssignmentScheduleRequest
**********************************************/
export interface privilegedAccessGroupAssignmentScheduleRequest extends privilegedAccessGroupAssignmentScheduleRequestProps, privilegedAccessGroupAssignmentScheduleRequestMethods { }
export interface privilegedAccessGroupAssignmentScheduleRequestProps extends  privilegedAccessScheduleRequestProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	principalId: string;
	targetScheduleId: string;
}
export interface privilegedAccessGroupAssignmentScheduleRequestMethods extends privilegedAccessScheduleRequestMethods {
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
	cancel(): IBaseExecution<void>;
}
export interface privilegedAccessGroupAssignmentScheduleRequestOData extends privilegedAccessScheduleRequestOData {
	activatedUsing: privilegedAccessGroupEligibilitySchedule;
	group: group;
	principal: directoryObject;
	targetSchedule: privilegedAccessGroupEligibilitySchedule;
	cancel(): IBaseExecution<void>;
}
export interface privilegedAccessGroupAssignmentScheduleRequestCollection extends IBaseCollection<privilegedAccessGroupAssignmentScheduleRequest, privilegedAccessGroupAssignmentScheduleRequestOData & privilegedAccessGroupAssignmentScheduleRequestProps> {
    add(values?: any): IBaseExecution<privilegedAccessGroupAssignmentScheduleRequest>;
}
/*********************************************
* privilegedAccessGroupEligibilitySchedule
**********************************************/
export interface privilegedAccessGroupEligibilitySchedule extends privilegedAccessGroupEligibilityScheduleProps, privilegedAccessGroupEligibilityScheduleMethods { }
export interface privilegedAccessGroupEligibilityScheduleProps extends  privilegedAccessScheduleProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupEligibilityScheduleMethods extends privilegedAccessScheduleMethods {
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface privilegedAccessGroupEligibilityScheduleOData extends privilegedAccessScheduleOData {
	group: group;
	principal: directoryObject;
}
export interface privilegedAccessGroupEligibilityScheduleCollection extends IBaseCollection<privilegedAccessGroupEligibilitySchedule, privilegedAccessGroupEligibilityScheduleOData & privilegedAccessGroupEligibilityScheduleProps> {
    add(values?: any): IBaseExecution<privilegedAccessGroupEligibilitySchedule>;
}
/*********************************************
* privilegedAccessGroupEligibilityScheduleInstance
**********************************************/
export interface privilegedAccessGroupEligibilityScheduleInstance extends privilegedAccessGroupEligibilityScheduleInstanceProps, privilegedAccessGroupEligibilityScheduleInstanceMethods { }
export interface privilegedAccessGroupEligibilityScheduleInstanceProps extends  privilegedAccessScheduleInstanceProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	eligibilityScheduleId: string;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupEligibilityScheduleInstanceMethods extends privilegedAccessScheduleInstanceMethods {
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface privilegedAccessGroupEligibilityScheduleInstanceOData extends privilegedAccessScheduleInstanceOData {
	group: group;
	principal: directoryObject;
}
export interface privilegedAccessGroupEligibilityScheduleInstanceCollection extends IBaseCollection<privilegedAccessGroupEligibilityScheduleInstance, privilegedAccessGroupEligibilityScheduleInstanceOData & privilegedAccessGroupEligibilityScheduleInstanceProps> {
    add(values?: any): IBaseExecution<privilegedAccessGroupEligibilityScheduleInstance>;
}
/*********************************************
* privilegedAccessGroupEligibilityScheduleRequest
**********************************************/
export interface privilegedAccessGroupEligibilityScheduleRequest extends privilegedAccessGroupEligibilityScheduleRequestProps, privilegedAccessGroupEligibilityScheduleRequestMethods { }
export interface privilegedAccessGroupEligibilityScheduleRequestProps extends  privilegedAccessScheduleRequestProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	principalId: string;
	targetScheduleId: string;
}
export interface privilegedAccessGroupEligibilityScheduleRequestMethods extends privilegedAccessScheduleRequestMethods {
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
	cancel(): IBaseExecution<void>;
}
export interface privilegedAccessGroupEligibilityScheduleRequestOData extends privilegedAccessScheduleRequestOData {
	group: group;
	principal: directoryObject;
	targetSchedule: privilegedAccessGroupEligibilitySchedule;
	cancel(): IBaseExecution<void>;
}
export interface privilegedAccessGroupEligibilityScheduleRequestCollection extends IBaseCollection<privilegedAccessGroupEligibilityScheduleRequest, privilegedAccessGroupEligibilityScheduleRequestOData & privilegedAccessGroupEligibilityScheduleRequestProps> {
    add(values?: any): IBaseExecution<privilegedAccessGroupEligibilityScheduleRequest>;
}
/*********************************************
* privilegedAccessRoot
**********************************************/
export interface privilegedAccessRoot extends privilegedAccessRootProps, privilegedAccessRootMethods { }
export interface privilegedAccessRootProps extends  entityProps {

}
export interface privilegedAccessRootMethods extends entityMethods {
	group(): IBaseQuery<privilegedAccessGroup> & privilegedAccessGroupMethods;
}
export interface privilegedAccessRootOData extends entityOData {
	group: privilegedAccessGroup;
}
/*********************************************
* privilegedAccessSchedule
**********************************************/
export interface privilegedAccessSchedule extends privilegedAccessScheduleProps, privilegedAccessScheduleMethods { }
export interface privilegedAccessScheduleProps extends  entityProps {
	createdDateTime: any;
	createdUsing: string;
	modifiedDateTime: any;
	scheduleInfo: ComplexTypes.requestSchedule;
	status: string;
}
export interface privilegedAccessScheduleMethods extends entityMethods {

}
export interface privilegedAccessScheduleOData extends entityOData {

}
/*********************************************
* privilegedAccessScheduleInstance
**********************************************/
export interface privilegedAccessScheduleInstance extends privilegedAccessScheduleInstanceProps, privilegedAccessScheduleInstanceMethods { }
export interface privilegedAccessScheduleInstanceProps extends  entityProps {
	endDateTime: any;
	startDateTime: any;
}
export interface privilegedAccessScheduleInstanceMethods extends entityMethods {

}
export interface privilegedAccessScheduleInstanceOData extends entityOData {

}
/*********************************************
* privilegedAccessScheduleRequest
**********************************************/
export interface privilegedAccessScheduleRequest extends privilegedAccessScheduleRequestProps, privilegedAccessScheduleRequestMethods { }
export interface privilegedAccessScheduleRequestProps extends  requestProps {
	action: EnumTypes.scheduleRequestActions;
	isValidationOnly: boolean;
	justification: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	ticketInfo: ComplexTypes.ticketInfo;
}
export interface privilegedAccessScheduleRequestMethods extends requestMethods {

}
export interface privilegedAccessScheduleRequestOData extends requestOData {

}
/*********************************************
* profileCardProperty
**********************************************/
export interface profileCardProperty extends profileCardPropertyProps, profileCardPropertyMethods { }
export interface profileCardPropertyProps extends  entityProps {
	annotations: ComplexTypes.profileCardAnnotation[];
	directoryPropertyName: string;
}
export interface profileCardPropertyMethods extends entityMethods {

}
export interface profileCardPropertyOData extends entityOData {

}
export interface profileCardPropertyCollection extends IBaseCollection<profileCardProperty, profileCardPropertyOData & profileCardPropertyProps> {
    add(values?: any): IBaseExecution<profileCardProperty>;
}
/*********************************************
* profilePhoto
**********************************************/
export interface profilePhoto extends profilePhotoProps, profilePhotoMethods { }
export interface profilePhotoProps extends  entityProps {
	height: number;
	width: number;
}
export interface profilePhotoMethods extends entityMethods {

}
export interface profilePhotoOData extends entityOData {

}
export interface profilePhotoCollection extends IBaseCollection<profilePhoto, profilePhotoOData & profilePhotoProps> {
    add(values?: any): IBaseExecution<profilePhoto>;
}
/*********************************************
* pronounsSettings
**********************************************/
export interface pronounsSettings extends pronounsSettingsProps, pronounsSettingsMethods { }
export interface pronounsSettingsProps extends  entityProps {
	isEnabledInOrganization: boolean;
}
export interface pronounsSettingsMethods extends entityMethods {

}
export interface pronounsSettingsOData extends entityOData {

}
/*********************************************
* protectionPolicyBase
**********************************************/
export interface protectionPolicyBase extends protectionPolicyBaseProps, protectionPolicyBaseMethods { }
export interface protectionPolicyBaseProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	retentionSettings: ComplexTypes.retentionSetting[];
	status: EnumTypes.protectionPolicyStatus;
}
export interface protectionPolicyBaseMethods extends entityMethods {
	activate(): IBaseExecution<protectionPolicyBase>;
	deactivate(): IBaseExecution<protectionPolicyBase>;
}
export interface protectionPolicyBaseOData extends entityOData {
	activate(): IBaseExecution<protectionPolicyBase>;
	deactivate(): IBaseExecution<protectionPolicyBase>;
}
export interface protectionPolicyBaseCollection extends IBaseCollection<protectionPolicyBase, protectionPolicyBaseOData & protectionPolicyBaseProps> {
    add(values?: any): IBaseExecution<protectionPolicyBase>;
}
/*********************************************
* protectionRuleBase
**********************************************/
export interface protectionRuleBase extends protectionRuleBaseProps, protectionRuleBaseMethods { }
export interface protectionRuleBaseProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	isAutoApplyEnabled: boolean;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.protectionRuleStatus;
}
export interface protectionRuleBaseMethods extends entityMethods {
	run(): IBaseExecution<protectionRuleBase>;
}
export interface protectionRuleBaseOData extends entityOData {
	run(): IBaseExecution<protectionRuleBase>;
}
/*********************************************
* protectionUnitBase
**********************************************/
export interface protectionUnitBase extends protectionUnitBaseProps, protectionUnitBaseMethods { }
export interface protectionUnitBaseProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	policyId: string;
	status: EnumTypes.protectionUnitStatus;
}
export interface protectionUnitBaseMethods extends entityMethods {

}
export interface protectionUnitBaseOData extends entityOData {

}
export interface protectionUnitBaseCollection extends IBaseCollection<protectionUnitBase, protectionUnitBaseOData & protectionUnitBaseProps> {
    add(values?: any): IBaseExecution<protectionUnitBase>;
}
/*********************************************
* provisioningObjectSummary
**********************************************/
export interface provisioningObjectSummary extends provisioningObjectSummaryProps, provisioningObjectSummaryMethods { }
export interface provisioningObjectSummaryProps extends  entityProps {
	activityDateTime: any;
	changeId: string;
	cycleId: string;
	durationInMilliseconds: number;
	initiatedBy: ComplexTypes.initiator;
	jobId: string;
	modifiedProperties: ComplexTypes.modifiedProperty[];
	provisioningAction: EnumTypes.provisioningAction;
	provisioningStatusInfo: ComplexTypes.provisioningStatusInfo;
	provisioningSteps: ComplexTypes.provisioningStep[];
	servicePrincipal: ComplexTypes.provisioningServicePrincipal;
	sourceIdentity: ComplexTypes.provisionedIdentity;
	sourceSystem: ComplexTypes.provisioningSystem;
	targetIdentity: ComplexTypes.provisionedIdentity;
	targetSystem: ComplexTypes.provisioningSystem;
	tenantId: string;
}
export interface provisioningObjectSummaryMethods extends entityMethods {

}
export interface provisioningObjectSummaryOData extends entityOData {

}
export interface provisioningObjectSummaryCollection extends IBaseCollection<provisioningObjectSummary, provisioningObjectSummaryOData & provisioningObjectSummaryProps> {
    add(values?: any): IBaseExecution<provisioningObjectSummary>;
}
/*********************************************
* qna
**********************************************/
export interface qna extends qnaProps, qnaMethods { }
export interface qnaProps extends  searchAnswerProps {
	availabilityEndDateTime: any;
	availabilityStartDateTime: any;
	groupIds: Array<string>[];
	isSuggested: boolean;
	keywords: ComplexTypes.answerKeyword;
	languageTags: Array<string>[];
	platforms: EnumTypes.devicePlatformType[];
	state: EnumTypes.answerState;
	targetedVariations: ComplexTypes.answerVariant[];
}
export interface qnaMethods extends searchAnswerMethods {

}
export interface qnaOData extends searchAnswerOData {

}
/*********************************************
* rbacApplication
**********************************************/
export interface rbacApplication extends rbacApplicationProps, rbacApplicationMethods { }
export interface rbacApplicationProps extends  entityProps {

}
export interface rbacApplicationMethods extends entityMethods {
	resourceNamespaces(): unifiedRbacResourceNamespaceCollection;
	resourceNamespaces(id: string | number): IBaseQuery<unifiedRbacResourceNamespace> & unifiedRbacResourceNamespaceMethods;
	roleAssignments(): unifiedRoleAssignmentCollection;
	roleAssignments(id: string | number): IBaseQuery<unifiedRoleAssignment> & unifiedRoleAssignmentMethods;
	roleDefinitions(): unifiedRoleDefinitionCollection;
	roleDefinitions(id: string | number): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
	roleAssignmentScheduleInstances(): unifiedRoleAssignmentScheduleInstanceCollection;
	roleAssignmentScheduleInstances(id: string | number): IBaseQuery<unifiedRoleAssignmentScheduleInstance> & unifiedRoleAssignmentScheduleInstanceMethods;
	roleAssignmentScheduleRequests(): unifiedRoleAssignmentScheduleRequestCollection;
	roleAssignmentScheduleRequests(id: string | number): IBaseQuery<unifiedRoleAssignmentScheduleRequest> & unifiedRoleAssignmentScheduleRequestMethods;
	roleAssignmentSchedules(): unifiedRoleAssignmentScheduleCollection;
	roleAssignmentSchedules(id: string | number): IBaseQuery<unifiedRoleAssignmentSchedule> & unifiedRoleAssignmentScheduleMethods;
	roleEligibilityScheduleInstances(): unifiedRoleEligibilityScheduleInstanceCollection;
	roleEligibilityScheduleInstances(id: string | number): IBaseQuery<unifiedRoleEligibilityScheduleInstance> & unifiedRoleEligibilityScheduleInstanceMethods;
	roleEligibilityScheduleRequests(): unifiedRoleEligibilityScheduleRequestCollection;
	roleEligibilityScheduleRequests(id: string | number): IBaseQuery<unifiedRoleEligibilityScheduleRequest> & unifiedRoleEligibilityScheduleRequestMethods;
	roleEligibilitySchedules(): unifiedRoleEligibilityScheduleCollection;
	roleEligibilitySchedules(id: string | number): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
}
export interface rbacApplicationOData extends entityOData {
	resourceNamespaces: IBaseResults<unifiedRbacResourceNamespace>;
	roleAssignments: IBaseResults<unifiedRoleAssignment>;
	roleDefinitions: IBaseResults<unifiedRoleDefinition>;
	roleAssignmentScheduleInstances: IBaseResults<unifiedRoleAssignmentScheduleInstance>;
	roleAssignmentScheduleRequests: IBaseResults<unifiedRoleAssignmentScheduleRequest>;
	roleAssignmentSchedules: IBaseResults<unifiedRoleAssignmentSchedule>;
	roleEligibilityScheduleInstances: IBaseResults<unifiedRoleEligibilityScheduleInstance>;
	roleEligibilityScheduleRequests: IBaseResults<unifiedRoleEligibilityScheduleRequest>;
	roleEligibilitySchedules: IBaseResults<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* recordOperation
**********************************************/
export interface recordOperation extends recordOperationProps, recordOperationMethods { }
export interface recordOperationProps extends  commsOperationProps {
	recordingAccessToken: string;
	recordingLocation: string;
}
export interface recordOperationMethods extends commsOperationMethods {

}
export interface recordOperationOData extends commsOperationOData {

}
/*********************************************
* referenceAttachment
**********************************************/
export interface referenceAttachment extends referenceAttachmentProps, referenceAttachmentMethods { }
export interface referenceAttachmentProps extends  attachmentProps {

}
export interface referenceAttachmentMethods extends attachmentMethods {

}
export interface referenceAttachmentOData extends attachmentOData {

}
/*********************************************
* relation
**********************************************/
export interface relation extends relationProps, relationMethods { }
export interface relationProps extends  entityProps {
	relationship: EnumTypes.relationType;
}
export interface relationMethods extends entityMethods {
	fromTerm(): IBaseQuery<term> & termMethods;
	set(): IBaseQuery<set> & setMethods;
	toTerm(): IBaseQuery<term> & termMethods;
}
export interface relationOData extends entityOData {
	fromTerm: term;
	set: set;
	toTerm: term;
}
/*********************************************
* relyingPartyDetailedSummary
**********************************************/
export interface relyingPartyDetailedSummary extends relyingPartyDetailedSummaryProps, relyingPartyDetailedSummaryMethods { }
export interface relyingPartyDetailedSummaryProps extends  entityProps {
	failedSignInCount: number;
	migrationStatus: EnumTypes.migrationStatus;
	migrationValidationDetails: ComplexTypes.keyValuePair[];
	relyingPartyId: string;
	relyingPartyName: string;
	replyUrls: Array<string>[];
	serviceId: string;
	signInSuccessRate: number;
	successfulSignInCount: number;
	totalSignInCount: number;
	uniqueUserCount: number;
}
export interface relyingPartyDetailedSummaryMethods extends entityMethods {

}
export interface relyingPartyDetailedSummaryOData extends entityOData {

}
/*********************************************
* remoteAssistancePartner
**********************************************/
export interface remoteAssistancePartner extends remoteAssistancePartnerProps, remoteAssistancePartnerMethods { }
export interface remoteAssistancePartnerProps extends  entityProps {
	displayName: string;
	lastConnectionDateTime: any;
	onboardingStatus: EnumTypes.remoteAssistanceOnboardingStatus;
	onboardingUrl: string;
}
export interface remoteAssistancePartnerMethods extends entityMethods {
	beginOnboarding(): IBaseExecution<void>;
	disconnect(): IBaseExecution<void>;
}
export interface remoteAssistancePartnerOData extends entityOData {
	beginOnboarding(): IBaseExecution<void>;
	disconnect(): IBaseExecution<void>;
}
export interface remoteAssistancePartnerCollection extends IBaseCollection<remoteAssistancePartner, remoteAssistancePartnerOData & remoteAssistancePartnerProps> {
    add(values?: any): IBaseExecution<remoteAssistancePartner>;
}
/*********************************************
* remoteDesktopSecurityConfiguration
**********************************************/
export interface remoteDesktopSecurityConfiguration extends remoteDesktopSecurityConfigurationProps, remoteDesktopSecurityConfigurationMethods { }
export interface remoteDesktopSecurityConfigurationProps extends  entityProps {
	isRemoteDesktopProtocolEnabled: boolean;
}
export interface remoteDesktopSecurityConfigurationMethods extends entityMethods {
	targetDeviceGroups(): targetDeviceGroupCollection;
	targetDeviceGroups(id: string | number): IBaseQuery<targetDeviceGroup> & targetDeviceGroupMethods;
}
export interface remoteDesktopSecurityConfigurationOData extends entityOData {
	targetDeviceGroups: IBaseResults<targetDeviceGroup>;
}
/*********************************************
* reportRoot
**********************************************/
export interface reportRoot extends reportRootProps, reportRootMethods { }
export interface reportRootProps   {

}
export interface reportRootMethods {
	authenticationMethods(): IBaseQuery<authenticationMethodsRoot> & authenticationMethodsRootMethods;
	partners(): IBaseQuery<partners> & partnersMethods;
	dailyPrintUsageByPrinter(): printUsageByPrinterCollection;
	dailyPrintUsageByPrinter(id: string | number): IBaseQuery<printUsageByPrinter> & printUsageByPrinterMethods;
	dailyPrintUsageByUser(): printUsageByUserCollection;
	dailyPrintUsageByUser(id: string | number): IBaseQuery<printUsageByUser> & printUsageByUserMethods;
	monthlyPrintUsageByPrinter(): printUsageByPrinterCollection;
	monthlyPrintUsageByPrinter(id: string | number): IBaseQuery<printUsageByPrinter> & printUsageByPrinterMethods;
	monthlyPrintUsageByUser(): printUsageByUserCollection;
	monthlyPrintUsageByUser(id: string | number): IBaseQuery<printUsageByUser> & printUsageByUserMethods;
	security(): IBaseQuery<securityReportsRoot> & securityReportsRootMethods;
	deviceConfigurationDeviceActivity(): ComplexTypes.report;
	deviceConfigurationUserActivity(): ComplexTypes.report;
	managedDeviceEnrollmentFailureDetails(): ComplexTypes.report;
	managedDeviceEnrollmentFailureDetails(skip, top, filter, skipToken): ComplexTypes.report;
	managedDeviceEnrollmentTopFailures(): ComplexTypes.report;
	managedDeviceEnrollmentTopFailures(period): ComplexTypes.report;
	getOffice365ActivationCounts(): ComplexTypes.report;
	getOffice365ActivationsUserCounts(): ComplexTypes.report;
	getOffice365ActivationsUserDetail(): ComplexTypes.report;
	getOffice365ActiveUserCounts(period): ComplexTypes.report;
	getOffice365ActiveUserDetail(date): ComplexTypes.report;
	getOffice365ActiveUserDetail(period): ComplexTypes.report;
	getOffice365GroupsActivityCounts(period): ComplexTypes.report;
	getOffice365GroupsActivityDetail(date): ComplexTypes.report;
	getOffice365GroupsActivityDetail(period): ComplexTypes.report;
	getOffice365GroupsActivityFileCounts(period): ComplexTypes.report;
	getOffice365GroupsActivityGroupCounts(period): ComplexTypes.report;
	getOffice365GroupsActivityStorage(period): ComplexTypes.report;
	getOffice365ServicesUserCounts(period): ComplexTypes.report;
	getOneDriveActivityFileCounts(period): ComplexTypes.report;
	getOneDriveActivityUserCounts(period): ComplexTypes.report;
	getOneDriveActivityUserDetail(date): ComplexTypes.report;
	getOneDriveActivityUserDetail(period): ComplexTypes.report;
	getOneDriveUsageAccountCounts(period): ComplexTypes.report;
	getOneDriveUsageAccountDetail(date): ComplexTypes.report;
	getOneDriveUsageAccountDetail(period): ComplexTypes.report;
	getOneDriveUsageFileCounts(period): ComplexTypes.report;
	getOneDriveUsageStorage(period): ComplexTypes.report;
	getSharePointActivityFileCounts(period): ComplexTypes.report;
	getSharePointActivityPages(period): ComplexTypes.report;
	getSharePointActivityUserCounts(period): ComplexTypes.report;
	getSharePointActivityUserDetail(date): ComplexTypes.report;
	getSharePointActivityUserDetail(period): ComplexTypes.report;
	getSharePointSiteUsageDetail(date): ComplexTypes.report;
	getSharePointSiteUsageDetail(period): ComplexTypes.report;
	getSharePointSiteUsageFileCounts(period): ComplexTypes.report;
	getSharePointSiteUsagePages(period): ComplexTypes.report;
	getSharePointSiteUsageSiteCounts(period): ComplexTypes.report;
	getSharePointSiteUsageStorage(period): ComplexTypes.report;
	getSkypeForBusinessActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessActivityUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessActivityUserDetail(date): ComplexTypes.report;
	getSkypeForBusinessActivityUserDetail(period): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageDistributionUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageUserDetail(date): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageUserDetail(period): ComplexTypes.report;
	getSkypeForBusinessOrganizerActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessOrganizerActivityMinuteCounts(period): ComplexTypes.report;
	getSkypeForBusinessOrganizerActivityUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessParticipantActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessParticipantActivityMinuteCounts(period): ComplexTypes.report;
	getSkypeForBusinessParticipantActivityUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessPeerToPeerActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessPeerToPeerActivityMinuteCounts(period): ComplexTypes.report;
	getSkypeForBusinessPeerToPeerActivityUserCounts(period): ComplexTypes.report;
	getYammerActivityCounts(period): ComplexTypes.report;
	getYammerActivityUserCounts(period): ComplexTypes.report;
	getYammerActivityUserDetail(date): ComplexTypes.report;
	getYammerActivityUserDetail(period): ComplexTypes.report;
	getYammerDeviceUsageDistributionUserCounts(period): ComplexTypes.report;
	getYammerDeviceUsageUserCounts(period): ComplexTypes.report;
	getYammerDeviceUsageUserDetail(date): ComplexTypes.report;
	getYammerDeviceUsageUserDetail(period): ComplexTypes.report;
	getYammerGroupsActivityCounts(period): ComplexTypes.report;
	getYammerGroupsActivityDetail(date): ComplexTypes.report;
	getYammerGroupsActivityDetail(period): ComplexTypes.report;
	getYammerGroupsActivityGroupCounts(period): ComplexTypes.report;
	getGroupArchivedPrintJobs(groupId, startDateTime, endDateTime): ComplexTypes.archivedPrintJob[];
	getPrinterArchivedPrintJobs(printerId, startDateTime, endDateTime): ComplexTypes.archivedPrintJob[];
	getUserArchivedPrintJobs(userId, startDateTime, endDateTime): ComplexTypes.archivedPrintJob[];
}
export interface reportRootOData {
	authenticationMethods: authenticationMethodsRoot;
	partners: partners;
	dailyPrintUsageByPrinter: IBaseResults<printUsageByPrinter>;
	dailyPrintUsageByUser: IBaseResults<printUsageByUser>;
	monthlyPrintUsageByPrinter: IBaseResults<printUsageByPrinter>;
	monthlyPrintUsageByUser: IBaseResults<printUsageByUser>;
	security: securityReportsRoot;
	deviceConfigurationDeviceActivity(): ComplexTypes.report;
	deviceConfigurationUserActivity(): ComplexTypes.report;
	managedDeviceEnrollmentFailureDetails(): ComplexTypes.report;
	managedDeviceEnrollmentFailureDetails(skip, top, filter, skipToken): ComplexTypes.report;
	managedDeviceEnrollmentTopFailures(): ComplexTypes.report;
	managedDeviceEnrollmentTopFailures(period): ComplexTypes.report;
	getOffice365ActivationCounts(): ComplexTypes.report;
	getOffice365ActivationsUserCounts(): ComplexTypes.report;
	getOffice365ActivationsUserDetail(): ComplexTypes.report;
	getOffice365ActiveUserCounts(period): ComplexTypes.report;
	getOffice365ActiveUserDetail(date): ComplexTypes.report;
	getOffice365ActiveUserDetail(period): ComplexTypes.report;
	getOffice365GroupsActivityCounts(period): ComplexTypes.report;
	getOffice365GroupsActivityDetail(date): ComplexTypes.report;
	getOffice365GroupsActivityDetail(period): ComplexTypes.report;
	getOffice365GroupsActivityFileCounts(period): ComplexTypes.report;
	getOffice365GroupsActivityGroupCounts(period): ComplexTypes.report;
	getOffice365GroupsActivityStorage(period): ComplexTypes.report;
	getOffice365ServicesUserCounts(period): ComplexTypes.report;
	getOneDriveActivityFileCounts(period): ComplexTypes.report;
	getOneDriveActivityUserCounts(period): ComplexTypes.report;
	getOneDriveActivityUserDetail(date): ComplexTypes.report;
	getOneDriveActivityUserDetail(period): ComplexTypes.report;
	getOneDriveUsageAccountCounts(period): ComplexTypes.report;
	getOneDriveUsageAccountDetail(date): ComplexTypes.report;
	getOneDriveUsageAccountDetail(period): ComplexTypes.report;
	getOneDriveUsageFileCounts(period): ComplexTypes.report;
	getOneDriveUsageStorage(period): ComplexTypes.report;
	getSharePointActivityFileCounts(period): ComplexTypes.report;
	getSharePointActivityPages(period): ComplexTypes.report;
	getSharePointActivityUserCounts(period): ComplexTypes.report;
	getSharePointActivityUserDetail(date): ComplexTypes.report;
	getSharePointActivityUserDetail(period): ComplexTypes.report;
	getSharePointSiteUsageDetail(date): ComplexTypes.report;
	getSharePointSiteUsageDetail(period): ComplexTypes.report;
	getSharePointSiteUsageFileCounts(period): ComplexTypes.report;
	getSharePointSiteUsagePages(period): ComplexTypes.report;
	getSharePointSiteUsageSiteCounts(period): ComplexTypes.report;
	getSharePointSiteUsageStorage(period): ComplexTypes.report;
	getSkypeForBusinessActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessActivityUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessActivityUserDetail(date): ComplexTypes.report;
	getSkypeForBusinessActivityUserDetail(period): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageDistributionUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageUserDetail(date): ComplexTypes.report;
	getSkypeForBusinessDeviceUsageUserDetail(period): ComplexTypes.report;
	getSkypeForBusinessOrganizerActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessOrganizerActivityMinuteCounts(period): ComplexTypes.report;
	getSkypeForBusinessOrganizerActivityUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessParticipantActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessParticipantActivityMinuteCounts(period): ComplexTypes.report;
	getSkypeForBusinessParticipantActivityUserCounts(period): ComplexTypes.report;
	getSkypeForBusinessPeerToPeerActivityCounts(period): ComplexTypes.report;
	getSkypeForBusinessPeerToPeerActivityMinuteCounts(period): ComplexTypes.report;
	getSkypeForBusinessPeerToPeerActivityUserCounts(period): ComplexTypes.report;
	getYammerActivityCounts(period): ComplexTypes.report;
	getYammerActivityUserCounts(period): ComplexTypes.report;
	getYammerActivityUserDetail(date): ComplexTypes.report;
	getYammerActivityUserDetail(period): ComplexTypes.report;
	getYammerDeviceUsageDistributionUserCounts(period): ComplexTypes.report;
	getYammerDeviceUsageUserCounts(period): ComplexTypes.report;
	getYammerDeviceUsageUserDetail(date): ComplexTypes.report;
	getYammerDeviceUsageUserDetail(period): ComplexTypes.report;
	getYammerGroupsActivityCounts(period): ComplexTypes.report;
	getYammerGroupsActivityDetail(date): ComplexTypes.report;
	getYammerGroupsActivityDetail(period): ComplexTypes.report;
	getYammerGroupsActivityGroupCounts(period): ComplexTypes.report;
	getGroupArchivedPrintJobs(groupId, startDateTime, endDateTime): ComplexTypes.archivedPrintJob[];
	getPrinterArchivedPrintJobs(printerId, startDateTime, endDateTime): ComplexTypes.archivedPrintJob[];
	getUserArchivedPrintJobs(userId, startDateTime, endDateTime): ComplexTypes.archivedPrintJob[];
}
/*********************************************
* request
**********************************************/
export interface request extends requestProps, requestMethods { }
export interface requestProps extends  entityProps {
	approvalId: string;
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	customData: string;
	status: string;
}
export interface requestMethods extends entityMethods {

}
export interface requestOData extends entityOData {

}
/*********************************************
* resellerDelegatedAdminRelationship
**********************************************/
export interface resellerDelegatedAdminRelationship extends resellerDelegatedAdminRelationshipProps, resellerDelegatedAdminRelationshipMethods { }
export interface resellerDelegatedAdminRelationshipProps extends  delegatedAdminRelationshipProps {
	indirectProviderTenantId: string;
	isPartnerConsentPending: boolean;
}
export interface resellerDelegatedAdminRelationshipMethods extends delegatedAdminRelationshipMethods {

}
export interface resellerDelegatedAdminRelationshipOData extends delegatedAdminRelationshipOData {

}
/*********************************************
* resourceOperation
**********************************************/
export interface resourceOperation extends resourceOperationProps, resourceOperationMethods { }
export interface resourceOperationProps extends  entityProps {
	actionName: string;
	description: string;
	resourceName: string;
}
export interface resourceOperationMethods extends entityMethods {

}
export interface resourceOperationOData extends entityOData {

}
export interface resourceOperationCollection extends IBaseCollection<resourceOperation, resourceOperationOData & resourceOperationProps> {
    add(values?: any): IBaseExecution<resourceOperation>;
}
/*********************************************
* resourceSpecificPermissionGrant
**********************************************/
export interface resourceSpecificPermissionGrant extends resourceSpecificPermissionGrantProps, resourceSpecificPermissionGrantMethods { }
export interface resourceSpecificPermissionGrantProps extends  directoryObjectProps {
	clientAppId: string;
	clientId: string;
	permission: string;
	permissionType: string;
	resourceAppId: string;
}
export interface resourceSpecificPermissionGrantMethods extends directoryObjectMethods {

}
export interface resourceSpecificPermissionGrantOData extends directoryObjectOData {

}
export interface resourceSpecificPermissionGrantCollection extends IBaseCollection<resourceSpecificPermissionGrant, resourceSpecificPermissionGrantOData & resourceSpecificPermissionGrantProps> {
    add(values?: any): IBaseExecution<resourceSpecificPermissionGrant>;
}
/*********************************************
* restoreArtifactBase
**********************************************/
export interface restoreArtifactBase extends restoreArtifactBaseProps, restoreArtifactBaseMethods { }
export interface restoreArtifactBaseProps extends  entityProps {
	completionDateTime: any;
	destinationType: EnumTypes.destinationType;
	error: ComplexTypes.publicError;
	startDateTime: any;
	status: EnumTypes.artifactRestoreStatus;
}
export interface restoreArtifactBaseMethods extends entityMethods {
	restorePoint(): IBaseQuery<restorePoint> & restorePointMethods;
}
export interface restoreArtifactBaseOData extends entityOData {
	restorePoint: restorePoint;
}
/*********************************************
* restorePoint
**********************************************/
export interface restorePoint extends restorePointProps, restorePointMethods { }
export interface restorePointProps extends  entityProps {
	expirationDateTime: any;
	protectionDateTime: any;
	tags: EnumTypes.restorePointTags;
}
export interface restorePointMethods extends entityMethods {
	protectionUnit(): IBaseQuery<protectionUnitBase> & protectionUnitBaseMethods;
}
export interface restorePointOData extends entityOData {
	protectionUnit: protectionUnitBase;
}
export interface restorePointCollection extends IBaseCollection<restorePoint, restorePointOData & restorePointProps> {
    add(values?: any): IBaseExecution<restorePoint>;
}
/*********************************************
* restoreSessionBase
**********************************************/
export interface restoreSessionBase extends restoreSessionBaseProps, restoreSessionBaseMethods { }
export interface restoreSessionBaseProps extends  entityProps {
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.restoreSessionStatus;
}
export interface restoreSessionBaseMethods extends entityMethods {
	activate(): IBaseExecution<restoreSessionBase>;
}
export interface restoreSessionBaseOData extends entityOData {
	activate(): IBaseExecution<restoreSessionBase>;
}
export interface restoreSessionBaseCollection extends IBaseCollection<restoreSessionBase, restoreSessionBaseOData & restoreSessionBaseProps> {
    add(values?: any): IBaseExecution<restoreSessionBase>;
}
/*********************************************
* retentionEvent
**********************************************/
export interface retentionEvent extends retentionEventProps, retentionEventMethods { }
export interface retentionEventProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	eventPropagationResults: ComplexTypes.eventPropagationResult[];
	eventQueries: ComplexTypes.eventQuery[];
	eventStatus: ComplexTypes.retentionEventStatus;
	eventTriggerDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	lastStatusUpdateDateTime: any;
}
export interface retentionEventMethods extends entityMethods {
	retentionEventType(): IBaseQuery<retentionEventType> & retentionEventTypeMethods;
}
export interface retentionEventOData extends entityOData {
	retentionEventType: retentionEventType;
}
/*********************************************
* retentionEventType
**********************************************/
export interface retentionEventType extends retentionEventTypeProps, retentionEventTypeMethods { }
export interface retentionEventTypeProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface retentionEventTypeMethods extends entityMethods {

}
export interface retentionEventTypeOData extends entityOData {

}
/*********************************************
* retentionLabel
**********************************************/
export interface retentionLabel extends retentionLabelProps, retentionLabelMethods { }
export interface retentionLabelProps extends  entityProps {
	actionAfterRetentionPeriod: EnumTypes.actionAfterRetentionPeriod;
	behaviorDuringRetentionPeriod: EnumTypes.behaviorDuringRetentionPeriod;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	defaultRecordBehavior: EnumTypes.defaultRecordBehavior;
	descriptionForAdmins: string;
	descriptionForUsers: string;
	displayName: string;
	isInUse: boolean;
	labelToBeApplied: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	retentionDuration: ComplexTypes.retentionDuration;
	retentionTrigger: EnumTypes.retentionTrigger;
}
export interface retentionLabelMethods extends entityMethods {
	descriptors(): IBaseQuery<filePlanDescriptor> & filePlanDescriptorMethods;
	dispositionReviewStages(): IBaseCollection<dispositionReviewStage, entity & dispositionReviewStageOData & dispositionReviewStageProps>;
	dispositionReviewStages(id: string | number): IBaseQuery<dispositionReviewStage> & dispositionReviewStageMethods;
	retentionEventType(): IBaseQuery<retentionEventType> & retentionEventTypeMethods;
}
export interface retentionLabelOData extends entityOData {
	descriptors: filePlanDescriptor;
	dispositionReviewStages: IBaseResults<dispositionReviewStage>;
	retentionEventType: retentionEventType;
}
/*********************************************
* richLongRunningOperation
**********************************************/
export interface richLongRunningOperation extends richLongRunningOperationProps, richLongRunningOperationMethods { }
export interface richLongRunningOperationProps extends  longRunningOperationProps {
	error: ComplexTypes.publicError;
	percentageComplete: number;
	resourceId: string;
	type: string;
}
export interface richLongRunningOperationMethods extends longRunningOperationMethods {

}
export interface richLongRunningOperationOData extends longRunningOperationOData {

}
export interface richLongRunningOperationCollection extends IBaseCollection<richLongRunningOperation, richLongRunningOperationOData & richLongRunningOperationProps> {
    add(values?: any): IBaseExecution<richLongRunningOperation>;
}
/*********************************************
* riskDetection
**********************************************/
export interface riskDetection extends riskDetectionProps, riskDetectionMethods { }
export interface riskDetectionProps extends  entityProps {
	activity: EnumTypes.activityType;
	activityDateTime: any;
	additionalInfo: string;
	correlationId: string;
	detectedDateTime: any;
	detectionTimingType: EnumTypes.riskDetectionTimingType;
	ipAddress: string;
	lastUpdatedDateTime: any;
	location: ComplexTypes.signInLocation;
	requestId: string;
	riskDetail: EnumTypes.riskDetail;
	riskEventType: string;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	source: string;
	tokenIssuerType: EnumTypes.tokenIssuerType;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;
}
export interface riskDetectionMethods extends entityMethods {

}
export interface riskDetectionOData extends entityOData {

}
export interface riskDetectionCollection extends IBaseCollection<riskDetection, riskDetectionOData & riskDetectionProps> {
    add(values?: any): IBaseExecution<riskDetection>;
}
/*********************************************
* riskyServicePrincipal
**********************************************/
export interface riskyServicePrincipal extends riskyServicePrincipalProps, riskyServicePrincipalMethods { }
export interface riskyServicePrincipalProps extends  entityProps {
	appId: string;
	displayName: string;
	isEnabled: boolean;
	isProcessing: boolean;
	riskDetail: EnumTypes.riskDetail;
	riskLastUpdatedDateTime: any;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	servicePrincipalType: string;
}
export interface riskyServicePrincipalMethods extends entityMethods {
	history(): riskyServicePrincipalHistoryItemCollection;
	history(id: string | number): IBaseQuery<riskyServicePrincipalHistoryItem> & riskyServicePrincipalHistoryItemMethods;
}
export interface riskyServicePrincipalOData extends entityOData {
	history: IBaseResults<riskyServicePrincipalHistoryItem>;
}
export interface riskyServicePrincipalCollection extends IBaseCollection<riskyServicePrincipal, riskyServicePrincipalOData & riskyServicePrincipalProps> {
    add(values?: any): IBaseExecution<riskyServicePrincipal>;
}
/*********************************************
* riskyServicePrincipalHistoryItem
**********************************************/
export interface riskyServicePrincipalHistoryItem extends riskyServicePrincipalHistoryItemProps, riskyServicePrincipalHistoryItemMethods { }
export interface riskyServicePrincipalHistoryItemProps extends  riskyServicePrincipalProps {
	activity: ComplexTypes.riskServicePrincipalActivity;
	initiatedBy: string;
}
export interface riskyServicePrincipalHistoryItemMethods extends riskyServicePrincipalMethods {

}
export interface riskyServicePrincipalHistoryItemOData extends riskyServicePrincipalOData {

}
export interface riskyServicePrincipalHistoryItemCollection extends IBaseCollection<riskyServicePrincipalHistoryItem, riskyServicePrincipalHistoryItemOData & riskyServicePrincipalHistoryItemProps> {
    add(values?: any): IBaseExecution<riskyServicePrincipalHistoryItem>;
}
/*********************************************
* riskyUser
**********************************************/
export interface riskyUser extends riskyUserProps, riskyUserMethods { }
export interface riskyUserProps extends  entityProps {
	isDeleted: boolean;
	isProcessing: boolean;
	riskDetail: EnumTypes.riskDetail;
	riskLastUpdatedDateTime: any;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface riskyUserMethods extends entityMethods {
	history(): riskyUserHistoryItemCollection;
	history(id: string | number): IBaseQuery<riskyUserHistoryItem> & riskyUserHistoryItemMethods;
}
export interface riskyUserOData extends entityOData {
	history: IBaseResults<riskyUserHistoryItem>;
}
export interface riskyUserCollection extends IBaseCollection<riskyUser, riskyUserOData & riskyUserProps> {
    add(values?: any): IBaseExecution<riskyUser>;
}
/*********************************************
* riskyUserHistoryItem
**********************************************/
export interface riskyUserHistoryItem extends riskyUserHistoryItemProps, riskyUserHistoryItemMethods { }
export interface riskyUserHistoryItemProps extends  riskyUserProps {
	activity: ComplexTypes.riskUserActivity;
	initiatedBy: string;
	userId: string;
}
export interface riskyUserHistoryItemMethods extends riskyUserMethods {

}
export interface riskyUserHistoryItemOData extends riskyUserOData {

}
export interface riskyUserHistoryItemCollection extends IBaseCollection<riskyUserHistoryItem, riskyUserHistoryItemOData & riskyUserHistoryItemProps> {
    add(values?: any): IBaseExecution<riskyUserHistoryItem>;
}
/*********************************************
* roleAssignment
**********************************************/
export interface roleAssignment extends roleAssignmentProps, roleAssignmentMethods { }
export interface roleAssignmentProps extends  entityProps {
	description: string;
	displayName: string;
	resourceScopes: Array<string>[];
}
export interface roleAssignmentMethods extends entityMethods {
	roleDefinition(): IBaseQuery<roleDefinition> & roleDefinitionMethods;
}
export interface roleAssignmentOData extends entityOData {
	roleDefinition: roleDefinition;
}
export interface roleAssignmentCollection extends IBaseCollection<roleAssignment, roleAssignmentOData & roleAssignmentProps> {
    add(values?: any): IBaseExecution<roleAssignment>;
}
/*********************************************
* roleDefinition
**********************************************/
export interface roleDefinition extends roleDefinitionProps, roleDefinitionMethods { }
export interface roleDefinitionProps extends  entityProps {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	rolePermissions: ComplexTypes.rolePermission[];
}
export interface roleDefinitionMethods extends entityMethods {
	roleAssignments(): roleAssignmentCollection;
	roleAssignments(id: string | number): IBaseQuery<roleAssignment> & roleAssignmentMethods;
}
export interface roleDefinitionOData extends entityOData {
	roleAssignments: IBaseResults<roleAssignment>;
}
export interface roleDefinitionCollection extends IBaseCollection<roleDefinition, roleDefinitionOData & roleDefinitionProps> {
    add(values?: any): IBaseExecution<roleDefinition>;
}
/*********************************************
* roleManagement
**********************************************/
export interface roleManagement extends roleManagementProps, roleManagementMethods { }
export interface roleManagementProps   {

}
export interface roleManagementMethods {
	directory(): IBaseQuery<rbacApplication> & rbacApplicationMethods;
	entitlementManagement(): IBaseQuery<rbacApplication> & rbacApplicationMethods;
}
export interface roleManagementOData {
	directory: rbacApplication;
	entitlementManagement: rbacApplication;
}
/*********************************************
* room
**********************************************/
export interface room extends roomProps, roomMethods { }
export interface roomProps extends  placeProps {
	audioDeviceName: string;
	bookingType: EnumTypes.bookingType;
	building: string;
	capacity: number;
	displayDeviceName: string;
	emailAddress: string;
	floorLabel: string;
	floorNumber: number;
	isWheelChairAccessible: boolean;
	label: string;
	nickname: string;
	tags: Array<string>[];
	videoDeviceName: string;
}
export interface roomMethods extends placeMethods {

}
export interface roomOData extends placeOData {

}
export interface roomCollection extends IBaseCollection<room, roomOData & roomProps> {
    add(values?: any): IBaseExecution<room>;
}
/*********************************************
* roomList
**********************************************/
export interface roomList extends roomListProps, roomListMethods { }
export interface roomListProps extends  placeProps {
	emailAddress: string;
}
export interface roomListMethods extends placeMethods {
	rooms(): roomCollection;
	rooms(id: string | number): IBaseQuery<room> & roomMethods;
}
export interface roomListOData extends placeOData {
	rooms: IBaseResults<room>;
}
/*********************************************
* run
**********************************************/
export interface run extends runProps, runMethods { }
export interface runProps extends  entityProps {
	completedDateTime: any;
	failedTasksCount: number;
	failedUsersCount: number;
	lastUpdatedDateTime: any;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	scheduledDateTime: any;
	startedDateTime: any;
	successfulUsersCount: number;
	totalTasksCount: number;
	totalUnprocessedTasksCount: number;
	totalUsersCount: number;
	workflowExecutionType: EnumTypes.workflowExecutionType;
}
export interface runMethods extends entityMethods {
	taskProcessingResults(): IBaseCollection<taskProcessingResult, entity & taskProcessingResultOData & taskProcessingResultProps>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
	userProcessingResults(): IBaseCollection<userProcessingResult, entity & userProcessingResultOData & userProcessingResultProps>;
	userProcessingResults(id: string | number): IBaseQuery<userProcessingResult> & userProcessingResultMethods;
}
export interface runOData extends entityOData {
	taskProcessingResults: IBaseResults<taskProcessingResult>;
	userProcessingResults: IBaseResults<userProcessingResult>;
}
/*********************************************
* runningOperation
**********************************************/
export interface runningOperation extends runningOperationProps, runningOperationMethods { }
export interface runningOperationProps extends  operationProps {

}
export interface runningOperationMethods extends operationMethods {

}
export interface runningOperationOData extends operationOData {

}
/*********************************************
* samlOrWsFedExternalDomainFederation
**********************************************/
export interface samlOrWsFedExternalDomainFederation extends samlOrWsFedExternalDomainFederationProps, samlOrWsFedExternalDomainFederationMethods { }
export interface samlOrWsFedExternalDomainFederationProps extends  samlOrWsFedProviderProps {

}
export interface samlOrWsFedExternalDomainFederationMethods extends samlOrWsFedProviderMethods {
	domains(): externalDomainNameCollection;
	domains(id: string | number): IBaseQuery<externalDomainName> & externalDomainNameMethods;
}
export interface samlOrWsFedExternalDomainFederationOData extends samlOrWsFedProviderOData {
	domains: IBaseResults<externalDomainName>;
}
/*********************************************
* samlOrWsFedProvider
**********************************************/
export interface samlOrWsFedProvider extends samlOrWsFedProviderProps, samlOrWsFedProviderMethods { }
export interface samlOrWsFedProviderProps extends  identityProviderBaseProps {
	issuerUri: string;
	metadataExchangeUri: string;
	passiveSignInUri: string;
	preferredAuthenticationProtocol: EnumTypes.authenticationProtocol;
	signingCertificate: string;
}
export interface samlOrWsFedProviderMethods extends identityProviderBaseMethods {

}
export interface samlOrWsFedProviderOData extends identityProviderBaseOData {

}
/*********************************************
* schedule
**********************************************/
export interface schedule extends scheduleProps, scheduleMethods { }
export interface scheduleProps extends  entityProps {
	enabled: boolean;
	offerShiftRequestsEnabled: boolean;
	openShiftsEnabled: boolean;
	provisionStatus: EnumTypes.operationStatus;
	provisionStatusCode: string;
	swapShiftsRequestsEnabled: boolean;
	timeClockEnabled: boolean;
	timeOffRequestsEnabled: boolean;
	timeZone: string;
	workforceIntegrationIds: Array<string>[];
}
export interface scheduleMethods extends entityMethods {
	offerShiftRequests(): offerShiftRequestCollection;
	offerShiftRequests(id: string | number): IBaseQuery<offerShiftRequest> & offerShiftRequestMethods;
	openShiftChangeRequests(): openShiftChangeRequestCollection;
	openShiftChangeRequests(id: string | number): IBaseQuery<openShiftChangeRequest> & openShiftChangeRequestMethods;
	openShifts(): openShiftCollection;
	openShifts(id: string | number): IBaseQuery<openShift> & openShiftMethods;
	schedulingGroups(): schedulingGroupCollection;
	schedulingGroups(id: string | number): IBaseQuery<schedulingGroup> & schedulingGroupMethods;
	shifts(): shiftCollection;
	shifts(id: string | number): IBaseQuery<shift> & shiftMethods;
	swapShiftsChangeRequests(): swapShiftsChangeRequestCollection;
	swapShiftsChangeRequests(id: string | number): IBaseQuery<swapShiftsChangeRequest> & swapShiftsChangeRequestMethods;
	timeOffReasons(): timeOffReasonCollection;
	timeOffReasons(id: string | number): IBaseQuery<timeOffReason> & timeOffReasonMethods;
	timeOffRequests(): timeOffRequestCollection;
	timeOffRequests(id: string | number): IBaseQuery<timeOffRequest> & timeOffRequestMethods;
	timesOff(): timeOffCollection;
	timesOff(id: string | number): IBaseQuery<timeOff> & timeOffMethods;
	share(notifyTeam, startDateTime, endDateTime): IBaseExecution<void>;
}
export interface scheduleOData extends entityOData {
	offerShiftRequests: IBaseResults<offerShiftRequest>;
	openShiftChangeRequests: IBaseResults<openShiftChangeRequest>;
	openShifts: IBaseResults<openShift>;
	schedulingGroups: IBaseResults<schedulingGroup>;
	shifts: IBaseResults<shift>;
	swapShiftsChangeRequests: IBaseResults<swapShiftsChangeRequest>;
	timeOffReasons: IBaseResults<timeOffReason>;
	timeOffRequests: IBaseResults<timeOffRequest>;
	timesOff: IBaseResults<timeOff>;
	share(notifyTeam, startDateTime, endDateTime): IBaseExecution<void>;
}
/*********************************************
* scheduleChangeRequest
**********************************************/
export interface scheduleChangeRequest extends scheduleChangeRequestProps, scheduleChangeRequestMethods { }
export interface scheduleChangeRequestProps extends  changeTrackedEntityProps {
	assignedTo: EnumTypes.scheduleChangeRequestActor;
	managerActionDateTime: any;
	managerActionMessage: string;
	managerUserId: string;
	senderDateTime: any;
	senderMessage: string;
	senderUserId: string;
	state: EnumTypes.scheduleChangeState;
}
export interface scheduleChangeRequestMethods extends changeTrackedEntityMethods {
	decline(message): IBaseExecution<void>;
	approve(message): IBaseExecution<void>;
}
export interface scheduleChangeRequestOData extends changeTrackedEntityOData {
	decline(message): IBaseExecution<void>;
	approve(message): IBaseExecution<void>;
}
/*********************************************
* schedulingGroup
**********************************************/
export interface schedulingGroup extends schedulingGroupProps, schedulingGroupMethods { }
export interface schedulingGroupProps extends  changeTrackedEntityProps {
	displayName: string;
	isActive: boolean;
	userIds: Array<string>[];
}
export interface schedulingGroupMethods extends changeTrackedEntityMethods {

}
export interface schedulingGroupOData extends changeTrackedEntityOData {

}
export interface schedulingGroupCollection extends IBaseCollection<schedulingGroup, schedulingGroupOData & schedulingGroupProps> {
    add(values?: any): IBaseExecution<schedulingGroup>;
}
/*********************************************
* schema
**********************************************/
export interface schema extends schemaProps, schemaMethods { }
export interface schemaProps extends  entityProps {
	baseType: string;
	properties: ComplexTypes.property[];
}
export interface schemaMethods extends entityMethods {

}
export interface schemaOData extends entityOData {

}
/*********************************************
* schemaExtension
**********************************************/
export interface schemaExtension extends schemaExtensionProps, schemaExtensionMethods { }
export interface schemaExtensionProps extends  entityProps {
	description: string;
	owner: string;
	properties: ComplexTypes.extensionSchemaProperty[];
	status: string;
	targetTypes: Array<string>[];
}
export interface schemaExtensionMethods extends entityMethods {

}
export interface schemaExtensionOData extends entityOData {

}
/*********************************************
* scopedRoleMembership
**********************************************/
export interface scopedRoleMembership extends scopedRoleMembershipProps, scopedRoleMembershipMethods { }
export interface scopedRoleMembershipProps extends  entityProps {
	administrativeUnitId: string;
	roleId: string;
	roleMemberInfo: ComplexTypes.identity;
}
export interface scopedRoleMembershipMethods extends entityMethods {

}
export interface scopedRoleMembershipOData extends entityOData {

}
export interface scopedRoleMembershipCollection extends IBaseCollection<scopedRoleMembership, scopedRoleMembershipOData & scopedRoleMembershipProps> {
    add(values?: any): IBaseExecution<scopedRoleMembership>;
}
/*********************************************
* search
**********************************************/
export interface search extends searchProps, searchMethods { }
export interface searchProps extends  entityProps {
	contentQuery: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface searchMethods extends entityMethods {

}
export interface searchOData extends entityOData {

}
/*********************************************
* searchAnswer
**********************************************/
export interface searchAnswer extends searchAnswerProps, searchAnswerMethods { }
export interface searchAnswerProps extends  entityProps {
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	webUrl: string;
}
export interface searchAnswerMethods extends entityMethods {

}
export interface searchAnswerOData extends entityOData {

}
/*********************************************
* searchEntity
**********************************************/
export interface searchEntity extends searchEntityProps, searchEntityMethods { }
export interface searchEntityProps extends  entityProps {

}
export interface searchEntityMethods extends entityMethods {
	acronyms(): IBaseCollection<acronym, entity & acronymOData & acronymProps>;
	acronyms(id: string | number): IBaseQuery<acronym> & acronymMethods;
	bookmarks(): IBaseCollection<bookmark, entity & bookmarkOData & bookmarkProps>;
	bookmarks(id: string | number): IBaseQuery<bookmark> & bookmarkMethods;
	qnas(): IBaseCollection<qna, entity & qnaOData & qnaProps>;
	qnas(id: string | number): IBaseQuery<qna> & qnaMethods;
	query(requests): IBaseExecution<ComplexTypes.searchResponse[]>;
}
export interface searchEntityOData extends entityOData {
	acronyms: IBaseResults<acronym>;
	bookmarks: IBaseResults<bookmark>;
	qnas: IBaseResults<qna>;
	query(requests): IBaseExecution<ComplexTypes.searchResponse[]>;
}
/*********************************************
* sectionGroup
**********************************************/
export interface sectionGroup extends sectionGroupProps, sectionGroupMethods { }
export interface sectionGroupProps extends  onenoteEntityHierarchyModelProps {
	sectionGroupsUrl: string;
	sectionsUrl: string;
}
export interface sectionGroupMethods extends onenoteEntityHierarchyModelMethods {
	parentNotebook(): IBaseQuery<notebook> & notebookMethods;
	parentSectionGroup(): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sectionGroups(): sectionGroupCollection;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sections(): onenoteSectionCollection;
	sections(id: string | number): IBaseQuery<onenoteSection> & onenoteSectionMethods;
}
export interface sectionGroupOData extends onenoteEntityHierarchyModelOData {
	parentNotebook: notebook;
	parentSectionGroup: sectionGroup;
	sectionGroups: IBaseResults<sectionGroup>;
	sections: IBaseResults<onenoteSection>;
}
export interface sectionGroupCollection extends IBaseCollection<sectionGroup, sectionGroupOData & sectionGroupProps> {
    add(values?: any): IBaseExecution<sectionGroup>;
}
/*********************************************
* secureScore
**********************************************/
export interface secureScore extends secureScoreProps, secureScoreMethods { }
export interface secureScoreProps extends  entityProps {
	activeUserCount: number;
	averageComparativeScores: ComplexTypes.averageComparativeScore[];
	azureTenantId: string;
	controlScores: ComplexTypes.controlScore[];
	createdDateTime: any;
	currentScore: number;
	enabledServices: Array<string>[];
	licensedUserCount: number;
	maxScore: number;
	vendorInformation: ComplexTypes.securityVendorInformation;
}
export interface secureScoreMethods extends entityMethods {

}
export interface secureScoreOData extends entityOData {

}
export interface secureScoreCollection extends IBaseCollection<secureScore, secureScoreOData & secureScoreProps> {
    add(values?: any): IBaseExecution<secureScore>;
}
/*********************************************
* secureScoreControlProfile
**********************************************/
export interface secureScoreControlProfile extends secureScoreControlProfileProps, secureScoreControlProfileMethods { }
export interface secureScoreControlProfileProps extends  entityProps {
	actionType: string;
	actionUrl: string;
	azureTenantId: string;
	complianceInformation: ComplexTypes.complianceInformation[];
	controlCategory: string;
	controlStateUpdates: ComplexTypes.secureScoreControlStateUpdate[];
	deprecated: boolean;
	implementationCost: string;
	lastModifiedDateTime: any;
	maxScore: number;
	rank: number;
	remediation: string;
	remediationImpact: string;
	service: string;
	threats: Array<string>[];
	tier: string;
	title: string;
	userImpact: string;
	vendorInformation: ComplexTypes.securityVendorInformation;
}
export interface secureScoreControlProfileMethods extends entityMethods {

}
export interface secureScoreControlProfileOData extends entityOData {

}
export interface secureScoreControlProfileCollection extends IBaseCollection<secureScoreControlProfile, secureScoreControlProfileOData & secureScoreControlProfileProps> {
    add(values?: any): IBaseExecution<secureScoreControlProfile>;
}
/*********************************************
* security
**********************************************/
export interface security extends securityProps, securityMethods { }
export interface securityProps   {

}
export interface securityMethods {
	subjectRightsRequests(): subjectRightsRequestCollection;
	subjectRightsRequests(id: string | number): IBaseQuery<subjectRightsRequest> & subjectRightsRequestMethods;
	cases(): IBaseQuery<casesRoot> & casesRootMethods;
	identities(): IBaseQuery<identityContainer> & identityContainerMethods;
	alerts_v2(): alertCollection;
	alerts_v2(id: string | number): IBaseQuery<alert> & alertMethods;
	incidents(): IBaseCollection<incident, incidentOData & incidentProps>;
	incidents(id: string | number): IBaseQuery<incident> & incidentMethods;
	attackSimulation(): IBaseQuery<attackSimulationRoot> & attackSimulationRootMethods;
	labels(): IBaseQuery<labelsRoot> & labelsRootMethods;
	triggers(): IBaseQuery<triggersRoot> & triggersRootMethods;
	triggerTypes(): IBaseQuery<triggerTypesRoot> & triggerTypesRootMethods;
	alerts(): alertCollection;
	alerts(id: string | number): IBaseQuery<alert> & alertMethods;
	secureScoreControlProfiles(): secureScoreControlProfileCollection;
	secureScoreControlProfiles(id: string | number): IBaseQuery<secureScoreControlProfile> & secureScoreControlProfileMethods;
	secureScores(): secureScoreCollection;
	secureScores(id: string | number): IBaseQuery<secureScore> & secureScoreMethods;
	threatIntelligence(): IBaseQuery<threatIntelligence> & threatIntelligenceMethods;
	runHuntingQuery(query, timespan): IBaseExecution<ComplexTypes.huntingQueryResults>;
}
export interface securityOData {
	subjectRightsRequests: IBaseResults<subjectRightsRequest>;
	cases: casesRoot;
	identities: identityContainer;
	alerts_v2: IBaseResults<alert>;
	incidents: IBaseResults<incident>;
	attackSimulation: attackSimulationRoot;
	labels: labelsRoot;
	triggers: triggersRoot;
	triggerTypes: triggerTypesRoot;
	alerts: IBaseResults<alert>;
	secureScoreControlProfiles: IBaseResults<secureScoreControlProfile>;
	secureScores: IBaseResults<secureScore>;
	threatIntelligence: threatIntelligence;
	runHuntingQuery(query, timespan): IBaseExecution<ComplexTypes.huntingQueryResults>;
}
/*********************************************
* securityReportsRoot
**********************************************/
export interface securityReportsRoot extends securityReportsRootProps, securityReportsRootMethods { }
export interface securityReportsRootProps extends  entityProps {

}
export interface securityReportsRootMethods extends entityMethods {
	getAttackSimulationRepeatOffenders(): ComplexTypes.attackSimulationRepeatOffender[];
	getAttackSimulationSimulationUserCoverage(): ComplexTypes.attackSimulationSimulationUserCoverage[];
	getAttackSimulationTrainingUserCoverage(): ComplexTypes.attackSimulationTrainingUserCoverage[];
}
export interface securityReportsRootOData extends entityOData {
	getAttackSimulationRepeatOffenders(): ComplexTypes.attackSimulationRepeatOffender[];
	getAttackSimulationSimulationUserCoverage(): ComplexTypes.attackSimulationSimulationUserCoverage[];
	getAttackSimulationTrainingUserCoverage(): ComplexTypes.attackSimulationTrainingUserCoverage[];
}
/*********************************************
* segment
**********************************************/
export interface segment extends segmentProps, segmentMethods { }
export interface segmentProps extends  entityProps {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	media: ComplexTypes.media[];
	startDateTime: any;
}
export interface segmentMethods extends entityMethods {

}
export interface segmentOData extends entityOData {

}
/*********************************************
* sendDtmfTonesOperation
**********************************************/
export interface sendDtmfTonesOperation extends sendDtmfTonesOperationProps, sendDtmfTonesOperationMethods { }
export interface sendDtmfTonesOperationProps extends  commsOperationProps {
	completionReason: EnumTypes.sendDtmfCompletionReason;
}
export interface sendDtmfTonesOperationMethods extends commsOperationMethods {

}
export interface sendDtmfTonesOperationOData extends commsOperationOData {

}
/*********************************************
* sensor
**********************************************/
export interface sensor extends sensorProps, sensorMethods { }
export interface sensorProps extends  entityProps {
	createdDateTime: any;
	deploymentStatus: EnumTypes.deploymentStatus;
	displayName: string;
	domainName: string;
	healthStatus: EnumTypes.sensorHealthStatus;
	openHealthIssuesCount: number;
	sensorType: EnumTypes.sensorType;
	settings: ComplexTypes.sensorSettings;
	version: string;
}
export interface sensorMethods extends entityMethods {
	healthIssues(): IBaseCollection<healthIssue, entity & healthIssueOData & healthIssueProps>;
	healthIssues(id: string | number): IBaseQuery<healthIssue> & healthIssueMethods;
}
export interface sensorOData extends entityOData {
	healthIssues: IBaseResults<healthIssue>;
}
/*********************************************
* serviceAnnouncement
**********************************************/
export interface serviceAnnouncement extends serviceAnnouncementProps, serviceAnnouncementMethods { }
export interface serviceAnnouncementProps extends  entityProps {

}
export interface serviceAnnouncementMethods extends entityMethods {
	healthOverviews(): serviceHealthCollection;
	healthOverviews(id: string | number): IBaseQuery<serviceHealth> & serviceHealthMethods;
	issues(): serviceHealthIssueCollection;
	issues(id: string | number): IBaseQuery<serviceHealthIssue> & serviceHealthIssueMethods;
	messages(): serviceUpdateMessageCollection;
	messages(id: string | number): IBaseQuery<serviceUpdateMessage> & serviceUpdateMessageMethods;
}
export interface serviceAnnouncementOData extends entityOData {
	healthOverviews: IBaseResults<serviceHealth>;
	issues: IBaseResults<serviceHealthIssue>;
	messages: IBaseResults<serviceUpdateMessage>;
}
/*********************************************
* serviceAnnouncementAttachment
**********************************************/
export interface serviceAnnouncementAttachment extends serviceAnnouncementAttachmentProps, serviceAnnouncementAttachmentMethods { }
export interface serviceAnnouncementAttachmentProps extends  entityProps {
	content: any;
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;
}
export interface serviceAnnouncementAttachmentMethods extends entityMethods {

}
export interface serviceAnnouncementAttachmentOData extends entityOData {

}
export interface serviceAnnouncementAttachmentCollection extends IBaseCollection<serviceAnnouncementAttachment, serviceAnnouncementAttachmentOData & serviceAnnouncementAttachmentProps> {
    add(values?: any): IBaseExecution<serviceAnnouncementAttachment>;
}
/*********************************************
* serviceAnnouncementBase
**********************************************/
export interface serviceAnnouncementBase extends serviceAnnouncementBaseProps, serviceAnnouncementBaseMethods { }
export interface serviceAnnouncementBaseProps extends  entityProps {
	details: ComplexTypes.keyValuePair[];
	endDateTime: any;
	lastModifiedDateTime: any;
	startDateTime: any;
	title: string;
}
export interface serviceAnnouncementBaseMethods extends entityMethods {

}
export interface serviceAnnouncementBaseOData extends entityOData {

}
/*********************************************
* serviceApp
**********************************************/
export interface serviceApp extends serviceAppProps, serviceAppMethods { }
export interface serviceAppProps extends  entityProps {
	application: ComplexTypes.identity;
	effectiveDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	registrationDateTime: any;
	status: EnumTypes.serviceAppStatus;
}
export interface serviceAppMethods extends entityMethods {
	activate(effectiveDateTime): IBaseExecution<serviceApp>;
	deactivate(): IBaseExecution<serviceApp>;
}
export interface serviceAppOData extends entityOData {
	activate(effectiveDateTime): IBaseExecution<serviceApp>;
	deactivate(): IBaseExecution<serviceApp>;
}
export interface serviceAppCollection extends IBaseCollection<serviceApp, serviceAppOData & serviceAppProps> {
    add(values?: any): IBaseExecution<serviceApp>;
}
/*********************************************
* serviceHealth
**********************************************/
export interface serviceHealth extends serviceHealthProps, serviceHealthMethods { }
export interface serviceHealthProps extends  entityProps {
	service: string;
	status: EnumTypes.serviceHealthStatus;
}
export interface serviceHealthMethods extends entityMethods {
	issues(): serviceHealthIssueCollection;
	issues(id: string | number): IBaseQuery<serviceHealthIssue> & serviceHealthIssueMethods;
}
export interface serviceHealthOData extends entityOData {
	issues: IBaseResults<serviceHealthIssue>;
}
export interface serviceHealthCollection extends IBaseCollection<serviceHealth, serviceHealthOData & serviceHealthProps> {
    add(values?: any): IBaseExecution<serviceHealth>;
}
/*********************************************
* serviceHealthIssue
**********************************************/
export interface serviceHealthIssue extends serviceHealthIssueProps, serviceHealthIssueMethods { }
export interface serviceHealthIssueProps extends  serviceAnnouncementBaseProps {
	classification: EnumTypes.serviceHealthClassificationType;
	feature: string;
	featureGroup: string;
	impactDescription: string;
	isResolved: boolean;
	origin: EnumTypes.serviceHealthOrigin;
	posts: ComplexTypes.serviceHealthIssuePost[];
	service: string;
	status: EnumTypes.serviceHealthStatus;
}
export interface serviceHealthIssueMethods extends serviceAnnouncementBaseMethods {
	incidentReport(): any;
}
export interface serviceHealthIssueOData extends serviceAnnouncementBaseOData {
	incidentReport(): any;
}
export interface serviceHealthIssueCollection extends IBaseCollection<serviceHealthIssue, serviceHealthIssueOData & serviceHealthIssueProps> {
    add(values?: any): IBaseExecution<serviceHealthIssue>;
}
/*********************************************
* servicePrincipal
**********************************************/
export interface servicePrincipal extends servicePrincipalProps, servicePrincipalMethods { }
export interface servicePrincipalProps extends  directoryObjectProps {
	accountEnabled: boolean;
	addIns: ComplexTypes.addIn[];
	alternativeNames: Array<string>[];
	appDescription: string;
	appDisplayName: string;
	appId: string;
	applicationTemplateId: string;
	appOwnerOrganizationId: any;
	appRoleAssignmentRequired: boolean;
	appRoles: ComplexTypes.appRole[];
	customSecurityAttributes: ComplexTypes.customSecurityAttributeValue;
	description: string;
	disabledByMicrosoftStatus: string;
	displayName: string;
	homepage: string;
	info: ComplexTypes.informationalUrl;
	keyCredentials: ComplexTypes.keyCredential[];
	loginUrl: string;
	logoutUrl: string;
	notes: string;
	notificationEmailAddresses: Array<string>[];
	oauth2PermissionScopes: ComplexTypes.permissionScope[];
	passwordCredentials: ComplexTypes.passwordCredential[];
	preferredSingleSignOnMode: string;
	preferredTokenSigningKeyThumbprint: string;
	replyUrls: Array<string>[];
	resourceSpecificApplicationPermissions: ComplexTypes.resourceSpecificPermission[];
	samlSingleSignOnSettings: ComplexTypes.samlSingleSignOnSettings;
	servicePrincipalNames: Array<string>[];
	servicePrincipalType: string;
	signInAudience: string;
	tags: Array<string>[];
	tokenEncryptionKeyId: any;
	verifiedPublisher: ComplexTypes.verifiedPublisher;
}
export interface servicePrincipalMethods extends directoryObjectMethods {
	appManagementPolicies(): appManagementPolicyCollection;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy> & appManagementPolicyMethods;
	appRoleAssignedTo(): appRoleAssignmentCollection;
	appRoleAssignedTo(id: string | number): IBaseQuery<appRoleAssignment> & appRoleAssignmentMethods;
	appRoleAssignments(): appRoleAssignmentCollection;
	appRoleAssignments(id: string | number): IBaseQuery<appRoleAssignment> & appRoleAssignmentMethods;
	claimsMappingPolicies(): claimsMappingPolicyCollection;
	claimsMappingPolicies(id: string | number): IBaseQuery<claimsMappingPolicy> & claimsMappingPolicyMethods;
	createdObjects(): directoryObjectCollection;
	createdObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	delegatedPermissionClassifications(): delegatedPermissionClassificationCollection;
	delegatedPermissionClassifications(id: string | number): IBaseQuery<delegatedPermissionClassification> & delegatedPermissionClassificationMethods;
	endpoints(): endpointCollection;
	endpoints(id: string | number): IBaseQuery<ComplexTypes.endpoint>;
	federatedIdentityCredentials(): federatedIdentityCredentialCollection;
	federatedIdentityCredentials(id: string | number): IBaseQuery<federatedIdentityCredential> & federatedIdentityCredentialMethods;
	homeRealmDiscoveryPolicies(): homeRealmDiscoveryPolicyCollection;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy> & homeRealmDiscoveryPolicyMethods;
	memberOf(): directoryObjectCollection;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	oauth2PermissionGrants(): oAuth2PermissionGrantCollection;
	oauth2PermissionGrants(id: string | number): IBaseQuery<oAuth2PermissionGrant> & oAuth2PermissionGrantMethods;
	ownedObjects(): directoryObjectCollection;
	ownedObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	owners(): directoryObjectCollection;
	owners(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	remoteDesktopSecurityConfiguration(): IBaseQuery<remoteDesktopSecurityConfiguration> & remoteDesktopSecurityConfigurationMethods;
	tokenIssuancePolicies(): tokenIssuancePolicyCollection;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy> & tokenIssuancePolicyMethods;
	tokenLifetimePolicies(): tokenLifetimePolicyCollection;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy> & tokenLifetimePolicyMethods;
	transitiveMemberOf(): directoryObjectCollection;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	synchronization(): IBaseQuery<synchronization> & synchronizationMethods;
	addKey(keyCredential, passwordCredential, proof): IBaseExecution<ComplexTypes.keyCredential>;
	addPassword(passwordCredential): IBaseExecution<ComplexTypes.passwordCredential>;
	removeKey(keyId, proof): IBaseExecution<void>;
	removePassword(keyId): IBaseExecution<void>;
	addTokenSigningCertificate(displayName, endDateTime): IBaseExecution<ComplexTypes.selfSignedCertificate>;
}
export interface servicePrincipalOData extends directoryObjectOData {
	appManagementPolicies: IBaseResults<appManagementPolicy>;
	appRoleAssignedTo: IBaseResults<appRoleAssignment>;
	appRoleAssignments: IBaseResults<appRoleAssignment>;
	claimsMappingPolicies: IBaseResults<claimsMappingPolicy>;
	createdObjects: IBaseResults<directoryObject>;
	delegatedPermissionClassifications: IBaseResults<delegatedPermissionClassification>;
	endpoints: IBaseResults<ComplexTypes.endpoint>;
	federatedIdentityCredentials: IBaseResults<federatedIdentityCredential>;
	homeRealmDiscoveryPolicies: IBaseResults<homeRealmDiscoveryPolicy>;
	memberOf: IBaseResults<directoryObject>;
	oauth2PermissionGrants: IBaseResults<oAuth2PermissionGrant>;
	ownedObjects: IBaseResults<directoryObject>;
	owners: IBaseResults<directoryObject>;
	remoteDesktopSecurityConfiguration: remoteDesktopSecurityConfiguration;
	tokenIssuancePolicies: IBaseResults<tokenIssuancePolicy>;
	tokenLifetimePolicies: IBaseResults<tokenLifetimePolicy>;
	transitiveMemberOf: IBaseResults<directoryObject>;
	synchronization: synchronization;
	addKey(keyCredential, passwordCredential, proof): IBaseExecution<ComplexTypes.keyCredential>;
	addPassword(passwordCredential): IBaseExecution<ComplexTypes.passwordCredential>;
	removeKey(keyId, proof): IBaseExecution<void>;
	removePassword(keyId): IBaseExecution<void>;
	addTokenSigningCertificate(displayName, endDateTime): IBaseExecution<ComplexTypes.selfSignedCertificate>;
}
/*********************************************
* servicePrincipalRiskDetection
**********************************************/
export interface servicePrincipalRiskDetection extends servicePrincipalRiskDetectionProps, servicePrincipalRiskDetectionMethods { }
export interface servicePrincipalRiskDetectionProps extends  entityProps {
	activity: EnumTypes.activityType;
	activityDateTime: any;
	additionalInfo: string;
	appId: string;
	correlationId: string;
	detectedDateTime: any;
	detectionTimingType: EnumTypes.riskDetectionTimingType;
	ipAddress: string;
	keyIds: Array<string>[];
	lastUpdatedDateTime: any;
	location: ComplexTypes.signInLocation;
	requestId: string;
	riskDetail: EnumTypes.riskDetail;
	riskEventType: string;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	servicePrincipalDisplayName: string;
	servicePrincipalId: string;
	source: string;
	tokenIssuerType: EnumTypes.tokenIssuerType;
}
export interface servicePrincipalRiskDetectionMethods extends entityMethods {

}
export interface servicePrincipalRiskDetectionOData extends entityOData {

}
export interface servicePrincipalRiskDetectionCollection extends IBaseCollection<servicePrincipalRiskDetection, servicePrincipalRiskDetectionOData & servicePrincipalRiskDetectionProps> {
    add(values?: any): IBaseExecution<servicePrincipalRiskDetection>;
}
/*********************************************
* serviceStorageQuotaBreakdown
**********************************************/
export interface serviceStorageQuotaBreakdown extends serviceStorageQuotaBreakdownProps, serviceStorageQuotaBreakdownMethods { }
export interface serviceStorageQuotaBreakdownProps extends  storageQuotaBreakdownProps {

}
export interface serviceStorageQuotaBreakdownMethods extends storageQuotaBreakdownMethods {

}
export interface serviceStorageQuotaBreakdownOData extends storageQuotaBreakdownOData {

}
export interface serviceStorageQuotaBreakdownCollection extends IBaseCollection<serviceStorageQuotaBreakdown, serviceStorageQuotaBreakdownOData & serviceStorageQuotaBreakdownProps> {
    add(values?: any): IBaseExecution<serviceStorageQuotaBreakdown>;
}
/*********************************************
* serviceUpdateMessage
**********************************************/
export interface serviceUpdateMessage extends serviceUpdateMessageProps, serviceUpdateMessageMethods { }
export interface serviceUpdateMessageProps extends  serviceAnnouncementBaseProps {
	actionRequiredByDateTime: any;
	attachmentsArchive: any;
	body: ComplexTypes.itemBody;
	category: EnumTypes.serviceUpdateCategory;
	hasAttachments: boolean;
	isMajorChange: boolean;
	services: Array<string>[];
	severity: EnumTypes.serviceUpdateSeverity;
	tags: Array<string>[];
	viewPoint: ComplexTypes.serviceUpdateMessageViewpoint;
}
export interface serviceUpdateMessageMethods extends serviceAnnouncementBaseMethods {
	attachments(): serviceAnnouncementAttachmentCollection;
	attachments(id: string | number): IBaseQuery<serviceAnnouncementAttachment> & serviceAnnouncementAttachmentMethods;
}
export interface serviceUpdateMessageOData extends serviceAnnouncementBaseOData {
	attachments: IBaseResults<serviceAnnouncementAttachment>;
}
export interface serviceUpdateMessageCollection extends IBaseCollection<serviceUpdateMessage, serviceUpdateMessageOData & serviceUpdateMessageProps> {
    add(values?: any): IBaseExecution<serviceUpdateMessage>;
}
/*********************************************
* session
**********************************************/
export interface session extends sessionProps, sessionMethods { }
export interface sessionProps extends  entityProps {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	isTest: boolean;
	modalities: EnumTypes.modality[];
	startDateTime: any;
}
export interface sessionMethods extends entityMethods {
	segments(): IBaseCollection<segment, entity & segmentOData & segmentProps>;
	segments(id: string | number): IBaseQuery<segment> & segmentMethods;
}
export interface sessionOData extends entityOData {
	segments: IBaseResults<segment>;
}
/*********************************************
* set
**********************************************/
export interface set extends setProps, setMethods { }
export interface setProps extends  entityProps {
	createdDateTime: any;
	description: string;
	localizedNames: ComplexTypes.localizedName[];
	properties: ComplexTypes.keyValue[];
}
export interface setMethods extends entityMethods {
	children(): IBaseCollection<term, entity & termOData & termProps>;
	children(id: string | number): IBaseQuery<term> & termMethods;
	parentGroup(): IBaseQuery<group> & groupMethods;
	relations(): IBaseCollection<relation, entity & relationOData & relationProps>;
	relations(id: string | number): IBaseQuery<relation> & relationMethods;
	terms(): IBaseCollection<term, entity & termOData & termProps>;
	terms(id: string | number): IBaseQuery<term> & termMethods;
}
export interface setOData extends entityOData {
	children: IBaseResults<term>;
	parentGroup: group;
	relations: IBaseResults<relation>;
	terms: IBaseResults<term>;
}
/*********************************************
* settingStateDeviceSummary
**********************************************/
export interface settingStateDeviceSummary extends settingStateDeviceSummaryProps, settingStateDeviceSummaryMethods { }
export interface settingStateDeviceSummaryProps extends  entityProps {
	compliantDeviceCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	instancePath: string;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	remediatedDeviceCount: number;
	settingName: string;
	unknownDeviceCount: number;
}
export interface settingStateDeviceSummaryMethods extends entityMethods {

}
export interface settingStateDeviceSummaryOData extends entityOData {

}
export interface settingStateDeviceSummaryCollection extends IBaseCollection<settingStateDeviceSummary, settingStateDeviceSummaryOData & settingStateDeviceSummaryProps> {
    add(values?: any): IBaseExecution<settingStateDeviceSummary>;
}
/*********************************************
* sharePointProtectionPolicy
**********************************************/
export interface sharePointProtectionPolicy extends sharePointProtectionPolicyProps, sharePointProtectionPolicyMethods { }
export interface sharePointProtectionPolicyProps extends  protectionPolicyBaseProps {

}
export interface sharePointProtectionPolicyMethods extends protectionPolicyBaseMethods {
	siteInclusionRules(): siteProtectionRuleCollection;
	siteInclusionRules(id: string | number): IBaseQuery<siteProtectionRule> & siteProtectionRuleMethods;
	siteProtectionUnits(): siteProtectionUnitCollection;
	siteProtectionUnits(id: string | number): IBaseQuery<siteProtectionUnit> & siteProtectionUnitMethods;
}
export interface sharePointProtectionPolicyOData extends protectionPolicyBaseOData {
	siteInclusionRules: IBaseResults<siteProtectionRule>;
	siteProtectionUnits: IBaseResults<siteProtectionUnit>;
}
export interface sharePointProtectionPolicyCollection extends IBaseCollection<sharePointProtectionPolicy, sharePointProtectionPolicyOData & sharePointProtectionPolicyProps> {
    add(values?: any): IBaseExecution<sharePointProtectionPolicy>;
}
/*********************************************
* sharePointRestoreSession
**********************************************/
export interface sharePointRestoreSession extends sharePointRestoreSessionProps, sharePointRestoreSessionMethods { }
export interface sharePointRestoreSessionProps extends  restoreSessionBaseProps {

}
export interface sharePointRestoreSessionMethods extends restoreSessionBaseMethods {
	siteRestoreArtifacts(): siteRestoreArtifactCollection;
	siteRestoreArtifacts(id: string | number): IBaseQuery<siteRestoreArtifact> & siteRestoreArtifactMethods;
}
export interface sharePointRestoreSessionOData extends restoreSessionBaseOData {
	siteRestoreArtifacts: IBaseResults<siteRestoreArtifact>;
}
export interface sharePointRestoreSessionCollection extends IBaseCollection<sharePointRestoreSession, sharePointRestoreSessionOData & sharePointRestoreSessionProps> {
    add(values?: any): IBaseExecution<sharePointRestoreSession>;
}
/*********************************************
* sharedDriveItem
**********************************************/
export interface sharedDriveItem extends sharedDriveItemProps, sharedDriveItemMethods { }
export interface sharedDriveItemProps extends  baseItemProps {
	owner: ComplexTypes.identitySet;
}
export interface sharedDriveItemMethods extends baseItemMethods {
	driveItem(): IBaseQuery<driveItem> & driveItemMethods;
	items(): driveItemCollection;
	items(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	list(): IBaseQuery<list> & listMethods;
	listItem(): IBaseQuery<listItem> & listItemMethods;
	permission(): IBaseQuery<permission> & permissionMethods;
	root(): IBaseQuery<driveItem> & driveItemMethods;
	site(): IBaseQuery<site> & siteMethods;
}
export interface sharedDriveItemOData extends baseItemOData {
	driveItem: driveItem;
	items: IBaseResults<driveItem>;
	list: list;
	listItem: listItem;
	permission: permission;
	root: driveItem;
	site: site;
}
/*********************************************
* sharedInsight
**********************************************/
export interface sharedInsight extends sharedInsightProps, sharedInsightMethods { }
export interface sharedInsightProps extends  entityProps {
	lastShared: ComplexTypes.sharingDetail;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	sharingHistory: ComplexTypes.sharingDetail[];
}
export interface sharedInsightMethods extends entityMethods {
	lastSharedMethod(): IBaseQuery<entity> & entityMethods;
	resource(): IBaseQuery<entity> & entityMethods;
}
export interface sharedInsightOData extends entityOData {
	lastSharedMethod: entity;
	resource: entity;
}
export interface sharedInsightCollection extends IBaseCollection<sharedInsight, sharedInsightOData & sharedInsightProps> {
    add(values?: any): IBaseExecution<sharedInsight>;
}
/*********************************************
* sharedPCConfiguration
**********************************************/
export interface sharedPCConfiguration extends sharedPCConfigurationProps, sharedPCConfigurationMethods { }
export interface sharedPCConfigurationProps extends  deviceConfigurationProps {
	accountManagerPolicy: ComplexTypes.sharedPCAccountManagerPolicy;
	allowedAccounts: EnumTypes.sharedPCAllowedAccountType;
	allowLocalStorage: boolean;
	disableAccountManager: boolean;
	disableEduPolicies: boolean;
	disablePowerPolicies: boolean;
	disableSignInOnResume: boolean;
	enabled: boolean;
	idleTimeBeforeSleepInSeconds: number;
	kioskAppDisplayName: string;
	kioskAppUserModelId: string;
	maintenanceStartTime: any;
}
export interface sharedPCConfigurationMethods extends deviceConfigurationMethods {

}
export interface sharedPCConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* sharedWithChannelTeamInfo
**********************************************/
export interface sharedWithChannelTeamInfo extends sharedWithChannelTeamInfoProps, sharedWithChannelTeamInfoMethods { }
export interface sharedWithChannelTeamInfoProps extends  teamInfoProps {
	isHostTeam: boolean;
}
export interface sharedWithChannelTeamInfoMethods extends teamInfoMethods {
	allowedMembers(): conversationMemberCollection;
	allowedMembers(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
}
export interface sharedWithChannelTeamInfoOData extends teamInfoOData {
	allowedMembers: IBaseResults<conversationMember>;
}
export interface sharedWithChannelTeamInfoCollection extends IBaseCollection<sharedWithChannelTeamInfo, sharedWithChannelTeamInfoOData & sharedWithChannelTeamInfoProps> {
    add(values?: any): IBaseExecution<sharedWithChannelTeamInfo>;
}
/*********************************************
* sharepoint
**********************************************/
export interface sharepoint extends sharepointProps, sharepointMethods { }
export interface sharepointProps extends  entityProps {

}
export interface sharepointMethods extends entityMethods {
	settings(): IBaseQuery<sharepointSettings> & sharepointSettingsMethods;
}
export interface sharepointOData extends entityOData {
	settings: sharepointSettings;
}
/*********************************************
* sharepointSettings
**********************************************/
export interface sharepointSettings extends sharepointSettingsProps, sharepointSettingsMethods { }
export interface sharepointSettingsProps extends  entityProps {
	allowedDomainGuidsForSyncApp: Array<any>[];
	availableManagedPathsForSiteCreation: Array<string>[];
	deletedUserPersonalSiteRetentionPeriodInDays: number;
	excludedFileExtensionsForSyncApp: Array<string>[];
	idleSessionSignOut: ComplexTypes.idleSessionSignOut;
	imageTaggingOption: EnumTypes.imageTaggingChoice;
	isCommentingOnSitePagesEnabled: boolean;
	isFileActivityNotificationEnabled: boolean;
	isLegacyAuthProtocolsEnabled: boolean;
	isLoopEnabled: boolean;
	isMacSyncAppEnabled: boolean;
	isRequireAcceptingUserToMatchInvitedUserEnabled: boolean;
	isResharingByExternalUsersEnabled: boolean;
	isSharePointMobileNotificationEnabled: boolean;
	isSharePointNewsfeedEnabled: boolean;
	isSiteCreationEnabled: boolean;
	isSiteCreationUIEnabled: boolean;
	isSitePagesCreationEnabled: boolean;
	isSitesStorageLimitAutomatic: boolean;
	isSyncButtonHiddenOnPersonalSite: boolean;
	isUnmanagedSyncAppForTenantRestricted: boolean;
	personalSiteDefaultStorageLimitInMB: number;
	sharingAllowedDomainList: Array<string>[];
	sharingBlockedDomainList: Array<string>[];
	sharingCapability: EnumTypes.sharingCapabilities;
	sharingDomainRestrictionMode: EnumTypes.sharingDomainRestrictionMode;
	siteCreationDefaultManagedPath: string;
	siteCreationDefaultStorageLimitInMB: number;
	tenantDefaultTimezone: string;
}
export interface sharepointSettingsMethods extends entityMethods {

}
export interface sharepointSettingsOData extends entityOData {

}
/*********************************************
* shift
**********************************************/
export interface shift extends shiftProps, shiftMethods { }
export interface shiftProps extends  changeTrackedEntityProps {
	draftShift: ComplexTypes.shiftItem;
	schedulingGroupId: string;
	sharedShift: ComplexTypes.shiftItem;
	userId: string;
}
export interface shiftMethods extends changeTrackedEntityMethods {

}
export interface shiftOData extends changeTrackedEntityOData {

}
export interface shiftCollection extends IBaseCollection<shift, shiftOData & shiftProps> {
    add(values?: any): IBaseExecution<shift>;
}
/*********************************************
* shiftPreferences
**********************************************/
export interface shiftPreferences extends shiftPreferencesProps, shiftPreferencesMethods { }
export interface shiftPreferencesProps extends  changeTrackedEntityProps {
	availability: ComplexTypes.shiftAvailability[];
}
export interface shiftPreferencesMethods extends changeTrackedEntityMethods {

}
export interface shiftPreferencesOData extends changeTrackedEntityOData {

}
/*********************************************
* signIn
**********************************************/
export interface signIn extends signInProps, signInMethods { }
export interface signInProps extends  entityProps {
	appDisplayName: string;
	appId: string;
	appliedConditionalAccessPolicies: ComplexTypes.appliedConditionalAccessPolicy[];
	clientAppUsed: string;
	conditionalAccessStatus: EnumTypes.conditionalAccessStatus;
	correlationId: string;
	createdDateTime: any;
	deviceDetail: ComplexTypes.deviceDetail;
	ipAddress: string;
	isInteractive: boolean;
	location: ComplexTypes.signInLocation;
	resourceDisplayName: string;
	resourceId: string;
	riskDetail: EnumTypes.riskDetail;
	riskEventTypes: EnumTypes.riskEventType[];
	riskEventTypes_v2: Array<string>[];
	riskLevelAggregated: EnumTypes.riskLevel;
	riskLevelDuringSignIn: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	status: ComplexTypes.signInStatus;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;
}
export interface signInMethods extends entityMethods {

}
export interface signInOData extends entityOData {

}
export interface signInCollection extends IBaseCollection<signIn, signInOData & signInProps> {
    add(values?: any): IBaseExecution<signIn>;
}
/*********************************************
* simulation
**********************************************/
export interface simulation extends simulationProps, simulationMethods { }
export interface simulationProps extends  entityProps {
	attackTechnique: EnumTypes.simulationAttackTechnique;
	attackType: EnumTypes.simulationAttackType;
	automationId: string;
	completionDateTime: any;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	durationInDays: number;
	endUserNotificationSetting: ComplexTypes.endUserNotificationSetting;
	excludedAccountTarget: ComplexTypes.accountTargetContent;
	includedAccountTarget: ComplexTypes.accountTargetContent;
	isAutomated: boolean;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	launchDateTime: any;
	oAuthConsentAppDetail: ComplexTypes.oAuthConsentAppDetail;
	payloadDeliveryPlatform: EnumTypes.payloadDeliveryPlatform;
	report: ComplexTypes.simulationReport;
	status: EnumTypes.simulationStatus;
	trainingSetting: ComplexTypes.trainingSetting;
}
export interface simulationMethods extends entityMethods {
	landingPage(): IBaseQuery<landingPage> & landingPageMethods;
	loginPage(): IBaseQuery<loginPage> & loginPageMethods;
	payload(): IBaseQuery<payload> & payloadMethods;
}
export interface simulationOData extends entityOData {
	landingPage: landingPage;
	loginPage: loginPage;
	payload: payload;
}
export interface simulationCollection extends IBaseCollection<simulation, simulationOData & simulationProps> {
    add(values?: any): IBaseExecution<simulation>;
}
/*********************************************
* simulationAutomation
**********************************************/
export interface simulationAutomation extends simulationAutomationProps, simulationAutomationMethods { }
export interface simulationAutomationProps extends  entityProps {
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	lastRunDateTime: any;
	nextRunDateTime: any;
	status: EnumTypes.simulationAutomationStatus;
}
export interface simulationAutomationMethods extends entityMethods {
	runs(): simulationAutomationRunCollection;
	runs(id: string | number): IBaseQuery<simulationAutomationRun> & simulationAutomationRunMethods;
}
export interface simulationAutomationOData extends entityOData {
	runs: IBaseResults<simulationAutomationRun>;
}
export interface simulationAutomationCollection extends IBaseCollection<simulationAutomation, simulationAutomationOData & simulationAutomationProps> {
    add(values?: any): IBaseExecution<simulationAutomation>;
}
/*********************************************
* simulationAutomationRun
**********************************************/
export interface simulationAutomationRun extends simulationAutomationRunProps, simulationAutomationRunMethods { }
export interface simulationAutomationRunProps extends  entityProps {
	endDateTime: any;
	simulationId: string;
	startDateTime: any;
	status: EnumTypes.simulationAutomationRunStatus;
}
export interface simulationAutomationRunMethods extends entityMethods {

}
export interface simulationAutomationRunOData extends entityOData {

}
export interface simulationAutomationRunCollection extends IBaseCollection<simulationAutomationRun, simulationAutomationRunOData & simulationAutomationRunProps> {
    add(values?: any): IBaseExecution<simulationAutomationRun>;
}
/*********************************************
* singleValueLegacyExtendedProperty
**********************************************/
export interface singleValueLegacyExtendedProperty extends singleValueLegacyExtendedPropertyProps, singleValueLegacyExtendedPropertyMethods { }
export interface singleValueLegacyExtendedPropertyProps extends  entityProps {
	value: string;
}
export interface singleValueLegacyExtendedPropertyMethods extends entityMethods {

}
export interface singleValueLegacyExtendedPropertyOData extends entityOData {

}
export interface singleValueLegacyExtendedPropertyCollection extends IBaseCollection<singleValueLegacyExtendedProperty, singleValueLegacyExtendedPropertyOData & singleValueLegacyExtendedPropertyProps> {
    add(values?: any): IBaseExecution<singleValueLegacyExtendedProperty>;
}
/*********************************************
* site
**********************************************/
export interface site extends siteProps, siteMethods { }
export interface siteProps extends  baseItemProps {
	displayName: string;
	error: ComplexTypes.publicError;
	isPersonalSite: boolean;
	root: ComplexTypes.root;
	sharepointIds: ComplexTypes.sharepointIds;
	siteCollection: ComplexTypes.siteCollection;
}
export interface siteMethods extends baseItemMethods {
	analytics(): IBaseQuery<itemAnalytics> & itemAnalyticsMethods;
	columns(): columnDefinitionCollection;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): contentTypeCollection;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive> & driveMethods;
	drives(): driveCollection;
	drives(id: string | number): IBaseQuery<drive> & driveMethods;
	externalColumns(): columnDefinitionCollection;
	externalColumns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	items(): baseItemCollection;
	items(id: string | number): IBaseQuery<baseItem> & baseItemMethods;
	lists(): listCollection;
	lists(id: string | number): IBaseQuery<list> & listMethods;
	operations(): richLongRunningOperationCollection;
	operations(id: string | number): IBaseQuery<richLongRunningOperation> & richLongRunningOperationMethods;
	pages(): baseSitePageCollection;
	pages(id: string | number): IBaseQuery<baseSitePage> & baseSitePageMethods;
	permissions(): permissionCollection;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
	sites(): siteCollection;
	sites(id: string | number): IBaseQuery<site> & siteMethods;
	termStore(): IBaseQuery<store> & storeMethods;
	termStores(): IBaseCollection<store, baseItem & storeOData & storeProps>;
	termStores(id: string | number): IBaseQuery<store> & storeMethods;
	onenote(): IBaseQuery<onenote> & onenoteMethods;
	getActivitiesByInterval(): itemActivityStat[];
	getActivitiesByInterval(startDateTime, endDateTime, interval): itemActivityStat[];
	getApplicableContentTypesForList(listId): contentType[];
	getByPath(path): site;
}
export interface siteOData extends baseItemOData {
	analytics: itemAnalytics;
	columns: IBaseResults<columnDefinition>;
	contentTypes: IBaseResults<contentType>;
	drive: drive;
	drives: IBaseResults<drive>;
	externalColumns: IBaseResults<columnDefinition>;
	items: IBaseResults<baseItem>;
	lists: IBaseResults<list>;
	operations: IBaseResults<richLongRunningOperation>;
	pages: IBaseResults<baseSitePage>;
	permissions: IBaseResults<permission>;
	sites: IBaseResults<site>;
	termStore: store;
	termStores: IBaseResults<store>;
	onenote: onenote;
	getActivitiesByInterval(): itemActivityStat[];
	getActivitiesByInterval(startDateTime, endDateTime, interval): itemActivityStat[];
	getApplicableContentTypesForList(listId): contentType[];
	getByPath(path): site;
}
export interface siteCollection extends IBaseCollection<site, siteOData & siteProps> {
    add(values?: any): IBaseExecution<site>;
}
/*********************************************
* sitePage
**********************************************/
export interface sitePage extends sitePageProps, sitePageMethods { }
export interface sitePageProps extends  baseSitePageProps {
	promotionKind: EnumTypes.pagePromotionType;
	reactions: ComplexTypes.reactionsFacet;
	showComments: boolean;
	showRecommendedPages: boolean;
	thumbnailWebUrl: string;
	titleArea: ComplexTypes.titleArea;
}
export interface sitePageMethods extends baseSitePageMethods {
	canvasLayout(): IBaseQuery<canvasLayout> & canvasLayoutMethods;
	webParts(): webPartCollection;
	webParts(id: string | number): IBaseQuery<webPart> & webPartMethods;
	publish(): IBaseExecution<void>;
	getWebPartsByPosition(webPartIndex, horizontalSectionId, isInVerticalSection, columnId): IBaseExecution<webPart[]>;
}
export interface sitePageOData extends baseSitePageOData {
	canvasLayout: canvasLayout;
	webParts: IBaseResults<webPart>;
	publish(): IBaseExecution<void>;
	getWebPartsByPosition(webPartIndex, horizontalSectionId, isInVerticalSection, columnId): IBaseExecution<webPart[]>;
}
/*********************************************
* siteProtectionRule
**********************************************/
export interface siteProtectionRule extends siteProtectionRuleProps, siteProtectionRuleMethods { }
export interface siteProtectionRuleProps extends  protectionRuleBaseProps {
	siteExpression: string;
}
export interface siteProtectionRuleMethods extends protectionRuleBaseMethods {

}
export interface siteProtectionRuleOData extends protectionRuleBaseOData {

}
export interface siteProtectionRuleCollection extends IBaseCollection<siteProtectionRule, siteProtectionRuleOData & siteProtectionRuleProps> {
    add(values?: any): IBaseExecution<siteProtectionRule>;
}
/*********************************************
* siteProtectionUnit
**********************************************/
export interface siteProtectionUnit extends siteProtectionUnitProps, siteProtectionUnitMethods { }
export interface siteProtectionUnitProps extends  protectionUnitBaseProps {
	siteId: string;
	siteName: string;
	siteWebUrl: string;
}
export interface siteProtectionUnitMethods extends protectionUnitBaseMethods {

}
export interface siteProtectionUnitOData extends protectionUnitBaseOData {

}
export interface siteProtectionUnitCollection extends IBaseCollection<siteProtectionUnit, siteProtectionUnitOData & siteProtectionUnitProps> {
    add(values?: any): IBaseExecution<siteProtectionUnit>;
}
/*********************************************
* siteRestoreArtifact
**********************************************/
export interface siteRestoreArtifact extends siteRestoreArtifactProps, siteRestoreArtifactMethods { }
export interface siteRestoreArtifactProps extends  restoreArtifactBaseProps {
	restoredSiteId: string;
	restoredSiteName: string;
	restoredSiteWebUrl: string;
}
export interface siteRestoreArtifactMethods extends restoreArtifactBaseMethods {

}
export interface siteRestoreArtifactOData extends restoreArtifactBaseOData {

}
export interface siteRestoreArtifactCollection extends IBaseCollection<siteRestoreArtifact, siteRestoreArtifactOData & siteRestoreArtifactProps> {
    add(values?: any): IBaseExecution<siteRestoreArtifact>;
}
/*********************************************
* siteSource
**********************************************/
export interface siteSource extends siteSourceProps, siteSourceMethods { }
export interface siteSourceProps extends  dataSourceProps {

}
export interface siteSourceMethods extends dataSourceMethods {
	site(): IBaseQuery<site> & siteMethods;
}
export interface siteSourceOData extends dataSourceOData {
	site: site;
}
/*********************************************
* skypeForBusinessUserConversationMember
**********************************************/
export interface skypeForBusinessUserConversationMember extends skypeForBusinessUserConversationMemberProps, skypeForBusinessUserConversationMemberMethods { }
export interface skypeForBusinessUserConversationMemberProps extends  conversationMemberProps {
	tenantId: string;
	userId: string;
}
export interface skypeForBusinessUserConversationMemberMethods extends conversationMemberMethods {

}
export interface skypeForBusinessUserConversationMemberOData extends conversationMemberOData {

}
/*********************************************
* skypeUserConversationMember
**********************************************/
export interface skypeUserConversationMember extends skypeUserConversationMemberProps, skypeUserConversationMemberMethods { }
export interface skypeUserConversationMemberProps extends  conversationMemberProps {
	skypeId: string;
}
export interface skypeUserConversationMemberMethods extends conversationMemberMethods {

}
export interface skypeUserConversationMemberOData extends conversationMemberOData {

}
/*********************************************
* smsAuthenticationMethodConfiguration
**********************************************/
export interface smsAuthenticationMethodConfiguration extends smsAuthenticationMethodConfigurationProps, smsAuthenticationMethodConfigurationMethods { }
export interface smsAuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {

}
export interface smsAuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): smsAuthenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<smsAuthenticationMethodTarget> & smsAuthenticationMethodTargetMethods;
}
export interface smsAuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<smsAuthenticationMethodTarget>;
}
/*********************************************
* smsAuthenticationMethodTarget
**********************************************/
export interface smsAuthenticationMethodTarget extends smsAuthenticationMethodTargetProps, smsAuthenticationMethodTargetMethods { }
export interface smsAuthenticationMethodTargetProps extends  authenticationMethodTargetProps {
	isUsableForSignIn: boolean;
}
export interface smsAuthenticationMethodTargetMethods extends authenticationMethodTargetMethods {

}
export interface smsAuthenticationMethodTargetOData extends authenticationMethodTargetOData {

}
export interface smsAuthenticationMethodTargetCollection extends IBaseCollection<smsAuthenticationMethodTarget, smsAuthenticationMethodTargetOData & smsAuthenticationMethodTargetProps> {
    add(values?: any): IBaseExecution<smsAuthenticationMethodTarget>;
}
/*********************************************
* socialIdentityProvider
**********************************************/
export interface socialIdentityProvider extends socialIdentityProviderProps, socialIdentityProviderMethods { }
export interface socialIdentityProviderProps extends  identityProviderBaseProps {
	clientId: string;
	clientSecret: string;
	identityProviderType: string;
}
export interface socialIdentityProviderMethods extends identityProviderBaseMethods {

}
export interface socialIdentityProviderOData extends identityProviderBaseOData {

}
/*********************************************
* softwareOathAuthenticationMethod
**********************************************/
export interface softwareOathAuthenticationMethod extends softwareOathAuthenticationMethodProps, softwareOathAuthenticationMethodMethods { }
export interface softwareOathAuthenticationMethodProps extends  authenticationMethodProps {
	secretKey: string;
}
export interface softwareOathAuthenticationMethodMethods extends authenticationMethodMethods {

}
export interface softwareOathAuthenticationMethodOData extends authenticationMethodOData {

}
export interface softwareOathAuthenticationMethodCollection extends IBaseCollection<softwareOathAuthenticationMethod, softwareOathAuthenticationMethodOData & softwareOathAuthenticationMethodProps> {
    add(values?: any): IBaseExecution<softwareOathAuthenticationMethod>;
}
/*********************************************
* softwareOathAuthenticationMethodConfiguration
**********************************************/
export interface softwareOathAuthenticationMethodConfiguration extends softwareOathAuthenticationMethodConfigurationProps, softwareOathAuthenticationMethodConfigurationMethods { }
export interface softwareOathAuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {

}
export interface softwareOathAuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): authenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
}
export interface softwareOathAuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<authenticationMethodTarget>;
}
/*********************************************
* softwareUpdateStatusSummary
**********************************************/
export interface softwareUpdateStatusSummary extends softwareUpdateStatusSummaryProps, softwareUpdateStatusSummaryMethods { }
export interface softwareUpdateStatusSummaryProps extends  entityProps {
	compliantDeviceCount: number;
	compliantUserCount: number;
	conflictDeviceCount: number;
	conflictUserCount: number;
	displayName: string;
	errorDeviceCount: number;
	errorUserCount: number;
	nonCompliantDeviceCount: number;
	nonCompliantUserCount: number;
	notApplicableDeviceCount: number;
	notApplicableUserCount: number;
	remediatedDeviceCount: number;
	remediatedUserCount: number;
	unknownDeviceCount: number;
	unknownUserCount: number;
}
export interface softwareUpdateStatusSummaryMethods extends entityMethods {

}
export interface softwareUpdateStatusSummaryOData extends entityOData {

}
/*********************************************
* solutionsRoot
**********************************************/
export interface solutionsRoot extends solutionsRootProps, solutionsRootMethods { }
export interface solutionsRootProps   {

}
export interface solutionsRootMethods {
	bookingBusinesses(): bookingBusinessCollection;
	bookingBusinesses(id: string | number): IBaseQuery<bookingBusiness> & bookingBusinessMethods;
	bookingCurrencies(): bookingCurrencyCollection;
	bookingCurrencies(id: string | number): IBaseQuery<bookingCurrency> & bookingCurrencyMethods;
	backupRestore(): IBaseQuery<backupRestoreRoot> & backupRestoreRootMethods;
	virtualEvents(): IBaseQuery<virtualEventsRoot> & virtualEventsRootMethods;
}
export interface solutionsRootOData {
	bookingBusinesses: IBaseResults<bookingBusiness>;
	bookingCurrencies: IBaseResults<bookingCurrency>;
	backupRestore: backupRestoreRoot;
	virtualEvents: virtualEventsRoot;
}
/*********************************************
* sslCertificate
**********************************************/
export interface sslCertificate extends sslCertificateProps, sslCertificateMethods { }
export interface sslCertificateProps extends  artifactProps {
	expirationDateTime: any;
	fingerprint: string;
	firstSeenDateTime: any;
	issueDateTime: any;
	issuer: ComplexTypes.sslCertificateEntity;
	lastSeenDateTime: any;
	serialNumber: string;
	sha1: string;
	subject: ComplexTypes.sslCertificateEntity;
}
export interface sslCertificateMethods extends artifactMethods {
	relatedHosts(): IBaseCollection<host, artifact & hostOData & hostProps>;
	relatedHosts(id: string | number): IBaseQuery<host> & hostMethods;
}
export interface sslCertificateOData extends artifactOData {
	relatedHosts: IBaseResults<host>;
}
/*********************************************
* standardWebPart
**********************************************/
export interface standardWebPart extends standardWebPartProps, standardWebPartMethods { }
export interface standardWebPartProps extends  webPartProps {
	containerTextWebPartId: string;
	data: ComplexTypes.webPartData;
	webPartType: string;
}
export interface standardWebPartMethods extends webPartMethods {

}
export interface standardWebPartOData extends webPartOData {

}
/*********************************************
* startHoldMusicOperation
**********************************************/
export interface startHoldMusicOperation extends startHoldMusicOperationProps, startHoldMusicOperationMethods { }
export interface startHoldMusicOperationProps extends  commsOperationProps {

}
export interface startHoldMusicOperationMethods extends commsOperationMethods {

}
export interface startHoldMusicOperationOData extends commsOperationOData {

}
/*********************************************
* stopHoldMusicOperation
**********************************************/
export interface stopHoldMusicOperation extends stopHoldMusicOperationProps, stopHoldMusicOperationMethods { }
export interface stopHoldMusicOperationProps extends  commsOperationProps {

}
export interface stopHoldMusicOperationMethods extends commsOperationMethods {

}
export interface stopHoldMusicOperationOData extends commsOperationOData {

}
/*********************************************
* storage
**********************************************/
export interface storage extends storageProps, storageMethods { }
export interface storageProps   {

}
export interface storageMethods {
	fileStorage(): IBaseQuery<fileStorage> & fileStorageMethods;
	settings(): IBaseQuery<storageSettings> & storageSettingsMethods;
}
export interface storageOData {
	fileStorage: fileStorage;
	settings: storageSettings;
}
/*********************************************
* storageQuotaBreakdown
**********************************************/
export interface storageQuotaBreakdown extends storageQuotaBreakdownProps, storageQuotaBreakdownMethods { }
export interface storageQuotaBreakdownProps extends  entityProps {
	displayName: string;
	manageWebUrl: string;
	used: number;
}
export interface storageQuotaBreakdownMethods extends entityMethods {

}
export interface storageQuotaBreakdownOData extends entityOData {

}
/*********************************************
* storageSettings
**********************************************/
export interface storageSettings extends storageSettingsProps, storageSettingsMethods { }
export interface storageSettingsProps extends  entityProps {

}
export interface storageSettingsMethods extends entityMethods {
	quota(): IBaseQuery<unifiedStorageQuota> & unifiedStorageQuotaMethods;
}
export interface storageSettingsOData extends entityOData {
	quota: unifiedStorageQuota;
}
/*********************************************
* store
**********************************************/
export interface store extends storeProps, storeMethods { }
export interface storeProps extends  entityProps {
	defaultLanguageTag: string;
	languageTags: Array<string>[];
}
export interface storeMethods extends entityMethods {
	groups(): groupCollection;
	groups(id: string | number): IBaseQuery<group> & groupMethods;
	sets(): IBaseCollection<set, entity & setOData & setProps>;
	sets(id: string | number): IBaseQuery<set> & setMethods;
}
export interface storeOData extends entityOData {
	groups: IBaseResults<group>;
	sets: IBaseResults<set>;
}
/*********************************************
* stsPolicy
**********************************************/
export interface stsPolicy extends stsPolicyProps, stsPolicyMethods { }
export interface stsPolicyProps extends  policyBaseProps {
	definition: Array<string>[];
	isOrganizationDefault: boolean;
}
export interface stsPolicyMethods extends policyBaseMethods {
	appliesTo(): directoryObjectCollection;
	appliesTo(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
}
export interface stsPolicyOData extends policyBaseOData {
	appliesTo: IBaseResults<directoryObject>;
}
/*********************************************
* subcategoryTemplate
**********************************************/
export interface subcategoryTemplate extends subcategoryTemplateProps, subcategoryTemplateMethods { }
export interface subcategoryTemplateProps extends  filePlanDescriptorTemplateProps {

}
export interface subcategoryTemplateMethods extends filePlanDescriptorTemplateMethods {

}
export interface subcategoryTemplateOData extends filePlanDescriptorTemplateOData {

}
/*********************************************
* subdomain
**********************************************/
export interface subdomain extends subdomainProps, subdomainMethods { }
export interface subdomainProps extends  entityProps {
	firstSeenDateTime: any;
}
export interface subdomainMethods extends entityMethods {
	host(): IBaseQuery<host> & hostMethods;
}
export interface subdomainOData extends entityOData {
	host: host;
}
/*********************************************
* subjectRightsRequest
**********************************************/
export interface subjectRightsRequest extends subjectRightsRequestProps, subjectRightsRequestMethods { }
export interface subjectRightsRequestProps extends  entityProps {
	assignedTo: ComplexTypes.identity;
	closedDateTime: any;
	contentQuery: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	dataSubject: ComplexTypes.dataSubject;
	dataSubjectType: EnumTypes.dataSubjectType;
	description: string;
	displayName: string;
	externalId: string;
	history: ComplexTypes.subjectRightsRequestHistory[];
	includeAllVersions: boolean;
	includeAuthoredContent: boolean;
	insight: ComplexTypes.subjectRightsRequestDetail;
	internalDueDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	mailboxLocations: ComplexTypes.subjectRightsRequestMailboxLocation;
	pauseAfterEstimate: boolean;
	regulations: Array<string>[];
	siteLocations: ComplexTypes.subjectRightsRequestSiteLocation;
	stages: ComplexTypes.subjectRightsRequestStageDetail[];
	status: EnumTypes.subjectRightsRequestStatus;
	type: EnumTypes.subjectRightsRequestType;
}
export interface subjectRightsRequestMethods extends entityMethods {
	approvers(): userCollection;
	approvers(id: string | number): IBaseQuery<user> & userMethods;
	collaborators(): userCollection;
	collaborators(id: string | number): IBaseQuery<user> & userMethods;
	notes(): authoredNoteCollection;
	notes(id: string | number): IBaseQuery<authoredNote> & authoredNoteMethods;
	team(): IBaseQuery<team> & teamMethods;
	getFinalAttachment(): any;
	getFinalReport(): any;
}
export interface subjectRightsRequestOData extends entityOData {
	approvers: IBaseResults<user>;
	collaborators: IBaseResults<user>;
	notes: IBaseResults<authoredNote>;
	team: team;
	getFinalAttachment(): any;
	getFinalReport(): any;
}
export interface subjectRightsRequestCollection extends IBaseCollection<subjectRightsRequest, subjectRightsRequestOData & subjectRightsRequestProps> {
    add(values?: any): IBaseExecution<subjectRightsRequest>;
}
/*********************************************
* subscribeToToneOperation
**********************************************/
export interface subscribeToToneOperation extends subscribeToToneOperationProps, subscribeToToneOperationMethods { }
export interface subscribeToToneOperationProps extends  commsOperationProps {

}
export interface subscribeToToneOperationMethods extends commsOperationMethods {

}
export interface subscribeToToneOperationOData extends commsOperationOData {

}
/*********************************************
* subscribedSku
**********************************************/
export interface subscribedSku extends subscribedSkuProps, subscribedSkuMethods { }
export interface subscribedSkuProps extends  entityProps {
	accountId: string;
	accountName: string;
	appliesTo: string;
	capabilityStatus: string;
	consumedUnits: number;
	prepaidUnits: ComplexTypes.licenseUnitsDetail;
	servicePlans: ComplexTypes.servicePlanInfo[];
	skuId: any;
	skuPartNumber: string;
	subscriptionIds: Array<string>[];
}
export interface subscribedSkuMethods extends entityMethods {

}
export interface subscribedSkuOData extends entityOData {

}
/*********************************************
* subscription
**********************************************/
export interface subscription extends subscriptionProps, subscriptionMethods { }
export interface subscriptionProps extends  entityProps {
	applicationId: string;
	changeType: string;
	clientState: string;
	creatorId: string;
	encryptionCertificate: string;
	encryptionCertificateId: string;
	expirationDateTime: any;
	includeResourceData: boolean;
	latestSupportedTlsVersion: string;
	lifecycleNotificationUrl: string;
	notificationQueryOptions: string;
	notificationUrl: string;
	notificationUrlAppId: string;
	resource: string;
}
export interface subscriptionMethods extends entityMethods {
	reauthorize(): IBaseExecution<void>;
}
export interface subscriptionOData extends entityOData {
	reauthorize(): IBaseExecution<void>;
}
export interface subscriptionCollection extends IBaseCollection<subscription, subscriptionOData & subscriptionProps> {
    add(values?: any): IBaseExecution<subscription>;
}
/*********************************************
* swapShiftsChangeRequest
**********************************************/
export interface swapShiftsChangeRequest extends swapShiftsChangeRequestProps, swapShiftsChangeRequestMethods { }
export interface swapShiftsChangeRequestProps extends  offerShiftRequestProps {
	recipientShiftId: string;
}
export interface swapShiftsChangeRequestMethods extends offerShiftRequestMethods {

}
export interface swapShiftsChangeRequestOData extends offerShiftRequestOData {

}
export interface swapShiftsChangeRequestCollection extends IBaseCollection<swapShiftsChangeRequest, swapShiftsChangeRequestOData & swapShiftsChangeRequestProps> {
    add(values?: any): IBaseExecution<swapShiftsChangeRequest>;
}
/*********************************************
* synchronization
**********************************************/
export interface synchronization extends synchronizationProps, synchronizationMethods { }
export interface synchronizationProps extends  entityProps {
	secrets: ComplexTypes.synchronizationSecretKeyStringValuePair[];
}
export interface synchronizationMethods extends entityMethods {
	jobs(): synchronizationJobCollection;
	jobs(id: string | number): IBaseQuery<synchronizationJob> & synchronizationJobMethods;
	templates(): synchronizationTemplateCollection;
	templates(id: string | number): IBaseQuery<synchronizationTemplate> & synchronizationTemplateMethods;
	acquireAccessToken(credentials): IBaseExecution<void>;
}
export interface synchronizationOData extends entityOData {
	jobs: IBaseResults<synchronizationJob>;
	templates: IBaseResults<synchronizationTemplate>;
	acquireAccessToken(credentials): IBaseExecution<void>;
}
/*********************************************
* synchronizationJob
**********************************************/
export interface synchronizationJob extends synchronizationJobProps, synchronizationJobMethods { }
export interface synchronizationJobProps extends  entityProps {
	schedule: ComplexTypes.synchronizationSchedule;
	status: ComplexTypes.synchronizationStatus;
	synchronizationJobSettings: ComplexTypes.keyValuePair[];
	templateId: string;
}
export interface synchronizationJobMethods extends entityMethods {
	bulkUpload(): IBaseQuery<bulkUpload> & bulkUploadMethods;
	schema(): IBaseQuery<synchronizationSchema> & synchronizationSchemaMethods;
	pause(): IBaseExecution<void>;
	provisionOnDemand(parameters): IBaseExecution<ComplexTypes.stringKeyStringValuePair>;
	restart(criteria): IBaseExecution<void>;
	start(): IBaseExecution<void>;
	validateCredentials(applicationIdentifier, templateId, useSavedCredentials, credentials): IBaseExecution<void>;
}
export interface synchronizationJobOData extends entityOData {
	bulkUpload: bulkUpload;
	schema: synchronizationSchema;
	pause(): IBaseExecution<void>;
	provisionOnDemand(parameters): IBaseExecution<ComplexTypes.stringKeyStringValuePair>;
	restart(criteria): IBaseExecution<void>;
	start(): IBaseExecution<void>;
	validateCredentials(applicationIdentifier, templateId, useSavedCredentials, credentials): IBaseExecution<void>;
}
export interface synchronizationJobCollection extends IBaseCollection<synchronizationJob, synchronizationJobOData & synchronizationJobProps> {
    add(values?: any): IBaseExecution<synchronizationJob>;
}
/*********************************************
* synchronizationSchema
**********************************************/
export interface synchronizationSchema extends synchronizationSchemaProps, synchronizationSchemaMethods { }
export interface synchronizationSchemaProps extends  entityProps {
	synchronizationRules: ComplexTypes.synchronizationRule[];
	version: string;
}
export interface synchronizationSchemaMethods extends entityMethods {
	directories(): directoryDefinitionCollection;
	directories(id: string | number): IBaseQuery<directoryDefinition> & directoryDefinitionMethods;
	parseExpression(expression, testInputObject, targetAttributeDefinition): IBaseExecution<ComplexTypes.parseExpressionResponse>;
	filterOperators(): filterOperatorSchema[];
	functions(): attributeMappingFunctionSchema[];
}
export interface synchronizationSchemaOData extends entityOData {
	directories: IBaseResults<directoryDefinition>;
	parseExpression(expression, testInputObject, targetAttributeDefinition): IBaseExecution<ComplexTypes.parseExpressionResponse>;
	filterOperators(): filterOperatorSchema[];
	functions(): attributeMappingFunctionSchema[];
}
/*********************************************
* synchronizationTemplate
**********************************************/
export interface synchronizationTemplate extends synchronizationTemplateProps, synchronizationTemplateMethods { }
export interface synchronizationTemplateProps extends  entityProps {
	applicationId: any;
	default: boolean;
	description: string;
	discoverable: boolean;
	factoryTag: string;
	metadata: ComplexTypes.synchronizationMetadataEntry[];
}
export interface synchronizationTemplateMethods extends entityMethods {
	schema(): IBaseQuery<synchronizationSchema> & synchronizationSchemaMethods;
}
export interface synchronizationTemplateOData extends entityOData {
	schema: synchronizationSchema;
}
export interface synchronizationTemplateCollection extends IBaseCollection<synchronizationTemplate, synchronizationTemplateOData & synchronizationTemplateProps> {
    add(values?: any): IBaseExecution<synchronizationTemplate>;
}
/*********************************************
* tag
**********************************************/
export interface tag extends tagProps, tagMethods { }
export interface tagProps extends  entityProps {
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
}
export interface tagMethods extends entityMethods {

}
export interface tagOData extends entityOData {

}
/*********************************************
* targetDeviceGroup
**********************************************/
export interface targetDeviceGroup extends targetDeviceGroupProps, targetDeviceGroupMethods { }
export interface targetDeviceGroupProps extends  entityProps {
	displayName: string;
}
export interface targetDeviceGroupMethods extends entityMethods {

}
export interface targetDeviceGroupOData extends entityOData {

}
export interface targetDeviceGroupCollection extends IBaseCollection<targetDeviceGroup, targetDeviceGroupOData & targetDeviceGroupProps> {
    add(values?: any): IBaseExecution<targetDeviceGroup>;
}
/*********************************************
* targetedManagedAppConfiguration
**********************************************/
export interface targetedManagedAppConfiguration extends targetedManagedAppConfigurationProps, targetedManagedAppConfigurationMethods { }
export interface targetedManagedAppConfigurationProps extends  managedAppConfigurationProps {
	deployedAppCount: number;
	isAssigned: boolean;
}
export interface targetedManagedAppConfigurationMethods extends managedAppConfigurationMethods {
	apps(): managedMobileAppCollection;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	assignments(): targetedManagedAppPolicyAssignmentCollection;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment> & targetedManagedAppPolicyAssignmentMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
	assign(assignments): IBaseExecution<void>;
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
export interface targetedManagedAppConfigurationOData extends managedAppConfigurationOData {
	apps: IBaseResults<managedMobileApp>;
	assignments: IBaseResults<targetedManagedAppPolicyAssignment>;
	deploymentSummary: managedAppPolicyDeploymentSummary;
	assign(assignments): IBaseExecution<void>;
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
export interface targetedManagedAppConfigurationCollection extends IBaseCollection<targetedManagedAppConfiguration, targetedManagedAppConfigurationOData & targetedManagedAppConfigurationProps> {
    add(values?: any): IBaseExecution<targetedManagedAppConfiguration>;
}
/*********************************************
* targetedManagedAppPolicyAssignment
**********************************************/
export interface targetedManagedAppPolicyAssignment extends targetedManagedAppPolicyAssignmentProps, targetedManagedAppPolicyAssignmentMethods { }
export interface targetedManagedAppPolicyAssignmentProps extends  entityProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface targetedManagedAppPolicyAssignmentMethods extends entityMethods {

}
export interface targetedManagedAppPolicyAssignmentOData extends entityOData {

}
export interface targetedManagedAppPolicyAssignmentCollection extends IBaseCollection<targetedManagedAppPolicyAssignment, targetedManagedAppPolicyAssignmentOData & targetedManagedAppPolicyAssignmentProps> {
    add(values?: any): IBaseExecution<targetedManagedAppPolicyAssignment>;
}
/*********************************************
* targetedManagedAppProtection
**********************************************/
export interface targetedManagedAppProtection extends targetedManagedAppProtectionProps, targetedManagedAppProtectionMethods { }
export interface targetedManagedAppProtectionProps extends  managedAppProtectionProps {
	isAssigned: boolean;
}
export interface targetedManagedAppProtectionMethods extends managedAppProtectionMethods {
	assignments(): targetedManagedAppPolicyAssignmentCollection;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment> & targetedManagedAppPolicyAssignmentMethods;
	assign(assignments): IBaseExecution<void>;
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
export interface targetedManagedAppProtectionOData extends managedAppProtectionOData {
	assignments: IBaseResults<targetedManagedAppPolicyAssignment>;
	assign(assignments): IBaseExecution<void>;
	targetApps(apps, appGroupType): IBaseExecution<void>;
}
/*********************************************
* task
**********************************************/
export interface task extends taskProps, taskMethods { }
export interface taskProps extends  entityProps {
	arguments: ComplexTypes.keyValuePair[];
	category: EnumTypes.lifecycleTaskCategory;
	continueOnError: boolean;
	description: string;
	displayName: string;
	executionSequence: number;
	isEnabled: boolean;
	taskDefinitionId: string;
}
export interface taskMethods extends entityMethods {
	taskProcessingResults(): IBaseCollection<taskProcessingResult, entity & taskProcessingResultOData & taskProcessingResultProps>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
}
export interface taskOData extends entityOData {
	taskProcessingResults: IBaseResults<taskProcessingResult>;
}
/*********************************************
* taskDefinition
**********************************************/
export interface taskDefinition extends taskDefinitionProps, taskDefinitionMethods { }
export interface taskDefinitionProps extends  entityProps {
	category: EnumTypes.lifecycleTaskCategory;
	continueOnError: boolean;
	description: string;
	displayName: string;
	parameters: ComplexTypes.parameter[];
	version: number;
}
export interface taskDefinitionMethods extends entityMethods {

}
export interface taskDefinitionOData extends entityOData {

}
/*********************************************
* taskFileAttachment
**********************************************/
export interface taskFileAttachment extends taskFileAttachmentProps, taskFileAttachmentMethods { }
export interface taskFileAttachmentProps extends  attachmentBaseProps {
	contentBytes: any;
}
export interface taskFileAttachmentMethods extends attachmentBaseMethods {

}
export interface taskFileAttachmentOData extends attachmentBaseOData {

}
/*********************************************
* taskProcessingResult
**********************************************/
export interface taskProcessingResult extends taskProcessingResultProps, taskProcessingResultMethods { }
export interface taskProcessingResultProps extends  entityProps {
	completedDateTime: any;
	createdDateTime: any;
	failureReason: string;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	startedDateTime: any;
}
export interface taskProcessingResultMethods extends entityMethods {
	subject(): IBaseQuery<user> & userMethods;
	task(): IBaseQuery<task> & taskMethods;
}
export interface taskProcessingResultOData extends entityOData {
	subject: user;
	task: task;
}
/*********************************************
* taskReport
**********************************************/
export interface taskReport extends taskReportProps, taskReportMethods { }
export interface taskReportProps extends  entityProps {
	completedDateTime: any;
	failedUsersCount: number;
	lastUpdatedDateTime: any;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	runId: string;
	startedDateTime: any;
	successfulUsersCount: number;
	totalUsersCount: number;
	unprocessedUsersCount: number;
}
export interface taskReportMethods extends entityMethods {
	task(): IBaseQuery<task> & taskMethods;
	taskDefinition(): IBaseQuery<taskDefinition> & taskDefinitionMethods;
	taskProcessingResults(): IBaseCollection<taskProcessingResult, entity & taskProcessingResultOData & taskProcessingResultProps>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
}
export interface taskReportOData extends entityOData {
	task: task;
	taskDefinition: taskDefinition;
	taskProcessingResults: IBaseResults<taskProcessingResult>;
}
/*********************************************
* team
**********************************************/
export interface team extends teamProps, teamMethods { }
export interface teamProps extends  entityProps {
	classification: string;
	createdDateTime: any;
	description: string;
	displayName: string;
	funSettings: ComplexTypes.teamFunSettings;
	guestSettings: ComplexTypes.teamGuestSettings;
	internalId: string;
	isArchived: boolean;
	memberSettings: ComplexTypes.teamMemberSettings;
	messagingSettings: ComplexTypes.teamMessagingSettings;
	specialization: EnumTypes.teamSpecialization;
	summary: ComplexTypes.teamSummary;
	tenantId: string;
	visibility: EnumTypes.teamVisibilityType;
	webUrl: string;
}
export interface teamMethods extends entityMethods {
	allChannels(): channelCollection;
	allChannels(id: string | number): IBaseQuery<channel> & channelMethods;
	channels(): channelCollection;
	channels(id: string | number): IBaseQuery<channel> & channelMethods;
	group(): IBaseQuery<group> & groupMethods;
	incomingChannels(): channelCollection;
	incomingChannels(id: string | number): IBaseQuery<channel> & channelMethods;
	installedApps(): teamsAppInstallationCollection;
	installedApps(id: string | number): IBaseQuery<teamsAppInstallation> & teamsAppInstallationMethods;
	members(): conversationMemberCollection;
	members(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
	operations(): teamsAsyncOperationCollection;
	operations(id: string | number): IBaseQuery<teamsAsyncOperation> & teamsAsyncOperationMethods;
	permissionGrants(): resourceSpecificPermissionGrantCollection;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant> & resourceSpecificPermissionGrantMethods;
	photo(): IBaseQuery<profilePhoto> & profilePhotoMethods;
	primaryChannel(): IBaseQuery<channel> & channelMethods;
	tags(): teamworkTagCollection;
	tags(id: string | number): IBaseQuery<teamworkTag> & teamworkTagMethods;
	template(): IBaseQuery<teamsTemplate> & teamsTemplateMethods;
	schedule(): IBaseQuery<schedule> & scheduleMethods;
	archive(shouldSetSpoSiteReadOnlyForMembers): IBaseExecution<void>;
	unarchive(): IBaseExecution<void>;
	completeMigration(): IBaseExecution<void>;
	clone(displayName, description, mailNickname, classification, visibility, partsToClone): IBaseExecution<void>;
	sendActivityNotification(topic, activityType, chainId, previewText, teamsAppId, templateParameters, recipient): IBaseExecution<void>;
}
export interface teamOData extends entityOData {
	allChannels: IBaseResults<channel>;
	channels: IBaseResults<channel>;
	group: group;
	incomingChannels: IBaseResults<channel>;
	installedApps: IBaseResults<teamsAppInstallation>;
	members: IBaseResults<conversationMember>;
	operations: IBaseResults<teamsAsyncOperation>;
	permissionGrants: IBaseResults<resourceSpecificPermissionGrant>;
	photo: profilePhoto;
	primaryChannel: channel;
	tags: IBaseResults<teamworkTag>;
	template: teamsTemplate;
	schedule: schedule;
	archive(shouldSetSpoSiteReadOnlyForMembers): IBaseExecution<void>;
	unarchive(): IBaseExecution<void>;
	completeMigration(): IBaseExecution<void>;
	clone(displayName, description, mailNickname, classification, visibility, partsToClone): IBaseExecution<void>;
	sendActivityNotification(topic, activityType, chainId, previewText, teamsAppId, templateParameters, recipient): IBaseExecution<void>;
}
export interface teamCollection extends IBaseCollection<team, teamOData & teamProps> {
    add(values?: any): IBaseExecution<team>;
}
/*********************************************
* teamInfo
**********************************************/
export interface teamInfo extends teamInfoProps, teamInfoMethods { }
export interface teamInfoProps extends  entityProps {
	displayName: string;
	tenantId: string;
}
export interface teamInfoMethods extends entityMethods {
	team(): IBaseQuery<team> & teamMethods;
}
export interface teamInfoOData extends entityOData {
	team: team;
}
/*********************************************
* teamsApp
**********************************************/
export interface teamsApp extends teamsAppProps, teamsAppMethods { }
export interface teamsAppProps extends  entityProps {
	displayName: string;
	distributionMethod: EnumTypes.teamsAppDistributionMethod;
	externalId: string;
}
export interface teamsAppMethods extends entityMethods {
	appDefinitions(): teamsAppDefinitionCollection;
	appDefinitions(id: string | number): IBaseQuery<teamsAppDefinition> & teamsAppDefinitionMethods;
}
export interface teamsAppOData extends entityOData {
	appDefinitions: IBaseResults<teamsAppDefinition>;
}
export interface teamsAppCollection extends IBaseCollection<teamsApp, teamsAppOData & teamsAppProps> {
    add(values?: any): IBaseExecution<teamsApp>;
}
/*********************************************
* teamsAppDefinition
**********************************************/
export interface teamsAppDefinition extends teamsAppDefinitionProps, teamsAppDefinitionMethods { }
export interface teamsAppDefinitionProps extends  entityProps {
	authorization: ComplexTypes.teamsAppAuthorization;
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	publishingState: EnumTypes.teamsAppPublishingState;
	shortDescription: string;
	teamsAppId: string;
	version: string;
}
export interface teamsAppDefinitionMethods extends entityMethods {
	bot(): IBaseQuery<teamworkBot> & teamworkBotMethods;
}
export interface teamsAppDefinitionOData extends entityOData {
	bot: teamworkBot;
}
export interface teamsAppDefinitionCollection extends IBaseCollection<teamsAppDefinition, teamsAppDefinitionOData & teamsAppDefinitionProps> {
    add(values?: any): IBaseExecution<teamsAppDefinition>;
}
/*********************************************
* teamsAppInstallation
**********************************************/
export interface teamsAppInstallation extends teamsAppInstallationProps, teamsAppInstallationMethods { }
export interface teamsAppInstallationProps extends  entityProps {
	consentedPermissionSet: ComplexTypes.teamsAppPermissionSet;
}
export interface teamsAppInstallationMethods extends entityMethods {
	teamsApp(): IBaseQuery<teamsApp> & teamsAppMethods;
	teamsAppDefinition(): IBaseQuery<teamsAppDefinition> & teamsAppDefinitionMethods;
	upgrade(consentedPermissionSet): IBaseExecution<void>;
}
export interface teamsAppInstallationOData extends entityOData {
	teamsApp: teamsApp;
	teamsAppDefinition: teamsAppDefinition;
	upgrade(consentedPermissionSet): IBaseExecution<void>;
}
export interface teamsAppInstallationCollection extends IBaseCollection<teamsAppInstallation, teamsAppInstallationOData & teamsAppInstallationProps> {
    add(values?: any): IBaseExecution<teamsAppInstallation>;
}
/*********************************************
* teamsAppSettings
**********************************************/
export interface teamsAppSettings extends teamsAppSettingsProps, teamsAppSettingsMethods { }
export interface teamsAppSettingsProps extends  entityProps {
	allowUserRequestsForAppAccess: boolean;
	isUserPersonalScopeResourceSpecificConsentEnabled: boolean;
}
export interface teamsAppSettingsMethods extends entityMethods {

}
export interface teamsAppSettingsOData extends entityOData {

}
/*********************************************
* teamsAsyncOperation
**********************************************/
export interface teamsAsyncOperation extends teamsAsyncOperationProps, teamsAsyncOperationMethods { }
export interface teamsAsyncOperationProps extends  entityProps {
	attemptsCount: number;
	createdDateTime: any;
	error: ComplexTypes.operationError;
	lastActionDateTime: any;
	operationType: EnumTypes.teamsAsyncOperationType;
	status: EnumTypes.teamsAsyncOperationStatus;
	targetResourceId: string;
	targetResourceLocation: string;
}
export interface teamsAsyncOperationMethods extends entityMethods {

}
export interface teamsAsyncOperationOData extends entityOData {

}
export interface teamsAsyncOperationCollection extends IBaseCollection<teamsAsyncOperation, teamsAsyncOperationOData & teamsAsyncOperationProps> {
    add(values?: any): IBaseExecution<teamsAsyncOperation>;
}
/*********************************************
* teamsTab
**********************************************/
export interface teamsTab extends teamsTabProps, teamsTabMethods { }
export interface teamsTabProps extends  entityProps {
	configuration: ComplexTypes.teamsTabConfiguration;
	displayName: string;
	webUrl: string;
}
export interface teamsTabMethods extends entityMethods {
	teamsApp(): IBaseQuery<teamsApp> & teamsAppMethods;
}
export interface teamsTabOData extends entityOData {
	teamsApp: teamsApp;
}
export interface teamsTabCollection extends IBaseCollection<teamsTab, teamsTabOData & teamsTabProps> {
    add(values?: any): IBaseExecution<teamsTab>;
}
/*********************************************
* teamsTemplate
**********************************************/
export interface teamsTemplate extends teamsTemplateProps, teamsTemplateMethods { }
export interface teamsTemplateProps extends  entityProps {

}
export interface teamsTemplateMethods extends entityMethods {

}
export interface teamsTemplateOData extends entityOData {

}
/*********************************************
* teamwork
**********************************************/
export interface teamwork extends teamworkProps, teamworkMethods { }
export interface teamworkProps extends  entityProps {
	isTeamsEnabled: boolean;
	region: string;
}
export interface teamworkMethods extends entityMethods {
	workforceIntegrations(): workforceIntegrationCollection;
	workforceIntegrations(id: string | number): IBaseQuery<workforceIntegration> & workforceIntegrationMethods;
	deletedChats(): deletedChatCollection;
	deletedChats(id: string | number): IBaseQuery<deletedChat> & deletedChatMethods;
	deletedTeams(): deletedTeamCollection;
	deletedTeams(id: string | number): IBaseQuery<deletedTeam> & deletedTeamMethods;
	teamsAppSettings(): IBaseQuery<teamsAppSettings> & teamsAppSettingsMethods;
	sendActivityNotificationToRecipients(topic, activityType, chainId, previewText, teamsAppId, templateParameters, recipients): IBaseExecution<void>;
}
export interface teamworkOData extends entityOData {
	workforceIntegrations: IBaseResults<workforceIntegration>;
	deletedChats: IBaseResults<deletedChat>;
	deletedTeams: IBaseResults<deletedTeam>;
	teamsAppSettings: teamsAppSettings;
	sendActivityNotificationToRecipients(topic, activityType, chainId, previewText, teamsAppId, templateParameters, recipients): IBaseExecution<void>;
}
/*********************************************
* teamworkBot
**********************************************/
export interface teamworkBot extends teamworkBotProps, teamworkBotMethods { }
export interface teamworkBotProps extends  entityProps {

}
export interface teamworkBotMethods extends entityMethods {

}
export interface teamworkBotOData extends entityOData {

}
/*********************************************
* teamworkHostedContent
**********************************************/
export interface teamworkHostedContent extends teamworkHostedContentProps, teamworkHostedContentMethods { }
export interface teamworkHostedContentProps extends  entityProps {
	contentBytes: any;
	contentType: string;
}
export interface teamworkHostedContentMethods extends entityMethods {

}
export interface teamworkHostedContentOData extends entityOData {

}
/*********************************************
* teamworkTag
**********************************************/
export interface teamworkTag extends teamworkTagProps, teamworkTagMethods { }
export interface teamworkTagProps extends  entityProps {
	description: string;
	displayName: string;
	memberCount: number;
	tagType: EnumTypes.teamworkTagType;
	teamId: string;
}
export interface teamworkTagMethods extends entityMethods {
	members(): teamworkTagMemberCollection;
	members(id: string | number): IBaseQuery<teamworkTagMember> & teamworkTagMemberMethods;
}
export interface teamworkTagOData extends entityOData {
	members: IBaseResults<teamworkTagMember>;
}
export interface teamworkTagCollection extends IBaseCollection<teamworkTag, teamworkTagOData & teamworkTagProps> {
    add(values?: any): IBaseExecution<teamworkTag>;
}
/*********************************************
* teamworkTagMember
**********************************************/
export interface teamworkTagMember extends teamworkTagMemberProps, teamworkTagMemberMethods { }
export interface teamworkTagMemberProps extends  entityProps {
	displayName: string;
	tenantId: string;
	userId: string;
}
export interface teamworkTagMemberMethods extends entityMethods {

}
export interface teamworkTagMemberOData extends entityOData {

}
export interface teamworkTagMemberCollection extends IBaseCollection<teamworkTagMember, teamworkTagMemberOData & teamworkTagMemberProps> {
    add(values?: any): IBaseExecution<teamworkTagMember>;
}
/*********************************************
* telecomExpenseManagementPartner
**********************************************/
export interface telecomExpenseManagementPartner extends telecomExpenseManagementPartnerProps, telecomExpenseManagementPartnerMethods { }
export interface telecomExpenseManagementPartnerProps extends  entityProps {
	appAuthorized: boolean;
	displayName: string;
	enabled: boolean;
	lastConnectionDateTime: any;
	url: string;
}
export interface telecomExpenseManagementPartnerMethods extends entityMethods {

}
export interface telecomExpenseManagementPartnerOData extends entityOData {

}
export interface telecomExpenseManagementPartnerCollection extends IBaseCollection<telecomExpenseManagementPartner, telecomExpenseManagementPartnerOData & telecomExpenseManagementPartnerProps> {
    add(values?: any): IBaseExecution<telecomExpenseManagementPartner>;
}
/*********************************************
* temporaryAccessPassAuthenticationMethod
**********************************************/
export interface temporaryAccessPassAuthenticationMethod extends temporaryAccessPassAuthenticationMethodProps, temporaryAccessPassAuthenticationMethodMethods { }
export interface temporaryAccessPassAuthenticationMethodProps extends  authenticationMethodProps {
	createdDateTime: any;
	isUsable: boolean;
	isUsableOnce: boolean;
	lifetimeInMinutes: number;
	methodUsabilityReason: string;
	startDateTime: any;
	temporaryAccessPass: string;
}
export interface temporaryAccessPassAuthenticationMethodMethods extends authenticationMethodMethods {

}
export interface temporaryAccessPassAuthenticationMethodOData extends authenticationMethodOData {

}
export interface temporaryAccessPassAuthenticationMethodCollection extends IBaseCollection<temporaryAccessPassAuthenticationMethod, temporaryAccessPassAuthenticationMethodOData & temporaryAccessPassAuthenticationMethodProps> {
    add(values?: any): IBaseExecution<temporaryAccessPassAuthenticationMethod>;
}
/*********************************************
* temporaryAccessPassAuthenticationMethodConfiguration
**********************************************/
export interface temporaryAccessPassAuthenticationMethodConfiguration extends temporaryAccessPassAuthenticationMethodConfigurationProps, temporaryAccessPassAuthenticationMethodConfigurationMethods { }
export interface temporaryAccessPassAuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {
	defaultLength: number;
	defaultLifetimeInMinutes: number;
	isUsableOnce: boolean;
	maximumLifetimeInMinutes: number;
	minimumLifetimeInMinutes: number;
}
export interface temporaryAccessPassAuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): authenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
}
export interface temporaryAccessPassAuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<authenticationMethodTarget>;
}
/*********************************************
* tenantAppManagementPolicy
**********************************************/
export interface tenantAppManagementPolicy extends tenantAppManagementPolicyProps, tenantAppManagementPolicyMethods { }
export interface tenantAppManagementPolicyProps extends  policyBaseProps {
	applicationRestrictions: ComplexTypes.appManagementApplicationConfiguration;
	isEnabled: boolean;
	servicePrincipalRestrictions: ComplexTypes.appManagementServicePrincipalConfiguration;
}
export interface tenantAppManagementPolicyMethods extends policyBaseMethods {

}
export interface tenantAppManagementPolicyOData extends policyBaseOData {

}
/*********************************************
* tenantRelationship
**********************************************/
export interface tenantRelationship extends tenantRelationshipProps, tenantRelationshipMethods { }
export interface tenantRelationshipProps   {

}
export interface tenantRelationshipMethods {
	multiTenantOrganization(): IBaseQuery<multiTenantOrganization> & multiTenantOrganizationMethods;
	delegatedAdminCustomers(): delegatedAdminCustomerCollection;
	delegatedAdminCustomers(id: string | number): IBaseQuery<delegatedAdminCustomer> & delegatedAdminCustomerMethods;
	delegatedAdminRelationships(): delegatedAdminRelationshipCollection;
	delegatedAdminRelationships(id: string | number): IBaseQuery<delegatedAdminRelationship> & delegatedAdminRelationshipMethods;
	findTenantInformationByDomainName(domainName): ComplexTypes.tenantInformation;
	findTenantInformationByTenantId(tenantId): ComplexTypes.tenantInformation;
}
export interface tenantRelationshipOData {
	multiTenantOrganization: multiTenantOrganization;
	delegatedAdminCustomers: IBaseResults<delegatedAdminCustomer>;
	delegatedAdminRelationships: IBaseResults<delegatedAdminRelationship>;
	findTenantInformationByDomainName(domainName): ComplexTypes.tenantInformation;
	findTenantInformationByTenantId(tenantId): ComplexTypes.tenantInformation;
}
/*********************************************
* term
**********************************************/
export interface term extends termProps, termMethods { }
export interface termProps extends  entityProps {
	createdDateTime: any;
	descriptions: ComplexTypes.localizedDescription[];
	labels: ComplexTypes.localizedLabel[];
	lastModifiedDateTime: any;
	properties: ComplexTypes.keyValue[];
}
export interface termMethods extends entityMethods {
	children(): IBaseCollection<term, entity & termOData & termProps>;
	children(id: string | number): IBaseQuery<term> & termMethods;
	relations(): IBaseCollection<relation, entity & relationOData & relationProps>;
	relations(id: string | number): IBaseQuery<relation> & relationMethods;
	set(): IBaseQuery<set> & setMethods;
}
export interface termOData extends entityOData {
	children: IBaseResults<term>;
	relations: IBaseResults<relation>;
	set: set;
}
/*********************************************
* termsAndConditions
**********************************************/
export interface termsAndConditions extends termsAndConditionsProps, termsAndConditionsMethods { }
export interface termsAndConditionsProps extends  entityProps {
	acceptanceStatement: string;
	bodyText: string;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	title: string;
	version: number;
}
export interface termsAndConditionsMethods extends entityMethods {
	acceptanceStatuses(): termsAndConditionsAcceptanceStatusCollection;
	acceptanceStatuses(id: string | number): IBaseQuery<termsAndConditionsAcceptanceStatus> & termsAndConditionsAcceptanceStatusMethods;
	assignments(): termsAndConditionsAssignmentCollection;
	assignments(id: string | number): IBaseQuery<termsAndConditionsAssignment> & termsAndConditionsAssignmentMethods;
}
export interface termsAndConditionsOData extends entityOData {
	acceptanceStatuses: IBaseResults<termsAndConditionsAcceptanceStatus>;
	assignments: IBaseResults<termsAndConditionsAssignment>;
}
export interface termsAndConditionsCollection extends IBaseCollection<termsAndConditions, termsAndConditionsOData & termsAndConditionsProps> {
    add(values?: any): IBaseExecution<termsAndConditions>;
}
/*********************************************
* termsAndConditionsAcceptanceStatus
**********************************************/
export interface termsAndConditionsAcceptanceStatus extends termsAndConditionsAcceptanceStatusProps, termsAndConditionsAcceptanceStatusMethods { }
export interface termsAndConditionsAcceptanceStatusProps extends  entityProps {
	acceptedDateTime: any;
	acceptedVersion: number;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface termsAndConditionsAcceptanceStatusMethods extends entityMethods {
	termsAndConditions(): IBaseQuery<termsAndConditions> & termsAndConditionsMethods;
}
export interface termsAndConditionsAcceptanceStatusOData extends entityOData {
	termsAndConditions: termsAndConditions;
}
export interface termsAndConditionsAcceptanceStatusCollection extends IBaseCollection<termsAndConditionsAcceptanceStatus, termsAndConditionsAcceptanceStatusOData & termsAndConditionsAcceptanceStatusProps> {
    add(values?: any): IBaseExecution<termsAndConditionsAcceptanceStatus>;
}
/*********************************************
* termsAndConditionsAssignment
**********************************************/
export interface termsAndConditionsAssignment extends termsAndConditionsAssignmentProps, termsAndConditionsAssignmentMethods { }
export interface termsAndConditionsAssignmentProps extends  entityProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface termsAndConditionsAssignmentMethods extends entityMethods {

}
export interface termsAndConditionsAssignmentOData extends entityOData {

}
export interface termsAndConditionsAssignmentCollection extends IBaseCollection<termsAndConditionsAssignment, termsAndConditionsAssignmentOData & termsAndConditionsAssignmentProps> {
    add(values?: any): IBaseExecution<termsAndConditionsAssignment>;
}
/*********************************************
* termsOfUseContainer
**********************************************/
export interface termsOfUseContainer extends termsOfUseContainerProps, termsOfUseContainerMethods { }
export interface termsOfUseContainerProps extends  entityProps {

}
export interface termsOfUseContainerMethods extends entityMethods {
	agreementAcceptances(): agreementAcceptanceCollection;
	agreementAcceptances(id: string | number): IBaseQuery<agreementAcceptance> & agreementAcceptanceMethods;
	agreements(): agreementCollection;
	agreements(id: string | number): IBaseQuery<agreement> & agreementMethods;
}
export interface termsOfUseContainerOData extends entityOData {
	agreementAcceptances: IBaseResults<agreementAcceptance>;
	agreements: IBaseResults<agreement>;
}
/*********************************************
* textWebPart
**********************************************/
export interface textWebPart extends textWebPartProps, textWebPartMethods { }
export interface textWebPartProps extends  webPartProps {
	innerHtml: string;
}
export interface textWebPartMethods extends webPartMethods {

}
export interface textWebPartOData extends webPartOData {

}
/*********************************************
* threatAssessmentRequest
**********************************************/
export interface threatAssessmentRequest extends threatAssessmentRequestProps, threatAssessmentRequestMethods { }
export interface threatAssessmentRequestProps extends  entityProps {
	category: EnumTypes.threatCategory;
	contentType: EnumTypes.threatAssessmentContentType;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	expectedAssessment: EnumTypes.threatExpectedAssessment;
	requestSource: EnumTypes.threatAssessmentRequestSource;
	status: EnumTypes.threatAssessmentStatus;
}
export interface threatAssessmentRequestMethods extends entityMethods {
	results(): threatAssessmentResultCollection;
	results(id: string | number): IBaseQuery<threatAssessmentResult> & threatAssessmentResultMethods;
}
export interface threatAssessmentRequestOData extends entityOData {
	results: IBaseResults<threatAssessmentResult>;
}
export interface threatAssessmentRequestCollection extends IBaseCollection<threatAssessmentRequest, threatAssessmentRequestOData & threatAssessmentRequestProps> {
    add(values?: any): IBaseExecution<threatAssessmentRequest>;
}
/*********************************************
* threatAssessmentResult
**********************************************/
export interface threatAssessmentResult extends threatAssessmentResultProps, threatAssessmentResultMethods { }
export interface threatAssessmentResultProps extends  entityProps {
	createdDateTime: any;
	message: string;
	resultType: EnumTypes.threatAssessmentResultType;
}
export interface threatAssessmentResultMethods extends entityMethods {

}
export interface threatAssessmentResultOData extends entityOData {

}
export interface threatAssessmentResultCollection extends IBaseCollection<threatAssessmentResult, threatAssessmentResultOData & threatAssessmentResultProps> {
    add(values?: any): IBaseExecution<threatAssessmentResult>;
}
/*********************************************
* threatIntelligence
**********************************************/
export interface threatIntelligence extends threatIntelligenceProps, threatIntelligenceMethods { }
export interface threatIntelligenceProps extends  entityProps {

}
export interface threatIntelligenceMethods extends entityMethods {
	articleIndicators(): IBaseCollection<articleIndicator, entity & articleIndicatorOData & articleIndicatorProps>;
	articleIndicators(id: string | number): IBaseQuery<articleIndicator> & articleIndicatorMethods;
	articles(): IBaseCollection<article, entity & articleOData & articleProps>;
	articles(id: string | number): IBaseQuery<article> & articleMethods;
	hostComponents(): IBaseCollection<hostComponent, entity & hostComponentOData & hostComponentProps>;
	hostComponents(id: string | number): IBaseQuery<hostComponent> & hostComponentMethods;
	hostCookies(): IBaseCollection<hostCookie, entity & hostCookieOData & hostCookieProps>;
	hostCookies(id: string | number): IBaseQuery<hostCookie> & hostCookieMethods;
	hostPairs(): IBaseCollection<hostPair, entity & hostPairOData & hostPairProps>;
	hostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	hostPorts(): IBaseCollection<hostPort, entity & hostPortOData & hostPortProps>;
	hostPorts(id: string | number): IBaseQuery<hostPort> & hostPortMethods;
	hosts(): IBaseCollection<host, entity & hostOData & hostProps>;
	hosts(id: string | number): IBaseQuery<host> & hostMethods;
	hostSslCertificates(): IBaseCollection<hostSslCertificate, entity & hostSslCertificateOData & hostSslCertificateProps>;
	hostSslCertificates(id: string | number): IBaseQuery<hostSslCertificate> & hostSslCertificateMethods;
	hostTrackers(): IBaseCollection<hostTracker, entity & hostTrackerOData & hostTrackerProps>;
	hostTrackers(id: string | number): IBaseQuery<hostTracker> & hostTrackerMethods;
	intelligenceProfileIndicators(): IBaseCollection<intelligenceProfileIndicator, entity & intelligenceProfileIndicatorOData & intelligenceProfileIndicatorProps>;
	intelligenceProfileIndicators(id: string | number): IBaseQuery<intelligenceProfileIndicator> & intelligenceProfileIndicatorMethods;
	intelProfiles(): IBaseCollection<intelligenceProfile, entity & intelligenceProfileOData & intelligenceProfileProps>;
	intelProfiles(id: string | number): IBaseQuery<intelligenceProfile> & intelligenceProfileMethods;
	passiveDnsRecords(): IBaseCollection<passiveDnsRecord, entity & passiveDnsRecordOData & passiveDnsRecordProps>;
	passiveDnsRecords(id: string | number): IBaseQuery<passiveDnsRecord> & passiveDnsRecordMethods;
	sslCertificates(): IBaseCollection<sslCertificate, entity & sslCertificateOData & sslCertificateProps>;
	sslCertificates(id: string | number): IBaseQuery<sslCertificate> & sslCertificateMethods;
	subdomains(): IBaseCollection<subdomain, entity & subdomainOData & subdomainProps>;
	subdomains(id: string | number): IBaseQuery<subdomain> & subdomainMethods;
	vulnerabilities(): IBaseCollection<vulnerability, entity & vulnerabilityOData & vulnerabilityProps>;
	vulnerabilities(id: string | number): IBaseQuery<vulnerability> & vulnerabilityMethods;
	whoisHistoryRecords(): IBaseCollection<whoisHistoryRecord, entity & whoisHistoryRecordOData & whoisHistoryRecordProps>;
	whoisHistoryRecords(id: string | number): IBaseQuery<whoisHistoryRecord> & whoisHistoryRecordMethods;
	whoisRecords(): IBaseCollection<whoisRecord, entity & whoisRecordOData & whoisRecordProps>;
	whoisRecords(id: string | number): IBaseQuery<whoisRecord> & whoisRecordMethods;
}
export interface threatIntelligenceOData extends entityOData {
	articleIndicators: IBaseResults<articleIndicator>;
	articles: IBaseResults<article>;
	hostComponents: IBaseResults<hostComponent>;
	hostCookies: IBaseResults<hostCookie>;
	hostPairs: IBaseResults<hostPair>;
	hostPorts: IBaseResults<hostPort>;
	hosts: IBaseResults<host>;
	hostSslCertificates: IBaseResults<hostSslCertificate>;
	hostTrackers: IBaseResults<hostTracker>;
	intelligenceProfileIndicators: IBaseResults<intelligenceProfileIndicator>;
	intelProfiles: IBaseResults<intelligenceProfile>;
	passiveDnsRecords: IBaseResults<passiveDnsRecord>;
	sslCertificates: IBaseResults<sslCertificate>;
	subdomains: IBaseResults<subdomain>;
	vulnerabilities: IBaseResults<vulnerability>;
	whoisHistoryRecords: IBaseResults<whoisHistoryRecord>;
	whoisRecords: IBaseResults<whoisRecord>;
}
/*********************************************
* thumbnailSet
**********************************************/
export interface thumbnailSet extends thumbnailSetProps, thumbnailSetMethods { }
export interface thumbnailSetProps extends  entityProps {
	large: ComplexTypes.thumbnail;
	medium: ComplexTypes.thumbnail;
	small: ComplexTypes.thumbnail;
	source: ComplexTypes.thumbnail;
}
export interface thumbnailSetMethods extends entityMethods {

}
export interface thumbnailSetOData extends entityOData {

}
export interface thumbnailSetCollection extends IBaseCollection<thumbnailSet, thumbnailSetOData & thumbnailSetProps> {
    add(values?: any): IBaseExecution<thumbnailSet>;
}
/*********************************************
* timeOff
**********************************************/
export interface timeOff extends timeOffProps, timeOffMethods { }
export interface timeOffProps extends  changeTrackedEntityProps {
	draftTimeOff: ComplexTypes.timeOffItem;
	sharedTimeOff: ComplexTypes.timeOffItem;
	userId: string;
}
export interface timeOffMethods extends changeTrackedEntityMethods {

}
export interface timeOffOData extends changeTrackedEntityOData {

}
export interface timeOffCollection extends IBaseCollection<timeOff, timeOffOData & timeOffProps> {
    add(values?: any): IBaseExecution<timeOff>;
}
/*********************************************
* timeOffReason
**********************************************/
export interface timeOffReason extends timeOffReasonProps, timeOffReasonMethods { }
export interface timeOffReasonProps extends  changeTrackedEntityProps {
	displayName: string;
	iconType: EnumTypes.timeOffReasonIconType;
	isActive: boolean;
}
export interface timeOffReasonMethods extends changeTrackedEntityMethods {

}
export interface timeOffReasonOData extends changeTrackedEntityOData {

}
export interface timeOffReasonCollection extends IBaseCollection<timeOffReason, timeOffReasonOData & timeOffReasonProps> {
    add(values?: any): IBaseExecution<timeOffReason>;
}
/*********************************************
* timeOffRequest
**********************************************/
export interface timeOffRequest extends timeOffRequestProps, timeOffRequestMethods { }
export interface timeOffRequestProps extends  scheduleChangeRequestProps {
	endDateTime: any;
	startDateTime: any;
	timeOffReasonId: string;
}
export interface timeOffRequestMethods extends scheduleChangeRequestMethods {

}
export interface timeOffRequestOData extends scheduleChangeRequestOData {

}
export interface timeOffRequestCollection extends IBaseCollection<timeOffRequest, timeOffRequestOData & timeOffRequestProps> {
    add(values?: any): IBaseExecution<timeOffRequest>;
}
/*********************************************
* todo
**********************************************/
export interface todo extends todoProps, todoMethods { }
export interface todoProps extends  entityProps {

}
export interface todoMethods extends entityMethods {
	lists(): todoTaskListCollection;
	lists(id: string | number): IBaseQuery<todoTaskList> & todoTaskListMethods;
}
export interface todoOData extends entityOData {
	lists: IBaseResults<todoTaskList>;
}
/*********************************************
* todoTask
**********************************************/
export interface todoTask extends todoTaskProps, todoTaskMethods { }
export interface todoTaskProps extends  entityProps {
	body: ComplexTypes.itemBody;
	bodyLastModifiedDateTime: any;
	categories: Array<string>[];
	completedDateTime: ComplexTypes.dateTimeTimeZone;
	createdDateTime: any;
	dueDateTime: ComplexTypes.dateTimeTimeZone;
	hasAttachments: boolean;
	importance: EnumTypes.importance;
	isReminderOn: boolean;
	lastModifiedDateTime: any;
	recurrence: ComplexTypes.patternedRecurrence;
	reminderDateTime: ComplexTypes.dateTimeTimeZone;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	status: EnumTypes.taskStatus;
	title: string;
}
export interface todoTaskMethods extends entityMethods {
	attachments(): attachmentBaseCollection;
	attachments(id: string | number): IBaseQuery<attachmentBase> & attachmentBaseMethods;
	attachmentSessions(): attachmentSessionCollection;
	attachmentSessions(id: string | number): IBaseQuery<attachmentSession> & attachmentSessionMethods;
	checklistItems(): checklistItemCollection;
	checklistItems(id: string | number): IBaseQuery<checklistItem> & checklistItemMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	linkedResources(): linkedResourceCollection;
	linkedResources(id: string | number): IBaseQuery<linkedResource> & linkedResourceMethods;
}
export interface todoTaskOData extends entityOData {
	attachments: IBaseResults<attachmentBase>;
	attachmentSessions: IBaseResults<attachmentSession>;
	checklistItems: IBaseResults<checklistItem>;
	extensions: IBaseResults<extension>;
	linkedResources: IBaseResults<linkedResource>;
}
export interface todoTaskCollection extends IBaseCollection<todoTask, todoTaskOData & todoTaskProps> {
    add(values?: any): IBaseExecution<todoTask>;
}
/*********************************************
* todoTaskList
**********************************************/
export interface todoTaskList extends todoTaskListProps, todoTaskListMethods { }
export interface todoTaskListProps extends  entityProps {
	displayName: string;
	isOwner: boolean;
	isShared: boolean;
	wellknownListName: EnumTypes.wellknownListName;
}
export interface todoTaskListMethods extends entityMethods {
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	tasks(): todoTaskCollection;
	tasks(id: string | number): IBaseQuery<todoTask> & todoTaskMethods;
}
export interface todoTaskListOData extends entityOData {
	extensions: IBaseResults<extension>;
	tasks: IBaseResults<todoTask>;
}
export interface todoTaskListCollection extends IBaseCollection<todoTaskList, todoTaskListOData & todoTaskListProps> {
    add(values?: any): IBaseExecution<todoTaskList>;
}
/*********************************************
* tokenIssuancePolicy
**********************************************/
export interface tokenIssuancePolicy extends tokenIssuancePolicyProps, tokenIssuancePolicyMethods { }
export interface tokenIssuancePolicyProps extends  stsPolicyProps {

}
export interface tokenIssuancePolicyMethods extends stsPolicyMethods {

}
export interface tokenIssuancePolicyOData extends stsPolicyOData {

}
export interface tokenIssuancePolicyCollection extends IBaseCollection<tokenIssuancePolicy, tokenIssuancePolicyOData & tokenIssuancePolicyProps> {
    add(values?: any): IBaseExecution<tokenIssuancePolicy>;
}
/*********************************************
* tokenLifetimePolicy
**********************************************/
export interface tokenLifetimePolicy extends tokenLifetimePolicyProps, tokenLifetimePolicyMethods { }
export interface tokenLifetimePolicyProps extends  stsPolicyProps {

}
export interface tokenLifetimePolicyMethods extends stsPolicyMethods {

}
export interface tokenLifetimePolicyOData extends stsPolicyOData {

}
export interface tokenLifetimePolicyCollection extends IBaseCollection<tokenLifetimePolicy, tokenLifetimePolicyOData & tokenLifetimePolicyProps> {
    add(values?: any): IBaseExecution<tokenLifetimePolicy>;
}
/*********************************************
* training
**********************************************/
export interface training extends trainingProps, trainingMethods { }
export interface trainingProps extends  entityProps {
	availabilityStatus: EnumTypes.trainingAvailabilityStatus;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	durationInMinutes: number;
	hasEvaluation: boolean;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	source: EnumTypes.simulationContentSource;
	supportedLocales: Array<string>[];
	tags: Array<string>[];
	type: EnumTypes.trainingType;
}
export interface trainingMethods extends entityMethods {
	languageDetails(): trainingLanguageDetailCollection;
	languageDetails(id: string | number): IBaseQuery<trainingLanguageDetail> & trainingLanguageDetailMethods;
}
export interface trainingOData extends entityOData {
	languageDetails: IBaseResults<trainingLanguageDetail>;
}
export interface trainingCollection extends IBaseCollection<training, trainingOData & trainingProps> {
    add(values?: any): IBaseExecution<training>;
}
/*********************************************
* trainingLanguageDetail
**********************************************/
export interface trainingLanguageDetail extends trainingLanguageDetailProps, trainingLanguageDetailMethods { }
export interface trainingLanguageDetailProps extends  entityProps {
	content: string;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	isDefaultLangauge: boolean;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	locale: string;
}
export interface trainingLanguageDetailMethods extends entityMethods {

}
export interface trainingLanguageDetailOData extends entityOData {

}
export interface trainingLanguageDetailCollection extends IBaseCollection<trainingLanguageDetail, trainingLanguageDetailOData & trainingLanguageDetailProps> {
    add(values?: any): IBaseExecution<trainingLanguageDetail>;
}
/*********************************************
* trending
**********************************************/
export interface trending extends trendingProps, trendingMethods { }
export interface trendingProps extends  entityProps {
	lastModifiedDateTime: any;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	weight: number;
}
export interface trendingMethods extends entityMethods {
	resource(): IBaseQuery<entity> & entityMethods;
}
export interface trendingOData extends entityOData {
	resource: entity;
}
export interface trendingCollection extends IBaseCollection<trending, trendingOData & trendingProps> {
    add(values?: any): IBaseExecution<trending>;
}
/*********************************************
* triggerTypesRoot
**********************************************/
export interface triggerTypesRoot extends triggerTypesRootProps, triggerTypesRootMethods { }
export interface triggerTypesRootProps extends  entityProps {

}
export interface triggerTypesRootMethods extends entityMethods {
	retentionEventTypes(): IBaseCollection<retentionEventType, entity & retentionEventTypeOData & retentionEventTypeProps>;
	retentionEventTypes(id: string | number): IBaseQuery<retentionEventType> & retentionEventTypeMethods;
}
export interface triggerTypesRootOData extends entityOData {
	retentionEventTypes: IBaseResults<retentionEventType>;
}
/*********************************************
* triggersRoot
**********************************************/
export interface triggersRoot extends triggersRootProps, triggersRootMethods { }
export interface triggersRootProps extends  entityProps {

}
export interface triggersRootMethods extends entityMethods {
	retentionEvents(): IBaseCollection<retentionEvent, entity & retentionEventOData & retentionEventProps>;
	retentionEvents(id: string | number): IBaseQuery<retentionEvent> & retentionEventMethods;
}
export interface triggersRootOData extends entityOData {
	retentionEvents: IBaseResults<retentionEvent>;
}
/*********************************************
* unbilledUsage
**********************************************/
export interface unbilledUsage extends unbilledUsageProps, unbilledUsageMethods { }
export interface unbilledUsageProps extends  entityProps {

}
export interface unbilledUsageMethods extends entityMethods {

}
export interface unbilledUsageOData extends entityOData {

}
/*********************************************
* unclassifiedArtifact
**********************************************/
export interface unclassifiedArtifact extends unclassifiedArtifactProps, unclassifiedArtifactMethods { }
export interface unclassifiedArtifactProps extends  artifactProps {
	kind: string;
	value: string;
}
export interface unclassifiedArtifactMethods extends artifactMethods {

}
export interface unclassifiedArtifactOData extends artifactOData {

}
/*********************************************
* unifiedGroupSource
**********************************************/
export interface unifiedGroupSource extends unifiedGroupSourceProps, unifiedGroupSourceMethods { }
export interface unifiedGroupSourceProps extends  dataSourceProps {
	includedSources: EnumTypes.sourceType;
}
export interface unifiedGroupSourceMethods extends dataSourceMethods {
	group(): IBaseQuery<group> & groupMethods;
}
export interface unifiedGroupSourceOData extends dataSourceOData {
	group: group;
}
/*********************************************
* unifiedRbacResourceAction
**********************************************/
export interface unifiedRbacResourceAction extends unifiedRbacResourceActionProps, unifiedRbacResourceActionMethods { }
export interface unifiedRbacResourceActionProps extends  entityProps {
	actionVerb: string;
	authenticationContextId: string;
	description: string;
	isAuthenticationContextSettable: boolean;
	name: string;
	resourceScopeId: string;
}
export interface unifiedRbacResourceActionMethods extends entityMethods {

}
export interface unifiedRbacResourceActionOData extends entityOData {

}
export interface unifiedRbacResourceActionCollection extends IBaseCollection<unifiedRbacResourceAction, unifiedRbacResourceActionOData & unifiedRbacResourceActionProps> {
    add(values?: any): IBaseExecution<unifiedRbacResourceAction>;
}
/*********************************************
* unifiedRbacResourceNamespace
**********************************************/
export interface unifiedRbacResourceNamespace extends unifiedRbacResourceNamespaceProps, unifiedRbacResourceNamespaceMethods { }
export interface unifiedRbacResourceNamespaceProps extends  entityProps {
	name: string;
}
export interface unifiedRbacResourceNamespaceMethods extends entityMethods {
	resourceActions(): unifiedRbacResourceActionCollection;
	resourceActions(id: string | number): IBaseQuery<unifiedRbacResourceAction> & unifiedRbacResourceActionMethods;
}
export interface unifiedRbacResourceNamespaceOData extends entityOData {
	resourceActions: IBaseResults<unifiedRbacResourceAction>;
}
export interface unifiedRbacResourceNamespaceCollection extends IBaseCollection<unifiedRbacResourceNamespace, unifiedRbacResourceNamespaceOData & unifiedRbacResourceNamespaceProps> {
    add(values?: any): IBaseExecution<unifiedRbacResourceNamespace>;
}
/*********************************************
* unifiedRoleAssignment
**********************************************/
export interface unifiedRoleAssignment extends unifiedRoleAssignmentProps, unifiedRoleAssignmentMethods { }
export interface unifiedRoleAssignmentProps extends  entityProps {
	appScopeId: string;
	condition: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
}
export interface unifiedRoleAssignmentMethods extends entityMethods {
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
}
export interface unifiedRoleAssignmentOData extends entityOData {
	appScope: appScope;
	directoryScope: directoryObject;
	principal: directoryObject;
	roleDefinition: unifiedRoleDefinition;
}
export interface unifiedRoleAssignmentCollection extends IBaseCollection<unifiedRoleAssignment, unifiedRoleAssignmentOData & unifiedRoleAssignmentProps> {
    add(values?: any): IBaseExecution<unifiedRoleAssignment>;
}
/*********************************************
* unifiedRoleAssignmentSchedule
**********************************************/
export interface unifiedRoleAssignmentSchedule extends unifiedRoleAssignmentScheduleProps, unifiedRoleAssignmentScheduleMethods { }
export interface unifiedRoleAssignmentScheduleProps extends  unifiedRoleScheduleBaseProps {
	assignmentType: string;
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;
}
export interface unifiedRoleAssignmentScheduleMethods extends unifiedRoleScheduleBaseMethods {
	activatedUsing(): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
}
export interface unifiedRoleAssignmentScheduleOData extends unifiedRoleScheduleBaseOData {
	activatedUsing: unifiedRoleEligibilitySchedule;
}
export interface unifiedRoleAssignmentScheduleCollection extends IBaseCollection<unifiedRoleAssignmentSchedule, unifiedRoleAssignmentScheduleOData & unifiedRoleAssignmentScheduleProps> {
    add(values?: any): IBaseExecution<unifiedRoleAssignmentSchedule>;
}
/*********************************************
* unifiedRoleAssignmentScheduleInstance
**********************************************/
export interface unifiedRoleAssignmentScheduleInstance extends unifiedRoleAssignmentScheduleInstanceProps, unifiedRoleAssignmentScheduleInstanceMethods { }
export interface unifiedRoleAssignmentScheduleInstanceProps extends  unifiedRoleScheduleInstanceBaseProps {
	assignmentType: string;
	endDateTime: any;
	memberType: string;
	roleAssignmentOriginId: string;
	roleAssignmentScheduleId: string;
	startDateTime: any;
}
export interface unifiedRoleAssignmentScheduleInstanceMethods extends unifiedRoleScheduleInstanceBaseMethods {
	activatedUsing(): IBaseQuery<unifiedRoleEligibilityScheduleInstance> & unifiedRoleEligibilityScheduleInstanceMethods;
}
export interface unifiedRoleAssignmentScheduleInstanceOData extends unifiedRoleScheduleInstanceBaseOData {
	activatedUsing: unifiedRoleEligibilityScheduleInstance;
}
export interface unifiedRoleAssignmentScheduleInstanceCollection extends IBaseCollection<unifiedRoleAssignmentScheduleInstance, unifiedRoleAssignmentScheduleInstanceOData & unifiedRoleAssignmentScheduleInstanceProps> {
    add(values?: any): IBaseExecution<unifiedRoleAssignmentScheduleInstance>;
}
/*********************************************
* unifiedRoleAssignmentScheduleRequest
**********************************************/
export interface unifiedRoleAssignmentScheduleRequest extends unifiedRoleAssignmentScheduleRequestProps, unifiedRoleAssignmentScheduleRequestMethods { }
export interface unifiedRoleAssignmentScheduleRequestProps extends  requestProps {
	action: EnumTypes.unifiedRoleScheduleRequestActions;
	appScopeId: string;
	directoryScopeId: string;
	isValidationOnly: boolean;
	justification: string;
	principalId: string;
	roleDefinitionId: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	targetScheduleId: string;
	ticketInfo: ComplexTypes.ticketInfo;
}
export interface unifiedRoleAssignmentScheduleRequestMethods extends requestMethods {
	activatedUsing(): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
	targetSchedule(): IBaseQuery<unifiedRoleAssignmentSchedule> & unifiedRoleAssignmentScheduleMethods;
	cancel(): IBaseExecution<void>;
}
export interface unifiedRoleAssignmentScheduleRequestOData extends requestOData {
	activatedUsing: unifiedRoleEligibilitySchedule;
	appScope: appScope;
	directoryScope: directoryObject;
	principal: directoryObject;
	roleDefinition: unifiedRoleDefinition;
	targetSchedule: unifiedRoleAssignmentSchedule;
	cancel(): IBaseExecution<void>;
}
export interface unifiedRoleAssignmentScheduleRequestCollection extends IBaseCollection<unifiedRoleAssignmentScheduleRequest, unifiedRoleAssignmentScheduleRequestOData & unifiedRoleAssignmentScheduleRequestProps> {
    add(values?: any): IBaseExecution<unifiedRoleAssignmentScheduleRequest>;
}
/*********************************************
* unifiedRoleDefinition
**********************************************/
export interface unifiedRoleDefinition extends unifiedRoleDefinitionProps, unifiedRoleDefinitionMethods { }
export interface unifiedRoleDefinitionProps extends  entityProps {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	isEnabled: boolean;
	resourceScopes: Array<string>[];
	rolePermissions: ComplexTypes.unifiedRolePermission[];
	templateId: string;
	version: string;
}
export interface unifiedRoleDefinitionMethods extends entityMethods {
	inheritsPermissionsFrom(): unifiedRoleDefinitionCollection;
	inheritsPermissionsFrom(id: string | number): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
}
export interface unifiedRoleDefinitionOData extends entityOData {
	inheritsPermissionsFrom: IBaseResults<unifiedRoleDefinition>;
}
export interface unifiedRoleDefinitionCollection extends IBaseCollection<unifiedRoleDefinition, unifiedRoleDefinitionOData & unifiedRoleDefinitionProps> {
    add(values?: any): IBaseExecution<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleEligibilitySchedule
**********************************************/
export interface unifiedRoleEligibilitySchedule extends unifiedRoleEligibilityScheduleProps, unifiedRoleEligibilityScheduleMethods { }
export interface unifiedRoleEligibilityScheduleProps extends  unifiedRoleScheduleBaseProps {
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;
}
export interface unifiedRoleEligibilityScheduleMethods extends unifiedRoleScheduleBaseMethods {

}
export interface unifiedRoleEligibilityScheduleOData extends unifiedRoleScheduleBaseOData {

}
export interface unifiedRoleEligibilityScheduleCollection extends IBaseCollection<unifiedRoleEligibilitySchedule, unifiedRoleEligibilityScheduleOData & unifiedRoleEligibilityScheduleProps> {
    add(values?: any): IBaseExecution<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRoleEligibilityScheduleInstance
**********************************************/
export interface unifiedRoleEligibilityScheduleInstance extends unifiedRoleEligibilityScheduleInstanceProps, unifiedRoleEligibilityScheduleInstanceMethods { }
export interface unifiedRoleEligibilityScheduleInstanceProps extends  unifiedRoleScheduleInstanceBaseProps {
	endDateTime: any;
	memberType: string;
	roleEligibilityScheduleId: string;
	startDateTime: any;
}
export interface unifiedRoleEligibilityScheduleInstanceMethods extends unifiedRoleScheduleInstanceBaseMethods {

}
export interface unifiedRoleEligibilityScheduleInstanceOData extends unifiedRoleScheduleInstanceBaseOData {

}
export interface unifiedRoleEligibilityScheduleInstanceCollection extends IBaseCollection<unifiedRoleEligibilityScheduleInstance, unifiedRoleEligibilityScheduleInstanceOData & unifiedRoleEligibilityScheduleInstanceProps> {
    add(values?: any): IBaseExecution<unifiedRoleEligibilityScheduleInstance>;
}
/*********************************************
* unifiedRoleEligibilityScheduleRequest
**********************************************/
export interface unifiedRoleEligibilityScheduleRequest extends unifiedRoleEligibilityScheduleRequestProps, unifiedRoleEligibilityScheduleRequestMethods { }
export interface unifiedRoleEligibilityScheduleRequestProps extends  requestProps {
	action: EnumTypes.unifiedRoleScheduleRequestActions;
	appScopeId: string;
	directoryScopeId: string;
	isValidationOnly: boolean;
	justification: string;
	principalId: string;
	roleDefinitionId: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	targetScheduleId: string;
	ticketInfo: ComplexTypes.ticketInfo;
}
export interface unifiedRoleEligibilityScheduleRequestMethods extends requestMethods {
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
	targetSchedule(): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
	cancel(): IBaseExecution<void>;
}
export interface unifiedRoleEligibilityScheduleRequestOData extends requestOData {
	appScope: appScope;
	directoryScope: directoryObject;
	principal: directoryObject;
	roleDefinition: unifiedRoleDefinition;
	targetSchedule: unifiedRoleEligibilitySchedule;
	cancel(): IBaseExecution<void>;
}
export interface unifiedRoleEligibilityScheduleRequestCollection extends IBaseCollection<unifiedRoleEligibilityScheduleRequest, unifiedRoleEligibilityScheduleRequestOData & unifiedRoleEligibilityScheduleRequestProps> {
    add(values?: any): IBaseExecution<unifiedRoleEligibilityScheduleRequest>;
}
/*********************************************
* unifiedRoleManagementPolicy
**********************************************/
export interface unifiedRoleManagementPolicy extends unifiedRoleManagementPolicyProps, unifiedRoleManagementPolicyMethods { }
export interface unifiedRoleManagementPolicyProps extends  entityProps {
	description: string;
	displayName: string;
	isOrganizationDefault: boolean;
	lastModifiedBy: ComplexTypes.identity;
	lastModifiedDateTime: any;
	scopeId: string;
	scopeType: string;
}
export interface unifiedRoleManagementPolicyMethods extends entityMethods {
	effectiveRules(): unifiedRoleManagementPolicyRuleCollection;
	effectiveRules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule> & unifiedRoleManagementPolicyRuleMethods;
	rules(): unifiedRoleManagementPolicyRuleCollection;
	rules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule> & unifiedRoleManagementPolicyRuleMethods;
}
export interface unifiedRoleManagementPolicyOData extends entityOData {
	effectiveRules: IBaseResults<unifiedRoleManagementPolicyRule>;
	rules: IBaseResults<unifiedRoleManagementPolicyRule>;
}
export interface unifiedRoleManagementPolicyCollection extends IBaseCollection<unifiedRoleManagementPolicy, unifiedRoleManagementPolicyOData & unifiedRoleManagementPolicyProps> {
    add(values?: any): IBaseExecution<unifiedRoleManagementPolicy>;
}
/*********************************************
* unifiedRoleManagementPolicyApprovalRule
**********************************************/
export interface unifiedRoleManagementPolicyApprovalRule extends unifiedRoleManagementPolicyApprovalRuleProps, unifiedRoleManagementPolicyApprovalRuleMethods { }
export interface unifiedRoleManagementPolicyApprovalRuleProps extends  unifiedRoleManagementPolicyRuleProps {
	setting: ComplexTypes.approvalSettings;
}
export interface unifiedRoleManagementPolicyApprovalRuleMethods extends unifiedRoleManagementPolicyRuleMethods {

}
export interface unifiedRoleManagementPolicyApprovalRuleOData extends unifiedRoleManagementPolicyRuleOData {

}
/*********************************************
* unifiedRoleManagementPolicyAssignment
**********************************************/
export interface unifiedRoleManagementPolicyAssignment extends unifiedRoleManagementPolicyAssignmentProps, unifiedRoleManagementPolicyAssignmentMethods { }
export interface unifiedRoleManagementPolicyAssignmentProps extends  entityProps {
	policyId: string;
	roleDefinitionId: string;
	scopeId: string;
	scopeType: string;
}
export interface unifiedRoleManagementPolicyAssignmentMethods extends entityMethods {
	policy(): IBaseQuery<unifiedRoleManagementPolicy> & unifiedRoleManagementPolicyMethods;
}
export interface unifiedRoleManagementPolicyAssignmentOData extends entityOData {
	policy: unifiedRoleManagementPolicy;
}
export interface unifiedRoleManagementPolicyAssignmentCollection extends IBaseCollection<unifiedRoleManagementPolicyAssignment, unifiedRoleManagementPolicyAssignmentOData & unifiedRoleManagementPolicyAssignmentProps> {
    add(values?: any): IBaseExecution<unifiedRoleManagementPolicyAssignment>;
}
/*********************************************
* unifiedRoleManagementPolicyAuthenticationContextRule
**********************************************/
export interface unifiedRoleManagementPolicyAuthenticationContextRule extends unifiedRoleManagementPolicyAuthenticationContextRuleProps, unifiedRoleManagementPolicyAuthenticationContextRuleMethods { }
export interface unifiedRoleManagementPolicyAuthenticationContextRuleProps extends  unifiedRoleManagementPolicyRuleProps {
	claimValue: string;
	isEnabled: boolean;
}
export interface unifiedRoleManagementPolicyAuthenticationContextRuleMethods extends unifiedRoleManagementPolicyRuleMethods {

}
export interface unifiedRoleManagementPolicyAuthenticationContextRuleOData extends unifiedRoleManagementPolicyRuleOData {

}
/*********************************************
* unifiedRoleManagementPolicyEnablementRule
**********************************************/
export interface unifiedRoleManagementPolicyEnablementRule extends unifiedRoleManagementPolicyEnablementRuleProps, unifiedRoleManagementPolicyEnablementRuleMethods { }
export interface unifiedRoleManagementPolicyEnablementRuleProps extends  unifiedRoleManagementPolicyRuleProps {
	enabledRules: Array<string>[];
}
export interface unifiedRoleManagementPolicyEnablementRuleMethods extends unifiedRoleManagementPolicyRuleMethods {

}
export interface unifiedRoleManagementPolicyEnablementRuleOData extends unifiedRoleManagementPolicyRuleOData {

}
/*********************************************
* unifiedRoleManagementPolicyExpirationRule
**********************************************/
export interface unifiedRoleManagementPolicyExpirationRule extends unifiedRoleManagementPolicyExpirationRuleProps, unifiedRoleManagementPolicyExpirationRuleMethods { }
export interface unifiedRoleManagementPolicyExpirationRuleProps extends  unifiedRoleManagementPolicyRuleProps {
	isExpirationRequired: boolean;
	maximumDuration: number;
}
export interface unifiedRoleManagementPolicyExpirationRuleMethods extends unifiedRoleManagementPolicyRuleMethods {

}
export interface unifiedRoleManagementPolicyExpirationRuleOData extends unifiedRoleManagementPolicyRuleOData {

}
/*********************************************
* unifiedRoleManagementPolicyNotificationRule
**********************************************/
export interface unifiedRoleManagementPolicyNotificationRule extends unifiedRoleManagementPolicyNotificationRuleProps, unifiedRoleManagementPolicyNotificationRuleMethods { }
export interface unifiedRoleManagementPolicyNotificationRuleProps extends  unifiedRoleManagementPolicyRuleProps {
	isDefaultRecipientsEnabled: boolean;
	notificationLevel: string;
	notificationRecipients: Array<string>[];
	notificationType: string;
	recipientType: string;
}
export interface unifiedRoleManagementPolicyNotificationRuleMethods extends unifiedRoleManagementPolicyRuleMethods {

}
export interface unifiedRoleManagementPolicyNotificationRuleOData extends unifiedRoleManagementPolicyRuleOData {

}
/*********************************************
* unifiedRoleManagementPolicyRule
**********************************************/
export interface unifiedRoleManagementPolicyRule extends unifiedRoleManagementPolicyRuleProps, unifiedRoleManagementPolicyRuleMethods { }
export interface unifiedRoleManagementPolicyRuleProps extends  entityProps {
	target: ComplexTypes.unifiedRoleManagementPolicyRuleTarget;
}
export interface unifiedRoleManagementPolicyRuleMethods extends entityMethods {

}
export interface unifiedRoleManagementPolicyRuleOData extends entityOData {

}
export interface unifiedRoleManagementPolicyRuleCollection extends IBaseCollection<unifiedRoleManagementPolicyRule, unifiedRoleManagementPolicyRuleOData & unifiedRoleManagementPolicyRuleProps> {
    add(values?: any): IBaseExecution<unifiedRoleManagementPolicyRule>;
}
/*********************************************
* unifiedRoleScheduleBase
**********************************************/
export interface unifiedRoleScheduleBase extends unifiedRoleScheduleBaseProps, unifiedRoleScheduleBaseMethods { }
export interface unifiedRoleScheduleBaseProps extends  entityProps {
	appScopeId: string;
	createdDateTime: any;
	createdUsing: string;
	directoryScopeId: string;
	modifiedDateTime: any;
	principalId: string;
	roleDefinitionId: string;
	status: string;
}
export interface unifiedRoleScheduleBaseMethods extends entityMethods {
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
}
export interface unifiedRoleScheduleBaseOData extends entityOData {
	appScope: appScope;
	directoryScope: directoryObject;
	principal: directoryObject;
	roleDefinition: unifiedRoleDefinition;
}
/*********************************************
* unifiedRoleScheduleInstanceBase
**********************************************/
export interface unifiedRoleScheduleInstanceBase extends unifiedRoleScheduleInstanceBaseProps, unifiedRoleScheduleInstanceBaseMethods { }
export interface unifiedRoleScheduleInstanceBaseProps extends  entityProps {
	appScopeId: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
}
export interface unifiedRoleScheduleInstanceBaseMethods extends entityMethods {
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
}
export interface unifiedRoleScheduleInstanceBaseOData extends entityOData {
	appScope: appScope;
	directoryScope: directoryObject;
	principal: directoryObject;
	roleDefinition: unifiedRoleDefinition;
}
/*********************************************
* unifiedStorageQuota
**********************************************/
export interface unifiedStorageQuota extends unifiedStorageQuotaProps, unifiedStorageQuotaMethods { }
export interface unifiedStorageQuotaProps extends  entityProps {
	deleted: number;
	manageWebUrl: string;
	remaining: number;
	state: string;
	total: number;
	used: number;
}
export interface unifiedStorageQuotaMethods extends entityMethods {
	services(): serviceStorageQuotaBreakdownCollection;
	services(id: string | number): IBaseQuery<serviceStorageQuotaBreakdown> & serviceStorageQuotaBreakdownMethods;
}
export interface unifiedStorageQuotaOData extends entityOData {
	services: IBaseResults<serviceStorageQuotaBreakdown>;
}
/*********************************************
* unmuteParticipantOperation
**********************************************/
export interface unmuteParticipantOperation extends unmuteParticipantOperationProps, unmuteParticipantOperationMethods { }
export interface unmuteParticipantOperationProps extends  commsOperationProps {

}
export interface unmuteParticipantOperationMethods extends commsOperationMethods {

}
export interface unmuteParticipantOperationOData extends commsOperationOData {

}
/*********************************************
* updateRecordingStatusOperation
**********************************************/
export interface updateRecordingStatusOperation extends updateRecordingStatusOperationProps, updateRecordingStatusOperationMethods { }
export interface updateRecordingStatusOperationProps extends  commsOperationProps {

}
export interface updateRecordingStatusOperationMethods extends commsOperationMethods {

}
export interface updateRecordingStatusOperationOData extends commsOperationOData {

}
/*********************************************
* urlAssessmentRequest
**********************************************/
export interface urlAssessmentRequest extends urlAssessmentRequestProps, urlAssessmentRequestMethods { }
export interface urlAssessmentRequestProps extends  threatAssessmentRequestProps {
	url: string;
}
export interface urlAssessmentRequestMethods extends threatAssessmentRequestMethods {

}
export interface urlAssessmentRequestOData extends threatAssessmentRequestOData {

}
/*********************************************
* usedInsight
**********************************************/
export interface usedInsight extends usedInsightProps, usedInsightMethods { }
export interface usedInsightProps extends  entityProps {
	lastUsed: ComplexTypes.usageDetails;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
}
export interface usedInsightMethods extends entityMethods {
	resource(): IBaseQuery<entity> & entityMethods;
}
export interface usedInsightOData extends entityOData {
	resource: entity;
}
export interface usedInsightCollection extends IBaseCollection<usedInsight, usedInsightOData & usedInsightProps> {
    add(values?: any): IBaseExecution<usedInsight>;
}
/*********************************************
* user
**********************************************/
export interface user extends userProps, userMethods { }
export interface userProps extends  directoryObjectProps {
	signInActivity: ComplexTypes.signInActivity;
	accountEnabled: boolean;
	ageGroup: string;
	assignedLicenses: ComplexTypes.assignedLicense[];
	assignedPlans: ComplexTypes.assignedPlan[];
	authorizationInfo: ComplexTypes.authorizationInfo;
	businessPhones: Array<string>[];
	city: string;
	companyName: string;
	consentProvidedForMinor: string;
	country: string;
	createdDateTime: any;
	creationType: string;
	customSecurityAttributes: ComplexTypes.customSecurityAttributeValue;
	department: string;
	displayName: string;
	employeeHireDate: any;
	employeeId: string;
	employeeLeaveDateTime: any;
	employeeOrgData: ComplexTypes.employeeOrgData;
	employeeType: string;
	externalUserState: string;
	externalUserStateChangeDateTime: any;
	faxNumber: string;
	givenName: string;
	identities: ComplexTypes.objectIdentity[];
	imAddresses: Array<string>[];
	isManagementRestricted: boolean;
	isResourceAccount: boolean;
	jobTitle: string;
	lastPasswordChangeDateTime: any;
	legalAgeGroupClassification: string;
	licenseAssignmentStates: ComplexTypes.licenseAssignmentState[];
	mail: string;
	mailNickname: string;
	mobilePhone: string;
	officeLocation: string;
	onPremisesDistinguishedName: string;
	onPremisesDomainName: string;
	onPremisesExtensionAttributes: ComplexTypes.onPremisesExtensionAttributes;
	onPremisesImmutableId: string;
	onPremisesLastSyncDateTime: any;
	onPremisesProvisioningErrors: ComplexTypes.onPremisesProvisioningError[];
	onPremisesSamAccountName: string;
	onPremisesSecurityIdentifier: string;
	onPremisesSyncEnabled: boolean;
	onPremisesUserPrincipalName: string;
	otherMails: Array<string>[];
	passwordPolicies: string;
	passwordProfile: ComplexTypes.passwordProfile;
	postalCode: string;
	preferredDataLocation: string;
	preferredLanguage: string;
	provisionedPlans: ComplexTypes.provisionedPlan[];
	proxyAddresses: Array<string>[];
	securityIdentifier: string;
	serviceProvisioningErrors: ComplexTypes.serviceProvisioningError[];
	showInAddressList: boolean;
	signInSessionsValidFromDateTime: any;
	state: string;
	streetAddress: string;
	surname: string;
	usageLocation: string;
	userPrincipalName: string;
	userType: string;
	mailboxSettings: ComplexTypes.mailboxSettings;
	deviceEnrollmentLimit: number;
	print: ComplexTypes.userPrint;
	aboutMe: string;
	birthday: any;
	hireDate: any;
	interests: Array<string>[];
	mySite: string;
	pastProjects: Array<string>[];
	preferredName: string;
	responsibilities: Array<string>[];
	schools: Array<string>[];
	skills: Array<string>[];
}
export interface userMethods extends directoryObjectMethods {
	appRoleAssignments(): appRoleAssignmentCollection;
	appRoleAssignments(id: string | number): IBaseQuery<appRoleAssignment> & appRoleAssignmentMethods;
	createdObjects(): directoryObjectCollection;
	createdObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	directReports(): directoryObjectCollection;
	directReports(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	licenseDetails(): licenseDetailsCollection;
	licenseDetails(id: string | number): IBaseQuery<licenseDetails> & licenseDetailsMethods;
	manager(): IBaseQuery<directoryObject> & directoryObjectMethods;
	memberOf(): directoryObjectCollection;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	oauth2PermissionGrants(): oAuth2PermissionGrantCollection;
	oauth2PermissionGrants(id: string | number): IBaseQuery<oAuth2PermissionGrant> & oAuth2PermissionGrantMethods;
	ownedDevices(): directoryObjectCollection;
	ownedDevices(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	ownedObjects(): directoryObjectCollection;
	ownedObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	registeredDevices(): directoryObjectCollection;
	registeredDevices(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	scopedRoleMemberOf(): scopedRoleMembershipCollection;
	scopedRoleMemberOf(id: string | number): IBaseQuery<scopedRoleMembership> & scopedRoleMembershipMethods;
	sponsors(): directoryObjectCollection;
	sponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	transitiveMemberOf(): directoryObjectCollection;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	calendar(): IBaseQuery<calendar> & calendarMethods;
	calendarGroups(): calendarGroupCollection;
	calendarGroups(id: string | number): IBaseQuery<calendarGroup> & calendarGroupMethods;
	calendars(): calendarCollection;
	calendars(id: string | number): IBaseQuery<calendar> & calendarMethods;
	calendarView(): eventCollection;
	calendarView(id: string | number): IBaseQuery<event> & eventMethods;
	contactFolders(): contactFolderCollection;
	contactFolders(id: string | number): IBaseQuery<contactFolder> & contactFolderMethods;
	contacts(): contactCollection;
	contacts(id: string | number): IBaseQuery<contact> & contactMethods;
	events(): eventCollection;
	events(id: string | number): IBaseQuery<event> & eventMethods;
	inferenceClassification(): IBaseQuery<inferenceClassification> & inferenceClassificationMethods;
	mailFolders(): mailFolderCollection;
	mailFolders(id: string | number): IBaseQuery<mailFolder> & mailFolderMethods;
	messages(): messageCollection;
	messages(id: string | number): IBaseQuery<message> & messageMethods;
	outlook(): IBaseQuery<outlookUser> & outlookUserMethods;
	people(): personCollection;
	people(id: string | number): IBaseQuery<person> & personMethods;
	drive(): IBaseQuery<drive> & driveMethods;
	drives(): driveCollection;
	drives(id: string | number): IBaseQuery<drive> & driveMethods;
	followedSites(): siteCollection;
	followedSites(id: string | number): IBaseQuery<site> & siteMethods;
	extensions(): extensionCollection;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	agreementAcceptances(): agreementAcceptanceCollection;
	agreementAcceptances(id: string | number): IBaseQuery<agreementAcceptance> & agreementAcceptanceMethods;
	managedDevices(): managedDeviceCollection;
	managedDevices(id: string | number): IBaseQuery<managedDevice> & managedDeviceMethods;
	managedAppRegistrations(): managedAppRegistrationCollection;
	managedAppRegistrations(id: string | number): IBaseQuery<managedAppRegistration> & managedAppRegistrationMethods;
	deviceManagementTroubleshootingEvents(): deviceManagementTroubleshootingEventCollection;
	deviceManagementTroubleshootingEvents(id: string | number): IBaseQuery<deviceManagementTroubleshootingEvent> & deviceManagementTroubleshootingEventMethods;
	planner(): IBaseQuery<plannerUser> & plannerUserMethods;
	insights(): IBaseQuery<itemInsights> & itemInsightsMethods;
	settings(): IBaseQuery<userSettings> & userSettingsMethods;
	onenote(): IBaseQuery<onenote> & onenoteMethods;
	cloudClipboard(): IBaseQuery<cloudClipboardRoot> & cloudClipboardRootMethods;
	photo(): IBaseQuery<profilePhoto> & profilePhotoMethods;
	photos(): profilePhotoCollection;
	photos(id: string | number): IBaseQuery<profilePhoto> & profilePhotoMethods;
	activities(): userActivityCollection;
	activities(id: string | number): IBaseQuery<userActivity> & userActivityMethods;
	onlineMeetings(): onlineMeetingCollection;
	onlineMeetings(id: string | number): IBaseQuery<onlineMeeting> & onlineMeetingMethods;
	presence(): IBaseQuery<presence> & presenceMethods;
	authentication(): IBaseQuery<authentication> & authenticationMethods;
	chats(): chatCollection;
	chats(id: string | number): IBaseQuery<chat> & chatMethods;
	joinedTeams(): teamCollection;
	joinedTeams(id: string | number): IBaseQuery<team> & teamMethods;
	permissionGrants(): resourceSpecificPermissionGrantCollection;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant> & resourceSpecificPermissionGrantMethods;
	teamwork(): IBaseQuery<userTeamwork> & userTeamworkMethods;
	solutions(): IBaseQuery<userSolutionRoot> & userSolutionRootMethods;
	todo(): IBaseQuery<todo> & todoMethods;
	employeeExperience(): IBaseQuery<employeeExperienceUser> & employeeExperienceUserMethods;
	assignLicense(addLicenses, removeLicenses): IBaseExecution<user>;
	changePassword(currentPassword, newPassword): IBaseExecution<void>;
	reprocessLicenseAssignment(): IBaseExecution<user>;
	retryServiceProvisioning(): IBaseExecution<void>;
	revokeSignInSessions(): IBaseExecution<boolean>;
	findMeetingTimes(attendees, locationConstraint, timeConstraint, meetingDuration, maxCandidates, isOrganizerOptional, returnSuggestionReasons, minimumAttendeePercentage): IBaseExecution<ComplexTypes.meetingTimeSuggestionsResult>;
	getMailTips(EmailAddresses, MailTipsOptions): IBaseExecution<ComplexTypes.mailTips[]>;
	sendMail(Message, SaveToSentItems): IBaseExecution<void>;
	translateExchangeIds(InputIds, TargetIdType, SourceIdType): IBaseExecution<ComplexTypes.convertIdResult[]>;
	removeAllDevicesFromManagement(): IBaseExecution<void>;
	wipeManagedAppRegistrationsByDeviceTag(deviceTag): IBaseExecution<void>;
	exportPersonalData(storageLocation): IBaseExecution<void>;
	exportDeviceAndAppManagementData(): ComplexTypes.deviceAndAppManagementData;
	exportDeviceAndAppManagementData(skip, top): ComplexTypes.deviceAndAppManagementData;
	getManagedAppDiagnosticStatuses(): ComplexTypes.managedAppDiagnosticStatus[];
	getManagedAppPolicies(): managedAppPolicy[];
	getManagedDevicesWithAppFailures(): Array<string>[];
}
export interface userOData extends directoryObjectOData {
	appRoleAssignments: IBaseResults<appRoleAssignment>;
	createdObjects: IBaseResults<directoryObject>;
	directReports: IBaseResults<directoryObject>;
	licenseDetails: IBaseResults<licenseDetails>;
	manager: directoryObject;
	memberOf: IBaseResults<directoryObject>;
	oauth2PermissionGrants: IBaseResults<oAuth2PermissionGrant>;
	ownedDevices: IBaseResults<directoryObject>;
	ownedObjects: IBaseResults<directoryObject>;
	registeredDevices: IBaseResults<directoryObject>;
	scopedRoleMemberOf: IBaseResults<scopedRoleMembership>;
	sponsors: IBaseResults<directoryObject>;
	transitiveMemberOf: IBaseResults<directoryObject>;
	calendar: calendar;
	calendarGroups: IBaseResults<calendarGroup>;
	calendars: IBaseResults<calendar>;
	calendarView: IBaseResults<event>;
	contactFolders: IBaseResults<contactFolder>;
	contacts: IBaseResults<contact>;
	events: IBaseResults<event>;
	inferenceClassification: inferenceClassification;
	mailFolders: IBaseResults<mailFolder>;
	messages: IBaseResults<message>;
	outlook: outlookUser;
	people: IBaseResults<person>;
	drive: drive;
	drives: IBaseResults<drive>;
	followedSites: IBaseResults<site>;
	extensions: IBaseResults<extension>;
	agreementAcceptances: IBaseResults<agreementAcceptance>;
	managedDevices: IBaseResults<managedDevice>;
	managedAppRegistrations: IBaseResults<managedAppRegistration>;
	deviceManagementTroubleshootingEvents: IBaseResults<deviceManagementTroubleshootingEvent>;
	planner: plannerUser;
	insights: itemInsights;
	settings: userSettings;
	onenote: onenote;
	cloudClipboard: cloudClipboardRoot;
	photo: profilePhoto;
	photos: IBaseResults<profilePhoto>;
	activities: IBaseResults<userActivity>;
	onlineMeetings: IBaseResults<onlineMeeting>;
	presence: presence;
	authentication: authentication;
	chats: IBaseResults<chat>;
	joinedTeams: IBaseResults<team>;
	permissionGrants: IBaseResults<resourceSpecificPermissionGrant>;
	teamwork: userTeamwork;
	solutions: userSolutionRoot;
	todo: todo;
	employeeExperience: employeeExperienceUser;
	assignLicense(addLicenses, removeLicenses): IBaseExecution<user>;
	changePassword(currentPassword, newPassword): IBaseExecution<void>;
	reprocessLicenseAssignment(): IBaseExecution<user>;
	retryServiceProvisioning(): IBaseExecution<void>;
	revokeSignInSessions(): IBaseExecution<boolean>;
	findMeetingTimes(attendees, locationConstraint, timeConstraint, meetingDuration, maxCandidates, isOrganizerOptional, returnSuggestionReasons, minimumAttendeePercentage): IBaseExecution<ComplexTypes.meetingTimeSuggestionsResult>;
	getMailTips(EmailAddresses, MailTipsOptions): IBaseExecution<ComplexTypes.mailTips[]>;
	sendMail(Message, SaveToSentItems): IBaseExecution<void>;
	translateExchangeIds(InputIds, TargetIdType, SourceIdType): IBaseExecution<ComplexTypes.convertIdResult[]>;
	removeAllDevicesFromManagement(): IBaseExecution<void>;
	wipeManagedAppRegistrationsByDeviceTag(deviceTag): IBaseExecution<void>;
	exportPersonalData(storageLocation): IBaseExecution<void>;
	exportDeviceAndAppManagementData(): ComplexTypes.deviceAndAppManagementData;
	exportDeviceAndAppManagementData(skip, top): ComplexTypes.deviceAndAppManagementData;
	getManagedAppDiagnosticStatuses(): ComplexTypes.managedAppDiagnosticStatus[];
	getManagedAppPolicies(): managedAppPolicy[];
	getManagedDevicesWithAppFailures(): Array<string>[];
}
export interface userCollection extends IBaseCollection<user, userOData & userProps> {
    add(values?: any): IBaseExecution<user>;
}
/*********************************************
* userActivity
**********************************************/
export interface userActivity extends userActivityProps, userActivityMethods { }
export interface userActivityProps extends  entityProps {
	activationUrl: string;
	activitySourceHost: string;
	appActivityId: string;
	appDisplayName: string;
	contentInfo: ComplexTypes.Json;
	contentUrl: string;
	createdDateTime: any;
	expirationDateTime: any;
	fallbackUrl: string;
	lastModifiedDateTime: any;
	status: EnumTypes.status;
	userTimezone: string;
	visualElements: ComplexTypes.visualInfo;
}
export interface userActivityMethods extends entityMethods {
	historyItems(): activityHistoryItemCollection;
	historyItems(id: string | number): IBaseQuery<activityHistoryItem> & activityHistoryItemMethods;
}
export interface userActivityOData extends entityOData {
	historyItems: IBaseResults<activityHistoryItem>;
}
export interface userActivityCollection extends IBaseCollection<userActivity, userActivityOData & userActivityProps> {
    add(values?: any): IBaseExecution<userActivity>;
}
/*********************************************
* userConsentRequest
**********************************************/
export interface userConsentRequest extends userConsentRequestProps, userConsentRequestMethods { }
export interface userConsentRequestProps extends  requestProps {
	reason: string;
}
export interface userConsentRequestMethods extends requestMethods {
	approval(): IBaseQuery<approval> & approvalMethods;
}
export interface userConsentRequestOData extends requestOData {
	approval: approval;
}
export interface userConsentRequestCollection extends IBaseCollection<userConsentRequest, userConsentRequestOData & userConsentRequestProps> {
    add(values?: any): IBaseExecution<userConsentRequest>;
}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails extends userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsProps, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsMethods { }
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsProps extends  entityProps {
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appVersion: string;
	deviceCountWithCrashes: number;
	isLatestUsedVersion: boolean;
	isMostUsedVersion: boolean;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollection extends IBaseCollection<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsOData & userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>;
}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId extends userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdProps, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdMethods { }
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdProps extends  entityProps {
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appVersion: string;
	deviceDisplayName: string;
	deviceId: string;
	processedDateTime: any;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollection extends IBaseCollection<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdOData & userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId>;
}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByOSVersion
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersion extends userExperienceAnalyticsAppHealthAppPerformanceByOSVersionProps, userExperienceAnalyticsAppHealthAppPerformanceByOSVersionMethods { }
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersionProps extends  entityProps {
	activeDeviceCount: number;
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appUsageDuration: number;
	meanTimeToFailureInMinutes: number;
	osBuildNumber: string;
	osVersion: string;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersionMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersionOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollection extends IBaseCollection<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion, userExperienceAnalyticsAppHealthAppPerformanceByOSVersionOData & userExperienceAnalyticsAppHealthAppPerformanceByOSVersionProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion>;
}
/*********************************************
* userExperienceAnalyticsAppHealthApplicationPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthApplicationPerformance extends userExperienceAnalyticsAppHealthApplicationPerformanceProps, userExperienceAnalyticsAppHealthApplicationPerformanceMethods { }
export interface userExperienceAnalyticsAppHealthApplicationPerformanceProps extends  entityProps {
	activeDeviceCount: number;
	appCrashCount: number;
	appDisplayName: string;
	appHangCount: number;
	appHealthScore: number;
	appName: string;
	appPublisher: string;
	appUsageDuration: number;
	meanTimeToFailureInMinutes: number;
}
export interface userExperienceAnalyticsAppHealthApplicationPerformanceMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthApplicationPerformanceOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthApplicationPerformanceCollection extends IBaseCollection<userExperienceAnalyticsAppHealthApplicationPerformance, userExperienceAnalyticsAppHealthApplicationPerformanceOData & userExperienceAnalyticsAppHealthApplicationPerformanceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthApplicationPerformance>;
}
/*********************************************
* userExperienceAnalyticsAppHealthDeviceModelPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthDeviceModelPerformance extends userExperienceAnalyticsAppHealthDeviceModelPerformanceProps, userExperienceAnalyticsAppHealthDeviceModelPerformanceMethods { }
export interface userExperienceAnalyticsAppHealthDeviceModelPerformanceProps extends  entityProps {
	activeDeviceCount: number;
	deviceManufacturer: string;
	deviceModel: string;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	meanTimeToFailureInMinutes: number;
	modelAppHealthScore: number;
}
export interface userExperienceAnalyticsAppHealthDeviceModelPerformanceMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthDeviceModelPerformanceOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthDeviceModelPerformanceCollection extends IBaseCollection<userExperienceAnalyticsAppHealthDeviceModelPerformance, userExperienceAnalyticsAppHealthDeviceModelPerformanceOData & userExperienceAnalyticsAppHealthDeviceModelPerformanceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthDeviceModelPerformance>;
}
/*********************************************
* userExperienceAnalyticsAppHealthDevicePerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthDevicePerformance extends userExperienceAnalyticsAppHealthDevicePerformanceProps, userExperienceAnalyticsAppHealthDevicePerformanceMethods { }
export interface userExperienceAnalyticsAppHealthDevicePerformanceProps extends  entityProps {
	appCrashCount: number;
	appHangCount: number;
	crashedAppCount: number;
	deviceAppHealthScore: number;
	deviceDisplayName: string;
	deviceId: string;
	deviceManufacturer: string;
	deviceModel: string;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	meanTimeToFailureInMinutes: number;
	processedDateTime: any;
}
export interface userExperienceAnalyticsAppHealthDevicePerformanceMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthDevicePerformanceOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthDevicePerformanceCollection extends IBaseCollection<userExperienceAnalyticsAppHealthDevicePerformance, userExperienceAnalyticsAppHealthDevicePerformanceOData & userExperienceAnalyticsAppHealthDevicePerformanceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthDevicePerformance>;
}
/*********************************************
* userExperienceAnalyticsAppHealthDevicePerformanceDetails
**********************************************/
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetails extends userExperienceAnalyticsAppHealthDevicePerformanceDetailsProps, userExperienceAnalyticsAppHealthDevicePerformanceDetailsMethods { }
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetailsProps extends  entityProps {
	appDisplayName: string;
	appPublisher: string;
	appVersion: string;
	deviceDisplayName: string;
	deviceId: string;
	eventDateTime: any;
	eventType: string;
}
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetailsMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetailsOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetailsCollection extends IBaseCollection<userExperienceAnalyticsAppHealthDevicePerformanceDetails, userExperienceAnalyticsAppHealthDevicePerformanceDetailsOData & userExperienceAnalyticsAppHealthDevicePerformanceDetailsProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthDevicePerformanceDetails>;
}
/*********************************************
* userExperienceAnalyticsAppHealthOSVersionPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthOSVersionPerformance extends userExperienceAnalyticsAppHealthOSVersionPerformanceProps, userExperienceAnalyticsAppHealthOSVersionPerformanceMethods { }
export interface userExperienceAnalyticsAppHealthOSVersionPerformanceProps extends  entityProps {
	activeDeviceCount: number;
	meanTimeToFailureInMinutes: number;
	osBuildNumber: string;
	osVersion: string;
	osVersionAppHealthScore: number;
}
export interface userExperienceAnalyticsAppHealthOSVersionPerformanceMethods extends entityMethods {

}
export interface userExperienceAnalyticsAppHealthOSVersionPerformanceOData extends entityOData {

}
export interface userExperienceAnalyticsAppHealthOSVersionPerformanceCollection extends IBaseCollection<userExperienceAnalyticsAppHealthOSVersionPerformance, userExperienceAnalyticsAppHealthOSVersionPerformanceOData & userExperienceAnalyticsAppHealthOSVersionPerformanceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsAppHealthOSVersionPerformance>;
}
/*********************************************
* userExperienceAnalyticsBaseline
**********************************************/
export interface userExperienceAnalyticsBaseline extends userExperienceAnalyticsBaselineProps, userExperienceAnalyticsBaselineMethods { }
export interface userExperienceAnalyticsBaselineProps extends  entityProps {
	createdDateTime: any;
	displayName: string;
	isBuiltIn: boolean;
}
export interface userExperienceAnalyticsBaselineMethods extends entityMethods {
	appHealthMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	batteryHealthMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	bestPracticesMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	deviceBootPerformanceMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	rebootAnalyticsMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	resourcePerformanceMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	workFromAnywhereMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
}
export interface userExperienceAnalyticsBaselineOData extends entityOData {
	appHealthMetrics: userExperienceAnalyticsCategory;
	batteryHealthMetrics: userExperienceAnalyticsCategory;
	bestPracticesMetrics: userExperienceAnalyticsCategory;
	deviceBootPerformanceMetrics: userExperienceAnalyticsCategory;
	rebootAnalyticsMetrics: userExperienceAnalyticsCategory;
	resourcePerformanceMetrics: userExperienceAnalyticsCategory;
	workFromAnywhereMetrics: userExperienceAnalyticsCategory;
}
export interface userExperienceAnalyticsBaselineCollection extends IBaseCollection<userExperienceAnalyticsBaseline, userExperienceAnalyticsBaselineOData & userExperienceAnalyticsBaselineProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsBaseline>;
}
/*********************************************
* userExperienceAnalyticsCategory
**********************************************/
export interface userExperienceAnalyticsCategory extends userExperienceAnalyticsCategoryProps, userExperienceAnalyticsCategoryMethods { }
export interface userExperienceAnalyticsCategoryProps extends  entityProps {
	insights: ComplexTypes.userExperienceAnalyticsInsight[];
}
export interface userExperienceAnalyticsCategoryMethods extends entityMethods {
	metricValues(): userExperienceAnalyticsMetricCollection;
	metricValues(id: string | number): IBaseQuery<userExperienceAnalyticsMetric> & userExperienceAnalyticsMetricMethods;
}
export interface userExperienceAnalyticsCategoryOData extends entityOData {
	metricValues: IBaseResults<userExperienceAnalyticsMetric>;
}
export interface userExperienceAnalyticsCategoryCollection extends IBaseCollection<userExperienceAnalyticsCategory, userExperienceAnalyticsCategoryOData & userExperienceAnalyticsCategoryProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsCategory>;
}
/*********************************************
* userExperienceAnalyticsDevicePerformance
**********************************************/
export interface userExperienceAnalyticsDevicePerformance extends userExperienceAnalyticsDevicePerformanceProps, userExperienceAnalyticsDevicePerformanceMethods { }
export interface userExperienceAnalyticsDevicePerformanceProps extends  entityProps {
	averageBlueScreens: number;
	averageRestarts: number;
	blueScreenCount: number;
	bootScore: number;
	coreBootTimeInMs: number;
	coreLoginTimeInMs: number;
	deviceCount: number;
	deviceName: string;
	diskType: EnumTypes.diskType;
	groupPolicyBootTimeInMs: number;
	groupPolicyLoginTimeInMs: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	loginScore: number;
	manufacturer: string;
	model: string;
	modelStartupPerformanceScore: number;
	operatingSystemVersion: string;
	responsiveDesktopTimeInMs: number;
	restartCount: number;
	startupPerformanceScore: number;
}
export interface userExperienceAnalyticsDevicePerformanceMethods extends entityMethods {

}
export interface userExperienceAnalyticsDevicePerformanceOData extends entityOData {

}
export interface userExperienceAnalyticsDevicePerformanceCollection extends IBaseCollection<userExperienceAnalyticsDevicePerformance, userExperienceAnalyticsDevicePerformanceOData & userExperienceAnalyticsDevicePerformanceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsDevicePerformance>;
}
/*********************************************
* userExperienceAnalyticsDeviceScores
**********************************************/
export interface userExperienceAnalyticsDeviceScores extends userExperienceAnalyticsDeviceScoresProps, userExperienceAnalyticsDeviceScoresMethods { }
export interface userExperienceAnalyticsDeviceScoresProps extends  entityProps {
	appReliabilityScore: number;
	batteryHealthScore: number;
	deviceName: string;
	endpointAnalyticsScore: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	manufacturer: string;
	model: string;
	startupPerformanceScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsDeviceScoresMethods extends entityMethods {

}
export interface userExperienceAnalyticsDeviceScoresOData extends entityOData {

}
export interface userExperienceAnalyticsDeviceScoresCollection extends IBaseCollection<userExperienceAnalyticsDeviceScores, userExperienceAnalyticsDeviceScoresOData & userExperienceAnalyticsDeviceScoresProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsDeviceScores>;
}
/*********************************************
* userExperienceAnalyticsDeviceStartupHistory
**********************************************/
export interface userExperienceAnalyticsDeviceStartupHistory extends userExperienceAnalyticsDeviceStartupHistoryProps, userExperienceAnalyticsDeviceStartupHistoryMethods { }
export interface userExperienceAnalyticsDeviceStartupHistoryProps extends  entityProps {
	coreBootTimeInMs: number;
	coreLoginTimeInMs: number;
	deviceId: string;
	featureUpdateBootTimeInMs: number;
	groupPolicyBootTimeInMs: number;
	groupPolicyLoginTimeInMs: number;
	isFeatureUpdate: boolean;
	isFirstLogin: boolean;
	operatingSystemVersion: string;
	responsiveDesktopTimeInMs: number;
	restartCategory: EnumTypes.userExperienceAnalyticsOperatingSystemRestartCategory;
	restartFaultBucket: string;
	restartStopCode: string;
	startTime: any;
	totalBootTimeInMs: number;
	totalLoginTimeInMs: number;
}
export interface userExperienceAnalyticsDeviceStartupHistoryMethods extends entityMethods {

}
export interface userExperienceAnalyticsDeviceStartupHistoryOData extends entityOData {

}
export interface userExperienceAnalyticsDeviceStartupHistoryCollection extends IBaseCollection<userExperienceAnalyticsDeviceStartupHistory, userExperienceAnalyticsDeviceStartupHistoryOData & userExperienceAnalyticsDeviceStartupHistoryProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsDeviceStartupHistory>;
}
/*********************************************
* userExperienceAnalyticsDeviceStartupProcess
**********************************************/
export interface userExperienceAnalyticsDeviceStartupProcess extends userExperienceAnalyticsDeviceStartupProcessProps, userExperienceAnalyticsDeviceStartupProcessMethods { }
export interface userExperienceAnalyticsDeviceStartupProcessProps extends  entityProps {
	managedDeviceId: string;
	processName: string;
	productName: string;
	publisher: string;
	startupImpactInMs: number;
}
export interface userExperienceAnalyticsDeviceStartupProcessMethods extends entityMethods {

}
export interface userExperienceAnalyticsDeviceStartupProcessOData extends entityOData {

}
export interface userExperienceAnalyticsDeviceStartupProcessCollection extends IBaseCollection<userExperienceAnalyticsDeviceStartupProcess, userExperienceAnalyticsDeviceStartupProcessOData & userExperienceAnalyticsDeviceStartupProcessProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsDeviceStartupProcess>;
}
/*********************************************
* userExperienceAnalyticsDeviceStartupProcessPerformance
**********************************************/
export interface userExperienceAnalyticsDeviceStartupProcessPerformance extends userExperienceAnalyticsDeviceStartupProcessPerformanceProps, userExperienceAnalyticsDeviceStartupProcessPerformanceMethods { }
export interface userExperienceAnalyticsDeviceStartupProcessPerformanceProps extends  entityProps {
	deviceCount: number;
	medianImpactInMs: number;
	processName: string;
	productName: string;
	publisher: string;
	totalImpactInMs: number;
}
export interface userExperienceAnalyticsDeviceStartupProcessPerformanceMethods extends entityMethods {

}
export interface userExperienceAnalyticsDeviceStartupProcessPerformanceOData extends entityOData {

}
export interface userExperienceAnalyticsDeviceStartupProcessPerformanceCollection extends IBaseCollection<userExperienceAnalyticsDeviceStartupProcessPerformance, userExperienceAnalyticsDeviceStartupProcessPerformanceOData & userExperienceAnalyticsDeviceStartupProcessPerformanceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsDeviceStartupProcessPerformance>;
}
/*********************************************
* userExperienceAnalyticsMetric
**********************************************/
export interface userExperienceAnalyticsMetric extends userExperienceAnalyticsMetricProps, userExperienceAnalyticsMetricMethods { }
export interface userExperienceAnalyticsMetricProps extends  entityProps {
	unit: string;
	value: number;
}
export interface userExperienceAnalyticsMetricMethods extends entityMethods {

}
export interface userExperienceAnalyticsMetricOData extends entityOData {

}
export interface userExperienceAnalyticsMetricCollection extends IBaseCollection<userExperienceAnalyticsMetric, userExperienceAnalyticsMetricOData & userExperienceAnalyticsMetricProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsMetric>;
}
/*********************************************
* userExperienceAnalyticsMetricHistory
**********************************************/
export interface userExperienceAnalyticsMetricHistory extends userExperienceAnalyticsMetricHistoryProps, userExperienceAnalyticsMetricHistoryMethods { }
export interface userExperienceAnalyticsMetricHistoryProps extends  entityProps {
	deviceId: string;
	metricDateTime: any;
	metricType: string;
}
export interface userExperienceAnalyticsMetricHistoryMethods extends entityMethods {

}
export interface userExperienceAnalyticsMetricHistoryOData extends entityOData {

}
export interface userExperienceAnalyticsMetricHistoryCollection extends IBaseCollection<userExperienceAnalyticsMetricHistory, userExperienceAnalyticsMetricHistoryOData & userExperienceAnalyticsMetricHistoryProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsMetricHistory>;
}
/*********************************************
* userExperienceAnalyticsModelScores
**********************************************/
export interface userExperienceAnalyticsModelScores extends userExperienceAnalyticsModelScoresProps, userExperienceAnalyticsModelScoresMethods { }
export interface userExperienceAnalyticsModelScoresProps extends  entityProps {
	appReliabilityScore: number;
	batteryHealthScore: number;
	endpointAnalyticsScore: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	manufacturer: string;
	model: string;
	modelDeviceCount: number;
	startupPerformanceScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsModelScoresMethods extends entityMethods {

}
export interface userExperienceAnalyticsModelScoresOData extends entityOData {

}
export interface userExperienceAnalyticsModelScoresCollection extends IBaseCollection<userExperienceAnalyticsModelScores, userExperienceAnalyticsModelScoresOData & userExperienceAnalyticsModelScoresProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsModelScores>;
}
/*********************************************
* userExperienceAnalyticsOverview
**********************************************/
export interface userExperienceAnalyticsOverview extends userExperienceAnalyticsOverviewProps, userExperienceAnalyticsOverviewMethods { }
export interface userExperienceAnalyticsOverviewProps extends  entityProps {
	insights: ComplexTypes.userExperienceAnalyticsInsight[];
}
export interface userExperienceAnalyticsOverviewMethods extends entityMethods {

}
export interface userExperienceAnalyticsOverviewOData extends entityOData {

}
/*********************************************
* userExperienceAnalyticsScoreHistory
**********************************************/
export interface userExperienceAnalyticsScoreHistory extends userExperienceAnalyticsScoreHistoryProps, userExperienceAnalyticsScoreHistoryMethods { }
export interface userExperienceAnalyticsScoreHistoryProps extends  entityProps {
	startupDateTime: any;
}
export interface userExperienceAnalyticsScoreHistoryMethods extends entityMethods {

}
export interface userExperienceAnalyticsScoreHistoryOData extends entityOData {

}
export interface userExperienceAnalyticsScoreHistoryCollection extends IBaseCollection<userExperienceAnalyticsScoreHistory, userExperienceAnalyticsScoreHistoryOData & userExperienceAnalyticsScoreHistoryProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsScoreHistory>;
}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereDevice
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereDevice extends userExperienceAnalyticsWorkFromAnywhereDeviceProps, userExperienceAnalyticsWorkFromAnywhereDeviceMethods { }
export interface userExperienceAnalyticsWorkFromAnywhereDeviceProps extends  entityProps {
	autoPilotProfileAssigned: boolean;
	autoPilotRegistered: boolean;
	azureAdDeviceId: string;
	azureAdJoinType: string;
	azureAdRegistered: boolean;
	cloudIdentityScore: number;
	cloudManagementScore: number;
	cloudProvisioningScore: number;
	compliancePolicySetToIntune: boolean;
	deviceId: string;
	deviceName: string;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	isCloudManagedGatewayEnabled: boolean;
	managedBy: string;
	manufacturer: string;
	model: string;
	osCheckFailed: boolean;
	osDescription: string;
	osVersion: string;
	otherWorkloadsSetToIntune: boolean;
	ownership: string;
	processor64BitCheckFailed: boolean;
	processorCoreCountCheckFailed: boolean;
	processorFamilyCheckFailed: boolean;
	processorSpeedCheckFailed: boolean;
	ramCheckFailed: boolean;
	secureBootCheckFailed: boolean;
	serialNumber: string;
	storageCheckFailed: boolean;
	tenantAttached: boolean;
	tpmCheckFailed: boolean;
	upgradeEligibility: EnumTypes.operatingSystemUpgradeEligibility;
	windowsScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsWorkFromAnywhereDeviceMethods extends entityMethods {

}
export interface userExperienceAnalyticsWorkFromAnywhereDeviceOData extends entityOData {

}
export interface userExperienceAnalyticsWorkFromAnywhereDeviceCollection extends IBaseCollection<userExperienceAnalyticsWorkFromAnywhereDevice, userExperienceAnalyticsWorkFromAnywhereDeviceOData & userExperienceAnalyticsWorkFromAnywhereDeviceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsWorkFromAnywhereDevice>;
}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric extends userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricProps, userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricMethods { }
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricProps extends  entityProps {
	osCheckFailedPercentage: number;
	processor64BitCheckFailedPercentage: number;
	processorCoreCountCheckFailedPercentage: number;
	processorFamilyCheckFailedPercentage: number;
	processorSpeedCheckFailedPercentage: number;
	ramCheckFailedPercentage: number;
	secureBootCheckFailedPercentage: number;
	storageCheckFailedPercentage: number;
	totalDeviceCount: number;
	tpmCheckFailedPercentage: number;
	upgradeEligibleDeviceCount: number;
}
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricMethods extends entityMethods {

}
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricOData extends entityOData {

}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereMetric
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereMetric extends userExperienceAnalyticsWorkFromAnywhereMetricProps, userExperienceAnalyticsWorkFromAnywhereMetricMethods { }
export interface userExperienceAnalyticsWorkFromAnywhereMetricProps extends  entityProps {

}
export interface userExperienceAnalyticsWorkFromAnywhereMetricMethods extends entityMethods {
	metricDevices(): userExperienceAnalyticsWorkFromAnywhereDeviceCollection;
	metricDevices(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereDevice> & userExperienceAnalyticsWorkFromAnywhereDeviceMethods;
}
export interface userExperienceAnalyticsWorkFromAnywhereMetricOData extends entityOData {
	metricDevices: IBaseResults<userExperienceAnalyticsWorkFromAnywhereDevice>;
}
export interface userExperienceAnalyticsWorkFromAnywhereMetricCollection extends IBaseCollection<userExperienceAnalyticsWorkFromAnywhereMetric, userExperienceAnalyticsWorkFromAnywhereMetricOData & userExperienceAnalyticsWorkFromAnywhereMetricProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsWorkFromAnywhereMetric>;
}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereModelPerformance
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformance extends userExperienceAnalyticsWorkFromAnywhereModelPerformanceProps, userExperienceAnalyticsWorkFromAnywhereModelPerformanceMethods { }
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformanceProps extends  entityProps {
	cloudIdentityScore: number;
	cloudManagementScore: number;
	cloudProvisioningScore: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	manufacturer: string;
	model: string;
	modelDeviceCount: number;
	windowsScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformanceMethods extends entityMethods {

}
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformanceOData extends entityOData {

}
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformanceCollection extends IBaseCollection<userExperienceAnalyticsWorkFromAnywhereModelPerformance, userExperienceAnalyticsWorkFromAnywhereModelPerformanceOData & userExperienceAnalyticsWorkFromAnywhereModelPerformanceProps> {
    add(values?: any): IBaseExecution<userExperienceAnalyticsWorkFromAnywhereModelPerformance>;
}
/*********************************************
* userFlowLanguageConfiguration
**********************************************/
export interface userFlowLanguageConfiguration extends userFlowLanguageConfigurationProps, userFlowLanguageConfigurationMethods { }
export interface userFlowLanguageConfigurationProps extends  entityProps {
	displayName: string;
	isEnabled: boolean;
}
export interface userFlowLanguageConfigurationMethods extends entityMethods {
	defaultPages(): userFlowLanguagePageCollection;
	defaultPages(id: string | number): IBaseQuery<userFlowLanguagePage> & userFlowLanguagePageMethods;
	overridesPages(): userFlowLanguagePageCollection;
	overridesPages(id: string | number): IBaseQuery<userFlowLanguagePage> & userFlowLanguagePageMethods;
}
export interface userFlowLanguageConfigurationOData extends entityOData {
	defaultPages: IBaseResults<userFlowLanguagePage>;
	overridesPages: IBaseResults<userFlowLanguagePage>;
}
export interface userFlowLanguageConfigurationCollection extends IBaseCollection<userFlowLanguageConfiguration, userFlowLanguageConfigurationOData & userFlowLanguageConfigurationProps> {
    add(values?: any): IBaseExecution<userFlowLanguageConfiguration>;
}
/*********************************************
* userFlowLanguagePage
**********************************************/
export interface userFlowLanguagePage extends userFlowLanguagePageProps, userFlowLanguagePageMethods { }
export interface userFlowLanguagePageProps extends  entityProps {

}
export interface userFlowLanguagePageMethods extends entityMethods {

}
export interface userFlowLanguagePageOData extends entityOData {

}
export interface userFlowLanguagePageCollection extends IBaseCollection<userFlowLanguagePage, userFlowLanguagePageOData & userFlowLanguagePageProps> {
    add(values?: any): IBaseExecution<userFlowLanguagePage>;
}
/*********************************************
* userInsightsSettings
**********************************************/
export interface userInsightsSettings extends userInsightsSettingsProps, userInsightsSettingsMethods { }
export interface userInsightsSettingsProps extends  entityProps {
	isEnabled: boolean;
}
export interface userInsightsSettingsMethods extends entityMethods {

}
export interface userInsightsSettingsOData extends entityOData {

}
/*********************************************
* userInstallStateSummary
**********************************************/
export interface userInstallStateSummary extends userInstallStateSummaryProps, userInstallStateSummaryMethods { }
export interface userInstallStateSummaryProps extends  entityProps {
	failedDeviceCount: number;
	installedDeviceCount: number;
	notInstalledDeviceCount: number;
	userName: string;
}
export interface userInstallStateSummaryMethods extends entityMethods {
	deviceStates(): deviceInstallStateCollection;
	deviceStates(id: string | number): IBaseQuery<deviceInstallState> & deviceInstallStateMethods;
}
export interface userInstallStateSummaryOData extends entityOData {
	deviceStates: IBaseResults<deviceInstallState>;
}
export interface userInstallStateSummaryCollection extends IBaseCollection<userInstallStateSummary, userInstallStateSummaryOData & userInstallStateSummaryProps> {
    add(values?: any): IBaseExecution<userInstallStateSummary>;
}
/*********************************************
* userProcessingResult
**********************************************/
export interface userProcessingResult extends userProcessingResultProps, userProcessingResultMethods { }
export interface userProcessingResultProps extends  entityProps {
	completedDateTime: any;
	failedTasksCount: number;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	scheduledDateTime: any;
	startedDateTime: any;
	totalTasksCount: number;
	totalUnprocessedTasksCount: number;
	workflowExecutionType: EnumTypes.workflowExecutionType;
	workflowVersion: number;
}
export interface userProcessingResultMethods extends entityMethods {
	subject(): IBaseQuery<user> & userMethods;
	taskProcessingResults(): IBaseCollection<taskProcessingResult, entity & taskProcessingResultOData & taskProcessingResultProps>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
}
export interface userProcessingResultOData extends entityOData {
	subject: user;
	taskProcessingResults: IBaseResults<taskProcessingResult>;
}
/*********************************************
* userRegistrationDetails
**********************************************/
export interface userRegistrationDetails extends userRegistrationDetailsProps, userRegistrationDetailsMethods { }
export interface userRegistrationDetailsProps extends  entityProps {
	isAdmin: boolean;
	isMfaCapable: boolean;
	isMfaRegistered: boolean;
	isPasswordlessCapable: boolean;
	isSsprCapable: boolean;
	isSsprEnabled: boolean;
	isSsprRegistered: boolean;
	isSystemPreferredAuthenticationMethodEnabled: boolean;
	lastUpdatedDateTime: any;
	methodsRegistered: Array<string>[];
	systemPreferredAuthenticationMethods: Array<string>[];
	userDisplayName: string;
	userPreferredMethodForSecondaryAuthentication: EnumTypes.userDefaultAuthenticationMethod;
	userPrincipalName: string;
	userType: EnumTypes.signInUserType;
}
export interface userRegistrationDetailsMethods extends entityMethods {

}
export interface userRegistrationDetailsOData extends entityOData {

}
export interface userRegistrationDetailsCollection extends IBaseCollection<userRegistrationDetails, userRegistrationDetailsOData & userRegistrationDetailsProps> {
    add(values?: any): IBaseExecution<userRegistrationDetails>;
}
/*********************************************
* userScopeTeamsAppInstallation
**********************************************/
export interface userScopeTeamsAppInstallation extends userScopeTeamsAppInstallationProps, userScopeTeamsAppInstallationMethods { }
export interface userScopeTeamsAppInstallationProps extends  teamsAppInstallationProps {

}
export interface userScopeTeamsAppInstallationMethods extends teamsAppInstallationMethods {
	chat(): IBaseQuery<chat> & chatMethods;
}
export interface userScopeTeamsAppInstallationOData extends teamsAppInstallationOData {
	chat: chat;
}
export interface userScopeTeamsAppInstallationCollection extends IBaseCollection<userScopeTeamsAppInstallation, userScopeTeamsAppInstallationOData & userScopeTeamsAppInstallationProps> {
    add(values?: any): IBaseExecution<userScopeTeamsAppInstallation>;
}
/*********************************************
* userSettings
**********************************************/
export interface userSettings extends userSettingsProps, userSettingsMethods { }
export interface userSettingsProps extends  entityProps {
	contributionToContentDiscoveryAsOrganizationDisabled: boolean;
	contributionToContentDiscoveryDisabled: boolean;
}
export interface userSettingsMethods extends entityMethods {
	itemInsights(): IBaseQuery<userInsightsSettings> & userInsightsSettingsMethods;
	windows(): windowsSettingCollection;
	windows(id: string | number): IBaseQuery<windowsSetting> & windowsSettingMethods;
	shiftPreferences(): IBaseQuery<shiftPreferences> & shiftPreferencesMethods;
	storage(): IBaseQuery<userStorage> & userStorageMethods;
}
export interface userSettingsOData extends entityOData {
	itemInsights: userInsightsSettings;
	windows: IBaseResults<windowsSetting>;
	shiftPreferences: shiftPreferences;
	storage: userStorage;
}
/*********************************************
* userSignInInsight
**********************************************/
export interface userSignInInsight extends userSignInInsightProps, userSignInInsightMethods { }
export interface userSignInInsightProps extends  governanceInsightProps {
	lastSignInDateTime: any;
}
export interface userSignInInsightMethods extends governanceInsightMethods {

}
export interface userSignInInsightOData extends governanceInsightOData {

}
/*********************************************
* userSolutionRoot
**********************************************/
export interface userSolutionRoot extends userSolutionRootProps, userSolutionRootMethods { }
export interface userSolutionRootProps extends  entityProps {

}
export interface userSolutionRootMethods extends entityMethods {
	workingTimeSchedule(): IBaseQuery<workingTimeSchedule> & workingTimeScheduleMethods;
}
export interface userSolutionRootOData extends entityOData {
	workingTimeSchedule: workingTimeSchedule;
}
/*********************************************
* userSource
**********************************************/
export interface userSource extends userSourceProps, userSourceMethods { }
export interface userSourceProps extends  dataSourceProps {
	email: string;
	includedSources: EnumTypes.sourceType;
	siteWebUrl: string;
}
export interface userSourceMethods extends dataSourceMethods {

}
export interface userSourceOData extends dataSourceOData {

}
/*********************************************
* userStorage
**********************************************/
export interface userStorage extends userStorageProps, userStorageMethods { }
export interface userStorageProps extends  entityProps {

}
export interface userStorageMethods extends entityMethods {
	quota(): IBaseQuery<unifiedStorageQuota> & unifiedStorageQuotaMethods;
}
export interface userStorageOData extends entityOData {
	quota: unifiedStorageQuota;
}
/*********************************************
* userTeamwork
**********************************************/
export interface userTeamwork extends userTeamworkProps, userTeamworkMethods { }
export interface userTeamworkProps extends  entityProps {
	locale: string;
	region: string;
}
export interface userTeamworkMethods extends entityMethods {
	associatedTeams(): associatedTeamInfoCollection;
	associatedTeams(id: string | number): IBaseQuery<associatedTeamInfo> & associatedTeamInfoMethods;
	installedApps(): userScopeTeamsAppInstallationCollection;
	installedApps(id: string | number): IBaseQuery<userScopeTeamsAppInstallation> & userScopeTeamsAppInstallationMethods;
	sendActivityNotification(topic, activityType, chainId, previewText, teamsAppId, templateParameters): IBaseExecution<void>;
}
export interface userTeamworkOData extends entityOData {
	associatedTeams: IBaseResults<associatedTeamInfo>;
	installedApps: IBaseResults<userScopeTeamsAppInstallation>;
	sendActivityNotification(topic, activityType, chainId, previewText, teamsAppId, templateParameters): IBaseExecution<void>;
}
/*********************************************
* verticalSection
**********************************************/
export interface verticalSection extends verticalSectionProps, verticalSectionMethods { }
export interface verticalSectionProps extends  entityProps {
	emphasis: EnumTypes.sectionEmphasisType;
}
export interface verticalSectionMethods extends entityMethods {
	webparts(): webPartCollection;
	webparts(id: string | number): IBaseQuery<webPart> & webPartMethods;
}
export interface verticalSectionOData extends entityOData {
	webparts: IBaseResults<webPart>;
}
/*********************************************
* virtualEndpoint
**********************************************/
export interface virtualEndpoint extends virtualEndpointProps, virtualEndpointMethods { }
export interface virtualEndpointProps extends  entityProps {

}
export interface virtualEndpointMethods extends entityMethods {
	auditEvents(): cloudPcAuditEventCollection;
	auditEvents(id: string | number): IBaseQuery<cloudPcAuditEvent> & cloudPcAuditEventMethods;
	cloudPCs(): cloudPCCollection;
	cloudPCs(id: string | number): IBaseQuery<cloudPC> & cloudPCMethods;
	deviceImages(): cloudPcDeviceImageCollection;
	deviceImages(id: string | number): IBaseQuery<cloudPcDeviceImage> & cloudPcDeviceImageMethods;
	galleryImages(): cloudPcGalleryImageCollection;
	galleryImages(id: string | number): IBaseQuery<cloudPcGalleryImage> & cloudPcGalleryImageMethods;
	onPremisesConnections(): cloudPcOnPremisesConnectionCollection;
	onPremisesConnections(id: string | number): IBaseQuery<cloudPcOnPremisesConnection> & cloudPcOnPremisesConnectionMethods;
	provisioningPolicies(): cloudPcProvisioningPolicyCollection;
	provisioningPolicies(id: string | number): IBaseQuery<cloudPcProvisioningPolicy> & cloudPcProvisioningPolicyMethods;
	userSettings(): cloudPcUserSettingCollection;
	userSettings(id: string | number): IBaseQuery<cloudPcUserSetting> & cloudPcUserSettingMethods;
}
export interface virtualEndpointOData extends entityOData {
	auditEvents: IBaseResults<cloudPcAuditEvent>;
	cloudPCs: IBaseResults<cloudPC>;
	deviceImages: IBaseResults<cloudPcDeviceImage>;
	galleryImages: IBaseResults<cloudPcGalleryImage>;
	onPremisesConnections: IBaseResults<cloudPcOnPremisesConnection>;
	provisioningPolicies: IBaseResults<cloudPcProvisioningPolicy>;
	userSettings: IBaseResults<cloudPcUserSetting>;
}
/*********************************************
* virtualEvent
**********************************************/
export interface virtualEvent extends virtualEventProps, virtualEventMethods { }
export interface virtualEventProps extends  entityProps {
	createdBy: ComplexTypes.communicationsIdentitySet;
	description: ComplexTypes.itemBody;
	displayName: string;
	endDateTime: ComplexTypes.dateTimeTimeZone;
	settings: ComplexTypes.virtualEventSettings;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	status: EnumTypes.virtualEventStatus;
}
export interface virtualEventMethods extends entityMethods {
	presenters(): virtualEventPresenterCollection;
	presenters(id: string | number): IBaseQuery<virtualEventPresenter> & virtualEventPresenterMethods;
	sessions(): virtualEventSessionCollection;
	sessions(id: string | number): IBaseQuery<virtualEventSession> & virtualEventSessionMethods;
	cancel(): IBaseExecution<void>;
	publish(): IBaseExecution<void>;
}
export interface virtualEventOData extends entityOData {
	presenters: IBaseResults<virtualEventPresenter>;
	sessions: IBaseResults<virtualEventSession>;
	cancel(): IBaseExecution<void>;
	publish(): IBaseExecution<void>;
}
export interface virtualEventCollection extends IBaseCollection<virtualEvent, virtualEventOData & virtualEventProps> {
    add(values?: any): IBaseExecution<virtualEvent>;
}
/*********************************************
* virtualEventPresenter
**********************************************/
export interface virtualEventPresenter extends virtualEventPresenterProps, virtualEventPresenterMethods { }
export interface virtualEventPresenterProps extends  entityProps {
	email: string;
	identity: ComplexTypes.identity;
	presenterDetails: ComplexTypes.virtualEventPresenterDetails;
}
export interface virtualEventPresenterMethods extends entityMethods {

}
export interface virtualEventPresenterOData extends entityOData {

}
export interface virtualEventPresenterCollection extends IBaseCollection<virtualEventPresenter, virtualEventPresenterOData & virtualEventPresenterProps> {
    add(values?: any): IBaseExecution<virtualEventPresenter>;
}
/*********************************************
* virtualEventRegistration
**********************************************/
export interface virtualEventRegistration extends virtualEventRegistrationProps, virtualEventRegistrationMethods { }
export interface virtualEventRegistrationProps extends  entityProps {
	cancelationDateTime: any;
	email: string;
	firstName: string;
	lastName: string;
	preferredLanguage: string;
	preferredTimezone: string;
	registrationDateTime: any;
	registrationQuestionAnswers: ComplexTypes.virtualEventRegistrationQuestionAnswer[];
	status: EnumTypes.virtualEventAttendeeRegistrationStatus;
	userId: string;
}
export interface virtualEventRegistrationMethods extends entityMethods {
	sessions(): virtualEventSessionCollection;
	sessions(id: string | number): IBaseQuery<virtualEventSession> & virtualEventSessionMethods;
	cancel(): IBaseExecution<void>;
}
export interface virtualEventRegistrationOData extends entityOData {
	sessions: IBaseResults<virtualEventSession>;
	cancel(): IBaseExecution<void>;
}
export interface virtualEventRegistrationCollection extends IBaseCollection<virtualEventRegistration, virtualEventRegistrationOData & virtualEventRegistrationProps> {
    add(values?: any): IBaseExecution<virtualEventRegistration>;
}
/*********************************************
* virtualEventRegistrationConfiguration
**********************************************/
export interface virtualEventRegistrationConfiguration extends virtualEventRegistrationConfigurationProps, virtualEventRegistrationConfigurationMethods { }
export interface virtualEventRegistrationConfigurationProps extends  entityProps {
	capacity: number;
	registrationWebUrl: string;
}
export interface virtualEventRegistrationConfigurationMethods extends entityMethods {
	questions(): virtualEventRegistrationQuestionBaseCollection;
	questions(id: string | number): IBaseQuery<virtualEventRegistrationQuestionBase> & virtualEventRegistrationQuestionBaseMethods;
}
export interface virtualEventRegistrationConfigurationOData extends entityOData {
	questions: IBaseResults<virtualEventRegistrationQuestionBase>;
}
/*********************************************
* virtualEventRegistrationCustomQuestion
**********************************************/
export interface virtualEventRegistrationCustomQuestion extends virtualEventRegistrationCustomQuestionProps, virtualEventRegistrationCustomQuestionMethods { }
export interface virtualEventRegistrationCustomQuestionProps extends  virtualEventRegistrationQuestionBaseProps {
	answerChoices: Array<string>[];
	answerInputType: EnumTypes.virtualEventRegistrationQuestionAnswerInputType;
}
export interface virtualEventRegistrationCustomQuestionMethods extends virtualEventRegistrationQuestionBaseMethods {

}
export interface virtualEventRegistrationCustomQuestionOData extends virtualEventRegistrationQuestionBaseOData {

}
/*********************************************
* virtualEventRegistrationPredefinedQuestion
**********************************************/
export interface virtualEventRegistrationPredefinedQuestion extends virtualEventRegistrationPredefinedQuestionProps, virtualEventRegistrationPredefinedQuestionMethods { }
export interface virtualEventRegistrationPredefinedQuestionProps extends  virtualEventRegistrationQuestionBaseProps {
	label: EnumTypes.virtualEventRegistrationPredefinedQuestionLabel;
}
export interface virtualEventRegistrationPredefinedQuestionMethods extends virtualEventRegistrationQuestionBaseMethods {

}
export interface virtualEventRegistrationPredefinedQuestionOData extends virtualEventRegistrationQuestionBaseOData {

}
/*********************************************
* virtualEventRegistrationQuestionBase
**********************************************/
export interface virtualEventRegistrationQuestionBase extends virtualEventRegistrationQuestionBaseProps, virtualEventRegistrationQuestionBaseMethods { }
export interface virtualEventRegistrationQuestionBaseProps extends  entityProps {
	displayName: string;
	isRequired: boolean;
}
export interface virtualEventRegistrationQuestionBaseMethods extends entityMethods {

}
export interface virtualEventRegistrationQuestionBaseOData extends entityOData {

}
export interface virtualEventRegistrationQuestionBaseCollection extends IBaseCollection<virtualEventRegistrationQuestionBase, virtualEventRegistrationQuestionBaseOData & virtualEventRegistrationQuestionBaseProps> {
    add(values?: any): IBaseExecution<virtualEventRegistrationQuestionBase>;
}
/*********************************************
* virtualEventSession
**********************************************/
export interface virtualEventSession extends virtualEventSessionProps, virtualEventSessionMethods { }
export interface virtualEventSessionProps extends  onlineMeetingBaseProps {
	endDateTime: ComplexTypes.dateTimeTimeZone;
	startDateTime: ComplexTypes.dateTimeTimeZone;
}
export interface virtualEventSessionMethods extends onlineMeetingBaseMethods {

}
export interface virtualEventSessionOData extends onlineMeetingBaseOData {

}
export interface virtualEventSessionCollection extends IBaseCollection<virtualEventSession, virtualEventSessionOData & virtualEventSessionProps> {
    add(values?: any): IBaseExecution<virtualEventSession>;
}
/*********************************************
* virtualEventTownhall
**********************************************/
export interface virtualEventTownhall extends virtualEventTownhallProps, virtualEventTownhallMethods { }
export interface virtualEventTownhallProps extends  virtualEventProps {
	audience: EnumTypes.meetingAudience;
	coOrganizers: ComplexTypes.communicationsUserIdentity[];
	invitedAttendees: ComplexTypes.identity[];
	isInviteOnly: boolean;
}
export interface virtualEventTownhallMethods extends virtualEventMethods {

}
export interface virtualEventTownhallOData extends virtualEventOData {

}
export interface virtualEventTownhallCollection extends IBaseCollection<virtualEventTownhall, virtualEventTownhallOData & virtualEventTownhallProps> {
    add(values?: any): IBaseExecution<virtualEventTownhall>;
}
/*********************************************
* virtualEventWebinar
**********************************************/
export interface virtualEventWebinar extends virtualEventWebinarProps, virtualEventWebinarMethods { }
export interface virtualEventWebinarProps extends  virtualEventProps {
	audience: EnumTypes.meetingAudience;
	coOrganizers: ComplexTypes.communicationsUserIdentity[];
}
export interface virtualEventWebinarMethods extends virtualEventMethods {
	registrationConfiguration(): IBaseQuery<virtualEventWebinarRegistrationConfiguration> & virtualEventWebinarRegistrationConfigurationMethods;
	registrations(): virtualEventRegistrationCollection;
	registrations(id: string | number): IBaseQuery<virtualEventRegistration> & virtualEventRegistrationMethods;
}
export interface virtualEventWebinarOData extends virtualEventOData {
	registrationConfiguration: virtualEventWebinarRegistrationConfiguration;
	registrations: IBaseResults<virtualEventRegistration>;
}
export interface virtualEventWebinarCollection extends IBaseCollection<virtualEventWebinar, virtualEventWebinarOData & virtualEventWebinarProps> {
    add(values?: any): IBaseExecution<virtualEventWebinar>;
}
/*********************************************
* virtualEventWebinarRegistrationConfiguration
**********************************************/
export interface virtualEventWebinarRegistrationConfiguration extends virtualEventWebinarRegistrationConfigurationProps, virtualEventWebinarRegistrationConfigurationMethods { }
export interface virtualEventWebinarRegistrationConfigurationProps extends  virtualEventRegistrationConfigurationProps {
	isManualApprovalEnabled: boolean;
	isWaitlistEnabled: boolean;
}
export interface virtualEventWebinarRegistrationConfigurationMethods extends virtualEventRegistrationConfigurationMethods {

}
export interface virtualEventWebinarRegistrationConfigurationOData extends virtualEventRegistrationConfigurationOData {

}
/*********************************************
* virtualEventsRoot
**********************************************/
export interface virtualEventsRoot extends virtualEventsRootProps, virtualEventsRootMethods { }
export interface virtualEventsRootProps extends  entityProps {

}
export interface virtualEventsRootMethods extends entityMethods {
	events(): virtualEventCollection;
	events(id: string | number): IBaseQuery<virtualEvent> & virtualEventMethods;
	townhalls(): virtualEventTownhallCollection;
	townhalls(id: string | number): IBaseQuery<virtualEventTownhall> & virtualEventTownhallMethods;
	webinars(): virtualEventWebinarCollection;
	webinars(id: string | number): IBaseQuery<virtualEventWebinar> & virtualEventWebinarMethods;
}
export interface virtualEventsRootOData extends entityOData {
	events: IBaseResults<virtualEvent>;
	townhalls: IBaseResults<virtualEventTownhall>;
	webinars: IBaseResults<virtualEventWebinar>;
}
/*********************************************
* voiceAuthenticationMethodConfiguration
**********************************************/
export interface voiceAuthenticationMethodConfiguration extends voiceAuthenticationMethodConfigurationProps, voiceAuthenticationMethodConfigurationMethods { }
export interface voiceAuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {
	isOfficePhoneAllowed: boolean;
}
export interface voiceAuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): authenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
}
export interface voiceAuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<authenticationMethodTarget>;
}
/*********************************************
* vppToken
**********************************************/
export interface vppToken extends vppTokenProps, vppTokenMethods { }
export interface vppTokenProps extends  entityProps {
	appleId: string;
	automaticallyUpdateApps: boolean;
	countryOrRegion: string;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	lastSyncDateTime: any;
	lastSyncStatus: EnumTypes.vppTokenSyncStatus;
	organizationName: string;
	state: EnumTypes.vppTokenState;
	token: string;
	vppTokenAccountType: EnumTypes.vppTokenAccountType;
}
export interface vppTokenMethods extends entityMethods {
	syncLicenses(): IBaseExecution<vppToken>;
}
export interface vppTokenOData extends entityOData {
	syncLicenses(): IBaseExecution<vppToken>;
}
export interface vppTokenCollection extends IBaseCollection<vppToken, vppTokenOData & vppTokenProps> {
    add(values?: any): IBaseExecution<vppToken>;
}
/*********************************************
* vulnerability
**********************************************/
export interface vulnerability extends vulnerabilityProps, vulnerabilityMethods { }
export interface vulnerabilityProps extends  entityProps {
	activeExploitsObserved: boolean;
	commonWeaknessEnumerationIds: Array<string>[];
	createdDateTime: any;
	cvss2Summary: ComplexTypes.cvssSummary;
	cvss3Summary: ComplexTypes.cvssSummary;
	description: ComplexTypes.formattedContent;
	exploits: ComplexTypes.hyperlink[];
	exploitsAvailable: boolean;
	hasChatter: boolean;
	lastModifiedDateTime: any;
	priorityScore: number;
	publishedDateTime: any;
	references: ComplexTypes.hyperlink[];
	remediation: ComplexTypes.formattedContent;
	severity: EnumTypes.vulnerabilitySeverity;
}
export interface vulnerabilityMethods extends entityMethods {
	articles(): IBaseCollection<article, entity & articleOData & articleProps>;
	articles(id: string | number): IBaseQuery<article> & articleMethods;
	components(): IBaseCollection<vulnerabilityComponent, entity & vulnerabilityComponentOData & vulnerabilityComponentProps>;
	components(id: string | number): IBaseQuery<vulnerabilityComponent> & vulnerabilityComponentMethods;
}
export interface vulnerabilityOData extends entityOData {
	articles: IBaseResults<article>;
	components: IBaseResults<vulnerabilityComponent>;
}
/*********************************************
* vulnerabilityComponent
**********************************************/
export interface vulnerabilityComponent extends vulnerabilityComponentProps, vulnerabilityComponentMethods { }
export interface vulnerabilityComponentProps extends  entityProps {
	name: string;
}
export interface vulnerabilityComponentMethods extends entityMethods {

}
export interface vulnerabilityComponentOData extends entityOData {

}
/*********************************************
* webApp
**********************************************/
export interface webApp extends webAppProps, webAppMethods { }
export interface webAppProps extends  mobileAppProps {
	appUrl: string;
	useManagedBrowser: boolean;
}
export interface webAppMethods extends mobileAppMethods {

}
export interface webAppOData extends mobileAppOData {

}
/*********************************************
* webPart
**********************************************/
export interface webPart extends webPartProps, webPartMethods { }
export interface webPartProps extends  entityProps {

}
export interface webPartMethods extends entityMethods {
	getPositionOfWebPart(): IBaseExecution<ComplexTypes.webPartPosition>;
}
export interface webPartOData extends entityOData {
	getPositionOfWebPart(): IBaseExecution<ComplexTypes.webPartPosition>;
}
export interface webPartCollection extends IBaseCollection<webPart, webPartOData & webPartProps> {
    add(values?: any): IBaseExecution<webPart>;
}
/*********************************************
* whoisBaseRecord
**********************************************/
export interface whoisBaseRecord extends whoisBaseRecordProps, whoisBaseRecordMethods { }
export interface whoisBaseRecordProps extends  entityProps {
	abuse: ComplexTypes.whoisContact;
	admin: ComplexTypes.whoisContact;
	billing: ComplexTypes.whoisContact;
	domainStatus: string;
	expirationDateTime: any;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	lastUpdateDateTime: any;
	nameservers: ComplexTypes.whoisNameserver[];
	noc: ComplexTypes.whoisContact;
	rawWhoisText: string;
	registrant: ComplexTypes.whoisContact;
	registrar: ComplexTypes.whoisContact;
	registrationDateTime: any;
	technical: ComplexTypes.whoisContact;
	whoisServer: string;
	zone: ComplexTypes.whoisContact;
}
export interface whoisBaseRecordMethods extends entityMethods {
	host(): IBaseQuery<host> & hostMethods;
}
export interface whoisBaseRecordOData extends entityOData {
	host: host;
}
/*********************************************
* whoisHistoryRecord
**********************************************/
export interface whoisHistoryRecord extends whoisHistoryRecordProps, whoisHistoryRecordMethods { }
export interface whoisHistoryRecordProps extends  whoisBaseRecordProps {

}
export interface whoisHistoryRecordMethods extends whoisBaseRecordMethods {

}
export interface whoisHistoryRecordOData extends whoisBaseRecordOData {

}
/*********************************************
* whoisRecord
**********************************************/
export interface whoisRecord extends whoisRecordProps, whoisRecordMethods { }
export interface whoisRecordProps extends  whoisBaseRecordProps {

}
export interface whoisRecordMethods extends whoisBaseRecordMethods {
	history(): IBaseCollection<whoisHistoryRecord, whoisBaseRecord & whoisHistoryRecordOData & whoisHistoryRecordProps>;
	history(id: string | number): IBaseQuery<whoisHistoryRecord> & whoisHistoryRecordMethods;
}
export interface whoisRecordOData extends whoisBaseRecordOData {
	history: IBaseResults<whoisHistoryRecord>;
}
/*********************************************
* win32LobApp
**********************************************/
export interface win32LobApp extends win32LobAppProps, win32LobAppMethods { }
export interface win32LobAppProps extends  mobileLobAppProps {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	installCommandLine: string;
	installExperience: ComplexTypes.win32LobAppInstallExperience;
	minimumCpuSpeedInMHz: number;
	minimumFreeDiskSpaceInMB: number;
	minimumMemoryInMB: number;
	minimumNumberOfProcessors: number;
	minimumSupportedWindowsRelease: string;
	msiInformation: ComplexTypes.win32LobAppMsiInformation;
	returnCodes: ComplexTypes.win32LobAppReturnCode[];
	rules: ComplexTypes.win32LobAppRule[];
	setupFilePath: string;
	uninstallCommandLine: string;
}
export interface win32LobAppMethods extends mobileLobAppMethods {

}
export interface win32LobAppOData extends mobileLobAppOData {

}
/*********************************************
* windows10CompliancePolicy
**********************************************/
export interface windows10CompliancePolicy extends windows10CompliancePolicyProps, windows10CompliancePolicyMethods { }
export interface windows10CompliancePolicyProps extends  deviceCompliancePolicyProps {
	bitLockerEnabled: boolean;
	codeIntegrityEnabled: boolean;
	earlyLaunchAntiMalwareDriverEnabled: boolean;
	mobileOsMaximumVersion: string;
	mobileOsMinimumVersion: string;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredToUnlockFromIdle: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	requireHealthyDeviceReport: boolean;
	secureBootEnabled: boolean;
	storageRequireEncryption: boolean;
}
export interface windows10CompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface windows10CompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* windows10CustomConfiguration
**********************************************/
export interface windows10CustomConfiguration extends windows10CustomConfigurationProps, windows10CustomConfigurationMethods { }
export interface windows10CustomConfigurationProps extends  deviceConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface windows10CustomConfigurationMethods extends deviceConfigurationMethods {

}
export interface windows10CustomConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windows10EndpointProtectionConfiguration
**********************************************/
export interface windows10EndpointProtectionConfiguration extends windows10EndpointProtectionConfigurationProps, windows10EndpointProtectionConfigurationMethods { }
export interface windows10EndpointProtectionConfigurationProps extends  deviceConfigurationProps {
	applicationGuardAllowPersistence: boolean;
	applicationGuardAllowPrintToLocalPrinters: boolean;
	applicationGuardAllowPrintToNetworkPrinters: boolean;
	applicationGuardAllowPrintToPDF: boolean;
	applicationGuardAllowPrintToXPS: boolean;
	applicationGuardBlockClipboardSharing: EnumTypes.applicationGuardBlockClipboardSharingType;
	applicationGuardBlockFileTransfer: EnumTypes.applicationGuardBlockFileTransferType;
	applicationGuardBlockNonEnterpriseContent: boolean;
	applicationGuardEnabled: boolean;
	applicationGuardForceAuditing: boolean;
	appLockerApplicationControl: EnumTypes.appLockerApplicationControlType;
	bitLockerDisableWarningForOtherDiskEncryption: boolean;
	bitLockerEnableStorageCardEncryptionOnMobile: boolean;
	bitLockerEncryptDevice: boolean;
	bitLockerRemovableDrivePolicy: ComplexTypes.bitLockerRemovableDrivePolicy;
	defenderAdditionalGuardedFolders: Array<string>[];
	defenderAttackSurfaceReductionExcludedPaths: Array<string>[];
	defenderExploitProtectionXml: any;
	defenderExploitProtectionXmlFileName: string;
	defenderGuardedFoldersAllowedAppPaths: Array<string>[];
	defenderSecurityCenterBlockExploitProtectionOverride: boolean;
	firewallBlockStatefulFTP: boolean;
	firewallCertificateRevocationListCheckMethod: EnumTypes.firewallCertificateRevocationListCheckMethodType;
	firewallIdleTimeoutForSecurityAssociationInSeconds: number;
	firewallIPSecExemptionsAllowDHCP: boolean;
	firewallIPSecExemptionsAllowICMP: boolean;
	firewallIPSecExemptionsAllowNeighborDiscovery: boolean;
	firewallIPSecExemptionsAllowRouterDiscovery: boolean;
	firewallMergeKeyingModuleSettings: boolean;
	firewallPacketQueueingMethod: EnumTypes.firewallPacketQueueingMethodType;
	firewallPreSharedKeyEncodingMethod: EnumTypes.firewallPreSharedKeyEncodingMethodType;
	firewallProfileDomain: ComplexTypes.windowsFirewallNetworkProfile;
	firewallProfilePrivate: ComplexTypes.windowsFirewallNetworkProfile;
	firewallProfilePublic: ComplexTypes.windowsFirewallNetworkProfile;
	smartScreenBlockOverrideForFiles: boolean;
	smartScreenEnableInShell: boolean;
}
export interface windows10EndpointProtectionConfigurationMethods extends deviceConfigurationMethods {

}
export interface windows10EndpointProtectionConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windows10EnrollmentCompletionPageConfiguration
**********************************************/
export interface windows10EnrollmentCompletionPageConfiguration extends windows10EnrollmentCompletionPageConfigurationProps, windows10EnrollmentCompletionPageConfigurationMethods { }
export interface windows10EnrollmentCompletionPageConfigurationProps extends  deviceEnrollmentConfigurationProps {
	allowNonBlockingAppInstallation: boolean;
}
export interface windows10EnrollmentCompletionPageConfigurationMethods extends deviceEnrollmentConfigurationMethods {

}
export interface windows10EnrollmentCompletionPageConfigurationOData extends deviceEnrollmentConfigurationOData {

}
/*********************************************
* windows10EnterpriseModernAppManagementConfiguration
**********************************************/
export interface windows10EnterpriseModernAppManagementConfiguration extends windows10EnterpriseModernAppManagementConfigurationProps, windows10EnterpriseModernAppManagementConfigurationMethods { }
export interface windows10EnterpriseModernAppManagementConfigurationProps extends  deviceConfigurationProps {
	uninstallBuiltInApps: boolean;
}
export interface windows10EnterpriseModernAppManagementConfigurationMethods extends deviceConfigurationMethods {

}
export interface windows10EnterpriseModernAppManagementConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windows10GeneralConfiguration
**********************************************/
export interface windows10GeneralConfiguration extends windows10GeneralConfigurationProps, windows10GeneralConfigurationMethods { }
export interface windows10GeneralConfigurationProps extends  deviceConfigurationProps {
	accountsBlockAddingNonMicrosoftAccountEmail: boolean;
	antiTheftModeBlocked: boolean;
	appsAllowTrustedAppsSideloading: EnumTypes.stateManagementSetting;
	appsBlockWindowsStoreOriginatedApps: boolean;
	bluetoothAllowedServices: Array<string>[];
	bluetoothBlockAdvertising: boolean;
	bluetoothBlockDiscoverableMode: boolean;
	bluetoothBlocked: boolean;
	bluetoothBlockPrePairing: boolean;
	cameraBlocked: boolean;
	cellularBlockDataWhenRoaming: boolean;
	cellularBlockVpn: boolean;
	cellularBlockVpnWhenRoaming: boolean;
	certificatesBlockManualRootCertificateInstallation: boolean;
	connectedDevicesServiceBlocked: boolean;
	copyPasteBlocked: boolean;
	cortanaBlocked: boolean;
	defenderBlockEndUserAccess: boolean;
	defenderCloudBlockLevel: EnumTypes.defenderCloudBlockLevelType;
	defenderDaysBeforeDeletingQuarantinedMalware: number;
	defenderDetectedMalwareActions: ComplexTypes.defenderDetectedMalwareActions;
	defenderFileExtensionsToExclude: Array<string>[];
	defenderFilesAndFoldersToExclude: Array<string>[];
	defenderMonitorFileActivity: EnumTypes.defenderMonitorFileActivity;
	defenderProcessesToExclude: Array<string>[];
	defenderPromptForSampleSubmission: EnumTypes.defenderPromptForSampleSubmission;
	defenderRequireBehaviorMonitoring: boolean;
	defenderRequireCloudProtection: boolean;
	defenderRequireNetworkInspectionSystem: boolean;
	defenderRequireRealTimeMonitoring: boolean;
	defenderScanArchiveFiles: boolean;
	defenderScanDownloads: boolean;
	defenderScanIncomingMail: boolean;
	defenderScanMappedNetworkDrivesDuringFullScan: boolean;
	defenderScanMaxCpu: number;
	defenderScanNetworkFiles: boolean;
	defenderScanRemovableDrivesDuringFullScan: boolean;
	defenderScanScriptsLoadedInInternetExplorer: boolean;
	defenderScanType: EnumTypes.defenderScanType;
	defenderScheduledQuickScanTime: any;
	defenderScheduledScanTime: any;
	defenderSignatureUpdateIntervalInHours: number;
	defenderSystemScanSchedule: EnumTypes.weeklySchedule;
	developerUnlockSetting: EnumTypes.stateManagementSetting;
	deviceManagementBlockFactoryResetOnMobile: boolean;
	deviceManagementBlockManualUnenroll: boolean;
	diagnosticsDataSubmissionMode: EnumTypes.diagnosticDataSubmissionMode;
	edgeAllowStartPagesModification: boolean;
	edgeBlockAccessToAboutFlags: boolean;
	edgeBlockAddressBarDropdown: boolean;
	edgeBlockAutofill: boolean;
	edgeBlockCompatibilityList: boolean;
	edgeBlockDeveloperTools: boolean;
	edgeBlocked: boolean;
	edgeBlockExtensions: boolean;
	edgeBlockInPrivateBrowsing: boolean;
	edgeBlockJavaScript: boolean;
	edgeBlockLiveTileDataCollection: boolean;
	edgeBlockPasswordManager: boolean;
	edgeBlockPopups: boolean;
	edgeBlockSearchSuggestions: boolean;
	edgeBlockSendingDoNotTrackHeader: boolean;
	edgeBlockSendingIntranetTrafficToInternetExplorer: boolean;
	edgeClearBrowsingDataOnExit: boolean;
	edgeCookiePolicy: EnumTypes.edgeCookiePolicy;
	edgeDisableFirstRunPage: boolean;
	edgeEnterpriseModeSiteListLocation: string;
	edgeFirstRunUrl: string;
	edgeHomepageUrls: Array<string>[];
	edgeRequireSmartScreen: boolean;
	edgeSearchEngine: ComplexTypes.edgeSearchEngineBase;
	edgeSendIntranetTrafficToInternetExplorer: boolean;
	edgeSyncFavoritesWithInternetExplorer: boolean;
	enterpriseCloudPrintDiscoveryEndPoint: string;
	enterpriseCloudPrintDiscoveryMaxLimit: number;
	enterpriseCloudPrintMopriaDiscoveryResourceIdentifier: string;
	enterpriseCloudPrintOAuthAuthority: string;
	enterpriseCloudPrintOAuthClientIdentifier: string;
	enterpriseCloudPrintResourceIdentifier: string;
	experienceBlockDeviceDiscovery: boolean;
	experienceBlockErrorDialogWhenNoSIM: boolean;
	experienceBlockTaskSwitcher: boolean;
	gameDvrBlocked: boolean;
	internetSharingBlocked: boolean;
	locationServicesBlocked: boolean;
	lockScreenAllowTimeoutConfiguration: boolean;
	lockScreenBlockActionCenterNotifications: boolean;
	lockScreenBlockCortana: boolean;
	lockScreenBlockToastNotifications: boolean;
	lockScreenTimeoutInSeconds: number;
	logonBlockFastUserSwitching: boolean;
	microsoftAccountBlocked: boolean;
	microsoftAccountBlockSettingsSync: boolean;
	networkProxyApplySettingsDeviceWide: boolean;
	networkProxyAutomaticConfigurationUrl: string;
	networkProxyDisableAutoDetect: boolean;
	networkProxyServer: ComplexTypes.windows10NetworkProxyServer;
	nfcBlocked: boolean;
	oneDriveDisableFileSync: boolean;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordRequireWhenResumeFromIdleState: boolean;
	passwordSignInFailureCountBeforeFactoryReset: number;
	personalizationDesktopImageUrl: string;
	personalizationLockScreenImageUrl: string;
	privacyAdvertisingId: EnumTypes.stateManagementSetting;
	privacyAutoAcceptPairingAndConsentPrompts: boolean;
	privacyBlockInputPersonalization: boolean;
	resetProtectionModeBlocked: boolean;
	safeSearchFilter: EnumTypes.safeSearchFilterType;
	screenCaptureBlocked: boolean;
	searchBlockDiacritics: boolean;
	searchDisableAutoLanguageDetection: boolean;
	searchDisableIndexerBackoff: boolean;
	searchDisableIndexingEncryptedItems: boolean;
	searchDisableIndexingRemovableDrive: boolean;
	searchEnableAutomaticIndexSizeManangement: boolean;
	searchEnableRemoteQueries: boolean;
	settingsBlockAccountsPage: boolean;
	settingsBlockAddProvisioningPackage: boolean;
	settingsBlockAppsPage: boolean;
	settingsBlockChangeLanguage: boolean;
	settingsBlockChangePowerSleep: boolean;
	settingsBlockChangeRegion: boolean;
	settingsBlockChangeSystemTime: boolean;
	settingsBlockDevicesPage: boolean;
	settingsBlockEaseOfAccessPage: boolean;
	settingsBlockEditDeviceName: boolean;
	settingsBlockGamingPage: boolean;
	settingsBlockNetworkInternetPage: boolean;
	settingsBlockPersonalizationPage: boolean;
	settingsBlockPrivacyPage: boolean;
	settingsBlockRemoveProvisioningPackage: boolean;
	settingsBlockSettingsApp: boolean;
	settingsBlockSystemPage: boolean;
	settingsBlockTimeLanguagePage: boolean;
	settingsBlockUpdateSecurityPage: boolean;
	sharedUserAppDataAllowed: boolean;
	smartScreenBlockPromptOverride: boolean;
	smartScreenBlockPromptOverrideForFiles: boolean;
	smartScreenEnableAppInstallControl: boolean;
	startBlockUnpinningAppsFromTaskbar: boolean;
	startMenuAppListVisibility: EnumTypes.windowsStartMenuAppListVisibilityType;
	startMenuHideChangeAccountSettings: boolean;
	startMenuHideFrequentlyUsedApps: boolean;
	startMenuHideHibernate: boolean;
	startMenuHideLock: boolean;
	startMenuHidePowerButton: boolean;
	startMenuHideRecentJumpLists: boolean;
	startMenuHideRecentlyAddedApps: boolean;
	startMenuHideRestartOptions: boolean;
	startMenuHideShutDown: boolean;
	startMenuHideSignOut: boolean;
	startMenuHideSleep: boolean;
	startMenuHideSwitchAccount: boolean;
	startMenuHideUserTile: boolean;
	startMenuLayoutEdgeAssetsXml: any;
	startMenuLayoutXml: any;
	startMenuMode: EnumTypes.windowsStartMenuModeType;
	startMenuPinnedFolderDocuments: EnumTypes.visibilitySetting;
	startMenuPinnedFolderDownloads: EnumTypes.visibilitySetting;
	startMenuPinnedFolderFileExplorer: EnumTypes.visibilitySetting;
	startMenuPinnedFolderHomeGroup: EnumTypes.visibilitySetting;
	startMenuPinnedFolderMusic: EnumTypes.visibilitySetting;
	startMenuPinnedFolderNetwork: EnumTypes.visibilitySetting;
	startMenuPinnedFolderPersonalFolder: EnumTypes.visibilitySetting;
	startMenuPinnedFolderPictures: EnumTypes.visibilitySetting;
	startMenuPinnedFolderSettings: EnumTypes.visibilitySetting;
	startMenuPinnedFolderVideos: EnumTypes.visibilitySetting;
	storageBlockRemovableStorage: boolean;
	storageRequireMobileDeviceEncryption: boolean;
	storageRestrictAppDataToSystemVolume: boolean;
	storageRestrictAppInstallToSystemVolume: boolean;
	tenantLockdownRequireNetworkDuringOutOfBoxExperience: boolean;
	usbBlocked: boolean;
	voiceRecordingBlocked: boolean;
	webRtcBlockLocalhostIpAddress: boolean;
	wiFiBlockAutomaticConnectHotspots: boolean;
	wiFiBlocked: boolean;
	wiFiBlockManualConfiguration: boolean;
	wiFiScanInterval: number;
	windowsSpotlightBlockConsumerSpecificFeatures: boolean;
	windowsSpotlightBlocked: boolean;
	windowsSpotlightBlockOnActionCenter: boolean;
	windowsSpotlightBlockTailoredExperiences: boolean;
	windowsSpotlightBlockThirdPartyNotifications: boolean;
	windowsSpotlightBlockWelcomeExperience: boolean;
	windowsSpotlightBlockWindowsTips: boolean;
	windowsSpotlightConfigureOnLockScreen: EnumTypes.windowsSpotlightEnablementSettings;
	windowsStoreBlockAutoUpdate: boolean;
	windowsStoreBlocked: boolean;
	windowsStoreEnablePrivateStoreOnly: boolean;
	wirelessDisplayBlockProjectionToThisDevice: boolean;
	wirelessDisplayBlockUserInputFromReceiver: boolean;
	wirelessDisplayRequirePinForPairing: boolean;
}
export interface windows10GeneralConfigurationMethods extends deviceConfigurationMethods {

}
export interface windows10GeneralConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windows10MobileCompliancePolicy
**********************************************/
export interface windows10MobileCompliancePolicy extends windows10MobileCompliancePolicyProps, windows10MobileCompliancePolicyMethods { }
export interface windows10MobileCompliancePolicyProps extends  deviceCompliancePolicyProps {
	bitLockerEnabled: boolean;
	codeIntegrityEnabled: boolean;
	earlyLaunchAntiMalwareDriverEnabled: boolean;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordRequireToUnlockFromIdle: boolean;
	secureBootEnabled: boolean;
	storageRequireEncryption: boolean;
}
export interface windows10MobileCompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface windows10MobileCompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* windows10SecureAssessmentConfiguration
**********************************************/
export interface windows10SecureAssessmentConfiguration extends windows10SecureAssessmentConfigurationProps, windows10SecureAssessmentConfigurationMethods { }
export interface windows10SecureAssessmentConfigurationProps extends  deviceConfigurationProps {
	allowPrinting: boolean;
	allowScreenCapture: boolean;
	allowTextSuggestion: boolean;
	configurationAccount: string;
	launchUri: string;
}
export interface windows10SecureAssessmentConfigurationMethods extends deviceConfigurationMethods {

}
export interface windows10SecureAssessmentConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windows10TeamGeneralConfiguration
**********************************************/
export interface windows10TeamGeneralConfiguration extends windows10TeamGeneralConfigurationProps, windows10TeamGeneralConfigurationMethods { }
export interface windows10TeamGeneralConfigurationProps extends  deviceConfigurationProps {
	azureOperationalInsightsBlockTelemetry: boolean;
	azureOperationalInsightsWorkspaceId: string;
	azureOperationalInsightsWorkspaceKey: string;
	connectAppBlockAutoLaunch: boolean;
	maintenanceWindowBlocked: boolean;
	maintenanceWindowDurationInHours: number;
	maintenanceWindowStartTime: any;
	miracastBlocked: boolean;
	miracastChannel: EnumTypes.miracastChannel;
	miracastRequirePin: boolean;
	settingsBlockMyMeetingsAndFiles: boolean;
	settingsBlockSessionResume: boolean;
	settingsBlockSigninSuggestions: boolean;
	settingsDefaultVolume: number;
	settingsScreenTimeoutInMinutes: number;
	settingsSessionTimeoutInMinutes: number;
	settingsSleepTimeoutInMinutes: number;
	welcomeScreenBackgroundImageUrl: string;
	welcomeScreenBlockAutomaticWakeUp: boolean;
	welcomeScreenMeetingInformation: EnumTypes.welcomeScreenMeetingInformation;
}
export interface windows10TeamGeneralConfigurationMethods extends deviceConfigurationMethods {

}
export interface windows10TeamGeneralConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windows81CompliancePolicy
**********************************************/
export interface windows81CompliancePolicy extends windows81CompliancePolicyProps, windows81CompliancePolicyMethods { }
export interface windows81CompliancePolicyProps extends  deviceCompliancePolicyProps {
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	storageRequireEncryption: boolean;
}
export interface windows81CompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface windows81CompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* windows81GeneralConfiguration
**********************************************/
export interface windows81GeneralConfiguration extends windows81GeneralConfigurationProps, windows81GeneralConfigurationMethods { }
export interface windows81GeneralConfigurationProps extends  deviceConfigurationProps {
	accountsBlockAddingNonMicrosoftAccountEmail: boolean;
	applyOnlyToWindows81: boolean;
	browserBlockAutofill: boolean;
	browserBlockAutomaticDetectionOfIntranetSites: boolean;
	browserBlockEnterpriseModeAccess: boolean;
	browserBlockJavaScript: boolean;
	browserBlockPlugins: boolean;
	browserBlockPopups: boolean;
	browserBlockSendingDoNotTrackHeader: boolean;
	browserBlockSingleWordEntryOnIntranetSites: boolean;
	browserEnterpriseModeSiteListLocation: string;
	browserInternetSecurityLevel: EnumTypes.internetSiteSecurityLevel;
	browserIntranetSecurityLevel: EnumTypes.siteSecurityLevel;
	browserLoggingReportLocation: string;
	browserRequireFirewall: boolean;
	browserRequireFraudWarning: boolean;
	browserRequireHighSecurityForRestrictedSites: boolean;
	browserRequireSmartScreen: boolean;
	browserTrustedSitesSecurityLevel: EnumTypes.siteSecurityLevel;
	cellularBlockDataRoaming: boolean;
	diagnosticsBlockDataSubmission: boolean;
	passwordBlockPicturePasswordAndPin: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	storageRequireDeviceEncryption: boolean;
	updatesRequireAutomaticUpdates: boolean;
	userAccountControlSettings: EnumTypes.windowsUserAccountControlSettings;
	workFoldersUrl: string;
}
export interface windows81GeneralConfigurationMethods extends deviceConfigurationMethods {

}
export interface windows81GeneralConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windowsAppX
**********************************************/
export interface windowsAppX extends windowsAppXProps, windowsAppXMethods { }
export interface windowsAppXProps extends  mobileLobAppProps {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	identityName: string;
	identityPublisherHash: string;
	identityResourceIdentifier: string;
	identityVersion: string;
	isBundle: boolean;
	minimumSupportedOperatingSystem: ComplexTypes.windowsMinimumOperatingSystem;
}
export interface windowsAppXMethods extends mobileLobAppMethods {

}
export interface windowsAppXOData extends mobileLobAppOData {

}
/*********************************************
* windowsAutopilotDeploymentProfile
**********************************************/
export interface windowsAutopilotDeploymentProfile extends windowsAutopilotDeploymentProfileProps, windowsAutopilotDeploymentProfileMethods { }
export interface windowsAutopilotDeploymentProfileProps extends  entityProps {
	createdDateTime: any;
	description: string;
	deviceNameTemplate: string;
	deviceType: EnumTypes.windowsAutopilotDeviceType;
	displayName: string;
	hardwareHashExtractionEnabled: boolean;
	lastModifiedDateTime: any;
	locale: string;
	managementServiceAppId: string;
	outOfBoxExperienceSetting: ComplexTypes.outOfBoxExperienceSetting;
	preprovisioningAllowed: boolean;
	roleScopeTagIds: Array<string>[];
}
export interface windowsAutopilotDeploymentProfileMethods extends entityMethods {
	assignedDevices(): windowsAutopilotDeviceIdentityCollection;
	assignedDevices(id: string | number): IBaseQuery<windowsAutopilotDeviceIdentity> & windowsAutopilotDeviceIdentityMethods;
}
export interface windowsAutopilotDeploymentProfileOData extends entityOData {
	assignedDevices: IBaseResults<windowsAutopilotDeviceIdentity>;
}
/*********************************************
* windowsAutopilotDeploymentProfileAssignment
**********************************************/
export interface windowsAutopilotDeploymentProfileAssignment extends windowsAutopilotDeploymentProfileAssignmentProps, windowsAutopilotDeploymentProfileAssignmentMethods { }
export interface windowsAutopilotDeploymentProfileAssignmentProps extends  entityProps {

}
export interface windowsAutopilotDeploymentProfileAssignmentMethods extends entityMethods {

}
export interface windowsAutopilotDeploymentProfileAssignmentOData extends entityOData {

}
/*********************************************
* windowsAutopilotDeviceIdentity
**********************************************/
export interface windowsAutopilotDeviceIdentity extends windowsAutopilotDeviceIdentityProps, windowsAutopilotDeviceIdentityMethods { }
export interface windowsAutopilotDeviceIdentityProps extends  entityProps {
	addressableUserName: string;
	azureActiveDirectoryDeviceId: string;
	displayName: string;
	enrollmentState: EnumTypes.enrollmentState;
	groupTag: string;
	lastContactedDateTime: any;
	managedDeviceId: string;
	manufacturer: string;
	model: string;
	productKey: string;
	purchaseOrderIdentifier: string;
	resourceName: string;
	serialNumber: string;
	skuNumber: string;
	systemFamily: string;
	userPrincipalName: string;
}
export interface windowsAutopilotDeviceIdentityMethods extends entityMethods {
	assignUserToDevice(userPrincipalName, addressableUserName): IBaseExecution<void>;
	unassignUserFromDevice(): IBaseExecution<void>;
	updateDeviceProperties(userPrincipalName, addressableUserName, groupTag, displayName): IBaseExecution<void>;
}
export interface windowsAutopilotDeviceIdentityOData extends entityOData {
	assignUserToDevice(userPrincipalName, addressableUserName): IBaseExecution<void>;
	unassignUserFromDevice(): IBaseExecution<void>;
	updateDeviceProperties(userPrincipalName, addressableUserName, groupTag, displayName): IBaseExecution<void>;
}
export interface windowsAutopilotDeviceIdentityCollection extends IBaseCollection<windowsAutopilotDeviceIdentity, windowsAutopilotDeviceIdentityOData & windowsAutopilotDeviceIdentityProps> {
    add(values?: any): IBaseExecution<windowsAutopilotDeviceIdentity>;
}
/*********************************************
* windowsDefenderAdvancedThreatProtectionConfiguration
**********************************************/
export interface windowsDefenderAdvancedThreatProtectionConfiguration extends windowsDefenderAdvancedThreatProtectionConfigurationProps, windowsDefenderAdvancedThreatProtectionConfigurationMethods { }
export interface windowsDefenderAdvancedThreatProtectionConfigurationProps extends  deviceConfigurationProps {
	allowSampleSharing: boolean;
	enableExpeditedTelemetryReporting: boolean;
}
export interface windowsDefenderAdvancedThreatProtectionConfigurationMethods extends deviceConfigurationMethods {

}
export interface windowsDefenderAdvancedThreatProtectionConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windowsDeviceMalwareState
**********************************************/
export interface windowsDeviceMalwareState extends windowsDeviceMalwareStateProps, windowsDeviceMalwareStateMethods { }
export interface windowsDeviceMalwareStateProps extends  entityProps {
	additionalInformationUrl: string;
	category: EnumTypes.windowsMalwareCategory;
	detectionCount: number;
	displayName: string;
	executionState: EnumTypes.windowsMalwareExecutionState;
	initialDetectionDateTime: any;
	lastStateChangeDateTime: any;
	severity: EnumTypes.windowsMalwareSeverity;
	state: EnumTypes.windowsMalwareState;
	threatState: EnumTypes.windowsMalwareThreatState;
}
export interface windowsDeviceMalwareStateMethods extends entityMethods {

}
export interface windowsDeviceMalwareStateOData extends entityOData {

}
export interface windowsDeviceMalwareStateCollection extends IBaseCollection<windowsDeviceMalwareState, windowsDeviceMalwareStateOData & windowsDeviceMalwareStateProps> {
    add(values?: any): IBaseExecution<windowsDeviceMalwareState>;
}
/*********************************************
* windowsHelloForBusinessAuthenticationMethod
**********************************************/
export interface windowsHelloForBusinessAuthenticationMethod extends windowsHelloForBusinessAuthenticationMethodProps, windowsHelloForBusinessAuthenticationMethodMethods { }
export interface windowsHelloForBusinessAuthenticationMethodProps extends  authenticationMethodProps {
	createdDateTime: any;
	displayName: string;
	keyStrength: EnumTypes.authenticationMethodKeyStrength;
}
export interface windowsHelloForBusinessAuthenticationMethodMethods extends authenticationMethodMethods {
	device(): IBaseQuery<device> & deviceMethods;
}
export interface windowsHelloForBusinessAuthenticationMethodOData extends authenticationMethodOData {
	device: device;
}
export interface windowsHelloForBusinessAuthenticationMethodCollection extends IBaseCollection<windowsHelloForBusinessAuthenticationMethod, windowsHelloForBusinessAuthenticationMethodOData & windowsHelloForBusinessAuthenticationMethodProps> {
    add(values?: any): IBaseExecution<windowsHelloForBusinessAuthenticationMethod>;
}
/*********************************************
* windowsInformationProtection
**********************************************/
export interface windowsInformationProtection extends windowsInformationProtectionProps, windowsInformationProtectionMethods { }
export interface windowsInformationProtectionProps extends  managedAppPolicyProps {
	azureRightsManagementServicesAllowed: boolean;
	dataRecoveryCertificate: ComplexTypes.windowsInformationProtectionDataRecoveryCertificate;
	enforcementLevel: EnumTypes.windowsInformationProtectionEnforcementLevel;
	enterpriseDomain: string;
	enterpriseInternalProxyServers: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseIPRanges: ComplexTypes.windowsInformationProtectionIPRangeCollection[];
	enterpriseIPRangesAreAuthoritative: boolean;
	enterpriseNetworkDomainNames: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseProtectedDomainNames: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseProxiedDomains: ComplexTypes.windowsInformationProtectionProxiedDomainCollection[];
	enterpriseProxyServers: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseProxyServersAreAuthoritative: boolean;
	exemptApps: ComplexTypes.windowsInformationProtectionApp[];
	iconsVisible: boolean;
	indexingEncryptedStoresOrItemsBlocked: boolean;
	isAssigned: boolean;
	neutralDomainResources: ComplexTypes.windowsInformationProtectionResourceCollection[];
	protectedApps: ComplexTypes.windowsInformationProtectionApp[];
	protectionUnderLockConfigRequired: boolean;
	revokeOnUnenrollDisabled: boolean;
	rightsManagementServicesTemplateId: any;
	smbAutoEncryptedFileExtensions: ComplexTypes.windowsInformationProtectionResourceCollection[];
}
export interface windowsInformationProtectionMethods extends managedAppPolicyMethods {
	assignments(): targetedManagedAppPolicyAssignmentCollection;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment> & targetedManagedAppPolicyAssignmentMethods;
	exemptAppLockerFiles(): windowsInformationProtectionAppLockerFileCollection;
	exemptAppLockerFiles(id: string | number): IBaseQuery<windowsInformationProtectionAppLockerFile> & windowsInformationProtectionAppLockerFileMethods;
	protectedAppLockerFiles(): windowsInformationProtectionAppLockerFileCollection;
	protectedAppLockerFiles(id: string | number): IBaseQuery<windowsInformationProtectionAppLockerFile> & windowsInformationProtectionAppLockerFileMethods;
	assign(assignments): IBaseExecution<void>;
}
export interface windowsInformationProtectionOData extends managedAppPolicyOData {
	assignments: IBaseResults<targetedManagedAppPolicyAssignment>;
	exemptAppLockerFiles: IBaseResults<windowsInformationProtectionAppLockerFile>;
	protectedAppLockerFiles: IBaseResults<windowsInformationProtectionAppLockerFile>;
	assign(assignments): IBaseExecution<void>;
}
/*********************************************
* windowsInformationProtectionAppLearningSummary
**********************************************/
export interface windowsInformationProtectionAppLearningSummary extends windowsInformationProtectionAppLearningSummaryProps, windowsInformationProtectionAppLearningSummaryMethods { }
export interface windowsInformationProtectionAppLearningSummaryProps extends  entityProps {
	applicationName: string;
	applicationType: EnumTypes.applicationType;
	deviceCount: number;
}
export interface windowsInformationProtectionAppLearningSummaryMethods extends entityMethods {

}
export interface windowsInformationProtectionAppLearningSummaryOData extends entityOData {

}
export interface windowsInformationProtectionAppLearningSummaryCollection extends IBaseCollection<windowsInformationProtectionAppLearningSummary, windowsInformationProtectionAppLearningSummaryOData & windowsInformationProtectionAppLearningSummaryProps> {
    add(values?: any): IBaseExecution<windowsInformationProtectionAppLearningSummary>;
}
/*********************************************
* windowsInformationProtectionAppLockerFile
**********************************************/
export interface windowsInformationProtectionAppLockerFile extends windowsInformationProtectionAppLockerFileProps, windowsInformationProtectionAppLockerFileMethods { }
export interface windowsInformationProtectionAppLockerFileProps extends  entityProps {
	displayName: string;
	file: any;
	fileHash: string;
	version: string;
}
export interface windowsInformationProtectionAppLockerFileMethods extends entityMethods {

}
export interface windowsInformationProtectionAppLockerFileOData extends entityOData {

}
export interface windowsInformationProtectionAppLockerFileCollection extends IBaseCollection<windowsInformationProtectionAppLockerFile, windowsInformationProtectionAppLockerFileOData & windowsInformationProtectionAppLockerFileProps> {
    add(values?: any): IBaseExecution<windowsInformationProtectionAppLockerFile>;
}
/*********************************************
* windowsInformationProtectionNetworkLearningSummary
**********************************************/
export interface windowsInformationProtectionNetworkLearningSummary extends windowsInformationProtectionNetworkLearningSummaryProps, windowsInformationProtectionNetworkLearningSummaryMethods { }
export interface windowsInformationProtectionNetworkLearningSummaryProps extends  entityProps {
	deviceCount: number;
	url: string;
}
export interface windowsInformationProtectionNetworkLearningSummaryMethods extends entityMethods {

}
export interface windowsInformationProtectionNetworkLearningSummaryOData extends entityOData {

}
export interface windowsInformationProtectionNetworkLearningSummaryCollection extends IBaseCollection<windowsInformationProtectionNetworkLearningSummary, windowsInformationProtectionNetworkLearningSummaryOData & windowsInformationProtectionNetworkLearningSummaryProps> {
    add(values?: any): IBaseExecution<windowsInformationProtectionNetworkLearningSummary>;
}
/*********************************************
* windowsInformationProtectionPolicy
**********************************************/
export interface windowsInformationProtectionPolicy extends windowsInformationProtectionPolicyProps, windowsInformationProtectionPolicyMethods { }
export interface windowsInformationProtectionPolicyProps extends  windowsInformationProtectionProps {
	daysWithoutContactBeforeUnenroll: number;
	mdmEnrollmentUrl: string;
	minutesOfInactivityBeforeDeviceLock: number;
	numberOfPastPinsRemembered: number;
	passwordMaximumAttemptCount: number;
	pinExpirationDays: number;
	pinLowercaseLetters: EnumTypes.windowsInformationProtectionPinCharacterRequirements;
	pinMinimumLength: number;
	pinSpecialCharacters: EnumTypes.windowsInformationProtectionPinCharacterRequirements;
	pinUppercaseLetters: EnumTypes.windowsInformationProtectionPinCharacterRequirements;
	revokeOnMdmHandoffDisabled: boolean;
	windowsHelloForBusinessBlocked: boolean;
}
export interface windowsInformationProtectionPolicyMethods extends windowsInformationProtectionMethods {

}
export interface windowsInformationProtectionPolicyOData extends windowsInformationProtectionOData {

}
export interface windowsInformationProtectionPolicyCollection extends IBaseCollection<windowsInformationProtectionPolicy, windowsInformationProtectionPolicyOData & windowsInformationProtectionPolicyProps> {
    add(values?: any): IBaseExecution<windowsInformationProtectionPolicy>;
}
/*********************************************
* windowsMalwareInformation
**********************************************/
export interface windowsMalwareInformation extends windowsMalwareInformationProps, windowsMalwareInformationMethods { }
export interface windowsMalwareInformationProps extends  entityProps {
	additionalInformationUrl: string;
	category: EnumTypes.windowsMalwareCategory;
	displayName: string;
	lastDetectionDateTime: any;
	severity: EnumTypes.windowsMalwareSeverity;
}
export interface windowsMalwareInformationMethods extends entityMethods {
	deviceMalwareStates(): malwareStateForWindowsDeviceCollection;
	deviceMalwareStates(id: string | number): IBaseQuery<malwareStateForWindowsDevice> & malwareStateForWindowsDeviceMethods;
}
export interface windowsMalwareInformationOData extends entityOData {
	deviceMalwareStates: IBaseResults<malwareStateForWindowsDevice>;
}
export interface windowsMalwareInformationCollection extends IBaseCollection<windowsMalwareInformation, windowsMalwareInformationOData & windowsMalwareInformationProps> {
    add(values?: any): IBaseExecution<windowsMalwareInformation>;
}
/*********************************************
* windowsMicrosoftEdgeApp
**********************************************/
export interface windowsMicrosoftEdgeApp extends windowsMicrosoftEdgeAppProps, windowsMicrosoftEdgeAppMethods { }
export interface windowsMicrosoftEdgeAppProps extends  mobileAppProps {
	channel: EnumTypes.microsoftEdgeChannel;
	displayLanguageLocale: string;
}
export interface windowsMicrosoftEdgeAppMethods extends mobileAppMethods {

}
export interface windowsMicrosoftEdgeAppOData extends mobileAppOData {

}
/*********************************************
* windowsMobileMSI
**********************************************/
export interface windowsMobileMSI extends windowsMobileMSIProps, windowsMobileMSIMethods { }
export interface windowsMobileMSIProps extends  mobileLobAppProps {
	commandLine: string;
	ignoreVersionDetection: boolean;
	productCode: string;
	productVersion: string;
}
export interface windowsMobileMSIMethods extends mobileLobAppMethods {

}
export interface windowsMobileMSIOData extends mobileLobAppOData {

}
/*********************************************
* windowsPhone81CompliancePolicy
**********************************************/
export interface windowsPhone81CompliancePolicy extends windowsPhone81CompliancePolicyProps, windowsPhone81CompliancePolicyMethods { }
export interface windowsPhone81CompliancePolicyProps extends  deviceCompliancePolicyProps {
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	storageRequireEncryption: boolean;
}
export interface windowsPhone81CompliancePolicyMethods extends deviceCompliancePolicyMethods {

}
export interface windowsPhone81CompliancePolicyOData extends deviceCompliancePolicyOData {

}
/*********************************************
* windowsPhone81CustomConfiguration
**********************************************/
export interface windowsPhone81CustomConfiguration extends windowsPhone81CustomConfigurationProps, windowsPhone81CustomConfigurationMethods { }
export interface windowsPhone81CustomConfigurationProps extends  deviceConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface windowsPhone81CustomConfigurationMethods extends deviceConfigurationMethods {

}
export interface windowsPhone81CustomConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windowsPhone81GeneralConfiguration
**********************************************/
export interface windowsPhone81GeneralConfiguration extends windowsPhone81GeneralConfigurationProps, windowsPhone81GeneralConfigurationMethods { }
export interface windowsPhone81GeneralConfigurationProps extends  deviceConfigurationProps {
	applyOnlyToWindowsPhone81: boolean;
	appsBlockCopyPaste: boolean;
	bluetoothBlocked: boolean;
	cameraBlocked: boolean;
	cellularBlockWifiTethering: boolean;
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	diagnosticDataBlockSubmission: boolean;
	emailBlockAddingAccounts: boolean;
	locationServicesBlocked: boolean;
	microsoftAccountBlocked: boolean;
	nfcBlocked: boolean;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	screenCaptureBlocked: boolean;
	storageBlockRemovableStorage: boolean;
	storageRequireEncryption: boolean;
	webBrowserBlocked: boolean;
	wifiBlockAutomaticConnectHotspots: boolean;
	wifiBlocked: boolean;
	wifiBlockHotspotReporting: boolean;
	windowsStoreBlocked: boolean;
}
export interface windowsPhone81GeneralConfigurationMethods extends deviceConfigurationMethods {

}
export interface windowsPhone81GeneralConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windowsProtectionState
**********************************************/
export interface windowsProtectionState extends windowsProtectionStateProps, windowsProtectionStateMethods { }
export interface windowsProtectionStateProps extends  entityProps {
	antiMalwareVersion: string;
	deviceState: EnumTypes.windowsDeviceHealthState;
	engineVersion: string;
	fullScanOverdue: boolean;
	fullScanRequired: boolean;
	isVirtualMachine: boolean;
	lastFullScanDateTime: any;
	lastFullScanSignatureVersion: string;
	lastQuickScanDateTime: any;
	lastQuickScanSignatureVersion: string;
	lastReportedDateTime: any;
	malwareProtectionEnabled: boolean;
	networkInspectionSystemEnabled: boolean;
	productStatus: EnumTypes.windowsDefenderProductStatus;
	quickScanOverdue: boolean;
	realTimeProtectionEnabled: boolean;
	rebootRequired: boolean;
	signatureUpdateOverdue: boolean;
	signatureVersion: string;
	tamperProtectionEnabled: boolean;
}
export interface windowsProtectionStateMethods extends entityMethods {
	detectedMalwareState(): windowsDeviceMalwareStateCollection;
	detectedMalwareState(id: string | number): IBaseQuery<windowsDeviceMalwareState> & windowsDeviceMalwareStateMethods;
}
export interface windowsProtectionStateOData extends entityOData {
	detectedMalwareState: IBaseResults<windowsDeviceMalwareState>;
}
/*********************************************
* windowsSetting
**********************************************/
export interface windowsSetting extends windowsSettingProps, windowsSettingMethods { }
export interface windowsSettingProps extends  entityProps {
	payloadType: string;
	settingType: EnumTypes.windowsSettingType;
	windowsDeviceId: string;
}
export interface windowsSettingMethods extends entityMethods {
	instances(): windowsSettingInstanceCollection;
	instances(id: string | number): IBaseQuery<windowsSettingInstance> & windowsSettingInstanceMethods;
}
export interface windowsSettingOData extends entityOData {
	instances: IBaseResults<windowsSettingInstance>;
}
export interface windowsSettingCollection extends IBaseCollection<windowsSetting, windowsSettingOData & windowsSettingProps> {
    add(values?: any): IBaseExecution<windowsSetting>;
}
/*********************************************
* windowsSettingInstance
**********************************************/
export interface windowsSettingInstance extends windowsSettingInstanceProps, windowsSettingInstanceMethods { }
export interface windowsSettingInstanceProps extends  entityProps {
	createdDateTime: any;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	payload: string;
}
export interface windowsSettingInstanceMethods extends entityMethods {

}
export interface windowsSettingInstanceOData extends entityOData {

}
export interface windowsSettingInstanceCollection extends IBaseCollection<windowsSettingInstance, windowsSettingInstanceOData & windowsSettingInstanceProps> {
    add(values?: any): IBaseExecution<windowsSettingInstance>;
}
/*********************************************
* windowsUniversalAppX
**********************************************/
export interface windowsUniversalAppX extends windowsUniversalAppXProps, windowsUniversalAppXMethods { }
export interface windowsUniversalAppXProps extends  mobileLobAppProps {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	applicableDeviceTypes: EnumTypes.windowsDeviceType;
	identityName: string;
	identityPublisherHash: string;
	identityResourceIdentifier: string;
	identityVersion: string;
	isBundle: boolean;
	minimumSupportedOperatingSystem: ComplexTypes.windowsMinimumOperatingSystem;
}
export interface windowsUniversalAppXMethods extends mobileLobAppMethods {
	committedContainedApps(): mobileContainedAppCollection;
	committedContainedApps(id: string | number): IBaseQuery<mobileContainedApp> & mobileContainedAppMethods;
}
export interface windowsUniversalAppXOData extends mobileLobAppOData {
	committedContainedApps: IBaseResults<mobileContainedApp>;
}
/*********************************************
* windowsUniversalAppXContainedApp
**********************************************/
export interface windowsUniversalAppXContainedApp extends windowsUniversalAppXContainedAppProps, windowsUniversalAppXContainedAppMethods { }
export interface windowsUniversalAppXContainedAppProps extends  mobileContainedAppProps {
	appUserModelId: string;
}
export interface windowsUniversalAppXContainedAppMethods extends mobileContainedAppMethods {

}
export interface windowsUniversalAppXContainedAppOData extends mobileContainedAppOData {

}
/*********************************************
* windowsUpdateForBusinessConfiguration
**********************************************/
export interface windowsUpdateForBusinessConfiguration extends windowsUpdateForBusinessConfigurationProps, windowsUpdateForBusinessConfigurationMethods { }
export interface windowsUpdateForBusinessConfigurationProps extends  deviceConfigurationProps {
	allowWindows11Upgrade: boolean;
	automaticUpdateMode: EnumTypes.automaticUpdateMode;
	autoRestartNotificationDismissal: EnumTypes.autoRestartNotificationDismissalMethod;
	businessReadyUpdatesOnly: EnumTypes.windowsUpdateType;
	deadlineForFeatureUpdatesInDays: number;
	deadlineForQualityUpdatesInDays: number;
	deadlineGracePeriodInDays: number;
	deliveryOptimizationMode: EnumTypes.windowsDeliveryOptimizationMode;
	driversExcluded: boolean;
	engagedRestartDeadlineInDays: number;
	engagedRestartSnoozeScheduleInDays: number;
	engagedRestartTransitionScheduleInDays: number;
	featureUpdatesDeferralPeriodInDays: number;
	featureUpdatesPaused: boolean;
	featureUpdatesPauseExpiryDateTime: any;
	featureUpdatesPauseStartDate: any;
	featureUpdatesRollbackStartDateTime: any;
	featureUpdatesRollbackWindowInDays: number;
	featureUpdatesWillBeRolledBack: boolean;
	installationSchedule: ComplexTypes.windowsUpdateInstallScheduleType;
	microsoftUpdateServiceAllowed: boolean;
	postponeRebootUntilAfterDeadline: boolean;
	prereleaseFeatures: EnumTypes.prereleaseFeatures;
	qualityUpdatesDeferralPeriodInDays: number;
	qualityUpdatesPaused: boolean;
	qualityUpdatesPauseExpiryDateTime: any;
	qualityUpdatesPauseStartDate: any;
	qualityUpdatesRollbackStartDateTime: any;
	qualityUpdatesWillBeRolledBack: boolean;
	scheduleImminentRestartWarningInMinutes: number;
	scheduleRestartWarningInHours: number;
	skipChecksBeforeRestart: boolean;
	updateNotificationLevel: EnumTypes.windowsUpdateNotificationDisplayOption;
	updateWeeks: EnumTypes.windowsUpdateForBusinessUpdateWeeks;
	userPauseAccess: EnumTypes.enablement;
	userWindowsUpdateScanAccess: EnumTypes.enablement;
}
export interface windowsUpdateForBusinessConfigurationMethods extends deviceConfigurationMethods {

}
export interface windowsUpdateForBusinessConfigurationOData extends deviceConfigurationOData {

}
/*********************************************
* windowsWebApp
**********************************************/
export interface windowsWebApp extends windowsWebAppProps, windowsWebAppMethods { }
export interface windowsWebAppProps extends  mobileAppProps {
	appUrl: string;
}
export interface windowsWebAppMethods extends mobileAppMethods {

}
export interface windowsWebAppOData extends mobileAppOData {

}
/*********************************************
* workbook
**********************************************/
export interface workbook extends workbookProps, workbookMethods { }
export interface workbookProps extends  entityProps {

}
export interface workbookMethods extends entityMethods {
	application(): IBaseQuery<workbookApplication> & workbookApplicationMethods;
	comments(): workbookCommentCollection;
	comments(id: string | number): IBaseQuery<workbookComment> & workbookCommentMethods;
	functions(): IBaseQuery<workbookFunctions> & workbookFunctionsMethods;
	names(): workbookNamedItemCollection;
	names(id: string | number): IBaseQuery<workbookNamedItem> & workbookNamedItemMethods;
	operations(): workbookOperationCollection;
	operations(id: string | number): IBaseQuery<workbookOperation> & workbookOperationMethods;
	tables(): workbookTableCollection;
	tables(id: string | number): IBaseQuery<workbookTable> & workbookTableMethods;
	worksheets(): workbookWorksheetCollection;
	worksheets(id: string | number): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
}
export interface workbookOData extends entityOData {
	application: workbookApplication;
	comments: IBaseResults<workbookComment>;
	functions: workbookFunctions;
	names: IBaseResults<workbookNamedItem>;
	operations: IBaseResults<workbookOperation>;
	tables: IBaseResults<workbookTable>;
	worksheets: IBaseResults<workbookWorksheet>;
}
/*********************************************
* workbookApplication
**********************************************/
export interface workbookApplication extends workbookApplicationProps, workbookApplicationMethods { }
export interface workbookApplicationProps extends  entityProps {
	calculationMode: string;
}
export interface workbookApplicationMethods extends entityMethods {

}
export interface workbookApplicationOData extends entityOData {

}
/*********************************************
* workbookChart
**********************************************/
export interface workbookChart extends workbookChartProps, workbookChartMethods { }
export interface workbookChartProps extends  entityProps {
	height: number;
	left: number;
	name: string;
	top: number;
	width: number;
}
export interface workbookChartMethods extends entityMethods {
	axes(): IBaseQuery<workbookChartAxes> & workbookChartAxesMethods;
	dataLabels(): IBaseQuery<workbookChartDataLabels> & workbookChartDataLabelsMethods;
	format(): IBaseQuery<workbookChartAreaFormat> & workbookChartAreaFormatMethods;
	legend(): IBaseQuery<workbookChartLegend> & workbookChartLegendMethods;
	series(): workbookChartSeriesCollection;
	series(id: string | number): IBaseQuery<workbookChartSeries> & workbookChartSeriesMethods;
	title(): IBaseQuery<workbookChartTitle> & workbookChartTitleMethods;
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
}
export interface workbookChartOData extends entityOData {
	axes: workbookChartAxes;
	dataLabels: workbookChartDataLabels;
	format: workbookChartAreaFormat;
	legend: workbookChartLegend;
	series: IBaseResults<workbookChartSeries>;
	title: workbookChartTitle;
	worksheet: workbookWorksheet;
}
export interface workbookChartCollection extends IBaseCollection<workbookChart, workbookChartOData & workbookChartProps> {
    add(values?: any): IBaseExecution<workbookChart>;
}
/*********************************************
* workbookChartAreaFormat
**********************************************/
export interface workbookChartAreaFormat extends workbookChartAreaFormatProps, workbookChartAreaFormatMethods { }
export interface workbookChartAreaFormatProps extends  entityProps {

}
export interface workbookChartAreaFormatMethods extends entityMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
export interface workbookChartAreaFormatOData extends entityOData {
	fill: workbookChartFill;
	font: workbookChartFont;
}
/*********************************************
* workbookChartAxes
**********************************************/
export interface workbookChartAxes extends workbookChartAxesProps, workbookChartAxesMethods { }
export interface workbookChartAxesProps extends  entityProps {

}
export interface workbookChartAxesMethods extends entityMethods {
	categoryAxis(): IBaseQuery<workbookChartAxis> & workbookChartAxisMethods;
	seriesAxis(): IBaseQuery<workbookChartAxis> & workbookChartAxisMethods;
	valueAxis(): IBaseQuery<workbookChartAxis> & workbookChartAxisMethods;
}
export interface workbookChartAxesOData extends entityOData {
	categoryAxis: workbookChartAxis;
	seriesAxis: workbookChartAxis;
	valueAxis: workbookChartAxis;
}
/*********************************************
* workbookChartAxis
**********************************************/
export interface workbookChartAxis extends workbookChartAxisProps, workbookChartAxisMethods { }
export interface workbookChartAxisProps extends  entityProps {
	majorUnit: ComplexTypes.Json;
	maximum: ComplexTypes.Json;
	minimum: ComplexTypes.Json;
	minorUnit: ComplexTypes.Json;
}
export interface workbookChartAxisMethods extends entityMethods {
	format(): IBaseQuery<workbookChartAxisFormat> & workbookChartAxisFormatMethods;
	majorGridlines(): IBaseQuery<workbookChartGridlines> & workbookChartGridlinesMethods;
	minorGridlines(): IBaseQuery<workbookChartGridlines> & workbookChartGridlinesMethods;
	title(): IBaseQuery<workbookChartAxisTitle> & workbookChartAxisTitleMethods;
}
export interface workbookChartAxisOData extends entityOData {
	format: workbookChartAxisFormat;
	majorGridlines: workbookChartGridlines;
	minorGridlines: workbookChartGridlines;
	title: workbookChartAxisTitle;
}
/*********************************************
* workbookChartAxisFormat
**********************************************/
export interface workbookChartAxisFormat extends workbookChartAxisFormatProps, workbookChartAxisFormatMethods { }
export interface workbookChartAxisFormatProps extends  entityProps {

}
export interface workbookChartAxisFormatMethods extends entityMethods {
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
	line(): IBaseQuery<workbookChartLineFormat> & workbookChartLineFormatMethods;
}
export interface workbookChartAxisFormatOData extends entityOData {
	font: workbookChartFont;
	line: workbookChartLineFormat;
}
/*********************************************
* workbookChartAxisTitle
**********************************************/
export interface workbookChartAxisTitle extends workbookChartAxisTitleProps, workbookChartAxisTitleMethods { }
export interface workbookChartAxisTitleProps extends  entityProps {
	text: string;
	visible: boolean;
}
export interface workbookChartAxisTitleMethods extends entityMethods {
	format(): IBaseQuery<workbookChartAxisTitleFormat> & workbookChartAxisTitleFormatMethods;
}
export interface workbookChartAxisTitleOData extends entityOData {
	format: workbookChartAxisTitleFormat;
}
/*********************************************
* workbookChartAxisTitleFormat
**********************************************/
export interface workbookChartAxisTitleFormat extends workbookChartAxisTitleFormatProps, workbookChartAxisTitleFormatMethods { }
export interface workbookChartAxisTitleFormatProps extends  entityProps {

}
export interface workbookChartAxisTitleFormatMethods extends entityMethods {
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
export interface workbookChartAxisTitleFormatOData extends entityOData {
	font: workbookChartFont;
}
/*********************************************
* workbookChartDataLabelFormat
**********************************************/
export interface workbookChartDataLabelFormat extends workbookChartDataLabelFormatProps, workbookChartDataLabelFormatMethods { }
export interface workbookChartDataLabelFormatProps extends  entityProps {

}
export interface workbookChartDataLabelFormatMethods extends entityMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
export interface workbookChartDataLabelFormatOData extends entityOData {
	fill: workbookChartFill;
	font: workbookChartFont;
}
/*********************************************
* workbookChartDataLabels
**********************************************/
export interface workbookChartDataLabels extends workbookChartDataLabelsProps, workbookChartDataLabelsMethods { }
export interface workbookChartDataLabelsProps extends  entityProps {
	position: string;
	separator: string;
	showBubbleSize: boolean;
	showCategoryName: boolean;
	showLegendKey: boolean;
	showPercentage: boolean;
	showSeriesName: boolean;
	showValue: boolean;
}
export interface workbookChartDataLabelsMethods extends entityMethods {
	format(): IBaseQuery<workbookChartDataLabelFormat> & workbookChartDataLabelFormatMethods;
}
export interface workbookChartDataLabelsOData extends entityOData {
	format: workbookChartDataLabelFormat;
}
/*********************************************
* workbookChartFill
**********************************************/
export interface workbookChartFill extends workbookChartFillProps, workbookChartFillMethods { }
export interface workbookChartFillProps extends  entityProps {

}
export interface workbookChartFillMethods extends entityMethods {

}
export interface workbookChartFillOData extends entityOData {

}
/*********************************************
* workbookChartFont
**********************************************/
export interface workbookChartFont extends workbookChartFontProps, workbookChartFontMethods { }
export interface workbookChartFontProps extends  entityProps {
	bold: boolean;
	color: string;
	italic: boolean;
	name: string;
	size: number;
	underline: string;
}
export interface workbookChartFontMethods extends entityMethods {

}
export interface workbookChartFontOData extends entityOData {

}
/*********************************************
* workbookChartGridlines
**********************************************/
export interface workbookChartGridlines extends workbookChartGridlinesProps, workbookChartGridlinesMethods { }
export interface workbookChartGridlinesProps extends  entityProps {
	visible: boolean;
}
export interface workbookChartGridlinesMethods extends entityMethods {
	format(): IBaseQuery<workbookChartGridlinesFormat> & workbookChartGridlinesFormatMethods;
}
export interface workbookChartGridlinesOData extends entityOData {
	format: workbookChartGridlinesFormat;
}
/*********************************************
* workbookChartGridlinesFormat
**********************************************/
export interface workbookChartGridlinesFormat extends workbookChartGridlinesFormatProps, workbookChartGridlinesFormatMethods { }
export interface workbookChartGridlinesFormatProps extends  entityProps {

}
export interface workbookChartGridlinesFormatMethods extends entityMethods {
	line(): IBaseQuery<workbookChartLineFormat> & workbookChartLineFormatMethods;
}
export interface workbookChartGridlinesFormatOData extends entityOData {
	line: workbookChartLineFormat;
}
/*********************************************
* workbookChartLegend
**********************************************/
export interface workbookChartLegend extends workbookChartLegendProps, workbookChartLegendMethods { }
export interface workbookChartLegendProps extends  entityProps {
	overlay: boolean;
	position: string;
	visible: boolean;
}
export interface workbookChartLegendMethods extends entityMethods {
	format(): IBaseQuery<workbookChartLegendFormat> & workbookChartLegendFormatMethods;
}
export interface workbookChartLegendOData extends entityOData {
	format: workbookChartLegendFormat;
}
/*********************************************
* workbookChartLegendFormat
**********************************************/
export interface workbookChartLegendFormat extends workbookChartLegendFormatProps, workbookChartLegendFormatMethods { }
export interface workbookChartLegendFormatProps extends  entityProps {

}
export interface workbookChartLegendFormatMethods extends entityMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
export interface workbookChartLegendFormatOData extends entityOData {
	fill: workbookChartFill;
	font: workbookChartFont;
}
/*********************************************
* workbookChartLineFormat
**********************************************/
export interface workbookChartLineFormat extends workbookChartLineFormatProps, workbookChartLineFormatMethods { }
export interface workbookChartLineFormatProps extends  entityProps {
	color: string;
}
export interface workbookChartLineFormatMethods extends entityMethods {

}
export interface workbookChartLineFormatOData extends entityOData {

}
/*********************************************
* workbookChartPoint
**********************************************/
export interface workbookChartPoint extends workbookChartPointProps, workbookChartPointMethods { }
export interface workbookChartPointProps extends  entityProps {
	value: ComplexTypes.Json;
}
export interface workbookChartPointMethods extends entityMethods {
	format(): IBaseQuery<workbookChartPointFormat> & workbookChartPointFormatMethods;
}
export interface workbookChartPointOData extends entityOData {
	format: workbookChartPointFormat;
}
export interface workbookChartPointCollection extends IBaseCollection<workbookChartPoint, workbookChartPointOData & workbookChartPointProps> {
    add(values?: any): IBaseExecution<workbookChartPoint>;
}
/*********************************************
* workbookChartPointFormat
**********************************************/
export interface workbookChartPointFormat extends workbookChartPointFormatProps, workbookChartPointFormatMethods { }
export interface workbookChartPointFormatProps extends  entityProps {

}
export interface workbookChartPointFormatMethods extends entityMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
}
export interface workbookChartPointFormatOData extends entityOData {
	fill: workbookChartFill;
}
/*********************************************
* workbookChartSeries
**********************************************/
export interface workbookChartSeries extends workbookChartSeriesProps, workbookChartSeriesMethods { }
export interface workbookChartSeriesProps extends  entityProps {
	name: string;
}
export interface workbookChartSeriesMethods extends entityMethods {
	format(): IBaseQuery<workbookChartSeriesFormat> & workbookChartSeriesFormatMethods;
	points(): workbookChartPointCollection;
	points(id: string | number): IBaseQuery<workbookChartPoint> & workbookChartPointMethods;
}
export interface workbookChartSeriesOData extends entityOData {
	format: workbookChartSeriesFormat;
	points: IBaseResults<workbookChartPoint>;
}
export interface workbookChartSeriesCollection extends IBaseCollection<workbookChartSeries, workbookChartSeriesOData & workbookChartSeriesProps> {
    add(values?: any): IBaseExecution<workbookChartSeries>;
}
/*********************************************
* workbookChartSeriesFormat
**********************************************/
export interface workbookChartSeriesFormat extends workbookChartSeriesFormatProps, workbookChartSeriesFormatMethods { }
export interface workbookChartSeriesFormatProps extends  entityProps {

}
export interface workbookChartSeriesFormatMethods extends entityMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	line(): IBaseQuery<workbookChartLineFormat> & workbookChartLineFormatMethods;
}
export interface workbookChartSeriesFormatOData extends entityOData {
	fill: workbookChartFill;
	line: workbookChartLineFormat;
}
/*********************************************
* workbookChartTitle
**********************************************/
export interface workbookChartTitle extends workbookChartTitleProps, workbookChartTitleMethods { }
export interface workbookChartTitleProps extends  entityProps {
	overlay: boolean;
	text: string;
	visible: boolean;
}
export interface workbookChartTitleMethods extends entityMethods {
	format(): IBaseQuery<workbookChartTitleFormat> & workbookChartTitleFormatMethods;
}
export interface workbookChartTitleOData extends entityOData {
	format: workbookChartTitleFormat;
}
/*********************************************
* workbookChartTitleFormat
**********************************************/
export interface workbookChartTitleFormat extends workbookChartTitleFormatProps, workbookChartTitleFormatMethods { }
export interface workbookChartTitleFormatProps extends  entityProps {

}
export interface workbookChartTitleFormatMethods extends entityMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
export interface workbookChartTitleFormatOData extends entityOData {
	fill: workbookChartFill;
	font: workbookChartFont;
}
/*********************************************
* workbookComment
**********************************************/
export interface workbookComment extends workbookCommentProps, workbookCommentMethods { }
export interface workbookCommentProps extends  entityProps {
	content: string;
	contentType: string;
}
export interface workbookCommentMethods extends entityMethods {
	replies(): workbookCommentReplyCollection;
	replies(id: string | number): IBaseQuery<workbookCommentReply> & workbookCommentReplyMethods;
}
export interface workbookCommentOData extends entityOData {
	replies: IBaseResults<workbookCommentReply>;
}
export interface workbookCommentCollection extends IBaseCollection<workbookComment, workbookCommentOData & workbookCommentProps> {
    add(values?: any): IBaseExecution<workbookComment>;
}
/*********************************************
* workbookCommentReply
**********************************************/
export interface workbookCommentReply extends workbookCommentReplyProps, workbookCommentReplyMethods { }
export interface workbookCommentReplyProps extends  entityProps {
	content: string;
	contentType: string;
}
export interface workbookCommentReplyMethods extends entityMethods {

}
export interface workbookCommentReplyOData extends entityOData {

}
export interface workbookCommentReplyCollection extends IBaseCollection<workbookCommentReply, workbookCommentReplyOData & workbookCommentReplyProps> {
    add(values?: any): IBaseExecution<workbookCommentReply>;
}
/*********************************************
* workbookFilter
**********************************************/
export interface workbookFilter extends workbookFilterProps, workbookFilterMethods { }
export interface workbookFilterProps extends  entityProps {
	criteria: ComplexTypes.workbookFilterCriteria;
}
export interface workbookFilterMethods extends entityMethods {

}
export interface workbookFilterOData extends entityOData {

}
/*********************************************
* workbookFormatProtection
**********************************************/
export interface workbookFormatProtection extends workbookFormatProtectionProps, workbookFormatProtectionMethods { }
export interface workbookFormatProtectionProps extends  entityProps {
	formulaHidden: boolean;
	locked: boolean;
}
export interface workbookFormatProtectionMethods extends entityMethods {

}
export interface workbookFormatProtectionOData extends entityOData {

}
/*********************************************
* workbookFunctionResult
**********************************************/
export interface workbookFunctionResult extends workbookFunctionResultProps, workbookFunctionResultMethods { }
export interface workbookFunctionResultProps extends  entityProps {
	error: string;
	value: ComplexTypes.Json;
}
export interface workbookFunctionResultMethods extends entityMethods {

}
export interface workbookFunctionResultOData extends entityOData {

}
/*********************************************
* workbookFunctions
**********************************************/
export interface workbookFunctions extends workbookFunctionsProps, workbookFunctionsMethods { }
export interface workbookFunctionsProps extends  entityProps {

}
export interface workbookFunctionsMethods extends entityMethods {

}
export interface workbookFunctionsOData extends entityOData {

}
/*********************************************
* workbookNamedItem
**********************************************/
export interface workbookNamedItem extends workbookNamedItemProps, workbookNamedItemMethods { }
export interface workbookNamedItemProps extends  entityProps {
	comment: string;
	name: string;
	scope: string;
	type: string;
	value: ComplexTypes.Json;
	visible: boolean;
}
export interface workbookNamedItemMethods extends entityMethods {
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
}
export interface workbookNamedItemOData extends entityOData {
	worksheet: workbookWorksheet;
}
export interface workbookNamedItemCollection extends IBaseCollection<workbookNamedItem, workbookNamedItemOData & workbookNamedItemProps> {
    add(values?: any): IBaseExecution<workbookNamedItem>;
}
/*********************************************
* workbookOperation
**********************************************/
export interface workbookOperation extends workbookOperationProps, workbookOperationMethods { }
export interface workbookOperationProps extends  entityProps {
	error: ComplexTypes.workbookOperationError;
	resourceLocation: string;
	status: EnumTypes.workbookOperationStatus;
}
export interface workbookOperationMethods extends entityMethods {

}
export interface workbookOperationOData extends entityOData {

}
export interface workbookOperationCollection extends IBaseCollection<workbookOperation, workbookOperationOData & workbookOperationProps> {
    add(values?: any): IBaseExecution<workbookOperation>;
}
/*********************************************
* workbookPivotTable
**********************************************/
export interface workbookPivotTable extends workbookPivotTableProps, workbookPivotTableMethods { }
export interface workbookPivotTableProps extends  entityProps {
	name: string;
}
export interface workbookPivotTableMethods extends entityMethods {
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
}
export interface workbookPivotTableOData extends entityOData {
	worksheet: workbookWorksheet;
}
export interface workbookPivotTableCollection extends IBaseCollection<workbookPivotTable, workbookPivotTableOData & workbookPivotTableProps> {
    add(values?: any): IBaseExecution<workbookPivotTable>;
}
/*********************************************
* workbookRange
**********************************************/
export interface workbookRange extends workbookRangeProps, workbookRangeMethods { }
export interface workbookRangeProps extends  entityProps {
	address: string;
	addressLocal: string;
	cellCount: number;
	columnCount: number;
	columnHidden: boolean;
	columnIndex: number;
	formulas: ComplexTypes.Json;
	formulasLocal: ComplexTypes.Json;
	formulasR1C1: ComplexTypes.Json;
	hidden: boolean;
	numberFormat: ComplexTypes.Json;
	rowCount: number;
	rowHidden: boolean;
	rowIndex: number;
	text: ComplexTypes.Json;
	values: ComplexTypes.Json;
	valueTypes: ComplexTypes.Json;
}
export interface workbookRangeMethods extends entityMethods {
	format(): IBaseQuery<workbookRangeFormat> & workbookRangeFormatMethods;
	sort(): IBaseQuery<workbookRangeSort> & workbookRangeSortMethods;
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
}
export interface workbookRangeOData extends entityOData {
	format: workbookRangeFormat;
	sort: workbookRangeSort;
	worksheet: workbookWorksheet;
}
/*********************************************
* workbookRangeBorder
**********************************************/
export interface workbookRangeBorder extends workbookRangeBorderProps, workbookRangeBorderMethods { }
export interface workbookRangeBorderProps extends  entityProps {
	color: string;
	sideIndex: string;
	style: string;
	weight: string;
}
export interface workbookRangeBorderMethods extends entityMethods {

}
export interface workbookRangeBorderOData extends entityOData {

}
export interface workbookRangeBorderCollection extends IBaseCollection<workbookRangeBorder, workbookRangeBorderOData & workbookRangeBorderProps> {
    add(values?: any): IBaseExecution<workbookRangeBorder>;
}
/*********************************************
* workbookRangeFill
**********************************************/
export interface workbookRangeFill extends workbookRangeFillProps, workbookRangeFillMethods { }
export interface workbookRangeFillProps extends  entityProps {
	color: string;
}
export interface workbookRangeFillMethods extends entityMethods {

}
export interface workbookRangeFillOData extends entityOData {

}
/*********************************************
* workbookRangeFont
**********************************************/
export interface workbookRangeFont extends workbookRangeFontProps, workbookRangeFontMethods { }
export interface workbookRangeFontProps extends  entityProps {
	bold: boolean;
	color: string;
	italic: boolean;
	name: string;
	size: number;
	underline: string;
}
export interface workbookRangeFontMethods extends entityMethods {

}
export interface workbookRangeFontOData extends entityOData {

}
/*********************************************
* workbookRangeFormat
**********************************************/
export interface workbookRangeFormat extends workbookRangeFormatProps, workbookRangeFormatMethods { }
export interface workbookRangeFormatProps extends  entityProps {
	columnWidth: number;
	horizontalAlignment: string;
	rowHeight: number;
	verticalAlignment: string;
	wrapText: boolean;
}
export interface workbookRangeFormatMethods extends entityMethods {
	borders(): workbookRangeBorderCollection;
	borders(id: string | number): IBaseQuery<workbookRangeBorder> & workbookRangeBorderMethods;
	fill(): IBaseQuery<workbookRangeFill> & workbookRangeFillMethods;
	font(): IBaseQuery<workbookRangeFont> & workbookRangeFontMethods;
	protection(): IBaseQuery<workbookFormatProtection> & workbookFormatProtectionMethods;
}
export interface workbookRangeFormatOData extends entityOData {
	borders: IBaseResults<workbookRangeBorder>;
	fill: workbookRangeFill;
	font: workbookRangeFont;
	protection: workbookFormatProtection;
}
/*********************************************
* workbookRangeSort
**********************************************/
export interface workbookRangeSort extends workbookRangeSortProps, workbookRangeSortMethods { }
export interface workbookRangeSortProps extends  entityProps {

}
export interface workbookRangeSortMethods extends entityMethods {

}
export interface workbookRangeSortOData extends entityOData {

}
/*********************************************
* workbookRangeView
**********************************************/
export interface workbookRangeView extends workbookRangeViewProps, workbookRangeViewMethods { }
export interface workbookRangeViewProps extends  entityProps {
	cellAddresses: ComplexTypes.Json;
	columnCount: number;
	formulas: ComplexTypes.Json;
	formulasLocal: ComplexTypes.Json;
	formulasR1C1: ComplexTypes.Json;
	index: number;
	numberFormat: ComplexTypes.Json;
	rowCount: number;
	text: ComplexTypes.Json;
	values: ComplexTypes.Json;
	valueTypes: ComplexTypes.Json;
}
export interface workbookRangeViewMethods extends entityMethods {
	rows(): workbookRangeViewCollection;
	rows(id: string | number): IBaseQuery<workbookRangeView> & workbookRangeViewMethods;
}
export interface workbookRangeViewOData extends entityOData {
	rows: IBaseResults<workbookRangeView>;
}
export interface workbookRangeViewCollection extends IBaseCollection<workbookRangeView, workbookRangeViewOData & workbookRangeViewProps> {
    add(values?: any): IBaseExecution<workbookRangeView>;
}
/*********************************************
* workbookTable
**********************************************/
export interface workbookTable extends workbookTableProps, workbookTableMethods { }
export interface workbookTableProps extends  entityProps {
	highlightFirstColumn: boolean;
	highlightLastColumn: boolean;
	legacyId: string;
	name: string;
	showBandedColumns: boolean;
	showBandedRows: boolean;
	showFilterButton: boolean;
	showHeaders: boolean;
	showTotals: boolean;
	style: string;
}
export interface workbookTableMethods extends entityMethods {
	columns(): workbookTableColumnCollection;
	columns(id: string | number): IBaseQuery<workbookTableColumn> & workbookTableColumnMethods;
	rows(): workbookTableRowCollection;
	rows(id: string | number): IBaseQuery<workbookTableRow> & workbookTableRowMethods;
	sort(): IBaseQuery<workbookTableSort> & workbookTableSortMethods;
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
}
export interface workbookTableOData extends entityOData {
	columns: IBaseResults<workbookTableColumn>;
	rows: IBaseResults<workbookTableRow>;
	sort: workbookTableSort;
	worksheet: workbookWorksheet;
}
export interface workbookTableCollection extends IBaseCollection<workbookTable, workbookTableOData & workbookTableProps> {
    add(values?: any): IBaseExecution<workbookTable>;
}
/*********************************************
* workbookTableColumn
**********************************************/
export interface workbookTableColumn extends workbookTableColumnProps, workbookTableColumnMethods { }
export interface workbookTableColumnProps extends  entityProps {
	index: number;
	name: string;
	values: ComplexTypes.Json;
}
export interface workbookTableColumnMethods extends entityMethods {
	filter(): IBaseQuery<workbookFilter> & workbookFilterMethods;
}
export interface workbookTableColumnOData extends entityOData {
	filter: workbookFilter;
}
export interface workbookTableColumnCollection extends IBaseCollection<workbookTableColumn, workbookTableColumnOData & workbookTableColumnProps> {
    add(values?: any): IBaseExecution<workbookTableColumn>;
}
/*********************************************
* workbookTableRow
**********************************************/
export interface workbookTableRow extends workbookTableRowProps, workbookTableRowMethods { }
export interface workbookTableRowProps extends  entityProps {
	index: number;
	values: ComplexTypes.Json;
}
export interface workbookTableRowMethods extends entityMethods {

}
export interface workbookTableRowOData extends entityOData {

}
export interface workbookTableRowCollection extends IBaseCollection<workbookTableRow, workbookTableRowOData & workbookTableRowProps> {
    add(values?: any): IBaseExecution<workbookTableRow>;
}
/*********************************************
* workbookTableSort
**********************************************/
export interface workbookTableSort extends workbookTableSortProps, workbookTableSortMethods { }
export interface workbookTableSortProps extends  entityProps {
	fields: ComplexTypes.workbookSortField[];
	matchCase: boolean;
	method: string;
}
export interface workbookTableSortMethods extends entityMethods {

}
export interface workbookTableSortOData extends entityOData {

}
/*********************************************
* workbookWorksheet
**********************************************/
export interface workbookWorksheet extends workbookWorksheetProps, workbookWorksheetMethods { }
export interface workbookWorksheetProps extends  entityProps {
	name: string;
	position: number;
	visibility: string;
}
export interface workbookWorksheetMethods extends entityMethods {
	charts(): workbookChartCollection;
	charts(id: string | number): IBaseQuery<workbookChart> & workbookChartMethods;
	names(): workbookNamedItemCollection;
	names(id: string | number): IBaseQuery<workbookNamedItem> & workbookNamedItemMethods;
	pivotTables(): workbookPivotTableCollection;
	pivotTables(id: string | number): IBaseQuery<workbookPivotTable> & workbookPivotTableMethods;
	protection(): IBaseQuery<workbookWorksheetProtection> & workbookWorksheetProtectionMethods;
	tables(): workbookTableCollection;
	tables(id: string | number): IBaseQuery<workbookTable> & workbookTableMethods;
}
export interface workbookWorksheetOData extends entityOData {
	charts: IBaseResults<workbookChart>;
	names: IBaseResults<workbookNamedItem>;
	pivotTables: IBaseResults<workbookPivotTable>;
	protection: workbookWorksheetProtection;
	tables: IBaseResults<workbookTable>;
}
export interface workbookWorksheetCollection extends IBaseCollection<workbookWorksheet, workbookWorksheetOData & workbookWorksheetProps> {
    add(values?: any): IBaseExecution<workbookWorksheet>;
}
/*********************************************
* workbookWorksheetProtection
**********************************************/
export interface workbookWorksheetProtection extends workbookWorksheetProtectionProps, workbookWorksheetProtectionMethods { }
export interface workbookWorksheetProtectionProps extends  entityProps {
	options: ComplexTypes.workbookWorksheetProtectionOptions;
	protected: boolean;
}
export interface workbookWorksheetProtectionMethods extends entityMethods {

}
export interface workbookWorksheetProtectionOData extends entityOData {

}
/*********************************************
* workflow
**********************************************/
export interface workflow extends workflowProps, workflowMethods { }
export interface workflowProps extends  workflowBaseProps {
	deletedDateTime: any;
	id: string;
	nextScheduleRunDateTime: any;
	version: number;
}
export interface workflowMethods extends workflowBaseMethods {
	executionScope(): IBaseCollection<userProcessingResult, workflowBase & userProcessingResultOData & userProcessingResultProps>;
	executionScope(id: string | number): IBaseQuery<userProcessingResult> & userProcessingResultMethods;
	runs(): IBaseCollection<run, workflowBase & runOData & runProps>;
	runs(id: string | number): IBaseQuery<run> & runMethods;
	taskReports(): IBaseCollection<taskReport, workflowBase & taskReportOData & taskReportProps>;
	taskReports(id: string | number): IBaseQuery<taskReport> & taskReportMethods;
	userProcessingResults(): IBaseCollection<userProcessingResult, workflowBase & userProcessingResultOData & userProcessingResultProps>;
	userProcessingResults(id: string | number): IBaseQuery<userProcessingResult> & userProcessingResultMethods;
	versions(): IBaseCollection<workflowVersion, workflowBase & workflowVersionOData & workflowVersionProps>;
	versions(id: string | number): IBaseQuery<workflowVersion> & workflowVersionMethods;
}
export interface workflowOData extends workflowBaseOData {
	executionScope: IBaseResults<userProcessingResult>;
	runs: IBaseResults<run>;
	taskReports: IBaseResults<taskReport>;
	userProcessingResults: IBaseResults<userProcessingResult>;
	versions: IBaseResults<workflowVersion>;
}
/*********************************************
* workflowBase
**********************************************/
export interface workflowBase extends workflowBaseProps, workflowBaseMethods { }
export interface workflowBaseProps   {
	category: EnumTypes.lifecycleWorkflowCategory;
	createdDateTime: any;
	description: string;
	displayName: string;
	executionConditions: ComplexTypes.workflowExecutionConditions;
	isEnabled: boolean;
	isSchedulingEnabled: boolean;
	lastModifiedDateTime: any;
}
export interface workflowBaseMethods {
	createdBy(): IBaseQuery<user> & userMethods;
	lastModifiedBy(): IBaseQuery<user> & userMethods;
	tasks(): IBaseCollection<task, taskOData & taskProps>;
	tasks(id: string | number): IBaseQuery<task> & taskMethods;
}
export interface workflowBaseOData {
	createdBy: user;
	lastModifiedBy: user;
	tasks: IBaseResults<task>;
}
/*********************************************
* workflowTemplate
**********************************************/
export interface workflowTemplate extends workflowTemplateProps, workflowTemplateMethods { }
export interface workflowTemplateProps extends  entityProps {
	category: EnumTypes.lifecycleWorkflowCategory;
	description: string;
	displayName: string;
	executionConditions: ComplexTypes.workflowExecutionConditions;
}
export interface workflowTemplateMethods extends entityMethods {
	tasks(): IBaseCollection<task, entity & taskOData & taskProps>;
	tasks(id: string | number): IBaseQuery<task> & taskMethods;
}
export interface workflowTemplateOData extends entityOData {
	tasks: IBaseResults<task>;
}
/*********************************************
* workflowVersion
**********************************************/
export interface workflowVersion extends workflowVersionProps, workflowVersionMethods { }
export interface workflowVersionProps extends  workflowBaseProps {
	versionNumber: number;
}
export interface workflowVersionMethods extends workflowBaseMethods {

}
export interface workflowVersionOData extends workflowBaseOData {

}
/*********************************************
* workforceIntegration
**********************************************/
export interface workforceIntegration extends workforceIntegrationProps, workforceIntegrationMethods { }
export interface workforceIntegrationProps extends  changeTrackedEntityProps {
	apiVersion: number;
	displayName: string;
	encryption: ComplexTypes.workforceIntegrationEncryption;
	isActive: boolean;
	supportedEntities: EnumTypes.workforceIntegrationSupportedEntities;
	url: string;
}
export interface workforceIntegrationMethods extends changeTrackedEntityMethods {

}
export interface workforceIntegrationOData extends changeTrackedEntityOData {

}
export interface workforceIntegrationCollection extends IBaseCollection<workforceIntegration, workforceIntegrationOData & workforceIntegrationProps> {
    add(values?: any): IBaseExecution<workforceIntegration>;
}
/*********************************************
* workingTimeSchedule
**********************************************/
export interface workingTimeSchedule extends workingTimeScheduleProps, workingTimeScheduleMethods { }
export interface workingTimeScheduleProps extends  entityProps {

}
export interface workingTimeScheduleMethods extends entityMethods {

}
export interface workingTimeScheduleOData extends entityOData {

}
/*********************************************
* x509CertificateAuthenticationMethodConfiguration
**********************************************/
export interface x509CertificateAuthenticationMethodConfiguration extends x509CertificateAuthenticationMethodConfigurationProps, x509CertificateAuthenticationMethodConfigurationMethods { }
export interface x509CertificateAuthenticationMethodConfigurationProps extends  authenticationMethodConfigurationProps {
	authenticationModeConfiguration: ComplexTypes.x509CertificateAuthenticationModeConfiguration;
	certificateUserBindings: ComplexTypes.x509CertificateUserBinding[];
}
export interface x509CertificateAuthenticationMethodConfigurationMethods extends authenticationMethodConfigurationMethods {
	includeTargets(): authenticationMethodTargetCollection;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
}
export interface x509CertificateAuthenticationMethodConfigurationOData extends authenticationMethodConfigurationOData {
	includeTargets: IBaseResults<authenticationMethodTarget>;
}
/*********************************************
* x509CertificateCombinationConfiguration
**********************************************/
export interface x509CertificateCombinationConfiguration extends x509CertificateCombinationConfigurationProps, x509CertificateCombinationConfigurationMethods { }
export interface x509CertificateCombinationConfigurationProps extends  authenticationCombinationConfigurationProps {
	allowedIssuerSkis: Array<string>[];
	allowedPolicyOIDs: Array<string>[];
}
export interface x509CertificateCombinationConfigurationMethods extends authenticationCombinationConfigurationMethods {

}
export interface x509CertificateCombinationConfigurationOData extends authenticationCombinationConfigurationOData {

}