import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* PortalLaunchSetupWrapper
**********************************************/
export interface PortalLaunchSetupWrapper {

}

/*********************************************
* PortalLaunchSetupWrapperCollections
**********************************************/
export interface PortalLaunchSetupWrapperCollections {

}

/*********************************************
* PortalLaunchWaveGroup
**********************************************/
export interface PortalLaunchWaveGroup {
	Id?: any;
	SiteUrl?: string;
	UserGroupName?: string;
}

/*********************************************
* PortalLaunchWaveGroupCollections
**********************************************/
export interface PortalLaunchWaveGroupCollections {

}

/*********************************************
* PortalLaunchWaveSetup
**********************************************/
export interface PortalLaunchWaveSetup {
	AlternativeUrlsOfNewSite?: string;
	AlternativeUrlsOfOldSite?: string;
	CreatedOn?: any;
	ExpectedUsersSize?: number;
	IsPaused?: boolean;
	ModifiedOn?: any;
	NewSiteUrl?: string;
	OwnersAndEditors?: Array<SP.KeyValue>;
	PauseAtWave?: number;
	RedirectionType?: number;
	RedirectUrl?: string;
	SiteId?: any;
	Status?: number;
	WaveOverrideUsers?: string;
	Waves?: Array<SP.Publishing.PortalLaunch.PortalLaunchWave>;
}

/*********************************************
* PortalLaunchWaveSetupCollections
**********************************************/
export interface PortalLaunchWaveSetupCollections {

}

/*********************************************
* PortalLaunchWave
**********************************************/
export interface PortalLaunchWave {
	Groups?: Array<SP.Publishing.PortalLaunch.PortalLaunchWaveGroup>;
	LaunchDateUtc?: any;
	Name?: string;
	Order?: number;
}

/*********************************************
* PortalLaunchWaveCollections
**********************************************/
export interface PortalLaunchWaveCollections {

}
