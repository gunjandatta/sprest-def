import { Base } from "../../../";

/*********************************************
* ISPMultiGeoProxy
**********************************************/
export interface ISPMultiGeoProxy extends SPMultiGeoProxyCollections, SPMultiGeoProxyMethods, Base.IBaseQuery<SPMultiGeoProxy, ISPMultiGeoProxyQuery> {

}

/*********************************************
* ISPMultiGeoProxyCollection
**********************************************/
export interface ISPMultiGeoProxyCollection extends Base.IBaseResults<SPMultiGeoProxy> {
	done?: (resolve: (value?: Array<SPMultiGeoProxy>) => void) => void;
}

/*********************************************
* ISPMultiGeoProxyQueryCollection
**********************************************/
export interface ISPMultiGeoProxyQueryCollection extends Base.IBaseResults<SPMultiGeoProxyOData> {
	done?: (resolve: (value?: Array<SPMultiGeoProxyOData>) => void) => void;
}

/*********************************************
* ISPMultiGeoProxyQuery
**********************************************/
export interface ISPMultiGeoProxyQuery extends SPMultiGeoProxyOData, SPMultiGeoProxyMethods {

}

/*********************************************
* SPMultiGeoProxy
**********************************************/
export interface SPMultiGeoProxy extends Base.IBaseResult, SPMultiGeoProxyProps, SPMultiGeoProxyCollections, SPMultiGeoProxyMethods {

}

/*********************************************
* SPMultiGeoProxyProps
**********************************************/
export interface SPMultiGeoProxyProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPMultiGeoProxyPropMethods
**********************************************/
export interface SPMultiGeoProxyPropMethods {

}

/*********************************************
* SPMultiGeoProxyCollections
**********************************************/
export interface SPMultiGeoProxyCollections extends SPMultiGeoProxyPropMethods {

}

/*********************************************
* SPMultiGeoProxyOData
**********************************************/
export interface SPMultiGeoProxyOData extends Base.IBaseResult, SPMultiGeoProxyProps, SPMultiGeoProxyMethods {

}

/*********************************************
* SPMultiGeoProxyMethods
**********************************************/
export interface SPMultiGeoProxyMethods {
	remoteThumbnail(url?: string): Base.IBaseExecution<any>;
}
