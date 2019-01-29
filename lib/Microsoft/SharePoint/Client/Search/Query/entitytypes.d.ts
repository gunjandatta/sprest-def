import { Microsoft } from "../../../../../";

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<string>;
}

/*********************************************
* StringCollectionMethods<T = any>
**********************************************/
export interface StringCollectionMethods<T = any> {
	add(property?: string): T;
	clear(): T;
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
* RankingLabelingMethods<T = any>
**********************************************/
export interface RankingLabelingMethods<T = any> {
	addJudgment(userQuery?: string, url?: string, labelId?: number): T;
	getJudgementsForQuery(query?: string): T;
	normalizeResultUrl(url?: string): T;
}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule>;
}

/*********************************************
* ReorderingRuleCollectionMethods<T = any>
**********************************************/
export interface ReorderingRuleCollectionMethods<T = any> {
	add(matchType?: number, matchValue?: string, boost?: number): T;
	clear(): T;
}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.Sort>;
}

/*********************************************
* SortCollectionMethods<T = any>
**********************************************/
export interface SortCollectionMethods<T = any> {
	add(strProperty?: string, direction?: number): T;
	clear(): T;
}
