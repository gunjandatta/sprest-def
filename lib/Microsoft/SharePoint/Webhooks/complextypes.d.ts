import { Base } from "../../../";

/*********************************************
* SubscriptionInformation
**********************************************/
export interface SubscriptionInformation {
	clientState?: string;
	expirationDateTime?: any;
	notificationUrl?: string;
	resource?: string;
	resourceData?: string;
	scenarios?: { results: Array<string> };
}

/*********************************************
* SubscriptionInformationCollections
**********************************************/
export interface SubscriptionInformationCollections {

}
