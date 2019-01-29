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
* WorkflowDefinitionMethods<T = any>
**********************************************/
export interface WorkflowDefinitionMethods<T = any> {
	setProperty(propertyName?: string, value?: string): T;
}

/*********************************************
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDeploymentServiceMethods<T = any>
**********************************************/
export interface WorkflowDeploymentServiceMethods<T = any> {
	deleteCollateral(workflowDefinitionId?: any, leafFileName?: string): T;
	deleteDefinition(definitionId?: any): T;
	deprecateDefinition(definitionId?: any): T;
	enumerateDefinitions(publishedOnly?: boolean): T;
	enumerateIntegratedApps(): T;
	getActivitySignatures(lastChanged?: any): T;
	getCollateralUri(workflowDefinitionId?: any, leafFileName?: string): T;
	getDefinition(definitionId?: any): T;
	isIntegratedApp(): T;
	packageDefinition(definitionId?: any, packageDefaultFilename?: string, packageTitle?: string, packageDescription?: string): T;
	publishDefinition(definitionId?: any): T;
	saveCollateral(workflowDefinitionId?: any, leafFileName?: string, fileContent?: any): T;
	validateActivity(activityXaml?: string): T;
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
* WorkflowInstanceServiceCollections<T = any>
**********************************************/
export interface WorkflowInstanceServiceCollections<T = any> {
	Current(): T;
}

/*********************************************
* WorkflowInstanceServiceQuery<T = any>
**********************************************/
export interface WorkflowInstanceServiceQuery<T = any> {
	Current(): T;
}

/*********************************************
* WorkflowInstanceServiceMethods<T = any>
**********************************************/
export interface WorkflowInstanceServiceMethods<T = any> {
	enumerateInstancesForListItem(listId?: any, itemId?: number): T;
	enumerateInstancesForListItemWithOffset(listId?: any, itemId?: number, offset?: number): T;
	enumerateInstancesForSite(): T;
	enumerateInstancesForSiteWithOffset(offset?: number): T;
	getInstance(instanceId?: any): T;
	startWorkflowOnListItemBySubscriptionId(subscriptionId?: any, itemId?: number, payload?: Array<SP.KeyValue>): T;
}

/*********************************************
* InteropService
**********************************************/
export interface InteropService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* InteropServiceCollections<T = any>
**********************************************/
export interface InteropServiceCollections<T = any> {
	Current(): T;
}

/*********************************************
* InteropServiceQuery<T = any>
**********************************************/
export interface InteropServiceQuery<T = any> {
	Current(): T;
}

/*********************************************
* InteropServiceMethods<T = any>
**********************************************/
export interface InteropServiceMethods<T = any> {
	cancelWorkflow(instanceId?: any): T;
	disableEvents(listId?: any, itemGuid?: any): T;
	enableEvents(listId?: any, itemGuid?: any): T;
	startWorkflow(associationName?: string, correlationId?: any, listId?: any, itemGuid?: any, workflowParameters?: Array<SP.KeyValue>): T;
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
* WorkflowServicesManagerCollections<T = any>
**********************************************/
export interface WorkflowServicesManagerCollections<T = any> {
	Current(): T;
}

/*********************************************
* WorkflowServicesManagerQuery<T = any>
**********************************************/
export interface WorkflowServicesManagerQuery<T = any> {
	Current(): T;
}

/*********************************************
* WorkflowServicesManagerMethods<T = any>
**********************************************/
export interface WorkflowServicesManagerMethods<T = any> {
	getWorkflowDeploymentService(): T;
	getWorkflowInstanceService(): T;
	getWorkflowInteropService(): T;
	getWorkflowSubscriptionService(): T;
	isIntegratedApp(): T;
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
* WorkflowSubscriptionMethods<T = any>
**********************************************/
export interface WorkflowSubscriptionMethods<T = any> {
	getExternalVariable(name?: string): T;
	setExternalVariable(name?: string, value?: string): T;
	setProperty(name?: string, value?: string): T;
}

/*********************************************
* WorkflowSubscriptionService
**********************************************/
export interface WorkflowSubscriptionService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowSubscriptionServiceCollections<T = any>
**********************************************/
export interface WorkflowSubscriptionServiceCollections<T = any> {
	Current(): T;
}

/*********************************************
* WorkflowSubscriptionServiceQuery<T = any>
**********************************************/
export interface WorkflowSubscriptionServiceQuery<T = any> {
	Current(): T;
}

/*********************************************
* WorkflowSubscriptionServiceMethods<T = any>
**********************************************/
export interface WorkflowSubscriptionServiceMethods<T = any> {
	deleteSubscription(subscriptionId?: any): T;
	enumerateSubscriptions(): T;
	enumerateSubscriptionsByDefinition(definitionId?: any): T;
	enumerateSubscriptionsByEventSource(eventSourceId?: any): T;
	enumerateSubscriptionsByList(listId?: any): T;
	enumerateSubscriptionsByListAndParentContentType(listId?: any, parentContentTypeId?: SP.ContentTypeId, includeNoContentTypeSpecified?: boolean): T;
	enumerateSubscriptionsByListWithContentType(listId?: any, includeContentTypeSpecified?: boolean): T;
	getSubscription(subscriptionId?: any): T;
	registerInterestInHostWebList(listId?: any, eventName?: string): T;
	registerInterestInList(listId?: any, eventName?: string): T;
	unregisterInterestInHostWebList(listId?: any, eventName?: string): T;
	unregisterInterestInList(listId?: any, eventName?: string): T;
}

/*********************************************
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowMessagingServiceMethods<T = any>
**********************************************/
export interface WorkflowMessagingServiceMethods<T = any> {
	publishEvent(eventSourceId?: any, eventName?: string, payload?: Array<SP.KeyValue>): T;
}
