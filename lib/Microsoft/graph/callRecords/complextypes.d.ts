import { Base } from "../../../";
import { microsoft } from "../../../";
import { graph } from "../../";

/*********************************************
* userAgent
**********************************************/
export interface userAgent {
	applicationVersion?: string;
	headerValue?: string;
}

/*********************************************
* userAgentCollections
**********************************************/
export interface userAgentCollections {

}

/*********************************************
* clientUserAgent
**********************************************/
export interface clientUserAgent {
	platform?: microsoft.graph.clientPlatform;
	productFamily?: microsoft.graph.productFamily;
}

/*********************************************
* clientUserAgentCollections
**********************************************/
export interface clientUserAgentCollections {

}

/*********************************************
* deviceInfo
**********************************************/
export interface deviceInfo {
	captureDeviceDriver?: string;
	captureDeviceName?: string;
	captureNotFunctioningEventRatio?: any;
	cpuInsufficentEventRatio?: any;
	deviceClippingEventRatio?: any;
	deviceGlitchEventRatio?: any;
	howlingEventCount?: number;
	initialSignalLevelRootMeanSquare?: any;
	lowSpeechLevelEventRatio?: any;
	lowSpeechToNoiseEventRatio?: any;
	micGlitchRate?: any;
	receivedNoiseLevel?: number;
	receivedSignalLevel?: number;
	renderDeviceDriver?: string;
	renderDeviceName?: string;
	renderMuteEventRatio?: any;
	renderNotFunctioningEventRatio?: any;
	renderZeroVolumeEventRatio?: any;
	sentNoiseLevel?: number;
	sentSignalLevel?: number;
	speakerGlitchRate?: any;
}

/*********************************************
* deviceInfoCollections
**********************************************/
export interface deviceInfoCollections {

}

/*********************************************
* directRoutingLogRow
**********************************************/
export interface directRoutingLogRow {
	calleeNumber?: string;
	callEndSubReason?: number;
	callerNumber?: string;
	callType?: string;
	correlationId?: string;
	duration?: number;
	endDateTime?: any;
	failureDateTime?: any;
	finalSipCode?: number;
	finalSipCodePhrase?: string;
	id?: string;
	inviteDateTime?: any;
	mediaBypassEnabled?: boolean;
	mediaPathLocation?: string;
	signalingLocation?: string;
	startDateTime?: any;
	successfulCall?: boolean;
	trunkFullyQualifiedDomainName?: string;
	userDisplayName?: string;
	userId?: string;
	userPrincipalName?: string;
}

/*********************************************
* directRoutingLogRowCollections
**********************************************/
export interface directRoutingLogRowCollections {

}

/*********************************************
* endpoint
**********************************************/
export interface endpoint {
	userAgent?: microsoft.graph.callRecords.userAgent;
}

/*********************************************
* endpointCollections
**********************************************/
export interface endpointCollections {

}

/*********************************************
* failureInfo
**********************************************/
export interface failureInfo {
	reason?: string;
	stage?: microsoft.graph.failureStage;
}

/*********************************************
* failureInfoCollections
**********************************************/
export interface failureInfoCollections {

}

/*********************************************
* feedbackTokenSet
**********************************************/
export interface feedbackTokenSet {

}

/*********************************************
* feedbackTokenSetCollections
**********************************************/
export interface feedbackTokenSetCollections {

}

/*********************************************
* media
**********************************************/
export interface media {
	calleeDevice?: microsoft.graph.callRecords.deviceInfo;
	calleeNetwork?: microsoft.graph.callRecords.networkInfo;
	callerDevice?: microsoft.graph.callRecords.deviceInfo;
	callerNetwork?: microsoft.graph.callRecords.networkInfo;
	label?: string;
	streams?: Array<microsoft.graph.callRecords.mediaStream>;
}

/*********************************************
* mediaCollections
**********************************************/
export interface mediaCollections {

}

/*********************************************
* networkInfo
**********************************************/
export interface networkInfo {
	bandwidthLowEventRatio?: any;
	basicServiceSetIdentifier?: string;
	connectionType?: microsoft.graph.networkConnectionType;
	delayEventRatio?: any;
	dnsSuffix?: string;
	ipAddress?: string;
	linkSpeed?: number;
	macAddress?: string;
	networkTransportProtocol?: microsoft.graph.networkTransportProtocol;
	port?: number;
	receivedQualityEventRatio?: any;
	reflexiveIPAddress?: string;
	relayIPAddress?: string;
	relayPort?: number;
	sentQualityEventRatio?: any;
	subnet?: string;
	traceRouteHops?: Array<microsoft.graph.callRecords.traceRouteHop>;
	wifiBand?: microsoft.graph.wifiBand;
	wifiBatteryCharge?: number;
	wifiChannel?: number;
	wifiMicrosoftDriver?: string;
	wifiMicrosoftDriverVersion?: string;
	wifiRadioType?: microsoft.graph.wifiRadioType;
	wifiSignalStrength?: number;
	wifiVendorDriver?: string;
	wifiVendorDriverVersion?: string;
}

/*********************************************
* networkInfoCollections
**********************************************/
export interface networkInfoCollections {

}

/*********************************************
* mediaStream
**********************************************/
export interface mediaStream {
	audioCodec?: microsoft.graph.audioCodec;
	averageAudioDegradation?: any;
	averageAudioNetworkJitter?: number;
	averageBandwidthEstimate?: number;
	averageJitter?: number;
	averagePacketLossRate?: any;
	averageRatioOfConcealedSamples?: any;
	averageReceivedFrameRate?: any;
	averageRoundTripTime?: number;
	averageVideoFrameLossPercentage?: any;
	averageVideoFrameRate?: any;
	averageVideoPacketLossRate?: any;
	endDateTime?: any;
	lowFrameRateRatio?: any;
	lowVideoProcessingCapabilityRatio?: any;
	maxAudioNetworkJitter?: number;
	maxJitter?: number;
	maxPacketLossRate?: any;
	maxRatioOfConcealedSamples?: any;
	maxRoundTripTime?: number;
	packetUtilization?: number;
	postForwardErrorCorrectionPacketLossRate?: any;
	startDateTime?: any;
	streamDirection?: microsoft.graph.mediaStreamDirection;
	streamId?: string;
	videoCodec?: microsoft.graph.videoCodec;
	wasMediaBypassed?: boolean;
}

/*********************************************
* mediaStreamCollections
**********************************************/
export interface mediaStreamCollections {

}

/*********************************************
* traceRouteHop
**********************************************/
export interface traceRouteHop {
	hopCount?: number;
	ipAddress?: string;
	roundTripTime?: number;
}

/*********************************************
* traceRouteHopCollections
**********************************************/
export interface traceRouteHopCollections {

}

/*********************************************
* participantEndpoint
**********************************************/
export interface participantEndpoint {
	feedback?: microsoft.graph.callRecords.userFeedback;
	identity?: graph.identitySet;
}

/*********************************************
* participantEndpointCollections
**********************************************/
export interface participantEndpointCollections {

}

/*********************************************
* userFeedback
**********************************************/
export interface userFeedback {
	rating?: microsoft.graph.userFeedbackRating;
	text?: string;
	tokens?: microsoft.graph.callRecords.feedbackTokenSet;
}

/*********************************************
* userFeedbackCollections
**********************************************/
export interface userFeedbackCollections {

}

/*********************************************
* pstnCallLogRow
**********************************************/
export interface pstnCallLogRow {
	callDurationSource?: microsoft.graph.pstnCallDurationSource;
	calleeNumber?: string;
	callerNumber?: string;
	callId?: string;
	callType?: string;
	charge?: number;
	conferenceId?: string;
	connectionCharge?: number;
	currency?: string;
	destinationContext?: string;
	destinationName?: string;
	duration?: number;
	endDateTime?: any;
	id?: string;
	inventoryType?: string;
	licenseCapability?: string;
	operator?: string;
	startDateTime?: any;
	tenantCountryCode?: string;
	usageCountryCode?: string;
	userDisplayName?: string;
	userId?: string;
	userPrincipalName?: string;
}

/*********************************************
* pstnCallLogRowCollections
**********************************************/
export interface pstnCallLogRowCollections {

}

/*********************************************
* serviceEndpoint
**********************************************/
export interface serviceEndpoint {

}

/*********************************************
* serviceEndpointCollections
**********************************************/
export interface serviceEndpointCollections {

}

/*********************************************
* serviceUserAgent
**********************************************/
export interface serviceUserAgent {
	role?: microsoft.graph.serviceRole;
}

/*********************************************
* serviceUserAgentCollections
**********************************************/
export interface serviceUserAgentCollections {

}
