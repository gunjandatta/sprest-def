import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
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
