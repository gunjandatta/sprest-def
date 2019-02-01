import { IBaseExecution } from "../../../../";
import { IBaseQuery } from "../../../../";

/*********************************************
* IPointPublishingAdmin
**********************************************/
export interface IPointPublishingAdmin extends PointPublishingAdminCollections,PointPublishingAdminMethods,IBaseQuery<IPointPublishingAdminQuery> {

}

/*********************************************
* IPointPublishingAdminQuery
**********************************************/
export interface IPointPublishingAdminQuery extends PointPublishingAdminQuery,PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdmin
**********************************************/
export interface PointPublishingAdmin extends PointPublishingAdminCollections, PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdminProps
**********************************************/
export interface PointPublishingAdminProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingAdminPropMethods
**********************************************/
export interface PointPublishingAdminPropMethods {

}

/*********************************************
* PointPublishingAdminCollections
**********************************************/
export interface PointPublishingAdminCollections extends PointPublishingAdminProps, PointPublishingAdminPropMethods {

}

/*********************************************
* PointPublishingAdminQuery
**********************************************/
export interface PointPublishingAdminQuery extends PointPublishingAdminProps,PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdminMethods
**********************************************/
export interface PointPublishingAdminMethods {
	createTopicMagazine(magazineName?: string): IBaseExecution<any>;
	deleteTopicMagazine(magazineId?: any): IBaseExecution<any>;
	provisionPointPublishingAsync(): IBaseExecution<any>;
}
