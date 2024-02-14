import { Base } from "../../../../";

/*********************************************
* INonQuotaBackfillApi
**********************************************/
export interface INonQuotaBackfillApi extends NonQuotaBackfillApiCollections, NonQuotaBackfillApiMethods, Base.IBaseQuery<NonQuotaBackfillApi, INonQuotaBackfillApiQuery> {

}

/*********************************************
* INonQuotaBackfillApiCollection
**********************************************/
export interface INonQuotaBackfillApiCollection extends Base.IBaseResults<NonQuotaBackfillApi> {
	done?: (resolve: (value?: Array<NonQuotaBackfillApi>) => void) => void;
}

/*********************************************
* INonQuotaBackfillApiQueryCollection
**********************************************/
export interface INonQuotaBackfillApiQueryCollection extends Base.IBaseResults<NonQuotaBackfillApiOData> {
	done?: (resolve: (value?: Array<NonQuotaBackfillApiOData>) => void) => void;
}

/*********************************************
* INonQuotaBackfillApiQuery
**********************************************/
export interface INonQuotaBackfillApiQuery extends NonQuotaBackfillApiOData, NonQuotaBackfillApiMethods {

}

/*********************************************
* NonQuotaBackfillApi
**********************************************/
export interface NonQuotaBackfillApi extends Base.IBaseResult, NonQuotaBackfillApiProps, NonQuotaBackfillApiCollections, NonQuotaBackfillApiMethods {

}

/*********************************************
* NonQuotaBackfillApiProps
**********************************************/
export interface NonQuotaBackfillApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NonQuotaBackfillApiPropMethods
**********************************************/
export interface NonQuotaBackfillApiPropMethods {

}

/*********************************************
* NonQuotaBackfillApiCollections
**********************************************/
export interface NonQuotaBackfillApiCollections extends NonQuotaBackfillApiPropMethods {

}

/*********************************************
* NonQuotaBackfillApiOData
**********************************************/
export interface NonQuotaBackfillApiOData extends Base.IBaseResult, NonQuotaBackfillApiProps, NonQuotaBackfillApiMethods {

}

/*********************************************
* NonQuotaBackfillApiMethods
**********************************************/
export interface NonQuotaBackfillApiMethods {
	backfillNonQuota(backfillUserfacts?: Array<string>): Base.IBaseExecution<string>;
}

/*********************************************
* INonQuotaMigrationApi
**********************************************/
export interface INonQuotaMigrationApi extends NonQuotaMigrationApiCollections, NonQuotaMigrationApiMethods, Base.IBaseQuery<NonQuotaMigrationApi, INonQuotaMigrationApiQuery> {

}

/*********************************************
* INonQuotaMigrationApiCollection
**********************************************/
export interface INonQuotaMigrationApiCollection extends Base.IBaseResults<NonQuotaMigrationApi> {
	done?: (resolve: (value?: Array<NonQuotaMigrationApi>) => void) => void;
}

/*********************************************
* INonQuotaMigrationApiQueryCollection
**********************************************/
export interface INonQuotaMigrationApiQueryCollection extends Base.IBaseResults<NonQuotaMigrationApiOData> {
	done?: (resolve: (value?: Array<NonQuotaMigrationApiOData>) => void) => void;
}

/*********************************************
* INonQuotaMigrationApiQuery
**********************************************/
export interface INonQuotaMigrationApiQuery extends NonQuotaMigrationApiOData, NonQuotaMigrationApiMethods {

}

/*********************************************
* NonQuotaMigrationApi
**********************************************/
export interface NonQuotaMigrationApi extends Base.IBaseResult, NonQuotaMigrationApiProps, NonQuotaMigrationApiCollections, NonQuotaMigrationApiMethods {

}

/*********************************************
* NonQuotaMigrationApiProps
**********************************************/
export interface NonQuotaMigrationApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NonQuotaMigrationApiPropMethods
**********************************************/
export interface NonQuotaMigrationApiPropMethods {

}

/*********************************************
* NonQuotaMigrationApiCollections
**********************************************/
export interface NonQuotaMigrationApiCollections extends NonQuotaMigrationApiPropMethods {

}

/*********************************************
* NonQuotaMigrationApiOData
**********************************************/
export interface NonQuotaMigrationApiOData extends Base.IBaseResult, NonQuotaMigrationApiProps, NonQuotaMigrationApiMethods {

}

/*********************************************
* NonQuotaMigrationApiMethods
**********************************************/
export interface NonQuotaMigrationApiMethods {
	migrateNonQuota(): Base.IBaseExecution<string>;
}

/*********************************************
* IQuotaMigrationApi
**********************************************/
export interface IQuotaMigrationApi extends QuotaMigrationApiCollections, QuotaMigrationApiMethods, Base.IBaseQuery<QuotaMigrationApi, IQuotaMigrationApiQuery> {

}

/*********************************************
* IQuotaMigrationApiCollection
**********************************************/
export interface IQuotaMigrationApiCollection extends Base.IBaseResults<QuotaMigrationApi> {
	done?: (resolve: (value?: Array<QuotaMigrationApi>) => void) => void;
}

/*********************************************
* IQuotaMigrationApiQueryCollection
**********************************************/
export interface IQuotaMigrationApiQueryCollection extends Base.IBaseResults<QuotaMigrationApiOData> {
	done?: (resolve: (value?: Array<QuotaMigrationApiOData>) => void) => void;
}

/*********************************************
* IQuotaMigrationApiQuery
**********************************************/
export interface IQuotaMigrationApiQuery extends QuotaMigrationApiOData, QuotaMigrationApiMethods {

}

/*********************************************
* QuotaMigrationApi
**********************************************/
export interface QuotaMigrationApi extends Base.IBaseResult, QuotaMigrationApiProps, QuotaMigrationApiCollections, QuotaMigrationApiMethods {

}

/*********************************************
* QuotaMigrationApiProps
**********************************************/
export interface QuotaMigrationApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* QuotaMigrationApiPropMethods
**********************************************/
export interface QuotaMigrationApiPropMethods {

}

/*********************************************
* QuotaMigrationApiCollections
**********************************************/
export interface QuotaMigrationApiCollections extends QuotaMigrationApiPropMethods {

}

/*********************************************
* QuotaMigrationApiOData
**********************************************/
export interface QuotaMigrationApiOData extends Base.IBaseResult, QuotaMigrationApiProps, QuotaMigrationApiMethods {

}

/*********************************************
* QuotaMigrationApiMethods
**********************************************/
export interface QuotaMigrationApiMethods {
	migrateQuota(IsMaxQuotaCall?: boolean): Base.IBaseExecution<string>;
}
