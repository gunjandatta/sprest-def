import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* IOrgNewsSiteApi
**********************************************/
export interface IOrgNewsSiteApi extends OrgNewsSiteApiCollections,OrgNewsSiteApiMethods,IBaseQuery<IOrgNewsSiteApiQuery> {

}

/*********************************************
* IOrgNewsSiteApiQuery
**********************************************/
export interface IOrgNewsSiteApiQuery extends OrgNewsSiteApiQuery,OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApi
**********************************************/
export interface OrgNewsSiteApi extends OrgNewsSiteApiCollections, OrgNewsSiteApiMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OrgNewsSiteApiProps
**********************************************/
export interface OrgNewsSiteApiProps {

}

/*********************************************
* OrgNewsSiteApiCollections
**********************************************/
export interface OrgNewsSiteApiCollections extends OrgNewsSiteApiProps {

}

/*********************************************
* OrgNewsSiteApiQuery
**********************************************/
export interface OrgNewsSiteApiQuery extends OrgNewsSiteApiProps {

}

/*********************************************
* OrgNewsSiteApiMethods
**********************************************/
export interface OrgNewsSiteApiMethods {
	details(): IBaseExecution<Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteInfo>;
}
