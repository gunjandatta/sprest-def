import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* MicroServiceWorkItemAuthCryptoProvider
**********************************************/
export interface MicroServiceWorkItemAuthCryptoProvider {

}

/*********************************************
* MicroServiceWorkItemAuthCryptoProviderCollections
**********************************************/
export interface MicroServiceWorkItemAuthCryptoProviderCollections {

}

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
