import { Base } from "../../../";

/*********************************************
* IPhotosMigration
**********************************************/
export interface IPhotosMigration extends PhotosMigrationCollections, PhotosMigrationMethods, Base.IBaseQuery<PhotosMigration, IPhotosMigrationQuery> {

}

/*********************************************
* IPhotosMigrationCollection
**********************************************/
export interface IPhotosMigrationCollection extends Base.IBaseResults<PhotosMigration> {
	done?: (resolve: (value?: Array<PhotosMigration>) => void) => void;
}

/*********************************************
* IPhotosMigrationQueryCollection
**********************************************/
export interface IPhotosMigrationQueryCollection extends Base.IBaseResults<PhotosMigrationOData> {
	done?: (resolve: (value?: Array<PhotosMigrationOData>) => void) => void;
}

/*********************************************
* IPhotosMigrationQuery
**********************************************/
export interface IPhotosMigrationQuery extends PhotosMigrationOData, PhotosMigrationMethods {

}

/*********************************************
* PhotosMigration
**********************************************/
export interface PhotosMigration extends Base.IBaseResult, PhotosMigrationProps, PhotosMigrationCollections, PhotosMigrationMethods {

}

/*********************************************
* PhotosMigrationProps
**********************************************/
export interface PhotosMigrationProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PhotosMigrationPropMethods
**********************************************/
export interface PhotosMigrationPropMethods {

}

/*********************************************
* PhotosMigrationCollections
**********************************************/
export interface PhotosMigrationCollections extends PhotosMigrationPropMethods {

}

/*********************************************
* PhotosMigrationOData
**********************************************/
export interface PhotosMigrationOData extends Base.IBaseResult, PhotosMigrationProps, PhotosMigrationMethods {

}

/*********************************************
* PhotosMigrationMethods
**********************************************/
export interface PhotosMigrationMethods {
	migratePhotosData(): Base.IBaseExecution<string>;
}
