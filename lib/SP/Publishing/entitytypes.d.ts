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
	Author?: () => SP.SP_Publishing_VideoItem_Author_SP_User_AuthorPartner;
	Owner?: () => SP.SP_Publishing_VideoItem_Owner_SP_User_OwnerPartner;
	PeopleInMedia?: () => SP.SP_Publishing_VideoItem_PeopleInMedia_SP_User_PeopleInMediaPartner;
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
	images?: () => SP.SP_Publishing_PointPublishingPost_images_SP_File_imagesPartner;
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
* PointPublishingPostServiceManager
**********************************************/
export interface PointPublishingPostServiceManager {
	bannerimages?: () => SP.SP_Publishing_PointPublishingPostServiceManager_bannerimages_SP_File_bannerimagesPartner;
	contributors?: () => SP.Publishing.SP_Publishing_PointPublishingPostServiceManager_contributors_SP_Publishing_PointPublishingUser_contributorsPartner;
	creators?: () => SP.Publishing.SP_Publishing_PointPublishingPostServiceManager_creators_SP_Publishing_PointPublishingUser_creatorsPartner;
	magazineprops?: () => SP.Publishing.SP_Publishing_PointPublishingPostServiceManager_magazineprops_SP_Publishing_PointPublishingMagazineProps_magazinepropsPartner;
	posts?: () => SP.Publishing.SP_Publishing_PointPublishingPostServiceManager_posts_SP_Publishing_PointPublishingPost_postsPartner;
	viewers?: () => SP.Publishing.SP_Publishing_PointPublishingPostServiceManager_viewers_SP_Publishing_PointPublishingUser_viewersPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
	CreatedBy?: () => SP.Publishing.SP_Publishing_SitePageMetadata_CreatedBy_SP_Publishing_UserInfo_CreatedByPartner;
	LastModifiedBy?: () => SP.Publishing.SP_Publishing_SitePageMetadata_LastModifiedBy_SP_Publishing_UserInfo_LastModifiedByPartner;
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
	CommunicationSite?: () => SP.Publishing.SP_Publishing_SitePageService_CommunicationSite_SP_Publishing_CommunicationSite_CommunicationSitePartner;
	Pages?: () => SP.Publishing.SP_Publishing_SitePageService_Pages_SP_Publishing_SitePage_PagesPartner;
	CustomContentApprovalEnabled?: boolean;
}

/*********************************************
* SpotlightChannel
**********************************************/
export interface SpotlightChannel {
	Channel?: () => SP.Publishing.SP_Publishing_SpotlightChannel_Channel_SP_Publishing_VideoChannel_ChannelPartner;
	ChannelId?: any;
	Id?: number;
	TileHtmlColor?: string;
	Title?: string;
	VideoLibraryServerRelativeUrl?: string;
}

/*********************************************
* VideoChannel
**********************************************/
export interface VideoChannel {
	Search?: () => SP.Publishing.SP_Publishing_VideoChannel_Search_SP_Publishing_Search_SearchPartner;
	SpotlightVideos?: () => SP.Publishing.SP_Publishing_VideoChannel_SpotlightVideos_SP_Publishing_SpotlightVideo_SpotlightVideosPartner;
	Videos?: () => SP.Publishing.SP_Publishing_VideoChannel_Videos_SP_Publishing_VideoItem_VideosPartner;
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
	Video?: () => SP.Publishing.SP_Publishing_SpotlightVideo_Video_SP_Publishing_VideoItem_VideoPartner;
	Id?: number;
	ServerRelativeUrl?: string;
	Url?: string;
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
	Users?: () => SP.SP_Publishing_VideoPermissionGroup_Users_SP_User_UsersPartner;
	Id?: number;
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
	CanEditChannels?: () => SP.Publishing.SP_Publishing_VideoServiceManager_CanEditChannels_SP_Publishing_VideoChannel_CanEditChannelsPartner;
	Channels?: () => SP.Publishing.SP_Publishing_VideoServiceManager_Channels_SP_Publishing_VideoChannel_ChannelsPartner;
	Search?: () => SP.Publishing.SP_Publishing_VideoServiceManager_Search_SP_Publishing_Search_SearchPartner;
	SpotlightChannels?: () => SP.Publishing.SP_Publishing_VideoServiceManager_SpotlightChannels_SP_Publishing_SpotlightChannel_SpotlightChannelsPartner;
	SpotlightVideos?: () => SP.Publishing.SP_Publishing_VideoServiceManager_SpotlightVideos_SP_Publishing_SpotlightVideo_SpotlightVideosPartner;
	CanAdministratePortalByCurrent?: boolean;
	CanCreateChannelsByCurrent?: boolean;
	CanViewPortalByCurrent?: boolean;
	UploadGuidelinesLink?: string;
	VideoGuidelinesLink?: string;
}

/*********************************************
* VideoThumbnail
**********************************************/
export interface VideoThumbnail {
	Choice?: number;
	IsSelected?: boolean;
	Url?: string;
}
