

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
* SubscriptionMethods
**********************************************/
export interface SubscriptionMethods {
	delete<T=void>(): T;
	update<T=void>(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): T;
}
