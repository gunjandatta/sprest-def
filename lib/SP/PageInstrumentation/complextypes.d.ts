import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* PageImpressionClient
**********************************************/
export interface PageImpressionClient {
	BasePageCorrelationId?: string;
	ClientIdToClickInfoMap?: { results: Array<SP.KeyValue> };
}

/*********************************************
* PageImpressionClientCollections
**********************************************/
export interface PageImpressionClientCollections {

}
