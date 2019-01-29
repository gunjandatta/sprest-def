import { Microsoft } from "../../../";

/*********************************************
* Subscription
**********************************************/
export interface Subscription {
	clientState?: string;
	expirationDateTime?: any;
	id?: any;
	notificationUrl?: string;
	resource?: string;
	resourceData?: string;
}

/*********************************************
* SubscriptionMethods<T = any>
**********************************************/
export interface SubscriptionMethods<T = any> {
	delete(): T;
	update(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): T;
}
