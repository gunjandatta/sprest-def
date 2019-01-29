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
* GroupServiceMethods<T = any>
**********************************************/
export interface GroupServiceMethods<T = any> {
	getGroupImage(id?: string, hash?: string, color?: string): T;
	setGroupImage(imageStream?: any): T;
	syncGroupProperties(): T;
}

/*********************************************
* GroupSiteManager
**********************************************/
export interface GroupSiteManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupSiteManagerMethods<T = any>
**********************************************/
export interface GroupSiteManagerMethods<T = any> {
	canUserCreateGroup(): T;
	create(groupId?: any): T;
	createGroup(displayName?: string, alias?: string, isPublic?: boolean, ownerPrincipalNames?: Array<string>, description?: string, creationOptions?: Array<string>): T;
	createGroupEx(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): T;
	createGroupForSite(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): T;
	getGroupCreationContext(): T;
	getGroupSiteConversionData(): T;
	getSiteStatus(groupId?: any): T;
	getValidSiteUrlFromAlias(alias?: string, managedPath?: string, isTeamSite?: boolean): T;
	notebook(groupId?: any): T;
}

/*********************************************
* SiteLinkingManager
**********************************************/
export interface SiteLinkingManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteLinkingManagerMethods<T = any>
**********************************************/
export interface SiteLinkingManagerMethods<T = any> {
	getSiteLinks(): T;
	linkGroup(groupId?: any): T;
	unlinkGroup(groupId?: any): T;
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
* SharePointHomeServiceContextBuilderMethods<T = any>
**********************************************/
export interface SharePointHomeServiceContextBuilderMethods<T = any> {
	context(): T;
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
* SharePointHomeServiceContextCollections<T = any>
**********************************************/
export interface SharePointHomeServiceContextCollections<T = any> {
	Token(): T;
}

/*********************************************
* SharePointHomeServiceContextQuery
**********************************************/
export interface SharePointHomeServiceContextQuery {
	Token(): T;
}

/*********************************************
* SPHubSitesUtility
**********************************************/
export interface SPHubSitesUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPHubSitesUtilityMethods<T = any>
**********************************************/
export interface SPHubSitesUtilityMethods<T = any> {
	getHubSites(): T;
}

/*********************************************
* SPSiteManager
**********************************************/
export interface SPSiteManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSiteManagerMethods<T = any>
**********************************************/
export interface SPSiteManagerMethods<T = any> {
	canCreateHubJoinedSite(hubSiteId?: any): T;
	create(request?: Microsoft.SharePoint.Portal.SPSiteCreationRequest): T;
	delete(siteId?: any): T;
	status(url?: string): T;
}

/*********************************************
* MySiteRecommendations
**********************************************/
export interface MySiteRecommendations {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
