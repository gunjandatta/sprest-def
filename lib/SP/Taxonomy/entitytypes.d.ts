import { SP } from "../../";

/*********************************************
* TaxonomyField
**********************************************/
export interface TaxonomyField extends SP.FieldLookup {
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
* TaxonomyFieldMethods<T = any>
**********************************************/
export interface TaxonomyFieldMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
}
