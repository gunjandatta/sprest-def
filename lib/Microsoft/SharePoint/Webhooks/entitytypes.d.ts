import { IBaseExecution } from "../../../";

/*********************************************
* ISubscription
**********************************************/
export interface ISubscription extends SubscriptionProps,SubscriptionMethods,IBaseExecution<Subscription> {

}

/*********************************************
* Subscription
**********************************************/
export interface Subscription extends SubscriptionProps, SubscriptionMethods {
	clientState?: string;
	expirationDateTime?: any;
	id?: any;
	notificationUrl?: string;
	resource?: string;
	resourceData?: string;
}

/*********************************************
* SubscriptionProps
**********************************************/
export interface SubscriptionProps {

}

/*********************************************
* SubscriptionMethods
**********************************************/
export interface SubscriptionMethods {
	delete<T=any>(): IBaseExecution<T>;
	update<T=any>(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): IBaseExecution<T>;
}
