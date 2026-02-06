import { Base } from "../../../../../";
import { SP } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* CampaignAssociation
**********************************************/
export interface CampaignAssociation {
	CampaignId?: number;
	PublicationId?: number;
}

/*********************************************
* CampaignAssociationCollections
**********************************************/
export interface CampaignAssociationCollections {

}

/*********************************************
* CampaignMetadata
**********************************************/
export interface CampaignMetadata {
	Color?: string;
	Description?: string;
	Logo?: string;
	Title?: string;
}

/*********************************************
* CampaignMetadataCollections
**********************************************/
export interface CampaignMetadataCollections {

}

/*********************************************
* PublicationMetadata
**********************************************/
export interface PublicationMetadata {
	AmplifiedChannels?: SP.Publishing.AmplifiedChannels;
	BannerImageUrl?: string;
	CanEdit?: boolean;
	CreationDate?: any;
	Id?: number;
	ModifiedDate?: any;
	SharePointIds?: Microsoft.SharePoint.Publishing.Campaigns.Models.SharePointIds;
	Status?: string;
	Title?: string;
	Url?: string;
}

/*********************************************
* PublicationMetadataCollections
**********************************************/
export interface PublicationMetadataCollections {

}

/*********************************************
* SharePointIds
**********************************************/
export interface SharePointIds {
	listId?: any;
	siteId?: any;
	uniqueId?: any;
	webId?: any;
}

/*********************************************
* SharePointIdsCollections
**********************************************/
export interface SharePointIdsCollections {

}
