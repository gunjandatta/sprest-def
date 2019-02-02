import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IOrgNewsSiteApi
**********************************************/
export interface IOrgNewsSiteApi extends OrgNewsSiteApiCollections, OrgNewsSiteApiMethods, IBaseQuery<IOrgNewsSiteApiQuery> {

}

/*********************************************
* IOrgNewsSiteApiCollection
**********************************************/
export interface IOrgNewsSiteApiCollection extends IBaseResults<OrgNewsSiteApi> {
	done?: (resolve: (value?: Array<OrgNewsSiteApi>) => void) => void;
}

/*********************************************
* IOrgNewsSiteApiQueryCollection
**********************************************/
export interface IOrgNewsSiteApiQueryCollection extends IBaseResults<OrgNewsSiteApiOData> {
	done?: (resolve: (value?: Array<OrgNewsSiteApiOData>) => void) => void;
}

/*********************************************
* IOrgNewsSiteApiQuery
**********************************************/
export interface IOrgNewsSiteApiQuery extends OrgNewsSiteApiOData, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApi
**********************************************/
export interface OrgNewsSiteApi extends IBaseResult, OrgNewsSiteApiProps, OrgNewsSiteApiCollections, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApiProps
**********************************************/
export interface OrgNewsSiteApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OrgNewsSiteApiPropMethods
**********************************************/
export interface OrgNewsSiteApiPropMethods {

}

/*********************************************
* OrgNewsSiteApiCollections
**********************************************/
export interface OrgNewsSiteApiCollections extends OrgNewsSiteApiPropMethods {

}

/*********************************************
* OrgNewsSiteApiOData
**********************************************/
export interface OrgNewsSiteApiOData extends IBaseResult, OrgNewsSiteApiProps, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApiMethods
**********************************************/
export interface OrgNewsSiteApiMethods {
	details(): IBaseExecution<Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteInfo>;
}
