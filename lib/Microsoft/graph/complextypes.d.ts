import * as EnumTypes from "./enumTypes.d";
/*********************************************
* chunkedUploadSessionDescriptor
**********************************************/
export interface chunkedUploadSessionDescriptor  {
	name: string;
	driveItemSource: driveItemSource;
	fileSystemInfo: fileSystemInfo;
	mediaSource: mediaSource;
	media: mediaUploadableProperties;
}
/*********************************************
* itemReference
**********************************************/
export interface itemReference  {
	driveId: string;
	id: string;
	path: string;
	driveType: string;
	listId: string;
	sharepointIds: sharepointIds;
	siteId: string;
}
/*********************************************
* recipients
**********************************************/
export interface recipients  {
	email: string;
	alias: string;
	objectId: string;
	permissionIdentityTypeInput: string;
}
/*********************************************
* uploadSession
**********************************************/
export interface uploadSession  {
	uploadUrl: string;
	expirationDateTime: any;
	nextExpectedRanges: Array<string>[];
}
/*********************************************
* deleted
**********************************************/
export interface deleted  {
	state: string;
}
/*********************************************
* file
**********************************************/
export interface file  {
	hashes: hashes;
	mimeType: string;
}
/*********************************************
* fileSystemInfo
**********************************************/
export interface fileSystemInfo  {
	createdDateTime: any;
	lastModifiedDateTime: any;
}
/*********************************************
* media
**********************************************/
export interface media  {
	aboutVisibility: string;
	analyticsVisibility: string;
	notesVisibility: string;
	chatVisibility: string;
	tableOfContentsVisibility: string;
	isNoiseSuppressionControlShown: boolean;
	noiseSuppressionEnabledByDefault: boolean;
	isTranscriptionShown: boolean;
	recordingStartDateTime: any;
	recordingEndDateTime: any;
	spokenLanguageTag: string;
	mediaSource: mediaSource;
	areExtendedFeaturesEnabled: boolean;
	isWatermarkEnabled: boolean;
	interactivity: mediaInteractivity;
}
/*********************************************
* mediaInteractivity
**********************************************/
export interface mediaInteractivity  {
	isInteractiveContentShown: boolean;
	firstInteractiveContentOffset: number;
}
/*********************************************
* mediaSource
**********************************************/
export interface mediaSource  {
	contentCategory: string;
}
/*********************************************
* mediaUploadableProperties
**********************************************/
export interface mediaUploadableProperties  {
	spokenLanguageTag: string;
	isWatermarkEnabled: boolean;
}
/*********************************************
* driveItemSource
**********************************************/
export interface driveItemSource  {
	application: string;
	externalId: string;
	threadId: string;
	meetingOrganizerTenantId: string;
	meetingOrganizerId: string;
	iCalUid: string;
	groupId: string;
	supportsTeamsPremiumFeatures: boolean;
}
/*********************************************
* folder
**********************************************/
export interface folder  {
	childCount: number;
}
/*********************************************
* hashes
**********************************************/
export interface hashes  {
	quickXorHash: string;
}
/*********************************************
* image
**********************************************/
export interface image  {
	height: number;
	width: number;
}
/*********************************************
* package
**********************************************/
export interface package  {
	type: string;
}
/*********************************************
* photo
**********************************************/
export interface photo  {
	takenDateTime: any;
}
/*********************************************
* quota
**********************************************/
export interface quota  {
	deleted: number;
	remaining: number;
	state: string;
	total: number;
	used: number;
}
/*********************************************
* remoteItem
**********************************************/
export interface remoteItem  {
	createdBy: identitySet;
	createdDateTime: any;
	fileSystemInfo: fileSystemInfo;
	file: file;
	folder: folder;
	id: string;
	lastModifiedBy: identitySet;
	lastModifiedDateTime: any;
	name: string;
	package: package;
	parentReference: itemReference;
	shared: shared;
	sharepointIds: sharepointIds;
	size: number;
	specialFolder: specialFolder;
	webUrl: string;
	webDavUrl: string;
	formats: formats;
}
/*********************************************
* root
**********************************************/
export interface root  {

}
/*********************************************
* searchResult
**********************************************/
export interface searchResult  {

}
/*********************************************
* sharingInvitation
**********************************************/
export interface sharingInvitation  {
	email: string;
	invitedBy: identitySet;
	signInRequired: boolean;
}
/*********************************************
* shared
**********************************************/
export interface shared  {
	effectiveRoles: Array<string>[];
	scope: string;
	sharedBy: identitySet;
}
/*********************************************
* sharepointIds
**********************************************/
export interface sharepointIds  {
	listId: string;
	listItemId: string;
	listItemUniqueId: string;
	siteId: string;
	webId: string;
	siteUrl: string;
	syncResourceId: string;
	tenantDisplayName: string;
	tenantId: string;
}
/*********************************************
* sharingLink
**********************************************/
export interface sharingLink  {
	application: identity;
	type: string;
	scope: string;
	webUrl: string;
}
/*********************************************
* specialFolder
**********************************************/
export interface specialFolder  {
	name: string;
}
/*********************************************
* video
**********************************************/
export interface video  {
	height: number;
	width: number;
}
/*********************************************
* identitySet
**********************************************/
export interface identitySet  {
	application: identity;
	user: identity;
	group: identity;
}
/*********************************************
* identity
**********************************************/
export interface identity  {
	displayName: string;
	id: string;
	email: string;
	self: self;
	userPrincipalName: string;
}
/*********************************************
* thumbnail
**********************************************/
export interface thumbnail  {
	content: any;
	height: number;
	url: string;
	width: number;
}
/*********************************************
* openWithApp
**********************************************/
export interface openWithApp  {
	app: identity;
	viewUrl: string;
	editUrl: string;
	viewPostParameters: string;
	editPostParameters: string;
}
/*********************************************
* openWithSet
**********************************************/
export interface openWithSet  {
	previewEmbed: openWithApp;
	web: openWithApp;
	webEmbed: openWithApp;
	wopi: openWithApp;
}
/*********************************************
* booleanColumn
**********************************************/
export interface booleanColumn  {

}
/*********************************************
* calculatedColumn
**********************************************/
export interface calculatedColumn  {
	format: string;
	formula: string;
	outputType: string;
}
/*********************************************
* choiceColumn
**********************************************/
export interface choiceColumn  {
	allowTextEntry: boolean;
	choices: Array<string>[];
	displayAs: string;
}
/*********************************************
* dateTimeColumn
**********************************************/
export interface dateTimeColumn  {
	displayAs: string;
	format: string;
}
/*********************************************
* defaultColumnValue
**********************************************/
export interface defaultColumnValue  {
	formula: string;
	value: string;
}
/*********************************************
* lookupColumn
**********************************************/
export interface lookupColumn  {
	allowMultipleValues: boolean;
	allowUnlimitedLength: boolean;
	columnName: string;
	listId: string;
	primaryLookupColumnId: string;
}
/*********************************************
* numberColumn
**********************************************/
export interface numberColumn  {
	decimalPlaces: string;
	displayAs: string;
	maximum: number;
	minimum: number;
}
/*********************************************
* personOrGroupColumn
**********************************************/
export interface personOrGroupColumn  {
	allowMultipleSelection: boolean;
	displayAs: string;
	format: string;
}
/*********************************************
* textColumn
**********************************************/
export interface textColumn  {
	allowMultipleLines: boolean;
	appendChangesToExistingText: boolean;
	linesForEditing: number;
	maxLength: number;
	textType: string;
}
/*********************************************
* availableOn
**********************************************/
export interface availableOn  {
	file: availableOnFile;
	folder: availableOnFolder;
	web: availableOnWeb;
	allowMultiSelect: boolean;
}
/*********************************************
* availableOnFile
**********************************************/
export interface availableOnFile  {
	extensions: Array<string>[];
}
/*********************************************
* availableOnFolder
**********************************************/
export interface availableOnFolder  {

}
/*********************************************
* availableOnWeb
**********************************************/
export interface availableOnWeb  {

}
/*********************************************
* action
**********************************************/
export interface action  {
	comment: commentAction;
	create: createAction;
	delete: deleteAction;
	edit: editAction;
	mention: mentionAction;
	move: moveAction;
	rename: renameAction;
	restore: restoreAction;
	share: shareAction;
	version: versionAction;
}
/*********************************************
* commentAction
**********************************************/
export interface commentAction  {
	isReply: boolean;
	parentAuthor: identitySet;
	participants: identitySet[];
}
/*********************************************
* self
**********************************************/
export interface self  {

}
/*********************************************
* createAction
**********************************************/
export interface createAction  {

}
/*********************************************
* deleteAction
**********************************************/
export interface deleteAction  {
	name: string;
	objectType: string;
}
/*********************************************
* editAction
**********************************************/
export interface editAction  {

}
/*********************************************
* mentionAction
**********************************************/
export interface mentionAction  {
	mentionees: identitySet[];
}
/*********************************************
* moveAction
**********************************************/
export interface moveAction  {
	From: string;
	to: string;
}
/*********************************************
* renameAction
**********************************************/
export interface renameAction  {
	oldName: string;
}
/*********************************************
* restoreAction
**********************************************/
export interface restoreAction  {

}
/*********************************************
* shareAction
**********************************************/
export interface shareAction  {
	recipients: identitySet[];
}
/*********************************************
* versionAction
**********************************************/
export interface versionAction  {
	newVersion: string;
}
/*********************************************
* activityStat
**********************************************/
export interface activityStat  {
	activities: activity[];
	incompleteData: incompleteData;
	interval: string;
	isTrending: string;
	startDateTime: any;
	viewCount: number;
	viewerCount: number;
}
/*********************************************
* activity
**********************************************/
export interface activity  {
	activityDateTime: any;
	activityType: string;
	actor: identitySet;
	location: physicalAddress;
}
/*********************************************
* physicalAddress
**********************************************/
export interface physicalAddress  {
	city: string;
	countryOrRegion: string;
	postalCode: string;
	postOfficeBox: string;
	state: string;
	street: string;
	type: string;
}
/*********************************************
* incompleteData
**********************************************/
export interface incompleteData  {
	missingDataBeforeDateTime: any;
	resultsPending: boolean;
	wasThrottled: boolean;
}
/*********************************************
* activityTimes
**********************************************/
export interface activityTimes  {
	lastRecordedTime: string;
	observedTime: string;
	recordedTime: string;
}
/*********************************************
* asynchronousOperationStatus
**********************************************/
export interface asynchronousOperationStatus  {
	percentageComplete: number;
	resourceId: string;
	status: string;
}
/*********************************************
* command
**********************************************/
export interface command  {
	dash: protocol;
	defaultScope: string;
	hls: protocol;
	jpg: protocol;
	linkTypes: Array<string>[];
	pdf: protocol;
	proofTokenUrl: string;
	roles: Array<string>[];
	scenarios: Scenario[];
	scopes: Array<string>[];
}
/*********************************************
* protocol
**********************************************/
export interface protocol  {
	extensions: Array<string>[];
}
/*********************************************
* Scenario
**********************************************/
export interface Scenario  {
	deliveryMechanisms: Array<string>[];
	name: string;
	notificationActions: Array<string>[];
}
/*********************************************
* contentTypeFacet
**********************************************/
export interface contentTypeFacet  {
	id: string;
	name: string;
}
/*********************************************
* currencyColumn
**********************************************/
export interface currencyColumn  {
	locale: string;
}
/*********************************************
* displayIcon
**********************************************/
export interface displayIcon  {
	png1_5x: string;
	png1x: string;
	png2x: string;
	svg: string;
}
/*********************************************
* dataLossPrevention
**********************************************/
export interface dataLossPrevention  {
	block: dataLossPreventionInfo;
	notify: dataLossPreventionInfo;
}
/*********************************************
* dataLossPreventionInfo
**********************************************/
export interface dataLossPreventionInfo  {

}
/*********************************************
* embedInfo
**********************************************/
export interface embedInfo  {
	getUrl: string;
	postParameters: string;
	postUrl: string;
}
/*********************************************
* contentTypeOrderFacet
**********************************************/
export interface contentTypeOrderFacet  {
	default: boolean;
	position: number;
}
/*********************************************
* fileHandler
**********************************************/
export interface fileHandler  {
	actionMenuDisplayName: string;
	appIcon: displayIcon;
	fileTypeDisplayName: string;
	fileTypeIcon: displayIcon;
	fileTypeIconUrl: string;
	version: number;
}
/*********************************************
* format
**********************************************/
export interface format  {
	mediaType: string;
	url: string;
	urlTemplate: string;
}
/*********************************************
* formats
**********************************************/
export interface formats  {
	bin: format;
	jpg: format;
	officeBundleFragment: format;
	officeBundleGenerate: format;
	pdf: format;
}
/*********************************************
* inDoc
**********************************************/
export interface inDoc  {
	contentId: string;
	navigationId: string;
}
/*********************************************
* itemActionStatFacet
**********************************************/
export interface itemActionStatFacet  {
	actionCount: number;
}
/*********************************************
* listInfo
**********************************************/
export interface listInfo  {
	contentTypesEnabled: boolean;
	hidden: boolean;
	template: string;
	type: string;
}
/*********************************************
* malware
**********************************************/
export interface malware  {

}
/*********************************************
* publicationFacet
**********************************************/
export interface publicationFacet  {
	level: string;
	versionId: string;
}
/*********************************************
* linkFeatures
**********************************************/
export interface linkFeatures  {
	mayPreventOpen: boolean;
	name: string;
	supportedBy: Array<string>[];
}
/*********************************************
* siteCollection
**********************************************/
export interface siteCollection  {
	dataLocationCode: string;
	hostName: string;
	root: root;
}
/*********************************************
* system
**********************************************/
export interface system  {

}