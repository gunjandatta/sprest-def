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
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NonTaskDataReadResultMethods
**********************************************/
export interface NonTaskDataReadResultMethods extends NonTaskDataReadResult {
	AllLocatons?: () => Array<SP.WorkManagement.OM.Location>;
	PersistedProperties?: () => SP.WorkManagement.OM.PersistedProperties;
	RefreshHistory?: () => SP.WorkManagement.OM.RefreshHistory;
	ScriptExtensions?: () => Array<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	UserSettings?: () => SP.WorkManagement.OM.UserSettings;
}

/*********************************************
* NonTaskDataReadResultQuery
**********************************************/
export interface NonTaskDataReadResultQuery extends NonTaskDataReadResult {
	AllLocatons?: Array<SP.WorkManagement.OM.Location>;
	PersistedProperties?: SP.WorkManagement.OM.PersistedProperties;
	RefreshHistory?: SP.WorkManagement.OM.RefreshHistory;
	ScriptExtensions?: Array<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	UserSettings?: SP.WorkManagement.OM.UserSettings;
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
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RefreshHistoryMethods
**********************************************/
export interface RefreshHistoryMethods extends RefreshHistory {
	Refreshes?: () => Array<SP.WorkManagement.OM.RefreshResult>;
}

/*********************************************
* RefreshHistoryQuery
**********************************************/
export interface RefreshHistoryQuery extends RefreshHistory {
	Refreshes?: Array<SP.WorkManagement.OM.RefreshResult>;
}

/*********************************************
* RefreshResult
**********************************************/
export interface RefreshResult {
	AggregatorRefreshState?: number;
	CorrelationId?: string;
	RefreshFinished?: any;
	RefreshId?: number;
}

/*********************************************
* RefreshResultMethods
**********************************************/
export interface RefreshResultMethods extends RefreshResult {
	ProviderStatuses?: () => Array<SP.WorkManagement.OM.ProviderRefreshStatus>;
	TaskChangesByLocation?: () => Array<SP.WorkManagement.OM.LocationUpdateResult>;
}

/*********************************************
* RefreshResultQuery
**********************************************/
export interface RefreshResultQuery extends RefreshResult {
	ProviderStatuses?: Array<SP.WorkManagement.OM.ProviderRefreshStatus>;
	TaskChangesByLocation?: Array<SP.WorkManagement.OM.LocationUpdateResult>;
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
	LatestRefreshTime?: any;
	NewTasks?: number;
	Succeeded?: boolean;
}

/*********************************************
* RefreshHealthInfoMethods
**********************************************/
export interface RefreshHealthInfoMethods extends RefreshHealthInfo {
	ProviderErrors?: () => Array<SP.WorkManagement.OM.ProviderErrorInfo>;
}

/*********************************************
* RefreshHealthInfoQuery
**********************************************/
export interface RefreshHealthInfoQuery extends RefreshHealthInfo {
	ProviderErrors?: Array<SP.WorkManagement.OM.ProviderErrorInfo>;
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
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableTaskQueryMethods
**********************************************/
export interface SortableTaskQueryMethods extends SortableTaskQuery {
	CoreQuery?: () => SP.WorkManagement.OM.TaskQuery;
	Order?: () => SP.WorkManagement.OM.OrderInfo;
}

/*********************************************
* SortableTaskQueryQuery
**********************************************/
export interface SortableTaskQueryQuery extends SortableTaskQuery {
	CoreQuery?: SP.WorkManagement.OM.TaskQuery;
	Order?: SP.WorkManagement.OM.OrderInfo;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery {
	KeywordFilter?: string;
	LastQueryTime?: any;
	PinnedFilter?: number;
}

/*********************************************
* TaskQueryMethods
**********************************************/
export interface TaskQueryMethods extends TaskQuery {
	CustomAttributeFilter?: () => SP.WorkManagement.OM.CustomAttributeFilter;
	FieldFilter?: () => SP.WorkManagement.OM.TaskFilter;
	LastModifiedDateRangeFilter?: () => SP.WorkManagement.OM.DateRangeCriterion;
	LocationFilter?: () => SP.WorkManagement.OM.LocationFilter;
}

/*********************************************
* TaskQueryQuery
**********************************************/
export interface TaskQueryQuery extends TaskQuery {
	CustomAttributeFilter?: SP.WorkManagement.OM.CustomAttributeFilter;
	FieldFilter?: SP.WorkManagement.OM.TaskFilter;
	LastModifiedDateRangeFilter?: SP.WorkManagement.OM.DateRangeCriterion;
	LocationFilter?: SP.WorkManagement.OM.LocationFilter;
}

/*********************************************
* TaskFilter
**********************************************/
export interface TaskFilter {
	CriterionConcatType?: number;
	IdsToFilterBy?: Array<number>;
}

/*********************************************
* TaskFilterMethods
**********************************************/
export interface TaskFilterMethods extends TaskFilter {
	CompletedCriterion?: () => SP.WorkManagement.OM.BooleanCriterion;
	DueDateRangeCriterion?: () => SP.WorkManagement.OM.DateRangeCriterion;
	IsNewCriterion?: () => SP.WorkManagement.OM.BooleanCriterion;
	NameCriterion?: () => SP.WorkManagement.OM.NameCriterion;
	StartDateRangeCriterion?: () => SP.WorkManagement.OM.DateRangeCriterion;
}

/*********************************************
* TaskFilterQuery
**********************************************/
export interface TaskFilterQuery extends TaskFilter {
	CompletedCriterion?: SP.WorkManagement.OM.BooleanCriterion;
	DueDateRangeCriterion?: SP.WorkManagement.OM.DateRangeCriterion;
	IsNewCriterion?: SP.WorkManagement.OM.BooleanCriterion;
	NameCriterion?: SP.WorkManagement.OM.NameCriterion;
	StartDateRangeCriterion?: SP.WorkManagement.OM.DateRangeCriterion;
}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryByLocationResultMethods
**********************************************/
export interface TaskQueryByLocationResultMethods extends TaskQueryByLocationResult {
	Results?: () => Array<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryByLocationResultQuery
**********************************************/
export interface TaskQueryByLocationResultQuery extends TaskQueryByLocationResult {
	Results?: Array<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResultMethods
**********************************************/
export interface TaskQueryResultMethods extends TaskQueryResult {
	Results?: () => Array<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryResultQuery
**********************************************/
export interface TaskQueryResultQuery extends TaskQueryResult {
	Results?: Array<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult {
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskRefreshResultMethods
**********************************************/
export interface TaskRefreshResultMethods extends TaskRefreshResult {
	Result?: () => SP.WorkManagement.OM.Task;
}

/*********************************************
* TaskRefreshResultQuery
**********************************************/
export interface TaskRefreshResultQuery extends TaskRefreshResult {
	Result?: SP.WorkManagement.OM.Task;
}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskWriteResultMethods
**********************************************/
export interface TaskWriteResultMethods extends TaskWriteResult {
	Result?: () => SP.WorkManagement.OM.Task;
}

/*********************************************
* TaskWriteResultQuery
**********************************************/
export interface TaskWriteResultQuery extends TaskWriteResult {
	Result?: SP.WorkManagement.OM.Task;
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
