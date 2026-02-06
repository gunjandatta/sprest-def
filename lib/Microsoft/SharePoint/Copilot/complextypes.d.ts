import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CopilotFileCollectionQueryResult
**********************************************/
export interface CopilotFileCollectionQueryResult {
	Files?: { results: Array<Microsoft.SharePoint.Copilot.CopilotFileMetadata> };
	SkipToken?: string;
}

/*********************************************
* CopilotFileCollectionQueryResultCollections
**********************************************/
export interface CopilotFileCollectionQueryResultCollections {

}

/*********************************************
* CopilotFileMetadata
**********************************************/
export interface CopilotFileMetadata {
	ContainerUrl?: string;
	CreatedBy?: Microsoft.SharePoint.Copilot.UserIdentity;
	FileName?: string;
	FileUrl?: string;
	LastModifiedBy?: Microsoft.SharePoint.Copilot.UserIdentity;
	ListId?: any;
	ListItemId?: string;
	SiteId?: any;
	SitePath?: string;
	UniqueId?: any;
	UserRelationship?: Microsoft.SharePoint.Copilot.CopilotFileUserRelationship;
	WebId?: any;
}

/*********************************************
* CopilotFileMetadataCollections
**********************************************/
export interface CopilotFileMetadataCollections {

}

/*********************************************
* UserIdentity
**********************************************/
export interface UserIdentity {
	DisplayName?: string;
	Email?: string;
	LoginName?: string;
}

/*********************************************
* UserIdentityCollections
**********************************************/
export interface UserIdentityCollections {

}

/*********************************************
* CopilotFileUserRelationship
**********************************************/
export interface CopilotFileUserRelationship {
	LastAccessDateTime?: any;
}

/*********************************************
* CopilotFileUserRelationshipCollections
**********************************************/
export interface CopilotFileUserRelationshipCollections {

}

/*********************************************
* CopilotTransitiveSharingStatusInformation
**********************************************/
export interface CopilotTransitiveSharingStatusInformation {
	Items?: { results: Array<Microsoft.SharePoint.Copilot.CopilotTransitiveSharingStatusItem> };
}

/*********************************************
* CopilotTransitiveSharingStatusInformationCollections
**********************************************/
export interface CopilotTransitiveSharingStatusInformationCollections {

}

/*********************************************
* CopilotTransitiveSharingStatusItem
**********************************************/
export interface CopilotTransitiveSharingStatusItem {
	ListId?: any;
	SiteId?: any;
	Status?: number;
	UniqueId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* CopilotTransitiveSharingStatusItemCollections
**********************************************/
export interface CopilotTransitiveSharingStatusItemCollections {

}
