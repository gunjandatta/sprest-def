import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* CDSMetadata
**********************************************/
export interface CDSMetadata {
	FriendlyName?: string;
	InstanceUrl?: string;
	ResourceId?: string;
}

/*********************************************
* CDSMetadataCollections
**********************************************/
export interface CDSMetadataCollections {

}

/*********************************************
* DefaultContentCenterSiteInfo
**********************************************/
export interface DefaultContentCenterSiteInfo {
	SiteId?: any;
	SiteName?: string;
	Url?: string;
	WebId?: any;
}

/*********************************************
* DefaultContentCenterSiteInfoCollections
**********************************************/
export interface DefaultContentCenterSiteInfoCollections {

}

/*********************************************
* SPMachineLearningEnabled
**********************************************/
export interface SPMachineLearningEnabled {
	IsSyntexPAYGEnabled?: boolean;
	MachineLearningCaptureEnabled?: boolean;
	MachineLearningExperienceEnabled?: boolean;
	TenantSyntexEnabled?: boolean;
	TenantSyntexV2Enabled?: boolean;
	UserSyntexEnabled?: boolean;
	UserSyntexV2Enabled?: boolean;
}

/*********************************************
* SPMachineLearningEnabledCollections
**********************************************/
export interface SPMachineLearningEnabledCollections {

}

/*********************************************
* ISPMachineLearningHub
**********************************************/
export interface ISPMachineLearningHub extends SPMachineLearningHubCollections, SPMachineLearningHubMethods, Base.IBaseQuery<SPMachineLearningHub, ISPMachineLearningHubQuery> {

}

/*********************************************
* ISPMachineLearningHubCollection
**********************************************/
export interface ISPMachineLearningHubCollection extends Base.IBaseResults<SPMachineLearningHub> {
	done?: (resolve: (value?: Array<SPMachineLearningHub>) => void) => void;
}

/*********************************************
* ISPMachineLearningHubQueryCollection
**********************************************/
export interface ISPMachineLearningHubQueryCollection extends Base.IBaseResults<SPMachineLearningHubOData> {
	done?: (resolve: (value?: Array<SPMachineLearningHubOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningHubQuery
**********************************************/
export interface ISPMachineLearningHubQuery extends SPMachineLearningHubOData, SPMachineLearningHubMethods {

}

/*********************************************
* SPMachineLearningHub
**********************************************/
export interface SPMachineLearningHub extends Base.IBaseResult, SPMachineLearningHubProps, SPMachineLearningHubCollections, SPMachineLearningHubMethods {

}

/*********************************************
* SPMachineLearningHubProps
**********************************************/
export interface SPMachineLearningHubProps {
	IsDefaultContentCenter?: boolean;
	MachineLearningCaptureEnabled?: boolean;
}

/*********************************************
* SPMachineLearningHubPropMethods
**********************************************/
export interface SPMachineLearningHubPropMethods {
	DefaultContentCenter(): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.DefaultContentCenterSiteInfo> & Microsoft.Office.Server.ContentCenter.DefaultContentCenterSiteInfoCollections;
	MachineLearningEnabled(): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningEnabled> & Microsoft.Office.Server.ContentCenter.SPMachineLearningEnabledCollections;
	SyntexContext(): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SyntexContext> & Microsoft.Office.Server.ContentCenter.SyntexContextCollections;
}

/*********************************************
* SPMachineLearningHubCollections
**********************************************/
export interface SPMachineLearningHubCollections extends SPMachineLearningHubPropMethods {
	Models(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollectionMethods;
	Models(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
	Publications(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollectionMethods;
	Publications(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
	Samples(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollectionMethods;
	Samples(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
	WorkItems(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItem> & Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItemCollectionMethods;
	WorkItems(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItem> & Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItemCollections;
}

/*********************************************
* SPMachineLearningHubOData
**********************************************/
export interface SPMachineLearningHubOData extends Base.IBaseResult, SPMachineLearningHubProps, SPMachineLearningHubMethods {
	DefaultContentCenter: Microsoft.Office.Server.ContentCenter.DefaultContentCenterSiteInfo & Microsoft.Office.Server.ContentCenter.DefaultContentCenterSiteInfoCollections;
	MachineLearningEnabled: Microsoft.Office.Server.ContentCenter.SPMachineLearningEnabled & Microsoft.Office.Server.ContentCenter.SPMachineLearningEnabledCollections;
	Models: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollectionMethods;
	Publications: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollectionMethods;
	Samples: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollectionMethods;
	SyntexContext: Microsoft.Office.Server.ContentCenter.SyntexContext & Microsoft.Office.Server.ContentCenter.SyntexContextCollections;
	WorkItems: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItem> & Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItemCollectionMethods;
}

/*********************************************
* SPMachineLearningHubMethods
**********************************************/
export interface SPMachineLearningHubMethods {
	checkAIBuilderAccess(environmentName?: string, isTestEnvironment?: boolean, userId?: string): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	getAutofillColumnSettings(docLibId?: any): Base.IBaseExecution<string>;
	getByContentTypeId(contentTypeId?: string): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SyntexModelsLandingInfo>;
	getCDSMetadata(environmentName?: string, isTestEnvironment?: boolean): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.CDSMetadata>;
	getColumnLLMInfo(docLibId?: any, columnId?: any): Base.IBaseExecution<SP.Utilities.LLMColumnInfo>;
	getLibraryLLMInfo(docLibId?: any): Base.IBaseCollection<SP.Utilities.AutofillColumnInfo>;
	getMachineLearningFlags(docLibId?: any): Base.IBaseExecution<number>;
	getModelIdForContentType(contentTypeName?: string): Base.IBaseExecution<string>;
	getModels(listId?: any, modelTypes?: number, publicationTypes?: number, includeManagementNotAllowedModels?: boolean): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollectionMethods;
	getRetentionLabel(retentionLabelId?: any): Base.IBaseExecution<SP.CompliancePolicy.ComplianceTag>;
	getRetentionLabels(): Base.IBaseCollection<SP.CompliancePolicy.ComplianceTag>;
	getSyntexPoweredColumnPrompts(docLibId?: any): Base.IBaseExecution<string>;
	invokeDataverseQuery(): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	setAutofillColumnSettings(docLibId?: any, autofillColumnSettings?: string): Base.IBaseExecution<any>;
	setColumnLLMInfo(docLibId?: any, columnId?: any, autofillPrompt?: string, isEnabled?: boolean): Base.IBaseExecution<any>;
	setMachineLearningFlags(docLibId?: any, machineLearningFlags?: number): Base.IBaseExecution<any>;
	setSyntexPoweredColumnPrompts(docLibId?: any, syntexPoweredColumnPrompts?: string): Base.IBaseExecution<any>;
	verifyModelUrls(urls?: Array<string>): Base.IBaseExecution<any>;
	verifyModelUrlsAndGrantPAC(urls?: Array<string>): Base.IBaseExecution<string>;
}

/*********************************************
* ISPMachineLearningModel
**********************************************/
export interface ISPMachineLearningModel extends SPMachineLearningModelCollections, SPMachineLearningModelMethods, Base.IBaseQuery<SPMachineLearningModel, ISPMachineLearningModelQuery> {

}

/*********************************************
* ISPMachineLearningModelCollection
**********************************************/
export interface ISPMachineLearningModelCollection extends Base.IBaseResults<SPMachineLearningModel>, SPMachineLearningModelCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningModel>) => void) => void;
}

/*********************************************
* ISPMachineLearningModelQueryCollection
**********************************************/
export interface ISPMachineLearningModelQueryCollection extends Base.IBaseResults<SPMachineLearningModelOData>, SPMachineLearningModelCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningModelOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningModelQuery
**********************************************/
export interface ISPMachineLearningModelQuery extends SPMachineLearningModelOData, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModel
**********************************************/
export interface SPMachineLearningModel extends Base.IBaseResult, SPMachineLearningModelProps, SPMachineLearningModelCollections, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModelProps
**********************************************/
export interface SPMachineLearningModelProps {
	AIBuilderHybridModelType?: string;
	AzureCognitivePrebuiltModelName?: string;
	BaseContentTypeName?: string;
	ConfidenceScore?: string;
	ContentTypeGroup?: string;
	ContentTypeId?: string;
	ContentTypeName?: string;
	Created?: any;
	CreatedBy?: string;
	ModelDependencies?: Microsoft.Office.Server.ContentCenter.SPModelDependencies;
	DriveId?: string;
	Explanations?: string;
	ExtractorFieldMapping?: string;
	ID?: number;
	LastTrained?: any;
	ListID?: any;
	ManagementAllowed?: boolean;
	ModelName?: string;
	ModelPublishConfig?: Microsoft.Office.Server.ContentCenter.SPModelPublishConfig;
	ModelRules?: string;
	ModelSettings?: string;
	ModelType?: number;
	ModelTypeAsString?: string;
	ModelTypeInternalName?: string;
	Modified?: any;
	ModifiedBy?: string;
	ObjectId?: string;
	PublicationType?: number;
	Schemas?: string;
	SourceSiteUrl?: string;
	SourceUrl?: string;
	SourceWebServerRelativeUrl?: string;
	UniqueId?: any;
}

/*********************************************
* SPMachineLearningModelPropMethods
**********************************************/
export interface SPMachineLearningModelPropMethods {

}

/*********************************************
* SPMachineLearningModelCollections
**********************************************/
export interface SPMachineLearningModelCollections extends SPMachineLearningModelPropMethods {

}

/*********************************************
* SPMachineLearningModelCollectionMethods
**********************************************/
export interface SPMachineLearningModelCollectionMethods {
	getByTitle(title?: string): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
	getExtractorNames(packageName?: string): Base.IBaseExecution<Array<string>>;
	import(packageName?: string): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel>;
	setupPrimedLibrary(primedLibraryName?: string, packageName?: string, isTileViewEnabled?: boolean, serverRelativeLibraryPath?: string): Base.IBaseExecution<SP.List>;
	unbindModelFromContentType(contentTypeId?: string): Base.IBaseExecution<any>;
}

/*********************************************
* SPMachineLearningModelOData
**********************************************/
export interface SPMachineLearningModelOData extends Base.IBaseResult, SPMachineLearningModelProps, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModelMethods
**********************************************/
export interface SPMachineLearningModelMethods {
	addModelDependency(modelId?: string, updateExisting?: boolean): Base.IBaseExecution<any>;
	copy(copyTo?: string): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel>;
	delete(): Base.IBaseExecution<any>;
	importMeta(): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel>;
	invokeConnectorQuery(): Base.IBaseExecution<any>;
	removeModelDependency(modelId?: string): Base.IBaseExecution<any>;
	rename(renameTo?: string): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel>;
	renameExtractor(fromExtractorName?: string, toExtractorName?: string, toColumnType?: string): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel>;
	setAsModelAuthor(): Base.IBaseExecution<boolean>;
	update(): Base.IBaseExecution<any>;
	updateModelSettings(ModelSettings?: string): Base.IBaseExecution<any>;
	updateModelTypeSpecificSettings(Settings?: Array<SP.KeyValue>): Base.IBaseExecution<any>;
}

/*********************************************
* ISPMachineLearningPublication
**********************************************/
export interface ISPMachineLearningPublication extends SPMachineLearningPublicationCollections, SPMachineLearningPublicationMethods, Base.IBaseQuery<SPMachineLearningPublication, ISPMachineLearningPublicationQuery> {

}

/*********************************************
* ISPMachineLearningPublicationCollection
**********************************************/
export interface ISPMachineLearningPublicationCollection extends Base.IBaseResults<SPMachineLearningPublication>, SPMachineLearningPublicationCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningPublication>) => void) => void;
}

/*********************************************
* ISPMachineLearningPublicationQueryCollection
**********************************************/
export interface ISPMachineLearningPublicationQueryCollection extends Base.IBaseResults<SPMachineLearningPublicationOData>, SPMachineLearningPublicationCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningPublicationOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningPublicationQuery
**********************************************/
export interface ISPMachineLearningPublicationQuery extends SPMachineLearningPublicationOData, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublication
**********************************************/
export interface SPMachineLearningPublication extends Base.IBaseResult, SPMachineLearningPublicationProps, SPMachineLearningPublicationCollections, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublicationProps
**********************************************/
export interface SPMachineLearningPublicationProps {
	Created?: any;
	CreatedBy?: string;
	DriveId?: string;
	HasTargetSitePermission?: boolean;
	ID?: number;
	ModelId?: number;
	ModelName?: string;
	ModelType?: number;
	ModelUniqueId?: any;
	ModelVersion?: string;
	Modified?: any;
	ModifiedBy?: string;
	ObjectId?: string;
	PublicationType?: number;
	TargetLibraryId?: any;
	TargetLibraryName?: string;
	TargetLibraryRemoved?: boolean;
	TargetLibraryServerRelativeUrl?: string;
	TargetLibraryUrl?: string;
	TargetSiteId?: any;
	TargetSiteUrl?: string;
	TargetTableListId?: any;
	TargetTableListName?: string;
	TargetTableListRemoved?: boolean;
	TargetTableListServerRelativeUrl?: string;
	TargetTableListUrl?: string;
	TargetWebId?: any;
	TargetWebName?: string;
	TargetWebServerRelativeUrl?: string;
	UniqueId?: any;
	ViewOption?: string;
}

/*********************************************
* SPMachineLearningPublicationPropMethods
**********************************************/
export interface SPMachineLearningPublicationPropMethods {

}

/*********************************************
* SPMachineLearningPublicationCollections
**********************************************/
export interface SPMachineLearningPublicationCollections extends SPMachineLearningPublicationPropMethods {

}

/*********************************************
* SPMachineLearningPublicationCollectionMethods
**********************************************/
export interface SPMachineLearningPublicationCollectionMethods {
	batchDelete(publications?: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData>): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationsResult>;
	batchRemove(modelSiteUrl?: string, modelWebServerRelativeUrl?: string, publications?: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData>): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationsResult>;
	batchUnpromote(promotions?: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData>): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationsResult>;
	checkTenantPublishPermissions(): Base.IBaseExecution<boolean>;
	getByModelUniqueId(modelUniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
	getByModelUniqueIdAndPublicationType(modelUniqueId?: any, publicationType?: number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
}

/*********************************************
* SPMachineLearningPublicationOData
**********************************************/
export interface SPMachineLearningPublicationOData extends Base.IBaseResult, SPMachineLearningPublicationProps, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublicationMethods
**********************************************/
export interface SPMachineLearningPublicationMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ISPMachineLearningSample
**********************************************/
export interface ISPMachineLearningSample extends SPMachineLearningSampleCollections, SPMachineLearningSampleMethods, Base.IBaseQuery<SPMachineLearningSample, ISPMachineLearningSampleQuery> {

}

/*********************************************
* ISPMachineLearningSampleCollection
**********************************************/
export interface ISPMachineLearningSampleCollection extends Base.IBaseResults<SPMachineLearningSample>, SPMachineLearningSampleCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningSample>) => void) => void;
}

/*********************************************
* ISPMachineLearningSampleQueryCollection
**********************************************/
export interface ISPMachineLearningSampleQueryCollection extends Base.IBaseResults<SPMachineLearningSampleOData>, SPMachineLearningSampleCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningSampleOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningSampleQuery
**********************************************/
export interface ISPMachineLearningSampleQuery extends SPMachineLearningSampleOData, SPMachineLearningSampleMethods {

}

/*********************************************
* SPMachineLearningSample
**********************************************/
export interface SPMachineLearningSample extends Base.IBaseResult, SPMachineLearningSampleProps, SPMachineLearningSampleCollections, SPMachineLearningSampleMethods {

}

/*********************************************
* SPMachineLearningSampleProps
**********************************************/
export interface SPMachineLearningSampleProps {
	Created?: any;
	CreatedBy?: string;
	CreatedByName?: string;
	DriveId?: string;
	Etag?: string;
	ExtractedText?: string;
	FileLeafRef?: string;
	FileRef?: string;
	FileType?: string;
	FSObjType?: number;
	ID?: number;
	ListID?: any;
	Markups?: string;
	ModelIds?: { results: Array<number> };
	Modified?: any;
	ModifiedBy?: string;
	ModifiedByName?: string;
	ObjectId?: string;
	ServerRedirectedEmbedUri?: string;
	Title?: string;
	TokenEndPosition?: { results: Array<number> };
	TokenStartPosition?: { results: Array<number> };
	UniqueId?: any;
}

/*********************************************
* SPMachineLearningSamplePropMethods
**********************************************/
export interface SPMachineLearningSamplePropMethods {

}

/*********************************************
* SPMachineLearningSampleCollections
**********************************************/
export interface SPMachineLearningSampleCollections extends SPMachineLearningSamplePropMethods {

}

/*********************************************
* SPMachineLearningSampleCollectionMethods
**********************************************/
export interface SPMachineLearningSampleCollectionMethods {
	getByModelId(modelID?: number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
	getByTitle(title?: string): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
	getByUniqueIdWithTokenization(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
	getTemplateByModelId(modelID?: number): Base.IBaseExecution<Array<string>>;
}

/*********************************************
* SPMachineLearningSampleOData
**********************************************/
export interface SPMachineLearningSampleOData extends Base.IBaseResult, SPMachineLearningSampleProps, SPMachineLearningSampleMethods {

}

/*********************************************
* SPMachineLearningSampleMethods
**********************************************/
export interface SPMachineLearningSampleMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* SyntexContext
**********************************************/
export interface SyntexContext {
	SyntexAIBuilderEnabled?: boolean;
	SyntexDocumentUnderstandingEnabled?: boolean;
	SyntexPrebuiltEnabled?: boolean;
}

/*********************************************
* SyntexContextCollections
**********************************************/
export interface SyntexContextCollections {

}

/*********************************************
* SPMachineLearningWorkItem
**********************************************/
export interface SPMachineLearningWorkItem {
	Created?: any;
	DeliverDate?: any;
	ErrorMessage?: string;
	ID?: any;
	Status?: string;
	StatusCode?: number;
	TargetServerRelativeUrl?: string;
	TargetSiteId?: any;
	TargetSiteUrl?: string;
	TargetUniqueId?: any;
	TargetWebId?: any;
	TargetWebServerRelativeUrl?: string;
	Type?: any;
}

/*********************************************
* SPMachineLearningWorkItemCollections
**********************************************/
export interface SPMachineLearningWorkItemCollections extends SPMachineLearningWorkItemCollectionMethods {

}

/*********************************************
* SPMachineLearningWorkItemCollectionMethods
**********************************************/
export interface SPMachineLearningWorkItemCollectionMethods {
	getByIdentifier(identifier?: string): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItem> & Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItemCollections;
}

/*********************************************
* SPMachineLearningModelEntityData
**********************************************/
export interface SPMachineLearningModelEntityData {
	Accuracy?: any;
	AIBuilderHybridModelEnvironment?: string;
	AIBuilderHybridModelHostName?: string;
	AIBuilderHybridModelInTestEnvironment?: boolean;
	AzureCognitivePrebuiltModelName?: string;
	BaseContentTypeName?: string;
	AIBuilderHybridModelType?: string;
	ColumnId?: string;
	ColumnName?: string;
	Columns?: { results: Array<Microsoft.Office.Server.ContentCenter.ColumnDef> };
	ColumnType?: string;
	ContentTypeGroup?: string;
	ContentTypeId?: string;
	ContentTypeName?: string;
	Explanations?: string;
	LastTrained?: any;
	Locale?: string;
	ModelName?: string;
	ModelSettings?: string;
	ModelType?: string;
	SampleFileUniqueIds?: { results: Array<any> };
	Schemas?: string;
	TableLinkColumns?: { results: Array<Microsoft.Office.Server.ContentCenter.ColumnDef> };
}

/*********************************************
* SPMachineLearningModelEntityDataCollections
**********************************************/
export interface SPMachineLearningModelEntityDataCollections {

}

/*********************************************
* SPMachineLearningPublicationsEntityData
**********************************************/
export interface SPMachineLearningPublicationsEntityData {
	Comment?: string;
	isTileViewEnabled?: boolean;
	ModelSiteUrl?: string;
	ModelWebServerRelativeUrl?: string;
	Promote?: boolean;
	Publications?: { results: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData> };
	PublicationType?: number;
}

/*********************************************
* SPMachineLearningPublicationsEntityDataCollections
**********************************************/
export interface SPMachineLearningPublicationsEntityDataCollections {

}

/*********************************************
* SPMachineLearningPublicationsResult
**********************************************/
export interface SPMachineLearningPublicationsResult {
	Details?: { results: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationResult> };
	TotalFailures?: number;
	TotalSuccesses?: number;
}

/*********************************************
* SPMachineLearningPublicationsResultCollections
**********************************************/
export interface SPMachineLearningPublicationsResultCollections {

}

/*********************************************
* SPMachineLearningSampleEntityData
**********************************************/
export interface SPMachineLearningSampleEntityData {
	ExtractedText?: string;
	Markups?: string;
}

/*********************************************
* SPMachineLearningSampleEntityDataCollections
**********************************************/
export interface SPMachineLearningSampleEntityDataCollections {

}

/*********************************************
* SPMachineLearningWorkItemEntityData
**********************************************/
export interface SPMachineLearningWorkItemEntityData {
	ExtraPropertyList?: string;
	IsFolder?: boolean;
	ProfileName?: string;
	TargetServerRelativeUrl?: string;
	TargetSiteId?: any;
	TargetSiteUrl?: string;
	TargetUniqueId?: any;
	TargetWebId?: any;
	TargetWebServerRelativeUrl?: string;
	Type?: any;
}

/*********************************************
* SPMachineLearningWorkItemEntityDataCollections
**********************************************/
export interface SPMachineLearningWorkItemEntityDataCollections {

}

/*********************************************
* SyntexModelsLandingInfo
**********************************************/
export interface SyntexModelsLandingInfo {
	DocumentUnderstandingModelDisplayName?: string;
	DocumentUnderstandingModelLandingUrl?: string;
	FormProcessingModelDisplayName?: string;
	FormProcessingModelLandingUrl?: string;
}

/*********************************************
* SyntexModelsLandingInfoCollections
**********************************************/
export interface SyntexModelsLandingInfoCollections {

}
