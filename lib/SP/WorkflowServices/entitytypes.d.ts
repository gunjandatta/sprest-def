import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* IWorkflowDefinition
**********************************************/
export interface IWorkflowDefinition extends WorkflowDefinitionCollections,WorkflowDefinitionMethods,IBaseQuery<IWorkflowDefinitionQuery> {

}

/*********************************************
* IWorkflowDefinitionCollection
**********************************************/
export interface IWorkflowDefinitionCollection extends IBaseResults<WorkflowDefinition>, WorkflowDefinitionCollectionMethods {
	done(resolve: (value?: Array<WorkflowDefinition | any>) => void);
}

/*********************************************
* IWorkflowDefinitionQueryCollection
**********************************************/
export interface IWorkflowDefinitionQueryCollection extends IBaseResults<WorkflowDefinitionQuery>, WorkflowDefinitionCollectionMethods {
	done(resolve: (value?: Array<WorkflowDefinitionQuery | any>) => void);
}

/*********************************************
* IWorkflowDefinitionQuery
**********************************************/
export interface IWorkflowDefinitionQuery extends WorkflowDefinitionQuery, WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinition
**********************************************/
export interface WorkflowDefinition extends IBaseResult, WorkflowDefinitionProps, WorkflowDefinitionCollections, WorkflowDefinitionMethods {

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
export interface WorkflowDefinitionQuery extends IBaseResult, WorkflowDefinitionProps, WorkflowDefinitionMethods {

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
* IWorkflowDeploymentServiceCollection
**********************************************/
export interface IWorkflowDeploymentServiceCollection extends IBaseResults<WorkflowDeploymentService> {
	done(resolve: (value?: Array<WorkflowDeploymentService | any>) => void);
}

/*********************************************
* IWorkflowDeploymentServiceQueryCollection
**********************************************/
export interface IWorkflowDeploymentServiceQueryCollection extends IBaseResults<WorkflowDeploymentServiceQuery> {
	done(resolve: (value?: Array<WorkflowDeploymentServiceQuery | any>) => void);
}

/*********************************************
* IWorkflowDeploymentServiceQuery
**********************************************/
export interface IWorkflowDeploymentServiceQuery extends WorkflowDeploymentServiceQuery, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService extends IBaseResult, WorkflowDeploymentServiceProps, WorkflowDeploymentServiceCollections, WorkflowDeploymentServiceMethods {

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
export interface WorkflowDeploymentServiceQuery extends IBaseResult, WorkflowDeploymentServiceProps, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentServiceMethods
**********************************************/
export interface WorkflowDeploymentServiceMethods {
	deleteCollateral(workflowDefinitionId?: any, leafFileName?: string): IBaseExecution<any>;
	deleteDefinition(definitionId?: any): IBaseExecution<any>;
	deprecateDefinition(definitionId?: any): IBaseExecution<any>;
	enumerateDefinitions(publishedOnly?: boolean): IBaseCollection<SP.WorkflowServices.WorkflowDefinition> & SP.WorkflowServices.WorkflowDefinitionCollectionMethods;
	enumerateIntegratedApps(): IBaseCollection<SP.AppInstance>;
	getActivitySignatures(lastChanged?: any): IBaseCollection<SP.KeyValue>;
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
* IWorkflowInstanceServiceCollection
**********************************************/
export interface IWorkflowInstanceServiceCollection extends IBaseResults<WorkflowInstanceService> {
	done(resolve: (value?: Array<WorkflowInstanceService | any>) => void);
}

/*********************************************
* IWorkflowInstanceServiceQueryCollection
**********************************************/
export interface IWorkflowInstanceServiceQueryCollection extends IBaseResults<WorkflowInstanceServiceQuery> {
	done(resolve: (value?: Array<WorkflowInstanceServiceQuery | any>) => void);
}

/*********************************************
* IWorkflowInstanceServiceQuery
**********************************************/
export interface IWorkflowInstanceServiceQuery extends WorkflowInstanceServiceQuery, WorkflowInstanceServiceMethods {

}

/*********************************************
* WorkflowInstanceService
**********************************************/
export interface WorkflowInstanceService extends IBaseResult, WorkflowInstanceServiceProps, WorkflowInstanceServiceCollections, WorkflowInstanceServiceMethods {

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
	Current(): IBaseQuery<SP.WorkflowServices.WorkflowInstanceService, SP.WorkflowServices.WorkflowInstanceServiceQuery> & SP.WorkflowServices.WorkflowInstanceServiceCollections & SP.WorkflowServices.WorkflowInstanceServiceMethods;
}

/*********************************************
* WorkflowInstanceServiceCollections
**********************************************/
export interface WorkflowInstanceServiceCollections extends WorkflowInstanceServicePropMethods {

}

/*********************************************
* WorkflowInstanceServiceQuery
**********************************************/
export interface WorkflowInstanceServiceQuery extends IBaseResult, WorkflowInstanceServiceProps, WorkflowInstanceServiceMethods {
	Current: SP.WorkflowServices.WorkflowInstanceService & SP.WorkflowServices.WorkflowInstanceServiceCollections;
}

/*********************************************
* WorkflowInstanceServiceMethods
**********************************************/
export interface WorkflowInstanceServiceMethods {
	enumerateInstancesForListItem(listId?: any, itemId?: number): IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	enumerateInstancesForListItemWithOffset(listId?: any, itemId?: number, offset?: number): IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	enumerateInstancesForSite(): IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	enumerateInstancesForSiteWithOffset(offset?: number): IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	getInstance(instanceId?: any): IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
	startWorkflowOnListItemBySubscriptionId(subscriptionId?: any, itemId?: number, payload?: Array<SP.KeyValue>): IBaseExecution<any>;
}

/*********************************************
* IInteropService
**********************************************/
export interface IInteropService extends InteropServiceCollections,InteropServiceMethods,IBaseQuery<IInteropServiceQuery> {

}

/*********************************************
* IInteropServiceCollection
**********************************************/
export interface IInteropServiceCollection extends IBaseResults<InteropService> {
	done(resolve: (value?: Array<InteropService | any>) => void);
}

/*********************************************
* IInteropServiceQueryCollection
**********************************************/
export interface IInteropServiceQueryCollection extends IBaseResults<InteropServiceQuery> {
	done(resolve: (value?: Array<InteropServiceQuery | any>) => void);
}

/*********************************************
* IInteropServiceQuery
**********************************************/
export interface IInteropServiceQuery extends InteropServiceQuery, InteropServiceMethods {

}

/*********************************************
* InteropService
**********************************************/
export interface InteropService extends IBaseResult, InteropServiceProps, InteropServiceCollections, InteropServiceMethods {

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
	Current(): IBaseQuery<SP.WorkflowServices.InteropService, SP.WorkflowServices.InteropServiceQuery> & SP.WorkflowServices.InteropServiceCollections & SP.WorkflowServices.InteropServiceMethods;
}

/*********************************************
* InteropServiceCollections
**********************************************/
export interface InteropServiceCollections extends InteropServicePropMethods {

}

/*********************************************
* InteropServiceQuery
**********************************************/
export interface InteropServiceQuery extends IBaseResult, InteropServiceProps, InteropServiceMethods {
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
* IWorkflowServicesManagerCollection
**********************************************/
export interface IWorkflowServicesManagerCollection extends IBaseResults<WorkflowServicesManager> {
	done(resolve: (value?: Array<WorkflowServicesManager | any>) => void);
}

/*********************************************
* IWorkflowServicesManagerQueryCollection
**********************************************/
export interface IWorkflowServicesManagerQueryCollection extends IBaseResults<WorkflowServicesManagerQuery> {
	done(resolve: (value?: Array<WorkflowServicesManagerQuery | any>) => void);
}

/*********************************************
* IWorkflowServicesManagerQuery
**********************************************/
export interface IWorkflowServicesManagerQuery extends WorkflowServicesManagerQuery, WorkflowServicesManagerMethods {

}

/*********************************************
* WorkflowServicesManager
**********************************************/
export interface WorkflowServicesManager extends IBaseResult, WorkflowServicesManagerProps, WorkflowServicesManagerCollections, WorkflowServicesManagerMethods {

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
	Current(): IBaseQuery<SP.WorkflowServices.WorkflowServicesManager, SP.WorkflowServices.WorkflowServicesManagerQuery> & SP.WorkflowServices.WorkflowServicesManagerCollections & SP.WorkflowServices.WorkflowServicesManagerMethods;
}

/*********************************************
* WorkflowServicesManagerCollections
**********************************************/
export interface WorkflowServicesManagerCollections extends WorkflowServicesManagerPropMethods {

}

/*********************************************
* WorkflowServicesManagerQuery
**********************************************/
export interface WorkflowServicesManagerQuery extends IBaseResult, WorkflowServicesManagerProps, WorkflowServicesManagerMethods {
	Current: SP.WorkflowServices.WorkflowServicesManager & SP.WorkflowServices.WorkflowServicesManagerCollections;
}

/*********************************************
* WorkflowServicesManagerMethods
**********************************************/
export interface WorkflowServicesManagerMethods {
	getWorkflowDeploymentService(): IBaseExecution<SP.WorkflowServices.WorkflowDeploymentService>;
	getWorkflowInstanceService(): IBaseQuery<SP.WorkflowServices.WorkflowInstanceService, SP.WorkflowServices.WorkflowInstanceServiceQuery> & SP.WorkflowServices.WorkflowInstanceServiceCollections & SP.WorkflowServices.WorkflowInstanceServiceMethods;
	getWorkflowInteropService(): IBaseQuery<SP.WorkflowServices.InteropService, SP.WorkflowServices.InteropServiceQuery> & SP.WorkflowServices.InteropServiceCollections & SP.WorkflowServices.InteropServiceMethods;
	getWorkflowSubscriptionService(): IBaseQuery<SP.WorkflowServices.WorkflowSubscriptionService, SP.WorkflowServices.WorkflowSubscriptionServiceQuery> & SP.WorkflowServices.WorkflowSubscriptionServiceCollections & SP.WorkflowServices.WorkflowSubscriptionServiceMethods;
	isIntegratedApp(): IBaseExecution<boolean>;
}

/*********************************************
* IWorkflowSubscription
**********************************************/
export interface IWorkflowSubscription extends WorkflowSubscriptionCollections,WorkflowSubscriptionMethods,IBaseQuery<IWorkflowSubscriptionQuery> {

}

/*********************************************
* IWorkflowSubscriptionCollection
**********************************************/
export interface IWorkflowSubscriptionCollection extends IBaseResults<WorkflowSubscription>, WorkflowSubscriptionCollectionMethods {
	done(resolve: (value?: Array<WorkflowSubscription | any>) => void);
}

/*********************************************
* IWorkflowSubscriptionQueryCollection
**********************************************/
export interface IWorkflowSubscriptionQueryCollection extends IBaseResults<WorkflowSubscriptionQuery>, WorkflowSubscriptionCollectionMethods {
	done(resolve: (value?: Array<WorkflowSubscriptionQuery | any>) => void);
}

/*********************************************
* IWorkflowSubscriptionQuery
**********************************************/
export interface IWorkflowSubscriptionQuery extends WorkflowSubscriptionQuery, WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscription
**********************************************/
export interface WorkflowSubscription extends IBaseResult, WorkflowSubscriptionProps, WorkflowSubscriptionCollections, WorkflowSubscriptionMethods {

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
export interface WorkflowSubscriptionQuery extends IBaseResult, WorkflowSubscriptionProps, WorkflowSubscriptionMethods {

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
* IWorkflowSubscriptionServiceCollection
**********************************************/
export interface IWorkflowSubscriptionServiceCollection extends IBaseResults<WorkflowSubscriptionService> {
	done(resolve: (value?: Array<WorkflowSubscriptionService | any>) => void);
}

/*********************************************
* IWorkflowSubscriptionServiceQueryCollection
**********************************************/
export interface IWorkflowSubscriptionServiceQueryCollection extends IBaseResults<WorkflowSubscriptionServiceQuery> {
	done(resolve: (value?: Array<WorkflowSubscriptionServiceQuery | any>) => void);
}

/*********************************************
* IWorkflowSubscriptionServiceQuery
**********************************************/
export interface IWorkflowSubscriptionServiceQuery extends WorkflowSubscriptionServiceQuery, WorkflowSubscriptionServiceMethods {

}

/*********************************************
* WorkflowSubscriptionService
**********************************************/
export interface WorkflowSubscriptionService extends IBaseResult, WorkflowSubscriptionServiceProps, WorkflowSubscriptionServiceCollections, WorkflowSubscriptionServiceMethods {

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
	Current(): IBaseQuery<SP.WorkflowServices.WorkflowSubscriptionService, SP.WorkflowServices.WorkflowSubscriptionServiceQuery> & SP.WorkflowServices.WorkflowSubscriptionServiceCollections & SP.WorkflowServices.WorkflowSubscriptionServiceMethods;
}

/*********************************************
* WorkflowSubscriptionServiceCollections
**********************************************/
export interface WorkflowSubscriptionServiceCollections extends WorkflowSubscriptionServicePropMethods {

}

/*********************************************
* WorkflowSubscriptionServiceQuery
**********************************************/
export interface WorkflowSubscriptionServiceQuery extends IBaseResult, WorkflowSubscriptionServiceProps, WorkflowSubscriptionServiceMethods {
	Current: SP.WorkflowServices.WorkflowSubscriptionService & SP.WorkflowServices.WorkflowSubscriptionServiceCollections;
}

/*********************************************
* WorkflowSubscriptionServiceMethods
**********************************************/
export interface WorkflowSubscriptionServiceMethods {
	deleteSubscription(subscriptionId?: any): IBaseExecution<any>;
	enumerateSubscriptions(): IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByDefinition(definitionId?: any): IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByEventSource(eventSourceId?: any): IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByList(listId?: any): IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByListAndParentContentType(listId?: any, parentContentTypeId?: SP.ContentTypeId, includeNoContentTypeSpecified?: boolean): IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByListWithContentType(listId?: any, includeContentTypeSpecified?: boolean): IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
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
* IWorkflowMessagingServiceCollection
**********************************************/
export interface IWorkflowMessagingServiceCollection extends IBaseResults<WorkflowMessagingService> {
	done(resolve: (value?: Array<WorkflowMessagingService | any>) => void);
}

/*********************************************
* IWorkflowMessagingServiceQueryCollection
**********************************************/
export interface IWorkflowMessagingServiceQueryCollection extends IBaseResults<WorkflowMessagingServiceQuery> {
	done(resolve: (value?: Array<WorkflowMessagingServiceQuery | any>) => void);
}

/*********************************************
* IWorkflowMessagingServiceQuery
**********************************************/
export interface IWorkflowMessagingServiceQuery extends WorkflowMessagingServiceQuery, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService extends IBaseResult, WorkflowMessagingServiceProps, WorkflowMessagingServiceCollections, WorkflowMessagingServiceMethods {

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
export interface WorkflowMessagingServiceQuery extends IBaseResult, WorkflowMessagingServiceProps, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingServiceMethods
**********************************************/
export interface WorkflowMessagingServiceMethods {
	publishEvent(eventSourceId?: any, eventName?: string, payload?: Array<SP.KeyValue>): IBaseExecution<string>;
}
