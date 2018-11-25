import { SP } from "../../";

/*********************************************
* AppPackagesListItem
**********************************************/
export interface AppPackagesListItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	Combine?: string;
	RepairDocument?: string;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
}

/*********************************************
* AppPackagesListItemMethods
**********************************************/
export interface AppPackagesListItemMethods extends AppPackagesListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* AppPackagesListItemQuery
**********************************************/
export interface AppPackagesListItemQuery extends AppPackagesListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* UserInfoItem
**********************************************/
export interface UserInfoItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	Name?: string;
	EMail?: string;
	MobilePhone?: string;
	Notes?: string;
	SipAddress?: string;
	Locale?: number;
	CalendarType?: number;
	AdjustHijriDays?: number;
	TimeZone?: number;
	Time24?: boolean;
	AltCalendarType?: number;
	CalendarViewOptions?: number;
	WorkDays?: number;
	WorkDayStartHour?: number;
	WorkDayEndHour?: number;
	MUILanguages?: string;
	ContentLanguages?: string;
	IsSiteAdmin?: boolean;
	Deleted?: boolean;
	UserInfoHidden?: boolean;
	Picture?: SP.FieldUrlValue;
	Department?: string;
	JobTitle?: string;
	IsActive?: boolean;
	FirstName?: string;
	LastName?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	WorkPhone?: string;
	UserName?: string;
	WebSite?: SP.FieldUrlValue;
	SPSResponsibility?: string;
	Office?: string;
	SPSPictureTimestamp?: string;
	SPSPicturePlaceholderState?: number;
	SPSPictureExchangeSyncState?: number;
	OtherMail?: string;
	ComplianceAssetId?: string;
	UserExpiration?: any;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	GroupLink?: string;
	GroupEdit?: string;
	ImnName?: string;
	PictureDisp?: string;
	PictureOnly_Size_36px?: string;
	PictureOnly_Size_48px?: string;
	PictureOnly_Size_72px?: string;
	NameWithPicture?: string;
	NameWithPictureAndDetails?: string;
	EditUser?: string;
	UserSelection?: string;
	ContentTypeDisp?: string;
}

/*********************************************
* UserInfoItemMethods
**********************************************/
export interface UserInfoItemMethods extends UserInfoItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* UserInfoItemQuery
**********************************************/
export interface UserInfoItemQuery extends UserInfoItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_appdataItem
**********************************************/
export interface OData__x005f_catalogs_x002f_appdataItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_appdataItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_appdataItemMethods extends OData__x005f_catalogs_x002f_appdataItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_appdataItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_appdataItemQuery extends OData__x005f_catalogs_x002f_appdataItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_appfilesItem
**********************************************/
export interface OData__x005f_catalogs_x002f_appfilesItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_appfilesItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_appfilesItemMethods extends OData__x005f_catalogs_x002f_appfilesItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_appfilesItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_appfilesItemQuery extends OData__x005f_catalogs_x002f_appfilesItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* DraftAppsListItem
**********************************************/
export interface DraftAppsListItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
	ProductId?: any;
	AppVersion?: string;
	AppName?: string;
	AppInstanceId?: any;
	AppParentWebId?: any;
	AppLaunchUrl?: string;
	AppStatus?: string;
}

/*********************************************
* DraftAppsListItemMethods
**********************************************/
export interface DraftAppsListItemMethods extends DraftAppsListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* DraftAppsListItemQuery
**********************************************/
export interface DraftAppsListItemQuery extends DraftAppsListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* BinsListItem
**********************************************/
export interface BinsListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	js?: string;
	css?: string;
	html?: string;
	head?: string;
	body?: string;
	forkedFrom?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* BinsListItemMethods
**********************************************/
export interface BinsListItemMethods extends BinsListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* BinsListItemQuery
**********************************************/
export interface BinsListItemQuery extends BinsListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Cache_x0020_ProfilesItem
**********************************************/
export interface Cache_x0020_ProfilesItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	PublishingCacheDisplayName?: string;
	PublishingCacheDisplayDescriptio?: string;
	PublishingCachePerformACLCheck?: boolean;
	PublishingCacheEnabled?: boolean;
	PublishingCacheDuration?: number;
	PublishingCacheCheckForChanges?: boolean;
	PublishingVaryByCustom?: string;
	PublishingVaryByHeader?: string;
	PublishingVaryByParam?: string;
	PublishingVaryByRights?: boolean;
	PublishingCacheability?: string;
	PublishingAuthenticatedUse?: boolean;
	PublishingCacheAllowWriters?: boolean;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Cache_x0020_ProfilesItemMethods
**********************************************/
export interface Cache_x0020_ProfilesItemMethods extends Cache_x0020_ProfilesItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Cache_x0020_ProfilesItemQuery
**********************************************/
export interface Cache_x0020_ProfilesItemQuery extends Cache_x0020_ProfilesItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_designItem
**********************************************/
export interface OData__x005f_catalogs_x002f_designItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
	Name?: string;
	MasterPageUrl?: SP.FieldUrlValue;
	ThemeUrl?: SP.FieldUrlValue;
	ImageUrl?: SP.FieldUrlValue;
	FontSchemeUrl?: SP.FieldUrlValue;
	DisplayOrder?: number;
}

/*********************************************
* OData__x005f_catalogs_x002f_designItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_designItemMethods extends OData__x005f_catalogs_x002f_designItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_designItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_designItemQuery extends OData__x005f_catalogs_x002f_designItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Reports_x0020_ListItem
**********************************************/
export interface Reports_x0020_ListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	File_x0020_Type?: string;
	OData__x0024_Resources_x003a_cmscore_x?: string;
	OData__x0024_Resources_x003a_cmscore_x0?: string;
	OData__x0024_Resources_x003a_cmscore_x1?: string;
	OData__x0024_Resources_x003a_cmscore_x2?: string;
	Report_x0020_Description?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Reports_x0020_ListItemMethods
**********************************************/
export interface Reports_x0020_ListItemMethods extends Reports_x0020_ListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Reports_x0020_ListItemQuery
**********************************************/
export interface Reports_x0020_ListItemQuery extends Reports_x0020_ListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* ContentTypeSyncLogListItem
**********************************************/
export interface ContentTypeSyncLogListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	PublishedObjectName?: string;
	Failure_x0020_Stage?: string;
	Failure_x0020_Message?: string;
	Failure_x0020_Time?: any;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* ContentTypeSyncLogListItemMethods
**********************************************/
export interface ContentTypeSyncLogListItemMethods extends ContentTypeSyncLogListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* ContentTypeSyncLogListItemQuery
**********************************************/
export interface ContentTypeSyncLogListItemQuery extends ContentTypeSyncLogListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* IWConvertedFormsItem
**********************************************/
export interface IWConvertedFormsItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
	TemplateId?: string;
	FormRelativeUrl?: string;
	FormVersion?: string;
}

/*********************************************
* IWConvertedFormsItemMethods
**********************************************/
export interface IWConvertedFormsItemMethods extends IWConvertedFormsItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* IWConvertedFormsItemQuery
**********************************************/
export interface IWConvertedFormsItemQuery extends IWConvertedFormsItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* CTDemoListItem
**********************************************/
export interface CTDemoListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	URL?: SP.FieldUrlValue;
	Comments?: string;
	URLwMenu?: string;
	URLNoMenu?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	SelectFilename?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* CTDemoListItemMethods
**********************************************/
export interface CTDemoListItemMethods extends CTDemoListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* CTDemoListItemQuery
**********************************************/
export interface CTDemoListItemQuery extends CTDemoListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* DevListItem
**********************************************/
export interface DevListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	UserId?: number;
	UserStringId?: string;
	Date?: any;
	URL?: SP.FieldUrlValue;
	Multi_x0020_LookupId?: Array<number>;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* DevListItemMethods
**********************************************/
export interface DevListItemMethods extends DevListItem {
	User?: () => SP.Data.UserInfoItem;
	Multi_x0020_Lookup?: () => Array<SP.Data.DevListItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* DevListItemQuery
**********************************************/
export interface DevListItemQuery extends DevListItem {
	User?: SP.Data.UserInfoItem;
	Multi_x0020_Lookup?: Array<SP.Data.DevListItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* DeviceChannelsItem
**********************************************/
export interface DeviceChannelsItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ChannelAlias?: string;
	ChannelDescription?: string;
	UserAgentSubstrings?: string;
	ChannelIsActive?: boolean;
	ChannelPriority?: number;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* DeviceChannelsItemMethods
**********************************************/
export interface DeviceChannelsItemMethods extends DeviceChannelsItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* DeviceChannelsItemQuery
**********************************************/
export interface DeviceChannelsItemQuery extends DeviceChannelsItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* DocSetItem
**********************************************/
export interface DocSetItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	ComplianceAssetId?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
	DocumentSetDescription?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	Combine?: string;
	RepairDocument?: string;
}

/*********************************************
* DocSetItemMethods
**********************************************/
export interface DocSetItemMethods extends DocSetItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* DocSetItemQuery
**********************************************/
export interface DocSetItemQuery extends DocSetItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* Shared_x0020_DocumentsItem
**********************************************/
export interface Shared_x0020_DocumentsItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
	ClientSideApplicationId?: string;
	SharedWithUsersId?: Array<number>;
	SharedWithDetails?: string;
	ComplianceAssetId?: string;
	Category?: Array<string>;
	MediaServiceMetadata?: string;
	MediaServiceFastMetadata?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	Combine?: string;
	RepairDocument?: string;
}

/*********************************************
* Shared_x0020_DocumentsItemMethods
**********************************************/
export interface Shared_x0020_DocumentsItemMethods extends Shared_x0020_DocumentsItem {
	SharedWithUsers?: () => Array<SP.Data.UserInfoItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Shared_x0020_DocumentsItemQuery
**********************************************/
export interface Shared_x0020_DocumentsItemQuery extends Shared_x0020_DocumentsItem {
	SharedWithUsers?: Array<SP.Data.UserInfoItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* Event_x0020_CalloutListItem
**********************************************/
export interface Event_x0020_CalloutListItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
	Location?: string;
	Geolocation?: SP.FieldGeolocationValue;
	EventDate?: any;
	EndDate?: any;
	Description?: string;
	fAllDayEvent?: boolean;
	fRecurrence?: boolean;
	WorkspaceLink?: boolean;
	EventType?: number;
	UID?: any;
	RecurrenceID?: any;
	EventCanceled?: boolean;
	Duration?: number;
	RecurrenceData?: string;
	TimeZone?: number;
	XMLTZone?: string;
	MasterSeriesItemID?: number;
	Workspace?: SP.FieldUrlValue;
	ParticipantsPickerId?: Array<number>;
	ParticipantsPickerStringId?: Array<string>;
	Category?: string;
	Facilities?: Array<SP.FieldLookupValue>;
	FreeBusy?: string;
	Overbook?: string;
	Participants?: string;
	BannerUrl?: SP.FieldUrlValue;
}

/*********************************************
* Event_x0020_CalloutListItemMethods
**********************************************/
export interface Event_x0020_CalloutListItemMethods extends Event_x0020_CalloutListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	ParticipantsPicker?: () => Array<SP.Data.UserInfoItem>;
}

/*********************************************
* Event_x0020_CalloutListItemQuery
**********************************************/
export interface Event_x0020_CalloutListItemQuery extends Event_x0020_CalloutListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	ParticipantsPicker?: Array<SP.Data.UserInfoItem>;
}

/*********************************************
* FormServerTemplatesItem
**********************************************/
export interface FormServerTemplatesItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
	FormName?: string;
	FormCategory?: string;
	FormVersion?: string;
	FormId?: string;
	FormLocale?: string;
	FormDescription?: string;
	CustomContentTypeId?: string;
	ShowInCatalog?: boolean;
	LinkTemplateName?: string;
	ComplianceAssetId?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	Combine?: string;
	RepairDocument?: string;
}

/*********************************************
* FormServerTemplatesItemMethods
**********************************************/
export interface FormServerTemplatesItemMethods extends FormServerTemplatesItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* FormServerTemplatesItemQuery
**********************************************/
export interface FormServerTemplatesItemQuery extends FormServerTemplatesItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* GettingStartedListItem
**********************************************/
export interface GettingStartedListItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
	BackgroundImageLocation?: SP.FieldUrlValue;
	Description?: string;
	LinkLocation?: SP.FieldUrlValue;
	LaunchBehavior?: string;
	TileOrder?: number;
	BackgroundImageClusterX?: number;
	BackgroundImageClusterY?: number;
}

/*********************************************
* GettingStartedListItemMethods
**********************************************/
export interface GettingStartedListItemMethods extends GettingStartedListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* GettingStartedListItemQuery
**********************************************/
export interface GettingStartedListItemQuery extends GettingStartedListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* LargeListListItem
**********************************************/
export interface LargeListListItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* LargeListListItemMethods
**********************************************/
export interface LargeListListItemMethods extends LargeListListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* LargeListListItemQuery
**********************************************/
export interface LargeListListItemQuery extends LargeListListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_ltItem
**********************************************/
export interface OData__x005f_catalogs_x002f_ltItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
	TemplateTitle?: string;
	TemplateDescription?: string;
	TemplateID?: string;
	Language?: number;
	TemplateType?: number;
	BaseType?: number;
	SubType?: number;
	Hidden?: boolean;
	MajorVersion?: number;
	FeatureID?: any;
	LanguageDisplay?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_ltItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_ltItemMethods extends OData__x005f_catalogs_x002f_ltItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_ltItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_ltItemQuery extends OData__x005f_catalogs_x002f_ltItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* Long_x0020_Running_x0020_Operation_x0020_StatusItem
**********************************************/
export interface Long_x0020_Running_x0020_Operation_x0020_StatusItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	Url_x0020_to_x0020_Navigate_x002?: string;
	Operations_x0020_Performed?: number;
	Url_x0020_to_x0020_Retry?: string;
	Status_x0020_Description?: string;
	Status?: string;
	Time_x0020_Last_x0020_Updated?: any;
	Time_x0020_Started?: any;
	Total_x0020_number_x0020_of_x002?: number;
	User_x0020_Name?: string;
	Wait_x0020_Message?: string;
	Errors_x0020_Encountered?: string;
	Sucesses_x0020_Encountered?: string;
	User_x0020_Can_x0020_Cancel?: boolean;
	User_x0020_Requested_x0020_Cance?: boolean;
	Redirect_x0020_When_x0020_Finish?: boolean;
	Gears_x0020_Image?: string;
	Previous_x0020_JobId?: any;
	Original_x0020_JobId?: any;
	Retry_x0020_Information?: string;
	Type_x0020_Of_x0020_Job?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Long_x0020_Running_x0020_Operation_x0020_StatusItemMethods
**********************************************/
export interface Long_x0020_Running_x0020_Operation_x0020_StatusItemMethods extends Long_x0020_Running_x0020_Operation_x0020_StatusItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Long_x0020_Running_x0020_Operation_x0020_StatusItemQuery
**********************************************/
export interface Long_x0020_Running_x0020_Operation_x0020_StatusItemQuery extends Long_x0020_Running_x0020_Operation_x0020_StatusItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_MaintenanceLogsItem
**********************************************/
export interface OData__x005f_catalogs_x002f_MaintenanceLogsItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_MaintenanceLogsItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_MaintenanceLogsItemMethods extends OData__x005f_catalogs_x002f_MaintenanceLogsItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_MaintenanceLogsItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_MaintenanceLogsItemQuery extends OData__x005f_catalogs_x002f_MaintenanceLogsItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* MapListItem
**********************************************/
export interface MapListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	Location?: SP.FieldGeolocationValue;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* MapListItemMethods
**********************************************/
export interface MapListItemMethods extends MapListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* MapListItemQuery
**********************************************/
export interface MapListItemQuery extends MapListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_masterpageItem
**********************************************/
export interface OData__x005f_catalogs_x002f_masterpageItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	MasterPageDescription?: string;
	UIVersion?: Array<string>;
	DefaultCssFile?: string;
	DisplayTemplateJSTemplateHidden?: boolean;
	DisplayTemplateJSTargetControlType?: string;
	DisplayTemplateJSIconUrl?: SP.FieldUrlValue;
	DisplayTemplateJSTemplateType?: string;
	DisplayTemplateJSTargetScope?: string;
	DisplayTemplateJSTargetListTemplate?: string;
	DisplayTemplateJSTargetContentType?: string;
	DisplayTemplateJSConfigurationUrl?: SP.FieldUrlValue;
	Title?: string;
	TemplateHidden?: boolean;
	TargetControlType?: Array<string>;
	CrawlerXSLFile?: SP.FieldUrlValue;
	DisplayTemplateLevel?: string;
	ManagedPropertyMapping?: string;
	CompatibleSearchDataTypes?: Array<string>;
	CompatibleManagedProperties?: string;
	PublishingContactId?: number;
	PublishingContactStringId?: string;
	PublishingPreviewImage?: SP.FieldUrlValue;
	PublishingHidden?: boolean;
	OData__PublishingMigratedGuid?: any;
	PublishingAssociatedVariations?: string;
	AuthenticatedCacheProfileId?: number;
	AnonymousCacheProfileId?: number;
	HtmlDesignFromMaster?: SP.FieldUrlValue;
	HtmlDesignAssociated?: boolean;
	HtmlDesignStatusAndPreview?: SP.FieldUrlValue;
	HtmlDesignPreviewUrl?: SP.FieldUrlValue;
	ComplianceAssetId?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	FilenameMenuNoLink?: string;
	MasterPageIcon?: string;
	FilenameNoLink?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_masterpageItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_masterpageItemMethods extends OData__x005f_catalogs_x002f_masterpageItem {
	PublishingContact?: () => SP.Data.UserInfoItem;
	AuthenticatedCacheProfile?: () => SP.Data.Cache_x0020_ProfilesItem;
	AnonymousCacheProfile?: () => SP.Data.Cache_x0020_ProfilesItem;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_masterpageItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_masterpageItemQuery extends OData__x005f_catalogs_x002f_masterpageItem {
	PublishingContact?: SP.Data.UserInfoItem;
	AuthenticatedCacheProfile?: SP.Data.Cache_x0020_ProfilesItem;
	AnonymousCacheProfile?: SP.Data.Cache_x0020_ProfilesItem;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* PublishedFeedListItem
**********************************************/
export interface PublishedFeedListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	MicroBlogType?: number;
	PostAuthor?: string;
	DefinitionId?: number;
	RootPostID?: number;
	RootPostOwnerID?: string;
	RootPostUniqueID?: string;
	ReplyCount?: number;
	ReferenceID?: string;
	Attributes?: number;
	Content?: string;
	ContentData?: string;
	SearchContent?: string;
	RefRoot?: string;
	RefReply?: string;
	PostSource?: string;
	PeopleCount?: number;
	PeopleList?: string;
	MediaLinkType?: number;
	MediaLinkDescription?: string;
	PostSourceUri?: string;
	MediaLinkURI?: SP.FieldUrlValue;
	MediaLinkUISnippet?: SP.FieldUrlValue;
	MediaLinkContentURI?: SP.FieldUrlValue;
	MediaLength?: number;
	MediaWidth?: number;
	MediaHeight?: number;
	MediaPreviewWidth?: number;
	MediaPreviewHeight?: number;
	MediaActionWidth?: number;
	MediaActionHeight?: number;
	MediaActionClickUrl?: SP.FieldUrlValue;
	MediaActionClickKind?: number;
	eMailSubscribers?: string;
	eMailUnsubscribed?: string;
	RemoteLocation?: string;
	LikesCount?: number;
	LikedById?: Array<number>;
	LikedByStringId?: Array<string>;
	HashTags?: Array<SP.Taxonomy.TaxonomyFieldValue>;
	j33b1bc20532487296f1bbbdead35a56?: string;
	TaxCatchAllId?: Array<number>;
	TaxCatchAllLabelId?: Array<number>;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* PublishedFeedListItemMethods
**********************************************/
export interface PublishedFeedListItemMethods extends PublishedFeedListItem {
	LikedBy?: () => Array<SP.Data.UserInfoItem>;
	TaxCatchAll?: () => Array<SP.Data.TaxonomyHiddenListListItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* PublishedFeedListItemQuery
**********************************************/
export interface PublishedFeedListItemQuery extends PublishedFeedListItem {
	LikedBy?: Array<SP.Data.UserInfoItem>;
	TaxCatchAll?: Array<SP.Data.TaxonomyHiddenListListItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* TaxonomyHiddenListListItem
**********************************************/
export interface TaxonomyHiddenListListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	IdForTermStore?: string;
	IdForTerm?: string;
	IdForTermSet?: string;
	Term?: string;
	Path?: string;
	CatchAllData?: string;
	CatchAllDataLabel?: string;
	Term1031?: string;
	Path1031?: string;
	Term1036?: string;
	Path1036?: string;
	Term2108?: string;
	Path2108?: string;
	Term1057?: string;
	Path1057?: string;
	Term1044?: string;
	Path1044?: string;
	Term1049?: string;
	Path1049?: string;
	Term2052?: string;
	Path2052?: string;
	Term1028?: string;
	Path1028?: string;
	Term1081?: string;
	Path1081?: string;
	Term1086?: string;
	Path1086?: string;
	Term1060?: string;
	Path1060?: string;
	Term1030?: string;
	Path1030?: string;
	Term1069?: string;
	Path1069?: string;
	Term1035?: string;
	Path1035?: string;
	Term1043?: string;
	Path1043?: string;
	Term1051?: string;
	Path1051?: string;
	Term1068?: string;
	Path1068?: string;
	Term1026?: string;
	Path1026?: string;
	Term1110?: string;
	Path1110?: string;
	Term1055?: string;
	Path1055?: string;
	Term1106?: string;
	Path1106?: string;
	Term1050?: string;
	Path1050?: string;
	Term1038?: string;
	Path1038?: string;
	Term1042?: string;
	Path1042?: string;
	Term1063?: string;
	Path1063?: string;
	Term1071?: string;
	Path1071?: string;
	Term1033?: string;
	Path1033?: string;
	Term1025?: string;
	Path1025?: string;
	Term1041?: string;
	Path1041?: string;
	Term1062?: string;
	Path1062?: string;
	Term1164?: string;
	Path1164?: string;
	Term1046?: string;
	Path1046?: string;
	Term2070?: string;
	Path2070?: string;
	Term9242?: string;
	Path9242?: string;
	Term1054?: string;
	Path1054?: string;
	Term5146?: string;
	Path5146?: string;
	Term1029?: string;
	Path1029?: string;
	Term3082?: string;
	Path3082?: string;
	Term1037?: string;
	Path1037?: string;
	Term1045?: string;
	Path1045?: string;
	Term10266?: string;
	Path10266?: string;
	Term2074?: string;
	Path2074?: string;
	Term1058?: string;
	Path1058?: string;
	Term1032?: string;
	Path1032?: string;
	Term1061?: string;
	Path1061?: string;
	Term1040?: string;
	Path1040?: string;
	Term1087?: string;
	Path1087?: string;
	Term1053?: string;
	Path1053?: string;
	Term1066?: string;
	Path1066?: string;
	Term1027?: string;
	Path1027?: string;
	Term1048?: string;
	Path1048?: string;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* TaxonomyHiddenListListItemMethods
**********************************************/
export interface TaxonomyHiddenListListItemMethods extends TaxonomyHiddenListListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* TaxonomyHiddenListListItemQuery
**********************************************/
export interface TaxonomyHiddenListListItemQuery extends TaxonomyHiddenListListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* MyContactsListItem
**********************************************/
export interface MyContactsListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	MCPhoneNumber?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* MyContactsListItemMethods
**********************************************/
export interface MyContactsListItemMethods extends MyContactsListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* MyContactsListItemQuery
**********************************************/
export interface MyContactsListItemQuery extends MyContactsListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* MyListListItem
**********************************************/
export interface MyListListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	EIAddress?: string;
	EICity?: string;
	EIEMail?: string;
	EIPostalCode?: string;
	EIState?: string;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* MyListListItemMethods
**********************************************/
export interface MyListListItemMethods extends MyListListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* MyListListItemQuery
**********************************************/
export interface MyListListItemQuery extends MyListListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* My_x0020_Lists_x0020_InfoListItem
**********************************************/
export interface My_x0020_Lists_x0020_InfoListItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* My_x0020_Lists_x0020_InfoListItemMethods
**********************************************/
export interface My_x0020_Lists_x0020_InfoListItemMethods extends My_x0020_Lists_x0020_InfoListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* My_x0020_Lists_x0020_InfoListItemQuery
**********************************************/
export interface My_x0020_Lists_x0020_InfoListItemQuery extends My_x0020_Lists_x0020_InfoListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Notification_x0020_PagesItem
**********************************************/
export interface Notification_x0020_PagesItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	PageURL?: SP.FieldUrlValue;
	DeliveryDate?: any;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Notification_x0020_PagesItemMethods
**********************************************/
export interface Notification_x0020_PagesItemMethods extends Notification_x0020_PagesItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Notification_x0020_PagesItemQuery
**********************************************/
export interface Notification_x0020_PagesItemQuery extends Notification_x0020_PagesItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* ProjectPolicyItemListItem
**********************************************/
export interface ProjectPolicyItemListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ProjectWebGuid?: any;
	ProjectWebUrl?: SP.FieldUrlValue;
	ProjectParentWebGuid?: any;
	ProjectCreateDate?: any;
	ProjectCloseDate?: any;
	ProjectExpirationDate?: any;
	ProjectIsClosed?: boolean;
	ProjectNumberOfPostpone?: number;
	ProjectTeamMailBoxId?: string;
	ProjectTeamMailBoxWorkItemId?: any;
	OData__dlc_ExpireDate?: any;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* ProjectPolicyItemListItemMethods
**********************************************/
export interface ProjectPolicyItemListItemMethods extends ProjectPolicyItemListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* ProjectPolicyItemListItemQuery
**********************************************/
export interface ProjectPolicyItemListItemQuery extends ProjectPolicyItemListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Quick_x0020_Deploy_x0020_ItemsItem
**********************************************/
export interface Quick_x0020_Deploy_x0020_ItemsItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	JobId?: any;
	ItemUrl?: SP.FieldUrlValue;
	ItemType?: number;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Quick_x0020_Deploy_x0020_ItemsItemMethods
**********************************************/
export interface Quick_x0020_Deploy_x0020_ItemsItemMethods extends Quick_x0020_Deploy_x0020_ItemsItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Quick_x0020_Deploy_x0020_ItemsItemQuery
**********************************************/
export interface Quick_x0020_Deploy_x0020_ItemsItemQuery extends Quick_x0020_Deploy_x0020_ItemsItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Relationships_x0020_ListItem
**********************************************/
export interface Relationships_x0020_ListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	GroupGuid?: any;
	Status?: number;
	EntryType?: number;
	Label?: any;
	ObjectID?: SP.FieldUrlValue;
	ParentAreaID?: SP.FieldUrlValue;
	Deleted?: boolean;
	LastPropagatedSourcePageVersion?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Relationships_x0020_ListItemMethods
**********************************************/
export interface Relationships_x0020_ListItemMethods extends Relationships_x0020_ListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Relationships_x0020_ListItemQuery
**********************************************/
export interface Relationships_x0020_ListItemQuery extends Relationships_x0020_ListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* ReusableContentItem
**********************************************/
export interface ReusableContentItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	Comments?: string;
	ContentCategory?: string;
	AutomaticUpdate?: boolean;
	ShowInRibbon?: boolean;
	ReusableHtml?: string;
	ReusableText?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* ReusableContentItemMethods
**********************************************/
export interface ReusableContentItemMethods extends ReusableContentItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* ReusableContentItemQuery
**********************************************/
export interface ReusableContentItemQuery extends ReusableContentItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Sharing_x0020_LinksItem
**********************************************/
export interface Sharing_x0020_LinksItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	SharingDocId?: any;
	CurrentLink?: number;
	AvailableLinks?: string;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* Sharing_x0020_LinksItemMethods
**********************************************/
export interface Sharing_x0020_LinksItemMethods extends Sharing_x0020_LinksItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Sharing_x0020_LinksItemQuery
**********************************************/
export interface Sharing_x0020_LinksItemQuery extends Sharing_x0020_LinksItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* SiteAssetsItem
**********************************************/
export interface SiteAssetsItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
	SharedWithUsersId?: Array<number>;
	SharedWithDetails?: string;
	ComplianceAssetId?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	Combine?: string;
	RepairDocument?: string;
}

/*********************************************
* SiteAssetsItemMethods
**********************************************/
export interface SiteAssetsItemMethods extends SiteAssetsItem {
	SharedWithUsers?: () => Array<SP.Data.UserInfoItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* SiteAssetsItemQuery
**********************************************/
export interface SiteAssetsItemQuery extends SiteAssetsItem {
	SharedWithUsers?: Array<SP.Data.UserInfoItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* SiteCollectionDocumentsItem
**********************************************/
export interface SiteCollectionDocumentsItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
	PublishingStartDate?: any;
	PublishingExpirationDate?: any;
	ComplianceAssetId?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	Combine?: string;
	RepairDocument?: string;
}

/*********************************************
* SiteCollectionDocumentsItemMethods
**********************************************/
export interface SiteCollectionDocumentsItemMethods extends SiteCollectionDocumentsItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* SiteCollectionDocumentsItemQuery
**********************************************/
export interface SiteCollectionDocumentsItemQuery extends SiteCollectionDocumentsItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* SiteCollectionImagesItem
**********************************************/
export interface SiteCollectionImagesItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	PreviewOnForm?: string;
	ThumbnailOnForm?: string;
	OData__Author?: string;
	FileType?: string;
	ImageSize?: string;
	Title?: string;
	ImageWidth?: number;
	ImageHeight?: number;
	ImageCreateDate?: any;
	OData__Comments?: string;
	ThumbnailExists?: boolean;
	PreviewExists?: boolean;
	EncodedAbsThumbnailUrl?: string;
	EncodedAbsWebImgUrl?: string;
	NameOrTitle?: string;
	Keywords?: string;
	wic_System_Copyright?: string;
	AlternateThumbnailUrl?: SP.FieldUrlValue;
	MediaLengthInSeconds?: number;
	PublishingStartDate?: any;
	PublishingExpirationDate?: any;
	VideoWidthInPixels?: number;
	VideoHeightInPixels?: number;
	VideoRenditionLabel?: string;
	VideoRenditionBitRate?: number;
	VideoSetDescription?: string;
	VideoSetOwnerId?: number;
	VideoSetOwnerStringId?: string;
	VideoSetThumbnailTimeIndex?: number;
	VideoSetDefaultEncoding?: SP.FieldUrlValue;
	VideoSetUserOverrideEncoding?: SP.FieldUrlValue;
	VideoSetExternalLink?: SP.FieldUrlValue;
	VideoSetEmbedCode?: string;
	VideoSetShowDownloadLink?: boolean;
	VideoSetShowEmbedLink?: boolean;
	VideoSetRenditionsInfo?: string;
	PeopleInMediaId?: Array<number>;
	PeopleInMediaStringId?: Array<string>;
	NoCrawl?: boolean;
	ComplianceAssetId?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
}

/*********************************************
* SiteCollectionImagesItemMethods
**********************************************/
export interface SiteCollectionImagesItemMethods extends SiteCollectionImagesItem {
	VideoSetOwner?: () => SP.Data.UserInfoItem;
	PeopleInMedia?: () => Array<SP.Data.UserInfoItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* SiteCollectionImagesItemQuery
**********************************************/
export interface SiteCollectionImagesItemQuery extends SiteCollectionImagesItem {
	VideoSetOwner?: SP.Data.UserInfoItem;
	PeopleInMedia?: Array<SP.Data.UserInfoItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* SitePagesItem
**********************************************/
export interface SitePagesItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	WikiField?: string;
	Title?: string;
	ClientSideApplicationId?: any;
	PageLayoutType?: string;
	CanvasContent1?: string;
	BannerImageUrl?: SP.FieldUrlValue;
	BannerImageOffset?: string;
	Description?: string;
	PromotedState?: number;
	FirstPublishedDate?: any;
	LinkTitle?: string;
	SharedWithUsersId?: Array<number>;
	SharedWithDetails?: string;
	LayoutWebpartsContent?: string;
	ComplianceAssetId?: string;
	OData__OriginalSourceUrl?: string;
	OData__OriginalSourceSiteId?: any;
	OData__OriginalSourceWebId?: any;
	OData__OriginalSourceListId?: any;
	OData__OriginalSourceItemId?: any;
	OData__AuthorBylineId?: Array<number>;
	_AuthorBylineStringId?: Array<string>;
	OData__TopicHeader?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
}

/*********************************************
* SitePagesItemMethods
**********************************************/
export interface SitePagesItemMethods extends SitePagesItem {
	SharedWithUsers?: () => Array<SP.Data.UserInfoItem>;
	OData__AuthorByline?: () => Array<SP.Data.UserInfoItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* SitePagesItemQuery
**********************************************/
export interface SitePagesItemQuery extends SitePagesItem {
	SharedWithUsers?: Array<SP.Data.UserInfoItem>;
	OData__AuthorByline?: Array<SP.Data.UserInfoItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_solutionsItem
**********************************************/
export interface OData__x005f_catalogs_x002f_solutionsItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
	SolutionId?: any;
	SolutionTitle?: string;
	SolutionDescription?: string;
	SolutionHash?: string;
	ComputedStatus?: string;
	ComputedQuota?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_solutionsItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_solutionsItemMethods extends OData__x005f_catalogs_x002f_solutionsItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_solutionsItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_solutionsItemQuery extends OData__x005f_catalogs_x002f_solutionsItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* SPReactListItem
**********************************************/
export interface SPReactListItem extends SP.ListItem {
	Calculated_x0020_Title?: string;
	Title?: string;
	TestBoolean?: boolean;
	TestChoice?: string;
	TestMultiChoice?: string;
	TestComments?: string;
	TestDate?: any;
	TestDateTime?: any;
	TestNote?: string;
	TestNumberDecimal?: number;
	TestNumberInteger?: number;
	Percentage?: number;
	TestUrl?: SP.FieldUrlValue;
	TestUserId?: number;
	TestUserStringId?: string;
	TestMultiUserId?: Array<number>;
	TestMultiUserStringId?: Array<string>;
	TestLookupId?: number;
	TestMultiLookupId?: Array<number>;
	TestManagedMetadata?: Array<SP.Taxonomy.TaxonomyFieldValue>;
	TestNumberPercentage?: number;
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	g0e355e0ec7e416095dbaecb58b958cf?: string;
	TaxCatchAllId?: Array<number>;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* SPReactListItemMethods
**********************************************/
export interface SPReactListItemMethods extends SPReactListItem {
	TestUser?: () => SP.Data.UserInfoItem;
	TestMultiUser?: () => Array<SP.Data.UserInfoItem>;
	TestLookup?: () => SP.Data.SPReactListItem;
	TestMultiLookup?: () => Array<SP.Data.SPReactListItem>;
	TaxCatchAll?: () => Array<SP.Data.TaxonomyHiddenListListItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* SPReactListItemQuery
**********************************************/
export interface SPReactListItemQuery extends SPReactListItem {
	TestUser?: SP.Data.UserInfoItem;
	TestMultiUser?: Array<SP.Data.UserInfoItem>;
	TestLookup?: SP.Data.SPReactListItem;
	TestMultiLookup?: Array<SP.Data.SPReactListItem>;
	TaxCatchAll?: Array<SP.Data.TaxonomyHiddenListListItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* SPRESTListDemoListItem
**********************************************/
export interface SPRESTListDemoListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ParentID?: number;
	DemoChoice?: string;
	DemoNote?: string;
	DemoUserId?: number;
	DemoUserStringId?: string;
	ChildChoice?: string;
	ChildNote?: string;
	ChildText?: string;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* SPRESTListDemoListItemMethods
**********************************************/
export interface SPRESTListDemoListItemMethods extends SPRESTListDemoListItem {
	DemoUser?: () => SP.Data.UserInfoItem;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* SPRESTListDemoListItemQuery
**********************************************/
export interface SPRESTListDemoListItemQuery extends SPRESTListDemoListItem {
	DemoUser?: SP.Data.UserInfoItem;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Style_x0020_LibraryItem
**********************************************/
export interface Style_x0020_LibraryItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	Combine?: string;
	RepairDocument?: string;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
}

/*********************************************
* Style_x0020_LibraryItemMethods
**********************************************/
export interface Style_x0020_LibraryItemMethods extends Style_x0020_LibraryItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Style_x0020_LibraryItemQuery
**********************************************/
export interface Style_x0020_LibraryItemQuery extends Style_x0020_LibraryItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* PublishedLinksItem
**********************************************/
export interface PublishedLinksItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	PublishedLinksURL?: SP.FieldUrlValue;
	PublishedLinksDescription?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* PublishedLinksItemMethods
**********************************************/
export interface PublishedLinksItemMethods extends PublishedLinksItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* PublishedLinksItemQuery
**********************************************/
export interface PublishedLinksItemQuery extends PublishedLinksItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* TeamMembersListItem
**********************************************/
export interface TeamMembersListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	TeamMemberId?: number;
	TeamMemberStringId?: string;
	CheckInStatus_0?: string;
	CheckInStatus?: SP.Taxonomy.TaxonomyFieldValue;
	TaxCatchAllId?: Array<number>;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* TeamMembersListItemMethods
**********************************************/
export interface TeamMembersListItemMethods extends TeamMembersListItem {
	TeamMember?: () => SP.Data.UserInfoItem;
	TaxCatchAll?: () => Array<SP.Data.TaxonomyHiddenListListItem>;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* TeamMembersListItemQuery
**********************************************/
export interface TeamMembersListItemQuery extends TeamMembersListItem {
	TeamMember?: SP.Data.UserInfoItem;
	TaxCatchAll?: Array<SP.Data.TaxonomyHiddenListListItem>;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* TestListItem
**********************************************/
export interface TestListItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* TestListItemMethods
**********************************************/
export interface TestListItemMethods extends TestListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* TestListItemQuery
**********************************************/
export interface TestListItemQuery extends TestListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* TestProjectListItem
**********************************************/
export interface TestProjectListItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	TPCategory?: string;
	TPLink?: SP.FieldUrlValue;
	ComplianceAssetId?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
}

/*********************************************
* TestProjectListItemMethods
**********************************************/
export interface TestProjectListItemMethods extends TestProjectListItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* TestProjectListItemQuery
**********************************************/
export interface TestProjectListItemQuery extends TestProjectListItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_themeItem
**********************************************/
export interface OData__x005f_catalogs_x002f_themeItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
	ThemeDescription?: string;
	OData__ThemePreviewJson?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_themeItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_themeItemMethods extends OData__x005f_catalogs_x002f_themeItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_themeItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_themeItemQuery extends OData__x005f_catalogs_x002f_themeItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* Translation_x0020_PackagesItem
**********************************************/
export interface Translation_x0020_PackagesItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	Title?: string;
	TemplateUrl?: string;
	xd_ProgID?: string;
	xd_Signature?: boolean;
	OData__ShortcutUrl?: SP.FieldUrlValue;
	OData__ShortcutSiteId?: any;
	OData__ShortcutWebId?: any;
	OData__ShortcutUniqueId?: any;
	TranslationPackageGroupId?: any;
	OData__dlc_ExpireDateSaved?: any;
	OData__dlc_ExpireDate?: any;
	ComplianceAssetId?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	Combine?: string;
	RepairDocument?: string;
}

/*********************************************
* Translation_x0020_PackagesItemMethods
**********************************************/
export interface Translation_x0020_PackagesItemMethods extends Translation_x0020_PackagesItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Translation_x0020_PackagesItemQuery
**********************************************/
export interface Translation_x0020_PackagesItemQuery extends Translation_x0020_PackagesItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* Translation_x0020_StatusItem
**********************************************/
export interface Translation_x0020_StatusItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	TranslationStateJobId?: any;
	TranslationStateStartTime?: any;
	TranslationStateEndTime?: any;
	TranslationStateExportTime?: any;
	TranslationStateUploadTime?: any;
	TranslationStateTranslationType?: string;
	TranslationStateTranslatorName?: string;
	TranslationStateExportRequestingId?: number;
	TranslationStateExportRequestingStringId?: string;
	TranslationStateImportRequestingId?: number;
	TranslationStateImportRequestingStringId?: string;
	TranslationStateListId?: string;
	TranslationStateWebId?: string;
	TranslationStateListUrl?: SP.FieldUrlValue;
	TranslationStateItemInformation?: string;
	TranslationStateExportJobSize?: number;
	TranslationStateImportJobSize?: number;
	TranslationStateDownloadLink?: SP.FieldUrlValue;
	TranslationStateStatus?: string;
	TranslationStateNumberOfItems?: number;
	TranslationStateErrors?: string;
	TranslationStateTermInformation?: string;
	SelectFilename?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Translation_x0020_StatusItemMethods
**********************************************/
export interface Translation_x0020_StatusItemMethods extends Translation_x0020_StatusItem {
	TranslationStateExportRequesting?: () => SP.Data.UserInfoItem;
	TranslationStateImportRequesting?: () => SP.Data.UserInfoItem;
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Translation_x0020_StatusItemQuery
**********************************************/
export interface Translation_x0020_StatusItemQuery extends Translation_x0020_StatusItem {
	TranslationStateExportRequesting?: SP.Data.UserInfoItem;
	TranslationStateImportRequesting?: SP.Data.UserInfoItem;
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* Variation_x0020_LabelsItem
**********************************************/
export interface Variation_x0020_LabelsItem extends SP.ListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	File_x0020_Type?: string;
	Flag_x0020_Control_x0020_Display?: string;
	Language?: string;
	Locale?: string;
	Is_x0020_Source?: boolean;
	Description?: string;
	Hierarchy_x0020_Creation_x0020_M?: string;
	Hierarchy_x0020_Is_x0020_Created?: boolean;
	Top_x0020_Web_x0020_URL?: SP.FieldUrlValue;
	NotificationMode?: boolean;
	IsMachineTranslationEnabledField?: boolean;
	IsHumanTranslationEnabledFieldNa?: boolean;
	MachineTranslationLanguageFieldN?: string;
	HumanTranslationLanguageFieldNam?: string;
	ID?: number;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	Edit?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
}

/*********************************************
* Variation_x0020_LabelsItemMethods
**********************************************/
export interface Variation_x0020_LabelsItemMethods extends Variation_x0020_LabelsItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
}

/*********************************************
* Variation_x0020_LabelsItemQuery
**********************************************/
export interface Variation_x0020_LabelsItemQuery extends Variation_x0020_LabelsItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_wpItem
**********************************************/
export interface OData__x005f_catalogs_x002f_wpItem extends SP.ListItem {
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	FileLeafRef?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	Title?: string;
	WebPartDescription?: string;
	WebPartAssembly?: string;
	WebPartTypeName?: string;
	WebPartPartImageLarge?: string;
	Group?: string;
	QuickAddGroups?: Array<string>;
	ComplianceAssetId?: string;
	ID?: number;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	LinkWebPart?: string;
	WebPartIcon?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_wpItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_wpItemMethods extends OData__x005f_catalogs_x002f_wpItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_wpItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_wpItemQuery extends OData__x005f_catalogs_x002f_wpItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_wfpubItem
**********************************************/
export interface OData__x005f_catalogs_x002f_wfpubItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Created?: any;
	AuthorId?: number;
	Modified?: any;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	CheckoutUserId?: number;
	FileLeafRef?: string;
	UniqueId?: any;
	OData__CheckinComment?: string;
	LinkCheckedOutTitle?: string;
	Modified_x0020_By?: string;
	Created_x0020_By?: string;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__SourceUrl?: string;
	OData__SharedFileIndex?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	FileSizeDisplay?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	SelectTitle?: string;
	SelectFilename?: string;
	Edit?: string;
	owshiddenversion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowVersion?: number;
	WorkflowInstanceID?: any;
	ComplianceAssetId?: string;
	BaseAssociationGuid?: string;
	XomlUrl?: string;
	RulesUrl?: string;
	NoCodeVisibility?: string;
	AssociatedListId?: string;
	RestrictContentTypeId?: string;
	WorkflowDisplayName?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_wfpubItemMethods
**********************************************/
export interface OData__x005f_catalogs_x002f_wfpubItemMethods extends OData__x005f_catalogs_x002f_wfpubItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	CheckoutUser?: () => SP.Data.UserInfoItem;
}

/*********************************************
* OData__x005f_catalogs_x002f_wfpubItemQuery
**********************************************/
export interface OData__x005f_catalogs_x002f_wfpubItemQuery extends OData__x005f_catalogs_x002f_wfpubItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	CheckoutUser?: SP.Data.UserInfoItem;
}

/*********************************************
* WorkflowTasksItem
**********************************************/
export interface WorkflowTasksItem extends SP.ListItem {
	ID?: number;
	ContentTypeId?: string;
	Title?: string;
	Modified?: any;
	Created?: any;
	AuthorId?: number;
	EditorId?: number;
	OData__HasCopyDestinations?: boolean;
	OData__CopySource?: string;
	owshiddenversion?: number;
	WorkflowVersion?: number;
	OData__UIVersion?: number;
	OData__UIVersionString?: string;
	Attachments?: boolean;
	OData__ModerationStatus?: number;
	OData__ModerationComments?: string;
	Edit?: string;
	LinkTitleNoMenu?: string;
	LinkTitle?: string;
	LinkTitle2?: string;
	SelectTitle?: string;
	InstanceID?: number;
	Order?: number;
	GUID?: any;
	WorkflowInstanceID?: any;
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	FileLeafRef?: string;
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	BaseName?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	OData__IsRecord?: string;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
	PredecessorsId?: Array<number>;
	Priority?: string;
	Status?: string;
	PercentComplete?: number;
	AssignedToId?: number;
	AssignedToStringId?: string;
	TaskGroupId?: number;
	TaskGroupStringId?: string;
	Body?: string;
	StartDate?: any;
	DueDate?: any;
	RelatedItems?: string;
}

/*********************************************
* WorkflowTasksItemMethods
**********************************************/
export interface WorkflowTasksItemMethods extends WorkflowTasksItem {
	Author?: () => SP.Data.UserInfoItem;
	Editor?: () => SP.Data.UserInfoItem;
	Predecessors?: () => Array<SP.Data.WorkflowTasksItem>;
	AssignedTo?: () => SP.Data.UserInfoItem;
	TaskGroup?: () => SP.Data.UserInfoItem;
}

/*********************************************
* WorkflowTasksItemQuery
**********************************************/
export interface WorkflowTasksItemQuery extends WorkflowTasksItem {
	Author?: SP.Data.UserInfoItem;
	Editor?: SP.Data.UserInfoItem;
	Predecessors?: Array<SP.Data.WorkflowTasksItem>;
	AssignedTo?: SP.Data.UserInfoItem;
	TaskGroup?: SP.Data.UserInfoItem;
}
