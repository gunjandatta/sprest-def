import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CommentInformation
**********************************************/
export interface CommentInformation {
	contentAnchor?: Microsoft.SharePoint.Comments.ContentAnchor;
	mentions?: { results: Array<Microsoft.SharePoint.Comments.Client.Identity> };
	text?: string;
}

/*********************************************
* CommentInformationCollections
**********************************************/
export interface CommentInformationCollections {

}

/*********************************************
* ContentAnchor
**********************************************/
export interface ContentAnchor {
	timelineOffset?: any;
}

/*********************************************
* ContentAnchorCollections
**********************************************/
export interface ContentAnchorCollections {

}
