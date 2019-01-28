import { SP } from "../../";

/*********************************************
* WorkflowDefinition
**********************************************/
export interface WorkflowDefinition {
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
* WorkflowDefinitionMethods
**********************************************/
export interface WorkflowDefinitionMethods {
	setProperty<T=void>(propertyName?: string, value?: string): T;
}

/*********************************************
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDeploymentServiceMethods
**********************************************/
export interface WorkflowDeploymentServiceMethods {
	deleteCollateral<T=void>(workflowDefinitionId?: any, leafFileName?: string): T;
	deleteDefinition<T=void>(definitionId?: any): T;
	deprecateDefinition<T=void>(definitionId?: any): T;
	enumerateDefinitions<T=Array<SP.WorkflowServices.WorkflowDefinition>>(publishedOnly?: boolean): T;
	enumerateIntegratedApps<T=Array<SP.AppInstance>>(): T;
	getActivitySignatures<T=Array<SP.KeyValue>>(lastChanged?: any): T;
	getCollateralUri<T=string>(workflowDefinitionId?: any, leafFileName?: string): T;
	getDefinition<T=SP.WorkflowServices.WorkflowDefinition>(definitionId?: any): T;
	isIntegratedApp<T=boolean>(): T;
	packageDefinition<T=string>(definitionId?: any, packageDefaultFilename?: string, packageTitle?: string, packageDescription?: string): T;
	publishDefinition<T=void>(definitionId?: any): T;
	saveCollateral<T=void>(workflowDefinitionId?: any, leafFileName?: string, fileContent?: any): T;
	validateActivity<T=string>(activityXaml?: string): T;
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
* WorkflowInstanceService
**********************************************/
export interface WorkflowInstanceService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowInstanceServiceCollections
**********************************************/
export interface WorkflowInstanceServiceCollections {
	Current<T=SP.WorkflowServices.WorkflowInstanceService>(): T;
}

/*********************************************
* WorkflowInstanceServiceQuery
**********************************************/
export interface WorkflowInstanceServiceQuery {
	Current<T=SP.WorkflowServices.WorkflowInstanceService>(): T;
}

/*********************************************
* WorkflowInstanceServiceMethods
**********************************************/
export interface WorkflowInstanceServiceMethods {
	enumerateInstancesForListItem<T=Array<SP.WorkflowServices.WorkflowInstance>>(listId?: any, itemId?: number): T;
	enumerateInstancesForListItemWithOffset<T=Array<SP.WorkflowServices.WorkflowInstance>>(listId?: any, itemId?: number, offset?: number): T;
	enumerateInstancesForSite<T=Array<SP.WorkflowServices.WorkflowInstance>>(): T;
	enumerateInstancesForSiteWithOffset<T=Array<SP.WorkflowServices.WorkflowInstance>>(offset?: number): T;
	getInstance<T=SP.WorkflowServices.WorkflowInstance>(instanceId?: any): T;
	startWorkflowOnListItemBySubscriptionId<T=any>(subscriptionId?: any, itemId?: number, payload?: Array<SP.KeyValue>): T;
}

/*********************************************
* InteropService
**********************************************/
export interface InteropService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* InteropServiceCollections
**********************************************/
export interface InteropServiceCollections {
	Current<T=SP.WorkflowServices.InteropService>(): T;
}

/*********************************************
* InteropServiceQuery
**********************************************/
export interface InteropServiceQuery {
	Current<T=SP.WorkflowServices.InteropService>(): T;
}

/*********************************************
* InteropServiceMethods
**********************************************/
export interface InteropServiceMethods {
	cancelWorkflow<T=void>(instanceId?: any): T;
	disableEvents<T=void>(listId?: any, itemGuid?: any): T;
	enableEvents<T=void>(listId?: any, itemGuid?: any): T;
	startWorkflow<T=any>(associationName?: string, correlationId?: any, listId?: any, itemGuid?: any, workflowParameters?: Array<SP.KeyValue>): T;
}

/*********************************************
* WorkflowServicesManager
**********************************************/
export interface WorkflowServicesManager {
	AppId?: string;
	IsConnected?: boolean;
	ScopePath?: string;
	ServiceHealthStatus?: number;
}

/*********************************************
* WorkflowServicesManagerCollections
**********************************************/
export interface WorkflowServicesManagerCollections {
	Current<T=SP.WorkflowServices.WorkflowServicesManager>(): T;
}

/*********************************************
* WorkflowServicesManagerQuery
**********************************************/
export interface WorkflowServicesManagerQuery {
	Current<T=SP.WorkflowServices.WorkflowServicesManager>(): T;
}

/*********************************************
* WorkflowServicesManagerMethods
**********************************************/
export interface WorkflowServicesManagerMethods {
	getWorkflowDeploymentService<T=SP.WorkflowServices.WorkflowDeploymentService>(): T;
	getWorkflowInstanceService<T=SP.WorkflowServices.WorkflowInstanceService>(): T;
	getWorkflowInteropService<T=SP.WorkflowServices.InteropService>(): T;
	getWorkflowSubscriptionService<T=SP.WorkflowServices.WorkflowSubscriptionService>(): T;
	isIntegratedApp<T=boolean>(): T;
}

/*********************************************
* WorkflowSubscription
**********************************************/
export interface WorkflowSubscription {
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
* WorkflowSubscriptionMethods
**********************************************/
export interface WorkflowSubscriptionMethods {
	getExternalVariable<T=string>(name?: string): T;
	setExternalVariable<T=void>(name?: string, value?: string): T;
	setProperty<T=void>(name?: string, value?: string): T;
}

/*********************************************
* WorkflowSubscriptionService
**********************************************/
export interface WorkflowSubscriptionService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowSubscriptionServiceCollections
**********************************************/
export interface WorkflowSubscriptionServiceCollections {
	Current<T=SP.WorkflowServices.WorkflowSubscriptionService>(): T;
}

/*********************************************
* WorkflowSubscriptionServiceQuery
**********************************************/
export interface WorkflowSubscriptionServiceQuery {
	Current<T=SP.WorkflowServices.WorkflowSubscriptionService>(): T;
}

/*********************************************
* WorkflowSubscriptionServiceMethods
**********************************************/
export interface WorkflowSubscriptionServiceMethods {
	deleteSubscription<T=void>(subscriptionId?: any): T;
	enumerateSubscriptions<T=Array<SP.WorkflowServices.WorkflowSubscription>>(): T;
	enumerateSubscriptionsByDefinition<T=Array<SP.WorkflowServices.WorkflowSubscription>>(definitionId?: any): T;
	enumerateSubscriptionsByEventSource<T=Array<SP.WorkflowServices.WorkflowSubscription>>(eventSourceId?: any): T;
	enumerateSubscriptionsByList<T=Array<SP.WorkflowServices.WorkflowSubscription>>(listId?: any): T;
	enumerateSubscriptionsByListAndParentContentType<T=Array<SP.WorkflowServices.WorkflowSubscription>>(listId?: any, parentContentTypeId?: SP.ContentTypeId, includeNoContentTypeSpecified?: boolean): T;
	enumerateSubscriptionsByListWithContentType<T=Array<SP.WorkflowServices.WorkflowSubscription>>(listId?: any, includeContentTypeSpecified?: boolean): T;
	getSubscription<T=SP.WorkflowServices.WorkflowSubscription>(subscriptionId?: any): T;
	registerInterestInHostWebList<T=void>(listId?: any, eventName?: string): T;
	registerInterestInList<T=void>(listId?: any, eventName?: string): T;
	unregisterInterestInHostWebList<T=void>(listId?: any, eventName?: string): T;
	unregisterInterestInList<T=void>(listId?: any, eventName?: string): T;
}

/*********************************************
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowMessagingServiceMethods
**********************************************/
export interface WorkflowMessagingServiceMethods {
	publishEvent<T=string>(eventSourceId?: any, eventName?: string, payload?: Array<SP.KeyValue>): T;
}
