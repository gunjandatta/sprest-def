import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* CatalogManagementSettings
**********************************************/
export interface CatalogManagementSettings {
	departmentDisplayName?: string;
	extendedAttributes?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.CatalogManagement.ExtendedAttributeSettings> };
	informationBarriersSegmentDisplayName?: string;
	localeDisplayName?: string;
	preferredDataLocationDisplayName?: string;
	userTypeDisplayName?: string;
	valueDisplayNames?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.CatalogManagement.ValueDisplayNameSettings> };
}

/*********************************************
* CatalogManagementSettingsCollections
**********************************************/
export interface CatalogManagementSettingsCollections {

}

/*********************************************
* ExtendedAttributeSettings
**********************************************/
export interface ExtendedAttributeSettings {
	attributeNumber?: number;
	description?: string;
	displayName?: string;
}

/*********************************************
* ExtendedAttributeSettingsCollections
**********************************************/
export interface ExtendedAttributeSettingsCollections {

}

/*********************************************
* ValueDisplayNameSettings
**********************************************/
export interface ValueDisplayNameSettings {
	displayName?: string;
	id?: any;
}

/*********************************************
* ValueDisplayNameSettingsCollections
**********************************************/
export interface ValueDisplayNameSettingsCollections {

}

/*********************************************
* ExtendedPropertyMap
**********************************************/
export interface ExtendedPropertyMap {
	createdDate?: any;
	properties?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.CatalogManagement.Property> };
}

/*********************************************
* ExtendedPropertyMapCollections
**********************************************/
export interface ExtendedPropertyMapCollections {

}

/*********************************************
* Property
**********************************************/
export interface Property {
	propertyType?: number;
	values?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.CatalogManagement.PropertyValue> };
}

/*********************************************
* PropertyCollections
**********************************************/
export interface PropertyCollections {

}

/*********************************************
* PropertyValue
**********************************************/
export interface PropertyValue {
	id?: any;
	name?: string;
	sites?: { results: Array<any> };
}

/*********************************************
* PropertyValueCollections
**********************************************/
export interface PropertyValueCollections {

}
