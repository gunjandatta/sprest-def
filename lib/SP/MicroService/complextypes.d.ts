import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* MicroServiceWorkItemProperties
**********************************************/
export interface MicroServiceWorkItemProperties {
	ApiPath?: string;
	CustomProperties?: { results: Array<SP.KeyValue> };
	HttpHeaders?: { results: Array<SP.KeyValue> };
	MicroServiceName?: string;
	RequestType?: number;
}

/*********************************************
* MicroServiceWorkItemPropertiesCollections
**********************************************/
export interface MicroServiceWorkItemPropertiesCollections {

}
