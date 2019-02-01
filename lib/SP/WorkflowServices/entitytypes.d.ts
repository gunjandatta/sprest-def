import { IBaseExecution } from "../../";
import { SP } from "../../";
import { IBaseQuery } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";

/*********************************************
* IWorkflowDefinition
**********************************************/
export interface IWorkflowDefinition extends WorkflowDefinitionCollections,WorkflowDefinitionMethods,IBaseQuery<IWorkflowDefinitionQuery> {

}

/*********************************************
* IWorkflowDefinitionQuery
**********************************************/
export interface IWorkflowDefinitionQuery extends WorkflowDefinitionQuery, WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinition
**********************************************/
export interface WorkflowDefinition extends WorkflowDefinitionProps, WorkflowDefinitionCollections, WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinitionProps
**********************************************/
export interface WorkflowDefinitionProps {
	AssociationUrl?: string;
	Description?: string;
	DisplayName?: string;
	DraftVersion?: string;
	FormField?: string;
	Id?: any;
	InitiationUrl?: string;
	Properties?: Array<SP.KeyValue>;
	Published?: boolean;
	RequiresAssociationForm?: boolean;
	RequiresInitiationForm?: boolean;
	RestrictToScope?: string;
	RestrictToType?: string;
	Xaml?: string;
}

/*********************************************
* WorkflowDefinitionPropMethods
**********************************************/
export interface WorkflowDefinitionPropMethods {

}

/*********************************************
* WorkflowDefinitionCollections
**********************************************/
export interface WorkflowDefinitionCollections extends WorkflowDefinitionPropMethods {

}

/*********************************************
* WorkflowDefinitionCollectionMethods
**********************************************/
export interface WorkflowDefinitionCollectionMethods {
	sort(): IBaseExecution<any>;
}

/*********************************************
* WorkflowDefinitionQuery
**********************************************/
export interface WorkflowDefinitionQuery extends WorkflowDefinitionProps, WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinitionMethods
**********************************************/
export interface WorkflowDefinitionMethods {
	setProperty(propertyName?: string, value?: string): IBaseExecution<any>;
}

/*********************************************
* IWorkflowDeploymentService
**********************************************/
export interface IWorkflowDeploymentService extends WorkflowDeploymentServiceCollections,WorkflowDeploymentServiceMethods,IBaseQuery<IWorkflowDeploymentServiceQuery> {

}

/*********************************************
* IWorkflowDeploymentServiceQuery
**********************************************/
export interface IWorkflowDeploymentServiceQuery extends WorkflowDeploymentServiceQuery, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService extends WorkflowDeploymentServiceProps, WorkflowDeploymentServiceCollections, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentServiceProps
**********************************************/
export interface WorkflowDeploymentServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDeploymentServicePropMethods
**********************************************/
export interface WorkflowDeploymentServicePropMethods {

}

/*********************************************
* WorkflowDeploymentServiceCollections
**********************************************/
export interface WorkflowDeploymentServiceCollections extends WorkflowDeploymentServicePropMethods {

}

/*********************************************
* WorkflowDeploymentServiceQuery
**********************************************/
export interface WorkflowDeploymentServiceQuery extends WorkflowDeploymentServiceProps, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentServiceMethods
**********************************************/
export interface WorkflowDeploymentServiceMethods {
	deleteCollateral(workflowDefinitionId?: any, leafFileName?: string): IBaseExecution<any>;
	deleteDefinition(definitionId?: any): IBaseExecution<any>;
	deprecateDefinition(definitionId?: any): IBaseExecution<any>;
	enumerateDefinitions(publishedOnly?: boolean): IBaseExecution<Array<SP.WorkflowServices.WorkflowDefinition>>;
	enumerateIntegratedApps(): IBaseExecution<Array<SP.AppInstance>>;
	getActivitySignatures(lastChanged?: any): IBaseExecution<Array<SP.KeyValue>>;
	getCollateralUri(workflowDefinitionId?: any, leafFileName?: string): IBaseExecution<string>;
	getDefinition(definitionId?: any): IBaseExecution<SP.WorkflowServices.WorkflowDefinition>;
	isIntegratedApp(): IBaseExecution<boolean>;
	packageDefinition(definitionId?: any, packageDefaultFilename?: string, packageTitle?: string, packageDescription?: string): IBaseExecution<string>;
	publishDefinition(definitionId?: any): IBaseExecution<any>;
	saveCollateral(workflowDefinitionId?: any, leafFileName?: string, fileContent?: any): IBaseExecution<any>;
	validateActivity(activityXaml?: string): IBaseExecution<string>;
}

/*********************************************
* WorkflowInstance
**********************************************/
export interface WorkflowInstance {
	FaultInfo?: string;
	Id?: any;
	InstanceCreated?: any;
	LastUpdated?: any;
	Properties?: Array<SP.KeyValue>;
	Status?: number;
	UserStatus?: string;
	WorkflowSubscriptionId?: any;
}

/*********************************************
* WorkflowInstanceCollections
**********************************************/
export interface WorkflowInstanceCollections {

}

/*********************************************
* IWorkflowInstanceService
**********************************************/
export interface IWorkflowInstanceService extends WorkflowInstanceServiceCollections,WorkflowInstanceServiceMethods,IBaseQuery<IWorkflowInstanceServiceQuery> {

}

/*********************************************
* IWorkflowInstanceServiceQuery
**********************************************/
export interface IWorkflowInstanceServiceQuery extends WorkflowInstanceServiceQuery, WorkflowInstanceServiceMethods {

}

/*********************************************
* WorkflowInstanceService
**********************************************/
export interface WorkflowInstanceService extends WorkflowInstanceServiceProps, WorkflowInstanceServiceCollections, WorkflowInstanceServiceMethods {

}

/*********************************************
* WorkflowInstanceServiceProps
**********************************************/
export interface WorkflowInstanceServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowInstanceServicePropMethods
**********************************************/
export interface WorkflowInstanceServicePropMethods {
	Current(): IBaseExecution<SP.WorkflowServices.WorkflowInstanceService> & SP.WorkflowServices.WorkflowInstanceServiceCollections & SP.WorkflowServices.WorkflowInstanceServiceMethods;
}

/*********************************************
* WorkflowInstanceServiceCollections
**********************************************/
export interface WorkflowInstanceServiceCollections extends WorkflowInstanceServicePropMethods {

}

/*********************************************
* WorkflowInstanceServiceQuery
**********************************************/
export interface WorkflowInstanceServiceQuery extends WorkflowInstanceServiceProps, WorkflowInstanceServiceMethods {
	Current: SP.WorkflowServices.WorkflowInstanceService & SP.WorkflowServices.WorkflowInstanceServiceCollections;
}

/*********************************************
* WorkflowInstanceServiceMethods
**********************************************/
export interface WorkflowInstanceServiceMethods {
	enumerateInstancesForListItem(listId?: any, itemId?: number): IBaseExecution<Array<SP.WorkflowServices.WorkflowInstance>>;
	enumerateInstancesForListItemWithOffset(listId?: any, itemId?: number, offset?: number): IBaseExecution<Array<SP.WorkflowServices.WorkflowInstance>>;
	enumerateInstancesForSite(): IBaseExecution<Array<SP.WorkflowServices.WorkflowInstance>>;
	enumerateInstancesForSiteWithOffset(offset?: number): IBaseExecution<Array<SP.WorkflowServices.WorkflowInstance>>;
	getInstance(instanceId?: any): IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
	startWorkflowOnListItemBySubscriptionId(subscriptionId?: any, itemId?: number, payload?: Array<SP.KeyValue>): IBaseExecution<any>;
}

/*********************************************
* IInteropService
**********************************************/
export interface IInteropService extends InteropServiceCollections,InteropServiceMethods,IBaseQuery<IInteropServiceQuery> {

}

/*********************************************
* IInteropServiceQuery
**********************************************/
export interface IInteropServiceQuery extends InteropServiceQuery, InteropServiceMethods {

}

/*********************************************
* InteropService
**********************************************/
export interface InteropService extends InteropServiceProps, InteropServiceCollections, InteropServiceMethods {

}

/*********************************************
* InteropServiceProps
**********************************************/
export interface InteropServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* InteropServicePropMethods
**********************************************/
export interface InteropServicePropMethods {
	Current(): IBaseExecution<SP.WorkflowServices.InteropService> & SP.WorkflowServices.InteropServiceCollections & SP.WorkflowServices.InteropServiceMethods;
}

/*********************************************
* InteropServiceCollections
**********************************************/
export interface InteropServiceCollections extends InteropServicePropMethods {

}

/*********************************************
* InteropServiceQuery
**********************************************/
export interface InteropServiceQuery extends InteropServiceProps, InteropServiceMethods {
	Current: SP.WorkflowServices.InteropService & SP.WorkflowServices.InteropServiceCollections;
}

/*********************************************
* InteropServiceMethods
**********************************************/
export interface InteropServiceMethods {
	cancelWorkflow(instanceId?: any): IBaseExecution<any>;
	disableEvents(listId?: any, itemGuid?: any): IBaseExecution<any>;
	enableEvents(listId?: any, itemGuid?: any): IBaseExecution<any>;
	startWorkflow(associationName?: string, correlationId?: any, listId?: any, itemGuid?: any, workflowParameters?: Array<SP.KeyValue>): IBaseExecution<any>;
}

/*********************************************
* IWorkflowServicesManager
**********************************************/
export interface IWorkflowServicesManager extends WorkflowServicesManagerCollections,WorkflowServicesManagerMethods,IBaseQuery<IWorkflowServicesManagerQuery> {

}

/*********************************************
* IWorkflowServicesManagerQuery
**********************************************/
export interface IWorkflowServicesManagerQuery extends WorkflowServicesManagerQuery, WorkflowServicesManagerMethods {

}

/*********************************************
* WorkflowServicesManager
**********************************************/
export interface WorkflowServicesManager extends WorkflowServicesManagerProps, WorkflowServicesManagerCollections, WorkflowServicesManagerMethods {

}

/*********************************************
* WorkflowServicesManagerProps
**********************************************/
export interface WorkflowServicesManagerProps {
	AppId?: string;
	IsConnected?: boolean;
	ScopePath?: string;
	ServiceHealthStatus?: number;
}

/*********************************************
* WorkflowServicesManagerPropMethods
**********************************************/
export interface WorkflowServicesManagerPropMethods {
	Current(): IBaseExecution<SP.WorkflowServices.WorkflowServicesManager> & SP.WorkflowServices.WorkflowServicesManagerCollections & SP.WorkflowServices.WorkflowServicesManagerMethods;
}

/*********************************************
* WorkflowServicesManagerCollections
**********************************************/
export interface WorkflowServicesManagerCollections extends WorkflowServicesManagerPropMethods {

}

/*********************************************
* WorkflowServicesManagerQuery
**********************************************/
export interface WorkflowServicesManagerQuery extends WorkflowServicesManagerProps, WorkflowServicesManagerMethods {
	Current: SP.WorkflowServices.WorkflowServicesManager & SP.WorkflowServices.WorkflowServicesManagerCollections;
}

/*********************************************
* WorkflowServicesManagerMethods
**********************************************/
export interface WorkflowServicesManagerMethods {
	getWorkflowDeploymentService(): IBaseExecution<SP.WorkflowServices.WorkflowDeploymentService>;
	getWorkflowInstanceService(): IBaseExecution<SP.WorkflowServices.WorkflowInstanceService>;
	getWorkflowInteropService(): IBaseExecution<SP.WorkflowServices.InteropService>;
	getWorkflowSubscriptionService(): IBaseExecution<SP.WorkflowServices.WorkflowSubscriptionService>;
	isIntegratedApp(): IBaseExecution<boolean>;
}

/*********************************************
* IWorkflowSubscription
**********************************************/
export interface IWorkflowSubscription extends WorkflowSubscriptionCollections,WorkflowSubscriptionMethods,IBaseQuery<IWorkflowSubscriptionQuery> {

}

/*********************************************
* IWorkflowSubscriptionQuery
**********************************************/
export interface IWorkflowSubscriptionQuery extends WorkflowSubscriptionQuery, WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscription
**********************************************/
export interface WorkflowSubscription extends WorkflowSubscriptionProps, WorkflowSubscriptionCollections, WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscriptionProps
**********************************************/
export interface WorkflowSubscriptionProps {
	DefinitionId?: any;
	Enabled?: boolean;
	EventSourceId?: any;
	EventTypes?: Array<string>;
	Id?: any;
	ManualStartBypassesActivationLimit?: boolean;
	Name?: string;
	ParentContentTypeId?: string;
	PropertyDefinitions?: Array<SP.KeyValue>;
	StatusFieldName?: string;
}

/*********************************************
* WorkflowSubscriptionPropMethods
**********************************************/
export interface WorkflowSubscriptionPropMethods {

}

/*********************************************
* WorkflowSubscriptionCollections
**********************************************/
export interface WorkflowSubscriptionCollections extends WorkflowSubscriptionPropMethods {

}

/*********************************************
* WorkflowSubscriptionCollectionMethods
**********************************************/
export interface WorkflowSubscriptionCollectionMethods {
	sort(): IBaseExecution<any>;
}

/*********************************************
* WorkflowSubscriptionQuery
**********************************************/
export interface WorkflowSubscriptionQuery extends WorkflowSubscriptionProps, WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscriptionMethods
**********************************************/
export interface WorkflowSubscriptionMethods {
	getExternalVariable(name?: string): IBaseExecution<string>;
	setExternalVariable(name?: string, value?: string): IBaseExecution<any>;
	setProperty(name?: string, value?: string): IBaseExecution<any>;
}

/*********************************************
* IWorkflowSubscriptionService
**********************************************/
export interface IWorkflowSubscriptionService extends WorkflowSubscriptionServiceCollections,WorkflowSubscriptionServiceMethods,IBaseQuery<IWorkflowSubscriptionServiceQuery> {

}

/*********************************************
* IWorkflowSubscriptionServiceQuery
**********************************************/
export interface IWorkflowSubscriptionServiceQuery extends WorkflowSubscriptionServiceQuery, WorkflowSubscriptionServiceMethods {

}

/*********************************************
* WorkflowSubscriptionService
**********************************************/
export interface WorkflowSubscriptionService extends WorkflowSubscriptionServiceProps, WorkflowSubscriptionServiceCollections, WorkflowSubscriptionServiceMethods {

}

/*********************************************
* WorkflowSubscriptionServiceProps
**********************************************/
export interface WorkflowSubscriptionServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowSubscriptionServicePropMethods
**********************************************/
export interface WorkflowSubscriptionServicePropMethods {
	Current(): IBaseExecution<SP.WorkflowServices.WorkflowSubscriptionService> & SP.WorkflowServices.WorkflowSubscriptionServiceCollections & SP.WorkflowServices.WorkflowSubscriptionServiceMethods;
}

/*********************************************
* WorkflowSubscriptionServiceCollections
**********************************************/
export interface WorkflowSubscriptionServiceCollections extends WorkflowSubscriptionServicePropMethods {

}

/*********************************************
* WorkflowSubscriptionServiceQuery
**********************************************/
export interface WorkflowSubscriptionServiceQuery extends WorkflowSubscriptionServiceProps, WorkflowSubscriptionServiceMethods {
	Current: SP.WorkflowServices.WorkflowSubscriptionService & SP.WorkflowServices.WorkflowSubscriptionServiceCollections;
}

/*********************************************
* WorkflowSubscriptionServiceMethods
**********************************************/
export interface WorkflowSubscriptionServiceMethods {
	deleteSubscription(subscriptionId?: any): IBaseExecution<any>;
	enumerateSubscriptions(): IBaseExecution<Array<SP.WorkflowServices.WorkflowSubscription>>;
	enumerateSubscriptionsByDefinition(definitionId?: any): IBaseExecution<Array<SP.WorkflowServices.WorkflowSubscription>>;
	enumerateSubscriptionsByEventSource(eventSourceId?: any): IBaseExecution<Array<SP.WorkflowServices.WorkflowSubscription>>;
	enumerateSubscriptionsByList(listId?: any): IBaseExecution<Array<SP.WorkflowServices.WorkflowSubscription>>;
	enumerateSubscriptionsByListAndParentContentType(listId?: any, parentContentTypeId?: SP.ContentTypeId, includeNoContentTypeSpecified?: boolean): IBaseExecution<Array<SP.WorkflowServices.WorkflowSubscription>>;
	enumerateSubscriptionsByListWithContentType(listId?: any, includeContentTypeSpecified?: boolean): IBaseExecution<Array<SP.WorkflowServices.WorkflowSubscription>>;
	getSubscription(subscriptionId?: any): IBaseExecution<SP.WorkflowServices.WorkflowSubscription>;
	registerInterestInHostWebList(listId?: any, eventName?: string): IBaseExecution<any>;
	registerInterestInList(listId?: any, eventName?: string): IBaseExecution<any>;
	unregisterInterestInHostWebList(listId?: any, eventName?: string): IBaseExecution<any>;
	unregisterInterestInList(listId?: any, eventName?: string): IBaseExecution<any>;
}

/*********************************************
* IWorkflowMessagingService
**********************************************/
export interface IWorkflowMessagingService extends WorkflowMessagingServiceCollections,WorkflowMessagingServiceMethods,IBaseQuery<IWorkflowMessagingServiceQuery> {

}

/*********************************************
* IWorkflowMessagingServiceQuery
**********************************************/
export interface IWorkflowMessagingServiceQuery extends WorkflowMessagingServiceQuery, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService extends WorkflowMessagingServiceProps, WorkflowMessagingServiceCollections, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingServiceProps
**********************************************/
export interface WorkflowMessagingServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowMessagingServicePropMethods
**********************************************/
export interface WorkflowMessagingServicePropMethods {

}

/*********************************************
* WorkflowMessagingServiceCollections
**********************************************/
export interface WorkflowMessagingServiceCollections extends WorkflowMessagingServicePropMethods {

}

/*********************************************
* WorkflowMessagingServiceQuery
**********************************************/
export interface WorkflowMessagingServiceQuery extends WorkflowMessagingServiceProps, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingServiceMethods
**********************************************/
export interface WorkflowMessagingServiceMethods {
	publishEvent(eventSourceId?: any, eventName?: string, payload?: Array<SP.KeyValue>): IBaseExecution<string>;
}
