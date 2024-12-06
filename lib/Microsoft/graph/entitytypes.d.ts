import { IBaseExecution, IBaseQuery } from "../../base";
import * as ComplexTypes from "./complexTypes.d";
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
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	activitycounts(): IBaseQuery<itemActivityStatEntityCollection>;
	activitycounts(id: string | number): IBaseQuery<itemActivityStatEntity> & itemActivityStatEntityMethods;
	apps(): IBaseQuery<driveAppCollection>;
	apps(id: string | number): IBaseQuery<driveApp> & driveAppMethods;
	commands(): IBaseQuery<ComplexTypes.command[]>;
	items(): IBaseQuery<itemCollection>;
	items(id: string | number): IBaseQuery<item> & itemMethods;
	list(): IBaseQuery<list>;
	special(): IBaseQuery<itemCollection>;
	special(id: string | number): IBaseQuery<item> & itemMethods;
	trackedItems(): IBaseQuery<itemCollection>;
	trackedItems(id: string | number): IBaseQuery<item> & itemMethods;
}
/*********************************************
* drive Methods
**********************************************/
export interface driveMethods {
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	activitycounts(): IBaseQuery<itemActivityStatEntityCollection>;
	activitycounts(id: string | number): IBaseQuery<itemActivityStatEntity> & itemActivityStatEntityMethods;
	apps(): IBaseQuery<driveAppCollection>;
	apps(id: string | number): IBaseQuery<driveApp> & driveAppMethods;
	commands(): IBaseQuery<ComplexTypes.command[]>;
	items(): IBaseQuery<itemCollection>;
	items(id: string | number): IBaseQuery<item> & itemMethods;
	list(): IBaseQuery<list>;
	special(): IBaseQuery<itemCollection>;
	special(id: string | number): IBaseQuery<item> & itemMethods;
	trackedItems(): IBaseQuery<itemCollection>;
	trackedItems(id: string | number): IBaseQuery<item> & itemMethods;
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
	driveItem(): IBaseQuery<item>;
	list(): IBaseQuery<list>;
	listItem(): IBaseQuery<listItem>;
	root(): IBaseQuery<item>;
	site(): IBaseQuery<site>;
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
	permissions(): IBaseQuery<permissionCollection>;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
	children(): IBaseQuery<itemCollection>;
	children(id: string | number): IBaseQuery<item> & itemMethods;
	subscriptions(): IBaseQuery<subscriptionCollection>;
	subscriptions(id: string | number): IBaseQuery<subscription> & subscriptionMethods;
	thumbnails(): IBaseQuery<thumbnailSetCollection>;
	thumbnails(id: string | number): IBaseQuery<thumbnailSet> & thumbnailSetMethods;
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	analytics(): IBaseQuery<analytics>;
	commands(): IBaseQuery<ComplexTypes.command[]>;
	featureStatus(): IBaseQuery<featureStatus>;
	listItem(): IBaseQuery<listItem>;
	versions(): IBaseQuery<driveItemVersionCollection>;
	versions(id: string | number): IBaseQuery<driveItemVersion> & driveItemVersionMethods;
	extractSensitivityLabel(values: any): IBaseQuery<void>;
	setSensitivityLabel(values: any): IBaseQuery<void>;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* item Methods
**********************************************/
export interface itemMethods {
	permissions(): IBaseQuery<permissionCollection>;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
	children(): IBaseQuery<itemCollection>;
	children(id: string | number): IBaseQuery<item> & itemMethods;
	subscriptions(): IBaseQuery<subscriptionCollection>;
	subscriptions(id: string | number): IBaseQuery<subscription> & subscriptionMethods;
	thumbnails(): IBaseQuery<thumbnailSetCollection>;
	thumbnails(id: string | number): IBaseQuery<thumbnailSet> & thumbnailSetMethods;
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	analytics(): IBaseQuery<analytics>;
	commands(): IBaseQuery<ComplexTypes.command[]>;
	featureStatus(): IBaseQuery<featureStatus>;
	listItem(): IBaseQuery<listItem>;
	versions(): IBaseQuery<driveItemVersionCollection>;
	versions(id: string | number): IBaseQuery<driveItemVersion> & driveItemVersionMethods;
	extractSensitivityLabel(values: any): IBaseQuery<void>;
	setSensitivityLabel(values: any): IBaseQuery<void>;
	update(values: any): IBaseQuery<void>;
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
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* permission Methods
**********************************************/
export interface permissionMethods {
	update(values: any): IBaseQuery<void>;
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
	driveItem(): IBaseQuery<item>;
	listItem(): IBaseQuery<listItem>;
}
/*********************************************
* activityEntity Methods
**********************************************/
export interface activityEntityMethods {
	driveItem(): IBaseQuery<item>;
	listItem(): IBaseQuery<listItem>;
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
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	analytics(): IBaseQuery<analytics>;
	driveItem(): IBaseQuery<item>;
	fields(): IBaseQuery<fieldValueSet>;
	versions(): IBaseQuery<listItemVersionCollection>;
	versions(id: string | number): IBaseQuery<listItemVersion> & listItemVersionMethods;
	extractSensitivityLabel(values: any): IBaseQuery<void>;
	setSensitivityLabel(values: any): IBaseQuery<void>;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* listItem Methods
**********************************************/
export interface listItemMethods {
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	analytics(): IBaseQuery<analytics>;
	driveItem(): IBaseQuery<item>;
	fields(): IBaseQuery<fieldValueSet>;
	versions(): IBaseQuery<listItemVersionCollection>;
	versions(id: string | number): IBaseQuery<listItemVersion> & listItemVersionMethods;
	extractSensitivityLabel(values: any): IBaseQuery<void>;
	setSensitivityLabel(values: any): IBaseQuery<void>;
	update(values: any): IBaseQuery<void>;
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

	fields(): IBaseQuery<fieldValueSet>;
}
/*********************************************
* listItemVersion Methods
**********************************************/
export interface listItemVersionMethods {
	fields(): IBaseQuery<fieldValueSet>;
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
	streams(): IBaseQuery<streamCollection>;
	streams(id: string | number): IBaseQuery<stream> & streamMethods;
}
/*********************************************
* driveItemVersion Methods
**********************************************/
export interface driveItemVersionMethods {
	streams(): IBaseQuery<streamCollection>;
	streams(id: string | number): IBaseQuery<stream> & streamMethods;
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
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* columnDefinition Methods
**********************************************/
export interface columnDefinitionMethods {
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* columnDefinition Collection
**********************************************/
export interface columnDefinitionCollection {
    results: columnDefinition[];
	add(values: any): IBaseExecution<columnDefinition>;
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
	columnLinks(): IBaseQuery<columnLinkCollection>;
	columnLinks(id: string | number): IBaseQuery<columnLink> & columnLinkMethods;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* contentType Methods
**********************************************/
export interface contentTypeMethods {
	columnLinks(): IBaseQuery<columnLinkCollection>;
	columnLinks(id: string | number): IBaseQuery<columnLink> & columnLinkMethods;
	update(values: any): IBaseQuery<void>;
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
	actions(): IBaseQuery<driveAppActionCollection>;
	actions(id: string | number): IBaseQuery<driveAppAction> & driveAppActionMethods;
}
/*********************************************
* driveApp Methods
**********************************************/
export interface driveAppMethods {
	actions(): IBaseQuery<driveAppActionCollection>;
	actions(id: string | number): IBaseQuery<driveAppAction> & driveAppActionMethods;
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
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	columns(): IBaseQuery<columnDefinitionCollection>;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): IBaseQuery<contentTypeCollection>;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive>;
	items(): IBaseQuery<listItemCollection>;
	items(id: string | number): IBaseQuery<listItem> & listItemMethods;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* list Methods
**********************************************/
export interface listMethods {
	activities(): IBaseQuery<activityEntityCollection>;
	activities(id: string | number): IBaseQuery<activityEntity> & activityEntityMethods;
	columns(): IBaseQuery<columnDefinitionCollection>;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): IBaseQuery<contentTypeCollection>;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive>;
	items(): IBaseQuery<listItemCollection>;
	items(id: string | number): IBaseQuery<listItem> & listItemMethods;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* list Collection
**********************************************/
export interface listCollection {
    results: list[];
	add(values: any): IBaseExecution<list>;
	getById(id: string): IBaseExecution<list>;
	getByTitle(title: string): IBaseExecution<list>;
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
	analytics(): IBaseQuery<analytics>;
	columns(): IBaseQuery<columnDefinitionCollection>;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): IBaseQuery<contentTypeCollection>;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive>;
	drives(): IBaseQuery<driveCollection>;
	drives(id: string | number): IBaseQuery<drive> & driveMethods;
	items(): IBaseQuery<baseItemCollection>;
	items(id: string | number): IBaseQuery<baseItem> & baseItemMethods;
	lists(): IBaseQuery<listCollection>;
	lists(id: string | number): IBaseQuery<list> & listMethods;
	sites(): IBaseQuery<siteCollection>;
	sites(id: string | number): IBaseQuery<site> & siteMethods;
	permissions(): IBaseQuery<permissionCollection>;
	permissions(id: string): IBaseQuery<permission>;
}
/*********************************************
* site Methods
**********************************************/
export interface siteMethods {
	analytics(): IBaseQuery<analytics>;
	columns(): IBaseQuery<columnDefinitionCollection>;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): IBaseQuery<contentTypeCollection>;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive>;
	drives(): IBaseQuery<driveCollection>;
	drives(id: string | number): IBaseQuery<drive> & driveMethods;
	items(): IBaseQuery<baseItemCollection>;
	items(id: string | number): IBaseQuery<baseItem> & baseItemMethods;
	lists(): IBaseQuery<listCollection>;
	lists(id: string | number): IBaseQuery<list> & listMethods;
	sites(): IBaseQuery<siteCollection>;
	sites(id: string | number): IBaseQuery<site> & siteMethods;
	permissions(): IBaseQuery<permissionCollection>;
	permissions(id: string): IBaseQuery<permission>;
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

	site(): IBaseQuery<site>;
	sites(): IBaseQuery<siteCollection>;
	sites(id: string | number): IBaseQuery<site> & siteMethods;
}