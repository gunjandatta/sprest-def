import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* ISubscription
**********************************************/
export interface ISubscription extends SubscriptionCollections,SubscriptionMethods,IBaseQuery<ISubscriptionQuery> {

}

/*********************************************
* ISubscriptionQuery
**********************************************/
export interface ISubscriptionQuery extends SubscriptionQuery,SubscriptionMethods {

}

/*********************************************
* Subscription
**********************************************/
export interface Subscription extends SubscriptionCollections, SubscriptionMethods {
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
* SubscriptionCollections
**********************************************/
export interface SubscriptionCollections extends SubscriptionProps {

}

/*********************************************
* SubscriptionQuery
**********************************************/
export interface SubscriptionQuery extends SubscriptionProps {

}

/*********************************************
* SubscriptionMethods
**********************************************/
export interface SubscriptionMethods {
	delete(): IBaseExecution<any>;
	update(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): IBaseExecution<any>;
}
