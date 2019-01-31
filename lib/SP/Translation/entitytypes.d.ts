import { IBaseExecution } from "../../";

/*********************************************
* ISyncTranslator
**********************************************/
export interface ISyncTranslator extends SyncTranslatorProps,SyncTranslatorMethods,IBaseExecution<SyncTranslator> {

}

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator extends SyncTranslatorProps, SyncTranslatorMethods {
	OutputSaveBehavior?: number;
}

/*********************************************
* SyncTranslatorProps
**********************************************/
export interface SyncTranslatorProps {

}

/*********************************************
* SyncTranslatorMethods
**********************************************/
export interface SyncTranslatorMethods {
	translate<T=SP.Translation.TranslationItemInfo>(inputFile?: string, outputFile?: string): IBaseExecution<T>;
	translateStream<T=any>(inputFile?: any, fileExtension?: string): IBaseExecution<T>;
}

/*********************************************
* ITranslationJob
**********************************************/
export interface ITranslationJob extends TranslationJobProps,TranslationJobMethods,IBaseExecution<TranslationJob> {

}

/*********************************************
* TranslationJob
**********************************************/
export interface TranslationJob extends TranslationJobProps, TranslationJobMethods {
	JobId?: any;
	Name?: string;
	OutputSaveBehavior?: number;
}

/*********************************************
* TranslationJobProps
**********************************************/
export interface TranslationJobProps {

}

/*********************************************
* TranslationJobMethods
**********************************************/
export interface TranslationJobMethods {
	translateFile<T=any>(inputFile?: string, outputFile?: string): IBaseExecution<T>;
	translateFolder<T=any>(inputFolder?: string, outputFolder?: string, recursion?: boolean): IBaseExecution<T>;
	translateLibrary<T=any>(inputLibrary?: string, outputLibrary?: string): IBaseExecution<T>;
}

/*********************************************
* ITranslationJobStatus
**********************************************/
export interface ITranslationJobStatus extends TranslationJobStatusProps,TranslationJobStatusMethods,IBaseExecution<TranslationJobStatus> {

}

/*********************************************
* TranslationJobStatus
**********************************************/
export interface TranslationJobStatus extends TranslationJobStatusProps, TranslationJobStatusMethods {
	Canceled?: number;
	Count?: number;
	Failed?: number;
	InProgress?: number;
	Name?: string;
	NotStarted?: number;
	Succeeded?: number;
}

/*********************************************
* TranslationJobStatusProps
**********************************************/
export interface TranslationJobStatusProps {

}

/*********************************************
* TranslationJobStatusMethods
**********************************************/
export interface TranslationJobStatusMethods {
	getAllItems<T=Array<SP.Translation.TranslationItemInfo>>(): IBaseExecution<T>;
}

/*********************************************
* VariationsTranslationTimerJob
**********************************************/
export interface VariationsTranslationTimerJob {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
