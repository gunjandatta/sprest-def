import { SP } from "../../";

/*********************************************
* PageImpressionClient
**********************************************/
export interface PageImpressionClient {
	BasePageCorrelationId?: string;
	ClientIdToClickInfoMap?: Array<SP.KeyValue>;
}
