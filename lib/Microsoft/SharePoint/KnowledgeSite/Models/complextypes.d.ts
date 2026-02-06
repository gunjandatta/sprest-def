import { Base } from "../../../../";

/*********************************************
* DocumentPublishRequest
**********************************************/
export interface DocumentPublishRequest {
	publishReason?: string;
	sourceFileName?: string;
}

/*********************************************
* DocumentPublishRequestCollections
**********************************************/
export interface DocumentPublishRequestCollections {

}

/*********************************************
* DocumentPublishResponse
**********************************************/
export interface DocumentPublishResponse {
	documentUrl?: string;
	message?: string;
	publishedDate?: any;
}

/*********************************************
* DocumentPublishResponseCollections
**********************************************/
export interface DocumentPublishResponseCollections {

}

/*********************************************
* DocumentUnpublishRequest
**********************************************/
export interface DocumentUnpublishRequest {
	fileName?: string;
	unpublishReason?: string;
}

/*********************************************
* DocumentUnpublishRequestCollections
**********************************************/
export interface DocumentUnpublishRequestCollections {

}

/*********************************************
* DocumentUnpublishResponse
**********************************************/
export interface DocumentUnpublishResponse {
	documentUrl?: string;
	message?: string;
	unpublishedDate?: any;
}

/*********************************************
* DocumentUnpublishResponseCollections
**********************************************/
export interface DocumentUnpublishResponseCollections {

}
