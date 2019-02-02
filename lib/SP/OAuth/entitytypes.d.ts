import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

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
* TokenResponseCollections
**********************************************/
export interface TokenResponseCollections {

}

/*********************************************
* INativeClient
**********************************************/
export interface INativeClient extends NativeClientCollections, NativeClientMethods, IBaseQuery<INativeClientQuery> {

}

/*********************************************
* INativeClientCollection
**********************************************/
export interface INativeClientCollection extends IBaseResults<NativeClient> {
	done?: (resolve: (value?: Array<NativeClient>) => void) => void;
}

/*********************************************
* INativeClientQueryCollection
**********************************************/
export interface INativeClientQueryCollection extends IBaseResults<NativeClientQuery> {
	done?: (resolve: (value?: Array<NativeClientQuery>) => void) => void;
}

/*********************************************
* INativeClientQuery
**********************************************/
export interface INativeClientQuery extends NativeClientQuery, NativeClientMethods {

}

/*********************************************
* NativeClient
**********************************************/
export interface NativeClient extends IBaseResult, NativeClientProps, NativeClientCollections, NativeClientMethods {

}

/*********************************************
* NativeClientProps
**********************************************/
export interface NativeClientProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NativeClientPropMethods
**********************************************/
export interface NativeClientPropMethods {

}

/*********************************************
* NativeClientCollections
**********************************************/
export interface NativeClientCollections extends NativeClientPropMethods {

}

/*********************************************
* NativeClientQuery
**********************************************/
export interface NativeClientQuery extends IBaseResult, NativeClientProps, NativeClientMethods {

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
export interface IToken extends TokenCollections, TokenMethods, IBaseQuery<ITokenQuery> {

}

/*********************************************
* ITokenCollection
**********************************************/
export interface ITokenCollection extends IBaseResults<Token> {
	done?: (resolve: (value?: Array<Token>) => void) => void;
}

/*********************************************
* ITokenQueryCollection
**********************************************/
export interface ITokenQueryCollection extends IBaseResults<TokenQuery> {
	done?: (resolve: (value?: Array<TokenQuery>) => void) => void;
}

/*********************************************
* ITokenQuery
**********************************************/
export interface ITokenQuery extends TokenQuery, TokenMethods {

}

/*********************************************
* Token
**********************************************/
export interface Token extends IBaseResult, TokenProps, TokenCollections, TokenMethods {

}

/*********************************************
* TokenProps
**********************************************/
export interface TokenProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TokenPropMethods
**********************************************/
export interface TokenPropMethods {

}

/*********************************************
* TokenCollections
**********************************************/
export interface TokenCollections extends TokenPropMethods {

}

/*********************************************
* TokenQuery
**********************************************/
export interface TokenQuery extends IBaseResult, TokenProps, TokenMethods {

}

/*********************************************
* TokenMethods
**********************************************/
export interface TokenMethods {
	acquire(resource?: string, tokenType?: string): IBaseExecution<SP.OAuth.TokenResponse>;
}
