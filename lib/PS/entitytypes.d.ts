import { PS } from "../";

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
* AssignmentMethods
**********************************************/
export interface AssignmentMethods extends Assignment {
	CustomFields?: () => Array<PS.CustomField>;
}

/*********************************************
* AssignmentQuery
**********************************************/
export interface AssignmentQuery extends Assignment {
	CustomFields?: Array<PS.CustomField>;
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
* CustomFieldMethods
**********************************************/
export interface CustomFieldMethods extends CustomField {
	EntityType?: () => PS.EntityType;
	LookupEntries?: () => Array<PS.LookupEntry>;
	LookupTable?: () => PS.LookupTable;
}

/*********************************************
* CustomFieldQuery
**********************************************/
export interface CustomFieldQuery extends CustomField {
	EntityType?: PS.EntityType;
	LookupEntries?: Array<PS.LookupEntry>;
	LookupTable?: PS.LookupTable;
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
* LookupTableMethods
**********************************************/
export interface LookupTableMethods extends LookupTable {
	Entries?: () => Array<PS.LookupEntry>;
}

/*********************************************
* LookupTableQuery
**********************************************/
export interface LookupTableQuery extends LookupTable {
	Entries?: Array<PS.LookupEntry>;
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
* CalendarExceptionMethods
**********************************************/
export interface CalendarExceptionMethods extends CalendarException {
	Calendar?: () => PS.Calendar;
}

/*********************************************
* CalendarExceptionQuery
**********************************************/
export interface CalendarExceptionQuery extends CalendarException {
	Calendar?: PS.Calendar;
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
* CalendarMethods
**********************************************/
export interface CalendarMethods extends Calendar {
	BaseCalendarExceptions?: () => Array<PS.CalendarException>;
}

/*********************************************
* CalendarQuery
**********************************************/
export interface CalendarQuery extends Calendar {
	BaseCalendarExceptions?: Array<PS.CalendarException>;
}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException {

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
* DraftAssignmentMethods
**********************************************/
export interface DraftAssignmentMethods extends DraftAssignment {
	Owner?: () => SP.User;
	Parent?: () => PS.DraftAssignment;
	Resource?: () => PS.DraftProjectResource;
	Task?: () => PS.DraftTask;
}

/*********************************************
* DraftAssignmentQuery
**********************************************/
export interface DraftAssignmentQuery extends DraftAssignment {
	Owner?: SP.User;
	Parent?: PS.DraftAssignment;
	Resource?: PS.DraftProjectResource;
	Task?: PS.DraftTask;
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
* ProjectResourceMethods
**********************************************/
export interface ProjectResourceMethods extends ProjectResource {
	CustomFields?: () => Array<PS.CustomField>;
	EnterpriseResource?: () => PS.EnterpriseResource;
}

/*********************************************
* ProjectResourceQuery
**********************************************/
export interface ProjectResourceQuery extends ProjectResource {
	CustomFields?: Array<PS.CustomField>;
	EnterpriseResource?: PS.EnterpriseResource;
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
* EnterpriseResourceMethods
**********************************************/
export interface EnterpriseResourceMethods extends EnterpriseResource {
	Assignments?: () => Array<PS.StatusAssignment>;
	BaseCalendar?: () => PS.Calendar;
	CostRateTables?: () => Array<PS.EnterpriseResourceCostRateTable>;
	CustomFields?: () => Array<PS.CustomField>;
	DefaultAssignmentOwner?: () => SP.User;
	Engagements?: () => Array<PS.ResourceEngagement>;
	UserPermissions?: () => Array<PS.UserPermission>;
	ResourceCalendarExceptions?: () => Array<PS.CalendarException>;
	Self?: () => PS.EnterpriseResource;
	TimesheetManager?: () => SP.User;
	User?: () => SP.User;
}

/*********************************************
* EnterpriseResourceQuery
**********************************************/
export interface EnterpriseResourceQuery extends EnterpriseResource {
	Assignments?: Array<PS.StatusAssignment>;
	BaseCalendar?: PS.Calendar;
	CostRateTables?: Array<PS.EnterpriseResourceCostRateTable>;
	CustomFields?: Array<PS.CustomField>;
	DefaultAssignmentOwner?: SP.User;
	Engagements?: Array<PS.ResourceEngagement>;
	UserPermissions?: Array<PS.UserPermission>;
	ResourceCalendarExceptions?: Array<PS.CalendarException>;
	Self?: PS.EnterpriseResource;
	TimesheetManager?: SP.User;
	User?: SP.User;
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
* StatusAssignmentMethods
**********************************************/
export interface StatusAssignmentMethods extends StatusAssignment {
	CustomFields?: () => Array<PS.CustomField>;
	History?: () => Array<PS.StatusAssignmentHistoryLine>;
	Project?: () => PS.PublishedProject;
	Resource?: () => PS.EnterpriseResource;
	Task?: () => PS.StatusTask;
}

/*********************************************
* StatusAssignmentQuery
**********************************************/
export interface StatusAssignmentQuery extends StatusAssignment {
	CustomFields?: Array<PS.CustomField>;
	History?: Array<PS.StatusAssignmentHistoryLine>;
	Project?: PS.PublishedProject;
	Resource?: PS.EnterpriseResource;
	Task?: PS.StatusTask;
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
* StatusAssignmentHistoryLineMethods
**********************************************/
export interface StatusAssignmentHistoryLineMethods extends StatusAssignmentHistoryLine {
	Author?: () => SP.User;
}

/*********************************************
* StatusAssignmentHistoryLineQuery
**********************************************/
export interface StatusAssignmentHistoryLineQuery extends StatusAssignmentHistoryLine {
	Author?: SP.User;
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
* ProjectMethods
**********************************************/
export interface ProjectMethods extends Project {
	CheckedOutBy?: () => SP.User;
	CustomFields?: () => Array<PS.CustomField>;
	Engagements?: () => Array<PS.ProjectEngagement>;
	EnterpriseProjectType?: () => PS.EnterpriseProjectType;
	UserPermissions?: () => Array<PS.UserPermission>;
	Phase?: () => PS.Phase;
	ProjectSummaryTask?: () => PS.ProjectSummaryTask;
	QueueJobs?: () => Array<PS.QueueJob>;
	Stage?: () => PS.Stage;
}

/*********************************************
* ProjectQuery
**********************************************/
export interface ProjectQuery extends Project {
	CheckedOutBy?: SP.User;
	CustomFields?: Array<PS.CustomField>;
	Engagements?: Array<PS.ProjectEngagement>;
	EnterpriseProjectType?: PS.EnterpriseProjectType;
	UserPermissions?: Array<PS.UserPermission>;
	Phase?: PS.Phase;
	ProjectSummaryTask?: PS.ProjectSummaryTask;
	QueueJobs?: Array<PS.QueueJob>;
	Stage?: PS.Stage;
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
* EngagementMethods
**********************************************/
export interface EngagementMethods extends Engagement {
	Comments?: () => Array<PS.EngagementComment>;
	ModifiedBy?: () => SP.User;
	Project?: () => PS.Project;
	Resource?: () => PS.EnterpriseResource;
	ReviewedBy?: () => SP.User;
	SubmittedBy?: () => SP.User;
}

/*********************************************
* EngagementQuery
**********************************************/
export interface EngagementQuery extends Engagement {
	Comments?: Array<PS.EngagementComment>;
	ModifiedBy?: SP.User;
	Project?: PS.Project;
	Resource?: PS.EnterpriseResource;
	ReviewedBy?: SP.User;
	SubmittedBy?: SP.User;
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
* EngagementCommentMethods
**********************************************/
export interface EngagementCommentMethods extends EngagementComment {
	Author?: () => SP.User;
}

/*********************************************
* EngagementCommentQuery
**********************************************/
export interface EngagementCommentQuery extends EngagementComment {
	Author?: SP.User;
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
* EnterpriseProjectTypeMethods
**********************************************/
export interface EnterpriseProjectTypeMethods extends EnterpriseProjectType {
	ProjectDetailPages?: () => Array<PS.ProjectDetailPage>;
}

/*********************************************
* EnterpriseProjectTypeQuery
**********************************************/
export interface EnterpriseProjectTypeQuery extends EnterpriseProjectType {
	ProjectDetailPages?: Array<PS.ProjectDetailPage>;
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
* ProjectDetailPageMethods
**********************************************/
export interface ProjectDetailPageMethods extends ProjectDetailPage {
	Item?: () => SP.ListItem;
}

/*********************************************
* ProjectDetailPageQuery
**********************************************/
export interface ProjectDetailPageQuery extends ProjectDetailPage {
	Item?: SP.ListItem;
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
* PhaseMethods
**********************************************/
export interface PhaseMethods extends Phase {
	Stages?: () => Array<PS.Stage>;
}

/*********************************************
* PhaseQuery
**********************************************/
export interface PhaseQuery extends Phase {
	Stages?: Array<PS.Stage>;
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
* StageMethods
**********************************************/
export interface StageMethods extends Stage {
	CustomFields?: () => Array<PS.StageCustomField>;
	Phase?: () => PS.Phase;
	ProjectDetailPages?: () => Array<PS.StageDetailPage>;
	WorkflowStatusPage?: () => PS.ProjectDetailPage;
}

/*********************************************
* StageQuery
**********************************************/
export interface StageQuery extends Stage {
	CustomFields?: Array<PS.StageCustomField>;
	Phase?: PS.Phase;
	ProjectDetailPages?: Array<PS.StageDetailPage>;
	WorkflowStatusPage?: PS.ProjectDetailPage;
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
* StageCustomFieldMethods
**********************************************/
export interface StageCustomFieldMethods extends StageCustomField {
	Stage?: () => PS.Stage;
}

/*********************************************
* StageCustomFieldQuery
**********************************************/
export interface StageCustomFieldQuery extends StageCustomField {
	Stage?: PS.Stage;
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
* StageDetailPageMethods
**********************************************/
export interface StageDetailPageMethods extends StageDetailPage {
	Page?: () => PS.ProjectDetailPage;
	Stage?: () => PS.Stage;
}

/*********************************************
* StageDetailPageQuery
**********************************************/
export interface StageDetailPageQuery extends StageDetailPage {
	Page?: PS.ProjectDetailPage;
	Stage?: PS.Stage;
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
* TaskMethods
**********************************************/
export interface TaskMethods extends Task {
	CustomFields?: () => Array<PS.CustomField>;
	SubProject?: () => PS.PublishedProject;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery extends Task {
	CustomFields?: Array<PS.CustomField>;
	SubProject?: PS.PublishedProject;
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
* PublishedProjectMethods
**********************************************/
export interface PublishedProjectMethods extends PublishedProject {
	Assignments?: () => Array<PS.PublishedAssignment>;
	Calendar?: () => PS.Calendar;
	Draft?: () => PS.DraftProject;
	EntityLinks?: () => Array<PS.EntityLink>;
	IncludeCustomFields?: () => PS.PublishedProject;
	Owner?: () => SP.User;
	ProjectResources?: () => Array<PS.PublishedProjectResource>;
	ProjectWorkflowInstance?: () => PS.ProjectWorkflowInstance;
	TaskLinks?: () => Array<PS.PublishedTaskLink>;
	Tasks?: () => Array<PS.PublishedTask>;
}

/*********************************************
* PublishedProjectQuery
**********************************************/
export interface PublishedProjectQuery extends PublishedProject {
	Assignments?: Array<PS.PublishedAssignment>;
	Calendar?: PS.Calendar;
	Draft?: PS.DraftProject;
	EntityLinks?: Array<PS.EntityLink>;
	IncludeCustomFields?: PS.PublishedProject;
	Owner?: SP.User;
	ProjectResources?: Array<PS.PublishedProjectResource>;
	ProjectWorkflowInstance?: PS.ProjectWorkflowInstance;
	TaskLinks?: Array<PS.PublishedTaskLink>;
	Tasks?: Array<PS.PublishedTask>;
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
* PublishedAssignmentMethods
**********************************************/
export interface PublishedAssignmentMethods extends PublishedAssignment {
	Owner?: () => SP.User;
	Parent?: () => PS.PublishedAssignment;
	Resource?: () => PS.PublishedProjectResource;
	Task?: () => PS.PublishedTask;
}

/*********************************************
* PublishedAssignmentQuery
**********************************************/
export interface PublishedAssignmentQuery extends PublishedAssignment {
	Owner?: SP.User;
	Parent?: PS.PublishedAssignment;
	Resource?: PS.PublishedProjectResource;
	Task?: PS.PublishedTask;
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
* PublishedProjectResourceMethods
**********************************************/
export interface PublishedProjectResourceMethods extends PublishedProjectResource {
	Assignments?: () => Array<PS.PublishedAssignment>;
	DefaultAssignmentOwner?: () => SP.User;
}

/*********************************************
* PublishedProjectResourceQuery
**********************************************/
export interface PublishedProjectResourceQuery extends PublishedProjectResource {
	Assignments?: Array<PS.PublishedAssignment>;
	DefaultAssignmentOwner?: SP.User;
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
* PublishedTaskMethods
**********************************************/
export interface PublishedTaskMethods extends PublishedTask {
	Assignments?: () => Array<PS.PublishedAssignment>;
	Calendar?: () => PS.Calendar;
	EntityLinks?: () => Array<PS.EntityLink>;
	Parent?: () => PS.PublishedTask;
	Predecessors?: () => Array<PS.PublishedTaskLink>;
	StatusManager?: () => SP.User;
	Successors?: () => Array<PS.PublishedTaskLink>;
	TaskPlanLink?: () => PS.TaskPlanLink;
}

/*********************************************
* PublishedTaskQuery
**********************************************/
export interface PublishedTaskQuery extends PublishedTask {
	Assignments?: Array<PS.PublishedAssignment>;
	Calendar?: PS.Calendar;
	EntityLinks?: Array<PS.EntityLink>;
	Parent?: PS.PublishedTask;
	Predecessors?: Array<PS.PublishedTaskLink>;
	StatusManager?: SP.User;
	Successors?: Array<PS.PublishedTaskLink>;
	TaskPlanLink?: PS.TaskPlanLink;
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
* PublishedTaskLinkMethods
**********************************************/
export interface PublishedTaskLinkMethods extends PublishedTaskLink {
	End?: () => PS.PublishedTask;
	Start?: () => PS.PublishedTask;
}

/*********************************************
* PublishedTaskLinkQuery
**********************************************/
export interface PublishedTaskLinkQuery extends PublishedTaskLink {
	End?: PS.PublishedTask;
	Start?: PS.PublishedTask;
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
* DraftProjectMethods
**********************************************/
export interface DraftProjectMethods extends DraftProject {
	Assignments?: () => Array<PS.DraftAssignment>;
	Calendar?: () => PS.Calendar;
	IncludeCustomFields?: () => PS.DraftProject;
	Owner?: () => SP.User;
	ProjectResources?: () => Array<PS.DraftProjectResource>;
	TaskLinks?: () => Array<PS.DraftTaskLink>;
	Tasks?: () => Array<PS.DraftTask>;
}

/*********************************************
* DraftProjectQuery
**********************************************/
export interface DraftProjectQuery extends DraftProject {
	Assignments?: Array<PS.DraftAssignment>;
	Calendar?: PS.Calendar;
	IncludeCustomFields?: PS.DraftProject;
	Owner?: SP.User;
	ProjectResources?: Array<PS.DraftProjectResource>;
	TaskLinks?: Array<PS.DraftTaskLink>;
	Tasks?: Array<PS.DraftTask>;
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
* DraftProjectResourceMethods
**********************************************/
export interface DraftProjectResourceMethods extends DraftProjectResource {
	Assignments?: () => Array<PS.DraftAssignment>;
	DefaultAssignmentOwner?: () => SP.User;
}

/*********************************************
* DraftProjectResourceQuery
**********************************************/
export interface DraftProjectResourceQuery extends DraftProjectResource {
	Assignments?: Array<PS.DraftAssignment>;
	DefaultAssignmentOwner?: SP.User;
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
* DraftTaskLinkMethods
**********************************************/
export interface DraftTaskLinkMethods extends DraftTaskLink {
	End?: () => PS.DraftTask;
	Start?: () => PS.DraftTask;
}

/*********************************************
* DraftTaskLinkQuery
**********************************************/
export interface DraftTaskLinkQuery extends DraftTaskLink {
	End?: PS.DraftTask;
	Start?: PS.DraftTask;
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
* DraftTaskMethods
**********************************************/
export interface DraftTaskMethods extends DraftTask {
	Assignments?: () => Array<PS.DraftAssignment>;
	Calendar?: () => PS.Calendar;
	Parent?: () => PS.DraftTask;
	Predecessors?: () => Array<PS.DraftTaskLink>;
	StatusManager?: () => SP.User;
	Successors?: () => Array<PS.DraftTaskLink>;
}

/*********************************************
* DraftTaskQuery
**********************************************/
export interface DraftTaskQuery extends DraftTask {
	Assignments?: Array<PS.DraftAssignment>;
	Calendar?: PS.Calendar;
	Parent?: PS.DraftTask;
	Predecessors?: Array<PS.DraftTaskLink>;
	StatusManager?: SP.User;
	Successors?: Array<PS.DraftTaskLink>;
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
* ProjectWorkflowInstanceMethods
**********************************************/
export interface ProjectWorkflowInstanceMethods extends ProjectWorkflowInstance {
	Project?: () => PS.Project;
	WorkflowInstance?: () => SP.WorkflowServices.WorkflowInstance;
	WorkflowInstanceOwner?: () => SP.User;
}

/*********************************************
* ProjectWorkflowInstanceQuery
**********************************************/
export interface ProjectWorkflowInstanceQuery extends ProjectWorkflowInstance {
	Project?: PS.Project;
	WorkflowInstance?: SP.WorkflowServices.WorkflowInstance;
	WorkflowInstanceOwner?: SP.User;
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
* QueueJobMethods
**********************************************/
export interface QueueJobMethods extends QueueJob {
	Project?: () => PS.Project;
	Submitter?: () => SP.User;
}

/*********************************************
* QueueJobQuery
**********************************************/
export interface QueueJobQuery extends QueueJob {
	Project?: PS.Project;
	Submitter?: SP.User;
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
* StatusTaskMethods
**********************************************/
export interface StatusTaskMethods extends StatusTask {
	CustomFields?: () => Array<PS.CustomField>;
	StatusManager?: () => SP.User;
}

/*********************************************
* StatusTaskQuery
**********************************************/
export interface StatusTaskQuery extends StatusTask {
	CustomFields?: Array<PS.CustomField>;
	StatusManager?: SP.User;
}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable {
	Name?: number;
}

/*********************************************
* EnterpriseResourceCostRateTableMethods
**********************************************/
export interface EnterpriseResourceCostRateTableMethods extends EnterpriseResourceCostRateTable {
	CostRates?: () => Array<PS.EnterpriseResourceCostRate>;
}

/*********************************************
* EnterpriseResourceCostRateTableQuery
**********************************************/
export interface EnterpriseResourceCostRateTableQuery extends EnterpriseResourceCostRateTable {
	CostRates?: Array<PS.EnterpriseResourceCostRate>;
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
* EntityTypesMethods
**********************************************/
export interface EntityTypesMethods extends EntityTypes {
	AssignmentEntity?: () => PS.EntityType;
	ProjectEntity?: () => PS.EntityType;
	ResourceEntity?: () => PS.EntityType;
	TaskEntity?: () => PS.EntityType;
}

/*********************************************
* EntityTypesQuery
**********************************************/
export interface EntityTypesQuery extends EntityTypes {
	AssignmentEntity?: PS.EntityType;
	ProjectEntity?: PS.EntityType;
	ResourceEntity?: PS.EntityType;
	TaskEntity?: PS.EntityType;
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
* EventHandlerMethods
**********************************************/
export interface EventHandlerMethods extends EventHandler {
	Event?: () => PS.Event;
}

/*********************************************
* EventHandlerQuery
**********************************************/
export interface EventHandlerQuery extends EventHandler {
	Event?: PS.Event;
}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry {
	Value?: number;
}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry {
	Value?: any;
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
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry {
	Value?: number;
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
* LookupTextMethods
**********************************************/
export interface LookupTextMethods extends LookupText {
	Parent?: () => PS.LookupText;
}

/*********************************************
* LookupTextQuery
**********************************************/
export interface LookupTextQuery extends LookupText {
	Parent?: PS.LookupText;
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
* PlanAssignmentMethods
**********************************************/
export interface PlanAssignmentMethods extends PlanAssignment {
	CustomFields?: () => Array<PS.CustomField>;
	Intervals?: () => Array<PS.PlanAssignmentInterval>;
	Resource?: () => PS.EnterpriseResource;
}

/*********************************************
* PlanAssignmentQuery
**********************************************/
export interface PlanAssignmentQuery extends PlanAssignment {
	CustomFields?: Array<PS.CustomField>;
	Intervals?: Array<PS.PlanAssignmentInterval>;
	Resource?: PS.EnterpriseResource;
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
* ProjectServerMethods
**********************************************/
export interface ProjectServerMethods extends ProjectServer {
	Calendars?: () => Array<PS.Calendar>;
	CustomFields?: () => Array<PS.CustomField>;
	EnterpriseProjectTypes?: () => Array<PS.EnterpriseProjectType>;
	EnterpriseResources?: () => Array<PS.EnterpriseResource>;
	EntityTypes?: () => PS.EntityTypes;
	EventHandlers?: () => Array<PS.EventHandler>;
	Events?: () => Array<PS.Event>;
	LookupTables?: () => Array<PS.LookupTable>;
	Phases?: () => Array<PS.Phase>;
	ProjectDetailPages?: () => Array<PS.ProjectDetailPage>;
	Projects?: () => Array<PS.PublishedProject>;
	ProjectWorkflowInstances?: () => Array<PS.ProjectWorkflowInstance>;
	Settings?: () => PS.Settings;
	Stages?: () => Array<PS.Stage>;
	TimeSheetPeriods?: () => Array<PS.TimeSheetPeriod>;
	UserPermissions?: () => Array<PS.UserPermission>;
	WorkflowActivities?: () => PS.WorkflowActivities;
	WorkflowDesigner?: () => PS.WorkflowDesigner;
}

/*********************************************
* ProjectServerQuery
**********************************************/
export interface ProjectServerQuery extends ProjectServer {
	Calendars?: Array<PS.Calendar>;
	CustomFields?: Array<PS.CustomField>;
	EnterpriseProjectTypes?: Array<PS.EnterpriseProjectType>;
	EnterpriseResources?: Array<PS.EnterpriseResource>;
	EntityTypes?: PS.EntityTypes;
	EventHandlers?: Array<PS.EventHandler>;
	Events?: Array<PS.Event>;
	LookupTables?: Array<PS.LookupTable>;
	Phases?: Array<PS.Phase>;
	ProjectDetailPages?: Array<PS.ProjectDetailPage>;
	Projects?: Array<PS.PublishedProject>;
	ProjectWorkflowInstances?: Array<PS.ProjectWorkflowInstance>;
	Settings?: PS.Settings;
	Stages?: Array<PS.Stage>;
	TimeSheetPeriods?: Array<PS.TimeSheetPeriod>;
	UserPermissions?: Array<PS.UserPermission>;
	WorkflowActivities?: PS.WorkflowActivities;
	WorkflowDesigner?: PS.WorkflowDesigner;
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
* TimeSheetPeriodMethods
**********************************************/
export interface TimeSheetPeriodMethods extends TimeSheetPeriod {
	TimeSheet?: () => PS.TimeSheet;
}

/*********************************************
* TimeSheetPeriodQuery
**********************************************/
export interface TimeSheetPeriodQuery extends TimeSheetPeriod {
	TimeSheet?: PS.TimeSheet;
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
* TimeSheetMethods
**********************************************/
export interface TimeSheetMethods extends TimeSheet {
	Creator?: () => SP.User;
	Lines?: () => Array<PS.TimeSheetLine>;
	Manager?: () => SP.User;
	Period?: () => PS.TimeSheetPeriod;
}

/*********************************************
* TimeSheetQuery
**********************************************/
export interface TimeSheetQuery extends TimeSheet {
	Creator?: SP.User;
	Lines?: Array<PS.TimeSheetLine>;
	Manager?: SP.User;
	Period?: PS.TimeSheetPeriod;
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
* TimeSheetLineMethods
**********************************************/
export interface TimeSheetLineMethods extends TimeSheetLine {
	Assignment?: () => PS.PublishedAssignment;
	TimeSheet?: () => PS.TimeSheet;
	Work?: () => Array<PS.TimeSheetWork>;
}

/*********************************************
* TimeSheetLineQuery
**********************************************/
export interface TimeSheetLineQuery extends TimeSheetLine {
	Assignment?: PS.PublishedAssignment;
	TimeSheet?: PS.TimeSheet;
	Work?: Array<PS.TimeSheetWork>;
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
* WorkflowActivities
**********************************************/
export interface WorkflowActivities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerMethods
**********************************************/
export interface WorkflowDesignerMethods extends WorkflowDesigner {
	Fields?: () => Array<PS.WorkflowDesignerField>;
}

/*********************************************
* WorkflowDesignerQuery
**********************************************/
export interface WorkflowDesignerQuery extends WorkflowDesigner {
	Fields?: Array<PS.WorkflowDesignerField>;
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
* WorkflowDesignerFieldMethods
**********************************************/
export interface WorkflowDesignerFieldMethods extends WorkflowDesignerField {
	LookupEntries?: () => Array<PS.LookupEntry>;
}

/*********************************************
* WorkflowDesignerFieldQuery
**********************************************/
export interface WorkflowDesignerFieldQuery extends WorkflowDesignerField {
	LookupEntries?: Array<PS.LookupEntry>;
}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException {

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
* ResourcePlanMethods
**********************************************/
export interface ResourcePlanMethods extends ResourcePlan {
	Assignments?: () => Array<PS.PlanAssignment>;
}

/*********************************************
* ResourcePlanQuery
**********************************************/
export interface ResourcePlanQuery extends ResourcePlan {
	Assignments?: Array<PS.PlanAssignment>;
}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus {
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase {
	End?: any;
	Start?: any;
}

/*********************************************
* TimePhaseMethods
**********************************************/
export interface TimePhaseMethods extends TimePhase {
	Assignments?: () => Array<PS.StatusAssignment>;
}

/*********************************************
* TimePhaseQuery
**********************************************/
export interface TimePhaseQuery extends TimePhase {
	Assignments?: Array<PS.StatusAssignment>;
}
