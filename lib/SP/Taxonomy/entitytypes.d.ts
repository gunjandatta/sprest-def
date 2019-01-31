import { IBaseExecution } from "../../";
import { SP } from "../../";
import { IBaseQuery } from "../../";

/*********************************************
* ITaxonomyField
**********************************************/
export interface ITaxonomyField extends TaxonomyFieldCollections,TaxonomyFieldMethods,IBaseQuery<ITaxonomyFieldQuery> {

}

/*********************************************
* ITaxonomyFieldQuery
**********************************************/
export interface ITaxonomyFieldQuery extends TaxonomyFieldQuery,TaxonomyFieldMethods {

}

/*********************************************
* TaxonomyField
**********************************************/
export interface TaxonomyField extends SP.FieldLookup, TaxonomyFieldCollections, TaxonomyFieldMethods {
	AnchorId?: any;
	CreateValuesInEditForm?: boolean;
	IsAnchorValid?: boolean;
	IsKeyword?: boolean;
	IsPathRendered?: boolean;
	IsTermSetValid?: boolean;
	Open?: boolean;
	SspId?: any;
	TargetTemplate?: string;
	TermSetId?: any;
	TextField?: any;
	UserCreated?: boolean;
}

/*********************************************
* TaxonomyFieldProps
**********************************************/
export interface TaxonomyFieldProps {

}

/*********************************************
* TaxonomyFieldCollections
**********************************************/
export interface TaxonomyFieldCollections extends TaxonomyFieldProps {

}

/*********************************************
* TaxonomyFieldQuery
**********************************************/
export interface TaxonomyFieldQuery extends TaxonomyFieldProps {

}

/*********************************************
* TaxonomyFieldMethods
**********************************************/
export interface TaxonomyFieldMethods {
	deleteObject(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
}
