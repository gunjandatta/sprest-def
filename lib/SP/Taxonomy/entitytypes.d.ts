import { IBaseExecution, IBaseResult } from "../../";
import { SP } from "../../";

/*********************************************
* ITaxonomyField
**********************************************/
export interface ITaxonomyField extends TaxonomyFieldCollections,TaxonomyFieldMethods,IBaseQuery<ITaxonomyFieldQuery> {

}

/*********************************************
* ITaxonomyFieldCollection
**********************************************/
export interface ITaxonomyFieldCollection extends IBaseResults<TaxonomyField> {
	done(resolve: (value?: Array<TaxonomyField | any>) => void);
}

/*********************************************
* ITaxonomyFieldQueryCollection
**********************************************/
export interface ITaxonomyFieldQueryCollection extends IBaseResults<TaxonomyFieldQuery> {
	done(resolve: (value?: Array<TaxonomyFieldQuery | any>) => void);
}

/*********************************************
* ITaxonomyFieldQuery
**********************************************/
export interface ITaxonomyFieldQuery extends TaxonomyFieldQuery, TaxonomyFieldMethods {

}

/*********************************************
* TaxonomyField
**********************************************/
export interface TaxonomyField extends SP.FieldLookup, IBaseResult, TaxonomyFieldProps, TaxonomyFieldCollections, TaxonomyFieldMethods {

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
export interface TaxonomyFieldCollections extends TaxonomyFieldPropMethods {

}

/*********************************************
* TaxonomyFieldQuery
**********************************************/
export interface TaxonomyFieldQuery extends IBaseResult, TaxonomyFieldProps, TaxonomyFieldMethods {

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
