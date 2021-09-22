import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* IAgentGroup
**********************************************/
export interface IAgentGroup extends Microsoft.Online.SharePoint.MigrationCenter.Common.AgentGroupEntityCollections, AgentGroupCollections, AgentGroupMethods, Base.IBaseQuery<AgentGroup, IAgentGroupQuery> {

}

/*********************************************
* IAgentGroupCollection
**********************************************/
export interface IAgentGroupCollection extends Base.IBaseResults<AgentGroup>, AgentGroupCollectionMethods {
	done?: (resolve: (value?: Array<AgentGroup>) => void) => void;
}

/*********************************************
* IAgentGroupQueryCollection
**********************************************/
export interface IAgentGroupQueryCollection extends Base.IBaseResults<AgentGroupOData>, AgentGroupCollectionMethods {
	done?: (resolve: (value?: Array<AgentGroupOData>) => void) => void;
}

/*********************************************
* IAgentGroupQuery
**********************************************/
export interface IAgentGroupQuery extends AgentGroupOData, AgentGroupMethods {

}

/*********************************************
* AgentGroup
**********************************************/
export interface AgentGroup extends Microsoft.Online.SharePoint.MigrationCenter.Common.AgentGroupEntity, Base.IBaseResult, AgentGroupProps, AgentGroupCollections, AgentGroupMethods {

}

/*********************************************
* AgentGroupProps
**********************************************/
export interface AgentGroupProps {
	ActiveAgentCount?: number;
	ActiveAgentIdList?: { results: Array<any> };
	AgentCount?: number;
	AgentIdList?: { results: Array<any> };
	TaskCount?: number;
}

/*********************************************
* AgentGroupPropMethods
**********************************************/
export interface AgentGroupPropMethods {

}

/*********************************************
* AgentGroupCollections
**********************************************/
export interface AgentGroupCollections extends AgentGroupPropMethods {

}

/*********************************************
* AgentGroupCollectionMethods
**********************************************/
export interface AgentGroupCollectionMethods {
	createByName(Name?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup>;
	deleteByName(Name?: string): Base.IBaseExecution<any>;
	getByName(Name?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup> & Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroupCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroupMethods;
	getGroupList(): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup>>;
}

/*********************************************
* AgentGroupOData
**********************************************/
export interface AgentGroupOData extends Microsoft.Online.SharePoint.MigrationCenter.Common.AgentGroupEntity, Base.IBaseResult, AgentGroupProps, AgentGroupMethods {

}

/*********************************************
* AgentGroupMethods
**********************************************/
export interface AgentGroupMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IDevice
**********************************************/
export interface IDevice extends Microsoft.Online.SharePoint.MigrationCenter.Common.DeviceEntityDataCollections, DeviceCollections, DeviceMethods, Base.IBaseQuery<Device, IDeviceQuery> {

}

/*********************************************
* IDeviceCollection
**********************************************/
export interface IDeviceCollection extends Base.IBaseResults<Device>, DeviceCollectionMethods {
	done?: (resolve: (value?: Array<Device>) => void) => void;
}

/*********************************************
* IDeviceQueryCollection
**********************************************/
export interface IDeviceQueryCollection extends Base.IBaseResults<DeviceOData>, DeviceCollectionMethods {
	done?: (resolve: (value?: Array<DeviceOData>) => void) => void;
}

/*********************************************
* IDeviceQuery
**********************************************/
export interface IDeviceQuery extends DeviceOData, DeviceMethods {

}

/*********************************************
* Device
**********************************************/
export interface Device extends Microsoft.Online.SharePoint.MigrationCenter.Common.DeviceEntityData, Base.IBaseResult, DeviceProps, DeviceCollections, DeviceMethods {

}

/*********************************************
* DeviceProps
**********************************************/
export interface DeviceProps {
	ActionId?: number;
	AssignedTimeUTC?: any;
	AssignmentId?: string;
	DebugCommand?: string;
	DeviceAddedTimeUTC?: any;
	Disconnected?: boolean;
	ErrorCode?: string;
	ErrorMessage?: string;
	FromClient?: boolean;
	LastActivityTimeUtc?: any;
	LastHeartbeatTimeUtc?: any;
	LastModifiedTimeUtc?: any;
	LinkedTaskId?: any;
	Message?: string;
	RunningTaskCount?: number;
	Status?: number;
	UpdateTimestamp?: string;
	WaitingTaskCount?: number;
	WorkflowJsonData?: string;
}

/*********************************************
* DevicePropMethods
**********************************************/
export interface DevicePropMethods {

}

/*********************************************
* DeviceCollections
**********************************************/
export interface DeviceCollections extends DevicePropMethods {

}

/*********************************************
* DeviceCollectionMethods
**********************************************/
export interface DeviceCollectionMethods {
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceMethods;
}

/*********************************************
* DeviceOData
**********************************************/
export interface DeviceOData extends Microsoft.Online.SharePoint.MigrationCenter.Common.DeviceEntityData, Base.IBaseResult, DeviceProps, DeviceMethods {

}

/*********************************************
* DeviceMethods
**********************************************/
export interface DeviceMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationCenterDeployStatus
**********************************************/
export interface IMigrationCenterDeployStatus extends MigrationCenterDeployStatusCollections, MigrationCenterDeployStatusMethods, Base.IBaseQuery<MigrationCenterDeployStatus, IMigrationCenterDeployStatusQuery> {

}

/*********************************************
* IMigrationCenterDeployStatusCollection
**********************************************/
export interface IMigrationCenterDeployStatusCollection extends Base.IBaseResults<MigrationCenterDeployStatus> {
	done?: (resolve: (value?: Array<MigrationCenterDeployStatus>) => void) => void;
}

/*********************************************
* IMigrationCenterDeployStatusQueryCollection
**********************************************/
export interface IMigrationCenterDeployStatusQueryCollection extends Base.IBaseResults<MigrationCenterDeployStatusOData> {
	done?: (resolve: (value?: Array<MigrationCenterDeployStatusOData>) => void) => void;
}

/*********************************************
* IMigrationCenterDeployStatusQuery
**********************************************/
export interface IMigrationCenterDeployStatusQuery extends MigrationCenterDeployStatusOData, MigrationCenterDeployStatusMethods {

}

/*********************************************
* MigrationCenterDeployStatus
**********************************************/
export interface MigrationCenterDeployStatus extends Base.IBaseResult, MigrationCenterDeployStatusProps, MigrationCenterDeployStatusCollections, MigrationCenterDeployStatusMethods {

}

/*********************************************
* MigrationCenterDeployStatusProps
**********************************************/
export interface MigrationCenterDeployStatusProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MigrationCenterDeployStatusPropMethods
**********************************************/
export interface MigrationCenterDeployStatusPropMethods {

}

/*********************************************
* MigrationCenterDeployStatusCollections
**********************************************/
export interface MigrationCenterDeployStatusCollections extends MigrationCenterDeployStatusPropMethods {

}

/*********************************************
* MigrationCenterDeployStatusOData
**********************************************/
export interface MigrationCenterDeployStatusOData extends Base.IBaseResult, MigrationCenterDeployStatusProps, MigrationCenterDeployStatusMethods {

}

/*********************************************
* MigrationCenterDeployStatusMethods
**********************************************/
export interface MigrationCenterDeployStatusMethods {
	isChangeDeployed(changeName?: string): Base.IBaseExecution<boolean>;
}

/*********************************************
* IMigrationCenterServices
**********************************************/
export interface IMigrationCenterServices extends MigrationCenterServicesCollections, MigrationCenterServicesMethods, Base.IBaseQuery<MigrationCenterServices, IMigrationCenterServicesQuery> {

}

/*********************************************
* IMigrationCenterServicesCollection
**********************************************/
export interface IMigrationCenterServicesCollection extends Base.IBaseResults<MigrationCenterServices> {
	done?: (resolve: (value?: Array<MigrationCenterServices>) => void) => void;
}

/*********************************************
* IMigrationCenterServicesQueryCollection
**********************************************/
export interface IMigrationCenterServicesQueryCollection extends Base.IBaseResults<MigrationCenterServicesOData> {
	done?: (resolve: (value?: Array<MigrationCenterServicesOData>) => void) => void;
}

/*********************************************
* IMigrationCenterServicesQuery
**********************************************/
export interface IMigrationCenterServicesQuery extends MigrationCenterServicesOData, MigrationCenterServicesMethods {

}

/*********************************************
* MigrationCenterServices
**********************************************/
export interface MigrationCenterServices extends Base.IBaseResult, MigrationCenterServicesProps, MigrationCenterServicesCollections, MigrationCenterServicesMethods {

}

/*********************************************
* MigrationCenterServicesProps
**********************************************/
export interface MigrationCenterServicesProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MigrationCenterServicesPropMethods
**********************************************/
export interface MigrationCenterServicesPropMethods {
	DeployStatus(): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatus> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatusCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatusMethods;
	Properties(): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationProperties> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationPropertiesCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationPropertiesMethods;
	SPFlight(): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlight> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlightCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlightMethods;
	Storage(): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorageCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorageMethods;
	Teams(): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeams> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeamsCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeamsMethods;
}

/*********************************************
* MigrationCenterServicesCollections
**********************************************/
export interface MigrationCenterServicesCollections extends MigrationCenterServicesPropMethods {
	AgentGroups(): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup> & Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroupCollectionMethods;
	AgentGroups(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup> & Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroupCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroupMethods;
	Devices(): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollectionMethods;
	Devices(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceMethods;
	PerformanceData(): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData> & Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceDataCollectionMethods;
	PerformanceData(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData> & Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceDataCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceDataMethods;
	Tasks(): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollectionMethods;
	Tasks(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskMethods;
}

/*********************************************
* MigrationCenterServicesOData
**********************************************/
export interface MigrationCenterServicesOData extends Base.IBaseResult, MigrationCenterServicesProps, MigrationCenterServicesMethods {
	AgentGroups: Base.IBaseResults<Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup> & Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroupCollectionMethods;
	DeployStatus: Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatus & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatusCollections;
	Devices: Base.IBaseResults<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollectionMethods;
	PerformanceData: Base.IBaseResults<Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData> & Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceDataCollectionMethods;
	Properties: Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationProperties & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationPropertiesCollections;
	SPFlight: Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlight & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlightCollections;
	Storage: Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorageCollections;
	Tasks: Base.IBaseResults<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollectionMethods;
	Teams: Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeams & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeamsCollections;
}

/*********************************************
* MigrationCenterServicesMethods
**********************************************/
export interface MigrationCenterServicesMethods {

}

/*********************************************
* IPerformanceData
**********************************************/
export interface IPerformanceData extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationPerformanceEntityDataCollections, PerformanceDataCollections, PerformanceDataMethods, Base.IBaseQuery<PerformanceData, IPerformanceDataQuery> {

}

/*********************************************
* IPerformanceDataCollection
**********************************************/
export interface IPerformanceDataCollection extends Base.IBaseResults<PerformanceData>, PerformanceDataCollectionMethods {
	done?: (resolve: (value?: Array<PerformanceData>) => void) => void;
}

/*********************************************
* IPerformanceDataQueryCollection
**********************************************/
export interface IPerformanceDataQueryCollection extends Base.IBaseResults<PerformanceDataOData>, PerformanceDataCollectionMethods {
	done?: (resolve: (value?: Array<PerformanceDataOData>) => void) => void;
}

/*********************************************
* IPerformanceDataQuery
**********************************************/
export interface IPerformanceDataQuery extends PerformanceDataOData, PerformanceDataMethods {

}

/*********************************************
* PerformanceData
**********************************************/
export interface PerformanceData extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationPerformanceEntityData, Base.IBaseResult, PerformanceDataProps, PerformanceDataCollections, PerformanceDataMethods {

}

/*********************************************
* PerformanceDataProps
**********************************************/
export interface PerformanceDataProps {

}

/*********************************************
* PerformanceDataPropMethods
**********************************************/
export interface PerformanceDataPropMethods {

}

/*********************************************
* PerformanceDataCollections
**********************************************/
export interface PerformanceDataCollections extends PerformanceDataPropMethods {

}

/*********************************************
* PerformanceDataCollectionMethods
**********************************************/
export interface PerformanceDataCollectionMethods {
	addPerfDataTest(Count?: number, Bottleneck?: string, MaxDuration?: number, MaxTaskFiles?: number): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData>>;
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData> & Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceDataCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceDataMethods;
	getData(StartTime?: any, EndTime?: any, AgentId?: any, TimeUnit?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceDashboardData>;
	getPerfDataTest(StartTime?: any, EndTime?: any, AgentId?: any): Base.IBaseExecution<string>;
	getRawData(StartTime?: any, EndTime?: any, AgentId?: any): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationPerformanceEntityData>>;
}

/*********************************************
* PerformanceDataOData
**********************************************/
export interface PerformanceDataOData extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationPerformanceEntityData, Base.IBaseResult, PerformanceDataProps, PerformanceDataMethods {

}

/*********************************************
* PerformanceDataMethods
**********************************************/
export interface PerformanceDataMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationProperties
**********************************************/
export interface IMigrationProperties extends MigrationPropertiesCollections, MigrationPropertiesMethods, Base.IBaseQuery<MigrationProperties, IMigrationPropertiesQuery> {

}

/*********************************************
* IMigrationPropertiesCollection
**********************************************/
export interface IMigrationPropertiesCollection extends Base.IBaseResults<MigrationProperties> {
	done?: (resolve: (value?: Array<MigrationProperties>) => void) => void;
}

/*********************************************
* IMigrationPropertiesQueryCollection
**********************************************/
export interface IMigrationPropertiesQueryCollection extends Base.IBaseResults<MigrationPropertiesOData> {
	done?: (resolve: (value?: Array<MigrationPropertiesOData>) => void) => void;
}

/*********************************************
* IMigrationPropertiesQuery
**********************************************/
export interface IMigrationPropertiesQuery extends MigrationPropertiesOData, MigrationPropertiesMethods {

}

/*********************************************
* MigrationProperties
**********************************************/
export interface MigrationProperties extends Base.IBaseResult, MigrationPropertiesProps, MigrationPropertiesCollections, MigrationPropertiesMethods {

}

/*********************************************
* MigrationPropertiesProps
**********************************************/
export interface MigrationPropertiesProps {
	Count?: number;
}

/*********************************************
* MigrationPropertiesPropMethods
**********************************************/
export interface MigrationPropertiesPropMethods {

}

/*********************************************
* MigrationPropertiesCollections
**********************************************/
export interface MigrationPropertiesCollections extends MigrationPropertiesPropMethods {

}

/*********************************************
* MigrationPropertiesOData
**********************************************/
export interface MigrationPropertiesOData extends Base.IBaseResult, MigrationPropertiesProps, MigrationPropertiesMethods {

}

/*********************************************
* MigrationPropertiesMethods
**********************************************/
export interface MigrationPropertiesMethods {
	delete(key?: string): Base.IBaseExecution<any>;
	getProperty(key?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationProperty>;
	setProperty(key?: string, value?: string, throwIfExists?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationProperty>;
}

/*********************************************
* IMigrationSPFlight
**********************************************/
export interface IMigrationSPFlight extends MigrationSPFlightCollections, MigrationSPFlightMethods, Base.IBaseQuery<MigrationSPFlight, IMigrationSPFlightQuery> {

}

/*********************************************
* IMigrationSPFlightCollection
**********************************************/
export interface IMigrationSPFlightCollection extends Base.IBaseResults<MigrationSPFlight> {
	done?: (resolve: (value?: Array<MigrationSPFlight>) => void) => void;
}

/*********************************************
* IMigrationSPFlightQueryCollection
**********************************************/
export interface IMigrationSPFlightQueryCollection extends Base.IBaseResults<MigrationSPFlightOData> {
	done?: (resolve: (value?: Array<MigrationSPFlightOData>) => void) => void;
}

/*********************************************
* IMigrationSPFlightQuery
**********************************************/
export interface IMigrationSPFlightQuery extends MigrationSPFlightOData, MigrationSPFlightMethods {

}

/*********************************************
* MigrationSPFlight
**********************************************/
export interface MigrationSPFlight extends Base.IBaseResult, MigrationSPFlightProps, MigrationSPFlightCollections, MigrationSPFlightMethods {

}

/*********************************************
* MigrationSPFlightProps
**********************************************/
export interface MigrationSPFlightProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MigrationSPFlightPropMethods
**********************************************/
export interface MigrationSPFlightPropMethods {

}

/*********************************************
* MigrationSPFlightCollections
**********************************************/
export interface MigrationSPFlightCollections extends MigrationSPFlightPropMethods {

}

/*********************************************
* MigrationSPFlightOData
**********************************************/
export interface MigrationSPFlightOData extends Base.IBaseResult, MigrationSPFlightProps, MigrationSPFlightMethods {

}

/*********************************************
* MigrationSPFlightMethods
**********************************************/
export interface MigrationSPFlightMethods {
	isFlightEnabled(flightName?: string): Base.IBaseExecution<boolean>;
}

/*********************************************
* IMigrationCenterStorage
**********************************************/
export interface IMigrationCenterStorage extends MigrationCenterStorageCollections, MigrationCenterStorageMethods, Base.IBaseQuery<MigrationCenterStorage, IMigrationCenterStorageQuery> {

}

/*********************************************
* IMigrationCenterStorageCollection
**********************************************/
export interface IMigrationCenterStorageCollection extends Base.IBaseResults<MigrationCenterStorage> {
	done?: (resolve: (value?: Array<MigrationCenterStorage>) => void) => void;
}

/*********************************************
* IMigrationCenterStorageQueryCollection
**********************************************/
export interface IMigrationCenterStorageQueryCollection extends Base.IBaseResults<MigrationCenterStorageOData> {
	done?: (resolve: (value?: Array<MigrationCenterStorageOData>) => void) => void;
}

/*********************************************
* IMigrationCenterStorageQuery
**********************************************/
export interface IMigrationCenterStorageQuery extends MigrationCenterStorageOData, MigrationCenterStorageMethods {

}

/*********************************************
* MigrationCenterStorage
**********************************************/
export interface MigrationCenterStorage extends Base.IBaseResult, MigrationCenterStorageProps, MigrationCenterStorageCollections, MigrationCenterStorageMethods {

}

/*********************************************
* MigrationCenterStorageProps
**********************************************/
export interface MigrationCenterStorageProps {
	ActionId?: number;
	DebugCommand?: string;
	DeviceCount?: number;
	GlobalTaskSettings?: Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskSettings;
	IsServiceInitialized?: boolean;
	PerformanceDataCount?: number;
	SchedulerInformation?: Microsoft.Online.SharePoint.MigrationCenter.Common.TaskSchedulerInformation;
	SchemaVersion?: string;
	TaskCount?: number;
	TotalDevicesAdded?: number;
	TotalPerformanceDataAdded?: number;
	TotalTasksAdded?: number;
}

/*********************************************
* MigrationCenterStoragePropMethods
**********************************************/
export interface MigrationCenterStoragePropMethods {

}

/*********************************************
* MigrationCenterStorageCollections
**********************************************/
export interface MigrationCenterStorageCollections extends MigrationCenterStoragePropMethods {

}

/*********************************************
* MigrationCenterStorageOData
**********************************************/
export interface MigrationCenterStorageOData extends Base.IBaseResult, MigrationCenterStorageProps, MigrationCenterStorageMethods {

}

/*********************************************
* MigrationCenterStorageMethods
**********************************************/
export interface MigrationCenterStorageMethods {
	create(config?: Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationStorageSettings): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	parseUrl(destinationUrl?: string, retrieveAllLists?: boolean, retrieveFoldersForAllLists?: boolean, forceMySiteDefaultList?: boolean, migrationType?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Common.UrlParseResult>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationTask
**********************************************/
export interface IMigrationTask extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskEntityDataCollections, MigrationTaskCollections, MigrationTaskMethods, Base.IBaseQuery<MigrationTask, IMigrationTaskQuery> {

}

/*********************************************
* IMigrationTaskCollection
**********************************************/
export interface IMigrationTaskCollection extends Base.IBaseResults<MigrationTask>, MigrationTaskCollectionMethods {
	done?: (resolve: (value?: Array<MigrationTask>) => void) => void;
}

/*********************************************
* IMigrationTaskQueryCollection
**********************************************/
export interface IMigrationTaskQueryCollection extends Base.IBaseResults<MigrationTaskOData>, MigrationTaskCollectionMethods {
	done?: (resolve: (value?: Array<MigrationTaskOData>) => void) => void;
}

/*********************************************
* IMigrationTaskQuery
**********************************************/
export interface IMigrationTaskQuery extends MigrationTaskOData, MigrationTaskMethods {

}

/*********************************************
* MigrationTask
**********************************************/
export interface MigrationTask extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskEntityData, Base.IBaseResult, MigrationTaskProps, MigrationTaskCollections, MigrationTaskMethods {

}

/*********************************************
* MigrationTaskProps
**********************************************/
export interface MigrationTaskProps {
	ActionId?: number;
	ClientName?: string;
	DebugCommand?: string;
	Duration?: any;
	ErrorCode?: number;
	ErrorMessage?: string;
	FailedTimes?: number;
	FailedTimeUtc?: any;
	FailureId?: number;
	FilesScanned?: number;
	FilesScannedWithIssues?: number;
	FriendlyClientName?: string;
	IsRetryableFailure?: boolean;
	IsScanDone?: boolean;
	LastFinishedTimeUtc?: any;
	LinkedDeviceId?: any;
	LogFilePath?: string;
	ManagementStatus?: number;
	MigratedFilesCount?: number;
	NextScheduleTimeUtc?: any;
	OverallProgressPercentage?: number;
	ReportFileUrl?: string;
	RunTimes?: number;
	ScanDoneTimeUtc?: any;
	ScheduledTimes?: number;
	StartTimeUTC?: any;
	Status?: number;
	StatusUpdatedTimeUTC?: any;
	TaskCreatedTimeUtc?: any;
	TaskId?: any;
	ToBeMigratedFilesCount?: number;
	TotalBytes?: number;
	TotalBytesMigrated?: number;
	UpdateStatusOnly?: boolean;
	UpdateTimestamp?: string;
	WorkflowId?: any;
}

/*********************************************
* MigrationTaskPropMethods
**********************************************/
export interface MigrationTaskPropMethods {

}

/*********************************************
* MigrationTaskCollections
**********************************************/
export interface MigrationTaskCollections extends MigrationTaskPropMethods {

}

/*********************************************
* MigrationTaskCollectionMethods
**********************************************/
export interface MigrationTaskCollectionMethods {
	batchCreate(taskDefinitions?: Array<Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskDefinition>, taskSettings?: Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskSettings, mmTaskSettings?: Microsoft.Online.SharePoint.MigrationCenter.Common.MMTaskSettings): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Common.BatchCreationResult>;
	batchDelete(taskIdList?: Array<any>, deleteInProgressTask?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Common.BatchDeletionResult>;
	createDuplicateTasks(taskDefinition?: Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskDefinition, taskSettings?: Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskSettings, mmTaskSettings?: Microsoft.Online.SharePoint.MigrationCenter.Common.MMTaskSettings, taskCount?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask>;
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskMethods;
}

/*********************************************
* MigrationTaskOData
**********************************************/
export interface MigrationTaskOData extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskEntityData, Base.IBaseResult, MigrationTaskProps, MigrationTaskMethods {

}

/*********************************************
* MigrationTaskMethods
**********************************************/
export interface MigrationTaskMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationCenterTeams
**********************************************/
export interface IMigrationCenterTeams extends MigrationCenterTeamsCollections, MigrationCenterTeamsMethods, Base.IBaseQuery<MigrationCenterTeams, IMigrationCenterTeamsQuery> {

}

/*********************************************
* IMigrationCenterTeamsCollection
**********************************************/
export interface IMigrationCenterTeamsCollection extends Base.IBaseResults<MigrationCenterTeams> {
	done?: (resolve: (value?: Array<MigrationCenterTeams>) => void) => void;
}

/*********************************************
* IMigrationCenterTeamsQueryCollection
**********************************************/
export interface IMigrationCenterTeamsQueryCollection extends Base.IBaseResults<MigrationCenterTeamsOData> {
	done?: (resolve: (value?: Array<MigrationCenterTeamsOData>) => void) => void;
}

/*********************************************
* IMigrationCenterTeamsQuery
**********************************************/
export interface IMigrationCenterTeamsQuery extends MigrationCenterTeamsOData, MigrationCenterTeamsMethods {

}

/*********************************************
* MigrationCenterTeams
**********************************************/
export interface MigrationCenterTeams extends Base.IBaseResult, MigrationCenterTeamsProps, MigrationCenterTeamsCollections, MigrationCenterTeamsMethods {

}

/*********************************************
* MigrationCenterTeamsProps
**********************************************/
export interface MigrationCenterTeamsProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MigrationCenterTeamsPropMethods
**********************************************/
export interface MigrationCenterTeamsPropMethods {

}

/*********************************************
* MigrationCenterTeamsCollections
**********************************************/
export interface MigrationCenterTeamsCollections extends MigrationCenterTeamsPropMethods {

}

/*********************************************
* MigrationCenterTeamsOData
**********************************************/
export interface MigrationCenterTeamsOData extends Base.IBaseResult, MigrationCenterTeamsProps, MigrationCenterTeamsMethods {

}

/*********************************************
* MigrationCenterTeamsMethods
**********************************************/
export interface MigrationCenterTeamsMethods {
	teamChannels(teamId?: string, membershipType?: string): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Common.Teams.ChannelResource>;
	teamChannelsExperiment(teamId?: string, membershipType?: string): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Common.Teams.ChannelResource>;
	teams(startsWith?: string, limit?: number, withLogo?: boolean): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Common.Teams.TeamResource>;
}

/*********************************************
* IMigrationCredential
**********************************************/
export interface IMigrationCredential extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationCredentialEntityDataCollections, MigrationCredentialCollections, MigrationCredentialMethods, Base.IBaseQuery<MigrationCredential, IMigrationCredentialQuery> {

}

/*********************************************
* IMigrationCredentialCollection
**********************************************/
export interface IMigrationCredentialCollection extends Base.IBaseResults<MigrationCredential>, MigrationCredentialCollectionMethods {
	done?: (resolve: (value?: Array<MigrationCredential>) => void) => void;
}

/*********************************************
* IMigrationCredentialQueryCollection
**********************************************/
export interface IMigrationCredentialQueryCollection extends Base.IBaseResults<MigrationCredentialOData>, MigrationCredentialCollectionMethods {
	done?: (resolve: (value?: Array<MigrationCredentialOData>) => void) => void;
}

/*********************************************
* IMigrationCredentialQuery
**********************************************/
export interface IMigrationCredentialQuery extends MigrationCredentialOData, MigrationCredentialMethods {

}

/*********************************************
* MigrationCredential
**********************************************/
export interface MigrationCredential extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationCredentialEntityData, Base.IBaseResult, MigrationCredentialProps, MigrationCredentialCollections, MigrationCredentialMethods {

}

/*********************************************
* MigrationCredentialProps
**********************************************/
export interface MigrationCredentialProps {
	Id?: any;
	LastModifiedBy?: string;
	LastModifiedDateTimeUtc?: any;
}

/*********************************************
* MigrationCredentialPropMethods
**********************************************/
export interface MigrationCredentialPropMethods {

}

/*********************************************
* MigrationCredentialCollections
**********************************************/
export interface MigrationCredentialCollections extends MigrationCredentialPropMethods {

}

/*********************************************
* MigrationCredentialCollectionMethods
**********************************************/
export interface MigrationCredentialCollectionMethods {
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredentialCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredentialMethods;
	getCredentials(AccountName?: string, Type?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential>;
}

/*********************************************
* MigrationCredentialOData
**********************************************/
export interface MigrationCredentialOData extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationCredentialEntityData, Base.IBaseResult, MigrationCredentialProps, MigrationCredentialMethods {

}

/*********************************************
* MigrationCredentialMethods
**********************************************/
export interface MigrationCredentialMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}
