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
