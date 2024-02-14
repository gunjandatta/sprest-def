import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ISectionDesignIdeasApi
**********************************************/
export interface ISectionDesignIdeasApi extends SectionDesignIdeasApiCollections, SectionDesignIdeasApiMethods, Base.IBaseQuery<SectionDesignIdeasApi, ISectionDesignIdeasApiQuery> {

}

/*********************************************
* ISectionDesignIdeasApiCollection
**********************************************/
export interface ISectionDesignIdeasApiCollection extends Base.IBaseResults<SectionDesignIdeasApi> {
	done?: (resolve: (value?: Array<SectionDesignIdeasApi>) => void) => void;
}

/*********************************************
* ISectionDesignIdeasApiQueryCollection
**********************************************/
export interface ISectionDesignIdeasApiQueryCollection extends Base.IBaseResults<SectionDesignIdeasApiOData> {
	done?: (resolve: (value?: Array<SectionDesignIdeasApiOData>) => void) => void;
}

/*********************************************
* ISectionDesignIdeasApiQuery
**********************************************/
export interface ISectionDesignIdeasApiQuery extends SectionDesignIdeasApiOData, SectionDesignIdeasApiMethods {

}

/*********************************************
* SectionDesignIdeasApi
**********************************************/
export interface SectionDesignIdeasApi extends Base.IBaseResult, SectionDesignIdeasApiProps, SectionDesignIdeasApiCollections, SectionDesignIdeasApiMethods {

}

/*********************************************
* SectionDesignIdeasApiProps
**********************************************/
export interface SectionDesignIdeasApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SectionDesignIdeasApiPropMethods
**********************************************/
export interface SectionDesignIdeasApiPropMethods {

}

/*********************************************
* SectionDesignIdeasApiCollections
**********************************************/
export interface SectionDesignIdeasApiCollections extends SectionDesignIdeasApiPropMethods {

}

/*********************************************
* SectionDesignIdeasApiOData
**********************************************/
export interface SectionDesignIdeasApiOData extends Base.IBaseResult, SectionDesignIdeasApiProps, SectionDesignIdeasApiMethods {

}

/*********************************************
* SectionDesignIdeasApiMethods
**********************************************/
export interface SectionDesignIdeasApiMethods {
	getSectionDesignIdeas(title?: string, subTitle?: string): Base.IBaseCollection<Microsoft.SharePoint.SectionDesignIdeas.WebPartModel>;
	ping(): Base.IBaseExecution<string>;
}
