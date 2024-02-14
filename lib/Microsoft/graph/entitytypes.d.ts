import { IBaseExecution } from "../../base";
import * as ComplexTypes from "./complexTypes.d";
import * as EnumTypes from "./enumTypes.d";

/*********************************************
* drive
**********************************************/
export interface drive  {
	id: string;
	driveType: string;
	owner: ComplexTypes.identitySet;
	quota: ComplexTypes.quota;
	sharePointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.system;
	activities: () => IBaseExecution<activityEntity[]>;
	activitycounts: () => IBaseExecution<itemActivityStatEntity[]>;
	apps: () => IBaseExecution<driveApp[]>;
	commands: () => IBaseExecution<ComplexTypes.command[]>;
	items: () => IBaseExecution<item[]>;
	list: () => IBaseExecution<list>;
	special: () => IBaseExecution<item[]>;
	trackedItems: () => IBaseExecution<item[]>;
}
/*********************************************
* share
**********************************************/
export interface share  {
	id: string;
	name: string;
	driveItem: () => IBaseExecution<item>;
	list: () => IBaseExecution<list>;
	listItem: () => IBaseExecution<listItem>;
	root: () => IBaseExecution<item>;
	site: () => IBaseExecution<site>;
}
/*********************************************
* item
**********************************************/
export interface item  {
	content: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	cTag: string;
	description: string;
	eTag: string;
	id: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	name: string;
	parentReference: ComplexTypes.itemReference;
	size: number;
	webDavUrl: string;
	webUrl: string;
	deleted: ComplexTypes.deleted;
	file: ComplexTypes.file;
	fileSystemInfo: ComplexTypes.fileSystemInfo;
	folder: ComplexTypes.folder;
	image: ComplexTypes.image;
	openWith: ComplexTypes.openWithSet;
	package: ComplexTypes.package;
	photo: ComplexTypes.photo;
	remoteItem: ComplexTypes.remoteItem;
	searchResult: ComplexTypes.searchResult;
	shared: ComplexTypes.shared;
	specialFolder: ComplexTypes.specialFolder;
	video: ComplexTypes.video;
	malware: ComplexTypes.malware;
	publication: ComplexTypes.publicationFacet;
	sharepointIds: ComplexTypes.sharepointIds;
	formats: ComplexTypes.formats;
	media: ComplexTypes.media;
	source: ComplexTypes.driveItemSource;
	permissions: () => IBaseExecution<permission[]>;
	children: () => IBaseExecution<item[]>;
	subscriptions: () => IBaseExecution<subscription[]>;
	thumbnails: () => IBaseExecution<thumbnailSet[]>;
	activities: () => IBaseExecution<activityEntity[]>;
	analytics: () => IBaseExecution<analytics>;
	commands: () => IBaseExecution<ComplexTypes.command[]>;
	featureStatus: () => IBaseExecution<featureStatus>;
	listItem: () => IBaseExecution<listItem>;
	versions: () => IBaseExecution<driveItemVersion[]>;
}
/*********************************************
* permission
**********************************************/
export interface permission  {
	grantedTo: ComplexTypes.identitySet;
	id: string;
	invitation: ComplexTypes.sharingInvitation;
	inheritedFrom: ComplexTypes.itemReference;
	link: ComplexTypes.sharingLink;
	roles: Array<string>[];
	expirationDateTime: any;
	grantedToIdentities: ComplexTypes.identitySet[];

}
/*********************************************
* subscription
**********************************************/
export interface subscription  {
	clientState: string;
	expirationDateTime: any;
	id: string;
	notificationUrl: string;
	resource: string;
	scenarios: Array<string>[];

}
/*********************************************
* thumbnailSet
**********************************************/
export interface thumbnailSet  {
	id: string;
	large: ComplexTypes.thumbnail;
	medium: ComplexTypes.thumbnail;
	small: ComplexTypes.thumbnail;

}
/*********************************************
* activityEntity
**********************************************/
export interface activityEntity  {
	action: ComplexTypes.action;
	actor: ComplexTypes.identitySet;
	docDetails: ComplexTypes.inDoc;
	driveItemId: string;
	id: string;
	times: ComplexTypes.activityTimes;
	driveItem: () => IBaseExecution<item>;
	listItem: () => IBaseExecution<listItem>;
}
/*********************************************
* analytics
**********************************************/
export interface analytics  {
	allTime: ComplexTypes.activityStat;
	lastSevenDays: ComplexTypes.activityStat;

}
/*********************************************
* commands
**********************************************/
export interface commands  {
	createLink: ComplexTypes.command;
	formats: ComplexTypes.command;
	preAuthUrls: ComplexTypes.command;
	subscriptions: ComplexTypes.command;

}
/*********************************************
* featureStatus
**********************************************/
export interface featureStatus  {


}
/*********************************************
* listItem
**********************************************/
export interface listItem  {
	contentType: ComplexTypes.contentTypeFacet;
	sharepointIds: ComplexTypes.sharepointIds;
	activities: () => IBaseExecution<activityEntity[]>;
	analytics: () => IBaseExecution<analytics>;
	driveItem: () => IBaseExecution<item>;
	fields: () => IBaseExecution<fieldValueSet>;
	versions: () => IBaseExecution<listItemVersion[]>;
}
/*********************************************
* fieldValueSet
**********************************************/
export interface fieldValueSet  {


}
/*********************************************
* baseItemVersion
**********************************************/
export interface baseItemVersion  {
	id: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publication: ComplexTypes.publicationFacet;

}
/*********************************************
* listItemVersion
**********************************************/
export interface listItemVersion  {

	fields: () => IBaseExecution<fieldValueSet>;
}
/*********************************************
* driveItemVersion
**********************************************/
export interface driveItemVersion  {
	size: number;
	streams: () => IBaseExecution<stream[]>;
}
/*********************************************
* stream
**********************************************/
export interface stream  {
	eTag: string;
	name: string;
	size: number;
	url: string;

}
/*********************************************
* columnDefinition
**********************************************/
export interface columnDefinition  {
	boolean: ComplexTypes.booleanColumn;
	calculated: ComplexTypes.calculatedColumn;
	choice: ComplexTypes.choiceColumn;
	columnGroup: string;
	currency: ComplexTypes.currencyColumn;
	customFormatter: string;
	dateTime: ComplexTypes.dateTimeColumn;
	defaultValue: ComplexTypes.defaultColumnValue;
	description: string;
	displayName: string;
	enforceUniqueValues: boolean;
	hidden: boolean;
	id: string;
	indexed: boolean;
	lookup: ComplexTypes.lookupColumn;
	name: string;
	number: ComplexTypes.numberColumn;
	personOrGroup: ComplexTypes.personOrGroupColumn;
	readOnly: boolean;
	required: boolean;
	text: ComplexTypes.textColumn;

}
/*********************************************
* contentType
**********************************************/
export interface contentType  {
	description: string;
	group: string;
	hidden: boolean;
	id: string;
	inheritedFrom: ComplexTypes.itemReference;
	name: string;
	order: ComplexTypes.contentTypeOrderFacet;
	parentId: string;
	readOnly: boolean;
	sealed: boolean;
	columnLinks: () => IBaseExecution<columnLink[]>;
}
/*********************************************
* columnLink
**********************************************/
export interface columnLink  {
	id: string;
	name: string;

}
/*********************************************
* itemActivityStatEntity
**********************************************/
export interface itemActivityStatEntity  {
	endDateTime: any;
	startDateTime: any;
	totalCount: ComplexTypes.itemActionStatFacet;

}
/*********************************************
* driveApp
**********************************************/
export interface driveApp  {
	application: ComplexTypes.identity;
	fileHandler: ComplexTypes.fileHandler;
	id: string;
	actions: () => IBaseExecution<driveAppAction[]>;
}
/*********************************************
* driveAppAction
**********************************************/
export interface driveAppAction  {
	availableOn: ComplexTypes.availableOn;
	displayName: string;
	icon: ComplexTypes.displayIcon;
	shortDisplayName: string;
	type: string;
	url: string;

}
/*********************************************
* list
**********************************************/
export interface list  {
	displayName: string;
	list: ComplexTypes.listInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.system;
	activities: () => IBaseExecution<activityEntity[]>;
	columns: () => IBaseExecution<columnDefinition[]>;
	contentTypes: () => IBaseExecution<contentType[]>;
	drive: () => IBaseExecution<drive>;
	items: () => IBaseExecution<listItem[]>;
}
/*********************************************
* baseItem
**********************************************/
export interface baseItem  {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	eTag: string;
	id: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	name: string;
	parentReference: ComplexTypes.itemReference;
	webUrl: string;

}
/*********************************************
* site
**********************************************/
export interface site  {
	root: ComplexTypes.root;
	sharepointIds: ComplexTypes.sharepointIds;
	siteCollection: ComplexTypes.siteCollection;
	title: string;
	analytics: () => IBaseExecution<analytics>;
	columns: () => IBaseExecution<columnDefinition[]>;
	contentTypes: () => IBaseExecution<contentType[]>;
	drive: () => IBaseExecution<drive>;
	drives: () => IBaseExecution<drive[]>;
	items: () => IBaseExecution<baseItem[]>;
	lists: () => IBaseExecution<list[]>;
	sites: () => IBaseExecution<site[]>;
}
/*********************************************
* sharePoint
**********************************************/
export interface sharePoint  {

	site: () => IBaseExecution<site>;
	sites: () => IBaseExecution<site[]>;
}