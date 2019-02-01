import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ISubscription
**********************************************/
export interface ISubscription extends SubscriptionCollections,SubscriptionMethods,IBaseQuery<ISubscriptionQuery> {

}

/*********************************************
* ISubscriptionQuery
**********************************************/
export interface ISubscriptionQuery extends SubscriptionQuery, SubscriptionMethods {

}

/*********************************************
* Subscription
**********************************************/
export interface Subscription extends SubscriptionProps, SubscriptionCollections, SubscriptionMethods {

}

/*********************************************
* SubscriptionProps
**********************************************/
export interface SubscriptionProps {
	clientState?: string;
	expirationDateTime?: any;
	id?: any;
	notificationUrl?: string;
	resource?: string;
	resourceData?: string;
}

/*********************************************
* SubscriptionPropMethods
**********************************************/
export interface SubscriptionPropMethods {

}

/*********************************************
* SubscriptionCollections
**********************************************/
export interface SubscriptionCollections extends SubscriptionPropMethods {

}

/*********************************************
* SubscriptionCollectionMethods
**********************************************/
export interface SubscriptionCollectionMethods {
	add(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): IBaseExecution<Microsoft.SharePoint.Webhooks.Subscription>;
	getById(id?: any): IBaseQuery<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionMethods;
	remove(subscriptionId?: any): IBaseExecution<any>;
}

/*********************************************
* SubscriptionQuery
**********************************************/
export interface SubscriptionQuery extends SubscriptionProps, SubscriptionMethods {

}

/*********************************************
* SubscriptionMethods
**********************************************/
export interface SubscriptionMethods {
	delete(): IBaseExecution<any>;
	update(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): IBaseExecution<any>;
}
