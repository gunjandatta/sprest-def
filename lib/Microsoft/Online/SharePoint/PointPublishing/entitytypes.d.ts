import { IBaseExecution } from "../../../../";

/*********************************************
* IPointPublishingAdmin
**********************************************/
export interface IPointPublishingAdmin extends PointPublishingAdminProps,PointPublishingAdminMethods,IBaseExecution<PointPublishingAdmin> {

}

/*********************************************
* PointPublishingAdmin
**********************************************/
export interface PointPublishingAdmin extends PointPublishingAdminProps, PointPublishingAdminMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingAdminProps
**********************************************/
export interface PointPublishingAdminProps {

}

/*********************************************
* PointPublishingAdminMethods
**********************************************/
export interface PointPublishingAdminMethods {
	createTopicMagazine<T=any>(magazineName?: string): IBaseExecution<T>;
	deleteTopicMagazine<T=any>(magazineId?: any): IBaseExecution<T>;
	provisionPointPublishingAsync<T=any>(): IBaseExecution<T>;
}
