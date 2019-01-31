import { IBaseExecution } from "../../";
import { SP } from "../../";

/*********************************************
* SocialActorInfo
**********************************************/
export interface SocialActorInfo {
	AccountName?: string;
	ActorType?: number;
	ContentUri?: string;
	Id?: string;
	TagGuid?: any;
}

/*********************************************
* SocialActor
**********************************************/
export interface SocialActor {
	AccountName?: string;
	ActorType?: number;
	CanFollow?: boolean;
	ContentUri?: string;
	EmailAddress?: string;
	FollowedContentUri?: string;
	Id?: string;
	ImageUri?: string;
	IsFollowed?: boolean;
	LibraryUri?: string;
	Name?: string;
	PersonalSiteUri?: string;
	Status?: number;
	StatusText?: string;
	TagGuid?: any;
	Title?: string;
	Uri?: string;
}

/*********************************************
* SocialAttachmentAction
**********************************************/
export interface SocialAttachmentAction {
	ActionKind?: number;
	ActionUri?: string;
	Height?: number;
	Width?: number;
}

/*********************************************
* SocialAttachment
**********************************************/
export interface SocialAttachment {
	AttachmentKind?: number;
	ClickAction?: SP.Social.SocialAttachmentAction;
	ContentUri?: string;
	Description?: string;
	Height?: number;
	Length?: number;
	Name?: string;
	PreviewHeight?: number;
	PreviewUri?: string;
	PreviewWidth?: number;
	Uri?: string;
	Width?: number;
}

/*********************************************
* SocialDataItem
**********************************************/
export interface SocialDataItem {
	AccountName?: string;
	ItemType?: number;
	TagGuid?: any;
	Text?: string;
	Uri?: string;
}

/*********************************************
* SocialDataOverlay
**********************************************/
export interface SocialDataOverlay {
	ActorIndexes?: Array<number>;
	Index?: number;
	Length?: number;
	LinkUri?: string;
	OverlayType?: number;
}

/*********************************************
* SocialExceptionDetails
**********************************************/
export interface SocialExceptionDetails {
	InternalErrorCode?: number;
	InternalMessage?: string;
	InternalStackTrace?: string;
	InternalTypeName?: string;
	Status?: number;
}

/*********************************************
* SocialFeedOptions
**********************************************/
export interface SocialFeedOptions {
	MaxThreadCount?: number;
	NewerThan?: any;
	OlderThan?: any;
	SortOrder?: number;
}

/*********************************************
* SocialFeed
**********************************************/
export interface SocialFeed {
	Attributes?: number;
	NewestProcessed?: any;
	OldestProcessed?: any;
	Threads?: Array<SP.Social.SocialThread>;
	UnreadMentionCount?: number;
}

/*********************************************
* SocialThread
**********************************************/
export interface SocialThread {
	Actors?: Array<SP.Social.SocialActor>;
	Attributes?: number;
	Id?: string;
	OwnerIndex?: number;
	Permalink?: string;
	PostReference?: SP.Social.SocialPostReference;
	Replies?: Array<SP.Social.SocialPost>;
	RootPost?: SP.Social.SocialPost;
	Status?: number;
	ThreadType?: number;
	TotalReplyCount?: number;
}

/*********************************************
* SocialPostReference
**********************************************/
export interface SocialPostReference {
	Digest?: SP.Social.SocialThread;
	Post?: SP.Social.SocialPost;
	ThreadId?: string;
	ThreadOwnerIndex?: number;
}

/*********************************************
* SocialPost
**********************************************/
export interface SocialPost {
	Attachment?: SP.Social.SocialAttachment;
	Attributes?: number;
	AuthorIndex?: number;
	CreatedTime?: any;
	Id?: string;
	LikerInfo?: SP.Social.SocialPostActorInfo;
	ModifiedTime?: any;
	Overlays?: Array<SP.Social.SocialDataOverlay>;
	PostType?: number;
	PreferredImageUri?: string;
	Source?: SP.Social.SocialLink;
	Text?: string;
}

/*********************************************
* SocialPostActorInfo
**********************************************/
export interface SocialPostActorInfo {
	IncludesCurrentUser?: boolean;
	Indexes?: Array<number>;
	TotalCount?: number;
}

/*********************************************
* SocialLink
**********************************************/
export interface SocialLink {
	Text?: string;
	Uri?: string;
}

/*********************************************
* SocialPostCreationData
**********************************************/
export interface SocialPostCreationData {
	Attachment?: SP.Social.SocialAttachment;
	ContentItems?: Array<SP.Social.SocialDataItem>;
	ContentText?: string;
	DefinitionData?: SP.Social.SocialPostDefinitionData;
	SecurityUris?: Array<string>;
	Source?: SP.Social.SocialLink;
	UpdateStatusText?: boolean;
}

/*********************************************
* SocialPostDefinitionData
**********************************************/
export interface SocialPostDefinitionData {
	Items?: Array<SP.Social.SocialPostDefinitionDataItem>;
	Name?: string;
}

/*********************************************
* SocialPostDefinitionDataItem
**********************************************/
export interface SocialPostDefinitionDataItem {
	AccountName?: string;
	ItemType?: number;
	PlaceholderName?: string;
	TagGuid?: any;
	Text?: string;
	Uri?: string;
}

/*********************************************
* SocialRestPostCreationData
**********************************************/
export interface SocialRestPostCreationData {
	ID?: string;
	creationData?: SP.Social.SocialPostCreationData;
}
