import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";
import { SP } from "../../../../../";

/*********************************************
* AdaptiveCardConfig
**********************************************/
export interface AdaptiveCardConfig {
	Data?: Microsoft.SharePoint.Administration.TenantAdmin.Copilot.BaseRawDataSources;
	FeatureName?: string;
}

/*********************************************
* AdaptiveCardConfigCollections
**********************************************/
export interface AdaptiveCardConfigCollections {

}

/*********************************************
* BaseRawDataSources
**********************************************/
export interface BaseRawDataSources {
	DisplayMessage?: string;
}

/*********************************************
* BaseRawDataSourcesCollections
**********************************************/
export interface BaseRawDataSourcesCollections {

}

/*********************************************
* CopilotTranspilerPayload
**********************************************/
export interface CopilotTranspilerPayload {
	StatementList?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.Copilot.TranspilerStatement> };
}

/*********************************************
* CopilotTranspilerPayloadCollections
**********************************************/
export interface CopilotTranspilerPayloadCollections {

}

/*********************************************
* TranspilerStatement
**********************************************/
export interface TranspilerStatement {
	Arguments?: { results: Array<SP.KeyValue> };
	Returns?: string;
	StatementName?: string;
}

/*********************************************
* TranspilerStatementCollections
**********************************************/
export interface TranspilerStatementCollections {

}

/*********************************************
* CopilotTranspilerResponse
**********************************************/
export interface CopilotTranspilerResponse {
	Data?: Microsoft.SharePoint.Administration.TenantAdmin.Copilot.TranspilerResponse;
	ErrorMessage?: string;
	IsEligible?: boolean;
}

/*********************************************
* CopilotTranspilerResponseCollections
**********************************************/
export interface CopilotTranspilerResponseCollections {

}

/*********************************************
* TranspilerResponse
**********************************************/
export interface TranspilerResponse {
	Config?: Microsoft.SharePoint.Administration.TenantAdmin.Copilot.AdaptiveCardConfig;
	SchemaVersion?: string;
}

/*********************************************
* TranspilerResponseCollections
**********************************************/
export interface TranspilerResponseCollections {

}
