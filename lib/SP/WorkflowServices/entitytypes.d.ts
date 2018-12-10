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
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
