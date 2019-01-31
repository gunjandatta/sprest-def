import { IBaseCollection } from "../";
import { PS } from "../";
import { IBaseExecution } from "../";
import { SP } from "../";

/*********************************************
* EntityType
**********************************************/
export interface EntityType {
	Name?: string;
	ID?: any;
}

/*********************************************
* LookupTables
**********************************************/
export interface LookupTables {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IAssignment
**********************************************/
export interface IAssignment extends AssignmentProps,AssignmentMethods,IBaseExecution<Assignment> {

}

/*********************************************
* Assignment
**********************************************/
export interface Assignment extends AssignmentProps, AssignmentMethods {
	ActualCostWorkPerformed?: number;
	ActualOvertimeCost?: number;
	BaselineCost?: number;
	BaselineCostPerUse?: number;
	BaselineFinish?: any;
	BaselineStart?: any;
	BaselineWork?: string;
	BaselineWorkMilliseconds?: number;
	BaselineWorkTimeSpan?: any;
	BudgetedCostWorkPerformed?: number;
	BudgetedCostWorkScheduled?: number;
	CostVariance?: number;
	CostVarianceAtCompletion?: number;
	Created?: any;
	CurrentCostVariance?: number;
	Finish?: any;
	FinishVariance?: string;
	FinishVarianceMilliseconds?: number;
	FinishVarianceTimeSpan?: any;
	Id?: any;
	IsConfirmed?: boolean;
	IsOverAllocated?: boolean;
	IsPublished?: boolean;
	IsResponsePending?: boolean;
	IsUpdateNeeded?: boolean;
	LevelingDelay?: string;
	LevelingDelayMilliseconds?: number;
	LevelingDelayTimeSpan?: any;
	Modified?: any;
	Notes?: string;
	OvertimeCost?: number;
	RemainingCost?: number;
	RemainingOvertimeCost?: number;
	Resume?: any;
	ScheduleCostVariance?: number;
	Start?: any;
	StartVariance?: string;
	StartVarianceMilliseconds?: number;
	StartVarianceTimeSpan?: any;
	Stop?: any;
	WorkContourType?: number;
	WorkVariance?: string;
	WorkVarianceMilliseconds?: number;
	WorkVarianceTimeSpan?: any;
}

/*********************************************
* AssignmentProps
**********************************************/
export interface AssignmentProps {
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
}

/*********************************************
* AssignmentMethods
**********************************************/
export interface AssignmentMethods {

}

/*********************************************
* ICustomField
**********************************************/
export interface ICustomField extends CustomFieldProps,CustomFieldMethods,IBaseExecution<CustomField> {

}

/*********************************************
* CustomField
**********************************************/
export interface CustomField extends CustomFieldProps, CustomFieldMethods {
	AppAlternateId?: any;
	DepartmentId?: any;
	Description?: string;
	EntityTypeId?: any;
	FieldType?: number;
	Formula?: string;
	GraphicalIndicatorNonSummary?: string;
	GraphicalIndicatorProjectSummary?: string;
	GraphicalIndicatorSummary?: string;
	Id?: any;
	InternalName?: string;
	IsEditableInVisibility?: boolean;
	IsLeafOnly?: boolean;
	IsMultilineText?: boolean;
	IsRequired?: boolean;
	IsWorkflowControlled?: boolean;
	LookupAllowMultiSelect?: boolean;
	LookupDefaultValue?: any;
	LookupTableId?: any;
	Name?: string;
	RollsDownToAssignments?: boolean;
	RollupType?: number;
	ShowToolTip?: boolean;
	UseFieldForMatching?: boolean;
}

/*********************************************
* CustomFieldProps
**********************************************/
export interface CustomFieldProps {
	EntityType<T=PS.EntityType>(): IBaseExecution<T>;
	LookupEntries<T=PS.LookupEntry>(): IBaseCollection<T>;
	LookupTable<T=PS.LookupTable>(): IBaseExecution<T>;
}

/*********************************************
* CustomFieldMethods
**********************************************/
export interface CustomFieldMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupEntry
**********************************************/
export interface ILookupEntry extends LookupEntryProps,LookupEntryMethods,IBaseExecution<LookupEntry> {

}

/*********************************************
* LookupEntry
**********************************************/
export interface LookupEntry extends LookupEntryProps, LookupEntryMethods {
	AppAlternateId?: any;
	Description?: string;
	FullValue?: string;
	Id?: any;
	InternalName?: string;
	SortIndex?: number;
}

/*********************************************
* LookupEntryProps
**********************************************/
export interface LookupEntryProps {

}

/*********************************************
* LookupEntryMethods
**********************************************/
export interface LookupEntryMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupTable
**********************************************/
export interface ILookupTable extends LookupTableProps,LookupTableMethods,IBaseExecution<LookupTable> {

}

/*********************************************
* LookupTable
**********************************************/
export interface LookupTable extends LookupTableProps, LookupTableMethods {
	AppAlternateId?: any;
	FieldType?: number;
	Id?: any;
	Masks?: Array<PS.LookupMask>;
	Name?: string;
	SortOrder?: number;
}

/*********************************************
* LookupTableProps
**********************************************/
export interface LookupTableProps {
	Entries<T=PS.LookupEntry>(): IBaseCollection<T>;
}

/*********************************************
* LookupTableMethods
**********************************************/
export interface LookupTableMethods {
	addMask<T=any>(mask?: PS.LookupMask): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	updateMask<T=any>(mask?: PS.LookupMask, level?: number): IBaseExecution<T>;
}

/*********************************************
* ICalendarException
**********************************************/
export interface ICalendarException extends CalendarExceptionProps,CalendarExceptionMethods,IBaseExecution<CalendarException> {

}

/*********************************************
* CalendarException
**********************************************/
export interface CalendarException extends CalendarExceptionProps, CalendarExceptionMethods {
	Finish?: any;
	Id?: number;
	Name?: string;
	RecurrenceDays?: number;
	RecurrenceFrequency?: number;
	RecurrenceMonth?: number;
	RecurrenceMonthDay?: number;
	RecurrenceType?: number;
	RecurrenceWeek?: number;
	Shift1Finish?: number;
	Shift1Start?: number;
	Shift2Finish?: number;
	Shift2Start?: number;
	Shift3Finish?: number;
	Shift3Start?: number;
	Shift4Finish?: number;
	Shift4Start?: number;
	Shift5Finish?: number;
	Shift5Start?: number;
	Start?: any;
}

/*********************************************
* CalendarExceptionProps
**********************************************/
export interface CalendarExceptionProps {
	Calendar<T=PS.Calendar>(): IBaseExecution<T>;
}

/*********************************************
* CalendarExceptionMethods
**********************************************/
export interface CalendarExceptionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ICalendar
**********************************************/
export interface ICalendar extends CalendarProps,CalendarMethods,IBaseExecution<Calendar> {

}

/*********************************************
* Calendar
**********************************************/
export interface Calendar extends CalendarProps, CalendarMethods {
	Created?: any;
	Id?: any;
	IsStandardCalendar?: boolean;
	Modified?: any;
	Name?: string;
	OriginalId?: any;
}

/*********************************************
* CalendarProps
**********************************************/
export interface CalendarProps {
	BaseCalendarExceptions<T=PS.CalendarException>(): IBaseCollection<T>;
}

/*********************************************
* CalendarMethods
**********************************************/
export interface CalendarMethods {
	copyTo<T=PS.Calendar>(name?: string): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IBaseCalendarException
**********************************************/
export interface IBaseCalendarException extends BaseCalendarExceptionProps,BaseCalendarExceptionMethods,IBaseExecution<BaseCalendarException> {

}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException, BaseCalendarExceptionProps, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarExceptionProps
**********************************************/
export interface BaseCalendarExceptionProps {

}

/*********************************************
* BaseCalendarExceptionMethods
**********************************************/
export interface BaseCalendarExceptionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IDraftAssignment
**********************************************/
export interface IDraftAssignment extends DraftAssignmentProps,DraftAssignmentMethods,IBaseExecution<DraftAssignment> {

}

/*********************************************
* DraftAssignment
**********************************************/
export interface DraftAssignment extends PS.Assignment, DraftAssignmentProps, DraftAssignmentMethods {
	ActualCost?: number;
	ActualFinish?: any;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetedCost?: number;
	BudgetedWork?: string;
	BudgetedWorkMilliseconds?: number;
	BudgetedWorkTimeSpan?: any;
	Cost?: number;
	CostRateTable?: number;
	DefaultBookingType?: number;
	Delay?: string;
	DelayMilliseconds?: number;
	DelayTimeSpan?: any;
	IsLockedByManager?: boolean;
	IsWorkResource?: boolean;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	ResourceCapacity?: number;
	ResourceId?: any;
	TaskId?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* DraftAssignmentProps
**********************************************/
export interface DraftAssignmentProps {
	Owner<T=SP.User>(): IBaseExecution<T>;
	Parent<T=PS.DraftAssignment>(): IBaseExecution<T>;
	Resource<T=PS.DraftProjectResource>(): IBaseExecution<T>;
	Task<T=PS.DraftTask>(): IBaseExecution<T>;
}

/*********************************************
* DraftAssignmentMethods
**********************************************/
export interface DraftAssignmentMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IProjectResource
**********************************************/
export interface IProjectResource extends ProjectResourceProps,ProjectResourceMethods,IBaseExecution<ProjectResource> {

}

/*********************************************
* ProjectResource
**********************************************/
export interface ProjectResource extends ProjectResourceProps, ProjectResourceMethods {
	ActualCost?: number;
	ActualCostWorkPerformed?: string;
	ActualCostWorkPerformedMilliseconds?: number;
	ActualCostWorkPerformedTimeSpan?: any;
	ActualOvertimeCost?: number;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	AvailableFrom?: any;
	AvailableTo?: any;
	BaselineCost?: number;
	BaselineWork?: string;
	BaselineWorkMilliseconds?: number;
	BaselineWorkTimeSpan?: any;
	BudetCostWorkPerformed?: number;
	BudgetedCost?: number;
	BudgetedCostWorkScheduled?: number;
	BudgetedWork?: string;
	BudgetedWorkMilliseconds?: number;
	BudgetedWorkTimeSpan?: any;
	Cost?: number;
	CostVariance?: number;
	CostVarianceAtCompletion?: number;
	Created?: any;
	CurrentCostVariance?: number;
	Finish?: any;
	Id?: any;
	IsBudgeted?: boolean;
	IsGenericResource?: boolean;
	IsOverAllocated?: boolean;
	Modified?: any;
	Notes?: string;
	OvertimeCost?: number;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PeakWork?: string;
	PeakWorkMilliseconds?: number;
	PeakWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingCost?: number;
	RemainingOvertimeCost?: number;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	ScheduleCostVariance?: number;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
	WorkVariance?: string;
	WorkVarianceMilliseconds?: number;
	WorkVarianceTimeSpan?: any;
}

/*********************************************
* ProjectResourceProps
**********************************************/
export interface ProjectResourceProps {
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	EnterpriseResource<T=PS.EnterpriseResource>(): IBaseExecution<T>;
}

/*********************************************
* ProjectResourceMethods
**********************************************/
export interface ProjectResourceMethods {

}

/*********************************************
* IEnterpriseResource
**********************************************/
export interface IEnterpriseResource extends EnterpriseResourceProps,EnterpriseResourceMethods,IBaseExecution<EnterpriseResource> {

}

/*********************************************
* EnterpriseResource
**********************************************/
export interface EnterpriseResource extends EnterpriseResourceProps, EnterpriseResourceMethods {
	CanLevel?: boolean;
	Code?: string;
	CostAccrual?: number;
	CostCenter?: string;
	Created?: any;
	DefaultBookingType?: number;
	Email?: string;
	ExternalId?: string;
	Group?: string;
	HireDate?: any;
	HyperlinkName?: string;
	HyperlinkUrl?: string;
	Id?: any;
	Initials?: string;
	IsActive?: boolean;
	IsBudget?: boolean;
	IsCheckedOut?: boolean;
	IsGeneric?: boolean;
	IsTeam?: boolean;
	MaterialLabel?: string;
	Modified?: any;
	Name?: string;
	Phonetics?: string;
	RequiresEngagements?: boolean;
	ResourceIdentifier?: number;
	ResourceType?: number;
	TerminationDate?: any;
}

/*********************************************
* EnterpriseResourceProps
**********************************************/
export interface EnterpriseResourceProps {
	Assignments<T=PS.StatusAssignment>(): IBaseCollection<T>;
	BaseCalendar<T=PS.Calendar>(): IBaseExecution<T>;
	CostRateTables<T=PS.EnterpriseResourceCostRateTable>(): IBaseCollection<T>;
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	DefaultAssignmentOwner<T=SP.User>(): IBaseExecution<T>;
	Engagements<T=PS.ResourceEngagement>(): IBaseCollection<T>;
	UserPermissions<T=PS.UserPermission>(): IBaseCollection<T>;
	ResourceCalendarExceptions<T=PS.CalendarException>(): IBaseCollection<T>;
	Self<T=PS.EnterpriseResource>(): IBaseExecution<T>;
	TimesheetManager<T=SP.User>(): IBaseExecution<T>;
	User<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* EnterpriseResourceMethods
**********************************************/
export interface EnterpriseResourceMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	forceCheckIn<T=any>(): IBaseExecution<T>;
	updateClaimsAccount<T=any>(newClaimsAccount?: string): IBaseExecution<T>;
}

/*********************************************
* IStatusAssignment
**********************************************/
export interface IStatusAssignment extends StatusAssignmentProps,StatusAssignmentMethods,IBaseExecution<StatusAssignment> {

}

/*********************************************
* StatusAssignment
**********************************************/
export interface StatusAssignment extends StatusAssignmentProps, StatusAssignmentMethods {
	ActualFinish?: any;
	ActualOvertime?: string;
	ActualOvertimeMilliseconds?: number;
	ActualOvertimeTimeSpan?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	ApprovalStatus?: number;
	Comments?: string;
	Finish?: any;
	Id?: any;
	IsConfirmed?: boolean;
	Modified?: any;
	Name?: string;
	Overtime?: string;
	OvertimeMilliseconds?: number;
	OvertimeTimeSpan?: any;
	PercentComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingOvertime?: string;
	RemainingOvertimeMilliseconds?: number;
	RemainingOvertimeTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* StatusAssignmentProps
**********************************************/
export interface StatusAssignmentProps {
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	History<T=PS.StatusAssignmentHistoryLine>(): IBaseCollection<T>;
	Project<T=PS.PublishedProject>(): IBaseExecution<T>;
	Resource<T=PS.EnterpriseResource>(): IBaseExecution<T>;
	Task<T=PS.StatusTask>(): IBaseExecution<T>;
}

/*********************************************
* StatusAssignmentMethods
**********************************************/
export interface StatusAssignmentMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	submitStatusUpdates<T=any>(comment?: string): IBaseExecution<T>;
}

/*********************************************
* IStatusAssignmentHistoryLine
**********************************************/
export interface IStatusAssignmentHistoryLine extends StatusAssignmentHistoryLineProps,StatusAssignmentHistoryLineMethods,IBaseExecution<StatusAssignmentHistoryLine> {

}

/*********************************************
* StatusAssignmentHistoryLine
**********************************************/
export interface StatusAssignmentHistoryLine extends StatusAssignmentHistoryLineProps, StatusAssignmentHistoryLineMethods {
	Comment?: string;
	Decision?: number;
	Id?: any;
	Submitted?: any;
	UpdateType?: number;
}

/*********************************************
* StatusAssignmentHistoryLineProps
**********************************************/
export interface StatusAssignmentHistoryLineProps {
	Author<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* StatusAssignmentHistoryLineMethods
**********************************************/
export interface StatusAssignmentHistoryLineMethods {

}

/*********************************************
* IProject
**********************************************/
export interface IProject extends ProjectProps,ProjectMethods,IBaseExecution<Project> {

}

/*********************************************
* Project
**********************************************/
export interface Project extends ProjectProps, ProjectMethods {
	ApprovedEnd?: any;
	ApprovedStart?: any;
	CalculateActualCosts?: boolean;
	CalculatesActualCosts?: boolean;
	CheckedOutDate?: any;
	CheckOutDescription?: string;
	CheckOutId?: any;
	CreatedDate?: any;
	CriticalSlackLimit?: number;
	DefaultFinishTime?: any;
	DefaultOvertimeRateUnits?: number;
	DefaultStandardRateUnits?: number;
	DefaultStartTime?: any;
	HasMppPendingImport?: boolean;
	HonorConstraints?: boolean;
	Id?: any;
	IsCheckedOut?: boolean;
	LastPublishedDate?: any;
	LastSavedDate?: any;
	ListId?: any;
	MoveActualIfLater?: boolean;
	MoveActualToStatus?: boolean;
	MoveRemainingIfEarlier?: boolean;
	MoveRemainingToStatus?: boolean;
	MultipleCriticalPaths?: boolean;
	OptimizerDecision?: number;
	PercentComplete?: number;
	PlannerDecision?: number;
	ProjectSiteUrl?: string;
	ProjectType?: number;
	SplitInProgress?: boolean;
	SpreadActualCostsToStatus?: boolean;
	SpreadPercentCompleteToStatus?: boolean;
	SummaryTaskId?: any;
	TaskListId?: any;
	WebId?: any;
}

/*********************************************
* ProjectProps
**********************************************/
export interface ProjectProps {
	CheckedOutBy<T=SP.User>(): IBaseExecution<T>;
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	Engagements<T=PS.ProjectEngagement>(): IBaseCollection<T>;
	EnterpriseProjectType<T=PS.EnterpriseProjectType>(): IBaseExecution<T>;
	UserPermissions<T=PS.UserPermission>(): IBaseCollection<T>;
	Phase<T=PS.Phase>(): IBaseExecution<T>;
	ProjectSummaryTask<T=PS.ProjectSummaryTask>(): IBaseExecution<T>;
	QueueJobs<T=PS.QueueJob>(): IBaseCollection<T>;
	Stage<T=PS.Stage>(): IBaseExecution<T>;
}

/*********************************************
* ProjectMethods
**********************************************/
export interface ProjectMethods {
	getResourcePlanByUrl<T=PS.ResourcePlan>(start?: string, end?: string, scale?: string): IBaseExecution<T>;
	leaveProjectStage<T=any>(): IBaseExecution<T>;
	readyToLeaveProjectStage<T=number>(): IBaseExecution<T>;
	updateIdeaListItemStatus<T=any>(status?: string): IBaseExecution<T>;
}

/*********************************************
* IEngagement
**********************************************/
export interface IEngagement extends EngagementProps,EngagementMethods,IBaseExecution<Engagement> {

}

/*********************************************
* Engagement
**********************************************/
export interface Engagement extends EngagementProps, EngagementMethods {
	CreatedDate?: any;
	Description?: string;
	Id?: any;
	Modified?: any;
	ReviewedDate?: any;
	Status?: number;
	SubmittedDate?: any;
	TimephasedEditsOnly?: boolean;
}

/*********************************************
* EngagementProps
**********************************************/
export interface EngagementProps {
	Comments<T=PS.EngagementComment>(): IBaseCollection<T>;
	ModifiedBy<T=SP.User>(): IBaseExecution<T>;
	Project<T=PS.Project>(): IBaseExecution<T>;
	Resource<T=PS.EnterpriseResource>(): IBaseExecution<T>;
	ReviewedBy<T=SP.User>(): IBaseExecution<T>;
	SubmittedBy<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* EngagementMethods
**********************************************/
export interface EngagementMethods {

}

/*********************************************
* IEngagementComment
**********************************************/
export interface IEngagementComment extends EngagementCommentProps,EngagementCommentMethods,IBaseExecution<EngagementComment> {

}

/*********************************************
* EngagementComment
**********************************************/
export interface EngagementComment extends EngagementCommentProps, EngagementCommentMethods {
	Created?: any;
	Id?: any;
	Message?: string;
}

/*********************************************
* EngagementCommentProps
**********************************************/
export interface EngagementCommentProps {
	Author<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* EngagementCommentMethods
**********************************************/
export interface EngagementCommentMethods {

}

/*********************************************
* IProjectEngagement
**********************************************/
export interface IProjectEngagement extends ProjectEngagementProps,ProjectEngagementMethods,IBaseExecution<ProjectEngagement> {

}

/*********************************************
* ProjectEngagement
**********************************************/
export interface ProjectEngagement extends PS.Engagement, ProjectEngagementProps, ProjectEngagementMethods {
	ApprovedFinish?: any;
	ApprovedMaxUnits?: number;
	ApprovedStart?: any;
	ApprovedWork?: string;
	ApprovedWorkMilliseconds?: number;
	ApprovedWorkTimeSpan?: any;
	HasUnsubmittedChanges?: boolean;
	RequestedFinish?: any;
	RequestedMaxUnits?: number;
	RequestedStart?: any;
	RequestedWork?: string;
	RequestedWorkMilliseconds?: number;
	RequestedWorkTimeSpan?: any;
}

/*********************************************
* ProjectEngagementProps
**********************************************/
export interface ProjectEngagementProps {

}

/*********************************************
* ProjectEngagementMethods
**********************************************/
export interface ProjectEngagementMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	getTimephasedByUrl<T=Array<PS.ProjectEngagementTimephasedPeriod>>(start?: string, end?: string, scale?: string, contourType?: string): IBaseExecution<T>;
}

/*********************************************
* IEnterpriseProjectType
**********************************************/
export interface IEnterpriseProjectType extends EnterpriseProjectTypeProps,EnterpriseProjectTypeMethods,IBaseExecution<EnterpriseProjectType> {

}

/*********************************************
* EnterpriseProjectType
**********************************************/
export interface EnterpriseProjectType extends EnterpriseProjectTypeProps, EnterpriseProjectTypeMethods {
	Departments?: Array<any>;
	Description?: string;
	Id?: any;
	ImageUrl?: string;
	IsDefault?: boolean;
	IsManaged?: boolean;
	Name?: string;
	Order?: number;
	PermissionSyncEnable?: boolean;
	ProjectPlanTemplateId?: any;
	SiteCreationOption?: number;
	SiteCreationURL?: string;
	TaskListSyncEnable?: boolean;
	WorkflowAssociationId?: any;
	WorkflowAssociationName?: string;
	WorkspaceTemplateLCID?: number;
	WorkspaceTemplateName?: string;
}

/*********************************************
* EnterpriseProjectTypeProps
**********************************************/
export interface EnterpriseProjectTypeProps {
	ProjectDetailPages<T=PS.ProjectDetailPage>(): IBaseCollection<T>;
}

/*********************************************
* EnterpriseProjectTypeMethods
**********************************************/
export interface EnterpriseProjectTypeMethods {
	addDepartment<T=any>(departmentValueGuid?: any): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	removeDepartment<T=any>(departmentValueGuid?: any): IBaseExecution<T>;
	updateCreatePDP<T=any>(pdp?: PS.ProjectDetailPageCreationInformation): IBaseExecution<T>;
}

/*********************************************
* IProjectDetailPage
**********************************************/
export interface IProjectDetailPage extends ProjectDetailPageProps,ProjectDetailPageMethods,IBaseExecution<ProjectDetailPage> {

}

/*********************************************
* ProjectDetailPage
**********************************************/
export interface ProjectDetailPage extends ProjectDetailPageProps, ProjectDetailPageMethods {
	Id?: any;
	Name?: string;
	PageType?: number;
}

/*********************************************
* ProjectDetailPageProps
**********************************************/
export interface ProjectDetailPageProps {
	Item<T=SP.ListItem>(): IBaseExecution<T>;
}

/*********************************************
* ProjectDetailPageMethods
**********************************************/
export interface ProjectDetailPageMethods {

}

/*********************************************
* UserPermission
**********************************************/
export interface UserPermission {
	HasPermission?: boolean;
	Permission?: string;
}

/*********************************************
* IPhase
**********************************************/
export interface IPhase extends PhaseProps,PhaseMethods,IBaseExecution<Phase> {

}

/*********************************************
* Phase
**********************************************/
export interface Phase extends PhaseProps, PhaseMethods {
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* PhaseProps
**********************************************/
export interface PhaseProps {
	Stages<T=PS.Stage>(): IBaseCollection<T>;
}

/*********************************************
* PhaseMethods
**********************************************/
export interface PhaseMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IStage
**********************************************/
export interface IStage extends StageProps,StageMethods,IBaseExecution<Stage> {

}

/*********************************************
* Stage
**********************************************/
export interface Stage extends StageProps, StageMethods {
	Behavior?: number;
	CheckInRequired?: boolean;
	Description?: string;
	Id?: any;
	Name?: string;
	SubmitDescription?: string;
}

/*********************************************
* StageProps
**********************************************/
export interface StageProps {
	CustomFields<T=PS.StageCustomField>(): IBaseCollection<T>;
	Phase<T=PS.Phase>(): IBaseExecution<T>;
	ProjectDetailPages<T=PS.StageDetailPage>(): IBaseCollection<T>;
	WorkflowStatusPage<T=PS.ProjectDetailPage>(): IBaseExecution<T>;
}

/*********************************************
* StageMethods
**********************************************/
export interface StageMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IStageCustomField
**********************************************/
export interface IStageCustomField extends StageCustomFieldProps,StageCustomFieldMethods,IBaseExecution<StageCustomField> {

}

/*********************************************
* StageCustomField
**********************************************/
export interface StageCustomField extends StageCustomFieldProps, StageCustomFieldMethods {
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageCustomFieldProps
**********************************************/
export interface StageCustomFieldProps {
	Stage<T=PS.Stage>(): IBaseExecution<T>;
}

/*********************************************
* StageCustomFieldMethods
**********************************************/
export interface StageCustomFieldMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IStageDetailPage
**********************************************/
export interface IStageDetailPage extends StageDetailPageProps,StageDetailPageMethods,IBaseExecution<StageDetailPage> {

}

/*********************************************
* StageDetailPage
**********************************************/
export interface StageDetailPage extends StageDetailPageProps, StageDetailPageMethods {
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* StageDetailPageProps
**********************************************/
export interface StageDetailPageProps {
	Page<T=PS.ProjectDetailPage>(): IBaseExecution<T>;
	Stage<T=PS.Stage>(): IBaseExecution<T>;
}

/*********************************************
* StageDetailPageMethods
**********************************************/
export interface StageDetailPageMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ITask
**********************************************/
export interface ITask extends TaskProps,TaskMethods,IBaseExecution<Task> {

}

/*********************************************
* Task
**********************************************/
export interface Task extends TaskProps, TaskMethods {
	ActualCostWorkPerformed?: number;
	ActualDuration?: string;
	ActualDurationMilliseconds?: number;
	ActualDurationTimeSpan?: any;
	ActualOvertimeCost?: number;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	BaselineCost?: number;
	BaselineDuration?: string;
	BaselineDurationMilliseconds?: number;
	BaselineDurationTimeSpan?: any;
	BaselineFinish?: any;
	BaselineStart?: any;
	BaselineWork?: string;
	BaselineWorkMilliseconds?: number;
	BaselineWorkTimeSpan?: any;
	BudgetCost?: number;
	BudgetedCostWorkPerformed?: number;
	BudgetedCostWorkScheduled?: number;
	Contact?: string;
	CostPerformanceIndex?: number;
	CostVariance?: number;
	CostVarianceAtCompletion?: number;
	CostVariancePercentage?: number;
	Created?: any;
	CurrentCostVariance?: number;
	DurationVariance?: string;
	DurationVarianceMilliseconds?: number;
	DurationVarianceTimeSpan?: any;
	EarliestFinish?: any;
	EarliestStart?: any;
	EstimateAtCompletion?: number;
	FinishSlack?: string;
	FinishSlackMilliseconds?: number;
	FinishSlackTimeSpan?: any;
	FinishVariance?: string;
	FinishVarianceMilliseconds?: number;
	FinishVarianceTimeSpan?: any;
	FixedCostAccrual?: number;
	FreeSlack?: string;
	FreeSlackMilliseconds?: number;
	FreeSlackTimeSpan?: any;
	Id?: any;
	IgnoreResourceCalendar?: boolean;
	IsCritical?: boolean;
	IsExternalTask?: boolean;
	IsOverAllocated?: boolean;
	IsRecurring?: boolean;
	IsRecurringSummary?: boolean;
	IsRolledUp?: boolean;
	IsSubProject?: boolean;
	IsSubProjectReadOnly?: boolean;
	IsSubProjectScheduledFromFinish?: boolean;
	IsSummary?: boolean;
	LatestFinish?: any;
	LatestStart?: any;
	LevelingDelay?: string;
	LevelingDelayMilliseconds?: number;
	LevelingDelayTimeSpan?: any;
	Modified?: any;
	Notes?: string;
	OutlinePosition?: string;
	OvertimeCost?: number;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	PreLevelingFinish?: any;
	PreLevelingStart?: any;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingCost?: number;
	RemainingOvertimeCost?: number;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	Resume?: any;
	ScheduleCostVariance?: number;
	ScheduledDuration?: string;
	ScheduledDurationMilliseconds?: number;
	ScheduledDurationTimeSpan?: any;
	ScheduledFinish?: any;
	ScheduledStart?: any;
	SchedulePerformanceIndex?: number;
	ScheduleVariancePercentage?: number;
	StartSlack?: string;
	StartSlackMilliseconds?: number;
	StartSlackTimeSpan?: any;
	StartVariance?: string;
	StartVarianceMilliseconds?: number;
	StartVarianceTimeSpan?: any;
	Stop?: any;
	ToCompletePerformanceIndex?: number;
	TotalSlack?: string;
	TotalSlackMilliseconds?: number;
	TotalSlackTimeSpan?: any;
	WorkBreakdownStructure?: string;
	WorkVariance?: string;
	WorkVarianceMilliseconds?: number;
	WorkVarianceTimeSpan?: any;
}

/*********************************************
* TaskProps
**********************************************/
export interface TaskProps {
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	SubProject<T=PS.PublishedProject>(): IBaseExecution<T>;
}

/*********************************************
* TaskMethods
**********************************************/
export interface TaskMethods {

}

/*********************************************
* IPublishedProject
**********************************************/
export interface IPublishedProject extends PublishedProjectProps,PublishedProjectMethods,IBaseExecution<PublishedProject> {

}

/*********************************************
* PublishedProject
**********************************************/
export interface PublishedProject extends PS.Project, PublishedProjectProps, PublishedProjectMethods {
	CurrencyCode?: string;
	CurrencyDigits?: number;
	CurrencyPosition?: number;
	CurrencySymbol?: string;
	CurrentDate?: any;
	DaysPerMonth?: number;
	DefaultEffortDriven?: boolean;
	DefaultEstimatedDuration?: boolean;
	DefaultFixedCostAccrual?: number;
	DefaultOvertimeRate?: number;
	DefaultStandardRate?: number;
	DefaultTaskType?: number;
	DefaultWorkFormat?: number;
	Description?: string;
	EnterpriseProjectTypeId?: any;
	FinishDate?: any;
	FiscalYearStartMonth?: number;
	IsEnterpriseProject?: boolean;
	MinutesPerDay?: number;
	MinutesPerWeek?: number;
	Name?: string;
	NewTasksAreManual?: boolean;
	NumberFiscalYearFromStart?: boolean;
	OwnerId?: string;
	ProjectIdentifier?: string;
	ProtectedActualsSynch?: boolean;
	ScheduledFromStart?: boolean;
	ShowEstimatedDurations?: boolean;
	StartDate?: any;
	StatusDate?: any;
	TrackingMode?: number;
	UtilizationDate?: any;
	UtilizationType?: number;
	WeekStartDay?: number;
	WinprojVersion?: number;
}

/*********************************************
* PublishedProjectProps
**********************************************/
export interface PublishedProjectProps {
	Assignments<T=PS.PublishedAssignment>(): IBaseCollection<T>;
	Calendar<T=PS.Calendar>(): IBaseExecution<T>;
	Draft<T=PS.DraftProject>(): IBaseExecution<T>;
	EntityLinks<T=PS.EntityLink>(): IBaseCollection<T>;
	IncludeCustomFields<T=PS.PublishedProject>(): IBaseExecution<T>;
	Owner<T=SP.User>(): IBaseExecution<T>;
	ProjectResources<T=PS.PublishedProjectResource>(): IBaseCollection<T>;
	ProjectWorkflowInstance<T=PS.ProjectWorkflowInstance>(): IBaseExecution<T>;
	TaskLinks<T=PS.PublishedTaskLink>(): IBaseCollection<T>;
	Tasks<T=PS.PublishedTask>(): IBaseCollection<T>;
}

/*********************************************
* PublishedProjectMethods
**********************************************/
export interface PublishedProjectMethods {
	getResourcePlanByUrl<T=PS.ResourcePlan>(start?: string, end?: string, scale?: string): IBaseExecution<T>;
	leaveProjectStage<T=any>(): IBaseExecution<T>;
	readyToLeaveProjectStage<T=number>(): IBaseExecution<T>;
	updateIdeaListItemStatus<T=any>(status?: string): IBaseExecution<T>;
	checkOut<T=PS.DraftProject>(): IBaseExecution<T>;
	createProjectSite<T=any>(siteName?: string): IBaseExecution<T>;
	deleteObject<T=PS.QueueJob>(): IBaseExecution<T>;
	submitToWorkflow<T=any>(): IBaseExecution<T>;
	updateVisibilityCustomFields<T=PS.QueueJob>(): IBaseExecution<T>;
}

/*********************************************
* IPublishedAssignment
**********************************************/
export interface IPublishedAssignment extends PublishedAssignmentProps,PublishedAssignmentMethods,IBaseExecution<PublishedAssignment> {

}

/*********************************************
* PublishedAssignment
**********************************************/
export interface PublishedAssignment extends PS.Assignment, PublishedAssignmentProps, PublishedAssignmentMethods {
	ActualCost?: number;
	ActualFinish?: any;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetedCost?: number;
	BudgetedWork?: string;
	BudgetedWorkMilliseconds?: number;
	BudgetedWorkTimeSpan?: any;
	Cost?: number;
	CostRateTable?: number;
	DefaultBookingType?: number;
	Delay?: string;
	DelayMilliseconds?: number;
	DelayTimeSpan?: any;
	IsLockedByManager?: boolean;
	IsWorkResource?: boolean;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	ResourceCapacity?: number;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* PublishedAssignmentProps
**********************************************/
export interface PublishedAssignmentProps {
	Owner<T=SP.User>(): IBaseExecution<T>;
	Parent<T=PS.PublishedAssignment>(): IBaseExecution<T>;
	Resource<T=PS.PublishedProjectResource>(): IBaseExecution<T>;
	Task<T=PS.PublishedTask>(): IBaseExecution<T>;
}

/*********************************************
* PublishedAssignmentMethods
**********************************************/
export interface PublishedAssignmentMethods {

}

/*********************************************
* IPublishedProjectResource
**********************************************/
export interface IPublishedProjectResource extends PublishedProjectResourceProps,PublishedProjectResourceMethods,IBaseExecution<PublishedProjectResource> {

}

/*********************************************
* PublishedProjectResource
**********************************************/
export interface PublishedProjectResource extends PS.ProjectResource, PublishedProjectResourceProps, PublishedProjectResourceMethods {
	CanLevel?: boolean;
	Code?: string;
	CostAccrual?: number;
	CostCenter?: string;
	CostPerUse?: number;
	DefaultBookingType?: number;
	Email?: string;
	Group?: string;
	Initials?: string;
	MaterialLabel?: string;
	MaximumCapacity?: number;
	Name?: string;
	OvertimeRate?: number;
	OvertimeRateUnits?: number;
	Phonetics?: string;
	StandardRate?: number;
	StandardRateUnits?: number;
}

/*********************************************
* PublishedProjectResourceProps
**********************************************/
export interface PublishedProjectResourceProps {
	Assignments<T=PS.PublishedAssignment>(): IBaseCollection<T>;
	DefaultAssignmentOwner<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* PublishedProjectResourceMethods
**********************************************/
export interface PublishedProjectResourceMethods {

}

/*********************************************
* IPublishedTask
**********************************************/
export interface IPublishedTask extends PublishedTaskProps,PublishedTaskMethods,IBaseExecution<PublishedTask> {

}

/*********************************************
* PublishedTask
**********************************************/
export interface PublishedTask extends PS.Task, PublishedTaskProps, PublishedTaskMethods {
	ActualCost?: number;
	ActualFinish?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetWork?: string;
	BudgetWorkMilliseconds?: number;
	BudgetWorkTimeSpan?: any;
	Completion?: any;
	ConstraintStartEnd?: any;
	ConstraintType?: number;
	Cost?: number;
	Deadline?: any;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	FinishText?: string;
	FixedCost?: number;
	IsActive?: boolean;
	IsEffortDriven?: boolean;
	IsLockedByManager?: boolean;
	IsManual?: boolean;
	IsMarked?: boolean;
	IsMilestone?: boolean;
	LevelingAdjustsAssignments?: boolean;
	LevelingCanSplit?: boolean;
	Name?: string;
	OutlineLevel?: number;
	PercentComplete?: number;
	PercentPhysicalWorkComplete?: number;
	Priority?: number;
	RemainingDuration?: string;
	RemainingDurationMilliseconds?: number;
	RemainingDurationTimeSpan?: any;
	Start?: any;
	StartText?: string;
	TaskType?: number;
	UsePercentPhysicalWorkComplete?: boolean;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* PublishedTaskProps
**********************************************/
export interface PublishedTaskProps {
	Assignments<T=PS.PublishedAssignment>(): IBaseCollection<T>;
	Calendar<T=PS.Calendar>(): IBaseExecution<T>;
	EntityLinks<T=PS.EntityLink>(): IBaseCollection<T>;
	Parent<T=PS.PublishedTask>(): IBaseExecution<T>;
	Predecessors<T=PS.PublishedTaskLink>(): IBaseCollection<T>;
	StatusManager<T=SP.User>(): IBaseExecution<T>;
	Successors<T=PS.PublishedTaskLink>(): IBaseCollection<T>;
	TaskPlanLink<T=PS.TaskPlanLink>(): IBaseExecution<T>;
}

/*********************************************
* PublishedTaskMethods
**********************************************/
export interface PublishedTaskMethods {
	addTaskPlanLink<T=PS.TaskPlanLink>(parameters?: PS.TaskPlanLinksCreationInformation): IBaseExecution<T>;
	deleteTaskPlanLink<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IEntityLink
**********************************************/
export interface IEntityLink extends EntityLinkProps,EntityLinkMethods,IBaseExecution<EntityLink> {

}

/*********************************************
* EntityLink
**********************************************/
export interface EntityLink extends EntityLinkProps, EntityLinkMethods {
	Created?: any;
	EntityLinkType?: number;
	Id?: any;
	Label?: string;
	Url?: string;
}

/*********************************************
* EntityLinkProps
**********************************************/
export interface EntityLinkProps {

}

/*********************************************
* EntityLinkMethods
**********************************************/
export interface EntityLinkMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* TaskLink
**********************************************/
export interface TaskLink {
	Id?: any;
}

/*********************************************
* IPublishedTaskLink
**********************************************/
export interface IPublishedTaskLink extends PublishedTaskLinkProps,PublishedTaskLinkMethods,IBaseExecution<PublishedTaskLink> {

}

/*********************************************
* PublishedTaskLink
**********************************************/
export interface PublishedTaskLink extends PS.TaskLink, PublishedTaskLinkProps, PublishedTaskLinkMethods {
	DependencyType?: number;
}

/*********************************************
* PublishedTaskLinkProps
**********************************************/
export interface PublishedTaskLinkProps {
	End<T=PS.PublishedTask>(): IBaseExecution<T>;
	Start<T=PS.PublishedTask>(): IBaseExecution<T>;
}

/*********************************************
* PublishedTaskLinkMethods
**********************************************/
export interface PublishedTaskLinkMethods {

}

/*********************************************
* ITaskPlanLink
**********************************************/
export interface ITaskPlanLink extends TaskPlanLinkProps,TaskPlanLinkMethods,IBaseExecution<TaskPlanLink> {

}

/*********************************************
* TaskPlanLink
**********************************************/
export interface TaskPlanLink extends TaskPlanLinkProps, TaskPlanLinkMethods {
	Created?: any;
	GroupId?: any;
	Id?: string;
	PlanId?: string;
	ProjectId?: any;
	TaskId?: any;
}

/*********************************************
* TaskPlanLinkProps
**********************************************/
export interface TaskPlanLinkProps {

}

/*********************************************
* TaskPlanLinkMethods
**********************************************/
export interface TaskPlanLinkMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IDraftProject
**********************************************/
export interface IDraftProject extends DraftProjectProps,DraftProjectMethods,IBaseExecution<DraftProject> {

}

/*********************************************
* DraftProject
**********************************************/
export interface DraftProject extends PS.Project, DraftProjectProps, DraftProjectMethods {
	CurrencyCode?: string;
	CurrencyDigits?: number;
	CurrencyPosition?: number;
	CurrencySymbol?: string;
	CurrentDate?: any;
	DaysPerMonth?: number;
	DefaultEffortDriven?: boolean;
	DefaultEstimatedDuration?: boolean;
	DefaultFixedCostAccrual?: number;
	DefaultOvertimeRate?: number;
	DefaultStandardRate?: number;
	DefaultTaskType?: number;
	DefaultWorkFormat?: number;
	Description?: string;
	FinishDate?: any;
	FiscalYearStartMonth?: number;
	MinutesPerDay?: number;
	MinutesPerWeek?: number;
	Name?: string;
	NewTasksAreManual?: boolean;
	NumberFiscalYearFromStart?: boolean;
	OwnerId?: string;
	ProjectIdentifier?: string;
	ProtectedActualsSynch?: boolean;
	ScheduledFromStart?: boolean;
	ShowEstimatedDurations?: boolean;
	StartDate?: any;
	StatusDate?: any;
	TrackingMode?: number;
	UtilizationDate?: any;
	UtilizationType?: number;
	WeekStartDay?: number;
	WinprojVersion?: number;
}

/*********************************************
* DraftProjectProps
**********************************************/
export interface DraftProjectProps {
	Assignments<T=PS.DraftAssignment>(): IBaseCollection<T>;
	Calendar<T=PS.Calendar>(): IBaseExecution<T>;
	IncludeCustomFields<T=PS.DraftProject>(): IBaseExecution<T>;
	Owner<T=SP.User>(): IBaseExecution<T>;
	ProjectResources<T=PS.DraftProjectResource>(): IBaseCollection<T>;
	TaskLinks<T=PS.DraftTaskLink>(): IBaseCollection<T>;
	Tasks<T=PS.DraftTask>(): IBaseCollection<T>;
}

/*********************************************
* DraftProjectMethods
**********************************************/
export interface DraftProjectMethods {
	getResourcePlanByUrl<T=PS.ResourcePlan>(start?: string, end?: string, scale?: string): IBaseExecution<T>;
	leaveProjectStage<T=any>(): IBaseExecution<T>;
	readyToLeaveProjectStage<T=number>(): IBaseExecution<T>;
	updateIdeaListItemStatus<T=any>(status?: string): IBaseExecution<T>;
	changeEnterpriseProjectType<T=any>(enterpriseProjectTypeUid?: any): IBaseExecution<T>;
	checkIn<T=PS.QueueJob>(force?: boolean): IBaseExecution<T>;
	getChanges<T=PS.DraftProject>(token?: string): IBaseExecution<T>;
	publish<T=PS.QueueJob>(checkIn?: boolean): IBaseExecution<T>;
	update<T=PS.QueueJob>(): IBaseExecution<T>;
	updateCustomFields<T=PS.QueueJob>(customFieldDictionary?: Array<SP.KeyValue>): IBaseExecution<T>;
	validate<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IDraftProjectResource
**********************************************/
export interface IDraftProjectResource extends DraftProjectResourceProps,DraftProjectResourceMethods,IBaseExecution<DraftProjectResource> {

}

/*********************************************
* DraftProjectResource
**********************************************/
export interface DraftProjectResource extends PS.ProjectResource, DraftProjectResourceProps, DraftProjectResourceMethods {
	CanLevel?: boolean;
	Code?: string;
	CostAccrual?: number;
	CostCenter?: string;
	CostPerUse?: number;
	DefaultBookingType?: number;
	Email?: string;
	Group?: string;
	Initials?: string;
	MaterialLabel?: string;
	MaximumCapacity?: number;
	Name?: string;
	OvertimeRate?: number;
	OvertimeRateUnits?: number;
	Phonetics?: string;
	StandardRate?: number;
	StandardRateUnits?: number;
}

/*********************************************
* DraftProjectResourceProps
**********************************************/
export interface DraftProjectResourceProps {
	Assignments<T=PS.DraftAssignment>(): IBaseCollection<T>;
	DefaultAssignmentOwner<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* DraftProjectResourceMethods
**********************************************/
export interface DraftProjectResourceMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IDraftTaskLink
**********************************************/
export interface IDraftTaskLink extends DraftTaskLinkProps,DraftTaskLinkMethods,IBaseExecution<DraftTaskLink> {

}

/*********************************************
* DraftTaskLink
**********************************************/
export interface DraftTaskLink extends PS.TaskLink, DraftTaskLinkProps, DraftTaskLinkMethods {
	DependencyType?: number;
	EndId?: any;
	StartId?: any;
}

/*********************************************
* DraftTaskLinkProps
**********************************************/
export interface DraftTaskLinkProps {
	End<T=PS.DraftTask>(): IBaseExecution<T>;
	Start<T=PS.DraftTask>(): IBaseExecution<T>;
}

/*********************************************
* DraftTaskLinkMethods
**********************************************/
export interface DraftTaskLinkMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IDraftTask
**********************************************/
export interface IDraftTask extends DraftTaskProps,DraftTaskMethods,IBaseExecution<DraftTask> {

}

/*********************************************
* DraftTask
**********************************************/
export interface DraftTask extends PS.Task, DraftTaskProps, DraftTaskMethods {
	ActualCost?: number;
	ActualFinish?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	AddAfterId?: any;
	BudgetWork?: string;
	BudgetWorkMilliseconds?: number;
	BudgetWorkTimeSpan?: any;
	Completion?: any;
	ConstraintStartEnd?: any;
	ConstraintType?: number;
	Cost?: number;
	Deadline?: any;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	FinishText?: string;
	FixedCost?: number;
	IsActive?: boolean;
	IsEffortDriven?: boolean;
	IsLockedByManager?: boolean;
	IsManual?: boolean;
	IsMarked?: boolean;
	IsMilestone?: boolean;
	LevelingAdjustsAssignments?: boolean;
	LevelingCanSplit?: boolean;
	Name?: string;
	OutlineLevel?: number;
	ParentId?: any;
	PercentComplete?: number;
	PercentPhysicalWorkComplete?: number;
	Priority?: number;
	RemainingDuration?: string;
	RemainingDurationMilliseconds?: number;
	RemainingDurationTimeSpan?: any;
	Start?: any;
	StartText?: string;
	TaskType?: number;
	UsePercentPhysicalWorkComplete?: boolean;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* DraftTaskProps
**********************************************/
export interface DraftTaskProps {
	Assignments<T=PS.DraftAssignment>(): IBaseCollection<T>;
	Calendar<T=PS.Calendar>(): IBaseExecution<T>;
	Parent<T=PS.DraftTask>(): IBaseExecution<T>;
	Predecessors<T=PS.DraftTaskLink>(): IBaseCollection<T>;
	StatusManager<T=SP.User>(): IBaseExecution<T>;
	Successors<T=PS.DraftTaskLink>(): IBaseCollection<T>;
}

/*********************************************
* DraftTaskMethods
**********************************************/
export interface DraftTaskMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IProjectWorkflowInstance
**********************************************/
export interface IProjectWorkflowInstance extends ProjectWorkflowInstanceProps,ProjectWorkflowInstanceMethods,IBaseExecution<ProjectWorkflowInstance> {

}

/*********************************************
* ProjectWorkflowInstance
**********************************************/
export interface ProjectWorkflowInstance extends ProjectWorkflowInstanceProps, ProjectWorkflowInstanceMethods {
	CreatedDate?: any;
	Id?: any;
	LastSubmittedDate?: any;
	WorkflowError?: string;
	WorkflowErrorResponseCode?: number;
	WorkflowState?: number;
}

/*********************************************
* ProjectWorkflowInstanceProps
**********************************************/
export interface ProjectWorkflowInstanceProps {
	Project<T=PS.Project>(): IBaseExecution<T>;
	WorkflowInstance<T=SP.WorkflowServices.WorkflowInstance>(): IBaseExecution<T>;
	WorkflowInstanceOwner<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* ProjectWorkflowInstanceMethods
**********************************************/
export interface ProjectWorkflowInstanceMethods {
	restartWorkflow<T=SP.WorkflowServices.WorkflowInstance>(): IBaseExecution<T>;
	restartWorkflowSkipToStage<T=SP.WorkflowServices.WorkflowInstance>(stageId?: any): IBaseExecution<T>;
}

/*********************************************
* ProjectSummaryTask
**********************************************/
export interface ProjectSummaryTask extends PS.Task {
	ActualCost?: number;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetWork?: string;
	BudgetWorkMilliseconds?: number;
	BudgetWorkTimeSpan?: any;
	Cost?: number;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	FinishText?: string;
	Name?: string;
	PercentComplete?: number;
	Priority?: number;
	Start?: any;
	StartText?: string;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* IQueueJob
**********************************************/
export interface IQueueJob extends QueueJobProps,QueueJobMethods,IBaseExecution<QueueJob> {

}

/*********************************************
* QueueJob
**********************************************/
export interface QueueJob extends QueueJobProps, QueueJobMethods {
	Id?: any;
	JobState?: number;
	MessageType?: number;
	PercentComplete?: number;
	WaitMilliseconds?: number;
	WaitTime?: any;
}

/*********************************************
* QueueJobProps
**********************************************/
export interface QueueJobProps {
	Project<T=PS.Project>(): IBaseExecution<T>;
	Submitter<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* QueueJobMethods
**********************************************/
export interface QueueJobMethods {
	cancel<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IStatusTask
**********************************************/
export interface IStatusTask extends StatusTaskProps,StatusTaskMethods,IBaseExecution<StatusTask> {

}

/*********************************************
* StatusTask
**********************************************/
export interface StatusTask extends StatusTaskProps, StatusTaskMethods {
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	Deadline?: any;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	Id?: any;
	Name?: string;
	Overtime?: string;
	OvertimeMilliseconds?: number;
	OvertimeTimeSpan?: any;
	PercentComplete?: number;
	PercentWorkComplete?: number;
	PhysicalPercentComplete?: number;
	ProjectTaskId?: any;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingDuration?: string;
	RemainingDurationMilliseconds?: number;
	RemainingDurationTimeSpan?: any;
	RemainingOvertime?: string;
	RemainingOvertimeMilliseconds?: number;
	RemainingOvertimeTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	Resume?: any;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* StatusTaskProps
**********************************************/
export interface StatusTaskProps {
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	StatusManager<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* StatusTaskMethods
**********************************************/
export interface StatusTaskMethods {

}

/*********************************************
* IEnterpriseResourceCostRateTable
**********************************************/
export interface IEnterpriseResourceCostRateTable extends EnterpriseResourceCostRateTableProps,EnterpriseResourceCostRateTableMethods,IBaseExecution<EnterpriseResourceCostRateTable> {

}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable extends EnterpriseResourceCostRateTableProps, EnterpriseResourceCostRateTableMethods {
	Name?: number;
}

/*********************************************
* EnterpriseResourceCostRateTableProps
**********************************************/
export interface EnterpriseResourceCostRateTableProps {
	CostRates<T=PS.EnterpriseResourceCostRate>(): IBaseCollection<T>;
}

/*********************************************
* EnterpriseResourceCostRateTableMethods
**********************************************/
export interface EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* IEnterpriseResourceCostRate
**********************************************/
export interface IEnterpriseResourceCostRate extends EnterpriseResourceCostRateProps,EnterpriseResourceCostRateMethods,IBaseExecution<EnterpriseResourceCostRate> {

}

/*********************************************
* EnterpriseResourceCostRate
**********************************************/
export interface EnterpriseResourceCostRate extends EnterpriseResourceCostRateProps, EnterpriseResourceCostRateMethods {
	CostPerUse?: number;
	EffectiveStarting?: any;
	EffectiveUntil?: any;
	OvertimeRate?: number;
	StandardRate?: number;
}

/*********************************************
* EnterpriseResourceCostRateProps
**********************************************/
export interface EnterpriseResourceCostRateProps {

}

/*********************************************
* EnterpriseResourceCostRateMethods
**********************************************/
export interface EnterpriseResourceCostRateMethods {
	restfulDelete<T=any>(): IBaseExecution<T>;
	rESTfulUpdate<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IResourceEngagement
**********************************************/
export interface IResourceEngagement extends ResourceEngagementProps,ResourceEngagementMethods,IBaseExecution<ResourceEngagement> {

}

/*********************************************
* ResourceEngagement
**********************************************/
export interface ResourceEngagement extends PS.Engagement, ResourceEngagementProps, ResourceEngagementMethods {
	ApprovedFinish?: any;
	ApprovedMaxUnits?: number;
	ApprovedStart?: any;
	ApprovedWork?: string;
	ApprovedWorkMilliseconds?: number;
	ApprovedWorkTimeSpan?: any;
	RequestedFinish?: any;
	RequestedMaxUnits?: number;
	RequestedStart?: any;
	RequestedWork?: string;
	RequestedWorkMilliseconds?: number;
	RequestedWorkTimeSpan?: any;
}

/*********************************************
* ResourceEngagementProps
**********************************************/
export interface ResourceEngagementProps {

}

/*********************************************
* ResourceEngagementMethods
**********************************************/
export interface ResourceEngagementMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	getTimephasedByUrl<T=Array<PS.ResourceEngagementTimephasedPeriod>>(start?: string, end?: string, scale?: string, contourType?: string): IBaseExecution<T>;
}

/*********************************************
* DeletedPublishedAssignment
**********************************************/
export interface DeletedPublishedAssignment {
	DeletedDate?: any;
	Id?: any;
	ProjectId?: any;
}

/*********************************************
* EngagementTimephasedPeriod
**********************************************/
export interface EngagementTimephasedPeriod {
	End?: any;
	MaxUnits?: number;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* IEntityTypes
**********************************************/
export interface IEntityTypes extends EntityTypesProps,EntityTypesMethods,IBaseExecution<EntityTypes> {

}

/*********************************************
* EntityTypes
**********************************************/
export interface EntityTypes extends EntityTypesProps, EntityTypesMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityTypesProps
**********************************************/
export interface EntityTypesProps {
	AssignmentEntity<T=PS.EntityType>(): IBaseExecution<T>;
	ProjectEntity<T=PS.EntityType>(): IBaseExecution<T>;
	ResourceEntity<T=PS.EntityType>(): IBaseExecution<T>;
	TaskEntity<T=PS.EntityType>(): IBaseExecution<T>;
}

/*********************************************
* EntityTypesMethods
**********************************************/
export interface EntityTypesMethods {

}

/*********************************************
* Event
**********************************************/
export interface Event {
	EventName?: string;
	Id?: number;
	SourceName?: string;
}

/*********************************************
* IEventHandler
**********************************************/
export interface IEventHandler extends EventHandlerProps,EventHandlerMethods,IBaseExecution<EventHandler> {

}

/*********************************************
* EventHandler
**********************************************/
export interface EventHandler extends EventHandlerProps, EventHandlerMethods {
	AssemblyName?: string;
	ClassName?: string;
	Description?: string;
	EndpointUrl?: string;
	EventId?: number;
	Id?: any;
	Name?: string;
	Order?: number;
}

/*********************************************
* EventHandlerProps
**********************************************/
export interface EventHandlerProps {
	Event<T=PS.Event>(): IBaseExecution<T>;
}

/*********************************************
* EventHandlerMethods
**********************************************/
export interface EventHandlerMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupCost
**********************************************/
export interface ILookupCost extends LookupCostProps,LookupCostMethods,IBaseExecution<LookupCost> {

}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry, LookupCostProps, LookupCostMethods {
	Value?: number;
}

/*********************************************
* LookupCostProps
**********************************************/
export interface LookupCostProps {

}

/*********************************************
* LookupCostMethods
**********************************************/
export interface LookupCostMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupDate
**********************************************/
export interface ILookupDate extends LookupDateProps,LookupDateMethods,IBaseExecution<LookupDate> {

}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry, LookupDateProps, LookupDateMethods {
	Value?: any;
}

/*********************************************
* LookupDateProps
**********************************************/
export interface LookupDateProps {

}

/*********************************************
* LookupDateMethods
**********************************************/
export interface LookupDateMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupDuration
**********************************************/
export interface ILookupDuration extends LookupDurationProps,LookupDurationMethods,IBaseExecution<LookupDuration> {

}

/*********************************************
* LookupDuration
**********************************************/
export interface LookupDuration extends PS.LookupEntry, LookupDurationProps, LookupDurationMethods {
	Value?: string;
	ValueMilliseconds?: number;
	ValueTimeSpan?: any;
}

/*********************************************
* LookupDurationProps
**********************************************/
export interface LookupDurationProps {

}

/*********************************************
* LookupDurationMethods
**********************************************/
export interface LookupDurationMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupNumber
**********************************************/
export interface ILookupNumber extends LookupNumberProps,LookupNumberMethods,IBaseExecution<LookupNumber> {

}

/*********************************************
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry, LookupNumberProps, LookupNumberMethods {
	Value?: number;
}

/*********************************************
* LookupNumberProps
**********************************************/
export interface LookupNumberProps {

}

/*********************************************
* LookupNumberMethods
**********************************************/
export interface LookupNumberMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupText
**********************************************/
export interface ILookupText extends LookupTextProps,LookupTextMethods,IBaseExecution<LookupText> {

}

/*********************************************
* LookupText
**********************************************/
export interface LookupText extends PS.LookupEntry, LookupTextProps, LookupTextMethods {
	HasChildren?: boolean;
	Mask?: PS.LookupMask;
	Value?: string;
}

/*********************************************
* LookupTextProps
**********************************************/
export interface LookupTextProps {
	Parent<T=PS.LookupText>(): IBaseExecution<T>;
}

/*********************************************
* LookupTextMethods
**********************************************/
export interface LookupTextMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* PageSizes
**********************************************/
export interface PageSizes {
	EngagementsTimephased?: number;
	EnterpriseResources?: number;
	Projects?: number;
}

/*********************************************
* IPlanAssignment
**********************************************/
export interface IPlanAssignment extends PlanAssignmentProps,PlanAssignmentMethods,IBaseExecution<PlanAssignment> {

}

/*********************************************
* PlanAssignment
**********************************************/
export interface PlanAssignment extends PlanAssignmentProps, PlanAssignmentMethods {
	BookingType?: number;
	CanLevel?: boolean;
	Code?: string;
	CostCenter?: string;
	Email?: string;
	Group?: string;
	HireDate?: any;
	Id?: any;
	IsTeam?: boolean;
	Name?: string;
	Phonetics?: string;
	ResourceType?: number;
	TerminationDate?: any;
}

/*********************************************
* PlanAssignmentProps
**********************************************/
export interface PlanAssignmentProps {
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	Intervals<T=PS.PlanAssignmentInterval>(): IBaseCollection<T>;
	Resource<T=PS.EnterpriseResource>(): IBaseExecution<T>;
}

/*********************************************
* PlanAssignmentMethods
**********************************************/
export interface PlanAssignmentMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* PlanAssignmentInterval
**********************************************/
export interface PlanAssignmentInterval {
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	End?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* ProjectEngagementComment
**********************************************/
export interface ProjectEngagementComment extends PS.EngagementComment {

}

/*********************************************
* ProjectEngagementTimephasedPeriod
**********************************************/
export interface ProjectEngagementTimephasedPeriod extends PS.EngagementTimephasedPeriod {

}

/*********************************************
* ProjectServerData
**********************************************/
export interface ProjectServerData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IProjectServer
**********************************************/
export interface IProjectServer extends ProjectServerProps,ProjectServerMethods,IBaseExecution<ProjectServer> {

}

/*********************************************
* ProjectServer
**********************************************/
export interface ProjectServer extends ProjectServerProps, ProjectServerMethods {
	EngagementsTimephasedPageSize?: number;
	EnterpriseResourcesPageSize?: number;
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
	ProjectsPageSize?: number;
}

/*********************************************
* ProjectServerProps
**********************************************/
export interface ProjectServerProps {
	Calendars<T=PS.Calendar>(): IBaseCollection<T>;
	CustomFields<T=PS.CustomField>(): IBaseCollection<T>;
	EnterpriseProjectTypes<T=PS.EnterpriseProjectType>(): IBaseCollection<T>;
	EnterpriseResources<T=PS.EnterpriseResource>(): IBaseCollection<T>;
	EntityTypes<T=PS.EntityTypes>(): IBaseExecution<T>;
	EventHandlers<T=PS.EventHandler>(): IBaseCollection<T>;
	Events<T=PS.Event>(): IBaseCollection<T>;
	LookupTables<T=PS.LookupTable>(): IBaseCollection<T>;
	Phases<T=PS.Phase>(): IBaseCollection<T>;
	ProjectDetailPages<T=PS.ProjectDetailPage>(): IBaseCollection<T>;
	Projects<T=PS.PublishedProject>(): IBaseCollection<T>;
	ProjectWorkflowInstances<T=PS.ProjectWorkflowInstance>(): IBaseCollection<T>;
	Settings<T=PS.Settings>(): IBaseExecution<T>;
	Stages<T=PS.Stage>(): IBaseCollection<T>;
	TimeSheetPeriods<T=PS.TimeSheetPeriod>(): IBaseCollection<T>;
	UserPermissions<T=PS.UserPermission>(): IBaseCollection<T>;
	WorkflowActivities<T=PS.WorkflowActivities>(): IBaseExecution<T>;
	WorkflowDesigner<T=PS.WorkflowDesigner>(): IBaseExecution<T>;
}

/*********************************************
* ProjectServerMethods
**********************************************/
export interface ProjectServerMethods {
	getDeletedPublishedAssignments<T=Array<PS.DeletedPublishedAssignment>>(deletedDate?: any): IBaseExecution<T>;
	stopDelegation<T=any>(): IBaseExecution<T>;
}

/*********************************************
* Settings
**********************************************/
export interface Settings {
	AreManuallyScheduledTasksDefault?: boolean;
	AreManuallyScheduledTasksPublishedToTeamMember?: boolean;
	CanUsersOverrideScheduleMode?: boolean;
	DefaultCurrency?: string;
	Id?: any;
	IsAutoPublishOn?: boolean;
	ReportingTimephasedMode?: string;
}

/*********************************************
* ITimeSheetPeriod
**********************************************/
export interface ITimeSheetPeriod extends TimeSheetPeriodProps,TimeSheetPeriodMethods,IBaseExecution<TimeSheetPeriod> {

}

/*********************************************
* TimeSheetPeriod
**********************************************/
export interface TimeSheetPeriod extends TimeSheetPeriodProps, TimeSheetPeriodMethods {
	End?: any;
	Id?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* TimeSheetPeriodProps
**********************************************/
export interface TimeSheetPeriodProps {
	TimeSheet<T=PS.TimeSheet>(): IBaseExecution<T>;
}

/*********************************************
* TimeSheetPeriodMethods
**********************************************/
export interface TimeSheetPeriodMethods {
	createTimeSheet<T=PS.TimeSheet>(): IBaseExecution<T>;
}

/*********************************************
* ITimeSheet
**********************************************/
export interface ITimeSheet extends TimeSheetProps,TimeSheetMethods,IBaseExecution<TimeSheet> {

}

/*********************************************
* TimeSheet
**********************************************/
export interface TimeSheet extends TimeSheetProps, TimeSheetMethods {
	Comments?: string;
	EntryMode?: number;
	Id?: any;
	IsControlledByOwner?: boolean;
	IsProcessed?: boolean;
	Name?: string;
	Status?: number;
	TotalActualWork?: string;
	TotalActualWorkMilliseconds?: number;
	TotalActualWorkTimeSpan?: any;
	TotalNonBillableOvertimeWork?: string;
	TotalNonBillableOvertimeWorkMilliseconds?: number;
	TotalNonBillableOvertimeWorkTimeSpan?: any;
	TotalNonBillableWork?: string;
	TotalNonBillableWorkMilliseconds?: number;
	TotalNonBillableWorkTimeSpan?: any;
	TotalOvertimeWork?: string;
	TotalOvertimeWorkMilliseconds?: number;
	TotalOvertimeWorkTimeSpan?: any;
	TotalWork?: string;
	TotalWorkMilliseconds?: number;
	TotalWorkTimeSpan?: any;
	WeekStartsOn?: any;
}

/*********************************************
* TimeSheetProps
**********************************************/
export interface TimeSheetProps {
	Creator<T=SP.User>(): IBaseExecution<T>;
	Lines<T=PS.TimeSheetLine>(): IBaseCollection<T>;
	Manager<T=SP.User>(): IBaseExecution<T>;
	Period<T=PS.TimeSheetPeriod>(): IBaseExecution<T>;
}

/*********************************************
* TimeSheetMethods
**********************************************/
export interface TimeSheetMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	recall<T=any>(): IBaseExecution<T>;
	submit<T=any>(comment?: string): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ITimeSheetLine
**********************************************/
export interface ITimeSheetLine extends TimeSheetLineProps,TimeSheetLineMethods,IBaseExecution<TimeSheetLine> {

}

/*********************************************
* TimeSheetLine
**********************************************/
export interface TimeSheetLine extends TimeSheetLineProps, TimeSheetLineMethods {
	Comment?: string;
	Id?: any;
	LineClass?: number;
	ProjectName?: string;
	Status?: number;
	TaskName?: string;
	TotalWork?: string;
	TotalWorkMilliseconds?: number;
	TotalWorkTimeSpan?: any;
	ValidationType?: number;
}

/*********************************************
* TimeSheetLineProps
**********************************************/
export interface TimeSheetLineProps {
	Assignment<T=PS.PublishedAssignment>(): IBaseExecution<T>;
	TimeSheet<T=PS.TimeSheet>(): IBaseExecution<T>;
	Work<T=PS.TimeSheetWork>(): IBaseCollection<T>;
}

/*********************************************
* TimeSheetLineMethods
**********************************************/
export interface TimeSheetLineMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	submit<T=any>(comment?: string): IBaseExecution<T>;
}

/*********************************************
* ITimeSheetWork
**********************************************/
export interface ITimeSheetWork extends TimeSheetWorkProps,TimeSheetWorkMethods,IBaseExecution<TimeSheetWork> {

}

/*********************************************
* TimeSheetWork
**********************************************/
export interface TimeSheetWork extends TimeSheetWorkProps, TimeSheetWorkMethods {
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	Comment?: string;
	End?: any;
	Id?: any;
	NonBillableOvertimeWork?: string;
	NonBillableOvertimeWorkMilliseconds?: number;
	NonBillableOvertimeWorkTimeSpan?: any;
	NonBillableWork?: string;
	NonBillableWorkMilliseconds?: number;
	NonBillableWorkTimeSpan?: any;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PlannedWork?: string;
	PlannedWorkMilliseconds?: number;
	PlannedWorkTimeSpan?: any;
	Start?: any;
}

/*********************************************
* TimeSheetWorkProps
**********************************************/
export interface TimeSheetWorkProps {

}

/*********************************************
* TimeSheetWorkMethods
**********************************************/
export interface TimeSheetWorkMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IWorkflowActivities
**********************************************/
export interface IWorkflowActivities extends WorkflowActivitiesProps,WorkflowActivitiesMethods,IBaseExecution<WorkflowActivities> {

}

/*********************************************
* WorkflowActivities
**********************************************/
export interface WorkflowActivities extends WorkflowActivitiesProps, WorkflowActivitiesMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowActivitiesProps
**********************************************/
export interface WorkflowActivitiesProps {

}

/*********************************************
* WorkflowActivitiesMethods
**********************************************/
export interface WorkflowActivitiesMethods {
	checkInWithJobId<T=any>(projId?: any, jobId?: any, force?: boolean): IBaseExecution<T>;
	createProjectFromListItem<T=any>(webId?: any, listId?: any, itemId?: number, eptId?: any): IBaseExecution<T>;
	enterProjectStage<T=any>(projectId?: any, stageId?: any): IBaseExecution<T>;
	leaveProjectStage<T=any>(projectId?: any): IBaseExecution<T>;
	publishSummaryWithJobId<T=any>(projId?: any, jobId?: any): IBaseExecution<T>;
	publishWithJobId<T=any>(projectId?: any, jobId?: any): IBaseExecution<T>;
	readBooleanProperty<T=boolean>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readCurrencyProperty<T=number>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readDateTimeProperty<T=any>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readGuidProperty<T=any>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readIntegerProperty<T=number>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readNumberProperty<T=number>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readProjectProperty<T=string>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readTextProperty<T=string>(projectId?: any, propertyId?: string): IBaseExecution<T>;
	readyToLeaveProjectStage<T=number>(projectId?: any): IBaseExecution<T>;
	updateBooleanProperty<T=any>(projectId?: any, propertyId?: string, value?: boolean): IBaseExecution<T>;
	updateCurrencyProperty<T=any>(projectId?: any, propertyId?: string, value?: number): IBaseExecution<T>;
	updateDateTimeProperty<T=any>(projectId?: any, propertyId?: string, value?: any): IBaseExecution<T>;
	updateGuidProperty<T=any>(projectId?: any, propertyId?: string, value?: any): IBaseExecution<T>;
	updateIdeaListItemStatus<T=any>(projectId?: any, status?: string): IBaseExecution<T>;
	updateIntegerProperty<T=any>(projectId?: any, propertyId?: string, value?: number): IBaseExecution<T>;
	updateNumberProperty<T=any>(projectId?: any, propertyId?: string, value?: number): IBaseExecution<T>;
	updateProjectStageStatus<T=any>(projectId?: any, stageId?: any, statusInformation?: string, stageStatusValue?: number, append?: boolean): IBaseExecution<T>;
	updateTextProperty<T=any>(projectId?: any, propertyId?: string, value?: string): IBaseExecution<T>;
}

/*********************************************
* IWorkflowDesigner
**********************************************/
export interface IWorkflowDesigner extends WorkflowDesignerProps,WorkflowDesignerMethods,IBaseExecution<WorkflowDesigner> {

}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner extends WorkflowDesignerProps, WorkflowDesignerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerProps
**********************************************/
export interface WorkflowDesignerProps {
	Fields<T=PS.WorkflowDesignerField>(): IBaseCollection<T>;
}

/*********************************************
* WorkflowDesignerMethods
**********************************************/
export interface WorkflowDesignerMethods {

}

/*********************************************
* IWorkflowDesignerField
**********************************************/
export interface IWorkflowDesignerField extends WorkflowDesignerFieldProps,WorkflowDesignerFieldMethods,IBaseExecution<WorkflowDesignerField> {

}

/*********************************************
* WorkflowDesignerField
**********************************************/
export interface WorkflowDesignerField extends WorkflowDesignerFieldProps, WorkflowDesignerFieldMethods {
	DisplayName?: string;
	Id?: string;
	IsLookupField?: boolean;
	IsReadOnly?: boolean;
	SPFieldType?: number;
}

/*********************************************
* WorkflowDesignerFieldProps
**********************************************/
export interface WorkflowDesignerFieldProps {
	LookupEntries<T=PS.LookupEntry>(): IBaseCollection<T>;
}

/*********************************************
* WorkflowDesignerFieldMethods
**********************************************/
export interface WorkflowDesignerFieldMethods {

}

/*********************************************
* IResourceCalendarException
**********************************************/
export interface IResourceCalendarException extends ResourceCalendarExceptionProps,ResourceCalendarExceptionMethods,IBaseExecution<ResourceCalendarException> {

}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException, ResourceCalendarExceptionProps, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarExceptionProps
**********************************************/
export interface ResourceCalendarExceptionProps {

}

/*********************************************
* ResourceCalendarExceptionMethods
**********************************************/
export interface ResourceCalendarExceptionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ResourceEngagementComment
**********************************************/
export interface ResourceEngagementComment extends PS.EngagementComment {

}

/*********************************************
* ResourceEngagementTimephasedPeriod
**********************************************/
export interface ResourceEngagementTimephasedPeriod extends PS.EngagementTimephasedPeriod {

}

/*********************************************
* IResourcePlan
**********************************************/
export interface IResourcePlan extends ResourcePlanProps,ResourcePlanMethods,IBaseExecution<ResourcePlan> {

}

/*********************************************
* ResourcePlan
**********************************************/
export interface ResourcePlan extends ResourcePlanProps, ResourcePlanMethods {
	Finish?: any;
	Id?: any;
	Start?: any;
	UtilizationDate?: any;
	UtilizationType?: number;
}

/*********************************************
* ResourcePlanProps
**********************************************/
export interface ResourcePlanProps {
	Assignments<T=PS.PlanAssignment>(): IBaseCollection<T>;
}

/*********************************************
* ResourcePlanMethods
**********************************************/
export interface ResourcePlanMethods {
	deleteObject<T=PS.QueueJob>(): IBaseExecution<T>;
	forceCheckIn<T=PS.QueueJob>(): IBaseExecution<T>;
	publish<T=PS.QueueJob>(): IBaseExecution<T>;
	update<T=PS.QueueJob>(): IBaseExecution<T>;
}

/*********************************************
* IServiceStatus
**********************************************/
export interface IServiceStatus extends ServiceStatusProps,ServiceStatusMethods,IBaseExecution<ServiceStatus> {

}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus extends ServiceStatusProps, ServiceStatusMethods {
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
}

/*********************************************
* ServiceStatusProps
**********************************************/
export interface ServiceStatusProps {

}

/*********************************************
* ServiceStatusMethods
**********************************************/
export interface ServiceStatusMethods {
	stopDelegation<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ITimePhase
**********************************************/
export interface ITimePhase extends TimePhaseProps,TimePhaseMethods,IBaseExecution<TimePhase> {

}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase extends TimePhaseProps, TimePhaseMethods {
	End?: any;
	Start?: any;
}

/*********************************************
* TimePhaseProps
**********************************************/
export interface TimePhaseProps {
	Assignments<T=PS.StatusAssignment>(): IBaseCollection<T>;
}

/*********************************************
* TimePhaseMethods
**********************************************/
export interface TimePhaseMethods {

}

/*********************************************
* ICalendarCollection
**********************************************/
export interface ICalendarCollection extends CalendarCollectionProps,CalendarCollectionMethods,IBaseExecution<CalendarCollection> {

}

/*********************************************
* CalendarCollection
**********************************************/
export interface CalendarCollection extends CalendarCollectionProps, CalendarCollectionMethods {

}

/*********************************************
* CalendarCollectionProps
**********************************************/
export interface CalendarCollectionProps {

}

/*********************************************
* CalendarCollectionMethods
**********************************************/
export interface CalendarCollectionMethods {
	add<T=PS.Calendar>(parameters?: PS.CalendarCreationInformation): IBaseExecution<T>;
	getByGuid<T=PS.Calendar>(uid?: any): IBaseExecution<T>;
	getById<T=PS.Calendar>(objectId?: string): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ICustomFieldCollection
**********************************************/
export interface ICustomFieldCollection extends CustomFieldCollectionProps,CustomFieldCollectionMethods,IBaseExecution<CustomFieldCollection> {

}

/*********************************************
* CustomFieldCollection
**********************************************/
export interface CustomFieldCollection extends CustomFieldCollectionProps, CustomFieldCollectionMethods {

}

/*********************************************
* CustomFieldCollectionProps
**********************************************/
export interface CustomFieldCollectionProps {

}

/*********************************************
* CustomFieldCollectionMethods
**********************************************/
export interface CustomFieldCollectionMethods {
	add<T=PS.CustomField>(parameters?: PS.CustomFieldCreationInformation): IBaseExecution<T>;
	getByAppAlternateId<T=PS.CustomField>(objectId?: string): IBaseExecution<T>;
	getByGuid<T=PS.CustomField>(uid?: any): IBaseExecution<T>;
	getById<T=PS.CustomField>(objectId?: string): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IDraftTaskCollection
**********************************************/
export interface IDraftTaskCollection extends DraftTaskCollectionProps,DraftTaskCollectionMethods,IBaseExecution<DraftTaskCollection> {

}

/*********************************************
* DraftTaskCollection
**********************************************/
export interface DraftTaskCollection extends DraftTaskCollectionProps, DraftTaskCollectionMethods {

}

/*********************************************
* DraftTaskCollectionProps
**********************************************/
export interface DraftTaskCollectionProps {

}

/*********************************************
* DraftTaskCollectionMethods
**********************************************/
export interface DraftTaskCollectionMethods {
	add<T=PS.DraftTask>(parameters?: PS.TaskCreationInformation): IBaseExecution<T>;
	getByGuid<T=PS.DraftTask>(uid?: any): IBaseExecution<T>;
	getById<T=PS.DraftTask>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* IDraftTaskLinkCollection
**********************************************/
export interface IDraftTaskLinkCollection extends DraftTaskLinkCollectionProps,DraftTaskLinkCollectionMethods,IBaseExecution<DraftTaskLinkCollection> {

}

/*********************************************
* DraftTaskLinkCollection
**********************************************/
export interface DraftTaskLinkCollection extends DraftTaskLinkCollectionProps, DraftTaskLinkCollectionMethods {

}

/*********************************************
* DraftTaskLinkCollectionProps
**********************************************/
export interface DraftTaskLinkCollectionProps {

}

/*********************************************
* DraftTaskLinkCollectionMethods
**********************************************/
export interface DraftTaskLinkCollectionMethods {
	add<T=PS.DraftTaskLink>(parameters?: PS.TaskLinkCreationInformation): IBaseExecution<T>;
	getByGuid<T=PS.DraftTaskLink>(uid?: any): IBaseExecution<T>;
	getById<T=PS.DraftTaskLink>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* IEntityLinkCollection
**********************************************/
export interface IEntityLinkCollection extends EntityLinkCollectionProps,EntityLinkCollectionMethods,IBaseExecution<EntityLinkCollection> {

}

/*********************************************
* EntityLinkCollection
**********************************************/
export interface EntityLinkCollection extends EntityLinkCollectionProps, EntityLinkCollectionMethods {

}

/*********************************************
* EntityLinkCollectionProps
**********************************************/
export interface EntityLinkCollectionProps {

}

/*********************************************
* EntityLinkCollectionMethods
**********************************************/
export interface EntityLinkCollectionMethods {
	add<T=PS.EntityLink>(parameters?: PS.EntityLinkCreationInformation): IBaseExecution<T>;
	getByGuid<T=PS.EntityLink>(id?: any): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IEventHandlerCollection
**********************************************/
export interface IEventHandlerCollection extends EventHandlerCollectionProps,EventHandlerCollectionMethods,IBaseExecution<EventHandlerCollection> {

}

/*********************************************
* EventHandlerCollection
**********************************************/
export interface EventHandlerCollection extends EventHandlerCollectionProps, EventHandlerCollectionMethods {

}

/*********************************************
* EventHandlerCollectionProps
**********************************************/
export interface EventHandlerCollectionProps {

}

/*********************************************
* EventHandlerCollectionMethods
**********************************************/
export interface EventHandlerCollectionMethods {
	add<T=PS.EventHandler>(parameters?: PS.EventHandlerCreationInformation): IBaseExecution<T>;
	getByGuid<T=PS.EventHandler>(uid?: any): IBaseExecution<T>;
	getById<T=PS.EventHandler>(objectId?: string): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILookupEntryCollection
**********************************************/
export interface ILookupEntryCollection extends LookupEntryCollectionProps,LookupEntryCollectionMethods,IBaseExecution<LookupEntryCollection> {

}

/*********************************************
* LookupEntryCollection
**********************************************/
export interface LookupEntryCollection extends LookupEntryCollectionProps, LookupEntryCollectionMethods {

}

/*********************************************
* LookupEntryCollectionProps
**********************************************/
export interface LookupEntryCollectionProps {

}

/*********************************************
* LookupEntryCollectionMethods
**********************************************/
export interface LookupEntryCollectionMethods {
	add<T=PS.LookupEntry>(parameters?: PS.LookupEntryCreationInformation): IBaseExecution<T>;
	getByAppAlternateId<T=PS.LookupEntry>(objectId?: string): IBaseExecution<T>;
	getByGuid<T=PS.LookupEntry>(uid?: any): IBaseExecution<T>;
	getById<T=PS.LookupEntry>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* IProjectEngagementTimephasedPeriodCollection
**********************************************/
export interface IProjectEngagementTimephasedPeriodCollection extends ProjectEngagementTimephasedPeriodCollectionProps,ProjectEngagementTimephasedPeriodCollectionMethods,IBaseExecution<ProjectEngagementTimephasedPeriodCollection> {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollection
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollection extends ProjectEngagementTimephasedPeriodCollectionProps, ProjectEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionProps
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl<T=PS.ProjectEngagementTimephasedPeriod>(start?: string): IBaseExecution<T>;
}

/*********************************************
* IPublishedTaskCollection
**********************************************/
export interface IPublishedTaskCollection extends PublishedTaskCollectionProps,PublishedTaskCollectionMethods,IBaseExecution<PublishedTaskCollection> {

}

/*********************************************
* PublishedTaskCollection
**********************************************/
export interface PublishedTaskCollection extends PublishedTaskCollectionProps, PublishedTaskCollectionMethods {

}

/*********************************************
* PublishedTaskCollectionProps
**********************************************/
export interface PublishedTaskCollectionProps {

}

/*********************************************
* PublishedTaskCollectionMethods
**********************************************/
export interface PublishedTaskCollectionMethods {
	getByGuid<T=PS.PublishedTask>(uid?: any): IBaseExecution<T>;
	getById<T=PS.PublishedTask>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* IPublishedTaskLinkCollection
**********************************************/
export interface IPublishedTaskLinkCollection extends PublishedTaskLinkCollectionProps,PublishedTaskLinkCollectionMethods,IBaseExecution<PublishedTaskLinkCollection> {

}

/*********************************************
* PublishedTaskLinkCollection
**********************************************/
export interface PublishedTaskLinkCollection extends PublishedTaskLinkCollectionProps, PublishedTaskLinkCollectionMethods {

}

/*********************************************
* PublishedTaskLinkCollectionProps
**********************************************/
export interface PublishedTaskLinkCollectionProps {

}

/*********************************************
* PublishedTaskLinkCollectionMethods
**********************************************/
export interface PublishedTaskLinkCollectionMethods {
	getByGuid<T=PS.PublishedTaskLink>(uid?: any): IBaseExecution<T>;
	getById<T=PS.PublishedTaskLink>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* IQueueJobCollection
**********************************************/
export interface IQueueJobCollection extends QueueJobCollectionProps,QueueJobCollectionMethods,IBaseExecution<QueueJobCollection> {

}

/*********************************************
* QueueJobCollection
**********************************************/
export interface QueueJobCollection extends QueueJobCollectionProps, QueueJobCollectionMethods {

}

/*********************************************
* QueueJobCollectionProps
**********************************************/
export interface QueueJobCollectionProps {

}

/*********************************************
* QueueJobCollectionMethods
**********************************************/
export interface QueueJobCollectionMethods {
	getByGuid<T=PS.QueueJob>(uid?: any): IBaseExecution<T>;
	getById<T=PS.QueueJob>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* IResourceEngagementTimephasedPeriodCollection
**********************************************/
export interface IResourceEngagementTimephasedPeriodCollection extends ResourceEngagementTimephasedPeriodCollectionProps,ResourceEngagementTimephasedPeriodCollectionMethods,IBaseExecution<ResourceEngagementTimephasedPeriodCollection> {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollection
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollection extends ResourceEngagementTimephasedPeriodCollectionProps, ResourceEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionProps
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl<T=PS.ResourceEngagementTimephasedPeriod>(start?: string): IBaseExecution<T>;
}

/*********************************************
* IStageCustomFieldCollection
**********************************************/
export interface IStageCustomFieldCollection extends StageCustomFieldCollectionProps,StageCustomFieldCollectionMethods,IBaseExecution<StageCustomFieldCollection> {

}

/*********************************************
* StageCustomFieldCollection
**********************************************/
export interface StageCustomFieldCollection extends StageCustomFieldCollectionProps, StageCustomFieldCollectionMethods {

}

/*********************************************
* StageCustomFieldCollectionProps
**********************************************/
export interface StageCustomFieldCollectionProps {

}

/*********************************************
* StageCustomFieldCollectionMethods
**********************************************/
export interface StageCustomFieldCollectionMethods {
	add<T=PS.StageCustomField>(creationInfo?: PS.StageCustomFieldCreationInformation): IBaseExecution<T>;
	getByGuid<T=PS.StageCustomField>(uid?: any): IBaseExecution<T>;
	getById<T=PS.StageCustomField>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* ITimeSheetPeriodCollection
**********************************************/
export interface ITimeSheetPeriodCollection extends TimeSheetPeriodCollectionProps,TimeSheetPeriodCollectionMethods,IBaseExecution<TimeSheetPeriodCollection> {

}

/*********************************************
* TimeSheetPeriodCollection
**********************************************/
export interface TimeSheetPeriodCollection extends TimeSheetPeriodCollectionProps, TimeSheetPeriodCollectionMethods {

}

/*********************************************
* TimeSheetPeriodCollectionProps
**********************************************/
export interface TimeSheetPeriodCollectionProps {

}

/*********************************************
* TimeSheetPeriodCollectionMethods
**********************************************/
export interface TimeSheetPeriodCollectionMethods {
	getByGuid<T=PS.TimeSheetPeriod>(uid?: any): IBaseExecution<T>;
	getById<T=PS.TimeSheetPeriod>(objectId?: string): IBaseExecution<T>;
}

/*********************************************
* ITimeSheetWorkCollection
**********************************************/
export interface ITimeSheetWorkCollection extends TimeSheetWorkCollectionProps,TimeSheetWorkCollectionMethods,IBaseExecution<TimeSheetWorkCollection> {

}

/*********************************************
* TimeSheetWorkCollection
**********************************************/
export interface TimeSheetWorkCollection extends TimeSheetWorkCollectionProps, TimeSheetWorkCollectionMethods {

}

/*********************************************
* TimeSheetWorkCollectionProps
**********************************************/
export interface TimeSheetWorkCollectionProps {

}

/*********************************************
* TimeSheetWorkCollectionMethods
**********************************************/
export interface TimeSheetWorkCollectionMethods {
	add<T=PS.TimeSheetWork>(parameters?: PS.TimeSheetWorkCreationInformation): IBaseExecution<T>;
	getById<T=PS.TimeSheetWork>(objectId?: string): IBaseExecution<T>;
	getByStartDate<T=PS.TimeSheetWork>(start?: any): IBaseExecution<T>;
}

/*********************************************
* IWorkflowDesignerFieldCollection
**********************************************/
export interface IWorkflowDesignerFieldCollection extends WorkflowDesignerFieldCollectionProps,WorkflowDesignerFieldCollectionMethods,IBaseExecution<WorkflowDesignerFieldCollection> {

}

/*********************************************
* WorkflowDesignerFieldCollection
**********************************************/
export interface WorkflowDesignerFieldCollection extends WorkflowDesignerFieldCollectionProps, WorkflowDesignerFieldCollectionMethods {

}

/*********************************************
* WorkflowDesignerFieldCollectionProps
**********************************************/
export interface WorkflowDesignerFieldCollectionProps {

}

/*********************************************
* WorkflowDesignerFieldCollectionMethods
**********************************************/
export interface WorkflowDesignerFieldCollectionMethods {
	getById<T=PS.WorkflowDesignerField>(objectId?: string): IBaseExecution<T>;
}
