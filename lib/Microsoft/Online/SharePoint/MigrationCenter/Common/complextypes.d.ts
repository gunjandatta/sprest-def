import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* BatchCreationResult
**********************************************/
export interface BatchCreationResult {
	CreatedCount?: number;
	CreatedTaskIdList?: Array<any>;
	ErrorCode?: string;
	ErrorMessage?: string;
	FieldError?: string;
	ProcessingMilliseconds?: number;
	TotalCount?: number;
}

/*********************************************
* BatchCreationResultCollections
**********************************************/
export interface BatchCreationResultCollections {

}

/*********************************************
* BatchDeletionResult
**********************************************/
export interface BatchDeletionResult {
	DeletedCount?: number;
	DeletedTaskIdList?: Array<any>;
	ErrorCode?: string;
	ErrorMessage?: string;
	NotDeletedCount?: number;
	NotDeletedTaskIdList?: Array<any>;
	ProcessingMilliseconds?: number;
}

/*********************************************
* BatchDeletionResultCollections
**********************************************/
export interface BatchDeletionResultCollections {

}

/*********************************************
* MigrationStorageSettings
**********************************************/
export interface MigrationStorageSettings {
	EncryptedCertificate?: string;
	EncryptionKey?: string;
}

/*********************************************
* MigrationStorageSettingsCollections
**********************************************/
export interface MigrationStorageSettingsCollections {

}

/*********************************************
* MigrationTaskDefinition
**********************************************/
export interface MigrationTaskDefinition {
	Name?: string;
	SourceListName?: string;
	SourceListRelativePath?: string;
	SourceUri?: string;
	SourceUserName?: string;
	TargetListName?: string;
	TargetListRelativePath?: string;
	TargetSiteUrl?: string;
	TargetUserName?: string;
	Type?: number;
}

/*********************************************
* MigrationTaskDefinitionCollections
**********************************************/
export interface MigrationTaskDefinitionCollections {

}

/*********************************************
* MigrationTaskSettings
**********************************************/
export interface MigrationTaskSettings {
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
	PreservePermissionForFileShare?: boolean;
	PreserveUserPermissionForOnPrem?: boolean;
	ReplaceInvalidChars?: boolean;
	ScanOnly?: boolean;
	SkipListWithAudienceEnabled?: boolean;
	StartMigrationAutomaticallyWhenNoScanIssue?: boolean;
	TurnOnDateCreatedFilter?: boolean;
	TurnOnDateModifiedFilter?: boolean;
	TurnOnExtensionFilter?: boolean;
	UseCustomAzureStorage?: boolean;
	UserMappingCSVFile?: string;
	VersionNumsPreserved?: number;
}

/*********************************************
* MigrationTaskSettingsCollections
**********************************************/
export interface MigrationTaskSettingsCollections {

}

/*********************************************
* MMTaskSettings
**********************************************/
export interface MMTaskSettings {
	AgentGroupName?: string;
	ScheduledTimeUtc?: any;
	ScheduledType?: number;
}

/*********************************************
* MMTaskSettingsCollections
**********************************************/
export interface MMTaskSettingsCollections {

}

/*********************************************
* SPFolderInformation
**********************************************/
export interface SPFolderInformation {
	Depth?: number;
	IsSpecified?: boolean;
	Name?: string;
	ServerRelativeUrl?: string;
	WebRelativeUrl?: string;
}

/*********************************************
* SPFolderInformationCollections
**********************************************/
export interface SPFolderInformationCollections {

}

/*********************************************
* SPListInformation
**********************************************/
export interface SPListInformation {
	AbsoluteUrl?: string;
	BaseTemplate?: number;
	DisplayTitle?: string;
	FolderInfoList?: Array<Microsoft.Online.SharePoint.MigrationCenter.Common.SPFolderInformation>;
	ID?: any;
	IsListPathUsedAsTitle?: boolean;
	IsMySiteDocumentLibrary?: boolean;
	IsQueryFoldersThrottled?: boolean;
	IsSpecifiedOrDefault?: boolean;
	ServerRelativeUrl?: string;
	ShowWarning?: boolean;
	Title?: string;
}

/*********************************************
* SPListInformationCollections
**********************************************/
export interface SPListInformationCollections {

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
	Version?: string;
}

/*********************************************
* TaskSchedulerInformationCollections
**********************************************/
export interface TaskSchedulerInformationCollections {

}
