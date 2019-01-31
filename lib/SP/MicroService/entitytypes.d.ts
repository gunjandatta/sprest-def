import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";

/*********************************************
* IMicroServiceManager
**********************************************/
export interface IMicroServiceManager extends MicroServiceManagerCollections,MicroServiceManagerMethods,IBaseQuery<IMicroServiceManagerQuery> {

}

/*********************************************
* IMicroServiceManagerQuery
**********************************************/
export interface IMicroServiceManagerQuery extends MicroServiceManagerQuery,MicroServiceManagerMethods {

}

/*********************************************
* MicroServiceManager
**********************************************/
export interface MicroServiceManager extends MicroServiceManagerCollections, MicroServiceManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceManagerProps
**********************************************/
export interface MicroServiceManagerProps {

}

/*********************************************
* MicroServiceManagerCollections
**********************************************/
export interface MicroServiceManagerCollections extends MicroServiceManagerProps {

}

/*********************************************
* MicroServiceManagerQuery
**********************************************/
export interface MicroServiceManagerQuery extends MicroServiceManagerProps {

}

/*********************************************
* MicroServiceManagerMethods
**********************************************/
export interface MicroServiceManagerMethods {
	addMicroserviceWorkItem(payLoad?: any, minutes?: number, properties?: SP.MicroService.MicroServiceWorkItemProperties): IBaseExecution<any>;
	deleteMicroserviceWorkItem(workItemId?: any): IBaseExecution<boolean>;
	getServiceInternalUrls(service?: string): IBaseExecution<Array<string>>;
	getServiceUrls(service?: string): IBaseExecution<Array<string>>;
}

/*********************************************
* MicroServiceUtilities
**********************************************/
export interface MicroServiceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceUtilitiesCollections
**********************************************/
export interface MicroServiceUtilitiesCollections {

}
