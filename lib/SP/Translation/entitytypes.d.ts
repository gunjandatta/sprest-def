import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* ISyncTranslator
**********************************************/
export interface ISyncTranslator extends SyncTranslatorCollections, SyncTranslatorMethods, IBaseQuery<ISyncTranslatorQuery> {

}

/*********************************************
* ISyncTranslatorCollection
**********************************************/
export interface ISyncTranslatorCollection extends IBaseResults<SyncTranslator> {
	done?: (resolve: (value?: Array<SyncTranslator>) => void) => void;
}

/*********************************************
* ISyncTranslatorQueryCollection
**********************************************/
export interface ISyncTranslatorQueryCollection extends IBaseResults<SyncTranslatorOData> {
	done?: (resolve: (value?: Array<SyncTranslatorOData>) => void) => void;
}

/*********************************************
* ISyncTranslatorQuery
**********************************************/
export interface ISyncTranslatorQuery extends SyncTranslatorOData, SyncTranslatorMethods {

}

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator extends IBaseResult, SyncTranslatorProps, SyncTranslatorCollections, SyncTranslatorMethods {

}

/*********************************************
* SyncTranslatorProps
**********************************************/
export interface SyncTranslatorProps {
	OutputSaveBehavior?: number;
}

/*********************************************
* SyncTranslatorPropMethods
**********************************************/
export interface SyncTranslatorPropMethods {

}

/*********************************************
* SyncTranslatorCollections
**********************************************/
export interface SyncTranslatorCollections extends SyncTranslatorPropMethods {

}

/*********************************************
* SyncTranslatorOData
**********************************************/
export interface SyncTranslatorOData extends IBaseResult, SyncTranslatorProps, SyncTranslatorMethods {

}

/*********************************************
* SyncTranslatorMethods
**********************************************/
export interface SyncTranslatorMethods {
	translate(inputFile?: string, outputFile?: string): IBaseExecution<SP.Translation.TranslationItemInfo>;
	translateStream(inputFile?: any, fileExtension?: string): IBaseExecution<any>;
}

/*********************************************
* ITranslationJob
**********************************************/
export interface ITranslationJob extends TranslationJobCollections, TranslationJobMethods, IBaseQuery<ITranslationJobQuery> {

}

/*********************************************
* ITranslationJobCollection
**********************************************/
export interface ITranslationJobCollection extends IBaseResults<TranslationJob> {
	done?: (resolve: (value?: Array<TranslationJob>) => void) => void;
}

/*********************************************
* ITranslationJobQueryCollection
**********************************************/
export interface ITranslationJobQueryCollection extends IBaseResults<TranslationJobOData> {
	done?: (resolve: (value?: Array<TranslationJobOData>) => void) => void;
}

/*********************************************
* ITranslationJobQuery
**********************************************/
export interface ITranslationJobQuery extends TranslationJobOData, TranslationJobMethods {

}

/*********************************************
* TranslationJob
**********************************************/
export interface TranslationJob extends IBaseResult, TranslationJobProps, TranslationJobCollections, TranslationJobMethods {

}

/*********************************************
* TranslationJobProps
**********************************************/
export interface TranslationJobProps {
	JobId?: any;
	Name?: string;
	OutputSaveBehavior?: number;
}

/*********************************************
* TranslationJobPropMethods
**********************************************/
export interface TranslationJobPropMethods {

}

/*********************************************
* TranslationJobCollections
**********************************************/
export interface TranslationJobCollections extends TranslationJobPropMethods {

}

/*********************************************
* TranslationJobOData
**********************************************/
export interface TranslationJobOData extends IBaseResult, TranslationJobProps, TranslationJobMethods {

}

/*********************************************
* TranslationJobMethods
**********************************************/
export interface TranslationJobMethods {
	translateFile(inputFile?: string, outputFile?: string): IBaseExecution<any>;
	translateFolder(inputFolder?: string, outputFolder?: string, recursion?: boolean): IBaseExecution<any>;
	translateLibrary(inputLibrary?: string, outputLibrary?: string): IBaseExecution<any>;
}

/*********************************************
* ITranslationJobStatus
**********************************************/
export interface ITranslationJobStatus extends TranslationJobStatusCollections, TranslationJobStatusMethods, IBaseQuery<ITranslationJobStatusQuery> {

}

/*********************************************
* ITranslationJobStatusCollection
**********************************************/
export interface ITranslationJobStatusCollection extends IBaseResults<TranslationJobStatus> {
	done?: (resolve: (value?: Array<TranslationJobStatus>) => void) => void;
}

/*********************************************
* ITranslationJobStatusQueryCollection
**********************************************/
export interface ITranslationJobStatusQueryCollection extends IBaseResults<TranslationJobStatusOData> {
	done?: (resolve: (value?: Array<TranslationJobStatusOData>) => void) => void;
}

/*********************************************
* ITranslationJobStatusQuery
**********************************************/
export interface ITranslationJobStatusQuery extends TranslationJobStatusOData, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatus
**********************************************/
export interface TranslationJobStatus extends IBaseResult, TranslationJobStatusProps, TranslationJobStatusCollections, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatusProps
**********************************************/
export interface TranslationJobStatusProps {
	Canceled?: number;
	Count?: number;
	Failed?: number;
	InProgress?: number;
	Name?: string;
	NotStarted?: number;
	Succeeded?: number;
}

/*********************************************
* TranslationJobStatusPropMethods
**********************************************/
export interface TranslationJobStatusPropMethods {

}

/*********************************************
* TranslationJobStatusCollections
**********************************************/
export interface TranslationJobStatusCollections extends TranslationJobStatusPropMethods {

}

/*********************************************
* TranslationJobStatusOData
**********************************************/
export interface TranslationJobStatusOData extends IBaseResult, TranslationJobStatusProps, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatusMethods
**********************************************/
export interface TranslationJobStatusMethods {
	getAllItems(): IBaseCollection<SP.Translation.TranslationItemInfo>;
}

/*********************************************
* VariationsTranslationTimerJob
**********************************************/
export interface VariationsTranslationTimerJob {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* VariationsTranslationTimerJobCollections
**********************************************/
export interface VariationsTranslationTimerJobCollections {

}
