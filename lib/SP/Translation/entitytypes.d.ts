

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator {
	OutputSaveBehavior?: number;
}

/*********************************************
* SyncTranslatorMethods<T = any>
**********************************************/
export interface SyncTranslatorMethods<T = any> {
	translate(inputFile?: string, outputFile?: string): T;
	translateStream(inputFile?: any, fileExtension?: string): T;
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
* TranslationJobMethods<T = any>
**********************************************/
export interface TranslationJobMethods<T = any> {
	translateFile(inputFile?: string, outputFile?: string): T;
	translateFolder(inputFolder?: string, outputFolder?: string, recursion?: boolean): T;
	translateLibrary(inputLibrary?: string, outputLibrary?: string): T;
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
* TranslationJobStatusMethods<T = any>
**********************************************/
export interface TranslationJobStatusMethods<T = any> {
	getAllItems(): T;
}

/*********************************************
* VariationsTranslationTimerJob
**********************************************/
export interface VariationsTranslationTimerJob {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
