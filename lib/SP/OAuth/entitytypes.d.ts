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
export interface INativeClientQueryCollection extends IBaseResults<NativeClientOData> {
	done?: (resolve: (value?: Array<NativeClientOData>) => void) => void;
}

/*********************************************
* INativeClientQuery
**********************************************/
export interface INativeClientQuery extends NativeClientOData, NativeClientMethods {

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
* NativeClientOData
**********************************************/
export interface NativeClientOData extends IBaseResult, NativeClientProps, NativeClientMethods {

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
export interface ITokenQueryCollection extends IBaseResults<TokenOData> {
	done?: (resolve: (value?: Array<TokenOData>) => void) => void;
}

/*********************************************
* ITokenQuery
**********************************************/
export interface ITokenQuery extends TokenOData, TokenMethods {

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
* TokenOData
**********************************************/
export interface TokenOData extends IBaseResult, TokenProps, TokenMethods {

}

/*********************************************
* TokenMethods
**********************************************/
export interface TokenMethods {
	acquire(resource?: string, tokenType?: string): IBaseExecution<SP.OAuth.TokenResponse>;
}
