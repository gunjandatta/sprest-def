import { Base } from "../../../";

/*********************************************
* IIRMigration
**********************************************/
export interface IIRMigration extends IRMigrationCollections, IRMigrationMethods, Base.IBaseQuery<IRMigration, IIRMigrationQuery> {

}

/*********************************************
* IIRMigrationCollection
**********************************************/
export interface IIRMigrationCollection extends Base.IBaseResults<IRMigration> {
	done?: (resolve: (value?: Array<IRMigration>) => void) => void;
}

/*********************************************
* IIRMigrationQueryCollection
**********************************************/
export interface IIRMigrationQueryCollection extends Base.IBaseResults<IRMigrationOData> {
	done?: (resolve: (value?: Array<IRMigrationOData>) => void) => void;
}

/*********************************************
* IIRMigrationQuery
**********************************************/
export interface IIRMigrationQuery extends IRMigrationOData, IRMigrationMethods {

}

/*********************************************
* IRMigration
**********************************************/
export interface IRMigration extends Base.IBaseResult, IRMigrationProps, IRMigrationCollections, IRMigrationMethods {

}

/*********************************************
* IRMigrationProps
**********************************************/
export interface IRMigrationProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IRMigrationPropMethods
**********************************************/
export interface IRMigrationPropMethods {

}

/*********************************************
* IRMigrationCollections
**********************************************/
export interface IRMigrationCollections extends IRMigrationPropMethods {

}

/*********************************************
* IRMigrationOData
**********************************************/
export interface IRMigrationOData extends Base.IBaseResult, IRMigrationProps, IRMigrationMethods {

}

/*********************************************
* IRMigrationMethods
**********************************************/
export interface IRMigrationMethods {
	deleteAndRecreateIRList(): Base.IBaseExecution<any>;
}
