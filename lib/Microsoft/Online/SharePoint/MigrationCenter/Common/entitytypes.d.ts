import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* AgentGroupEntity
**********************************************/
export interface AgentGroupEntity {
	Id?: any;
	Name?: string;
}

/*********************************************
* AgentGroupEntityCollections
**********************************************/
export interface AgentGroupEntityCollections {

}

/*********************************************
* DeviceEntityData
**********************************************/
export interface DeviceEntityData {
	ClientUserName?: string;
	DeviceName?: string;
	DiskSpace?: number;
	FreeQuota?: number;
	FriendlyName?: string;
	GroupName?: string;
	Id?: any;
	StatusQueueExpiresOnTimeUtc?: any;
	StatusQueueUrl?: string;
	TargetUserName?: string;
	TaskQueueExpiresOnTimeUtc?: any;
	TaskQueueUrl?: string;
	Version?: string;
	WorkingFolder?: string;
}

/*********************************************
* DeviceEntityDataCollections
**********************************************/
export interface DeviceEntityDataCollections {

}

/*********************************************
* MigrationPerformanceEntityData
**********************************************/
export interface MigrationPerformanceEntityData {
	AgentId?: any;
	AgentName?: string;
	Bottleneck?: string;
	DiskWritingSpeed?: number;
	Duration?: number;
	MigratedBytes?: number;
	MigratedFiles?: number;
	PackingSpeed?: number;
	Recommendation?: string;
	ResourceId?: any;
	SourceReadingSpeed?: number;
	SPOProcessingSpeed?: number;
	Timestamp?: any;
	UploadingSpeed?: number;
}

/*********************************************
* MigrationPerformanceEntityDataCollections
**********************************************/
export interface MigrationPerformanceEntityDataCollections {

}

/*********************************************
* MigrationTaskEntityData
**********************************************/
export interface MigrationTaskEntityData {
	AgentGroupName?: string;
	AzureActiveDirectoryLkp?: boolean;
	CustomAzureAccessKey?: string;
	CustomAzureDeletionAfterMig?: boolean;
	CustomAzureStorageAccount?: string;
	DateCreated?: any;
	DateModified?: any;
	EnableIncremental?: boolean;
	EnableUserMappings?: boolean;
	Encrypted?: boolean;
	FilterOutHiddenFiles?: boolean;
	FilterOutPathSpecialCharacters?: boolean;
	IgnoredFileExtensions?: string;
	InvalidCharsReplacement?: string;
	MigrateAllWebStructures?: boolean;
	MigrateOneNoteNotebook?: boolean;
	MigrateSchema?: boolean;
	Name?: string;
	PreservePermissionForFileShare?: boolean;
	PreserveUserPermissionForOnPrem?: boolean;
	ReplaceInvalidChars?: boolean;
	ScanOnly?: boolean;
	ScheduledTimeUtc?: any;
	ScheduledType?: number;
	SkipListWithAudienceEnabled?: boolean;
	SourceListName?: string;
	SourceListRelativePath?: string;
	SourceUri?: string;
	SourceUserName?: string;
	StartMigrationAutomaticallyWhenNoScanIssue?: boolean;
	TargetListName?: string;
	TargetListRelativePath?: string;
	TargetSiteUrl?: string;
	TargetUserName?: string;
	TurnOnDateCreatedFilter?: boolean;
	TurnOnDateModifiedFilter?: boolean;
	TurnOnExtensionFilter?: boolean;
	Type?: number;
	UseCustomAzureStorage?: boolean;
	UserMappingCSVFile?: string;
	VersionNumsPreserved?: number;
}

/*********************************************
* MigrationTaskEntityDataCollections
**********************************************/
export interface MigrationTaskEntityDataCollections {

}

/*********************************************
* MigrationCredentialEntityData
**********************************************/
export interface MigrationCredentialEntityData {
	AccountName?: string;
	Description?: string;
	Password?: string;
	Type?: number;
}

/*********************************************
* MigrationCredentialEntityDataCollections
**********************************************/
export interface MigrationCredentialEntityDataCollections {

}

/*********************************************
* PerfRecommendation
**********************************************/
export interface PerfRecommendation {
	Guidance?: string;
	Link?: string;
}

/*********************************************
* PerfRecommendationCollections
**********************************************/
export interface PerfRecommendationCollections {

}

/*********************************************
* UrlParseResult
**********************************************/
export interface UrlParseResult {
	DisplayUrl?: string;
	ErrorCode?: string;
	FreeSiteStorageBytes?: number;
	HasEnoughSiteStorage?: boolean;
	IsCurrentUserSiteAdmin?: boolean;
	IsPersonalSite?: boolean;
	Message?: string;
	OriginalUrl?: string;
	ProcessingMilliseconds?: number;
	ServerUrl?: string;
	SiteId?: any;
	SiteServerRelativeUrl?: string;
	SiteUrl?: string;
	SPListInfoList?: { results: Array<Microsoft.Online.SharePoint.MigrationCenter.Common.SPListInformation> };
	Success?: boolean;
	WebId?: any;
	WebServerRelativeUrl?: string;
	WebTemplateId?: number;
	WebUrl?: string;
}

/*********************************************
* UrlParseResultCollections
**********************************************/
export interface UrlParseResultCollections {

}
