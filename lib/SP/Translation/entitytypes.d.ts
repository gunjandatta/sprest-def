

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator {
	OutputSaveBehavior?: number;
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
* VariationsTranslationTimerJob
**********************************************/
export interface VariationsTranslationTimerJob {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
