

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
* NativeClient
**********************************************/
export interface NativeClient {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NativeClientMethods
**********************************************/
export interface NativeClientMethods {
	authenticate<T=void>(): T;
}

/*********************************************
* Token
**********************************************/
export interface Token {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TokenMethods
**********************************************/
export interface TokenMethods {
	acquire<T=SP.OAuth.TokenResponse>(resource?: string, tokenType?: string): T;
}
