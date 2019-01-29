

/*********************************************
* PointPublishingAdmin
**********************************************/
export interface PointPublishingAdmin {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingAdminMethods
**********************************************/
export interface PointPublishingAdminMethods {
	createTopicMagazine<T=any>(magazineName?: string): T;
	deleteTopicMagazine<T=void>(magazineId?: any): T;
	provisionPointPublishingAsync<T=any>(): T;
}
