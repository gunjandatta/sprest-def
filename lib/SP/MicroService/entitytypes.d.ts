

/*********************************************
* MicroServiceManager
**********************************************/
export interface MicroServiceManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceManagerMethods<T = any>
**********************************************/
export interface MicroServiceManagerMethods<T = any> {
	addMicroserviceWorkItem(payLoad?: any, minutes?: number, properties?: SP.MicroService.MicroServiceWorkItemProperties): T;
	deleteMicroserviceWorkItem(workItemId?: any): T;
	getServiceInternalUrls(service?: string): T;
	getServiceUrls(service?: string): T;
}

/*********************************************
* MicroServiceUtilities
**********************************************/
export interface MicroServiceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
