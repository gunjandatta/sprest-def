import { IBaseExecution, IBaseResult } from "../../";

/*********************************************
* ISyncTranslator
**********************************************/
export interface ISyncTranslator extends SyncTranslatorCollections,SyncTranslatorMethods,IBaseQuery<ISyncTranslatorQuery> {

}

/*********************************************
* ISyncTranslatorCollection
**********************************************/
export interface ISyncTranslatorCollection extends IBaseResults<SyncTranslator> {
	done(resolve: (value?: Array<SyncTranslator | any>) => void);
}

/*********************************************
* ISyncTranslatorQueryCollection
**********************************************/
export interface ISyncTranslatorQueryCollection extends IBaseResults<SyncTranslatorQuery> {
	done(resolve: (value?: Array<SyncTranslatorQuery | any>) => void);
}

/*********************************************
* ISyncTranslatorQuery
**********************************************/
export interface ISyncTranslatorQuery extends SyncTranslatorQuery, SyncTranslatorMethods {

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
* SyncTranslatorQuery
**********************************************/
export interface SyncTranslatorQuery extends IBaseResult, SyncTranslatorProps, SyncTranslatorMethods {

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
* ITranslationJobCollection
**********************************************/
export interface ITranslationJobCollection extends IBaseResults<TranslationJob> {
	done(resolve: (value?: Array<TranslationJob | any>) => void);
}

/*********************************************
* ITranslationJobQueryCollection
**********************************************/
export interface ITranslationJobQueryCollection extends IBaseResults<TranslationJobQuery> {
	done(resolve: (value?: Array<TranslationJobQuery | any>) => void);
}

/*********************************************
* ITranslationJobQuery
**********************************************/
export interface ITranslationJobQuery extends TranslationJobQuery, TranslationJobMethods {

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
* TranslationJobQuery
**********************************************/
export interface TranslationJobQuery extends IBaseResult, TranslationJobProps, TranslationJobMethods {

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
* ITranslationJobStatusCollection
**********************************************/
export interface ITranslationJobStatusCollection extends IBaseResults<TranslationJobStatus> {
	done(resolve: (value?: Array<TranslationJobStatus | any>) => void);
}

/*********************************************
* ITranslationJobStatusQueryCollection
**********************************************/
export interface ITranslationJobStatusQueryCollection extends IBaseResults<TranslationJobStatusQuery> {
	done(resolve: (value?: Array<TranslationJobStatusQuery | any>) => void);
}

/*********************************************
* ITranslationJobStatusQuery
**********************************************/
export interface ITranslationJobStatusQuery extends TranslationJobStatusQuery, TranslationJobStatusMethods {

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
* TranslationJobStatusQuery
**********************************************/
export interface TranslationJobStatusQuery extends IBaseResult, TranslationJobStatusProps, TranslationJobStatusMethods {

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
