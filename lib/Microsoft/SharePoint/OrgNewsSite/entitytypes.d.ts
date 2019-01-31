import { IBaseExecution } from "../../../";

/*********************************************
* IOrgNewsSiteApi
**********************************************/
export interface IOrgNewsSiteApi extends OrgNewsSiteApiProps,OrgNewsSiteApiMethods,IBaseExecution<OrgNewsSiteApi> {

}

/*********************************************
* OrgNewsSiteApi
**********************************************/
export interface OrgNewsSiteApi extends OrgNewsSiteApiProps, OrgNewsSiteApiMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OrgNewsSiteApiProps
**********************************************/
export interface OrgNewsSiteApiProps {

}

/*********************************************
* OrgNewsSiteApiMethods
**********************************************/
export interface OrgNewsSiteApiMethods {
	details<T=Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteInfo>(): IBaseExecution<T>;
}
