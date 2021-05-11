import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* IPortalLaunchWavesManager
**********************************************/
export interface IPortalLaunchWavesManager extends PortalLaunchWavesManagerCollections, PortalLaunchWavesManagerMethods, Base.IBaseQuery<PortalLaunchWavesManager, IPortalLaunchWavesManagerQuery> {

}

/*********************************************
* IPortalLaunchWavesManagerCollection
**********************************************/
export interface IPortalLaunchWavesManagerCollection extends Base.IBaseResults<PortalLaunchWavesManager> {
	done?: (resolve: (value?: Array<PortalLaunchWavesManager>) => void) => void;
}

/*********************************************
* IPortalLaunchWavesManagerQueryCollection
**********************************************/
export interface IPortalLaunchWavesManagerQueryCollection extends Base.IBaseResults<PortalLaunchWavesManagerOData> {
	done?: (resolve: (value?: Array<PortalLaunchWavesManagerOData>) => void) => void;
}

/*********************************************
* IPortalLaunchWavesManagerQuery
**********************************************/
export interface IPortalLaunchWavesManagerQuery extends PortalLaunchWavesManagerOData, PortalLaunchWavesManagerMethods {

}

/*********************************************
* PortalLaunchWavesManager
**********************************************/
export interface PortalLaunchWavesManager extends Base.IBaseResult, PortalLaunchWavesManagerProps, PortalLaunchWavesManagerCollections, PortalLaunchWavesManagerMethods {

}

/*********************************************
* PortalLaunchWavesManagerProps
**********************************************/
export interface PortalLaunchWavesManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PortalLaunchWavesManagerPropMethods
**********************************************/
export interface PortalLaunchWavesManagerPropMethods {

}

/*********************************************
* PortalLaunchWavesManagerCollections
**********************************************/
export interface PortalLaunchWavesManagerCollections extends PortalLaunchWavesManagerPropMethods {

}

/*********************************************
* PortalLaunchWavesManagerOData
**********************************************/
export interface PortalLaunchWavesManagerOData extends Base.IBaseResult, PortalLaunchWavesManagerProps, PortalLaunchWavesManagerMethods {

}

/*********************************************
* PortalLaunchWavesManagerMethods
**********************************************/
export interface PortalLaunchWavesManagerMethods {
	get(siteUrl?: string): Base.IBaseExecution<SP.Publishing.PortalLaunch.PortalLaunchWaveSetup>;
	getAll(): Base.IBaseCollection<SP.Publishing.PortalLaunch.PortalLaunchWaveSetup>;
	remove(siteUrl?: string): Base.IBaseExecution<boolean>;
	saveWaveSetup(portalLaunchSetup?: SP.Publishing.PortalLaunch.PortalLaunchWaveSetup): Base.IBaseExecution<SP.Publishing.PortalLaunch.PortalLaunchWaveSetup>;
}
