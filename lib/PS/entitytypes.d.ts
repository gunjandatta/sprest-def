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
* AssignmentCollections
**********************************************/
export interface AssignmentCollections {
	CustomFields<T=Array<PS.CustomField>>(): T;
}

/*********************************************
* AssignmentQuery
**********************************************/
export interface AssignmentQuery {
	CustomFields<T=Array<PS.CustomField>>(): T;
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
* CustomFieldCollections
**********************************************/
export interface CustomFieldCollections {
	EntityType<T=PS.EntityType>(): T;
	LookupEntries<T=Array<PS.LookupEntry>>(): T;
	LookupTable<T=PS.LookupTable>(): T;
}

/*********************************************
* CustomFieldQuery
**********************************************/
export interface CustomFieldQuery {
	EntityType<T=PS.EntityType>(): T;
	LookupEntries<T=Array<PS.LookupEntry>>(): T;
	LookupTable<T=PS.LookupTable>(): T;
}

/*********************************************
* CustomFieldMethods
**********************************************/
export interface CustomFieldMethods {
	deleteObject<T=void>(): T;
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
* LookupEntryMethods
**********************************************/
export interface LookupEntryMethods {
	deleteObject<T=void>(): T;
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
* LookupTableCollections
**********************************************/
export interface LookupTableCollections {
	Entries<T=Array<PS.LookupEntry>>(): T;
}

/*********************************************
* LookupTableQuery
**********************************************/
export interface LookupTableQuery {
	Entries<T=Array<PS.LookupEntry>>(): T;
}

/*********************************************
* LookupTableMethods
**********************************************/
export interface LookupTableMethods {
	addMask<T=void>(mask?: PS.LookupMask): T;
	deleteObject<T=void>(): T;
	updateMask<T=void>(mask?: PS.LookupMask, level?: number): T;
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
* CalendarExceptionCollections
**********************************************/
export interface CalendarExceptionCollections {
	Calendar<T=PS.Calendar>(): T;
}

/*********************************************
* CalendarExceptionQuery
**********************************************/
export interface CalendarExceptionQuery {
	Calendar<T=PS.Calendar>(): T;
}

/*********************************************
* CalendarExceptionMethods
**********************************************/
export interface CalendarExceptionMethods {
	deleteObject<T=void>(): T;
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
* CalendarCollections
**********************************************/
export interface CalendarCollections {
	BaseCalendarExceptions<T=Array<PS.CalendarException>>(): T;
}

/*********************************************
* CalendarQuery
**********************************************/
export interface CalendarQuery {
	BaseCalendarExceptions<T=Array<PS.CalendarException>>(): T;
}

/*********************************************
* CalendarMethods
**********************************************/
export interface CalendarMethods {
	copyTo<T=PS.Calendar>(name?: string): T;
	deleteObject<T=void>(): T;
}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException {

}

/*********************************************
* BaseCalendarExceptionMethods
**********************************************/
export interface BaseCalendarExceptionMethods {
	deleteObject<T=void>(): T;
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
* DraftAssignmentCollections
**********************************************/
export interface DraftAssignmentCollections {
	Owner<T=SP.User>(): T;
	Parent<T=PS.DraftAssignment>(): T;
	Resource<T=PS.DraftProjectResource>(): T;
	Task<T=PS.DraftTask>(): T;
}

/*********************************************
* DraftAssignmentQuery
**********************************************/
export interface DraftAssignmentQuery {
	Owner<T=SP.User>(): T;
	Parent<T=PS.DraftAssignment>(): T;
	Resource<T=PS.DraftProjectResource>(): T;
	Task<T=PS.DraftTask>(): T;
}

/*********************************************
* DraftAssignmentMethods
**********************************************/
export interface DraftAssignmentMethods {
	deleteObject<T=void>(): T;
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
* ProjectResourceCollections
**********************************************/
export interface ProjectResourceCollections {
	CustomFields<T=Array<PS.CustomField>>(): T;
	EnterpriseResource<T=PS.EnterpriseResource>(): T;
}

/*********************************************
* ProjectResourceQuery
**********************************************/
export interface ProjectResourceQuery {
	CustomFields<T=Array<PS.CustomField>>(): T;
	EnterpriseResource<T=PS.EnterpriseResource>(): T;
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
* EnterpriseResourceCollections
**********************************************/
export interface EnterpriseResourceCollections {
	Assignments<T=Array<PS.StatusAssignment>>(): T;
	BaseCalendar<T=PS.Calendar>(): T;
	CostRateTables<T=Array<PS.EnterpriseResourceCostRateTable>>(): T;
	CustomFields<T=Array<PS.CustomField>>(): T;
	DefaultAssignmentOwner<T=SP.User>(): T;
	Engagements<T=Array<PS.ResourceEngagement>>(): T;
	UserPermissions<T=Array<PS.UserPermission>>(): T;
	ResourceCalendarExceptions<T=Array<PS.CalendarException>>(): T;
	Self<T=PS.EnterpriseResource>(): T;
	TimesheetManager<T=SP.User>(): T;
	User<T=SP.User>(): T;
}

/*********************************************
* EnterpriseResourceQuery
**********************************************/
export interface EnterpriseResourceQuery {
	Assignments<T=Array<PS.StatusAssignment>>(): T;
	BaseCalendar<T=PS.Calendar>(): T;
	CostRateTables<T=Array<PS.EnterpriseResourceCostRateTable>>(): T;
	CustomFields<T=Array<PS.CustomField>>(): T;
	DefaultAssignmentOwner<T=SP.User>(): T;
	Engagements<T=Array<PS.ResourceEngagement>>(): T;
	UserPermissions<T=Array<PS.UserPermission>>(): T;
	ResourceCalendarExceptions<T=Array<PS.CalendarException>>(): T;
	Self<T=PS.EnterpriseResource>(): T;
	TimesheetManager<T=SP.User>(): T;
	User<T=SP.User>(): T;
}

/*********************************************
* EnterpriseResourceMethods
**********************************************/
export interface EnterpriseResourceMethods {
	deleteObject<T=void>(): T;
	forceCheckIn<T=void>(): T;
	updateClaimsAccount<T=void>(newClaimsAccount?: string): T;
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
* StatusAssignmentCollections
**********************************************/
export interface StatusAssignmentCollections {
	CustomFields<T=Array<PS.CustomField>>(): T;
	History<T=Array<PS.StatusAssignmentHistoryLine>>(): T;
	Project<T=PS.PublishedProject>(): T;
	Resource<T=PS.EnterpriseResource>(): T;
	Task<T=PS.StatusTask>(): T;
}

/*********************************************
* StatusAssignmentQuery
**********************************************/
export interface StatusAssignmentQuery {
	CustomFields<T=Array<PS.CustomField>>(): T;
	History<T=Array<PS.StatusAssignmentHistoryLine>>(): T;
	Project<T=PS.PublishedProject>(): T;
	Resource<T=PS.EnterpriseResource>(): T;
	Task<T=PS.StatusTask>(): T;
}

/*********************************************
* StatusAssignmentMethods
**********************************************/
export interface StatusAssignmentMethods {
	deleteObject<T=void>(): T;
	submitStatusUpdates<T=void>(comment?: string): T;
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
* StatusAssignmentHistoryLineCollections
**********************************************/
export interface StatusAssignmentHistoryLineCollections {
	Author<T=SP.User>(): T;
}

/*********************************************
* StatusAssignmentHistoryLineQuery
**********************************************/
export interface StatusAssignmentHistoryLineQuery {
	Author<T=SP.User>(): T;
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
* ProjectCollections
**********************************************/
export interface ProjectCollections {
	CheckedOutBy<T=SP.User>(): T;
	CustomFields<T=Array<PS.CustomField>>(): T;
	Engagements<T=Array<PS.ProjectEngagement>>(): T;
	EnterpriseProjectType<T=PS.EnterpriseProjectType>(): T;
	UserPermissions<T=Array<PS.UserPermission>>(): T;
	Phase<T=PS.Phase>(): T;
	ProjectSummaryTask<T=PS.ProjectSummaryTask>(): T;
	QueueJobs<T=Array<PS.QueueJob>>(): T;
	Stage<T=PS.Stage>(): T;
}

/*********************************************
* ProjectQuery
**********************************************/
export interface ProjectQuery {
	CheckedOutBy<T=SP.User>(): T;
	CustomFields<T=Array<PS.CustomField>>(): T;
	Engagements<T=Array<PS.ProjectEngagement>>(): T;
	EnterpriseProjectType<T=PS.EnterpriseProjectType>(): T;
	UserPermissions<T=Array<PS.UserPermission>>(): T;
	Phase<T=PS.Phase>(): T;
	ProjectSummaryTask<T=PS.ProjectSummaryTask>(): T;
	QueueJobs<T=Array<PS.QueueJob>>(): T;
	Stage<T=PS.Stage>(): T;
}

/*********************************************
* ProjectMethods
**********************************************/
export interface ProjectMethods {
	getResourcePlanByUrl<T=PS.ResourcePlan>(start?: string, end?: string, scale?: string): T;
	leaveProjectStage<T=void>(): T;
	readyToLeaveProjectStage<T=number>(): T;
	updateIdeaListItemStatus<T=void>(status?: string): T;
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
* EngagementCollections
**********************************************/
export interface EngagementCollections {
	Comments<T=Array<PS.EngagementComment>>(): T;
	ModifiedBy<T=SP.User>(): T;
	Project<T=PS.Project>(): T;
	Resource<T=PS.EnterpriseResource>(): T;
	ReviewedBy<T=SP.User>(): T;
	SubmittedBy<T=SP.User>(): T;
}

/*********************************************
* EngagementQuery
**********************************************/
export interface EngagementQuery {
	Comments<T=Array<PS.EngagementComment>>(): T;
	ModifiedBy<T=SP.User>(): T;
	Project<T=PS.Project>(): T;
	Resource<T=PS.EnterpriseResource>(): T;
	ReviewedBy<T=SP.User>(): T;
	SubmittedBy<T=SP.User>(): T;
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
* EngagementCommentCollections
**********************************************/
export interface EngagementCommentCollections {
	Author<T=SP.User>(): T;
}

/*********************************************
* EngagementCommentQuery
**********************************************/
export interface EngagementCommentQuery {
	Author<T=SP.User>(): T;
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
* ProjectEngagementMethods
**********************************************/
export interface ProjectEngagementMethods {
	deleteObject<T=void>(): T;
	getTimephasedByUrl<T=Array<PS.ProjectEngagementTimephasedPeriod>>(start?: string, end?: string, scale?: string, contourType?: string): T;
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
* EnterpriseProjectTypeCollections
**********************************************/
export interface EnterpriseProjectTypeCollections {
	ProjectDetailPages<T=Array<PS.ProjectDetailPage>>(): T;
}

/*********************************************
* EnterpriseProjectTypeQuery
**********************************************/
export interface EnterpriseProjectTypeQuery {
	ProjectDetailPages<T=Array<PS.ProjectDetailPage>>(): T;
}

/*********************************************
* EnterpriseProjectTypeMethods
**********************************************/
export interface EnterpriseProjectTypeMethods {
	addDepartment<T=void>(departmentValueGuid?: any): T;
	deleteObject<T=void>(): T;
	removeDepartment<T=void>(departmentValueGuid?: any): T;
	updateCreatePDP<T=void>(pdp?: PS.ProjectDetailPageCreationInformation): T;
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
* ProjectDetailPageCollections
**********************************************/
export interface ProjectDetailPageCollections {
	Item<T=SP.ListItem>(): T;
}

/*********************************************
* ProjectDetailPageQuery
**********************************************/
export interface ProjectDetailPageQuery {
	Item<T=SP.ListItem>(): T;
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
* PhaseCollections
**********************************************/
export interface PhaseCollections {
	Stages<T=Array<PS.Stage>>(): T;
}

/*********************************************
* PhaseQuery
**********************************************/
export interface PhaseQuery {
	Stages<T=Array<PS.Stage>>(): T;
}

/*********************************************
* PhaseMethods
**********************************************/
export interface PhaseMethods {
	deleteObject<T=void>(): T;
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
* StageCollections
**********************************************/
export interface StageCollections {
	CustomFields<T=Array<PS.StageCustomField>>(): T;
	Phase<T=PS.Phase>(): T;
	ProjectDetailPages<T=Array<PS.StageDetailPage>>(): T;
	WorkflowStatusPage<T=PS.ProjectDetailPage>(): T;
}

/*********************************************
* StageQuery
**********************************************/
export interface StageQuery {
	CustomFields<T=Array<PS.StageCustomField>>(): T;
	Phase<T=PS.Phase>(): T;
	ProjectDetailPages<T=Array<PS.StageDetailPage>>(): T;
	WorkflowStatusPage<T=PS.ProjectDetailPage>(): T;
}

/*********************************************
* StageMethods
**********************************************/
export interface StageMethods {
	deleteObject<T=void>(): T;
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
* StageCustomFieldCollections
**********************************************/
export interface StageCustomFieldCollections {
	Stage<T=PS.Stage>(): T;
}

/*********************************************
* StageCustomFieldQuery
**********************************************/
export interface StageCustomFieldQuery {
	Stage<T=PS.Stage>(): T;
}

/*********************************************
* StageCustomFieldMethods
**********************************************/
export interface StageCustomFieldMethods {
	deleteObject<T=void>(): T;
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
* StageDetailPageCollections
**********************************************/
export interface StageDetailPageCollections {
	Page<T=PS.ProjectDetailPage>(): T;
	Stage<T=PS.Stage>(): T;
}

/*********************************************
* StageDetailPageQuery
**********************************************/
export interface StageDetailPageQuery {
	Page<T=PS.ProjectDetailPage>(): T;
	Stage<T=PS.Stage>(): T;
}

/*********************************************
* StageDetailPageMethods
**********************************************/
export interface StageDetailPageMethods {
	deleteObject<T=void>(): T;
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
* TaskCollections
**********************************************/
export interface TaskCollections {
	CustomFields<T=Array<PS.CustomField>>(): T;
	SubProject<T=PS.PublishedProject>(): T;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery {
	CustomFields<T=Array<PS.CustomField>>(): T;
	SubProject<T=PS.PublishedProject>(): T;
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
* PublishedProjectCollections
**********************************************/
export interface PublishedProjectCollections {
	Assignments<T=Array<PS.PublishedAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	Draft<T=PS.DraftProject>(): T;
	EntityLinks<T=Array<PS.EntityLink>>(): T;
	IncludeCustomFields<T=PS.PublishedProject>(): T;
	Owner<T=SP.User>(): T;
	ProjectResources<T=Array<PS.PublishedProjectResource>>(): T;
	ProjectWorkflowInstance<T=PS.ProjectWorkflowInstance>(): T;
	TaskLinks<T=Array<PS.PublishedTaskLink>>(): T;
	Tasks<T=Array<PS.PublishedTask>>(): T;
}

/*********************************************
* PublishedProjectQuery
**********************************************/
export interface PublishedProjectQuery {
	Assignments<T=Array<PS.PublishedAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	Draft<T=PS.DraftProject>(): T;
	EntityLinks<T=Array<PS.EntityLink>>(): T;
	IncludeCustomFields<T=PS.PublishedProject>(): T;
	Owner<T=SP.User>(): T;
	ProjectResources<T=Array<PS.PublishedProjectResource>>(): T;
	ProjectWorkflowInstance<T=PS.ProjectWorkflowInstance>(): T;
	TaskLinks<T=Array<PS.PublishedTaskLink>>(): T;
	Tasks<T=Array<PS.PublishedTask>>(): T;
}

/*********************************************
* PublishedProjectMethods
**********************************************/
export interface PublishedProjectMethods {
	getResourcePlanByUrl<T=PS.ResourcePlan>(start?: string, end?: string, scale?: string): T;
	leaveProjectStage<T=void>(): T;
	readyToLeaveProjectStage<T=number>(): T;
	updateIdeaListItemStatus<T=void>(status?: string): T;
	checkOut<T=PS.DraftProject>(): T;
	createProjectSite<T=void>(siteName?: string): T;
	deleteObject<T=PS.QueueJob>(): T;
	submitToWorkflow<T=void>(): T;
	updateVisibilityCustomFields<T=PS.QueueJob>(): T;
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
* PublishedAssignmentCollections
**********************************************/
export interface PublishedAssignmentCollections {
	Owner<T=SP.User>(): T;
	Parent<T=PS.PublishedAssignment>(): T;
	Resource<T=PS.PublishedProjectResource>(): T;
	Task<T=PS.PublishedTask>(): T;
}

/*********************************************
* PublishedAssignmentQuery
**********************************************/
export interface PublishedAssignmentQuery {
	Owner<T=SP.User>(): T;
	Parent<T=PS.PublishedAssignment>(): T;
	Resource<T=PS.PublishedProjectResource>(): T;
	Task<T=PS.PublishedTask>(): T;
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
* PublishedProjectResourceCollections
**********************************************/
export interface PublishedProjectResourceCollections {
	Assignments<T=Array<PS.PublishedAssignment>>(): T;
	DefaultAssignmentOwner<T=SP.User>(): T;
}

/*********************************************
* PublishedProjectResourceQuery
**********************************************/
export interface PublishedProjectResourceQuery {
	Assignments<T=Array<PS.PublishedAssignment>>(): T;
	DefaultAssignmentOwner<T=SP.User>(): T;
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
* PublishedTaskCollections
**********************************************/
export interface PublishedTaskCollections {
	Assignments<T=Array<PS.PublishedAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	EntityLinks<T=Array<PS.EntityLink>>(): T;
	Parent<T=PS.PublishedTask>(): T;
	Predecessors<T=Array<PS.PublishedTaskLink>>(): T;
	StatusManager<T=SP.User>(): T;
	Successors<T=Array<PS.PublishedTaskLink>>(): T;
	TaskPlanLink<T=PS.TaskPlanLink>(): T;
}

/*********************************************
* PublishedTaskQuery
**********************************************/
export interface PublishedTaskQuery {
	Assignments<T=Array<PS.PublishedAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	EntityLinks<T=Array<PS.EntityLink>>(): T;
	Parent<T=PS.PublishedTask>(): T;
	Predecessors<T=Array<PS.PublishedTaskLink>>(): T;
	StatusManager<T=SP.User>(): T;
	Successors<T=Array<PS.PublishedTaskLink>>(): T;
	TaskPlanLink<T=PS.TaskPlanLink>(): T;
}

/*********************************************
* PublishedTaskMethods
**********************************************/
export interface PublishedTaskMethods {
	addTaskPlanLink<T=PS.TaskPlanLink>(parameters?: PS.TaskPlanLinksCreationInformation): T;
	deleteTaskPlanLink<T=void>(): T;
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
* EntityLinkMethods
**********************************************/
export interface EntityLinkMethods {
	deleteObject<T=void>(): T;
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
* PublishedTaskLinkCollections
**********************************************/
export interface PublishedTaskLinkCollections {
	End<T=PS.PublishedTask>(): T;
	Start<T=PS.PublishedTask>(): T;
}

/*********************************************
* PublishedTaskLinkQuery
**********************************************/
export interface PublishedTaskLinkQuery {
	End<T=PS.PublishedTask>(): T;
	Start<T=PS.PublishedTask>(): T;
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
* TaskPlanLinkMethods
**********************************************/
export interface TaskPlanLinkMethods {
	deleteObject<T=void>(): T;
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
* DraftProjectCollections
**********************************************/
export interface DraftProjectCollections {
	Assignments<T=Array<PS.DraftAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	IncludeCustomFields<T=PS.DraftProject>(): T;
	Owner<T=SP.User>(): T;
	ProjectResources<T=Array<PS.DraftProjectResource>>(): T;
	TaskLinks<T=Array<PS.DraftTaskLink>>(): T;
	Tasks<T=Array<PS.DraftTask>>(): T;
}

/*********************************************
* DraftProjectQuery
**********************************************/
export interface DraftProjectQuery {
	Assignments<T=Array<PS.DraftAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	IncludeCustomFields<T=PS.DraftProject>(): T;
	Owner<T=SP.User>(): T;
	ProjectResources<T=Array<PS.DraftProjectResource>>(): T;
	TaskLinks<T=Array<PS.DraftTaskLink>>(): T;
	Tasks<T=Array<PS.DraftTask>>(): T;
}

/*********************************************
* DraftProjectMethods
**********************************************/
export interface DraftProjectMethods {
	getResourcePlanByUrl<T=PS.ResourcePlan>(start?: string, end?: string, scale?: string): T;
	leaveProjectStage<T=void>(): T;
	readyToLeaveProjectStage<T=number>(): T;
	updateIdeaListItemStatus<T=void>(status?: string): T;
	changeEnterpriseProjectType<T=void>(enterpriseProjectTypeUid?: any): T;
	checkIn<T=PS.QueueJob>(force?: boolean): T;
	getChanges<T=PS.DraftProject>(token?: string): T;
	publish<T=PS.QueueJob>(checkIn?: boolean): T;
	update<T=PS.QueueJob>(): T;
	updateCustomFields<T=PS.QueueJob>(customFieldDictionary?: Array<SP.KeyValue>): T;
	validate<T=void>(): T;
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
* DraftProjectResourceCollections
**********************************************/
export interface DraftProjectResourceCollections {
	Assignments<T=Array<PS.DraftAssignment>>(): T;
	DefaultAssignmentOwner<T=SP.User>(): T;
}

/*********************************************
* DraftProjectResourceQuery
**********************************************/
export interface DraftProjectResourceQuery {
	Assignments<T=Array<PS.DraftAssignment>>(): T;
	DefaultAssignmentOwner<T=SP.User>(): T;
}

/*********************************************
* DraftProjectResourceMethods
**********************************************/
export interface DraftProjectResourceMethods {
	deleteObject<T=void>(): T;
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
* DraftTaskLinkCollections
**********************************************/
export interface DraftTaskLinkCollections {
	End<T=PS.DraftTask>(): T;
	Start<T=PS.DraftTask>(): T;
}

/*********************************************
* DraftTaskLinkQuery
**********************************************/
export interface DraftTaskLinkQuery {
	End<T=PS.DraftTask>(): T;
	Start<T=PS.DraftTask>(): T;
}

/*********************************************
* DraftTaskLinkMethods
**********************************************/
export interface DraftTaskLinkMethods {
	deleteObject<T=void>(): T;
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
* DraftTaskCollections
**********************************************/
export interface DraftTaskCollections {
	Assignments<T=Array<PS.DraftAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	Parent<T=PS.DraftTask>(): T;
	Predecessors<T=Array<PS.DraftTaskLink>>(): T;
	StatusManager<T=SP.User>(): T;
	Successors<T=Array<PS.DraftTaskLink>>(): T;
}

/*********************************************
* DraftTaskQuery
**********************************************/
export interface DraftTaskQuery {
	Assignments<T=Array<PS.DraftAssignment>>(): T;
	Calendar<T=PS.Calendar>(): T;
	Parent<T=PS.DraftTask>(): T;
	Predecessors<T=Array<PS.DraftTaskLink>>(): T;
	StatusManager<T=SP.User>(): T;
	Successors<T=Array<PS.DraftTaskLink>>(): T;
}

/*********************************************
* DraftTaskMethods
**********************************************/
export interface DraftTaskMethods {
	deleteObject<T=void>(): T;
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
* ProjectWorkflowInstanceCollections
**********************************************/
export interface ProjectWorkflowInstanceCollections {
	Project<T=PS.Project>(): T;
	WorkflowInstance<T=SP.WorkflowServices.WorkflowInstance>(): T;
	WorkflowInstanceOwner<T=SP.User>(): T;
}

/*********************************************
* ProjectWorkflowInstanceQuery
**********************************************/
export interface ProjectWorkflowInstanceQuery {
	Project<T=PS.Project>(): T;
	WorkflowInstance<T=SP.WorkflowServices.WorkflowInstance>(): T;
	WorkflowInstanceOwner<T=SP.User>(): T;
}

/*********************************************
* ProjectWorkflowInstanceMethods
**********************************************/
export interface ProjectWorkflowInstanceMethods {
	restartWorkflow<T=SP.WorkflowServices.WorkflowInstance>(): T;
	restartWorkflowSkipToStage<T=SP.WorkflowServices.WorkflowInstance>(stageId?: any): T;
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
* QueueJobCollections
**********************************************/
export interface QueueJobCollections {
	Project<T=PS.Project>(): T;
	Submitter<T=SP.User>(): T;
}

/*********************************************
* QueueJobQuery
**********************************************/
export interface QueueJobQuery {
	Project<T=PS.Project>(): T;
	Submitter<T=SP.User>(): T;
}

/*********************************************
* QueueJobMethods
**********************************************/
export interface QueueJobMethods {
	cancel<T=void>(): T;
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
* StatusTaskCollections
**********************************************/
export interface StatusTaskCollections {
	CustomFields<T=Array<PS.CustomField>>(): T;
	StatusManager<T=SP.User>(): T;
}

/*********************************************
* StatusTaskQuery
**********************************************/
export interface StatusTaskQuery {
	CustomFields<T=Array<PS.CustomField>>(): T;
	StatusManager<T=SP.User>(): T;
}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable {
	Name?: number;
}

/*********************************************
* EnterpriseResourceCostRateTableCollections
**********************************************/
export interface EnterpriseResourceCostRateTableCollections {
	CostRates<T=Array<PS.EnterpriseResourceCostRate>>(): T;
}

/*********************************************
* EnterpriseResourceCostRateTableQuery
**********************************************/
export interface EnterpriseResourceCostRateTableQuery {
	CostRates<T=Array<PS.EnterpriseResourceCostRate>>(): T;
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
* EnterpriseResourceCostRateMethods
**********************************************/
export interface EnterpriseResourceCostRateMethods {
	restfulDelete<T=void>(): T;
	rESTfulUpdate<T=void>(): T;
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
* ResourceEngagementMethods
**********************************************/
export interface ResourceEngagementMethods {
	deleteObject<T=void>(): T;
	getTimephasedByUrl<T=Array<PS.ResourceEngagementTimephasedPeriod>>(start?: string, end?: string, scale?: string, contourType?: string): T;
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
* EntityTypesCollections
**********************************************/
export interface EntityTypesCollections {
	AssignmentEntity<T=PS.EntityType>(): T;
	ProjectEntity<T=PS.EntityType>(): T;
	ResourceEntity<T=PS.EntityType>(): T;
	TaskEntity<T=PS.EntityType>(): T;
}

/*********************************************
* EntityTypesQuery
**********************************************/
export interface EntityTypesQuery {
	AssignmentEntity<T=PS.EntityType>(): T;
	ProjectEntity<T=PS.EntityType>(): T;
	ResourceEntity<T=PS.EntityType>(): T;
	TaskEntity<T=PS.EntityType>(): T;
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
* EventHandlerCollections
**********************************************/
export interface EventHandlerCollections {
	Event<T=PS.Event>(): T;
}

/*********************************************
* EventHandlerQuery
**********************************************/
export interface EventHandlerQuery {
	Event<T=PS.Event>(): T;
}

/*********************************************
* EventHandlerMethods
**********************************************/
export interface EventHandlerMethods {
	deleteObject<T=void>(): T;
}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry {
	Value?: number;
}

/*********************************************
* LookupCostMethods
**********************************************/
export interface LookupCostMethods {
	deleteObject<T=void>(): T;
}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry {
	Value?: any;
}

/*********************************************
* LookupDateMethods
**********************************************/
export interface LookupDateMethods {
	deleteObject<T=void>(): T;
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
* LookupDurationMethods
**********************************************/
export interface LookupDurationMethods {
	deleteObject<T=void>(): T;
}

/*********************************************
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry {
	Value?: number;
}

/*********************************************
* LookupNumberMethods
**********************************************/
export interface LookupNumberMethods {
	deleteObject<T=void>(): T;
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
* LookupTextCollections
**********************************************/
export interface LookupTextCollections {
	Parent<T=PS.LookupText>(): T;
}

/*********************************************
* LookupTextQuery
**********************************************/
export interface LookupTextQuery {
	Parent<T=PS.LookupText>(): T;
}

/*********************************************
* LookupTextMethods
**********************************************/
export interface LookupTextMethods {
	deleteObject<T=void>(): T;
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
* PlanAssignmentCollections
**********************************************/
export interface PlanAssignmentCollections {
	CustomFields<T=Array<PS.CustomField>>(): T;
	Intervals<T=Array<PS.PlanAssignmentInterval>>(): T;
	Resource<T=PS.EnterpriseResource>(): T;
}

/*********************************************
* PlanAssignmentQuery
**********************************************/
export interface PlanAssignmentQuery {
	CustomFields<T=Array<PS.CustomField>>(): T;
	Intervals<T=Array<PS.PlanAssignmentInterval>>(): T;
	Resource<T=PS.EnterpriseResource>(): T;
}

/*********************************************
* PlanAssignmentMethods
**********************************************/
export interface PlanAssignmentMethods {
	deleteObject<T=void>(): T;
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
* ProjectServerCollections
**********************************************/
export interface ProjectServerCollections {
	Calendars<T=Array<PS.Calendar>>(): T;
	CustomFields<T=Array<PS.CustomField>>(): T;
	EnterpriseProjectTypes<T=Array<PS.EnterpriseProjectType>>(): T;
	EnterpriseResources<T=Array<PS.EnterpriseResource>>(): T;
	EntityTypes<T=PS.EntityTypes>(): T;
	EventHandlers<T=Array<PS.EventHandler>>(): T;
	Events<T=Array<PS.Event>>(): T;
	LookupTables<T=Array<PS.LookupTable>>(): T;
	Phases<T=Array<PS.Phase>>(): T;
	ProjectDetailPages<T=Array<PS.ProjectDetailPage>>(): T;
	Projects<T=Array<PS.PublishedProject>>(): T;
	ProjectWorkflowInstances<T=Array<PS.ProjectWorkflowInstance>>(): T;
	Settings<T=PS.Settings>(): T;
	Stages<T=Array<PS.Stage>>(): T;
	TimeSheetPeriods<T=Array<PS.TimeSheetPeriod>>(): T;
	UserPermissions<T=Array<PS.UserPermission>>(): T;
	WorkflowActivities<T=PS.WorkflowActivities>(): T;
	WorkflowDesigner<T=PS.WorkflowDesigner>(): T;
}

/*********************************************
* ProjectServerQuery
**********************************************/
export interface ProjectServerQuery {
	Calendars<T=Array<PS.Calendar>>(): T;
	CustomFields<T=Array<PS.CustomField>>(): T;
	EnterpriseProjectTypes<T=Array<PS.EnterpriseProjectType>>(): T;
	EnterpriseResources<T=Array<PS.EnterpriseResource>>(): T;
	EntityTypes<T=PS.EntityTypes>(): T;
	EventHandlers<T=Array<PS.EventHandler>>(): T;
	Events<T=Array<PS.Event>>(): T;
	LookupTables<T=Array<PS.LookupTable>>(): T;
	Phases<T=Array<PS.Phase>>(): T;
	ProjectDetailPages<T=Array<PS.ProjectDetailPage>>(): T;
	Projects<T=Array<PS.PublishedProject>>(): T;
	ProjectWorkflowInstances<T=Array<PS.ProjectWorkflowInstance>>(): T;
	Settings<T=PS.Settings>(): T;
	Stages<T=Array<PS.Stage>>(): T;
	TimeSheetPeriods<T=Array<PS.TimeSheetPeriod>>(): T;
	UserPermissions<T=Array<PS.UserPermission>>(): T;
	WorkflowActivities<T=PS.WorkflowActivities>(): T;
	WorkflowDesigner<T=PS.WorkflowDesigner>(): T;
}

/*********************************************
* ProjectServerMethods
**********************************************/
export interface ProjectServerMethods {
	getDeletedPublishedAssignments<T=Array<PS.DeletedPublishedAssignment>>(deletedDate?: any): T;
	stopDelegation<T=void>(): T;
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
* TimeSheetPeriodCollections
**********************************************/
export interface TimeSheetPeriodCollections {
	TimeSheet<T=PS.TimeSheet>(): T;
}

/*********************************************
* TimeSheetPeriodQuery
**********************************************/
export interface TimeSheetPeriodQuery {
	TimeSheet<T=PS.TimeSheet>(): T;
}

/*********************************************
* TimeSheetPeriodMethods
**********************************************/
export interface TimeSheetPeriodMethods {
	createTimeSheet<T=PS.TimeSheet>(): T;
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
* TimeSheetCollections
**********************************************/
export interface TimeSheetCollections {
	Creator<T=SP.User>(): T;
	Lines<T=Array<PS.TimeSheetLine>>(): T;
	Manager<T=SP.User>(): T;
	Period<T=PS.TimeSheetPeriod>(): T;
}

/*********************************************
* TimeSheetQuery
**********************************************/
export interface TimeSheetQuery {
	Creator<T=SP.User>(): T;
	Lines<T=Array<PS.TimeSheetLine>>(): T;
	Manager<T=SP.User>(): T;
	Period<T=PS.TimeSheetPeriod>(): T;
}

/*********************************************
* TimeSheetMethods
**********************************************/
export interface TimeSheetMethods {
	deleteObject<T=void>(): T;
	recall<T=void>(): T;
	submit<T=void>(comment?: string): T;
	update<T=void>(): T;
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
* TimeSheetLineCollections
**********************************************/
export interface TimeSheetLineCollections {
	Assignment<T=PS.PublishedAssignment>(): T;
	TimeSheet<T=PS.TimeSheet>(): T;
	Work<T=Array<PS.TimeSheetWork>>(): T;
}

/*********************************************
* TimeSheetLineQuery
**********************************************/
export interface TimeSheetLineQuery {
	Assignment<T=PS.PublishedAssignment>(): T;
	TimeSheet<T=PS.TimeSheet>(): T;
	Work<T=Array<PS.TimeSheetWork>>(): T;
}

/*********************************************
* TimeSheetLineMethods
**********************************************/
export interface TimeSheetLineMethods {
	deleteObject<T=void>(): T;
	submit<T=void>(comment?: string): T;
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
* TimeSheetWorkMethods
**********************************************/
export interface TimeSheetWorkMethods {
	deleteObject<T=void>(): T;
}

/*********************************************
* WorkflowActivities
**********************************************/
export interface WorkflowActivities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowActivitiesMethods
**********************************************/
export interface WorkflowActivitiesMethods {
	checkInWithJobId<T=void>(projId?: any, jobId?: any, force?: boolean): T;
	createProjectFromListItem<T=any>(webId?: any, listId?: any, itemId?: number, eptId?: any): T;
	enterProjectStage<T=void>(projectId?: any, stageId?: any): T;
	leaveProjectStage<T=void>(projectId?: any): T;
	publishSummaryWithJobId<T=void>(projId?: any, jobId?: any): T;
	publishWithJobId<T=void>(projectId?: any, jobId?: any): T;
	readBooleanProperty<T=boolean>(projectId?: any, propertyId?: string): T;
	readCurrencyProperty<T=number>(projectId?: any, propertyId?: string): T;
	readDateTimeProperty<T=any>(projectId?: any, propertyId?: string): T;
	readGuidProperty<T=any>(projectId?: any, propertyId?: string): T;
	readIntegerProperty<T=number>(projectId?: any, propertyId?: string): T;
	readNumberProperty<T=number>(projectId?: any, propertyId?: string): T;
	readProjectProperty<T=string>(projectId?: any, propertyId?: string): T;
	readTextProperty<T=string>(projectId?: any, propertyId?: string): T;
	readyToLeaveProjectStage<T=number>(projectId?: any): T;
	updateBooleanProperty<T=void>(projectId?: any, propertyId?: string, value?: boolean): T;
	updateCurrencyProperty<T=void>(projectId?: any, propertyId?: string, value?: number): T;
	updateDateTimeProperty<T=void>(projectId?: any, propertyId?: string, value?: any): T;
	updateGuidProperty<T=void>(projectId?: any, propertyId?: string, value?: any): T;
	updateIdeaListItemStatus<T=void>(projectId?: any, status?: string): T;
	updateIntegerProperty<T=void>(projectId?: any, propertyId?: string, value?: number): T;
	updateNumberProperty<T=void>(projectId?: any, propertyId?: string, value?: number): T;
	updateProjectStageStatus<T=void>(projectId?: any, stageId?: any, statusInformation?: string, stageStatusValue?: number, append?: boolean): T;
	updateTextProperty<T=void>(projectId?: any, propertyId?: string, value?: string): T;
}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerCollections
**********************************************/
export interface WorkflowDesignerCollections {
	Fields<T=Array<PS.WorkflowDesignerField>>(): T;
}

/*********************************************
* WorkflowDesignerQuery
**********************************************/
export interface WorkflowDesignerQuery {
	Fields<T=Array<PS.WorkflowDesignerField>>(): T;
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
* WorkflowDesignerFieldCollections
**********************************************/
export interface WorkflowDesignerFieldCollections {
	LookupEntries<T=Array<PS.LookupEntry>>(): T;
}

/*********************************************
* WorkflowDesignerFieldQuery
**********************************************/
export interface WorkflowDesignerFieldQuery {
	LookupEntries<T=Array<PS.LookupEntry>>(): T;
}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException {

}

/*********************************************
* ResourceCalendarExceptionMethods
**********************************************/
export interface ResourceCalendarExceptionMethods {
	deleteObject<T=void>(): T;
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
* ResourcePlanCollections
**********************************************/
export interface ResourcePlanCollections {
	Assignments<T=Array<PS.PlanAssignment>>(): T;
}

/*********************************************
* ResourcePlanQuery
**********************************************/
export interface ResourcePlanQuery {
	Assignments<T=Array<PS.PlanAssignment>>(): T;
}

/*********************************************
* ResourcePlanMethods
**********************************************/
export interface ResourcePlanMethods {
	deleteObject<T=PS.QueueJob>(): T;
	forceCheckIn<T=PS.QueueJob>(): T;
	publish<T=PS.QueueJob>(): T;
	update<T=PS.QueueJob>(): T;
}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus {
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
}

/*********************************************
* ServiceStatusMethods
**********************************************/
export interface ServiceStatusMethods {
	stopDelegation<T=void>(): T;
}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase {
	End?: any;
	Start?: any;
}

/*********************************************
* TimePhaseCollections
**********************************************/
export interface TimePhaseCollections {
	Assignments<T=Array<PS.StatusAssignment>>(): T;
}

/*********************************************
* TimePhaseQuery
**********************************************/
export interface TimePhaseQuery {
	Assignments<T=Array<PS.StatusAssignment>>(): T;
}
