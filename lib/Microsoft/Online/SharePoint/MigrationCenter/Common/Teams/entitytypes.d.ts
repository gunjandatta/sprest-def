import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* ChannelResource
**********************************************/
export interface ChannelResource {
	AbsoluteUrl?: string;
	Description?: string;
	DisplayName?: string;
	Id?: string;
	MembershipType?: string;
	ServerRelativeUrl?: string;
	SubFolders?: { results: Array<Microsoft.Online.SharePoint.MigrationCenter.Common.SPFolderInformation> };
}

/*********************************************
* ChannelResourceCollections
**********************************************/
export interface ChannelResourceCollections {

}

/*********************************************
* TeamResource
**********************************************/
export interface TeamResource {
	DisplayName?: string;
	Id?: any;
	SiteLogoUrl?: string;
	Visibility?: string;
	WebUrl?: string;
}

/*********************************************
* TeamResourceCollections
**********************************************/
export interface TeamResourceCollections {

}
