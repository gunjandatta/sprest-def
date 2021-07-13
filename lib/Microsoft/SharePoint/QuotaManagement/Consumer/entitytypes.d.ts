import { Base } from "../../../../";

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
