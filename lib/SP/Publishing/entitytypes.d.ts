import { IBaseExecution } from "../../";
import { IBaseCollection } from "../../";
import { SP } from "../../";

/*********************************************
* ICommunicationSite
**********************************************/
export interface ICommunicationSite extends CommunicationSiteProps,CommunicationSiteMethods,IBaseExecution<CommunicationSite> {

}

/*********************************************
* CommunicationSite
**********************************************/
export interface CommunicationSite extends CommunicationSiteProps, CommunicationSiteMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunicationSiteProps
**********************************************/
export interface CommunicationSiteProps {

}

/*********************************************
* CommunicationSiteMethods
**********************************************/
export interface CommunicationSiteMethods {
	create<T=SP.Publishing.CommunicationSiteCreationResponse>(request?: SP.Publishing.CommunicationSiteCreationRequest): IBaseExecution<T>;
	status<T=SP.Publishing.CommunicationSiteCreationResponse>(url?: string): IBaseExecution<T>;
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
* IEmbedService
**********************************************/
export interface IEmbedService extends EmbedServiceProps,EmbedServiceMethods,IBaseExecution<EmbedService> {

}

/*********************************************
* EmbedService
**********************************************/
export interface EmbedService extends EmbedServiceProps, EmbedServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EmbedServiceProps
**********************************************/
export interface EmbedServiceProps {

}

/*********************************************
* EmbedServiceMethods
**********************************************/
export interface EmbedServiceMethods {
	embedData<T=SP.Publishing.EmbedDataV1>(url?: string, version?: number): IBaseExecution<T>;
}

/*********************************************
* IVideoItem
**********************************************/
export interface IVideoItem extends VideoItemProps,VideoItemMethods,IBaseExecution<VideoItem> {

}

/*********************************************
* VideoItem
**********************************************/
export interface VideoItem extends VideoItemProps, VideoItemMethods {
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
* VideoItemProps
**********************************************/
export interface VideoItemProps {
	Author<T=SP.User>(): IBaseExecution<T>;
	Owner<T=SP.User>(): IBaseExecution<T>;
	PeopleInMedia<T=SP.User>(): IBaseCollection<T>;
}

/*********************************************
* VideoItemMethods
**********************************************/
export interface VideoItemMethods {
	customThumbnail<T=any>(): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	getFile<T=SP.File>(): IBaseExecution<T>;
	getPlaybackMetadata<T=SP.Publishing.VideoPlaybackMetadata>(sdnConfiguration?: string): IBaseExecution<T>;
	getPlaybackUrl<T=string>(videoFormat?: number): IBaseExecution<T>;
	getStreamingKeyAccessToken<T=string>(): IBaseExecution<T>;
	getVideoDetailedViewCount<T=SP.Publishing.ItemViewsAnalyticsData>(): IBaseExecution<T>;
	getVideoEmbedCode<T=string>(width?: number, height?: number, autoplay?: boolean, showInfo?: boolean, makeResponsive?: boolean): IBaseExecution<T>;
	getVideoViewProgressCount<T=Array<SP.Publishing.ViewProgressAnalyticsData>>(): IBaseExecution<T>;
	incrementVideoViewProgressCount<T=any>(percentageViewed?: number): IBaseExecution<T>;
	incrementViewCount<T=any>(viewOrigin?: number): IBaseExecution<T>;
	setPeopleInMedia<T=any>(loginNames?: Array<string>): IBaseExecution<T>;
	setVideoOwner<T=any>(id?: number): IBaseExecution<T>;
	subtitles<T=Array<SP.Publishing.SubtitleFile>>(): IBaseExecution<T>;
	thumbnails<T=Array<SP.Publishing.VideoThumbnail>>(preferredWidth?: number): IBaseExecution<T>;
	thumbnailStream<T=any>(preferredWidth?: number): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
	uploadCustomThumbnail<T=any>(fileExtension?: string, customVideoThumbnail?: any): IBaseExecution<T>;
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
* IPointPublishingPost
**********************************************/
export interface IPointPublishingPost extends PointPublishingPostProps,PointPublishingPostMethods,IBaseExecution<PointPublishingPost> {

}

/*********************************************
* PointPublishingPost
**********************************************/
export interface PointPublishingPost extends PointPublishingPostProps, PointPublishingPostMethods {
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
* PointPublishingPostProps
**********************************************/
export interface PointPublishingPostProps {
	images<T=SP.File>(): IBaseCollection<T>;
}

/*********************************************
* PointPublishingPostMethods
**********************************************/
export interface PointPublishingPostMethods {
	addImageFromUrl<T=string>(fromImageUrl?: string): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IPointPublishingPostServiceManager
**********************************************/
export interface IPointPublishingPostServiceManager extends PointPublishingPostServiceManagerProps,PointPublishingPostServiceManagerMethods,IBaseExecution<PointPublishingPostServiceManager> {

}

/*********************************************
* PointPublishingPostServiceManager
**********************************************/
export interface PointPublishingPostServiceManager extends PointPublishingPostServiceManagerProps, PointPublishingPostServiceManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingPostServiceManagerProps
**********************************************/
export interface PointPublishingPostServiceManagerProps {
	bannerimages<T=SP.File>(): IBaseCollection<T>;
	contributors<T=SP.Publishing.PointPublishingUser>(): IBaseCollection<T>;
	creators<T=SP.Publishing.PointPublishingUser>(): IBaseCollection<T>;
	magazineprops<T=SP.Publishing.PointPublishingMagazineProps>(): IBaseExecution<T>;
	posts<T=SP.Publishing.PointPublishingPost>(): IBaseCollection<T>;
	viewers<T=SP.Publishing.PointPublishingUser>(): IBaseCollection<T>;
}

/*********************************************
* PointPublishingPostServiceManagerMethods
**********************************************/
export interface PointPublishingPostServiceManagerMethods {
	addBannerImageFromUrl<T=string>(fromImageUrl?: string): IBaseExecution<T>;
	deleteMagazine<T=any>(): IBaseExecution<T>;
	getDocProps<T=Array<SP.Publishing.PointPublishingDocProps>>(docUrls?: Array<string>): IBaseExecution<T>;
	getPostsQuery<T=Array<SP.Publishing.PointPublishingPost>>(top?: number, itemIdBoundary?: number, directionAscending?: boolean, publishedOnly?: boolean, draftsOnly?: boolean): IBaseExecution<T>;
	getTopAuthors<T=Array<SP.Publishing.PointPublishingUser>>(count?: number): IBaseExecution<T>;
	queryGroupNames<T=Array<SP.Publishing.PointPublishingUser>>(query?: string): IBaseExecution<T>;
	setMagazineProperties<T=SP.Publishing.PointPublishingMagazineProps>(title?: string, description?: string, bannerImageUrl?: string, bannerColor?: string, bannerPattern?: string): IBaseExecution<T>;
}

/*********************************************
* IPointPublishingUser
**********************************************/
export interface IPointPublishingUser extends PointPublishingUserProps,PointPublishingUserMethods,IBaseExecution<PointPublishingUser> {

}

/*********************************************
* PointPublishingUser
**********************************************/
export interface PointPublishingUser extends PointPublishingUserProps, PointPublishingUserMethods {
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
* PointPublishingUserProps
**********************************************/
export interface PointPublishingUserProps {

}

/*********************************************
* PointPublishingUserMethods
**********************************************/
export interface PointPublishingUserMethods {
	deleteUserFromContainerGroup<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IPointPublishingSiteManager
**********************************************/
export interface IPointPublishingSiteManager extends PointPublishingSiteManagerProps,PointPublishingSiteManagerMethods,IBaseExecution<PointPublishingSiteManager> {

}

/*********************************************
* PointPublishingSiteManager
**********************************************/
export interface PointPublishingSiteManager extends PointPublishingSiteManagerProps, PointPublishingSiteManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingSiteManagerProps
**********************************************/
export interface PointPublishingSiteManagerProps {

}

/*********************************************
* PointPublishingSiteManagerMethods
**********************************************/
export interface PointPublishingSiteManagerMethods {
	create<T=SP.Publishing.PointPublishingSiteStatus>(siteInfo?: SP.Publishing.PublishSiteInformation): IBaseExecution<T>;
	getSiteStatus<T=SP.Publishing.PointPublishingSiteStatus>(siteInfo?: SP.Publishing.PublishSiteInformation): IBaseExecution<T>;
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
* IPointPublishingTenantManager
**********************************************/
export interface IPointPublishingTenantManager extends PointPublishingTenantManagerProps,PointPublishingTenantManagerMethods,IBaseExecution<PointPublishingTenantManager> {

}

/*********************************************
* PointPublishingTenantManager
**********************************************/
export interface PointPublishingTenantManager extends PointPublishingTenantManagerProps, PointPublishingTenantManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingTenantManagerProps
**********************************************/
export interface PointPublishingTenantManagerProps {

}

/*********************************************
* PointPublishingTenantManagerMethods
**********************************************/
export interface PointPublishingTenantManagerMethods {
	isBlogEnabled<T=boolean>(): IBaseExecution<T>;
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
* ISitePageMetadata
**********************************************/
export interface ISitePageMetadata extends SitePageMetadataProps,SitePageMetadataMethods,IBaseExecution<SitePageMetadata> {

}

/*********************************************
* SitePageMetadata
**********************************************/
export interface SitePageMetadata extends SitePageMetadataProps, SitePageMetadataMethods {
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
* SitePageMetadataProps
**********************************************/
export interface SitePageMetadataProps {
	CreatedBy<T=SP.Publishing.UserInfo>(): IBaseExecution<T>;
	LastModifiedBy<T=SP.Publishing.UserInfo>(): IBaseExecution<T>;
}

/*********************************************
* SitePageMetadataMethods
**********************************************/
export interface SitePageMetadataMethods {

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
* ISitePage
**********************************************/
export interface ISitePage extends SitePageProps,SitePageMethods,IBaseExecution<SitePage> {

}

/*********************************************
* SitePage
**********************************************/
export interface SitePage extends SP.Publishing.SitePageMetadata, SitePageProps, SitePageMethods {
	AlternativeUrlMap?: string;
	CanvasContent1?: string;
	CanvasJson1?: string;
	IsLikedByCurrentUser?: boolean;
	IsTemplate?: boolean;
	LayoutWebpartsContent?: string;
}

/*********************************************
* SitePageProps
**********************************************/
export interface SitePageProps {

}

/*********************************************
* SitePageMethods
**********************************************/
export interface SitePageMethods {
	checkOut<T=boolean>(): IBaseExecution<T>;
	checkoutPage<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	copy<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	demoteFromNews<T=boolean>(): IBaseExecution<T>;
	discardPage<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	getVersion<T=SP.Publishing.SitePage>(versionId?: number): IBaseExecution<T>;
	promoteToNews<T=boolean>(): IBaseExecution<T>;
	publish<T=boolean>(): IBaseExecution<T>;
	saveDraft<T=boolean>(sitePage?: SP.Publishing.SitePageFieldsData): IBaseExecution<T>;
	savePage<T=any>(pageStream?: any): IBaseExecution<T>;
	savePageAsDraft<T=boolean>(pageStream?: any): IBaseExecution<T>;
	savePageAsTemplate<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	sharePagePreviewByEmail<T=any>(message?: string, recipientEmails?: Array<string>): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IRepostPage
**********************************************/
export interface IRepostPage extends RepostPageProps,RepostPageMethods,IBaseExecution<RepostPage> {

}

/*********************************************
* RepostPage
**********************************************/
export interface RepostPage extends SP.Publishing.SitePage, RepostPageProps, RepostPageMethods {
	IsBannerImageUrlExternal?: boolean;
	OriginalSourceItemId?: any;
	OriginalSourceListId?: any;
	OriginalSourceSiteId?: any;
	OriginalSourceUrl?: string;
	OriginalSourceWebId?: any;
	ShouldSaveAsDraft?: boolean;
}

/*********************************************
* RepostPageProps
**********************************************/
export interface RepostPageProps {

}

/*********************************************
* RepostPageMethods
**********************************************/
export interface RepostPageMethods {
	checkOut<T=boolean>(): IBaseExecution<T>;
	checkoutPage<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	copy<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	demoteFromNews<T=boolean>(): IBaseExecution<T>;
	discardPage<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	getVersion<T=SP.Publishing.SitePage>(versionId?: number): IBaseExecution<T>;
	promoteToNews<T=boolean>(): IBaseExecution<T>;
	publish<T=boolean>(): IBaseExecution<T>;
	saveDraft<T=boolean>(sitePage?: SP.Publishing.SitePageFieldsData): IBaseExecution<T>;
	savePage<T=any>(pageStream?: any): IBaseExecution<T>;
	savePageAsDraft<T=boolean>(pageStream?: any): IBaseExecution<T>;
	savePageAsTemplate<T=SP.Publishing.SitePage>(): IBaseExecution<T>;
	sharePagePreviewByEmail<T=any>(message?: string, recipientEmails?: Array<string>): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IRichSharing
**********************************************/
export interface IRichSharing extends RichSharingProps,RichSharingMethods,IBaseExecution<RichSharing> {

}

/*********************************************
* RichSharing
**********************************************/
export interface RichSharing extends RichSharingProps, RichSharingMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RichSharingProps
**********************************************/
export interface RichSharingProps {

}

/*********************************************
* RichSharingMethods
**********************************************/
export interface RichSharingMethods {
	sharePageByEmail<T=any>(url?: string, message?: string, recipientEmails?: Array<string>): IBaseExecution<T>;
	shareSiteByEmail<T=any>(CustomDescription?: string, CustomTitle?: string, Message?: string, Url?: string, recipientEmails?: Array<string>): IBaseExecution<T>;
}

/*********************************************
* ISharePointHomeServiceManager
**********************************************/
export interface ISharePointHomeServiceManager extends SharePointHomeServiceManagerProps,SharePointHomeServiceManagerMethods,IBaseExecution<SharePointHomeServiceManager> {

}

/*********************************************
* SharePointHomeServiceManager
**********************************************/
export interface SharePointHomeServiceManager extends SharePointHomeServiceManagerProps, SharePointHomeServiceManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceManagerProps
**********************************************/
export interface SharePointHomeServiceManagerProps {

}

/*********************************************
* SharePointHomeServiceManagerMethods
**********************************************/
export interface SharePointHomeServiceManagerMethods {
	getAcronymsAndColors<T=Array<SP.Publishing.AcronymInformation>>(labels?: Array<SP.Publishing.TextValueWithLanguage>): IBaseExecution<T>;
}

/*********************************************
* ISitePageService
**********************************************/
export interface ISitePageService extends SitePageServiceProps,SitePageServiceMethods,IBaseExecution<SitePageService> {

}

/*********************************************
* SitePageService
**********************************************/
export interface SitePageService extends SitePageServiceProps, SitePageServiceMethods {
	CustomContentApprovalEnabled?: boolean;
}

/*********************************************
* SitePageServiceProps
**********************************************/
export interface SitePageServiceProps {
	CommunicationSite<T=SP.Publishing.CommunicationSite>(): IBaseExecution<T>;
	Pages<T=SP.Publishing.SitePage>(): IBaseCollection<T>;
}

/*********************************************
* SitePageServiceMethods
**********************************************/
export interface SitePageServiceMethods {
	addImage<T=SP.File>(pageName?: string, imageFileName?: string, imageStream?: any): IBaseExecution<T>;
	addImageFromExternalUrl<T=SP.File>(pageName?: string, imageFileName?: string, externalUrl?: string, subFolderName?: string): IBaseExecution<T>;
	canCreatePromotedPage<T=boolean>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ISpotlightChannel
**********************************************/
export interface ISpotlightChannel extends SpotlightChannelProps,SpotlightChannelMethods,IBaseExecution<SpotlightChannel> {

}

/*********************************************
* SpotlightChannel
**********************************************/
export interface SpotlightChannel extends SpotlightChannelProps, SpotlightChannelMethods {
	ChannelId?: any;
	Id?: number;
	TileHtmlColor?: string;
	Title?: string;
	VideoLibraryServerRelativeUrl?: string;
}

/*********************************************
* SpotlightChannelProps
**********************************************/
export interface SpotlightChannelProps {
	Channel<T=SP.Publishing.VideoChannel>(): IBaseExecution<T>;
}

/*********************************************
* SpotlightChannelMethods
**********************************************/
export interface SpotlightChannelMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IVideoChannel
**********************************************/
export interface IVideoChannel extends VideoChannelProps,VideoChannelMethods,IBaseExecution<VideoChannel> {

}

/*********************************************
* VideoChannel
**********************************************/
export interface VideoChannel extends VideoChannelProps, VideoChannelMethods {
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
* VideoChannelProps
**********************************************/
export interface VideoChannelProps {
	Search<T=SP.Publishing.Search>(): IBaseExecution<T>;
	SpotlightVideos<T=SP.Publishing.SpotlightVideo>(): IBaseCollection<T>;
	Videos<T=SP.Publishing.VideoItem>(): IBaseCollection<T>;
}

/*********************************************
* VideoChannelMethods
**********************************************/
export interface VideoChannelMethods {
	getAllVideos<T=Array<SP.Publishing.VideoItem>>(skip?: number, limit?: number): IBaseExecution<T>;
	getChannelPageUrl<T=string>(viewMode?: number): IBaseExecution<T>;
	getMyVideos<T=Array<SP.Publishing.VideoItem>>(skip?: number, limit?: number): IBaseExecution<T>;
	getPermissionGroup<T=SP.Publishing.VideoPermissionGroup>(permission?: number): IBaseExecution<T>;
	getVideoCount<T=number>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ISearch
**********************************************/
export interface ISearch extends SearchProps,SearchMethods,IBaseExecution<Search> {

}

/*********************************************
* Search
**********************************************/
export interface Search extends SearchProps, SearchMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	QueryLanguages?: Array<number>;
}

/*********************************************
* SearchProps
**********************************************/
export interface SearchProps {

}

/*********************************************
* SearchMethods
**********************************************/
export interface SearchMethods {
	newest<T=Array<SP.Publishing.VideoItem>>(startItemIndex?: number, itemLimit?: number): IBaseExecution<T>;
	popular<T=Array<SP.Publishing.VideoItem>>(startItemIndex?: number, itemLimit?: number): IBaseExecution<T>;
	query<T=Array<SP.Publishing.VideoItem>>(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): IBaseExecution<T>;
	queryChannels<T=Array<SP.Publishing.VideoChannel>>(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): IBaseExecution<T>;
	related<T=Array<SP.Publishing.VideoItem>>(videoId?: any, startItemIndex?: number, itemLimit?: number): IBaseExecution<T>;
}

/*********************************************
* ISpotlightVideo
**********************************************/
export interface ISpotlightVideo extends SpotlightVideoProps,SpotlightVideoMethods,IBaseExecution<SpotlightVideo> {

}

/*********************************************
* SpotlightVideo
**********************************************/
export interface SpotlightVideo extends SpotlightVideoProps, SpotlightVideoMethods {
	Id?: number;
	ServerRelativeUrl?: string;
	Url?: string;
}

/*********************************************
* SpotlightVideoProps
**********************************************/
export interface SpotlightVideoProps {
	Video<T=SP.Publishing.VideoItem>(): IBaseExecution<T>;
}

/*********************************************
* SpotlightVideoMethods
**********************************************/
export interface SpotlightVideoMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IVideoPermissionGroup
**********************************************/
export interface IVideoPermissionGroup extends VideoPermissionGroupProps,VideoPermissionGroupMethods,IBaseExecution<VideoPermissionGroup> {

}

/*********************************************
* VideoPermissionGroup
**********************************************/
export interface VideoPermissionGroup extends VideoPermissionGroupProps, VideoPermissionGroupMethods {
	Id?: number;
}

/*********************************************
* VideoPermissionGroupProps
**********************************************/
export interface VideoPermissionGroupProps {
	Users<T=SP.User>(): IBaseCollection<T>;
}

/*********************************************
* VideoPermissionGroupMethods
**********************************************/
export interface VideoPermissionGroupMethods {
	hasCurrentUser<T=boolean>(): IBaseExecution<T>;
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
* IVideoServiceManager
**********************************************/
export interface IVideoServiceManager extends VideoServiceManagerProps,VideoServiceManagerMethods,IBaseExecution<VideoServiceManager> {

}

/*********************************************
* VideoServiceManager
**********************************************/
export interface VideoServiceManager extends VideoServiceManagerProps, VideoServiceManagerMethods {
	CanAdministratePortalByCurrent?: boolean;
	CanCreateChannelsByCurrent?: boolean;
	CanViewPortalByCurrent?: boolean;
	UploadGuidelinesLink?: string;
	VideoGuidelinesLink?: string;
}

/*********************************************
* VideoServiceManagerProps
**********************************************/
export interface VideoServiceManagerProps {
	CanEditChannels<T=SP.Publishing.VideoChannel>(): IBaseCollection<T>;
	Channels<T=SP.Publishing.VideoChannel>(): IBaseCollection<T>;
	Search<T=SP.Publishing.Search>(): IBaseExecution<T>;
	SpotlightChannels<T=SP.Publishing.SpotlightChannel>(): IBaseCollection<T>;
	SpotlightVideos<T=SP.Publishing.SpotlightVideo>(): IBaseCollection<T>;
}

/*********************************************
* VideoServiceManagerMethods
**********************************************/
export interface VideoServiceManagerMethods {
	getChannels<T=Array<SP.Publishing.VideoChannel>>(startIndex?: number, limit?: number): IBaseExecution<T>;
	getPermissionGroup<T=SP.Publishing.VideoPermissionGroup>(permission?: number): IBaseExecution<T>;
}

/*********************************************
* VideoThumbnail
**********************************************/
export interface VideoThumbnail {
	Choice?: number;
	IsSelected?: boolean;
	Url?: string;
}

/*********************************************
* IPointPublishingUserCollection
**********************************************/
export interface IPointPublishingUserCollection extends PointPublishingUserCollectionProps,PointPublishingUserCollectionMethods,IBaseExecution<PointPublishingUserCollection> {

}

/*********************************************
* PointPublishingUserCollection
**********************************************/
export interface PointPublishingUserCollection extends PointPublishingUserCollectionProps, PointPublishingUserCollectionMethods {

}

/*********************************************
* PointPublishingUserCollectionProps
**********************************************/
export interface PointPublishingUserCollectionProps {

}

/*********************************************
* PointPublishingUserCollectionMethods
**********************************************/
export interface PointPublishingUserCollectionMethods {
	addOrUpdateUser<T=SP.Publishing.PointPublishingUser>(loginName?: string, isOwner?: boolean): IBaseExecution<T>;
	getById<T=SP.Publishing.PointPublishingUser>(userId?: number): IBaseExecution<T>;
}

/*********************************************
* ISitePageMetadataCollection
**********************************************/
export interface ISitePageMetadataCollection extends SitePageMetadataCollectionProps,SitePageMetadataCollectionMethods,IBaseExecution<SitePageMetadataCollection> {

}

/*********************************************
* SitePageMetadataCollection
**********************************************/
export interface SitePageMetadataCollection extends SitePageMetadataCollectionProps, SitePageMetadataCollectionMethods {

}

/*********************************************
* SitePageMetadataCollectionProps
**********************************************/
export interface SitePageMetadataCollectionProps {

}

/*********************************************
* SitePageMetadataCollectionMethods
**********************************************/
export interface SitePageMetadataCollectionMethods {
	getById<T=SP.Publishing.SitePageMetadata>(id?: number): IBaseExecution<T>;
}

/*********************************************
* IVideoItemCollection
**********************************************/
export interface IVideoItemCollection extends VideoItemCollectionProps,VideoItemCollectionMethods,IBaseExecution<VideoItemCollection> {

}

/*********************************************
* VideoItemCollection
**********************************************/
export interface VideoItemCollection extends VideoItemCollectionProps, VideoItemCollectionMethods {

}

/*********************************************
* VideoItemCollectionProps
**********************************************/
export interface VideoItemCollectionProps {

}

/*********************************************
* VideoItemCollectionMethods
**********************************************/
export interface VideoItemCollectionMethods {
	getById<T=SP.Publishing.VideoItem>(id?: any): IBaseExecution<T>;
}
