import { Base } from "../../../";
import { graph } from "../../../";
import { microsoft } from "../../../";

/*********************************************
* callRecord
**********************************************/
export interface callRecord {
	endDateTime?: anyOffset;
	joinWebUrl?: string;
	lastModifiedDateTime?: anyOffset;
	modalities?: { results: Array<microsoft.graph.callRecords.modality> };
	organizer?: graph.identitySet;
	participants?: { results: Array<graph.identitySet> };
	startDateTime?: anyOffset;
	type?: microsoft.graph.callRecords.callType;
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
	endDateTime?: anyOffset;
	failureInfo?: microsoft.graph.callRecords.failureInfo;
	modalities?: { results: Array<microsoft.graph.callRecords.modality> };
	startDateTime?: anyOffset;
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
	endDateTime?: anyOffset;
	failureInfo?: microsoft.graph.callRecords.failureInfo;
	media?: { results: Array<microsoft.graph.callRecords.media> };
	startDateTime?: anyOffset;
}

/*********************************************
* segmentCollections
**********************************************/
export interface segmentCollections {

}
