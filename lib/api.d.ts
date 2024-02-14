import { SP } from ".";
import { Microsoft } from ".";
import { MS } from ".";

/** SP */
export interface SP_API {
	Announcements: SP.Publishing.IAnnouncementsController;
	Apps: Microsoft.AppServices.IAppCollection;
	BrandCenter: SP.IBrandCenter;
	ComponentContextInfo: Microsoft.SharePoint.Internal.ClientSideComponent.ComponentContextInfo;
	ConsumerPermissions: Microsoft.SharePoint.Convergence.IConsumerPermissions;
	contextinfo: SP.ContextWebInformation;
	EE: SP.IEmployeeEngagement;
	EmployeeExperience: SP.IEmployeeExperienceController;
	files: MS.FileServices.FileSystemItemCollections;
	foldercoloring: SP.IFolderColoring;
	fontpackages: SP.FontPackageCollections;
	GroupService: Microsoft.SharePoint.Portal.IGroupService;
	groupsitemanager: Microsoft.SharePoint.Portal.IGroupSiteManager;
	hubsites: SP.HubSiteCollections;
	HubSitesUtility: Microsoft.SharePoint.Portal.ISPHubSitesUtility;
	KnowledgeHub: SP.IKnowledgeHub;
	lists: SP.ListCollections;
	machinelearning: Microsoft.Office.Server.ContentCenter.ISPMachineLearningHub;
	me: SP.RequestUserContext;
	microservicemanager: SP.MicroService.IMicroServiceManager;
	models: Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections;
	OrgNews: SP.IOrganizationNews;
	OrgNewsSite: Microsoft.SharePoint.OrgNewsSite.IOrgNewsSiteApi;
	outofboxfontpackages: SP.FontPackageCollections;
	PageDiagnostics: SP.Publishing.IPageDiagnosticsController;
	PortalLaunchWaves: SP.Publishing.PortalLaunch.IPortalLaunchWavesManager;
	PortalNavigationCache: SP.Publishing.Navigation.IPortalNavigationCacheWrapper;
	publications: Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections;
	site: SP.ISite;
	SiteIconManager: Microsoft.SharePoint.Portal.ISiteIconManager;
	sitelinkingmanager: Microsoft.SharePoint.Portal.ISiteLinkingManager;
	sphomeservice: Microsoft.SharePoint.Portal.ISharePointHomeServiceContextBuilder;
	SPHSite: SP.ISPHSite;
	spsitemanager: Microsoft.SharePoint.Portal.ISPSiteManager;
	StructuralNavigationCache: SP.Publishing.Navigation.IStructuralNavigationCacheWrapper;
	thememanager: SP.Utilities.IThemeManager;
	vivasitemanager: Microsoft.SharePoint.Portal.IVivaSiteManager;
	web: SP.IWeb;
	workitems: Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItemCollections;
}