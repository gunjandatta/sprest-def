import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* AppPackagesListItem
**********************************************/
export interface AppPackagesListItem {
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
* AppPackagesListItemCollections
**********************************************/
export interface AppPackagesListItemCollections {

}

/*********************************************
* AppPackagesListItemOData
**********************************************/
export interface AppPackagesListItemOData extends Base.IBaseResult, AppPackagesListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* UserInfoItem
**********************************************/
export interface UserInfoItem {
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
* UserInfoItemCollections
**********************************************/
export interface UserInfoItemCollections {

}

/*********************************************
* UserInfoItemOData
**********************************************/
export interface UserInfoItemOData extends Base.IBaseResult, UserInfoItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_appdataItem
**********************************************/
export interface OData__x005f_catalogs_x002f_appdataItem {
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
* OData__x005f_catalogs_x002f_appdataItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_appdataItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_appdataItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_appdataItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_appdataItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_appfilesItem
**********************************************/
export interface OData__x005f_catalogs_x002f_appfilesItem {
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
* OData__x005f_catalogs_x002f_appfilesItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_appfilesItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_appfilesItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_appfilesItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_appfilesItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* DraftAppsListItem
**********************************************/
export interface DraftAppsListItem {
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
* DraftAppsListItemCollections
**********************************************/
export interface DraftAppsListItemCollections {

}

/*********************************************
* DraftAppsListItemOData
**********************************************/
export interface DraftAppsListItemOData extends Base.IBaseResult, DraftAppsListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* BinsListItem
**********************************************/
export interface BinsListItem {
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
* BinsListItemCollections
**********************************************/
export interface BinsListItemCollections {

}

/*********************************************
* BinsListItemOData
**********************************************/
export interface BinsListItemOData extends Base.IBaseResult, BinsListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Cache_x0020_ProfilesItem
**********************************************/
export interface Cache_x0020_ProfilesItem {
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
* Cache_x0020_ProfilesItemCollections
**********************************************/
export interface Cache_x0020_ProfilesItemCollections {

}

/*********************************************
* Cache_x0020_ProfilesItemOData
**********************************************/
export interface Cache_x0020_ProfilesItemOData extends Base.IBaseResult, Cache_x0020_ProfilesItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_designItem
**********************************************/
export interface OData__x005f_catalogs_x002f_designItem {
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
* OData__x005f_catalogs_x002f_designItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_designItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_designItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_designItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_designItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Reports_x0020_ListItem
**********************************************/
export interface Reports_x0020_ListItem {
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
* Reports_x0020_ListItemCollections
**********************************************/
export interface Reports_x0020_ListItemCollections {

}

/*********************************************
* Reports_x0020_ListItemOData
**********************************************/
export interface Reports_x0020_ListItemOData extends Base.IBaseResult, Reports_x0020_ListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ContentTypeSyncLogListItem
**********************************************/
export interface ContentTypeSyncLogListItem {
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
* ContentTypeSyncLogListItemCollections
**********************************************/
export interface ContentTypeSyncLogListItemCollections {

}

/*********************************************
* ContentTypeSyncLogListItemOData
**********************************************/
export interface ContentTypeSyncLogListItemOData extends Base.IBaseResult, ContentTypeSyncLogListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IWConvertedFormsItem
**********************************************/
export interface IWConvertedFormsItem {
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
* IWConvertedFormsItemCollections
**********************************************/
export interface IWConvertedFormsItemCollections {

}

/*********************************************
* IWConvertedFormsItemOData
**********************************************/
export interface IWConvertedFormsItemOData extends Base.IBaseResult, IWConvertedFormsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* CTDemoListItem
**********************************************/
export interface CTDemoListItem {
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
* CTDemoListItemCollections
**********************************************/
export interface CTDemoListItemCollections {

}

/*********************************************
* CTDemoListItemOData
**********************************************/
export interface CTDemoListItemOData extends Base.IBaseResult, CTDemoListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IDevListItem
**********************************************/
export interface IDevListItem extends DevListItemCollections, DevListItemMethods, Base.IBaseQuery<IDevListItemQuery> {

}

/*********************************************
* IDevListItemCollection
**********************************************/
export interface IDevListItemCollection extends Base.IBaseResults<DevListItem> {
	done?: (resolve: (value?: Array<DevListItem>) => void) => void;
}

/*********************************************
* IDevListItemQueryCollection
**********************************************/
export interface IDevListItemQueryCollection extends Base.IBaseResults<DevListItemOData> {
	done?: (resolve: (value?: Array<DevListItemOData>) => void) => void;
}

/*********************************************
* IDevListItemQuery
**********************************************/
export interface IDevListItemQuery extends DevListItemOData, DevListItemMethods {

}

/*********************************************
* DevListItem
**********************************************/
export interface DevListItem extends SP.ListItem, Base.IBaseResult, DevListItemProps, DevListItemCollections, DevListItemMethods {

}

/*********************************************
* DevListItemProps
**********************************************/
export interface DevListItemProps {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	UserId?: number;
	UserStringId?: string;
	Date?: any;
	URL?: SP.FieldUrlValue;
	Multi_x0020_LookupId?: { results: Array<number> };
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
* DevListItemPropMethods
**********************************************/
export interface DevListItemPropMethods {
	User(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* DevListItemCollections
**********************************************/
export interface DevListItemCollections extends DevListItemPropMethods {
	Multi_x0020_Lookup(): Base.IBaseCollection<SP.Data.DevListItem, SP.Data.DevListItemOData>;
	Multi_x0020_Lookup(id: string | number): Base.IBaseQuery<SP.Data.DevListItem, SP.Data.DevListItemOData> & SP.Data.DevListItemCollections;
}

/*********************************************
* DevListItemOData
**********************************************/
export interface DevListItemOData extends Base.IBaseResult, DevListItemProps, DevListItemMethods {
	User: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Multi_x0020_Lookup: Base.IBaseResults<SP.Data.DevListItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* DevListItemMethods
**********************************************/
export interface DevListItemMethods {

}

/*********************************************
* DeviceChannelsItem
**********************************************/
export interface DeviceChannelsItem {
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
* DeviceChannelsItemCollections
**********************************************/
export interface DeviceChannelsItemCollections {

}

/*********************************************
* DeviceChannelsItemOData
**********************************************/
export interface DeviceChannelsItemOData extends Base.IBaseResult, DeviceChannelsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* DocSetItem
**********************************************/
export interface DocSetItem {
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
* DocSetItemCollections
**********************************************/
export interface DocSetItemCollections {

}

/*********************************************
* DocSetItemOData
**********************************************/
export interface DocSetItemOData extends Base.IBaseResult, DocSetItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IShared_x0020_DocumentsItem
**********************************************/
export interface IShared_x0020_DocumentsItem extends Shared_x0020_DocumentsItemCollections, Shared_x0020_DocumentsItemMethods, Base.IBaseQuery<IShared_x0020_DocumentsItemQuery> {

}

/*********************************************
* IShared_x0020_DocumentsItemCollection
**********************************************/
export interface IShared_x0020_DocumentsItemCollection extends Base.IBaseResults<Shared_x0020_DocumentsItem> {
	done?: (resolve: (value?: Array<Shared_x0020_DocumentsItem>) => void) => void;
}

/*********************************************
* IShared_x0020_DocumentsItemQueryCollection
**********************************************/
export interface IShared_x0020_DocumentsItemQueryCollection extends Base.IBaseResults<Shared_x0020_DocumentsItemOData> {
	done?: (resolve: (value?: Array<Shared_x0020_DocumentsItemOData>) => void) => void;
}

/*********************************************
* IShared_x0020_DocumentsItemQuery
**********************************************/
export interface IShared_x0020_DocumentsItemQuery extends Shared_x0020_DocumentsItemOData, Shared_x0020_DocumentsItemMethods {

}

/*********************************************
* Shared_x0020_DocumentsItem
**********************************************/
export interface Shared_x0020_DocumentsItem extends SP.ListItem, Base.IBaseResult, Shared_x0020_DocumentsItemProps, Shared_x0020_DocumentsItemCollections, Shared_x0020_DocumentsItemMethods {

}

/*********************************************
* Shared_x0020_DocumentsItemProps
**********************************************/
export interface Shared_x0020_DocumentsItemProps {
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
	SharedWithUsersId?: { results: Array<number> };
	SharedWithDetails?: string;
	ComplianceAssetId?: string;
	Category?: { results: Array<string> };
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
* Shared_x0020_DocumentsItemPropMethods
**********************************************/
export interface Shared_x0020_DocumentsItemPropMethods {
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	CheckoutUser(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Shared_x0020_DocumentsItemCollections
**********************************************/
export interface Shared_x0020_DocumentsItemCollections extends Shared_x0020_DocumentsItemPropMethods {
	SharedWithUsers(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	SharedWithUsers(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Shared_x0020_DocumentsItemOData
**********************************************/
export interface Shared_x0020_DocumentsItemOData extends Base.IBaseResult, Shared_x0020_DocumentsItemProps, Shared_x0020_DocumentsItemMethods {
	SharedWithUsers: Base.IBaseResults<SP.Data.UserInfoItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Shared_x0020_DocumentsItemMethods
**********************************************/
export interface Shared_x0020_DocumentsItemMethods {

}

/*********************************************
* IEvent_x0020_CalloutListItem
**********************************************/
export interface IEvent_x0020_CalloutListItem extends Event_x0020_CalloutListItemCollections, Event_x0020_CalloutListItemMethods, Base.IBaseQuery<IEvent_x0020_CalloutListItemQuery> {

}

/*********************************************
* IEvent_x0020_CalloutListItemCollection
**********************************************/
export interface IEvent_x0020_CalloutListItemCollection extends Base.IBaseResults<Event_x0020_CalloutListItem> {
	done?: (resolve: (value?: Array<Event_x0020_CalloutListItem>) => void) => void;
}

/*********************************************
* IEvent_x0020_CalloutListItemQueryCollection
**********************************************/
export interface IEvent_x0020_CalloutListItemQueryCollection extends Base.IBaseResults<Event_x0020_CalloutListItemOData> {
	done?: (resolve: (value?: Array<Event_x0020_CalloutListItemOData>) => void) => void;
}

/*********************************************
* IEvent_x0020_CalloutListItemQuery
**********************************************/
export interface IEvent_x0020_CalloutListItemQuery extends Event_x0020_CalloutListItemOData, Event_x0020_CalloutListItemMethods {

}

/*********************************************
* Event_x0020_CalloutListItem
**********************************************/
export interface Event_x0020_CalloutListItem extends SP.ListItem, Base.IBaseResult, Event_x0020_CalloutListItemProps, Event_x0020_CalloutListItemCollections, Event_x0020_CalloutListItemMethods {

}

/*********************************************
* Event_x0020_CalloutListItemProps
**********************************************/
export interface Event_x0020_CalloutListItemProps {
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
	ParticipantsPickerId?: { results: Array<number> };
	ParticipantsPickerStringId?: { results: Array<string> };
	Category?: string;
	Facilities?: { results: Array<SP.FieldLookupValue> };
	FreeBusy?: string;
	Overbook?: string;
	Participants?: string;
	BannerUrl?: SP.FieldUrlValue;
}

/*********************************************
* Event_x0020_CalloutListItemPropMethods
**********************************************/
export interface Event_x0020_CalloutListItemPropMethods {
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Event_x0020_CalloutListItemCollections
**********************************************/
export interface Event_x0020_CalloutListItemCollections extends Event_x0020_CalloutListItemPropMethods {
	ParticipantsPicker(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	ParticipantsPicker(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Event_x0020_CalloutListItemOData
**********************************************/
export interface Event_x0020_CalloutListItemOData extends Base.IBaseResult, Event_x0020_CalloutListItemProps, Event_x0020_CalloutListItemMethods {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	ParticipantsPicker: Base.IBaseResults<SP.Data.UserInfoItem>;
}

/*********************************************
* Event_x0020_CalloutListItemMethods
**********************************************/
export interface Event_x0020_CalloutListItemMethods {

}

/*********************************************
* FormServerTemplatesItem
**********************************************/
export interface FormServerTemplatesItem {
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
* FormServerTemplatesItemCollections
**********************************************/
export interface FormServerTemplatesItemCollections {

}

/*********************************************
* FormServerTemplatesItemOData
**********************************************/
export interface FormServerTemplatesItemOData extends Base.IBaseResult, FormServerTemplatesItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* GettingStartedListItem
**********************************************/
export interface GettingStartedListItem {
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
* GettingStartedListItemCollections
**********************************************/
export interface GettingStartedListItemCollections {

}

/*********************************************
* GettingStartedListItemOData
**********************************************/
export interface GettingStartedListItemOData extends Base.IBaseResult, GettingStartedListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* LargeListListItem
**********************************************/
export interface LargeListListItem {
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
* LargeListListItemCollections
**********************************************/
export interface LargeListListItemCollections {

}

/*********************************************
* LargeListListItemOData
**********************************************/
export interface LargeListListItemOData extends Base.IBaseResult, LargeListListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_ltItem
**********************************************/
export interface OData__x005f_catalogs_x002f_ltItem {
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
* OData__x005f_catalogs_x002f_ltItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_ltItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_ltItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_ltItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_ltItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Long_x0020_Running_x0020_Operation_x0020_StatusItem
**********************************************/
export interface Long_x0020_Running_x0020_Operation_x0020_StatusItem {
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
* Long_x0020_Running_x0020_Operation_x0020_StatusItemCollections
**********************************************/
export interface Long_x0020_Running_x0020_Operation_x0020_StatusItemCollections {

}

/*********************************************
* Long_x0020_Running_x0020_Operation_x0020_StatusItemOData
**********************************************/
export interface Long_x0020_Running_x0020_Operation_x0020_StatusItemOData extends Base.IBaseResult, Long_x0020_Running_x0020_Operation_x0020_StatusItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_MaintenanceLogsItem
**********************************************/
export interface OData__x005f_catalogs_x002f_MaintenanceLogsItem {
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
* OData__x005f_catalogs_x002f_MaintenanceLogsItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_MaintenanceLogsItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_MaintenanceLogsItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_MaintenanceLogsItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_MaintenanceLogsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* MapListItem
**********************************************/
export interface MapListItem {
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
* MapListItemCollections
**********************************************/
export interface MapListItemCollections {

}

/*********************************************
* MapListItemOData
**********************************************/
export interface MapListItemOData extends Base.IBaseResult, MapListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_masterpageItem
**********************************************/
export interface OData__x005f_catalogs_x002f_masterpageItem {
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
	UIVersion?: { results: Array<string> };
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
	TargetControlType?: { results: Array<string> };
	CrawlerXSLFile?: SP.FieldUrlValue;
	DisplayTemplateLevel?: string;
	ManagedPropertyMapping?: string;
	CompatibleSearchDataTypes?: { results: Array<string> };
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
* OData__x005f_catalogs_x002f_masterpageItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_masterpageItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_masterpageItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_masterpageItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_masterpageItem {
	PublishingContact: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	AuthenticatedCacheProfile: SP.Data.Cache_x0020_ProfilesItem & SP.Data.Cache_x0020_ProfilesItemCollections;
	AnonymousCacheProfile: SP.Data.Cache_x0020_ProfilesItem & SP.Data.Cache_x0020_ProfilesItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IPublishedFeedListItem
**********************************************/
export interface IPublishedFeedListItem extends PublishedFeedListItemCollections, PublishedFeedListItemMethods, Base.IBaseQuery<IPublishedFeedListItemQuery> {

}

/*********************************************
* IPublishedFeedListItemCollection
**********************************************/
export interface IPublishedFeedListItemCollection extends Base.IBaseResults<PublishedFeedListItem> {
	done?: (resolve: (value?: Array<PublishedFeedListItem>) => void) => void;
}

/*********************************************
* IPublishedFeedListItemQueryCollection
**********************************************/
export interface IPublishedFeedListItemQueryCollection extends Base.IBaseResults<PublishedFeedListItemOData> {
	done?: (resolve: (value?: Array<PublishedFeedListItemOData>) => void) => void;
}

/*********************************************
* IPublishedFeedListItemQuery
**********************************************/
export interface IPublishedFeedListItemQuery extends PublishedFeedListItemOData, PublishedFeedListItemMethods {

}

/*********************************************
* PublishedFeedListItem
**********************************************/
export interface PublishedFeedListItem extends SP.ListItem, Base.IBaseResult, PublishedFeedListItemProps, PublishedFeedListItemCollections, PublishedFeedListItemMethods {

}

/*********************************************
* PublishedFeedListItemProps
**********************************************/
export interface PublishedFeedListItemProps {
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
	LikedById?: { results: Array<number> };
	LikedByStringId?: { results: Array<string> };
	HashTags?: { results: Array<SP.Taxonomy.TaxonomyFieldValue> };
	j33b1bc20532487296f1bbbdead35a56?: string;
	TaxCatchAllId?: { results: Array<number> };
	TaxCatchAllLabelId?: { results: Array<number> };
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
* PublishedFeedListItemPropMethods
**********************************************/
export interface PublishedFeedListItemPropMethods {
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* PublishedFeedListItemCollections
**********************************************/
export interface PublishedFeedListItemCollections extends PublishedFeedListItemPropMethods {
	LikedBy(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	LikedBy(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	TaxCatchAll(): Base.IBaseCollection<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData>;
	TaxCatchAll(id: string | number): Base.IBaseQuery<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData> & SP.Data.TaxonomyHiddenListListItemCollections;
}

/*********************************************
* PublishedFeedListItemOData
**********************************************/
export interface PublishedFeedListItemOData extends Base.IBaseResult, PublishedFeedListItemProps, PublishedFeedListItemMethods {
	LikedBy: Base.IBaseResults<SP.Data.UserInfoItem>;
	TaxCatchAll: Base.IBaseResults<SP.Data.TaxonomyHiddenListListItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* PublishedFeedListItemMethods
**********************************************/
export interface PublishedFeedListItemMethods {

}

/*********************************************
* TaxonomyHiddenListListItem
**********************************************/
export interface TaxonomyHiddenListListItem {
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
* TaxonomyHiddenListListItemCollections
**********************************************/
export interface TaxonomyHiddenListListItemCollections {

}

/*********************************************
* TaxonomyHiddenListListItemOData
**********************************************/
export interface TaxonomyHiddenListListItemOData extends Base.IBaseResult, TaxonomyHiddenListListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* MyContactsListItem
**********************************************/
export interface MyContactsListItem {
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
* MyContactsListItemCollections
**********************************************/
export interface MyContactsListItemCollections {

}

/*********************************************
* MyContactsListItemOData
**********************************************/
export interface MyContactsListItemOData extends Base.IBaseResult, MyContactsListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* MyListListItem
**********************************************/
export interface MyListListItem {
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
* MyListListItemCollections
**********************************************/
export interface MyListListItemCollections {

}

/*********************************************
* MyListListItemOData
**********************************************/
export interface MyListListItemOData extends Base.IBaseResult, MyListListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* My_x0020_Lists_x0020_InfoListItem
**********************************************/
export interface My_x0020_Lists_x0020_InfoListItem {
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
* My_x0020_Lists_x0020_InfoListItemCollections
**********************************************/
export interface My_x0020_Lists_x0020_InfoListItemCollections {

}

/*********************************************
* My_x0020_Lists_x0020_InfoListItemOData
**********************************************/
export interface My_x0020_Lists_x0020_InfoListItemOData extends Base.IBaseResult, My_x0020_Lists_x0020_InfoListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Notification_x0020_PagesItem
**********************************************/
export interface Notification_x0020_PagesItem {
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
* Notification_x0020_PagesItemCollections
**********************************************/
export interface Notification_x0020_PagesItemCollections {

}

/*********************************************
* Notification_x0020_PagesItemOData
**********************************************/
export interface Notification_x0020_PagesItemOData extends Base.IBaseResult, Notification_x0020_PagesItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ProjectPolicyItemListItem
**********************************************/
export interface ProjectPolicyItemListItem {
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
* ProjectPolicyItemListItemCollections
**********************************************/
export interface ProjectPolicyItemListItemCollections {

}

/*********************************************
* ProjectPolicyItemListItemOData
**********************************************/
export interface ProjectPolicyItemListItemOData extends Base.IBaseResult, ProjectPolicyItemListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Quick_x0020_Deploy_x0020_ItemsItem
**********************************************/
export interface Quick_x0020_Deploy_x0020_ItemsItem {
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
* Quick_x0020_Deploy_x0020_ItemsItemCollections
**********************************************/
export interface Quick_x0020_Deploy_x0020_ItemsItemCollections {

}

/*********************************************
* Quick_x0020_Deploy_x0020_ItemsItemOData
**********************************************/
export interface Quick_x0020_Deploy_x0020_ItemsItemOData extends Base.IBaseResult, Quick_x0020_Deploy_x0020_ItemsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Relationships_x0020_ListItem
**********************************************/
export interface Relationships_x0020_ListItem {
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
* Relationships_x0020_ListItemCollections
**********************************************/
export interface Relationships_x0020_ListItemCollections {

}

/*********************************************
* Relationships_x0020_ListItemOData
**********************************************/
export interface Relationships_x0020_ListItemOData extends Base.IBaseResult, Relationships_x0020_ListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ReusableContentItem
**********************************************/
export interface ReusableContentItem {
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
* ReusableContentItemCollections
**********************************************/
export interface ReusableContentItemCollections {

}

/*********************************************
* ReusableContentItemOData
**********************************************/
export interface ReusableContentItemOData extends Base.IBaseResult, ReusableContentItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Sharing_x0020_LinksItem
**********************************************/
export interface Sharing_x0020_LinksItem {
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
* Sharing_x0020_LinksItemCollections
**********************************************/
export interface Sharing_x0020_LinksItemCollections {

}

/*********************************************
* Sharing_x0020_LinksItemOData
**********************************************/
export interface Sharing_x0020_LinksItemOData extends Base.IBaseResult, Sharing_x0020_LinksItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ISiteAssetsItem
**********************************************/
export interface ISiteAssetsItem extends SiteAssetsItemCollections, SiteAssetsItemMethods, Base.IBaseQuery<ISiteAssetsItemQuery> {

}

/*********************************************
* ISiteAssetsItemCollection
**********************************************/
export interface ISiteAssetsItemCollection extends Base.IBaseResults<SiteAssetsItem> {
	done?: (resolve: (value?: Array<SiteAssetsItem>) => void) => void;
}

/*********************************************
* ISiteAssetsItemQueryCollection
**********************************************/
export interface ISiteAssetsItemQueryCollection extends Base.IBaseResults<SiteAssetsItemOData> {
	done?: (resolve: (value?: Array<SiteAssetsItemOData>) => void) => void;
}

/*********************************************
* ISiteAssetsItemQuery
**********************************************/
export interface ISiteAssetsItemQuery extends SiteAssetsItemOData, SiteAssetsItemMethods {

}

/*********************************************
* SiteAssetsItem
**********************************************/
export interface SiteAssetsItem extends SP.ListItem, Base.IBaseResult, SiteAssetsItemProps, SiteAssetsItemCollections, SiteAssetsItemMethods {

}

/*********************************************
* SiteAssetsItemProps
**********************************************/
export interface SiteAssetsItemProps {
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
	SharedWithUsersId?: { results: Array<number> };
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
* SiteAssetsItemPropMethods
**********************************************/
export interface SiteAssetsItemPropMethods {
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	CheckoutUser(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SiteAssetsItemCollections
**********************************************/
export interface SiteAssetsItemCollections extends SiteAssetsItemPropMethods {
	SharedWithUsers(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	SharedWithUsers(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SiteAssetsItemOData
**********************************************/
export interface SiteAssetsItemOData extends Base.IBaseResult, SiteAssetsItemProps, SiteAssetsItemMethods {
	SharedWithUsers: Base.IBaseResults<SP.Data.UserInfoItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SiteAssetsItemMethods
**********************************************/
export interface SiteAssetsItemMethods {

}

/*********************************************
* SiteCollectionDocumentsItem
**********************************************/
export interface SiteCollectionDocumentsItem {
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
* SiteCollectionDocumentsItemCollections
**********************************************/
export interface SiteCollectionDocumentsItemCollections {

}

/*********************************************
* SiteCollectionDocumentsItemOData
**********************************************/
export interface SiteCollectionDocumentsItemOData extends Base.IBaseResult, SiteCollectionDocumentsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ISiteCollectionImagesItem
**********************************************/
export interface ISiteCollectionImagesItem extends SiteCollectionImagesItemCollections, SiteCollectionImagesItemMethods, Base.IBaseQuery<ISiteCollectionImagesItemQuery> {

}

/*********************************************
* ISiteCollectionImagesItemCollection
**********************************************/
export interface ISiteCollectionImagesItemCollection extends Base.IBaseResults<SiteCollectionImagesItem> {
	done?: (resolve: (value?: Array<SiteCollectionImagesItem>) => void) => void;
}

/*********************************************
* ISiteCollectionImagesItemQueryCollection
**********************************************/
export interface ISiteCollectionImagesItemQueryCollection extends Base.IBaseResults<SiteCollectionImagesItemOData> {
	done?: (resolve: (value?: Array<SiteCollectionImagesItemOData>) => void) => void;
}

/*********************************************
* ISiteCollectionImagesItemQuery
**********************************************/
export interface ISiteCollectionImagesItemQuery extends SiteCollectionImagesItemOData, SiteCollectionImagesItemMethods {

}

/*********************************************
* SiteCollectionImagesItem
**********************************************/
export interface SiteCollectionImagesItem extends SP.ListItem, Base.IBaseResult, SiteCollectionImagesItemProps, SiteCollectionImagesItemCollections, SiteCollectionImagesItemMethods {

}

/*********************************************
* SiteCollectionImagesItemProps
**********************************************/
export interface SiteCollectionImagesItemProps {
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
	PeopleInMediaId?: { results: Array<number> };
	PeopleInMediaStringId?: { results: Array<string> };
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
* SiteCollectionImagesItemPropMethods
**********************************************/
export interface SiteCollectionImagesItemPropMethods {
	VideoSetOwner(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	CheckoutUser(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SiteCollectionImagesItemCollections
**********************************************/
export interface SiteCollectionImagesItemCollections extends SiteCollectionImagesItemPropMethods {
	PeopleInMedia(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	PeopleInMedia(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SiteCollectionImagesItemOData
**********************************************/
export interface SiteCollectionImagesItemOData extends Base.IBaseResult, SiteCollectionImagesItemProps, SiteCollectionImagesItemMethods {
	VideoSetOwner: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	PeopleInMedia: Base.IBaseResults<SP.Data.UserInfoItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SiteCollectionImagesItemMethods
**********************************************/
export interface SiteCollectionImagesItemMethods {

}

/*********************************************
* ISitePagesItem
**********************************************/
export interface ISitePagesItem extends SitePagesItemCollections, SitePagesItemMethods, Base.IBaseQuery<ISitePagesItemQuery> {

}

/*********************************************
* ISitePagesItemCollection
**********************************************/
export interface ISitePagesItemCollection extends Base.IBaseResults<SitePagesItem> {
	done?: (resolve: (value?: Array<SitePagesItem>) => void) => void;
}

/*********************************************
* ISitePagesItemQueryCollection
**********************************************/
export interface ISitePagesItemQueryCollection extends Base.IBaseResults<SitePagesItemOData> {
	done?: (resolve: (value?: Array<SitePagesItemOData>) => void) => void;
}

/*********************************************
* ISitePagesItemQuery
**********************************************/
export interface ISitePagesItemQuery extends SitePagesItemOData, SitePagesItemMethods {

}

/*********************************************
* SitePagesItem
**********************************************/
export interface SitePagesItem extends SP.ListItem, Base.IBaseResult, SitePagesItemProps, SitePagesItemCollections, SitePagesItemMethods {

}

/*********************************************
* SitePagesItemProps
**********************************************/
export interface SitePagesItemProps {
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
	SharedWithUsersId?: { results: Array<number> };
	SharedWithDetails?: string;
	LayoutWebpartsContent?: string;
	ComplianceAssetId?: string;
	OData__OriginalSourceUrl?: string;
	OData__OriginalSourceSiteId?: any;
	OData__OriginalSourceWebId?: any;
	OData__OriginalSourceListId?: any;
	OData__OriginalSourceItemId?: any;
	OData__AuthorBylineId?: { results: Array<number> };
	_AuthorBylineStringId?: { results: Array<string> };
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
* SitePagesItemPropMethods
**********************************************/
export interface SitePagesItemPropMethods {
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	CheckoutUser(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SitePagesItemCollections
**********************************************/
export interface SitePagesItemCollections extends SitePagesItemPropMethods {
	SharedWithUsers(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	SharedWithUsers(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	OData__AuthorByline(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	OData__AuthorByline(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SitePagesItemOData
**********************************************/
export interface SitePagesItemOData extends Base.IBaseResult, SitePagesItemProps, SitePagesItemMethods {
	SharedWithUsers: Base.IBaseResults<SP.Data.UserInfoItem>;
	OData__AuthorByline: Base.IBaseResults<SP.Data.UserInfoItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SitePagesItemMethods
**********************************************/
export interface SitePagesItemMethods {

}

/*********************************************
* OData__x005f_catalogs_x002f_solutionsItem
**********************************************/
export interface OData__x005f_catalogs_x002f_solutionsItem {
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
* OData__x005f_catalogs_x002f_solutionsItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_solutionsItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_solutionsItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_solutionsItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_solutionsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ISPReactListItem
**********************************************/
export interface ISPReactListItem extends SPReactListItemCollections, SPReactListItemMethods, Base.IBaseQuery<ISPReactListItemQuery> {

}

/*********************************************
* ISPReactListItemCollection
**********************************************/
export interface ISPReactListItemCollection extends Base.IBaseResults<SPReactListItem> {
	done?: (resolve: (value?: Array<SPReactListItem>) => void) => void;
}

/*********************************************
* ISPReactListItemQueryCollection
**********************************************/
export interface ISPReactListItemQueryCollection extends Base.IBaseResults<SPReactListItemOData> {
	done?: (resolve: (value?: Array<SPReactListItemOData>) => void) => void;
}

/*********************************************
* ISPReactListItemQuery
**********************************************/
export interface ISPReactListItemQuery extends SPReactListItemOData, SPReactListItemMethods {

}

/*********************************************
* SPReactListItem
**********************************************/
export interface SPReactListItem extends SP.ListItem, Base.IBaseResult, SPReactListItemProps, SPReactListItemCollections, SPReactListItemMethods {

}

/*********************************************
* SPReactListItemProps
**********************************************/
export interface SPReactListItemProps {
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
	TestMultiUserId?: { results: Array<number> };
	TestMultiUserStringId?: { results: Array<string> };
	TestLookupId?: number;
	TestMultiLookupId?: { results: Array<number> };
	TestManagedMetadata?: { results: Array<SP.Taxonomy.TaxonomyFieldValue> };
	TestNumberPercentage?: number;
	ContentTypeId?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	g0e355e0ec7e416095dbaecb58b958cf?: string;
	TaxCatchAllId?: { results: Array<number> };
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
* SPReactListItemPropMethods
**********************************************/
export interface SPReactListItemPropMethods {
	TestUser(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	TestLookup(): Base.IBaseQuery<SP.Data.SPReactListItem, SP.Data.SPReactListItemOData> & SP.Data.SPReactListItemCollections;
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SPReactListItemCollections
**********************************************/
export interface SPReactListItemCollections extends SPReactListItemPropMethods {
	TestMultiUser(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	TestMultiUser(id: string | number): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	TestMultiLookup(): Base.IBaseCollection<SP.Data.SPReactListItem, SP.Data.SPReactListItemOData>;
	TestMultiLookup(id: string | number): Base.IBaseQuery<SP.Data.SPReactListItem, SP.Data.SPReactListItemOData> & SP.Data.SPReactListItemCollections;
	TaxCatchAll(): Base.IBaseCollection<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData>;
	TaxCatchAll(id: string | number): Base.IBaseQuery<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData> & SP.Data.TaxonomyHiddenListListItemCollections;
}

/*********************************************
* SPReactListItemOData
**********************************************/
export interface SPReactListItemOData extends Base.IBaseResult, SPReactListItemProps, SPReactListItemMethods {
	TestUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	TestMultiUser: Base.IBaseResults<SP.Data.UserInfoItem>;
	TestLookup: SP.Data.SPReactListItem & SP.Data.SPReactListItemCollections;
	TestMultiLookup: Base.IBaseResults<SP.Data.SPReactListItem>;
	TaxCatchAll: Base.IBaseResults<SP.Data.TaxonomyHiddenListListItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SPReactListItemMethods
**********************************************/
export interface SPReactListItemMethods {

}

/*********************************************
* SPRESTListDemoListItem
**********************************************/
export interface SPRESTListDemoListItem {
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
* SPRESTListDemoListItemCollections
**********************************************/
export interface SPRESTListDemoListItemCollections {

}

/*********************************************
* SPRESTListDemoListItemOData
**********************************************/
export interface SPRESTListDemoListItemOData extends Base.IBaseResult, SPRESTListDemoListItem {
	DemoUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Style_x0020_LibraryItem
**********************************************/
export interface Style_x0020_LibraryItem {
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
* Style_x0020_LibraryItemCollections
**********************************************/
export interface Style_x0020_LibraryItemCollections {

}

/*********************************************
* Style_x0020_LibraryItemOData
**********************************************/
export interface Style_x0020_LibraryItemOData extends Base.IBaseResult, Style_x0020_LibraryItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* PublishedLinksItem
**********************************************/
export interface PublishedLinksItem {
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
* PublishedLinksItemCollections
**********************************************/
export interface PublishedLinksItemCollections {

}

/*********************************************
* PublishedLinksItemOData
**********************************************/
export interface PublishedLinksItemOData extends Base.IBaseResult, PublishedLinksItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ITeamMembersListItem
**********************************************/
export interface ITeamMembersListItem extends TeamMembersListItemCollections, TeamMembersListItemMethods, Base.IBaseQuery<ITeamMembersListItemQuery> {

}

/*********************************************
* ITeamMembersListItemCollection
**********************************************/
export interface ITeamMembersListItemCollection extends Base.IBaseResults<TeamMembersListItem> {
	done?: (resolve: (value?: Array<TeamMembersListItem>) => void) => void;
}

/*********************************************
* ITeamMembersListItemQueryCollection
**********************************************/
export interface ITeamMembersListItemQueryCollection extends Base.IBaseResults<TeamMembersListItemOData> {
	done?: (resolve: (value?: Array<TeamMembersListItemOData>) => void) => void;
}

/*********************************************
* ITeamMembersListItemQuery
**********************************************/
export interface ITeamMembersListItemQuery extends TeamMembersListItemOData, TeamMembersListItemMethods {

}

/*********************************************
* TeamMembersListItem
**********************************************/
export interface TeamMembersListItem extends SP.ListItem, Base.IBaseResult, TeamMembersListItemProps, TeamMembersListItemCollections, TeamMembersListItemMethods {

}

/*********************************************
* TeamMembersListItemProps
**********************************************/
export interface TeamMembersListItemProps {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	TeamMemberId?: number;
	TeamMemberStringId?: string;
	CheckInStatus_0?: string;
	CheckInStatus?: SP.Taxonomy.TaxonomyFieldValue;
	TaxCatchAllId?: { results: Array<number> };
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
* TeamMembersListItemPropMethods
**********************************************/
export interface TeamMembersListItemPropMethods {
	TeamMember(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* TeamMembersListItemCollections
**********************************************/
export interface TeamMembersListItemCollections extends TeamMembersListItemPropMethods {
	TaxCatchAll(): Base.IBaseCollection<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData>;
	TaxCatchAll(id: string | number): Base.IBaseQuery<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData> & SP.Data.TaxonomyHiddenListListItemCollections;
}

/*********************************************
* TeamMembersListItemOData
**********************************************/
export interface TeamMembersListItemOData extends Base.IBaseResult, TeamMembersListItemProps, TeamMembersListItemMethods {
	TeamMember: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	TaxCatchAll: Base.IBaseResults<SP.Data.TaxonomyHiddenListListItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* TeamMembersListItemMethods
**********************************************/
export interface TeamMembersListItemMethods {

}

/*********************************************
* TestListItem
**********************************************/
export interface TestListItem {
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
* TestListItemCollections
**********************************************/
export interface TestListItemCollections {

}

/*********************************************
* TestListItemOData
**********************************************/
export interface TestListItemOData extends Base.IBaseResult, TestListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* TestProjectListItem
**********************************************/
export interface TestProjectListItem {
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
* TestProjectListItemCollections
**********************************************/
export interface TestProjectListItemCollections {

}

/*********************************************
* TestProjectListItemOData
**********************************************/
export interface TestProjectListItemOData extends Base.IBaseResult, TestProjectListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_themeItem
**********************************************/
export interface OData__x005f_catalogs_x002f_themeItem {
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
* OData__x005f_catalogs_x002f_themeItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_themeItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_themeItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_themeItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_themeItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Translation_x0020_PackagesItem
**********************************************/
export interface Translation_x0020_PackagesItem {
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
* Translation_x0020_PackagesItemCollections
**********************************************/
export interface Translation_x0020_PackagesItemCollections {

}

/*********************************************
* Translation_x0020_PackagesItemOData
**********************************************/
export interface Translation_x0020_PackagesItemOData extends Base.IBaseResult, Translation_x0020_PackagesItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Translation_x0020_StatusItem
**********************************************/
export interface Translation_x0020_StatusItem {
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
* Translation_x0020_StatusItemCollections
**********************************************/
export interface Translation_x0020_StatusItemCollections {

}

/*********************************************
* Translation_x0020_StatusItemOData
**********************************************/
export interface Translation_x0020_StatusItemOData extends Base.IBaseResult, Translation_x0020_StatusItem {
	TranslationStateExportRequesting: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	TranslationStateImportRequesting: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Variation_x0020_LabelsItem
**********************************************/
export interface Variation_x0020_LabelsItem {
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
* Variation_x0020_LabelsItemCollections
**********************************************/
export interface Variation_x0020_LabelsItemCollections {

}

/*********************************************
* Variation_x0020_LabelsItemOData
**********************************************/
export interface Variation_x0020_LabelsItemOData extends Base.IBaseResult, Variation_x0020_LabelsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_wpItem
**********************************************/
export interface OData__x005f_catalogs_x002f_wpItem {
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
	QuickAddGroups?: { results: Array<string> };
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
* OData__x005f_catalogs_x002f_wpItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_wpItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_wpItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_wpItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_wpItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* OData__x005f_catalogs_x002f_wfpubItem
**********************************************/
export interface OData__x005f_catalogs_x002f_wfpubItem {
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
* OData__x005f_catalogs_x002f_wfpubItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_wfpubItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_wfpubItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_wfpubItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_wfpubItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IWorkflowTasksItem
**********************************************/
export interface IWorkflowTasksItem extends WorkflowTasksItemCollections, WorkflowTasksItemMethods, Base.IBaseQuery<IWorkflowTasksItemQuery> {

}

/*********************************************
* IWorkflowTasksItemCollection
**********************************************/
export interface IWorkflowTasksItemCollection extends Base.IBaseResults<WorkflowTasksItem> {
	done?: (resolve: (value?: Array<WorkflowTasksItem>) => void) => void;
}

/*********************************************
* IWorkflowTasksItemQueryCollection
**********************************************/
export interface IWorkflowTasksItemQueryCollection extends Base.IBaseResults<WorkflowTasksItemOData> {
	done?: (resolve: (value?: Array<WorkflowTasksItemOData>) => void) => void;
}

/*********************************************
* IWorkflowTasksItemQuery
**********************************************/
export interface IWorkflowTasksItemQuery extends WorkflowTasksItemOData, WorkflowTasksItemMethods {

}

/*********************************************
* WorkflowTasksItem
**********************************************/
export interface WorkflowTasksItem extends SP.ListItem, Base.IBaseResult, WorkflowTasksItemProps, WorkflowTasksItemCollections, WorkflowTasksItemMethods {

}

/*********************************************
* WorkflowTasksItemProps
**********************************************/
export interface WorkflowTasksItemProps {
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
	PredecessorsId?: { results: Array<number> };
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
* WorkflowTasksItemPropMethods
**********************************************/
export interface WorkflowTasksItemPropMethods {
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	AssignedTo(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	TaskGroup(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* WorkflowTasksItemCollections
**********************************************/
export interface WorkflowTasksItemCollections extends WorkflowTasksItemPropMethods {
	Predecessors(): Base.IBaseCollection<SP.Data.WorkflowTasksItem, SP.Data.WorkflowTasksItemOData>;
	Predecessors(id: string | number): Base.IBaseQuery<SP.Data.WorkflowTasksItem, SP.Data.WorkflowTasksItemOData> & SP.Data.WorkflowTasksItemCollections;
}

/*********************************************
* WorkflowTasksItemOData
**********************************************/
export interface WorkflowTasksItemOData extends Base.IBaseResult, WorkflowTasksItemProps, WorkflowTasksItemMethods {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Predecessors: Base.IBaseResults<SP.Data.WorkflowTasksItem>;
	AssignedTo: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	TaskGroup: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* WorkflowTasksItemMethods
**********************************************/
export interface WorkflowTasksItemMethods {

}
