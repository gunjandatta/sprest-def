import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../";

/*********************************************
* ConnectionSettings
**********************************************/
export interface ConnectionSettings {
	AuthenticationMode?: string;
	ConnectionSettingsType?: number;
	Description?: string;
	Name?: string;
	ParentName?: string;
	ProxySSOApplicationId?: string;
	ProxyTarget?: string;
	SSOApplicationId?: string;
	SSOProviderImplId?: string;
	Target?: string;
}

/*********************************************
* ConnectionSettingsCollections
**********************************************/
export interface ConnectionSettingsCollections {

}
