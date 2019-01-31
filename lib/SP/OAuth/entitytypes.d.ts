import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";

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
export interface INativeClient extends NativeClientCollections,NativeClientMethods,IBaseQuery<INativeClientQuery> {

}

/*********************************************
* INativeClientQuery
**********************************************/
export interface INativeClientQuery extends NativeClientQuery,NativeClientMethods {

}

/*********************************************
* NativeClient
**********************************************/
export interface NativeClient extends NativeClientCollections, NativeClientMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NativeClientProps
**********************************************/
export interface NativeClientProps {

}

/*********************************************
* NativeClientCollections
**********************************************/
export interface NativeClientCollections extends NativeClientProps {

}

/*********************************************
* NativeClientQuery
**********************************************/
export interface NativeClientQuery extends NativeClientProps {

}

/*********************************************
* NativeClientMethods
**********************************************/
export interface NativeClientMethods {
	authenticate(): IBaseExecution<any>;
}

/*********************************************
* IToken
**********************************************/
export interface IToken extends TokenCollections,TokenMethods,IBaseQuery<ITokenQuery> {

}

/*********************************************
* ITokenQuery
**********************************************/
export interface ITokenQuery extends TokenQuery,TokenMethods {

}

/*********************************************
* Token
**********************************************/
export interface Token extends TokenCollections, TokenMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TokenProps
**********************************************/
export interface TokenProps {

}

/*********************************************
* TokenCollections
**********************************************/
export interface TokenCollections extends TokenProps {

}

/*********************************************
* TokenQuery
**********************************************/
export interface TokenQuery extends TokenProps {

}

/*********************************************
* TokenMethods
**********************************************/
export interface TokenMethods {
	acquire(resource?: string, tokenType?: string): IBaseExecution<SP.OAuth.TokenResponse>;
}
