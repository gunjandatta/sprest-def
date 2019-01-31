/**
 * Base Execution
 */
export interface IBaseExecution<Type = any, Result = Type, QueryResult = Result> {
    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param resolve - The method to be executed after the request completes.
     */
    batch(resolve: (value?: Result) => void): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(appendFl?: boolean): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param resolve - The method to be executed after the request completes.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(resolve: (value?: Result) => void, appendFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param reject - The method to be executed if the request fails.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, reject?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request. (This is an internal method, but can be used for dev purposes.)
     * @param methodName - The method name to execute.
     * @param methodConfig - The configuration to pass with the request.
     * @param args - The optional arguments for the request.
     */
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any);

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): Result;

    /**
     * Method to wait for the requests to complete.
     * @param resolve - The method to be executed after the request completes.
     */
    done<T=IBaseResult>(resolve: (value?: T) => void);

    /**
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;
}

/**
 * Base Result
 */
export interface IBaseResult<Type = any, Result = Type, QueryResult = Result> {
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;

    /** The response */
    response: string;

    /**
     * Method to stringify the object.
     */
    stringify(): string;
}

/**
 * Base Results
 */
export interface IBaseResults<Type = any> extends IBaseResult<Type> {
    /** Results */
    results: Array<Type>;
}

/**
 * Base Collection
 */
export interface IBaseCollection<Type = any> extends IBaseExecution<IBaseResults<Type>> { }

/**
 * Method Information Settings
 */
export interface IMethodInfo {
    argNames?: Array<string>;
    argValues?: Array<any>;
    data?: any;
    getAllItemsFl?: boolean;
    inheritMetadataType?: boolean;
    metadataType?: string;
    name?: string;
    replaceEndpointFl?: boolean;
    requestMethod?: string;
    requestType?: number;
    returnType?: string;
}

/**
 * Request Information
 */
export interface IRequestInfo {
    /** The data being sent in the body of the request. */
    data?: object;

    /** The request method (GET/POST) */
    method: string;

    /** The url of the request. */
    url: string;
}