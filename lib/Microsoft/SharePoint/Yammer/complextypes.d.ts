import { IBaseExecution } from "../../../";

/*********************************************
* WacToken
**********************************************/
export interface WacToken {
	AccessToken?: string;
	AccessTokenTtl?: number;
	AppUrl?: string;
	ErrorMessageToDisplay?: string;
	FavIconTarget?: string;
	RedirectUrl?: string;
}
