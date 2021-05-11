import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* IPortalNavigationCacheWrapper
**********************************************/
export interface IPortalNavigationCacheWrapper extends PortalNavigationCacheWrapperCollections, PortalNavigationCacheWrapperMethods, Base.IBaseQuery<PortalNavigationCacheWrapper, IPortalNavigationCacheWrapperQuery> {

}

/*********************************************
* IPortalNavigationCacheWrapperCollection
**********************************************/
export interface IPortalNavigationCacheWrapperCollection extends Base.IBaseResults<PortalNavigationCacheWrapper> {
	done?: (resolve: (value?: Array<PortalNavigationCacheWrapper>) => void) => void;
}

/*********************************************
* IPortalNavigationCacheWrapperQueryCollection
**********************************************/
export interface IPortalNavigationCacheWrapperQueryCollection extends Base.IBaseResults<PortalNavigationCacheWrapperOData> {
	done?: (resolve: (value?: Array<PortalNavigationCacheWrapperOData>) => void) => void;
}

/*********************************************
* IPortalNavigationCacheWrapperQuery
**********************************************/
export interface IPortalNavigationCacheWrapperQuery extends PortalNavigationCacheWrapperOData, PortalNavigationCacheWrapperMethods {

}

/*********************************************
* PortalNavigationCacheWrapper
**********************************************/
export interface PortalNavigationCacheWrapper extends Base.IBaseResult, PortalNavigationCacheWrapperProps, PortalNavigationCacheWrapperCollections, PortalNavigationCacheWrapperMethods {

}

/*********************************************
* PortalNavigationCacheWrapperProps
**********************************************/
export interface PortalNavigationCacheWrapperProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PortalNavigationCacheWrapperPropMethods
**********************************************/
export interface PortalNavigationCacheWrapperPropMethods {

}

/*********************************************
* PortalNavigationCacheWrapperCollections
**********************************************/
export interface PortalNavigationCacheWrapperCollections extends PortalNavigationCacheWrapperPropMethods {

}

/*********************************************
* PortalNavigationCacheWrapperOData
**********************************************/
export interface PortalNavigationCacheWrapperOData extends Base.IBaseResult, PortalNavigationCacheWrapperProps, PortalNavigationCacheWrapperMethods {

}

/*********************************************
* PortalNavigationCacheWrapperMethods
**********************************************/
export interface PortalNavigationCacheWrapperMethods {
	disable(): Base.IBaseExecution<any>;
	enable(): Base.IBaseExecution<any>;
	refresh(): Base.IBaseExecution<any>;
}

/*********************************************
* IStructuralNavigationCacheWrapper
**********************************************/
export interface IStructuralNavigationCacheWrapper extends StructuralNavigationCacheWrapperCollections, StructuralNavigationCacheWrapperMethods, Base.IBaseQuery<StructuralNavigationCacheWrapper, IStructuralNavigationCacheWrapperQuery> {

}

/*********************************************
* IStructuralNavigationCacheWrapperCollection
**********************************************/
export interface IStructuralNavigationCacheWrapperCollection extends Base.IBaseResults<StructuralNavigationCacheWrapper> {
	done?: (resolve: (value?: Array<StructuralNavigationCacheWrapper>) => void) => void;
}

/*********************************************
* IStructuralNavigationCacheWrapperQueryCollection
**********************************************/
export interface IStructuralNavigationCacheWrapperQueryCollection extends Base.IBaseResults<StructuralNavigationCacheWrapperOData> {
	done?: (resolve: (value?: Array<StructuralNavigationCacheWrapperOData>) => void) => void;
}

/*********************************************
* IStructuralNavigationCacheWrapperQuery
**********************************************/
export interface IStructuralNavigationCacheWrapperQuery extends StructuralNavigationCacheWrapperOData, StructuralNavigationCacheWrapperMethods {

}

/*********************************************
* StructuralNavigationCacheWrapper
**********************************************/
export interface StructuralNavigationCacheWrapper extends Base.IBaseResult, StructuralNavigationCacheWrapperProps, StructuralNavigationCacheWrapperCollections, StructuralNavigationCacheWrapperMethods {

}

/*********************************************
* StructuralNavigationCacheWrapperProps
**********************************************/
export interface StructuralNavigationCacheWrapperProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* StructuralNavigationCacheWrapperPropMethods
**********************************************/
export interface StructuralNavigationCacheWrapperPropMethods {

}

/*********************************************
* StructuralNavigationCacheWrapperCollections
**********************************************/
export interface StructuralNavigationCacheWrapperCollections extends StructuralNavigationCacheWrapperPropMethods {

}

/*********************************************
* StructuralNavigationCacheWrapperOData
**********************************************/
export interface StructuralNavigationCacheWrapperOData extends Base.IBaseResult, StructuralNavigationCacheWrapperProps, StructuralNavigationCacheWrapperMethods {

}

/*********************************************
* StructuralNavigationCacheWrapperMethods
**********************************************/
export interface StructuralNavigationCacheWrapperMethods {
	setSiteState(state?: SP.Publishing.Navigation.StructuralNavigationCacheState): Base.IBaseExecution<any>;
	setWebState(state?: SP.Publishing.Navigation.StructuralNavigationCacheState): Base.IBaseExecution<any>;
	siteState(): Base.IBaseExecution<SP.Publishing.Navigation.StructuralNavigationCacheState>;
	webState(): Base.IBaseExecution<SP.Publishing.Navigation.StructuralNavigationCacheState>;
}
