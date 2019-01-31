import { IBaseExecution } from "../../../";
import { IBaseCollection } from "../../../";
import { SP } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CollaborationMailbox
**********************************************/
export interface CollaborationMailbox {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IGroupService
**********************************************/
export interface IGroupService extends GroupServiceProps,GroupServiceMethods,IBaseExecution<GroupService> {

}

/*********************************************
* GroupService
**********************************************/
export interface GroupService extends GroupServiceProps, GroupServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupServiceProps
**********************************************/
export interface GroupServiceProps {

}

/*********************************************
* GroupServiceMethods
**********************************************/
export interface GroupServiceMethods {
	getGroupImage<T=any>(id?: string, hash?: string, color?: string): IBaseExecution<T>;
	setGroupImage<T=any>(imageStream?: any): IBaseExecution<T>;
	syncGroupProperties<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IGroupSiteManager
**********************************************/
export interface IGroupSiteManager extends GroupSiteManagerProps,GroupSiteManagerMethods,IBaseExecution<GroupSiteManager> {

}

/*********************************************
* GroupSiteManager
**********************************************/
export interface GroupSiteManager extends GroupSiteManagerProps, GroupSiteManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupSiteManagerProps
**********************************************/
export interface GroupSiteManagerProps {

}

/*********************************************
* GroupSiteManagerMethods
**********************************************/
export interface GroupSiteManagerMethods {
	canUserCreateGroup<T=boolean>(): IBaseExecution<T>;
	create<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(groupId?: any): IBaseExecution<T>;
	createGroup<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(displayName?: string, alias?: string, isPublic?: boolean, ownerPrincipalNames?: Array<string>, description?: string, creationOptions?: Array<string>): IBaseExecution<T>;
	createGroupEx<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): IBaseExecution<T>;
	createGroupForSite<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): IBaseExecution<T>;
	getGroupCreationContext<T=Microsoft.SharePoint.Portal.GroupCreationContext>(): IBaseExecution<T>;
	getGroupSiteConversionData<T=Microsoft.SharePoint.Portal.GroupSiteConversionInfo>(): IBaseExecution<T>;
	getSiteStatus<T=Microsoft.SharePoint.Portal.GroupSiteInfo>(groupId?: any): IBaseExecution<T>;
	getValidSiteUrlFromAlias<T=string>(alias?: string, managedPath?: string, isTeamSite?: boolean): IBaseExecution<T>;
	notebook<T=string>(groupId?: any): IBaseExecution<T>;
}

/*********************************************
* ISiteLinkingManager
**********************************************/
export interface ISiteLinkingManager extends SiteLinkingManagerProps,SiteLinkingManagerMethods,IBaseExecution<SiteLinkingManager> {

}

/*********************************************
* SiteLinkingManager
**********************************************/
export interface SiteLinkingManager extends SiteLinkingManagerProps, SiteLinkingManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteLinkingManagerProps
**********************************************/
export interface SiteLinkingManagerProps {

}

/*********************************************
* SiteLinkingManagerMethods
**********************************************/
export interface SiteLinkingManagerMethods {
	getSiteLinks<T=Microsoft.SharePoint.Portal.LinkedSitesListContract>(): IBaseExecution<T>;
	linkGroup<T=boolean>(groupId?: any): IBaseExecution<T>;
	unlinkGroup<T=boolean>(groupId?: any): IBaseExecution<T>;
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
* ISharePointHomeServiceContextBuilder
**********************************************/
export interface ISharePointHomeServiceContextBuilder extends SharePointHomeServiceContextBuilderProps,SharePointHomeServiceContextBuilderMethods,IBaseExecution<SharePointHomeServiceContextBuilder> {

}

/*********************************************
* SharePointHomeServiceContextBuilder
**********************************************/
export interface SharePointHomeServiceContextBuilder extends SharePointHomeServiceContextBuilderProps, SharePointHomeServiceContextBuilderMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceContextBuilderProps
**********************************************/
export interface SharePointHomeServiceContextBuilderProps {

}

/*********************************************
* SharePointHomeServiceContextBuilderMethods
**********************************************/
export interface SharePointHomeServiceContextBuilderMethods {
	context<T=Microsoft.SharePoint.Portal.SharePointHomeServiceContext>(): IBaseExecution<T>;
}

/*********************************************
* ISharePointHomeServiceContext
**********************************************/
export interface ISharePointHomeServiceContext extends SharePointHomeServiceContextProps,SharePointHomeServiceContextMethods,IBaseExecution<SharePointHomeServiceContext> {

}

/*********************************************
* SharePointHomeServiceContext
**********************************************/
export interface SharePointHomeServiceContext extends SharePointHomeServiceContextProps, SharePointHomeServiceContextMethods {
	CompanyPortalContext?: string;
	HomePageCache?: Microsoft.SharePoint.Portal.Home.SharePointHomeDataCacheCollection;
	HomePageContext?: Microsoft.SharePoint.Portal.Home.SharePointHomePageContext;
	Payload?: string;
	Urls?: Array<string>;
}

/*********************************************
* SharePointHomeServiceContextProps
**********************************************/
export interface SharePointHomeServiceContextProps {
	Token<T=SP.OAuth.TokenResponse>(): IBaseExecution<T>;
}

/*********************************************
* SharePointHomeServiceContextMethods
**********************************************/
export interface SharePointHomeServiceContextMethods {

}

/*********************************************
* ISPHubSitesUtility
**********************************************/
export interface ISPHubSitesUtility extends SPHubSitesUtilityProps,SPHubSitesUtilityMethods,IBaseExecution<SPHubSitesUtility> {

}

/*********************************************
* SPHubSitesUtility
**********************************************/
export interface SPHubSitesUtility extends SPHubSitesUtilityProps, SPHubSitesUtilityMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPHubSitesUtilityProps
**********************************************/
export interface SPHubSitesUtilityProps {

}

/*********************************************
* SPHubSitesUtilityMethods
**********************************************/
export interface SPHubSitesUtilityMethods {
	getHubSites<T=Array<SP.HubSite>>(): IBaseExecution<T>;
}

/*********************************************
* ISPSiteManager
**********************************************/
export interface ISPSiteManager extends SPSiteManagerProps,SPSiteManagerMethods,IBaseExecution<SPSiteManager> {

}

/*********************************************
* SPSiteManager
**********************************************/
export interface SPSiteManager extends SPSiteManagerProps, SPSiteManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSiteManagerProps
**********************************************/
export interface SPSiteManagerProps {

}

/*********************************************
* SPSiteManagerMethods
**********************************************/
export interface SPSiteManagerMethods {
	canCreateHubJoinedSite<T=boolean>(hubSiteId?: any): IBaseExecution<T>;
	create<T=Microsoft.SharePoint.Portal.SPSiteCreationResponse>(request?: Microsoft.SharePoint.Portal.SPSiteCreationRequest): IBaseExecution<T>;
	delete<T=any>(siteId?: any): IBaseExecution<T>;
	status<T=Microsoft.SharePoint.Portal.SPSiteCreationResponse>(url?: string): IBaseExecution<T>;
}

/*********************************************
* MySiteRecommendations
**********************************************/
export interface MySiteRecommendations {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
