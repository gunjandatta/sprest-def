import { SP } from "../../";

/*********************************************
* CommunicationSite
**********************************************/
export interface CommunicationSite {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunicationSiteMethods<T = any>
**********************************************/
export interface CommunicationSiteMethods<T = any> {
	create(request?: SP.Publishing.CommunicationSiteCreationRequest): T;
	status(url?: string): T;
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
* EmbedServiceMethods<T = any>
**********************************************/
export interface EmbedServiceMethods<T = any> {
	embedData(url?: string, version?: number): T;
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
* VideoItemCollections<T = any>
**********************************************/
export interface VideoItemCollections<T = any> {
	Author(): T;
	Owner(): T;
	PeopleInMedia(): T;
}

/*********************************************
* VideoItemQuery<T = any>
**********************************************/
export interface VideoItemQuery<T = any> {
	Author(): T;
	Owner(): T;
	PeopleInMedia(): T;
}

/*********************************************
* VideoItemMethods<T = any>
**********************************************/
export interface VideoItemMethods<T = any> {
	customThumbnail(): T;
	deleteObject(): T;
	getFile(): T;
	getPlaybackMetadata(sdnConfiguration?: string): T;
	getPlaybackUrl(videoFormat?: number): T;
	getStreamingKeyAccessToken(): T;
	getVideoDetailedViewCount(): T;
	getVideoEmbedCode(width?: number, height?: number, autoplay?: boolean, showInfo?: boolean, makeResponsive?: boolean): T;
	getVideoViewProgressCount(): T;
	incrementVideoViewProgressCount(percentageViewed?: number): T;
	incrementViewCount(viewOrigin?: number): T;
	setPeopleInMedia(loginNames?: Array<string>): T;
	setVideoOwner(id?: number): T;
	subtitles(): T;
	thumbnails(preferredWidth?: number): T;
	thumbnailStream(preferredWidth?: number): T;
	update(): T;
	uploadCustomThumbnail(fileExtension?: string, customVideoThumbnail?: any): T;
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
* PointPublishingPostCollections<T = any>
**********************************************/
export interface PointPublishingPostCollections<T = any> {
	images(): T;
}

/*********************************************
* PointPublishingPostQuery<T = any>
**********************************************/
export interface PointPublishingPostQuery<T = any> {
	images(): T;
}

/*********************************************
* PointPublishingPostMethods<T = any>
**********************************************/
export interface PointPublishingPostMethods<T = any> {
	addImageFromUrl(fromImageUrl?: string): T;
	deleteObject(): T;
}

/*********************************************
* PointPublishingPostServiceManager
**********************************************/
export interface PointPublishingPostServiceManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingPostServiceManagerCollections<T = any>
**********************************************/
export interface PointPublishingPostServiceManagerCollections<T = any> {
	bannerimages(): T;
	contributors(): T;
	creators(): T;
	magazineprops(): T;
	posts(): T;
	viewers(): T;
}

/*********************************************
* PointPublishingPostServiceManagerQuery<T = any>
**********************************************/
export interface PointPublishingPostServiceManagerQuery<T = any> {
	bannerimages(): T;
	contributors(): T;
	creators(): T;
	magazineprops(): T;
	posts(): T;
	viewers(): T;
}

/*********************************************
* PointPublishingPostServiceManagerMethods<T = any>
**********************************************/
export interface PointPublishingPostServiceManagerMethods<T = any> {
	addBannerImageFromUrl(fromImageUrl?: string): T;
	deleteMagazine(): T;
	getDocProps(docUrls?: Array<string>): T;
	getPostsQuery(top?: number, itemIdBoundary?: number, directionAscending?: boolean, publishedOnly?: boolean, draftsOnly?: boolean): T;
	getTopAuthors(count?: number): T;
	queryGroupNames(query?: string): T;
	setMagazineProperties(title?: string, description?: string, bannerImageUrl?: string, bannerColor?: string, bannerPattern?: string): T;
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
* PointPublishingUserMethods<T = any>
**********************************************/
export interface PointPublishingUserMethods<T = any> {
	deleteUserFromContainerGroup(): T;
}

/*********************************************
* PointPublishingSiteManager
**********************************************/
export interface PointPublishingSiteManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingSiteManagerMethods<T = any>
**********************************************/
export interface PointPublishingSiteManagerMethods<T = any> {
	create(siteInfo?: SP.Publishing.PublishSiteInformation): T;
	getSiteStatus(siteInfo?: SP.Publishing.PublishSiteInformation): T;
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
* PointPublishingTenantManagerMethods<T = any>
**********************************************/
export interface PointPublishingTenantManagerMethods<T = any> {
	isBlogEnabled(): T;
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
* SitePageMetadataCollections<T = any>
**********************************************/
export interface SitePageMetadataCollections<T = any> {
	CreatedBy(): T;
	LastModifiedBy(): T;
}

/*********************************************
* SitePageMetadataQuery<T = any>
**********************************************/
export interface SitePageMetadataQuery<T = any> {
	CreatedBy(): T;
	LastModifiedBy(): T;
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
* SitePageMethods<T = any>
**********************************************/
export interface SitePageMethods<T = any> {
	checkOut(): T;
	checkoutPage(): T;
	copy(): T;
	demoteFromNews(): T;
	discardPage(): T;
	getVersion(versionId?: number): T;
	promoteToNews(): T;
	publish(): T;
	saveDraft(sitePage?: SP.Publishing.SitePageFieldsData): T;
	savePage(pageStream?: any): T;
	savePageAsDraft(pageStream?: any): T;
	savePageAsTemplate(): T;
	sharePagePreviewByEmail(message?: string, recipientEmails?: Array<string>): T;
	update(): T;
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
* RepostPageMethods<T = any>
**********************************************/
export interface RepostPageMethods<T = any> {
	checkOut(): T;
	checkoutPage(): T;
	copy(): T;
	demoteFromNews(): T;
	discardPage(): T;
	getVersion(versionId?: number): T;
	promoteToNews(): T;
	publish(): T;
	saveDraft(sitePage?: SP.Publishing.SitePageFieldsData): T;
	savePage(pageStream?: any): T;
	savePageAsDraft(pageStream?: any): T;
	savePageAsTemplate(): T;
	sharePagePreviewByEmail(message?: string, recipientEmails?: Array<string>): T;
	update(): T;
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
* RichSharingMethods<T = any>
**********************************************/
export interface RichSharingMethods<T = any> {
	sharePageByEmail(url?: string, message?: string, recipientEmails?: Array<string>): T;
	shareSiteByEmail(CustomDescription?: string, CustomTitle?: string, Message?: string, Url?: string, recipientEmails?: Array<string>): T;
}

/*********************************************
* SharePointHomeServiceManager
**********************************************/
export interface SharePointHomeServiceManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceManagerMethods<T = any>
**********************************************/
export interface SharePointHomeServiceManagerMethods<T = any> {
	getAcronymsAndColors(labels?: Array<SP.Publishing.TextValueWithLanguage>): T;
}

/*********************************************
* SitePageService
**********************************************/
export interface SitePageService {
	CustomContentApprovalEnabled?: boolean;
}

/*********************************************
* SitePageServiceCollections<T = any>
**********************************************/
export interface SitePageServiceCollections<T = any> {
	CommunicationSite(): T;
	Pages(): T;
}

/*********************************************
* SitePageServiceQuery<T = any>
**********************************************/
export interface SitePageServiceQuery<T = any> {
	CommunicationSite(): T;
	Pages(): T;
}

/*********************************************
* SitePageServiceMethods<T = any>
**********************************************/
export interface SitePageServiceMethods<T = any> {
	addImage(pageName?: string, imageFileName?: string, imageStream?: any): T;
	addImageFromExternalUrl(pageName?: string, imageFileName?: string, externalUrl?: string, subFolderName?: string): T;
	canCreatePromotedPage(): T;
	update(): T;
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
* SpotlightChannelCollections<T = any>
**********************************************/
export interface SpotlightChannelCollections<T = any> {
	Channel(): T;
}

/*********************************************
* SpotlightChannelQuery<T = any>
**********************************************/
export interface SpotlightChannelQuery<T = any> {
	Channel(): T;
}

/*********************************************
* SpotlightChannelMethods<T = any>
**********************************************/
export interface SpotlightChannelMethods<T = any> {
	deleteObject(): T;
	update(): T;
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
* VideoChannelCollections<T = any>
**********************************************/
export interface VideoChannelCollections<T = any> {
	Search(): T;
	SpotlightVideos(): T;
	Videos(): T;
}

/*********************************************
* VideoChannelQuery<T = any>
**********************************************/
export interface VideoChannelQuery<T = any> {
	Search(): T;
	SpotlightVideos(): T;
	Videos(): T;
}

/*********************************************
* VideoChannelMethods<T = any>
**********************************************/
export interface VideoChannelMethods<T = any> {
	getAllVideos(skip?: number, limit?: number): T;
	getChannelPageUrl(viewMode?: number): T;
	getMyVideos(skip?: number, limit?: number): T;
	getPermissionGroup(permission?: number): T;
	getVideoCount(): T;
	update(): T;
}

/*********************************************
* Search
**********************************************/
export interface Search {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	QueryLanguages?: Array<number>;
}

/*********************************************
* SearchMethods<T = any>
**********************************************/
export interface SearchMethods<T = any> {
	newest(startItemIndex?: number, itemLimit?: number): T;
	popular(startItemIndex?: number, itemLimit?: number): T;
	query(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): T;
	queryChannels(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): T;
	related(videoId?: any, startItemIndex?: number, itemLimit?: number): T;
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
* SpotlightVideoCollections<T = any>
**********************************************/
export interface SpotlightVideoCollections<T = any> {
	Video(): T;
}

/*********************************************
* SpotlightVideoQuery<T = any>
**********************************************/
export interface SpotlightVideoQuery<T = any> {
	Video(): T;
}

/*********************************************
* SpotlightVideoMethods<T = any>
**********************************************/
export interface SpotlightVideoMethods<T = any> {
	deleteObject(): T;
	update(): T;
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
* VideoPermissionGroupCollections<T = any>
**********************************************/
export interface VideoPermissionGroupCollections<T = any> {
	Users(): T;
}

/*********************************************
* VideoPermissionGroupQuery<T = any>
**********************************************/
export interface VideoPermissionGroupQuery<T = any> {
	Users(): T;
}

/*********************************************
* VideoPermissionGroupMethods<T = any>
**********************************************/
export interface VideoPermissionGroupMethods<T = any> {
	hasCurrentUser(): T;
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
* VideoServiceManagerCollections<T = any>
**********************************************/
export interface VideoServiceManagerCollections<T = any> {
	CanEditChannels(): T;
	Channels(): T;
	Search(): T;
	SpotlightChannels(): T;
	SpotlightVideos(): T;
}

/*********************************************
* VideoServiceManagerQuery<T = any>
**********************************************/
export interface VideoServiceManagerQuery<T = any> {
	CanEditChannels(): T;
	Channels(): T;
	Search(): T;
	SpotlightChannels(): T;
	SpotlightVideos(): T;
}

/*********************************************
* VideoServiceManagerMethods<T = any>
**********************************************/
export interface VideoServiceManagerMethods<T = any> {
	getChannels(startIndex?: number, limit?: number): T;
	getPermissionGroup(permission?: number): T;
}

/*********************************************
* VideoThumbnail
**********************************************/
export interface VideoThumbnail {
	Choice?: number;
	IsSelected?: boolean;
	Url?: string;
}
