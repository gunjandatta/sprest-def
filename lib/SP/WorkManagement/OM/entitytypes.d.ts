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
export interface IBaseSessionQuery extends BaseSessionQuery, BaseSessionMethods {

}

/*********************************************
* BaseSession
**********************************************/
export interface BaseSession extends BaseSessionProps, BaseSessionCollections, BaseSessionMethods {

}

/*********************************************
* BaseSessionProps
**********************************************/
export interface BaseSessionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* BaseSessionPropMethods
**********************************************/
export interface BaseSessionPropMethods {

}

/*********************************************
* BaseSessionCollections
**********************************************/
export interface BaseSessionCollections extends BaseSessionPropMethods {

}

/*********************************************
* BaseSessionQuery
**********************************************/
export interface BaseSessionQuery extends BaseSessionProps, BaseSessionMethods {

}

/*********************************************
* BaseSessionMethods
**********************************************/
export interface BaseSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoQuery> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryQuery> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultQuery> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultQuery> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultQuery> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
}

/*********************************************
* BooleanCriterion
**********************************************/
export interface BooleanCriterion {
	CompareType?: number;
}

/*********************************************
* BooleanCriterionCollections
**********************************************/
export interface BooleanCriterionCollections {

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
* CalloutInfoCollections
**********************************************/
export interface CalloutInfoCollections {

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
* CreateRefreshJobResultCollections
**********************************************/
export interface CreateRefreshJobResultCollections {

}

/*********************************************
* CustomAttributeFilter
**********************************************/
export interface CustomAttributeFilter {
	Attributes?: Array<string>;
	ConcatType?: number;
}

/*********************************************
* CustomAttributeFilterCollections
**********************************************/
export interface CustomAttributeFilterCollections {

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
* DashboardScriptExtensionInfoCollections
**********************************************/
export interface DashboardScriptExtensionInfoCollections {

}

/*********************************************
* DateRangeCriterion
**********************************************/
export interface DateRangeCriterion {
	RangeEndValue?: any;
	RangeStartValue?: any;
}

/*********************************************
* DateRangeCriterionCollections
**********************************************/
export interface DateRangeCriterionCollections {

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
* ExchangeUserSyncStateCollections
**********************************************/
export interface ExchangeUserSyncStateCollections {

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
* LocationCollections
**********************************************/
export interface LocationCollections {

}

/*********************************************
* LocationDisplaySetting
**********************************************/
export interface LocationDisplaySetting {
	Color?: string;
	Id?: number;
}

/*********************************************
* LocationDisplaySettingCollections
**********************************************/
export interface LocationDisplaySettingCollections {

}

/*********************************************
* LocationFilter
**********************************************/
export interface LocationFilter {
	IncludeUncategorizedTasks?: boolean;
	LocationKeys?: Array<number>;
}

/*********************************************
* LocationFilterCollections
**********************************************/
export interface LocationFilterCollections {

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
* TaskCollections
**********************************************/
export interface TaskCollections {

}

/*********************************************
* ILocationOrientedSortableSession
**********************************************/
export interface ILocationOrientedSortableSession extends LocationOrientedSortableSessionCollections,LocationOrientedSortableSessionMethods,IBaseQuery<ILocationOrientedSortableSessionQuery> {

}

/*********************************************
* ILocationOrientedSortableSessionQuery
**********************************************/
export interface ILocationOrientedSortableSessionQuery extends LocationOrientedSortableSessionQuery, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSession
**********************************************/
export interface LocationOrientedSortableSession extends SP.WorkManagement.OM.BaseSession, LocationOrientedSortableSessionProps, LocationOrientedSortableSessionCollections, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSessionProps
**********************************************/
export interface LocationOrientedSortableSessionProps {

}

/*********************************************
* LocationOrientedSortableSessionPropMethods
**********************************************/
export interface LocationOrientedSortableSessionPropMethods {

}

/*********************************************
* LocationOrientedSortableSessionCollections
**********************************************/
export interface LocationOrientedSortableSessionCollections extends LocationOrientedSortableSessionPropMethods {

}

/*********************************************
* LocationOrientedSortableSessionQuery
**********************************************/
export interface LocationOrientedSortableSessionQuery extends LocationOrientedSortableSessionProps, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSessionMethods
**********************************************/
export interface LocationOrientedSortableSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoQuery> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryQuery> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultQuery> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultQuery> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultQuery> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
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
export interface ILocationOrientedUserOrderedSessionQuery extends LocationOrientedUserOrderedSessionQuery, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSession
**********************************************/
export interface LocationOrientedUserOrderedSession extends SP.WorkManagement.OM.BaseSession, LocationOrientedUserOrderedSessionProps, LocationOrientedUserOrderedSessionCollections, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionProps
**********************************************/
export interface LocationOrientedUserOrderedSessionProps {

}

/*********************************************
* LocationOrientedUserOrderedSessionPropMethods
**********************************************/
export interface LocationOrientedUserOrderedSessionPropMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionCollections
**********************************************/
export interface LocationOrientedUserOrderedSessionCollections extends LocationOrientedUserOrderedSessionPropMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionQuery
**********************************************/
export interface LocationOrientedUserOrderedSessionQuery extends LocationOrientedUserOrderedSessionProps, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionMethods
**********************************************/
export interface LocationOrientedUserOrderedSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoQuery> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryQuery> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultQuery> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultQuery> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultQuery> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
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
* LocationUpdateResultCollections
**********************************************/
export interface LocationUpdateResultCollections {

}

/*********************************************
* NameCriterion
**********************************************/
export interface NameCriterion {
	CompareType?: number;
	CompareValue?: string;
}

/*********************************************
* NameCriterionCollections
**********************************************/
export interface NameCriterionCollections {

}

/*********************************************
* INonTaskDataReadResult
**********************************************/
export interface INonTaskDataReadResult extends NonTaskDataReadResultCollections,NonTaskDataReadResultMethods,IBaseQuery<INonTaskDataReadResultQuery> {

}

/*********************************************
* INonTaskDataReadResultQuery
**********************************************/
export interface INonTaskDataReadResultQuery extends NonTaskDataReadResultQuery, NonTaskDataReadResultMethods {

}

/*********************************************
* NonTaskDataReadResult
**********************************************/
export interface NonTaskDataReadResult extends NonTaskDataReadResultProps, NonTaskDataReadResultCollections, NonTaskDataReadResultMethods {

}

/*********************************************
* NonTaskDataReadResultProps
**********************************************/
export interface NonTaskDataReadResultProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NonTaskDataReadResultPropMethods
**********************************************/
export interface NonTaskDataReadResultPropMethods {
	PersistedProperties(): IBaseExecution<SP.WorkManagement.OM.PersistedProperties> & SP.WorkManagement.OM.PersistedPropertiesCollections;
	RefreshHistory(): IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryQuery> & SP.WorkManagement.OM.RefreshHistoryCollections;
	UserSettings(): IBaseExecution<SP.WorkManagement.OM.UserSettings> & SP.WorkManagement.OM.UserSettingsCollections;
}

/*********************************************
* NonTaskDataReadResultCollections
**********************************************/
export interface NonTaskDataReadResultCollections extends NonTaskDataReadResultPropMethods {
	AllLocatons(): IBaseCollection<SP.WorkManagement.OM.Location>;
	AllLocatons(id: string | number): IBaseQuery<SP.WorkManagement.OM.Location> & SP.WorkManagement.OM.LocationCollections;
	ScriptExtensions(): IBaseCollection<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	ScriptExtensions(id: string | number): IBaseQuery<SP.WorkManagement.OM.DashboardScriptExtensionInfo> & SP.WorkManagement.OM.DashboardScriptExtensionInfoCollections;
}

/*********************************************
* NonTaskDataReadResultQuery
**********************************************/
export interface NonTaskDataReadResultQuery extends NonTaskDataReadResultProps, NonTaskDataReadResultMethods {
	AllLocatons: IBaseResults<SP.WorkManagement.OM.Location>;
	PersistedProperties: SP.WorkManagement.OM.PersistedProperties & SP.WorkManagement.OM.PersistedPropertiesCollections;
	RefreshHistory: SP.WorkManagement.OM.RefreshHistory & SP.WorkManagement.OM.RefreshHistoryCollections;
	ScriptExtensions: IBaseResults<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	UserSettings: SP.WorkManagement.OM.UserSettings & SP.WorkManagement.OM.UserSettingsCollections;
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
* PersistedPropertiesCollections
**********************************************/
export interface PersistedPropertiesCollections {

}

/*********************************************
* IRefreshHistory
**********************************************/
export interface IRefreshHistory extends RefreshHistoryCollections,RefreshHistoryMethods,IBaseQuery<IRefreshHistoryQuery> {

}

/*********************************************
* IRefreshHistoryQuery
**********************************************/
export interface IRefreshHistoryQuery extends RefreshHistoryQuery, RefreshHistoryMethods {

}

/*********************************************
* RefreshHistory
**********************************************/
export interface RefreshHistory extends RefreshHistoryProps, RefreshHistoryCollections, RefreshHistoryMethods {

}

/*********************************************
* RefreshHistoryProps
**********************************************/
export interface RefreshHistoryProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RefreshHistoryPropMethods
**********************************************/
export interface RefreshHistoryPropMethods {

}

/*********************************************
* RefreshHistoryCollections
**********************************************/
export interface RefreshHistoryCollections extends RefreshHistoryPropMethods {
	Refreshes(): IBaseCollection<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultQuery>;
	Refreshes(id: string | number): IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultQuery> & SP.WorkManagement.OM.RefreshResultCollections;
}

/*********************************************
* RefreshHistoryQuery
**********************************************/
export interface RefreshHistoryQuery extends RefreshHistoryProps, RefreshHistoryMethods {
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
export interface IRefreshResultQuery extends RefreshResultQuery, RefreshResultMethods {

}

/*********************************************
* RefreshResult
**********************************************/
export interface RefreshResult extends RefreshResultProps, RefreshResultCollections, RefreshResultMethods {

}

/*********************************************
* RefreshResultProps
**********************************************/
export interface RefreshResultProps {
	AggregatorRefreshState?: number;
	CorrelationId?: string;
	RefreshFinished?: any;
	RefreshId?: number;
}

/*********************************************
* RefreshResultPropMethods
**********************************************/
export interface RefreshResultPropMethods {

}

/*********************************************
* RefreshResultCollections
**********************************************/
export interface RefreshResultCollections extends RefreshResultPropMethods {
	ProviderStatuses(): IBaseCollection<SP.WorkManagement.OM.ProviderRefreshStatus>;
	ProviderStatuses(id: string | number): IBaseQuery<SP.WorkManagement.OM.ProviderRefreshStatus> & SP.WorkManagement.OM.ProviderRefreshStatusCollections;
	TaskChangesByLocation(): IBaseCollection<SP.WorkManagement.OM.LocationUpdateResult>;
	TaskChangesByLocation(id: string | number): IBaseQuery<SP.WorkManagement.OM.LocationUpdateResult> & SP.WorkManagement.OM.LocationUpdateResultCollections;
}

/*********************************************
* RefreshResultQuery
**********************************************/
export interface RefreshResultQuery extends RefreshResultProps, RefreshResultMethods {
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
* ProviderRefreshStatusCollections
**********************************************/
export interface ProviderRefreshStatusCollections {

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
* UserSettingsCollections
**********************************************/
export interface UserSettingsCollections {

}

/*********************************************
* OrderInfo
**********************************************/
export interface OrderInfo {
	Field?: number;
	IsDescending?: boolean;
}

/*********************************************
* OrderInfoCollections
**********************************************/
export interface OrderInfoCollections {

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
* ProviderErrorInfoCollections
**********************************************/
export interface ProviderErrorInfoCollections {

}

/*********************************************
* IRefreshHealthInfo
**********************************************/
export interface IRefreshHealthInfo extends RefreshHealthInfoCollections,RefreshHealthInfoMethods,IBaseQuery<IRefreshHealthInfoQuery> {

}

/*********************************************
* IRefreshHealthInfoQuery
**********************************************/
export interface IRefreshHealthInfoQuery extends RefreshHealthInfoQuery, RefreshHealthInfoMethods {

}

/*********************************************
* RefreshHealthInfo
**********************************************/
export interface RefreshHealthInfo extends RefreshHealthInfoProps, RefreshHealthInfoCollections, RefreshHealthInfoMethods {

}

/*********************************************
* RefreshHealthInfoProps
**********************************************/
export interface RefreshHealthInfoProps {
	LatestRefreshTime?: any;
	NewTasks?: number;
	Succeeded?: boolean;
}

/*********************************************
* RefreshHealthInfoPropMethods
**********************************************/
export interface RefreshHealthInfoPropMethods {

}

/*********************************************
* RefreshHealthInfoCollections
**********************************************/
export interface RefreshHealthInfoCollections extends RefreshHealthInfoPropMethods {
	ProviderErrors(): IBaseCollection<SP.WorkManagement.OM.ProviderErrorInfo>;
	ProviderErrors(id: string | number): IBaseQuery<SP.WorkManagement.OM.ProviderErrorInfo> & SP.WorkManagement.OM.ProviderErrorInfoCollections;
}

/*********************************************
* RefreshHealthInfoQuery
**********************************************/
export interface RefreshHealthInfoQuery extends RefreshHealthInfoProps, RefreshHealthInfoMethods {
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
export interface ISortableSessionManagerQuery extends SortableSessionManagerQuery, SortableSessionManagerMethods {

}

/*********************************************
* SortableSessionManager
**********************************************/
export interface SortableSessionManager extends SortableSessionManagerProps, SortableSessionManagerCollections, SortableSessionManagerMethods {

}

/*********************************************
* SortableSessionManagerProps
**********************************************/
export interface SortableSessionManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableSessionManagerPropMethods
**********************************************/
export interface SortableSessionManagerPropMethods {

}

/*********************************************
* SortableSessionManagerCollections
**********************************************/
export interface SortableSessionManagerCollections extends SortableSessionManagerPropMethods {

}

/*********************************************
* SortableSessionManagerQuery
**********************************************/
export interface SortableSessionManagerQuery extends SortableSessionManagerProps, SortableSessionManagerMethods {

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
export interface ISortableSessionQuery extends SortableSessionQuery, SortableSessionMethods {

}

/*********************************************
* SortableSession
**********************************************/
export interface SortableSession extends SP.WorkManagement.OM.BaseSession, SortableSessionProps, SortableSessionCollections, SortableSessionMethods {

}

/*********************************************
* SortableSessionProps
**********************************************/
export interface SortableSessionProps {

}

/*********************************************
* SortableSessionPropMethods
**********************************************/
export interface SortableSessionPropMethods {

}

/*********************************************
* SortableSessionCollections
**********************************************/
export interface SortableSessionCollections extends SortableSessionPropMethods {

}

/*********************************************
* SortableSessionQuery
**********************************************/
export interface SortableSessionQuery extends SortableSessionProps, SortableSessionMethods {

}

/*********************************************
* SortableSessionMethods
**********************************************/
export interface SortableSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoQuery> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryQuery> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultQuery> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultQuery> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultQuery> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
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

}

/*********************************************
* SortableTaskQueryQuery
**********************************************/
export interface SortableTaskQueryQuery extends SortableTaskQuery {
	CoreQuery: SP.WorkManagement.OM.TaskQuery & SP.WorkManagement.OM.TaskQueryCollections;
	Order: SP.WorkManagement.OM.OrderInfo & SP.WorkManagement.OM.OrderInfoCollections;
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

}

/*********************************************
* TaskQueryQuery
**********************************************/
export interface TaskQueryQuery extends TaskQuery {
	CustomAttributeFilter: SP.WorkManagement.OM.CustomAttributeFilter & SP.WorkManagement.OM.CustomAttributeFilterCollections;
	FieldFilter: SP.WorkManagement.OM.TaskFilter & SP.WorkManagement.OM.TaskFilterCollections;
	LastModifiedDateRangeFilter: SP.WorkManagement.OM.DateRangeCriterion & SP.WorkManagement.OM.DateRangeCriterionCollections;
	LocationFilter: SP.WorkManagement.OM.LocationFilter & SP.WorkManagement.OM.LocationFilterCollections;
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

}

/*********************************************
* TaskFilterQuery
**********************************************/
export interface TaskFilterQuery extends TaskFilter {
	CompletedCriterion: SP.WorkManagement.OM.BooleanCriterion & SP.WorkManagement.OM.BooleanCriterionCollections;
	DueDateRangeCriterion: SP.WorkManagement.OM.DateRangeCriterion & SP.WorkManagement.OM.DateRangeCriterionCollections;
	IsNewCriterion: SP.WorkManagement.OM.BooleanCriterion & SP.WorkManagement.OM.BooleanCriterionCollections;
	NameCriterion: SP.WorkManagement.OM.NameCriterion & SP.WorkManagement.OM.NameCriterionCollections;
	StartDateRangeCriterion: SP.WorkManagement.OM.DateRangeCriterion & SP.WorkManagement.OM.DateRangeCriterionCollections;
}

/*********************************************
* ITaskQueryByLocationResult
**********************************************/
export interface ITaskQueryByLocationResult extends TaskQueryByLocationResultCollections,TaskQueryByLocationResultMethods,IBaseQuery<ITaskQueryByLocationResultQuery> {

}

/*********************************************
* ITaskQueryByLocationResultQuery
**********************************************/
export interface ITaskQueryByLocationResultQuery extends TaskQueryByLocationResultQuery, TaskQueryByLocationResultMethods {

}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult extends TaskQueryByLocationResultProps, TaskQueryByLocationResultCollections, TaskQueryByLocationResultMethods {

}

/*********************************************
* TaskQueryByLocationResultProps
**********************************************/
export interface TaskQueryByLocationResultProps {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryByLocationResultPropMethods
**********************************************/
export interface TaskQueryByLocationResultPropMethods {

}

/*********************************************
* TaskQueryByLocationResultCollections
**********************************************/
export interface TaskQueryByLocationResultCollections extends TaskQueryByLocationResultPropMethods {
	Results(): IBaseCollection<SP.WorkManagement.OM.Task>;
	Results(id: string | number): IBaseQuery<SP.WorkManagement.OM.Task> & SP.WorkManagement.OM.TaskCollections;
}

/*********************************************
* TaskQueryByLocationResultQuery
**********************************************/
export interface TaskQueryByLocationResultQuery extends TaskQueryByLocationResultProps, TaskQueryByLocationResultMethods {
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
export interface ITaskQueryResultQuery extends TaskQueryResultQuery, TaskQueryResultMethods {

}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult extends TaskQueryResultProps, TaskQueryResultCollections, TaskQueryResultMethods {

}

/*********************************************
* TaskQueryResultProps
**********************************************/
export interface TaskQueryResultProps {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResultPropMethods
**********************************************/
export interface TaskQueryResultPropMethods {

}

/*********************************************
* TaskQueryResultCollections
**********************************************/
export interface TaskQueryResultCollections extends TaskQueryResultPropMethods {
	Results(): IBaseCollection<SP.WorkManagement.OM.Task>;
	Results(id: string | number): IBaseQuery<SP.WorkManagement.OM.Task> & SP.WorkManagement.OM.TaskCollections;
}

/*********************************************
* TaskQueryResultQuery
**********************************************/
export interface TaskQueryResultQuery extends TaskQueryResultProps, TaskQueryResultMethods {
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
* TaskRefreshResultCollections
**********************************************/
export interface TaskRefreshResultCollections {

}

/*********************************************
* TaskRefreshResultQuery
**********************************************/
export interface TaskRefreshResultQuery extends TaskRefreshResult {
	Result: SP.WorkManagement.OM.Task & SP.WorkManagement.OM.TaskCollections;
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

}

/*********************************************
* TaskWriteResultQuery
**********************************************/
export interface TaskWriteResultQuery extends TaskWriteResult {
	Result: SP.WorkManagement.OM.Task & SP.WorkManagement.OM.TaskCollections;
}

/*********************************************
* IUserOrderedSessionManager
**********************************************/
export interface IUserOrderedSessionManager extends UserOrderedSessionManagerCollections,UserOrderedSessionManagerMethods,IBaseQuery<IUserOrderedSessionManagerQuery> {

}

/*********************************************
* IUserOrderedSessionManagerQuery
**********************************************/
export interface IUserOrderedSessionManagerQuery extends UserOrderedSessionManagerQuery, UserOrderedSessionManagerMethods {

}

/*********************************************
* UserOrderedSessionManager
**********************************************/
export interface UserOrderedSessionManager extends UserOrderedSessionManagerProps, UserOrderedSessionManagerCollections, UserOrderedSessionManagerMethods {

}

/*********************************************
* UserOrderedSessionManagerProps
**********************************************/
export interface UserOrderedSessionManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserOrderedSessionManagerPropMethods
**********************************************/
export interface UserOrderedSessionManagerPropMethods {

}

/*********************************************
* UserOrderedSessionManagerCollections
**********************************************/
export interface UserOrderedSessionManagerCollections extends UserOrderedSessionManagerPropMethods {

}

/*********************************************
* UserOrderedSessionManagerQuery
**********************************************/
export interface UserOrderedSessionManagerQuery extends UserOrderedSessionManagerProps, UserOrderedSessionManagerMethods {

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
export interface IUserOrderedSessionQuery extends UserOrderedSessionQuery, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSession
**********************************************/
export interface UserOrderedSession extends SP.WorkManagement.OM.BaseSession, UserOrderedSessionProps, UserOrderedSessionCollections, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSessionProps
**********************************************/
export interface UserOrderedSessionProps {

}

/*********************************************
* UserOrderedSessionPropMethods
**********************************************/
export interface UserOrderedSessionPropMethods {

}

/*********************************************
* UserOrderedSessionCollections
**********************************************/
export interface UserOrderedSessionCollections extends UserOrderedSessionPropMethods {

}

/*********************************************
* UserOrderedSessionQuery
**********************************************/
export interface UserOrderedSessionQuery extends UserOrderedSessionProps, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSessionMethods
**********************************************/
export interface UserOrderedSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoQuery> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryQuery> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultQuery> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): IBaseExecution<boolean>;
	pinTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultQuery> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultQuery> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultQuery> & SP.WorkManagement.OM.TaskWriteResultCollections;
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
export interface IUserSettingsManagerQuery extends UserSettingsManagerQuery, UserSettingsManagerMethods {

}

/*********************************************
* UserSettingsManager
**********************************************/
export interface UserSettingsManager extends UserSettingsManagerProps, UserSettingsManagerCollections, UserSettingsManagerMethods {

}

/*********************************************
* UserSettingsManagerProps
**********************************************/
export interface UserSettingsManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSettingsManagerPropMethods
**********************************************/
export interface UserSettingsManagerPropMethods {

}

/*********************************************
* UserSettingsManagerCollections
**********************************************/
export interface UserSettingsManagerCollections extends UserSettingsManagerPropMethods {

}

/*********************************************
* UserSettingsManagerQuery
**********************************************/
export interface UserSettingsManagerQuery extends UserSettingsManagerProps, UserSettingsManagerMethods {

}

/*********************************************
* UserSettingsManagerMethods
**********************************************/
export interface UserSettingsManagerMethods {
	getAllLocations(): IBaseCollection<SP.WorkManagement.OM.Location>;
	getExchangeSyncInfo(): IBaseExecution<SP.WorkManagement.OM.ExchangeUserSyncState>;
	getImportantLocations(): IBaseCollection<SP.WorkManagement.OM.Location>;
	getLocations(locationsId?: Array<number>): IBaseCollection<SP.WorkManagement.OM.Location>;
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

/*********************************************
* ViewSelectionInfoCollections
**********************************************/
export interface ViewSelectionInfoCollections {

}
