import { SP } from "../../";

/*********************************************
* MicroBlogEntityCollection
**********************************************/
export interface MicroBlogEntityCollection {
	Items?: Array<SP.Microfeed.MicroBlogEntity>;
}

/*********************************************
* MicroBlogEntity
**********************************************/
export interface MicroBlogEntity {
	AccountName?: string;
	CanFollow?: boolean;
	Description?: string;
	DisplayName?: string;
	Email?: string;
	EntityType?: number;
	EntityURI?: string;
	FollowedContentURI?: string;
	Identifier?: string;
	IsFollowedByMe?: boolean;
	LatestPost?: string;
	LibraryName?: string;
	LibraryUri?: string;
	PersonalURI?: string;
	PictureURI?: string;
	Status?: number;
	Title?: string;
}

/*********************************************
* MicrofeedPostDefinition
**********************************************/
export interface MicrofeedPostDefinition {
	CanDelete?: boolean;
	CanFollowUp?: boolean;
	CanHaveAttachments?: boolean;
	CanLike?: boolean;
	CanLock?: boolean;
	CanReply?: boolean;
	CreationTime?: any;
	DefinitionId?: number;
	DefinitionName?: string;
	DefinitionVersion?: number;
	EnablePeopleList?: boolean;
	IsDefault?: boolean;
	IsEnabled?: boolean;
	IsNotification?: boolean;
	IsPrivate?: boolean;
	IsUserPost?: boolean;
	LastUpdateTime?: any;
	PartitionId?: any;
	PersistToCache?: boolean;
	PersistToPrivateFolder?: boolean;
	PersistToPublishedFeed?: boolean;
	ReferenceLikePostName?: string;
	ReferenceMentionPostName?: string;
	ReferenceReplyPostName?: string;
	RenderPostAuthorImage?: boolean;
	ResourceFileName?: string;
	SecurityTrimContentUrl?: boolean;
	SmallImageSizePreferred?: boolean;
}

/*********************************************
* MicrofeedDataLinkCollection
**********************************************/
export interface MicrofeedDataLinkCollection {
	Items?: Array<SP.Microfeed.MicrofeedDataLink>;
}

/*********************************************
* MicrofeedDataLink
**********************************************/
export interface MicrofeedDataLink {
	DataLinkType?: number;
	DateTimeValue?: any;
	Name?: string;
	PlaceHolderName?: string;
	StringValue?: string;
	UniqueId?: any;
	UriValue?: string;
}

/*********************************************
* MicrofeedDataQuery
**********************************************/
export interface MicrofeedDataQuery {
	ItemLimit?: number;
	Query?: string;
	ViewFields?: Array<string>;
	ViewFieldsOnly?: boolean;
}

/*********************************************
* MicrofeedLinkAction
**********************************************/
export interface MicrofeedLinkAction {
	ActionUri?: string;
	Height?: number;
	Kind?: number;
	Width?: number;
}

/*********************************************
* MicrofeedLink
**********************************************/
export interface MicrofeedLink {
	ClickAction?: SP.Microfeed.MicrofeedLinkAction;
	ContentUri?: string;
	Description?: string;
	Height?: number;
	Href?: string;
	Length?: number;
	LinkType?: number;
	Name?: string;
	PreviewHeight?: number;
	PreviewPictureUrl?: string;
	PreviewWidth?: number;
	Status?: number;
	Width?: number;
}

/*********************************************
* MicrofeedPostCollection
**********************************************/
export interface MicrofeedPostCollection {
	Items?: Array<SP.Microfeed.MicrofeedPost>;
}

/*********************************************
* MicrofeedPost
**********************************************/
export interface MicrofeedPost {
	AuthorIndex?: number;
	BreadCrumb?: string;
	CanDelete?: boolean;
	CanFollowUp?: boolean;
	CanHaveAttachments?: boolean;
	CanLike?: boolean;
	CanLock?: boolean;
	CanReply?: boolean;
	Content?: string;
	Created?: any;
	Footer?: string;
	ID?: string;
	ILikeIt?: boolean;
	LikersList?: Array<number>;
	Locked?: boolean;
	MediaLink?: SP.Microfeed.MicrofeedLink;
	MicroBlogType?: number;
	Modified?: any;
	PeopleCount?: number;
	PostImageUri?: string;
	PostSource?: string;
	PostSourceUri?: string;
	ReferenceID?: string;
	RenderPostAuthorImage?: boolean;
	ReplyCount?: number;
	SmallImageSizePreferred?: boolean;
	Title?: string;
}

/*********************************************
* MicrofeedPostDefinitionNames
**********************************************/
export interface MicrofeedPostDefinitionNames {

}

/*********************************************
* MicrofeedPostDefinitionNameCollection
**********************************************/
export interface MicrofeedPostDefinitionNameCollection {
	Items?: Array<string>;
}

/*********************************************
* MicrofeedPostOptions
**********************************************/
export interface MicrofeedPostOptions {
	Content?: string;
	ContentFormattingOption?: number;
	DataLinks?: SP.Microfeed.MicrofeedDataLinkCollection;
	DefinitionName?: string;
	MediaLink?: SP.Microfeed.MicrofeedLink;
	PeopleList?: Array<string>;
	PostSource?: string;
	PostSourceUri?: string;
	RefThread_ReferenceID?: string;
	RefThread_RefReply?: string;
	RefThread_RefRoot?: string;
	TargetActor?: string;
	UpdateStatusText?: boolean;
}

/*********************************************
* MicrofeedRetrievalOptions
**********************************************/
export interface MicrofeedRetrievalOptions {
	ContentFormattingOption?: number;
	ContentOnly?: boolean;
	DropAllSecurityTrimmablePosts?: boolean;
	GatherUnreadMentionCountForUser?: boolean;
	IncludedTypes?: number;
	NewerThan?: any;
	OlderThan?: any;
	PostDefinitionFilter?: Array<string>;
	ResultSortOrder?: number;
	ThreadCount?: number;
}

/*********************************************
* MicrofeedThreadCollection
**********************************************/
export interface MicrofeedThreadCollection {
	CurrentUserUnreadMentionCount?: number;
	NewestProcessed?: any;
	OldestProcessed?: any;
	Items?: Array<SP.Microfeed.MicrofeedThread>;
}

/*********************************************
* MicrofeedThread
**********************************************/
export interface MicrofeedThread {
	CanFollowUp?: boolean;
	CanHaveAttachments?: boolean;
	CanLike?: boolean;
	CanReply?: boolean;
	DataLinks?: Array<SP.Microfeed.MicrofeedDataLink>;
	DefinitionId?: number;
	DefinitionName?: string;
	Identifier?: string;
	Locked?: boolean;
	MicrofeedEntities?: Array<SP.Microfeed.MicroBlogEntity>;
	OwnerIndex?: number;
	RefReply?: SP.Microfeed.MicrofeedPost;
	RefRoot?: SP.Microfeed.MicrofeedPost;
	RenderPostAuthorImage?: boolean;
	Replies?: SP.Microfeed.MicrofeedPostCollection;
	ReplyCount?: number;
	RootPost?: SP.Microfeed.MicrofeedPost;
	SmallImageSizePreferred?: boolean;
	Status?: number;
}

/*********************************************
* MicrofeedUserPostCollection
**********************************************/
export interface MicrofeedUserPostCollection {
	Items?: Array<SP.Microfeed.MicrofeedUserPosts>;
}

/*********************************************
* MicrofeedUserPosts
**********************************************/
export interface MicrofeedUserPosts {
	AccountName?: string;
}
