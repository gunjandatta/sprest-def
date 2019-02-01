import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";

/*********************************************
* ISyncTranslator
**********************************************/
export interface ISyncTranslator extends SyncTranslatorCollections,SyncTranslatorMethods,IBaseQuery<ISyncTranslatorQuery> {

}

/*********************************************
* ISyncTranslatorQuery
**********************************************/
export interface ISyncTranslatorQuery extends SyncTranslatorQuery, SyncTranslatorMethods {

}

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator extends SyncTranslatorProps, SyncTranslatorCollections, SyncTranslatorMethods {

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
* SyncTranslatorQuery
**********************************************/
export interface SyncTranslatorQuery extends SyncTranslatorProps, SyncTranslatorMethods {

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
export interface ITranslationJob extends TranslationJobCollections,TranslationJobMethods,IBaseQuery<ITranslationJobQuery> {

}

/*********************************************
* ITranslationJobQuery
**********************************************/
export interface ITranslationJobQuery extends TranslationJobQuery, TranslationJobMethods {

}

/*********************************************
* TranslationJob
**********************************************/
export interface TranslationJob extends TranslationJobProps, TranslationJobCollections, TranslationJobMethods {

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
* TranslationJobQuery
**********************************************/
export interface TranslationJobQuery extends TranslationJobProps, TranslationJobMethods {

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
export interface ITranslationJobStatus extends TranslationJobStatusCollections,TranslationJobStatusMethods,IBaseQuery<ITranslationJobStatusQuery> {

}

/*********************************************
* ITranslationJobStatusQuery
**********************************************/
export interface ITranslationJobStatusQuery extends TranslationJobStatusQuery, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatus
**********************************************/
export interface TranslationJobStatus extends TranslationJobStatusProps, TranslationJobStatusCollections, TranslationJobStatusMethods {

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
* TranslationJobStatusQuery
**********************************************/
export interface TranslationJobStatusQuery extends TranslationJobStatusProps, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatusMethods
**********************************************/
export interface TranslationJobStatusMethods {
	getAllItems(): IBaseExecution<Array<SP.Translation.TranslationItemInfo>>;
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
