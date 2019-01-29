

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
* NativeClientMethods<T = any>
**********************************************/
export interface NativeClientMethods<T = any> {
	authenticate(): T;
}

/*********************************************
* Token
**********************************************/
export interface Token {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TokenMethods<T = any>
**********************************************/
export interface TokenMethods<T = any> {
	acquire(resource?: string, tokenType?: string): T;
}
