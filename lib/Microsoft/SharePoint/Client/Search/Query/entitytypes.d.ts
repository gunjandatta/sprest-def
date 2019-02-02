import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../../";
import { SP } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* IStringCollection
**********************************************/
export interface IStringCollection extends StringCollectionCollections, StringCollectionMethods, IBaseQuery<IStringCollectionQuery> {

}

/*********************************************
* IStringCollectionCollection
**********************************************/
export interface IStringCollectionCollection extends IBaseResults<StringCollection> {
	done?: (resolve: (value?: Array<StringCollection>) => void) => void;
}

/*********************************************
* IStringCollectionQueryCollection
**********************************************/
export interface IStringCollectionQueryCollection extends IBaseResults<StringCollectionOData> {
	done?: (resolve: (value?: Array<StringCollectionOData>) => void) => void;
}

/*********************************************
* IStringCollectionQuery
**********************************************/
export interface IStringCollectionQuery extends StringCollectionOData, StringCollectionMethods {

}

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection extends IBaseResult, StringCollectionProps, StringCollectionCollections, StringCollectionMethods {

}

/*********************************************
* StringCollectionProps
**********************************************/
export interface StringCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<string> };
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
* StringCollectionOData
**********************************************/
export interface StringCollectionOData extends IBaseResult, StringCollectionProps, StringCollectionMethods {

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
export interface IRankingLabeling extends RankingLabelingCollections, RankingLabelingMethods, IBaseQuery<IRankingLabelingQuery> {

}

/*********************************************
* IRankingLabelingCollection
**********************************************/
export interface IRankingLabelingCollection extends IBaseResults<RankingLabeling> {
	done?: (resolve: (value?: Array<RankingLabeling>) => void) => void;
}

/*********************************************
* IRankingLabelingQueryCollection
**********************************************/
export interface IRankingLabelingQueryCollection extends IBaseResults<RankingLabelingOData> {
	done?: (resolve: (value?: Array<RankingLabelingOData>) => void) => void;
}

/*********************************************
* IRankingLabelingQuery
**********************************************/
export interface IRankingLabelingQuery extends RankingLabelingOData, RankingLabelingMethods {

}

/*********************************************
* RankingLabeling
**********************************************/
export interface RankingLabeling extends IBaseResult, RankingLabelingProps, RankingLabelingCollections, RankingLabelingMethods {

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
* RankingLabelingOData
**********************************************/
export interface RankingLabelingOData extends IBaseResult, RankingLabelingProps, RankingLabelingMethods {

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
export interface IReorderingRuleCollection extends ReorderingRuleCollectionCollections, ReorderingRuleCollectionMethods, IBaseQuery<IReorderingRuleCollectionQuery> {

}

/*********************************************
* IReorderingRuleCollectionCollection
**********************************************/
export interface IReorderingRuleCollectionCollection extends IBaseResults<ReorderingRuleCollection> {
	done?: (resolve: (value?: Array<ReorderingRuleCollection>) => void) => void;
}

/*********************************************
* IReorderingRuleCollectionQueryCollection
**********************************************/
export interface IReorderingRuleCollectionQueryCollection extends IBaseResults<ReorderingRuleCollectionOData> {
	done?: (resolve: (value?: Array<ReorderingRuleCollectionOData>) => void) => void;
}

/*********************************************
* IReorderingRuleCollectionQuery
**********************************************/
export interface IReorderingRuleCollectionQuery extends ReorderingRuleCollectionOData, ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection extends IBaseResult, ReorderingRuleCollectionProps, ReorderingRuleCollectionCollections, ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollectionProps
**********************************************/
export interface ReorderingRuleCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule> };
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
* ReorderingRuleCollectionOData
**********************************************/
export interface ReorderingRuleCollectionOData extends IBaseResult, ReorderingRuleCollectionProps, ReorderingRuleCollectionMethods {

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
export interface ISortCollection extends SortCollectionCollections, SortCollectionMethods, IBaseQuery<ISortCollectionQuery> {

}

/*********************************************
* ISortCollectionCollection
**********************************************/
export interface ISortCollectionCollection extends IBaseResults<SortCollection> {
	done?: (resolve: (value?: Array<SortCollection>) => void) => void;
}

/*********************************************
* ISortCollectionQueryCollection
**********************************************/
export interface ISortCollectionQueryCollection extends IBaseResults<SortCollectionOData> {
	done?: (resolve: (value?: Array<SortCollectionOData>) => void) => void;
}

/*********************************************
* ISortCollectionQuery
**********************************************/
export interface ISortCollectionQuery extends SortCollectionOData, SortCollectionMethods {

}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection extends IBaseResult, SortCollectionProps, SortCollectionCollections, SortCollectionMethods {

}

/*********************************************
* SortCollectionProps
**********************************************/
export interface SortCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<Microsoft.SharePoint.Client.Search.Query.Sort> };
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
* SortCollectionOData
**********************************************/
export interface SortCollectionOData extends IBaseResult, SortCollectionProps, SortCollectionMethods {

}

/*********************************************
* SortCollectionMethods
**********************************************/
export interface SortCollectionMethods {
	add(strProperty?: string, direction?: number): IBaseExecution<any>;
	clear(): IBaseExecution<any>;
}
