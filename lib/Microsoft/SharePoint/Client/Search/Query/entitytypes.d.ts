import { IBaseExecution } from "../../../../../";
import { IBaseQuery } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* IStringCollection
**********************************************/
export interface IStringCollection extends StringCollectionCollections,StringCollectionMethods,IBaseQuery<IStringCollectionQuery> {

}

/*********************************************
* IStringCollectionCollection
**********************************************/
export interface IStringCollectionCollection extends IBaseResults<StringCollection> {

}

/*********************************************
* IStringCollectionQueryCollection
**********************************************/
export interface IStringCollectionQueryCollection extends IBaseResults<StringCollectionQuery> {

}

/*********************************************
* IStringCollectionQuery
**********************************************/
export interface IStringCollectionQuery extends StringCollectionQuery, StringCollectionMethods {

}

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection extends StringCollectionProps, StringCollectionCollections, StringCollectionMethods {

}

/*********************************************
* StringCollectionProps
**********************************************/
export interface StringCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<string>;
}

/*********************************************
* StringCollectionPropMethods
**********************************************/
export interface StringCollectionPropMethods {

}

/*********************************************
* StringCollectionCollections
**********************************************/
export interface StringCollectionCollections extends StringCollectionPropMethods {

}

/*********************************************
* StringCollectionQuery
**********************************************/
export interface StringCollectionQuery extends StringCollectionProps, StringCollectionMethods {

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
* IRankingLabelingCollection
**********************************************/
export interface IRankingLabelingCollection extends IBaseResults<RankingLabeling> {

}

/*********************************************
* IRankingLabelingQueryCollection
**********************************************/
export interface IRankingLabelingQueryCollection extends IBaseResults<RankingLabelingQuery> {

}

/*********************************************
* IRankingLabelingQuery
**********************************************/
export interface IRankingLabelingQuery extends RankingLabelingQuery, RankingLabelingMethods {

}

/*********************************************
* RankingLabeling
**********************************************/
export interface RankingLabeling extends RankingLabelingProps, RankingLabelingCollections, RankingLabelingMethods {

}

/*********************************************
* RankingLabelingProps
**********************************************/
export interface RankingLabelingProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RankingLabelingPropMethods
**********************************************/
export interface RankingLabelingPropMethods {

}

/*********************************************
* RankingLabelingCollections
**********************************************/
export interface RankingLabelingCollections extends RankingLabelingPropMethods {

}

/*********************************************
* RankingLabelingQuery
**********************************************/
export interface RankingLabelingQuery extends RankingLabelingProps, RankingLabelingMethods {

}

/*********************************************
* RankingLabelingMethods
**********************************************/
export interface RankingLabelingMethods {
	addJudgment(userQuery?: string, url?: string, labelId?: number): IBaseExecution<any>;
	getJudgementsForQuery(query?: string): IBaseCollection<SP.KeyValue>;
	normalizeResultUrl(url?: string): IBaseExecution<string>;
}

/*********************************************
* IReorderingRuleCollection
**********************************************/
export interface IReorderingRuleCollection extends ReorderingRuleCollectionCollections,ReorderingRuleCollectionMethods,IBaseQuery<IReorderingRuleCollectionQuery> {

}

/*********************************************
* IReorderingRuleCollectionCollection
**********************************************/
export interface IReorderingRuleCollectionCollection extends IBaseResults<ReorderingRuleCollection> {

}

/*********************************************
* IReorderingRuleCollectionQueryCollection
**********************************************/
export interface IReorderingRuleCollectionQueryCollection extends IBaseResults<ReorderingRuleCollectionQuery> {

}

/*********************************************
* IReorderingRuleCollectionQuery
**********************************************/
export interface IReorderingRuleCollectionQuery extends ReorderingRuleCollectionQuery, ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection extends ReorderingRuleCollectionProps, ReorderingRuleCollectionCollections, ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollectionProps
**********************************************/
export interface ReorderingRuleCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule>;
}

/*********************************************
* ReorderingRuleCollectionPropMethods
**********************************************/
export interface ReorderingRuleCollectionPropMethods {

}

/*********************************************
* ReorderingRuleCollectionCollections
**********************************************/
export interface ReorderingRuleCollectionCollections extends ReorderingRuleCollectionPropMethods {

}

/*********************************************
* ReorderingRuleCollectionQuery
**********************************************/
export interface ReorderingRuleCollectionQuery extends ReorderingRuleCollectionProps, ReorderingRuleCollectionMethods {

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
* ISortCollectionCollection
**********************************************/
export interface ISortCollectionCollection extends IBaseResults<SortCollection> {

}

/*********************************************
* ISortCollectionQueryCollection
**********************************************/
export interface ISortCollectionQueryCollection extends IBaseResults<SortCollectionQuery> {

}

/*********************************************
* ISortCollectionQuery
**********************************************/
export interface ISortCollectionQuery extends SortCollectionQuery, SortCollectionMethods {

}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection extends SortCollectionProps, SortCollectionCollections, SortCollectionMethods {

}

/*********************************************
* SortCollectionProps
**********************************************/
export interface SortCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.SharePoint.Client.Search.Query.Sort>;
}

/*********************************************
* SortCollectionPropMethods
**********************************************/
export interface SortCollectionPropMethods {

}

/*********************************************
* SortCollectionCollections
**********************************************/
export interface SortCollectionCollections extends SortCollectionPropMethods {

}

/*********************************************
* SortCollectionQuery
**********************************************/
export interface SortCollectionQuery extends SortCollectionProps, SortCollectionMethods {

}

/*********************************************
* SortCollectionMethods
**********************************************/
export interface SortCollectionMethods {
	add(strProperty?: string, direction?: number): IBaseExecution<any>;
	clear(): IBaseExecution<any>;
}
