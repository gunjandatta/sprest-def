import { IBaseExecution } from "../";
import { IBaseCollection } from "../";
import { IBaseQuery } from "../";
import { IBaseResults } from "../";
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
* EntityTypeCollections
**********************************************/
export interface EntityTypeCollections {

}

/*********************************************
* LookupTables
**********************************************/
export interface LookupTables {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LookupTablesCollections
**********************************************/
export interface LookupTablesCollections {

}

/*********************************************
* IAssignment
**********************************************/
export interface IAssignment extends AssignmentCollections,AssignmentMethods,IBaseQuery<IAssignmentQuery> {

}

/*********************************************
* IAssignmentQuery
**********************************************/
export interface IAssignmentQuery extends AssignmentQuery, AssignmentMethods {

}

/*********************************************
* Assignment
**********************************************/
export interface Assignment extends AssignmentProps, AssignmentCollections, AssignmentMethods {

}

/*********************************************
* AssignmentProps
**********************************************/
export interface AssignmentProps {
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
* AssignmentPropMethods
**********************************************/
export interface AssignmentPropMethods {

}

/*********************************************
* AssignmentCollections
**********************************************/
export interface AssignmentCollections extends AssignmentPropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* AssignmentQuery
**********************************************/
export interface AssignmentQuery extends AssignmentProps, AssignmentMethods {
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
export interface ICustomFieldQuery extends CustomFieldQuery, CustomFieldMethods {

}

/*********************************************
* CustomField
**********************************************/
export interface CustomField extends CustomFieldProps, CustomFieldCollections, CustomFieldMethods {

}

/*********************************************
* CustomFieldProps
**********************************************/
export interface CustomFieldProps {
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
* CustomFieldPropMethods
**********************************************/
export interface CustomFieldPropMethods {
	EntityType(): IBaseQuery<PS.EntityType> & PS.EntityTypeCollections;
	LookupTable(): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections & PS.LookupTableMethods;
}

/*********************************************
* CustomFieldCollections
**********************************************/
export interface CustomFieldCollections extends CustomFieldPropMethods {
	LookupEntries(): IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupEntries(id: string | number): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* CustomFieldCollectionMethods
**********************************************/
export interface CustomFieldCollectionMethods {
	add(parameters?: PS.CustomFieldCreationInformation): IBaseExecution<PS.CustomField>;
	getByAppAlternateId(objectId?: string): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections;
	getByGuid(uid?: any): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections;
	getById(objectId?: string): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* CustomFieldQuery
**********************************************/
export interface CustomFieldQuery extends CustomFieldProps, CustomFieldMethods {
	EntityType: PS.EntityType & PS.EntityTypeCollections;
	LookupEntries: IBaseResults<PS.LookupEntry>;
	LookupTable: PS.LookupTable & PS.LookupTableCollections;
}

/*********************************************
* CustomFieldMethods
**********************************************/
export interface CustomFieldMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ILookupEntry
**********************************************/
export interface ILookupEntry extends LookupEntryCollections,LookupEntryMethods,IBaseQuery<ILookupEntryQuery> {

}

/*********************************************
* ILookupEntryQuery
**********************************************/
export interface ILookupEntryQuery extends LookupEntryQuery, LookupEntryMethods {

}

/*********************************************
* LookupEntry
**********************************************/
export interface LookupEntry extends LookupEntryProps, LookupEntryCollections, LookupEntryMethods {

}

/*********************************************
* LookupEntryProps
**********************************************/
export interface LookupEntryProps {
	AppAlternateId?: any;
	Description?: string;
	FullValue?: string;
	Id?: any;
	InternalName?: string;
	SortIndex?: number;
}

/*********************************************
* LookupEntryPropMethods
**********************************************/
export interface LookupEntryPropMethods {

}

/*********************************************
* LookupEntryCollections
**********************************************/
export interface LookupEntryCollections extends LookupEntryPropMethods {

}

/*********************************************
* LookupEntryCollectionMethods
**********************************************/
export interface LookupEntryCollectionMethods {
	add(parameters?: PS.LookupEntryCreationInformation): IBaseExecution<PS.LookupEntry>;
	getByAppAlternateId(objectId?: string): IBaseQuery<PS.LookupEntry>;
	getByGuid(uid?: any): IBaseQuery<PS.LookupEntry>;
	getById(objectId?: string): IBaseQuery<PS.LookupEntry>;
}

/*********************************************
* LookupEntryQuery
**********************************************/
export interface LookupEntryQuery extends LookupEntryProps, LookupEntryMethods {

}

/*********************************************
* LookupEntryMethods
**********************************************/
export interface LookupEntryMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ILookupTable
**********************************************/
export interface ILookupTable extends LookupTableCollections,LookupTableMethods,IBaseQuery<ILookupTableQuery> {

}

/*********************************************
* ILookupTableQuery
**********************************************/
export interface ILookupTableQuery extends LookupTableQuery, LookupTableMethods {

}

/*********************************************
* LookupTable
**********************************************/
export interface LookupTable extends LookupTableProps, LookupTableCollections, LookupTableMethods {

}

/*********************************************
* LookupTableProps
**********************************************/
export interface LookupTableProps {
	AppAlternateId?: any;
	FieldType?: number;
	Id?: any;
	Masks?: Array<PS.LookupMask>;
	Name?: string;
	SortOrder?: number;
}

/*********************************************
* LookupTablePropMethods
**********************************************/
export interface LookupTablePropMethods {

}

/*********************************************
* LookupTableCollections
**********************************************/
export interface LookupTableCollections extends LookupTablePropMethods {
	Entries(): IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	Entries(id: string | number): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* LookupTableCollectionMethods
**********************************************/
export interface LookupTableCollectionMethods {
	add(parameters?: PS.LookupTableCreationInformation): IBaseExecution<PS.LookupTable>;
	getByAppAlternateId(objectId?: string): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections;
	getByGuid(uid?: any): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections;
	getById(objectId?: string): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* LookupTableQuery
**********************************************/
export interface LookupTableQuery extends LookupTableProps, LookupTableMethods {
	Entries: IBaseResults<PS.LookupEntry>;
}

/*********************************************
* LookupTableMethods
**********************************************/
export interface LookupTableMethods {
	addMask(mask?: PS.LookupMask): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
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
export interface ICalendarExceptionQuery extends CalendarExceptionQuery, CalendarExceptionMethods {

}

/*********************************************
* CalendarException
**********************************************/
export interface CalendarException extends CalendarExceptionProps, CalendarExceptionCollections, CalendarExceptionMethods {

}

/*********************************************
* CalendarExceptionProps
**********************************************/
export interface CalendarExceptionProps {
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
* CalendarExceptionPropMethods
**********************************************/
export interface CalendarExceptionPropMethods {
	Calendar(): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
}

/*********************************************
* CalendarExceptionCollections
**********************************************/
export interface CalendarExceptionCollections extends CalendarExceptionPropMethods {

}

/*********************************************
* CalendarExceptionCollectionMethods
**********************************************/
export interface CalendarExceptionCollectionMethods {
	add(parameters?: PS.CalendarExceptionCreationInformation): IBaseExecution<PS.CalendarException>;
	getById(id?: number): IBaseQuery<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollections;
}

/*********************************************
* CalendarExceptionQuery
**********************************************/
export interface CalendarExceptionQuery extends CalendarExceptionProps, CalendarExceptionMethods {
	Calendar: PS.Calendar & PS.CalendarCollections;
}

/*********************************************
* CalendarExceptionMethods
**********************************************/
export interface CalendarExceptionMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ICalendar
**********************************************/
export interface ICalendar extends CalendarCollections,CalendarMethods,IBaseQuery<ICalendarQuery> {

}

/*********************************************
* ICalendarQuery
**********************************************/
export interface ICalendarQuery extends CalendarQuery, CalendarMethods {

}

/*********************************************
* Calendar
**********************************************/
export interface Calendar extends CalendarProps, CalendarCollections, CalendarMethods {

}

/*********************************************
* CalendarProps
**********************************************/
export interface CalendarProps {
	Created?: any;
	Id?: any;
	IsStandardCalendar?: boolean;
	Modified?: any;
	Name?: string;
	OriginalId?: any;
}

/*********************************************
* CalendarPropMethods
**********************************************/
export interface CalendarPropMethods {

}

/*********************************************
* CalendarCollections
**********************************************/
export interface CalendarCollections extends CalendarPropMethods {
	BaseCalendarExceptions(): IBaseCollection<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollectionMethods;
	BaseCalendarExceptions(id: string | number): IBaseQuery<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* CalendarCollectionMethods
**********************************************/
export interface CalendarCollectionMethods {
	add(parameters?: PS.CalendarCreationInformation): IBaseExecution<PS.Calendar>;
	getByGuid(uid?: any): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections;
	getById(objectId?: string): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* CalendarQuery
**********************************************/
export interface CalendarQuery extends CalendarProps, CalendarMethods {
	BaseCalendarExceptions: IBaseResults<PS.CalendarException>;
}

/*********************************************
* CalendarMethods
**********************************************/
export interface CalendarMethods {
	copyTo(name?: string): IBaseExecution<PS.Calendar>;
	delete(): IBaseExecution<any>;
}

/*********************************************
* IBaseCalendarException
**********************************************/
export interface IBaseCalendarException extends BaseCalendarExceptionCollections,BaseCalendarExceptionMethods,IBaseQuery<IBaseCalendarExceptionQuery> {

}

/*********************************************
* IBaseCalendarExceptionQuery
**********************************************/
export interface IBaseCalendarExceptionQuery extends BaseCalendarExceptionQuery, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException, BaseCalendarExceptionProps, BaseCalendarExceptionCollections, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarExceptionProps
**********************************************/
export interface BaseCalendarExceptionProps {

}

/*********************************************
* BaseCalendarExceptionPropMethods
**********************************************/
export interface BaseCalendarExceptionPropMethods {

}

/*********************************************
* BaseCalendarExceptionCollections
**********************************************/
export interface BaseCalendarExceptionCollections extends BaseCalendarExceptionPropMethods {

}

/*********************************************
* BaseCalendarExceptionQuery
**********************************************/
export interface BaseCalendarExceptionQuery extends BaseCalendarExceptionProps, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarExceptionMethods
**********************************************/
export interface BaseCalendarExceptionMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IDraftAssignment
**********************************************/
export interface IDraftAssignment extends DraftAssignmentCollections,DraftAssignmentMethods,IBaseQuery<IDraftAssignmentQuery> {

}

/*********************************************
* IDraftAssignmentQuery
**********************************************/
export interface IDraftAssignmentQuery extends DraftAssignmentQuery, DraftAssignmentMethods {

}

/*********************************************
* DraftAssignment
**********************************************/
export interface DraftAssignment extends PS.Assignment, DraftAssignmentProps, DraftAssignmentCollections, DraftAssignmentMethods {

}

/*********************************************
* DraftAssignmentProps
**********************************************/
export interface DraftAssignmentProps {
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
* DraftAssignmentPropMethods
**********************************************/
export interface DraftAssignmentPropMethods {
	Owner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	Parent(): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
	Resource(): IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollections & PS.DraftProjectResourceMethods;
	Task(): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
}

/*********************************************
* DraftAssignmentCollections
**********************************************/
export interface DraftAssignmentCollections extends DraftAssignmentPropMethods {

}

/*********************************************
* DraftAssignmentCollectionMethods
**********************************************/
export interface DraftAssignmentCollectionMethods {
	add(parameters?: PS.AssignmentCreationInformation): IBaseExecution<PS.DraftAssignment>;
	getByGuid(uid?: any): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections;
	getById(objectId?: string): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections;
}

/*********************************************
* DraftAssignmentQuery
**********************************************/
export interface DraftAssignmentQuery extends DraftAssignmentProps, DraftAssignmentMethods {
	Owner: SP.User & SP.UserCollections;
	Parent: PS.DraftAssignment & PS.DraftAssignmentCollections;
	Resource: PS.DraftProjectResource & PS.DraftProjectResourceCollections;
	Task: PS.DraftTask & PS.DraftTaskCollections;
}

/*********************************************
* DraftAssignmentMethods
**********************************************/
export interface DraftAssignmentMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IProjectResource
**********************************************/
export interface IProjectResource extends ProjectResourceCollections,ProjectResourceMethods,IBaseQuery<IProjectResourceQuery> {

}

/*********************************************
* IProjectResourceQuery
**********************************************/
export interface IProjectResourceQuery extends ProjectResourceQuery, ProjectResourceMethods {

}

/*********************************************
* ProjectResource
**********************************************/
export interface ProjectResource extends ProjectResourceProps, ProjectResourceCollections, ProjectResourceMethods {

}

/*********************************************
* ProjectResourceProps
**********************************************/
export interface ProjectResourceProps {
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
* ProjectResourcePropMethods
**********************************************/
export interface ProjectResourcePropMethods {
	EnterpriseResource(): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
}

/*********************************************
* ProjectResourceCollections
**********************************************/
export interface ProjectResourceCollections extends ProjectResourcePropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* ProjectResourceQuery
**********************************************/
export interface ProjectResourceQuery extends ProjectResourceProps, ProjectResourceMethods {
	CustomFields: IBaseResults<PS.CustomField>;
	EnterpriseResource: PS.EnterpriseResource & PS.EnterpriseResourceCollections;
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
export interface IEnterpriseResourceQuery extends EnterpriseResourceQuery, EnterpriseResourceMethods {

}

/*********************************************
* EnterpriseResource
**********************************************/
export interface EnterpriseResource extends EnterpriseResourceProps, EnterpriseResourceCollections, EnterpriseResourceMethods {

}

/*********************************************
* EnterpriseResourceProps
**********************************************/
export interface EnterpriseResourceProps {
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
* EnterpriseResourcePropMethods
**********************************************/
export interface EnterpriseResourcePropMethods {
	BaseCalendar(): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	DefaultAssignmentOwner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	Self(): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	TimesheetManager(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	User(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* EnterpriseResourceCollections
**********************************************/
export interface EnterpriseResourceCollections extends EnterpriseResourcePropMethods {
	Assignments(): IBaseCollection<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
	CostRateTables(): IBaseCollection<PS.EnterpriseResourceCostRateTable, PS.EnterpriseResourceCostRateTableQuery>;
	CostRateTables(id: string | number): IBaseQuery<PS.EnterpriseResourceCostRateTable, PS.EnterpriseResourceCostRateTableQuery> & PS.EnterpriseResourceCostRateTableCollections;
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Engagements(): IBaseCollection<PS.ResourceEngagement> & PS.ResourceEngagementCollectionMethods;
	Engagements(id: string | number): IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections & PS.ResourceEngagementMethods;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
	ResourceCalendarExceptions(): IBaseCollection<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollectionMethods;
	ResourceCalendarExceptions(id: string | number): IBaseQuery<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* EnterpriseResourceCollectionMethods
**********************************************/
export interface EnterpriseResourceCollectionMethods {
	add(parameters?: PS.EnterpriseResourceCreationInformation): IBaseExecution<PS.EnterpriseResource>;
	getByGuid(uid?: any): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections;
	getById(objectId?: string): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* EnterpriseResourceQuery
**********************************************/
export interface EnterpriseResourceQuery extends EnterpriseResourceProps, EnterpriseResourceMethods {
	Assignments: IBaseResults<PS.StatusAssignment>;
	BaseCalendar: PS.Calendar & PS.CalendarCollections;
	CostRateTables: IBaseResults<PS.EnterpriseResourceCostRateTable>;
	CustomFields: IBaseResults<PS.CustomField>;
	DefaultAssignmentOwner: SP.User & SP.UserCollections;
	Engagements: IBaseResults<PS.ResourceEngagement>;
	UserPermissions: IBaseResults<PS.UserPermission>;
	ResourceCalendarExceptions: IBaseResults<PS.CalendarException>;
	Self: PS.EnterpriseResource & PS.EnterpriseResourceCollections;
	TimesheetManager: SP.User & SP.UserCollections;
	User: SP.User & SP.UserCollections;
}

/*********************************************
* EnterpriseResourceMethods
**********************************************/
export interface EnterpriseResourceMethods {
	delete(): IBaseExecution<any>;
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
export interface IStatusAssignmentQuery extends StatusAssignmentQuery, StatusAssignmentMethods {

}

/*********************************************
* StatusAssignment
**********************************************/
export interface StatusAssignment extends StatusAssignmentProps, StatusAssignmentCollections, StatusAssignmentMethods {

}

/*********************************************
* StatusAssignmentProps
**********************************************/
export interface StatusAssignmentProps {
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
* StatusAssignmentPropMethods
**********************************************/
export interface StatusAssignmentPropMethods {
	Project(): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	Resource(): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	Task(): IBaseQuery<PS.StatusTask, PS.StatusTaskQuery> & PS.StatusTaskCollections;
}

/*********************************************
* StatusAssignmentCollections
**********************************************/
export interface StatusAssignmentCollections extends StatusAssignmentPropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	History(): IBaseCollection<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineQuery> & PS.StatusAssignmentHistoryLineCollectionMethods;
	History(id: string | number): IBaseQuery<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineQuery> & PS.StatusAssignmentHistoryLineCollections;
}

/*********************************************
* StatusAssignmentCollectionMethods
**********************************************/
export interface StatusAssignmentCollectionMethods {
	add(parameters?: PS.StatusAssignmentCreationInformation): IBaseExecution<PS.StatusAssignment>;
	getByGuid(uid?: any): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections;
	getById(objectId?: string): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections;
	getTimePhaseByUrl(start?: string, end?: string): IBaseExecution<PS.TimePhase>;
	submitAllStatusUpdates(comment?: string): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* StatusAssignmentQuery
**********************************************/
export interface StatusAssignmentQuery extends StatusAssignmentProps, StatusAssignmentMethods {
	CustomFields: IBaseResults<PS.CustomField>;
	History: IBaseResults<PS.StatusAssignmentHistoryLine>;
	Project: PS.PublishedProject & PS.PublishedProjectCollections;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections;
	Task: PS.StatusTask & PS.StatusTaskCollections;
}

/*********************************************
* StatusAssignmentMethods
**********************************************/
export interface StatusAssignmentMethods {
	delete(): IBaseExecution<any>;
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
* StatusAssignmentHistoryLineCollections
**********************************************/
export interface StatusAssignmentHistoryLineCollections extends StatusAssignmentHistoryLineCollectionMethods {

}

/*********************************************
* StatusAssignmentHistoryLineQuery
**********************************************/
export interface StatusAssignmentHistoryLineQuery extends StatusAssignmentHistoryLine {
	Author: SP.User & SP.UserCollections;
}

/*********************************************
* StatusAssignmentHistoryLineCollectionMethods
**********************************************/
export interface StatusAssignmentHistoryLineCollectionMethods {
	getById(objectId?: string): IBaseQuery<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineQuery> & PS.StatusAssignmentHistoryLineCollections;
}

/*********************************************
* IProject
**********************************************/
export interface IProject extends ProjectCollections,ProjectMethods,IBaseQuery<IProjectQuery> {

}

/*********************************************
* IProjectQuery
**********************************************/
export interface IProjectQuery extends ProjectQuery, ProjectMethods {

}

/*********************************************
* Project
**********************************************/
export interface Project extends ProjectProps, ProjectCollections, ProjectMethods {

}

/*********************************************
* ProjectProps
**********************************************/
export interface ProjectProps {
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
* ProjectPropMethods
**********************************************/
export interface ProjectPropMethods {
	CheckedOutBy(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	EnterpriseProjectType(): IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	Phase(): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections & PS.PhaseMethods;
	ProjectSummaryTask(): IBaseQuery<PS.ProjectSummaryTask> & PS.ProjectSummaryTaskCollections;
	Stage(): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* ProjectCollections
**********************************************/
export interface ProjectCollections extends ProjectPropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Engagements(): IBaseCollection<PS.ProjectEngagement> & PS.ProjectEngagementCollectionMethods;
	Engagements(id: string | number): IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections & PS.ProjectEngagementMethods;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
	QueueJobs(): IBaseCollection<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollectionMethods;
	QueueJobs(id: string | number): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* ProjectQuery
**********************************************/
export interface ProjectQuery extends ProjectProps, ProjectMethods {
	CheckedOutBy: SP.User & SP.UserCollections;
	CustomFields: IBaseResults<PS.CustomField>;
	Engagements: IBaseResults<PS.ProjectEngagement>;
	EnterpriseProjectType: PS.EnterpriseProjectType & PS.EnterpriseProjectTypeCollections;
	UserPermissions: IBaseResults<PS.UserPermission>;
	Phase: PS.Phase & PS.PhaseCollections;
	ProjectSummaryTask: PS.ProjectSummaryTask & PS.ProjectSummaryTaskCollections;
	QueueJobs: IBaseResults<PS.QueueJob>;
	Stage: PS.Stage & PS.StageCollections;
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
export interface IEngagementQuery extends EngagementQuery, EngagementMethods {

}

/*********************************************
* Engagement
**********************************************/
export interface Engagement extends EngagementProps, EngagementCollections, EngagementMethods {

}

/*********************************************
* EngagementProps
**********************************************/
export interface EngagementProps {
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
* EngagementPropMethods
**********************************************/
export interface EngagementPropMethods {
	ModifiedBy(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	Project(): IBaseQuery<PS.Project, PS.ProjectQuery> & PS.ProjectCollections & PS.ProjectMethods;
	Resource(): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	ReviewedBy(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	SubmittedBy(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* EngagementCollections
**********************************************/
export interface EngagementCollections extends EngagementPropMethods {
	Comments(): IBaseCollection<PS.EngagementComment, PS.EngagementCommentQuery> & PS.EngagementCommentCollectionMethods;
	Comments(id: string | number): IBaseQuery<PS.EngagementComment, PS.EngagementCommentQuery> & PS.EngagementCommentCollections;
}

/*********************************************
* EngagementQuery
**********************************************/
export interface EngagementQuery extends EngagementProps, EngagementMethods {
	Comments: IBaseResults<PS.EngagementComment>;
	ModifiedBy: SP.User & SP.UserCollections;
	Project: PS.Project & PS.ProjectCollections;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections;
	ReviewedBy: SP.User & SP.UserCollections;
	SubmittedBy: SP.User & SP.UserCollections;
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
* EngagementCommentCollections
**********************************************/
export interface EngagementCommentCollections extends EngagementCommentCollectionMethods {

}

/*********************************************
* EngagementCommentQuery
**********************************************/
export interface EngagementCommentQuery extends EngagementComment {
	Author: SP.User & SP.UserCollections;
}

/*********************************************
* EngagementCommentCollectionMethods
**********************************************/
export interface EngagementCommentCollectionMethods {
	add(comment?: string): IBaseExecution<PS.EngagementComment>;
}

/*********************************************
* IProjectEngagement
**********************************************/
export interface IProjectEngagement extends ProjectEngagementCollections,ProjectEngagementMethods,IBaseQuery<IProjectEngagementQuery> {

}

/*********************************************
* IProjectEngagementQuery
**********************************************/
export interface IProjectEngagementQuery extends ProjectEngagementQuery, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagement
**********************************************/
export interface ProjectEngagement extends PS.Engagement, ProjectEngagementProps, ProjectEngagementCollections, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagementProps
**********************************************/
export interface ProjectEngagementProps {
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
* ProjectEngagementPropMethods
**********************************************/
export interface ProjectEngagementPropMethods {

}

/*********************************************
* ProjectEngagementCollections
**********************************************/
export interface ProjectEngagementCollections extends ProjectEngagementPropMethods {

}

/*********************************************
* ProjectEngagementCollectionMethods
**********************************************/
export interface ProjectEngagementCollectionMethods {
	add(parameters?: PS.ProjectEngagementCreationInformation): IBaseExecution<PS.ProjectEngagement>;
	getByGuid(uid?: any): IBaseQuery<PS.ProjectEngagement>;
	getById(objectId?: string): IBaseQuery<PS.ProjectEngagement>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ProjectEngagementQuery
**********************************************/
export interface ProjectEngagementQuery extends ProjectEngagementProps, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagementMethods
**********************************************/
export interface ProjectEngagementMethods {
	delete(): IBaseExecution<any>;
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
export interface IEnterpriseProjectTypeQuery extends EnterpriseProjectTypeQuery, EnterpriseProjectTypeMethods {

}

/*********************************************
* EnterpriseProjectType
**********************************************/
export interface EnterpriseProjectType extends EnterpriseProjectTypeProps, EnterpriseProjectTypeCollections, EnterpriseProjectTypeMethods {

}

/*********************************************
* EnterpriseProjectTypeProps
**********************************************/
export interface EnterpriseProjectTypeProps {
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
* EnterpriseProjectTypePropMethods
**********************************************/
export interface EnterpriseProjectTypePropMethods {

}

/*********************************************
* EnterpriseProjectTypeCollections
**********************************************/
export interface EnterpriseProjectTypeCollections extends EnterpriseProjectTypePropMethods {
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
}

/*********************************************
* EnterpriseProjectTypeCollectionMethods
**********************************************/
export interface EnterpriseProjectTypeCollectionMethods {
	add(parameters?: PS.EnterpriseProjectTypeCreationInformation): IBaseExecution<PS.EnterpriseProjectType>;
	getByGuid(uid?: any): IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollections;
	getById(objectId?: string): IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* EnterpriseProjectTypeQuery
**********************************************/
export interface EnterpriseProjectTypeQuery extends EnterpriseProjectTypeProps, EnterpriseProjectTypeMethods {
	ProjectDetailPages: IBaseResults<PS.ProjectDetailPage>;
}

/*********************************************
* EnterpriseProjectTypeMethods
**********************************************/
export interface EnterpriseProjectTypeMethods {
	addDepartment(departmentValueGuid?: any): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
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
* ProjectDetailPageCollections
**********************************************/
export interface ProjectDetailPageCollections extends ProjectDetailPageCollectionMethods {

}

/*********************************************
* ProjectDetailPageQuery
**********************************************/
export interface ProjectDetailPageQuery extends ProjectDetailPage {
	Item: SP.ListItem & SP.ListItemCollections;
}

/*********************************************
* ProjectDetailPageCollectionMethods
**********************************************/
export interface ProjectDetailPageCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
	getById(objectId?: string): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
}

/*********************************************
* UserPermission
**********************************************/
export interface UserPermission {
	HasPermission?: boolean;
	Permission?: string;
}

/*********************************************
* UserPermissionCollections
**********************************************/
export interface UserPermissionCollections {

}

/*********************************************
* IPhase
**********************************************/
export interface IPhase extends PhaseCollections,PhaseMethods,IBaseQuery<IPhaseQuery> {

}

/*********************************************
* IPhaseQuery
**********************************************/
export interface IPhaseQuery extends PhaseQuery, PhaseMethods {

}

/*********************************************
* Phase
**********************************************/
export interface Phase extends PhaseProps, PhaseCollections, PhaseMethods {

}

/*********************************************
* PhaseProps
**********************************************/
export interface PhaseProps {
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* PhasePropMethods
**********************************************/
export interface PhasePropMethods {

}

/*********************************************
* PhaseCollections
**********************************************/
export interface PhaseCollections extends PhasePropMethods {
	Stages(): IBaseCollection<PS.Stage, PS.StageQuery> & PS.StageCollectionMethods;
	Stages(id: string | number): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* PhaseCollectionMethods
**********************************************/
export interface PhaseCollectionMethods {
	add(parameters?: PS.PhaseCreationInformation): IBaseExecution<PS.Phase>;
	getByGuid(uid?: any): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections;
	getById(objectId?: string): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* PhaseQuery
**********************************************/
export interface PhaseQuery extends PhaseProps, PhaseMethods {
	Stages: IBaseResults<PS.Stage>;
}

/*********************************************
* PhaseMethods
**********************************************/
export interface PhaseMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IStage
**********************************************/
export interface IStage extends StageCollections,StageMethods,IBaseQuery<IStageQuery> {

}

/*********************************************
* IStageQuery
**********************************************/
export interface IStageQuery extends StageQuery, StageMethods {

}

/*********************************************
* Stage
**********************************************/
export interface Stage extends StageProps, StageCollections, StageMethods {

}

/*********************************************
* StageProps
**********************************************/
export interface StageProps {
	Behavior?: number;
	CheckInRequired?: boolean;
	Description?: string;
	Id?: any;
	Name?: string;
	SubmitDescription?: string;
}

/*********************************************
* StagePropMethods
**********************************************/
export interface StagePropMethods {
	Phase(): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections & PS.PhaseMethods;
	WorkflowStatusPage(): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
}

/*********************************************
* StageCollections
**********************************************/
export interface StageCollections extends StagePropMethods {
	CustomFields(): IBaseCollection<PS.StageCustomField, PS.StageCustomFieldQuery> & PS.StageCustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.StageCustomField, PS.StageCustomFieldQuery> & PS.StageCustomFieldCollections & PS.StageCustomFieldMethods;
	ProjectDetailPages(): IBaseCollection<PS.StageDetailPage, PS.StageDetailPageQuery> & PS.StageDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.StageDetailPage, PS.StageDetailPageQuery> & PS.StageDetailPageCollections & PS.StageDetailPageMethods;
}

/*********************************************
* StageCollectionMethods
**********************************************/
export interface StageCollectionMethods {
	add(parameters?: PS.StageCreationInformation): IBaseExecution<PS.Stage>;
	getByGuid(uid?: any): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections;
	getById(objectId?: string): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* StageQuery
**********************************************/
export interface StageQuery extends StageProps, StageMethods {
	CustomFields: IBaseResults<PS.StageCustomField>;
	Phase: PS.Phase & PS.PhaseCollections;
	ProjectDetailPages: IBaseResults<PS.StageDetailPage>;
	WorkflowStatusPage: PS.ProjectDetailPage & PS.ProjectDetailPageCollections;
}

/*********************************************
* StageMethods
**********************************************/
export interface StageMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IStageCustomField
**********************************************/
export interface IStageCustomField extends StageCustomFieldCollections,StageCustomFieldMethods,IBaseQuery<IStageCustomFieldQuery> {

}

/*********************************************
* IStageCustomFieldQuery
**********************************************/
export interface IStageCustomFieldQuery extends StageCustomFieldQuery, StageCustomFieldMethods {

}

/*********************************************
* StageCustomField
**********************************************/
export interface StageCustomField extends StageCustomFieldProps, StageCustomFieldCollections, StageCustomFieldMethods {

}

/*********************************************
* StageCustomFieldProps
**********************************************/
export interface StageCustomFieldProps {
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageCustomFieldPropMethods
**********************************************/
export interface StageCustomFieldPropMethods {
	Stage(): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* StageCustomFieldCollections
**********************************************/
export interface StageCustomFieldCollections extends StageCustomFieldPropMethods {

}

/*********************************************
* StageCustomFieldCollectionMethods
**********************************************/
export interface StageCustomFieldCollectionMethods {
	add(creationInfo?: PS.StageCustomFieldCreationInformation): IBaseExecution<PS.StageCustomField>;
	getByGuid(uid?: any): IBaseQuery<PS.StageCustomField, PS.StageCustomFieldQuery> & PS.StageCustomFieldCollections;
	getById(objectId?: string): IBaseQuery<PS.StageCustomField, PS.StageCustomFieldQuery> & PS.StageCustomFieldCollections;
}

/*********************************************
* StageCustomFieldQuery
**********************************************/
export interface StageCustomFieldQuery extends StageCustomFieldProps, StageCustomFieldMethods {
	Stage: PS.Stage & PS.StageCollections;
}

/*********************************************
* StageCustomFieldMethods
**********************************************/
export interface StageCustomFieldMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IStageDetailPage
**********************************************/
export interface IStageDetailPage extends StageDetailPageCollections,StageDetailPageMethods,IBaseQuery<IStageDetailPageQuery> {

}

/*********************************************
* IStageDetailPageQuery
**********************************************/
export interface IStageDetailPageQuery extends StageDetailPageQuery, StageDetailPageMethods {

}

/*********************************************
* StageDetailPage
**********************************************/
export interface StageDetailPage extends StageDetailPageProps, StageDetailPageCollections, StageDetailPageMethods {

}

/*********************************************
* StageDetailPageProps
**********************************************/
export interface StageDetailPageProps {
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* StageDetailPagePropMethods
**********************************************/
export interface StageDetailPagePropMethods {
	Page(): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
	Stage(): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* StageDetailPageCollections
**********************************************/
export interface StageDetailPageCollections extends StageDetailPagePropMethods {

}

/*********************************************
* StageDetailPageCollectionMethods
**********************************************/
export interface StageDetailPageCollectionMethods {
	add(parameters?: PS.StageDetailPageCreationInformation): IBaseExecution<PS.StageDetailPage>;
	getByGuid(uid?: any): IBaseQuery<PS.StageDetailPage, PS.StageDetailPageQuery> & PS.StageDetailPageCollections;
	getById(objectId?: string): IBaseQuery<PS.StageDetailPage, PS.StageDetailPageQuery> & PS.StageDetailPageCollections;
}

/*********************************************
* StageDetailPageQuery
**********************************************/
export interface StageDetailPageQuery extends StageDetailPageProps, StageDetailPageMethods {
	Page: PS.ProjectDetailPage & PS.ProjectDetailPageCollections;
	Stage: PS.Stage & PS.StageCollections;
}

/*********************************************
* StageDetailPageMethods
**********************************************/
export interface StageDetailPageMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ITask
**********************************************/
export interface ITask extends TaskCollections,TaskMethods,IBaseQuery<ITaskQuery> {

}

/*********************************************
* ITaskQuery
**********************************************/
export interface ITaskQuery extends TaskQuery, TaskMethods {

}

/*********************************************
* Task
**********************************************/
export interface Task extends TaskProps, TaskCollections, TaskMethods {

}

/*********************************************
* TaskProps
**********************************************/
export interface TaskProps {
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
* TaskPropMethods
**********************************************/
export interface TaskPropMethods {
	SubProject(): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
}

/*********************************************
* TaskCollections
**********************************************/
export interface TaskCollections extends TaskPropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery extends TaskProps, TaskMethods {
	CustomFields: IBaseResults<PS.CustomField>;
	SubProject: PS.PublishedProject & PS.PublishedProjectCollections;
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
export interface IPublishedProjectQuery extends PublishedProjectQuery, PublishedProjectMethods {

}

/*********************************************
* PublishedProject
**********************************************/
export interface PublishedProject extends PS.Project, PublishedProjectProps, PublishedProjectCollections, PublishedProjectMethods {

}

/*********************************************
* PublishedProjectProps
**********************************************/
export interface PublishedProjectProps {
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
* PublishedProjectPropMethods
**********************************************/
export interface PublishedProjectPropMethods {
	Calendar(): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	Draft(): IBaseQuery<PS.DraftProject, PS.DraftProjectQuery> & PS.DraftProjectCollections & PS.DraftProjectMethods;
	IncludeCustomFields(): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	Owner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	ProjectWorkflowInstance(): IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceQuery> & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceMethods;
}

/*********************************************
* PublishedProjectCollections
**********************************************/
export interface PublishedProjectCollections extends PublishedProjectPropMethods {
	Assignments(): IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
	EntityLinks(): IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	ProjectResources(): IBaseCollection<PS.PublishedProjectResource, PS.PublishedProjectResourceQuery> & PS.PublishedProjectResourceCollectionMethods;
	ProjectResources(id: string | number): IBaseQuery<PS.PublishedProjectResource, PS.PublishedProjectResourceQuery> & PS.PublishedProjectResourceCollections;
	TaskLinks(): IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollectionMethods;
	TaskLinks(id: string | number): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
	Tasks(): IBaseCollection<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollectionMethods;
	Tasks(id: string | number): IBaseQuery<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
}

/*********************************************
* PublishedProjectCollectionMethods
**********************************************/
export interface PublishedProjectCollectionMethods {
	add(parameters?: PS.ProjectCreationInformation): IBaseExecution<PS.PublishedProject>;
	getByGuid(uid?: any): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections;
	getById(objectId?: string): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections;
	update(): IBaseExecution<PS.QueueJob>;
	validate(): IBaseExecution<any>;
}

/*********************************************
* PublishedProjectQuery
**********************************************/
export interface PublishedProjectQuery extends PublishedProjectProps, PublishedProjectMethods {
	Assignments: IBaseResults<PS.PublishedAssignment>;
	Calendar: PS.Calendar & PS.CalendarCollections;
	Draft: PS.DraftProject & PS.DraftProjectCollections;
	EntityLinks: IBaseResults<PS.EntityLink>;
	IncludeCustomFields: PS.PublishedProject & PS.PublishedProjectCollections;
	Owner: SP.User & SP.UserCollections;
	ProjectResources: IBaseResults<PS.PublishedProjectResource>;
	ProjectWorkflowInstance: PS.ProjectWorkflowInstance & PS.ProjectWorkflowInstanceCollections;
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
	delete(): IBaseExecution<PS.QueueJob>;
	submitToWorkflow(): IBaseExecution<any>;
	updateVisibilityCustomFields(): IBaseExecution<PS.QueueJob>;
}

/*********************************************
* PublishedAssignment
**********************************************/
export interface PublishedAssignment {
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
export interface PublishedAssignmentCollections extends PublishedAssignmentCollectionMethods {

}

/*********************************************
* PublishedAssignmentQuery
**********************************************/
export interface PublishedAssignmentQuery extends PublishedAssignment {
	Owner: SP.User & SP.UserCollections;
	Parent: PS.PublishedAssignment & PS.PublishedAssignmentCollections;
	Resource: PS.PublishedProjectResource & PS.PublishedProjectResourceCollections;
	Task: PS.PublishedTask & PS.PublishedTaskCollections;
}

/*********************************************
* PublishedAssignmentCollectionMethods
**********************************************/
export interface PublishedAssignmentCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
	getById(objectId?: string): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
}

/*********************************************
* IPublishedProjectResource
**********************************************/
export interface IPublishedProjectResource extends PublishedProjectResourceCollections,PublishedProjectResourceMethods,IBaseQuery<IPublishedProjectResourceQuery> {

}

/*********************************************
* IPublishedProjectResourceQuery
**********************************************/
export interface IPublishedProjectResourceQuery extends PublishedProjectResourceQuery, PublishedProjectResourceMethods {

}

/*********************************************
* PublishedProjectResource
**********************************************/
export interface PublishedProjectResource extends PS.ProjectResource, PublishedProjectResourceProps, PublishedProjectResourceCollections, PublishedProjectResourceMethods {

}

/*********************************************
* PublishedProjectResourceProps
**********************************************/
export interface PublishedProjectResourceProps {
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
* PublishedProjectResourcePropMethods
**********************************************/
export interface PublishedProjectResourcePropMethods {
	DefaultAssignmentOwner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* PublishedProjectResourceCollections
**********************************************/
export interface PublishedProjectResourceCollections extends PublishedProjectResourcePropMethods {
	Assignments(): IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
}

/*********************************************
* PublishedProjectResourceCollectionMethods
**********************************************/
export interface PublishedProjectResourceCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.PublishedProjectResource, PS.PublishedProjectResourceQuery> & PS.PublishedProjectResourceCollections;
	getById(objectId?: string): IBaseQuery<PS.PublishedProjectResource, PS.PublishedProjectResourceQuery> & PS.PublishedProjectResourceCollections;
}

/*********************************************
* PublishedProjectResourceQuery
**********************************************/
export interface PublishedProjectResourceQuery extends PublishedProjectResourceProps, PublishedProjectResourceMethods {
	Assignments: IBaseResults<PS.PublishedAssignment>;
	DefaultAssignmentOwner: SP.User & SP.UserCollections;
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
export interface IPublishedTaskQuery extends PublishedTaskQuery, PublishedTaskMethods {

}

/*********************************************
* PublishedTask
**********************************************/
export interface PublishedTask extends PS.Task, PublishedTaskProps, PublishedTaskCollections, PublishedTaskMethods {

}

/*********************************************
* PublishedTaskProps
**********************************************/
export interface PublishedTaskProps {
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
* PublishedTaskPropMethods
**********************************************/
export interface PublishedTaskPropMethods {
	Calendar(): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	Parent(): IBaseQuery<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
	StatusManager(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	TaskPlanLink(): IBaseQuery<PS.TaskPlanLink> & PS.TaskPlanLinkCollections & PS.TaskPlanLinkMethods;
}

/*********************************************
* PublishedTaskCollections
**********************************************/
export interface PublishedTaskCollections extends PublishedTaskPropMethods {
	Assignments(): IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
	EntityLinks(): IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	Predecessors(): IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollectionMethods;
	Predecessors(id: string | number): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
	Successors(): IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollectionMethods;
	Successors(id: string | number): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
}

/*********************************************
* PublishedTaskCollectionMethods
**********************************************/
export interface PublishedTaskCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollections;
	getById(objectId?: string): IBaseQuery<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollections;
}

/*********************************************
* PublishedTaskQuery
**********************************************/
export interface PublishedTaskQuery extends PublishedTaskProps, PublishedTaskMethods {
	Assignments: IBaseResults<PS.PublishedAssignment>;
	Calendar: PS.Calendar & PS.CalendarCollections;
	EntityLinks: IBaseResults<PS.EntityLink>;
	Parent: PS.PublishedTask & PS.PublishedTaskCollections;
	Predecessors: IBaseResults<PS.PublishedTaskLink>;
	StatusManager: SP.User & SP.UserCollections;
	Successors: IBaseResults<PS.PublishedTaskLink>;
	TaskPlanLink: PS.TaskPlanLink & PS.TaskPlanLinkCollections;
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
export interface IEntityLinkQuery extends EntityLinkQuery, EntityLinkMethods {

}

/*********************************************
* EntityLink
**********************************************/
export interface EntityLink extends EntityLinkProps, EntityLinkCollections, EntityLinkMethods {

}

/*********************************************
* EntityLinkProps
**********************************************/
export interface EntityLinkProps {
	Created?: any;
	EntityLinkType?: number;
	Id?: any;
	Label?: string;
	Url?: string;
}

/*********************************************
* EntityLinkPropMethods
**********************************************/
export interface EntityLinkPropMethods {

}

/*********************************************
* EntityLinkCollections
**********************************************/
export interface EntityLinkCollections extends EntityLinkPropMethods {

}

/*********************************************
* EntityLinkCollectionMethods
**********************************************/
export interface EntityLinkCollectionMethods {
	add(parameters?: PS.EntityLinkCreationInformation): IBaseExecution<PS.EntityLink>;
	getByGuid(id?: any): IBaseQuery<PS.EntityLink>;
	update(): IBaseExecution<any>;
}

/*********************************************
* EntityLinkQuery
**********************************************/
export interface EntityLinkQuery extends EntityLinkProps, EntityLinkMethods {

}

/*********************************************
* EntityLinkMethods
**********************************************/
export interface EntityLinkMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* TaskLink
**********************************************/
export interface TaskLink {
	Id?: any;
}

/*********************************************
* TaskLinkCollections
**********************************************/
export interface TaskLinkCollections {

}

/*********************************************
* PublishedTaskLink
**********************************************/
export interface PublishedTaskLink {
	DependencyType?: number;
}

/*********************************************
* PublishedTaskLinkCollections
**********************************************/
export interface PublishedTaskLinkCollections extends PublishedTaskLinkCollectionMethods {

}

/*********************************************
* PublishedTaskLinkQuery
**********************************************/
export interface PublishedTaskLinkQuery extends PublishedTaskLink {
	End: PS.PublishedTask & PS.PublishedTaskCollections;
	Start: PS.PublishedTask & PS.PublishedTaskCollections;
}

/*********************************************
* PublishedTaskLinkCollectionMethods
**********************************************/
export interface PublishedTaskLinkCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
	getById(objectId?: string): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
}

/*********************************************
* ITaskPlanLink
**********************************************/
export interface ITaskPlanLink extends TaskPlanLinkCollections,TaskPlanLinkMethods,IBaseQuery<ITaskPlanLinkQuery> {

}

/*********************************************
* ITaskPlanLinkQuery
**********************************************/
export interface ITaskPlanLinkQuery extends TaskPlanLinkQuery, TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLink
**********************************************/
export interface TaskPlanLink extends TaskPlanLinkProps, TaskPlanLinkCollections, TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLinkProps
**********************************************/
export interface TaskPlanLinkProps {
	Created?: any;
	GroupId?: any;
	Id?: string;
	PlanId?: string;
	ProjectId?: any;
	TaskId?: any;
}

/*********************************************
* TaskPlanLinkPropMethods
**********************************************/
export interface TaskPlanLinkPropMethods {

}

/*********************************************
* TaskPlanLinkCollections
**********************************************/
export interface TaskPlanLinkCollections extends TaskPlanLinkPropMethods {

}

/*********************************************
* TaskPlanLinkQuery
**********************************************/
export interface TaskPlanLinkQuery extends TaskPlanLinkProps, TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLinkMethods
**********************************************/
export interface TaskPlanLinkMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IDraftProject
**********************************************/
export interface IDraftProject extends DraftProjectCollections,DraftProjectMethods,IBaseQuery<IDraftProjectQuery> {

}

/*********************************************
* IDraftProjectQuery
**********************************************/
export interface IDraftProjectQuery extends DraftProjectQuery, DraftProjectMethods {

}

/*********************************************
* DraftProject
**********************************************/
export interface DraftProject extends PS.Project, DraftProjectProps, DraftProjectCollections, DraftProjectMethods {

}

/*********************************************
* DraftProjectProps
**********************************************/
export interface DraftProjectProps {
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
* DraftProjectPropMethods
**********************************************/
export interface DraftProjectPropMethods {
	Calendar(): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	IncludeCustomFields(): IBaseQuery<PS.DraftProject, PS.DraftProjectQuery> & PS.DraftProjectCollections & PS.DraftProjectMethods;
	Owner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* DraftProjectCollections
**********************************************/
export interface DraftProjectCollections extends DraftProjectPropMethods {
	Assignments(): IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
	ProjectResources(): IBaseCollection<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollectionMethods;
	ProjectResources(id: string | number): IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollections & PS.DraftProjectResourceMethods;
	TaskLinks(): IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollectionMethods;
	TaskLinks(id: string | number): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
	Tasks(): IBaseCollection<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollectionMethods;
	Tasks(id: string | number): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
}

/*********************************************
* DraftProjectQuery
**********************************************/
export interface DraftProjectQuery extends DraftProjectProps, DraftProjectMethods {
	Assignments: IBaseResults<PS.DraftAssignment>;
	Calendar: PS.Calendar & PS.CalendarCollections;
	IncludeCustomFields: PS.DraftProject & PS.DraftProjectCollections;
	Owner: SP.User & SP.UserCollections;
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
export interface IDraftProjectResourceQuery extends DraftProjectResourceQuery, DraftProjectResourceMethods {

}

/*********************************************
* DraftProjectResource
**********************************************/
export interface DraftProjectResource extends PS.ProjectResource, DraftProjectResourceProps, DraftProjectResourceCollections, DraftProjectResourceMethods {

}

/*********************************************
* DraftProjectResourceProps
**********************************************/
export interface DraftProjectResourceProps {
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
* DraftProjectResourcePropMethods
**********************************************/
export interface DraftProjectResourcePropMethods {
	DefaultAssignmentOwner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* DraftProjectResourceCollections
**********************************************/
export interface DraftProjectResourceCollections extends DraftProjectResourcePropMethods {
	Assignments(): IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
}

/*********************************************
* DraftProjectResourceCollectionMethods
**********************************************/
export interface DraftProjectResourceCollectionMethods {
	add(parameters?: PS.ProjectResourceCreationInformation): IBaseExecution<PS.DraftProjectResource>;
	addEnterpriseResourceById(resourceId?: any): IBaseExecution<PS.QueueJob>;
	getByGuid(uid?: any): IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollections;
	getById(objectId?: string): IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollections;
}

/*********************************************
* DraftProjectResourceQuery
**********************************************/
export interface DraftProjectResourceQuery extends DraftProjectResourceProps, DraftProjectResourceMethods {
	Assignments: IBaseResults<PS.DraftAssignment>;
	DefaultAssignmentOwner: SP.User & SP.UserCollections;
}

/*********************************************
* DraftProjectResourceMethods
**********************************************/
export interface DraftProjectResourceMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IDraftTaskLink
**********************************************/
export interface IDraftTaskLink extends DraftTaskLinkCollections,DraftTaskLinkMethods,IBaseQuery<IDraftTaskLinkQuery> {

}

/*********************************************
* IDraftTaskLinkQuery
**********************************************/
export interface IDraftTaskLinkQuery extends DraftTaskLinkQuery, DraftTaskLinkMethods {

}

/*********************************************
* DraftTaskLink
**********************************************/
export interface DraftTaskLink extends PS.TaskLink, DraftTaskLinkProps, DraftTaskLinkCollections, DraftTaskLinkMethods {

}

/*********************************************
* DraftTaskLinkProps
**********************************************/
export interface DraftTaskLinkProps {
	DependencyType?: number;
	EndId?: any;
	StartId?: any;
}

/*********************************************
* DraftTaskLinkPropMethods
**********************************************/
export interface DraftTaskLinkPropMethods {
	End(): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
	Start(): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
}

/*********************************************
* DraftTaskLinkCollections
**********************************************/
export interface DraftTaskLinkCollections extends DraftTaskLinkPropMethods {

}

/*********************************************
* DraftTaskLinkCollectionMethods
**********************************************/
export interface DraftTaskLinkCollectionMethods {
	add(parameters?: PS.TaskLinkCreationInformation): IBaseExecution<PS.DraftTaskLink>;
	getByGuid(uid?: any): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections;
	getById(objectId?: string): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections;
}

/*********************************************
* DraftTaskLinkQuery
**********************************************/
export interface DraftTaskLinkQuery extends DraftTaskLinkProps, DraftTaskLinkMethods {
	End: PS.DraftTask & PS.DraftTaskCollections;
	Start: PS.DraftTask & PS.DraftTaskCollections;
}

/*********************************************
* DraftTaskLinkMethods
**********************************************/
export interface DraftTaskLinkMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IDraftTask
**********************************************/
export interface IDraftTask extends DraftTaskCollections,DraftTaskMethods,IBaseQuery<IDraftTaskQuery> {

}

/*********************************************
* IDraftTaskQuery
**********************************************/
export interface IDraftTaskQuery extends DraftTaskQuery, DraftTaskMethods {

}

/*********************************************
* DraftTask
**********************************************/
export interface DraftTask extends PS.Task, DraftTaskProps, DraftTaskCollections, DraftTaskMethods {

}

/*********************************************
* DraftTaskProps
**********************************************/
export interface DraftTaskProps {
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
* DraftTaskPropMethods
**********************************************/
export interface DraftTaskPropMethods {
	Calendar(): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	Parent(): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
	StatusManager(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* DraftTaskCollections
**********************************************/
export interface DraftTaskCollections extends DraftTaskPropMethods {
	Assignments(): IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
	Predecessors(): IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollectionMethods;
	Predecessors(id: string | number): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
	Successors(): IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollectionMethods;
	Successors(id: string | number): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
}

/*********************************************
* DraftTaskCollectionMethods
**********************************************/
export interface DraftTaskCollectionMethods {
	add(parameters?: PS.TaskCreationInformation): IBaseExecution<PS.DraftTask>;
	getByGuid(uid?: any): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections;
	getById(objectId?: string): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections;
}

/*********************************************
* DraftTaskQuery
**********************************************/
export interface DraftTaskQuery extends DraftTaskProps, DraftTaskMethods {
	Assignments: IBaseResults<PS.DraftAssignment>;
	Calendar: PS.Calendar & PS.CalendarCollections;
	Parent: PS.DraftTask & PS.DraftTaskCollections;
	Predecessors: IBaseResults<PS.DraftTaskLink>;
	StatusManager: SP.User & SP.UserCollections;
	Successors: IBaseResults<PS.DraftTaskLink>;
}

/*********************************************
* DraftTaskMethods
**********************************************/
export interface DraftTaskMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IProjectWorkflowInstance
**********************************************/
export interface IProjectWorkflowInstance extends ProjectWorkflowInstanceCollections,ProjectWorkflowInstanceMethods,IBaseQuery<IProjectWorkflowInstanceQuery> {

}

/*********************************************
* IProjectWorkflowInstanceQuery
**********************************************/
export interface IProjectWorkflowInstanceQuery extends ProjectWorkflowInstanceQuery, ProjectWorkflowInstanceMethods {

}

/*********************************************
* ProjectWorkflowInstance
**********************************************/
export interface ProjectWorkflowInstance extends ProjectWorkflowInstanceProps, ProjectWorkflowInstanceCollections, ProjectWorkflowInstanceMethods {

}

/*********************************************
* ProjectWorkflowInstanceProps
**********************************************/
export interface ProjectWorkflowInstanceProps {
	CreatedDate?: any;
	Id?: any;
	LastSubmittedDate?: any;
	WorkflowError?: string;
	WorkflowErrorResponseCode?: number;
	WorkflowState?: number;
}

/*********************************************
* ProjectWorkflowInstancePropMethods
**********************************************/
export interface ProjectWorkflowInstancePropMethods {
	Project(): IBaseQuery<PS.Project, PS.ProjectQuery> & PS.ProjectCollections & PS.ProjectMethods;
	WorkflowInstance(): IBaseQuery<SP.WorkflowServices.WorkflowInstance> & SP.WorkflowServices.WorkflowInstanceCollections;
	WorkflowInstanceOwner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* ProjectWorkflowInstanceCollections
**********************************************/
export interface ProjectWorkflowInstanceCollections extends ProjectWorkflowInstancePropMethods {

}

/*********************************************
* ProjectWorkflowInstanceCollectionMethods
**********************************************/
export interface ProjectWorkflowInstanceCollectionMethods {
	getById(objectId?: string): IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceQuery> & PS.ProjectWorkflowInstanceCollections;
}

/*********************************************
* ProjectWorkflowInstanceQuery
**********************************************/
export interface ProjectWorkflowInstanceQuery extends ProjectWorkflowInstanceProps, ProjectWorkflowInstanceMethods {
	Project: PS.Project & PS.ProjectCollections;
	WorkflowInstance: SP.WorkflowServices.WorkflowInstance & SP.WorkflowServices.WorkflowInstanceCollections;
	WorkflowInstanceOwner: SP.User & SP.UserCollections;
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
export interface ProjectSummaryTask {
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
* ProjectSummaryTaskCollections
**********************************************/
export interface ProjectSummaryTaskCollections {

}

/*********************************************
* IQueueJob
**********************************************/
export interface IQueueJob extends QueueJobCollections,QueueJobMethods,IBaseQuery<IQueueJobQuery> {

}

/*********************************************
* IQueueJobQuery
**********************************************/
export interface IQueueJobQuery extends QueueJobQuery, QueueJobMethods {

}

/*********************************************
* QueueJob
**********************************************/
export interface QueueJob extends QueueJobProps, QueueJobCollections, QueueJobMethods {

}

/*********************************************
* QueueJobProps
**********************************************/
export interface QueueJobProps {
	Id?: any;
	JobState?: number;
	MessageType?: number;
	PercentComplete?: number;
	WaitMilliseconds?: number;
	WaitTime?: any;
}

/*********************************************
* QueueJobPropMethods
**********************************************/
export interface QueueJobPropMethods {
	Project(): IBaseQuery<PS.Project, PS.ProjectQuery> & PS.ProjectCollections & PS.ProjectMethods;
	Submitter(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* QueueJobCollections
**********************************************/
export interface QueueJobCollections extends QueueJobPropMethods {

}

/*********************************************
* QueueJobCollectionMethods
**********************************************/
export interface QueueJobCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections;
	getById(objectId?: string): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections;
}

/*********************************************
* QueueJobQuery
**********************************************/
export interface QueueJobQuery extends QueueJobProps, QueueJobMethods {
	Project: PS.Project & PS.ProjectCollections;
	Submitter: SP.User & SP.UserCollections;
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
export interface IStatusTaskQuery extends StatusTaskQuery, StatusTaskMethods {

}

/*********************************************
* StatusTask
**********************************************/
export interface StatusTask extends StatusTaskProps, StatusTaskCollections, StatusTaskMethods {

}

/*********************************************
* StatusTaskProps
**********************************************/
export interface StatusTaskProps {
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
* StatusTaskPropMethods
**********************************************/
export interface StatusTaskPropMethods {
	StatusManager(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* StatusTaskCollections
**********************************************/
export interface StatusTaskCollections extends StatusTaskPropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* StatusTaskQuery
**********************************************/
export interface StatusTaskQuery extends StatusTaskProps, StatusTaskMethods {
	CustomFields: IBaseResults<PS.CustomField>;
	StatusManager: SP.User & SP.UserCollections;
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
export interface IEnterpriseResourceCostRateTableQuery extends EnterpriseResourceCostRateTableQuery, EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable extends EnterpriseResourceCostRateTableProps, EnterpriseResourceCostRateTableCollections, EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* EnterpriseResourceCostRateTableProps
**********************************************/
export interface EnterpriseResourceCostRateTableProps {
	Name?: number;
}

/*********************************************
* EnterpriseResourceCostRateTablePropMethods
**********************************************/
export interface EnterpriseResourceCostRateTablePropMethods {

}

/*********************************************
* EnterpriseResourceCostRateTableCollections
**********************************************/
export interface EnterpriseResourceCostRateTableCollections extends EnterpriseResourceCostRateTablePropMethods {
	CostRates(): IBaseCollection<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollectionMethods;
	CostRates(id: string | number): IBaseQuery<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollections & PS.EnterpriseResourceCostRateMethods;
}

/*********************************************
* EnterpriseResourceCostRateTableQuery
**********************************************/
export interface EnterpriseResourceCostRateTableQuery extends EnterpriseResourceCostRateTableProps, EnterpriseResourceCostRateTableMethods {
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
export interface IEnterpriseResourceCostRateQuery extends EnterpriseResourceCostRateQuery, EnterpriseResourceCostRateMethods {

}

/*********************************************
* EnterpriseResourceCostRate
**********************************************/
export interface EnterpriseResourceCostRate extends EnterpriseResourceCostRateProps, EnterpriseResourceCostRateCollections, EnterpriseResourceCostRateMethods {

}

/*********************************************
* EnterpriseResourceCostRateProps
**********************************************/
export interface EnterpriseResourceCostRateProps {
	CostPerUse?: number;
	EffectiveStarting?: any;
	EffectiveUntil?: any;
	OvertimeRate?: number;
	StandardRate?: number;
}

/*********************************************
* EnterpriseResourceCostRatePropMethods
**********************************************/
export interface EnterpriseResourceCostRatePropMethods {

}

/*********************************************
* EnterpriseResourceCostRateCollections
**********************************************/
export interface EnterpriseResourceCostRateCollections extends EnterpriseResourceCostRatePropMethods {

}

/*********************************************
* EnterpriseResourceCostRateCollectionMethods
**********************************************/
export interface EnterpriseResourceCostRateCollectionMethods {
	add(parameters?: PS.CostRateCreationInformation): IBaseExecution<PS.EnterpriseResourceCostRate>;
	getByDateUrl(effectiveDate?: string): IBaseQuery<PS.EnterpriseResourceCostRate>;
}

/*********************************************
* EnterpriseResourceCostRateQuery
**********************************************/
export interface EnterpriseResourceCostRateQuery extends EnterpriseResourceCostRateProps, EnterpriseResourceCostRateMethods {

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
export interface IResourceEngagementQuery extends ResourceEngagementQuery, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagement
**********************************************/
export interface ResourceEngagement extends PS.Engagement, ResourceEngagementProps, ResourceEngagementCollections, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagementProps
**********************************************/
export interface ResourceEngagementProps {
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
* ResourceEngagementPropMethods
**********************************************/
export interface ResourceEngagementPropMethods {

}

/*********************************************
* ResourceEngagementCollections
**********************************************/
export interface ResourceEngagementCollections extends ResourceEngagementPropMethods {

}

/*********************************************
* ResourceEngagementCollectionMethods
**********************************************/
export interface ResourceEngagementCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.ResourceEngagement>;
	getById(objectId?: string): IBaseQuery<PS.ResourceEngagement>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ResourceEngagementQuery
**********************************************/
export interface ResourceEngagementQuery extends ResourceEngagementProps, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagementMethods
**********************************************/
export interface ResourceEngagementMethods {
	delete(): IBaseExecution<any>;
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
* DeletedPublishedAssignmentCollections
**********************************************/
export interface DeletedPublishedAssignmentCollections {

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
* EngagementTimephasedPeriodCollections
**********************************************/
export interface EngagementTimephasedPeriodCollections {

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

}

/*********************************************
* EntityTypesQuery
**********************************************/
export interface EntityTypesQuery extends EntityTypes {
	AssignmentEntity: PS.EntityType & PS.EntityTypeCollections;
	ProjectEntity: PS.EntityType & PS.EntityTypeCollections;
	ResourceEntity: PS.EntityType & PS.EntityTypeCollections;
	TaskEntity: PS.EntityType & PS.EntityTypeCollections;
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
* EventCollections
**********************************************/
export interface EventCollections extends EventCollectionMethods {

}

/*********************************************
* EventCollectionMethods
**********************************************/
export interface EventCollectionMethods {
	getById(objectId?: string): IBaseQuery<PS.Event>;
	getByInt(id?: number): IBaseQuery<PS.Event>;
}

/*********************************************
* IEventHandler
**********************************************/
export interface IEventHandler extends EventHandlerCollections,EventHandlerMethods,IBaseQuery<IEventHandlerQuery> {

}

/*********************************************
* IEventHandlerQuery
**********************************************/
export interface IEventHandlerQuery extends EventHandlerQuery, EventHandlerMethods {

}

/*********************************************
* EventHandler
**********************************************/
export interface EventHandler extends EventHandlerProps, EventHandlerCollections, EventHandlerMethods {

}

/*********************************************
* EventHandlerProps
**********************************************/
export interface EventHandlerProps {
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
* EventHandlerPropMethods
**********************************************/
export interface EventHandlerPropMethods {
	Event(): IBaseQuery<PS.Event> & PS.EventCollections;
}

/*********************************************
* EventHandlerCollections
**********************************************/
export interface EventHandlerCollections extends EventHandlerPropMethods {

}

/*********************************************
* EventHandlerCollectionMethods
**********************************************/
export interface EventHandlerCollectionMethods {
	add(parameters?: PS.EventHandlerCreationInformation): IBaseExecution<PS.EventHandler>;
	getByGuid(uid?: any): IBaseQuery<PS.EventHandler, PS.EventHandlerQuery> & PS.EventHandlerCollections;
	getById(objectId?: string): IBaseQuery<PS.EventHandler, PS.EventHandlerQuery> & PS.EventHandlerCollections;
	update(): IBaseExecution<any>;
}

/*********************************************
* EventHandlerQuery
**********************************************/
export interface EventHandlerQuery extends EventHandlerProps, EventHandlerMethods {
	Event: PS.Event & PS.EventCollections;
}

/*********************************************
* EventHandlerMethods
**********************************************/
export interface EventHandlerMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ILookupCost
**********************************************/
export interface ILookupCost extends LookupCostCollections,LookupCostMethods,IBaseQuery<ILookupCostQuery> {

}

/*********************************************
* ILookupCostQuery
**********************************************/
export interface ILookupCostQuery extends LookupCostQuery, LookupCostMethods {

}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry, LookupCostProps, LookupCostCollections, LookupCostMethods {

}

/*********************************************
* LookupCostProps
**********************************************/
export interface LookupCostProps {
	Value?: number;
}

/*********************************************
* LookupCostPropMethods
**********************************************/
export interface LookupCostPropMethods {

}

/*********************************************
* LookupCostCollections
**********************************************/
export interface LookupCostCollections extends LookupCostPropMethods {

}

/*********************************************
* LookupCostQuery
**********************************************/
export interface LookupCostQuery extends LookupCostProps, LookupCostMethods {

}

/*********************************************
* LookupCostMethods
**********************************************/
export interface LookupCostMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ILookupDate
**********************************************/
export interface ILookupDate extends LookupDateCollections,LookupDateMethods,IBaseQuery<ILookupDateQuery> {

}

/*********************************************
* ILookupDateQuery
**********************************************/
export interface ILookupDateQuery extends LookupDateQuery, LookupDateMethods {

}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry, LookupDateProps, LookupDateCollections, LookupDateMethods {

}

/*********************************************
* LookupDateProps
**********************************************/
export interface LookupDateProps {
	Value?: any;
}

/*********************************************
* LookupDatePropMethods
**********************************************/
export interface LookupDatePropMethods {

}

/*********************************************
* LookupDateCollections
**********************************************/
export interface LookupDateCollections extends LookupDatePropMethods {

}

/*********************************************
* LookupDateQuery
**********************************************/
export interface LookupDateQuery extends LookupDateProps, LookupDateMethods {

}

/*********************************************
* LookupDateMethods
**********************************************/
export interface LookupDateMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ILookupDuration
**********************************************/
export interface ILookupDuration extends LookupDurationCollections,LookupDurationMethods,IBaseQuery<ILookupDurationQuery> {

}

/*********************************************
* ILookupDurationQuery
**********************************************/
export interface ILookupDurationQuery extends LookupDurationQuery, LookupDurationMethods {

}

/*********************************************
* LookupDuration
**********************************************/
export interface LookupDuration extends PS.LookupEntry, LookupDurationProps, LookupDurationCollections, LookupDurationMethods {

}

/*********************************************
* LookupDurationProps
**********************************************/
export interface LookupDurationProps {
	Value?: string;
	ValueMilliseconds?: number;
	ValueTimeSpan?: any;
}

/*********************************************
* LookupDurationPropMethods
**********************************************/
export interface LookupDurationPropMethods {

}

/*********************************************
* LookupDurationCollections
**********************************************/
export interface LookupDurationCollections extends LookupDurationPropMethods {

}

/*********************************************
* LookupDurationQuery
**********************************************/
export interface LookupDurationQuery extends LookupDurationProps, LookupDurationMethods {

}

/*********************************************
* LookupDurationMethods
**********************************************/
export interface LookupDurationMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ILookupNumber
**********************************************/
export interface ILookupNumber extends LookupNumberCollections,LookupNumberMethods,IBaseQuery<ILookupNumberQuery> {

}

/*********************************************
* ILookupNumberQuery
**********************************************/
export interface ILookupNumberQuery extends LookupNumberQuery, LookupNumberMethods {

}

/*********************************************
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry, LookupNumberProps, LookupNumberCollections, LookupNumberMethods {

}

/*********************************************
* LookupNumberProps
**********************************************/
export interface LookupNumberProps {
	Value?: number;
}

/*********************************************
* LookupNumberPropMethods
**********************************************/
export interface LookupNumberPropMethods {

}

/*********************************************
* LookupNumberCollections
**********************************************/
export interface LookupNumberCollections extends LookupNumberPropMethods {

}

/*********************************************
* LookupNumberQuery
**********************************************/
export interface LookupNumberQuery extends LookupNumberProps, LookupNumberMethods {

}

/*********************************************
* LookupNumberMethods
**********************************************/
export interface LookupNumberMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ILookupText
**********************************************/
export interface ILookupText extends LookupTextCollections,LookupTextMethods,IBaseQuery<ILookupTextQuery> {

}

/*********************************************
* ILookupTextQuery
**********************************************/
export interface ILookupTextQuery extends LookupTextQuery, LookupTextMethods {

}

/*********************************************
* LookupText
**********************************************/
export interface LookupText extends PS.LookupEntry, LookupTextProps, LookupTextCollections, LookupTextMethods {

}

/*********************************************
* LookupTextProps
**********************************************/
export interface LookupTextProps {
	HasChildren?: boolean;
	Mask?: PS.LookupMask;
	Value?: string;
}

/*********************************************
* LookupTextPropMethods
**********************************************/
export interface LookupTextPropMethods {
	Parent(): IBaseQuery<PS.LookupText, PS.LookupTextQuery> & PS.LookupTextCollections & PS.LookupTextMethods;
}

/*********************************************
* LookupTextCollections
**********************************************/
export interface LookupTextCollections extends LookupTextPropMethods {

}

/*********************************************
* LookupTextQuery
**********************************************/
export interface LookupTextQuery extends LookupTextProps, LookupTextMethods {
	Parent: PS.LookupText & PS.LookupTextCollections;
}

/*********************************************
* LookupTextMethods
**********************************************/
export interface LookupTextMethods {
	delete(): IBaseExecution<any>;
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
* PageSizesCollections
**********************************************/
export interface PageSizesCollections {

}

/*********************************************
* IPlanAssignment
**********************************************/
export interface IPlanAssignment extends PlanAssignmentCollections,PlanAssignmentMethods,IBaseQuery<IPlanAssignmentQuery> {

}

/*********************************************
* IPlanAssignmentQuery
**********************************************/
export interface IPlanAssignmentQuery extends PlanAssignmentQuery, PlanAssignmentMethods {

}

/*********************************************
* PlanAssignment
**********************************************/
export interface PlanAssignment extends PlanAssignmentProps, PlanAssignmentCollections, PlanAssignmentMethods {

}

/*********************************************
* PlanAssignmentProps
**********************************************/
export interface PlanAssignmentProps {
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
* PlanAssignmentPropMethods
**********************************************/
export interface PlanAssignmentPropMethods {
	Resource(): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
}

/*********************************************
* PlanAssignmentCollections
**********************************************/
export interface PlanAssignmentCollections extends PlanAssignmentPropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Intervals(): IBaseCollection<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollectionMethods;
	Intervals(id: string | number): IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
}

/*********************************************
* PlanAssignmentCollectionMethods
**********************************************/
export interface PlanAssignmentCollectionMethods {
	add(parameters?: PS.PlanAssignmentCreationInformation): IBaseExecution<PS.PlanAssignment>;
	getByGuid(uid?: any): IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentQuery> & PS.PlanAssignmentCollections;
	getById(objectId?: string): IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentQuery> & PS.PlanAssignmentCollections;
}

/*********************************************
* PlanAssignmentQuery
**********************************************/
export interface PlanAssignmentQuery extends PlanAssignmentProps, PlanAssignmentMethods {
	CustomFields: IBaseResults<PS.CustomField>;
	Intervals: IBaseResults<PS.PlanAssignmentInterval>;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections;
}

/*********************************************
* PlanAssignmentMethods
**********************************************/
export interface PlanAssignmentMethods {
	delete(): IBaseExecution<any>;
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
* PlanAssignmentIntervalCollections
**********************************************/
export interface PlanAssignmentIntervalCollections extends PlanAssignmentIntervalCollectionMethods {

}

/*********************************************
* PlanAssignmentIntervalCollectionMethods
**********************************************/
export interface PlanAssignmentIntervalCollectionMethods {
	getById(id?: string): IBaseQuery<PS.PlanAssignmentInterval>;
	getByStart(start?: any): IBaseQuery<PS.PlanAssignmentInterval>;
}

/*********************************************
* ProjectEngagementComment
**********************************************/
export interface ProjectEngagementComment {

}

/*********************************************
* ProjectEngagementCommentCollections
**********************************************/
export interface ProjectEngagementCommentCollections {

}

/*********************************************
* ProjectEngagementTimephasedPeriod
**********************************************/
export interface ProjectEngagementTimephasedPeriod {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollections
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollections extends ProjectEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl(start?: string): IBaseQuery<PS.ProjectEngagementTimephasedPeriod>;
}

/*********************************************
* ProjectServerData
**********************************************/
export interface ProjectServerData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProjectServerDataCollections
**********************************************/
export interface ProjectServerDataCollections {

}

/*********************************************
* IProjectServer
**********************************************/
export interface IProjectServer extends ProjectServerCollections,ProjectServerMethods,IBaseQuery<IProjectServerQuery> {

}

/*********************************************
* IProjectServerQuery
**********************************************/
export interface IProjectServerQuery extends ProjectServerQuery, ProjectServerMethods {

}

/*********************************************
* ProjectServer
**********************************************/
export interface ProjectServer extends ProjectServerProps, ProjectServerCollections, ProjectServerMethods {

}

/*********************************************
* ProjectServerProps
**********************************************/
export interface ProjectServerProps {
	EngagementsTimephasedPageSize?: number;
	EnterpriseResourcesPageSize?: number;
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
	ProjectsPageSize?: number;
}

/*********************************************
* ProjectServerPropMethods
**********************************************/
export interface ProjectServerPropMethods {
	EntityTypes(): IBaseQuery<PS.EntityTypes, PS.EntityTypesQuery> & PS.EntityTypesCollections;
	Settings(): IBaseQuery<PS.Settings> & PS.SettingsCollections;
	WorkflowActivities(): IBaseQuery<PS.WorkflowActivities> & PS.WorkflowActivitiesCollections & PS.WorkflowActivitiesMethods;
	WorkflowDesigner(): IBaseQuery<PS.WorkflowDesigner, PS.WorkflowDesignerQuery> & PS.WorkflowDesignerCollections;
}

/*********************************************
* ProjectServerCollections
**********************************************/
export interface ProjectServerCollections extends ProjectServerPropMethods {
	Calendars(): IBaseCollection<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollectionMethods;
	Calendars(id: string | number): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	EnterpriseProjectTypes(): IBaseCollection<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollectionMethods;
	EnterpriseProjectTypes(id: string | number): IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	EnterpriseResources(): IBaseCollection<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollectionMethods;
	EnterpriseResources(id: string | number): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	EventHandlers(): IBaseCollection<PS.EventHandler, PS.EventHandlerQuery> & PS.EventHandlerCollectionMethods;
	EventHandlers(id: string | number): IBaseQuery<PS.EventHandler, PS.EventHandlerQuery> & PS.EventHandlerCollections & PS.EventHandlerMethods;
	Events(): IBaseCollection<PS.Event> & PS.EventCollectionMethods;
	Events(id: string | number): IBaseQuery<PS.Event> & PS.EventCollections;
	LookupTables(): IBaseCollection<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollectionMethods;
	LookupTables(id: string | number): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections & PS.LookupTableMethods;
	Phases(): IBaseCollection<PS.Phase, PS.PhaseQuery> & PS.PhaseCollectionMethods;
	Phases(id: string | number): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections & PS.PhaseMethods;
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
	Projects(): IBaseCollection<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollectionMethods;
	Projects(id: string | number): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	ProjectWorkflowInstances(): IBaseCollection<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceQuery> & PS.ProjectWorkflowInstanceCollectionMethods;
	ProjectWorkflowInstances(id: string | number): IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceQuery> & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceMethods;
	Stages(): IBaseCollection<PS.Stage, PS.StageQuery> & PS.StageCollectionMethods;
	Stages(id: string | number): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
	TimeSheetPeriods(): IBaseCollection<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollectionMethods;
	TimeSheetPeriods(id: string | number): IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
}

/*********************************************
* ProjectServerQuery
**********************************************/
export interface ProjectServerQuery extends ProjectServerProps, ProjectServerMethods {
	Calendars: IBaseResults<PS.Calendar>;
	CustomFields: IBaseResults<PS.CustomField>;
	EnterpriseProjectTypes: IBaseResults<PS.EnterpriseProjectType>;
	EnterpriseResources: IBaseResults<PS.EnterpriseResource>;
	EntityTypes: PS.EntityTypes & PS.EntityTypesCollections;
	EventHandlers: IBaseResults<PS.EventHandler>;
	Events: IBaseResults<PS.Event>;
	LookupTables: IBaseResults<PS.LookupTable>;
	Phases: IBaseResults<PS.Phase>;
	ProjectDetailPages: IBaseResults<PS.ProjectDetailPage>;
	Projects: IBaseResults<PS.PublishedProject>;
	ProjectWorkflowInstances: IBaseResults<PS.ProjectWorkflowInstance>;
	Settings: PS.Settings & PS.SettingsCollections;
	Stages: IBaseResults<PS.Stage>;
	TimeSheetPeriods: IBaseResults<PS.TimeSheetPeriod>;
	UserPermissions: IBaseResults<PS.UserPermission>;
	WorkflowActivities: PS.WorkflowActivities & PS.WorkflowActivitiesCollections;
	WorkflowDesigner: PS.WorkflowDesigner & PS.WorkflowDesignerCollections;
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
* SettingsCollections
**********************************************/
export interface SettingsCollections {

}

/*********************************************
* ITimeSheetPeriod
**********************************************/
export interface ITimeSheetPeriod extends TimeSheetPeriodCollections,TimeSheetPeriodMethods,IBaseQuery<ITimeSheetPeriodQuery> {

}

/*********************************************
* ITimeSheetPeriodQuery
**********************************************/
export interface ITimeSheetPeriodQuery extends TimeSheetPeriodQuery, TimeSheetPeriodMethods {

}

/*********************************************
* TimeSheetPeriod
**********************************************/
export interface TimeSheetPeriod extends TimeSheetPeriodProps, TimeSheetPeriodCollections, TimeSheetPeriodMethods {

}

/*********************************************
* TimeSheetPeriodProps
**********************************************/
export interface TimeSheetPeriodProps {
	End?: any;
	Id?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* TimeSheetPeriodPropMethods
**********************************************/
export interface TimeSheetPeriodPropMethods {
	TimeSheet(): IBaseQuery<PS.TimeSheet, PS.TimeSheetQuery> & PS.TimeSheetCollections & PS.TimeSheetMethods;
}

/*********************************************
* TimeSheetPeriodCollections
**********************************************/
export interface TimeSheetPeriodCollections extends TimeSheetPeriodPropMethods {

}

/*********************************************
* TimeSheetPeriodCollectionMethods
**********************************************/
export interface TimeSheetPeriodCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollections;
	getById(objectId?: string): IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollections;
}

/*********************************************
* TimeSheetPeriodQuery
**********************************************/
export interface TimeSheetPeriodQuery extends TimeSheetPeriodProps, TimeSheetPeriodMethods {
	TimeSheet: PS.TimeSheet & PS.TimeSheetCollections;
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
export interface ITimeSheetQuery extends TimeSheetQuery, TimeSheetMethods {

}

/*********************************************
* TimeSheet
**********************************************/
export interface TimeSheet extends TimeSheetProps, TimeSheetCollections, TimeSheetMethods {

}

/*********************************************
* TimeSheetProps
**********************************************/
export interface TimeSheetProps {
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
* TimeSheetPropMethods
**********************************************/
export interface TimeSheetPropMethods {
	Creator(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	Manager(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	Period(): IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
}

/*********************************************
* TimeSheetCollections
**********************************************/
export interface TimeSheetCollections extends TimeSheetPropMethods {
	Lines(): IBaseCollection<PS.TimeSheetLine, PS.TimeSheetLineQuery> & PS.TimeSheetLineCollectionMethods;
	Lines(id: string | number): IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineQuery> & PS.TimeSheetLineCollections & PS.TimeSheetLineMethods;
}

/*********************************************
* TimeSheetQuery
**********************************************/
export interface TimeSheetQuery extends TimeSheetProps, TimeSheetMethods {
	Creator: SP.User & SP.UserCollections;
	Lines: IBaseResults<PS.TimeSheetLine>;
	Manager: SP.User & SP.UserCollections;
	Period: PS.TimeSheetPeriod & PS.TimeSheetPeriodCollections;
}

/*********************************************
* TimeSheetMethods
**********************************************/
export interface TimeSheetMethods {
	delete(): IBaseExecution<any>;
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
export interface ITimeSheetLineQuery extends TimeSheetLineQuery, TimeSheetLineMethods {

}

/*********************************************
* TimeSheetLine
**********************************************/
export interface TimeSheetLine extends TimeSheetLineProps, TimeSheetLineCollections, TimeSheetLineMethods {

}

/*********************************************
* TimeSheetLineProps
**********************************************/
export interface TimeSheetLineProps {
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
* TimeSheetLinePropMethods
**********************************************/
export interface TimeSheetLinePropMethods {
	Assignment(): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
	TimeSheet(): IBaseQuery<PS.TimeSheet, PS.TimeSheetQuery> & PS.TimeSheetCollections & PS.TimeSheetMethods;
}

/*********************************************
* TimeSheetLineCollections
**********************************************/
export interface TimeSheetLineCollections extends TimeSheetLinePropMethods {
	Work(): IBaseCollection<PS.TimeSheetWork> & PS.TimeSheetWorkCollectionMethods;
	Work(id: string | number): IBaseQuery<PS.TimeSheetWork> & PS.TimeSheetWorkCollections & PS.TimeSheetWorkMethods;
}

/*********************************************
* TimeSheetLineCollectionMethods
**********************************************/
export interface TimeSheetLineCollectionMethods {
	add(parameters?: PS.TimeSheetLineCreationInformation): IBaseExecution<PS.TimeSheetLine>;
	getByGuid(uid?: any): IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineQuery> & PS.TimeSheetLineCollections;
	getById(objectId?: string): IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineQuery> & PS.TimeSheetLineCollections;
}

/*********************************************
* TimeSheetLineQuery
**********************************************/
export interface TimeSheetLineQuery extends TimeSheetLineProps, TimeSheetLineMethods {
	Assignment: PS.PublishedAssignment & PS.PublishedAssignmentCollections;
	TimeSheet: PS.TimeSheet & PS.TimeSheetCollections;
	Work: IBaseResults<PS.TimeSheetWork>;
}

/*********************************************
* TimeSheetLineMethods
**********************************************/
export interface TimeSheetLineMethods {
	delete(): IBaseExecution<any>;
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
export interface ITimeSheetWorkQuery extends TimeSheetWorkQuery, TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWork
**********************************************/
export interface TimeSheetWork extends TimeSheetWorkProps, TimeSheetWorkCollections, TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWorkProps
**********************************************/
export interface TimeSheetWorkProps {
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
* TimeSheetWorkPropMethods
**********************************************/
export interface TimeSheetWorkPropMethods {

}

/*********************************************
* TimeSheetWorkCollections
**********************************************/
export interface TimeSheetWorkCollections extends TimeSheetWorkPropMethods {

}

/*********************************************
* TimeSheetWorkCollectionMethods
**********************************************/
export interface TimeSheetWorkCollectionMethods {
	add(parameters?: PS.TimeSheetWorkCreationInformation): IBaseExecution<PS.TimeSheetWork>;
	getById(objectId?: string): IBaseQuery<PS.TimeSheetWork>;
	getByStartDate(start?: any): IBaseQuery<PS.TimeSheetWork>;
}

/*********************************************
* TimeSheetWorkQuery
**********************************************/
export interface TimeSheetWorkQuery extends TimeSheetWorkProps, TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWorkMethods
**********************************************/
export interface TimeSheetWorkMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IWorkflowActivities
**********************************************/
export interface IWorkflowActivities extends WorkflowActivitiesCollections,WorkflowActivitiesMethods,IBaseQuery<IWorkflowActivitiesQuery> {

}

/*********************************************
* IWorkflowActivitiesQuery
**********************************************/
export interface IWorkflowActivitiesQuery extends WorkflowActivitiesQuery, WorkflowActivitiesMethods {

}

/*********************************************
* WorkflowActivities
**********************************************/
export interface WorkflowActivities extends WorkflowActivitiesProps, WorkflowActivitiesCollections, WorkflowActivitiesMethods {

}

/*********************************************
* WorkflowActivitiesProps
**********************************************/
export interface WorkflowActivitiesProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowActivitiesPropMethods
**********************************************/
export interface WorkflowActivitiesPropMethods {

}

/*********************************************
* WorkflowActivitiesCollections
**********************************************/
export interface WorkflowActivitiesCollections extends WorkflowActivitiesPropMethods {

}

/*********************************************
* WorkflowActivitiesQuery
**********************************************/
export interface WorkflowActivitiesQuery extends WorkflowActivitiesProps, WorkflowActivitiesMethods {

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
export interface IWorkflowDesignerQuery extends WorkflowDesignerQuery, WorkflowDesignerMethods {

}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner extends WorkflowDesignerProps, WorkflowDesignerCollections, WorkflowDesignerMethods {

}

/*********************************************
* WorkflowDesignerProps
**********************************************/
export interface WorkflowDesignerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerPropMethods
**********************************************/
export interface WorkflowDesignerPropMethods {

}

/*********************************************
* WorkflowDesignerCollections
**********************************************/
export interface WorkflowDesignerCollections extends WorkflowDesignerPropMethods {
	Fields(): IBaseCollection<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldQuery> & PS.WorkflowDesignerFieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldQuery> & PS.WorkflowDesignerFieldCollections;
}

/*********************************************
* WorkflowDesignerQuery
**********************************************/
export interface WorkflowDesignerQuery extends WorkflowDesignerProps, WorkflowDesignerMethods {
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
export interface IWorkflowDesignerFieldQuery extends WorkflowDesignerFieldQuery, WorkflowDesignerFieldMethods {

}

/*********************************************
* WorkflowDesignerField
**********************************************/
export interface WorkflowDesignerField extends WorkflowDesignerFieldProps, WorkflowDesignerFieldCollections, WorkflowDesignerFieldMethods {

}

/*********************************************
* WorkflowDesignerFieldProps
**********************************************/
export interface WorkflowDesignerFieldProps {
	DisplayName?: string;
	Id?: string;
	IsLookupField?: boolean;
	IsReadOnly?: boolean;
	SPFieldType?: number;
}

/*********************************************
* WorkflowDesignerFieldPropMethods
**********************************************/
export interface WorkflowDesignerFieldPropMethods {

}

/*********************************************
* WorkflowDesignerFieldCollections
**********************************************/
export interface WorkflowDesignerFieldCollections extends WorkflowDesignerFieldPropMethods {
	LookupEntries(): IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupEntries(id: string | number): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* WorkflowDesignerFieldCollectionMethods
**********************************************/
export interface WorkflowDesignerFieldCollectionMethods {
	getById(objectId?: string): IBaseQuery<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldQuery> & PS.WorkflowDesignerFieldCollections;
}

/*********************************************
* WorkflowDesignerFieldQuery
**********************************************/
export interface WorkflowDesignerFieldQuery extends WorkflowDesignerFieldProps, WorkflowDesignerFieldMethods {
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
export interface IResourceCalendarExceptionQuery extends ResourceCalendarExceptionQuery, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException, ResourceCalendarExceptionProps, ResourceCalendarExceptionCollections, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarExceptionProps
**********************************************/
export interface ResourceCalendarExceptionProps {

}

/*********************************************
* ResourceCalendarExceptionPropMethods
**********************************************/
export interface ResourceCalendarExceptionPropMethods {

}

/*********************************************
* ResourceCalendarExceptionCollections
**********************************************/
export interface ResourceCalendarExceptionCollections extends ResourceCalendarExceptionPropMethods {

}

/*********************************************
* ResourceCalendarExceptionQuery
**********************************************/
export interface ResourceCalendarExceptionQuery extends ResourceCalendarExceptionProps, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarExceptionMethods
**********************************************/
export interface ResourceCalendarExceptionMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ResourceEngagementComment
**********************************************/
export interface ResourceEngagementComment {

}

/*********************************************
* ResourceEngagementCommentCollections
**********************************************/
export interface ResourceEngagementCommentCollections {

}

/*********************************************
* ResourceEngagementTimephasedPeriod
**********************************************/
export interface ResourceEngagementTimephasedPeriod {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollections
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollections extends ResourceEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl(start?: string): IBaseQuery<PS.ResourceEngagementTimephasedPeriod>;
}

/*********************************************
* IResourcePlan
**********************************************/
export interface IResourcePlan extends ResourcePlanCollections,ResourcePlanMethods,IBaseQuery<IResourcePlanQuery> {

}

/*********************************************
* IResourcePlanQuery
**********************************************/
export interface IResourcePlanQuery extends ResourcePlanQuery, ResourcePlanMethods {

}

/*********************************************
* ResourcePlan
**********************************************/
export interface ResourcePlan extends ResourcePlanProps, ResourcePlanCollections, ResourcePlanMethods {

}

/*********************************************
* ResourcePlanProps
**********************************************/
export interface ResourcePlanProps {
	Finish?: any;
	Id?: any;
	Start?: any;
	UtilizationDate?: any;
	UtilizationType?: number;
}

/*********************************************
* ResourcePlanPropMethods
**********************************************/
export interface ResourcePlanPropMethods {

}

/*********************************************
* ResourcePlanCollections
**********************************************/
export interface ResourcePlanCollections extends ResourcePlanPropMethods {
	Assignments(): IBaseCollection<PS.PlanAssignment, PS.PlanAssignmentQuery> & PS.PlanAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentQuery> & PS.PlanAssignmentCollections & PS.PlanAssignmentMethods;
}

/*********************************************
* ResourcePlanQuery
**********************************************/
export interface ResourcePlanQuery extends ResourcePlanProps, ResourcePlanMethods {
	Assignments: IBaseResults<PS.PlanAssignment>;
}

/*********************************************
* ResourcePlanMethods
**********************************************/
export interface ResourcePlanMethods {
	delete(): IBaseExecution<PS.QueueJob>;
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
export interface IServiceStatusQuery extends ServiceStatusQuery, ServiceStatusMethods {

}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus extends ServiceStatusProps, ServiceStatusCollections, ServiceStatusMethods {

}

/*********************************************
* ServiceStatusProps
**********************************************/
export interface ServiceStatusProps {
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
}

/*********************************************
* ServiceStatusPropMethods
**********************************************/
export interface ServiceStatusPropMethods {

}

/*********************************************
* ServiceStatusCollections
**********************************************/
export interface ServiceStatusCollections extends ServiceStatusPropMethods {

}

/*********************************************
* ServiceStatusQuery
**********************************************/
export interface ServiceStatusQuery extends ServiceStatusProps, ServiceStatusMethods {

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
export interface ITimePhaseQuery extends TimePhaseQuery, TimePhaseMethods {

}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase extends TimePhaseProps, TimePhaseCollections, TimePhaseMethods {

}

/*********************************************
* TimePhaseProps
**********************************************/
export interface TimePhaseProps {
	End?: any;
	Start?: any;
}

/*********************************************
* TimePhasePropMethods
**********************************************/
export interface TimePhasePropMethods {

}

/*********************************************
* TimePhaseCollections
**********************************************/
export interface TimePhaseCollections extends TimePhasePropMethods {
	Assignments(): IBaseCollection<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
}

/*********************************************
* TimePhaseQuery
**********************************************/
export interface TimePhaseQuery extends TimePhaseProps, TimePhaseMethods {
	Assignments: IBaseResults<PS.StatusAssignment>;
}

/*********************************************
* TimePhaseMethods
**********************************************/
export interface TimePhaseMethods {

}
