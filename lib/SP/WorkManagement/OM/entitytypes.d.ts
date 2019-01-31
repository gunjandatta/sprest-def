import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";
import { SP } from "../../../";
import { IBaseCollection } from "../../../";
import { IBaseResults } from "../../../";

/*********************************************
* IBaseSession
**********************************************/
export interface IBaseSession extends BaseSessionCollections,BaseSessionMethods,IBaseQuery<IBaseSessionQuery> {

}

/*********************************************
* IBaseSessionQuery
**********************************************/
export interface IBaseSessionQuery extends BaseSessionQuery,BaseSessionMethods {

}

/*********************************************
* BaseSession
**********************************************/
export interface BaseSession extends BaseSessionCollections, BaseSessionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* BaseSessionProps
**********************************************/
export interface BaseSessionProps {

}

/*********************************************
* BaseSessionCollections
**********************************************/
export interface BaseSessionCollections extends BaseSessionProps {

}

/*********************************************
* BaseSessionQuery
**********************************************/
export interface BaseSessionQuery extends BaseSessionProps {

}

/*********************************************
* BaseSessionMethods
**********************************************/
export interface BaseSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	deleteTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseExecution<SP.WorkManagement.OM.RefreshHealthInfo>;
	getRefreshHistory(since?: any): IBaseExecution<SP.WorkManagement.OM.RefreshHistory>;
	getRefreshStatus(refreshId?: number): IBaseExecution<SP.WorkManagement.OM.RefreshResult>;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	readAllNonTaskData(): IBaseExecution<SP.WorkManagement.OM.NonTaskDataReadResult>;
	refreshSingleTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskRefreshResult>;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	removePinOnTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
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
export interface ILocationOrientedSortableSession extends LocationOrientedSortableSessionCollections,LocationOrientedSortableSessionMethods,IBaseQuery<ILocationOrientedSortableSessionQuery> {

}

/*********************************************
* ILocationOrientedSortableSessionQuery
**********************************************/
export interface ILocationOrientedSortableSessionQuery extends LocationOrientedSortableSessionQuery,LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSession
**********************************************/
export interface LocationOrientedSortableSession extends SP.WorkManagement.OM.BaseSession, LocationOrientedSortableSessionCollections, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSessionProps
**********************************************/
export interface LocationOrientedSortableSessionProps {

}

/*********************************************
* LocationOrientedSortableSessionCollections
**********************************************/
export interface LocationOrientedSortableSessionCollections extends LocationOrientedSortableSessionProps {

}

/*********************************************
* LocationOrientedSortableSessionQuery
**********************************************/
export interface LocationOrientedSortableSessionQuery extends LocationOrientedSortableSessionProps {

}

/*********************************************
* LocationOrientedSortableSessionMethods
**********************************************/
export interface LocationOrientedSortableSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	deleteTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseExecution<SP.WorkManagement.OM.RefreshHealthInfo>;
	getRefreshHistory(since?: any): IBaseExecution<SP.WorkManagement.OM.RefreshHistory>;
	getRefreshStatus(refreshId?: number): IBaseExecution<SP.WorkManagement.OM.RefreshResult>;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	readAllNonTaskData(): IBaseExecution<SP.WorkManagement.OM.NonTaskDataReadResult>;
	refreshSingleTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskRefreshResult>;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	removePinOnTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	movePersonalTaskToLocation(taskKey?: number, newLocationKey?: number): IBaseExecution<boolean>;
}

/*********************************************
* ILocationOrientedUserOrderedSession
**********************************************/
export interface ILocationOrientedUserOrderedSession extends LocationOrientedUserOrderedSessionCollections,LocationOrientedUserOrderedSessionMethods,IBaseQuery<ILocationOrientedUserOrderedSessionQuery> {

}

/*********************************************
* ILocationOrientedUserOrderedSessionQuery
**********************************************/
export interface ILocationOrientedUserOrderedSessionQuery extends LocationOrientedUserOrderedSessionQuery,LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSession
**********************************************/
export interface LocationOrientedUserOrderedSession extends SP.WorkManagement.OM.BaseSession, LocationOrientedUserOrderedSessionCollections, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionProps
**********************************************/
export interface LocationOrientedUserOrderedSessionProps {

}

/*********************************************
* LocationOrientedUserOrderedSessionCollections
**********************************************/
export interface LocationOrientedUserOrderedSessionCollections extends LocationOrientedUserOrderedSessionProps {

}

/*********************************************
* LocationOrientedUserOrderedSessionQuery
**********************************************/
export interface LocationOrientedUserOrderedSessionQuery extends LocationOrientedUserOrderedSessionProps {

}

/*********************************************
* LocationOrientedUserOrderedSessionMethods
**********************************************/
export interface LocationOrientedUserOrderedSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	deleteTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseExecution<SP.WorkManagement.OM.RefreshHealthInfo>;
	getRefreshHistory(since?: any): IBaseExecution<SP.WorkManagement.OM.RefreshHistory>;
	getRefreshStatus(refreshId?: number): IBaseExecution<SP.WorkManagement.OM.RefreshResult>;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	readAllNonTaskData(): IBaseExecution<SP.WorkManagement.OM.NonTaskDataReadResult>;
	refreshSingleTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskRefreshResult>;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	removePinOnTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	movePersonalTaskToLocation(taskKey?: number, newLocationKey?: number): IBaseExecution<boolean>;
	reorderTask(taskKey?: number, newAfterTaskKey?: number): IBaseExecution<any>;
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
export interface INonTaskDataReadResult extends NonTaskDataReadResultCollections,NonTaskDataReadResultMethods,IBaseQuery<INonTaskDataReadResultQuery> {

}

/*********************************************
* INonTaskDataReadResultQuery
**********************************************/
export interface INonTaskDataReadResultQuery extends NonTaskDataReadResultQuery,NonTaskDataReadResultMethods {

}

/*********************************************
* NonTaskDataReadResult
**********************************************/
export interface NonTaskDataReadResult extends NonTaskDataReadResultCollections, NonTaskDataReadResultMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NonTaskDataReadResultProps
**********************************************/
export interface NonTaskDataReadResultProps {
	PersistedProperties(): IBaseExecution<SP.WorkManagement.OM.PersistedProperties>;
	RefreshHistory(): IBaseExecution<SP.WorkManagement.OM.RefreshHistory>;
	UserSettings(): IBaseExecution<SP.WorkManagement.OM.UserSettings>;
}

/*********************************************
* NonTaskDataReadResultCollections
**********************************************/
export interface NonTaskDataReadResultCollections extends NonTaskDataReadResultProps {
	AllLocatons(): IBaseCollection<SP.WorkManagement.OM.Location>;
	AllLocatons(id: string | number): IBaseExecution<SP.WorkManagement.OM.Location>;
	ScriptExtensions(): IBaseCollection<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	ScriptExtensions(id: string | number): IBaseExecution<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
}

/*********************************************
* NonTaskDataReadResultQuery
**********************************************/
export interface NonTaskDataReadResultQuery extends NonTaskDataReadResultProps {
	AllLocatons: IBaseResults<SP.WorkManagement.OM.Location>;
	ScriptExtensions: IBaseResults<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
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
export interface IRefreshHistory extends RefreshHistoryCollections,RefreshHistoryMethods,IBaseQuery<IRefreshHistoryQuery> {

}

/*********************************************
* IRefreshHistoryQuery
**********************************************/
export interface IRefreshHistoryQuery extends RefreshHistoryQuery,RefreshHistoryMethods {

}

/*********************************************
* RefreshHistory
**********************************************/
export interface RefreshHistory extends RefreshHistoryCollections, RefreshHistoryMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RefreshHistoryProps
**********************************************/
export interface RefreshHistoryProps {

}

/*********************************************
* RefreshHistoryCollections
**********************************************/
export interface RefreshHistoryCollections extends RefreshHistoryProps {
	Refreshes(): IBaseCollection<SP.WorkManagement.OM.RefreshResult>;
	Refreshes(id: string | number): IBaseExecution<SP.WorkManagement.OM.RefreshResult>;
}

/*********************************************
* RefreshHistoryQuery
**********************************************/
export interface RefreshHistoryQuery extends RefreshHistoryProps {
	Refreshes: IBaseResults<SP.WorkManagement.OM.RefreshResult>;
}

/*********************************************
* RefreshHistoryMethods
**********************************************/
export interface RefreshHistoryMethods {

}

/*********************************************
* IRefreshResult
**********************************************/
export interface IRefreshResult extends RefreshResultCollections,RefreshResultMethods,IBaseQuery<IRefreshResultQuery> {

}

/*********************************************
* IRefreshResultQuery
**********************************************/
export interface IRefreshResultQuery extends RefreshResultQuery,RefreshResultMethods {

}

/*********************************************
* RefreshResult
**********************************************/
export interface RefreshResult extends RefreshResultCollections, RefreshResultMethods {
	AggregatorRefreshState?: number;
	CorrelationId?: string;
	RefreshFinished?: any;
	RefreshId?: number;
}

/*********************************************
* RefreshResultProps
**********************************************/
export interface RefreshResultProps {

}

/*********************************************
* RefreshResultCollections
**********************************************/
export interface RefreshResultCollections extends RefreshResultProps {
	ProviderStatuses(): IBaseCollection<SP.WorkManagement.OM.ProviderRefreshStatus>;
	ProviderStatuses(id: string | number): IBaseExecution<SP.WorkManagement.OM.ProviderRefreshStatus>;
	TaskChangesByLocation(): IBaseCollection<SP.WorkManagement.OM.LocationUpdateResult>;
	TaskChangesByLocation(id: string | number): IBaseExecution<SP.WorkManagement.OM.LocationUpdateResult>;
}

/*********************************************
* RefreshResultQuery
**********************************************/
export interface RefreshResultQuery extends RefreshResultProps {
	ProviderStatuses: IBaseResults<SP.WorkManagement.OM.ProviderRefreshStatus>;
	TaskChangesByLocation: IBaseResults<SP.WorkManagement.OM.LocationUpdateResult>;
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
export interface IRefreshHealthInfo extends RefreshHealthInfoCollections,RefreshHealthInfoMethods,IBaseQuery<IRefreshHealthInfoQuery> {

}

/*********************************************
* IRefreshHealthInfoQuery
**********************************************/
export interface IRefreshHealthInfoQuery extends RefreshHealthInfoQuery,RefreshHealthInfoMethods {

}

/*********************************************
* RefreshHealthInfo
**********************************************/
export interface RefreshHealthInfo extends RefreshHealthInfoCollections, RefreshHealthInfoMethods {
	LatestRefreshTime?: any;
	NewTasks?: number;
	Succeeded?: boolean;
}

/*********************************************
* RefreshHealthInfoProps
**********************************************/
export interface RefreshHealthInfoProps {

}

/*********************************************
* RefreshHealthInfoCollections
**********************************************/
export interface RefreshHealthInfoCollections extends RefreshHealthInfoProps {
	ProviderErrors(): IBaseCollection<SP.WorkManagement.OM.ProviderErrorInfo>;
	ProviderErrors(id: string | number): IBaseExecution<SP.WorkManagement.OM.ProviderErrorInfo>;
}

/*********************************************
* RefreshHealthInfoQuery
**********************************************/
export interface RefreshHealthInfoQuery extends RefreshHealthInfoProps {
	ProviderErrors: IBaseResults<SP.WorkManagement.OM.ProviderErrorInfo>;
}

/*********************************************
* RefreshHealthInfoMethods
**********************************************/
export interface RefreshHealthInfoMethods {

}

/*********************************************
* ISortableSessionManager
**********************************************/
export interface ISortableSessionManager extends SortableSessionManagerCollections,SortableSessionManagerMethods,IBaseQuery<ISortableSessionManagerQuery> {

}

/*********************************************
* ISortableSessionManagerQuery
**********************************************/
export interface ISortableSessionManagerQuery extends SortableSessionManagerQuery,SortableSessionManagerMethods {

}

/*********************************************
* SortableSessionManager
**********************************************/
export interface SortableSessionManager extends SortableSessionManagerCollections, SortableSessionManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableSessionManagerProps
**********************************************/
export interface SortableSessionManagerProps {

}

/*********************************************
* SortableSessionManagerCollections
**********************************************/
export interface SortableSessionManagerCollections extends SortableSessionManagerProps {

}

/*********************************************
* SortableSessionManagerQuery
**********************************************/
export interface SortableSessionManagerQuery extends SortableSessionManagerProps {

}

/*********************************************
* SortableSessionManagerMethods
**********************************************/
export interface SortableSessionManagerMethods {
	createLocationOrientedSession(): IBaseExecution<SP.WorkManagement.OM.LocationOrientedSortableSession>;
	createSession(): IBaseExecution<SP.WorkManagement.OM.SortableSession>;
}

/*********************************************
* ISortableSession
**********************************************/
export interface ISortableSession extends SortableSessionCollections,SortableSessionMethods,IBaseQuery<ISortableSessionQuery> {

}

/*********************************************
* ISortableSessionQuery
**********************************************/
export interface ISortableSessionQuery extends SortableSessionQuery,SortableSessionMethods {

}

/*********************************************
* SortableSession
**********************************************/
export interface SortableSession extends SP.WorkManagement.OM.BaseSession, SortableSessionCollections, SortableSessionMethods {

}

/*********************************************
* SortableSessionProps
**********************************************/
export interface SortableSessionProps {

}

/*********************************************
* SortableSessionCollections
**********************************************/
export interface SortableSessionCollections extends SortableSessionProps {

}

/*********************************************
* SortableSessionQuery
**********************************************/
export interface SortableSessionQuery extends SortableSessionProps {

}

/*********************************************
* SortableSessionMethods
**********************************************/
export interface SortableSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	deleteTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseExecution<SP.WorkManagement.OM.RefreshHealthInfo>;
	getRefreshHistory(since?: any): IBaseExecution<SP.WorkManagement.OM.RefreshHistory>;
	getRefreshStatus(refreshId?: number): IBaseExecution<SP.WorkManagement.OM.RefreshResult>;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	readAllNonTaskData(): IBaseExecution<SP.WorkManagement.OM.NonTaskDataReadResult>;
	refreshSingleTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskRefreshResult>;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	removePinOnTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
}

/*********************************************
* SortableTaskQuery
**********************************************/
export interface SortableTaskQuery {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* TaskFilter
**********************************************/
export interface TaskFilter {
	CriterionConcatType?: number;
	IdsToFilterBy?: Array<number>;
}

/*********************************************
* ITaskQueryByLocationResult
**********************************************/
export interface ITaskQueryByLocationResult extends TaskQueryByLocationResultCollections,TaskQueryByLocationResultMethods,IBaseQuery<ITaskQueryByLocationResultQuery> {

}

/*********************************************
* ITaskQueryByLocationResultQuery
**********************************************/
export interface ITaskQueryByLocationResultQuery extends TaskQueryByLocationResultQuery,TaskQueryByLocationResultMethods {

}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult extends TaskQueryByLocationResultCollections, TaskQueryByLocationResultMethods {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryByLocationResultProps
**********************************************/
export interface TaskQueryByLocationResultProps {

}

/*********************************************
* TaskQueryByLocationResultCollections
**********************************************/
export interface TaskQueryByLocationResultCollections extends TaskQueryByLocationResultProps {
	Results(): IBaseCollection<SP.WorkManagement.OM.Task>;
	Results(id: string | number): IBaseExecution<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryByLocationResultQuery
**********************************************/
export interface TaskQueryByLocationResultQuery extends TaskQueryByLocationResultProps {
	Results: IBaseResults<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryByLocationResultMethods
**********************************************/
export interface TaskQueryByLocationResultMethods {

}

/*********************************************
* ITaskQueryResult
**********************************************/
export interface ITaskQueryResult extends TaskQueryResultCollections,TaskQueryResultMethods,IBaseQuery<ITaskQueryResultQuery> {

}

/*********************************************
* ITaskQueryResultQuery
**********************************************/
export interface ITaskQueryResultQuery extends TaskQueryResultQuery,TaskQueryResultMethods {

}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult extends TaskQueryResultCollections, TaskQueryResultMethods {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResultProps
**********************************************/
export interface TaskQueryResultProps {

}

/*********************************************
* TaskQueryResultCollections
**********************************************/
export interface TaskQueryResultCollections extends TaskQueryResultProps {
	Results(): IBaseCollection<SP.WorkManagement.OM.Task>;
	Results(id: string | number): IBaseExecution<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryResultQuery
**********************************************/
export interface TaskQueryResultQuery extends TaskQueryResultProps {
	Results: IBaseResults<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryResultMethods
**********************************************/
export interface TaskQueryResultMethods {

}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult {
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* IUserOrderedSessionManager
**********************************************/
export interface IUserOrderedSessionManager extends UserOrderedSessionManagerCollections,UserOrderedSessionManagerMethods,IBaseQuery<IUserOrderedSessionManagerQuery> {

}

/*********************************************
* IUserOrderedSessionManagerQuery
**********************************************/
export interface IUserOrderedSessionManagerQuery extends UserOrderedSessionManagerQuery,UserOrderedSessionManagerMethods {

}

/*********************************************
* UserOrderedSessionManager
**********************************************/
export interface UserOrderedSessionManager extends UserOrderedSessionManagerCollections, UserOrderedSessionManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserOrderedSessionManagerProps
**********************************************/
export interface UserOrderedSessionManagerProps {

}

/*********************************************
* UserOrderedSessionManagerCollections
**********************************************/
export interface UserOrderedSessionManagerCollections extends UserOrderedSessionManagerProps {

}

/*********************************************
* UserOrderedSessionManagerQuery
**********************************************/
export interface UserOrderedSessionManagerQuery extends UserOrderedSessionManagerProps {

}

/*********************************************
* UserOrderedSessionManagerMethods
**********************************************/
export interface UserOrderedSessionManagerMethods {
	createLocationOrientedSession(): IBaseExecution<SP.WorkManagement.OM.LocationOrientedUserOrderedSession>;
	createSession(): IBaseExecution<SP.WorkManagement.OM.UserOrderedSession>;
}

/*********************************************
* IUserOrderedSession
**********************************************/
export interface IUserOrderedSession extends UserOrderedSessionCollections,UserOrderedSessionMethods,IBaseQuery<IUserOrderedSessionQuery> {

}

/*********************************************
* IUserOrderedSessionQuery
**********************************************/
export interface IUserOrderedSessionQuery extends UserOrderedSessionQuery,UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSession
**********************************************/
export interface UserOrderedSession extends SP.WorkManagement.OM.BaseSession, UserOrderedSessionCollections, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSessionProps
**********************************************/
export interface UserOrderedSessionProps {

}

/*********************************************
* UserOrderedSessionCollections
**********************************************/
export interface UserOrderedSessionCollections extends UserOrderedSessionProps {

}

/*********************************************
* UserOrderedSessionQuery
**********************************************/
export interface UserOrderedSessionQuery extends UserOrderedSessionProps {

}

/*********************************************
* UserOrderedSessionMethods
**********************************************/
export interface UserOrderedSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	deleteTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseExecution<SP.WorkManagement.OM.RefreshHealthInfo>;
	getRefreshHistory(since?: any): IBaseExecution<SP.WorkManagement.OM.RefreshHistory>;
	getRefreshStatus(refreshId?: number): IBaseExecution<SP.WorkManagement.OM.RefreshResult>;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	readAllNonTaskData(): IBaseExecution<SP.WorkManagement.OM.NonTaskDataReadResult>;
	refreshSingleTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskRefreshResult>;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	removePinOnTask(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseExecution<SP.WorkManagement.OM.TaskWriteResult>;
	reorderTask(taskKey?: number, newAfterTaskKey?: number): IBaseExecution<any>;
}

/*********************************************
* IUserSettingsManager
**********************************************/
export interface IUserSettingsManager extends UserSettingsManagerCollections,UserSettingsManagerMethods,IBaseQuery<IUserSettingsManagerQuery> {

}

/*********************************************
* IUserSettingsManagerQuery
**********************************************/
export interface IUserSettingsManagerQuery extends UserSettingsManagerQuery,UserSettingsManagerMethods {

}

/*********************************************
* UserSettingsManager
**********************************************/
export interface UserSettingsManager extends UserSettingsManagerCollections, UserSettingsManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSettingsManagerProps
**********************************************/
export interface UserSettingsManagerProps {

}

/*********************************************
* UserSettingsManagerCollections
**********************************************/
export interface UserSettingsManagerCollections extends UserSettingsManagerProps {

}

/*********************************************
* UserSettingsManagerQuery
**********************************************/
export interface UserSettingsManagerQuery extends UserSettingsManagerProps {

}

/*********************************************
* UserSettingsManagerMethods
**********************************************/
export interface UserSettingsManagerMethods {
	getAllLocations(): IBaseExecution<Array<SP.WorkManagement.OM.Location>>;
	getExchangeSyncInfo(): IBaseExecution<SP.WorkManagement.OM.ExchangeUserSyncState>;
	getImportantLocations(): IBaseExecution<Array<SP.WorkManagement.OM.Location>>;
	getLocations(locationsId?: Array<number>): IBaseExecution<Array<SP.WorkManagement.OM.Location>>;
	getPersistedProperties(): IBaseExecution<SP.WorkManagement.OM.PersistedProperties>;
	getUserSettings(): IBaseExecution<SP.WorkManagement.OM.UserSettings>;
	isExchangeJobPending(): IBaseExecution<boolean>;
	optIntoExchangeSync(): IBaseExecution<number>;
	optOutOfExchangeSync(): IBaseExecution<boolean>;
}

/*********************************************
* ViewSelectionInfo
**********************************************/
export interface ViewSelectionInfo {
	Id?: number;
	Image?: string;
	Name?: string;
}
