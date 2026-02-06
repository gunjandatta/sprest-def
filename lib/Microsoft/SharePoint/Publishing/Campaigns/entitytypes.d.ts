import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ICampaign
**********************************************/
export interface ICampaign extends CampaignCollections, CampaignMethods, Base.IBaseQuery<Campaign, ICampaignQuery> {

}

/*********************************************
* ICampaignCollection
**********************************************/
export interface ICampaignCollection extends Base.IBaseResults<Campaign>, CampaignCollectionMethods {
	done?: (resolve: (value?: Array<Campaign>) => void) => void;
}

/*********************************************
* ICampaignQueryCollection
**********************************************/
export interface ICampaignQueryCollection extends Base.IBaseResults<CampaignOData>, CampaignCollectionMethods {
	done?: (resolve: (value?: Array<CampaignOData>) => void) => void;
}

/*********************************************
* ICampaignQuery
**********************************************/
export interface ICampaignQuery extends CampaignOData, CampaignMethods {

}

/*********************************************
* Campaign
**********************************************/
export interface Campaign extends Base.IBaseResult, CampaignProps, CampaignCollections, CampaignMethods {

}

/*********************************************
* CampaignProps
**********************************************/
export interface CampaignProps {
	color?: string;
	creationDate?: any;
	description?: string;
	id?: number;
	logo?: string;
	sharePointIds?: Microsoft.SharePoint.Publishing.Campaigns.Models.SharePointIds;
	status?: string;
	title?: string;
}

/*********************************************
* CampaignPropMethods
**********************************************/
export interface CampaignPropMethods {

}

/*********************************************
* CampaignCollections
**********************************************/
export interface CampaignCollections extends CampaignPropMethods {

}

/*********************************************
* CampaignCollectionMethods
**********************************************/
export interface CampaignCollectionMethods {
	create(metadata?: Microsoft.SharePoint.Publishing.Campaigns.Models.CampaignMetadata): Base.IBaseExecution<Microsoft.SharePoint.Publishing.Campaigns.Campaign>;
	getAll(offset?: number, limit?: number): Base.IBaseExecution<Array<Microsoft.SharePoint.Publishing.Campaigns.Campaign>>;
	getAssociationsByCampaignId(campaignId?: number): Base.IBaseExecution<Array<Microsoft.SharePoint.Publishing.Campaigns.Models.CampaignAssociation>>;
	getByAssociatedPublicationId(publicationId?: number): Base.IBaseQuery<Microsoft.SharePoint.Publishing.Campaigns.Campaign> & Microsoft.SharePoint.Publishing.Campaigns.CampaignCollections & Microsoft.SharePoint.Publishing.Campaigns.CampaignMethods;
	getById(id?: number): Base.IBaseQuery<Microsoft.SharePoint.Publishing.Campaigns.Campaign> & Microsoft.SharePoint.Publishing.Campaigns.CampaignCollections & Microsoft.SharePoint.Publishing.Campaigns.CampaignMethods;
	migrate(): Base.IBaseExecution<any>;
}

/*********************************************
* CampaignOData
**********************************************/
export interface CampaignOData extends Base.IBaseResult, CampaignProps, CampaignMethods {

}

/*********************************************
* CampaignMethods
**********************************************/
export interface CampaignMethods {
	associate(publicationId?: number): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	publications(offset?: number, limit?: number): Base.IBaseCollection<Microsoft.SharePoint.Publishing.Campaigns.Models.PublicationMetadata>;
	update(metadata?: Microsoft.SharePoint.Publishing.Campaigns.Models.CampaignMetadata): Base.IBaseExecution<any>;
}
