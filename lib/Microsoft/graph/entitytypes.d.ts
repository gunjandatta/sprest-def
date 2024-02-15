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
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	activitycounts(): IBaseExecution<itemActivityStatEntityCollection>;
	activitycounts(id: string | number): IBaseExecution<itemActivityStatEntity>;
	apps(): IBaseExecution<driveAppCollection>;
	apps(id: string | number): IBaseExecution<driveApp>;
	commands(): IBaseExecution<ComplexTypes.command[]>;
	items(): IBaseExecution<itemCollection>;
	items(id: string | number): IBaseExecution<item>;
	list(): IBaseExecution<list>;
	special(): IBaseExecution<itemCollection>;
	special(id: string | number): IBaseExecution<item>;
	trackedItems(): IBaseExecution<itemCollection>;
	trackedItems(id: string | number): IBaseExecution<item>;
}
/*********************************************
* drive Methods
**********************************************/
export interface driveMethods {
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	activitycounts(): IBaseExecution<itemActivityStatEntityCollection>;
	activitycounts(id: string | number): IBaseExecution<itemActivityStatEntity>;
	apps(): IBaseExecution<driveAppCollection>;
	apps(id: string | number): IBaseExecution<driveApp>;
	commands(): IBaseExecution<ComplexTypes.command[]>;
	items(): IBaseExecution<itemCollection>;
	items(id: string | number): IBaseExecution<item>;
	list(): IBaseExecution<list>;
	special(): IBaseExecution<itemCollection>;
	special(id: string | number): IBaseExecution<item>;
	trackedItems(): IBaseExecution<itemCollection>;
	trackedItems(id: string | number): IBaseExecution<item>;
}
/*********************************************
* drive Collection
**********************************************/
export interface driveCollection {
    results: drive[];
    
}
/*********************************************
* share
**********************************************/
export interface share  {
	id: string;
	name: string;
	driveItem(): IBaseExecution<item>;
	list(): IBaseExecution<list>;
	listItem(): IBaseExecution<listItem>;
	root(): IBaseExecution<item>;
	site(): IBaseExecution<site>;
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
	permissions(): IBaseExecution<permissionCollection>;
	permissions(id: string | number): IBaseExecution<permission>;
	children(): IBaseExecution<itemCollection>;
	children(id: string | number): IBaseExecution<item>;
	subscriptions(): IBaseExecution<subscriptionCollection>;
	subscriptions(id: string | number): IBaseExecution<subscription>;
	thumbnails(): IBaseExecution<thumbnailSetCollection>;
	thumbnails(id: string | number): IBaseExecution<thumbnailSet>;
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	analytics(): IBaseExecution<analytics>;
	commands(): IBaseExecution<ComplexTypes.command[]>;
	featureStatus(): IBaseExecution<featureStatus>;
	listItem(): IBaseExecution<listItem>;
	versions(): IBaseExecution<driveItemVersionCollection>;
	versions(id: string | number): IBaseExecution<driveItemVersion>;
}
/*********************************************
* item Methods
**********************************************/
export interface itemMethods {
	permissions(): IBaseExecution<permissionCollection>;
	permissions(id: string | number): IBaseExecution<permission>;
	children(): IBaseExecution<itemCollection>;
	children(id: string | number): IBaseExecution<item>;
	subscriptions(): IBaseExecution<subscriptionCollection>;
	subscriptions(id: string | number): IBaseExecution<subscription>;
	thumbnails(): IBaseExecution<thumbnailSetCollection>;
	thumbnails(id: string | number): IBaseExecution<thumbnailSet>;
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	analytics(): IBaseExecution<analytics>;
	commands(): IBaseExecution<ComplexTypes.command[]>;
	featureStatus(): IBaseExecution<featureStatus>;
	listItem(): IBaseExecution<listItem>;
	versions(): IBaseExecution<driveItemVersionCollection>;
	versions(id: string | number): IBaseExecution<driveItemVersion>;
}
/*********************************************
* item Collection
**********************************************/
export interface itemCollection {
    results: item[];
    
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
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* permission Methods
**********************************************/
export interface permissionMethods {
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* permission Collection
**********************************************/
export interface permissionCollection {
    results: permission[];
    add(values: any): IBaseExecution<permission>;
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
* subscription Methods
**********************************************/
export interface subscriptionMethods {

}
/*********************************************
* subscription Collection
**********************************************/
export interface subscriptionCollection {
    results: subscription[];
    
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
* thumbnailSet Methods
**********************************************/
export interface thumbnailSetMethods {

}
/*********************************************
* thumbnailSet Collection
**********************************************/
export interface thumbnailSetCollection {
    results: thumbnailSet[];
    
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
	driveItem(): IBaseExecution<item>;
	listItem(): IBaseExecution<listItem>;
}
/*********************************************
* activityEntity Methods
**********************************************/
export interface activityEntityMethods {
	driveItem(): IBaseExecution<item>;
	listItem(): IBaseExecution<listItem>;
}
/*********************************************
* activityEntity Collection
**********************************************/
export interface activityEntityCollection {
    results: activityEntity[];
    
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
export interface listItem extends baseItem {
	contentType: ComplexTypes.contentTypeFacet;
	sharepointIds: ComplexTypes.sharepointIds;
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	analytics(): IBaseExecution<analytics>;
	driveItem(): IBaseExecution<item>;
	fields(): IBaseExecution<fieldValueSet>;
	versions(): IBaseExecution<listItemVersionCollection>;
	versions(id: string | number): IBaseExecution<listItemVersion>;
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* listItem Methods
**********************************************/
export interface listItemMethods {
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	analytics(): IBaseExecution<analytics>;
	driveItem(): IBaseExecution<item>;
	fields(): IBaseExecution<fieldValueSet>;
	versions(): IBaseExecution<listItemVersionCollection>;
	versions(id: string | number): IBaseExecution<listItemVersion>;
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* listItem Collection
**********************************************/
export interface listItemCollection {
    results: listItem[];
    add(values: any): IBaseExecution<item>;
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
export interface listItemVersion extends baseItemVersion {

	fields(): IBaseExecution<fieldValueSet>;
}
/*********************************************
* listItemVersion Methods
**********************************************/
export interface listItemVersionMethods {
	fields(): IBaseExecution<fieldValueSet>;
}
/*********************************************
* listItemVersion Collection
**********************************************/
export interface listItemVersionCollection {
    results: listItemVersion[];
    
}
/*********************************************
* driveItemVersion
**********************************************/
export interface driveItemVersion extends baseItemVersion {
	size: number;
	streams(): IBaseExecution<streamCollection>;
	streams(id: string | number): IBaseExecution<stream>;
}
/*********************************************
* driveItemVersion Methods
**********************************************/
export interface driveItemVersionMethods {
	streams(): IBaseExecution<streamCollection>;
	streams(id: string | number): IBaseExecution<stream>;
}
/*********************************************
* driveItemVersion Collection
**********************************************/
export interface driveItemVersionCollection {
    results: driveItemVersion[];
    
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
* stream Methods
**********************************************/
export interface streamMethods {

}
/*********************************************
* stream Collection
**********************************************/
export interface streamCollection {
    results: stream[];
    
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
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* columnDefinition Methods
**********************************************/
export interface columnDefinitionMethods {
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* columnDefinition Collection
**********************************************/
export interface columnDefinitionCollection {
    results: columnDefinition[];
    add(values: any): IBaseExecution<ComplexTypes.columnDefinition>;
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
	columnLinks(): IBaseExecution<columnLinkCollection>;
	columnLinks(id: string | number): IBaseExecution<columnLink>;
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* contentType Methods
**********************************************/
export interface contentTypeMethods {
	columnLinks(): IBaseExecution<columnLinkCollection>;
	columnLinks(id: string | number): IBaseExecution<columnLink>;
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* contentType Collection
**********************************************/
export interface contentTypeCollection {
    results: contentType[];
    add(values: any): IBaseExecution<contentType>;
}
/*********************************************
* columnLink
**********************************************/
export interface columnLink  {
	id: string;
	name: string;

}
/*********************************************
* columnLink Methods
**********************************************/
export interface columnLinkMethods {

}
/*********************************************
* columnLink Collection
**********************************************/
export interface columnLinkCollection {
    results: columnLink[];
    
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
* itemActivityStatEntity Methods
**********************************************/
export interface itemActivityStatEntityMethods {

}
/*********************************************
* itemActivityStatEntity Collection
**********************************************/
export interface itemActivityStatEntityCollection {
    results: itemActivityStatEntity[];
    
}
/*********************************************
* driveApp
**********************************************/
export interface driveApp  {
	application: ComplexTypes.identity;
	fileHandler: ComplexTypes.fileHandler;
	id: string;
	actions(): IBaseExecution<driveAppActionCollection>;
	actions(id: string | number): IBaseExecution<driveAppAction>;
}
/*********************************************
* driveApp Methods
**********************************************/
export interface driveAppMethods {
	actions(): IBaseExecution<driveAppActionCollection>;
	actions(id: string | number): IBaseExecution<driveAppAction>;
}
/*********************************************
* driveApp Collection
**********************************************/
export interface driveAppCollection {
    results: driveApp[];
    
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
* driveAppAction Methods
**********************************************/
export interface driveAppActionMethods {

}
/*********************************************
* driveAppAction Collection
**********************************************/
export interface driveAppActionCollection {
    results: driveAppAction[];
    
}
/*********************************************
* list
**********************************************/
export interface list extends baseItem {
	displayName: string;
	list: ComplexTypes.listInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.system;
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	columns(): IBaseExecution<columnDefinitionCollection>;
	columns(id: string | number): IBaseExecution<columnDefinition>;
	contentTypes(): IBaseExecution<contentTypeCollection>;
	contentTypes(id: string | number): IBaseExecution<contentType>;
	drive(): IBaseExecution<drive>;
	items(): IBaseExecution<listItemCollection>;
	items(id: string | number): IBaseExecution<listItem>;
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* list Methods
**********************************************/
export interface listMethods {
	activities(): IBaseExecution<activityEntityCollection>;
	activities(id: string | number): IBaseExecution<activityEntity>;
	columns(): IBaseExecution<columnDefinitionCollection>;
	columns(id: string | number): IBaseExecution<columnDefinition>;
	contentTypes(): IBaseExecution<contentTypeCollection>;
	contentTypes(id: string | number): IBaseExecution<contentType>;
	drive(): IBaseExecution<drive>;
	items(): IBaseExecution<listItemCollection>;
	items(id: string | number): IBaseExecution<listItem>;
	update(values: any): IBaseExecution<void>;
}
/*********************************************
* list Collection
**********************************************/
export interface listCollection {
    results: list[];
    add(values: any): IBaseExecution<list>;
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
* baseItem Methods
**********************************************/
export interface baseItemMethods {

}
/*********************************************
* baseItem Collection
**********************************************/
export interface baseItemCollection {
    results: baseItem[];
    
}
/*********************************************
* site
**********************************************/
export interface site extends baseItem {
	root: ComplexTypes.root;
	sharepointIds: ComplexTypes.sharepointIds;
	siteCollection: ComplexTypes.siteCollection;
	title: string;
	analytics(): IBaseExecution<analytics>;
	columns(): IBaseExecution<columnDefinitionCollection>;
	columns(id: string | number): IBaseExecution<columnDefinition>;
	contentTypes(): IBaseExecution<contentTypeCollection>;
	contentTypes(id: string | number): IBaseExecution<contentType>;
	drive(): IBaseExecution<drive>;
	drives(): IBaseExecution<driveCollection>;
	drives(id: string | number): IBaseExecution<drive>;
	items(): IBaseExecution<baseItemCollection>;
	items(id: string | number): IBaseExecution<baseItem>;
	lists(): IBaseExecution<listCollection>;
	lists(id: string | number): IBaseExecution<list>;
	sites(): IBaseExecution<siteCollection>;
	sites(id: string | number): IBaseExecution<site>;
}
/*********************************************
* site Methods
**********************************************/
export interface siteMethods {
	analytics(): IBaseExecution<analytics>;
	columns(): IBaseExecution<columnDefinitionCollection>;
	columns(id: string | number): IBaseExecution<columnDefinition>;
	contentTypes(): IBaseExecution<contentTypeCollection>;
	contentTypes(id: string | number): IBaseExecution<contentType>;
	drive(): IBaseExecution<drive>;
	drives(): IBaseExecution<driveCollection>;
	drives(id: string | number): IBaseExecution<drive>;
	items(): IBaseExecution<baseItemCollection>;
	items(id: string | number): IBaseExecution<baseItem>;
	lists(): IBaseExecution<listCollection>;
	lists(id: string | number): IBaseExecution<list>;
	sites(): IBaseExecution<siteCollection>;
	sites(id: string | number): IBaseExecution<site>;
}
/*********************************************
* site Collection
**********************************************/
export interface siteCollection {
    results: site[];
    add(values: any): IBaseExecution<site>;
}
/*********************************************
* sharePoint
**********************************************/
export interface sharePoint  {

	site(): IBaseExecution<site>;
	sites(): IBaseExecution<siteCollection>;
	sites(id: string | number): IBaseExecution<site>;
}