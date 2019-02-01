import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";
import { Microsoft } from "../../../";
import { IBaseCollection } from "../../../";
import { IBaseResults } from "../../../";
import { SP } from "../../../";

/*********************************************
* CollaborationMailbox
**********************************************/
export interface CollaborationMailbox {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CollaborationMailboxCollections
**********************************************/
export interface CollaborationMailboxCollections {

}

/*********************************************
* IGroupService
**********************************************/
export interface IGroupService extends GroupServiceCollections,GroupServiceMethods,IBaseQuery<IGroupServiceQuery> {

}

/*********************************************
* IGroupServiceQuery
**********************************************/
export interface IGroupServiceQuery extends GroupServiceQuery, GroupServiceMethods {

}

/*********************************************
* GroupService
**********************************************/
export interface GroupService extends GroupServiceProps, GroupServiceCollections, GroupServiceMethods {

}

/*********************************************
* GroupServiceProps
**********************************************/
export interface GroupServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupServicePropMethods
**********************************************/
export interface GroupServicePropMethods {

}

/*********************************************
* GroupServiceCollections
**********************************************/
export interface GroupServiceCollections extends GroupServicePropMethods {

}

/*********************************************
* GroupServiceQuery
**********************************************/
export interface GroupServiceQuery extends GroupServiceProps, GroupServiceMethods {

}

/*********************************************
* GroupServiceMethods
**********************************************/
export interface GroupServiceMethods {
	getGroupImage(id?: string, hash?: string, color?: string): IBaseExecution<any>;
	setGroupImage(imageStream?: any): IBaseExecution<any>;
	syncGroupProperties(): IBaseExecution<any>;
}

/*********************************************
* IGroupSiteManager
**********************************************/
export interface IGroupSiteManager extends GroupSiteManagerCollections,GroupSiteManagerMethods,IBaseQuery<IGroupSiteManagerQuery> {

}

/*********************************************
* IGroupSiteManagerQuery
**********************************************/
export interface IGroupSiteManagerQuery extends GroupSiteManagerQuery, GroupSiteManagerMethods {

}

/*********************************************
* GroupSiteManager
**********************************************/
export interface GroupSiteManager extends GroupSiteManagerProps, GroupSiteManagerCollections, GroupSiteManagerMethods {

}

/*********************************************
* GroupSiteManagerProps
**********************************************/
export interface GroupSiteManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupSiteManagerPropMethods
**********************************************/
export interface GroupSiteManagerPropMethods {

}

/*********************************************
* GroupSiteManagerCollections
**********************************************/
export interface GroupSiteManagerCollections extends GroupSiteManagerPropMethods {

}

/*********************************************
* GroupSiteManagerQuery
**********************************************/
export interface GroupSiteManagerQuery extends GroupSiteManagerProps, GroupSiteManagerMethods {

}

/*********************************************
* GroupSiteManagerMethods
**********************************************/
export interface GroupSiteManagerMethods {
	canUserCreateGroup(): IBaseExecution<boolean>;
	create(groupId?: any): IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	createGroup(displayName?: string, alias?: string, isPublic?: boolean, ownerPrincipalNames?: Array<string>, description?: string, creationOptions?: Array<string>): IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	createGroupEx(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	createGroupForSite(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	getGroupCreationContext(): IBaseExecution<Microsoft.SharePoint.Portal.GroupCreationContext>;
	getGroupSiteConversionData(): IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteConversionInfo>;
	getSiteStatus(groupId?: any): IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	getValidSiteUrlFromAlias(alias?: string, managedPath?: string, isTeamSite?: boolean): IBaseExecution<string>;
	notebook(groupId?: any): IBaseExecution<string>;
}

/*********************************************
* ISiteLinkingManager
**********************************************/
export interface ISiteLinkingManager extends SiteLinkingManagerCollections,SiteLinkingManagerMethods,IBaseQuery<ISiteLinkingManagerQuery> {

}

/*********************************************
* ISiteLinkingManagerQuery
**********************************************/
export interface ISiteLinkingManagerQuery extends SiteLinkingManagerQuery, SiteLinkingManagerMethods {

}

/*********************************************
* SiteLinkingManager
**********************************************/
export interface SiteLinkingManager extends SiteLinkingManagerProps, SiteLinkingManagerCollections, SiteLinkingManagerMethods {

}

/*********************************************
* SiteLinkingManagerProps
**********************************************/
export interface SiteLinkingManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteLinkingManagerPropMethods
**********************************************/
export interface SiteLinkingManagerPropMethods {

}

/*********************************************
* SiteLinkingManagerCollections
**********************************************/
export interface SiteLinkingManagerCollections extends SiteLinkingManagerPropMethods {

}

/*********************************************
* SiteLinkingManagerQuery
**********************************************/
export interface SiteLinkingManagerQuery extends SiteLinkingManagerProps, SiteLinkingManagerMethods {

}

/*********************************************
* SiteLinkingManagerMethods
**********************************************/
export interface SiteLinkingManagerMethods {
	getSiteLinks(): IBaseExecution<Microsoft.SharePoint.Portal.LinkedSitesListContract>;
	linkGroup(groupId?: any): IBaseExecution<boolean>;
	unlinkGroup(groupId?: any): IBaseExecution<boolean>;
}

/*********************************************
* CommunityModeration
**********************************************/
export interface CommunityModeration {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunityModerationCollections
**********************************************/
export interface CommunityModerationCollections {

}

/*********************************************
* SuiteNavData
**********************************************/
export interface SuiteNavData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SuiteNavDataCollections
**********************************************/
export interface SuiteNavDataCollections {

}

/*********************************************
* ISharePointHomeServiceContextBuilder
**********************************************/
export interface ISharePointHomeServiceContextBuilder extends SharePointHomeServiceContextBuilderCollections,SharePointHomeServiceContextBuilderMethods,IBaseQuery<ISharePointHomeServiceContextBuilderQuery> {

}

/*********************************************
* ISharePointHomeServiceContextBuilderQuery
**********************************************/
export interface ISharePointHomeServiceContextBuilderQuery extends SharePointHomeServiceContextBuilderQuery, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilder
**********************************************/
export interface SharePointHomeServiceContextBuilder extends SharePointHomeServiceContextBuilderProps, SharePointHomeServiceContextBuilderCollections, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderProps
**********************************************/
export interface SharePointHomeServiceContextBuilderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceContextBuilderPropMethods
**********************************************/
export interface SharePointHomeServiceContextBuilderPropMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderCollections
**********************************************/
export interface SharePointHomeServiceContextBuilderCollections extends SharePointHomeServiceContextBuilderPropMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderQuery
**********************************************/
export interface SharePointHomeServiceContextBuilderQuery extends SharePointHomeServiceContextBuilderProps, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderMethods
**********************************************/
export interface SharePointHomeServiceContextBuilderMethods {
	context(): IBaseExecution<Microsoft.SharePoint.Portal.SharePointHomeServiceContext>;
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

}

/*********************************************
* SharePointHomeServiceContextQuery
**********************************************/
export interface SharePointHomeServiceContextQuery extends SharePointHomeServiceContext {
	Token: SP.OAuth.TokenResponse & SP.OAuth.TokenResponseCollections;
}

/*********************************************
* ISPHubSitesUtility
**********************************************/
export interface ISPHubSitesUtility extends SPHubSitesUtilityCollections,SPHubSitesUtilityMethods,IBaseQuery<ISPHubSitesUtilityQuery> {

}

/*********************************************
* ISPHubSitesUtilityQuery
**********************************************/
export interface ISPHubSitesUtilityQuery extends SPHubSitesUtilityQuery, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtility
**********************************************/
export interface SPHubSitesUtility extends SPHubSitesUtilityProps, SPHubSitesUtilityCollections, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtilityProps
**********************************************/
export interface SPHubSitesUtilityProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPHubSitesUtilityPropMethods
**********************************************/
export interface SPHubSitesUtilityPropMethods {

}

/*********************************************
* SPHubSitesUtilityCollections
**********************************************/
export interface SPHubSitesUtilityCollections extends SPHubSitesUtilityPropMethods {

}

/*********************************************
* SPHubSitesUtilityQuery
**********************************************/
export interface SPHubSitesUtilityQuery extends SPHubSitesUtilityProps, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtilityMethods
**********************************************/
export interface SPHubSitesUtilityMethods {
	getHubSites(): IBaseExecution<Array<SP.HubSite>>;
}

/*********************************************
* ISPSiteManager
**********************************************/
export interface ISPSiteManager extends SPSiteManagerCollections,SPSiteManagerMethods,IBaseQuery<ISPSiteManagerQuery> {

}

/*********************************************
* ISPSiteManagerQuery
**********************************************/
export interface ISPSiteManagerQuery extends SPSiteManagerQuery, SPSiteManagerMethods {

}

/*********************************************
* SPSiteManager
**********************************************/
export interface SPSiteManager extends SPSiteManagerProps, SPSiteManagerCollections, SPSiteManagerMethods {

}

/*********************************************
* SPSiteManagerProps
**********************************************/
export interface SPSiteManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSiteManagerPropMethods
**********************************************/
export interface SPSiteManagerPropMethods {

}

/*********************************************
* SPSiteManagerCollections
**********************************************/
export interface SPSiteManagerCollections extends SPSiteManagerPropMethods {

}

/*********************************************
* SPSiteManagerQuery
**********************************************/
export interface SPSiteManagerQuery extends SPSiteManagerProps, SPSiteManagerMethods {

}

/*********************************************
* SPSiteManagerMethods
**********************************************/
export interface SPSiteManagerMethods {
	canCreateHubJoinedSite(hubSiteId?: any): IBaseExecution<boolean>;
	create(request?: Microsoft.SharePoint.Portal.SPSiteCreationRequest): IBaseExecution<Microsoft.SharePoint.Portal.SPSiteCreationResponse>;
	delete(siteId?: any): IBaseExecution<any>;
	status(url?: string): IBaseExecution<Microsoft.SharePoint.Portal.SPSiteCreationResponse>;
}

/*********************************************
* MySiteRecommendations
**********************************************/
export interface MySiteRecommendations {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MySiteRecommendationsCollections
**********************************************/
export interface MySiteRecommendationsCollections {

}
