import { Microsoft } from "../../../../../";

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<string>;
}

/*********************************************
* QueryPersonalizationData
**********************************************/
export interface QueryPersonalizationData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RankingLabeling
**********************************************/
export interface RankingLabeling {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule>;
}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.Sort>;
}
