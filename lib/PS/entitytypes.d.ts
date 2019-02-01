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
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
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
	LookupTable(): IBaseExecution<PS.LookupTable> & PS.LookupTableCollections;
}

/*********************************************
* CustomFieldCollections
**********************************************/
export interface CustomFieldCollections extends CustomFieldProps {
	LookupEntries(): IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupEntries(id: string | number): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections;
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
* CustomFieldQuery
**********************************************/
export interface CustomFieldQuery extends CustomFieldProps {
	LookupEntries: IBaseResults<PS.LookupEntry>;
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
* LookupEntryCollectionMethods
**********************************************/
export interface LookupEntryCollectionMethods {
	add(parameters?: PS.LookupEntryCreationInformation): IBaseExecution<PS.LookupEntry>;
	getByAppAlternateId(objectId?: string): IBaseExecution<PS.LookupEntry>;
	getByGuid(uid?: any): IBaseExecution<PS.LookupEntry>;
	getById(objectId?: string): IBaseExecution<PS.LookupEntry>;
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
	Entries(): IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	Entries(id: string | number): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections;
}

/*********************************************
* LookupTableCollectionMethods
**********************************************/
export interface LookupTableCollectionMethods {
	add(parameters?: PS.LookupTableCreationInformation): IBaseExecution<PS.LookupTable>;
	getByAppAlternateId(objectId?: string): IBaseExecution<PS.LookupTable>;
	getByGuid(uid?: any): IBaseExecution<PS.LookupTable>;
	getById(objectId?: string): IBaseExecution<PS.LookupTable>;
	update(): IBaseExecution<any>;
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
	Calendar(): IBaseExecution<PS.Calendar> & PS.CalendarCollections;
}

/*********************************************
* CalendarExceptionCollections
**********************************************/
export interface CalendarExceptionCollections extends CalendarExceptionProps {

}

/*********************************************
* CalendarExceptionCollectionMethods
**********************************************/
export interface CalendarExceptionCollectionMethods {
	add(parameters?: PS.CalendarExceptionCreationInformation): IBaseExecution<PS.CalendarException>;
	getById(id?: number): IBaseExecution<PS.CalendarException>;
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
	BaseCalendarExceptions(): IBaseCollection<PS.CalendarException> & PS.CalendarExceptionCollectionMethods;
	BaseCalendarExceptions(id: string | number): IBaseQuery<PS.CalendarException> & PS.CalendarExceptionCollections;
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
	Owner(): IBaseExecution<SP.User> & SP.UserCollections;
	Parent(): IBaseExecution<PS.DraftAssignment> & PS.DraftAssignmentCollections;
	Resource(): IBaseExecution<PS.DraftProjectResource> & PS.DraftProjectResourceCollections;
	Task(): IBaseExecution<PS.DraftTask> & PS.DraftTaskCollections;
}

/*********************************************
* DraftAssignmentCollections
**********************************************/
export interface DraftAssignmentCollections extends DraftAssignmentProps {

}

/*********************************************
* DraftAssignmentCollectionMethods
**********************************************/
export interface DraftAssignmentCollectionMethods {
	add(parameters?: PS.AssignmentCreationInformation): IBaseExecution<PS.DraftAssignment>;
	getByGuid(uid?: any): IBaseExecution<PS.DraftAssignment>;
	getById(objectId?: string): IBaseExecution<PS.DraftAssignment>;
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
	EnterpriseResource(): IBaseExecution<PS.EnterpriseResource> & PS.EnterpriseResourceCollections;
}

/*********************************************
* ProjectResourceCollections
**********************************************/
export interface ProjectResourceCollections extends ProjectResourceProps {
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
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
	BaseCalendar(): IBaseExecution<PS.Calendar> & PS.CalendarCollections;
	DefaultAssignmentOwner(): IBaseExecution<SP.User> & SP.UserCollections;
	Self(): IBaseExecution<PS.EnterpriseResource> & PS.EnterpriseResourceCollections;
	TimesheetManager(): IBaseExecution<SP.User> & SP.UserCollections;
	User(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* EnterpriseResourceCollections
**********************************************/
export interface EnterpriseResourceCollections extends EnterpriseResourceProps {
	Assignments(): IBaseCollection<PS.StatusAssignment> & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.StatusAssignment> & PS.StatusAssignmentCollections;
	CostRateTables(): IBaseCollection<PS.EnterpriseResourceCostRateTable>;
	CostRateTables(id: string | number): IBaseQuery<PS.EnterpriseResourceCostRateTable>;
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
	Engagements(): IBaseCollection<PS.ResourceEngagement> & PS.ResourceEngagementCollectionMethods;
	Engagements(id: string | number): IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission>;
	ResourceCalendarExceptions(): IBaseCollection<PS.CalendarException> & PS.CalendarExceptionCollectionMethods;
	ResourceCalendarExceptions(id: string | number): IBaseQuery<PS.CalendarException> & PS.CalendarExceptionCollections;
}

/*********************************************
* EnterpriseResourceCollectionMethods
**********************************************/
export interface EnterpriseResourceCollectionMethods {
	add(parameters?: PS.EnterpriseResourceCreationInformation): IBaseExecution<PS.EnterpriseResource>;
	getByGuid(uid?: any): IBaseExecution<PS.EnterpriseResource>;
	getById(objectId?: string): IBaseExecution<PS.EnterpriseResource>;
	update(): IBaseExecution<any>;
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
	Project(): IBaseExecution<PS.PublishedProject> & PS.PublishedProjectCollections;
	Resource(): IBaseExecution<PS.EnterpriseResource> & PS.EnterpriseResourceCollections;
	Task(): IBaseExecution<PS.StatusTask>;
}

/*********************************************
* StatusAssignmentCollections
**********************************************/
export interface StatusAssignmentCollections extends StatusAssignmentProps {
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
	History(): IBaseCollection<PS.StatusAssignmentHistoryLine> & PS.StatusAssignmentHistoryLineCollectionMethods;
	History(id: string | number): IBaseQuery<PS.StatusAssignmentHistoryLine> & PS.StatusAssignmentHistoryLineCollections;
}

/*********************************************
* StatusAssignmentCollectionMethods
**********************************************/
export interface StatusAssignmentCollectionMethods {
	add(parameters?: PS.StatusAssignmentCreationInformation): IBaseExecution<PS.StatusAssignment>;
	getByGuid(uid?: any): IBaseExecution<PS.StatusAssignment>;
	getById(objectId?: string): IBaseExecution<PS.StatusAssignment>;
	getTimePhaseByUrl(start?: string, end?: string): IBaseExecution<PS.TimePhase>;
	submitAllStatusUpdates(comment?: string): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
* StatusAssignmentHistoryLineCollectionMethods
**********************************************/
export interface StatusAssignmentHistoryLineCollectionMethods {
	getById(objectId?: string): IBaseExecution<PS.StatusAssignmentHistoryLine>;
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
	CheckedOutBy(): IBaseExecution<SP.User> & SP.UserCollections;
	EnterpriseProjectType(): IBaseExecution<PS.EnterpriseProjectType> & PS.EnterpriseProjectTypeCollections;
	Phase(): IBaseExecution<PS.Phase> & PS.PhaseCollections;
	ProjectSummaryTask(): IBaseExecution<PS.ProjectSummaryTask>;
	Stage(): IBaseExecution<PS.Stage> & PS.StageCollections;
}

/*********************************************
* ProjectCollections
**********************************************/
export interface ProjectCollections extends ProjectProps {
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
	Engagements(): IBaseCollection<PS.ProjectEngagement> & PS.ProjectEngagementCollectionMethods;
	Engagements(id: string | number): IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission>;
	QueueJobs(): IBaseCollection<PS.QueueJob> & PS.QueueJobCollectionMethods;
	QueueJobs(id: string | number): IBaseQuery<PS.QueueJob> & PS.QueueJobCollections;
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
	ModifiedBy(): IBaseExecution<SP.User> & SP.UserCollections;
	Project(): IBaseExecution<PS.Project>;
	Resource(): IBaseExecution<PS.EnterpriseResource> & PS.EnterpriseResourceCollections;
	ReviewedBy(): IBaseExecution<SP.User> & SP.UserCollections;
	SubmittedBy(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* EngagementCollections
**********************************************/
export interface EngagementCollections extends EngagementProps {
	Comments(): IBaseCollection<PS.EngagementComment> & PS.EngagementCommentCollectionMethods;
	Comments(id: string | number): IBaseQuery<PS.EngagementComment> & PS.EngagementCommentCollections;
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
* EngagementCommentCollections
**********************************************/
export interface EngagementCommentCollections extends EngagementCommentCollectionMethods {

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
* ProjectEngagementCollectionMethods
**********************************************/
export interface ProjectEngagementCollectionMethods {
	add(parameters?: PS.ProjectEngagementCreationInformation): IBaseExecution<PS.ProjectEngagement>;
	getByGuid(uid?: any): IBaseExecution<PS.ProjectEngagement>;
	getById(objectId?: string): IBaseExecution<PS.ProjectEngagement>;
	update(): IBaseExecution<any>;
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
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage> & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.ProjectDetailPage> & PS.ProjectDetailPageCollections;
}

/*********************************************
* EnterpriseProjectTypeCollectionMethods
**********************************************/
export interface EnterpriseProjectTypeCollectionMethods {
	add(parameters?: PS.EnterpriseProjectTypeCreationInformation): IBaseExecution<PS.EnterpriseProjectType>;
	getByGuid(uid?: any): IBaseExecution<PS.EnterpriseProjectType>;
	getById(objectId?: string): IBaseExecution<PS.EnterpriseProjectType>;
	update(): IBaseExecution<any>;
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
* ProjectDetailPageCollectionMethods
**********************************************/
export interface ProjectDetailPageCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.ProjectDetailPage>;
	getById(objectId?: string): IBaseExecution<PS.ProjectDetailPage>;
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
	Stages(): IBaseCollection<PS.Stage> & PS.StageCollectionMethods;
	Stages(id: string | number): IBaseQuery<PS.Stage> & PS.StageCollections;
}

/*********************************************
* PhaseCollectionMethods
**********************************************/
export interface PhaseCollectionMethods {
	add(parameters?: PS.PhaseCreationInformation): IBaseExecution<PS.Phase>;
	getByGuid(uid?: any): IBaseExecution<PS.Phase>;
	getById(objectId?: string): IBaseExecution<PS.Phase>;
	update(): IBaseExecution<any>;
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
	Phase(): IBaseExecution<PS.Phase> & PS.PhaseCollections;
	WorkflowStatusPage(): IBaseExecution<PS.ProjectDetailPage> & PS.ProjectDetailPageCollections;
}

/*********************************************
* StageCollections
**********************************************/
export interface StageCollections extends StageProps {
	CustomFields(): IBaseCollection<PS.StageCustomField> & PS.StageCustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.StageCustomField> & PS.StageCustomFieldCollections;
	ProjectDetailPages(): IBaseCollection<PS.StageDetailPage> & PS.StageDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.StageDetailPage> & PS.StageDetailPageCollections;
}

/*********************************************
* StageCollectionMethods
**********************************************/
export interface StageCollectionMethods {
	add(parameters?: PS.StageCreationInformation): IBaseExecution<PS.Stage>;
	getByGuid(uid?: any): IBaseExecution<PS.Stage>;
	getById(objectId?: string): IBaseExecution<PS.Stage>;
	update(): IBaseExecution<any>;
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
	Stage(): IBaseExecution<PS.Stage> & PS.StageCollections;
}

/*********************************************
* StageCustomFieldCollections
**********************************************/
export interface StageCustomFieldCollections extends StageCustomFieldProps {

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
* StageCustomFieldQuery
**********************************************/
export interface StageCustomFieldQuery extends StageCustomFieldProps {

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
	Page(): IBaseExecution<PS.ProjectDetailPage> & PS.ProjectDetailPageCollections;
	Stage(): IBaseExecution<PS.Stage> & PS.StageCollections;
}

/*********************************************
* StageDetailPageCollections
**********************************************/
export interface StageDetailPageCollections extends StageDetailPageProps {

}

/*********************************************
* StageDetailPageCollectionMethods
**********************************************/
export interface StageDetailPageCollectionMethods {
	add(parameters?: PS.StageDetailPageCreationInformation): IBaseExecution<PS.StageDetailPage>;
	getByGuid(uid?: any): IBaseExecution<PS.StageDetailPage>;
	getById(objectId?: string): IBaseExecution<PS.StageDetailPage>;
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
	SubProject(): IBaseExecution<PS.PublishedProject> & PS.PublishedProjectCollections;
}

/*********************************************
* TaskCollections
**********************************************/
export interface TaskCollections extends TaskProps {
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
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
	Calendar(): IBaseExecution<PS.Calendar> & PS.CalendarCollections;
	Draft(): IBaseExecution<PS.DraftProject>;
	IncludeCustomFields(): IBaseExecution<PS.PublishedProject> & PS.PublishedProjectCollections;
	Owner(): IBaseExecution<SP.User> & SP.UserCollections;
	ProjectWorkflowInstance(): IBaseExecution<PS.ProjectWorkflowInstance> & PS.ProjectWorkflowInstanceCollections;
}

/*********************************************
* PublishedProjectCollections
**********************************************/
export interface PublishedProjectCollections extends PublishedProjectProps {
	Assignments(): IBaseCollection<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment> & PS.PublishedAssignmentCollections;
	EntityLinks(): IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections;
	ProjectResources(): IBaseCollection<PS.PublishedProjectResource> & PS.PublishedProjectResourceCollectionMethods;
	ProjectResources(id: string | number): IBaseQuery<PS.PublishedProjectResource> & PS.PublishedProjectResourceCollections;
	TaskLinks(): IBaseCollection<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	TaskLinks(id: string | number): IBaseQuery<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollections;
	Tasks(): IBaseCollection<PS.PublishedTask> & PS.PublishedTaskCollectionMethods;
	Tasks(id: string | number): IBaseQuery<PS.PublishedTask> & PS.PublishedTaskCollections;
}

/*********************************************
* PublishedProjectCollectionMethods
**********************************************/
export interface PublishedProjectCollectionMethods {
	add(parameters?: PS.ProjectCreationInformation): IBaseExecution<PS.PublishedProject>;
	getByGuid(uid?: any): IBaseExecution<PS.PublishedProject>;
	getById(objectId?: string): IBaseExecution<PS.PublishedProject>;
	update(): IBaseExecution<PS.QueueJob>;
	validate(): IBaseExecution<any>;
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
	delete(): IBaseExecution<PS.QueueJob>;
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
* PublishedAssignmentCollections
**********************************************/
export interface PublishedAssignmentCollections extends PublishedAssignmentCollectionMethods {

}

/*********************************************
* PublishedAssignmentCollectionMethods
**********************************************/
export interface PublishedAssignmentCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.PublishedAssignment>;
	getById(objectId?: string): IBaseExecution<PS.PublishedAssignment>;
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
	DefaultAssignmentOwner(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* PublishedProjectResourceCollections
**********************************************/
export interface PublishedProjectResourceCollections extends PublishedProjectResourceProps {
	Assignments(): IBaseCollection<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment> & PS.PublishedAssignmentCollections;
}

/*********************************************
* PublishedProjectResourceCollectionMethods
**********************************************/
export interface PublishedProjectResourceCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.PublishedProjectResource>;
	getById(objectId?: string): IBaseExecution<PS.PublishedProjectResource>;
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
	Calendar(): IBaseExecution<PS.Calendar> & PS.CalendarCollections;
	Parent(): IBaseExecution<PS.PublishedTask> & PS.PublishedTaskCollections;
	StatusManager(): IBaseExecution<SP.User> & SP.UserCollections;
	TaskPlanLink(): IBaseExecution<PS.TaskPlanLink>;
}

/*********************************************
* PublishedTaskCollections
**********************************************/
export interface PublishedTaskCollections extends PublishedTaskProps {
	Assignments(): IBaseCollection<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PublishedAssignment> & PS.PublishedAssignmentCollections;
	EntityLinks(): IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections;
	Predecessors(): IBaseCollection<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	Predecessors(id: string | number): IBaseQuery<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollections;
	Successors(): IBaseCollection<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	Successors(id: string | number): IBaseQuery<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollections;
}

/*********************************************
* PublishedTaskCollectionMethods
**********************************************/
export interface PublishedTaskCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.PublishedTask>;
	getById(objectId?: string): IBaseExecution<PS.PublishedTask>;
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
* EntityLinkCollectionMethods
**********************************************/
export interface EntityLinkCollectionMethods {
	add(parameters?: PS.EntityLinkCreationInformation): IBaseExecution<PS.EntityLink>;
	getByGuid(id?: any): IBaseExecution<PS.EntityLink>;
	update(): IBaseExecution<any>;
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
export interface PublishedTaskLink extends PS.TaskLink {
	DependencyType?: number;
}

/*********************************************
* PublishedTaskLinkCollections
**********************************************/
export interface PublishedTaskLinkCollections extends PublishedTaskLinkCollectionMethods {

}

/*********************************************
* PublishedTaskLinkCollectionMethods
**********************************************/
export interface PublishedTaskLinkCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.PublishedTaskLink>;
	getById(objectId?: string): IBaseExecution<PS.PublishedTaskLink>;
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
	Calendar(): IBaseExecution<PS.Calendar> & PS.CalendarCollections;
	IncludeCustomFields(): IBaseExecution<PS.DraftProject>;
	Owner(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* DraftProjectCollections
**********************************************/
export interface DraftProjectCollections extends DraftProjectProps {
	Assignments(): IBaseCollection<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment> & PS.DraftAssignmentCollections;
	ProjectResources(): IBaseCollection<PS.DraftProjectResource> & PS.DraftProjectResourceCollectionMethods;
	ProjectResources(id: string | number): IBaseQuery<PS.DraftProjectResource> & PS.DraftProjectResourceCollections;
	TaskLinks(): IBaseCollection<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
	TaskLinks(id: string | number): IBaseQuery<PS.DraftTaskLink> & PS.DraftTaskLinkCollections;
	Tasks(): IBaseCollection<PS.DraftTask> & PS.DraftTaskCollectionMethods;
	Tasks(id: string | number): IBaseQuery<PS.DraftTask> & PS.DraftTaskCollections;
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
	DefaultAssignmentOwner(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* DraftProjectResourceCollections
**********************************************/
export interface DraftProjectResourceCollections extends DraftProjectResourceProps {
	Assignments(): IBaseCollection<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment> & PS.DraftAssignmentCollections;
}

/*********************************************
* DraftProjectResourceCollectionMethods
**********************************************/
export interface DraftProjectResourceCollectionMethods {
	add(parameters?: PS.ProjectResourceCreationInformation): IBaseExecution<PS.DraftProjectResource>;
	addEnterpriseResourceById(resourceId?: any): IBaseExecution<PS.QueueJob>;
	getByGuid(uid?: any): IBaseExecution<PS.DraftProjectResource>;
	getById(objectId?: string): IBaseExecution<PS.DraftProjectResource>;
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
	End(): IBaseExecution<PS.DraftTask> & PS.DraftTaskCollections;
	Start(): IBaseExecution<PS.DraftTask> & PS.DraftTaskCollections;
}

/*********************************************
* DraftTaskLinkCollections
**********************************************/
export interface DraftTaskLinkCollections extends DraftTaskLinkProps {

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
* DraftTaskLinkQuery
**********************************************/
export interface DraftTaskLinkQuery extends DraftTaskLinkProps {

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
	Calendar(): IBaseExecution<PS.Calendar> & PS.CalendarCollections;
	Parent(): IBaseExecution<PS.DraftTask> & PS.DraftTaskCollections;
	StatusManager(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* DraftTaskCollections
**********************************************/
export interface DraftTaskCollections extends DraftTaskProps {
	Assignments(): IBaseCollection<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.DraftAssignment> & PS.DraftAssignmentCollections;
	Predecessors(): IBaseCollection<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
	Predecessors(id: string | number): IBaseQuery<PS.DraftTaskLink> & PS.DraftTaskLinkCollections;
	Successors(): IBaseCollection<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
	Successors(id: string | number): IBaseQuery<PS.DraftTaskLink> & PS.DraftTaskLinkCollections;
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
	WorkflowInstanceOwner(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* ProjectWorkflowInstanceCollections
**********************************************/
export interface ProjectWorkflowInstanceCollections extends ProjectWorkflowInstanceProps {

}

/*********************************************
* ProjectWorkflowInstanceCollectionMethods
**********************************************/
export interface ProjectWorkflowInstanceCollectionMethods {
	getById(objectId?: string): IBaseExecution<PS.ProjectWorkflowInstance>;
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
	Submitter(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* QueueJobCollections
**********************************************/
export interface QueueJobCollections extends QueueJobProps {

}

/*********************************************
* QueueJobCollectionMethods
**********************************************/
export interface QueueJobCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.QueueJob>;
	getById(objectId?: string): IBaseExecution<PS.QueueJob>;
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
	StatusManager(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* StatusTaskCollections
**********************************************/
export interface StatusTaskCollections extends StatusTaskProps {
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
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
	CostRates(): IBaseCollection<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollectionMethods;
	CostRates(id: string | number): IBaseQuery<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollections;
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
* EnterpriseResourceCostRateCollectionMethods
**********************************************/
export interface EnterpriseResourceCostRateCollectionMethods {
	add(parameters?: PS.CostRateCreationInformation): IBaseExecution<PS.EnterpriseResourceCostRate>;
	getByDateUrl(effectiveDate?: string): IBaseExecution<PS.EnterpriseResourceCostRate>;
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
* ResourceEngagementCollectionMethods
**********************************************/
export interface ResourceEngagementCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.ResourceEngagement>;
	getById(objectId?: string): IBaseExecution<PS.ResourceEngagement>;
	update(): IBaseExecution<any>;
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
	getById(objectId?: string): IBaseExecution<PS.Event>;
	getByInt(id?: number): IBaseExecution<PS.Event>;
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
	Event(): IBaseExecution<PS.Event> & PS.EventCollections;
}

/*********************************************
* EventHandlerCollections
**********************************************/
export interface EventHandlerCollections extends EventHandlerProps {

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
* EventHandlerQuery
**********************************************/
export interface EventHandlerQuery extends EventHandlerProps {

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
	Resource(): IBaseExecution<PS.EnterpriseResource> & PS.EnterpriseResourceCollections;
}

/*********************************************
* PlanAssignmentCollections
**********************************************/
export interface PlanAssignmentCollections extends PlanAssignmentProps {
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
	Intervals(): IBaseCollection<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollectionMethods;
	Intervals(id: string | number): IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
}

/*********************************************
* PlanAssignmentCollectionMethods
**********************************************/
export interface PlanAssignmentCollectionMethods {
	add(parameters?: PS.PlanAssignmentCreationInformation): IBaseExecution<PS.PlanAssignment>;
	getByGuid(uid?: any): IBaseExecution<PS.PlanAssignment>;
	getById(objectId?: string): IBaseExecution<PS.PlanAssignment>;
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
	getById(id?: string): IBaseExecution<PS.PlanAssignmentInterval>;
	getByStart(start?: any): IBaseExecution<PS.PlanAssignmentInterval>;
}

/*********************************************
* ProjectEngagementComment
**********************************************/
export interface ProjectEngagementComment extends PS.EngagementComment {

}

/*********************************************
* ProjectEngagementCommentCollections
**********************************************/
export interface ProjectEngagementCommentCollections {

}

/*********************************************
* ProjectEngagementTimephasedPeriod
**********************************************/
export interface ProjectEngagementTimephasedPeriod extends PS.EngagementTimephasedPeriod {

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
	getByStartUrl(start?: string): IBaseExecution<PS.ProjectEngagementTimephasedPeriod>;
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
	Calendars(): IBaseCollection<PS.Calendar> & PS.CalendarCollectionMethods;
	Calendars(id: string | number): IBaseQuery<PS.Calendar> & PS.CalendarCollections;
	CustomFields(): IBaseCollection<PS.CustomField> & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): IBaseQuery<PS.CustomField> & PS.CustomFieldCollections;
	EnterpriseProjectTypes(): IBaseCollection<PS.EnterpriseProjectType> & PS.EnterpriseProjectTypeCollectionMethods;
	EnterpriseProjectTypes(id: string | number): IBaseQuery<PS.EnterpriseProjectType> & PS.EnterpriseProjectTypeCollections;
	EnterpriseResources(): IBaseCollection<PS.EnterpriseResource> & PS.EnterpriseResourceCollectionMethods;
	EnterpriseResources(id: string | number): IBaseQuery<PS.EnterpriseResource> & PS.EnterpriseResourceCollections;
	EventHandlers(): IBaseCollection<PS.EventHandler> & PS.EventHandlerCollectionMethods;
	EventHandlers(id: string | number): IBaseQuery<PS.EventHandler> & PS.EventHandlerCollections;
	Events(): IBaseCollection<PS.Event> & PS.EventCollectionMethods;
	Events(id: string | number): IBaseQuery<PS.Event> & PS.EventCollections;
	LookupTables(): IBaseCollection<PS.LookupTable> & PS.LookupTableCollectionMethods;
	LookupTables(id: string | number): IBaseQuery<PS.LookupTable> & PS.LookupTableCollections;
	Phases(): IBaseCollection<PS.Phase> & PS.PhaseCollectionMethods;
	Phases(id: string | number): IBaseQuery<PS.Phase> & PS.PhaseCollections;
	ProjectDetailPages(): IBaseCollection<PS.ProjectDetailPage> & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): IBaseQuery<PS.ProjectDetailPage> & PS.ProjectDetailPageCollections;
	Projects(): IBaseCollection<PS.PublishedProject> & PS.PublishedProjectCollectionMethods;
	Projects(id: string | number): IBaseQuery<PS.PublishedProject> & PS.PublishedProjectCollections;
	ProjectWorkflowInstances(): IBaseCollection<PS.ProjectWorkflowInstance> & PS.ProjectWorkflowInstanceCollectionMethods;
	ProjectWorkflowInstances(id: string | number): IBaseQuery<PS.ProjectWorkflowInstance> & PS.ProjectWorkflowInstanceCollections;
	Stages(): IBaseCollection<PS.Stage> & PS.StageCollectionMethods;
	Stages(id: string | number): IBaseQuery<PS.Stage> & PS.StageCollections;
	TimeSheetPeriods(): IBaseCollection<PS.TimeSheetPeriod> & PS.TimeSheetPeriodCollectionMethods;
	TimeSheetPeriods(id: string | number): IBaseQuery<PS.TimeSheetPeriod> & PS.TimeSheetPeriodCollections;
	UserPermissions(): IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): IBaseQuery<PS.UserPermission>;
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
* TimeSheetPeriodCollectionMethods
**********************************************/
export interface TimeSheetPeriodCollectionMethods {
	getByGuid(uid?: any): IBaseExecution<PS.TimeSheetPeriod>;
	getById(objectId?: string): IBaseExecution<PS.TimeSheetPeriod>;
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
	Creator(): IBaseExecution<SP.User> & SP.UserCollections;
	Manager(): IBaseExecution<SP.User> & SP.UserCollections;
	Period(): IBaseExecution<PS.TimeSheetPeriod> & PS.TimeSheetPeriodCollections;
}

/*********************************************
* TimeSheetCollections
**********************************************/
export interface TimeSheetCollections extends TimeSheetProps {
	Lines(): IBaseCollection<PS.TimeSheetLine> & PS.TimeSheetLineCollectionMethods;
	Lines(id: string | number): IBaseQuery<PS.TimeSheetLine> & PS.TimeSheetLineCollections;
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
	Assignment(): IBaseExecution<PS.PublishedAssignment> & PS.PublishedAssignmentCollections;
	TimeSheet(): IBaseExecution<PS.TimeSheet>;
}

/*********************************************
* TimeSheetLineCollections
**********************************************/
export interface TimeSheetLineCollections extends TimeSheetLineProps {
	Work(): IBaseCollection<PS.TimeSheetWork> & PS.TimeSheetWorkCollectionMethods;
	Work(id: string | number): IBaseQuery<PS.TimeSheetWork> & PS.TimeSheetWorkCollections;
}

/*********************************************
* TimeSheetLineCollectionMethods
**********************************************/
export interface TimeSheetLineCollectionMethods {
	add(parameters?: PS.TimeSheetLineCreationInformation): IBaseExecution<PS.TimeSheetLine>;
	getByGuid(uid?: any): IBaseExecution<PS.TimeSheetLine>;
	getById(objectId?: string): IBaseExecution<PS.TimeSheetLine>;
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
* TimeSheetWorkCollectionMethods
**********************************************/
export interface TimeSheetWorkCollectionMethods {
	add(parameters?: PS.TimeSheetWorkCreationInformation): IBaseExecution<PS.TimeSheetWork>;
	getById(objectId?: string): IBaseExecution<PS.TimeSheetWork>;
	getByStartDate(start?: any): IBaseExecution<PS.TimeSheetWork>;
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
	Fields(): IBaseCollection<PS.WorkflowDesignerField> & PS.WorkflowDesignerFieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<PS.WorkflowDesignerField> & PS.WorkflowDesignerFieldCollections;
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
	LookupEntries(): IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupEntries(id: string | number): IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections;
}

/*********************************************
* WorkflowDesignerFieldCollectionMethods
**********************************************/
export interface WorkflowDesignerFieldCollectionMethods {
	getById(objectId?: string): IBaseExecution<PS.WorkflowDesignerField>;
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
	delete(): IBaseExecution<any>;
}

/*********************************************
* ResourceEngagementComment
**********************************************/
export interface ResourceEngagementComment extends PS.EngagementComment {

}

/*********************************************
* ResourceEngagementCommentCollections
**********************************************/
export interface ResourceEngagementCommentCollections {

}

/*********************************************
* ResourceEngagementTimephasedPeriod
**********************************************/
export interface ResourceEngagementTimephasedPeriod extends PS.EngagementTimephasedPeriod {

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
	getByStartUrl(start?: string): IBaseExecution<PS.ResourceEngagementTimephasedPeriod>;
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
	Assignments(): IBaseCollection<PS.PlanAssignment> & PS.PlanAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.PlanAssignment> & PS.PlanAssignmentCollections;
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
	Assignments(): IBaseCollection<PS.StatusAssignment> & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): IBaseQuery<PS.StatusAssignment> & PS.StatusAssignmentCollections;
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
