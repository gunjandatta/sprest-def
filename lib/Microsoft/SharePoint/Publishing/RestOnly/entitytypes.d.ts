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
export interface BigIntCustomProperty {
	Value?: number;
}

/*********************************************
* BooleanCustomProperty
**********************************************/
export interface BooleanCustomProperty {
	Value?: boolean;
}

/*********************************************
* DateTimeTypeCustomProperty
**********************************************/
export interface DateTimeTypeCustomProperty {
	Value?: any;
}

/*********************************************
* MultiValueStringCustomProperty
**********************************************/
export interface MultiValueStringCustomProperty {
	Value?: Array<string>;
}

/*********************************************
* NumberCustomProperty
**********************************************/
export interface NumberCustomProperty {
	Value?: number;
}

/*********************************************
* PersonTypeCustomProperty
**********************************************/
export interface PersonTypeCustomProperty {
	Value?: SP.Publishing.ProfileCoreProperties;
}

/*********************************************
* StringCustomProperty
**********************************************/
export interface StringCustomProperty {
	Value?: string;
}
