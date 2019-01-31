import { IBaseExecution } from "../../../";

/*********************************************
* SPClientSideComponentIdentifier
**********************************************/
export interface SPClientSideComponentIdentifier {
	id?: string;
	version?: string;
}

/*********************************************
* SPClientSideComponentQueryResult
**********************************************/
export interface SPClientSideComponentQueryResult {
	ComponentType?: number;
	Id?: string;
	Manifest?: string;
	ManifestType?: number;
	Name?: string;
	Status?: number;
}
