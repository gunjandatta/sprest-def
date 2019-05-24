import { Microsoft } from ".";
import { SP } from ".";
import { MS } from ".";

/** SP */
export interface SP_API {
	Apps: Microsoft.AppServices.IAppCollection;
	ComponentContextInfo: Microsoft.SharePoint.Internal.ClientSideComponent.ComponentContextInfo;
	contextinfo: SP.ContextWebInformation;
	files: MS.FileServices.FileSystemItemCollections;
	GroupService: Microsoft.SharePoint.Portal.IGroupService;
	groupsitemanager: Microsoft.SharePoint.Portal.IGroupSiteManager;
	hubsites: SP.HubSiteCollections;
	HubSitesUtility: Microsoft.SharePoint.Portal.ISPHubSitesUtility;
	lists: SP.ListCollections;
	me: SP.RequestUserContext;
	microservicemanager: SP.MicroService.IMicroServiceManager;
	OrgNews: SP.IOrganizationNews;
	OrgNewsSite: Microsoft.SharePoint.OrgNewsSite.IOrgNewsSiteApi;
	site: SP.ISite;
	sitelinkingmanager: Microsoft.SharePoint.Portal.ISiteLinkingManager;
	sphomeservice: Microsoft.SharePoint.Portal.ISharePointHomeServiceContextBuilder;
	SPHSite: SP.ISPHSite;
	spsitemanager: Microsoft.SharePoint.Portal.ISPSiteManager;
	thememanager: SP.Utilities.IThemeManager;
	web: SP.IWeb;
}