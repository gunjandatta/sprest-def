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
export interface ISyncTranslatorQuery extends SyncTranslatorQuery,SyncTranslatorMethods {

}

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator extends SyncTranslatorCollections, SyncTranslatorMethods {
	OutputSaveBehavior?: number;
}

/*********************************************
* SyncTranslatorProps
**********************************************/
export interface SyncTranslatorProps {

}

/*********************************************
* SyncTranslatorCollections
**********************************************/
export interface SyncTranslatorCollections extends SyncTranslatorProps {

}

/*********************************************
* SyncTranslatorQuery
**********************************************/
export interface SyncTranslatorQuery extends SyncTranslatorProps {

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
export interface ITranslationJobQuery extends TranslationJobQuery,TranslationJobMethods {

}

/*********************************************
* TranslationJob
**********************************************/
export interface TranslationJob extends TranslationJobCollections, TranslationJobMethods {
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
* TranslationJobCollections
**********************************************/
export interface TranslationJobCollections extends TranslationJobProps {

}

/*********************************************
* TranslationJobQuery
**********************************************/
export interface TranslationJobQuery extends TranslationJobProps {

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
export interface ITranslationJobStatusQuery extends TranslationJobStatusQuery,TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatus
**********************************************/
export interface TranslationJobStatus extends TranslationJobStatusCollections, TranslationJobStatusMethods {
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
* TranslationJobStatusCollections
**********************************************/
export interface TranslationJobStatusCollections extends TranslationJobStatusProps {

}

/*********************************************
* TranslationJobStatusQuery
**********************************************/
export interface TranslationJobStatusQuery extends TranslationJobStatusProps {

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
