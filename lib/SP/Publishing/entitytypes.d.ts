import { SP } from "../../";

/*********************************************
* CommunicationSite
**********************************************/
export interface CommunicationSite {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EmbedDataV1
**********************************************/
export interface EmbedDataV1 {
	AllowHttpsEmbed?: boolean;
	CreatorName?: string;
	DatePublishedAt?: string;
	Description?: string;
	EmbedServiceResponseCode?: number;
	ErrorMessage?: string;
	Html?: string;
	ListId?: string;
	PublisherName?: string;
	ResponseCode?: number;
	SiteId?: string;
	ThumbnailUrl?: string;
	Title?: string;
	Type?: string;
	UniqueId?: string;
	Url?: string;
	VideoId?: string;
	WebId?: string;
}

/*********************************************
* EmbedService
**********************************************/
export interface EmbedService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* VideoItem
**********************************************/
export interface VideoItem {
	ChannelID?: any;
	CreatedDate?: any;
	DefaultEmbedCode?: string;
	Description?: string;
	DisplayFormUrl?: string;
	FileName?: string;
	OwnerName?: string;
	PlayerPageUrl?: string;
	ServerRelativeUrl?: string;
	ThumbnailSelection?: number;
	ThumbnailUrl?: string;
	Title?: string;
	ID?: any;
	Url?: string;
	VideoDownloadUrl?: string;
	VideoDurationInSeconds?: number;
	VideoProcessingStatus?: number;
	ViewCount?: number;
	YammerObjectUrl?: string;
}

/*********************************************
* VideoItemCollections
**********************************************/
export interface VideoItemCollections {
	Author?: () => SP.User;
	Owner?: () => SP.User;
	PeopleInMedia?: () => Array<SP.User>;
}

/*********************************************
* VideoItemQuery
**********************************************/
export interface VideoItemQuery {
	Author?: SP.User;
	Owner?: SP.User;
	PeopleInMedia?: Array<SP.User>;
}

/*********************************************
* PersonMagazine
**********************************************/
export interface PersonMagazine {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingDocProps
**********************************************/
export interface PointPublishingDocProps {
	Author?: string;
	ContentTypeId?: string;
	DocLibraryUrl?: string;
	FileType?: string;
	Modified?: any;
	ServerRedirectedEmbedUrl?: string;
	ServerRedirectedPreviewUrl?: string;
	SiteId?: any;
	SiteTitle?: string;
	Title?: string;
	UniqueId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* PointPublishingMagazineProps
**********************************************/
export interface PointPublishingMagazineProps {
	BannerColor?: string;
	BannerImageUrl?: string;
	BannerPattern?: string;
	Description?: string;
	IsUserContributor?: boolean;
	IsUserOwner?: boolean;
	MagazineType?: number;
	PublishedDate?: any;
	Title?: string;
}

/*********************************************
* PointPublishingPost
**********************************************/
export interface PointPublishingPost {
	Author?: string;
	Content?: string;
	CreatedDate?: any;
	FriendlyUrlFileName?: string;
	Id?: number;
	ModifiedDate?: any;
	OperationType?: number;
	Title?: string;
	UserIsAuthor?: boolean;
	Version?: string;
}

/*********************************************
* PointPublishingPostCollections
**********************************************/
export interface PointPublishingPostCollections {
	images?: () => Array<SP.File>;
}

/*********************************************
* PointPublishingPostQuery
**********************************************/
export interface PointPublishingPostQuery {
	images?: Array<SP.File>;
}

/*********************************************
* PointPublishingPostServiceManager
**********************************************/
export interface PointPublishingPostServiceManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingPostServiceManagerCollections
**********************************************/
export interface PointPublishingPostServiceManagerCollections {
	bannerimages?: () => Array<SP.File>;
	contributors?: () => Array<SP.Publishing.PointPublishingUser>;
	creators?: () => Array<SP.Publishing.PointPublishingUser>;
	magazineprops?: () => SP.Publishing.PointPublishingMagazineProps;
	posts?: () => Array<SP.Publishing.PointPublishingPost>;
	viewers?: () => Array<SP.Publishing.PointPublishingUser>;
}

/*********************************************
* PointPublishingPostServiceManagerQuery
**********************************************/
export interface PointPublishingPostServiceManagerQuery {
	bannerimages?: Array<SP.File>;
	contributors?: Array<SP.Publishing.PointPublishingUser>;
	creators?: Array<SP.Publishing.PointPublishingUser>;
	magazineprops?: SP.Publishing.PointPublishingMagazineProps;
	posts?: Array<SP.Publishing.PointPublishingPost>;
	viewers?: Array<SP.Publishing.PointPublishingUser>;
}

/*********************************************
* PointPublishingUser
**********************************************/
export interface PointPublishingUser {
	AccountName?: string;
	Department?: string;
	Email?: string;
	ID?: number;
	IsDomainGroup?: boolean;
	IsMagazineOwner?: boolean;
	JobTitle?: string;
	LoginName?: string;
	Name?: string;
	PictureUrl?: string;
	SipAddress?: string;
}

/*********************************************
* PointPublishingSiteManager
**********************************************/
export interface PointPublishingSiteManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingSiteStatus
**********************************************/
export interface PointPublishingSiteStatus {
	FriendlyUrl?: string;
	SiteId?: any;
	SiteUrl?: string;
	Status?: number;
}

/*********************************************
* PointPublishingTenantManager
**********************************************/
export interface PointPublishingTenantManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PrimaryCityTime
**********************************************/
export interface PrimaryCityTime {
	Location?: string;
	Time?: string;
	UtcOffset?: string;
}

/*********************************************
* SitePageMetadata
**********************************************/
export interface SitePageMetadata {
	AbsoluteUrl?: string;
	AuthorByline?: Array<string>;
	BannerImageUrl?: string;
	CommentCount?: number;
	CommentsDisabled?: boolean;
	ContentTypeId?: string;
	Description?: string;
	DoesUserHaveEditPermission?: boolean;
	FileName?: string;
	FirstPublished?: any;
	FirstPublishedRelativeTime?: string;
	Id?: number;
	IsPageCheckedOutToCurrentUser?: boolean;
	IsWebWelcomePage?: boolean;
	LikeCount?: number;
	ListId?: any;
	Modified?: any;
	ModifiedRelativeTime?: string;
	PageLayoutType?: string;
	Path?: SP.ResourcePath;
	PromotedState?: number;
	SocialBarOnSitePagesDisabled?: boolean;
	Title?: string;
	TopicHeader?: string;
	UniqueId?: any;
	Url?: string;
	Version?: string;
	VersionInfo?: SP.Publishing.SitePageVersionInfo;
}

/*********************************************
* SitePageMetadataCollections
**********************************************/
export interface SitePageMetadataCollections {
	CreatedBy?: () => SP.Publishing.UserInfo;
	LastModifiedBy?: () => SP.Publishing.UserInfo;
}

/*********************************************
* SitePageMetadataQuery
**********************************************/
export interface SitePageMetadataQuery {
	CreatedBy?: SP.Publishing.UserInfo;
	LastModifiedBy?: SP.Publishing.UserInfo;
}

/*********************************************
* UserInfo
**********************************************/
export interface UserInfo {
	AccountName?: string;
	Acronym?: string;
	Color?: string;
	Name?: string;
}

/*********************************************
* SitePage
**********************************************/
export interface SitePage extends SP.Publishing.SitePageMetadata {
	AlternativeUrlMap?: string;
	CanvasContent1?: string;
	CanvasJson1?: string;
	IsLikedByCurrentUser?: boolean;
	IsTemplate?: boolean;
	LayoutWebpartsContent?: string;
}

/*********************************************
* RepostPage
**********************************************/
export interface RepostPage extends SP.Publishing.SitePage {
	IsBannerImageUrlExternal?: boolean;
	OriginalSourceItemId?: any;
	OriginalSourceListId?: any;
	OriginalSourceSiteId?: any;
	OriginalSourceUrl?: string;
	OriginalSourceWebId?: any;
	ShouldSaveAsDraft?: boolean;
}

/*********************************************
* RepostPageMetadata
**********************************************/
export interface RepostPageMetadata extends SP.Publishing.SitePageMetadata {
	OriginalSourceItemId?: any;
	OriginalSourceListId?: any;
	OriginalSourceSiteId?: any;
	OriginalSourceUrl?: string;
	OriginalSourceWebId?: any;
}

/*********************************************
* RichSharing
**********************************************/
export interface RichSharing {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceManager
**********************************************/
export interface SharePointHomeServiceManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SitePageService
**********************************************/
export interface SitePageService {
	CustomContentApprovalEnabled?: boolean;
}

/*********************************************
* SitePageServiceCollections
**********************************************/
export interface SitePageServiceCollections {
	CommunicationSite?: () => SP.Publishing.CommunicationSite;
	Pages?: () => Array<SP.Publishing.SitePage>;
}

/*********************************************
* SitePageServiceQuery
**********************************************/
export interface SitePageServiceQuery {
	CommunicationSite?: SP.Publishing.CommunicationSite;
	Pages?: Array<SP.Publishing.SitePage>;
}

/*********************************************
* SpotlightChannel
**********************************************/
export interface SpotlightChannel {
	ChannelId?: any;
	Id?: number;
	TileHtmlColor?: string;
	Title?: string;
	VideoLibraryServerRelativeUrl?: string;
}

/*********************************************
* SpotlightChannelCollections
**********************************************/
export interface SpotlightChannelCollections {
	Channel?: () => SP.Publishing.VideoChannel;
}

/*********************************************
* SpotlightChannelQuery
**********************************************/
export interface SpotlightChannelQuery {
	Channel?: SP.Publishing.VideoChannel;
}

/*********************************************
* VideoChannel
**********************************************/
export interface VideoChannel {
	CanAdministrateByCurrent?: boolean;
	CanEditByCurrent?: boolean;
	CanViewByCurrent?: boolean;
	ChannelPageUrl?: string;
	Description?: string;
	DownloadUrlVisibleMinPermission?: number;
	FullUrl?: string;
	Id?: any;
	ServerRelativeUrl?: string;
	ShareByEmailEnabled?: boolean;
	TileHtmlColor?: string;
	Title?: string;
	YammerDefaultGroupId?: number;
	YammerEnabled?: boolean;
}

/*********************************************
* VideoChannelCollections
**********************************************/
export interface VideoChannelCollections {
	Search?: () => SP.Publishing.Search;
	SpotlightVideos?: () => Array<SP.Publishing.SpotlightVideo>;
	Videos?: () => Array<SP.Publishing.VideoItem>;
}

/*********************************************
* VideoChannelQuery
**********************************************/
export interface VideoChannelQuery {
	Search?: SP.Publishing.Search;
	SpotlightVideos?: Array<SP.Publishing.SpotlightVideo>;
	Videos?: Array<SP.Publishing.VideoItem>;
}

/*********************************************
* Search
**********************************************/
export interface Search {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	QueryLanguages?: Array<number>;
}

/*********************************************
* SpotlightVideo
**********************************************/
export interface SpotlightVideo {
	Id?: number;
	ServerRelativeUrl?: string;
	Url?: string;
}

/*********************************************
* SpotlightVideoCollections
**********************************************/
export interface SpotlightVideoCollections {
	Video?: () => SP.Publishing.VideoItem;
}

/*********************************************
* SpotlightVideoQuery
**********************************************/
export interface SpotlightVideoQuery {
	Video?: SP.Publishing.VideoItem;
}

/*********************************************
* SubtitleFile
**********************************************/
export interface SubtitleFile {
	Language?: string;
	NativeLanguageName?: string;
	Url?: string;
}

/*********************************************
* VideoPermissionGroup
**********************************************/
export interface VideoPermissionGroup {
	Id?: number;
}

/*********************************************
* VideoPermissionGroupCollections
**********************************************/
export interface VideoPermissionGroupCollections {
	Users?: () => Array<SP.User>;
}

/*********************************************
* VideoPermissionGroupQuery
**********************************************/
export interface VideoPermissionGroupQuery {
	Users?: Array<SP.User>;
}

/*********************************************
* VideoPlaybackMetadata
**********************************************/
export interface VideoPlaybackMetadata {
	HLSUrl?: string;
	SdnPlaybackMetadata?: string;
	StreamingUrl?: string;
	Token?: string;
}

/*********************************************
* VideoServiceDiscoverer
**********************************************/
export interface VideoServiceDiscoverer {
	ChannelUrlTemplate?: string;
	IsFeedbackEnabled?: boolean;
	IsLicensedForVideoPortal?: boolean;
	IsMigratedToStream?: boolean;
	IsO365VideoEnabled?: boolean;
	IsVideoPortalEnabled?: boolean;
	O365VideoPageUrl?: string;
	PlayerUrlTemplate?: string;
	VideoPortalLayoutsUrl?: string;
	VideoPortalUrl?: string;
}

/*********************************************
* VideoServiceManager
**********************************************/
export interface VideoServiceManager {
	CanAdministratePortalByCurrent?: boolean;
	CanCreateChannelsByCurrent?: boolean;
	CanViewPortalByCurrent?: boolean;
	UploadGuidelinesLink?: string;
	VideoGuidelinesLink?: string;
}

/*********************************************
* VideoServiceManagerCollections
**********************************************/
export interface VideoServiceManagerCollections {
	CanEditChannels?: () => Array<SP.Publishing.VideoChannel>;
	Channels?: () => Array<SP.Publishing.VideoChannel>;
	Search?: () => SP.Publishing.Search;
	SpotlightChannels?: () => Array<SP.Publishing.SpotlightChannel>;
	SpotlightVideos?: () => Array<SP.Publishing.SpotlightVideo>;
}

/*********************************************
* VideoServiceManagerQuery
**********************************************/
export interface VideoServiceManagerQuery {
	CanEditChannels?: Array<SP.Publishing.VideoChannel>;
	Channels?: Array<SP.Publishing.VideoChannel>;
	Search?: SP.Publishing.Search;
	SpotlightChannels?: Array<SP.Publishing.SpotlightChannel>;
	SpotlightVideos?: Array<SP.Publishing.SpotlightVideo>;
}

/*********************************************
* VideoThumbnail
**********************************************/
export interface VideoThumbnail {
	Choice?: number;
	IsSelected?: boolean;
	Url?: string;
}
