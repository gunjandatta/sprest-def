

/*********************************************
* MicroServiceManager
**********************************************/
export interface MicroServiceManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceManagerMethods
**********************************************/
export interface MicroServiceManagerMethods {
	addMicroserviceWorkItem<T=any>(payLoad?: any, minutes?: number, properties?: SP.MicroService.MicroServiceWorkItemProperties): T;
	deleteMicroserviceWorkItem<T=boolean>(workItemId?: any): T;
	getServiceInternalUrls<T=Array<string>>(service?: string): T;
	getServiceUrls<T=Array<string>>(service?: string): T;
}

/*********************************************
* MicroServiceUtilities
**********************************************/
export interface MicroServiceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
