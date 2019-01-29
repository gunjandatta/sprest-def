import { SP } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CollaborationMailbox
**********************************************/
export interface CollaborationMailbox {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupService
**********************************************/
export interface GroupService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupServiceMethods
**********************************************/
export interface GroupServiceMethods {
	getGroupImage<T=any>(id?: string, hash?: string, color?: string): T;
	setGroupImage<T=void>(imageStream?: any): T;
	syncGroupProperties<T=void>(): T;
}

/*********************************************
* GroupSiteManager
**********************************************/
export interface GroupSiteManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupSiteManagerMethods
**********************************************/
export interface GroupSiteManagerMethods {
	canUserCreateGroup<T=boolean>(): T;
	create<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(groupId?: any): T;
	createGroup<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(displayName?: string, alias?: string, isPublic?: boolean, ownerPrincipalNames?: Array<string>, description?: string, creationOptions?: Array<string>): T;
	createGroupEx<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): T;
	createGroupForSite<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): T;
	getGroupCreationContext<T=Microsoft.SharePoint.Portal.GroupCreationContext>(): T;
	getGroupSiteConversionData<T=Microsoft.SharePoint.Portal.GroupSiteConversionInfo>(): T;
	getSiteStatus<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(groupId?: any): T;
	getValidSiteUrlFromAlias<T=string>(alias?: string, managedPath?: string, isTeamSite?: boolean): T;
	notebook<T=string>(groupId?: any): T;
}

/*********************************************
* SiteLinkingManager
**********************************************/
export interface SiteLinkingManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteLinkingManagerMethods
**********************************************/
export interface SiteLinkingManagerMethods {
	getSiteLinks<T=Microsoft.SharePoint.Portal.LinkedSitesListContract>(): T;
	linkGroup<T=boolean>(groupId?: any): T;
	unlinkGroup<T=boolean>(groupId?: any): T;
}

/*********************************************
* CommunityModeration
**********************************************/
export interface CommunityModeration {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SuiteNavData
**********************************************/
export interface SuiteNavData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceContextBuilder
**********************************************/
export interface SharePointHomeServiceContextBuilder {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceContextBuilderMethods
**********************************************/
export interface SharePointHomeServiceContextBuilderMethods {
	context<T=Microsoft.SharePoint.Portal.SharePointHomeServiceContext>(): T;
}

/*********************************************
* SharePointHomeServiceContext
**********************************************/
export interface SharePointHomeServiceContext {
	CompanyPortalContext?: string;
	HomePageCache?: Microsoft.SharePoint.Portal.Home.SharePointHomeDataCacheCollection;
	HomePageContext?: Microsoft.SharePoint.Portal.Home.SharePointHomePageContext;
	Payload?: string;
	Urls?: Array<string>;
}

/*********************************************
* SharePointHomeServiceContextCollections
**********************************************/
export interface SharePointHomeServiceContextCollections {
	Token<T=SP.OAuth.TokenResponse>(): T;
}

/*********************************************
* SharePointHomeServiceContextQuery
**********************************************/
export interface SharePointHomeServiceContextQuery {
	Token<T=SP.OAuth.TokenResponse>(): T;
}

/*********************************************
* SPHubSitesUtility
**********************************************/
export interface SPHubSitesUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPHubSitesUtilityMethods
**********************************************/
export interface SPHubSitesUtilityMethods {
	getHubSites<T=Array<SP.HubSite>>(): T;
}

/*********************************************
* SPSiteManager
**********************************************/
export interface SPSiteManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSiteManagerMethods
**********************************************/
export interface SPSiteManagerMethods {
	canCreateHubJoinedSite<T=boolean>(hubSiteId?: any): T;
	create<T=Microsoft.SharePoint.Portal.SPSiteCreationResponse>(request?: Microsoft.SharePoint.Portal.SPSiteCreationRequest): T;
	delete<T=void>(siteId?: any): T;
	status<T=Microsoft.SharePoint.Portal.SPSiteCreationResponse>(url?: string): T;
}

/*********************************************
* MySiteRecommendations
**********************************************/
export interface MySiteRecommendations {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
