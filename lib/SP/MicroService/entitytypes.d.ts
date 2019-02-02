import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* IMicroServiceManager
**********************************************/
export interface IMicroServiceManager extends MicroServiceManagerCollections, MicroServiceManagerMethods, IBaseQuery<IMicroServiceManagerQuery> {

}

/*********************************************
* IMicroServiceManagerCollection
**********************************************/
export interface IMicroServiceManagerCollection extends IBaseResults<MicroServiceManager> {
	done?: (resolve: (value?: Array<MicroServiceManager>) => void) => void;
}

/*********************************************
* IMicroServiceManagerQueryCollection
**********************************************/
export interface IMicroServiceManagerQueryCollection extends IBaseResults<MicroServiceManagerOData> {
	done?: (resolve: (value?: Array<MicroServiceManagerOData>) => void) => void;
}

/*********************************************
* IMicroServiceManagerQuery
**********************************************/
export interface IMicroServiceManagerQuery extends MicroServiceManagerOData, MicroServiceManagerMethods {

}

/*********************************************
* MicroServiceManager
**********************************************/
export interface MicroServiceManager extends IBaseResult, MicroServiceManagerProps, MicroServiceManagerCollections, MicroServiceManagerMethods {

}

/*********************************************
* MicroServiceManagerProps
**********************************************/
export interface MicroServiceManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceManagerPropMethods
**********************************************/
export interface MicroServiceManagerPropMethods {

}

/*********************************************
* MicroServiceManagerCollections
**********************************************/
export interface MicroServiceManagerCollections extends MicroServiceManagerPropMethods {

}

/*********************************************
* MicroServiceManagerOData
**********************************************/
export interface MicroServiceManagerOData extends IBaseResult, MicroServiceManagerProps, MicroServiceManagerMethods {

}

/*********************************************
* MicroServiceManagerMethods
**********************************************/
export interface MicroServiceManagerMethods {
	addMicroserviceWorkItem(payLoad?: any, minutes?: number, properties?: SP.MicroService.MicroServiceWorkItemProperties): IBaseExecution<any>;
	deleteMicroserviceWorkItem(workItemId?: any): IBaseExecution<boolean>;
	getServiceInternalUrls(service?: string): IBaseCollection<string>;
	getServiceUrls(service?: string): IBaseCollection<string>;
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
