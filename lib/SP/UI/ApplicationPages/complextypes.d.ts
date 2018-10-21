import { SP } from "../../../";

/*********************************************
* ClientPeoplePickerQueryParameters
**********************************************/
export interface ClientPeoplePickerQueryParameters {
	AllowEmailAddresses?: boolean;
	AllowMultipleEntities?: boolean;
	AllowOnlyEmailAddresses?: boolean;
	AllUrlZones?: boolean;
	EnabledClaimProviders?: string;
	ForceClaims?: boolean;
	MaximumEntitySuggestions?: number;
	PrincipalSource?: number;
	PrincipalType?: number;
	QuerySettings?: SP.UI.ApplicationPages.PeoplePickerQuerySettings;
	QueryString?: string;
	Required?: boolean;
	SharePointGroupID?: number;
	UrlZone?: number;
	UrlZoneSpecified?: boolean;
	WebApplicationID?: any;
}

/*********************************************
* PeoplePickerQuerySettings
**********************************************/
export interface PeoplePickerQuerySettings {
	ExcludeAllUsersOnTenantClaim?: boolean;
	IsSharing?: boolean;
}

/*********************************************
* PickerEntityInformationRequest
**********************************************/
export interface PickerEntityInformationRequest {
	EmailAddress?: string;
	GroupId?: number;
	Key?: string;
	PrincipalType?: number;
}
