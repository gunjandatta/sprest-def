import { SP } from "../../";

/*********************************************
* CommunicationSite
**********************************************/
export interface CommunicationSite {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunicationSiteMethods
**********************************************/
export interface CommunicationSiteMethods {
	create<T=SP.Publishing.CommunicationSiteCreationResponse>(request?: SP.Publishing.CommunicationSiteCreationRequest): T;
	status<T=SP.Publishing.CommunicationSiteCreationResponse>(url?: string): T;
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
* EmbedServiceMethods
**********************************************/
export interface EmbedServiceMethods {
	embedData<T=SP.Publishing.EmbedDataV1>(url?: string, version?: number): T;
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
	Author<T=SP.User>(): T;
	Owner<T=SP.User>(): T;
	PeopleInMedia<T=Array<SP.User>>(): T;
}

/*********************************************
* VideoItemQuery
**********************************************/
export interface VideoItemQuery {
	Author<T=SP.User>(): T;
	Owner<T=SP.User>(): T;
	PeopleInMedia<T=Array<SP.User>>(): T;
}

/*********************************************
* VideoItemMethods
**********************************************/
export interface VideoItemMethods {
	customThumbnail<T=any>(): T;
	deleteObject<T=void>(): T;
	getFile<T=SP.File>(): T;
	getPlaybackMetadata<T=SP.Publishing.VideoPlaybackMetadata>(sdnConfiguration?: string): T;
	getPlaybackUrl<T=string>(videoFormat?: number): T;
	getStreamingKeyAccessToken<T=string>(): T;
	getVideoDetailedViewCount<T=SP.Publishing.ItemViewsAnalyticsData>(): T;
	getVideoEmbedCode<T=string>(width?: number, height?: number, autoplay?: boolean, showInfo?: boolean, makeResponsive?: boolean): T;
	getVideoViewProgressCount<T=Array<SP.Publishing.ViewProgressAnalyticsData>>(): T;
	incrementVideoViewProgressCount<T=void>(percentageViewed?: number): T;
	incrementViewCount<T=void>(viewOrigin?: number): T;
	setPeopleInMedia<T=void>(loginNames?: Array<string>): T;
	setVideoOwner<T=void>(id?: number): T;
	subtitles<T=Array<SP.Publishing.SubtitleFile>>(): T;
	thumbnails<T=Array<SP.Publishing.VideoThumbnail>>(preferredWidth?: number): T;
	thumbnailStream<T=any>(preferredWidth?: number): T;
	update<T=void>(): T;
	uploadCustomThumbnail<T=void>(fileExtension?: string, customVideoThumbnail?: any): T;
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
	images<T=Array<SP.File>>(): T;
}

/*********************************************
* PointPublishingPostQuery
**********************************************/
export interface PointPublishingPostQuery {
	images<T=Array<SP.File>>(): T;
}

/*********************************************
* PointPublishingPostMethods
**********************************************/
export interface PointPublishingPostMethods {
	addImageFromUrl<T=string>(fromImageUrl?: string): T;
	deleteObject<T=void>(): T;
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
	bannerimages<T=Array<SP.File>>(): T;
	contributors<T=Array<SP.Publishing.PointPublishingUser>>(): T;
	creators<T=Array<SP.Publishing.PointPublishingUser>>(): T;
	magazineprops<T=SP.Publishing.PointPublishingMagazineProps>(): T;
	posts<T=Array<SP.Publishing.PointPublishingPost>>(): T;
	viewers<T=Array<SP.Publishing.PointPublishingUser>>(): T;
}

/*********************************************
* PointPublishingPostServiceManagerQuery
**********************************************/
export interface PointPublishingPostServiceManagerQuery {
	bannerimages<T=Array<SP.File>>(): T;
	contributors<T=Array<SP.Publishing.PointPublishingUser>>(): T;
	creators<T=Array<SP.Publishing.PointPublishingUser>>(): T;
	magazineprops<T=SP.Publishing.PointPublishingMagazineProps>(): T;
	posts<T=Array<SP.Publishing.PointPublishingPost>>(): T;
	viewers<T=Array<SP.Publishing.PointPublishingUser>>(): T;
}

/*********************************************
* PointPublishingPostServiceManagerMethods
**********************************************/
export interface PointPublishingPostServiceManagerMethods {
	addBannerImageFromUrl<T=string>(fromImageUrl?: string): T;
	deleteMagazine<T=void>(): T;
	getDocProps<T=Array<SP.Publishing.PointPublishingDocProps>>(docUrls?: Array<string>): T;
	getPostsQuery<T=Array<SP.Publishing.PointPublishingPost>>(top?: number, itemIdBoundary?: number, directionAscending?: boolean, publishedOnly?: boolean, draftsOnly?: boolean): T;
	getTopAuthors<T=Array<SP.Publishing.PointPublishingUser>>(count?: number): T;
	queryGroupNames<T=Array<SP.Publishing.PointPublishingUser>>(query?: string): T;
	setMagazineProperties<T=SP.Publishing.PointPublishingMagazineProps>(title?: string, description?: string, bannerImageUrl?: string, bannerColor?: string, bannerPattern?: string): T;
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
* PointPublishingUserMethods
**********************************************/
export interface PointPublishingUserMethods {
	deleteUserFromContainerGroup<T=void>(): T;
}

/*********************************************
* PointPublishingSiteManager
**********************************************/
export interface PointPublishingSiteManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingSiteManagerMethods
**********************************************/
export interface PointPublishingSiteManagerMethods {
	create<T=SP.Publishing.PointPublishingSiteStatus>(siteInfo?: SP.Publishing.PublishSiteInformation): T;
	getSiteStatus<T=SP.Publishing.PointPublishingSiteStatus>(siteInfo?: SP.Publishing.PublishSiteInformation): T;
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
* PointPublishingTenantManagerMethods
**********************************************/
export interface PointPublishingTenantManagerMethods {
	isBlogEnabled<T=boolean>(): T;
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
	CreatedBy<T=SP.Publishing.UserInfo>(): T;
	LastModifiedBy<T=SP.Publishing.UserInfo>(): T;
}

/*********************************************
* SitePageMetadataQuery
**********************************************/
export interface SitePageMetadataQuery {
	CreatedBy<T=SP.Publishing.UserInfo>(): T;
	LastModifiedBy<T=SP.Publishing.UserInfo>(): T;
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
* SitePageMethods
**********************************************/
export interface SitePageMethods {
	checkOut<T=boolean>(): T;
	checkoutPage<T=SP.Publishing.SitePage>(): T;
	copy<T=SP.Publishing.SitePage>(): T;
	demoteFromNews<T=boolean>(): T;
	discardPage<T=SP.Publishing.SitePage>(): T;
	getVersion<T=SP.Publishing.SitePage>(versionId?: number): T;
	promoteToNews<T=boolean>(): T;
	publish<T=boolean>(): T;
	saveDraft<T=boolean>(sitePage?: SP.Publishing.SitePageFieldsData): T;
	savePage<T=void>(pageStream?: any): T;
	savePageAsDraft<T=boolean>(pageStream?: any): T;
	savePageAsTemplate<T=SP.Publishing.SitePage>(): T;
	sharePagePreviewByEmail<T=void>(message?: string, recipientEmails?: Array<string>): T;
	update<T=void>(): T;
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
* RepostPageMethods
**********************************************/
export interface RepostPageMethods {
	checkOut<T=boolean>(): T;
	checkoutPage<T=SP.Publishing.SitePage>(): T;
	copy<T=SP.Publishing.SitePage>(): T;
	demoteFromNews<T=boolean>(): T;
	discardPage<T=SP.Publishing.SitePage>(): T;
	getVersion<T=SP.Publishing.SitePage>(versionId?: number): T;
	promoteToNews<T=boolean>(): T;
	publish<T=boolean>(): T;
	saveDraft<T=boolean>(sitePage?: SP.Publishing.SitePageFieldsData): T;
	savePage<T=void>(pageStream?: any): T;
	savePageAsDraft<T=boolean>(pageStream?: any): T;
	savePageAsTemplate<T=SP.Publishing.SitePage>(): T;
	sharePagePreviewByEmail<T=void>(message?: string, recipientEmails?: Array<string>): T;
	update<T=void>(): T;
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
* RichSharingMethods
**********************************************/
export interface RichSharingMethods {
	sharePageByEmail<T=void>(url?: string, message?: string, recipientEmails?: Array<string>): T;
	shareSiteByEmail<T=void>(CustomDescription?: string, CustomTitle?: string, Message?: string, Url?: string, recipientEmails?: Array<string>): T;
}

/*********************************************
* SharePointHomeServiceManager
**********************************************/
export interface SharePointHomeServiceManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceManagerMethods
**********************************************/
export interface SharePointHomeServiceManagerMethods {
	getAcronymsAndColors<T=Array<SP.Publishing.AcronymInformation>>(labels?: Array<SP.Publishing.TextValueWithLanguage>): T;
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
	CommunicationSite<T=SP.Publishing.CommunicationSite>(): T;
	Pages<T=Array<SP.Publishing.SitePage>>(): T;
}

/*********************************************
* SitePageServiceQuery
**********************************************/
export interface SitePageServiceQuery {
	CommunicationSite<T=SP.Publishing.CommunicationSite>(): T;
	Pages<T=Array<SP.Publishing.SitePage>>(): T;
}

/*********************************************
* SitePageServiceMethods
**********************************************/
export interface SitePageServiceMethods {
	addImage<T=SP.File>(pageName?: string, imageFileName?: string, imageStream?: any): T;
	addImageFromExternalUrl<T=SP.File>(pageName?: string, imageFileName?: string, externalUrl?: string, subFolderName?: string): T;
	canCreatePromotedPage<T=boolean>(): T;
	update<T=void>(): T;
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
	Channel<T=SP.Publishing.VideoChannel>(): T;
}

/*********************************************
* SpotlightChannelQuery
**********************************************/
export interface SpotlightChannelQuery {
	Channel<T=SP.Publishing.VideoChannel>(): T;
}

/*********************************************
* SpotlightChannelMethods
**********************************************/
export interface SpotlightChannelMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
	Search<T=SP.Publishing.Search>(): T;
	SpotlightVideos<T=Array<SP.Publishing.SpotlightVideo>>(): T;
	Videos<T=Array<SP.Publishing.VideoItem>>(): T;
}

/*********************************************
* VideoChannelQuery
**********************************************/
export interface VideoChannelQuery {
	Search<T=SP.Publishing.Search>(): T;
	SpotlightVideos<T=Array<SP.Publishing.SpotlightVideo>>(): T;
	Videos<T=Array<SP.Publishing.VideoItem>>(): T;
}

/*********************************************
* VideoChannelMethods
**********************************************/
export interface VideoChannelMethods {
	getAllVideos<T=Array<SP.Publishing.VideoItem>>(skip?: number, limit?: number): T;
	getChannelPageUrl<T=string>(viewMode?: number): T;
	getMyVideos<T=Array<SP.Publishing.VideoItem>>(skip?: number, limit?: number): T;
	getPermissionGroup<T=SP.Publishing.VideoPermissionGroup>(permission?: number): T;
	getVideoCount<T=number>(): T;
	update<T=void>(): T;
}

/*********************************************
* Search
**********************************************/
export interface Search {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	QueryLanguages?: Array<number>;
}

/*********************************************
* SearchMethods
**********************************************/
export interface SearchMethods {
	newest<T=Array<SP.Publishing.VideoItem>>(startItemIndex?: number, itemLimit?: number): T;
	popular<T=Array<SP.Publishing.VideoItem>>(startItemIndex?: number, itemLimit?: number): T;
	query<T=Array<SP.Publishing.VideoItem>>(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): T;
	queryChannels<T=Array<SP.Publishing.VideoChannel>>(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): T;
	related<T=Array<SP.Publishing.VideoItem>>(videoId?: any, startItemIndex?: number, itemLimit?: number): T;
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
	Video<T=SP.Publishing.VideoItem>(): T;
}

/*********************************************
* SpotlightVideoQuery
**********************************************/
export interface SpotlightVideoQuery {
	Video<T=SP.Publishing.VideoItem>(): T;
}

/*********************************************
* SpotlightVideoMethods
**********************************************/
export interface SpotlightVideoMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
	Users<T=Array<SP.User>>(): T;
}

/*********************************************
* VideoPermissionGroupQuery
**********************************************/
export interface VideoPermissionGroupQuery {
	Users<T=Array<SP.User>>(): T;
}

/*********************************************
* VideoPermissionGroupMethods
**********************************************/
export interface VideoPermissionGroupMethods {
	hasCurrentUser<T=boolean>(): T;
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
	CanEditChannels<T=Array<SP.Publishing.VideoChannel>>(): T;
	Channels<T=Array<SP.Publishing.VideoChannel>>(): T;
	Search<T=SP.Publishing.Search>(): T;
	SpotlightChannels<T=Array<SP.Publishing.SpotlightChannel>>(): T;
	SpotlightVideos<T=Array<SP.Publishing.SpotlightVideo>>(): T;
}

/*********************************************
* VideoServiceManagerQuery
**********************************************/
export interface VideoServiceManagerQuery {
	CanEditChannels<T=Array<SP.Publishing.VideoChannel>>(): T;
	Channels<T=Array<SP.Publishing.VideoChannel>>(): T;
	Search<T=SP.Publishing.Search>(): T;
	SpotlightChannels<T=Array<SP.Publishing.SpotlightChannel>>(): T;
	SpotlightVideos<T=Array<SP.Publishing.SpotlightVideo>>(): T;
}

/*********************************************
* VideoServiceManagerMethods
**********************************************/
export interface VideoServiceManagerMethods {
	getChannels<T=Array<SP.Publishing.VideoChannel>>(startIndex?: number, limit?: number): T;
	getPermissionGroup<T=SP.Publishing.VideoPermissionGroup>(permission?: number): T;
}

/*********************************************
* VideoThumbnail
**********************************************/
export interface VideoThumbnail {
	Choice?: number;
	IsSelected?: boolean;
	Url?: string;
}
