import { IBaseExecution } from "../../";

/*********************************************
* IMicroServiceManager
**********************************************/
export interface IMicroServiceManager extends MicroServiceManagerProps,MicroServiceManagerMethods,IBaseExecution<MicroServiceManager> {

}

/*********************************************
* MicroServiceManager
**********************************************/
export interface MicroServiceManager extends MicroServiceManagerProps, MicroServiceManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceManagerProps
**********************************************/
export interface MicroServiceManagerProps {

}

/*********************************************
* MicroServiceManagerMethods
**********************************************/
export interface MicroServiceManagerMethods {
	addMicroserviceWorkItem<T=any>(payLoad?: any, minutes?: number, properties?: SP.MicroService.MicroServiceWorkItemProperties): IBaseExecution<T>;
	deleteMicroserviceWorkItem<T=boolean>(workItemId?: any): IBaseExecution<T>;
	getServiceInternalUrls<T=Array<string>>(service?: string): IBaseExecution<T>;
	getServiceUrls<T=Array<string>>(service?: string): IBaseExecution<T>;
}

/*********************************************
* MicroServiceUtilities
**********************************************/
export interface MicroServiceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
