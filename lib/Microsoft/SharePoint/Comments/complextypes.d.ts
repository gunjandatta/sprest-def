import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CommentInformation
**********************************************/
export interface CommentInformation {
	mentions?: { results: Array<Microsoft.SharePoint.Comments.Client.Identity> };
	text?: string;
}

/*********************************************
* CommentInformationCollections
**********************************************/
export interface CommentInformationCollections {

}
