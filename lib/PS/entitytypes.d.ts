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
	CustomFields?: () => PS.PS_Assignment_CustomFields_PS_CustomField_CustomFieldsPartner;
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
* CustomField
**********************************************/
export interface CustomField {
	EntityType?: () => PS.PS_CustomField_EntityType_PS_EntityType_EntityTypePartner;
	LookupEntries?: () => PS.PS_CustomField_LookupEntries_PS_LookupEntry_LookupEntriesPartner;
	LookupTable?: () => PS.PS_CustomField_LookupTable_PS_LookupTable_LookupTablePartner;
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
	Entries?: () => PS.PS_LookupTable_Entries_PS_LookupEntry_EntriesPartner;
	AppAlternateId?: any;
	FieldType?: number;
	Id?: any;
	Masks?: Array<PS.LookupMask>;
	Name?: string;
	SortOrder?: number;
}

/*********************************************
* CalendarException
**********************************************/
export interface CalendarException {
	Calendar?: () => PS.PS_CalendarException_Calendar_PS_Calendar_CalendarPartner;
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
* Calendar
**********************************************/
export interface Calendar {
	BaseCalendarExceptions?: () => PS.PS_Calendar_BaseCalendarExceptions_PS_CalendarException_BaseCalendarExceptionsPartner;
	Created?: any;
	Id?: any;
	IsStandardCalendar?: boolean;
	Modified?: any;
	Name?: string;
	OriginalId?: any;
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
	Owner?: () => SP.PS_DraftAssignment_Owner_SP_User_OwnerPartner;
	Parent?: () => PS.PS_DraftAssignment_Parent_PS_DraftAssignment_ParentPartner;
	Resource?: () => PS.PS_DraftAssignment_Resource_PS_DraftProjectResource_ResourcePartner;
	Task?: () => PS.PS_DraftAssignment_Task_PS_DraftTask_TaskPartner;
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
* ProjectResource
**********************************************/
export interface ProjectResource {
	CustomFields?: () => PS.PS_ProjectResource_CustomFields_PS_CustomField_CustomFieldsPartner;
	EnterpriseResource?: () => PS.PS_ProjectResource_EnterpriseResource_PS_EnterpriseResource_EnterpriseResourcePartner;
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
* EnterpriseResource
**********************************************/
export interface EnterpriseResource {
	Assignments?: () => PS.PS_EnterpriseResource_Assignments_PS_StatusAssignment_AssignmentsPartner;
	BaseCalendar?: () => PS.PS_EnterpriseResource_BaseCalendar_PS_Calendar_BaseCalendarPartner;
	CostRateTables?: () => PS.PS_EnterpriseResource_CostRateTables_PS_EnterpriseResourceCostRateTable_CostRateTablesPartner;
	CustomFields?: () => PS.PS_EnterpriseResource_CustomFields_PS_CustomField_CustomFieldsPartner;
	DefaultAssignmentOwner?: () => SP.PS_EnterpriseResource_DefaultAssignmentOwner_SP_User_DefaultAssignmentOwnerPartner;
	Engagements?: () => PS.PS_EnterpriseResource_Engagements_PS_ResourceEngagement_EngagementsPartner;
	UserPermissions?: () => PS.PS_EnterpriseResource_UserPermissions_PS_UserPermission_UserPermissionsPartner;
	ResourceCalendarExceptions?: () => PS.PS_EnterpriseResource_ResourceCalendarExceptions_PS_CalendarException_ResourceCalendarExceptionsPartner;
	Self?: () => PS.PS_EnterpriseResource_Self_PS_EnterpriseResource_SelfPartner;
	TimesheetManager?: () => SP.PS_EnterpriseResource_TimesheetManager_SP_User_TimesheetManagerPartner;
	User?: () => SP.PS_EnterpriseResource_User_SP_User_UserPartner;
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
* StatusAssignment
**********************************************/
export interface StatusAssignment {
	CustomFields?: () => PS.PS_StatusAssignment_CustomFields_PS_CustomField_CustomFieldsPartner;
	History?: () => PS.PS_StatusAssignment_History_PS_StatusAssignmentHistoryLine_HistoryPartner;
	Project?: () => PS.PS_StatusAssignment_Project_PS_PublishedProject_ProjectPartner;
	Resource?: () => PS.PS_StatusAssignment_Resource_PS_EnterpriseResource_ResourcePartner;
	Task?: () => PS.PS_StatusAssignment_Task_PS_StatusTask_TaskPartner;
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
* StatusAssignmentHistoryLine
**********************************************/
export interface StatusAssignmentHistoryLine {
	Author?: () => SP.PS_StatusAssignmentHistoryLine_Author_SP_User_AuthorPartner;
	Comment?: string;
	Decision?: number;
	Id?: any;
	Submitted?: any;
	UpdateType?: number;
}

/*********************************************
* Project
**********************************************/
export interface Project {
	CheckedOutBy?: () => SP.PS_Project_CheckedOutBy_SP_User_CheckedOutByPartner;
	CustomFields?: () => PS.PS_Project_CustomFields_PS_CustomField_CustomFieldsPartner;
	Engagements?: () => PS.PS_Project_Engagements_PS_ProjectEngagement_EngagementsPartner;
	EnterpriseProjectType?: () => PS.PS_Project_EnterpriseProjectType_PS_EnterpriseProjectType_EnterpriseProjectTypePartner;
	UserPermissions?: () => PS.PS_Project_UserPermissions_PS_UserPermission_UserPermissionsPartner;
	Phase?: () => PS.PS_Project_Phase_PS_Phase_PhasePartner;
	ProjectSummaryTask?: () => PS.PS_Project_ProjectSummaryTask_PS_ProjectSummaryTask_ProjectSummaryTaskPartner;
	QueueJobs?: () => PS.PS_Project_QueueJobs_PS_QueueJob_QueueJobsPartner;
	Stage?: () => PS.PS_Project_Stage_PS_Stage_StagePartner;
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
	ScheduledFromStart?: boolean;
	SplitInProgress?: boolean;
	SpreadActualCostsToStatus?: boolean;
	SpreadPercentCompleteToStatus?: boolean;
	SummaryTaskId?: any;
	TaskListId?: any;
	WebId?: any;
}

/*********************************************
* Engagement
**********************************************/
export interface Engagement {
	Comments?: () => PS.PS_Engagement_Comments_PS_EngagementComment_CommentsPartner;
	ModifiedBy?: () => SP.PS_Engagement_ModifiedBy_SP_User_ModifiedByPartner;
	Project?: () => PS.PS_Engagement_Project_PS_Project_ProjectPartner;
	Resource?: () => PS.PS_Engagement_Resource_PS_EnterpriseResource_ResourcePartner;
	ReviewedBy?: () => SP.PS_Engagement_ReviewedBy_SP_User_ReviewedByPartner;
	SubmittedBy?: () => SP.PS_Engagement_SubmittedBy_SP_User_SubmittedByPartner;
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
* EngagementComment
**********************************************/
export interface EngagementComment {
	Author?: () => SP.PS_EngagementComment_Author_SP_User_AuthorPartner;
	Created?: any;
	Id?: any;
	Message?: string;
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
	ProjectDetailPages?: () => PS.PS_EnterpriseProjectType_ProjectDetailPages_PS_ProjectDetailPage_ProjectDetailPagesPartner;
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
* ProjectDetailPage
**********************************************/
export interface ProjectDetailPage {
	Item?: () => SP.PS_ProjectDetailPage_Item_SP_ListItem_ItemPartner;
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
* Phase
**********************************************/
export interface Phase {
	Stages?: () => PS.PS_Phase_Stages_PS_Stage_StagesPartner;
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* Stage
**********************************************/
export interface Stage {
	CustomFields?: () => PS.PS_Stage_CustomFields_PS_StageCustomField_CustomFieldsPartner;
	Phase?: () => PS.PS_Stage_Phase_PS_Phase_PhasePartner;
	ProjectDetailPages?: () => PS.PS_Stage_ProjectDetailPages_PS_StageDetailPage_ProjectDetailPagesPartner;
	WorkflowStatusPage?: () => PS.PS_Stage_WorkflowStatusPage_PS_ProjectDetailPage_WorkflowStatusPagePartner;
	Behavior?: number;
	CheckInRequired?: boolean;
	Description?: string;
	Id?: any;
	Name?: string;
	SubmitDescription?: string;
}

/*********************************************
* StageCustomField
**********************************************/
export interface StageCustomField {
	Stage?: () => PS.PS_StageCustomField_Stage_PS_Stage_StagePartner;
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageDetailPage
**********************************************/
export interface StageDetailPage {
	Page?: () => PS.PS_StageDetailPage_Page_PS_ProjectDetailPage_PagePartner;
	Stage?: () => PS.PS_StageDetailPage_Stage_PS_Stage_StagePartner;
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* Task
**********************************************/
export interface Task {
	CustomFields?: () => PS.PS_Task_CustomFields_PS_CustomField_CustomFieldsPartner;
	SubProject?: () => PS.PS_Task_SubProject_PS_PublishedProject_SubProjectPartner;
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
* PublishedProject
**********************************************/
export interface PublishedProject extends PS.Project {
	Assignments?: () => PS.PS_PublishedProject_Assignments_PS_PublishedAssignment_AssignmentsPartner;
	Calendar?: () => PS.PS_PublishedProject_Calendar_PS_Calendar_CalendarPartner;
	Draft?: () => PS.PS_PublishedProject_Draft_PS_DraftProject_DraftPartner;
	EntityLinks?: () => PS.PS_PublishedProject_EntityLinks_PS_EntityLink_EntityLinksPartner;
	IncludeCustomFields?: () => PS.PS_PublishedProject_IncludeCustomFields_PS_PublishedProject_IncludeCustomFieldsPartner;
	Owner?: () => SP.PS_PublishedProject_Owner_SP_User_OwnerPartner;
	ProjectResources?: () => PS.PS_PublishedProject_ProjectResources_PS_PublishedProjectResource_ProjectResourcesPartner;
	ProjectWorkflowInstance?: () => PS.PS_PublishedProject_ProjectWorkflowInstance_PS_ProjectWorkflowInstance_ProjectWorkflowInstancePartner;
	TaskLinks?: () => PS.PS_PublishedProject_TaskLinks_PS_PublishedTaskLink_TaskLinksPartner;
	Tasks?: () => PS.PS_PublishedProject_Tasks_PS_PublishedTask_TasksPartner;
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
* PublishedAssignment
**********************************************/
export interface PublishedAssignment extends PS.Assignment {
	Owner?: () => SP.PS_PublishedAssignment_Owner_SP_User_OwnerPartner;
	Parent?: () => PS.PS_PublishedAssignment_Parent_PS_PublishedAssignment_ParentPartner;
	Resource?: () => PS.PS_PublishedAssignment_Resource_PS_PublishedProjectResource_ResourcePartner;
	Task?: () => PS.PS_PublishedAssignment_Task_PS_PublishedTask_TaskPartner;
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
* PublishedProjectResource
**********************************************/
export interface PublishedProjectResource extends PS.ProjectResource {
	Assignments?: () => PS.PS_PublishedProjectResource_Assignments_PS_PublishedAssignment_AssignmentsPartner;
	DefaultAssignmentOwner?: () => SP.PS_PublishedProjectResource_DefaultAssignmentOwner_SP_User_DefaultAssignmentOwnerPartner;
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
* PublishedTask
**********************************************/
export interface PublishedTask extends PS.Task {
	Assignments?: () => PS.PS_PublishedTask_Assignments_PS_PublishedAssignment_AssignmentsPartner;
	Calendar?: () => PS.PS_PublishedTask_Calendar_PS_Calendar_CalendarPartner;
	EntityLinks?: () => PS.PS_PublishedTask_EntityLinks_PS_EntityLink_EntityLinksPartner;
	Parent?: () => PS.PS_PublishedTask_Parent_PS_PublishedTask_ParentPartner;
	Predecessors?: () => PS.PS_PublishedTask_Predecessors_PS_PublishedTaskLink_PredecessorsPartner;
	StatusManager?: () => SP.PS_PublishedTask_StatusManager_SP_User_StatusManagerPartner;
	Successors?: () => PS.PS_PublishedTask_Successors_PS_PublishedTaskLink_SuccessorsPartner;
	TaskPlanLink?: () => PS.PS_PublishedTask_TaskPlanLink_PS_TaskPlanLink_TaskPlanLinkPartner;
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
	End?: () => PS.PS_PublishedTaskLink_End_PS_PublishedTask_EndPartner;
	Start?: () => PS.PS_PublishedTaskLink_Start_PS_PublishedTask_StartPartner;
	DependencyType?: number;
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
	Assignments?: () => PS.PS_DraftProject_Assignments_PS_DraftAssignment_AssignmentsPartner;
	Calendar?: () => PS.PS_DraftProject_Calendar_PS_Calendar_CalendarPartner;
	IncludeCustomFields?: () => PS.PS_DraftProject_IncludeCustomFields_PS_DraftProject_IncludeCustomFieldsPartner;
	Owner?: () => SP.PS_DraftProject_Owner_SP_User_OwnerPartner;
	ProjectResources?: () => PS.PS_DraftProject_ProjectResources_PS_DraftProjectResource_ProjectResourcesPartner;
	TaskLinks?: () => PS.PS_DraftProject_TaskLinks_PS_DraftTaskLink_TaskLinksPartner;
	Tasks?: () => PS.PS_DraftProject_Tasks_PS_DraftTask_TasksPartner;
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
* DraftProjectResource
**********************************************/
export interface DraftProjectResource extends PS.ProjectResource {
	Assignments?: () => PS.PS_DraftProjectResource_Assignments_PS_DraftAssignment_AssignmentsPartner;
	DefaultAssignmentOwner?: () => SP.PS_DraftProjectResource_DefaultAssignmentOwner_SP_User_DefaultAssignmentOwnerPartner;
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
* DraftTaskLink
**********************************************/
export interface DraftTaskLink extends PS.TaskLink {
	End?: () => PS.PS_DraftTaskLink_End_PS_DraftTask_EndPartner;
	Start?: () => PS.PS_DraftTaskLink_Start_PS_DraftTask_StartPartner;
	DependencyType?: number;
	EndId?: any;
	StartId?: any;
}

/*********************************************
* DraftTask
**********************************************/
export interface DraftTask extends PS.Task {
	Assignments?: () => PS.PS_DraftTask_Assignments_PS_DraftAssignment_AssignmentsPartner;
	Calendar?: () => PS.PS_DraftTask_Calendar_PS_Calendar_CalendarPartner;
	Parent?: () => PS.PS_DraftTask_Parent_PS_DraftTask_ParentPartner;
	Predecessors?: () => PS.PS_DraftTask_Predecessors_PS_DraftTaskLink_PredecessorsPartner;
	StatusManager?: () => SP.PS_DraftTask_StatusManager_SP_User_StatusManagerPartner;
	Successors?: () => PS.PS_DraftTask_Successors_PS_DraftTaskLink_SuccessorsPartner;
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
* ProjectWorkflowInstance
**********************************************/
export interface ProjectWorkflowInstance {
	Project?: () => PS.PS_ProjectWorkflowInstance_Project_PS_Project_ProjectPartner;
	WorkflowInstance?: () => SP.WorkflowServices.PS_ProjectWorkflowInstance_WorkflowInstance_SP_WorkflowServices_WorkflowInstance_WorkflowInstancePartner;
	WorkflowInstanceOwner?: () => SP.PS_ProjectWorkflowInstance_WorkflowInstanceOwner_SP_User_WorkflowInstanceOwnerPartner;
	CreatedDate?: any;
	Id?: any;
	LastSubmittedDate?: any;
	WorkflowError?: string;
	WorkflowErrorResponseCode?: number;
	WorkflowState?: number;
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
	Project?: () => PS.PS_QueueJob_Project_PS_Project_ProjectPartner;
	Submitter?: () => SP.PS_QueueJob_Submitter_SP_User_SubmitterPartner;
	Id?: any;
	JobState?: number;
	MessageType?: number;
	PercentComplete?: number;
	WaitMilliseconds?: number;
	WaitTime?: any;
}

/*********************************************
* StatusTask
**********************************************/
export interface StatusTask {
	CustomFields?: () => PS.PS_StatusTask_CustomFields_PS_CustomField_CustomFieldsPartner;
	StatusManager?: () => SP.PS_StatusTask_StatusManager_SP_User_StatusManagerPartner;
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
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable {
	CostRates?: () => PS.PS_EnterpriseResourceCostRateTable_CostRates_PS_EnterpriseResourceCostRate_CostRatesPartner;
	Name?: number;
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
	AssignmentEntity?: () => PS.PS_EntityTypes_AssignmentEntity_PS_EntityType_AssignmentEntityPartner;
	ProjectEntity?: () => PS.PS_EntityTypes_ProjectEntity_PS_EntityType_ProjectEntityPartner;
	ResourceEntity?: () => PS.PS_EntityTypes_ResourceEntity_PS_EntityType_ResourceEntityPartner;
	TaskEntity?: () => PS.PS_EntityTypes_TaskEntity_PS_EntityType_TaskEntityPartner;
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
* EventHandler
**********************************************/
export interface EventHandler {
	Event?: () => PS.PS_EventHandler_Event_PS_Event_EventPartner;
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
	Parent?: () => PS.PS_LookupText_Parent_PS_LookupText_ParentPartner;
	HasChildren?: boolean;
	Mask?: PS.LookupMask;
	Value?: string;
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
	CustomFields?: () => PS.PS_PlanAssignment_CustomFields_PS_CustomField_CustomFieldsPartner;
	Intervals?: () => PS.PS_PlanAssignment_Intervals_PS_PlanAssignmentInterval_IntervalsPartner;
	Resource?: () => PS.PS_PlanAssignment_Resource_PS_EnterpriseResource_ResourcePartner;
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
	Calendars?: () => PS.PS_ProjectServer_Calendars_PS_Calendar_CalendarsPartner;
	CustomFields?: () => PS.PS_ProjectServer_CustomFields_PS_CustomField_CustomFieldsPartner;
	EnterpriseProjectTypes?: () => PS.PS_ProjectServer_EnterpriseProjectTypes_PS_EnterpriseProjectType_EnterpriseProjectTypesPartner;
	EnterpriseResources?: () => PS.PS_ProjectServer_EnterpriseResources_PS_EnterpriseResource_EnterpriseResourcesPartner;
	EntityTypes?: () => PS.PS_ProjectServer_EntityTypes_PS_EntityTypes_EntityTypesPartner;
	EventHandlers?: () => PS.PS_ProjectServer_EventHandlers_PS_EventHandler_EventHandlersPartner;
	Events?: () => PS.PS_ProjectServer_Events_PS_Event_EventsPartner;
	LookupTables?: () => PS.PS_ProjectServer_LookupTables_PS_LookupTable_LookupTablesPartner;
	Phases?: () => PS.PS_ProjectServer_Phases_PS_Phase_PhasesPartner;
	ProjectDetailPages?: () => PS.PS_ProjectServer_ProjectDetailPages_PS_ProjectDetailPage_ProjectDetailPagesPartner;
	Projects?: () => PS.PS_ProjectServer_Projects_PS_PublishedProject_ProjectsPartner;
	ProjectWorkflowInstances?: () => PS.PS_ProjectServer_ProjectWorkflowInstances_PS_ProjectWorkflowInstance_ProjectWorkflowInstancesPartner;
	Settings?: () => PS.PS_ProjectServer_Settings_PS_Settings_SettingsPartner;
	Stages?: () => PS.PS_ProjectServer_Stages_PS_Stage_StagesPartner;
	TimeSheetPeriods?: () => PS.PS_ProjectServer_TimeSheetPeriods_PS_TimeSheetPeriod_TimeSheetPeriodsPartner;
	UserPermissions?: () => PS.PS_ProjectServer_UserPermissions_PS_UserPermission_UserPermissionsPartner;
	WorkflowActivities?: () => PS.PS_ProjectServer_WorkflowActivities_PS_WorkflowActivities_WorkflowActivitiesPartner;
	WorkflowDesigner?: () => PS.PS_ProjectServer_WorkflowDesigner_PS_WorkflowDesigner_WorkflowDesignerPartner;
	EngagementsTimephasedPageSize?: number;
	EnterpriseResourcesPageSize?: number;
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
	ProjectsPageSize?: number;
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
	TimeSheet?: () => PS.PS_TimeSheetPeriod_TimeSheet_PS_TimeSheet_TimeSheetPartner;
	End?: any;
	Id?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* TimeSheet
**********************************************/
export interface TimeSheet {
	Creator?: () => SP.PS_TimeSheet_Creator_SP_User_CreatorPartner;
	Lines?: () => PS.PS_TimeSheet_Lines_PS_TimeSheetLine_LinesPartner;
	Manager?: () => SP.PS_TimeSheet_Manager_SP_User_ManagerPartner;
	Period?: () => PS.PS_TimeSheet_Period_PS_TimeSheetPeriod_PeriodPartner;
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
* TimeSheetLine
**********************************************/
export interface TimeSheetLine {
	Assignment?: () => PS.PS_TimeSheetLine_Assignment_PS_PublishedAssignment_AssignmentPartner;
	TimeSheet?: () => PS.PS_TimeSheetLine_TimeSheet_PS_TimeSheet_TimeSheetPartner;
	Work?: () => PS.PS_TimeSheetLine_Work_PS_TimeSheetWork_WorkPartner;
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
	Fields?: () => PS.PS_WorkflowDesigner_Fields_PS_WorkflowDesignerField_FieldsPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerField
**********************************************/
export interface WorkflowDesignerField {
	LookupEntries?: () => PS.PS_WorkflowDesignerField_LookupEntries_PS_LookupEntry_LookupEntriesPartner;
	DisplayName?: string;
	Id?: string;
	IsLookupField?: boolean;
	IsReadOnly?: boolean;
	SPFieldType?: number;
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
	Assignments?: () => PS.PS_ResourcePlan_Assignments_PS_PlanAssignment_AssignmentsPartner;
	Finish?: any;
	Id?: any;
	Start?: any;
	UtilizationDate?: any;
	UtilizationType?: number;
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
	Assignments?: () => PS.PS_TimePhase_Assignments_PS_StatusAssignment_AssignmentsPartner;
	End?: any;
	Start?: any;
}
