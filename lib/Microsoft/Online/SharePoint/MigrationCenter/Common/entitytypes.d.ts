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
* AgentGroupEntityOData
**********************************************/
export interface AgentGroupEntityOData extends Base.IBaseResult, AgentGroupEntity {
	Default: Microsoft.Online.SharePoint.MigrationCenter.Common.AgentGroupEntity & Microsoft.Online.SharePoint.MigrationCenter.Common.AgentGroupEntityCollections;
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
	DeltaSyncDateTimeFilter?: any;
	DeltaSyncEnabled?: boolean;
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
	SettingsUpdateTime?: any;
	SkipListWithAudienceEnabled?: boolean;
	SourceListName?: string;
	SourceListRelativePath?: string;
	SourceUri?: string;
	SourceUserName?: string;
	StartMigrationAutomaticallyWhenNoScanIssue?: boolean;
	Tags?: { results: Array<string> };
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
* IMigrationUrlParser
**********************************************/
export interface IMigrationUrlParser extends MigrationUrlParserCollections, MigrationUrlParserMethods, Base.IBaseQuery<MigrationUrlParser, IMigrationUrlParserQuery> {

}

/*********************************************
* IMigrationUrlParserCollection
**********************************************/
export interface IMigrationUrlParserCollection extends Base.IBaseResults<MigrationUrlParser> {
	done?: (resolve: (value?: Array<MigrationUrlParser>) => void) => void;
}

/*********************************************
* IMigrationUrlParserQueryCollection
**********************************************/
export interface IMigrationUrlParserQueryCollection extends Base.IBaseResults<MigrationUrlParserOData> {
	done?: (resolve: (value?: Array<MigrationUrlParserOData>) => void) => void;
}

/*********************************************
* IMigrationUrlParserQuery
**********************************************/
export interface IMigrationUrlParserQuery extends MigrationUrlParserOData, MigrationUrlParserMethods {

}

/*********************************************
* MigrationUrlParser
**********************************************/
export interface MigrationUrlParser extends Base.IBaseResult, MigrationUrlParserProps, MigrationUrlParserCollections, MigrationUrlParserMethods {

}

/*********************************************
* MigrationUrlParserProps
**********************************************/
export interface MigrationUrlParserProps {
	CurrentContextSiteSubscriptionId?: any;
	ForceMySiteDefaultList?: boolean;
	MaxFolderLevels?: number;
	MigrationType?: string;
	OriginalDestinationUrl?: string;
	RetrieveAllLists?: boolean;
	RetrieveSubFoldersForAllLists?: boolean;
}

/*********************************************
* MigrationUrlParserPropMethods
**********************************************/
export interface MigrationUrlParserPropMethods {

}

/*********************************************
* MigrationUrlParserCollections
**********************************************/
export interface MigrationUrlParserCollections extends MigrationUrlParserPropMethods {

}

/*********************************************
* MigrationUrlParserOData
**********************************************/
export interface MigrationUrlParserOData extends Base.IBaseResult, MigrationUrlParserProps, MigrationUrlParserMethods {

}

/*********************************************
* MigrationUrlParserMethods
**********************************************/
export interface MigrationUrlParserMethods {
	parseUrl(): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Common.UrlParseResult>;
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
* IUrlParseResult
**********************************************/
export interface IUrlParseResult extends UrlParseResultCollections, UrlParseResultMethods, Base.IBaseQuery<UrlParseResult, IUrlParseResultQuery> {

}

/*********************************************
* IUrlParseResultCollection
**********************************************/
export interface IUrlParseResultCollection extends Base.IBaseResults<UrlParseResult> {
	done?: (resolve: (value?: Array<UrlParseResult>) => void) => void;
}

/*********************************************
* IUrlParseResultQueryCollection
**********************************************/
export interface IUrlParseResultQueryCollection extends Base.IBaseResults<UrlParseResultOData> {
	done?: (resolve: (value?: Array<UrlParseResultOData>) => void) => void;
}

/*********************************************
* IUrlParseResultQuery
**********************************************/
export interface IUrlParseResultQuery extends UrlParseResultOData, UrlParseResultMethods {

}

/*********************************************
* UrlParseResult
**********************************************/
export interface UrlParseResult extends Base.IBaseResult, UrlParseResultProps, UrlParseResultCollections, UrlParseResultMethods {

}

/*********************************************
* UrlParseResultProps
**********************************************/
export interface UrlParseResultProps {
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
* UrlParseResultPropMethods
**********************************************/
export interface UrlParseResultPropMethods {

}

/*********************************************
* UrlParseResultCollections
**********************************************/
export interface UrlParseResultCollections extends UrlParseResultPropMethods {

}

/*********************************************
* UrlParseResultOData
**********************************************/
export interface UrlParseResultOData extends Base.IBaseResult, UrlParseResultProps, UrlParseResultMethods {

}

/*********************************************
* UrlParseResultMethods
**********************************************/
export interface UrlParseResultMethods {
	setDisplayUrl(displayUrl?: string): Base.IBaseExecution<any>;
	setSPListInformation(spListInformationList?: Array<Microsoft.Online.SharePoint.MigrationCenter.Common.SPListInformation>): Base.IBaseExecution<any>;
	updateSiteProvisionInformation(spListInformation?: Microsoft.Online.SharePoint.MigrationCenter.Common.SPListInformation, uri?: string, originalUrl?: string, errorCode?: string, message?: string, freeSiteStorageBytes?: number, isCurrentUserSiteAdmin?: boolean): Base.IBaseExecution<any>;
}
