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
	AllLocatons?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_NonTaskDataReadResult_AllLocatons_SP_WorkManagement_OM_Location_AllLocatonsPartner;
	PersistedProperties?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_NonTaskDataReadResult_PersistedProperties_SP_WorkManagement_OM_PersistedProperties_PersistedPropertiesPartner;
	RefreshHistory?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_NonTaskDataReadResult_RefreshHistory_SP_WorkManagement_OM_RefreshHistory_RefreshHistoryPartner;
	ScriptExtensions?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_NonTaskDataReadResult_ScriptExtensions_SP_WorkManagement_OM_DashboardScriptExtensionInfo_ScriptExtensionsPartner;
	UserSettings?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_NonTaskDataReadResult_UserSettings_SP_WorkManagement_OM_UserSettings_UserSettingsPartner;
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
	Refreshes?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_RefreshHistory_Refreshes_SP_WorkManagement_OM_RefreshResult_RefreshesPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RefreshResult
**********************************************/
export interface RefreshResult {
	ProviderStatuses?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_RefreshResult_ProviderStatuses_SP_WorkManagement_OM_ProviderRefreshStatus_ProviderStatusesPartner;
	TaskChangesByLocation?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_RefreshResult_TaskChangesByLocation_SP_WorkManagement_OM_LocationUpdateResult_TaskChangesByLocationPartner;
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
	ProviderErrors?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_RefreshHealthInfo_ProviderErrors_SP_WorkManagement_OM_ProviderErrorInfo_ProviderErrorsPartner;
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
	CoreQuery?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_SortableTaskQuery_CoreQuery_SP_WorkManagement_OM_TaskQuery_CoreQueryPartner;
	Order?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_SortableTaskQuery_Order_SP_WorkManagement_OM_OrderInfo_OrderPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery {
	CustomAttributeFilter?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskQuery_CustomAttributeFilter_SP_WorkManagement_OM_CustomAttributeFilter_CustomAttributeFilterPartner;
	FieldFilter?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskQuery_FieldFilter_SP_WorkManagement_OM_TaskFilter_FieldFilterPartner;
	LastModifiedDateRangeFilter?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskQuery_LastModifiedDateRangeFilter_SP_WorkManagement_OM_DateRangeCriterion_LastModifiedDateRangeFilterPartner;
	LocationFilter?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskQuery_LocationFilter_SP_WorkManagement_OM_LocationFilter_LocationFilterPartner;
	KeywordFilter?: string;
	LastQueryTime?: any;
	PinnedFilter?: number;
}

/*********************************************
* TaskFilter
**********************************************/
export interface TaskFilter {
	CompletedCriterion?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskFilter_CompletedCriterion_SP_WorkManagement_OM_BooleanCriterion_CompletedCriterionPartner;
	DueDateRangeCriterion?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskFilter_DueDateRangeCriterion_SP_WorkManagement_OM_DateRangeCriterion_DueDateRangeCriterionPartner;
	IsNewCriterion?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskFilter_IsNewCriterion_SP_WorkManagement_OM_BooleanCriterion_IsNewCriterionPartner;
	NameCriterion?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskFilter_NameCriterion_SP_WorkManagement_OM_NameCriterion_NameCriterionPartner;
	StartDateRangeCriterion?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskFilter_StartDateRangeCriterion_SP_WorkManagement_OM_DateRangeCriterion_StartDateRangeCriterionPartner;
	CriterionConcatType?: number;
	IdsToFilterBy?: Array<number>;
}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult {
	Results?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskQueryByLocationResult_Results_SP_WorkManagement_OM_Task_ResultsPartner;
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult {
	Results?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskQueryResult_Results_SP_WorkManagement_OM_Task_ResultsPartner;
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult {
	Result?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskRefreshResult_Result_SP_WorkManagement_OM_Task_ResultPartner;
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult {
	Result?: () => SP.WorkManagement.OM.SP_WorkManagement_OM_TaskWriteResult_Result_SP_WorkManagement_OM_Task_ResultPartner;
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
