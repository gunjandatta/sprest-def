import { Base } from "../../../";
import { graph } from "../../";
import { microsoft } from "../../../";

/*********************************************
* callRecord
**********************************************/
export interface callRecord {
	endDateTime?: any;
	joinWebUrl?: string;
	lastModifiedDateTime?: any;
	modalities?: { results: Array<microsoft.graph.callRecords.modality> };
	organizer?: graph.identitySet;
	participants?: { results: Array<graph.identitySet> };
	startDateTime?: any;
	type?: microsoft.graph.callType;
	version?: number;
}

/*********************************************
* callRecordCollections
**********************************************/
export interface callRecordCollections {

}

/*********************************************
* session
**********************************************/
export interface session {
	callee?: microsoft.graph.callRecords.endpoint;
	caller?: microsoft.graph.callRecords.endpoint;
	endDateTime?: any;
	failureInfo?: microsoft.graph.callRecords.failureInfo;
	modalities?: { results: Array<microsoft.graph.callRecords.modality> };
	startDateTime?: any;
}

/*********************************************
* sessionCollections
**********************************************/
export interface sessionCollections {

}

/*********************************************
* segment
**********************************************/
export interface segment {
	callee?: microsoft.graph.callRecords.endpoint;
	caller?: microsoft.graph.callRecords.endpoint;
	endDateTime?: any;
	failureInfo?: microsoft.graph.callRecords.failureInfo;
	media?: { results: Array<microsoft.graph.callRecords.media> };
	startDateTime?: any;
}

/*********************************************
* segmentCollections
**********************************************/
export interface segmentCollections {

}
