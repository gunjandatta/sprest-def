import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* JobEntityData
**********************************************/
export interface JobEntityData {
	Option?: number;
	Reserve?: string;
}

/*********************************************
* JobEntityDataCollections
**********************************************/
export interface JobEntityDataCollections {

}

/*********************************************
* IOnboardingServicesBeta
**********************************************/
export interface IOnboardingServicesBeta extends OnboardingServicesBetaCollections, OnboardingServicesBetaMethods, Base.IBaseQuery<OnboardingServicesBeta, IOnboardingServicesBetaQuery> {

}

/*********************************************
* IOnboardingServicesBetaCollection
**********************************************/
export interface IOnboardingServicesBetaCollection extends Base.IBaseResults<OnboardingServicesBeta> {
	done?: (resolve: (value?: Array<OnboardingServicesBeta>) => void) => void;
}

/*********************************************
* IOnboardingServicesBetaQueryCollection
**********************************************/
export interface IOnboardingServicesBetaQueryCollection extends Base.IBaseResults<OnboardingServicesBetaOData> {
	done?: (resolve: (value?: Array<OnboardingServicesBetaOData>) => void) => void;
}

/*********************************************
* IOnboardingServicesBetaQuery
**********************************************/
export interface IOnboardingServicesBetaQuery extends OnboardingServicesBetaOData, OnboardingServicesBetaMethods {

}

/*********************************************
* OnboardingServicesBeta
**********************************************/
export interface OnboardingServicesBeta extends Base.IBaseResult, OnboardingServicesBetaProps, OnboardingServicesBetaCollections, OnboardingServicesBetaMethods {

}

/*********************************************
* OnboardingServicesBetaProps
**********************************************/
export interface OnboardingServicesBetaProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OnboardingServicesBetaPropMethods
**********************************************/
export interface OnboardingServicesBetaPropMethods {

}

/*********************************************
* OnboardingServicesBetaCollections
**********************************************/
export interface OnboardingServicesBetaCollections extends OnboardingServicesBetaPropMethods {
	PrioritySiteRenameJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJobCollectionMethods;
	PrioritySiteRenameJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJobCollections;
	SiteRenameJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJobCollectionMethods;
	SiteRenameJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJobCollections;
	TenantRenameJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJobCollectionMethods;
	TenantRenameJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJobCollections;
}

/*********************************************
* OnboardingServicesBetaOData
**********************************************/
export interface OnboardingServicesBetaOData extends Base.IBaseResult, OnboardingServicesBetaProps, OnboardingServicesBetaMethods {
	PrioritySiteRenameJobs: Base.IBaseResults<Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJobCollectionMethods;
	SiteRenameJobs: Base.IBaseResults<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJobCollectionMethods;
	TenantRenameJobs: Base.IBaseResults<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJobCollectionMethods;
}

/*********************************************
* OnboardingServicesBetaMethods
**********************************************/
export interface OnboardingServicesBetaMethods {

}
