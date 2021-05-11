import { Base } from "../../";
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
export interface INativeClient extends NativeClientCollections, NativeClientMethods, Base.IBaseQuery<NativeClient, INativeClientQuery> {

}

/*********************************************
* INativeClientCollection
**********************************************/
export interface INativeClientCollection extends Base.IBaseResults<NativeClient> {
	done?: (resolve: (value?: Array<NativeClient>) => void) => void;
}

/*********************************************
* INativeClientQueryCollection
**********************************************/
export interface INativeClientQueryCollection extends Base.IBaseResults<NativeClientOData> {
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
export interface NativeClient extends Base.IBaseResult, NativeClientProps, NativeClientCollections, NativeClientMethods {

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
export interface NativeClientOData extends Base.IBaseResult, NativeClientProps, NativeClientMethods {

}

/*********************************************
* NativeClientMethods
**********************************************/
export interface NativeClientMethods {
	authenticate(): Base.IBaseExecution<any>;
}

/*********************************************
* IToken
**********************************************/
export interface IToken extends TokenCollections, TokenMethods, Base.IBaseQuery<Token, ITokenQuery> {

}

/*********************************************
* ITokenCollection
**********************************************/
export interface ITokenCollection extends Base.IBaseResults<Token> {
	done?: (resolve: (value?: Array<Token>) => void) => void;
}

/*********************************************
* ITokenQueryCollection
**********************************************/
export interface ITokenQueryCollection extends Base.IBaseResults<TokenOData> {
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
export interface Token extends Base.IBaseResult, TokenProps, TokenCollections, TokenMethods {

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
export interface TokenOData extends Base.IBaseResult, TokenProps, TokenMethods {

}

/*********************************************
* TokenMethods
**********************************************/
export interface TokenMethods {
	acquire(resource?: string, tokenType?: string): Base.IBaseExecution<SP.OAuth.TokenResponse>;
}

/*********************************************
* IAuthentication
**********************************************/
export interface IAuthentication extends AuthenticationCollections, AuthenticationMethods, Base.IBaseQuery<Authentication, IAuthenticationQuery> {

}

/*********************************************
* IAuthenticationCollection
**********************************************/
export interface IAuthenticationCollection extends Base.IBaseResults<Authentication> {
	done?: (resolve: (value?: Array<Authentication>) => void) => void;
}

/*********************************************
* IAuthenticationQueryCollection
**********************************************/
export interface IAuthenticationQueryCollection extends Base.IBaseResults<AuthenticationOData> {
	done?: (resolve: (value?: Array<AuthenticationOData>) => void) => void;
}

/*********************************************
* IAuthenticationQuery
**********************************************/
export interface IAuthenticationQuery extends AuthenticationOData, AuthenticationMethods {

}

/*********************************************
* Authentication
**********************************************/
export interface Authentication extends Base.IBaseResult, AuthenticationProps, AuthenticationCollections, AuthenticationMethods {

}

/*********************************************
* AuthenticationProps
**********************************************/
export interface AuthenticationProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AuthenticationPropMethods
**********************************************/
export interface AuthenticationPropMethods {

}

/*********************************************
* AuthenticationCollections
**********************************************/
export interface AuthenticationCollections extends AuthenticationPropMethods {

}

/*********************************************
* AuthenticationOData
**********************************************/
export interface AuthenticationOData extends Base.IBaseResult, AuthenticationProps, AuthenticationMethods {

}

/*********************************************
* AuthenticationMethods
**********************************************/
export interface AuthenticationMethods {
	getRenewalUrl(redirectUrl?: string): Base.IBaseExecution<string>;
}
