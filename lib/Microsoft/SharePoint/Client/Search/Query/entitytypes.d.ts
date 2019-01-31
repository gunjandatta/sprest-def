import { IBaseExecution } from "../../../../../";
import { IBaseQuery } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* IStringCollection
**********************************************/
export interface IStringCollection extends StringCollectionCollections,StringCollectionMethods,IBaseQuery<IStringCollectionQuery> {

}

/*********************************************
* IStringCollectionQuery
**********************************************/
export interface IStringCollectionQuery extends StringCollectionQuery,StringCollectionMethods {

}

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection extends StringCollectionCollections, StringCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<string>;
}

/*********************************************
* StringCollectionProps
**********************************************/
export interface StringCollectionProps {

}

/*********************************************
* StringCollectionCollections
**********************************************/
export interface StringCollectionCollections extends StringCollectionProps {

}

/*********************************************
* StringCollectionQuery
**********************************************/
export interface StringCollectionQuery extends StringCollectionProps {

}

/*********************************************
* StringCollectionMethods
**********************************************/
export interface StringCollectionMethods {
	add(property?: string): IBaseExecution<any>;
	clear(): IBaseExecution<any>;
}

/*********************************************
* QueryPersonalizationData
**********************************************/
export interface QueryPersonalizationData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* QueryPersonalizationDataCollections
**********************************************/
export interface QueryPersonalizationDataCollections {

}

/*********************************************
* IRankingLabeling
**********************************************/
export interface IRankingLabeling extends RankingLabelingCollections,RankingLabelingMethods,IBaseQuery<IRankingLabelingQuery> {

}

/*********************************************
* IRankingLabelingQuery
**********************************************/
export interface IRankingLabelingQuery extends RankingLabelingQuery,RankingLabelingMethods {

}

/*********************************************
* RankingLabeling
**********************************************/
export interface RankingLabeling extends RankingLabelingCollections, RankingLabelingMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RankingLabelingProps
**********************************************/
export interface RankingLabelingProps {

}

/*********************************************
* RankingLabelingCollections
**********************************************/
export interface RankingLabelingCollections extends RankingLabelingProps {

}

/*********************************************
* RankingLabelingQuery
**********************************************/
export interface RankingLabelingQuery extends RankingLabelingProps {

}

/*********************************************
* RankingLabelingMethods
**********************************************/
export interface RankingLabelingMethods {
	addJudgment(userQuery?: string, url?: string, labelId?: number): IBaseExecution<any>;
	getJudgementsForQuery(query?: string): IBaseExecution<Array<SP.KeyValue>>;
	normalizeResultUrl(url?: string): IBaseExecution<string>;
}

/*********************************************
* IReorderingRuleCollection
**********************************************/
export interface IReorderingRuleCollection extends ReorderingRuleCollectionCollections,ReorderingRuleCollectionMethods,IBaseQuery<IReorderingRuleCollectionQuery> {

}

/*********************************************
* IReorderingRuleCollectionQuery
**********************************************/
export interface IReorderingRuleCollectionQuery extends ReorderingRuleCollectionQuery,ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection extends ReorderingRuleCollectionCollections, ReorderingRuleCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule>;
}

/*********************************************
* ReorderingRuleCollectionProps
**********************************************/
export interface ReorderingRuleCollectionProps {

}

/*********************************************
* ReorderingRuleCollectionCollections
**********************************************/
export interface ReorderingRuleCollectionCollections extends ReorderingRuleCollectionProps {

}

/*********************************************
* ReorderingRuleCollectionQuery
**********************************************/
export interface ReorderingRuleCollectionQuery extends ReorderingRuleCollectionProps {

}

/*********************************************
* ReorderingRuleCollectionMethods
**********************************************/
export interface ReorderingRuleCollectionMethods {
	add(matchType?: number, matchValue?: string, boost?: number): IBaseExecution<any>;
	clear(): IBaseExecution<any>;
}

/*********************************************
* ISortCollection
**********************************************/
export interface ISortCollection extends SortCollectionCollections,SortCollectionMethods,IBaseQuery<ISortCollectionQuery> {

}

/*********************************************
* ISortCollectionQuery
**********************************************/
export interface ISortCollectionQuery extends SortCollectionQuery,SortCollectionMethods {

}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection extends SortCollectionCollections, SortCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.Sort>;
}

/*********************************************
* SortCollectionProps
**********************************************/
export interface SortCollectionProps {

}

/*********************************************
* SortCollectionCollections
**********************************************/
export interface SortCollectionCollections extends SortCollectionProps {

}

/*********************************************
* SortCollectionQuery
**********************************************/
export interface SortCollectionQuery extends SortCollectionProps {

}

/*********************************************
* SortCollectionMethods
**********************************************/
export interface SortCollectionMethods {
	add(strProperty?: string, direction?: number): IBaseExecution<any>;
	clear(): IBaseExecution<any>;
}
