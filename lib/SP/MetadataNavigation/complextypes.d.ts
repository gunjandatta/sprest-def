import { SP } from "../../";

/*********************************************
* ConfiguredMetadataNavigationItemCollection
**********************************************/
export interface ConfiguredMetadataNavigationItemCollection {
	Items?: Array<SP.MetadataNavigation.ConfiguredMetadataNavigationItem>;
}

/*********************************************
* ConfiguredMetadataNavigationItem
**********************************************/
export interface ConfiguredMetadataNavigationItem {
	FieldDisplayName?: string;
	FieldTitle?: string;
	FieldTypeAsString?: string;
	IsContentTypeField?: boolean;
	IsFolderHierarchy?: boolean;
	IsHierarchy?: boolean;
	IsMultiValueLookup?: boolean;
	IsTaxonomyField?: boolean;
}
