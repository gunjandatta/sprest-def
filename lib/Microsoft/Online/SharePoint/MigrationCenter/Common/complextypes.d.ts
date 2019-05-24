import { Base } from "../../../../../";

/*********************************************
* MigrationStorageConfig
**********************************************/
export interface MigrationStorageConfig {
	EncryptionKey?: string;
}

/*********************************************
* MigrationStorageConfigCollections
**********************************************/
export interface MigrationStorageConfigCollections {

}

/*********************************************
* TaskSchedulerInformation
**********************************************/
export interface TaskSchedulerInformation {
	AverageDurationMilliSeconds?: number;
	CreatedDateUtc?: string;
	DeliveryDateUtc?: string;
	MaxDurationMilliSeconds?: number;
	ScheduledTimes?: number;
	SchedulerExists?: boolean;
	SchedulerId?: string;
}

/*********************************************
* TaskSchedulerInformationCollections
**********************************************/
export interface TaskSchedulerInformationCollections {

}
