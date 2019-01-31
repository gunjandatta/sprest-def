import { IBaseExecution } from "../";
import { IBaseCollection } from "../";
import { IBaseResults } from "../";
import { PS } from "../";
import { IBaseQuery } from "../";
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
export interface IAssignment extends AssignmentCollections,AssignmentMethods,IBaseQuery<IAssignmentQuery> {

}

/*********************************************
* IAssignmentQuery
**********************************************/
export interface IAssignmentQuery extends AssignmentQuery,AssignmentMethods {

}

/*********************************************
* Assignment
**********************************************/
export interface Assignment extends AssignmentCollections, AssignmentMethods {
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

}

/*********************************************
* AssignmentCollections
**********************************************/
export interface AssignmentCollections extends AssignmentProps {
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
}

/*********************************************
* AssignmentQuery
**********************************************/
export interface AssignmentQuery extends AssignmentProps {
	CustomFields: IBaseResults<PS.CustomField>;
}

/*********************************************
* AssignmentMethods
**********************************************/
export interface AssignmentMethods {

}

/*********************************************
* ICustomField
**********************************************/
export interface ICustomField extends CustomFieldCollections,CustomFieldMethods,IBaseQuery<ICustomFieldQuery> {

}

/*********************************************
* ICustomFieldQuery
**********************************************/
export interface ICustomFieldQuery extends CustomFieldQuery,CustomFieldMethods {

}

/*********************************************
* CustomField
**********************************************/
export interface CustomField extends CustomFieldCollections, CustomFieldMethods {
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
	EntityType(): IBaseExecution<PS.EntityType>;
	LookupTable(): IBaseExecution<PS.LookupTable>;
}

/*********************************************
* CustomFieldCollections
**********************************************/
export interface CustomFieldCollections extends CustomFieldProps {
	LookupEntries(): IBaseCollection<PS.LookupEntry>;
	LookupEntries(id: string | number): IBaseExecution<PS.LookupEntry>;
}

/*********************************************
* CustomFieldQuery
**********************************************/
export interface CustomFieldQuery extends CustomFieldProps {
	LookupEntries: IBaseResults<PS.LookupEntry>;
}

/*********************************************
* CustomFieldMethods
**********************************************/
export interface CustomFieldMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ILookupEntry
**********************************************/
export interface ILookupEntry extends LookupEntryCollections,LookupEntryMethods,IBaseQuery<ILookupEntryQuery> {

}

/*********************************************
* ILookupEntryQuery
**********************************************/
export interface ILookupEntryQuery extends LookupEntryQuery,LookupEntryMethods {

}

/*********************************************
* LookupEntry
**********************************************/
export interface LookupEntry extends LookupEntryCollections, LookupEntryMethods {
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
* LookupEntryCollections
**********************************************/
export interface LookupEntryCollections extends LookupEntryProps {

}

/*********************************************
* LookupEntryQuery
**********************************************/
export interface LookupEntryQuery extends LookupEntryProps {

}

/*********************************************
* LookupEntryMethods
**********************************************/
export interface LookupEntryMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ILookupTable
**********************************************/
export interface ILookupTable extends LookupTableCollections,LookupTableMethods,IBaseQuery<ILookupTableQuery> {

}

/*********************************************
* ILookupTableQuery
**********************************************/
export interface ILookupTableQuery extends LookupTableQuery,LookupTableMethods {

}

/*********************************************
* LookupTable
**********************************************/
export interface LookupTable extends LookupTableCollections, LookupTableMethods {
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

}

/*********************************************
* LookupTableCollections
**********************************************/
export interface LookupTableCollections extends LookupTableProps {
	Entries(): IBaseCollection<PS.LookupEntry>;
	Entries(id: string | number): IBaseExecution<PS.LookupEntry>;
}

/*********************************************
* LookupTableQuery
**********************************************/
export interface LookupTableQuery extends LookupTableProps {
	Entries: IBaseResults<PS.LookupEntry>;
}

/*********************************************
* LookupTableMethods
**********************************************/
export interface LookupTableMethods {
	addMask(mask?: PS.LookupMask): IBaseExecution<any>;
	deleteObject(): IBaseExecution<any>;
	updateMask(mask?: PS.LookupMask, level?: number): IBaseExecution<any>;
}

/*********************************************
* ICalendarException
**********************************************/
export interface ICalendarException extends CalendarExceptionCollections,CalendarExceptionMethods,IBaseQuery<ICalendarExceptionQuery> {

}

/*********************************************
* ICalendarExceptionQuery
**********************************************/
export interface ICalendarExceptionQuery extends CalendarExceptionQuery,CalendarExceptionMethods {

}

/*********************************************
* CalendarException
**********************************************/
export interface CalendarException extends CalendarExceptionCollections, CalendarExceptionMethods {
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
	Calendar(): IBaseExecution<PS.Calendar>;
}

/*********************************************
* CalendarExceptionCollections
**********************************************/
export interface CalendarExceptionCollections extends CalendarExceptionProps {

}

/*********************************************
* CalendarExceptionQuery
**********************************************/
export interface CalendarExceptionQuery extends CalendarExceptionProps {

}

/*********************************************
* CalendarExceptionMethods
**********************************************/
export interface CalendarExceptionMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ICalendar
**********************************************/
export interface ICalendar extends CalendarCollections,CalendarMethods,IBaseQuery<ICalendarQuery> {

}

/*********************************************
* ICalendarQuery
**********************************************/
export interface ICalendarQuery extends CalendarQuery,CalendarMethods {

}

/*********************************************
* Calendar
**********************************************/
export interface Calendar extends CalendarCollections, CalendarMethods {
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

}

/*********************************************
* CalendarCollections
**********************************************/
export interface CalendarCollections extends CalendarProps {
	BaseCalendarExceptions(): IBaseCollection<PS.CalendarException>;
	BaseCalendarExceptions(id: string | number): IBaseExecution<PS.CalendarException>;
}

/*********************************************
* CalendarQuery
**********************************************/
export interface CalendarQuery extends CalendarProps {
	BaseCalendarExceptions: IBaseResults<PS.CalendarException>;
}

/*********************************************
* CalendarMethods
**********************************************/
export interface CalendarMethods {
	copyTo(name?: string): IBaseExecution<PS.Calendar>;
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IBaseCalendarException
**********************************************/
export interface IBaseCalendarException extends BaseCalendarExceptionCollections,BaseCalendarExceptionMethods,IBaseQuery<IBaseCalendarExceptionQuery> {

}

/*********************************************
* IBaseCalendarExceptionQuery
**********************************************/
export interface IBaseCalendarExceptionQuery extends BaseCalendarExceptionQuery,BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException, BaseCalendarExceptionCollections, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarExceptionProps
**********************************************/
export interface BaseCalendarExceptionProps {

}

/*********************************************
* BaseCalendarExceptionCollections
**********************************************/
export interface BaseCalendarExceptionCollections extends BaseCalendarExceptionProps {

}

/*********************************************
* BaseCalendarExceptionQuery
**********************************************/
export interface BaseCalendarExceptionQuery extends BaseCalendarExceptionProps {

}

/*********************************************
* BaseCalendarExceptionMethods
**********************************************/
export interface BaseCalendarExceptionMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IDraftAssignment
**********************************************/
export interface IDraftAssignment extends DraftAssignmentCollections,DraftAssignmentMethods,IBaseQuery<IDraftAssignmentQuery> {

}

/*********************************************
* IDraftAssignmentQuery
**********************************************/
export interface IDraftAssignmentQuery extends DraftAssignmentQuery,DraftAssignmentMethods {

}

/*********************************************
* DraftAssignment
**********************************************/
export interface DraftAssignment extends PS.Assignment, DraftAssignmentCollections, DraftAssignmentMethods {
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
	Owner(): IBaseExecution<SP.User>;
	Parent(): IBaseExecution<PS.DraftAssignment>;
	Resource(): IBaseExecution<PS.DraftProjectResource>;
	Task(): IBaseExecution<PS.DraftTask>;
}

/*********************************************
* DraftAssignmentCollections
**********************************************/
export interface DraftAssignmentCollections extends DraftAssignmentProps {

}

/*********************************************
* DraftAssignmentQuery
**********************************************/
export interface DraftAssignmentQuery extends DraftAssignmentProps {

}

/*********************************************
* DraftAssignmentMethods
**********************************************/
export interface DraftAssignmentMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IProjectResource
**********************************************/
export interface IProjectResource extends ProjectResourceCollections,ProjectResourceMethods,IBaseQuery<IProjectResourceQuery> {

}

/*********************************************
* IProjectResourceQuery
**********************************************/
export interface IProjectResourceQuery extends ProjectResourceQuery,ProjectResourceMethods {

}

/*********************************************
* ProjectResource
**********************************************/
export interface ProjectResource extends ProjectResourceCollections, ProjectResourceMethods {
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
	EnterpriseResource(): IBaseExecution<PS.EnterpriseResource>;
}

/*********************************************
* ProjectResourceCollections
**********************************************/
export interface ProjectResourceCollections extends ProjectResourceProps {
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
}

/*********************************************
* ProjectResourceQuery
**********************************************/
export interface ProjectResourceQuery extends ProjectResourceProps {
	CustomFields: IBaseResults<PS.CustomField>;
}

/*********************************************
* ProjectResourceMethods
**********************************************/
export interface ProjectResourceMethods {

}

/*********************************************
* IEnterpriseResource
**********************************************/
export interface IEnterpriseResource extends EnterpriseResourceCollections,EnterpriseResourceMethods,IBaseQuery<IEnterpriseResourceQuery> {

}

/*********************************************
* IEnterpriseResourceQuery
**********************************************/
export interface IEnterpriseResourceQuery extends EnterpriseResourceQuery,EnterpriseResourceMethods {

}

/*********************************************
* EnterpriseResource
**********************************************/
export interface EnterpriseResource extends EnterpriseResourceCollections, EnterpriseResourceMethods {
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
	BaseCalendar(): IBaseExecution<PS.Calendar>;
	DefaultAssignmentOwner(): IBaseExecution<SP.User>;
	Self(): IBaseExecution<PS.EnterpriseResource>;
	TimesheetManager(): IBaseExecution<SP.User>;
	User(): IBaseExecution<SP.User>;
}

/*********************************************
* EnterpriseResourceCollections
**********************************************/
export interface EnterpriseResourceCollections extends EnterpriseResourceProps {
	Assignments(): IBaseCollection<PS.StatusAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.StatusAssignment>;
	CostRateTables(): IBaseCollection<PS.EnterpriseResourceCostRateTable>;
	CostRateTables(id: string | number): IBaseExecution<PS.EnterpriseResourceCostRateTable>;
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
	Engagements(): IBaseCollection<PS.ResourceEngagement>;
	Engagements(id: string | number): IBaseExecution<PS.ResourceEngagement>;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseExecution<PS.UserPermission>;
	ResourceCalendarExceptions(): IBaseCollection<PS.CalendarException>;
	ResourceCalendarExceptions(id: string | number): IBaseExecution<PS.CalendarException>;
}

/*********************************************
* EnterpriseResourceQuery
**********************************************/
export interface EnterpriseResourceQuery extends EnterpriseResourceProps {
	Assignments: IBaseResults<PS.StatusAssignment>;
	CostRateTables: IBaseResults<PS.EnterpriseResourceCostRateTable>;
	CustomFields: IBaseResults<PS.CustomField>;
	Engagements: IBaseResults<PS.ResourceEngagement>;
	UserPermissions: IBaseResults<PS.UserPermission>;
	ResourceCalendarExceptions: IBaseResults<PS.CalendarException>;
}

/*********************************************
* EnterpriseResourceMethods
**********************************************/
export interface EnterpriseResourceMethods {
	deleteObject(): IBaseExecution<any>;
	forceCheckIn(): IBaseExecution<any>;
	updateClaimsAccount(newClaimsAccount?: string): IBaseExecution<any>;
}

/*********************************************
* IStatusAssignment
**********************************************/
export interface IStatusAssignment extends StatusAssignmentCollections,StatusAssignmentMethods,IBaseQuery<IStatusAssignmentQuery> {

}

/*********************************************
* IStatusAssignmentQuery
**********************************************/
export interface IStatusAssignmentQuery extends StatusAssignmentQuery,StatusAssignmentMethods {

}

/*********************************************
* StatusAssignment
**********************************************/
export interface StatusAssignment extends StatusAssignmentCollections, StatusAssignmentMethods {
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
	Project(): IBaseExecution<PS.PublishedProject>;
	Resource(): IBaseExecution<PS.EnterpriseResource>;
	Task(): IBaseExecution<PS.StatusTask>;
}

/*********************************************
* StatusAssignmentCollections
**********************************************/
export interface StatusAssignmentCollections extends StatusAssignmentProps {
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
	History(): IBaseCollection<PS.StatusAssignmentHistoryLine>;
	History(id: string | number): IBaseExecution<PS.StatusAssignmentHistoryLine>;
}

/*********************************************
* StatusAssignmentQuery
**********************************************/
export interface StatusAssignmentQuery extends StatusAssignmentProps {
	CustomFields: IBaseResults<PS.CustomField>;
	History: IBaseResults<PS.StatusAssignmentHistoryLine>;
}

/*********************************************
* StatusAssignmentMethods
**********************************************/
export interface StatusAssignmentMethods {
	deleteObject(): IBaseExecution<any>;
	submitStatusUpdates(comment?: string): IBaseExecution<any>;
}

/*********************************************
* StatusAssignmentHistoryLine
**********************************************/
export interface StatusAssignmentHistoryLine {
	Comment?: string;
	Decision?: number;
	Id?: any;
	Submitted?: any;
	UpdateType?: number;
}

/*********************************************
* IProject
**********************************************/
export interface IProject extends ProjectCollections,ProjectMethods,IBaseQuery<IProjectQuery> {

}

/*********************************************
* IProjectQuery
**********************************************/
export interface IProjectQuery extends ProjectQuery,ProjectMethods {

}

/*********************************************
* Project
**********************************************/
export interface Project extends ProjectCollections, ProjectMethods {
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
	CheckedOutBy(): IBaseExecution<SP.User>;
	EnterpriseProjectType(): IBaseExecution<PS.EnterpriseProjectType>;
	Phase(): IBaseExecution<PS.Phase>;
	ProjectSummaryTask(): IBaseExecution<PS.ProjectSummaryTask>;
	Stage(): IBaseExecution<PS.Stage>;
}

/*********************************************
* ProjectCollections
**********************************************/
export interface ProjectCollections extends ProjectProps {
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
	Engagements(): IBaseCollection<PS.ProjectEngagement>;
	Engagements(id: string | number): IBaseExecution<PS.ProjectEngagement>;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseExecution<PS.UserPermission>;
	QueueJobs(): IBaseCollection<PS.QueueJob>;
	QueueJobs(id: string | number): IBaseExecution<PS.QueueJob>;
}

/*********************************************
* ProjectQuery
**********************************************/
export interface ProjectQuery extends ProjectProps {
	CustomFields: IBaseResults<PS.CustomField>;
	Engagements: IBaseResults<PS.ProjectEngagement>;
	UserPermissions: IBaseResults<PS.UserPermission>;
	QueueJobs: IBaseResults<PS.QueueJob>;
}

/*********************************************
* ProjectMethods
**********************************************/
export interface ProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): IBaseExecution<PS.ResourcePlan>;
	leaveProjectStage(): IBaseExecution<any>;
	readyToLeaveProjectStage(): IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): IBaseExecution<any>;
}

/*********************************************
* IEngagement
**********************************************/
export interface IEngagement extends EngagementCollections,EngagementMethods,IBaseQuery<IEngagementQuery> {

}

/*********************************************
* IEngagementQuery
**********************************************/
export interface IEngagementQuery extends EngagementQuery,EngagementMethods {

}

/*********************************************
* Engagement
**********************************************/
export interface Engagement extends EngagementCollections, EngagementMethods {
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
	ModifiedBy(): IBaseExecution<SP.User>;
	Project(): IBaseExecution<PS.Project>;
	Resource(): IBaseExecution<PS.EnterpriseResource>;
	ReviewedBy(): IBaseExecution<SP.User>;
	SubmittedBy(): IBaseExecution<SP.User>;
}

/*********************************************
* EngagementCollections
**********************************************/
export interface EngagementCollections extends EngagementProps {
	Comments(): IBaseCollection<PS.EngagementComment>;
	Comments(id: string | number): IBaseExecution<PS.EngagementComment>;
}

/*********************************************
* EngagementQuery
**********************************************/
export interface EngagementQuery extends EngagementProps {
	Comments: IBaseResults<PS.EngagementComment>;
}

/*********************************************
* EngagementMethods
**********************************************/
export interface EngagementMethods {

}

/*********************************************
* EngagementComment
**********************************************/
export interface EngagementComment {
	Created?: any;
	Id?: any;
	Message?: string;
}

/*********************************************
* IProjectEngagement
**********************************************/
export interface IProjectEngagement extends ProjectEngagementCollections,ProjectEngagementMethods,IBaseQuery<IProjectEngagementQuery> {

}

/*********************************************
* IProjectEngagementQuery
**********************************************/
export interface IProjectEngagementQuery extends ProjectEngagementQuery,ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagement
**********************************************/
export interface ProjectEngagement extends PS.Engagement, ProjectEngagementCollections, ProjectEngagementMethods {
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
* ProjectEngagementCollections
**********************************************/
export interface ProjectEngagementCollections extends ProjectEngagementProps {

}

/*********************************************
* ProjectEngagementQuery
**********************************************/
export interface ProjectEngagementQuery extends ProjectEngagementProps {

}

/*********************************************
* ProjectEngagementMethods
**********************************************/
export interface ProjectEngagementMethods {
	deleteObject(): IBaseExecution<any>;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): IBaseExecution<Array<PS.ProjectEngagementTimephasedPeriod>>;
}

/*********************************************
* IEnterpriseProjectType
**********************************************/
export interface IEnterpriseProjectType extends EnterpriseProjectTypeCollections,EnterpriseProjectTypeMethods,IBaseQuery<IEnterpriseProjectTypeQuery> {

}

/*********************************************
* IEnterpriseProjectTypeQuery
**********************************************/
export interface IEnterpriseProjectTypeQuery extends EnterpriseProjectTypeQuery,EnterpriseProjectTypeMethods {

}

/*********************************************
* EnterpriseProjectType
**********************************************/
export interface EnterpriseProjectType extends EnterpriseProjectTypeCollections, EnterpriseProjectTypeMethods {
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

}

/*********************************************
* EnterpriseProjectTypeCollections
**********************************************/
export interface EnterpriseProjectTypeCollections extends EnterpriseProjectTypeProps {
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage>;
	ProjectDetailPages(id: string | number): IBaseExecution<PS.ProjectDetailPage>;
}

/*********************************************
* EnterpriseProjectTypeQuery
**********************************************/
export interface EnterpriseProjectTypeQuery extends EnterpriseProjectTypeProps {
	ProjectDetailPages: IBaseResults<PS.ProjectDetailPage>;
}

/*********************************************
* EnterpriseProjectTypeMethods
**********************************************/
export interface EnterpriseProjectTypeMethods {
	addDepartment(departmentValueGuid?: any): IBaseExecution<any>;
	deleteObject(): IBaseExecution<any>;
	removeDepartment(departmentValueGuid?: any): IBaseExecution<any>;
	updateCreatePDP(pdp?: PS.ProjectDetailPageCreationInformation): IBaseExecution<any>;
}

/*********************************************
* ProjectDetailPage
**********************************************/
export interface ProjectDetailPage {
	Id?: any;
	Name?: string;
	PageType?: number;
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
export interface IPhase extends PhaseCollections,PhaseMethods,IBaseQuery<IPhaseQuery> {

}

/*********************************************
* IPhaseQuery
**********************************************/
export interface IPhaseQuery extends PhaseQuery,PhaseMethods {

}

/*********************************************
* Phase
**********************************************/
export interface Phase extends PhaseCollections, PhaseMethods {
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* PhaseProps
**********************************************/
export interface PhaseProps {

}

/*********************************************
* PhaseCollections
**********************************************/
export interface PhaseCollections extends PhaseProps {
	Stages(): IBaseCollection<PS.Stage>;
	Stages(id: string | number): IBaseExecution<PS.Stage>;
}

/*********************************************
* PhaseQuery
**********************************************/
export interface PhaseQuery extends PhaseProps {
	Stages: IBaseResults<PS.Stage>;
}

/*********************************************
* PhaseMethods
**********************************************/
export interface PhaseMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IStage
**********************************************/
export interface IStage extends StageCollections,StageMethods,IBaseQuery<IStageQuery> {

}

/*********************************************
* IStageQuery
**********************************************/
export interface IStageQuery extends StageQuery,StageMethods {

}

/*********************************************
* Stage
**********************************************/
export interface Stage extends StageCollections, StageMethods {
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
	Phase(): IBaseExecution<PS.Phase>;
	WorkflowStatusPage(): IBaseExecution<PS.ProjectDetailPage>;
}

/*********************************************
* StageCollections
**********************************************/
export interface StageCollections extends StageProps {
	CustomFields(): IBaseCollection<PS.StageCustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.StageCustomField>;
	ProjectDetailPages(): IBaseCollection<PS.StageDetailPage>;
	ProjectDetailPages(id: string | number): IBaseExecution<PS.StageDetailPage>;
}

/*********************************************
* StageQuery
**********************************************/
export interface StageQuery extends StageProps {
	CustomFields: IBaseResults<PS.StageCustomField>;
	ProjectDetailPages: IBaseResults<PS.StageDetailPage>;
}

/*********************************************
* StageMethods
**********************************************/
export interface StageMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IStageCustomField
**********************************************/
export interface IStageCustomField extends StageCustomFieldCollections,StageCustomFieldMethods,IBaseQuery<IStageCustomFieldQuery> {

}

/*********************************************
* IStageCustomFieldQuery
**********************************************/
export interface IStageCustomFieldQuery extends StageCustomFieldQuery,StageCustomFieldMethods {

}

/*********************************************
* StageCustomField
**********************************************/
export interface StageCustomField extends StageCustomFieldCollections, StageCustomFieldMethods {
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageCustomFieldProps
**********************************************/
export interface StageCustomFieldProps {
	Stage(): IBaseExecution<PS.Stage>;
}

/*********************************************
* StageCustomFieldCollections
**********************************************/
export interface StageCustomFieldCollections extends StageCustomFieldProps {

}

/*********************************************
* StageCustomFieldQuery
**********************************************/
export interface StageCustomFieldQuery extends StageCustomFieldProps {

}

/*********************************************
* StageCustomFieldMethods
**********************************************/
export interface StageCustomFieldMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IStageDetailPage
**********************************************/
export interface IStageDetailPage extends StageDetailPageCollections,StageDetailPageMethods,IBaseQuery<IStageDetailPageQuery> {

}

/*********************************************
* IStageDetailPageQuery
**********************************************/
export interface IStageDetailPageQuery extends StageDetailPageQuery,StageDetailPageMethods {

}

/*********************************************
* StageDetailPage
**********************************************/
export interface StageDetailPage extends StageDetailPageCollections, StageDetailPageMethods {
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* StageDetailPageProps
**********************************************/
export interface StageDetailPageProps {
	Page(): IBaseExecution<PS.ProjectDetailPage>;
	Stage(): IBaseExecution<PS.Stage>;
}

/*********************************************
* StageDetailPageCollections
**********************************************/
export interface StageDetailPageCollections extends StageDetailPageProps {

}

/*********************************************
* StageDetailPageQuery
**********************************************/
export interface StageDetailPageQuery extends StageDetailPageProps {

}

/*********************************************
* StageDetailPageMethods
**********************************************/
export interface StageDetailPageMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ITask
**********************************************/
export interface ITask extends TaskCollections,TaskMethods,IBaseQuery<ITaskQuery> {

}

/*********************************************
* ITaskQuery
**********************************************/
export interface ITaskQuery extends TaskQuery,TaskMethods {

}

/*********************************************
* Task
**********************************************/
export interface Task extends TaskCollections, TaskMethods {
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
	SubProject(): IBaseExecution<PS.PublishedProject>;
}

/*********************************************
* TaskCollections
**********************************************/
export interface TaskCollections extends TaskProps {
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery extends TaskProps {
	CustomFields: IBaseResults<PS.CustomField>;
}

/*********************************************
* TaskMethods
**********************************************/
export interface TaskMethods {

}

/*********************************************
* IPublishedProject
**********************************************/
export interface IPublishedProject extends PublishedProjectCollections,PublishedProjectMethods,IBaseQuery<IPublishedProjectQuery> {

}

/*********************************************
* IPublishedProjectQuery
**********************************************/
export interface IPublishedProjectQuery extends PublishedProjectQuery,PublishedProjectMethods {

}

/*********************************************
* PublishedProject
**********************************************/
export interface PublishedProject extends PS.Project, PublishedProjectCollections, PublishedProjectMethods {
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
	Calendar(): IBaseExecution<PS.Calendar>;
	Draft(): IBaseExecution<PS.DraftProject>;
	IncludeCustomFields(): IBaseExecution<PS.PublishedProject>;
	Owner(): IBaseExecution<SP.User>;
	ProjectWorkflowInstance(): IBaseExecution<PS.ProjectWorkflowInstance>;
}

/*********************************************
* PublishedProjectCollections
**********************************************/
export interface PublishedProjectCollections extends PublishedProjectProps {
	Assignments(): IBaseCollection<PS.PublishedAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.PublishedAssignment>;
	EntityLinks(): IBaseCollection<PS.EntityLink>;
	EntityLinks(id: string | number): IBaseExecution<PS.EntityLink>;
	ProjectResources(): IBaseCollection<PS.PublishedProjectResource>;
	ProjectResources(id: string | number): IBaseExecution<PS.PublishedProjectResource>;
	TaskLinks(): IBaseCollection<PS.PublishedTaskLink>;
	TaskLinks(id: string | number): IBaseExecution<PS.PublishedTaskLink>;
	Tasks(): IBaseCollection<PS.PublishedTask>;
	Tasks(id: string | number): IBaseExecution<PS.PublishedTask>;
}

/*********************************************
* PublishedProjectQuery
**********************************************/
export interface PublishedProjectQuery extends PublishedProjectProps {
	Assignments: IBaseResults<PS.PublishedAssignment>;
	EntityLinks: IBaseResults<PS.EntityLink>;
	ProjectResources: IBaseResults<PS.PublishedProjectResource>;
	TaskLinks: IBaseResults<PS.PublishedTaskLink>;
	Tasks: IBaseResults<PS.PublishedTask>;
}

/*********************************************
* PublishedProjectMethods
**********************************************/
export interface PublishedProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): IBaseExecution<PS.ResourcePlan>;
	leaveProjectStage(): IBaseExecution<any>;
	readyToLeaveProjectStage(): IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): IBaseExecution<any>;
	checkOut(): IBaseExecution<PS.DraftProject>;
	createProjectSite(siteName?: string): IBaseExecution<any>;
	deleteObject(): IBaseExecution<PS.QueueJob>;
	submitToWorkflow(): IBaseExecution<any>;
	updateVisibilityCustomFields(): IBaseExecution<PS.QueueJob>;
}

/*********************************************
* PublishedAssignment
**********************************************/
export interface PublishedAssignment extends PS.Assignment {
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
* IPublishedProjectResource
**********************************************/
export interface IPublishedProjectResource extends PublishedProjectResourceCollections,PublishedProjectResourceMethods,IBaseQuery<IPublishedProjectResourceQuery> {

}

/*********************************************
* IPublishedProjectResourceQuery
**********************************************/
export interface IPublishedProjectResourceQuery extends PublishedProjectResourceQuery,PublishedProjectResourceMethods {

}

/*********************************************
* PublishedProjectResource
**********************************************/
export interface PublishedProjectResource extends PS.ProjectResource, PublishedProjectResourceCollections, PublishedProjectResourceMethods {
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
	DefaultAssignmentOwner(): IBaseExecution<SP.User>;
}

/*********************************************
* PublishedProjectResourceCollections
**********************************************/
export interface PublishedProjectResourceCollections extends PublishedProjectResourceProps {
	Assignments(): IBaseCollection<PS.PublishedAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.PublishedAssignment>;
}

/*********************************************
* PublishedProjectResourceQuery
**********************************************/
export interface PublishedProjectResourceQuery extends PublishedProjectResourceProps {
	Assignments: IBaseResults<PS.PublishedAssignment>;
}

/*********************************************
* PublishedProjectResourceMethods
**********************************************/
export interface PublishedProjectResourceMethods {

}

/*********************************************
* IPublishedTask
**********************************************/
export interface IPublishedTask extends PublishedTaskCollections,PublishedTaskMethods,IBaseQuery<IPublishedTaskQuery> {

}

/*********************************************
* IPublishedTaskQuery
**********************************************/
export interface IPublishedTaskQuery extends PublishedTaskQuery,PublishedTaskMethods {

}

/*********************************************
* PublishedTask
**********************************************/
export interface PublishedTask extends PS.Task, PublishedTaskCollections, PublishedTaskMethods {
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
	Calendar(): IBaseExecution<PS.Calendar>;
	Parent(): IBaseExecution<PS.PublishedTask>;
	StatusManager(): IBaseExecution<SP.User>;
	TaskPlanLink(): IBaseExecution<PS.TaskPlanLink>;
}

/*********************************************
* PublishedTaskCollections
**********************************************/
export interface PublishedTaskCollections extends PublishedTaskProps {
	Assignments(): IBaseCollection<PS.PublishedAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.PublishedAssignment>;
	EntityLinks(): IBaseCollection<PS.EntityLink>;
	EntityLinks(id: string | number): IBaseExecution<PS.EntityLink>;
	Predecessors(): IBaseCollection<PS.PublishedTaskLink>;
	Predecessors(id: string | number): IBaseExecution<PS.PublishedTaskLink>;
	Successors(): IBaseCollection<PS.PublishedTaskLink>;
	Successors(id: string | number): IBaseExecution<PS.PublishedTaskLink>;
}

/*********************************************
* PublishedTaskQuery
**********************************************/
export interface PublishedTaskQuery extends PublishedTaskProps {
	Assignments: IBaseResults<PS.PublishedAssignment>;
	EntityLinks: IBaseResults<PS.EntityLink>;
	Predecessors: IBaseResults<PS.PublishedTaskLink>;
	Successors: IBaseResults<PS.PublishedTaskLink>;
}

/*********************************************
* PublishedTaskMethods
**********************************************/
export interface PublishedTaskMethods {
	addTaskPlanLink(parameters?: PS.TaskPlanLinksCreationInformation): IBaseExecution<PS.TaskPlanLink>;
	deleteTaskPlanLink(): IBaseExecution<any>;
}

/*********************************************
* IEntityLink
**********************************************/
export interface IEntityLink extends EntityLinkCollections,EntityLinkMethods,IBaseQuery<IEntityLinkQuery> {

}

/*********************************************
* IEntityLinkQuery
**********************************************/
export interface IEntityLinkQuery extends EntityLinkQuery,EntityLinkMethods {

}

/*********************************************
* EntityLink
**********************************************/
export interface EntityLink extends EntityLinkCollections, EntityLinkMethods {
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
* EntityLinkCollections
**********************************************/
export interface EntityLinkCollections extends EntityLinkProps {

}

/*********************************************
* EntityLinkQuery
**********************************************/
export interface EntityLinkQuery extends EntityLinkProps {

}

/*********************************************
* EntityLinkMethods
**********************************************/
export interface EntityLinkMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* TaskLink
**********************************************/
export interface TaskLink {
	Id?: any;
}

/*********************************************
* PublishedTaskLink
**********************************************/
export interface PublishedTaskLink extends PS.TaskLink {
	DependencyType?: number;
}

/*********************************************
* ITaskPlanLink
**********************************************/
export interface ITaskPlanLink extends TaskPlanLinkCollections,TaskPlanLinkMethods,IBaseQuery<ITaskPlanLinkQuery> {

}

/*********************************************
* ITaskPlanLinkQuery
**********************************************/
export interface ITaskPlanLinkQuery extends TaskPlanLinkQuery,TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLink
**********************************************/
export interface TaskPlanLink extends TaskPlanLinkCollections, TaskPlanLinkMethods {
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
* TaskPlanLinkCollections
**********************************************/
export interface TaskPlanLinkCollections extends TaskPlanLinkProps {

}

/*********************************************
* TaskPlanLinkQuery
**********************************************/
export interface TaskPlanLinkQuery extends TaskPlanLinkProps {

}

/*********************************************
* TaskPlanLinkMethods
**********************************************/
export interface TaskPlanLinkMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IDraftProject
**********************************************/
export interface IDraftProject extends DraftProjectCollections,DraftProjectMethods,IBaseQuery<IDraftProjectQuery> {

}

/*********************************************
* IDraftProjectQuery
**********************************************/
export interface IDraftProjectQuery extends DraftProjectQuery,DraftProjectMethods {

}

/*********************************************
* DraftProject
**********************************************/
export interface DraftProject extends PS.Project, DraftProjectCollections, DraftProjectMethods {
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
	Calendar(): IBaseExecution<PS.Calendar>;
	IncludeCustomFields(): IBaseExecution<PS.DraftProject>;
	Owner(): IBaseExecution<SP.User>;
}

/*********************************************
* DraftProjectCollections
**********************************************/
export interface DraftProjectCollections extends DraftProjectProps {
	Assignments(): IBaseCollection<PS.DraftAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.DraftAssignment>;
	ProjectResources(): IBaseCollection<PS.DraftProjectResource>;
	ProjectResources(id: string | number): IBaseExecution<PS.DraftProjectResource>;
	TaskLinks(): IBaseCollection<PS.DraftTaskLink>;
	TaskLinks(id: string | number): IBaseExecution<PS.DraftTaskLink>;
	Tasks(): IBaseCollection<PS.DraftTask>;
	Tasks(id: string | number): IBaseExecution<PS.DraftTask>;
}

/*********************************************
* DraftProjectQuery
**********************************************/
export interface DraftProjectQuery extends DraftProjectProps {
	Assignments: IBaseResults<PS.DraftAssignment>;
	ProjectResources: IBaseResults<PS.DraftProjectResource>;
	TaskLinks: IBaseResults<PS.DraftTaskLink>;
	Tasks: IBaseResults<PS.DraftTask>;
}

/*********************************************
* DraftProjectMethods
**********************************************/
export interface DraftProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): IBaseExecution<PS.ResourcePlan>;
	leaveProjectStage(): IBaseExecution<any>;
	readyToLeaveProjectStage(): IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): IBaseExecution<any>;
	changeEnterpriseProjectType(enterpriseProjectTypeUid?: any): IBaseExecution<any>;
	checkIn(force?: boolean): IBaseExecution<PS.QueueJob>;
	getChanges(token?: string): IBaseExecution<PS.DraftProject>;
	publish(checkIn?: boolean): IBaseExecution<PS.QueueJob>;
	update(): IBaseExecution<PS.QueueJob>;
	updateCustomFields(customFieldDictionary?: Array<SP.KeyValue>): IBaseExecution<PS.QueueJob>;
	validate(): IBaseExecution<any>;
}

/*********************************************
* IDraftProjectResource
**********************************************/
export interface IDraftProjectResource extends DraftProjectResourceCollections,DraftProjectResourceMethods,IBaseQuery<IDraftProjectResourceQuery> {

}

/*********************************************
* IDraftProjectResourceQuery
**********************************************/
export interface IDraftProjectResourceQuery extends DraftProjectResourceQuery,DraftProjectResourceMethods {

}

/*********************************************
* DraftProjectResource
**********************************************/
export interface DraftProjectResource extends PS.ProjectResource, DraftProjectResourceCollections, DraftProjectResourceMethods {
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
	DefaultAssignmentOwner(): IBaseExecution<SP.User>;
}

/*********************************************
* DraftProjectResourceCollections
**********************************************/
export interface DraftProjectResourceCollections extends DraftProjectResourceProps {
	Assignments(): IBaseCollection<PS.DraftAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.DraftAssignment>;
}

/*********************************************
* DraftProjectResourceQuery
**********************************************/
export interface DraftProjectResourceQuery extends DraftProjectResourceProps {
	Assignments: IBaseResults<PS.DraftAssignment>;
}

/*********************************************
* DraftProjectResourceMethods
**********************************************/
export interface DraftProjectResourceMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IDraftTaskLink
**********************************************/
export interface IDraftTaskLink extends DraftTaskLinkCollections,DraftTaskLinkMethods,IBaseQuery<IDraftTaskLinkQuery> {

}

/*********************************************
* IDraftTaskLinkQuery
**********************************************/
export interface IDraftTaskLinkQuery extends DraftTaskLinkQuery,DraftTaskLinkMethods {

}

/*********************************************
* DraftTaskLink
**********************************************/
export interface DraftTaskLink extends PS.TaskLink, DraftTaskLinkCollections, DraftTaskLinkMethods {
	DependencyType?: number;
	EndId?: any;
	StartId?: any;
}

/*********************************************
* DraftTaskLinkProps
**********************************************/
export interface DraftTaskLinkProps {
	End(): IBaseExecution<PS.DraftTask>;
	Start(): IBaseExecution<PS.DraftTask>;
}

/*********************************************
* DraftTaskLinkCollections
**********************************************/
export interface DraftTaskLinkCollections extends DraftTaskLinkProps {

}

/*********************************************
* DraftTaskLinkQuery
**********************************************/
export interface DraftTaskLinkQuery extends DraftTaskLinkProps {

}

/*********************************************
* DraftTaskLinkMethods
**********************************************/
export interface DraftTaskLinkMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IDraftTask
**********************************************/
export interface IDraftTask extends DraftTaskCollections,DraftTaskMethods,IBaseQuery<IDraftTaskQuery> {

}

/*********************************************
* IDraftTaskQuery
**********************************************/
export interface IDraftTaskQuery extends DraftTaskQuery,DraftTaskMethods {

}

/*********************************************
* DraftTask
**********************************************/
export interface DraftTask extends PS.Task, DraftTaskCollections, DraftTaskMethods {
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
	Calendar(): IBaseExecution<PS.Calendar>;
	Parent(): IBaseExecution<PS.DraftTask>;
	StatusManager(): IBaseExecution<SP.User>;
}

/*********************************************
* DraftTaskCollections
**********************************************/
export interface DraftTaskCollections extends DraftTaskProps {
	Assignments(): IBaseCollection<PS.DraftAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.DraftAssignment>;
	Predecessors(): IBaseCollection<PS.DraftTaskLink>;
	Predecessors(id: string | number): IBaseExecution<PS.DraftTaskLink>;
	Successors(): IBaseCollection<PS.DraftTaskLink>;
	Successors(id: string | number): IBaseExecution<PS.DraftTaskLink>;
}

/*********************************************
* DraftTaskQuery
**********************************************/
export interface DraftTaskQuery extends DraftTaskProps {
	Assignments: IBaseResults<PS.DraftAssignment>;
	Predecessors: IBaseResults<PS.DraftTaskLink>;
	Successors: IBaseResults<PS.DraftTaskLink>;
}

/*********************************************
* DraftTaskMethods
**********************************************/
export interface DraftTaskMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IProjectWorkflowInstance
**********************************************/
export interface IProjectWorkflowInstance extends ProjectWorkflowInstanceCollections,ProjectWorkflowInstanceMethods,IBaseQuery<IProjectWorkflowInstanceQuery> {

}

/*********************************************
* IProjectWorkflowInstanceQuery
**********************************************/
export interface IProjectWorkflowInstanceQuery extends ProjectWorkflowInstanceQuery,ProjectWorkflowInstanceMethods {

}

/*********************************************
* ProjectWorkflowInstance
**********************************************/
export interface ProjectWorkflowInstance extends ProjectWorkflowInstanceCollections, ProjectWorkflowInstanceMethods {
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
	Project(): IBaseExecution<PS.Project>;
	WorkflowInstance(): IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
	WorkflowInstanceOwner(): IBaseExecution<SP.User>;
}

/*********************************************
* ProjectWorkflowInstanceCollections
**********************************************/
export interface ProjectWorkflowInstanceCollections extends ProjectWorkflowInstanceProps {

}

/*********************************************
* ProjectWorkflowInstanceQuery
**********************************************/
export interface ProjectWorkflowInstanceQuery extends ProjectWorkflowInstanceProps {

}

/*********************************************
* ProjectWorkflowInstanceMethods
**********************************************/
export interface ProjectWorkflowInstanceMethods {
	restartWorkflow(): IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
	restartWorkflowSkipToStage(stageId?: any): IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
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
export interface IQueueJob extends QueueJobCollections,QueueJobMethods,IBaseQuery<IQueueJobQuery> {

}

/*********************************************
* IQueueJobQuery
**********************************************/
export interface IQueueJobQuery extends QueueJobQuery,QueueJobMethods {

}

/*********************************************
* QueueJob
**********************************************/
export interface QueueJob extends QueueJobCollections, QueueJobMethods {
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
	Project(): IBaseExecution<PS.Project>;
	Submitter(): IBaseExecution<SP.User>;
}

/*********************************************
* QueueJobCollections
**********************************************/
export interface QueueJobCollections extends QueueJobProps {

}

/*********************************************
* QueueJobQuery
**********************************************/
export interface QueueJobQuery extends QueueJobProps {

}

/*********************************************
* QueueJobMethods
**********************************************/
export interface QueueJobMethods {
	cancel(): IBaseExecution<any>;
}

/*********************************************
* IStatusTask
**********************************************/
export interface IStatusTask extends StatusTaskCollections,StatusTaskMethods,IBaseQuery<IStatusTaskQuery> {

}

/*********************************************
* IStatusTaskQuery
**********************************************/
export interface IStatusTaskQuery extends StatusTaskQuery,StatusTaskMethods {

}

/*********************************************
* StatusTask
**********************************************/
export interface StatusTask extends StatusTaskCollections, StatusTaskMethods {
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
	StatusManager(): IBaseExecution<SP.User>;
}

/*********************************************
* StatusTaskCollections
**********************************************/
export interface StatusTaskCollections extends StatusTaskProps {
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
}

/*********************************************
* StatusTaskQuery
**********************************************/
export interface StatusTaskQuery extends StatusTaskProps {
	CustomFields: IBaseResults<PS.CustomField>;
}

/*********************************************
* StatusTaskMethods
**********************************************/
export interface StatusTaskMethods {

}

/*********************************************
* IEnterpriseResourceCostRateTable
**********************************************/
export interface IEnterpriseResourceCostRateTable extends EnterpriseResourceCostRateTableCollections,EnterpriseResourceCostRateTableMethods,IBaseQuery<IEnterpriseResourceCostRateTableQuery> {

}

/*********************************************
* IEnterpriseResourceCostRateTableQuery
**********************************************/
export interface IEnterpriseResourceCostRateTableQuery extends EnterpriseResourceCostRateTableQuery,EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable extends EnterpriseResourceCostRateTableCollections, EnterpriseResourceCostRateTableMethods {
	Name?: number;
}

/*********************************************
* EnterpriseResourceCostRateTableProps
**********************************************/
export interface EnterpriseResourceCostRateTableProps {

}

/*********************************************
* EnterpriseResourceCostRateTableCollections
**********************************************/
export interface EnterpriseResourceCostRateTableCollections extends EnterpriseResourceCostRateTableProps {
	CostRates(): IBaseCollection<PS.EnterpriseResourceCostRate>;
	CostRates(id: string | number): IBaseExecution<PS.EnterpriseResourceCostRate>;
}

/*********************************************
* EnterpriseResourceCostRateTableQuery
**********************************************/
export interface EnterpriseResourceCostRateTableQuery extends EnterpriseResourceCostRateTableProps {
	CostRates: IBaseResults<PS.EnterpriseResourceCostRate>;
}

/*********************************************
* EnterpriseResourceCostRateTableMethods
**********************************************/
export interface EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* IEnterpriseResourceCostRate
**********************************************/
export interface IEnterpriseResourceCostRate extends EnterpriseResourceCostRateCollections,EnterpriseResourceCostRateMethods,IBaseQuery<IEnterpriseResourceCostRateQuery> {

}

/*********************************************
* IEnterpriseResourceCostRateQuery
**********************************************/
export interface IEnterpriseResourceCostRateQuery extends EnterpriseResourceCostRateQuery,EnterpriseResourceCostRateMethods {

}

/*********************************************
* EnterpriseResourceCostRate
**********************************************/
export interface EnterpriseResourceCostRate extends EnterpriseResourceCostRateCollections, EnterpriseResourceCostRateMethods {
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
* EnterpriseResourceCostRateCollections
**********************************************/
export interface EnterpriseResourceCostRateCollections extends EnterpriseResourceCostRateProps {

}

/*********************************************
* EnterpriseResourceCostRateQuery
**********************************************/
export interface EnterpriseResourceCostRateQuery extends EnterpriseResourceCostRateProps {

}

/*********************************************
* EnterpriseResourceCostRateMethods
**********************************************/
export interface EnterpriseResourceCostRateMethods {
	restfulDelete(): IBaseExecution<any>;
	rESTfulUpdate(): IBaseExecution<any>;
}

/*********************************************
* IResourceEngagement
**********************************************/
export interface IResourceEngagement extends ResourceEngagementCollections,ResourceEngagementMethods,IBaseQuery<IResourceEngagementQuery> {

}

/*********************************************
* IResourceEngagementQuery
**********************************************/
export interface IResourceEngagementQuery extends ResourceEngagementQuery,ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagement
**********************************************/
export interface ResourceEngagement extends PS.Engagement, ResourceEngagementCollections, ResourceEngagementMethods {
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
* ResourceEngagementCollections
**********************************************/
export interface ResourceEngagementCollections extends ResourceEngagementProps {

}

/*********************************************
* ResourceEngagementQuery
**********************************************/
export interface ResourceEngagementQuery extends ResourceEngagementProps {

}

/*********************************************
* ResourceEngagementMethods
**********************************************/
export interface ResourceEngagementMethods {
	deleteObject(): IBaseExecution<any>;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): IBaseExecution<Array<PS.ResourceEngagementTimephasedPeriod>>;
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
* EntityTypes
**********************************************/
export interface EntityTypes {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
export interface IEventHandler extends EventHandlerCollections,EventHandlerMethods,IBaseQuery<IEventHandlerQuery> {

}

/*********************************************
* IEventHandlerQuery
**********************************************/
export interface IEventHandlerQuery extends EventHandlerQuery,EventHandlerMethods {

}

/*********************************************
* EventHandler
**********************************************/
export interface EventHandler extends EventHandlerCollections, EventHandlerMethods {
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
	Event(): IBaseExecution<PS.Event>;
}

/*********************************************
* EventHandlerCollections
**********************************************/
export interface EventHandlerCollections extends EventHandlerProps {

}

/*********************************************
* EventHandlerQuery
**********************************************/
export interface EventHandlerQuery extends EventHandlerProps {

}

/*********************************************
* EventHandlerMethods
**********************************************/
export interface EventHandlerMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ILookupCost
**********************************************/
export interface ILookupCost extends LookupCostCollections,LookupCostMethods,IBaseQuery<ILookupCostQuery> {

}

/*********************************************
* ILookupCostQuery
**********************************************/
export interface ILookupCostQuery extends LookupCostQuery,LookupCostMethods {

}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry, LookupCostCollections, LookupCostMethods {
	Value?: number;
}

/*********************************************
* LookupCostProps
**********************************************/
export interface LookupCostProps {

}

/*********************************************
* LookupCostCollections
**********************************************/
export interface LookupCostCollections extends LookupCostProps {

}

/*********************************************
* LookupCostQuery
**********************************************/
export interface LookupCostQuery extends LookupCostProps {

}

/*********************************************
* LookupCostMethods
**********************************************/
export interface LookupCostMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ILookupDate
**********************************************/
export interface ILookupDate extends LookupDateCollections,LookupDateMethods,IBaseQuery<ILookupDateQuery> {

}

/*********************************************
* ILookupDateQuery
**********************************************/
export interface ILookupDateQuery extends LookupDateQuery,LookupDateMethods {

}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry, LookupDateCollections, LookupDateMethods {
	Value?: any;
}

/*********************************************
* LookupDateProps
**********************************************/
export interface LookupDateProps {

}

/*********************************************
* LookupDateCollections
**********************************************/
export interface LookupDateCollections extends LookupDateProps {

}

/*********************************************
* LookupDateQuery
**********************************************/
export interface LookupDateQuery extends LookupDateProps {

}

/*********************************************
* LookupDateMethods
**********************************************/
export interface LookupDateMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ILookupDuration
**********************************************/
export interface ILookupDuration extends LookupDurationCollections,LookupDurationMethods,IBaseQuery<ILookupDurationQuery> {

}

/*********************************************
* ILookupDurationQuery
**********************************************/
export interface ILookupDurationQuery extends LookupDurationQuery,LookupDurationMethods {

}

/*********************************************
* LookupDuration
**********************************************/
export interface LookupDuration extends PS.LookupEntry, LookupDurationCollections, LookupDurationMethods {
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
* LookupDurationCollections
**********************************************/
export interface LookupDurationCollections extends LookupDurationProps {

}

/*********************************************
* LookupDurationQuery
**********************************************/
export interface LookupDurationQuery extends LookupDurationProps {

}

/*********************************************
* LookupDurationMethods
**********************************************/
export interface LookupDurationMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ILookupNumber
**********************************************/
export interface ILookupNumber extends LookupNumberCollections,LookupNumberMethods,IBaseQuery<ILookupNumberQuery> {

}

/*********************************************
* ILookupNumberQuery
**********************************************/
export interface ILookupNumberQuery extends LookupNumberQuery,LookupNumberMethods {

}

/*********************************************
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry, LookupNumberCollections, LookupNumberMethods {
	Value?: number;
}

/*********************************************
* LookupNumberProps
**********************************************/
export interface LookupNumberProps {

}

/*********************************************
* LookupNumberCollections
**********************************************/
export interface LookupNumberCollections extends LookupNumberProps {

}

/*********************************************
* LookupNumberQuery
**********************************************/
export interface LookupNumberQuery extends LookupNumberProps {

}

/*********************************************
* LookupNumberMethods
**********************************************/
export interface LookupNumberMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ILookupText
**********************************************/
export interface ILookupText extends LookupTextCollections,LookupTextMethods,IBaseQuery<ILookupTextQuery> {

}

/*********************************************
* ILookupTextQuery
**********************************************/
export interface ILookupTextQuery extends LookupTextQuery,LookupTextMethods {

}

/*********************************************
* LookupText
**********************************************/
export interface LookupText extends PS.LookupEntry, LookupTextCollections, LookupTextMethods {
	HasChildren?: boolean;
	Mask?: PS.LookupMask;
	Value?: string;
}

/*********************************************
* LookupTextProps
**********************************************/
export interface LookupTextProps {
	Parent(): IBaseExecution<PS.LookupText>;
}

/*********************************************
* LookupTextCollections
**********************************************/
export interface LookupTextCollections extends LookupTextProps {

}

/*********************************************
* LookupTextQuery
**********************************************/
export interface LookupTextQuery extends LookupTextProps {

}

/*********************************************
* LookupTextMethods
**********************************************/
export interface LookupTextMethods {
	deleteObject(): IBaseExecution<any>;
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
export interface IPlanAssignment extends PlanAssignmentCollections,PlanAssignmentMethods,IBaseQuery<IPlanAssignmentQuery> {

}

/*********************************************
* IPlanAssignmentQuery
**********************************************/
export interface IPlanAssignmentQuery extends PlanAssignmentQuery,PlanAssignmentMethods {

}

/*********************************************
* PlanAssignment
**********************************************/
export interface PlanAssignment extends PlanAssignmentCollections, PlanAssignmentMethods {
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
	Resource(): IBaseExecution<PS.EnterpriseResource>;
}

/*********************************************
* PlanAssignmentCollections
**********************************************/
export interface PlanAssignmentCollections extends PlanAssignmentProps {
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
	Intervals(): IBaseCollection<PS.PlanAssignmentInterval>;
	Intervals(id: string | number): IBaseExecution<PS.PlanAssignmentInterval>;
}

/*********************************************
* PlanAssignmentQuery
**********************************************/
export interface PlanAssignmentQuery extends PlanAssignmentProps {
	CustomFields: IBaseResults<PS.CustomField>;
	Intervals: IBaseResults<PS.PlanAssignmentInterval>;
}

/*********************************************
* PlanAssignmentMethods
**********************************************/
export interface PlanAssignmentMethods {
	deleteObject(): IBaseExecution<any>;
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
export interface IProjectServer extends ProjectServerCollections,ProjectServerMethods,IBaseQuery<IProjectServerQuery> {

}

/*********************************************
* IProjectServerQuery
**********************************************/
export interface IProjectServerQuery extends ProjectServerQuery,ProjectServerMethods {

}

/*********************************************
* ProjectServer
**********************************************/
export interface ProjectServer extends ProjectServerCollections, ProjectServerMethods {
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
	EntityTypes(): IBaseExecution<PS.EntityTypes>;
	Settings(): IBaseExecution<PS.Settings>;
	WorkflowActivities(): IBaseExecution<PS.WorkflowActivities>;
	WorkflowDesigner(): IBaseExecution<PS.WorkflowDesigner>;
}

/*********************************************
* ProjectServerCollections
**********************************************/
export interface ProjectServerCollections extends ProjectServerProps {
	Calendars(): IBaseCollection<PS.Calendar>;
	Calendars(id: string | number): IBaseExecution<PS.Calendar>;
	CustomFields(): IBaseCollection<PS.CustomField>;
	CustomFields(id: string | number): IBaseExecution<PS.CustomField>;
	EnterpriseProjectTypes(): IBaseCollection<PS.EnterpriseProjectType>;
	EnterpriseProjectTypes(id: string | number): IBaseExecution<PS.EnterpriseProjectType>;
	EnterpriseResources(): IBaseCollection<PS.EnterpriseResource>;
	EnterpriseResources(id: string | number): IBaseExecution<PS.EnterpriseResource>;
	EventHandlers(): IBaseCollection<PS.EventHandler>;
	EventHandlers(id: string | number): IBaseExecution<PS.EventHandler>;
	Events(): IBaseCollection<PS.Event>;
	Events(id: string | number): IBaseExecution<PS.Event>;
	LookupTables(): IBaseCollection<PS.LookupTable>;
	LookupTables(id: string | number): IBaseExecution<PS.LookupTable>;
	Phases(): IBaseCollection<PS.Phase>;
	Phases(id: string | number): IBaseExecution<PS.Phase>;
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage>;
	ProjectDetailPages(id: string | number): IBaseExecution<PS.ProjectDetailPage>;
	Projects(): IBaseCollection<PS.PublishedProject>;
	Projects(id: string | number): IBaseExecution<PS.PublishedProject>;
	ProjectWorkflowInstances(): IBaseCollection<PS.ProjectWorkflowInstance>;
	ProjectWorkflowInstances(id: string | number): IBaseExecution<PS.ProjectWorkflowInstance>;
	Stages(): IBaseCollection<PS.Stage>;
	Stages(id: string | number): IBaseExecution<PS.Stage>;
	TimeSheetPeriods(): IBaseCollection<PS.TimeSheetPeriod>;
	TimeSheetPeriods(id: string | number): IBaseExecution<PS.TimeSheetPeriod>;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseExecution<PS.UserPermission>;
}

/*********************************************
* ProjectServerQuery
**********************************************/
export interface ProjectServerQuery extends ProjectServerProps {
	Calendars: IBaseResults<PS.Calendar>;
	CustomFields: IBaseResults<PS.CustomField>;
	EnterpriseProjectTypes: IBaseResults<PS.EnterpriseProjectType>;
	EnterpriseResources: IBaseResults<PS.EnterpriseResource>;
	EventHandlers: IBaseResults<PS.EventHandler>;
	Events: IBaseResults<PS.Event>;
	LookupTables: IBaseResults<PS.LookupTable>;
	Phases: IBaseResults<PS.Phase>;
	ProjectDetailPages: IBaseResults<PS.ProjectDetailPage>;
	Projects: IBaseResults<PS.PublishedProject>;
	ProjectWorkflowInstances: IBaseResults<PS.ProjectWorkflowInstance>;
	Stages: IBaseResults<PS.Stage>;
	TimeSheetPeriods: IBaseResults<PS.TimeSheetPeriod>;
	UserPermissions: IBaseResults<PS.UserPermission>;
}

/*********************************************
* ProjectServerMethods
**********************************************/
export interface ProjectServerMethods {
	getDeletedPublishedAssignments(deletedDate?: any): IBaseExecution<Array<PS.DeletedPublishedAssignment>>;
	stopDelegation(): IBaseExecution<any>;
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
export interface ITimeSheetPeriod extends TimeSheetPeriodCollections,TimeSheetPeriodMethods,IBaseQuery<ITimeSheetPeriodQuery> {

}

/*********************************************
* ITimeSheetPeriodQuery
**********************************************/
export interface ITimeSheetPeriodQuery extends TimeSheetPeriodQuery,TimeSheetPeriodMethods {

}

/*********************************************
* TimeSheetPeriod
**********************************************/
export interface TimeSheetPeriod extends TimeSheetPeriodCollections, TimeSheetPeriodMethods {
	End?: any;
	Id?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* TimeSheetPeriodProps
**********************************************/
export interface TimeSheetPeriodProps {
	TimeSheet(): IBaseExecution<PS.TimeSheet>;
}

/*********************************************
* TimeSheetPeriodCollections
**********************************************/
export interface TimeSheetPeriodCollections extends TimeSheetPeriodProps {

}

/*********************************************
* TimeSheetPeriodQuery
**********************************************/
export interface TimeSheetPeriodQuery extends TimeSheetPeriodProps {

}

/*********************************************
* TimeSheetPeriodMethods
**********************************************/
export interface TimeSheetPeriodMethods {
	createTimeSheet(): IBaseExecution<PS.TimeSheet>;
}

/*********************************************
* ITimeSheet
**********************************************/
export interface ITimeSheet extends TimeSheetCollections,TimeSheetMethods,IBaseQuery<ITimeSheetQuery> {

}

/*********************************************
* ITimeSheetQuery
**********************************************/
export interface ITimeSheetQuery extends TimeSheetQuery,TimeSheetMethods {

}

/*********************************************
* TimeSheet
**********************************************/
export interface TimeSheet extends TimeSheetCollections, TimeSheetMethods {
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
	Creator(): IBaseExecution<SP.User>;
	Manager(): IBaseExecution<SP.User>;
	Period(): IBaseExecution<PS.TimeSheetPeriod>;
}

/*********************************************
* TimeSheetCollections
**********************************************/
export interface TimeSheetCollections extends TimeSheetProps {
	Lines(): IBaseCollection<PS.TimeSheetLine>;
	Lines(id: string | number): IBaseExecution<PS.TimeSheetLine>;
}

/*********************************************
* TimeSheetQuery
**********************************************/
export interface TimeSheetQuery extends TimeSheetProps {
	Lines: IBaseResults<PS.TimeSheetLine>;
}

/*********************************************
* TimeSheetMethods
**********************************************/
export interface TimeSheetMethods {
	deleteObject(): IBaseExecution<any>;
	recall(): IBaseExecution<any>;
	submit(comment?: string): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ITimeSheetLine
**********************************************/
export interface ITimeSheetLine extends TimeSheetLineCollections,TimeSheetLineMethods,IBaseQuery<ITimeSheetLineQuery> {

}

/*********************************************
* ITimeSheetLineQuery
**********************************************/
export interface ITimeSheetLineQuery extends TimeSheetLineQuery,TimeSheetLineMethods {

}

/*********************************************
* TimeSheetLine
**********************************************/
export interface TimeSheetLine extends TimeSheetLineCollections, TimeSheetLineMethods {
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
	Assignment(): IBaseExecution<PS.PublishedAssignment>;
	TimeSheet(): IBaseExecution<PS.TimeSheet>;
}

/*********************************************
* TimeSheetLineCollections
**********************************************/
export interface TimeSheetLineCollections extends TimeSheetLineProps {
	Work(): IBaseCollection<PS.TimeSheetWork>;
	Work(id: string | number): IBaseExecution<PS.TimeSheetWork>;
}

/*********************************************
* TimeSheetLineQuery
**********************************************/
export interface TimeSheetLineQuery extends TimeSheetLineProps {
	Work: IBaseResults<PS.TimeSheetWork>;
}

/*********************************************
* TimeSheetLineMethods
**********************************************/
export interface TimeSheetLineMethods {
	deleteObject(): IBaseExecution<any>;
	submit(comment?: string): IBaseExecution<any>;
}

/*********************************************
* ITimeSheetWork
**********************************************/
export interface ITimeSheetWork extends TimeSheetWorkCollections,TimeSheetWorkMethods,IBaseQuery<ITimeSheetWorkQuery> {

}

/*********************************************
* ITimeSheetWorkQuery
**********************************************/
export interface ITimeSheetWorkQuery extends TimeSheetWorkQuery,TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWork
**********************************************/
export interface TimeSheetWork extends TimeSheetWorkCollections, TimeSheetWorkMethods {
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
* TimeSheetWorkCollections
**********************************************/
export interface TimeSheetWorkCollections extends TimeSheetWorkProps {

}

/*********************************************
* TimeSheetWorkQuery
**********************************************/
export interface TimeSheetWorkQuery extends TimeSheetWorkProps {

}

/*********************************************
* TimeSheetWorkMethods
**********************************************/
export interface TimeSheetWorkMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IWorkflowActivities
**********************************************/
export interface IWorkflowActivities extends WorkflowActivitiesCollections,WorkflowActivitiesMethods,IBaseQuery<IWorkflowActivitiesQuery> {

}

/*********************************************
* IWorkflowActivitiesQuery
**********************************************/
export interface IWorkflowActivitiesQuery extends WorkflowActivitiesQuery,WorkflowActivitiesMethods {

}

/*********************************************
* WorkflowActivities
**********************************************/
export interface WorkflowActivities extends WorkflowActivitiesCollections, WorkflowActivitiesMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowActivitiesProps
**********************************************/
export interface WorkflowActivitiesProps {

}

/*********************************************
* WorkflowActivitiesCollections
**********************************************/
export interface WorkflowActivitiesCollections extends WorkflowActivitiesProps {

}

/*********************************************
* WorkflowActivitiesQuery
**********************************************/
export interface WorkflowActivitiesQuery extends WorkflowActivitiesProps {

}

/*********************************************
* WorkflowActivitiesMethods
**********************************************/
export interface WorkflowActivitiesMethods {
	checkInWithJobId(projId?: any, jobId?: any, force?: boolean): IBaseExecution<any>;
	createProjectFromListItem(webId?: any, listId?: any, itemId?: number, eptId?: any): IBaseExecution<any>;
	enterProjectStage(projectId?: any, stageId?: any): IBaseExecution<any>;
	leaveProjectStage(projectId?: any): IBaseExecution<any>;
	publishSummaryWithJobId(projId?: any, jobId?: any): IBaseExecution<any>;
	publishWithJobId(projectId?: any, jobId?: any): IBaseExecution<any>;
	readBooleanProperty(projectId?: any, propertyId?: string): IBaseExecution<boolean>;
	readCurrencyProperty(projectId?: any, propertyId?: string): IBaseExecution<number>;
	readDateTimeProperty(projectId?: any, propertyId?: string): IBaseExecution<any>;
	readGuidProperty(projectId?: any, propertyId?: string): IBaseExecution<any>;
	readIntegerProperty(projectId?: any, propertyId?: string): IBaseExecution<number>;
	readNumberProperty(projectId?: any, propertyId?: string): IBaseExecution<number>;
	readProjectProperty(projectId?: any, propertyId?: string): IBaseExecution<string>;
	readTextProperty(projectId?: any, propertyId?: string): IBaseExecution<string>;
	readyToLeaveProjectStage(projectId?: any): IBaseExecution<number>;
	updateBooleanProperty(projectId?: any, propertyId?: string, value?: boolean): IBaseExecution<any>;
	updateCurrencyProperty(projectId?: any, propertyId?: string, value?: number): IBaseExecution<any>;
	updateDateTimeProperty(projectId?: any, propertyId?: string, value?: any): IBaseExecution<any>;
	updateGuidProperty(projectId?: any, propertyId?: string, value?: any): IBaseExecution<any>;
	updateIdeaListItemStatus(projectId?: any, status?: string): IBaseExecution<any>;
	updateIntegerProperty(projectId?: any, propertyId?: string, value?: number): IBaseExecution<any>;
	updateNumberProperty(projectId?: any, propertyId?: string, value?: number): IBaseExecution<any>;
	updateProjectStageStatus(projectId?: any, stageId?: any, statusInformation?: string, stageStatusValue?: number, append?: boolean): IBaseExecution<any>;
	updateTextProperty(projectId?: any, propertyId?: string, value?: string): IBaseExecution<any>;
}

/*********************************************
* IWorkflowDesigner
**********************************************/
export interface IWorkflowDesigner extends WorkflowDesignerCollections,WorkflowDesignerMethods,IBaseQuery<IWorkflowDesignerQuery> {

}

/*********************************************
* IWorkflowDesignerQuery
**********************************************/
export interface IWorkflowDesignerQuery extends WorkflowDesignerQuery,WorkflowDesignerMethods {

}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner extends WorkflowDesignerCollections, WorkflowDesignerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerProps
**********************************************/
export interface WorkflowDesignerProps {

}

/*********************************************
* WorkflowDesignerCollections
**********************************************/
export interface WorkflowDesignerCollections extends WorkflowDesignerProps {
	Fields(): IBaseCollection<PS.WorkflowDesignerField>;
	Fields(id: string | number): IBaseExecution<PS.WorkflowDesignerField>;
}

/*********************************************
* WorkflowDesignerQuery
**********************************************/
export interface WorkflowDesignerQuery extends WorkflowDesignerProps {
	Fields: IBaseResults<PS.WorkflowDesignerField>;
}

/*********************************************
* WorkflowDesignerMethods
**********************************************/
export interface WorkflowDesignerMethods {

}

/*********************************************
* IWorkflowDesignerField
**********************************************/
export interface IWorkflowDesignerField extends WorkflowDesignerFieldCollections,WorkflowDesignerFieldMethods,IBaseQuery<IWorkflowDesignerFieldQuery> {

}

/*********************************************
* IWorkflowDesignerFieldQuery
**********************************************/
export interface IWorkflowDesignerFieldQuery extends WorkflowDesignerFieldQuery,WorkflowDesignerFieldMethods {

}

/*********************************************
* WorkflowDesignerField
**********************************************/
export interface WorkflowDesignerField extends WorkflowDesignerFieldCollections, WorkflowDesignerFieldMethods {
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

}

/*********************************************
* WorkflowDesignerFieldCollections
**********************************************/
export interface WorkflowDesignerFieldCollections extends WorkflowDesignerFieldProps {
	LookupEntries(): IBaseCollection<PS.LookupEntry>;
	LookupEntries(id: string | number): IBaseExecution<PS.LookupEntry>;
}

/*********************************************
* WorkflowDesignerFieldQuery
**********************************************/
export interface WorkflowDesignerFieldQuery extends WorkflowDesignerFieldProps {
	LookupEntries: IBaseResults<PS.LookupEntry>;
}

/*********************************************
* WorkflowDesignerFieldMethods
**********************************************/
export interface WorkflowDesignerFieldMethods {

}

/*********************************************
* IResourceCalendarException
**********************************************/
export interface IResourceCalendarException extends ResourceCalendarExceptionCollections,ResourceCalendarExceptionMethods,IBaseQuery<IResourceCalendarExceptionQuery> {

}

/*********************************************
* IResourceCalendarExceptionQuery
**********************************************/
export interface IResourceCalendarExceptionQuery extends ResourceCalendarExceptionQuery,ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException, ResourceCalendarExceptionCollections, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarExceptionProps
**********************************************/
export interface ResourceCalendarExceptionProps {

}

/*********************************************
* ResourceCalendarExceptionCollections
**********************************************/
export interface ResourceCalendarExceptionCollections extends ResourceCalendarExceptionProps {

}

/*********************************************
* ResourceCalendarExceptionQuery
**********************************************/
export interface ResourceCalendarExceptionQuery extends ResourceCalendarExceptionProps {

}

/*********************************************
* ResourceCalendarExceptionMethods
**********************************************/
export interface ResourceCalendarExceptionMethods {
	deleteObject(): IBaseExecution<any>;
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
export interface IResourcePlan extends ResourcePlanCollections,ResourcePlanMethods,IBaseQuery<IResourcePlanQuery> {

}

/*********************************************
* IResourcePlanQuery
**********************************************/
export interface IResourcePlanQuery extends ResourcePlanQuery,ResourcePlanMethods {

}

/*********************************************
* ResourcePlan
**********************************************/
export interface ResourcePlan extends ResourcePlanCollections, ResourcePlanMethods {
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

}

/*********************************************
* ResourcePlanCollections
**********************************************/
export interface ResourcePlanCollections extends ResourcePlanProps {
	Assignments(): IBaseCollection<PS.PlanAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.PlanAssignment>;
}

/*********************************************
* ResourcePlanQuery
**********************************************/
export interface ResourcePlanQuery extends ResourcePlanProps {
	Assignments: IBaseResults<PS.PlanAssignment>;
}

/*********************************************
* ResourcePlanMethods
**********************************************/
export interface ResourcePlanMethods {
	deleteObject(): IBaseExecution<PS.QueueJob>;
	forceCheckIn(): IBaseExecution<PS.QueueJob>;
	publish(): IBaseExecution<PS.QueueJob>;
	update(): IBaseExecution<PS.QueueJob>;
}

/*********************************************
* IServiceStatus
**********************************************/
export interface IServiceStatus extends ServiceStatusCollections,ServiceStatusMethods,IBaseQuery<IServiceStatusQuery> {

}

/*********************************************
* IServiceStatusQuery
**********************************************/
export interface IServiceStatusQuery extends ServiceStatusQuery,ServiceStatusMethods {

}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus extends ServiceStatusCollections, ServiceStatusMethods {
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
}

/*********************************************
* ServiceStatusProps
**********************************************/
export interface ServiceStatusProps {

}

/*********************************************
* ServiceStatusCollections
**********************************************/
export interface ServiceStatusCollections extends ServiceStatusProps {

}

/*********************************************
* ServiceStatusQuery
**********************************************/
export interface ServiceStatusQuery extends ServiceStatusProps {

}

/*********************************************
* ServiceStatusMethods
**********************************************/
export interface ServiceStatusMethods {
	stopDelegation(): IBaseExecution<any>;
}

/*********************************************
* ITimePhase
**********************************************/
export interface ITimePhase extends TimePhaseCollections,TimePhaseMethods,IBaseQuery<ITimePhaseQuery> {

}

/*********************************************
* ITimePhaseQuery
**********************************************/
export interface ITimePhaseQuery extends TimePhaseQuery,TimePhaseMethods {

}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase extends TimePhaseCollections, TimePhaseMethods {
	End?: any;
	Start?: any;
}

/*********************************************
* TimePhaseProps
**********************************************/
export interface TimePhaseProps {

}

/*********************************************
* TimePhaseCollections
**********************************************/
export interface TimePhaseCollections extends TimePhaseProps {
	Assignments(): IBaseCollection<PS.StatusAssignment>;
	Assignments(id: string | number): IBaseExecution<PS.StatusAssignment>;
}

/*********************************************
* TimePhaseQuery
**********************************************/
export interface TimePhaseQuery extends TimePhaseProps {
	Assignments: IBaseResults<PS.StatusAssignment>;
}

/*********************************************
* TimePhaseMethods
**********************************************/
export interface TimePhaseMethods {

}

/*********************************************
* ICalendarCollection
**********************************************/
export interface ICalendarCollection extends CalendarCollectionCollections,CalendarCollectionMethods,IBaseQuery<ICalendarCollectionQuery> {

}

/*********************************************
* ICalendarCollectionQuery
**********************************************/
export interface ICalendarCollectionQuery extends CalendarCollectionQuery,CalendarCollectionMethods {

}

/*********************************************
* CalendarCollection
**********************************************/
export interface CalendarCollection extends CalendarCollectionCollections, CalendarCollectionMethods {

}

/*********************************************
* CalendarCollectionProps
**********************************************/
export interface CalendarCollectionProps {

}

/*********************************************
* CalendarCollectionCollections
**********************************************/
export interface CalendarCollectionCollections extends CalendarCollectionProps {

}

/*********************************************
* CalendarCollectionQuery
**********************************************/
export interface CalendarCollectionQuery extends CalendarCollectionProps {

}

/*********************************************
* CalendarCollectionMethods
**********************************************/
export interface CalendarCollectionMethods {
	add(parameters?: PS.CalendarCreationInformation): IBaseExecution<PS.Calendar>;
	getByGuid(uid?: any): IBaseExecution<PS.Calendar>;
	getById(objectId?: string): IBaseExecution<PS.Calendar>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ICustomFieldCollection
**********************************************/
export interface ICustomFieldCollection extends CustomFieldCollectionCollections,CustomFieldCollectionMethods,IBaseQuery<ICustomFieldCollectionQuery> {

}

/*********************************************
* ICustomFieldCollectionQuery
**********************************************/
export interface ICustomFieldCollectionQuery extends CustomFieldCollectionQuery,CustomFieldCollectionMethods {

}

/*********************************************
* CustomFieldCollection
**********************************************/
export interface CustomFieldCollection extends CustomFieldCollectionCollections, CustomFieldCollectionMethods {

}

/*********************************************
* CustomFieldCollectionProps
**********************************************/
export interface CustomFieldCollectionProps {

}

/*********************************************
* CustomFieldCollectionCollections
**********************************************/
export interface CustomFieldCollectionCollections extends CustomFieldCollectionProps {

}

/*********************************************
* CustomFieldCollectionQuery
**********************************************/
export interface CustomFieldCollectionQuery extends CustomFieldCollectionProps {

}

/*********************************************
* CustomFieldCollectionMethods
**********************************************/
export interface CustomFieldCollectionMethods {
	add(parameters?: PS.CustomFieldCreationInformation): IBaseExecution<PS.CustomField>;
	getByAppAlternateId(objectId?: string): IBaseExecution<PS.CustomField>;
	getByGuid(uid?: any): IBaseExecution<PS.CustomField>;
	getById(objectId?: string): IBaseExecution<PS.CustomField>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IDraftTaskCollection
**********************************************/
export interface IDraftTaskCollection extends DraftTaskCollectionCollections,DraftTaskCollectionMethods,IBaseQuery<IDraftTaskCollectionQuery> {

}

/*********************************************
* IDraftTaskCollectionQuery
**********************************************/
export interface IDraftTaskCollectionQuery extends DraftTaskCollectionQuery,DraftTaskCollectionMethods {

}

/*********************************************
* DraftTaskCollection
**********************************************/
export interface DraftTaskCollection extends DraftTaskCollectionCollections, DraftTaskCollectionMethods {

}

/*********************************************
* DraftTaskCollectionProps
**********************************************/
export interface DraftTaskCollectionProps {

}

/*********************************************
* DraftTaskCollectionCollections
**********************************************/
export interface DraftTaskCollectionCollections extends DraftTaskCollectionProps {

}

/*********************************************
* DraftTaskCollectionQuery
**********************************************/
export interface DraftTaskCollectionQuery extends DraftTaskCollectionProps {

}

/*********************************************
* DraftTaskCollectionMethods
**********************************************/
export interface DraftTaskCollectionMethods {
	add(parameters?: PS.TaskCreationInformation): IBaseExecution<PS.DraftTask>;
	getByGuid(uid?: any): IBaseExecution<PS.DraftTask>;
	getById(objectId?: string): IBaseExecution<PS.DraftTask>;
}

/*********************************************
* IDraftTaskLinkCollection
**********************************************/
export interface IDraftTaskLinkCollection extends DraftTaskLinkCollectionCollections,DraftTaskLinkCollectionMethods,IBaseQuery<IDraftTaskLinkCollectionQuery> {

}

/*********************************************
* IDraftTaskLinkCollectionQuery
**********************************************/
export interface IDraftTaskLinkCollectionQuery extends DraftTaskLinkCollectionQuery,DraftTaskLinkCollectionMethods {

}

/*********************************************
* DraftTaskLinkCollection
**********************************************/
export interface DraftTaskLinkCollection extends DraftTaskLinkCollectionCollections, DraftTaskLinkCollectionMethods {

}

/*********************************************
* DraftTaskLinkCollectionProps
**********************************************/
export interface DraftTaskLinkCollectionProps {

}

/*********************************************
* DraftTaskLinkCollectionCollections
**********************************************/
export interface DraftTaskLinkCollectionCollections extends DraftTaskLinkCollectionProps {

}

/*********************************************
* DraftTaskLinkCollectionQuery
**********************************************/
export interface DraftTaskLinkCollectionQuery extends DraftTaskLinkCollectionProps {

}

/*********************************************
* DraftTaskLinkCollectionMethods
**********************************************/
export interface DraftTaskLinkCollectionMethods {
	add(parameters?: PS.TaskLinkCreationInformation): IBaseExecution<PS.DraftTaskLink>;
	getByGuid(uid?: any): IBaseExecution<PS.DraftTaskLink>;
	getById(objectId?: string): IBaseExecution<PS.DraftTaskLink>;
}

/*********************************************
* IEntityLinkCollection
**********************************************/
export interface IEntityLinkCollection extends EntityLinkCollectionCollections,EntityLinkCollectionMethods,IBaseQuery<IEntityLinkCollectionQuery> {

}

/*********************************************
* IEntityLinkCollectionQuery
**********************************************/
export interface IEntityLinkCollectionQuery extends EntityLinkCollectionQuery,EntityLinkCollectionMethods {

}

/*********************************************
* EntityLinkCollection
**********************************************/
export interface EntityLinkCollection extends EntityLinkCollectionCollections, EntityLinkCollectionMethods {

}

/*********************************************
* EntityLinkCollectionProps
**********************************************/
export interface EntityLinkCollectionProps {

}

/*********************************************
* EntityLinkCollectionCollections
**********************************************/
export interface EntityLinkCollectionCollections extends EntityLinkCollectionProps {

}

/*********************************************
* EntityLinkCollectionQuery
**********************************************/
export interface EntityLinkCollectionQuery extends EntityLinkCollectionProps {

}

/*********************************************
* EntityLinkCollectionMethods
**********************************************/
export interface EntityLinkCollectionMethods {
	add(parameters?: PS.EntityLinkCreationInformation): IBaseExecution<PS.EntityLink>;
	getByGuid(id?: any): IBaseExecution<PS.EntityLink>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IEventHandlerCollection
**********************************************/
export interface IEventHandlerCollection extends EventHandlerCollectionCollections,EventHandlerCollectionMethods,IBaseQuery<IEventHandlerCollectionQuery> {

}

/*********************************************
* IEventHandlerCollectionQuery
**********************************************/
export interface IEventHandlerCollectionQuery extends EventHandlerCollectionQuery,EventHandlerCollectionMethods {

}

/*********************************************
* EventHandlerCollection
**********************************************/
export interface EventHandlerCollection extends EventHandlerCollectionCollections, EventHandlerCollectionMethods {

}

/*********************************************
* EventHandlerCollectionProps
**********************************************/
export interface EventHandlerCollectionProps {

}

/*********************************************
* EventHandlerCollectionCollections
**********************************************/
export interface EventHandlerCollectionCollections extends EventHandlerCollectionProps {

}

/*********************************************
* EventHandlerCollectionQuery
**********************************************/
export interface EventHandlerCollectionQuery extends EventHandlerCollectionProps {

}

/*********************************************
* EventHandlerCollectionMethods
**********************************************/
export interface EventHandlerCollectionMethods {
	add(parameters?: PS.EventHandlerCreationInformation): IBaseExecution<PS.EventHandler>;
	getByGuid(uid?: any): IBaseExecution<PS.EventHandler>;
	getById(objectId?: string): IBaseExecution<PS.EventHandler>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ILookupEntryCollection
**********************************************/
export interface ILookupEntryCollection extends LookupEntryCollectionCollections,LookupEntryCollectionMethods,IBaseQuery<ILookupEntryCollectionQuery> {

}

/*********************************************
* ILookupEntryCollectionQuery
**********************************************/
export interface ILookupEntryCollectionQuery extends LookupEntryCollectionQuery,LookupEntryCollectionMethods {

}

/*********************************************
* LookupEntryCollection
**********************************************/
export interface LookupEntryCollection extends LookupEntryCollectionCollections, LookupEntryCollectionMethods {

}

/*********************************************
* LookupEntryCollectionProps
**********************************************/
export interface LookupEntryCollectionProps {

}

/*********************************************
* LookupEntryCollectionCollections
**********************************************/
export interface LookupEntryCollectionCollections extends LookupEntryCollectionProps {

}

/*********************************************
* LookupEntryCollectionQuery
**********************************************/
export interface LookupEntryCollectionQuery extends LookupEntryCollectionProps {

}

/*********************************************
* LookupEntryCollectionMethods
**********************************************/
export interface LookupEntryCollectionMethods {
	add(parameters?: PS.LookupEntryCreationInformation): IBaseExecution<PS.LookupEntry>;
	getByAppAlternateId(objectId?: string): IBaseExecution<PS.LookupEntry>;
	getByGuid(uid?: any): IBaseExecution<PS.LookupEntry>;
	getById(objectId?: string): IBaseExecution<PS.LookupEntry>;
}

/*********************************************
* IProjectEngagementTimephasedPeriodCollection
**********************************************/
export interface IProjectEngagementTimephasedPeriodCollection extends ProjectEngagementTimephasedPeriodCollectionCollections,ProjectEngagementTimephasedPeriodCollectionMethods,IBaseQuery<IProjectEngagementTimephasedPeriodCollectionQuery> {

}

/*********************************************
* IProjectEngagementTimephasedPeriodCollectionQuery
**********************************************/
export interface IProjectEngagementTimephasedPeriodCollectionQuery extends ProjectEngagementTimephasedPeriodCollectionQuery,ProjectEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollection
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollection extends ProjectEngagementTimephasedPeriodCollectionCollections, ProjectEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionProps
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionCollections
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionCollections extends ProjectEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionQuery
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionQuery extends ProjectEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl(start?: string): IBaseExecution<PS.ProjectEngagementTimephasedPeriod>;
}

/*********************************************
* IPublishedTaskCollection
**********************************************/
export interface IPublishedTaskCollection extends PublishedTaskCollectionCollections,PublishedTaskCollectionMethods,IBaseQuery<IPublishedTaskCollectionQuery> {

}

/*********************************************
* IPublishedTaskCollectionQuery
**********************************************/
export interface IPublishedTaskCollectionQuery extends PublishedTaskCollectionQuery,PublishedTaskCollectionMethods {

}

/*********************************************
* PublishedTaskCollection
**********************************************/
export interface PublishedTaskCollection extends PublishedTaskCollectionCollections, PublishedTaskCollectionMethods {

}

/*********************************************
* PublishedTaskCollectionProps
**********************************************/
export interface PublishedTaskCollectionProps {

}

/*********************************************
* PublishedTaskCollectionCollections
**********************************************/
export interface PublishedTaskCollectionCollections extends PublishedTaskCollectionProps {

}

/*********************************************
* PublishedTaskCollectionQuery
**********************************************/
export interface PublishedTaskCollectionQuery extends PublishedTaskCollectionProps {

}

/*********************************************
* PublishedTaskCollectionMethods
**********************************************/
export interface PublishedTaskCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.PublishedTask>;
	getById(objectId?: string): IBaseExecution<PS.PublishedTask>;
}

/*********************************************
* IPublishedTaskLinkCollection
**********************************************/
export interface IPublishedTaskLinkCollection extends PublishedTaskLinkCollectionCollections,PublishedTaskLinkCollectionMethods,IBaseQuery<IPublishedTaskLinkCollectionQuery> {

}

/*********************************************
* IPublishedTaskLinkCollectionQuery
**********************************************/
export interface IPublishedTaskLinkCollectionQuery extends PublishedTaskLinkCollectionQuery,PublishedTaskLinkCollectionMethods {

}

/*********************************************
* PublishedTaskLinkCollection
**********************************************/
export interface PublishedTaskLinkCollection extends PublishedTaskLinkCollectionCollections, PublishedTaskLinkCollectionMethods {

}

/*********************************************
* PublishedTaskLinkCollectionProps
**********************************************/
export interface PublishedTaskLinkCollectionProps {

}

/*********************************************
* PublishedTaskLinkCollectionCollections
**********************************************/
export interface PublishedTaskLinkCollectionCollections extends PublishedTaskLinkCollectionProps {

}

/*********************************************
* PublishedTaskLinkCollectionQuery
**********************************************/
export interface PublishedTaskLinkCollectionQuery extends PublishedTaskLinkCollectionProps {

}

/*********************************************
* PublishedTaskLinkCollectionMethods
**********************************************/
export interface PublishedTaskLinkCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.PublishedTaskLink>;
	getById(objectId?: string): IBaseExecution<PS.PublishedTaskLink>;
}

/*********************************************
* IQueueJobCollection
**********************************************/
export interface IQueueJobCollection extends QueueJobCollectionCollections,QueueJobCollectionMethods,IBaseQuery<IQueueJobCollectionQuery> {

}

/*********************************************
* IQueueJobCollectionQuery
**********************************************/
export interface IQueueJobCollectionQuery extends QueueJobCollectionQuery,QueueJobCollectionMethods {

}

/*********************************************
* QueueJobCollection
**********************************************/
export interface QueueJobCollection extends QueueJobCollectionCollections, QueueJobCollectionMethods {

}

/*********************************************
* QueueJobCollectionProps
**********************************************/
export interface QueueJobCollectionProps {

}

/*********************************************
* QueueJobCollectionCollections
**********************************************/
export interface QueueJobCollectionCollections extends QueueJobCollectionProps {

}

/*********************************************
* QueueJobCollectionQuery
**********************************************/
export interface QueueJobCollectionQuery extends QueueJobCollectionProps {

}

/*********************************************
* QueueJobCollectionMethods
**********************************************/
export interface QueueJobCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.QueueJob>;
	getById(objectId?: string): IBaseExecution<PS.QueueJob>;
}

/*********************************************
* IResourceEngagementTimephasedPeriodCollection
**********************************************/
export interface IResourceEngagementTimephasedPeriodCollection extends ResourceEngagementTimephasedPeriodCollectionCollections,ResourceEngagementTimephasedPeriodCollectionMethods,IBaseQuery<IResourceEngagementTimephasedPeriodCollectionQuery> {

}

/*********************************************
* IResourceEngagementTimephasedPeriodCollectionQuery
**********************************************/
export interface IResourceEngagementTimephasedPeriodCollectionQuery extends ResourceEngagementTimephasedPeriodCollectionQuery,ResourceEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollection
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollection extends ResourceEngagementTimephasedPeriodCollectionCollections, ResourceEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionProps
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionCollections
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionCollections extends ResourceEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionQuery
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionQuery extends ResourceEngagementTimephasedPeriodCollectionProps {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl(start?: string): IBaseExecution<PS.ResourceEngagementTimephasedPeriod>;
}

/*********************************************
* IStageCustomFieldCollection
**********************************************/
export interface IStageCustomFieldCollection extends StageCustomFieldCollectionCollections,StageCustomFieldCollectionMethods,IBaseQuery<IStageCustomFieldCollectionQuery> {

}

/*********************************************
* IStageCustomFieldCollectionQuery
**********************************************/
export interface IStageCustomFieldCollectionQuery extends StageCustomFieldCollectionQuery,StageCustomFieldCollectionMethods {

}

/*********************************************
* StageCustomFieldCollection
**********************************************/
export interface StageCustomFieldCollection extends StageCustomFieldCollectionCollections, StageCustomFieldCollectionMethods {

}

/*********************************************
* StageCustomFieldCollectionProps
**********************************************/
export interface StageCustomFieldCollectionProps {

}

/*********************************************
* StageCustomFieldCollectionCollections
**********************************************/
export interface StageCustomFieldCollectionCollections extends StageCustomFieldCollectionProps {

}

/*********************************************
* StageCustomFieldCollectionQuery
**********************************************/
export interface StageCustomFieldCollectionQuery extends StageCustomFieldCollectionProps {

}

/*********************************************
* StageCustomFieldCollectionMethods
**********************************************/
export interface StageCustomFieldCollectionMethods {
	add(creationInfo?: PS.StageCustomFieldCreationInformation): IBaseExecution<PS.StageCustomField>;
	getByGuid(uid?: any): IBaseExecution<PS.StageCustomField>;
	getById(objectId?: string): IBaseExecution<PS.StageCustomField>;
}

/*********************************************
* ITimeSheetPeriodCollection
**********************************************/
export interface ITimeSheetPeriodCollection extends TimeSheetPeriodCollectionCollections,TimeSheetPeriodCollectionMethods,IBaseQuery<ITimeSheetPeriodCollectionQuery> {

}

/*********************************************
* ITimeSheetPeriodCollectionQuery
**********************************************/
export interface ITimeSheetPeriodCollectionQuery extends TimeSheetPeriodCollectionQuery,TimeSheetPeriodCollectionMethods {

}

/*********************************************
* TimeSheetPeriodCollection
**********************************************/
export interface TimeSheetPeriodCollection extends TimeSheetPeriodCollectionCollections, TimeSheetPeriodCollectionMethods {

}

/*********************************************
* TimeSheetPeriodCollectionProps
**********************************************/
export interface TimeSheetPeriodCollectionProps {

}

/*********************************************
* TimeSheetPeriodCollectionCollections
**********************************************/
export interface TimeSheetPeriodCollectionCollections extends TimeSheetPeriodCollectionProps {

}

/*********************************************
* TimeSheetPeriodCollectionQuery
**********************************************/
export interface TimeSheetPeriodCollectionQuery extends TimeSheetPeriodCollectionProps {

}

/*********************************************
* TimeSheetPeriodCollectionMethods
**********************************************/
export interface TimeSheetPeriodCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.TimeSheetPeriod>;
	getById(objectId?: string): IBaseExecution<PS.TimeSheetPeriod>;
}

/*********************************************
* ITimeSheetWorkCollection
**********************************************/
export interface ITimeSheetWorkCollection extends TimeSheetWorkCollectionCollections,TimeSheetWorkCollectionMethods,IBaseQuery<ITimeSheetWorkCollectionQuery> {

}

/*********************************************
* ITimeSheetWorkCollectionQuery
**********************************************/
export interface ITimeSheetWorkCollectionQuery extends TimeSheetWorkCollectionQuery,TimeSheetWorkCollectionMethods {

}

/*********************************************
* TimeSheetWorkCollection
**********************************************/
export interface TimeSheetWorkCollection extends TimeSheetWorkCollectionCollections, TimeSheetWorkCollectionMethods {

}

/*********************************************
* TimeSheetWorkCollectionProps
**********************************************/
export interface TimeSheetWorkCollectionProps {

}

/*********************************************
* TimeSheetWorkCollectionCollections
**********************************************/
export interface TimeSheetWorkCollectionCollections extends TimeSheetWorkCollectionProps {

}

/*********************************************
* TimeSheetWorkCollectionQuery
**********************************************/
export interface TimeSheetWorkCollectionQuery extends TimeSheetWorkCollectionProps {

}

/*********************************************
* TimeSheetWorkCollectionMethods
**********************************************/
export interface TimeSheetWorkCollectionMethods {
	add(parameters?: PS.TimeSheetWorkCreationInformation): IBaseExecution<PS.TimeSheetWork>;
	getById(objectId?: string): IBaseExecution<PS.TimeSheetWork>;
	getByStartDate(start?: any): IBaseExecution<PS.TimeSheetWork>;
}

/*********************************************
* IWorkflowDesignerFieldCollection
**********************************************/
export interface IWorkflowDesignerFieldCollection extends WorkflowDesignerFieldCollectionCollections,WorkflowDesignerFieldCollectionMethods,IBaseQuery<IWorkflowDesignerFieldCollectionQuery> {

}

/*********************************************
* IWorkflowDesignerFieldCollectionQuery
**********************************************/
export interface IWorkflowDesignerFieldCollectionQuery extends WorkflowDesignerFieldCollectionQuery,WorkflowDesignerFieldCollectionMethods {

}

/*********************************************
* WorkflowDesignerFieldCollection
**********************************************/
export interface WorkflowDesignerFieldCollection extends WorkflowDesignerFieldCollectionCollections, WorkflowDesignerFieldCollectionMethods {

}

/*********************************************
* WorkflowDesignerFieldCollectionProps
**********************************************/
export interface WorkflowDesignerFieldCollectionProps {

}

/*********************************************
* WorkflowDesignerFieldCollectionCollections
**********************************************/
export interface WorkflowDesignerFieldCollectionCollections extends WorkflowDesignerFieldCollectionProps {

}

/*********************************************
* WorkflowDesignerFieldCollectionQuery
**********************************************/
export interface WorkflowDesignerFieldCollectionQuery extends WorkflowDesignerFieldCollectionProps {

}

/*********************************************
* WorkflowDesignerFieldCollectionMethods
**********************************************/
export interface WorkflowDesignerFieldCollectionMethods {
	getById(objectId?: string): IBaseExecution<PS.WorkflowDesignerField>;
}
