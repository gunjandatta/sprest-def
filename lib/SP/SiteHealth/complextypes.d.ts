import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";

/*********************************************
* SiteHealthResult
**********************************************/
export interface SiteHealthResult {
	MessageAsText?: string;
	RuleHelpLink?: string;
	RuleId?: any;
	RuleIsRepairable?: boolean;
	RuleName?: string;
	Status?: number;
	TimeStamp?: any;
}

/*********************************************
* SiteHealthResultCollections
**********************************************/
export interface SiteHealthResultCollections {

}
