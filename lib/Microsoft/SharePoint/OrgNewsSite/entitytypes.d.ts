import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* IOrgNewsSiteApi
**********************************************/
export interface IOrgNewsSiteApi extends OrgNewsSiteApiCollections,OrgNewsSiteApiMethods,IBaseQuery<IOrgNewsSiteApiQuery> {

}

/*********************************************
* IOrgNewsSiteApiCollection
**********************************************/
export interface IOrgNewsSiteApiCollection extends IBaseResults<OrgNewsSiteApi> {

}

/*********************************************
* IOrgNewsSiteApiQueryCollection
**********************************************/
export interface IOrgNewsSiteApiQueryCollection extends IBaseResults<OrgNewsSiteApiQuery> {

}

/*********************************************
* IOrgNewsSiteApiQuery
**********************************************/
export interface IOrgNewsSiteApiQuery extends OrgNewsSiteApiQuery, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApi
**********************************************/
export interface OrgNewsSiteApi extends OrgNewsSiteApiProps, OrgNewsSiteApiCollections, OrgNewsSiteApiMethods {

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
* OrgNewsSiteApiQuery
**********************************************/
export interface OrgNewsSiteApiQuery extends OrgNewsSiteApiProps, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApiMethods
**********************************************/
export interface OrgNewsSiteApiMethods {
	details(): IBaseExecution<Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteInfo>;
}
