import { SP } from "../../../";

/*********************************************
* BaseSession
**********************************************/
export interface BaseSession {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* BooleanCriterion
**********************************************/
export interface BooleanCriterion {
	CompareType?: number;
}

/*********************************************
* CalloutInfo
**********************************************/
export interface CalloutInfo {
	Contacts?: Array<string>;
	DirectLinkTitle?: string;
	DirectLinkUrl?: string;
	Hierarchy?: Array<string>;
	Predecessors?: Array<string>;
	Successors?: Array<string>;
	Title?: string;
	Url?: string;
}

/*********************************************
* CreateRefreshJobResult
**********************************************/
export interface CreateRefreshJobResult {
	CreatedJob?: boolean;
	CurrentJobId?: number;
	EncounteredError?: boolean;
}

/*********************************************
* CustomAttributeFilter
**********************************************/
export interface CustomAttributeFilter {
	Attributes?: Array<string>;
	ConcatType?: number;
}

/*********************************************
* DashboardScriptExtensionInfo
**********************************************/
export interface DashboardScriptExtensionInfo {
	ProviderKey?: string;
	ScriptClass?: string;
	ScriptData?: string;
	ScriptFiles?: Array<string>;
}

/*********************************************
* DateRangeCriterion
**********************************************/
export interface DateRangeCriterion {
	RangeEndValue?: any;
	RangeStartValue?: any;
}

/*********************************************
* ExchangeUserSyncState
**********************************************/
export interface ExchangeUserSyncState {
	IsOptedIn?: boolean;
	LastEndTime?: any;
	LastSyncResult?: number;
}

/*********************************************
* Location
**********************************************/
export interface Location {
	Color?: string;
	Id?: number;
	Important?: boolean;
	Name?: string;
	ParentId?: number;
	RootProviderKey?: string;
	Url?: string;
}

/*********************************************
* LocationDisplaySetting
**********************************************/
export interface LocationDisplaySetting {
	Color?: string;
	Id?: number;
}

/*********************************************
* LocationFilter
**********************************************/
export interface LocationFilter {
	IncludeUncategorizedTasks?: boolean;
	LocationKeys?: Array<number>;
}

/*********************************************
* Task
**********************************************/
export interface Task {
	CustomAttributes?: Array<string>;
	Description?: string;
	DueDate?: any;
	EditUrl?: string;
	Id?: number;
	IsCompleted?: boolean;
	IsPersonal?: boolean;
	IsReadOnly?: boolean;
	LastModified?: any;
	LocationId?: number;
	Name?: string;
	PinAge?: number;
	SerializedCustomDataForClient?: string;
	StartDate?: any;
}

/*********************************************
* LocationOrientedSortableSession
**********************************************/
export interface LocationOrientedSortableSession extends SP.WorkManagement.OM.BaseSession {

}

/*********************************************
* LocationOrientedUserOrderedSession
**********************************************/
export interface LocationOrientedUserOrderedSession extends SP.WorkManagement.OM.BaseSession {

}

/*********************************************
* LocationUpdateResult
**********************************************/
export interface LocationUpdateResult {
	ActiveAddedCount?: number;
	AddedCount?: number;
	RemovedCount?: number;
	RootLocationId?: number;
	UpdatedCount?: number;
}

/*********************************************
* NameCriterion
**********************************************/
export interface NameCriterion {
	CompareType?: number;
	CompareValue?: string;
}

/*********************************************
* NonTaskDataReadResult
**********************************************/
export interface NonTaskDataReadResult {
	AllLocatons?: () => Array<SP.WorkManagement.OM.Location>;
	PersistedProperties?: () => SP.WorkManagement.OM.PersistedProperties;
	RefreshHistory?: () => SP.WorkManagement.OM.RefreshHistory;
	ScriptExtensions?: () => Array<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	UserSettings?: () => SP.WorkManagement.OM.UserSettings;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersistedProperties
**********************************************/
export interface PersistedProperties {
	FilteredLocationIds?: Array<number>;
	GroupByProjects?: boolean;
	HasShownMarkAsImportantCallout?: boolean;
	HasShownTaskListTooLongNotification?: boolean;
	QuickLaunchLandingPage?: string;
}

/*********************************************
* RefreshHistory
**********************************************/
export interface RefreshHistory {
	Refreshes?: () => Array<SP.WorkManagement.OM.RefreshResult>;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RefreshResult
**********************************************/
export interface RefreshResult {
	ProviderStatuses?: () => Array<SP.WorkManagement.OM.ProviderRefreshStatus>;
	TaskChangesByLocation?: () => Array<SP.WorkManagement.OM.LocationUpdateResult>;
	AggregatorRefreshState?: number;
	CorrelationId?: string;
	RefreshFinished?: any;
	RefreshId?: number;
}

/*********************************************
* ProviderRefreshStatus
**********************************************/
export interface ProviderRefreshStatus {
	ProviderKey?: string;
	ProviderLocalizedName?: string;
	RefreshFinished?: any;
	RefreshStarted?: any;
	RootLocationId?: number;
}

/*********************************************
* UserSettings
**********************************************/
export interface UserSettings {
	DaysAfterCurrentDateTimelineEnds?: number;
	DaysATaskIsConsideredNewTask?: number;
	DaysBeforeCurrentDateTimelineStarts?: number;
	ImportantLocationIds?: Array<number>;
	ImportantTasksLimit?: number;
	InactiveMonthsBeforeLocationExpiration?: number;
	LateTasksLimit?: number;
	OldTasksLimit?: number;
	UpcomingTasksLimit?: number;
}

/*********************************************
* OrderInfo
**********************************************/
export interface OrderInfo {
	Field?: number;
	IsDescending?: boolean;
}

/*********************************************
* ProviderErrorInfo
**********************************************/
export interface ProviderErrorInfo {
	CorrelationId?: string;
	LastSuccessfulRefresh?: any;
	LocalizedName?: string;
}

/*********************************************
* RefreshHealthInfo
**********************************************/
export interface RefreshHealthInfo {
	ProviderErrors?: () => Array<SP.WorkManagement.OM.ProviderErrorInfo>;
	LatestRefreshTime?: any;
	NewTasks?: number;
	Succeeded?: boolean;
}

/*********************************************
* SortableSessionManager
**********************************************/
export interface SortableSessionManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableSession
**********************************************/
export interface SortableSession extends SP.WorkManagement.OM.BaseSession {

}

/*********************************************
* SortableTaskQuery
**********************************************/
export interface SortableTaskQuery {
	CoreQuery?: () => SP.WorkManagement.OM.TaskQuery;
	Order?: () => SP.WorkManagement.OM.OrderInfo;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery {
	CustomAttributeFilter?: () => SP.WorkManagement.OM.CustomAttributeFilter;
	FieldFilter?: () => SP.WorkManagement.OM.TaskFilter;
	LastModifiedDateRangeFilter?: () => SP.WorkManagement.OM.DateRangeCriterion;
	LocationFilter?: () => SP.WorkManagement.OM.LocationFilter;
	KeywordFilter?: string;
	LastQueryTime?: any;
	PinnedFilter?: number;
}

/*********************************************
* TaskFilter
**********************************************/
export interface TaskFilter {
	CompletedCriterion?: () => SP.WorkManagement.OM.BooleanCriterion;
	DueDateRangeCriterion?: () => SP.WorkManagement.OM.DateRangeCriterion;
	IsNewCriterion?: () => SP.WorkManagement.OM.BooleanCriterion;
	NameCriterion?: () => SP.WorkManagement.OM.NameCriterion;
	StartDateRangeCriterion?: () => SP.WorkManagement.OM.DateRangeCriterion;
	CriterionConcatType?: number;
	IdsToFilterBy?: Array<number>;
}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult {
	Results?: () => Array<SP.WorkManagement.OM.Task>;
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult {
	Results?: () => Array<SP.WorkManagement.OM.Task>;
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult {
	Result?: () => SP.WorkManagement.OM.Task;
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult {
	Result?: () => SP.WorkManagement.OM.Task;
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* UserOrderedSessionManager
**********************************************/
export interface UserOrderedSessionManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserOrderedSession
**********************************************/
export interface UserOrderedSession extends SP.WorkManagement.OM.BaseSession {

}

/*********************************************
* UserSettingsManager
**********************************************/
export interface UserSettingsManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ViewSelectionInfo
**********************************************/
export interface ViewSelectionInfo {
	Id?: number;
	Image?: string;
	Name?: string;
}
