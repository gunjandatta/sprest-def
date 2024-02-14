import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* IVivaResources
**********************************************/
export interface IVivaResources extends VivaResourcesCollections, VivaResourcesMethods, Base.IBaseQuery<VivaResources, IVivaResourcesQuery> {

}

/*********************************************
* IVivaResourcesCollection
**********************************************/
export interface IVivaResourcesCollection extends Base.IBaseResults<VivaResources> {
	done?: (resolve: (value?: Array<VivaResources>) => void) => void;
}

/*********************************************
* IVivaResourcesQueryCollection
**********************************************/
export interface IVivaResourcesQueryCollection extends Base.IBaseResults<VivaResourcesOData> {
	done?: (resolve: (value?: Array<VivaResourcesOData>) => void) => void;
}

/*********************************************
* IVivaResourcesQuery
**********************************************/
export interface IVivaResourcesQuery extends VivaResourcesOData, VivaResourcesMethods {

}

/*********************************************
* VivaResources
**********************************************/
export interface VivaResources extends Base.IBaseResult, VivaResourcesProps, VivaResourcesCollections, VivaResourcesMethods {

}

/*********************************************
* VivaResourcesProps
**********************************************/
export interface VivaResourcesProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* VivaResourcesPropMethods
**********************************************/
export interface VivaResourcesPropMethods {

}

/*********************************************
* VivaResourcesCollections
**********************************************/
export interface VivaResourcesCollections extends VivaResourcesPropMethods {

}

/*********************************************
* VivaResourcesOData
**********************************************/
export interface VivaResourcesOData extends Base.IBaseResult, VivaResourcesProps, VivaResourcesMethods {

}

/*********************************************
* VivaResourcesMethods
**********************************************/
export interface VivaResourcesMethods {
	addLink(newLink?: Microsoft.SharePoint.EmployeeEngagement.VivaResourceLink): Base.IBaseExecution<number>;
	getLinks(): Base.IBaseExecution<Microsoft.SharePoint.EmployeeEngagement.VivaResourceGetEndpoint>;
	removeLink(id?: number): Base.IBaseExecution<any>;
	reorderLink(linkId?: number, prevLinkId?: number): Base.IBaseExecution<any>;
	updateLink(updatedLink?: Microsoft.SharePoint.EmployeeEngagement.VivaResourceLink): Base.IBaseExecution<any>;
}

/*********************************************
* IVivaHome
**********************************************/
export interface IVivaHome extends VivaHomeCollections, VivaHomeMethods, Base.IBaseQuery<VivaHome, IVivaHomeQuery> {

}

/*********************************************
* IVivaHomeCollection
**********************************************/
export interface IVivaHomeCollection extends Base.IBaseResults<VivaHome> {
	done?: (resolve: (value?: Array<VivaHome>) => void) => void;
}

/*********************************************
* IVivaHomeQueryCollection
**********************************************/
export interface IVivaHomeQueryCollection extends Base.IBaseResults<VivaHomeOData> {
	done?: (resolve: (value?: Array<VivaHomeOData>) => void) => void;
}

/*********************************************
* IVivaHomeQuery
**********************************************/
export interface IVivaHomeQuery extends VivaHomeOData, VivaHomeMethods {

}

/*********************************************
* VivaHome
**********************************************/
export interface VivaHome extends Base.IBaseResult, VivaHomeProps, VivaHomeCollections, VivaHomeMethods {

}

/*********************************************
* VivaHomeProps
**********************************************/
export interface VivaHomeProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* VivaHomePropMethods
**********************************************/
export interface VivaHomePropMethods {

}

/*********************************************
* VivaHomeCollections
**********************************************/
export interface VivaHomeCollections extends VivaHomePropMethods {

}

/*********************************************
* VivaHomeOData
**********************************************/
export interface VivaHomeOData extends Base.IBaseResult, VivaHomeProps, VivaHomeMethods {

}

/*********************************************
* VivaHomeMethods
**********************************************/
export interface VivaHomeMethods {
	addImage(fileName?: string, imageStream?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	addImageFromExternalUrl(fileName?: string, externalUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	titleRegion(vivaHomeTitleRegion?: SP.VivaHomeTitleRegion): Base.IBaseExecution<any>;
}

/*********************************************
* VivaResourceGetEndpoint
**********************************************/
export interface VivaResourceGetEndpoint {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	CompanyLinks?: { results: Array<Microsoft.SharePoint.EmployeeEngagement.VivaResourceLink> };
}

/*********************************************
* VivaResourceGetEndpointCollections
**********************************************/
export interface VivaResourceGetEndpointCollections {

}
