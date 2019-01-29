

/*********************************************
* PointPublishingAdmin
**********************************************/
export interface PointPublishingAdmin {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingAdminMethods<T = any>
**********************************************/
export interface PointPublishingAdminMethods<T = any> {
	createTopicMagazine(magazineName?: string): T;
	deleteTopicMagazine(magazineId?: any): T;
	provisionPointPublishingAsync(): T;
}
