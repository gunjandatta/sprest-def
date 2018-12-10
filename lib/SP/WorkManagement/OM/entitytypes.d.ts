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
* NonTaskDataReadResultCollections
**********************************************/
export interface NonTaskDataReadResultCollections {
	AllLocatons<T=Array<SP.WorkManagement.OM.Location>>(): T;
	PersistedProperties<T=SP.WorkManagement.OM.PersistedProperties>(): T;
	RefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(): T;
	ScriptExtensions<T=Array<SP.WorkManagement.OM.DashboardScriptExtensionInfo>>(): T;
	UserSettings<T=SP.WorkManagement.OM.UserSettings>(): T;
}

/*********************************************
* NonTaskDataReadResultQuery
**********************************************/
export interface NonTaskDataReadResultQuery {
	AllLocatons<T=Array<SP.WorkManagement.OM.Location>>(): T;
	PersistedProperties<T=SP.WorkManagement.OM.PersistedProperties>(): T;
	RefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(): T;
	ScriptExtensions<T=Array<SP.WorkManagement.OM.DashboardScriptExtensionInfo>>(): T;
	UserSettings<T=SP.WorkManagement.OM.UserSettings>(): T;
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
* RefreshHistoryCollections
**********************************************/
export interface RefreshHistoryCollections {
	Refreshes<T=Array<SP.WorkManagement.OM.RefreshResult>>(): T;
}

/*********************************************
* RefreshHistoryQuery
**********************************************/
export interface RefreshHistoryQuery {
	Refreshes<T=Array<SP.WorkManagement.OM.RefreshResult>>(): T;
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
* RefreshResultCollections
**********************************************/
export interface RefreshResultCollections {
	ProviderStatuses<T=Array<SP.WorkManagement.OM.ProviderRefreshStatus>>(): T;
	TaskChangesByLocation<T=Array<SP.WorkManagement.OM.LocationUpdateResult>>(): T;
}

/*********************************************
* RefreshResultQuery
**********************************************/
export interface RefreshResultQuery {
	ProviderStatuses<T=Array<SP.WorkManagement.OM.ProviderRefreshStatus>>(): T;
	TaskChangesByLocation<T=Array<SP.WorkManagement.OM.LocationUpdateResult>>(): T;
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
* RefreshHealthInfoCollections
**********************************************/
export interface RefreshHealthInfoCollections {
	ProviderErrors<T=Array<SP.WorkManagement.OM.ProviderErrorInfo>>(): T;
}

/*********************************************
* RefreshHealthInfoQuery
**********************************************/
export interface RefreshHealthInfoQuery {
	ProviderErrors<T=Array<SP.WorkManagement.OM.ProviderErrorInfo>>(): T;
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
* SortableTaskQueryCollections
**********************************************/
export interface SortableTaskQueryCollections {
	CoreQuery<T=SP.WorkManagement.OM.TaskQuery>(): T;
	Order<T=SP.WorkManagement.OM.OrderInfo>(): T;
}

/*********************************************
* SortableTaskQueryQuery
**********************************************/
export interface SortableTaskQueryQuery {
	CoreQuery<T=SP.WorkManagement.OM.TaskQuery>(): T;
	Order<T=SP.WorkManagement.OM.OrderInfo>(): T;
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
* TaskQueryCollections
**********************************************/
export interface TaskQueryCollections {
	CustomAttributeFilter<T=SP.WorkManagement.OM.CustomAttributeFilter>(): T;
	FieldFilter<T=SP.WorkManagement.OM.TaskFilter>(): T;
	LastModifiedDateRangeFilter<T=SP.WorkManagement.OM.DateRangeCriterion>(): T;
	LocationFilter<T=SP.WorkManagement.OM.LocationFilter>(): T;
}

/*********************************************
* TaskQueryQuery
**********************************************/
export interface TaskQueryQuery {
	CustomAttributeFilter<T=SP.WorkManagement.OM.CustomAttributeFilter>(): T;
	FieldFilter<T=SP.WorkManagement.OM.TaskFilter>(): T;
	LastModifiedDateRangeFilter<T=SP.WorkManagement.OM.DateRangeCriterion>(): T;
	LocationFilter<T=SP.WorkManagement.OM.LocationFilter>(): T;
}

/*********************************************
* TaskFilter
**********************************************/
export interface TaskFilter {
	CriterionConcatType?: number;
	IdsToFilterBy?: Array<number>;
}

/*********************************************
* TaskFilterCollections
**********************************************/
export interface TaskFilterCollections {
	CompletedCriterion<T=SP.WorkManagement.OM.BooleanCriterion>(): T;
	DueDateRangeCriterion<T=SP.WorkManagement.OM.DateRangeCriterion>(): T;
	IsNewCriterion<T=SP.WorkManagement.OM.BooleanCriterion>(): T;
	NameCriterion<T=SP.WorkManagement.OM.NameCriterion>(): T;
	StartDateRangeCriterion<T=SP.WorkManagement.OM.DateRangeCriterion>(): T;
}

/*********************************************
* TaskFilterQuery
**********************************************/
export interface TaskFilterQuery {
	CompletedCriterion<T=SP.WorkManagement.OM.BooleanCriterion>(): T;
	DueDateRangeCriterion<T=SP.WorkManagement.OM.DateRangeCriterion>(): T;
	IsNewCriterion<T=SP.WorkManagement.OM.BooleanCriterion>(): T;
	NameCriterion<T=SP.WorkManagement.OM.NameCriterion>(): T;
	StartDateRangeCriterion<T=SP.WorkManagement.OM.DateRangeCriterion>(): T;
}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryByLocationResultCollections
**********************************************/
export interface TaskQueryByLocationResultCollections {
	Results<T=Array<SP.WorkManagement.OM.Task>>(): T;
}

/*********************************************
* TaskQueryByLocationResultQuery
**********************************************/
export interface TaskQueryByLocationResultQuery {
	Results<T=Array<SP.WorkManagement.OM.Task>>(): T;
}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResultCollections
**********************************************/
export interface TaskQueryResultCollections {
	Results<T=Array<SP.WorkManagement.OM.Task>>(): T;
}

/*********************************************
* TaskQueryResultQuery
**********************************************/
export interface TaskQueryResultQuery {
	Results<T=Array<SP.WorkManagement.OM.Task>>(): T;
}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult {
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskRefreshResultCollections
**********************************************/
export interface TaskRefreshResultCollections {
	Result<T=SP.WorkManagement.OM.Task>(): T;
}

/*********************************************
* TaskRefreshResultQuery
**********************************************/
export interface TaskRefreshResultQuery {
	Result<T=SP.WorkManagement.OM.Task>(): T;
}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskWriteResultCollections
**********************************************/
export interface TaskWriteResultCollections {
	Result<T=SP.WorkManagement.OM.Task>(): T;
}

/*********************************************
* TaskWriteResultQuery
**********************************************/
export interface TaskWriteResultQuery {
	Result<T=SP.WorkManagement.OM.Task>(): T;
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
