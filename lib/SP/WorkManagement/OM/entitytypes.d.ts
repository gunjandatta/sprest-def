import { SP } from "../../../";

/*********************************************
* BaseSession
**********************************************/
export interface BaseSession {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* BaseSessionMethods<T = any>
**********************************************/
export interface BaseSessionMethods<T = any> {
	addAttributeToTask(taskKey?: number, attribute?: string): T;
	beginCacheRefresh(): T;
	beginExchangeSync(): T;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): T;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): T;
	deleteTask(taskKey?: number): T;
	getCalloutInfo(taskKey?: number): T;
	getRefreshHealthInfo(): T;
	getRefreshHistory(since?: any): T;
	getRefreshStatus(refreshId?: number): T;
	isExchangeJobPending(): T;
	pinTask(taskKey?: number): T;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): T;
	readAllNonTaskData(): T;
	refreshSingleTask(taskKey?: number): T;
	removeAttributeFromTask(taskKey?: number, attribute?: string): T;
	removePinOnTask(taskKey?: number): T;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): T;
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
* LocationOrientedSortableSessionMethods<T = any>
**********************************************/
export interface LocationOrientedSortableSessionMethods<T = any> {
	addAttributeToTask(taskKey?: number, attribute?: string): T;
	beginCacheRefresh(): T;
	beginExchangeSync(): T;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): T;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): T;
	deleteTask(taskKey?: number): T;
	getCalloutInfo(taskKey?: number): T;
	getRefreshHealthInfo(): T;
	getRefreshHistory(since?: any): T;
	getRefreshStatus(refreshId?: number): T;
	isExchangeJobPending(): T;
	pinTask(taskKey?: number): T;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): T;
	readAllNonTaskData(): T;
	refreshSingleTask(taskKey?: number): T;
	removeAttributeFromTask(taskKey?: number, attribute?: string): T;
	removePinOnTask(taskKey?: number): T;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): T;
	movePersonalTaskToLocation(taskKey?: number, newLocationKey?: number): T;
}

/*********************************************
* LocationOrientedUserOrderedSession
**********************************************/
export interface LocationOrientedUserOrderedSession extends SP.WorkManagement.OM.BaseSession {

}

/*********************************************
* LocationOrientedUserOrderedSessionMethods<T = any>
**********************************************/
export interface LocationOrientedUserOrderedSessionMethods<T = any> {
	addAttributeToTask(taskKey?: number, attribute?: string): T;
	beginCacheRefresh(): T;
	beginExchangeSync(): T;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): T;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): T;
	deleteTask(taskKey?: number): T;
	getCalloutInfo(taskKey?: number): T;
	getRefreshHealthInfo(): T;
	getRefreshHistory(since?: any): T;
	getRefreshStatus(refreshId?: number): T;
	isExchangeJobPending(): T;
	pinTask(taskKey?: number): T;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): T;
	readAllNonTaskData(): T;
	refreshSingleTask(taskKey?: number): T;
	removeAttributeFromTask(taskKey?: number, attribute?: string): T;
	removePinOnTask(taskKey?: number): T;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): T;
	movePersonalTaskToLocation(taskKey?: number, newLocationKey?: number): T;
	reorderTask(taskKey?: number, newAfterTaskKey?: number): T;
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
* NonTaskDataReadResultCollections<T = any>
**********************************************/
export interface NonTaskDataReadResultCollections<T = any> {
	AllLocatons(): T;
	PersistedProperties(): T;
	RefreshHistory(): T;
	ScriptExtensions(): T;
	UserSettings(): T;
}

/*********************************************
* NonTaskDataReadResultQuery
**********************************************/
export interface NonTaskDataReadResultQuery {
	AllLocatons(): T;
	PersistedProperties(): T;
	RefreshHistory(): T;
	ScriptExtensions(): T;
	UserSettings(): T;
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
* RefreshHistoryCollections<T = any>
**********************************************/
export interface RefreshHistoryCollections<T = any> {
	Refreshes(): T;
}

/*********************************************
* RefreshHistoryQuery
**********************************************/
export interface RefreshHistoryQuery {
	Refreshes(): T;
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
* RefreshResultCollections<T = any>
**********************************************/
export interface RefreshResultCollections<T = any> {
	ProviderStatuses(): T;
	TaskChangesByLocation(): T;
}

/*********************************************
* RefreshResultQuery
**********************************************/
export interface RefreshResultQuery {
	ProviderStatuses(): T;
	TaskChangesByLocation(): T;
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
* RefreshHealthInfoCollections<T = any>
**********************************************/
export interface RefreshHealthInfoCollections<T = any> {
	ProviderErrors(): T;
}

/*********************************************
* RefreshHealthInfoQuery
**********************************************/
export interface RefreshHealthInfoQuery {
	ProviderErrors(): T;
}

/*********************************************
* SortableSessionManager
**********************************************/
export interface SortableSessionManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableSessionManagerMethods<T = any>
**********************************************/
export interface SortableSessionManagerMethods<T = any> {
	createLocationOrientedSession(): T;
	createSession(): T;
}

/*********************************************
* SortableSession
**********************************************/
export interface SortableSession extends SP.WorkManagement.OM.BaseSession {

}

/*********************************************
* SortableSessionMethods<T = any>
**********************************************/
export interface SortableSessionMethods<T = any> {
	addAttributeToTask(taskKey?: number, attribute?: string): T;
	beginCacheRefresh(): T;
	beginExchangeSync(): T;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): T;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): T;
	deleteTask(taskKey?: number): T;
	getCalloutInfo(taskKey?: number): T;
	getRefreshHealthInfo(): T;
	getRefreshHistory(since?: any): T;
	getRefreshStatus(refreshId?: number): T;
	isExchangeJobPending(): T;
	pinTask(taskKey?: number): T;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): T;
	readAllNonTaskData(): T;
	refreshSingleTask(taskKey?: number): T;
	removeAttributeFromTask(taskKey?: number, attribute?: string): T;
	removePinOnTask(taskKey?: number): T;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): T;
}

/*********************************************
* SortableTaskQuery
**********************************************/
export interface SortableTaskQuery {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableTaskQueryCollections<T = any>
**********************************************/
export interface SortableTaskQueryCollections<T = any> {
	CoreQuery(): T;
	Order(): T;
}

/*********************************************
* SortableTaskQueryQuery
**********************************************/
export interface SortableTaskQueryQuery {
	CoreQuery(): T;
	Order(): T;
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
* TaskQueryCollections<T = any>
**********************************************/
export interface TaskQueryCollections<T = any> {
	CustomAttributeFilter(): T;
	FieldFilter(): T;
	LastModifiedDateRangeFilter(): T;
	LocationFilter(): T;
}

/*********************************************
* TaskQueryQuery
**********************************************/
export interface TaskQueryQuery {
	CustomAttributeFilter(): T;
	FieldFilter(): T;
	LastModifiedDateRangeFilter(): T;
	LocationFilter(): T;
}

/*********************************************
* TaskFilter
**********************************************/
export interface TaskFilter {
	CriterionConcatType?: number;
	IdsToFilterBy?: Array<number>;
}

/*********************************************
* TaskFilterCollections<T = any>
**********************************************/
export interface TaskFilterCollections<T = any> {
	CompletedCriterion(): T;
	DueDateRangeCriterion(): T;
	IsNewCriterion(): T;
	NameCriterion(): T;
	StartDateRangeCriterion(): T;
}

/*********************************************
* TaskFilterQuery
**********************************************/
export interface TaskFilterQuery {
	CompletedCriterion(): T;
	DueDateRangeCriterion(): T;
	IsNewCriterion(): T;
	NameCriterion(): T;
	StartDateRangeCriterion(): T;
}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryByLocationResultCollections<T = any>
**********************************************/
export interface TaskQueryByLocationResultCollections<T = any> {
	Results(): T;
}

/*********************************************
* TaskQueryByLocationResultQuery
**********************************************/
export interface TaskQueryByLocationResultQuery {
	Results(): T;
}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResultCollections<T = any>
**********************************************/
export interface TaskQueryResultCollections<T = any> {
	Results(): T;
}

/*********************************************
* TaskQueryResultQuery
**********************************************/
export interface TaskQueryResultQuery {
	Results(): T;
}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult {
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskRefreshResultCollections<T = any>
**********************************************/
export interface TaskRefreshResultCollections<T = any> {
	Result(): T;
}

/*********************************************
* TaskRefreshResultQuery
**********************************************/
export interface TaskRefreshResultQuery {
	Result(): T;
}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskWriteResultCollections<T = any>
**********************************************/
export interface TaskWriteResultCollections<T = any> {
	Result(): T;
}

/*********************************************
* TaskWriteResultQuery
**********************************************/
export interface TaskWriteResultQuery {
	Result(): T;
}

/*********************************************
* UserOrderedSessionManager
**********************************************/
export interface UserOrderedSessionManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserOrderedSessionManagerMethods<T = any>
**********************************************/
export interface UserOrderedSessionManagerMethods<T = any> {
	createLocationOrientedSession(): T;
	createSession(): T;
}

/*********************************************
* UserOrderedSession
**********************************************/
export interface UserOrderedSession extends SP.WorkManagement.OM.BaseSession {

}

/*********************************************
* UserOrderedSessionMethods<T = any>
**********************************************/
export interface UserOrderedSessionMethods<T = any> {
	addAttributeToTask(taskKey?: number, attribute?: string): T;
	beginCacheRefresh(): T;
	beginExchangeSync(): T;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): T;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): T;
	deleteTask(taskKey?: number): T;
	getCalloutInfo(taskKey?: number): T;
	getRefreshHealthInfo(): T;
	getRefreshHistory(since?: any): T;
	getRefreshStatus(refreshId?: number): T;
	isExchangeJobPending(): T;
	pinTask(taskKey?: number): T;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): T;
	readAllNonTaskData(): T;
	refreshSingleTask(taskKey?: number): T;
	removeAttributeFromTask(taskKey?: number, attribute?: string): T;
	removePinOnTask(taskKey?: number): T;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): T;
	reorderTask(taskKey?: number, newAfterTaskKey?: number): T;
}

/*********************************************
* UserSettingsManager
**********************************************/
export interface UserSettingsManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSettingsManagerMethods<T = any>
**********************************************/
export interface UserSettingsManagerMethods<T = any> {
	getAllLocations(): T;
	getExchangeSyncInfo(): T;
	getImportantLocations(): T;
	getLocations(locationsId?: Array<number>): T;
	getPersistedProperties(): T;
	getUserSettings(): T;
	isExchangeJobPending(): T;
	optIntoExchangeSync(): T;
	optOutOfExchangeSync(): T;
}

/*********************************************
* ViewSelectionInfo
**********************************************/
export interface ViewSelectionInfo {
	Id?: number;
	Image?: string;
	Name?: string;
}
