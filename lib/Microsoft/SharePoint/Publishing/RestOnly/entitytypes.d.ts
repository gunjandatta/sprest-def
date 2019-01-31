import { IBaseExecution } from "../../../../";
import { Microsoft } from "../../../../";
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
* BaseCustomPropertyCollections
**********************************************/
export interface BaseCustomPropertyCollections {

}

/*********************************************
* BigIntCustomProperty
**********************************************/
export interface BigIntCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: number;
}

/*********************************************
* BigIntCustomPropertyCollections
**********************************************/
export interface BigIntCustomPropertyCollections {

}

/*********************************************
* BooleanCustomProperty
**********************************************/
export interface BooleanCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: boolean;
}

/*********************************************
* BooleanCustomPropertyCollections
**********************************************/
export interface BooleanCustomPropertyCollections {

}

/*********************************************
* DateTimeTypeCustomProperty
**********************************************/
export interface DateTimeTypeCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: any;
}

/*********************************************
* DateTimeTypeCustomPropertyCollections
**********************************************/
export interface DateTimeTypeCustomPropertyCollections {

}

/*********************************************
* MultiValueStringCustomProperty
**********************************************/
export interface MultiValueStringCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: Array<string>;
}

/*********************************************
* MultiValueStringCustomPropertyCollections
**********************************************/
export interface MultiValueStringCustomPropertyCollections {

}

/*********************************************
* NumberCustomProperty
**********************************************/
export interface NumberCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: number;
}

/*********************************************
* NumberCustomPropertyCollections
**********************************************/
export interface NumberCustomPropertyCollections {

}

/*********************************************
* PersonTypeCustomProperty
**********************************************/
export interface PersonTypeCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: SP.Publishing.ProfileCoreProperties;
}

/*********************************************
* PersonTypeCustomPropertyCollections
**********************************************/
export interface PersonTypeCustomPropertyCollections {

}

/*********************************************
* StringCustomProperty
**********************************************/
export interface StringCustomProperty extends Microsoft.SharePoint.Publishing.RestOnly.BaseCustomProperty {
	Value?: string;
}

/*********************************************
* StringCustomPropertyCollections
**********************************************/
export interface StringCustomPropertyCollections {

}
