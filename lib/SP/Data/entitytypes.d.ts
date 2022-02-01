import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* Access_x0020_RequestsItem
**********************************************/
export interface Access_x0020_RequestsItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	RequestId?: any;
	RequestedObjectUrl?: SP.FieldUrlValue;
	RequestedObjectTitle?: string;
	InheritingRequestedWebId?: any;
	RequestedWebId?: any;
	RequestedListId?: any;
	RequestedListItemId?: any;
	RequestedBy?: string;
	RequestedByUserId?: number;
	RequestedByDisplayName?: string;
	RequestedFor?: string;
	RequestedForDisplayName?: string;
	RequestedForUserId?: number;
	ApprovedById?: number;
	ApprovedByStringId?: string;
	AcceptedBy?: string;
	Status?: number;
	Expires?: any;
	PermissionType?: string;
	PermissionLevelRequested?: number;
	AnonymousLinkType?: string;
	SendWelcomeEmail?: boolean;
	WelcomeEmailSubject?: string;
	WelcomeEmailBody?: string;
	ExtendedWelcomeEmailBody?: string;
	Conversation?: string;
	IsInvitation?: boolean;
	StatusDisp?: string;
	RequestedForDisplayNameDisp?: string;
	RequestedByDisplayNameDisp?: string;
	RequestDate?: string;
	ApprovalAction?: string;
	PropagateAcl?: boolean;
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
	PrincipalCount?: string;
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
	PermissionDisp?: string;
	ObjectRequestedTitleDisp?: string;
}

/*********************************************
* Access_x0020_RequestsItemCollections
**********************************************/
export interface Access_x0020_RequestsItemCollections {

}

/*********************************************
* Access_x0020_RequestsItemOData
**********************************************/
export interface Access_x0020_RequestsItemOData extends Base.IBaseResult, Access_x0020_RequestsItem {
	ApprovedBy: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* UserInfoItem
**********************************************/
export interface UserInfoItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	Name?: string;
	EMail?: string;
	OtherMail?: string;
	UserExpiration?: any;
	UserLastDeletionTime?: any;
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
	PrincipalCount?: string;
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
	PrincipalCount?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	PrincipalCount?: string;
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
* ContentTypeSyncLogListItem
**********************************************/
export interface ContentTypeSyncLogListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
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
	PrincipalCount?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
* CustomFormsDemoListItem
**********************************************/
export interface CustomFormsDemoListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	SessionsLUId?: number;
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
	PrincipalCount?: string;
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
* CustomFormsDemoListItemCollections
**********************************************/
export interface CustomFormsDemoListItemCollections {

}

/*********************************************
* CustomFormsDemoListItemOData
**********************************************/
export interface CustomFormsDemoListItemOData extends Base.IBaseResult, CustomFormsDemoListItem {
	SessionsLU: SP.Data.SessionsListItem & SP.Data.SessionsListItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SessionsListItem
**********************************************/
export interface SessionsListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	SessionDay?: string;
	SessionTime?: string;
	SessionCapacity?: number;
	SessionInfo?: string;
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
	PrincipalCount?: string;
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
* SessionsListItemCollections
**********************************************/
export interface SessionsListItemCollections {

}

/*********************************************
* SessionsListItemOData
**********************************************/
export interface SessionsListItemOData extends Base.IBaseResult, SessionsListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* DashboardListItem
**********************************************/
export interface DashboardListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	ItemType?: string;
	Status?: string;
	AssignedToId?: number;
	AssignedToStringId?: string;
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
	PrincipalCount?: string;
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
* DashboardListItemCollections
**********************************************/
export interface DashboardListItemCollections {

}

/*********************************************
* DashboardListItemOData
**********************************************/
export interface DashboardListItemOData extends Base.IBaseResult, DashboardListItem {
	AssignedTo: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* DemoListListItem
**********************************************/
export interface DemoListListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	Description?: string;
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
	PrincipalCount?: string;
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
* DemoListListItemCollections
**********************************************/
export interface DemoListListItemCollections {

}

/*********************************************
* DemoListListItemOData
**********************************************/
export interface DemoListListItemOData extends Base.IBaseResult, DemoListListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IDev_x0020_EventsListItem
**********************************************/
export interface IDev_x0020_EventsListItem extends SP.ListItemCollections, Dev_x0020_EventsListItemCollections, Dev_x0020_EventsListItemMethods, Base.IBaseQuery<Dev_x0020_EventsListItem, IDev_x0020_EventsListItemQuery> {

}

/*********************************************
* IDev_x0020_EventsListItemCollection
**********************************************/
export interface IDev_x0020_EventsListItemCollection extends Base.IBaseResults<Dev_x0020_EventsListItem> {
	done?: (resolve: (value?: Array<Dev_x0020_EventsListItem>) => void) => void;
}

/*********************************************
* IDev_x0020_EventsListItemQueryCollection
**********************************************/
export interface IDev_x0020_EventsListItemQueryCollection extends Base.IBaseResults<Dev_x0020_EventsListItemOData> {
	done?: (resolve: (value?: Array<Dev_x0020_EventsListItemOData>) => void) => void;
}

/*********************************************
* IDev_x0020_EventsListItemQuery
**********************************************/
export interface IDev_x0020_EventsListItemQuery extends Dev_x0020_EventsListItemOData, Dev_x0020_EventsListItemMethods {

}

/*********************************************
* Dev_x0020_EventsListItem
**********************************************/
export interface Dev_x0020_EventsListItem extends SP.ListItem, Base.IBaseResult, Dev_x0020_EventsListItemProps, Dev_x0020_EventsListItemCollections, Dev_x0020_EventsListItemMethods {

}

/*********************************************
* Dev_x0020_EventsListItemProps
**********************************************/
export interface Dev_x0020_EventsListItemProps {
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
	UniqueId?: any;
	File_x0020_Type?: string;
	HTML_x0020_File_x0020_Type?: string;
	OData__EditMenuTableStart?: string;
	OData__EditMenuTableStart2?: string;
	OData__EditMenuTableEnd?: string;
	DocIcon?: string;
	ServerUrl?: string;
	EncodedAbsUrl?: string;
	OData__Level?: number;
	OData__IsCurrentVersion?: boolean;
	AppAuthorId?: number;
	AppEditorId?: number;
	ComplianceAssetId?: string;
	SessionCode?: string;
	SessionType?: string;
	Description?: string;
	SpeakersId?: { results: Array<number> };
	SpeakersStringId?: { results: Array<string> };
	StartDateAndTime?: any;
	EndDateAndTime?: any;
	Duration?: string;
	Capacity?: number;
	Location?: string;
	Notes?: string;
	PrincipalCount?: string;
	FileLeafRef?: string;
	LinkFilenameNoMenu?: string;
	LinkFilename?: string;
	LinkFilename2?: string;
	BaseName?: string;
	OData__IsRecord?: string;
}

/*********************************************
* Dev_x0020_EventsListItemPropMethods
**********************************************/
export interface Dev_x0020_EventsListItemPropMethods {
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Dev_x0020_EventsListItemCollections
**********************************************/
export interface Dev_x0020_EventsListItemCollections extends Dev_x0020_EventsListItemPropMethods {
	Speakers(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	Speakers(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Dev_x0020_EventsListItemOData
**********************************************/
export interface Dev_x0020_EventsListItemOData extends SP.ListItemOData, Base.IBaseResult, Dev_x0020_EventsListItemProps, Dev_x0020_EventsListItemMethods {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Speakers: Base.IBaseResults<SP.Data.UserInfoItem>;
}

/*********************************************
* Dev_x0020_EventsListItemMethods
**********************************************/
export interface Dev_x0020_EventsListItemMethods {

}

/*********************************************
* DevLibListItem
**********************************************/
export interface DevLibListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	Field1?: string;
	Field2?: string;
	Field3?: string;
	Field4?: string;
	Field5?: string;
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
	PrincipalCount?: string;
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
* DevLibListItemCollections
**********************************************/
export interface DevLibListItemCollections {

}

/*********************************************
* DevLibListItemOData
**********************************************/
export interface DevLibListItemOData extends Base.IBaseResult, DevLibListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* DocSetDemoItem
**********************************************/
export interface DocSetDemoItem {
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
	MediaServiceMetadata?: string;
	MediaServiceFastMetadata?: string;
	OData__ExtendedDescription?: string;
	TriggerFlowInfo?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
* DocSetDemoItemCollections
**********************************************/
export interface DocSetDemoItemCollections {

}

/*********************************************
* DocSetDemoItemOData
**********************************************/
export interface DocSetDemoItemOData extends Base.IBaseResult, DocSetDemoItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Shared_x0020_DocumentsItem
**********************************************/
export interface Shared_x0020_DocumentsItem {
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
	MediaServiceMetadata?: string;
	MediaServiceFastMetadata?: string;
	MediaServiceAutoKeyPoints?: string;
	MediaServiceKeyPoints?: string;
	OData__ExtendedDescription?: string;
	TriggerFlowInfo?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
* Shared_x0020_DocumentsItemCollections
**********************************************/
export interface Shared_x0020_DocumentsItemCollections {

}

/*********************************************
* Shared_x0020_DocumentsItemOData
**********************************************/
export interface Shared_x0020_DocumentsItemOData extends Base.IBaseResult, Shared_x0020_DocumentsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
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
	ComplianceAssetId?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	OData__ExtendedDescription?: string;
	TriggerFlowInfo?: string;
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
* OData__x005f_catalogs_x002f_fpdatasourcesItem
**********************************************/
export interface OData__x005f_catalogs_x002f_fpdatasourcesItem {
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	DSSourceTitle?: string;
	DSDescription?: string;
	DSKeywords?: string;
	DSTooltipInfo?: string;
	DSType10?: string;
	DSType20?: string;
	DSVersion?: string;
}

/*********************************************
* OData__x005f_catalogs_x002f_fpdatasourcesItemCollections
**********************************************/
export interface OData__x005f_catalogs_x002f_fpdatasourcesItemCollections {

}

/*********************************************
* OData__x005f_catalogs_x002f_fpdatasourcesItemOData
**********************************************/
export interface OData__x005f_catalogs_x002f_fpdatasourcesItemOData extends Base.IBaseResult, OData__x005f_catalogs_x002f_fpdatasourcesItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* JSLinkDemoListItem
**********************************************/
export interface JSLinkDemoListItem {
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
	PrincipalCount?: string;
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
* JSLinkDemoListItemCollections
**********************************************/
export interface JSLinkDemoListItemCollections {

}

/*********************************************
* JSLinkDemoListItemOData
**********************************************/
export interface JSLinkDemoListItemOData extends Base.IBaseResult, JSLinkDemoListItem {
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	ComplianceAssetId?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IPublishedFeedListItem
**********************************************/
export interface IPublishedFeedListItem extends SP.ListItemCollections, PublishedFeedListItemCollections, PublishedFeedListItemMethods, Base.IBaseQuery<PublishedFeedListItem, IPublishedFeedListItemQuery> {

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
	ComplianceAssetId?: string;
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
	PrincipalCount?: string;
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
	LikedBy(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	TaxCatchAll(): Base.IBaseCollection<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData>;
	TaxCatchAll(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData> & SP.Data.TaxonomyHiddenListListItemCollections;
}

/*********************************************
* PublishedFeedListItemOData
**********************************************/
export interface PublishedFeedListItemOData extends SP.ListItemOData, Base.IBaseResult, PublishedFeedListItemProps, PublishedFeedListItemMethods {
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
	ComplianceAssetId?: string;
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
	PrincipalCount?: string;
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
* ProjectPolicyItemListItem
**********************************************/
export interface ProjectPolicyItemListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
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
	PrincipalCount?: string;
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
* SiteAssetsItem
**********************************************/
export interface SiteAssetsItem {
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	OData__ExtendedDescription?: string;
	TriggerFlowInfo?: string;
}

/*********************************************
* SiteAssetsItemCollections
**********************************************/
export interface SiteAssetsItemCollections {

}

/*********************************************
* SiteAssetsItemOData
**********************************************/
export interface SiteAssetsItemOData extends Base.IBaseResult, SiteAssetsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* ISitePagesItem
**********************************************/
export interface ISitePagesItem extends SP.ListItemCollections, SitePagesItemCollections, SitePagesItemMethods, Base.IBaseQuery<SitePagesItem, ISitePagesItemQuery> {

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
	ComplianceAssetId?: string;
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
	LayoutWebpartsContent?: string;
	OData__AuthorBylineId?: { results: Array<number> };
	_AuthorBylineStringId?: { results: Array<string> };
	OData__TopicHeader?: string;
	OData__SPSitePageFlags?: { results: Array<string> };
	LinkTitle?: string;
	OData__OriginalSourceUrl?: string;
	OData__OriginalSourceSiteId?: any;
	OData__OriginalSourceWebId?: any;
	OData__OriginalSourceListId?: any;
	OData__OriginalSourceItemId?: any;
	OData__SPAssetFolderId?: number;
	OData__SPCallToAction?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	OData__AuthorByline(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	OData__AuthorByline(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SitePagesItemOData
**********************************************/
export interface SitePagesItemOData extends SP.ListItemOData, Base.IBaseResult, SitePagesItemProps, SitePagesItemMethods {
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
export interface ISPReactListItem extends SP.ListItemCollections, SPReactListItemCollections, SPReactListItemMethods, Base.IBaseQuery<SPReactListItem, ISPReactListItemQuery> {

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
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	TestBoolean?: boolean;
	TestChoice?: string;
	TestComments?: string;
	TestDate?: any;
	TestDateTime?: any;
	TestLookupId?: number;
	TestMMS_0?: string;
	TestMMS?: SP.Taxonomy.TaxonomyFieldValue;
	TaxCatchAllId?: { results: Array<number> };
	TestMultiChoice?: { results: Array<string> };
	TestMultiLookupId?: { results: Array<number> };
	TestMultiUserId?: { results: Array<number> };
	TestMultiUserStringId?: { results: Array<string> };
	TestNote?: string;
	TestNumberDecimal?: number;
	TestNumberInteger?: number;
	TestNumberPercentage?: number;
	TestUrl?: SP.FieldUrlValue;
	TestUserId?: number;
	TestUserStringId?: string;
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
	PrincipalCount?: string;
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
	TestLookup(): Base.IBaseQuery<SP.Data.SPReactListItem, SP.Data.SPReactListItemOData> & SP.Data.SPReactListItemCollections;
	TestUser(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SPReactListItemCollections
**********************************************/
export interface SPReactListItemCollections extends SPReactListItemPropMethods {
	TaxCatchAll(): Base.IBaseCollection<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData>;
	TaxCatchAll(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.TaxonomyHiddenListListItem, SP.Data.TaxonomyHiddenListListItemOData> & SP.Data.TaxonomyHiddenListListItemCollections;
	TestMultiLookup(): Base.IBaseCollection<SP.Data.SPReactListItem, SP.Data.SPReactListItemOData>;
	TestMultiLookup(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.SPReactListItem, SP.Data.SPReactListItemOData> & SP.Data.SPReactListItemCollections;
	TestMultiUser(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	TestMultiUser(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SPReactListItemOData
**********************************************/
export interface SPReactListItemOData extends SP.ListItemOData, Base.IBaseResult, SPReactListItemProps, SPReactListItemMethods {
	TestLookup: SP.Data.SPReactListItem & SP.Data.SPReactListItemCollections;
	TaxCatchAll: Base.IBaseResults<SP.Data.TaxonomyHiddenListListItem>;
	TestMultiLookup: Base.IBaseResults<SP.Data.SPReactListItem>;
	TestMultiUser: Base.IBaseResults<SP.Data.UserInfoItem>;
	TestUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* SPReactListItemMethods
**********************************************/
export interface SPReactListItemMethods {

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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	OData__ExtendedDescription?: string;
	TriggerFlowInfo?: string;
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
* ITasksListItem
**********************************************/
export interface ITasksListItem extends SP.ListItemCollections, TasksListItemCollections, TasksListItemMethods, Base.IBaseQuery<TasksListItem, ITasksListItemQuery> {

}

/*********************************************
* ITasksListItemCollection
**********************************************/
export interface ITasksListItemCollection extends Base.IBaseResults<TasksListItem> {
	done?: (resolve: (value?: Array<TasksListItem>) => void) => void;
}

/*********************************************
* ITasksListItemQueryCollection
**********************************************/
export interface ITasksListItemQueryCollection extends Base.IBaseResults<TasksListItemOData> {
	done?: (resolve: (value?: Array<TasksListItemOData>) => void) => void;
}

/*********************************************
* ITasksListItemQuery
**********************************************/
export interface ITasksListItemQuery extends TasksListItemOData, TasksListItemMethods {

}

/*********************************************
* TasksListItem
**********************************************/
export interface TasksListItem extends SP.ListItem, Base.IBaseResult, TasksListItemProps, TasksListItemCollections, TasksListItemMethods {

}

/*********************************************
* TasksListItemProps
**********************************************/
export interface TasksListItemProps {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
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
	WorkflowLink?: SP.FieldUrlValue;
	OffsiteParticipant?: string;
	OffsiteParticipantReason?: string;
	WorkflowOutcome?: string;
	WorkflowName?: string;
	TaskType?: number;
	FormURN?: string;
	FormData?: string;
	EmailBody?: string;
	HasCustomEmailBody?: boolean;
	SendEmailNotification?: boolean;
	PendingModTime?: any;
	Completed?: boolean;
	WorkflowListId?: any;
	WorkflowItemId?: number;
	ExtendedProperties?: string;
	GUID?: any;
	WorkflowInstanceID?: any;
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
	FileRef?: string;
	FileDirRef?: string;
	Last_x0020_Modified?: any;
	Created_x0020_Date?: any;
	FSObjType?: number;
	PermMask?: string;
	PrincipalCount?: string;
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
* TasksListItemPropMethods
**********************************************/
export interface TasksListItemPropMethods {
	AssignedTo(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	TaskGroup(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* TasksListItemCollections
**********************************************/
export interface TasksListItemCollections extends TasksListItemPropMethods {
	Predecessors(): Base.IBaseCollection<SP.Data.TasksListItem, SP.Data.TasksListItemOData>;
	Predecessors(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.TasksListItem, SP.Data.TasksListItemOData> & SP.Data.TasksListItemCollections;
}

/*********************************************
* TasksListItemOData
**********************************************/
export interface TasksListItemOData extends SP.ListItemOData, Base.IBaseResult, TasksListItemProps, TasksListItemMethods {
	Predecessors: Base.IBaseResults<SP.Data.TasksListItem>;
	AssignedTo: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	TaskGroup: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* TasksListItemMethods
**********************************************/
export interface TasksListItemMethods {

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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	ComplianceAssetId?: string;
	Title?: string;
	WebPartDescription?: string;
	WebPartAssembly?: string;
	WebPartTypeName?: string;
	WebPartPartImageLarge?: string;
	Group?: string;
	QuickAddGroups?: { results: Array<string> };
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
* WfsvcItem
**********************************************/
export interface WfsvcItem {
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
	WSGUID?: any;
	WSPublishState?: number;
	WSPublishError?: string;
	WSEventContextKeys?: string;
	WSEventSourceGUID?: any;
	WSDisplayName?: string;
	WSDescription?: string;
	WSEventSource?: string;
	WSEventType?: string;
	WSEnabled?: boolean;
	FormData?: string;
}

/*********************************************
* WfsvcItemCollections
**********************************************/
export interface WfsvcItemCollections {

}

/*********************************************
* WfsvcItemOData
**********************************************/
export interface WfsvcItemOData extends Base.IBaseResult, WfsvcItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Workflow_x0020_HistoryListItem
**********************************************/
export interface Workflow_x0020_HistoryListItem {
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
	PrincipalCount?: string;
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
	Event?: string;
	WorkflowInstance?: string;
	WorkflowAssociation?: string;
	WorkflowTemplate?: string;
	List?: string;
	Item?: number;
	UserId?: number;
	UserStringId?: string;
	Occurred?: any;
	Group?: number;
	Outcome?: string;
	Duration?: number;
	Description?: string;
	Data?: string;
}

/*********************************************
* Workflow_x0020_HistoryListItemCollections
**********************************************/
export interface Workflow_x0020_HistoryListItemCollections {

}

/*********************************************
* Workflow_x0020_HistoryListItemOData
**********************************************/
export interface Workflow_x0020_HistoryListItemOData extends Base.IBaseResult, Workflow_x0020_HistoryListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	User: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* IWorkflow_x0020_TasksListItem
**********************************************/
export interface IWorkflow_x0020_TasksListItem extends SP.ListItemCollections, Workflow_x0020_TasksListItemCollections, Workflow_x0020_TasksListItemMethods, Base.IBaseQuery<Workflow_x0020_TasksListItem, IWorkflow_x0020_TasksListItemQuery> {

}

/*********************************************
* IWorkflow_x0020_TasksListItemCollection
**********************************************/
export interface IWorkflow_x0020_TasksListItemCollection extends Base.IBaseResults<Workflow_x0020_TasksListItem> {
	done?: (resolve: (value?: Array<Workflow_x0020_TasksListItem>) => void) => void;
}

/*********************************************
* IWorkflow_x0020_TasksListItemQueryCollection
**********************************************/
export interface IWorkflow_x0020_TasksListItemQueryCollection extends Base.IBaseResults<Workflow_x0020_TasksListItemOData> {
	done?: (resolve: (value?: Array<Workflow_x0020_TasksListItemOData>) => void) => void;
}

/*********************************************
* IWorkflow_x0020_TasksListItemQuery
**********************************************/
export interface IWorkflow_x0020_TasksListItemQuery extends Workflow_x0020_TasksListItemOData, Workflow_x0020_TasksListItemMethods {

}

/*********************************************
* Workflow_x0020_TasksListItem
**********************************************/
export interface Workflow_x0020_TasksListItem extends SP.ListItem, Base.IBaseResult, Workflow_x0020_TasksListItemProps, Workflow_x0020_TasksListItemCollections, Workflow_x0020_TasksListItemMethods {

}

/*********************************************
* Workflow_x0020_TasksListItemProps
**********************************************/
export interface Workflow_x0020_TasksListItemProps {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	PredecessorsId?: { results: Array<number> };
	Priority?: string;
	Status?: string;
	PercentComplete?: number;
	AssignedToId?: { results: Array<number> };
	AssignedToStringId?: { results: Array<string> };
	Body?: string;
	StartDate?: any;
	DueDate?: any;
	ParentIDId?: number;
	Checkmark?: string;
	RelatedItems?: string;
	PreviouslyAssignedToId?: { results: Array<number> };
	PreviouslyAssignedToStringId?: { results: Array<string> };
	TaskOutcome?: string;
	WF4InstanceId?: string;
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
	PrincipalCount?: string;
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
* Workflow_x0020_TasksListItemPropMethods
**********************************************/
export interface Workflow_x0020_TasksListItemPropMethods {
	ParentID(): Base.IBaseQuery<SP.Data.Workflow_x0020_TasksListItem, SP.Data.Workflow_x0020_TasksListItemOData> & SP.Data.Workflow_x0020_TasksListItemCollections;
	Author(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	Editor(): Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Workflow_x0020_TasksListItemCollections
**********************************************/
export interface Workflow_x0020_TasksListItemCollections extends Workflow_x0020_TasksListItemPropMethods {
	Predecessors(): Base.IBaseCollection<SP.Data.Workflow_x0020_TasksListItem, SP.Data.Workflow_x0020_TasksListItemOData>;
	Predecessors(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.Workflow_x0020_TasksListItem, SP.Data.Workflow_x0020_TasksListItemOData> & SP.Data.Workflow_x0020_TasksListItemCollections;
	AssignedTo(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	AssignedTo(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
	PreviouslyAssignedTo(): Base.IBaseCollection<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData>;
	PreviouslyAssignedTo(id: string | number): SP.ListItemCollections & Base.IBaseQuery<SP.Data.UserInfoItem, SP.Data.UserInfoItemOData> & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Workflow_x0020_TasksListItemOData
**********************************************/
export interface Workflow_x0020_TasksListItemOData extends SP.ListItemOData, Base.IBaseResult, Workflow_x0020_TasksListItemProps, Workflow_x0020_TasksListItemMethods {
	Predecessors: Base.IBaseResults<SP.Data.Workflow_x0020_TasksListItem>;
	AssignedTo: Base.IBaseResults<SP.Data.UserInfoItem>;
	ParentID: SP.Data.Workflow_x0020_TasksListItem & SP.Data.Workflow_x0020_TasksListItemCollections;
	PreviouslyAssignedTo: Base.IBaseResults<SP.Data.UserInfoItem>;
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* Workflow_x0020_TasksListItemMethods
**********************************************/
export interface Workflow_x0020_TasksListItemMethods {

}

/*********************************************
* WorkflowTestListItem
**********************************************/
export interface WorkflowTestListItem {
	ContentTypeId?: string;
	Title?: string;
	OData__ModerationComments?: string;
	File_x0020_Type?: string;
	ComplianceAssetId?: string;
	SetByWorkflow?: string;
	Set_x0020_Default_x0020_Value?: SP.FieldUrlValue;
	SetValue?: number;
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
	PrincipalCount?: string;
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
* WorkflowTestListItemCollections
**********************************************/
export interface WorkflowTestListItemCollections {

}

/*********************************************
* WorkflowTestListItemOData
**********************************************/
export interface WorkflowTestListItemOData extends Base.IBaseResult, WorkflowTestListItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}

/*********************************************
* WorkflowsItem
**********************************************/
export interface WorkflowsItem {
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
	PrincipalCount?: string;
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
	OData__DisplayName?: string;
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
* WorkflowsItemCollections
**********************************************/
export interface WorkflowsItemCollections {

}

/*********************************************
* WorkflowsItemOData
**********************************************/
export interface WorkflowsItemOData extends Base.IBaseResult, WorkflowsItem {
	Author: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	Editor: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
	CheckoutUser: SP.Data.UserInfoItem & SP.Data.UserInfoItemCollections;
}
