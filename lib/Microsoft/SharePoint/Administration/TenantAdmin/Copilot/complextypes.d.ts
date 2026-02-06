import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";
import { SP } from "../../../../../";

/*********************************************
* AdaptiveCardConfig
**********************************************/
export interface AdaptiveCardConfig {
	data?: Microsoft.SharePoint.Administration.TenantAdmin.Copilot.BaseRawDataSources;
	featureName?: string;
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
	Metadata?: Microsoft.SharePoint.Administration.TenantAdmin.Copilot.BaseMetadata;
}

/*********************************************
* BaseRawDataSourcesCollections
**********************************************/
export interface BaseRawDataSourcesCollections {

}

/*********************************************
* BaseMetadata
**********************************************/
export interface BaseMetadata {

}

/*********************************************
* BaseMetadataCollections
**********************************************/
export interface BaseMetadataCollections {

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
	data?: Microsoft.SharePoint.Administration.TenantAdmin.Copilot.TranspilerResponse;
	errorMessage?: string;
	isEligible?: boolean;
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
	config?: Microsoft.SharePoint.Administration.TenantAdmin.Copilot.AdaptiveCardConfig;
	schemaVersion?: string;
}

/*********************************************
* TranspilerResponseCollections
**********************************************/
export interface TranspilerResponseCollections {

}

/*********************************************
* ReportDetails
**********************************************/
export interface ReportDetails {
	Headers?: { results: Array<string> };
	ReportDownloadUrl?: string;
	ReportRows?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.Copilot.ReportRow> };
}

/*********************************************
* ReportDetailsCollections
**********************************************/
export interface ReportDetailsCollections {

}

/*********************************************
* ReportRow
**********************************************/
export interface ReportRow {
	Row?: { results: Array<string> };
}

/*********************************************
* ReportRowCollections
**********************************************/
export interface ReportRowCollections {

}

/*********************************************
* ReportMetadata
**********************************************/
export interface ReportMetadata {
	ReportMetadataDetails?: { results: Array<SP.KeyValue> };
}

/*********************************************
* ReportMetadataCollections
**********************************************/
export interface ReportMetadataCollections {

}
