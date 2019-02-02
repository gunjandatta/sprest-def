import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";
import { SP } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";

/*********************************************
* ICommunicationSite
**********************************************/
export interface ICommunicationSite extends CommunicationSiteCollections,CommunicationSiteMethods,IBaseQuery<ICommunicationSiteQuery> {

}

/*********************************************
* ICommunicationSiteCollection
**********************************************/
export interface ICommunicationSiteCollection extends IBaseResults<CommunicationSite> {

}

/*********************************************
* ICommunicationSiteQueryCollection
**********************************************/
export interface ICommunicationSiteQueryCollection extends IBaseResults<CommunicationSiteQuery> {

}

/*********************************************
* ICommunicationSiteQuery
**********************************************/
export interface ICommunicationSiteQuery extends CommunicationSiteQuery, CommunicationSiteMethods {

}

/*********************************************
* CommunicationSite
**********************************************/
export interface CommunicationSite extends CommunicationSiteProps, CommunicationSiteCollections, CommunicationSiteMethods {

}

/*********************************************
* CommunicationSiteProps
**********************************************/
export interface CommunicationSiteProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunicationSitePropMethods
**********************************************/
export interface CommunicationSitePropMethods {

}

/*********************************************
* CommunicationSiteCollections
**********************************************/
export interface CommunicationSiteCollections extends CommunicationSitePropMethods {

}

/*********************************************
* CommunicationSiteQuery
**********************************************/
export interface CommunicationSiteQuery extends CommunicationSiteProps, CommunicationSiteMethods {

}

/*********************************************
* CommunicationSiteMethods
**********************************************/
export interface CommunicationSiteMethods {
	create(request?: SP.Publishing.CommunicationSiteCreationRequest): IBaseExecution<SP.Publishing.CommunicationSiteCreationResponse>;
	status(url?: string): IBaseExecution<SP.Publishing.CommunicationSiteCreationResponse>;
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
* EmbedDataV1Collections
**********************************************/
export interface EmbedDataV1Collections {

}

/*********************************************
* IEmbedService
**********************************************/
export interface IEmbedService extends EmbedServiceCollections,EmbedServiceMethods,IBaseQuery<IEmbedServiceQuery> {

}

/*********************************************
* IEmbedServiceCollection
**********************************************/
export interface IEmbedServiceCollection extends IBaseResults<EmbedService> {

}

/*********************************************
* IEmbedServiceQueryCollection
**********************************************/
export interface IEmbedServiceQueryCollection extends IBaseResults<EmbedServiceQuery> {

}

/*********************************************
* IEmbedServiceQuery
**********************************************/
export interface IEmbedServiceQuery extends EmbedServiceQuery, EmbedServiceMethods {

}

/*********************************************
* EmbedService
**********************************************/
export interface EmbedService extends EmbedServiceProps, EmbedServiceCollections, EmbedServiceMethods {

}

/*********************************************
* EmbedServiceProps
**********************************************/
export interface EmbedServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EmbedServicePropMethods
**********************************************/
export interface EmbedServicePropMethods {

}

/*********************************************
* EmbedServiceCollections
**********************************************/
export interface EmbedServiceCollections extends EmbedServicePropMethods {

}

/*********************************************
* EmbedServiceQuery
**********************************************/
export interface EmbedServiceQuery extends EmbedServiceProps, EmbedServiceMethods {

}

/*********************************************
* EmbedServiceMethods
**********************************************/
export interface EmbedServiceMethods {
	embedData(url?: string, version?: number): IBaseExecution<SP.Publishing.EmbedDataV1>;
}

/*********************************************
* IVideoItem
**********************************************/
export interface IVideoItem extends VideoItemCollections,VideoItemMethods,IBaseQuery<IVideoItemQuery> {

}

/*********************************************
* IVideoItemCollection
**********************************************/
export interface IVideoItemCollection extends IBaseResults<VideoItem>, VideoItemCollectionMethods {

}

/*********************************************
* IVideoItemQueryCollection
**********************************************/
export interface IVideoItemQueryCollection extends IBaseResults<VideoItemQuery>, VideoItemCollectionMethods {

}

/*********************************************
* IVideoItemQuery
**********************************************/
export interface IVideoItemQuery extends VideoItemQuery, VideoItemMethods {

}

/*********************************************
* VideoItem
**********************************************/
export interface VideoItem extends VideoItemProps, VideoItemCollections, VideoItemMethods {

}

/*********************************************
* VideoItemProps
**********************************************/
export interface VideoItemProps {
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
* VideoItemPropMethods
**********************************************/
export interface VideoItemPropMethods {
	Author(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	Owner(): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* VideoItemCollections
**********************************************/
export interface VideoItemCollections extends VideoItemPropMethods {
	PeopleInMedia(): IBaseCollection<SP.User, SP.UserQuery, IBaseExecution & SP.UserCollectionMethods> & IBaseExecution & SP.UserCollectionMethods;
	PeopleInMedia(id: string | number): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* VideoItemCollectionMethods
**********************************************/
export interface VideoItemCollectionMethods {
	getById(id?: any): IBaseQuery<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery> & SP.Publishing.VideoItemCollections & SP.Publishing.VideoItemMethods;
}

/*********************************************
* VideoItemQuery
**********************************************/
export interface VideoItemQuery extends VideoItemProps, VideoItemMethods {
	Author: SP.User & SP.UserCollections;
	Owner: SP.User & SP.UserCollections;
	PeopleInMedia: IBaseResults<SP.User>;
}

/*********************************************
* VideoItemMethods
**********************************************/
export interface VideoItemMethods {
	customThumbnail(): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	getFile(): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
	getPlaybackMetadata(sdnConfiguration?: string): IBaseExecution<SP.Publishing.VideoPlaybackMetadata>;
	getPlaybackUrl(videoFormat?: number): IBaseExecution<string>;
	getStreamingKeyAccessToken(): IBaseExecution<string>;
	getVideoDetailedViewCount(): IBaseExecution<SP.Publishing.ItemViewsAnalyticsData>;
	getVideoEmbedCode(width?: number, height?: number, autoplay?: boolean, showInfo?: boolean, makeResponsive?: boolean): IBaseExecution<string>;
	getVideoViewProgressCount(): IBaseCollection<SP.Publishing.ViewProgressAnalyticsData>;
	incrementVideoViewProgressCount(percentageViewed?: number): IBaseExecution<any>;
	incrementViewCount(viewOrigin?: number): IBaseExecution<any>;
	setPeopleInMedia(loginNames?: Array<string>): IBaseExecution<any>;
	setVideoOwner(id?: number): IBaseExecution<any>;
	subtitles(): IBaseCollection<SP.Publishing.SubtitleFile>;
	thumbnails(preferredWidth?: number): IBaseCollection<SP.Publishing.VideoThumbnail>;
	thumbnailStream(preferredWidth?: number): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	uploadCustomThumbnail(fileExtension?: string, customVideoThumbnail?: any): IBaseExecution<any>;
}

/*********************************************
* PersonMagazine
**********************************************/
export interface PersonMagazine {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonMagazineCollections
**********************************************/
export interface PersonMagazineCollections {

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
* PointPublishingDocPropsCollections
**********************************************/
export interface PointPublishingDocPropsCollections {

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
* PointPublishingMagazinePropsCollections
**********************************************/
export interface PointPublishingMagazinePropsCollections {

}

/*********************************************
* IPointPublishingPost
**********************************************/
export interface IPointPublishingPost extends PointPublishingPostCollections,PointPublishingPostMethods,IBaseQuery<IPointPublishingPostQuery> {

}

/*********************************************
* IPointPublishingPostCollection
**********************************************/
export interface IPointPublishingPostCollection extends IBaseResults<PointPublishingPost>, PointPublishingPostCollectionMethods {

}

/*********************************************
* IPointPublishingPostQueryCollection
**********************************************/
export interface IPointPublishingPostQueryCollection extends IBaseResults<PointPublishingPostQuery>, PointPublishingPostCollectionMethods {

}

/*********************************************
* IPointPublishingPostQuery
**********************************************/
export interface IPointPublishingPostQuery extends PointPublishingPostQuery, PointPublishingPostMethods {

}

/*********************************************
* PointPublishingPost
**********************************************/
export interface PointPublishingPost extends PointPublishingPostProps, PointPublishingPostCollections, PointPublishingPostMethods {

}

/*********************************************
* PointPublishingPostProps
**********************************************/
export interface PointPublishingPostProps {
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
* PointPublishingPostPropMethods
**********************************************/
export interface PointPublishingPostPropMethods {

}

/*********************************************
* PointPublishingPostCollections
**********************************************/
export interface PointPublishingPostCollections extends PointPublishingPostPropMethods {
	images(): IBaseCollection<SP.File, SP.FileQuery, IBaseExecution & SP.FileCollectionMethods> & IBaseExecution & SP.FileCollectionMethods;
	images(id: string | number): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
}

/*********************************************
* PointPublishingPostCollectionMethods
**********************************************/
export interface PointPublishingPostCollectionMethods {
	getById(id?: number, publishedOnly?: boolean): IBaseQuery<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostQuery> & SP.Publishing.PointPublishingPostCollections & SP.Publishing.PointPublishingPostMethods;
	getByName(name?: string, publishedOnly?: boolean): IBaseQuery<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostQuery> & SP.Publishing.PointPublishingPostCollections & SP.Publishing.PointPublishingPostMethods;
}

/*********************************************
* PointPublishingPostQuery
**********************************************/
export interface PointPublishingPostQuery extends PointPublishingPostProps, PointPublishingPostMethods {
	images: IBaseResults<SP.File>;
}

/*********************************************
* PointPublishingPostMethods
**********************************************/
export interface PointPublishingPostMethods {
	addImageFromUrl(fromImageUrl?: string): IBaseExecution<string>;
	delete(): IBaseExecution<any>;
}

/*********************************************
* IPointPublishingPostServiceManager
**********************************************/
export interface IPointPublishingPostServiceManager extends PointPublishingPostServiceManagerCollections,PointPublishingPostServiceManagerMethods,IBaseQuery<IPointPublishingPostServiceManagerQuery> {

}

/*********************************************
* IPointPublishingPostServiceManagerCollection
**********************************************/
export interface IPointPublishingPostServiceManagerCollection extends IBaseResults<PointPublishingPostServiceManager> {

}

/*********************************************
* IPointPublishingPostServiceManagerQueryCollection
**********************************************/
export interface IPointPublishingPostServiceManagerQueryCollection extends IBaseResults<PointPublishingPostServiceManagerQuery> {

}

/*********************************************
* IPointPublishingPostServiceManagerQuery
**********************************************/
export interface IPointPublishingPostServiceManagerQuery extends PointPublishingPostServiceManagerQuery, PointPublishingPostServiceManagerMethods {

}

/*********************************************
* PointPublishingPostServiceManager
**********************************************/
export interface PointPublishingPostServiceManager extends PointPublishingPostServiceManagerProps, PointPublishingPostServiceManagerCollections, PointPublishingPostServiceManagerMethods {

}

/*********************************************
* PointPublishingPostServiceManagerProps
**********************************************/
export interface PointPublishingPostServiceManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingPostServiceManagerPropMethods
**********************************************/
export interface PointPublishingPostServiceManagerPropMethods {
	magazineprops(): IBaseExecution<SP.Publishing.PointPublishingMagazineProps> & SP.Publishing.PointPublishingMagazinePropsCollections;
}

/*********************************************
* PointPublishingPostServiceManagerCollections
**********************************************/
export interface PointPublishingPostServiceManagerCollections extends PointPublishingPostServiceManagerPropMethods {
	bannerimages(): IBaseCollection<SP.File, SP.FileQuery, IBaseExecution & SP.FileCollectionMethods> & IBaseExecution & SP.FileCollectionMethods;
	bannerimages(id: string | number): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
	contributors(): IBaseCollection<SP.Publishing.PointPublishingUser>;
	contributors(id: string | number): IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
	creators(): IBaseCollection<SP.Publishing.PointPublishingUser>;
	creators(id: string | number): IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
	posts(): IBaseCollection<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostQuery, IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods> & IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods;
	posts(id: string | number): IBaseQuery<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostQuery> & SP.Publishing.PointPublishingPostCollections & SP.Publishing.PointPublishingPostMethods;
	viewers(): IBaseCollection<SP.Publishing.PointPublishingUser>;
	viewers(id: string | number): IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
}

/*********************************************
* PointPublishingPostServiceManagerQuery
**********************************************/
export interface PointPublishingPostServiceManagerQuery extends PointPublishingPostServiceManagerProps, PointPublishingPostServiceManagerMethods {
	bannerimages: IBaseResults<SP.File>;
	contributors: IBaseResults<SP.Publishing.PointPublishingUser>;
	creators: IBaseResults<SP.Publishing.PointPublishingUser>;
	magazineprops: SP.Publishing.PointPublishingMagazineProps & SP.Publishing.PointPublishingMagazinePropsCollections;
	posts: IBaseResults<SP.Publishing.PointPublishingPost>;
	viewers: IBaseResults<SP.Publishing.PointPublishingUser>;
}

/*********************************************
* PointPublishingPostServiceManagerMethods
**********************************************/
export interface PointPublishingPostServiceManagerMethods {
	addBannerImageFromUrl(fromImageUrl?: string): IBaseExecution<string>;
	deleteMagazine(): IBaseExecution<any>;
	getDocProps(docUrls?: Array<string>): IBaseCollection<SP.Publishing.PointPublishingDocProps>;
	getPostsQuery(top?: number, itemIdBoundary?: number, directionAscending?: boolean, publishedOnly?: boolean, draftsOnly?: boolean): IBaseCollection<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostQuery, IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods> & IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods;
	getTopAuthors(count?: number): IBaseCollection<SP.Publishing.PointPublishingUser>;
	queryGroupNames(query?: string): IBaseCollection<SP.Publishing.PointPublishingUser>;
	setMagazineProperties(title?: string, description?: string, bannerImageUrl?: string, bannerColor?: string, bannerPattern?: string): IBaseExecution<SP.Publishing.PointPublishingMagazineProps>;
}

/*********************************************
* IPointPublishingUser
**********************************************/
export interface IPointPublishingUser extends PointPublishingUserCollections,PointPublishingUserMethods,IBaseQuery<IPointPublishingUserQuery> {

}

/*********************************************
* IPointPublishingUserCollection
**********************************************/
export interface IPointPublishingUserCollection extends IBaseResults<PointPublishingUser>, PointPublishingUserCollectionMethods {

}

/*********************************************
* IPointPublishingUserQueryCollection
**********************************************/
export interface IPointPublishingUserQueryCollection extends IBaseResults<PointPublishingUserQuery>, PointPublishingUserCollectionMethods {

}

/*********************************************
* IPointPublishingUserQuery
**********************************************/
export interface IPointPublishingUserQuery extends PointPublishingUserQuery, PointPublishingUserMethods {

}

/*********************************************
* PointPublishingUser
**********************************************/
export interface PointPublishingUser extends PointPublishingUserProps, PointPublishingUserCollections, PointPublishingUserMethods {

}

/*********************************************
* PointPublishingUserProps
**********************************************/
export interface PointPublishingUserProps {
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
* PointPublishingUserPropMethods
**********************************************/
export interface PointPublishingUserPropMethods {

}

/*********************************************
* PointPublishingUserCollections
**********************************************/
export interface PointPublishingUserCollections extends PointPublishingUserPropMethods {

}

/*********************************************
* PointPublishingUserCollectionMethods
**********************************************/
export interface PointPublishingUserCollectionMethods {
	addOrUpdateUser(loginName?: string, isOwner?: boolean): IBaseExecution<SP.Publishing.PointPublishingUser>;
	getById(userId?: number): IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
}

/*********************************************
* PointPublishingUserQuery
**********************************************/
export interface PointPublishingUserQuery extends PointPublishingUserProps, PointPublishingUserMethods {

}

/*********************************************
* PointPublishingUserMethods
**********************************************/
export interface PointPublishingUserMethods {
	deleteUserFromContainerGroup(): IBaseExecution<any>;
}

/*********************************************
* IPointPublishingSiteManager
**********************************************/
export interface IPointPublishingSiteManager extends PointPublishingSiteManagerCollections,PointPublishingSiteManagerMethods,IBaseQuery<IPointPublishingSiteManagerQuery> {

}

/*********************************************
* IPointPublishingSiteManagerCollection
**********************************************/
export interface IPointPublishingSiteManagerCollection extends IBaseResults<PointPublishingSiteManager> {

}

/*********************************************
* IPointPublishingSiteManagerQueryCollection
**********************************************/
export interface IPointPublishingSiteManagerQueryCollection extends IBaseResults<PointPublishingSiteManagerQuery> {

}

/*********************************************
* IPointPublishingSiteManagerQuery
**********************************************/
export interface IPointPublishingSiteManagerQuery extends PointPublishingSiteManagerQuery, PointPublishingSiteManagerMethods {

}

/*********************************************
* PointPublishingSiteManager
**********************************************/
export interface PointPublishingSiteManager extends PointPublishingSiteManagerProps, PointPublishingSiteManagerCollections, PointPublishingSiteManagerMethods {

}

/*********************************************
* PointPublishingSiteManagerProps
**********************************************/
export interface PointPublishingSiteManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingSiteManagerPropMethods
**********************************************/
export interface PointPublishingSiteManagerPropMethods {

}

/*********************************************
* PointPublishingSiteManagerCollections
**********************************************/
export interface PointPublishingSiteManagerCollections extends PointPublishingSiteManagerPropMethods {

}

/*********************************************
* PointPublishingSiteManagerQuery
**********************************************/
export interface PointPublishingSiteManagerQuery extends PointPublishingSiteManagerProps, PointPublishingSiteManagerMethods {

}

/*********************************************
* PointPublishingSiteManagerMethods
**********************************************/
export interface PointPublishingSiteManagerMethods {
	create(siteInfo?: SP.Publishing.PublishSiteInformation): IBaseExecution<SP.Publishing.PointPublishingSiteStatus>;
	getSiteStatus(siteInfo?: SP.Publishing.PublishSiteInformation): IBaseExecution<SP.Publishing.PointPublishingSiteStatus>;
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
* PointPublishingSiteStatusCollections
**********************************************/
export interface PointPublishingSiteStatusCollections {

}

/*********************************************
* IPointPublishingTenantManager
**********************************************/
export interface IPointPublishingTenantManager extends PointPublishingTenantManagerCollections,PointPublishingTenantManagerMethods,IBaseQuery<IPointPublishingTenantManagerQuery> {

}

/*********************************************
* IPointPublishingTenantManagerCollection
**********************************************/
export interface IPointPublishingTenantManagerCollection extends IBaseResults<PointPublishingTenantManager> {

}

/*********************************************
* IPointPublishingTenantManagerQueryCollection
**********************************************/
export interface IPointPublishingTenantManagerQueryCollection extends IBaseResults<PointPublishingTenantManagerQuery> {

}

/*********************************************
* IPointPublishingTenantManagerQuery
**********************************************/
export interface IPointPublishingTenantManagerQuery extends PointPublishingTenantManagerQuery, PointPublishingTenantManagerMethods {

}

/*********************************************
* PointPublishingTenantManager
**********************************************/
export interface PointPublishingTenantManager extends PointPublishingTenantManagerProps, PointPublishingTenantManagerCollections, PointPublishingTenantManagerMethods {

}

/*********************************************
* PointPublishingTenantManagerProps
**********************************************/
export interface PointPublishingTenantManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingTenantManagerPropMethods
**********************************************/
export interface PointPublishingTenantManagerPropMethods {

}

/*********************************************
* PointPublishingTenantManagerCollections
**********************************************/
export interface PointPublishingTenantManagerCollections extends PointPublishingTenantManagerPropMethods {

}

/*********************************************
* PointPublishingTenantManagerQuery
**********************************************/
export interface PointPublishingTenantManagerQuery extends PointPublishingTenantManagerProps, PointPublishingTenantManagerMethods {

}

/*********************************************
* PointPublishingTenantManagerMethods
**********************************************/
export interface PointPublishingTenantManagerMethods {
	isBlogEnabled(): IBaseExecution<boolean>;
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
* PrimaryCityTimeCollections
**********************************************/
export interface PrimaryCityTimeCollections {

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
export interface SitePageMetadataCollections extends SitePageMetadataCollectionMethods {

}

/*********************************************
* SitePageMetadataQuery
**********************************************/
export interface SitePageMetadataQuery extends SitePageMetadata {
	CreatedBy: SP.Publishing.UserInfo & SP.Publishing.UserInfoCollections;
	LastModifiedBy: SP.Publishing.UserInfo & SP.Publishing.UserInfoCollections;
}

/*********************************************
* SitePageMetadataCollectionMethods
**********************************************/
export interface SitePageMetadataCollectionMethods {
	getById(id?: number): IBaseQuery<SP.Publishing.SitePageMetadata, SP.Publishing.SitePageMetadataQuery> & SP.Publishing.SitePageMetadataCollections;
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
* UserInfoCollections
**********************************************/
export interface UserInfoCollections {

}

/*********************************************
* ISitePage
**********************************************/
export interface ISitePage extends SitePageCollections,SitePageMethods,IBaseQuery<ISitePageQuery> {

}

/*********************************************
* ISitePageCollection
**********************************************/
export interface ISitePageCollection extends IBaseResults<SitePage>, SitePageCollectionMethods {

}

/*********************************************
* ISitePageQueryCollection
**********************************************/
export interface ISitePageQueryCollection extends IBaseResults<SitePageQuery>, SitePageCollectionMethods {

}

/*********************************************
* ISitePageQuery
**********************************************/
export interface ISitePageQuery extends SitePageQuery, SitePageMethods {

}

/*********************************************
* SitePage
**********************************************/
export interface SitePage extends SP.Publishing.SitePageMetadata, SitePageProps, SitePageCollections, SitePageMethods {

}

/*********************************************
* SitePageProps
**********************************************/
export interface SitePageProps {
	AlternativeUrlMap?: string;
	CanvasContent1?: string;
	CanvasJson1?: string;
	IsLikedByCurrentUser?: boolean;
	IsTemplate?: boolean;
	LayoutWebpartsContent?: string;
}

/*********************************************
* SitePagePropMethods
**********************************************/
export interface SitePagePropMethods {

}

/*********************************************
* SitePageCollections
**********************************************/
export interface SitePageCollections extends SitePagePropMethods {

}

/*********************************************
* SitePageCollectionMethods
**********************************************/
export interface SitePageCollectionMethods {
	ensureTitleResource(): IBaseExecution<any>;
	feed(promotedState?: number, published?: boolean, metadataFilter?: string): IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
	feedTargeted(promotedState?: number, published?: boolean, metadataFilter?: string): IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
	getById(id?: number): IBaseQuery<SP.Publishing.SitePage> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getByUrl(url?: string): IBaseQuery<SP.Publishing.SitePage> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getPageColumnState(url?: string): IBaseExecution<number>;
	isSitePage(url?: string): IBaseExecution<boolean>;
	templates(): IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
}

/*********************************************
* SitePageQuery
**********************************************/
export interface SitePageQuery extends SitePageProps, SitePageMethods {

}

/*********************************************
* SitePageMethods
**********************************************/
export interface SitePageMethods {
	checkOut(): IBaseExecution<boolean>;
	checkoutPage(): IBaseExecution<SP.Publishing.SitePage>;
	copy(): IBaseExecution<SP.Publishing.SitePage>;
	demoteFromNews(): IBaseExecution<boolean>;
	discardPage(): IBaseExecution<SP.Publishing.SitePage>;
	getVersion(versionId?: number): IBaseExecution<SP.Publishing.SitePage>;
	promoteToNews(): IBaseExecution<boolean>;
	publish(): IBaseExecution<boolean>;
	saveDraft(sitePage?: SP.Publishing.SitePageFieldsData): IBaseExecution<boolean>;
	savePage(pageStream?: any): IBaseExecution<any>;
	savePageAsDraft(pageStream?: any): IBaseExecution<boolean>;
	savePageAsTemplate(): IBaseExecution<SP.Publishing.SitePage>;
	sharePagePreviewByEmail(message?: string, recipientEmails?: Array<string>): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IRepostPage
**********************************************/
export interface IRepostPage extends RepostPageCollections,RepostPageMethods,IBaseQuery<IRepostPageQuery> {

}

/*********************************************
* IRepostPageCollection
**********************************************/
export interface IRepostPageCollection extends IBaseResults<RepostPage>, RepostPageCollectionMethods {

}

/*********************************************
* IRepostPageQueryCollection
**********************************************/
export interface IRepostPageQueryCollection extends IBaseResults<RepostPageQuery>, RepostPageCollectionMethods {

}

/*********************************************
* IRepostPageQuery
**********************************************/
export interface IRepostPageQuery extends RepostPageQuery, RepostPageMethods {

}

/*********************************************
* RepostPage
**********************************************/
export interface RepostPage extends SP.Publishing.SitePage, RepostPageProps, RepostPageCollections, RepostPageMethods {

}

/*********************************************
* RepostPageProps
**********************************************/
export interface RepostPageProps {
	IsBannerImageUrlExternal?: boolean;
	OriginalSourceItemId?: any;
	OriginalSourceListId?: any;
	OriginalSourceSiteId?: any;
	OriginalSourceUrl?: string;
	OriginalSourceWebId?: any;
	ShouldSaveAsDraft?: boolean;
}

/*********************************************
* RepostPagePropMethods
**********************************************/
export interface RepostPagePropMethods {

}

/*********************************************
* RepostPageCollections
**********************************************/
export interface RepostPageCollections extends RepostPagePropMethods {

}

/*********************************************
* RepostPageCollectionMethods
**********************************************/
export interface RepostPageCollectionMethods {
	isContentTypeAvailable(): IBaseExecution<boolean>;
}

/*********************************************
* RepostPageQuery
**********************************************/
export interface RepostPageQuery extends RepostPageProps, RepostPageMethods {

}

/*********************************************
* RepostPageMethods
**********************************************/
export interface RepostPageMethods {
	checkOut(): IBaseExecution<boolean>;
	checkoutPage(): IBaseExecution<SP.Publishing.SitePage>;
	copy(): IBaseExecution<SP.Publishing.SitePage>;
	demoteFromNews(): IBaseExecution<boolean>;
	discardPage(): IBaseExecution<SP.Publishing.SitePage>;
	getVersion(versionId?: number): IBaseExecution<SP.Publishing.SitePage>;
	promoteToNews(): IBaseExecution<boolean>;
	publish(): IBaseExecution<boolean>;
	saveDraft(sitePage?: SP.Publishing.SitePageFieldsData): IBaseExecution<boolean>;
	savePage(pageStream?: any): IBaseExecution<any>;
	savePageAsDraft(pageStream?: any): IBaseExecution<boolean>;
	savePageAsTemplate(): IBaseExecution<SP.Publishing.SitePage>;
	sharePagePreviewByEmail(message?: string, recipientEmails?: Array<string>): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* RepostPageMetadata
**********************************************/
export interface RepostPageMetadata {
	OriginalSourceItemId?: any;
	OriginalSourceListId?: any;
	OriginalSourceSiteId?: any;
	OriginalSourceUrl?: string;
	OriginalSourceWebId?: any;
}

/*********************************************
* RepostPageMetadataCollections
**********************************************/
export interface RepostPageMetadataCollections {

}

/*********************************************
* IRichSharing
**********************************************/
export interface IRichSharing extends RichSharingCollections,RichSharingMethods,IBaseQuery<IRichSharingQuery> {

}

/*********************************************
* IRichSharingCollection
**********************************************/
export interface IRichSharingCollection extends IBaseResults<RichSharing> {

}

/*********************************************
* IRichSharingQueryCollection
**********************************************/
export interface IRichSharingQueryCollection extends IBaseResults<RichSharingQuery> {

}

/*********************************************
* IRichSharingQuery
**********************************************/
export interface IRichSharingQuery extends RichSharingQuery, RichSharingMethods {

}

/*********************************************
* RichSharing
**********************************************/
export interface RichSharing extends RichSharingProps, RichSharingCollections, RichSharingMethods {

}

/*********************************************
* RichSharingProps
**********************************************/
export interface RichSharingProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RichSharingPropMethods
**********************************************/
export interface RichSharingPropMethods {

}

/*********************************************
* RichSharingCollections
**********************************************/
export interface RichSharingCollections extends RichSharingPropMethods {

}

/*********************************************
* RichSharingQuery
**********************************************/
export interface RichSharingQuery extends RichSharingProps, RichSharingMethods {

}

/*********************************************
* RichSharingMethods
**********************************************/
export interface RichSharingMethods {
	sharePageByEmail(url?: string, message?: string, recipientEmails?: Array<string>): IBaseExecution<any>;
	shareSiteByEmail(CustomDescription?: string, CustomTitle?: string, Message?: string, Url?: string, recipientEmails?: Array<string>): IBaseExecution<any>;
}

/*********************************************
* ISharePointHomeServiceManager
**********************************************/
export interface ISharePointHomeServiceManager extends SharePointHomeServiceManagerCollections,SharePointHomeServiceManagerMethods,IBaseQuery<ISharePointHomeServiceManagerQuery> {

}

/*********************************************
* ISharePointHomeServiceManagerCollection
**********************************************/
export interface ISharePointHomeServiceManagerCollection extends IBaseResults<SharePointHomeServiceManager> {

}

/*********************************************
* ISharePointHomeServiceManagerQueryCollection
**********************************************/
export interface ISharePointHomeServiceManagerQueryCollection extends IBaseResults<SharePointHomeServiceManagerQuery> {

}

/*********************************************
* ISharePointHomeServiceManagerQuery
**********************************************/
export interface ISharePointHomeServiceManagerQuery extends SharePointHomeServiceManagerQuery, SharePointHomeServiceManagerMethods {

}

/*********************************************
* SharePointHomeServiceManager
**********************************************/
export interface SharePointHomeServiceManager extends SharePointHomeServiceManagerProps, SharePointHomeServiceManagerCollections, SharePointHomeServiceManagerMethods {

}

/*********************************************
* SharePointHomeServiceManagerProps
**********************************************/
export interface SharePointHomeServiceManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceManagerPropMethods
**********************************************/
export interface SharePointHomeServiceManagerPropMethods {

}

/*********************************************
* SharePointHomeServiceManagerCollections
**********************************************/
export interface SharePointHomeServiceManagerCollections extends SharePointHomeServiceManagerPropMethods {

}

/*********************************************
* SharePointHomeServiceManagerQuery
**********************************************/
export interface SharePointHomeServiceManagerQuery extends SharePointHomeServiceManagerProps, SharePointHomeServiceManagerMethods {

}

/*********************************************
* SharePointHomeServiceManagerMethods
**********************************************/
export interface SharePointHomeServiceManagerMethods {
	getAcronymsAndColors(labels?: Array<SP.Publishing.TextValueWithLanguage>): IBaseCollection<SP.Publishing.AcronymInformation>;
}

/*********************************************
* ISitePageService
**********************************************/
export interface ISitePageService extends SitePageServiceCollections,SitePageServiceMethods,IBaseQuery<ISitePageServiceQuery> {

}

/*********************************************
* ISitePageServiceCollection
**********************************************/
export interface ISitePageServiceCollection extends IBaseResults<SitePageService> {

}

/*********************************************
* ISitePageServiceQueryCollection
**********************************************/
export interface ISitePageServiceQueryCollection extends IBaseResults<SitePageServiceQuery> {

}

/*********************************************
* ISitePageServiceQuery
**********************************************/
export interface ISitePageServiceQuery extends SitePageServiceQuery, SitePageServiceMethods {

}

/*********************************************
* SitePageService
**********************************************/
export interface SitePageService extends SitePageServiceProps, SitePageServiceCollections, SitePageServiceMethods {

}

/*********************************************
* SitePageServiceProps
**********************************************/
export interface SitePageServiceProps {
	CustomContentApprovalEnabled?: boolean;
}

/*********************************************
* SitePageServicePropMethods
**********************************************/
export interface SitePageServicePropMethods {
	CommunicationSite(): IBaseExecution<SP.Publishing.CommunicationSite> & SP.Publishing.CommunicationSiteCollections & SP.Publishing.CommunicationSiteMethods;
}

/*********************************************
* SitePageServiceCollections
**********************************************/
export interface SitePageServiceCollections extends SitePageServicePropMethods {
	Pages(): IBaseCollection<SP.Publishing.SitePage>;
	Pages(id: string | number): IBaseQuery<SP.Publishing.SitePage> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
}

/*********************************************
* SitePageServiceQuery
**********************************************/
export interface SitePageServiceQuery extends SitePageServiceProps, SitePageServiceMethods {
	CommunicationSite: SP.Publishing.CommunicationSite & SP.Publishing.CommunicationSiteCollections;
	Pages: IBaseResults<SP.Publishing.SitePage>;
}

/*********************************************
* SitePageServiceMethods
**********************************************/
export interface SitePageServiceMethods {
	addImage(pageName?: string, imageFileName?: string, imageStream?: any): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
	addImageFromExternalUrl(pageName?: string, imageFileName?: string, externalUrl?: string, subFolderName?: string): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
	canCreatePromotedPage(): IBaseExecution<boolean>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ISpotlightChannel
**********************************************/
export interface ISpotlightChannel extends SpotlightChannelCollections,SpotlightChannelMethods,IBaseQuery<ISpotlightChannelQuery> {

}

/*********************************************
* ISpotlightChannelCollection
**********************************************/
export interface ISpotlightChannelCollection extends IBaseResults<SpotlightChannel>, SpotlightChannelCollectionMethods {

}

/*********************************************
* ISpotlightChannelQueryCollection
**********************************************/
export interface ISpotlightChannelQueryCollection extends IBaseResults<SpotlightChannelQuery>, SpotlightChannelCollectionMethods {

}

/*********************************************
* ISpotlightChannelQuery
**********************************************/
export interface ISpotlightChannelQuery extends SpotlightChannelQuery, SpotlightChannelMethods {

}

/*********************************************
* SpotlightChannel
**********************************************/
export interface SpotlightChannel extends SpotlightChannelProps, SpotlightChannelCollections, SpotlightChannelMethods {

}

/*********************************************
* SpotlightChannelProps
**********************************************/
export interface SpotlightChannelProps {
	ChannelId?: any;
	Id?: number;
	TileHtmlColor?: string;
	Title?: string;
	VideoLibraryServerRelativeUrl?: string;
}

/*********************************************
* SpotlightChannelPropMethods
**********************************************/
export interface SpotlightChannelPropMethods {
	Channel(): IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
}

/*********************************************
* SpotlightChannelCollections
**********************************************/
export interface SpotlightChannelCollections extends SpotlightChannelPropMethods {

}

/*********************************************
* SpotlightChannelCollectionMethods
**********************************************/
export interface SpotlightChannelCollectionMethods {
	getById(id?: number): IBaseQuery<SP.Publishing.SpotlightChannel, SP.Publishing.SpotlightChannelQuery> & SP.Publishing.SpotlightChannelCollections & SP.Publishing.SpotlightChannelMethods;
}

/*********************************************
* SpotlightChannelQuery
**********************************************/
export interface SpotlightChannelQuery extends SpotlightChannelProps, SpotlightChannelMethods {
	Channel: SP.Publishing.VideoChannel & SP.Publishing.VideoChannelCollections;
}

/*********************************************
* SpotlightChannelMethods
**********************************************/
export interface SpotlightChannelMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IVideoChannel
**********************************************/
export interface IVideoChannel extends VideoChannelCollections,VideoChannelMethods,IBaseQuery<IVideoChannelQuery> {

}

/*********************************************
* IVideoChannelCollection
**********************************************/
export interface IVideoChannelCollection extends IBaseResults<VideoChannel>, VideoChannelCollectionMethods {

}

/*********************************************
* IVideoChannelQueryCollection
**********************************************/
export interface IVideoChannelQueryCollection extends IBaseResults<VideoChannelQuery>, VideoChannelCollectionMethods {

}

/*********************************************
* IVideoChannelQuery
**********************************************/
export interface IVideoChannelQuery extends VideoChannelQuery, VideoChannelMethods {

}

/*********************************************
* VideoChannel
**********************************************/
export interface VideoChannel extends VideoChannelProps, VideoChannelCollections, VideoChannelMethods {

}

/*********************************************
* VideoChannelProps
**********************************************/
export interface VideoChannelProps {
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
* VideoChannelPropMethods
**********************************************/
export interface VideoChannelPropMethods {
	Search(): IBaseExecution<SP.Publishing.Search> & SP.Publishing.SearchCollections & SP.Publishing.SearchMethods;
}

/*********************************************
* VideoChannelCollections
**********************************************/
export interface VideoChannelCollections extends VideoChannelPropMethods {
	SpotlightVideos(): IBaseCollection<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoQuery, IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods> & IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods;
	SpotlightVideos(id: string | number): IBaseQuery<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoQuery> & SP.Publishing.SpotlightVideoCollections & SP.Publishing.SpotlightVideoMethods;
	Videos(): IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery, IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	Videos(id: string | number): IBaseQuery<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery> & SP.Publishing.VideoItemCollections & SP.Publishing.VideoItemMethods;
}

/*********************************************
* VideoChannelCollectionMethods
**********************************************/
export interface VideoChannelCollectionMethods {
	getById(id?: any): IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
}

/*********************************************
* VideoChannelQuery
**********************************************/
export interface VideoChannelQuery extends VideoChannelProps, VideoChannelMethods {
	Search: SP.Publishing.Search & SP.Publishing.SearchCollections;
	SpotlightVideos: IBaseResults<SP.Publishing.SpotlightVideo>;
	Videos: IBaseResults<SP.Publishing.VideoItem>;
}

/*********************************************
* VideoChannelMethods
**********************************************/
export interface VideoChannelMethods {
	getAllVideos(skip?: number, limit?: number): IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery, IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	getChannelPageUrl(viewMode?: number): IBaseExecution<string>;
	getMyVideos(skip?: number, limit?: number): IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery, IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	getPermissionGroup(permission?: number): IBaseQuery<SP.Publishing.VideoPermissionGroup, SP.Publishing.VideoPermissionGroupQuery> & SP.Publishing.VideoPermissionGroupCollections & SP.Publishing.VideoPermissionGroupMethods;
	getVideoCount(): IBaseExecution<number>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ISearch
**********************************************/
export interface ISearch extends SearchCollections,SearchMethods,IBaseQuery<ISearchQuery> {

}

/*********************************************
* ISearchCollection
**********************************************/
export interface ISearchCollection extends IBaseResults<Search> {

}

/*********************************************
* ISearchQueryCollection
**********************************************/
export interface ISearchQueryCollection extends IBaseResults<SearchQuery> {

}

/*********************************************
* ISearchQuery
**********************************************/
export interface ISearchQuery extends SearchQuery, SearchMethods {

}

/*********************************************
* Search
**********************************************/
export interface Search extends SearchProps, SearchCollections, SearchMethods {

}

/*********************************************
* SearchProps
**********************************************/
export interface SearchProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	QueryLanguages?: Array<number>;
}

/*********************************************
* SearchPropMethods
**********************************************/
export interface SearchPropMethods {

}

/*********************************************
* SearchCollections
**********************************************/
export interface SearchCollections extends SearchPropMethods {

}

/*********************************************
* SearchQuery
**********************************************/
export interface SearchQuery extends SearchProps, SearchMethods {

}

/*********************************************
* SearchMethods
**********************************************/
export interface SearchMethods {
	newest(startItemIndex?: number, itemLimit?: number): IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery, IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	popular(startItemIndex?: number, itemLimit?: number): IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery, IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	query(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery, IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	queryChannels(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery, IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	related(videoId?: any, startItemIndex?: number, itemLimit?: number): IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery, IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
}

/*********************************************
* ISpotlightVideo
**********************************************/
export interface ISpotlightVideo extends SpotlightVideoCollections,SpotlightVideoMethods,IBaseQuery<ISpotlightVideoQuery> {

}

/*********************************************
* ISpotlightVideoCollection
**********************************************/
export interface ISpotlightVideoCollection extends IBaseResults<SpotlightVideo>, SpotlightVideoCollectionMethods {

}

/*********************************************
* ISpotlightVideoQueryCollection
**********************************************/
export interface ISpotlightVideoQueryCollection extends IBaseResults<SpotlightVideoQuery>, SpotlightVideoCollectionMethods {

}

/*********************************************
* ISpotlightVideoQuery
**********************************************/
export interface ISpotlightVideoQuery extends SpotlightVideoQuery, SpotlightVideoMethods {

}

/*********************************************
* SpotlightVideo
**********************************************/
export interface SpotlightVideo extends SpotlightVideoProps, SpotlightVideoCollections, SpotlightVideoMethods {

}

/*********************************************
* SpotlightVideoProps
**********************************************/
export interface SpotlightVideoProps {
	Id?: number;
	ServerRelativeUrl?: string;
	Url?: string;
}

/*********************************************
* SpotlightVideoPropMethods
**********************************************/
export interface SpotlightVideoPropMethods {
	Video(): IBaseQuery<SP.Publishing.VideoItem, SP.Publishing.VideoItemQuery> & SP.Publishing.VideoItemCollections & SP.Publishing.VideoItemMethods;
}

/*********************************************
* SpotlightVideoCollections
**********************************************/
export interface SpotlightVideoCollections extends SpotlightVideoPropMethods {

}

/*********************************************
* SpotlightVideoCollectionMethods
**********************************************/
export interface SpotlightVideoCollectionMethods {
	getById(id?: number): IBaseQuery<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoQuery> & SP.Publishing.SpotlightVideoCollections & SP.Publishing.SpotlightVideoMethods;
}

/*********************************************
* SpotlightVideoQuery
**********************************************/
export interface SpotlightVideoQuery extends SpotlightVideoProps, SpotlightVideoMethods {
	Video: SP.Publishing.VideoItem & SP.Publishing.VideoItemCollections;
}

/*********************************************
* SpotlightVideoMethods
**********************************************/
export interface SpotlightVideoMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
* SubtitleFileCollections
**********************************************/
export interface SubtitleFileCollections extends SubtitleFileCollectionMethods {

}

/*********************************************
* SubtitleFileCollectionMethods
**********************************************/
export interface SubtitleFileCollectionMethods {
	add(language?: string, extension?: string, stream?: any): IBaseExecution<any>;
	getSubtitleFile(name?: string): IBaseExecution<any>;
	remove(name?: string): IBaseExecution<any>;
}

/*********************************************
* IVideoPermissionGroup
**********************************************/
export interface IVideoPermissionGroup extends VideoPermissionGroupCollections,VideoPermissionGroupMethods,IBaseQuery<IVideoPermissionGroupQuery> {

}

/*********************************************
* IVideoPermissionGroupCollection
**********************************************/
export interface IVideoPermissionGroupCollection extends IBaseResults<VideoPermissionGroup> {

}

/*********************************************
* IVideoPermissionGroupQueryCollection
**********************************************/
export interface IVideoPermissionGroupQueryCollection extends IBaseResults<VideoPermissionGroupQuery> {

}

/*********************************************
* IVideoPermissionGroupQuery
**********************************************/
export interface IVideoPermissionGroupQuery extends VideoPermissionGroupQuery, VideoPermissionGroupMethods {

}

/*********************************************
* VideoPermissionGroup
**********************************************/
export interface VideoPermissionGroup extends VideoPermissionGroupProps, VideoPermissionGroupCollections, VideoPermissionGroupMethods {

}

/*********************************************
* VideoPermissionGroupProps
**********************************************/
export interface VideoPermissionGroupProps {
	Id?: number;
}

/*********************************************
* VideoPermissionGroupPropMethods
**********************************************/
export interface VideoPermissionGroupPropMethods {

}

/*********************************************
* VideoPermissionGroupCollections
**********************************************/
export interface VideoPermissionGroupCollections extends VideoPermissionGroupPropMethods {
	Users(): IBaseCollection<SP.User, SP.UserQuery, IBaseExecution & SP.UserCollectionMethods> & IBaseExecution & SP.UserCollectionMethods;
	Users(id: string | number): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* VideoPermissionGroupQuery
**********************************************/
export interface VideoPermissionGroupQuery extends VideoPermissionGroupProps, VideoPermissionGroupMethods {
	Users: IBaseResults<SP.User>;
}

/*********************************************
* VideoPermissionGroupMethods
**********************************************/
export interface VideoPermissionGroupMethods {
	hasCurrentUser(): IBaseExecution<boolean>;
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
* VideoPlaybackMetadataCollections
**********************************************/
export interface VideoPlaybackMetadataCollections {

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
* VideoServiceDiscovererCollections
**********************************************/
export interface VideoServiceDiscovererCollections {

}

/*********************************************
* IVideoServiceManager
**********************************************/
export interface IVideoServiceManager extends VideoServiceManagerCollections,VideoServiceManagerMethods,IBaseQuery<IVideoServiceManagerQuery> {

}

/*********************************************
* IVideoServiceManagerCollection
**********************************************/
export interface IVideoServiceManagerCollection extends IBaseResults<VideoServiceManager> {

}

/*********************************************
* IVideoServiceManagerQueryCollection
**********************************************/
export interface IVideoServiceManagerQueryCollection extends IBaseResults<VideoServiceManagerQuery> {

}

/*********************************************
* IVideoServiceManagerQuery
**********************************************/
export interface IVideoServiceManagerQuery extends VideoServiceManagerQuery, VideoServiceManagerMethods {

}

/*********************************************
* VideoServiceManager
**********************************************/
export interface VideoServiceManager extends VideoServiceManagerProps, VideoServiceManagerCollections, VideoServiceManagerMethods {

}

/*********************************************
* VideoServiceManagerProps
**********************************************/
export interface VideoServiceManagerProps {
	CanAdministratePortalByCurrent?: boolean;
	CanCreateChannelsByCurrent?: boolean;
	CanViewPortalByCurrent?: boolean;
	UploadGuidelinesLink?: string;
	VideoGuidelinesLink?: string;
}

/*********************************************
* VideoServiceManagerPropMethods
**********************************************/
export interface VideoServiceManagerPropMethods {
	Search(): IBaseExecution<SP.Publishing.Search> & SP.Publishing.SearchCollections & SP.Publishing.SearchMethods;
}

/*********************************************
* VideoServiceManagerCollections
**********************************************/
export interface VideoServiceManagerCollections extends VideoServiceManagerPropMethods {
	CanEditChannels(): IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery, IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	CanEditChannels(id: string | number): IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
	Channels(): IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery, IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	Channels(id: string | number): IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
	SpotlightChannels(): IBaseCollection<SP.Publishing.SpotlightChannel, SP.Publishing.SpotlightChannelQuery, IBaseExecution & SP.Publishing.SpotlightChannelCollectionMethods> & IBaseExecution & SP.Publishing.SpotlightChannelCollectionMethods;
	SpotlightChannels(id: string | number): IBaseQuery<SP.Publishing.SpotlightChannel, SP.Publishing.SpotlightChannelQuery> & SP.Publishing.SpotlightChannelCollections & SP.Publishing.SpotlightChannelMethods;
	SpotlightVideos(): IBaseCollection<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoQuery, IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods> & IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods;
	SpotlightVideos(id: string | number): IBaseQuery<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoQuery> & SP.Publishing.SpotlightVideoCollections & SP.Publishing.SpotlightVideoMethods;
}

/*********************************************
* VideoServiceManagerQuery
**********************************************/
export interface VideoServiceManagerQuery extends VideoServiceManagerProps, VideoServiceManagerMethods {
	CanEditChannels: IBaseResults<SP.Publishing.VideoChannel>;
	Channels: IBaseResults<SP.Publishing.VideoChannel>;
	Search: SP.Publishing.Search & SP.Publishing.SearchCollections;
	SpotlightChannels: IBaseResults<SP.Publishing.SpotlightChannel>;
	SpotlightVideos: IBaseResults<SP.Publishing.SpotlightVideo>;
}

/*********************************************
* VideoServiceManagerMethods
**********************************************/
export interface VideoServiceManagerMethods {
	getChannels(startIndex?: number, limit?: number): IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelQuery, IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	getPermissionGroup(permission?: number): IBaseQuery<SP.Publishing.VideoPermissionGroup, SP.Publishing.VideoPermissionGroupQuery> & SP.Publishing.VideoPermissionGroupCollections & SP.Publishing.VideoPermissionGroupMethods;
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
* VideoThumbnailCollections
**********************************************/
export interface VideoThumbnailCollections extends VideoThumbnailCollectionMethods {

}

/*********************************************
* VideoThumbnailCollectionMethods
**********************************************/
export interface VideoThumbnailCollectionMethods {
	getByIndex(choice?: number): IBaseQuery<SP.Publishing.VideoThumbnail> & SP.Publishing.VideoThumbnailCollections;
}
