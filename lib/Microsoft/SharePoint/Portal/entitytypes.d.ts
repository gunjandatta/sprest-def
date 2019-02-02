import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
import { Microsoft } from "../../../";
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
export interface IGroupService extends GroupServiceCollections, GroupServiceMethods, IBaseQuery<IGroupServiceQuery> {

}

/*********************************************
* IGroupServiceCollection
**********************************************/
export interface IGroupServiceCollection extends IBaseResults<GroupService> {
	done?: (resolve: (value?: Array<GroupService>) => void) => void;
}

/*********************************************
* IGroupServiceQueryCollection
**********************************************/
export interface IGroupServiceQueryCollection extends IBaseResults<GroupServiceOData> {
	done?: (resolve: (value?: Array<GroupServiceOData>) => void) => void;
}

/*********************************************
* IGroupServiceQuery
**********************************************/
export interface IGroupServiceQuery extends GroupServiceOData, GroupServiceMethods {

}

/*********************************************
* GroupService
**********************************************/
export interface GroupService extends IBaseResult, GroupServiceProps, GroupServiceCollections, GroupServiceMethods {

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
* GroupServiceOData
**********************************************/
export interface GroupServiceOData extends IBaseResult, GroupServiceProps, GroupServiceMethods {

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
export interface IGroupSiteManager extends GroupSiteManagerCollections, GroupSiteManagerMethods, IBaseQuery<IGroupSiteManagerQuery> {

}

/*********************************************
* IGroupSiteManagerCollection
**********************************************/
export interface IGroupSiteManagerCollection extends IBaseResults<GroupSiteManager> {
	done?: (resolve: (value?: Array<GroupSiteManager>) => void) => void;
}

/*********************************************
* IGroupSiteManagerQueryCollection
**********************************************/
export interface IGroupSiteManagerQueryCollection extends IBaseResults<GroupSiteManagerOData> {
	done?: (resolve: (value?: Array<GroupSiteManagerOData>) => void) => void;
}

/*********************************************
* IGroupSiteManagerQuery
**********************************************/
export interface IGroupSiteManagerQuery extends GroupSiteManagerOData, GroupSiteManagerMethods {

}

/*********************************************
* GroupSiteManager
**********************************************/
export interface GroupSiteManager extends IBaseResult, GroupSiteManagerProps, GroupSiteManagerCollections, GroupSiteManagerMethods {

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
* GroupSiteManagerOData
**********************************************/
export interface GroupSiteManagerOData extends IBaseResult, GroupSiteManagerProps, GroupSiteManagerMethods {

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
export interface ISiteLinkingManager extends SiteLinkingManagerCollections, SiteLinkingManagerMethods, IBaseQuery<ISiteLinkingManagerQuery> {

}

/*********************************************
* ISiteLinkingManagerCollection
**********************************************/
export interface ISiteLinkingManagerCollection extends IBaseResults<SiteLinkingManager> {
	done?: (resolve: (value?: Array<SiteLinkingManager>) => void) => void;
}

/*********************************************
* ISiteLinkingManagerQueryCollection
**********************************************/
export interface ISiteLinkingManagerQueryCollection extends IBaseResults<SiteLinkingManagerOData> {
	done?: (resolve: (value?: Array<SiteLinkingManagerOData>) => void) => void;
}

/*********************************************
* ISiteLinkingManagerQuery
**********************************************/
export interface ISiteLinkingManagerQuery extends SiteLinkingManagerOData, SiteLinkingManagerMethods {

}

/*********************************************
* SiteLinkingManager
**********************************************/
export interface SiteLinkingManager extends IBaseResult, SiteLinkingManagerProps, SiteLinkingManagerCollections, SiteLinkingManagerMethods {

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
* SiteLinkingManagerOData
**********************************************/
export interface SiteLinkingManagerOData extends IBaseResult, SiteLinkingManagerProps, SiteLinkingManagerMethods {

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
export interface ISharePointHomeServiceContextBuilder extends SharePointHomeServiceContextBuilderCollections, SharePointHomeServiceContextBuilderMethods, IBaseQuery<ISharePointHomeServiceContextBuilderQuery> {

}

/*********************************************
* ISharePointHomeServiceContextBuilderCollection
**********************************************/
export interface ISharePointHomeServiceContextBuilderCollection extends IBaseResults<SharePointHomeServiceContextBuilder> {
	done?: (resolve: (value?: Array<SharePointHomeServiceContextBuilder>) => void) => void;
}

/*********************************************
* ISharePointHomeServiceContextBuilderQueryCollection
**********************************************/
export interface ISharePointHomeServiceContextBuilderQueryCollection extends IBaseResults<SharePointHomeServiceContextBuilderOData> {
	done?: (resolve: (value?: Array<SharePointHomeServiceContextBuilderOData>) => void) => void;
}

/*********************************************
* ISharePointHomeServiceContextBuilderQuery
**********************************************/
export interface ISharePointHomeServiceContextBuilderQuery extends SharePointHomeServiceContextBuilderOData, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilder
**********************************************/
export interface SharePointHomeServiceContextBuilder extends IBaseResult, SharePointHomeServiceContextBuilderProps, SharePointHomeServiceContextBuilderCollections, SharePointHomeServiceContextBuilderMethods {

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
* SharePointHomeServiceContextBuilderOData
**********************************************/
export interface SharePointHomeServiceContextBuilderOData extends IBaseResult, SharePointHomeServiceContextBuilderProps, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderMethods
**********************************************/
export interface SharePointHomeServiceContextBuilderMethods {
	context(): IBaseQuery<Microsoft.SharePoint.Portal.SharePointHomeServiceContext, Microsoft.SharePoint.Portal.SharePointHomeServiceContextOData> & Microsoft.SharePoint.Portal.SharePointHomeServiceContextCollections;
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
* SharePointHomeServiceContextOData
**********************************************/
export interface SharePointHomeServiceContextOData extends IBaseResult, SharePointHomeServiceContext {
	Token: SP.OAuth.TokenResponse & SP.OAuth.TokenResponseCollections;
}

/*********************************************
* ISPHubSitesUtility
**********************************************/
export interface ISPHubSitesUtility extends SPHubSitesUtilityCollections, SPHubSitesUtilityMethods, IBaseQuery<ISPHubSitesUtilityQuery> {

}

/*********************************************
* ISPHubSitesUtilityCollection
**********************************************/
export interface ISPHubSitesUtilityCollection extends IBaseResults<SPHubSitesUtility> {
	done?: (resolve: (value?: Array<SPHubSitesUtility>) => void) => void;
}

/*********************************************
* ISPHubSitesUtilityQueryCollection
**********************************************/
export interface ISPHubSitesUtilityQueryCollection extends IBaseResults<SPHubSitesUtilityOData> {
	done?: (resolve: (value?: Array<SPHubSitesUtilityOData>) => void) => void;
}

/*********************************************
* ISPHubSitesUtilityQuery
**********************************************/
export interface ISPHubSitesUtilityQuery extends SPHubSitesUtilityOData, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtility
**********************************************/
export interface SPHubSitesUtility extends IBaseResult, SPHubSitesUtilityProps, SPHubSitesUtilityCollections, SPHubSitesUtilityMethods {

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
* SPHubSitesUtilityOData
**********************************************/
export interface SPHubSitesUtilityOData extends IBaseResult, SPHubSitesUtilityProps, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtilityMethods
**********************************************/
export interface SPHubSitesUtilityMethods {
	getHubSites(): IBaseCollection<SP.HubSite> & SP.HubSiteCollectionMethods;
}

/*********************************************
* ISPSiteManager
**********************************************/
export interface ISPSiteManager extends SPSiteManagerCollections, SPSiteManagerMethods, IBaseQuery<ISPSiteManagerQuery> {

}

/*********************************************
* ISPSiteManagerCollection
**********************************************/
export interface ISPSiteManagerCollection extends IBaseResults<SPSiteManager> {
	done?: (resolve: (value?: Array<SPSiteManager>) => void) => void;
}

/*********************************************
* ISPSiteManagerQueryCollection
**********************************************/
export interface ISPSiteManagerQueryCollection extends IBaseResults<SPSiteManagerOData> {
	done?: (resolve: (value?: Array<SPSiteManagerOData>) => void) => void;
}

/*********************************************
* ISPSiteManagerQuery
**********************************************/
export interface ISPSiteManagerQuery extends SPSiteManagerOData, SPSiteManagerMethods {

}

/*********************************************
* SPSiteManager
**********************************************/
export interface SPSiteManager extends IBaseResult, SPSiteManagerProps, SPSiteManagerCollections, SPSiteManagerMethods {

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
* SPSiteManagerOData
**********************************************/
export interface SPSiteManagerOData extends IBaseResult, SPSiteManagerProps, SPSiteManagerMethods {

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
