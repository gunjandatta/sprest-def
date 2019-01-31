import { IBaseExecution } from "../../../";
import { SP } from "../../../";

/*********************************************
* ClientPeoplePickerWebServiceInterface
**********************************************/
export interface ClientPeoplePickerWebServiceInterface {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PickerEntityInformation
**********************************************/
export interface PickerEntityInformation {
	Entity?: SP.UI.ApplicationPages.PickerEntityInformationRequest;
	TotalMemberCount?: number;
}
