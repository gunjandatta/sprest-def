import { Base } from "../../../../";

/*********************************************
* ISPVivaLearningManager
**********************************************/
export interface ISPVivaLearningManager extends SPVivaLearningManagerCollections, SPVivaLearningManagerMethods, Base.IBaseQuery<SPVivaLearningManager, ISPVivaLearningManagerQuery> {

}

/*********************************************
* ISPVivaLearningManagerCollection
**********************************************/
export interface ISPVivaLearningManagerCollection extends Base.IBaseResults<SPVivaLearningManager> {
	done?: (resolve: (value?: Array<SPVivaLearningManager>) => void) => void;
}

/*********************************************
* ISPVivaLearningManagerQueryCollection
**********************************************/
export interface ISPVivaLearningManagerQueryCollection extends Base.IBaseResults<SPVivaLearningManagerOData> {
	done?: (resolve: (value?: Array<SPVivaLearningManagerOData>) => void) => void;
}

/*********************************************
* ISPVivaLearningManagerQuery
**********************************************/
export interface ISPVivaLearningManagerQuery extends SPVivaLearningManagerOData, SPVivaLearningManagerMethods {

}

/*********************************************
* SPVivaLearningManager
**********************************************/
export interface SPVivaLearningManager extends Base.IBaseResult, SPVivaLearningManagerProps, SPVivaLearningManagerCollections, SPVivaLearningManagerMethods {

}

/*********************************************
* SPVivaLearningManagerProps
**********************************************/
export interface SPVivaLearningManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPVivaLearningManagerPropMethods
**********************************************/
export interface SPVivaLearningManagerPropMethods {

}

/*********************************************
* SPVivaLearningManagerCollections
**********************************************/
export interface SPVivaLearningManagerCollections extends SPVivaLearningManagerPropMethods {

}

/*********************************************
* SPVivaLearningManagerOData
**********************************************/
export interface SPVivaLearningManagerOData extends Base.IBaseResult, SPVivaLearningManagerProps, SPVivaLearningManagerMethods {

}

/*********************************************
* SPVivaLearningManagerMethods
**********************************************/
export interface SPVivaLearningManagerMethods {
	registerListEventReceiver(): Base.IBaseExecution<any>;
}
