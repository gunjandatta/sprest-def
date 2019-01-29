import { PS } from "../";
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
* Assignment
**********************************************/
export interface Assignment {
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
* AssignmentCollections<T = any>
**********************************************/
export interface AssignmentCollections<T = any> {
	CustomFields(): T;
}

/*********************************************
* AssignmentQuery<T = any>
**********************************************/
export interface AssignmentQuery<T = any> {
	CustomFields(): T;
}

/*********************************************
* CustomField
**********************************************/
export interface CustomField {
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
* CustomFieldCollections<T = any>
**********************************************/
export interface CustomFieldCollections<T = any> {
	EntityType(): T;
	LookupEntries(): T;
	LookupTable(): T;
}

/*********************************************
* CustomFieldQuery<T = any>
**********************************************/
export interface CustomFieldQuery<T = any> {
	EntityType(): T;
	LookupEntries(): T;
	LookupTable(): T;
}

/*********************************************
* CustomFieldMethods<T = any>
**********************************************/
export interface CustomFieldMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* LookupEntry
**********************************************/
export interface LookupEntry {
	AppAlternateId?: any;
	Description?: string;
	FullValue?: string;
	Id?: any;
	InternalName?: string;
	SortIndex?: number;
}

/*********************************************
* LookupEntryMethods<T = any>
**********************************************/
export interface LookupEntryMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* LookupTable
**********************************************/
export interface LookupTable {
	AppAlternateId?: any;
	FieldType?: number;
	Id?: any;
	Masks?: Array<PS.LookupMask>;
	Name?: string;
	SortOrder?: number;
}

/*********************************************
* LookupTableCollections<T = any>
**********************************************/
export interface LookupTableCollections<T = any> {
	Entries(): T;
}

/*********************************************
* LookupTableQuery<T = any>
**********************************************/
export interface LookupTableQuery<T = any> {
	Entries(): T;
}

/*********************************************
* LookupTableMethods<T = any>
**********************************************/
export interface LookupTableMethods<T = any> {
	addMask(mask?: PS.LookupMask): T;
	deleteObject(): T;
	updateMask(mask?: PS.LookupMask, level?: number): T;
}

/*********************************************
* CalendarException
**********************************************/
export interface CalendarException {
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
* CalendarExceptionCollections<T = any>
**********************************************/
export interface CalendarExceptionCollections<T = any> {
	Calendar(): T;
}

/*********************************************
* CalendarExceptionQuery<T = any>
**********************************************/
export interface CalendarExceptionQuery<T = any> {
	Calendar(): T;
}

/*********************************************
* CalendarExceptionMethods<T = any>
**********************************************/
export interface CalendarExceptionMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* Calendar
**********************************************/
export interface Calendar {
	Created?: any;
	Id?: any;
	IsStandardCalendar?: boolean;
	Modified?: any;
	Name?: string;
	OriginalId?: any;
}

/*********************************************
* CalendarCollections<T = any>
**********************************************/
export interface CalendarCollections<T = any> {
	BaseCalendarExceptions(): T;
}

/*********************************************
* CalendarQuery<T = any>
**********************************************/
export interface CalendarQuery<T = any> {
	BaseCalendarExceptions(): T;
}

/*********************************************
* CalendarMethods<T = any>
**********************************************/
export interface CalendarMethods<T = any> {
	copyTo(name?: string): T;
	deleteObject(): T;
}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException {

}

/*********************************************
* BaseCalendarExceptionMethods<T = any>
**********************************************/
export interface BaseCalendarExceptionMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* DraftAssignment
**********************************************/
export interface DraftAssignment extends PS.Assignment {
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
* DraftAssignmentCollections<T = any>
**********************************************/
export interface DraftAssignmentCollections<T = any> {
	Owner(): T;
	Parent(): T;
	Resource(): T;
	Task(): T;
}

/*********************************************
* DraftAssignmentQuery<T = any>
**********************************************/
export interface DraftAssignmentQuery<T = any> {
	Owner(): T;
	Parent(): T;
	Resource(): T;
	Task(): T;
}

/*********************************************
* DraftAssignmentMethods<T = any>
**********************************************/
export interface DraftAssignmentMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* ProjectResource
**********************************************/
export interface ProjectResource {
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
* ProjectResourceCollections<T = any>
**********************************************/
export interface ProjectResourceCollections<T = any> {
	CustomFields(): T;
	EnterpriseResource(): T;
}

/*********************************************
* ProjectResourceQuery<T = any>
**********************************************/
export interface ProjectResourceQuery<T = any> {
	CustomFields(): T;
	EnterpriseResource(): T;
}

/*********************************************
* EnterpriseResource
**********************************************/
export interface EnterpriseResource {
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
* EnterpriseResourceCollections<T = any>
**********************************************/
export interface EnterpriseResourceCollections<T = any> {
	Assignments(): T;
	BaseCalendar(): T;
	CostRateTables(): T;
	CustomFields(): T;
	DefaultAssignmentOwner(): T;
	Engagements(): T;
	UserPermissions(): T;
	ResourceCalendarExceptions(): T;
	Self(): T;
	TimesheetManager(): T;
	User(): T;
}

/*********************************************
* EnterpriseResourceQuery<T = any>
**********************************************/
export interface EnterpriseResourceQuery<T = any> {
	Assignments(): T;
	BaseCalendar(): T;
	CostRateTables(): T;
	CustomFields(): T;
	DefaultAssignmentOwner(): T;
	Engagements(): T;
	UserPermissions(): T;
	ResourceCalendarExceptions(): T;
	Self(): T;
	TimesheetManager(): T;
	User(): T;
}

/*********************************************
* EnterpriseResourceMethods<T = any>
**********************************************/
export interface EnterpriseResourceMethods<T = any> {
	deleteObject(): T;
	forceCheckIn(): T;
	updateClaimsAccount(newClaimsAccount?: string): T;
}

/*********************************************
* StatusAssignment
**********************************************/
export interface StatusAssignment {
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
* StatusAssignmentCollections<T = any>
**********************************************/
export interface StatusAssignmentCollections<T = any> {
	CustomFields(): T;
	History(): T;
	Project(): T;
	Resource(): T;
	Task(): T;
}

/*********************************************
* StatusAssignmentQuery<T = any>
**********************************************/
export interface StatusAssignmentQuery<T = any> {
	CustomFields(): T;
	History(): T;
	Project(): T;
	Resource(): T;
	Task(): T;
}

/*********************************************
* StatusAssignmentMethods<T = any>
**********************************************/
export interface StatusAssignmentMethods<T = any> {
	deleteObject(): T;
	submitStatusUpdates(comment?: string): T;
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
* StatusAssignmentHistoryLineCollections<T = any>
**********************************************/
export interface StatusAssignmentHistoryLineCollections<T = any> {
	Author(): T;
}

/*********************************************
* StatusAssignmentHistoryLineQuery<T = any>
**********************************************/
export interface StatusAssignmentHistoryLineQuery<T = any> {
	Author(): T;
}

/*********************************************
* Project
**********************************************/
export interface Project {
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
* ProjectCollections<T = any>
**********************************************/
export interface ProjectCollections<T = any> {
	CheckedOutBy(): T;
	CustomFields(): T;
	Engagements(): T;
	EnterpriseProjectType(): T;
	UserPermissions(): T;
	Phase(): T;
	ProjectSummaryTask(): T;
	QueueJobs(): T;
	Stage(): T;
}

/*********************************************
* ProjectQuery<T = any>
**********************************************/
export interface ProjectQuery<T = any> {
	CheckedOutBy(): T;
	CustomFields(): T;
	Engagements(): T;
	EnterpriseProjectType(): T;
	UserPermissions(): T;
	Phase(): T;
	ProjectSummaryTask(): T;
	QueueJobs(): T;
	Stage(): T;
}

/*********************************************
* ProjectMethods<T = any>
**********************************************/
export interface ProjectMethods<T = any> {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): T;
	leaveProjectStage(): T;
	readyToLeaveProjectStage(): T;
	updateIdeaListItemStatus(status?: string): T;
}

/*********************************************
* Engagement
**********************************************/
export interface Engagement {
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
* EngagementCollections<T = any>
**********************************************/
export interface EngagementCollections<T = any> {
	Comments(): T;
	ModifiedBy(): T;
	Project(): T;
	Resource(): T;
	ReviewedBy(): T;
	SubmittedBy(): T;
}

/*********************************************
* EngagementQuery<T = any>
**********************************************/
export interface EngagementQuery<T = any> {
	Comments(): T;
	ModifiedBy(): T;
	Project(): T;
	Resource(): T;
	ReviewedBy(): T;
	SubmittedBy(): T;
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
* EngagementCommentCollections<T = any>
**********************************************/
export interface EngagementCommentCollections<T = any> {
	Author(): T;
}

/*********************************************
* EngagementCommentQuery<T = any>
**********************************************/
export interface EngagementCommentQuery<T = any> {
	Author(): T;
}

/*********************************************
* ProjectEngagement
**********************************************/
export interface ProjectEngagement extends PS.Engagement {
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
* ProjectEngagementMethods<T = any>
**********************************************/
export interface ProjectEngagementMethods<T = any> {
	deleteObject(): T;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): T;
}

/*********************************************
* EnterpriseProjectType
**********************************************/
export interface EnterpriseProjectType {
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
* EnterpriseProjectTypeCollections<T = any>
**********************************************/
export interface EnterpriseProjectTypeCollections<T = any> {
	ProjectDetailPages(): T;
}

/*********************************************
* EnterpriseProjectTypeQuery<T = any>
**********************************************/
export interface EnterpriseProjectTypeQuery<T = any> {
	ProjectDetailPages(): T;
}

/*********************************************
* EnterpriseProjectTypeMethods<T = any>
**********************************************/
export interface EnterpriseProjectTypeMethods<T = any> {
	addDepartment(departmentValueGuid?: any): T;
	deleteObject(): T;
	removeDepartment(departmentValueGuid?: any): T;
	updateCreatePDP(pdp?: PS.ProjectDetailPageCreationInformation): T;
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
* ProjectDetailPageCollections<T = any>
**********************************************/
export interface ProjectDetailPageCollections<T = any> {
	Item(): T;
}

/*********************************************
* ProjectDetailPageQuery<T = any>
**********************************************/
export interface ProjectDetailPageQuery<T = any> {
	Item(): T;
}

/*********************************************
* UserPermission
**********************************************/
export interface UserPermission {
	HasPermission?: boolean;
	Permission?: string;
}

/*********************************************
* Phase
**********************************************/
export interface Phase {
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* PhaseCollections<T = any>
**********************************************/
export interface PhaseCollections<T = any> {
	Stages(): T;
}

/*********************************************
* PhaseQuery<T = any>
**********************************************/
export interface PhaseQuery<T = any> {
	Stages(): T;
}

/*********************************************
* PhaseMethods<T = any>
**********************************************/
export interface PhaseMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* Stage
**********************************************/
export interface Stage {
	Behavior?: number;
	CheckInRequired?: boolean;
	Description?: string;
	Id?: any;
	Name?: string;
	SubmitDescription?: string;
}

/*********************************************
* StageCollections<T = any>
**********************************************/
export interface StageCollections<T = any> {
	CustomFields(): T;
	Phase(): T;
	ProjectDetailPages(): T;
	WorkflowStatusPage(): T;
}

/*********************************************
* StageQuery<T = any>
**********************************************/
export interface StageQuery<T = any> {
	CustomFields(): T;
	Phase(): T;
	ProjectDetailPages(): T;
	WorkflowStatusPage(): T;
}

/*********************************************
* StageMethods<T = any>
**********************************************/
export interface StageMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* StageCustomField
**********************************************/
export interface StageCustomField {
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageCustomFieldCollections<T = any>
**********************************************/
export interface StageCustomFieldCollections<T = any> {
	Stage(): T;
}

/*********************************************
* StageCustomFieldQuery<T = any>
**********************************************/
export interface StageCustomFieldQuery<T = any> {
	Stage(): T;
}

/*********************************************
* StageCustomFieldMethods<T = any>
**********************************************/
export interface StageCustomFieldMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* StageDetailPage
**********************************************/
export interface StageDetailPage {
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* StageDetailPageCollections<T = any>
**********************************************/
export interface StageDetailPageCollections<T = any> {
	Page(): T;
	Stage(): T;
}

/*********************************************
* StageDetailPageQuery<T = any>
**********************************************/
export interface StageDetailPageQuery<T = any> {
	Page(): T;
	Stage(): T;
}

/*********************************************
* StageDetailPageMethods<T = any>
**********************************************/
export interface StageDetailPageMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* Task
**********************************************/
export interface Task {
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
* TaskCollections<T = any>
**********************************************/
export interface TaskCollections<T = any> {
	CustomFields(): T;
	SubProject(): T;
}

/*********************************************
* TaskQuery<T = any>
**********************************************/
export interface TaskQuery<T = any> {
	CustomFields(): T;
	SubProject(): T;
}

/*********************************************
* PublishedProject
**********************************************/
export interface PublishedProject extends PS.Project {
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
* PublishedProjectCollections<T = any>
**********************************************/
export interface PublishedProjectCollections<T = any> {
	Assignments(): T;
	Calendar(): T;
	Draft(): T;
	EntityLinks(): T;
	IncludeCustomFields(): T;
	Owner(): T;
	ProjectResources(): T;
	ProjectWorkflowInstance(): T;
	TaskLinks(): T;
	Tasks(): T;
}

/*********************************************
* PublishedProjectQuery<T = any>
**********************************************/
export interface PublishedProjectQuery<T = any> {
	Assignments(): T;
	Calendar(): T;
	Draft(): T;
	EntityLinks(): T;
	IncludeCustomFields(): T;
	Owner(): T;
	ProjectResources(): T;
	ProjectWorkflowInstance(): T;
	TaskLinks(): T;
	Tasks(): T;
}

/*********************************************
* PublishedProjectMethods<T = any>
**********************************************/
export interface PublishedProjectMethods<T = any> {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): T;
	leaveProjectStage(): T;
	readyToLeaveProjectStage(): T;
	updateIdeaListItemStatus(status?: string): T;
	checkOut(): T;
	createProjectSite(siteName?: string): T;
	deleteObject(): T;
	submitToWorkflow(): T;
	updateVisibilityCustomFields(): T;
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
* PublishedAssignmentCollections<T = any>
**********************************************/
export interface PublishedAssignmentCollections<T = any> {
	Owner(): T;
	Parent(): T;
	Resource(): T;
	Task(): T;
}

/*********************************************
* PublishedAssignmentQuery<T = any>
**********************************************/
export interface PublishedAssignmentQuery<T = any> {
	Owner(): T;
	Parent(): T;
	Resource(): T;
	Task(): T;
}

/*********************************************
* PublishedProjectResource
**********************************************/
export interface PublishedProjectResource extends PS.ProjectResource {
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
* PublishedProjectResourceCollections<T = any>
**********************************************/
export interface PublishedProjectResourceCollections<T = any> {
	Assignments(): T;
	DefaultAssignmentOwner(): T;
}

/*********************************************
* PublishedProjectResourceQuery<T = any>
**********************************************/
export interface PublishedProjectResourceQuery<T = any> {
	Assignments(): T;
	DefaultAssignmentOwner(): T;
}

/*********************************************
* PublishedTask
**********************************************/
export interface PublishedTask extends PS.Task {
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
* PublishedTaskCollections<T = any>
**********************************************/
export interface PublishedTaskCollections<T = any> {
	Assignments(): T;
	Calendar(): T;
	EntityLinks(): T;
	Parent(): T;
	Predecessors(): T;
	StatusManager(): T;
	Successors(): T;
	TaskPlanLink(): T;
}

/*********************************************
* PublishedTaskQuery<T = any>
**********************************************/
export interface PublishedTaskQuery<T = any> {
	Assignments(): T;
	Calendar(): T;
	EntityLinks(): T;
	Parent(): T;
	Predecessors(): T;
	StatusManager(): T;
	Successors(): T;
	TaskPlanLink(): T;
}

/*********************************************
* PublishedTaskMethods<T = any>
**********************************************/
export interface PublishedTaskMethods<T = any> {
	addTaskPlanLink(parameters?: PS.TaskPlanLinksCreationInformation): T;
	deleteTaskPlanLink(): T;
}

/*********************************************
* EntityLink
**********************************************/
export interface EntityLink {
	Created?: any;
	EntityLinkType?: number;
	Id?: any;
	Label?: string;
	Url?: string;
}

/*********************************************
* EntityLinkMethods<T = any>
**********************************************/
export interface EntityLinkMethods<T = any> {
	deleteObject(): T;
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
* PublishedTaskLinkCollections<T = any>
**********************************************/
export interface PublishedTaskLinkCollections<T = any> {
	End(): T;
	Start(): T;
}

/*********************************************
* PublishedTaskLinkQuery<T = any>
**********************************************/
export interface PublishedTaskLinkQuery<T = any> {
	End(): T;
	Start(): T;
}

/*********************************************
* TaskPlanLink
**********************************************/
export interface TaskPlanLink {
	Created?: any;
	GroupId?: any;
	Id?: string;
	PlanId?: string;
	ProjectId?: any;
	TaskId?: any;
}

/*********************************************
* TaskPlanLinkMethods<T = any>
**********************************************/
export interface TaskPlanLinkMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* DraftProject
**********************************************/
export interface DraftProject extends PS.Project {
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
* DraftProjectCollections<T = any>
**********************************************/
export interface DraftProjectCollections<T = any> {
	Assignments(): T;
	Calendar(): T;
	IncludeCustomFields(): T;
	Owner(): T;
	ProjectResources(): T;
	TaskLinks(): T;
	Tasks(): T;
}

/*********************************************
* DraftProjectQuery<T = any>
**********************************************/
export interface DraftProjectQuery<T = any> {
	Assignments(): T;
	Calendar(): T;
	IncludeCustomFields(): T;
	Owner(): T;
	ProjectResources(): T;
	TaskLinks(): T;
	Tasks(): T;
}

/*********************************************
* DraftProjectMethods<T = any>
**********************************************/
export interface DraftProjectMethods<T = any> {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): T;
	leaveProjectStage(): T;
	readyToLeaveProjectStage(): T;
	updateIdeaListItemStatus(status?: string): T;
	changeEnterpriseProjectType(enterpriseProjectTypeUid?: any): T;
	checkIn(force?: boolean): T;
	getChanges(token?: string): T;
	publish(checkIn?: boolean): T;
	update(): T;
	updateCustomFields(customFieldDictionary?: Array<SP.KeyValue>): T;
	validate(): T;
}

/*********************************************
* DraftProjectResource
**********************************************/
export interface DraftProjectResource extends PS.ProjectResource {
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
* DraftProjectResourceCollections<T = any>
**********************************************/
export interface DraftProjectResourceCollections<T = any> {
	Assignments(): T;
	DefaultAssignmentOwner(): T;
}

/*********************************************
* DraftProjectResourceQuery<T = any>
**********************************************/
export interface DraftProjectResourceQuery<T = any> {
	Assignments(): T;
	DefaultAssignmentOwner(): T;
}

/*********************************************
* DraftProjectResourceMethods<T = any>
**********************************************/
export interface DraftProjectResourceMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* DraftTaskLink
**********************************************/
export interface DraftTaskLink extends PS.TaskLink {
	DependencyType?: number;
	EndId?: any;
	StartId?: any;
}

/*********************************************
* DraftTaskLinkCollections<T = any>
**********************************************/
export interface DraftTaskLinkCollections<T = any> {
	End(): T;
	Start(): T;
}

/*********************************************
* DraftTaskLinkQuery<T = any>
**********************************************/
export interface DraftTaskLinkQuery<T = any> {
	End(): T;
	Start(): T;
}

/*********************************************
* DraftTaskLinkMethods<T = any>
**********************************************/
export interface DraftTaskLinkMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* DraftTask
**********************************************/
export interface DraftTask extends PS.Task {
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
* DraftTaskCollections<T = any>
**********************************************/
export interface DraftTaskCollections<T = any> {
	Assignments(): T;
	Calendar(): T;
	Parent(): T;
	Predecessors(): T;
	StatusManager(): T;
	Successors(): T;
}

/*********************************************
* DraftTaskQuery<T = any>
**********************************************/
export interface DraftTaskQuery<T = any> {
	Assignments(): T;
	Calendar(): T;
	Parent(): T;
	Predecessors(): T;
	StatusManager(): T;
	Successors(): T;
}

/*********************************************
* DraftTaskMethods<T = any>
**********************************************/
export interface DraftTaskMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* ProjectWorkflowInstance
**********************************************/
export interface ProjectWorkflowInstance {
	CreatedDate?: any;
	Id?: any;
	LastSubmittedDate?: any;
	WorkflowError?: string;
	WorkflowErrorResponseCode?: number;
	WorkflowState?: number;
}

/*********************************************
* ProjectWorkflowInstanceCollections<T = any>
**********************************************/
export interface ProjectWorkflowInstanceCollections<T = any> {
	Project(): T;
	WorkflowInstance(): T;
	WorkflowInstanceOwner(): T;
}

/*********************************************
* ProjectWorkflowInstanceQuery<T = any>
**********************************************/
export interface ProjectWorkflowInstanceQuery<T = any> {
	Project(): T;
	WorkflowInstance(): T;
	WorkflowInstanceOwner(): T;
}

/*********************************************
* ProjectWorkflowInstanceMethods<T = any>
**********************************************/
export interface ProjectWorkflowInstanceMethods<T = any> {
	restartWorkflow(): T;
	restartWorkflowSkipToStage(stageId?: any): T;
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
* QueueJob
**********************************************/
export interface QueueJob {
	Id?: any;
	JobState?: number;
	MessageType?: number;
	PercentComplete?: number;
	WaitMilliseconds?: number;
	WaitTime?: any;
}

/*********************************************
* QueueJobCollections<T = any>
**********************************************/
export interface QueueJobCollections<T = any> {
	Project(): T;
	Submitter(): T;
}

/*********************************************
* QueueJobQuery<T = any>
**********************************************/
export interface QueueJobQuery<T = any> {
	Project(): T;
	Submitter(): T;
}

/*********************************************
* QueueJobMethods<T = any>
**********************************************/
export interface QueueJobMethods<T = any> {
	cancel(): T;
}

/*********************************************
* StatusTask
**********************************************/
export interface StatusTask {
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
* StatusTaskCollections<T = any>
**********************************************/
export interface StatusTaskCollections<T = any> {
	CustomFields(): T;
	StatusManager(): T;
}

/*********************************************
* StatusTaskQuery<T = any>
**********************************************/
export interface StatusTaskQuery<T = any> {
	CustomFields(): T;
	StatusManager(): T;
}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable {
	Name?: number;
}

/*********************************************
* EnterpriseResourceCostRateTableCollections<T = any>
**********************************************/
export interface EnterpriseResourceCostRateTableCollections<T = any> {
	CostRates(): T;
}

/*********************************************
* EnterpriseResourceCostRateTableQuery<T = any>
**********************************************/
export interface EnterpriseResourceCostRateTableQuery<T = any> {
	CostRates(): T;
}

/*********************************************
* EnterpriseResourceCostRate
**********************************************/
export interface EnterpriseResourceCostRate {
	CostPerUse?: number;
	EffectiveStarting?: any;
	EffectiveUntil?: any;
	OvertimeRate?: number;
	StandardRate?: number;
}

/*********************************************
* EnterpriseResourceCostRateMethods<T = any>
**********************************************/
export interface EnterpriseResourceCostRateMethods<T = any> {
	restfulDelete(): T;
	rESTfulUpdate(): T;
}

/*********************************************
* ResourceEngagement
**********************************************/
export interface ResourceEngagement extends PS.Engagement {
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
* ResourceEngagementMethods<T = any>
**********************************************/
export interface ResourceEngagementMethods<T = any> {
	deleteObject(): T;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): T;
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
* EntityTypesCollections<T = any>
**********************************************/
export interface EntityTypesCollections<T = any> {
	AssignmentEntity(): T;
	ProjectEntity(): T;
	ResourceEntity(): T;
	TaskEntity(): T;
}

/*********************************************
* EntityTypesQuery<T = any>
**********************************************/
export interface EntityTypesQuery<T = any> {
	AssignmentEntity(): T;
	ProjectEntity(): T;
	ResourceEntity(): T;
	TaskEntity(): T;
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
* EventHandler
**********************************************/
export interface EventHandler {
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
* EventHandlerCollections<T = any>
**********************************************/
export interface EventHandlerCollections<T = any> {
	Event(): T;
}

/*********************************************
* EventHandlerQuery<T = any>
**********************************************/
export interface EventHandlerQuery<T = any> {
	Event(): T;
}

/*********************************************
* EventHandlerMethods<T = any>
**********************************************/
export interface EventHandlerMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry {
	Value?: number;
}

/*********************************************
* LookupCostMethods<T = any>
**********************************************/
export interface LookupCostMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry {
	Value?: any;
}

/*********************************************
* LookupDateMethods<T = any>
**********************************************/
export interface LookupDateMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* LookupDuration
**********************************************/
export interface LookupDuration extends PS.LookupEntry {
	Value?: string;
	ValueMilliseconds?: number;
	ValueTimeSpan?: any;
}

/*********************************************
* LookupDurationMethods<T = any>
**********************************************/
export interface LookupDurationMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry {
	Value?: number;
}

/*********************************************
* LookupNumberMethods<T = any>
**********************************************/
export interface LookupNumberMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* LookupText
**********************************************/
export interface LookupText extends PS.LookupEntry {
	HasChildren?: boolean;
	Mask?: PS.LookupMask;
	Value?: string;
}

/*********************************************
* LookupTextCollections<T = any>
**********************************************/
export interface LookupTextCollections<T = any> {
	Parent(): T;
}

/*********************************************
* LookupTextQuery<T = any>
**********************************************/
export interface LookupTextQuery<T = any> {
	Parent(): T;
}

/*********************************************
* LookupTextMethods<T = any>
**********************************************/
export interface LookupTextMethods<T = any> {
	deleteObject(): T;
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
* PlanAssignment
**********************************************/
export interface PlanAssignment {
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
* PlanAssignmentCollections<T = any>
**********************************************/
export interface PlanAssignmentCollections<T = any> {
	CustomFields(): T;
	Intervals(): T;
	Resource(): T;
}

/*********************************************
* PlanAssignmentQuery<T = any>
**********************************************/
export interface PlanAssignmentQuery<T = any> {
	CustomFields(): T;
	Intervals(): T;
	Resource(): T;
}

/*********************************************
* PlanAssignmentMethods<T = any>
**********************************************/
export interface PlanAssignmentMethods<T = any> {
	deleteObject(): T;
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
* ProjectServer
**********************************************/
export interface ProjectServer {
	EngagementsTimephasedPageSize?: number;
	EnterpriseResourcesPageSize?: number;
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
	ProjectsPageSize?: number;
}

/*********************************************
* ProjectServerCollections<T = any>
**********************************************/
export interface ProjectServerCollections<T = any> {
	Calendars(): T;
	CustomFields(): T;
	EnterpriseProjectTypes(): T;
	EnterpriseResources(): T;
	EntityTypes(): T;
	EventHandlers(): T;
	Events(): T;
	LookupTables(): T;
	Phases(): T;
	ProjectDetailPages(): T;
	Projects(): T;
	ProjectWorkflowInstances(): T;
	Settings(): T;
	Stages(): T;
	TimeSheetPeriods(): T;
	UserPermissions(): T;
	WorkflowActivities(): T;
	WorkflowDesigner(): T;
}

/*********************************************
* ProjectServerQuery<T = any>
**********************************************/
export interface ProjectServerQuery<T = any> {
	Calendars(): T;
	CustomFields(): T;
	EnterpriseProjectTypes(): T;
	EnterpriseResources(): T;
	EntityTypes(): T;
	EventHandlers(): T;
	Events(): T;
	LookupTables(): T;
	Phases(): T;
	ProjectDetailPages(): T;
	Projects(): T;
	ProjectWorkflowInstances(): T;
	Settings(): T;
	Stages(): T;
	TimeSheetPeriods(): T;
	UserPermissions(): T;
	WorkflowActivities(): T;
	WorkflowDesigner(): T;
}

/*********************************************
* ProjectServerMethods<T = any>
**********************************************/
export interface ProjectServerMethods<T = any> {
	getDeletedPublishedAssignments(deletedDate?: any): T;
	stopDelegation(): T;
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
* TimeSheetPeriod
**********************************************/
export interface TimeSheetPeriod {
	End?: any;
	Id?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* TimeSheetPeriodCollections<T = any>
**********************************************/
export interface TimeSheetPeriodCollections<T = any> {
	TimeSheet(): T;
}

/*********************************************
* TimeSheetPeriodQuery<T = any>
**********************************************/
export interface TimeSheetPeriodQuery<T = any> {
	TimeSheet(): T;
}

/*********************************************
* TimeSheetPeriodMethods<T = any>
**********************************************/
export interface TimeSheetPeriodMethods<T = any> {
	createTimeSheet(): T;
}

/*********************************************
* TimeSheet
**********************************************/
export interface TimeSheet {
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
* TimeSheetCollections<T = any>
**********************************************/
export interface TimeSheetCollections<T = any> {
	Creator(): T;
	Lines(): T;
	Manager(): T;
	Period(): T;
}

/*********************************************
* TimeSheetQuery<T = any>
**********************************************/
export interface TimeSheetQuery<T = any> {
	Creator(): T;
	Lines(): T;
	Manager(): T;
	Period(): T;
}

/*********************************************
* TimeSheetMethods<T = any>
**********************************************/
export interface TimeSheetMethods<T = any> {
	deleteObject(): T;
	recall(): T;
	submit(comment?: string): T;
	update(): T;
}

/*********************************************
* TimeSheetLine
**********************************************/
export interface TimeSheetLine {
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
* TimeSheetLineCollections<T = any>
**********************************************/
export interface TimeSheetLineCollections<T = any> {
	Assignment(): T;
	TimeSheet(): T;
	Work(): T;
}

/*********************************************
* TimeSheetLineQuery<T = any>
**********************************************/
export interface TimeSheetLineQuery<T = any> {
	Assignment(): T;
	TimeSheet(): T;
	Work(): T;
}

/*********************************************
* TimeSheetLineMethods<T = any>
**********************************************/
export interface TimeSheetLineMethods<T = any> {
	deleteObject(): T;
	submit(comment?: string): T;
}

/*********************************************
* TimeSheetWork
**********************************************/
export interface TimeSheetWork {
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
* TimeSheetWorkMethods<T = any>
**********************************************/
export interface TimeSheetWorkMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* WorkflowActivities
**********************************************/
export interface WorkflowActivities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowActivitiesMethods<T = any>
**********************************************/
export interface WorkflowActivitiesMethods<T = any> {
	checkInWithJobId(projId?: any, jobId?: any, force?: boolean): T;
	createProjectFromListItem(webId?: any, listId?: any, itemId?: number, eptId?: any): T;
	enterProjectStage(projectId?: any, stageId?: any): T;
	leaveProjectStage(projectId?: any): T;
	publishSummaryWithJobId(projId?: any, jobId?: any): T;
	publishWithJobId(projectId?: any, jobId?: any): T;
	readBooleanProperty(projectId?: any, propertyId?: string): T;
	readCurrencyProperty(projectId?: any, propertyId?: string): T;
	readDateTimeProperty(projectId?: any, propertyId?: string): T;
	readGuidProperty(projectId?: any, propertyId?: string): T;
	readIntegerProperty(projectId?: any, propertyId?: string): T;
	readNumberProperty(projectId?: any, propertyId?: string): T;
	readProjectProperty(projectId?: any, propertyId?: string): T;
	readTextProperty(projectId?: any, propertyId?: string): T;
	readyToLeaveProjectStage(projectId?: any): T;
	updateBooleanProperty(projectId?: any, propertyId?: string, value?: boolean): T;
	updateCurrencyProperty(projectId?: any, propertyId?: string, value?: number): T;
	updateDateTimeProperty(projectId?: any, propertyId?: string, value?: any): T;
	updateGuidProperty(projectId?: any, propertyId?: string, value?: any): T;
	updateIdeaListItemStatus(projectId?: any, status?: string): T;
	updateIntegerProperty(projectId?: any, propertyId?: string, value?: number): T;
	updateNumberProperty(projectId?: any, propertyId?: string, value?: number): T;
	updateProjectStageStatus(projectId?: any, stageId?: any, statusInformation?: string, stageStatusValue?: number, append?: boolean): T;
	updateTextProperty(projectId?: any, propertyId?: string, value?: string): T;
}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerCollections<T = any>
**********************************************/
export interface WorkflowDesignerCollections<T = any> {
	Fields(): T;
}

/*********************************************
* WorkflowDesignerQuery<T = any>
**********************************************/
export interface WorkflowDesignerQuery<T = any> {
	Fields(): T;
}

/*********************************************
* WorkflowDesignerField
**********************************************/
export interface WorkflowDesignerField {
	DisplayName?: string;
	Id?: string;
	IsLookupField?: boolean;
	IsReadOnly?: boolean;
	SPFieldType?: number;
}

/*********************************************
* WorkflowDesignerFieldCollections<T = any>
**********************************************/
export interface WorkflowDesignerFieldCollections<T = any> {
	LookupEntries(): T;
}

/*********************************************
* WorkflowDesignerFieldQuery<T = any>
**********************************************/
export interface WorkflowDesignerFieldQuery<T = any> {
	LookupEntries(): T;
}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException {

}

/*********************************************
* ResourceCalendarExceptionMethods<T = any>
**********************************************/
export interface ResourceCalendarExceptionMethods<T = any> {
	deleteObject(): T;
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
* ResourcePlan
**********************************************/
export interface ResourcePlan {
	Finish?: any;
	Id?: any;
	Start?: any;
	UtilizationDate?: any;
	UtilizationType?: number;
}

/*********************************************
* ResourcePlanCollections<T = any>
**********************************************/
export interface ResourcePlanCollections<T = any> {
	Assignments(): T;
}

/*********************************************
* ResourcePlanQuery<T = any>
**********************************************/
export interface ResourcePlanQuery<T = any> {
	Assignments(): T;
}

/*********************************************
* ResourcePlanMethods<T = any>
**********************************************/
export interface ResourcePlanMethods<T = any> {
	deleteObject(): T;
	forceCheckIn(): T;
	publish(): T;
	update(): T;
}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus {
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
}

/*********************************************
* ServiceStatusMethods<T = any>
**********************************************/
export interface ServiceStatusMethods<T = any> {
	stopDelegation(): T;
}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase {
	End?: any;
	Start?: any;
}

/*********************************************
* TimePhaseCollections<T = any>
**********************************************/
export interface TimePhaseCollections<T = any> {
	Assignments(): T;
}

/*********************************************
* TimePhaseQuery<T = any>
**********************************************/
export interface TimePhaseQuery<T = any> {
	Assignments(): T;
}
