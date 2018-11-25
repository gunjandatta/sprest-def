import { PS } from "../";

/*********************************************
* EngagementSaveConflictException
**********************************************/
export interface EngagementSaveConflictException {

}

/*********************************************
* AssignmentCreationInformation
**********************************************/
export interface AssignmentCreationInformation {
	Finish?: any;
	Id?: any;
	Notes?: string;
	ResourceId?: any;
	Start?: any;
	TaskId?: any;
}

/*********************************************
* CalendarCreationInformation
**********************************************/
export interface CalendarCreationInformation {
	Id?: any;
	Name?: string;
	OriginalId?: any;
}

/*********************************************
* CalendarExceptionCreationInformation
**********************************************/
export interface CalendarExceptionCreationInformation {
	Finish?: any;
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
* CostRateCreationInformation
**********************************************/
export interface CostRateCreationInformation {
	CostPerUse?: number;
	EffectiveDate?: any;
	OvertimeRate?: number;
	StandardRate?: number;
}

/*********************************************
* CustomFieldCreationInformation
**********************************************/
export interface CustomFieldCreationInformation {
	Description?: string;
	EntityTypeId?: any;
	FieldType?: number;
	Formula?: string;
	GraphicalIndicatorNonSummary?: string;
	GraphicalIndicatorProjectSummary?: string;
	GraphicalIndicatorSummary?: string;
	Id?: any;
	IsEditableInVisibility?: boolean;
	IsLeafOnly?: boolean;
	IsMultilineText?: boolean;
	IsRequired?: boolean;
	IsWorkflowControlled?: boolean;
	LookupAllowMultiSelect?: boolean;
	LookupDefaultValue?: any;
	LookupTableId?: any;
	Name?: string;
	ShowToolTip?: boolean;
	UseFieldForMatching?: boolean;
}

/*********************************************
* EngagementCreationInformation
**********************************************/
export interface EngagementCreationInformation {
	Description?: string;
	Finish?: any;
	Id?: any;
	MaxUnits?: number;
	ResourceId?: any;
	Start?: any;
	TimephasedPeriodData?: Array<PS.EngagementTimephasedPeriodCreationInformation>;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* EngagementTimephasedPeriodCreationInformation
**********************************************/
export interface EngagementTimephasedPeriodCreationInformation {
	End?: any;
	MaxUnits?: number;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* EnterpriseProjectTypeCreationInformation
**********************************************/
export interface EnterpriseProjectTypeCreationInformation {
	DepartmentIds?: Array<any>;
	Description?: string;
	Id?: any;
	ImageUrl?: string;
	IsDefault?: boolean;
	IsManaged?: boolean;
	Name?: string;
	Order?: number;
	PermissionSyncEnable?: boolean;
	ProjectDetailPages?: Array<PS.ProjectDetailPageCreationInformation>;
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
* ProjectDetailPageCreationInformation
**********************************************/
export interface ProjectDetailPageCreationInformation {
	Id?: any;
	IsCreate?: boolean;
	Position?: number;
}

/*********************************************
* EnterpriseResourceCreationInformation
**********************************************/
export interface EnterpriseResourceCreationInformation {
	HyperlinkName?: string;
	HyperlinkUrl?: string;
	Id?: any;
	IsBudget?: boolean;
	IsGeneric?: boolean;
	IsInactive?: boolean;
	Name?: string;
	ResourceType?: number;
}

/*********************************************
* EntityLinkCreationInformation
**********************************************/
export interface EntityLinkCreationInformation {
	EntityLinkType?: number;
	Id?: any;
	Label?: string;
	Url?: string;
}

/*********************************************
* EventHandlerCreationInformation
**********************************************/
export interface EventHandlerCreationInformation {
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
* LookupEntryCreationInformation
**********************************************/
export interface LookupEntryCreationInformation {
	Description?: string;
	Id?: any;
	ParentId?: any;
	SortIndex?: number;
	Value?: PS.LookupEntryValue;
}

/*********************************************
* LookupEntryValue
**********************************************/
export interface LookupEntryValue {
	DateValue?: any;
	DurationValue?: string;
	NumberValue?: number;
	TextValue?: string;
}

/*********************************************
* LookupMask
**********************************************/
export interface LookupMask {
	Length?: number;
	MaskType?: number;
	Separator?: string;
}

/*********************************************
* LookupTableCreationInformation
**********************************************/
export interface LookupTableCreationInformation {
	Entries?: Array<PS.LookupEntryCreationInformation>;
	Id?: any;
	Masks?: Array<PS.LookupMask>;
	Name?: string;
	SortOrder?: number;
}

/*********************************************
* PhaseCreationInformation
**********************************************/
export interface PhaseCreationInformation {
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* PlanAssignmentCreationInformation
**********************************************/
export interface PlanAssignmentCreationInformation {
	BookingType?: number;
	Id?: any;
	Intervals?: Array<PS.PlanAssignmentIntervalCreationInformation>;
	ResourceId?: any;
}

/*********************************************
* PlanAssignmentIntervalCreationInformation
**********************************************/
export interface PlanAssignmentIntervalCreationInformation {
	Duration?: string;
	Interval?: any;
}

/*********************************************
* ProjectCreationInformation
**********************************************/
export interface ProjectCreationInformation {
	Description?: string;
	EnterpriseProjectTypeId?: any;
	Id?: any;
	ListId?: any;
	Name?: string;
	Start?: any;
	WebId?: any;
}

/*********************************************
* ProjectEngagementCreationInformation
**********************************************/
export interface ProjectEngagementCreationInformation extends PS.EngagementCreationInformation {

}

/*********************************************
* ProjectResourceCreationInformation
**********************************************/
export interface ProjectResourceCreationInformation {
	Account?: string;
	Email?: string;
	Id?: any;
	Name?: string;
	Notes?: string;
}

/*********************************************
* StageCreationInformation
**********************************************/
export interface StageCreationInformation {
	Behavior?: number;
	CheckInRequired?: boolean;
	CustomFields?: Array<PS.StageCustomFieldCreationInformation>;
	Description?: string;
	Id?: any;
	Name?: string;
	PhaseId?: any;
	ProjectDetailPages?: Array<PS.StageDetailPageCreationInformation>;
	SubmitDescription?: string;
	WorkflowStatusPageId?: any;
}

/*********************************************
* StageCustomFieldCreationInformation
**********************************************/
export interface StageCustomFieldCreationInformation {
	Id?: any;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageDetailPageCreationInformation
**********************************************/
export interface StageDetailPageCreationInformation {
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* StatusAssignmentCreationInformation
**********************************************/
export interface StatusAssignmentCreationInformation {
	Comment?: string;
	Id?: any;
	ProjectId?: any;
	Task?: PS.StatusTaskCreationInformation;
}

/*********************************************
* StatusTaskCreationInformation
**********************************************/
export interface StatusTaskCreationInformation {
	Finish?: any;
	Id?: any;
	Name?: string;
	ParentId?: any;
	Start?: any;
	Work?: string;
}

/*********************************************
* TaskCreationInformation
**********************************************/
export interface TaskCreationInformation {
	AddAfterId?: any;
	Duration?: string;
	Finish?: any;
	Id?: any;
	IsManual?: boolean;
	Name?: string;
	Notes?: string;
	ParentId?: any;
	Start?: any;
}

/*********************************************
* TaskLinkCreationInformation
**********************************************/
export interface TaskLinkCreationInformation {
	DependencyType?: number;
	EndId?: any;
	Id?: any;
	StartId?: any;
}

/*********************************************
* TaskPlanLinksCreationInformation
**********************************************/
export interface TaskPlanLinksCreationInformation {
	GroupId?: any;
	PlanId?: string;
}

/*********************************************
* TimeSheetLineCreationInformation
**********************************************/
export interface TimeSheetLineCreationInformation {
	AssignmentId?: any;
	Comment?: string;
	Id?: any;
	LineClass?: number;
	ProjectId?: any;
	TaskName?: string;
}

/*********************************************
* TimeSheetWorkCreationInformation
**********************************************/
export interface TimeSheetWorkCreationInformation {
	ActualWork?: string;
	Comment?: string;
	End?: any;
	NonBillableOvertimeWork?: string;
	NonBillableWork?: string;
	OvertimeWork?: string;
	PlannedWork?: string;
	Start?: any;
}
