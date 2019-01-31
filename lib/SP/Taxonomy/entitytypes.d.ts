import { SP } from "../../";
import { IBaseExecution } from "../../";

/*********************************************
* ITaxonomyField
**********************************************/
export interface ITaxonomyField extends TaxonomyFieldProps,TaxonomyFieldMethods,IBaseExecution<TaxonomyField> {

}

/*********************************************
* TaxonomyField
**********************************************/
export interface TaxonomyField extends SP.FieldLookup, TaxonomyFieldProps, TaxonomyFieldMethods {
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
* TaxonomyFieldMethods
**********************************************/
export interface TaxonomyFieldMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
}
