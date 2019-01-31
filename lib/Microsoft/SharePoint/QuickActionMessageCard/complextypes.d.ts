import { IBaseExecution } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* AutoInvokeAction
**********************************************/
export interface AutoInvokeAction {
	body?: string;
	headers?: Array<Microsoft.SharePoint.QuickActionMessageCard.Header>;
	hideCardOnInvoke?: string;
	target?: string;
	type?: string;
}

/*********************************************
* Header
**********************************************/
export interface Header {
	name?: string;
	value?: string;
}

/*********************************************
* AutoInvokeOptions
**********************************************/
export interface AutoInvokeOptions {
	showCardOnFailure?: string;
}

/*********************************************
* Choice
**********************************************/
export interface Choice {
	display?: string;
	value?: string;
}

/*********************************************
* HeroImage
**********************************************/
export interface HeroImage {
	image?: string;
}

/*********************************************
* MessageCardActionButton
**********************************************/
export interface MessageCardActionButton {
	body?: string;
	bodyContentType?: string;
	headers?: Array<Microsoft.SharePoint.QuickActionMessageCard.Header>;
	name?: string;
	target?: string;
	type?: string;
}

/*********************************************
* MessageCardInput
**********************************************/
export interface MessageCardInput {
	choices?: Array<Microsoft.SharePoint.QuickActionMessageCard.Choice>;
	id?: string;
	type?: string;
	value?: string;
}

/*********************************************
* MessageCard
**********************************************/
export interface MessageCard {
	autoInvokeAction?: Microsoft.SharePoint.QuickActionMessageCard.AutoInvokeAction;
	autoInvokeOptions?: Microsoft.SharePoint.QuickActionMessageCard.AutoInvokeOptions;
	context?: string;
	hideOriginalBody?: string;
	originator?: string;
	potentialAction?: Array<Microsoft.SharePoint.QuickActionMessageCard.PotentialAction>;
	sections?: Array<Microsoft.SharePoint.QuickActionMessageCard.Section>;
	text?: string;
	themeColor?: string;
	title?: string;
	type?: string;
}

/*********************************************
* PotentialAction
**********************************************/
export interface PotentialAction {
	actions?: Array<Microsoft.SharePoint.QuickActionMessageCard.MessageCardActionButton>;
	inputs?: Array<Microsoft.SharePoint.QuickActionMessageCard.MessageCardInput>;
	type?: string;
}

/*********************************************
* Section
**********************************************/
export interface Section {
	activityImage?: string;
	activityImageStyle?: string;
	activityText?: string;
	activityTitle?: string;
	heroImage?: Microsoft.SharePoint.QuickActionMessageCard.HeroImage;
	startGroup?: boolean;
	text?: string;
}

/*********************************************
* SPAccessRequestRefreshStatusBody
**********************************************/
export interface SPAccessRequestRefreshStatusBody {
	refreshStatus?: Microsoft.SharePoint.QuickActionMessageCard.SPAccessRequestRefreshStatus;
}

/*********************************************
* SPAccessRequestRefreshStatus
**********************************************/
export interface SPAccessRequestRefreshStatus {
	hasprofilepicture?: boolean;
	isAutoInvoke?: boolean;
	roletype?: string;
	signature?: string;
	status?: number;
	uniqueId?: string;
}
