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
export interface IWorkflowDefinitionQuery extends WorkflowDefinitionQuery,WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinition
**********************************************/
export interface WorkflowDefinition extends WorkflowDefinitionCollections, WorkflowDefinitionMethods {
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
* WorkflowDefinitionProps
**********************************************/
export interface WorkflowDefinitionProps {

}

/*********************************************
* WorkflowDefinitionCollections
**********************************************/
export interface WorkflowDefinitionCollections extends WorkflowDefinitionProps {

}

/*********************************************
* WorkflowDefinitionQuery
**********************************************/
export interface WorkflowDefinitionQuery extends WorkflowDefinitionProps {

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
export interface IWorkflowDeploymentServiceQuery extends WorkflowDeploymentServiceQuery,WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService extends WorkflowDeploymentServiceCollections, WorkflowDeploymentServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDeploymentServiceProps
**********************************************/
export interface WorkflowDeploymentServiceProps {

}

/*********************************************
* WorkflowDeploymentServiceCollections
**********************************************/
export interface WorkflowDeploymentServiceCollections extends WorkflowDeploymentServiceProps {

}

/*********************************************
* WorkflowDeploymentServiceQuery
**********************************************/
export interface WorkflowDeploymentServiceQuery extends WorkflowDeploymentServiceProps {

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
* IWorkflowInstanceService
**********************************************/
export interface IWorkflowInstanceService extends WorkflowInstanceServiceCollections,WorkflowInstanceServiceMethods,IBaseQuery<IWorkflowInstanceServiceQuery> {

}

/*********************************************
* IWorkflowInstanceServiceQuery
**********************************************/
export interface IWorkflowInstanceServiceQuery extends WorkflowInstanceServiceQuery,WorkflowInstanceServiceMethods {

}

/*********************************************
* WorkflowInstanceService
**********************************************/
export interface WorkflowInstanceService extends WorkflowInstanceServiceCollections, WorkflowInstanceServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowInstanceServiceProps
**********************************************/
export interface WorkflowInstanceServiceProps {
	Current(): IBaseExecution<SP.WorkflowServices.WorkflowInstanceService>;
}

/*********************************************
* WorkflowInstanceServiceCollections
**********************************************/
export interface WorkflowInstanceServiceCollections extends WorkflowInstanceServiceProps {

}

/*********************************************
* WorkflowInstanceServiceQuery
**********************************************/
export interface WorkflowInstanceServiceQuery extends WorkflowInstanceServiceProps {

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
export interface IInteropServiceQuery extends InteropServiceQuery,InteropServiceMethods {

}

/*********************************************
* InteropService
**********************************************/
export interface InteropService extends InteropServiceCollections, InteropServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* InteropServiceProps
**********************************************/
export interface InteropServiceProps {
	Current(): IBaseExecution<SP.WorkflowServices.InteropService>;
}

/*********************************************
* InteropServiceCollections
**********************************************/
export interface InteropServiceCollections extends InteropServiceProps {

}

/*********************************************
* InteropServiceQuery
**********************************************/
export interface InteropServiceQuery extends InteropServiceProps {

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
export interface IWorkflowServicesManagerQuery extends WorkflowServicesManagerQuery,WorkflowServicesManagerMethods {

}

/*********************************************
* WorkflowServicesManager
**********************************************/
export interface WorkflowServicesManager extends WorkflowServicesManagerCollections, WorkflowServicesManagerMethods {
	AppId?: string;
	IsConnected?: boolean;
	ScopePath?: string;
	ServiceHealthStatus?: number;
}

/*********************************************
* WorkflowServicesManagerProps
**********************************************/
export interface WorkflowServicesManagerProps {
	Current(): IBaseExecution<SP.WorkflowServices.WorkflowServicesManager>;
}

/*********************************************
* WorkflowServicesManagerCollections
**********************************************/
export interface WorkflowServicesManagerCollections extends WorkflowServicesManagerProps {

}

/*********************************************
* WorkflowServicesManagerQuery
**********************************************/
export interface WorkflowServicesManagerQuery extends WorkflowServicesManagerProps {

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
export interface IWorkflowSubscriptionQuery extends WorkflowSubscriptionQuery,WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscription
**********************************************/
export interface WorkflowSubscription extends WorkflowSubscriptionCollections, WorkflowSubscriptionMethods {
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
* WorkflowSubscriptionProps
**********************************************/
export interface WorkflowSubscriptionProps {

}

/*********************************************
* WorkflowSubscriptionCollections
**********************************************/
export interface WorkflowSubscriptionCollections extends WorkflowSubscriptionProps {

}

/*********************************************
* WorkflowSubscriptionQuery
**********************************************/
export interface WorkflowSubscriptionQuery extends WorkflowSubscriptionProps {

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
export interface IWorkflowSubscriptionServiceQuery extends WorkflowSubscriptionServiceQuery,WorkflowSubscriptionServiceMethods {

}

/*********************************************
* WorkflowSubscriptionService
**********************************************/
export interface WorkflowSubscriptionService extends WorkflowSubscriptionServiceCollections, WorkflowSubscriptionServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowSubscriptionServiceProps
**********************************************/
export interface WorkflowSubscriptionServiceProps {
	Current(): IBaseExecution<SP.WorkflowServices.WorkflowSubscriptionService>;
}

/*********************************************
* WorkflowSubscriptionServiceCollections
**********************************************/
export interface WorkflowSubscriptionServiceCollections extends WorkflowSubscriptionServiceProps {

}

/*********************************************
* WorkflowSubscriptionServiceQuery
**********************************************/
export interface WorkflowSubscriptionServiceQuery extends WorkflowSubscriptionServiceProps {

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
export interface IWorkflowMessagingServiceQuery extends WorkflowMessagingServiceQuery,WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService extends WorkflowMessagingServiceCollections, WorkflowMessagingServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowMessagingServiceProps
**********************************************/
export interface WorkflowMessagingServiceProps {

}

/*********************************************
* WorkflowMessagingServiceCollections
**********************************************/
export interface WorkflowMessagingServiceCollections extends WorkflowMessagingServiceProps {

}

/*********************************************
* WorkflowMessagingServiceQuery
**********************************************/
export interface WorkflowMessagingServiceQuery extends WorkflowMessagingServiceProps {

}

/*********************************************
* WorkflowMessagingServiceMethods
**********************************************/
export interface WorkflowMessagingServiceMethods {
	publishEvent(eventSourceId?: any, eventName?: string, payload?: Array<SP.KeyValue>): IBaseExecution<string>;
}
