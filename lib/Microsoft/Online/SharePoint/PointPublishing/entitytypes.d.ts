import { IBaseExecution, IBaseResult } from "../../../../";

/*********************************************
* IPointPublishingAdmin
**********************************************/
export interface IPointPublishingAdmin extends PointPublishingAdminCollections,PointPublishingAdminMethods,IBaseQuery<IPointPublishingAdminQuery> {

}

/*********************************************
* IPointPublishingAdminCollection
**********************************************/
export interface IPointPublishingAdminCollection extends IBaseResults<PointPublishingAdmin> {
	done(resolve: (value?: Array<PointPublishingAdmin | any>) => void);
}

/*********************************************
* IPointPublishingAdminQueryCollection
**********************************************/
export interface IPointPublishingAdminQueryCollection extends IBaseResults<PointPublishingAdminQuery> {
	done(resolve: (value?: Array<PointPublishingAdminQuery | any>) => void);
}

/*********************************************
* IPointPublishingAdminQuery
**********************************************/
export interface IPointPublishingAdminQuery extends PointPublishingAdminQuery, PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdmin
**********************************************/
export interface PointPublishingAdmin extends IBaseResult, PointPublishingAdminProps, PointPublishingAdminCollections, PointPublishingAdminMethods {

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
export interface PointPublishingAdminCollections extends PointPublishingAdminPropMethods {

}

/*********************************************
* PointPublishingAdminQuery
**********************************************/
export interface PointPublishingAdminQuery extends IBaseResult, PointPublishingAdminProps, PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdminMethods
**********************************************/
export interface PointPublishingAdminMethods {
	createTopicMagazine(magazineName?: string): IBaseExecution<any>;
	deleteTopicMagazine(magazineId?: any): IBaseExecution<any>;
	provisionPointPublishingAsync(): IBaseExecution<any>;
}
