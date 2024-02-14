import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* CampaignCommunicationEntity
**********************************************/
export interface CampaignCommunicationEntity {
	campaignId?: string;
	channels?: { results: Array<string> };
	communicationId?: string;
	createdBy?: Microsoft.SharePoint.Campaigns.CampaignUserInfo;
	lastEditedDateTime?: any;
	page?: string;
	publishingDateTime?: any;
	state?: string;
	title?: string;
}

/*********************************************
* CampaignCommunicationEntityCollections
**********************************************/
export interface CampaignCommunicationEntityCollections {

}

/*********************************************
* CampaignUserInfo
**********************************************/
export interface CampaignUserInfo {
	email?: string;
	id?: number;
	isExternal?: boolean;
	loginName?: string;
	name?: string;
	principalType?: number;
	userId?: SP.UserIdInfo;
	userPrincipalName?: string;
}

/*********************************************
* CampaignUserInfoCollections
**********************************************/
export interface CampaignUserInfoCollections {

}

/*********************************************
* CampaignEntity
**********************************************/
export interface CampaignEntity {
	campaignId?: string;
	channels?: { results: Array<string> };
	contributors?: { results: Array<Microsoft.SharePoint.Campaigns.CampaignUserInfo> };
	description?: string;
	endDate?: any;
	objectives?: { results: Array<string> };
	owner?: Microsoft.SharePoint.Campaigns.CampaignUserInfo;
	startDate?: any;
	status?: string;
	tags?: { results: Array<string> };
	title?: string;
}

/*********************************************
* CampaignEntityCollections
**********************************************/
export interface CampaignEntityCollections {

}

/*********************************************
* CampaignSummary
**********************************************/
export interface CampaignSummary {
	campaignId?: string;
	endDate?: any;
	owner?: Microsoft.SharePoint.Campaigns.CampaignUserInfo;
	startDate?: any;
	status?: string;
	tags?: { results: Array<string> };
	title?: string;
}

/*********************************************
* CampaignSummaryCollections
**********************************************/
export interface CampaignSummaryCollections {

}
