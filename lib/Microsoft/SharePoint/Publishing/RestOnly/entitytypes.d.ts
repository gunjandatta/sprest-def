import { SP } from "../../../../";

/*********************************************
* BaseCustomProperty
**********************************************/
export interface BaseCustomProperty {
	IsEdited?: boolean;
	Name?: string;
	PropertyType?: string;
}

/*********************************************
* BigIntCustomProperty
**********************************************/
export interface BigIntCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: number;
}

/*********************************************
* BooleanCustomProperty
**********************************************/
export interface BooleanCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: boolean;
}

/*********************************************
* DateTimeTypeCustomProperty
**********************************************/
export interface DateTimeTypeCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: any;
}

/*********************************************
* MultiValueStringCustomProperty
**********************************************/
export interface MultiValueStringCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: Array<string>;
}

/*********************************************
* NumberCustomProperty
**********************************************/
export interface NumberCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: number;
}

/*********************************************
* PersonTypeCustomProperty
**********************************************/
export interface PersonTypeCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: SP.Publishing.ProfileCoreProperties;
}

/*********************************************
* StringCustomProperty
**********************************************/
export interface StringCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: string;
}
