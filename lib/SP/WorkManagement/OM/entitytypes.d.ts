import { IBaseExecution } from "../../../";
import { SP } from "../../../";
import { IBaseCollection } from "../../../";

/*********************************************
* IBaseSession
**********************************************/
export interface IBaseSession extends BaseSessionProps,BaseSessionMethods,IBaseExecution<BaseSession> {

}

/*********************************************
* BaseSession
**********************************************/
export interface BaseSession extends BaseSessionProps, BaseSessionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* BaseSessionProps
**********************************************/
export interface BaseSessionProps {

}

/*********************************************
* BaseSessionMethods
**********************************************/
export interface BaseSessionMethods {
	addAttributeToTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	beginCacheRefresh<T=SP.WorkManagement.OM.CreateRefreshJobResult>(): IBaseExecution<T>;
	beginExchangeSync<T=boolean>(): IBaseExecution<T>;
	createPersonalTaskAndPromoteToProviderTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<T>;
	createTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<T>;
	deleteTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	getCalloutInfo<T=SP.WorkManagement.OM.CalloutInfo>(taskKey?: number): IBaseExecution<T>;
	getRefreshHealthInfo<T=SP.WorkManagement.OM.RefreshHealthInfo>(): IBaseExecution<T>;
	getRefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(since?: any): IBaseExecution<T>;
	getRefreshStatus<T=SP.WorkManagement.OM.RefreshResult>(refreshId?: number): IBaseExecution<T>;
	isExchangeJobPending<T=boolean>(): IBaseExecution<T>;
	pinTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	promotePersonalTaskToProviderTaskInLocation<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, locationId?: number): IBaseExecution<T>;
	readAllNonTaskData<T=SP.WorkManagement.OM.NonTaskDataReadResult>(): IBaseExecution<T>;
	refreshSingleTask<T=SP.WorkManagement.OM.TaskRefreshResult>(taskKey?: number): IBaseExecution<T>;
	removeAttributeFromTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	removePinOnTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	updateTaskWithLocalizedValue<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, field?: number, value?: string): IBaseExecution<T>;
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
* ILocationOrientedSortableSession
**********************************************/
export interface ILocationOrientedSortableSession extends LocationOrientedSortableSessionProps,LocationOrientedSortableSessionMethods,IBaseExecution<LocationOrientedSortableSession> {

}

/*********************************************
* LocationOrientedSortableSession
**********************************************/
export interface LocationOrientedSortableSession extends SP.WorkManagement.OM.BaseSession, LocationOrientedSortableSessionProps, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSessionProps
**********************************************/
export interface LocationOrientedSortableSessionProps {

}

/*********************************************
* LocationOrientedSortableSessionMethods
**********************************************/
export interface LocationOrientedSortableSessionMethods {
	addAttributeToTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	beginCacheRefresh<T=SP.WorkManagement.OM.CreateRefreshJobResult>(): IBaseExecution<T>;
	beginExchangeSync<T=boolean>(): IBaseExecution<T>;
	createPersonalTaskAndPromoteToProviderTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<T>;
	createTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<T>;
	deleteTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	getCalloutInfo<T=SP.WorkManagement.OM.CalloutInfo>(taskKey?: number): IBaseExecution<T>;
	getRefreshHealthInfo<T=SP.WorkManagement.OM.RefreshHealthInfo>(): IBaseExecution<T>;
	getRefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(since?: any): IBaseExecution<T>;
	getRefreshStatus<T=SP.WorkManagement.OM.RefreshResult>(refreshId?: number): IBaseExecution<T>;
	isExchangeJobPending<T=boolean>(): IBaseExecution<T>;
	pinTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	promotePersonalTaskToProviderTaskInLocation<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, locationId?: number): IBaseExecution<T>;
	readAllNonTaskData<T=SP.WorkManagement.OM.NonTaskDataReadResult>(): IBaseExecution<T>;
	refreshSingleTask<T=SP.WorkManagement.OM.TaskRefreshResult>(taskKey?: number): IBaseExecution<T>;
	removeAttributeFromTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	removePinOnTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	updateTaskWithLocalizedValue<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, field?: number, value?: string): IBaseExecution<T>;
	movePersonalTaskToLocation<T=boolean>(taskKey?: number, newLocationKey?: number): IBaseExecution<T>;
}

/*********************************************
* ILocationOrientedUserOrderedSession
**********************************************/
export interface ILocationOrientedUserOrderedSession extends LocationOrientedUserOrderedSessionProps,LocationOrientedUserOrderedSessionMethods,IBaseExecution<LocationOrientedUserOrderedSession> {

}

/*********************************************
* LocationOrientedUserOrderedSession
**********************************************/
export interface LocationOrientedUserOrderedSession extends SP.WorkManagement.OM.BaseSession, LocationOrientedUserOrderedSessionProps, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionProps
**********************************************/
export interface LocationOrientedUserOrderedSessionProps {

}

/*********************************************
* LocationOrientedUserOrderedSessionMethods
**********************************************/
export interface LocationOrientedUserOrderedSessionMethods {
	addAttributeToTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	beginCacheRefresh<T=SP.WorkManagement.OM.CreateRefreshJobResult>(): IBaseExecution<T>;
	beginExchangeSync<T=boolean>(): IBaseExecution<T>;
	createPersonalTaskAndPromoteToProviderTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<T>;
	createTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<T>;
	deleteTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	getCalloutInfo<T=SP.WorkManagement.OM.CalloutInfo>(taskKey?: number): IBaseExecution<T>;
	getRefreshHealthInfo<T=SP.WorkManagement.OM.RefreshHealthInfo>(): IBaseExecution<T>;
	getRefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(since?: any): IBaseExecution<T>;
	getRefreshStatus<T=SP.WorkManagement.OM.RefreshResult>(refreshId?: number): IBaseExecution<T>;
	isExchangeJobPending<T=boolean>(): IBaseExecution<T>;
	pinTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	promotePersonalTaskToProviderTaskInLocation<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, locationId?: number): IBaseExecution<T>;
	readAllNonTaskData<T=SP.WorkManagement.OM.NonTaskDataReadResult>(): IBaseExecution<T>;
	refreshSingleTask<T=SP.WorkManagement.OM.TaskRefreshResult>(taskKey?: number): IBaseExecution<T>;
	removeAttributeFromTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	removePinOnTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	updateTaskWithLocalizedValue<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, field?: number, value?: string): IBaseExecution<T>;
	movePersonalTaskToLocation<T=boolean>(taskKey?: number, newLocationKey?: number): IBaseExecution<T>;
	reorderTask<T=any>(taskKey?: number, newAfterTaskKey?: number): IBaseExecution<T>;
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
* INonTaskDataReadResult
**********************************************/
export interface INonTaskDataReadResult extends NonTaskDataReadResultProps,NonTaskDataReadResultMethods,IBaseExecution<NonTaskDataReadResult> {

}

/*********************************************
* NonTaskDataReadResult
**********************************************/
export interface NonTaskDataReadResult extends NonTaskDataReadResultProps, NonTaskDataReadResultMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NonTaskDataReadResultProps
**********************************************/
export interface NonTaskDataReadResultProps {
	AllLocatons<T=SP.WorkManagement.OM.Location>(): IBaseCollection<T>;
	PersistedProperties<T=SP.WorkManagement.OM.PersistedProperties>(): IBaseExecution<T>;
	RefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(): IBaseExecution<T>;
	ScriptExtensions<T=SP.WorkManagement.OM.DashboardScriptExtensionInfo>(): IBaseCollection<T>;
	UserSettings<T=SP.WorkManagement.OM.UserSettings>(): IBaseExecution<T>;
}

/*********************************************
* NonTaskDataReadResultMethods
**********************************************/
export interface NonTaskDataReadResultMethods {

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
* IRefreshHistory
**********************************************/
export interface IRefreshHistory extends RefreshHistoryProps,RefreshHistoryMethods,IBaseExecution<RefreshHistory> {

}

/*********************************************
* RefreshHistory
**********************************************/
export interface RefreshHistory extends RefreshHistoryProps, RefreshHistoryMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RefreshHistoryProps
**********************************************/
export interface RefreshHistoryProps {
	Refreshes<T=SP.WorkManagement.OM.RefreshResult>(): IBaseCollection<T>;
}

/*********************************************
* RefreshHistoryMethods
**********************************************/
export interface RefreshHistoryMethods {

}

/*********************************************
* IRefreshResult
**********************************************/
export interface IRefreshResult extends RefreshResultProps,RefreshResultMethods,IBaseExecution<RefreshResult> {

}

/*********************************************
* RefreshResult
**********************************************/
export interface RefreshResult extends RefreshResultProps, RefreshResultMethods {
	AggregatorRefreshState?: number;
	CorrelationId?: string;
	RefreshFinished?: any;
	RefreshId?: number;
}

/*********************************************
* RefreshResultProps
**********************************************/
export interface RefreshResultProps {
	ProviderStatuses<T=SP.WorkManagement.OM.ProviderRefreshStatus>(): IBaseCollection<T>;
	TaskChangesByLocation<T=SP.WorkManagement.OM.LocationUpdateResult>(): IBaseCollection<T>;
}

/*********************************************
* RefreshResultMethods
**********************************************/
export interface RefreshResultMethods {

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
* IRefreshHealthInfo
**********************************************/
export interface IRefreshHealthInfo extends RefreshHealthInfoProps,RefreshHealthInfoMethods,IBaseExecution<RefreshHealthInfo> {

}

/*********************************************
* RefreshHealthInfo
**********************************************/
export interface RefreshHealthInfo extends RefreshHealthInfoProps, RefreshHealthInfoMethods {
	LatestRefreshTime?: any;
	NewTasks?: number;
	Succeeded?: boolean;
}

/*********************************************
* RefreshHealthInfoProps
**********************************************/
export interface RefreshHealthInfoProps {
	ProviderErrors<T=SP.WorkManagement.OM.ProviderErrorInfo>(): IBaseCollection<T>;
}

/*********************************************
* RefreshHealthInfoMethods
**********************************************/
export interface RefreshHealthInfoMethods {

}

/*********************************************
* ISortableSessionManager
**********************************************/
export interface ISortableSessionManager extends SortableSessionManagerProps,SortableSessionManagerMethods,IBaseExecution<SortableSessionManager> {

}

/*********************************************
* SortableSessionManager
**********************************************/
export interface SortableSessionManager extends SortableSessionManagerProps, SortableSessionManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableSessionManagerProps
**********************************************/
export interface SortableSessionManagerProps {

}

/*********************************************
* SortableSessionManagerMethods
**********************************************/
export interface SortableSessionManagerMethods {
	createLocationOrientedSession<T=SP.WorkManagement.OM.LocationOrientedSortableSession>(): IBaseExecution<T>;
	createSession<T=SP.WorkManagement.OM.SortableSession>(): IBaseExecution<T>;
}

/*********************************************
* ISortableSession
**********************************************/
export interface ISortableSession extends SortableSessionProps,SortableSessionMethods,IBaseExecution<SortableSession> {

}

/*********************************************
* SortableSession
**********************************************/
export interface SortableSession extends SP.WorkManagement.OM.BaseSession, SortableSessionProps, SortableSessionMethods {

}

/*********************************************
* SortableSessionProps
**********************************************/
export interface SortableSessionProps {

}

/*********************************************
* SortableSessionMethods
**********************************************/
export interface SortableSessionMethods {
	addAttributeToTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	beginCacheRefresh<T=SP.WorkManagement.OM.CreateRefreshJobResult>(): IBaseExecution<T>;
	beginExchangeSync<T=boolean>(): IBaseExecution<T>;
	createPersonalTaskAndPromoteToProviderTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<T>;
	createTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<T>;
	deleteTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	getCalloutInfo<T=SP.WorkManagement.OM.CalloutInfo>(taskKey?: number): IBaseExecution<T>;
	getRefreshHealthInfo<T=SP.WorkManagement.OM.RefreshHealthInfo>(): IBaseExecution<T>;
	getRefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(since?: any): IBaseExecution<T>;
	getRefreshStatus<T=SP.WorkManagement.OM.RefreshResult>(refreshId?: number): IBaseExecution<T>;
	isExchangeJobPending<T=boolean>(): IBaseExecution<T>;
	pinTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	promotePersonalTaskToProviderTaskInLocation<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, locationId?: number): IBaseExecution<T>;
	readAllNonTaskData<T=SP.WorkManagement.OM.NonTaskDataReadResult>(): IBaseExecution<T>;
	refreshSingleTask<T=SP.WorkManagement.OM.TaskRefreshResult>(taskKey?: number): IBaseExecution<T>;
	removeAttributeFromTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	removePinOnTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	updateTaskWithLocalizedValue<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, field?: number, value?: string): IBaseExecution<T>;
}

/*********************************************
* ISortableTaskQuery
**********************************************/
export interface ISortableTaskQuery extends SortableTaskQueryProps,SortableTaskQueryMethods,IBaseExecution<SortableTaskQuery> {

}

/*********************************************
* SortableTaskQuery
**********************************************/
export interface SortableTaskQuery extends SortableTaskQueryProps, SortableTaskQueryMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableTaskQueryProps
**********************************************/
export interface SortableTaskQueryProps {
	CoreQuery<T=SP.WorkManagement.OM.TaskQuery>(): IBaseExecution<T>;
	Order<T=SP.WorkManagement.OM.OrderInfo>(): IBaseExecution<T>;
}

/*********************************************
* SortableTaskQueryMethods
**********************************************/
export interface SortableTaskQueryMethods {

}

/*********************************************
* ITaskQuery
**********************************************/
export interface ITaskQuery extends TaskQueryProps,TaskQueryMethods,IBaseExecution<TaskQuery> {

}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery extends TaskQueryProps, TaskQueryMethods {
	KeywordFilter?: string;
	LastQueryTime?: any;
	PinnedFilter?: number;
}

/*********************************************
* TaskQueryProps
**********************************************/
export interface TaskQueryProps {
	CustomAttributeFilter<T=SP.WorkManagement.OM.CustomAttributeFilter>(): IBaseExecution<T>;
	FieldFilter<T=SP.WorkManagement.OM.TaskFilter>(): IBaseExecution<T>;
	LastModifiedDateRangeFilter<T=SP.WorkManagement.OM.DateRangeCriterion>(): IBaseExecution<T>;
	LocationFilter<T=SP.WorkManagement.OM.LocationFilter>(): IBaseExecution<T>;
}

/*********************************************
* TaskQueryMethods
**********************************************/
export interface TaskQueryMethods {

}

/*********************************************
* ITaskFilter
**********************************************/
export interface ITaskFilter extends TaskFilterProps,TaskFilterMethods,IBaseExecution<TaskFilter> {

}

/*********************************************
* TaskFilter
**********************************************/
export interface TaskFilter extends TaskFilterProps, TaskFilterMethods {
	CriterionConcatType?: number;
	IdsToFilterBy?: Array<number>;
}

/*********************************************
* TaskFilterProps
**********************************************/
export interface TaskFilterProps {
	CompletedCriterion<T=SP.WorkManagement.OM.BooleanCriterion>(): IBaseExecution<T>;
	DueDateRangeCriterion<T=SP.WorkManagement.OM.DateRangeCriterion>(): IBaseExecution<T>;
	IsNewCriterion<T=SP.WorkManagement.OM.BooleanCriterion>(): IBaseExecution<T>;
	NameCriterion<T=SP.WorkManagement.OM.NameCriterion>(): IBaseExecution<T>;
	StartDateRangeCriterion<T=SP.WorkManagement.OM.DateRangeCriterion>(): IBaseExecution<T>;
}

/*********************************************
* TaskFilterMethods
**********************************************/
export interface TaskFilterMethods {

}

/*********************************************
* ITaskQueryByLocationResult
**********************************************/
export interface ITaskQueryByLocationResult extends TaskQueryByLocationResultProps,TaskQueryByLocationResultMethods,IBaseExecution<TaskQueryByLocationResult> {

}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult extends TaskQueryByLocationResultProps, TaskQueryByLocationResultMethods {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryByLocationResultProps
**********************************************/
export interface TaskQueryByLocationResultProps {
	Results<T=SP.WorkManagement.OM.Task>(): IBaseCollection<T>;
}

/*********************************************
* TaskQueryByLocationResultMethods
**********************************************/
export interface TaskQueryByLocationResultMethods {

}

/*********************************************
* ITaskQueryResult
**********************************************/
export interface ITaskQueryResult extends TaskQueryResultProps,TaskQueryResultMethods,IBaseExecution<TaskQueryResult> {

}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult extends TaskQueryResultProps, TaskQueryResultMethods {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResultProps
**********************************************/
export interface TaskQueryResultProps {
	Results<T=SP.WorkManagement.OM.Task>(): IBaseCollection<T>;
}

/*********************************************
* TaskQueryResultMethods
**********************************************/
export interface TaskQueryResultMethods {

}

/*********************************************
* ITaskRefreshResult
**********************************************/
export interface ITaskRefreshResult extends TaskRefreshResultProps,TaskRefreshResultMethods,IBaseExecution<TaskRefreshResult> {

}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult extends TaskRefreshResultProps, TaskRefreshResultMethods {
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskRefreshResultProps
**********************************************/
export interface TaskRefreshResultProps {
	Result<T=SP.WorkManagement.OM.Task>(): IBaseExecution<T>;
}

/*********************************************
* TaskRefreshResultMethods
**********************************************/
export interface TaskRefreshResultMethods {

}

/*********************************************
* ITaskWriteResult
**********************************************/
export interface ITaskWriteResult extends TaskWriteResultProps,TaskWriteResultMethods,IBaseExecution<TaskWriteResult> {

}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult extends TaskWriteResultProps, TaskWriteResultMethods {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskWriteResultProps
**********************************************/
export interface TaskWriteResultProps {
	Result<T=SP.WorkManagement.OM.Task>(): IBaseExecution<T>;
}

/*********************************************
* TaskWriteResultMethods
**********************************************/
export interface TaskWriteResultMethods {

}

/*********************************************
* IUserOrderedSessionManager
**********************************************/
export interface IUserOrderedSessionManager extends UserOrderedSessionManagerProps,UserOrderedSessionManagerMethods,IBaseExecution<UserOrderedSessionManager> {

}

/*********************************************
* UserOrderedSessionManager
**********************************************/
export interface UserOrderedSessionManager extends UserOrderedSessionManagerProps, UserOrderedSessionManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserOrderedSessionManagerProps
**********************************************/
export interface UserOrderedSessionManagerProps {

}

/*********************************************
* UserOrderedSessionManagerMethods
**********************************************/
export interface UserOrderedSessionManagerMethods {
	createLocationOrientedSession<T=SP.WorkManagement.OM.LocationOrientedUserOrderedSession>(): IBaseExecution<T>;
	createSession<T=SP.WorkManagement.OM.UserOrderedSession>(): IBaseExecution<T>;
}

/*********************************************
* IUserOrderedSession
**********************************************/
export interface IUserOrderedSession extends UserOrderedSessionProps,UserOrderedSessionMethods,IBaseExecution<UserOrderedSession> {

}

/*********************************************
* UserOrderedSession
**********************************************/
export interface UserOrderedSession extends SP.WorkManagement.OM.BaseSession, UserOrderedSessionProps, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSessionProps
**********************************************/
export interface UserOrderedSessionProps {

}

/*********************************************
* UserOrderedSessionMethods
**********************************************/
export interface UserOrderedSessionMethods {
	addAttributeToTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	beginCacheRefresh<T=SP.WorkManagement.OM.CreateRefreshJobResult>(): IBaseExecution<T>;
	beginExchangeSync<T=boolean>(): IBaseExecution<T>;
	createPersonalTaskAndPromoteToProviderTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<T>;
	createTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<T>;
	deleteTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	getCalloutInfo<T=SP.WorkManagement.OM.CalloutInfo>(taskKey?: number): IBaseExecution<T>;
	getRefreshHealthInfo<T=SP.WorkManagement.OM.RefreshHealthInfo>(): IBaseExecution<T>;
	getRefreshHistory<T=SP.WorkManagement.OM.RefreshHistory>(since?: any): IBaseExecution<T>;
	getRefreshStatus<T=SP.WorkManagement.OM.RefreshResult>(refreshId?: number): IBaseExecution<T>;
	isExchangeJobPending<T=boolean>(): IBaseExecution<T>;
	pinTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	promotePersonalTaskToProviderTaskInLocation<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, locationId?: number): IBaseExecution<T>;
	readAllNonTaskData<T=SP.WorkManagement.OM.NonTaskDataReadResult>(): IBaseExecution<T>;
	refreshSingleTask<T=SP.WorkManagement.OM.TaskRefreshResult>(taskKey?: number): IBaseExecution<T>;
	removeAttributeFromTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, attribute?: string): IBaseExecution<T>;
	removePinOnTask<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number): IBaseExecution<T>;
	updateTaskWithLocalizedValue<T=SP.WorkManagement.OM.TaskWriteResult>(taskKey?: number, field?: number, value?: string): IBaseExecution<T>;
	reorderTask<T=any>(taskKey?: number, newAfterTaskKey?: number): IBaseExecution<T>;
}

/*********************************************
* IUserSettingsManager
**********************************************/
export interface IUserSettingsManager extends UserSettingsManagerProps,UserSettingsManagerMethods,IBaseExecution<UserSettingsManager> {

}

/*********************************************
* UserSettingsManager
**********************************************/
export interface UserSettingsManager extends UserSettingsManagerProps, UserSettingsManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSettingsManagerProps
**********************************************/
export interface UserSettingsManagerProps {

}

/*********************************************
* UserSettingsManagerMethods
**********************************************/
export interface UserSettingsManagerMethods {
	getAllLocations<T=Array<SP.WorkManagement.OM.Location>>(): IBaseExecution<T>;
	getExchangeSyncInfo<T=SP.WorkManagement.OM.ExchangeUserSyncState>(): IBaseExecution<T>;
	getImportantLocations<T=Array<SP.WorkManagement.OM.Location>>(): IBaseExecution<T>;
	getLocations<T=Array<SP.WorkManagement.OM.Location>>(locationsId?: Array<number>): IBaseExecution<T>;
	getPersistedProperties<T=SP.WorkManagement.OM.PersistedProperties>(): IBaseExecution<T>;
	getUserSettings<T=SP.WorkManagement.OM.UserSettings>(): IBaseExecution<T>;
	isExchangeJobPending<T=boolean>(): IBaseExecution<T>;
	optIntoExchangeSync<T=number>(): IBaseExecution<T>;
	optOutOfExchangeSync<T=boolean>(): IBaseExecution<T>;
}

/*********************************************
* ViewSelectionInfo
**********************************************/
export interface ViewSelectionInfo {
	Id?: number;
	Image?: string;
	Name?: string;
}
