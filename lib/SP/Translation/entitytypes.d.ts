

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator {
	OutputSaveBehavior?: number;
}

/*********************************************
* SyncTranslatorMethods
**********************************************/
export interface SyncTranslatorMethods {
	translate<T=SP.Translation.TranslationItemInfo>(inputFile?: string, outputFile?: string): T;
	translateStream<T=any>(inputFile?: any, fileExtension?: string): T;
}

/*********************************************
* TranslationJob
**********************************************/
export interface TranslationJob {
	JobId?: any;
	Name?: string;
	OutputSaveBehavior?: number;
}

/*********************************************
* TranslationJobMethods
**********************************************/
export interface TranslationJobMethods {
	translateFile<T=any>(inputFile?: string, outputFile?: string): T;
	translateFolder<T=any>(inputFolder?: string, outputFolder?: string, recursion?: boolean): T;
	translateLibrary<T=any>(inputLibrary?: string, outputLibrary?: string): T;
}

/*********************************************
* TranslationJobStatus
**********************************************/
export interface TranslationJobStatus {
	Canceled?: number;
	Count?: number;
	Failed?: number;
	InProgress?: number;
	Name?: string;
	NotStarted?: number;
	Succeeded?: number;
}

/*********************************************
* TranslationJobStatusMethods
**********************************************/
export interface TranslationJobStatusMethods {
	getAllItems<T=Array<SP.Translation.TranslationItemInfo>>(): T;
}

/*********************************************
* VariationsTranslationTimerJob
**********************************************/
export interface VariationsTranslationTimerJob {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
