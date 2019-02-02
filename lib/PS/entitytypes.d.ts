import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../";
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
export interface IAssignment extends AssignmentCollections, AssignmentMethods, IBaseQuery<IAssignmentQuery> {

}

/*********************************************
* IAssignmentCollection
**********************************************/
export interface IAssignmentCollection extends IBaseResults<Assignment> {
	done?: (resolve: (value?: Array<Assignment>) => void) => void;
}

/*********************************************
* IAssignmentQueryCollection
**********************************************/
export interface IAssignmentQueryCollection extends IBaseResults<AssignmentQuery> {
	done?: (resolve: (value?: Array<AssignmentQuery>) => void) => void;
}

/*********************************************
* IAssignmentQuery
**********************************************/
export interface IAssignmentQuery extends AssignmentQuery, AssignmentMethods {

}

/*********************************************
* Assignment
**********************************************/
export interface Assignment extends IBaseResult, AssignmentProps, AssignmentCollections, AssignmentMethods {

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
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* AssignmentQuery
**********************************************/
export interface AssignmentQuery extends IBaseResult, AssignmentProps, AssignmentMethods {
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
}

/*********************************************
* AssignmentMethods
**********************************************/
export interface AssignmentMethods {

}

/*********************************************
* ICustomField
**********************************************/
export interface ICustomField extends CustomFieldCollections, CustomFieldMethods, IBaseQuery<ICustomFieldQuery> {

}

/*********************************************
* ICustomFieldCollection
**********************************************/
export interface ICustomFieldCollection extends IBaseResults<CustomField>, CustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<CustomField>) => void) => void;
}

/*********************************************
* ICustomFieldQueryCollection
**********************************************/
export interface ICustomFieldQueryCollection extends IBaseResults<CustomFieldQuery>, CustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<CustomFieldQuery>) => void) => void;
}

/*********************************************
* ICustomFieldQuery
**********************************************/
export interface ICustomFieldQuery extends CustomFieldQuery, CustomFieldMethods {

}

/*********************************************
* CustomField
**********************************************/
export interface CustomField extends IBaseResult, CustomFieldProps, CustomFieldCollections, CustomFieldMethods {

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
	EntityType(): IBaseExecution<PS.EntityType> & PS.EntityTypeCollections;
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
	getByAppAlternateId(objectId?: string): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	getByGuid(uid?: any): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	getById(objectId?: string): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* CustomFieldQuery
**********************************************/
export interface CustomFieldQuery extends IBaseResult, CustomFieldProps, CustomFieldMethods {
	EntityType: PS.EntityType & PS.EntityTypeCollections;
	LookupEntries: IBaseResults<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupTable: PS.LookupTable & PS.LookupTableCollections & PS.LookupTableCollectionMethods;
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
export interface ILookupEntry extends LookupEntryCollections, LookupEntryMethods, IBaseQuery<ILookupEntryQuery> {

}

/*********************************************
* ILookupEntryCollection
**********************************************/
export interface ILookupEntryCollection extends IBaseResults<LookupEntry>, LookupEntryCollectionMethods {
	done?: (resolve: (value?: Array<LookupEntry>) => void) => void;
}

/*********************************************
* ILookupEntryQueryCollection
**********************************************/
export interface ILookupEntryQueryCollection extends IBaseResults<LookupEntryQuery>, LookupEntryCollectionMethods {
	done?: (resolve: (value?: Array<LookupEntryQuery>) => void) => void;
}

/*********************************************
* ILookupEntryQuery
**********************************************/
export interface ILookupEntryQuery extends LookupEntryQuery, LookupEntryMethods {

}

/*********************************************
* LookupEntry
**********************************************/
export interface LookupEntry extends IBaseResult, LookupEntryProps, LookupEntryCollections, LookupEntryMethods {

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
	getByAppAlternateId(objectId?: string): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
	getByGuid(uid?: any): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
	getById(objectId?: string): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* LookupEntryQuery
**********************************************/
export interface LookupEntryQuery extends IBaseResult, LookupEntryProps, LookupEntryMethods {

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
export interface ILookupTable extends LookupTableCollections, LookupTableMethods, IBaseQuery<ILookupTableQuery> {

}

/*********************************************
* ILookupTableCollection
**********************************************/
export interface ILookupTableCollection extends IBaseResults<LookupTable>, LookupTableCollectionMethods {
	done?: (resolve: (value?: Array<LookupTable>) => void) => void;
}

/*********************************************
* ILookupTableQueryCollection
**********************************************/
export interface ILookupTableQueryCollection extends IBaseResults<LookupTableQuery>, LookupTableCollectionMethods {
	done?: (resolve: (value?: Array<LookupTableQuery>) => void) => void;
}

/*********************************************
* ILookupTableQuery
**********************************************/
export interface ILookupTableQuery extends LookupTableQuery, LookupTableMethods {

}

/*********************************************
* LookupTable
**********************************************/
export interface LookupTable extends IBaseResult, LookupTableProps, LookupTableCollections, LookupTableMethods {

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
	getByAppAlternateId(objectId?: string): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections & PS.LookupTableMethods;
	getByGuid(uid?: any): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections & PS.LookupTableMethods;
	getById(objectId?: string): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections & PS.LookupTableMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* LookupTableQuery
**********************************************/
export interface LookupTableQuery extends IBaseResult, LookupTableProps, LookupTableMethods {
	Entries: IBaseResults<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
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
export interface ICalendarException extends CalendarExceptionCollections, CalendarExceptionMethods, IBaseQuery<ICalendarExceptionQuery> {

}

/*********************************************
* ICalendarExceptionCollection
**********************************************/
export interface ICalendarExceptionCollection extends IBaseResults<CalendarException>, CalendarExceptionCollectionMethods {
	done?: (resolve: (value?: Array<CalendarException>) => void) => void;
}

/*********************************************
* ICalendarExceptionQueryCollection
**********************************************/
export interface ICalendarExceptionQueryCollection extends IBaseResults<CalendarExceptionQuery>, CalendarExceptionCollectionMethods {
	done?: (resolve: (value?: Array<CalendarExceptionQuery>) => void) => void;
}

/*********************************************
* ICalendarExceptionQuery
**********************************************/
export interface ICalendarExceptionQuery extends CalendarExceptionQuery, CalendarExceptionMethods {

}

/*********************************************
* CalendarException
**********************************************/
export interface CalendarException extends IBaseResult, CalendarExceptionProps, CalendarExceptionCollections, CalendarExceptionMethods {

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
	getById(id?: number): IBaseQuery<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* CalendarExceptionQuery
**********************************************/
export interface CalendarExceptionQuery extends IBaseResult, CalendarExceptionProps, CalendarExceptionMethods {
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
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
export interface ICalendar extends CalendarCollections, CalendarMethods, IBaseQuery<ICalendarQuery> {

}

/*********************************************
* ICalendarCollection
**********************************************/
export interface ICalendarCollection extends IBaseResults<Calendar>, CalendarCollectionMethods {
	done?: (resolve: (value?: Array<Calendar>) => void) => void;
}

/*********************************************
* ICalendarQueryCollection
**********************************************/
export interface ICalendarQueryCollection extends IBaseResults<CalendarQuery>, CalendarCollectionMethods {
	done?: (resolve: (value?: Array<CalendarQuery>) => void) => void;
}

/*********************************************
* ICalendarQuery
**********************************************/
export interface ICalendarQuery extends CalendarQuery, CalendarMethods {

}

/*********************************************
* Calendar
**********************************************/
export interface Calendar extends IBaseResult, CalendarProps, CalendarCollections, CalendarMethods {

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
	BaseCalendarExceptions(): IBaseCollection<PS.CalendarException, PS.CalendarExceptionQuery, IBaseExecution & PS.CalendarExceptionCollectionMethods> & IBaseExecution & PS.CalendarExceptionCollectionMethods;
	BaseCalendarExceptions(id: string | number): IBaseQuery<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* CalendarCollectionMethods
**********************************************/
export interface CalendarCollectionMethods {
	add(parameters?: PS.CalendarCreationInformation): IBaseExecution<PS.Calendar>;
	getByGuid(uid?: any): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	getById(objectId?: string): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* CalendarQuery
**********************************************/
export interface CalendarQuery extends IBaseResult, CalendarProps, CalendarMethods {
	BaseCalendarExceptions: IBaseResults<PS.CalendarException> & PS.CalendarExceptionCollectionMethods;
}

/*********************************************
* CalendarMethods
**********************************************/
export interface CalendarMethods {
	copyTo(name?: string): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	delete(): IBaseExecution<any>;
}

/*********************************************
* IBaseCalendarException
**********************************************/
export interface IBaseCalendarException extends BaseCalendarExceptionCollections, BaseCalendarExceptionMethods, IBaseQuery<IBaseCalendarExceptionQuery> {

}

/*********************************************
* IBaseCalendarExceptionCollection
**********************************************/
export interface IBaseCalendarExceptionCollection extends IBaseResults<BaseCalendarException> {
	done?: (resolve: (value?: Array<BaseCalendarException>) => void) => void;
}

/*********************************************
* IBaseCalendarExceptionQueryCollection
**********************************************/
export interface IBaseCalendarExceptionQueryCollection extends IBaseResults<BaseCalendarExceptionQuery> {
	done?: (resolve: (value?: Array<BaseCalendarExceptionQuery>) => void) => void;
}

/*********************************************
* IBaseCalendarExceptionQuery
**********************************************/
export interface IBaseCalendarExceptionQuery extends BaseCalendarExceptionQuery, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException, IBaseResult, BaseCalendarExceptionProps, BaseCalendarExceptionCollections, BaseCalendarExceptionMethods {

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
export interface BaseCalendarExceptionQuery extends IBaseResult, BaseCalendarExceptionProps, BaseCalendarExceptionMethods {

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
export interface IDraftAssignment extends DraftAssignmentCollections, DraftAssignmentMethods, IBaseQuery<IDraftAssignmentQuery> {

}

/*********************************************
* IDraftAssignmentCollection
**********************************************/
export interface IDraftAssignmentCollection extends IBaseResults<DraftAssignment>, DraftAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<DraftAssignment>) => void) => void;
}

/*********************************************
* IDraftAssignmentQueryCollection
**********************************************/
export interface IDraftAssignmentQueryCollection extends IBaseResults<DraftAssignmentQuery>, DraftAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<DraftAssignmentQuery>) => void) => void;
}

/*********************************************
* IDraftAssignmentQuery
**********************************************/
export interface IDraftAssignmentQuery extends DraftAssignmentQuery, DraftAssignmentMethods {

}

/*********************************************
* DraftAssignment
**********************************************/
export interface DraftAssignment extends PS.Assignment, IBaseResult, DraftAssignmentProps, DraftAssignmentCollections, DraftAssignmentMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
	getById(objectId?: string): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
}

/*********************************************
* DraftAssignmentQuery
**********************************************/
export interface DraftAssignmentQuery extends IBaseResult, DraftAssignmentProps, DraftAssignmentMethods {
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Parent: PS.DraftAssignment & PS.DraftAssignmentCollections & PS.DraftAssignmentCollectionMethods;
	Resource: PS.DraftProjectResource & PS.DraftProjectResourceCollections & PS.DraftProjectResourceCollectionMethods;
	Task: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
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
export interface IProjectResource extends ProjectResourceCollections, ProjectResourceMethods, IBaseQuery<IProjectResourceQuery> {

}

/*********************************************
* IProjectResourceCollection
**********************************************/
export interface IProjectResourceCollection extends IBaseResults<ProjectResource> {
	done?: (resolve: (value?: Array<ProjectResource>) => void) => void;
}

/*********************************************
* IProjectResourceQueryCollection
**********************************************/
export interface IProjectResourceQueryCollection extends IBaseResults<ProjectResourceQuery> {
	done?: (resolve: (value?: Array<ProjectResourceQuery>) => void) => void;
}

/*********************************************
* IProjectResourceQuery
**********************************************/
export interface IProjectResourceQuery extends ProjectResourceQuery, ProjectResourceMethods {

}

/*********************************************
* ProjectResource
**********************************************/
export interface ProjectResource extends IBaseResult, ProjectResourceProps, ProjectResourceCollections, ProjectResourceMethods {

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
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* ProjectResourceQuery
**********************************************/
export interface ProjectResourceQuery extends IBaseResult, ProjectResourceProps, ProjectResourceMethods {
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	EnterpriseResource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
}

/*********************************************
* ProjectResourceMethods
**********************************************/
export interface ProjectResourceMethods {

}

/*********************************************
* IEnterpriseResource
**********************************************/
export interface IEnterpriseResource extends EnterpriseResourceCollections, EnterpriseResourceMethods, IBaseQuery<IEnterpriseResourceQuery> {

}

/*********************************************
* IEnterpriseResourceCollection
**********************************************/
export interface IEnterpriseResourceCollection extends IBaseResults<EnterpriseResource>, EnterpriseResourceCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResource>) => void) => void;
}

/*********************************************
* IEnterpriseResourceQueryCollection
**********************************************/
export interface IEnterpriseResourceQueryCollection extends IBaseResults<EnterpriseResourceQuery>, EnterpriseResourceCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResourceQuery>) => void) => void;
}

/*********************************************
* IEnterpriseResourceQuery
**********************************************/
export interface IEnterpriseResourceQuery extends EnterpriseResourceQuery, EnterpriseResourceMethods {

}

/*********************************************
* EnterpriseResource
**********************************************/
export interface EnterpriseResource extends IBaseResult, EnterpriseResourceProps, EnterpriseResourceCollections, EnterpriseResourceMethods {

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
	Assignments(): IBaseCollection<PS.StatusAssignment, PS.StatusAssignmentQuery, IBaseExecution & PS.StatusAssignmentCollectionMethods> & IBaseExecution & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
	CostRateTables(): IBaseCollection<PS.EnterpriseResourceCostRateTable, PS.EnterpriseResourceCostRateTableQuery>;
	CostRateTables(id: string | number): IBaseQuery<PS.EnterpriseResourceCostRateTable, PS.EnterpriseResourceCostRateTableQuery> & PS.EnterpriseResourceCostRateTableCollections;
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Engagements(): IBaseCollection<PS.ResourceEngagement> & PS.ResourceEngagementCollectionMethods;
	Engagements(id: string | number): IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections & PS.ResourceEngagementMethods;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
	ResourceCalendarExceptions(): IBaseCollection<PS.CalendarException, PS.CalendarExceptionQuery, IBaseExecution & PS.CalendarExceptionCollectionMethods> & IBaseExecution & PS.CalendarExceptionCollectionMethods;
	ResourceCalendarExceptions(id: string | number): IBaseQuery<PS.CalendarException, PS.CalendarExceptionQuery> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* EnterpriseResourceCollectionMethods
**********************************************/
export interface EnterpriseResourceCollectionMethods {
	add(parameters?: PS.EnterpriseResourceCreationInformation): IBaseExecution<PS.EnterpriseResource>;
	getByGuid(uid?: any): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	getById(objectId?: string): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* EnterpriseResourceQuery
**********************************************/
export interface EnterpriseResourceQuery extends IBaseResult, EnterpriseResourceProps, EnterpriseResourceMethods {
	Assignments: IBaseResults<PS.StatusAssignment> & PS.StatusAssignmentCollectionMethods;
	BaseCalendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	CostRateTables: IBaseResults<PS.EnterpriseResourceCostRateTable>;
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	DefaultAssignmentOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Engagements: IBaseResults<PS.ResourceEngagement> & PS.ResourceEngagementCollectionMethods;
	UserPermissions: IBaseResults<PS.UserPermission>;
	ResourceCalendarExceptions: IBaseResults<PS.CalendarException> & PS.CalendarExceptionCollectionMethods;
	Self: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
	TimesheetManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	User: SP.User & SP.UserCollections & SP.UserCollectionMethods;
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
export interface IStatusAssignment extends StatusAssignmentCollections, StatusAssignmentMethods, IBaseQuery<IStatusAssignmentQuery> {

}

/*********************************************
* IStatusAssignmentCollection
**********************************************/
export interface IStatusAssignmentCollection extends IBaseResults<StatusAssignment>, StatusAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<StatusAssignment>) => void) => void;
}

/*********************************************
* IStatusAssignmentQueryCollection
**********************************************/
export interface IStatusAssignmentQueryCollection extends IBaseResults<StatusAssignmentQuery>, StatusAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<StatusAssignmentQuery>) => void) => void;
}

/*********************************************
* IStatusAssignmentQuery
**********************************************/
export interface IStatusAssignmentQuery extends StatusAssignmentQuery, StatusAssignmentMethods {

}

/*********************************************
* StatusAssignment
**********************************************/
export interface StatusAssignment extends IBaseResult, StatusAssignmentProps, StatusAssignmentCollections, StatusAssignmentMethods {

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
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	History(): IBaseCollection<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineQuery, IBaseExecution & PS.StatusAssignmentHistoryLineCollectionMethods> & IBaseExecution & PS.StatusAssignmentHistoryLineCollectionMethods;
	History(id: string | number): IBaseQuery<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineQuery> & PS.StatusAssignmentHistoryLineCollections;
}

/*********************************************
* StatusAssignmentCollectionMethods
**********************************************/
export interface StatusAssignmentCollectionMethods {
	add(parameters?: PS.StatusAssignmentCreationInformation): IBaseExecution<PS.StatusAssignment>;
	getByGuid(uid?: any): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
	getById(objectId?: string): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
	getTimePhaseByUrl(start?: string, end?: string): IBaseExecution<PS.TimePhase>;
	submitAllStatusUpdates(comment?: string): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* StatusAssignmentQuery
**********************************************/
export interface StatusAssignmentQuery extends IBaseResult, StatusAssignmentProps, StatusAssignmentMethods {
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	History: IBaseResults<PS.StatusAssignmentHistoryLine> & PS.StatusAssignmentHistoryLineCollectionMethods;
	Project: PS.PublishedProject & PS.PublishedProjectCollections & PS.PublishedProjectCollectionMethods;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
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
export interface StatusAssignmentHistoryLineQuery extends IBaseResult, StatusAssignmentHistoryLine {
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
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
export interface IProject extends ProjectCollections, ProjectMethods, IBaseQuery<IProjectQuery> {

}

/*********************************************
* IProjectCollection
**********************************************/
export interface IProjectCollection extends IBaseResults<Project> {
	done?: (resolve: (value?: Array<Project>) => void) => void;
}

/*********************************************
* IProjectQueryCollection
**********************************************/
export interface IProjectQueryCollection extends IBaseResults<ProjectQuery> {
	done?: (resolve: (value?: Array<ProjectQuery>) => void) => void;
}

/*********************************************
* IProjectQuery
**********************************************/
export interface IProjectQuery extends ProjectQuery, ProjectMethods {

}

/*********************************************
* Project
**********************************************/
export interface Project extends IBaseResult, ProjectProps, ProjectCollections, ProjectMethods {

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
	ProjectSummaryTask(): IBaseExecution<PS.ProjectSummaryTask> & PS.ProjectSummaryTaskCollections;
	Stage(): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* ProjectCollections
**********************************************/
export interface ProjectCollections extends ProjectPropMethods {
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Engagements(): IBaseCollection<PS.ProjectEngagement> & PS.ProjectEngagementCollectionMethods;
	Engagements(id: string | number): IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections & PS.ProjectEngagementMethods;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
	QueueJobs(): IBaseCollection<PS.QueueJob, PS.QueueJobQuery, IBaseExecution & PS.QueueJobCollectionMethods> & IBaseExecution & PS.QueueJobCollectionMethods;
	QueueJobs(id: string | number): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* ProjectQuery
**********************************************/
export interface ProjectQuery extends IBaseResult, ProjectProps, ProjectMethods {
	CheckedOutBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	Engagements: IBaseResults<PS.ProjectEngagement> & PS.ProjectEngagementCollectionMethods;
	EnterpriseProjectType: PS.EnterpriseProjectType & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeCollectionMethods;
	UserPermissions: IBaseResults<PS.UserPermission>;
	Phase: PS.Phase & PS.PhaseCollections & PS.PhaseCollectionMethods;
	ProjectSummaryTask: PS.ProjectSummaryTask & PS.ProjectSummaryTaskCollections;
	QueueJobs: IBaseResults<PS.QueueJob> & PS.QueueJobCollectionMethods;
	Stage: PS.Stage & PS.StageCollections & PS.StageCollectionMethods;
}

/*********************************************
* ProjectMethods
**********************************************/
export interface ProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): IBaseQuery<PS.ResourcePlan, PS.ResourcePlanQuery> & PS.ResourcePlanCollections & PS.ResourcePlanMethods;
	leaveProjectStage(): IBaseExecution<any>;
	readyToLeaveProjectStage(): IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): IBaseExecution<any>;
}

/*********************************************
* IEngagement
**********************************************/
export interface IEngagement extends EngagementCollections, EngagementMethods, IBaseQuery<IEngagementQuery> {

}

/*********************************************
* IEngagementCollection
**********************************************/
export interface IEngagementCollection extends IBaseResults<Engagement> {
	done?: (resolve: (value?: Array<Engagement>) => void) => void;
}

/*********************************************
* IEngagementQueryCollection
**********************************************/
export interface IEngagementQueryCollection extends IBaseResults<EngagementQuery> {
	done?: (resolve: (value?: Array<EngagementQuery>) => void) => void;
}

/*********************************************
* IEngagementQuery
**********************************************/
export interface IEngagementQuery extends EngagementQuery, EngagementMethods {

}

/*********************************************
* Engagement
**********************************************/
export interface Engagement extends IBaseResult, EngagementProps, EngagementCollections, EngagementMethods {

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
	Comments(): IBaseCollection<PS.EngagementComment, PS.EngagementCommentQuery, IBaseExecution & PS.EngagementCommentCollectionMethods> & IBaseExecution & PS.EngagementCommentCollectionMethods;
	Comments(id: string | number): IBaseQuery<PS.EngagementComment, PS.EngagementCommentQuery> & PS.EngagementCommentCollections;
}

/*********************************************
* EngagementQuery
**********************************************/
export interface EngagementQuery extends IBaseResult, EngagementProps, EngagementMethods {
	Comments: IBaseResults<PS.EngagementComment> & PS.EngagementCommentCollectionMethods;
	ModifiedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Project: PS.Project & PS.ProjectCollections;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
	ReviewedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	SubmittedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
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
export interface EngagementCommentQuery extends IBaseResult, EngagementComment {
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
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
export interface IProjectEngagement extends ProjectEngagementCollections, ProjectEngagementMethods, IBaseQuery<IProjectEngagementQuery> {

}

/*********************************************
* IProjectEngagementCollection
**********************************************/
export interface IProjectEngagementCollection extends IBaseResults<ProjectEngagement>, ProjectEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ProjectEngagement>) => void) => void;
}

/*********************************************
* IProjectEngagementQueryCollection
**********************************************/
export interface IProjectEngagementQueryCollection extends IBaseResults<ProjectEngagementQuery>, ProjectEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ProjectEngagementQuery>) => void) => void;
}

/*********************************************
* IProjectEngagementQuery
**********************************************/
export interface IProjectEngagementQuery extends ProjectEngagementQuery, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagement
**********************************************/
export interface ProjectEngagement extends PS.Engagement, IBaseResult, ProjectEngagementProps, ProjectEngagementCollections, ProjectEngagementMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections & PS.ProjectEngagementMethods;
	getById(objectId?: string): IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections & PS.ProjectEngagementMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* ProjectEngagementQuery
**********************************************/
export interface ProjectEngagementQuery extends IBaseResult, ProjectEngagementProps, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagementMethods
**********************************************/
export interface ProjectEngagementMethods {
	delete(): IBaseExecution<any>;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): IBaseCollection<PS.ProjectEngagementTimephasedPeriod> & PS.ProjectEngagementTimephasedPeriodCollectionMethods;
}

/*********************************************
* IEnterpriseProjectType
**********************************************/
export interface IEnterpriseProjectType extends EnterpriseProjectTypeCollections, EnterpriseProjectTypeMethods, IBaseQuery<IEnterpriseProjectTypeQuery> {

}

/*********************************************
* IEnterpriseProjectTypeCollection
**********************************************/
export interface IEnterpriseProjectTypeCollection extends IBaseResults<EnterpriseProjectType>, EnterpriseProjectTypeCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseProjectType>) => void) => void;
}

/*********************************************
* IEnterpriseProjectTypeQueryCollection
**********************************************/
export interface IEnterpriseProjectTypeQueryCollection extends IBaseResults<EnterpriseProjectTypeQuery>, EnterpriseProjectTypeCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseProjectTypeQuery>) => void) => void;
}

/*********************************************
* IEnterpriseProjectTypeQuery
**********************************************/
export interface IEnterpriseProjectTypeQuery extends EnterpriseProjectTypeQuery, EnterpriseProjectTypeMethods {

}

/*********************************************
* EnterpriseProjectType
**********************************************/
export interface EnterpriseProjectType extends IBaseResult, EnterpriseProjectTypeProps, EnterpriseProjectTypeCollections, EnterpriseProjectTypeMethods {

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
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage, PS.ProjectDetailPageQuery, IBaseExecution & PS.ProjectDetailPageCollectionMethods> & IBaseExecution & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
}

/*********************************************
* EnterpriseProjectTypeCollectionMethods
**********************************************/
export interface EnterpriseProjectTypeCollectionMethods {
	add(parameters?: PS.EnterpriseProjectTypeCreationInformation): IBaseExecution<PS.EnterpriseProjectType>;
	getByGuid(uid?: any): IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	getById(objectId?: string): IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* EnterpriseProjectTypeQuery
**********************************************/
export interface EnterpriseProjectTypeQuery extends IBaseResult, EnterpriseProjectTypeProps, EnterpriseProjectTypeMethods {
	ProjectDetailPages: IBaseResults<PS.ProjectDetailPage> & PS.ProjectDetailPageCollectionMethods;
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
export interface ProjectDetailPageQuery extends IBaseResult, ProjectDetailPage {
	Item: SP.ListItem & SP.ListItemCollections & SP.ListItemCollectionMethods;
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
export interface IPhase extends PhaseCollections, PhaseMethods, IBaseQuery<IPhaseQuery> {

}

/*********************************************
* IPhaseCollection
**********************************************/
export interface IPhaseCollection extends IBaseResults<Phase>, PhaseCollectionMethods {
	done?: (resolve: (value?: Array<Phase>) => void) => void;
}

/*********************************************
* IPhaseQueryCollection
**********************************************/
export interface IPhaseQueryCollection extends IBaseResults<PhaseQuery>, PhaseCollectionMethods {
	done?: (resolve: (value?: Array<PhaseQuery>) => void) => void;
}

/*********************************************
* IPhaseQuery
**********************************************/
export interface IPhaseQuery extends PhaseQuery, PhaseMethods {

}

/*********************************************
* Phase
**********************************************/
export interface Phase extends IBaseResult, PhaseProps, PhaseCollections, PhaseMethods {

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
	Stages(): IBaseCollection<PS.Stage, PS.StageQuery, IBaseExecution & PS.StageCollectionMethods> & IBaseExecution & PS.StageCollectionMethods;
	Stages(id: string | number): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* PhaseCollectionMethods
**********************************************/
export interface PhaseCollectionMethods {
	add(parameters?: PS.PhaseCreationInformation): IBaseExecution<PS.Phase>;
	getByGuid(uid?: any): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections & PS.PhaseMethods;
	getById(objectId?: string): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections & PS.PhaseMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* PhaseQuery
**********************************************/
export interface PhaseQuery extends IBaseResult, PhaseProps, PhaseMethods {
	Stages: IBaseResults<PS.Stage> & PS.StageCollectionMethods;
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
export interface IStage extends StageCollections, StageMethods, IBaseQuery<IStageQuery> {

}

/*********************************************
* IStageCollection
**********************************************/
export interface IStageCollection extends IBaseResults<Stage>, StageCollectionMethods {
	done?: (resolve: (value?: Array<Stage>) => void) => void;
}

/*********************************************
* IStageQueryCollection
**********************************************/
export interface IStageQueryCollection extends IBaseResults<StageQuery>, StageCollectionMethods {
	done?: (resolve: (value?: Array<StageQuery>) => void) => void;
}

/*********************************************
* IStageQuery
**********************************************/
export interface IStageQuery extends StageQuery, StageMethods {

}

/*********************************************
* Stage
**********************************************/
export interface Stage extends IBaseResult, StageProps, StageCollections, StageMethods {

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
	CustomFields(): IBaseCollection<PS.StageCustomField, PS.StageCustomFieldQuery, IBaseExecution & PS.StageCustomFieldCollectionMethods> & IBaseExecution & PS.StageCustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.StageCustomField, PS.StageCustomFieldQuery> & PS.StageCustomFieldCollections & PS.StageCustomFieldMethods;
	ProjectDetailPages(): IBaseCollection<PS.StageDetailPage, PS.StageDetailPageQuery, IBaseExecution & PS.StageDetailPageCollectionMethods> & IBaseExecution & PS.StageDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.StageDetailPage, PS.StageDetailPageQuery> & PS.StageDetailPageCollections & PS.StageDetailPageMethods;
}

/*********************************************
* StageCollectionMethods
**********************************************/
export interface StageCollectionMethods {
	add(parameters?: PS.StageCreationInformation): IBaseExecution<PS.Stage>;
	getByGuid(uid?: any): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
	getById(objectId?: string): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* StageQuery
**********************************************/
export interface StageQuery extends IBaseResult, StageProps, StageMethods {
	CustomFields: IBaseResults<PS.StageCustomField> & PS.StageCustomFieldCollectionMethods;
	Phase: PS.Phase & PS.PhaseCollections & PS.PhaseCollectionMethods;
	ProjectDetailPages: IBaseResults<PS.StageDetailPage> & PS.StageDetailPageCollectionMethods;
	WorkflowStatusPage: PS.ProjectDetailPage & PS.ProjectDetailPageCollections & PS.ProjectDetailPageCollectionMethods;
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
export interface IStageCustomField extends StageCustomFieldCollections, StageCustomFieldMethods, IBaseQuery<IStageCustomFieldQuery> {

}

/*********************************************
* IStageCustomFieldCollection
**********************************************/
export interface IStageCustomFieldCollection extends IBaseResults<StageCustomField>, StageCustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<StageCustomField>) => void) => void;
}

/*********************************************
* IStageCustomFieldQueryCollection
**********************************************/
export interface IStageCustomFieldQueryCollection extends IBaseResults<StageCustomFieldQuery>, StageCustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<StageCustomFieldQuery>) => void) => void;
}

/*********************************************
* IStageCustomFieldQuery
**********************************************/
export interface IStageCustomFieldQuery extends StageCustomFieldQuery, StageCustomFieldMethods {

}

/*********************************************
* StageCustomField
**********************************************/
export interface StageCustomField extends IBaseResult, StageCustomFieldProps, StageCustomFieldCollections, StageCustomFieldMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.StageCustomField, PS.StageCustomFieldQuery> & PS.StageCustomFieldCollections & PS.StageCustomFieldMethods;
	getById(objectId?: string): IBaseQuery<PS.StageCustomField, PS.StageCustomFieldQuery> & PS.StageCustomFieldCollections & PS.StageCustomFieldMethods;
}

/*********************************************
* StageCustomFieldQuery
**********************************************/
export interface StageCustomFieldQuery extends IBaseResult, StageCustomFieldProps, StageCustomFieldMethods {
	Stage: PS.Stage & PS.StageCollections & PS.StageCollectionMethods;
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
export interface IStageDetailPage extends StageDetailPageCollections, StageDetailPageMethods, IBaseQuery<IStageDetailPageQuery> {

}

/*********************************************
* IStageDetailPageCollection
**********************************************/
export interface IStageDetailPageCollection extends IBaseResults<StageDetailPage>, StageDetailPageCollectionMethods {
	done?: (resolve: (value?: Array<StageDetailPage>) => void) => void;
}

/*********************************************
* IStageDetailPageQueryCollection
**********************************************/
export interface IStageDetailPageQueryCollection extends IBaseResults<StageDetailPageQuery>, StageDetailPageCollectionMethods {
	done?: (resolve: (value?: Array<StageDetailPageQuery>) => void) => void;
}

/*********************************************
* IStageDetailPageQuery
**********************************************/
export interface IStageDetailPageQuery extends StageDetailPageQuery, StageDetailPageMethods {

}

/*********************************************
* StageDetailPage
**********************************************/
export interface StageDetailPage extends IBaseResult, StageDetailPageProps, StageDetailPageCollections, StageDetailPageMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.StageDetailPage, PS.StageDetailPageQuery> & PS.StageDetailPageCollections & PS.StageDetailPageMethods;
	getById(objectId?: string): IBaseQuery<PS.StageDetailPage, PS.StageDetailPageQuery> & PS.StageDetailPageCollections & PS.StageDetailPageMethods;
}

/*********************************************
* StageDetailPageQuery
**********************************************/
export interface StageDetailPageQuery extends IBaseResult, StageDetailPageProps, StageDetailPageMethods {
	Page: PS.ProjectDetailPage & PS.ProjectDetailPageCollections & PS.ProjectDetailPageCollectionMethods;
	Stage: PS.Stage & PS.StageCollections & PS.StageCollectionMethods;
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
export interface ITask extends TaskCollections, TaskMethods, IBaseQuery<ITaskQuery> {

}

/*********************************************
* ITaskCollection
**********************************************/
export interface ITaskCollection extends IBaseResults<Task> {
	done?: (resolve: (value?: Array<Task>) => void) => void;
}

/*********************************************
* ITaskQueryCollection
**********************************************/
export interface ITaskQueryCollection extends IBaseResults<TaskQuery> {
	done?: (resolve: (value?: Array<TaskQuery>) => void) => void;
}

/*********************************************
* ITaskQuery
**********************************************/
export interface ITaskQuery extends TaskQuery, TaskMethods {

}

/*********************************************
* Task
**********************************************/
export interface Task extends IBaseResult, TaskProps, TaskCollections, TaskMethods {

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
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery extends IBaseResult, TaskProps, TaskMethods {
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	SubProject: PS.PublishedProject & PS.PublishedProjectCollections & PS.PublishedProjectCollectionMethods;
}

/*********************************************
* TaskMethods
**********************************************/
export interface TaskMethods {

}

/*********************************************
* IPublishedProject
**********************************************/
export interface IPublishedProject extends PublishedProjectCollections, PublishedProjectMethods, IBaseQuery<IPublishedProjectQuery> {

}

/*********************************************
* IPublishedProjectCollection
**********************************************/
export interface IPublishedProjectCollection extends IBaseResults<PublishedProject>, PublishedProjectCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProject>) => void) => void;
}

/*********************************************
* IPublishedProjectQueryCollection
**********************************************/
export interface IPublishedProjectQueryCollection extends IBaseResults<PublishedProjectQuery>, PublishedProjectCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProjectQuery>) => void) => void;
}

/*********************************************
* IPublishedProjectQuery
**********************************************/
export interface IPublishedProjectQuery extends PublishedProjectQuery, PublishedProjectMethods {

}

/*********************************************
* PublishedProject
**********************************************/
export interface PublishedProject extends PS.Project, IBaseResult, PublishedProjectProps, PublishedProjectCollections, PublishedProjectMethods {

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
	Assignments(): IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentQuery, IBaseExecution & PS.PublishedAssignmentCollectionMethods> & IBaseExecution & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
	EntityLinks(): IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	ProjectResources(): IBaseCollection<PS.PublishedProjectResource, PS.PublishedProjectResourceQuery, IBaseExecution & PS.PublishedProjectResourceCollectionMethods> & IBaseExecution & PS.PublishedProjectResourceCollectionMethods;
	ProjectResources(id: string | number): IBaseQuery<PS.PublishedProjectResource, PS.PublishedProjectResourceQuery> & PS.PublishedProjectResourceCollections;
	TaskLinks(): IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery, IBaseExecution & PS.PublishedTaskLinkCollectionMethods> & IBaseExecution & PS.PublishedTaskLinkCollectionMethods;
	TaskLinks(id: string | number): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
	Tasks(): IBaseCollection<PS.PublishedTask, PS.PublishedTaskQuery, IBaseExecution & PS.PublishedTaskCollectionMethods> & IBaseExecution & PS.PublishedTaskCollectionMethods;
	Tasks(id: string | number): IBaseQuery<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
}

/*********************************************
* PublishedProjectCollectionMethods
**********************************************/
export interface PublishedProjectCollectionMethods {
	add(parameters?: PS.ProjectCreationInformation): IBaseExecution<PS.PublishedProject>;
	getByGuid(uid?: any): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	getById(objectId?: string): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	update(): IBaseExecution<PS.QueueJob>;
	validate(): IBaseExecution<any>;
}

/*********************************************
* PublishedProjectQuery
**********************************************/
export interface PublishedProjectQuery extends IBaseResult, PublishedProjectProps, PublishedProjectMethods {
	Assignments: IBaseResults<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	Draft: PS.DraftProject & PS.DraftProjectCollections;
	EntityLinks: IBaseResults<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	IncludeCustomFields: PS.PublishedProject & PS.PublishedProjectCollections & PS.PublishedProjectCollectionMethods;
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	ProjectResources: IBaseResults<PS.PublishedProjectResource> & PS.PublishedProjectResourceCollectionMethods;
	ProjectWorkflowInstance: PS.ProjectWorkflowInstance & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceCollectionMethods;
	TaskLinks: IBaseResults<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	Tasks: IBaseResults<PS.PublishedTask> & PS.PublishedTaskCollectionMethods;
}

/*********************************************
* PublishedProjectMethods
**********************************************/
export interface PublishedProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): IBaseQuery<PS.ResourcePlan, PS.ResourcePlanQuery> & PS.ResourcePlanCollections & PS.ResourcePlanMethods;
	leaveProjectStage(): IBaseExecution<any>;
	readyToLeaveProjectStage(): IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): IBaseExecution<any>;
	checkOut(): IBaseQuery<PS.DraftProject, PS.DraftProjectQuery> & PS.DraftProjectCollections & PS.DraftProjectMethods;
	createProjectSite(siteName?: string): IBaseExecution<any>;
	delete(): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	submitToWorkflow(): IBaseExecution<any>;
	updateVisibilityCustomFields(): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
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
export interface PublishedAssignmentQuery extends IBaseResult, PublishedAssignment {
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Parent: PS.PublishedAssignment & PS.PublishedAssignmentCollections & PS.PublishedAssignmentCollectionMethods;
	Resource: PS.PublishedProjectResource & PS.PublishedProjectResourceCollections & PS.PublishedProjectResourceCollectionMethods;
	Task: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
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
export interface IPublishedProjectResource extends PublishedProjectResourceCollections, PublishedProjectResourceMethods, IBaseQuery<IPublishedProjectResourceQuery> {

}

/*********************************************
* IPublishedProjectResourceCollection
**********************************************/
export interface IPublishedProjectResourceCollection extends IBaseResults<PublishedProjectResource>, PublishedProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProjectResource>) => void) => void;
}

/*********************************************
* IPublishedProjectResourceQueryCollection
**********************************************/
export interface IPublishedProjectResourceQueryCollection extends IBaseResults<PublishedProjectResourceQuery>, PublishedProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProjectResourceQuery>) => void) => void;
}

/*********************************************
* IPublishedProjectResourceQuery
**********************************************/
export interface IPublishedProjectResourceQuery extends PublishedProjectResourceQuery, PublishedProjectResourceMethods {

}

/*********************************************
* PublishedProjectResource
**********************************************/
export interface PublishedProjectResource extends PS.ProjectResource, IBaseResult, PublishedProjectResourceProps, PublishedProjectResourceCollections, PublishedProjectResourceMethods {

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
	Assignments(): IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentQuery, IBaseExecution & PS.PublishedAssignmentCollectionMethods> & IBaseExecution & PS.PublishedAssignmentCollectionMethods;
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
export interface PublishedProjectResourceQuery extends IBaseResult, PublishedProjectResourceProps, PublishedProjectResourceMethods {
	Assignments: IBaseResults<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	DefaultAssignmentOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* PublishedProjectResourceMethods
**********************************************/
export interface PublishedProjectResourceMethods {

}

/*********************************************
* IPublishedTask
**********************************************/
export interface IPublishedTask extends PublishedTaskCollections, PublishedTaskMethods, IBaseQuery<IPublishedTaskQuery> {

}

/*********************************************
* IPublishedTaskCollection
**********************************************/
export interface IPublishedTaskCollection extends IBaseResults<PublishedTask>, PublishedTaskCollectionMethods {
	done?: (resolve: (value?: Array<PublishedTask>) => void) => void;
}

/*********************************************
* IPublishedTaskQueryCollection
**********************************************/
export interface IPublishedTaskQueryCollection extends IBaseResults<PublishedTaskQuery>, PublishedTaskCollectionMethods {
	done?: (resolve: (value?: Array<PublishedTaskQuery>) => void) => void;
}

/*********************************************
* IPublishedTaskQuery
**********************************************/
export interface IPublishedTaskQuery extends PublishedTaskQuery, PublishedTaskMethods {

}

/*********************************************
* PublishedTask
**********************************************/
export interface PublishedTask extends PS.Task, IBaseResult, PublishedTaskProps, PublishedTaskCollections, PublishedTaskMethods {

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
	TaskPlanLink(): IBaseExecution<PS.TaskPlanLink> & PS.TaskPlanLinkCollections & PS.TaskPlanLinkMethods;
}

/*********************************************
* PublishedTaskCollections
**********************************************/
export interface PublishedTaskCollections extends PublishedTaskPropMethods {
	Assignments(): IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentQuery, IBaseExecution & PS.PublishedAssignmentCollectionMethods> & IBaseExecution & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentQuery> & PS.PublishedAssignmentCollections;
	EntityLinks(): IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	Predecessors(): IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery, IBaseExecution & PS.PublishedTaskLinkCollectionMethods> & IBaseExecution & PS.PublishedTaskLinkCollectionMethods;
	Predecessors(id: string | number): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
	Successors(): IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery, IBaseExecution & PS.PublishedTaskLinkCollectionMethods> & IBaseExecution & PS.PublishedTaskLinkCollectionMethods;
	Successors(id: string | number): IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkQuery> & PS.PublishedTaskLinkCollections;
}

/*********************************************
* PublishedTaskCollectionMethods
**********************************************/
export interface PublishedTaskCollectionMethods {
	getByGuid(uid?: any): IBaseQuery<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
	getById(objectId?: string): IBaseQuery<PS.PublishedTask, PS.PublishedTaskQuery> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
}

/*********************************************
* PublishedTaskQuery
**********************************************/
export interface PublishedTaskQuery extends IBaseResult, PublishedTaskProps, PublishedTaskMethods {
	Assignments: IBaseResults<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	EntityLinks: IBaseResults<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	Parent: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
	Predecessors: IBaseResults<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	StatusManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Successors: IBaseResults<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
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
export interface IEntityLink extends EntityLinkCollections, EntityLinkMethods, IBaseQuery<IEntityLinkQuery> {

}

/*********************************************
* IEntityLinkCollection
**********************************************/
export interface IEntityLinkCollection extends IBaseResults<EntityLink>, EntityLinkCollectionMethods {
	done?: (resolve: (value?: Array<EntityLink>) => void) => void;
}

/*********************************************
* IEntityLinkQueryCollection
**********************************************/
export interface IEntityLinkQueryCollection extends IBaseResults<EntityLinkQuery>, EntityLinkCollectionMethods {
	done?: (resolve: (value?: Array<EntityLinkQuery>) => void) => void;
}

/*********************************************
* IEntityLinkQuery
**********************************************/
export interface IEntityLinkQuery extends EntityLinkQuery, EntityLinkMethods {

}

/*********************************************
* EntityLink
**********************************************/
export interface EntityLink extends IBaseResult, EntityLinkProps, EntityLinkCollections, EntityLinkMethods {

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
	getByGuid(id?: any): IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* EntityLinkQuery
**********************************************/
export interface EntityLinkQuery extends IBaseResult, EntityLinkProps, EntityLinkMethods {

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
export interface PublishedTaskLinkQuery extends IBaseResult, PublishedTaskLink {
	End: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
	Start: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
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
export interface ITaskPlanLink extends TaskPlanLinkCollections, TaskPlanLinkMethods, IBaseQuery<ITaskPlanLinkQuery> {

}

/*********************************************
* ITaskPlanLinkCollection
**********************************************/
export interface ITaskPlanLinkCollection extends IBaseResults<TaskPlanLink> {
	done?: (resolve: (value?: Array<TaskPlanLink>) => void) => void;
}

/*********************************************
* ITaskPlanLinkQueryCollection
**********************************************/
export interface ITaskPlanLinkQueryCollection extends IBaseResults<TaskPlanLinkQuery> {
	done?: (resolve: (value?: Array<TaskPlanLinkQuery>) => void) => void;
}

/*********************************************
* ITaskPlanLinkQuery
**********************************************/
export interface ITaskPlanLinkQuery extends TaskPlanLinkQuery, TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLink
**********************************************/
export interface TaskPlanLink extends IBaseResult, TaskPlanLinkProps, TaskPlanLinkCollections, TaskPlanLinkMethods {

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
export interface TaskPlanLinkQuery extends IBaseResult, TaskPlanLinkProps, TaskPlanLinkMethods {

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
export interface IDraftProject extends DraftProjectCollections, DraftProjectMethods, IBaseQuery<IDraftProjectQuery> {

}

/*********************************************
* IDraftProjectCollection
**********************************************/
export interface IDraftProjectCollection extends IBaseResults<DraftProject> {
	done?: (resolve: (value?: Array<DraftProject>) => void) => void;
}

/*********************************************
* IDraftProjectQueryCollection
**********************************************/
export interface IDraftProjectQueryCollection extends IBaseResults<DraftProjectQuery> {
	done?: (resolve: (value?: Array<DraftProjectQuery>) => void) => void;
}

/*********************************************
* IDraftProjectQuery
**********************************************/
export interface IDraftProjectQuery extends DraftProjectQuery, DraftProjectMethods {

}

/*********************************************
* DraftProject
**********************************************/
export interface DraftProject extends PS.Project, IBaseResult, DraftProjectProps, DraftProjectCollections, DraftProjectMethods {

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
	Assignments(): IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentQuery, IBaseExecution & PS.DraftAssignmentCollectionMethods> & IBaseExecution & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
	ProjectResources(): IBaseCollection<PS.DraftProjectResource, PS.DraftProjectResourceQuery, IBaseExecution & PS.DraftProjectResourceCollectionMethods> & IBaseExecution & PS.DraftProjectResourceCollectionMethods;
	ProjectResources(id: string | number): IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollections & PS.DraftProjectResourceMethods;
	TaskLinks(): IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkQuery, IBaseExecution & PS.DraftTaskLinkCollectionMethods> & IBaseExecution & PS.DraftTaskLinkCollectionMethods;
	TaskLinks(id: string | number): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
	Tasks(): IBaseCollection<PS.DraftTask, PS.DraftTaskQuery, IBaseExecution & PS.DraftTaskCollectionMethods> & IBaseExecution & PS.DraftTaskCollectionMethods;
	Tasks(id: string | number): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
}

/*********************************************
* DraftProjectQuery
**********************************************/
export interface DraftProjectQuery extends IBaseResult, DraftProjectProps, DraftProjectMethods {
	Assignments: IBaseResults<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	IncludeCustomFields: PS.DraftProject & PS.DraftProjectCollections;
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	ProjectResources: IBaseResults<PS.DraftProjectResource> & PS.DraftProjectResourceCollectionMethods;
	TaskLinks: IBaseResults<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
	Tasks: IBaseResults<PS.DraftTask> & PS.DraftTaskCollectionMethods;
}

/*********************************************
* DraftProjectMethods
**********************************************/
export interface DraftProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): IBaseQuery<PS.ResourcePlan, PS.ResourcePlanQuery> & PS.ResourcePlanCollections & PS.ResourcePlanMethods;
	leaveProjectStage(): IBaseExecution<any>;
	readyToLeaveProjectStage(): IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): IBaseExecution<any>;
	changeEnterpriseProjectType(enterpriseProjectTypeUid?: any): IBaseExecution<any>;
	checkIn(force?: boolean): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	getChanges(token?: string): IBaseQuery<PS.DraftProject, PS.DraftProjectQuery> & PS.DraftProjectCollections & PS.DraftProjectMethods;
	publish(checkIn?: boolean): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	update(): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	updateCustomFields(customFieldDictionary?: Array<SP.KeyValue>): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	validate(): IBaseExecution<any>;
}

/*********************************************
* IDraftProjectResource
**********************************************/
export interface IDraftProjectResource extends DraftProjectResourceCollections, DraftProjectResourceMethods, IBaseQuery<IDraftProjectResourceQuery> {

}

/*********************************************
* IDraftProjectResourceCollection
**********************************************/
export interface IDraftProjectResourceCollection extends IBaseResults<DraftProjectResource>, DraftProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<DraftProjectResource>) => void) => void;
}

/*********************************************
* IDraftProjectResourceQueryCollection
**********************************************/
export interface IDraftProjectResourceQueryCollection extends IBaseResults<DraftProjectResourceQuery>, DraftProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<DraftProjectResourceQuery>) => void) => void;
}

/*********************************************
* IDraftProjectResourceQuery
**********************************************/
export interface IDraftProjectResourceQuery extends DraftProjectResourceQuery, DraftProjectResourceMethods {

}

/*********************************************
* DraftProjectResource
**********************************************/
export interface DraftProjectResource extends PS.ProjectResource, IBaseResult, DraftProjectResourceProps, DraftProjectResourceCollections, DraftProjectResourceMethods {

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
	Assignments(): IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentQuery, IBaseExecution & PS.DraftAssignmentCollectionMethods> & IBaseExecution & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
}

/*********************************************
* DraftProjectResourceCollectionMethods
**********************************************/
export interface DraftProjectResourceCollectionMethods {
	add(parameters?: PS.ProjectResourceCreationInformation): IBaseExecution<PS.DraftProjectResource>;
	addEnterpriseResourceById(resourceId?: any): IBaseExecution<PS.QueueJob>;
	getByGuid(uid?: any): IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollections & PS.DraftProjectResourceMethods;
	getById(objectId?: string): IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceQuery> & PS.DraftProjectResourceCollections & PS.DraftProjectResourceMethods;
}

/*********************************************
* DraftProjectResourceQuery
**********************************************/
export interface DraftProjectResourceQuery extends IBaseResult, DraftProjectResourceProps, DraftProjectResourceMethods {
	Assignments: IBaseResults<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	DefaultAssignmentOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
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
export interface IDraftTaskLink extends DraftTaskLinkCollections, DraftTaskLinkMethods, IBaseQuery<IDraftTaskLinkQuery> {

}

/*********************************************
* IDraftTaskLinkCollection
**********************************************/
export interface IDraftTaskLinkCollection extends IBaseResults<DraftTaskLink>, DraftTaskLinkCollectionMethods {
	done?: (resolve: (value?: Array<DraftTaskLink>) => void) => void;
}

/*********************************************
* IDraftTaskLinkQueryCollection
**********************************************/
export interface IDraftTaskLinkQueryCollection extends IBaseResults<DraftTaskLinkQuery>, DraftTaskLinkCollectionMethods {
	done?: (resolve: (value?: Array<DraftTaskLinkQuery>) => void) => void;
}

/*********************************************
* IDraftTaskLinkQuery
**********************************************/
export interface IDraftTaskLinkQuery extends DraftTaskLinkQuery, DraftTaskLinkMethods {

}

/*********************************************
* DraftTaskLink
**********************************************/
export interface DraftTaskLink extends PS.TaskLink, IBaseResult, DraftTaskLinkProps, DraftTaskLinkCollections, DraftTaskLinkMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
	getById(objectId?: string): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
}

/*********************************************
* DraftTaskLinkQuery
**********************************************/
export interface DraftTaskLinkQuery extends IBaseResult, DraftTaskLinkProps, DraftTaskLinkMethods {
	End: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
	Start: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
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
export interface IDraftTask extends DraftTaskCollections, DraftTaskMethods, IBaseQuery<IDraftTaskQuery> {

}

/*********************************************
* IDraftTaskCollection
**********************************************/
export interface IDraftTaskCollection extends IBaseResults<DraftTask>, DraftTaskCollectionMethods {
	done?: (resolve: (value?: Array<DraftTask>) => void) => void;
}

/*********************************************
* IDraftTaskQueryCollection
**********************************************/
export interface IDraftTaskQueryCollection extends IBaseResults<DraftTaskQuery>, DraftTaskCollectionMethods {
	done?: (resolve: (value?: Array<DraftTaskQuery>) => void) => void;
}

/*********************************************
* IDraftTaskQuery
**********************************************/
export interface IDraftTaskQuery extends DraftTaskQuery, DraftTaskMethods {

}

/*********************************************
* DraftTask
**********************************************/
export interface DraftTask extends PS.Task, IBaseResult, DraftTaskProps, DraftTaskCollections, DraftTaskMethods {

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
	Assignments(): IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentQuery, IBaseExecution & PS.DraftAssignmentCollectionMethods> & IBaseExecution & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentQuery> & PS.DraftAssignmentCollections & PS.DraftAssignmentMethods;
	Predecessors(): IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkQuery, IBaseExecution & PS.DraftTaskLinkCollectionMethods> & IBaseExecution & PS.DraftTaskLinkCollectionMethods;
	Predecessors(id: string | number): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
	Successors(): IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkQuery, IBaseExecution & PS.DraftTaskLinkCollectionMethods> & IBaseExecution & PS.DraftTaskLinkCollectionMethods;
	Successors(id: string | number): IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkQuery> & PS.DraftTaskLinkCollections & PS.DraftTaskLinkMethods;
}

/*********************************************
* DraftTaskCollectionMethods
**********************************************/
export interface DraftTaskCollectionMethods {
	add(parameters?: PS.TaskCreationInformation): IBaseExecution<PS.DraftTask>;
	getByGuid(uid?: any): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
	getById(objectId?: string): IBaseQuery<PS.DraftTask, PS.DraftTaskQuery> & PS.DraftTaskCollections & PS.DraftTaskMethods;
}

/*********************************************
* DraftTaskQuery
**********************************************/
export interface DraftTaskQuery extends IBaseResult, DraftTaskProps, DraftTaskMethods {
	Assignments: IBaseResults<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	Parent: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
	Predecessors: IBaseResults<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
	StatusManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Successors: IBaseResults<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
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
export interface IProjectWorkflowInstance extends ProjectWorkflowInstanceCollections, ProjectWorkflowInstanceMethods, IBaseQuery<IProjectWorkflowInstanceQuery> {

}

/*********************************************
* IProjectWorkflowInstanceCollection
**********************************************/
export interface IProjectWorkflowInstanceCollection extends IBaseResults<ProjectWorkflowInstance>, ProjectWorkflowInstanceCollectionMethods {
	done?: (resolve: (value?: Array<ProjectWorkflowInstance>) => void) => void;
}

/*********************************************
* IProjectWorkflowInstanceQueryCollection
**********************************************/
export interface IProjectWorkflowInstanceQueryCollection extends IBaseResults<ProjectWorkflowInstanceQuery>, ProjectWorkflowInstanceCollectionMethods {
	done?: (resolve: (value?: Array<ProjectWorkflowInstanceQuery>) => void) => void;
}

/*********************************************
* IProjectWorkflowInstanceQuery
**********************************************/
export interface IProjectWorkflowInstanceQuery extends ProjectWorkflowInstanceQuery, ProjectWorkflowInstanceMethods {

}

/*********************************************
* ProjectWorkflowInstance
**********************************************/
export interface ProjectWorkflowInstance extends IBaseResult, ProjectWorkflowInstanceProps, ProjectWorkflowInstanceCollections, ProjectWorkflowInstanceMethods {

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
	WorkflowInstance(): IBaseExecution<SP.WorkflowServices.WorkflowInstance> & SP.WorkflowServices.WorkflowInstanceCollections;
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
	getById(objectId?: string): IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceQuery> & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceMethods;
}

/*********************************************
* ProjectWorkflowInstanceQuery
**********************************************/
export interface ProjectWorkflowInstanceQuery extends IBaseResult, ProjectWorkflowInstanceProps, ProjectWorkflowInstanceMethods {
	Project: PS.Project & PS.ProjectCollections;
	WorkflowInstance: SP.WorkflowServices.WorkflowInstance & SP.WorkflowServices.WorkflowInstanceCollections;
	WorkflowInstanceOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
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
export interface IQueueJob extends QueueJobCollections, QueueJobMethods, IBaseQuery<IQueueJobQuery> {

}

/*********************************************
* IQueueJobCollection
**********************************************/
export interface IQueueJobCollection extends IBaseResults<QueueJob>, QueueJobCollectionMethods {
	done?: (resolve: (value?: Array<QueueJob>) => void) => void;
}

/*********************************************
* IQueueJobQueryCollection
**********************************************/
export interface IQueueJobQueryCollection extends IBaseResults<QueueJobQuery>, QueueJobCollectionMethods {
	done?: (resolve: (value?: Array<QueueJobQuery>) => void) => void;
}

/*********************************************
* IQueueJobQuery
**********************************************/
export interface IQueueJobQuery extends QueueJobQuery, QueueJobMethods {

}

/*********************************************
* QueueJob
**********************************************/
export interface QueueJob extends IBaseResult, QueueJobProps, QueueJobCollections, QueueJobMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	getById(objectId?: string): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* QueueJobQuery
**********************************************/
export interface QueueJobQuery extends IBaseResult, QueueJobProps, QueueJobMethods {
	Project: PS.Project & PS.ProjectCollections;
	Submitter: SP.User & SP.UserCollections & SP.UserCollectionMethods;
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
export interface IStatusTask extends StatusTaskCollections, StatusTaskMethods, IBaseQuery<IStatusTaskQuery> {

}

/*********************************************
* IStatusTaskCollection
**********************************************/
export interface IStatusTaskCollection extends IBaseResults<StatusTask> {
	done?: (resolve: (value?: Array<StatusTask>) => void) => void;
}

/*********************************************
* IStatusTaskQueryCollection
**********************************************/
export interface IStatusTaskQueryCollection extends IBaseResults<StatusTaskQuery> {
	done?: (resolve: (value?: Array<StatusTaskQuery>) => void) => void;
}

/*********************************************
* IStatusTaskQuery
**********************************************/
export interface IStatusTaskQuery extends StatusTaskQuery, StatusTaskMethods {

}

/*********************************************
* StatusTask
**********************************************/
export interface StatusTask extends IBaseResult, StatusTaskProps, StatusTaskCollections, StatusTaskMethods {

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
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* StatusTaskQuery
**********************************************/
export interface StatusTaskQuery extends IBaseResult, StatusTaskProps, StatusTaskMethods {
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	StatusManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* StatusTaskMethods
**********************************************/
export interface StatusTaskMethods {

}

/*********************************************
* IEnterpriseResourceCostRateTable
**********************************************/
export interface IEnterpriseResourceCostRateTable extends EnterpriseResourceCostRateTableCollections, EnterpriseResourceCostRateTableMethods, IBaseQuery<IEnterpriseResourceCostRateTableQuery> {

}

/*********************************************
* IEnterpriseResourceCostRateTableCollection
**********************************************/
export interface IEnterpriseResourceCostRateTableCollection extends IBaseResults<EnterpriseResourceCostRateTable> {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRateTable>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateTableQueryCollection
**********************************************/
export interface IEnterpriseResourceCostRateTableQueryCollection extends IBaseResults<EnterpriseResourceCostRateTableQuery> {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRateTableQuery>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateTableQuery
**********************************************/
export interface IEnterpriseResourceCostRateTableQuery extends EnterpriseResourceCostRateTableQuery, EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable extends IBaseResult, EnterpriseResourceCostRateTableProps, EnterpriseResourceCostRateTableCollections, EnterpriseResourceCostRateTableMethods {

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
export interface EnterpriseResourceCostRateTableQuery extends IBaseResult, EnterpriseResourceCostRateTableProps, EnterpriseResourceCostRateTableMethods {
	CostRates: IBaseResults<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollectionMethods;
}

/*********************************************
* EnterpriseResourceCostRateTableMethods
**********************************************/
export interface EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* IEnterpriseResourceCostRate
**********************************************/
export interface IEnterpriseResourceCostRate extends EnterpriseResourceCostRateCollections, EnterpriseResourceCostRateMethods, IBaseQuery<IEnterpriseResourceCostRateQuery> {

}

/*********************************************
* IEnterpriseResourceCostRateCollection
**********************************************/
export interface IEnterpriseResourceCostRateCollection extends IBaseResults<EnterpriseResourceCostRate>, EnterpriseResourceCostRateCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRate>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateQueryCollection
**********************************************/
export interface IEnterpriseResourceCostRateQueryCollection extends IBaseResults<EnterpriseResourceCostRateQuery>, EnterpriseResourceCostRateCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRateQuery>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateQuery
**********************************************/
export interface IEnterpriseResourceCostRateQuery extends EnterpriseResourceCostRateQuery, EnterpriseResourceCostRateMethods {

}

/*********************************************
* EnterpriseResourceCostRate
**********************************************/
export interface EnterpriseResourceCostRate extends IBaseResult, EnterpriseResourceCostRateProps, EnterpriseResourceCostRateCollections, EnterpriseResourceCostRateMethods {

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
	getByDateUrl(effectiveDate?: string): IBaseQuery<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollections & PS.EnterpriseResourceCostRateMethods;
}

/*********************************************
* EnterpriseResourceCostRateQuery
**********************************************/
export interface EnterpriseResourceCostRateQuery extends IBaseResult, EnterpriseResourceCostRateProps, EnterpriseResourceCostRateMethods {

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
export interface IResourceEngagement extends ResourceEngagementCollections, ResourceEngagementMethods, IBaseQuery<IResourceEngagementQuery> {

}

/*********************************************
* IResourceEngagementCollection
**********************************************/
export interface IResourceEngagementCollection extends IBaseResults<ResourceEngagement>, ResourceEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ResourceEngagement>) => void) => void;
}

/*********************************************
* IResourceEngagementQueryCollection
**********************************************/
export interface IResourceEngagementQueryCollection extends IBaseResults<ResourceEngagementQuery>, ResourceEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ResourceEngagementQuery>) => void) => void;
}

/*********************************************
* IResourceEngagementQuery
**********************************************/
export interface IResourceEngagementQuery extends ResourceEngagementQuery, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagement
**********************************************/
export interface ResourceEngagement extends PS.Engagement, IBaseResult, ResourceEngagementProps, ResourceEngagementCollections, ResourceEngagementMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections & PS.ResourceEngagementMethods;
	getById(objectId?: string): IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections & PS.ResourceEngagementMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* ResourceEngagementQuery
**********************************************/
export interface ResourceEngagementQuery extends IBaseResult, ResourceEngagementProps, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagementMethods
**********************************************/
export interface ResourceEngagementMethods {
	delete(): IBaseExecution<any>;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): IBaseCollection<PS.ResourceEngagementTimephasedPeriod> & PS.ResourceEngagementTimephasedPeriodCollectionMethods;
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
export interface EntityTypesQuery extends IBaseResult, EntityTypes {
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
	getById(objectId?: string): IBaseQuery<PS.Event> & PS.EventCollections;
	getByInt(id?: number): IBaseQuery<PS.Event> & PS.EventCollections;
}

/*********************************************
* IEventHandler
**********************************************/
export interface IEventHandler extends EventHandlerCollections, EventHandlerMethods, IBaseQuery<IEventHandlerQuery> {

}

/*********************************************
* IEventHandlerCollection
**********************************************/
export interface IEventHandlerCollection extends IBaseResults<EventHandler>, EventHandlerCollectionMethods {
	done?: (resolve: (value?: Array<EventHandler>) => void) => void;
}

/*********************************************
* IEventHandlerQueryCollection
**********************************************/
export interface IEventHandlerQueryCollection extends IBaseResults<EventHandlerQuery>, EventHandlerCollectionMethods {
	done?: (resolve: (value?: Array<EventHandlerQuery>) => void) => void;
}

/*********************************************
* IEventHandlerQuery
**********************************************/
export interface IEventHandlerQuery extends EventHandlerQuery, EventHandlerMethods {

}

/*********************************************
* EventHandler
**********************************************/
export interface EventHandler extends IBaseResult, EventHandlerProps, EventHandlerCollections, EventHandlerMethods {

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
	Event(): IBaseExecution<PS.Event> & PS.EventCollections;
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
	getByGuid(uid?: any): IBaseQuery<PS.EventHandler, PS.EventHandlerQuery> & PS.EventHandlerCollections & PS.EventHandlerMethods;
	getById(objectId?: string): IBaseQuery<PS.EventHandler, PS.EventHandlerQuery> & PS.EventHandlerCollections & PS.EventHandlerMethods;
	update(): IBaseExecution<any>;
}

/*********************************************
* EventHandlerQuery
**********************************************/
export interface EventHandlerQuery extends IBaseResult, EventHandlerProps, EventHandlerMethods {
	Event: PS.Event & PS.EventCollections & PS.EventCollectionMethods;
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
export interface ILookupCost extends LookupCostCollections, LookupCostMethods, IBaseQuery<ILookupCostQuery> {

}

/*********************************************
* ILookupCostCollection
**********************************************/
export interface ILookupCostCollection extends IBaseResults<LookupCost> {
	done?: (resolve: (value?: Array<LookupCost>) => void) => void;
}

/*********************************************
* ILookupCostQueryCollection
**********************************************/
export interface ILookupCostQueryCollection extends IBaseResults<LookupCostQuery> {
	done?: (resolve: (value?: Array<LookupCostQuery>) => void) => void;
}

/*********************************************
* ILookupCostQuery
**********************************************/
export interface ILookupCostQuery extends LookupCostQuery, LookupCostMethods {

}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry, IBaseResult, LookupCostProps, LookupCostCollections, LookupCostMethods {

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
export interface LookupCostQuery extends IBaseResult, LookupCostProps, LookupCostMethods {

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
export interface ILookupDate extends LookupDateCollections, LookupDateMethods, IBaseQuery<ILookupDateQuery> {

}

/*********************************************
* ILookupDateCollection
**********************************************/
export interface ILookupDateCollection extends IBaseResults<LookupDate> {
	done?: (resolve: (value?: Array<LookupDate>) => void) => void;
}

/*********************************************
* ILookupDateQueryCollection
**********************************************/
export interface ILookupDateQueryCollection extends IBaseResults<LookupDateQuery> {
	done?: (resolve: (value?: Array<LookupDateQuery>) => void) => void;
}

/*********************************************
* ILookupDateQuery
**********************************************/
export interface ILookupDateQuery extends LookupDateQuery, LookupDateMethods {

}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry, IBaseResult, LookupDateProps, LookupDateCollections, LookupDateMethods {

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
export interface LookupDateQuery extends IBaseResult, LookupDateProps, LookupDateMethods {

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
export interface ILookupDuration extends LookupDurationCollections, LookupDurationMethods, IBaseQuery<ILookupDurationQuery> {

}

/*********************************************
* ILookupDurationCollection
**********************************************/
export interface ILookupDurationCollection extends IBaseResults<LookupDuration> {
	done?: (resolve: (value?: Array<LookupDuration>) => void) => void;
}

/*********************************************
* ILookupDurationQueryCollection
**********************************************/
export interface ILookupDurationQueryCollection extends IBaseResults<LookupDurationQuery> {
	done?: (resolve: (value?: Array<LookupDurationQuery>) => void) => void;
}

/*********************************************
* ILookupDurationQuery
**********************************************/
export interface ILookupDurationQuery extends LookupDurationQuery, LookupDurationMethods {

}

/*********************************************
* LookupDuration
**********************************************/
export interface LookupDuration extends PS.LookupEntry, IBaseResult, LookupDurationProps, LookupDurationCollections, LookupDurationMethods {

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
export interface LookupDurationQuery extends IBaseResult, LookupDurationProps, LookupDurationMethods {

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
export interface ILookupNumber extends LookupNumberCollections, LookupNumberMethods, IBaseQuery<ILookupNumberQuery> {

}

/*********************************************
* ILookupNumberCollection
**********************************************/
export interface ILookupNumberCollection extends IBaseResults<LookupNumber> {
	done?: (resolve: (value?: Array<LookupNumber>) => void) => void;
}

/*********************************************
* ILookupNumberQueryCollection
**********************************************/
export interface ILookupNumberQueryCollection extends IBaseResults<LookupNumberQuery> {
	done?: (resolve: (value?: Array<LookupNumberQuery>) => void) => void;
}

/*********************************************
* ILookupNumberQuery
**********************************************/
export interface ILookupNumberQuery extends LookupNumberQuery, LookupNumberMethods {

}

/*********************************************
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry, IBaseResult, LookupNumberProps, LookupNumberCollections, LookupNumberMethods {

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
export interface LookupNumberQuery extends IBaseResult, LookupNumberProps, LookupNumberMethods {

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
export interface ILookupText extends LookupTextCollections, LookupTextMethods, IBaseQuery<ILookupTextQuery> {

}

/*********************************************
* ILookupTextCollection
**********************************************/
export interface ILookupTextCollection extends IBaseResults<LookupText> {
	done?: (resolve: (value?: Array<LookupText>) => void) => void;
}

/*********************************************
* ILookupTextQueryCollection
**********************************************/
export interface ILookupTextQueryCollection extends IBaseResults<LookupTextQuery> {
	done?: (resolve: (value?: Array<LookupTextQuery>) => void) => void;
}

/*********************************************
* ILookupTextQuery
**********************************************/
export interface ILookupTextQuery extends LookupTextQuery, LookupTextMethods {

}

/*********************************************
* LookupText
**********************************************/
export interface LookupText extends PS.LookupEntry, IBaseResult, LookupTextProps, LookupTextCollections, LookupTextMethods {

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
export interface LookupTextQuery extends IBaseResult, LookupTextProps, LookupTextMethods {
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
export interface IPlanAssignment extends PlanAssignmentCollections, PlanAssignmentMethods, IBaseQuery<IPlanAssignmentQuery> {

}

/*********************************************
* IPlanAssignmentCollection
**********************************************/
export interface IPlanAssignmentCollection extends IBaseResults<PlanAssignment>, PlanAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<PlanAssignment>) => void) => void;
}

/*********************************************
* IPlanAssignmentQueryCollection
**********************************************/
export interface IPlanAssignmentQueryCollection extends IBaseResults<PlanAssignmentQuery>, PlanAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<PlanAssignmentQuery>) => void) => void;
}

/*********************************************
* IPlanAssignmentQuery
**********************************************/
export interface IPlanAssignmentQuery extends PlanAssignmentQuery, PlanAssignmentMethods {

}

/*********************************************
* PlanAssignment
**********************************************/
export interface PlanAssignment extends IBaseResult, PlanAssignmentProps, PlanAssignmentCollections, PlanAssignmentMethods {

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
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Intervals(): IBaseCollection<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollectionMethods;
	Intervals(id: string | number): IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
}

/*********************************************
* PlanAssignmentCollectionMethods
**********************************************/
export interface PlanAssignmentCollectionMethods {
	add(parameters?: PS.PlanAssignmentCreationInformation): IBaseExecution<PS.PlanAssignment>;
	getByGuid(uid?: any): IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentQuery> & PS.PlanAssignmentCollections & PS.PlanAssignmentMethods;
	getById(objectId?: string): IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentQuery> & PS.PlanAssignmentCollections & PS.PlanAssignmentMethods;
}

/*********************************************
* PlanAssignmentQuery
**********************************************/
export interface PlanAssignmentQuery extends IBaseResult, PlanAssignmentProps, PlanAssignmentMethods {
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	Intervals: IBaseResults<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollectionMethods;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
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
	getById(id?: string): IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
	getByStart(start?: any): IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
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
	getByStartUrl(start?: string): IBaseQuery<PS.ProjectEngagementTimephasedPeriod> & PS.ProjectEngagementTimephasedPeriodCollections;
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
export interface IProjectServer extends ProjectServerCollections, ProjectServerMethods, IBaseQuery<IProjectServerQuery> {

}

/*********************************************
* IProjectServerCollection
**********************************************/
export interface IProjectServerCollection extends IBaseResults<ProjectServer> {
	done?: (resolve: (value?: Array<ProjectServer>) => void) => void;
}

/*********************************************
* IProjectServerQueryCollection
**********************************************/
export interface IProjectServerQueryCollection extends IBaseResults<ProjectServerQuery> {
	done?: (resolve: (value?: Array<ProjectServerQuery>) => void) => void;
}

/*********************************************
* IProjectServerQuery
**********************************************/
export interface IProjectServerQuery extends ProjectServerQuery, ProjectServerMethods {

}

/*********************************************
* ProjectServer
**********************************************/
export interface ProjectServer extends IBaseResult, ProjectServerProps, ProjectServerCollections, ProjectServerMethods {

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
	Settings(): IBaseExecution<PS.Settings> & PS.SettingsCollections;
	WorkflowActivities(): IBaseExecution<PS.WorkflowActivities> & PS.WorkflowActivitiesCollections & PS.WorkflowActivitiesMethods;
	WorkflowDesigner(): IBaseQuery<PS.WorkflowDesigner, PS.WorkflowDesignerQuery> & PS.WorkflowDesignerCollections;
}

/*********************************************
* ProjectServerCollections
**********************************************/
export interface ProjectServerCollections extends ProjectServerPropMethods {
	Calendars(): IBaseCollection<PS.Calendar, PS.CalendarQuery, IBaseExecution & PS.CalendarCollectionMethods> & IBaseExecution & PS.CalendarCollectionMethods;
	Calendars(id: string | number): IBaseQuery<PS.Calendar, PS.CalendarQuery> & PS.CalendarCollections & PS.CalendarMethods;
	CustomFields(): IBaseCollection<PS.CustomField, PS.CustomFieldQuery, IBaseExecution & PS.CustomFieldCollectionMethods> & IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField, PS.CustomFieldQuery> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	EnterpriseProjectTypes(): IBaseCollection<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery, IBaseExecution & PS.EnterpriseProjectTypeCollectionMethods> & IBaseExecution & PS.EnterpriseProjectTypeCollectionMethods;
	EnterpriseProjectTypes(id: string | number): IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeQuery> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	EnterpriseResources(): IBaseCollection<PS.EnterpriseResource, PS.EnterpriseResourceQuery, IBaseExecution & PS.EnterpriseResourceCollectionMethods> & IBaseExecution & PS.EnterpriseResourceCollectionMethods;
	EnterpriseResources(id: string | number): IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceQuery> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	EventHandlers(): IBaseCollection<PS.EventHandler, PS.EventHandlerQuery, IBaseExecution & PS.EventHandlerCollectionMethods> & IBaseExecution & PS.EventHandlerCollectionMethods;
	EventHandlers(id: string | number): IBaseQuery<PS.EventHandler, PS.EventHandlerQuery> & PS.EventHandlerCollections & PS.EventHandlerMethods;
	Events(): IBaseCollection<PS.Event> & PS.EventCollectionMethods;
	Events(id: string | number): IBaseQuery<PS.Event> & PS.EventCollections;
	LookupTables(): IBaseCollection<PS.LookupTable, PS.LookupTableQuery, IBaseExecution & PS.LookupTableCollectionMethods> & IBaseExecution & PS.LookupTableCollectionMethods;
	LookupTables(id: string | number): IBaseQuery<PS.LookupTable, PS.LookupTableQuery> & PS.LookupTableCollections & PS.LookupTableMethods;
	Phases(): IBaseCollection<PS.Phase, PS.PhaseQuery, IBaseExecution & PS.PhaseCollectionMethods> & IBaseExecution & PS.PhaseCollectionMethods;
	Phases(id: string | number): IBaseQuery<PS.Phase, PS.PhaseQuery> & PS.PhaseCollections & PS.PhaseMethods;
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage, PS.ProjectDetailPageQuery, IBaseExecution & PS.ProjectDetailPageCollectionMethods> & IBaseExecution & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageQuery> & PS.ProjectDetailPageCollections;
	Projects(): IBaseCollection<PS.PublishedProject, PS.PublishedProjectQuery, IBaseExecution & PS.PublishedProjectCollectionMethods> & IBaseExecution & PS.PublishedProjectCollectionMethods;
	Projects(id: string | number): IBaseQuery<PS.PublishedProject, PS.PublishedProjectQuery> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	ProjectWorkflowInstances(): IBaseCollection<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceQuery, IBaseExecution & PS.ProjectWorkflowInstanceCollectionMethods> & IBaseExecution & PS.ProjectWorkflowInstanceCollectionMethods;
	ProjectWorkflowInstances(id: string | number): IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceQuery> & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceMethods;
	Stages(): IBaseCollection<PS.Stage, PS.StageQuery, IBaseExecution & PS.StageCollectionMethods> & IBaseExecution & PS.StageCollectionMethods;
	Stages(id: string | number): IBaseQuery<PS.Stage, PS.StageQuery> & PS.StageCollections & PS.StageMethods;
	TimeSheetPeriods(): IBaseCollection<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery, IBaseExecution & PS.TimeSheetPeriodCollectionMethods> & IBaseExecution & PS.TimeSheetPeriodCollectionMethods;
	TimeSheetPeriods(id: string | number): IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
}

/*********************************************
* ProjectServerQuery
**********************************************/
export interface ProjectServerQuery extends IBaseResult, ProjectServerProps, ProjectServerMethods {
	Calendars: IBaseResults<PS.Calendar> & PS.CalendarCollectionMethods;
	CustomFields: IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	EnterpriseProjectTypes: IBaseResults<PS.EnterpriseProjectType> & PS.EnterpriseProjectTypeCollectionMethods;
	EnterpriseResources: IBaseResults<PS.EnterpriseResource> & PS.EnterpriseResourceCollectionMethods;
	EntityTypes: PS.EntityTypes & PS.EntityTypesCollections;
	EventHandlers: IBaseResults<PS.EventHandler> & PS.EventHandlerCollectionMethods;
	Events: IBaseResults<PS.Event> & PS.EventCollectionMethods;
	LookupTables: IBaseResults<PS.LookupTable> & PS.LookupTableCollectionMethods;
	Phases: IBaseResults<PS.Phase> & PS.PhaseCollectionMethods;
	ProjectDetailPages: IBaseResults<PS.ProjectDetailPage> & PS.ProjectDetailPageCollectionMethods;
	Projects: IBaseResults<PS.PublishedProject> & PS.PublishedProjectCollectionMethods;
	ProjectWorkflowInstances: IBaseResults<PS.ProjectWorkflowInstance> & PS.ProjectWorkflowInstanceCollectionMethods;
	Settings: PS.Settings & PS.SettingsCollections;
	Stages: IBaseResults<PS.Stage> & PS.StageCollectionMethods;
	TimeSheetPeriods: IBaseResults<PS.TimeSheetPeriod> & PS.TimeSheetPeriodCollectionMethods;
	UserPermissions: IBaseResults<PS.UserPermission>;
	WorkflowActivities: PS.WorkflowActivities & PS.WorkflowActivitiesCollections;
	WorkflowDesigner: PS.WorkflowDesigner & PS.WorkflowDesignerCollections;
}

/*********************************************
* ProjectServerMethods
**********************************************/
export interface ProjectServerMethods {
	getDeletedPublishedAssignments(deletedDate?: any): IBaseCollection<PS.DeletedPublishedAssignment>;
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
export interface ITimeSheetPeriod extends TimeSheetPeriodCollections, TimeSheetPeriodMethods, IBaseQuery<ITimeSheetPeriodQuery> {

}

/*********************************************
* ITimeSheetPeriodCollection
**********************************************/
export interface ITimeSheetPeriodCollection extends IBaseResults<TimeSheetPeriod>, TimeSheetPeriodCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetPeriod>) => void) => void;
}

/*********************************************
* ITimeSheetPeriodQueryCollection
**********************************************/
export interface ITimeSheetPeriodQueryCollection extends IBaseResults<TimeSheetPeriodQuery>, TimeSheetPeriodCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetPeriodQuery>) => void) => void;
}

/*********************************************
* ITimeSheetPeriodQuery
**********************************************/
export interface ITimeSheetPeriodQuery extends TimeSheetPeriodQuery, TimeSheetPeriodMethods {

}

/*********************************************
* TimeSheetPeriod
**********************************************/
export interface TimeSheetPeriod extends IBaseResult, TimeSheetPeriodProps, TimeSheetPeriodCollections, TimeSheetPeriodMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
	getById(objectId?: string): IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodQuery> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
}

/*********************************************
* TimeSheetPeriodQuery
**********************************************/
export interface TimeSheetPeriodQuery extends IBaseResult, TimeSheetPeriodProps, TimeSheetPeriodMethods {
	TimeSheet: PS.TimeSheet & PS.TimeSheetCollections;
}

/*********************************************
* TimeSheetPeriodMethods
**********************************************/
export interface TimeSheetPeriodMethods {
	createTimeSheet(): IBaseQuery<PS.TimeSheet, PS.TimeSheetQuery> & PS.TimeSheetCollections & PS.TimeSheetMethods;
}

/*********************************************
* ITimeSheet
**********************************************/
export interface ITimeSheet extends TimeSheetCollections, TimeSheetMethods, IBaseQuery<ITimeSheetQuery> {

}

/*********************************************
* ITimeSheetCollection
**********************************************/
export interface ITimeSheetCollection extends IBaseResults<TimeSheet> {
	done?: (resolve: (value?: Array<TimeSheet>) => void) => void;
}

/*********************************************
* ITimeSheetQueryCollection
**********************************************/
export interface ITimeSheetQueryCollection extends IBaseResults<TimeSheetQuery> {
	done?: (resolve: (value?: Array<TimeSheetQuery>) => void) => void;
}

/*********************************************
* ITimeSheetQuery
**********************************************/
export interface ITimeSheetQuery extends TimeSheetQuery, TimeSheetMethods {

}

/*********************************************
* TimeSheet
**********************************************/
export interface TimeSheet extends IBaseResult, TimeSheetProps, TimeSheetCollections, TimeSheetMethods {

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
	Lines(): IBaseCollection<PS.TimeSheetLine, PS.TimeSheetLineQuery, IBaseExecution & PS.TimeSheetLineCollectionMethods> & IBaseExecution & PS.TimeSheetLineCollectionMethods;
	Lines(id: string | number): IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineQuery> & PS.TimeSheetLineCollections & PS.TimeSheetLineMethods;
}

/*********************************************
* TimeSheetQuery
**********************************************/
export interface TimeSheetQuery extends IBaseResult, TimeSheetProps, TimeSheetMethods {
	Creator: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Lines: IBaseResults<PS.TimeSheetLine> & PS.TimeSheetLineCollectionMethods;
	Manager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Period: PS.TimeSheetPeriod & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodCollectionMethods;
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
export interface ITimeSheetLine extends TimeSheetLineCollections, TimeSheetLineMethods, IBaseQuery<ITimeSheetLineQuery> {

}

/*********************************************
* ITimeSheetLineCollection
**********************************************/
export interface ITimeSheetLineCollection extends IBaseResults<TimeSheetLine>, TimeSheetLineCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetLine>) => void) => void;
}

/*********************************************
* ITimeSheetLineQueryCollection
**********************************************/
export interface ITimeSheetLineQueryCollection extends IBaseResults<TimeSheetLineQuery>, TimeSheetLineCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetLineQuery>) => void) => void;
}

/*********************************************
* ITimeSheetLineQuery
**********************************************/
export interface ITimeSheetLineQuery extends TimeSheetLineQuery, TimeSheetLineMethods {

}

/*********************************************
* TimeSheetLine
**********************************************/
export interface TimeSheetLine extends IBaseResult, TimeSheetLineProps, TimeSheetLineCollections, TimeSheetLineMethods {

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
	getByGuid(uid?: any): IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineQuery> & PS.TimeSheetLineCollections & PS.TimeSheetLineMethods;
	getById(objectId?: string): IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineQuery> & PS.TimeSheetLineCollections & PS.TimeSheetLineMethods;
}

/*********************************************
* TimeSheetLineQuery
**********************************************/
export interface TimeSheetLineQuery extends IBaseResult, TimeSheetLineProps, TimeSheetLineMethods {
	Assignment: PS.PublishedAssignment & PS.PublishedAssignmentCollections & PS.PublishedAssignmentCollectionMethods;
	TimeSheet: PS.TimeSheet & PS.TimeSheetCollections;
	Work: IBaseResults<PS.TimeSheetWork> & PS.TimeSheetWorkCollectionMethods;
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
export interface ITimeSheetWork extends TimeSheetWorkCollections, TimeSheetWorkMethods, IBaseQuery<ITimeSheetWorkQuery> {

}

/*********************************************
* ITimeSheetWorkCollection
**********************************************/
export interface ITimeSheetWorkCollection extends IBaseResults<TimeSheetWork>, TimeSheetWorkCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetWork>) => void) => void;
}

/*********************************************
* ITimeSheetWorkQueryCollection
**********************************************/
export interface ITimeSheetWorkQueryCollection extends IBaseResults<TimeSheetWorkQuery>, TimeSheetWorkCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetWorkQuery>) => void) => void;
}

/*********************************************
* ITimeSheetWorkQuery
**********************************************/
export interface ITimeSheetWorkQuery extends TimeSheetWorkQuery, TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWork
**********************************************/
export interface TimeSheetWork extends IBaseResult, TimeSheetWorkProps, TimeSheetWorkCollections, TimeSheetWorkMethods {

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
	getById(objectId?: string): IBaseQuery<PS.TimeSheetWork> & PS.TimeSheetWorkCollections & PS.TimeSheetWorkMethods;
	getByStartDate(start?: any): IBaseQuery<PS.TimeSheetWork> & PS.TimeSheetWorkCollections & PS.TimeSheetWorkMethods;
}

/*********************************************
* TimeSheetWorkQuery
**********************************************/
export interface TimeSheetWorkQuery extends IBaseResult, TimeSheetWorkProps, TimeSheetWorkMethods {

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
export interface IWorkflowActivities extends WorkflowActivitiesCollections, WorkflowActivitiesMethods, IBaseQuery<IWorkflowActivitiesQuery> {

}

/*********************************************
* IWorkflowActivitiesCollection
**********************************************/
export interface IWorkflowActivitiesCollection extends IBaseResults<WorkflowActivities> {
	done?: (resolve: (value?: Array<WorkflowActivities>) => void) => void;
}

/*********************************************
* IWorkflowActivitiesQueryCollection
**********************************************/
export interface IWorkflowActivitiesQueryCollection extends IBaseResults<WorkflowActivitiesQuery> {
	done?: (resolve: (value?: Array<WorkflowActivitiesQuery>) => void) => void;
}

/*********************************************
* IWorkflowActivitiesQuery
**********************************************/
export interface IWorkflowActivitiesQuery extends WorkflowActivitiesQuery, WorkflowActivitiesMethods {

}

/*********************************************
* WorkflowActivities
**********************************************/
export interface WorkflowActivities extends IBaseResult, WorkflowActivitiesProps, WorkflowActivitiesCollections, WorkflowActivitiesMethods {

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
export interface WorkflowActivitiesQuery extends IBaseResult, WorkflowActivitiesProps, WorkflowActivitiesMethods {

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
export interface IWorkflowDesigner extends WorkflowDesignerCollections, WorkflowDesignerMethods, IBaseQuery<IWorkflowDesignerQuery> {

}

/*********************************************
* IWorkflowDesignerCollection
**********************************************/
export interface IWorkflowDesignerCollection extends IBaseResults<WorkflowDesigner> {
	done?: (resolve: (value?: Array<WorkflowDesigner>) => void) => void;
}

/*********************************************
* IWorkflowDesignerQueryCollection
**********************************************/
export interface IWorkflowDesignerQueryCollection extends IBaseResults<WorkflowDesignerQuery> {
	done?: (resolve: (value?: Array<WorkflowDesignerQuery>) => void) => void;
}

/*********************************************
* IWorkflowDesignerQuery
**********************************************/
export interface IWorkflowDesignerQuery extends WorkflowDesignerQuery, WorkflowDesignerMethods {

}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner extends IBaseResult, WorkflowDesignerProps, WorkflowDesignerCollections, WorkflowDesignerMethods {

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
	Fields(): IBaseCollection<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldQuery, IBaseExecution & PS.WorkflowDesignerFieldCollectionMethods> & IBaseExecution & PS.WorkflowDesignerFieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldQuery> & PS.WorkflowDesignerFieldCollections;
}

/*********************************************
* WorkflowDesignerQuery
**********************************************/
export interface WorkflowDesignerQuery extends IBaseResult, WorkflowDesignerProps, WorkflowDesignerMethods {
	Fields: IBaseResults<PS.WorkflowDesignerField> & PS.WorkflowDesignerFieldCollectionMethods;
}

/*********************************************
* WorkflowDesignerMethods
**********************************************/
export interface WorkflowDesignerMethods {

}

/*********************************************
* IWorkflowDesignerField
**********************************************/
export interface IWorkflowDesignerField extends WorkflowDesignerFieldCollections, WorkflowDesignerFieldMethods, IBaseQuery<IWorkflowDesignerFieldQuery> {

}

/*********************************************
* IWorkflowDesignerFieldCollection
**********************************************/
export interface IWorkflowDesignerFieldCollection extends IBaseResults<WorkflowDesignerField>, WorkflowDesignerFieldCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowDesignerField>) => void) => void;
}

/*********************************************
* IWorkflowDesignerFieldQueryCollection
**********************************************/
export interface IWorkflowDesignerFieldQueryCollection extends IBaseResults<WorkflowDesignerFieldQuery>, WorkflowDesignerFieldCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowDesignerFieldQuery>) => void) => void;
}

/*********************************************
* IWorkflowDesignerFieldQuery
**********************************************/
export interface IWorkflowDesignerFieldQuery extends WorkflowDesignerFieldQuery, WorkflowDesignerFieldMethods {

}

/*********************************************
* WorkflowDesignerField
**********************************************/
export interface WorkflowDesignerField extends IBaseResult, WorkflowDesignerFieldProps, WorkflowDesignerFieldCollections, WorkflowDesignerFieldMethods {

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
export interface WorkflowDesignerFieldQuery extends IBaseResult, WorkflowDesignerFieldProps, WorkflowDesignerFieldMethods {
	LookupEntries: IBaseResults<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
}

/*********************************************
* WorkflowDesignerFieldMethods
**********************************************/
export interface WorkflowDesignerFieldMethods {

}

/*********************************************
* IResourceCalendarException
**********************************************/
export interface IResourceCalendarException extends ResourceCalendarExceptionCollections, ResourceCalendarExceptionMethods, IBaseQuery<IResourceCalendarExceptionQuery> {

}

/*********************************************
* IResourceCalendarExceptionCollection
**********************************************/
export interface IResourceCalendarExceptionCollection extends IBaseResults<ResourceCalendarException> {
	done?: (resolve: (value?: Array<ResourceCalendarException>) => void) => void;
}

/*********************************************
* IResourceCalendarExceptionQueryCollection
**********************************************/
export interface IResourceCalendarExceptionQueryCollection extends IBaseResults<ResourceCalendarExceptionQuery> {
	done?: (resolve: (value?: Array<ResourceCalendarExceptionQuery>) => void) => void;
}

/*********************************************
* IResourceCalendarExceptionQuery
**********************************************/
export interface IResourceCalendarExceptionQuery extends ResourceCalendarExceptionQuery, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException, IBaseResult, ResourceCalendarExceptionProps, ResourceCalendarExceptionCollections, ResourceCalendarExceptionMethods {

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
export interface ResourceCalendarExceptionQuery extends IBaseResult, ResourceCalendarExceptionProps, ResourceCalendarExceptionMethods {

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
	getByStartUrl(start?: string): IBaseQuery<PS.ResourceEngagementTimephasedPeriod> & PS.ResourceEngagementTimephasedPeriodCollections;
}

/*********************************************
* IResourcePlan
**********************************************/
export interface IResourcePlan extends ResourcePlanCollections, ResourcePlanMethods, IBaseQuery<IResourcePlanQuery> {

}

/*********************************************
* IResourcePlanCollection
**********************************************/
export interface IResourcePlanCollection extends IBaseResults<ResourcePlan> {
	done?: (resolve: (value?: Array<ResourcePlan>) => void) => void;
}

/*********************************************
* IResourcePlanQueryCollection
**********************************************/
export interface IResourcePlanQueryCollection extends IBaseResults<ResourcePlanQuery> {
	done?: (resolve: (value?: Array<ResourcePlanQuery>) => void) => void;
}

/*********************************************
* IResourcePlanQuery
**********************************************/
export interface IResourcePlanQuery extends ResourcePlanQuery, ResourcePlanMethods {

}

/*********************************************
* ResourcePlan
**********************************************/
export interface ResourcePlan extends IBaseResult, ResourcePlanProps, ResourcePlanCollections, ResourcePlanMethods {

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
	Assignments(): IBaseCollection<PS.PlanAssignment, PS.PlanAssignmentQuery, IBaseExecution & PS.PlanAssignmentCollectionMethods> & IBaseExecution & PS.PlanAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentQuery> & PS.PlanAssignmentCollections & PS.PlanAssignmentMethods;
}

/*********************************************
* ResourcePlanQuery
**********************************************/
export interface ResourcePlanQuery extends IBaseResult, ResourcePlanProps, ResourcePlanMethods {
	Assignments: IBaseResults<PS.PlanAssignment> & PS.PlanAssignmentCollectionMethods;
}

/*********************************************
* ResourcePlanMethods
**********************************************/
export interface ResourcePlanMethods {
	delete(): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	forceCheckIn(): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	publish(): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
	update(): IBaseQuery<PS.QueueJob, PS.QueueJobQuery> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* IServiceStatus
**********************************************/
export interface IServiceStatus extends ServiceStatusCollections, ServiceStatusMethods, IBaseQuery<IServiceStatusQuery> {

}

/*********************************************
* IServiceStatusCollection
**********************************************/
export interface IServiceStatusCollection extends IBaseResults<ServiceStatus> {
	done?: (resolve: (value?: Array<ServiceStatus>) => void) => void;
}

/*********************************************
* IServiceStatusQueryCollection
**********************************************/
export interface IServiceStatusQueryCollection extends IBaseResults<ServiceStatusQuery> {
	done?: (resolve: (value?: Array<ServiceStatusQuery>) => void) => void;
}

/*********************************************
* IServiceStatusQuery
**********************************************/
export interface IServiceStatusQuery extends ServiceStatusQuery, ServiceStatusMethods {

}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus extends IBaseResult, ServiceStatusProps, ServiceStatusCollections, ServiceStatusMethods {

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
export interface ServiceStatusQuery extends IBaseResult, ServiceStatusProps, ServiceStatusMethods {

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
export interface ITimePhase extends TimePhaseCollections, TimePhaseMethods, IBaseQuery<ITimePhaseQuery> {

}

/*********************************************
* ITimePhaseCollection
**********************************************/
export interface ITimePhaseCollection extends IBaseResults<TimePhase> {
	done?: (resolve: (value?: Array<TimePhase>) => void) => void;
}

/*********************************************
* ITimePhaseQueryCollection
**********************************************/
export interface ITimePhaseQueryCollection extends IBaseResults<TimePhaseQuery> {
	done?: (resolve: (value?: Array<TimePhaseQuery>) => void) => void;
}

/*********************************************
* ITimePhaseQuery
**********************************************/
export interface ITimePhaseQuery extends TimePhaseQuery, TimePhaseMethods {

}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase extends IBaseResult, TimePhaseProps, TimePhaseCollections, TimePhaseMethods {

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
	Assignments(): IBaseCollection<PS.StatusAssignment, PS.StatusAssignmentQuery, IBaseExecution & PS.StatusAssignmentCollectionMethods> & IBaseExecution & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentQuery> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
}

/*********************************************
* TimePhaseQuery
**********************************************/
export interface TimePhaseQuery extends IBaseResult, TimePhaseProps, TimePhaseMethods {
	Assignments: IBaseResults<PS.StatusAssignment> & PS.StatusAssignmentCollectionMethods;
}

/*********************************************
* TimePhaseMethods
**********************************************/
export interface TimePhaseMethods {

}
