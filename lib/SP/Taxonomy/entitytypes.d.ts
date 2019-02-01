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

}

/*********************************************
* TaxonomyFieldProps
**********************************************/
export interface TaxonomyFieldProps {
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
* TaxonomyFieldPropMethods
**********************************************/
export interface TaxonomyFieldPropMethods {

}

/*********************************************
* TaxonomyFieldCollections
**********************************************/
export interface TaxonomyFieldCollections extends TaxonomyFieldProps, TaxonomyFieldPropMethods {

}

/*********************************************
* TaxonomyFieldQuery
**********************************************/
export interface TaxonomyFieldQuery extends TaxonomyFieldProps,TaxonomyFieldMethods {

}

/*********************************************
* TaxonomyFieldMethods
**********************************************/
export interface TaxonomyFieldMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
}
