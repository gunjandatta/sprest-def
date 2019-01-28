import { Microsoft } from "../../../../../";

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<string>;
}

/*********************************************
* StringCollectionMethods
**********************************************/
export interface StringCollectionMethods {
	add<T=void>(property?: string): T;
	clear<T=void>(): T;
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
* RankingLabelingMethods
**********************************************/
export interface RankingLabelingMethods {
	addJudgment<T=void>(userQuery?: string, url?: string, labelId?: number): T;
	getJudgementsForQuery<T=Array<SP.KeyValue>>(query?: string): T;
	normalizeResultUrl<T=string>(url?: string): T;
}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule>;
}

/*********************************************
* ReorderingRuleCollectionMethods
**********************************************/
export interface ReorderingRuleCollectionMethods {
	add<T=void>(matchType?: number, matchValue?: string, boost?: number): T;
	clear<T=void>(): T;
}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.Sort>;
}

/*********************************************
* SortCollectionMethods
**********************************************/
export interface SortCollectionMethods {
	add<T=void>(strProperty?: string, direction?: number): T;
	clear<T=void>(): T;
}
