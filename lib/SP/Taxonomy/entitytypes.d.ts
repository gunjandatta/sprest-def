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
* TaxonomyFieldMethods
**********************************************/
export interface TaxonomyFieldMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
}
