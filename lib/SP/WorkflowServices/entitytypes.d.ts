import { SP } from "../../";
import { IBaseExecution } from "../../";
import { IBaseCollection } from "../../";

/*********************************************
* IWorkflowDefinition
**********************************************/
export interface IWorkflowDefinition extends WorkflowDefinitionProps,WorkflowDefinitionMethods,IBaseExecution<WorkflowDefinition> {

}

/*********************************************
* WorkflowDefinition
**********************************************/
export interface WorkflowDefinition extends WorkflowDefinitionProps, WorkflowDefinitionMethods {
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
* WorkflowDefinitionMethods
**********************************************/
export interface WorkflowDefinitionMethods {
	setProperty<T=any>(propertyName?: string, value?: string): IBaseExecution<T>;
}

/*********************************************
* IWorkflowDeploymentService
**********************************************/
export interface IWorkflowDeploymentService extends WorkflowDeploymentServiceProps,WorkflowDeploymentServiceMethods,IBaseExecution<WorkflowDeploymentService> {

}

/*********************************************
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService extends WorkflowDeploymentServiceProps, WorkflowDeploymentServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDeploymentServiceProps
**********************************************/
export interface WorkflowDeploymentServiceProps {

}

/*********************************************
* WorkflowDeploymentServiceMethods
**********************************************/
export interface WorkflowDeploymentServiceMethods {
	deleteCollateral<T=any>(workflowDefinitionId?: any, leafFileName?: string): IBaseExecution<T>;
	deleteDefinition<T=any>(definitionId?: any): IBaseExecution<T>;
	deprecateDefinition<T=any>(definitionId?: any): IBaseExecution<T>;
	enumerateDefinitions<T=Array<SP.WorkflowServices.WorkflowDefinition>>(publishedOnly?: boolean): IBaseExecution<T>;
	enumerateIntegratedApps<T=Array<SP.AppInstance>>(): IBaseExecution<T>;
	getActivitySignatures<T=Array<SP.KeyValue>>(lastChanged?: any): IBaseExecution<T>;
	getCollateralUri<T=string>(workflowDefinitionId?: any, leafFileName?: string): IBaseExecution<T>;
	getDefinition<T=SP.WorkflowServices.WorkflowDefinition>(definitionId?: any): IBaseExecution<T>;
	isIntegratedApp<T=boolean>(): IBaseExecution<T>;
	packageDefinition<T=string>(definitionId?: any, packageDefaultFilename?: string, packageTitle?: string, packageDescription?: string): IBaseExecution<T>;
	publishDefinition<T=any>(definitionId?: any): IBaseExecution<T>;
	saveCollateral<T=any>(workflowDefinitionId?: any, leafFileName?: string, fileContent?: any): IBaseExecution<T>;
	validateActivity<T=string>(activityXaml?: string): IBaseExecution<T>;
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
export interface IWorkflowInstanceService extends WorkflowInstanceServiceProps,WorkflowInstanceServiceMethods,IBaseExecution<WorkflowInstanceService> {

}

/*********************************************
* WorkflowInstanceService
**********************************************/
export interface WorkflowInstanceService extends WorkflowInstanceServiceProps, WorkflowInstanceServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowInstanceServiceProps
**********************************************/
export interface WorkflowInstanceServiceProps {
	Current<T=SP.WorkflowServices.WorkflowInstanceService>(): IBaseExecution<T>;
}

/*********************************************
* WorkflowInstanceServiceMethods
**********************************************/
export interface WorkflowInstanceServiceMethods {
	enumerateInstancesForListItem<T=Array<SP.WorkflowServices.WorkflowInstance>>(listId?: any, itemId?: number): IBaseExecution<T>;
	enumerateInstancesForListItemWithOffset<T=Array<SP.WorkflowServices.WorkflowInstance>>(listId?: any, itemId?: number, offset?: number): IBaseExecution<T>;
	enumerateInstancesForSite<T=Array<SP.WorkflowServices.WorkflowInstance>>(): IBaseExecution<T>;
	enumerateInstancesForSiteWithOffset<T=Array<SP.WorkflowServices.WorkflowInstance>>(offset?: number): IBaseExecution<T>;
	getInstance<T=SP.WorkflowServices.WorkflowInstance>(instanceId?: any): IBaseExecution<T>;
	startWorkflowOnListItemBySubscriptionId<T=any>(subscriptionId?: any, itemId?: number, payload?: Array<SP.KeyValue>): IBaseExecution<T>;
}

/*********************************************
* IInteropService
**********************************************/
export interface IInteropService extends InteropServiceProps,InteropServiceMethods,IBaseExecution<InteropService> {

}

/*********************************************
* InteropService
**********************************************/
export interface InteropService extends InteropServiceProps, InteropServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* InteropServiceProps
**********************************************/
export interface InteropServiceProps {
	Current<T=SP.WorkflowServices.InteropService>(): IBaseExecution<T>;
}

/*********************************************
* InteropServiceMethods
**********************************************/
export interface InteropServiceMethods {
	cancelWorkflow<T=any>(instanceId?: any): IBaseExecution<T>;
	disableEvents<T=any>(listId?: any, itemGuid?: any): IBaseExecution<T>;
	enableEvents<T=any>(listId?: any, itemGuid?: any): IBaseExecution<T>;
	startWorkflow<T=any>(associationName?: string, correlationId?: any, listId?: any, itemGuid?: any, workflowParameters?: Array<SP.KeyValue>): IBaseExecution<T>;
}

/*********************************************
* IWorkflowServicesManager
**********************************************/
export interface IWorkflowServicesManager extends WorkflowServicesManagerProps,WorkflowServicesManagerMethods,IBaseExecution<WorkflowServicesManager> {

}

/*********************************************
* WorkflowServicesManager
**********************************************/
export interface WorkflowServicesManager extends WorkflowServicesManagerProps, WorkflowServicesManagerMethods {
	AppId?: string;
	IsConnected?: boolean;
	ScopePath?: string;
	ServiceHealthStatus?: number;
}

/*********************************************
* WorkflowServicesManagerProps
**********************************************/
export interface WorkflowServicesManagerProps {
	Current<T=SP.WorkflowServices.WorkflowServicesManager>(): IBaseExecution<T>;
}

/*********************************************
* WorkflowServicesManagerMethods
**********************************************/
export interface WorkflowServicesManagerMethods {
	getWorkflowDeploymentService<T=SP.WorkflowServices.WorkflowDeploymentService>(): IBaseExecution<T>;
	getWorkflowInstanceService<T=SP.WorkflowServices.WorkflowInstanceService>(): IBaseExecution<T>;
	getWorkflowInteropService<T=SP.WorkflowServices.InteropService>(): IBaseExecution<T>;
	getWorkflowSubscriptionService<T=SP.WorkflowServices.WorkflowSubscriptionService>(): IBaseExecution<T>;
	isIntegratedApp<T=boolean>(): IBaseExecution<T>;
}

/*********************************************
* IWorkflowSubscription
**********************************************/
export interface IWorkflowSubscription extends WorkflowSubscriptionProps,WorkflowSubscriptionMethods,IBaseExecution<WorkflowSubscription> {

}

/*********************************************
* WorkflowSubscription
**********************************************/
export interface WorkflowSubscription extends WorkflowSubscriptionProps, WorkflowSubscriptionMethods {
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
* WorkflowSubscriptionMethods
**********************************************/
export interface WorkflowSubscriptionMethods {
	getExternalVariable<T=string>(name?: string): IBaseExecution<T>;
	setExternalVariable<T=any>(name?: string, value?: string): IBaseExecution<T>;
	setProperty<T=any>(name?: string, value?: string): IBaseExecution<T>;
}

/*********************************************
* IWorkflowSubscriptionService
**********************************************/
export interface IWorkflowSubscriptionService extends WorkflowSubscriptionServiceProps,WorkflowSubscriptionServiceMethods,IBaseExecution<WorkflowSubscriptionService> {

}

/*********************************************
* WorkflowSubscriptionService
**********************************************/
export interface WorkflowSubscriptionService extends WorkflowSubscriptionServiceProps, WorkflowSubscriptionServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowSubscriptionServiceProps
**********************************************/
export interface WorkflowSubscriptionServiceProps {
	Current<T=SP.WorkflowServices.WorkflowSubscriptionService>(): IBaseExecution<T>;
}

/*********************************************
* WorkflowSubscriptionServiceMethods
**********************************************/
export interface WorkflowSubscriptionServiceMethods {
	deleteSubscription<T=any>(subscriptionId?: any): IBaseExecution<T>;
	enumerateSubscriptions<T=Array<SP.WorkflowServices.WorkflowSubscription>>(): IBaseExecution<T>;
	enumerateSubscriptionsByDefinition<T=Array<SP.WorkflowServices.WorkflowSubscription>>(definitionId?: any): IBaseExecution<T>;
	enumerateSubscriptionsByEventSource<T=Array<SP.WorkflowServices.WorkflowSubscription>>(eventSourceId?: any): IBaseExecution<T>;
	enumerateSubscriptionsByList<T=Array<SP.WorkflowServices.WorkflowSubscription>>(listId?: any): IBaseExecution<T>;
	enumerateSubscriptionsByListAndParentContentType<T=Array<SP.WorkflowServices.WorkflowSubscription>>(listId?: any, parentContentTypeId?: SP.ContentTypeId, includeNoContentTypeSpecified?: boolean): IBaseExecution<T>;
	enumerateSubscriptionsByListWithContentType<T=Array<SP.WorkflowServices.WorkflowSubscription>>(listId?: any, includeContentTypeSpecified?: boolean): IBaseExecution<T>;
	getSubscription<T=SP.WorkflowServices.WorkflowSubscription>(subscriptionId?: any): IBaseExecution<T>;
	registerInterestInHostWebList<T=any>(listId?: any, eventName?: string): IBaseExecution<T>;
	registerInterestInList<T=any>(listId?: any, eventName?: string): IBaseExecution<T>;
	unregisterInterestInHostWebList<T=any>(listId?: any, eventName?: string): IBaseExecution<T>;
	unregisterInterestInList<T=any>(listId?: any, eventName?: string): IBaseExecution<T>;
}

/*********************************************
* IWorkflowMessagingService
**********************************************/
export interface IWorkflowMessagingService extends WorkflowMessagingServiceProps,WorkflowMessagingServiceMethods,IBaseExecution<WorkflowMessagingService> {

}

/*********************************************
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService extends WorkflowMessagingServiceProps, WorkflowMessagingServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowMessagingServiceProps
**********************************************/
export interface WorkflowMessagingServiceProps {

}

/*********************************************
* WorkflowMessagingServiceMethods
**********************************************/
export interface WorkflowMessagingServiceMethods {
	publishEvent<T=string>(eventSourceId?: any, eventName?: string, payload?: Array<SP.KeyValue>): IBaseExecution<T>;
}
