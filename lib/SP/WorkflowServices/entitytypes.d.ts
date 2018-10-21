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
* InteropService
**********************************************/
export interface InteropService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
