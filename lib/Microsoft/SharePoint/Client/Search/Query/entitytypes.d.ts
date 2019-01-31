import { IBaseExecution } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* IStringCollection
**********************************************/
export interface IStringCollection extends StringCollectionProps,StringCollectionMethods,IBaseExecution<StringCollection> {

}

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection extends StringCollectionProps, StringCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<string>;
}

/*********************************************
* StringCollectionProps
**********************************************/
export interface StringCollectionProps {

}

/*********************************************
* StringCollectionMethods
**********************************************/
export interface StringCollectionMethods {
	add<T=any>(property?: string): IBaseExecution<T>;
	clear<T=any>(): IBaseExecution<T>;
}

/*********************************************
* QueryPersonalizationData
**********************************************/
export interface QueryPersonalizationData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IRankingLabeling
**********************************************/
export interface IRankingLabeling extends RankingLabelingProps,RankingLabelingMethods,IBaseExecution<RankingLabeling> {

}

/*********************************************
* RankingLabeling
**********************************************/
export interface RankingLabeling extends RankingLabelingProps, RankingLabelingMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RankingLabelingProps
**********************************************/
export interface RankingLabelingProps {

}

/*********************************************
* RankingLabelingMethods
**********************************************/
export interface RankingLabelingMethods {
	addJudgment<T=any>(userQuery?: string, url?: string, labelId?: number): IBaseExecution<T>;
	getJudgementsForQuery<T=Array<SP.KeyValue>>(query?: string): IBaseExecution<T>;
	normalizeResultUrl<T=string>(url?: string): IBaseExecution<T>;
}

/*********************************************
* IReorderingRuleCollection
**********************************************/
export interface IReorderingRuleCollection extends ReorderingRuleCollectionProps,ReorderingRuleCollectionMethods,IBaseExecution<ReorderingRuleCollection> {

}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection extends ReorderingRuleCollectionProps, ReorderingRuleCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule>;
}

/*********************************************
* ReorderingRuleCollectionProps
**********************************************/
export interface ReorderingRuleCollectionProps {

}

/*********************************************
* ReorderingRuleCollectionMethods
**********************************************/
export interface ReorderingRuleCollectionMethods {
	add<T=any>(matchType?: number, matchValue?: string, boost?: number): IBaseExecution<T>;
	clear<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ISortCollection
**********************************************/
export interface ISortCollection extends SortCollectionProps,SortCollectionMethods,IBaseExecution<SortCollection> {

}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection extends SortCollectionProps, SortCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.Sort>;
}

/*********************************************
* SortCollectionProps
**********************************************/
export interface SortCollectionProps {

}

/*********************************************
* SortCollectionMethods
**********************************************/
export interface SortCollectionMethods {
	add<T=any>(strProperty?: string, direction?: number): IBaseExecution<T>;
	clear<T=any>(): IBaseExecution<T>;
}
