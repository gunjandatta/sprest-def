import { IBaseExecution } from "../../";

/*********************************************
* TokenResponse
**********************************************/
export interface TokenResponse {
	access_token?: string;
	expires_on?: string;
	id_token?: string;
	resource?: string;
	scope?: string;
	token_type?: string;
}

/*********************************************
* INativeClient
**********************************************/
export interface INativeClient extends NativeClientProps,NativeClientMethods,IBaseExecution<NativeClient> {

}

/*********************************************
* NativeClient
**********************************************/
export interface NativeClient extends NativeClientProps, NativeClientMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NativeClientProps
**********************************************/
export interface NativeClientProps {

}

/*********************************************
* NativeClientMethods
**********************************************/
export interface NativeClientMethods {
	authenticate<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IToken
**********************************************/
export interface IToken extends TokenProps,TokenMethods,IBaseExecution<Token> {

}

/*********************************************
* Token
**********************************************/
export interface Token extends TokenProps, TokenMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TokenProps
**********************************************/
export interface TokenProps {

}

/*********************************************
* TokenMethods
**********************************************/
export interface TokenMethods {
	acquire<T=SP.OAuth.TokenResponse>(resource?: string, tokenType?: string): IBaseExecution<T>;
}
