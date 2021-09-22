import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* SPAuthEvent
**********************************************/
export interface SPAuthEvent {
	EventData?: string;
	EventSource?: number;
	TenantId?: any;
}

/*********************************************
* SPAuthEventCollections
**********************************************/
export interface SPAuthEventCollections extends SPAuthEventCollectionMethods {

}

/*********************************************
* SPAuthEventCollectionMethods
**********************************************/
export interface SPAuthEventCollectionMethods {
	roleAssignmentMSGraphNotify(tenant?: string, action?: string, type?: string, resourcePayload?: Microsoft.SharePoint.AuthPolicy.Events.RoleAssignmentResourcePayload, id?: string, containerId?: string): Base.IBaseExecution<Microsoft.SharePoint.AuthPolicy.Events.SPAuthEvent>;
}
