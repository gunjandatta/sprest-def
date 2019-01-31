import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* ICommunicationSite
**********************************************/
export interface ICommunicationSite extends CommunicationSiteCollections,CommunicationSiteMethods,IBaseQuery<ICommunicationSiteQuery> {

}

/*********************************************
* ICommunicationSiteQuery
**********************************************/
export interface ICommunicationSiteQuery extends CommunicationSiteQuery,CommunicationSiteMethods {

}

/*********************************************
* CommunicationSite
**********************************************/
export interface CommunicationSite extends CommunicationSiteCollections, CommunicationSiteMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunicationSiteProps
**********************************************/
export interface CommunicationSiteProps {

}

/*********************************************
* CommunicationSiteCollections
**********************************************/
export interface CommunicationSiteCollections extends CommunicationSiteProps {

}

/*********************************************
* CommunicationSiteQuery
**********************************************/
export interface CommunicationSiteQuery extends CommunicationSiteProps {

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
* IEmbedServiceQuery
**********************************************/
export interface IEmbedServiceQuery extends EmbedServiceQuery,EmbedServiceMethods {

}

/*********************************************
* EmbedService
**********************************************/
export interface EmbedService extends EmbedServiceCollections, EmbedServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EmbedServiceProps
**********************************************/
export interface EmbedServiceProps {

}

/*********************************************
* EmbedServiceCollections
**********************************************/
export interface EmbedServiceCollections extends EmbedServiceProps {

}

/*********************************************
* EmbedServiceQuery
**********************************************/
export interface EmbedServiceQuery extends EmbedServiceProps {

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
* IVideoItemQuery
**********************************************/
export interface IVideoItemQuery extends VideoItemQuery,VideoItemMethods {

}

/*********************************************
* VideoItem
**********************************************/
export interface VideoItem extends VideoItemCollections, VideoItemMethods {
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
	Author(): IBaseExecution<SP.User> & SP.UserCollections;
	Owner(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* VideoItemCollections
**********************************************/
export interface VideoItemCollections extends VideoItemProps {
	PeopleInMedia(): IBaseCollection<SP.User> & SP.UserCollectionMethods;
	PeopleInMedia(id: string | number): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* VideoItemCollectionMethods
**********************************************/
export interface VideoItemCollectionMethods {
	getById(id?: any): IBaseExecution<SP.Publishing.VideoItem>;
}

/*********************************************
* VideoItemQuery
**********************************************/
export interface VideoItemQuery extends VideoItemProps {
	PeopleInMedia: IBaseResults<SP.User>;
}

/*********************************************
* VideoItemMethods
**********************************************/
export interface VideoItemMethods {
	customThumbnail(): IBaseExecution<any>;
	deleteObject(): IBaseExecution<any>;
	getFile(): IBaseExecution<SP.File>;
	getPlaybackMetadata(sdnConfiguration?: string): IBaseExecution<SP.Publishing.VideoPlaybackMetadata>;
	getPlaybackUrl(videoFormat?: number): IBaseExecution<string>;
	getStreamingKeyAccessToken(): IBaseExecution<string>;
	getVideoDetailedViewCount(): IBaseExecution<SP.Publishing.ItemViewsAnalyticsData>;
	getVideoEmbedCode(width?: number, height?: number, autoplay?: boolean, showInfo?: boolean, makeResponsive?: boolean): IBaseExecution<string>;
	getVideoViewProgressCount(): IBaseExecution<Array<SP.Publishing.ViewProgressAnalyticsData>>;
	incrementVideoViewProgressCount(percentageViewed?: number): IBaseExecution<any>;
	incrementViewCount(viewOrigin?: number): IBaseExecution<any>;
	setPeopleInMedia(loginNames?: Array<string>): IBaseExecution<any>;
	setVideoOwner(id?: number): IBaseExecution<any>;
	subtitles(): IBaseExecution<Array<SP.Publishing.SubtitleFile>>;
	thumbnails(preferredWidth?: number): IBaseExecution<Array<SP.Publishing.VideoThumbnail>>;
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
* IPointPublishingPostQuery
**********************************************/
export interface IPointPublishingPostQuery extends PointPublishingPostQuery,PointPublishingPostMethods {

}

/*********************************************
* PointPublishingPost
**********************************************/
export interface PointPublishingPost extends PointPublishingPostCollections, PointPublishingPostMethods {
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

}

/*********************************************
* PointPublishingPostCollections
**********************************************/
export interface PointPublishingPostCollections extends PointPublishingPostProps {
	images(): IBaseCollection<SP.File> & SP.FileCollectionMethods;
	images(id: string | number): IBaseExecution<SP.File> & SP.FileCollections;
}

/*********************************************
* PointPublishingPostCollectionMethods
**********************************************/
export interface PointPublishingPostCollectionMethods {
	getById(id?: number, publishedOnly?: boolean): IBaseExecution<SP.Publishing.PointPublishingPost>;
	getByName(name?: string, publishedOnly?: boolean): IBaseExecution<SP.Publishing.PointPublishingPost>;
}

/*********************************************
* PointPublishingPostQuery
**********************************************/
export interface PointPublishingPostQuery extends PointPublishingPostProps {
	images: IBaseResults<SP.File>;
}

/*********************************************
* PointPublishingPostMethods
**********************************************/
export interface PointPublishingPostMethods {
	addImageFromUrl(fromImageUrl?: string): IBaseExecution<string>;
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IPointPublishingPostServiceManager
**********************************************/
export interface IPointPublishingPostServiceManager extends PointPublishingPostServiceManagerCollections,PointPublishingPostServiceManagerMethods,IBaseQuery<IPointPublishingPostServiceManagerQuery> {

}

/*********************************************
* IPointPublishingPostServiceManagerQuery
**********************************************/
export interface IPointPublishingPostServiceManagerQuery extends PointPublishingPostServiceManagerQuery,PointPublishingPostServiceManagerMethods {

}

/*********************************************
* PointPublishingPostServiceManager
**********************************************/
export interface PointPublishingPostServiceManager extends PointPublishingPostServiceManagerCollections, PointPublishingPostServiceManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingPostServiceManagerProps
**********************************************/
export interface PointPublishingPostServiceManagerProps {
	magazineprops(): IBaseExecution<SP.Publishing.PointPublishingMagazineProps>;
}

/*********************************************
* PointPublishingPostServiceManagerCollections
**********************************************/
export interface PointPublishingPostServiceManagerCollections extends PointPublishingPostServiceManagerProps {
	bannerimages(): IBaseCollection<SP.File> & SP.FileCollectionMethods;
	bannerimages(id: string | number): IBaseExecution<SP.File> & SP.FileCollections;
	contributors(): IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	contributors(id: string | number): IBaseExecution<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections;
	creators(): IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	creators(id: string | number): IBaseExecution<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections;
	posts(): IBaseCollection<SP.Publishing.PointPublishingPost> & SP.Publishing.PointPublishingPostCollectionMethods;
	posts(id: string | number): IBaseExecution<SP.Publishing.PointPublishingPost> & SP.Publishing.PointPublishingPostCollections;
	viewers(): IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	viewers(id: string | number): IBaseExecution<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections;
}

/*********************************************
* PointPublishingPostServiceManagerQuery
**********************************************/
export interface PointPublishingPostServiceManagerQuery extends PointPublishingPostServiceManagerProps {
	bannerimages: IBaseResults<SP.File>;
	contributors: IBaseResults<SP.Publishing.PointPublishingUser>;
	creators: IBaseResults<SP.Publishing.PointPublishingUser>;
	posts: IBaseResults<SP.Publishing.PointPublishingPost>;
	viewers: IBaseResults<SP.Publishing.PointPublishingUser>;
}

/*********************************************
* PointPublishingPostServiceManagerMethods
**********************************************/
export interface PointPublishingPostServiceManagerMethods {
	addBannerImageFromUrl(fromImageUrl?: string): IBaseExecution<string>;
	deleteMagazine(): IBaseExecution<any>;
	getDocProps(docUrls?: Array<string>): IBaseExecution<Array<SP.Publishing.PointPublishingDocProps>>;
	getPostsQuery(top?: number, itemIdBoundary?: number, directionAscending?: boolean, publishedOnly?: boolean, draftsOnly?: boolean): IBaseExecution<Array<SP.Publishing.PointPublishingPost>>;
	getTopAuthors(count?: number): IBaseExecution<Array<SP.Publishing.PointPublishingUser>>;
	queryGroupNames(query?: string): IBaseExecution<Array<SP.Publishing.PointPublishingUser>>;
	setMagazineProperties(title?: string, description?: string, bannerImageUrl?: string, bannerColor?: string, bannerPattern?: string): IBaseExecution<SP.Publishing.PointPublishingMagazineProps>;
}

/*********************************************
* IPointPublishingUser
**********************************************/
export interface IPointPublishingUser extends PointPublishingUserCollections,PointPublishingUserMethods,IBaseQuery<IPointPublishingUserQuery> {

}

/*********************************************
* IPointPublishingUserQuery
**********************************************/
export interface IPointPublishingUserQuery extends PointPublishingUserQuery,PointPublishingUserMethods {

}

/*********************************************
* PointPublishingUser
**********************************************/
export interface PointPublishingUser extends PointPublishingUserCollections, PointPublishingUserMethods {
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
* PointPublishingUserCollections
**********************************************/
export interface PointPublishingUserCollections extends PointPublishingUserProps {

}

/*********************************************
* PointPublishingUserCollectionMethods
**********************************************/
export interface PointPublishingUserCollectionMethods {
	addOrUpdateUser(loginName?: string, isOwner?: boolean): IBaseExecution<SP.Publishing.PointPublishingUser>;
	getById(userId?: number): IBaseExecution<SP.Publishing.PointPublishingUser>;
}

/*********************************************
* PointPublishingUserQuery
**********************************************/
export interface PointPublishingUserQuery extends PointPublishingUserProps {

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
* IPointPublishingSiteManagerQuery
**********************************************/
export interface IPointPublishingSiteManagerQuery extends PointPublishingSiteManagerQuery,PointPublishingSiteManagerMethods {

}

/*********************************************
* PointPublishingSiteManager
**********************************************/
export interface PointPublishingSiteManager extends PointPublishingSiteManagerCollections, PointPublishingSiteManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingSiteManagerProps
**********************************************/
export interface PointPublishingSiteManagerProps {

}

/*********************************************
* PointPublishingSiteManagerCollections
**********************************************/
export interface PointPublishingSiteManagerCollections extends PointPublishingSiteManagerProps {

}

/*********************************************
* PointPublishingSiteManagerQuery
**********************************************/
export interface PointPublishingSiteManagerQuery extends PointPublishingSiteManagerProps {

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
* IPointPublishingTenantManagerQuery
**********************************************/
export interface IPointPublishingTenantManagerQuery extends PointPublishingTenantManagerQuery,PointPublishingTenantManagerMethods {

}

/*********************************************
* PointPublishingTenantManager
**********************************************/
export interface PointPublishingTenantManager extends PointPublishingTenantManagerCollections, PointPublishingTenantManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingTenantManagerProps
**********************************************/
export interface PointPublishingTenantManagerProps {

}

/*********************************************
* PointPublishingTenantManagerCollections
**********************************************/
export interface PointPublishingTenantManagerCollections extends PointPublishingTenantManagerProps {

}

/*********************************************
* PointPublishingTenantManagerQuery
**********************************************/
export interface PointPublishingTenantManagerQuery extends PointPublishingTenantManagerProps {

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
* SitePageMetadataCollectionMethods
**********************************************/
export interface SitePageMetadataCollectionMethods {
	getById(id?: number): IBaseExecution<SP.Publishing.SitePageMetadata>;
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
* ISitePageQuery
**********************************************/
export interface ISitePageQuery extends SitePageQuery,SitePageMethods {

}

/*********************************************
* SitePage
**********************************************/
export interface SitePage extends SP.Publishing.SitePageMetadata, SitePageCollections, SitePageMethods {
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
* SitePageCollections
**********************************************/
export interface SitePageCollections extends SitePageProps {

}

/*********************************************
* SitePageCollectionMethods
**********************************************/
export interface SitePageCollectionMethods {
	ensureTitleResource(): IBaseExecution<any>;
	feed(promotedState?: number, published?: boolean, metadataFilter?: string): IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
	feedTargeted(promotedState?: number, published?: boolean, metadataFilter?: string): IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
	getById(id?: number): IBaseExecution<SP.Publishing.SitePage>;
	getByUrl(url?: string): IBaseExecution<SP.Publishing.SitePage>;
	getPageColumnState(url?: string): IBaseExecution<number>;
	isSitePage(url?: string): IBaseExecution<boolean>;
	templates(): IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
}

/*********************************************
* SitePageQuery
**********************************************/
export interface SitePageQuery extends SitePageProps {

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
* IRepostPageQuery
**********************************************/
export interface IRepostPageQuery extends RepostPageQuery,RepostPageMethods {

}

/*********************************************
* RepostPage
**********************************************/
export interface RepostPage extends SP.Publishing.SitePage, RepostPageCollections, RepostPageMethods {
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
* RepostPageCollections
**********************************************/
export interface RepostPageCollections extends RepostPageProps {

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
export interface RepostPageQuery extends RepostPageProps {

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
export interface RepostPageMetadata extends SP.Publishing.SitePageMetadata {
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
* IRichSharingQuery
**********************************************/
export interface IRichSharingQuery extends RichSharingQuery,RichSharingMethods {

}

/*********************************************
* RichSharing
**********************************************/
export interface RichSharing extends RichSharingCollections, RichSharingMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RichSharingProps
**********************************************/
export interface RichSharingProps {

}

/*********************************************
* RichSharingCollections
**********************************************/
export interface RichSharingCollections extends RichSharingProps {

}

/*********************************************
* RichSharingQuery
**********************************************/
export interface RichSharingQuery extends RichSharingProps {

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
* ISharePointHomeServiceManagerQuery
**********************************************/
export interface ISharePointHomeServiceManagerQuery extends SharePointHomeServiceManagerQuery,SharePointHomeServiceManagerMethods {

}

/*********************************************
* SharePointHomeServiceManager
**********************************************/
export interface SharePointHomeServiceManager extends SharePointHomeServiceManagerCollections, SharePointHomeServiceManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceManagerProps
**********************************************/
export interface SharePointHomeServiceManagerProps {

}

/*********************************************
* SharePointHomeServiceManagerCollections
**********************************************/
export interface SharePointHomeServiceManagerCollections extends SharePointHomeServiceManagerProps {

}

/*********************************************
* SharePointHomeServiceManagerQuery
**********************************************/
export interface SharePointHomeServiceManagerQuery extends SharePointHomeServiceManagerProps {

}

/*********************************************
* SharePointHomeServiceManagerMethods
**********************************************/
export interface SharePointHomeServiceManagerMethods {
	getAcronymsAndColors(labels?: Array<SP.Publishing.TextValueWithLanguage>): IBaseExecution<Array<SP.Publishing.AcronymInformation>>;
}

/*********************************************
* ISitePageService
**********************************************/
export interface ISitePageService extends SitePageServiceCollections,SitePageServiceMethods,IBaseQuery<ISitePageServiceQuery> {

}

/*********************************************
* ISitePageServiceQuery
**********************************************/
export interface ISitePageServiceQuery extends SitePageServiceQuery,SitePageServiceMethods {

}

/*********************************************
* SitePageService
**********************************************/
export interface SitePageService extends SitePageServiceCollections, SitePageServiceMethods {
	CustomContentApprovalEnabled?: boolean;
}

/*********************************************
* SitePageServiceProps
**********************************************/
export interface SitePageServiceProps {
	CommunicationSite(): IBaseExecution<SP.Publishing.CommunicationSite>;
}

/*********************************************
* SitePageServiceCollections
**********************************************/
export interface SitePageServiceCollections extends SitePageServiceProps {
	Pages(): IBaseCollection<SP.Publishing.SitePage> & SP.Publishing.SitePageCollectionMethods;
	Pages(id: string | number): IBaseExecution<SP.Publishing.SitePage> & SP.Publishing.SitePageCollections;
}

/*********************************************
* SitePageServiceQuery
**********************************************/
export interface SitePageServiceQuery extends SitePageServiceProps {
	Pages: IBaseResults<SP.Publishing.SitePage>;
}

/*********************************************
* SitePageServiceMethods
**********************************************/
export interface SitePageServiceMethods {
	addImage(pageName?: string, imageFileName?: string, imageStream?: any): IBaseExecution<SP.File>;
	addImageFromExternalUrl(pageName?: string, imageFileName?: string, externalUrl?: string, subFolderName?: string): IBaseExecution<SP.File>;
	canCreatePromotedPage(): IBaseExecution<boolean>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ISpotlightChannel
**********************************************/
export interface ISpotlightChannel extends SpotlightChannelCollections,SpotlightChannelMethods,IBaseQuery<ISpotlightChannelQuery> {

}

/*********************************************
* ISpotlightChannelQuery
**********************************************/
export interface ISpotlightChannelQuery extends SpotlightChannelQuery,SpotlightChannelMethods {

}

/*********************************************
* SpotlightChannel
**********************************************/
export interface SpotlightChannel extends SpotlightChannelCollections, SpotlightChannelMethods {
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
	Channel(): IBaseExecution<SP.Publishing.VideoChannel> & SP.Publishing.VideoChannelCollections;
}

/*********************************************
* SpotlightChannelCollections
**********************************************/
export interface SpotlightChannelCollections extends SpotlightChannelProps {

}

/*********************************************
* SpotlightChannelCollectionMethods
**********************************************/
export interface SpotlightChannelCollectionMethods {
	getById(id?: number): IBaseExecution<SP.Publishing.SpotlightChannel>;
}

/*********************************************
* SpotlightChannelQuery
**********************************************/
export interface SpotlightChannelQuery extends SpotlightChannelProps {

}

/*********************************************
* SpotlightChannelMethods
**********************************************/
export interface SpotlightChannelMethods {
	deleteObject(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IVideoChannel
**********************************************/
export interface IVideoChannel extends VideoChannelCollections,VideoChannelMethods,IBaseQuery<IVideoChannelQuery> {

}

/*********************************************
* IVideoChannelQuery
**********************************************/
export interface IVideoChannelQuery extends VideoChannelQuery,VideoChannelMethods {

}

/*********************************************
* VideoChannel
**********************************************/
export interface VideoChannel extends VideoChannelCollections, VideoChannelMethods {
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
	Search(): IBaseExecution<SP.Publishing.Search>;
}

/*********************************************
* VideoChannelCollections
**********************************************/
export interface VideoChannelCollections extends VideoChannelProps {
	SpotlightVideos(): IBaseCollection<SP.Publishing.SpotlightVideo> & SP.Publishing.SpotlightVideoCollectionMethods;
	SpotlightVideos(id: string | number): IBaseExecution<SP.Publishing.SpotlightVideo> & SP.Publishing.SpotlightVideoCollections;
	Videos(): IBaseCollection<SP.Publishing.VideoItem> & SP.Publishing.VideoItemCollectionMethods;
	Videos(id: string | number): IBaseExecution<SP.Publishing.VideoItem> & SP.Publishing.VideoItemCollections;
}

/*********************************************
* VideoChannelCollectionMethods
**********************************************/
export interface VideoChannelCollectionMethods {
	getById(id?: any): IBaseExecution<SP.Publishing.VideoChannel>;
}

/*********************************************
* VideoChannelQuery
**********************************************/
export interface VideoChannelQuery extends VideoChannelProps {
	SpotlightVideos: IBaseResults<SP.Publishing.SpotlightVideo>;
	Videos: IBaseResults<SP.Publishing.VideoItem>;
}

/*********************************************
* VideoChannelMethods
**********************************************/
export interface VideoChannelMethods {
	getAllVideos(skip?: number, limit?: number): IBaseExecution<Array<SP.Publishing.VideoItem>>;
	getChannelPageUrl(viewMode?: number): IBaseExecution<string>;
	getMyVideos(skip?: number, limit?: number): IBaseExecution<Array<SP.Publishing.VideoItem>>;
	getPermissionGroup(permission?: number): IBaseExecution<SP.Publishing.VideoPermissionGroup>;
	getVideoCount(): IBaseExecution<number>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ISearch
**********************************************/
export interface ISearch extends SearchCollections,SearchMethods,IBaseQuery<ISearchQuery> {

}

/*********************************************
* ISearchQuery
**********************************************/
export interface ISearchQuery extends SearchQuery,SearchMethods {

}

/*********************************************
* Search
**********************************************/
export interface Search extends SearchCollections, SearchMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	QueryLanguages?: Array<number>;
}

/*********************************************
* SearchProps
**********************************************/
export interface SearchProps {

}

/*********************************************
* SearchCollections
**********************************************/
export interface SearchCollections extends SearchProps {

}

/*********************************************
* SearchQuery
**********************************************/
export interface SearchQuery extends SearchProps {

}

/*********************************************
* SearchMethods
**********************************************/
export interface SearchMethods {
	newest(startItemIndex?: number, itemLimit?: number): IBaseExecution<Array<SP.Publishing.VideoItem>>;
	popular(startItemIndex?: number, itemLimit?: number): IBaseExecution<Array<SP.Publishing.VideoItem>>;
	query(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): IBaseExecution<Array<SP.Publishing.VideoItem>>;
	queryChannels(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): IBaseExecution<Array<SP.Publishing.VideoChannel>>;
	related(videoId?: any, startItemIndex?: number, itemLimit?: number): IBaseExecution<Array<SP.Publishing.VideoItem>>;
}

/*********************************************
* ISpotlightVideo
**********************************************/
export interface ISpotlightVideo extends SpotlightVideoCollections,SpotlightVideoMethods,IBaseQuery<ISpotlightVideoQuery> {

}

/*********************************************
* ISpotlightVideoQuery
**********************************************/
export interface ISpotlightVideoQuery extends SpotlightVideoQuery,SpotlightVideoMethods {

}

/*********************************************
* SpotlightVideo
**********************************************/
export interface SpotlightVideo extends SpotlightVideoCollections, SpotlightVideoMethods {
	Id?: number;
	ServerRelativeUrl?: string;
	Url?: string;
}

/*********************************************
* SpotlightVideoProps
**********************************************/
export interface SpotlightVideoProps {
	Video(): IBaseExecution<SP.Publishing.VideoItem> & SP.Publishing.VideoItemCollections;
}

/*********************************************
* SpotlightVideoCollections
**********************************************/
export interface SpotlightVideoCollections extends SpotlightVideoProps {

}

/*********************************************
* SpotlightVideoCollectionMethods
**********************************************/
export interface SpotlightVideoCollectionMethods {
	getById(id?: number): IBaseExecution<SP.Publishing.SpotlightVideo>;
}

/*********************************************
* SpotlightVideoQuery
**********************************************/
export interface SpotlightVideoQuery extends SpotlightVideoProps {

}

/*********************************************
* SpotlightVideoMethods
**********************************************/
export interface SpotlightVideoMethods {
	deleteObject(): IBaseExecution<any>;
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
	add(language?: string | any, extension?: string, stream?: any): IBaseExecution<any>;
	getSubtitleFile(name?: string): IBaseExecution<any>;
	remove(name?: string): IBaseExecution<any>;
}

/*********************************************
* IVideoPermissionGroup
**********************************************/
export interface IVideoPermissionGroup extends VideoPermissionGroupCollections,VideoPermissionGroupMethods,IBaseQuery<IVideoPermissionGroupQuery> {

}

/*********************************************
* IVideoPermissionGroupQuery
**********************************************/
export interface IVideoPermissionGroupQuery extends VideoPermissionGroupQuery,VideoPermissionGroupMethods {

}

/*********************************************
* VideoPermissionGroup
**********************************************/
export interface VideoPermissionGroup extends VideoPermissionGroupCollections, VideoPermissionGroupMethods {
	Id?: number;
}

/*********************************************
* VideoPermissionGroupProps
**********************************************/
export interface VideoPermissionGroupProps {

}

/*********************************************
* VideoPermissionGroupCollections
**********************************************/
export interface VideoPermissionGroupCollections extends VideoPermissionGroupProps {
	Users(): IBaseCollection<SP.User> & SP.UserCollectionMethods;
	Users(id: string | number): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* VideoPermissionGroupQuery
**********************************************/
export interface VideoPermissionGroupQuery extends VideoPermissionGroupProps {
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
* IVideoServiceManagerQuery
**********************************************/
export interface IVideoServiceManagerQuery extends VideoServiceManagerQuery,VideoServiceManagerMethods {

}

/*********************************************
* VideoServiceManager
**********************************************/
export interface VideoServiceManager extends VideoServiceManagerCollections, VideoServiceManagerMethods {
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
	Search(): IBaseExecution<SP.Publishing.Search>;
}

/*********************************************
* VideoServiceManagerCollections
**********************************************/
export interface VideoServiceManagerCollections extends VideoServiceManagerProps {
	CanEditChannels(): IBaseCollection<SP.Publishing.VideoChannel> & SP.Publishing.VideoChannelCollectionMethods;
	CanEditChannels(id: string | number): IBaseExecution<SP.Publishing.VideoChannel> & SP.Publishing.VideoChannelCollections;
	Channels(): IBaseCollection<SP.Publishing.VideoChannel> & SP.Publishing.VideoChannelCollectionMethods;
	Channels(id: string | number): IBaseExecution<SP.Publishing.VideoChannel> & SP.Publishing.VideoChannelCollections;
	SpotlightChannels(): IBaseCollection<SP.Publishing.SpotlightChannel> & SP.Publishing.SpotlightChannelCollectionMethods;
	SpotlightChannels(id: string | number): IBaseExecution<SP.Publishing.SpotlightChannel> & SP.Publishing.SpotlightChannelCollections;
	SpotlightVideos(): IBaseCollection<SP.Publishing.SpotlightVideo> & SP.Publishing.SpotlightVideoCollectionMethods;
	SpotlightVideos(id: string | number): IBaseExecution<SP.Publishing.SpotlightVideo> & SP.Publishing.SpotlightVideoCollections;
}

/*********************************************
* VideoServiceManagerQuery
**********************************************/
export interface VideoServiceManagerQuery extends VideoServiceManagerProps {
	CanEditChannels: IBaseResults<SP.Publishing.VideoChannel>;
	Channels: IBaseResults<SP.Publishing.VideoChannel>;
	SpotlightChannels: IBaseResults<SP.Publishing.SpotlightChannel>;
	SpotlightVideos: IBaseResults<SP.Publishing.SpotlightVideo>;
}

/*********************************************
* VideoServiceManagerMethods
**********************************************/
export interface VideoServiceManagerMethods {
	getChannels(startIndex?: number, limit?: number): IBaseExecution<Array<SP.Publishing.VideoChannel>>;
	getPermissionGroup(permission?: number): IBaseExecution<SP.Publishing.VideoPermissionGroup>;
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
	getByIndex(choice?: number): IBaseExecution<SP.Publishing.VideoThumbnail>;
}
