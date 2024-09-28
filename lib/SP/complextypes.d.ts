import { Base } from "../";
import { SP } from "../";
import { Microsoft } from "../";

/*********************************************
* KeyValue
**********************************************/
export interface KeyValue {
	Key?: string;
	Value?: string;
	ValueType?: string;
}

/*********************************************
* KeyValueCollections
**********************************************/
export interface KeyValueCollections {

}

/*********************************************
* SimpleDataRow
**********************************************/
export interface SimpleDataRow {
	Cells?: { results: Array<SP.KeyValue> };
}

/*********************************************
* SimpleDataRowCollections
**********************************************/
export interface SimpleDataRowCollections {

}

/*********************************************
* SimpleDataTable
**********************************************/
export interface SimpleDataTable {
	Rows?: { results: Array<SP.SimpleDataRow> };
}

/*********************************************
* SimpleDataTableCollections
**********************************************/
export interface SimpleDataTableCollections {

}

/*********************************************
* MethodInformation
**********************************************/
export interface MethodInformation {
	IsBeta?: boolean;
	Name?: string;
	Parameters?: { results: Array<SP.ParameterInformation> };
	ReturnTypeFullName?: string;
}

/*********************************************
* MethodInformationCollections
**********************************************/
export interface MethodInformationCollections {

}

/*********************************************
* ParameterInformation
**********************************************/
export interface ParameterInformation {
	Name?: string;
	ParameterTypeFullName?: string;
}

/*********************************************
* ParameterInformationCollections
**********************************************/
export interface ParameterInformationCollections {

}

/*********************************************
* PropertyInformation
**********************************************/
export interface PropertyInformation {
	ExcludeFromDefaultRetrieval?: boolean;
	IsBeta?: boolean;
	Name?: string;
	PropertyTypeFullName?: string;
	ReadOnly?: boolean;
}

/*********************************************
* PropertyInformationCollections
**********************************************/
export interface PropertyInformationCollections {

}

/*********************************************
* Audience
**********************************************/
export interface Audience {
	Email?: string;
	Id?: any;
	Title?: string;
}

/*********************************************
* AudienceCollections
**********************************************/
export interface AudienceCollections {

}

/*********************************************
* HomeSiteNavConfiguration
**********************************************/
export interface HomeSiteNavConfiguration {
	IsEnabled?: boolean;
	LogoHash?: string;
}

/*********************************************
* HomeSiteNavConfigurationCollections
**********************************************/
export interface HomeSiteNavConfigurationCollections {

}

/*********************************************
* HomeSiteReference
**********************************************/
export interface HomeSiteReference {
	Audiences?: { results: Array<any> };
	SiteFlags?: number;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* HomeSiteReferenceCollections
**********************************************/
export interface HomeSiteReferenceCollections {

}

/*********************************************
* HomeSitesDetails
**********************************************/
export interface HomeSitesDetails {
	Audiences?: { results: Array<any> };
	IsInDraftMode?: boolean;
	IsVivaBackendSite?: boolean;
	MatchingAudiences?: { results: Array<any> };
	SiteId?: any;
	TargetedLicenseType?: number;
	Title?: string;
	Url?: string;
	VivaConnectionsDefaultStart?: boolean;
	WebId?: any;
}

/*********************************************
* HomeSitesDetailsCollections
**********************************************/
export interface HomeSitesDetailsCollections {

}

/*********************************************
* PortalAndOrgNewsSiteReference
**********************************************/
export interface PortalAndOrgNewsSiteReference {
	IsInDraftMode?: boolean;
	IsVivaBackend?: boolean;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* PortalAndOrgNewsSiteReferenceCollections
**********************************************/
export interface PortalAndOrgNewsSiteReferenceCollections {

}

/*********************************************
* OrganizationNewsSiteReference
**********************************************/
export interface OrganizationNewsSiteReference {

}

/*********************************************
* OrganizationNewsSiteReferenceCollections
**********************************************/
export interface OrganizationNewsSiteReferenceCollections {

}

/*********************************************
* SPHSiteReference
**********************************************/
export interface SPHSiteReference {
	LogoUrl?: string;
	Title?: string;
	Url?: string;
}

/*********************************************
* SPHSiteReferenceCollections
**********************************************/
export interface SPHSiteReferenceCollections {

}

/*********************************************
* TargetedSiteDetails
**********************************************/
export interface TargetedSiteDetails {
	Audiences?: { results: Array<SP.Audience> };
	IsInDraftMode?: boolean;
	IsVivaBackendSite?: boolean;
	SiteId?: any;
	TargetedLicenseType?: number;
	Title?: string;
	Url?: string;
	VivaConnectionsDefaultStart?: boolean;
	WebId?: any;
}

/*********************************************
* TargetedSiteDetailsCollections
**********************************************/
export interface TargetedSiteDetailsCollections {

}

/*********************************************
* VivaConnectionsLicense
**********************************************/
export interface VivaConnectionsLicense {
	IsTenantEnabled?: boolean;
	IsUserEnabled?: boolean;
}

/*********************************************
* VivaConnectionsLicenseCollections
**********************************************/
export interface VivaConnectionsLicenseCollections {

}

/*********************************************
* FileCreationInformation
**********************************************/
export interface FileCreationInformation {
	Content?: any;
	Overwrite?: boolean;
	Url?: string;
	XorHash?: string;
}

/*********************************************
* FileCreationInformationCollections
**********************************************/
export interface FileCreationInformationCollections {

}

/*********************************************
* KnowledgeHubSiteReference
**********************************************/
export interface KnowledgeHubSiteReference {
	SiteId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* KnowledgeHubSiteReferenceCollections
**********************************************/
export interface KnowledgeHubSiteReferenceCollections {

}

/*********************************************
* ConfigurationData
**********************************************/
export interface ConfigurationData {
	BridgeAbsolutePath?: SP.ResourcePath;
	IsCustomizedThemeEnabled?: boolean;
	IsPersonalizationEnabled?: boolean;
	IsVivaHomeOptedOut?: boolean;
	NavConfig?: SP.HomeSiteNavConfiguration;
	SiteId?: any;
	Theme?: string;
	VivaExperienceType?: number;
	WebId?: any;
}

/*********************************************
* ConfigurationDataCollections
**********************************************/
export interface ConfigurationDataCollections {

}

/*********************************************
* ResourcePath
**********************************************/
export interface ResourcePath {
	DecodedUrl?: string;
}

/*********************************************
* ResourcePathCollections
**********************************************/
export interface ResourcePathCollections {

}

/*********************************************
* DashboardItemInfo
**********************************************/
export interface DashboardItemInfo {
	ItemId?: number;
	ListId?: any;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* DashboardItemInfoCollections
**********************************************/
export interface DashboardItemInfoCollections {

}

/*********************************************
* DashboardItem
**********************************************/
export interface DashboardItem {
	WebAbsolutePath?: SP.ResourcePath;
}

/*********************************************
* DashboardItemCollections
**********************************************/
export interface DashboardItemCollections {

}

/*********************************************
* PivotItem
**********************************************/
export interface PivotItem {
	Audiences?: { results: Array<string> };
	Name?: string;
}

/*********************************************
* PivotItemCollections
**********************************************/
export interface PivotItemCollections {

}

/*********************************************
* VivaHomeTitleRegion
**********************************************/
export interface VivaHomeTitleRegion {
	ImageUrl?: string;
	ListId?: any;
	SiteId?: any;
	TranslateX?: number;
	TranslateY?: number;
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* VivaHomeTitleRegionCollections
**********************************************/
export interface VivaHomeTitleRegionCollections {

}

/*********************************************
* VivaConnectionsUrlConfiguration
**********************************************/
export interface VivaConnectionsUrlConfiguration {
	ContentUrl?: string;
	DashboardNotConfiguredWarning?: string;
	GlobalNavNotConfiguredWarning?: string;
	NotHomeSiteUrlWarning?: string;
	SearchUrl?: string;
}

/*********************************************
* VivaConnectionsUrlConfigurationCollections
**********************************************/
export interface VivaConnectionsUrlConfigurationCollections {

}

/*********************************************
* UserIdInfo
**********************************************/
export interface UserIdInfo {
	NameId?: string;
	NameIdIssuer?: string;
}

/*********************************************
* UserIdInfoCollections
**********************************************/
export interface UserIdInfoCollections {

}

/*********************************************
* BrandCenterConfiguration
**********************************************/
export interface BrandCenterConfiguration {
	BrandColorsListId?: any;
	BrandColorsListUrl?: SP.ResourcePath;
	BrandFontLibraryId?: any;
	BrandFontLibraryUrl?: SP.ResourcePath;
	IsBrandCenterSiteFeatureEnabled?: boolean;
	IsPublicCdnEnabled?: boolean;
	OrgAssets?: Microsoft.SharePoint.Administration.OrgAssets;
	SiteId?: any;
	SiteUrl?: string;
}

/*********************************************
* BrandCenterConfigurationCollections
**********************************************/
export interface BrandCenterConfigurationCollections {

}

/*********************************************
* FieldLookupValue
**********************************************/
export interface FieldLookupValue {
	LookupId?: number;
	LookupValue?: string;
}

/*********************************************
* FieldLookupValueCollections
**********************************************/
export interface FieldLookupValueCollections {

}

/*********************************************
* ContentTypeId
**********************************************/
export interface ContentTypeId {
	StringValue?: string;
}

/*********************************************
* ContentTypeIdCollections
**********************************************/
export interface ContentTypeIdCollections {

}

/*********************************************
* FieldUserValue
**********************************************/
export interface FieldUserValue {
	Email?: string;
}

/*********************************************
* FieldUserValueCollections
**********************************************/
export interface FieldUserValueCollections {

}

/*********************************************
* AccessRequestResponse
**********************************************/
export interface AccessRequestResponse {
	requestedObjectId?: any;
	result?: boolean;
}

/*********************************************
* AccessRequestResponseCollections
**********************************************/
export interface AccessRequestResponseCollections {

}

/*********************************************
* AdditionalAccessStatusResponse
**********************************************/
export interface AdditionalAccessStatusResponse {
	AdditionalAccessRequestStatus?: number;
	ErrorMessage?: string;
	RoleValue?: number;
	StatusCode?: number;
}

/*********************************************
* AdditionalAccessStatusResponseCollections
**********************************************/
export interface AdditionalAccessStatusResponseCollections {

}

/*********************************************
* AgreementAttributeDTO
**********************************************/
export interface AgreementAttributeDTO {
	ReviewCompleteDate?: any;
	Reviewer?: SP.UserDTO;
	ReviewId?: string;
	ReviewStartDate?: any;
	State?: number;
}

/*********************************************
* AgreementAttributeDTOCollections
**********************************************/
export interface AgreementAttributeDTOCollections {

}

/*********************************************
* UserDTO
**********************************************/
export interface UserDTO {
	Email?: string;
	LoginName?: string;
}

/*********************************************
* UserDTOCollections
**********************************************/
export interface UserDTOCollections {

}

/*********************************************
* AgreementAttributeRequestDTO
**********************************************/
export interface AgreementAttributeRequestDTO {
	DocumentUri?: string;
}

/*********************************************
* AgreementAttributeRequestDTOCollections
**********************************************/
export interface AgreementAttributeRequestDTOCollections {

}

/*********************************************
* AgreementCountryResponse
**********************************************/
export interface AgreementCountryResponse {
	CountryKey?: string;
	DisplayName?: string;
}

/*********************************************
* AgreementCountryResponseCollections
**********************************************/
export interface AgreementCountryResponseCollections {

}

/*********************************************
* AgreementDataPair
**********************************************/
export interface AgreementDataPair {
	Count?: number;
	Name?: string;
}

/*********************************************
* AgreementDataPairCollections
**********************************************/
export interface AgreementDataPairCollections {

}

/*********************************************
* AgreementDocumentsInfo
**********************************************/
export interface AgreementDocumentsInfo {
	Documents?: { results: Array<SP.AgreementDocument> };
}

/*********************************************
* AgreementDocumentsInfoCollections
**********************************************/
export interface AgreementDocumentsInfoCollections {

}

/*********************************************
* AgreementDocument
**********************************************/
export interface AgreementDocument {
	DocumentType?: string;
	DocumentUrl?: string;
	IsActive?: boolean;
	LinkedPDFs?: { results: Array<string> };
	State?: string;
}

/*********************************************
* AgreementDocumentCollections
**********************************************/
export interface AgreementDocumentCollections {

}

/*********************************************
* AgreementESignStatusUpdatedPayload
**********************************************/
export interface AgreementESignStatusUpdatedPayload {
	AgreementId?: any;
	ExternalReference?: any;
	SignedDocId?: any;
	Status?: string;
}

/*********************************************
* AgreementESignStatusUpdatedPayloadCollections
**********************************************/
export interface AgreementESignStatusUpdatedPayloadCollections {

}

/*********************************************
* AgreementLocationData
**********************************************/
export interface AgreementLocationData {
	LibraryId?: string;
	SiteId?: string;
	WebId?: string;
}

/*********************************************
* AgreementLocationDataCollections
**********************************************/
export interface AgreementLocationDataCollections {

}

/*********************************************
* AgreementLocation
**********************************************/
export interface AgreementLocation {
	CategoryLabel?: string;
	LibraryId?: any;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* AgreementLocationCollections
**********************************************/
export interface AgreementLocationCollections {

}

/*********************************************
* AgreementMetaData
**********************************************/
export interface AgreementMetaData {
	AgreementNumber?: string;
	Category?: string;
	Country?: string;
	CreatedBy?: string;
	CreatedTime?: string;
	Documents?: { results: Array<SP.AgreementDocument> };
	EndDate?: string;
	FirstParty?: string;
	Language?: string;
	Name?: string;
	Owner?: string;
	SecondParty?: string;
	SiteId?: string;
	StartDate?: string;
	State?: string;
	TotalValue?: string;
	Url?: string;
	WebId?: string;
	WebUrl?: string;
}

/*********************************************
* AgreementMetaDataCollections
**********************************************/
export interface AgreementMetaDataCollections {

}

/*********************************************
* AgreementReportBaseData
**********************************************/
export interface AgreementReportBaseData {
	ByExpirationStatus?: { results: Array<SP.AgreementDataPair> };
	ErrorMessage?: string;
	Expired?: number;
	InEffect?: number;
	InProgressByState?: { results: Array<SP.AgreementDataPair> };
	NearExpiration?: number;
}

/*********************************************
* AgreementReportBaseDataCollections
**********************************************/
export interface AgreementReportBaseDataCollections {

}

/*********************************************
* AgreementReportFilter
**********************************************/
export interface AgreementReportFilter {
	Category?: string;
	FirstParty?: string;
	Language?: string;
	Location?: string;
	Owner?: string;
	SecondParty?: string;
	State?: string;
}

/*********************************************
* AgreementReportFilterCollections
**********************************************/
export interface AgreementReportFilterCollections {

}

/*********************************************
* AgreementSearchParameters
**********************************************/
export interface AgreementSearchParameters {
	AgreementNumber?: string;
	Category?: string;
	Owner?: string;
	RowLimit?: number;
	StartRow?: number;
	State?: string;
}

/*********************************************
* AgreementSearchParametersCollections
**********************************************/
export interface AgreementSearchParametersCollections {

}

/*********************************************
* AgreementSummaryData
**********************************************/
export interface AgreementSummaryData {
	ByCategory?: { results: Array<SP.AgreementDataPair> };
	ByExpirationYear?: { results: Array<SP.AgreementDataPair> };
	ByFirstParty?: { results: Array<SP.AgreementDataPair> };
	ByRenewalYear?: { results: Array<SP.AgreementDataPair> };
	BySecondParty?: { results: Array<SP.AgreementDataPair> };
	Evergreen?: number;
}

/*********************************************
* AgreementSummaryDataCollections
**********************************************/
export interface AgreementSummaryDataCollections {

}

/*********************************************
* ApprovalsCreateRequestParameters
**********************************************/
export interface ApprovalsCreateRequestParameters {
	approvers?: string;
	awaitAll?: boolean;
	details?: string;
	itemId?: string;
	itemUrlType?: number;
	listId?: string;
	markDocAsFinal?: boolean;
	title?: string;
	url?: string;
	version?: string;
}

/*********************************************
* ApprovalsCreateRequestParametersCollections
**********************************************/
export interface ApprovalsCreateRequestParametersCollections {

}

/*********************************************
* ApprovalsProperties
**********************************************/
export interface ApprovalsProperties {
	ApproversAwaitAll?: boolean;
	ApproversAwaitAllFixed?: boolean;
	ApproversFixed?: boolean;
	ApproverSourceType?: number;
	ApproverSourceValue?: string;
	ProvisioningError?: string;
	ProvisioningStatus?: number;
}

/*********************************************
* ApprovalsPropertiesCollections
**********************************************/
export interface ApprovalsPropertiesCollections {

}

/*********************************************
* CAAEFieldElement
**********************************************/
export interface CAAEFieldElement {
	Id?: string;
	Version?: string;
}

/*********************************************
* CAAEFieldElementCollections
**********************************************/
export interface CAAEFieldElementCollections {

}

/*********************************************
* CAAESnippetElement
**********************************************/
export interface CAAESnippetElement {
	Id?: string;
	Version?: string;
}

/*********************************************
* CAAESnippetElementCollections
**********************************************/
export interface CAAESnippetElementCollections {

}

/*********************************************
* CAFieldValue
**********************************************/
export interface CAFieldValue {
	DataType?: string;
	Id?: string;
	Name?: string;
	Value?: string;
}

/*********************************************
* CAFieldValueCollections
**********************************************/
export interface CAFieldValueCollections {

}

/*********************************************
* ColumnTypeInfo
**********************************************/
export interface ColumnTypeInfo {
	PlaceholderId?: string;
	TranslatedPlaceholderType?: string;
}

/*********************************************
* ColumnTypeInfoCollections
**********************************************/
export interface ColumnTypeInfoCollections {

}

/*********************************************
* ContentAssemblyFileInfo
**********************************************/
export interface ContentAssemblyFileInfo {
	FileUrl?: string;
	ServerRedirectedEmbedUrl?: string;
}

/*********************************************
* ContentAssemblyFileInfoCollections
**********************************************/
export interface ContentAssemblyFileInfoCollections {

}

/*********************************************
* ContentAssemblyFormAnswer
**********************************************/
export interface ContentAssemblyFormAnswer {
	AdditionalData?: string;
	Answer?: string;
	ContentControlTagName?: string;
}

/*********************************************
* ContentAssemblyFormAnswerCollections
**********************************************/
export interface ContentAssemblyFormAnswerCollections {

}

/*********************************************
* ContentAssemblyModernTemplateColumnsMappingInfo
**********************************************/
export interface ContentAssemblyModernTemplateColumnsMappingInfo {
	DestinationListContentTypeId?: string;
	DestinationSiteContentTypeId?: string;
	Placeholders?: { results: Array<SP.PlaceholderV2> };
}

/*********************************************
* ContentAssemblyModernTemplateColumnsMappingInfoCollections
**********************************************/
export interface ContentAssemblyModernTemplateColumnsMappingInfoCollections {

}

/*********************************************
* PlaceholderV2
**********************************************/
export interface PlaceholderV2 {
	AdditionalFieldsData?: string;
	ColumnId?: string;
	ColumnInternalName?: string;
	DataType?: string;
	FieldLibraryMappedId?: string;
	FieldLibraryMappedVersion?: string;
	Id?: string;
	IsColumnMappingActive?: boolean;
	IsMandatory?: boolean;
	Name?: string;
	QuestionTitle?: string;
	Source?: string;
}

/*********************************************
* PlaceholderV2Collections
**********************************************/
export interface PlaceholderV2Collections {

}

/*********************************************
* ContentControlInfo
**********************************************/
export interface ContentControlInfo {
	ContentControlTagName?: string;
	EndIndex?: number;
	IsSingleParargaph?: boolean;
	ParagraphIds?: { results: Array<string> };
	StartIndex?: number;
}

/*********************************************
* ContentControlInfoCollections
**********************************************/
export interface ContentControlInfoCollections {

}

/*********************************************
* CountByDate
**********************************************/
export interface CountByDate {
	count?: number;
	date?: number;
}

/*********************************************
* CountByDateCollections
**********************************************/
export interface CountByDateCollections {

}

/*********************************************
* CreatableItemInfoCollection
**********************************************/
export interface CreatableItemInfoCollection {
	Items?: { results: Array<SP.CreatableItemInfo> };
}

/*********************************************
* CreatableItemInfoCollectionCollections
**********************************************/
export interface CreatableItemInfoCollectionCollections {

}

/*********************************************
* CreatableItemInfo
**********************************************/
export interface CreatableItemInfo {
	DocumentTemplate?: number;
	FileExtension?: string;
	ItemType?: string;
}

/*********************************************
* CreatableItemInfoCollections
**********************************************/
export interface CreatableItemInfoCollections {

}

/*********************************************
* CreateAgreementFolderInfo
**********************************************/
export interface CreateAgreementFolderInfo {
	AgreementFolderServerRelativeUrl?: string;
	AgreementNumber?: string;
}

/*********************************************
* CreateAgreementFolderInfoCollections
**********************************************/
export interface CreateAgreementFolderInfoCollections {

}

/*********************************************
* CreateReviewRequestDTO
**********************************************/
export interface CreateReviewRequestDTO {
	DocumentUri?: string;
	Reviewer?: string;
}

/*********************************************
* CreateReviewRequestDTOCollections
**********************************************/
export interface CreateReviewRequestDTOCollections {

}

/*********************************************
* CurrencyInformationCollection
**********************************************/
export interface CurrencyInformationCollection {
	Items?: { results: Array<SP.CurrencyInformation> };
}

/*********************************************
* CurrencyInformationCollectionCollections
**********************************************/
export interface CurrencyInformationCollectionCollections {

}

/*********************************************
* CurrencyInformation
**********************************************/
export interface CurrencyInformation {
	DisplayString?: string;
	LanguageCultureName?: string;
	LCID?: string;
}

/*********************************************
* CurrencyInformationCollections
**********************************************/
export interface CurrencyInformationCollections {

}

/*********************************************
* CustomizedFormsPageCollection
**********************************************/
export interface CustomizedFormsPageCollection {
	Items?: { results: Array<SP.CustomizedFormsPage> };
}

/*********************************************
* CustomizedFormsPageCollectionCollections
**********************************************/
export interface CustomizedFormsPageCollectionCollections {

}

/*********************************************
* CustomizedFormsPage
**********************************************/
export interface CustomizedFormsPage {
	formType?: number;
	pageId?: any;
	Url?: string;
	webpartId?: any;
}

/*********************************************
* CustomizedFormsPageCollections
**********************************************/
export interface CustomizedFormsPageCollections {

}

/*********************************************
* DocumentGenerationInfo
**********************************************/
export interface DocumentGenerationInfo {
	ConditionalFieldsToBeDeleted?: { results: Array<string> };
	ContentAssemblyFormAnswers?: { results: Array<SP.ContentAssemblyFormAnswer> };
	CopyFieldsFromExistingDocument?: boolean;
	FileName?: string;
	FolderUrl?: string;
	Format?: number;
	IsTempFile?: boolean;
	TempFileUrl?: string;
	UpdateFolderPermissions?: boolean;
}

/*********************************************
* DocumentGenerationInfoCollections
**********************************************/
export interface DocumentGenerationInfoCollections {

}

/*********************************************
* EncryptionOption
**********************************************/
export interface EncryptionOption {
	AES256CBCKey?: any;
}

/*********************************************
* EncryptionOptionCollections
**********************************************/
export interface EncryptionOptionCollections {

}

/*********************************************
* FieldValuesWithUrl
**********************************************/
export interface FieldValuesWithUrl {
	FieldValues?: { results: Array<SP.CAFieldValue> };
	ServerRedirectedEmbedUrl?: string;
}

/*********************************************
* FieldValuesWithUrlCollections
**********************************************/
export interface FieldValuesWithUrlCollections {

}

/*********************************************
* GridInitInfoType
**********************************************/
export interface GridInitInfoType {
	ControllerId?: string;
	GridSerializer?: string;
	JsInitObj?: string;
}

/*********************************************
* GridInitInfoTypeCollections
**********************************************/
export interface GridInitInfoTypeCollections {

}

/*********************************************
* HTMLFieldSecuritySetting
**********************************************/
export interface HTMLFieldSecuritySetting {
	allowedDomains?: { results: Array<string> };
	allowEmbedding?: number;
}

/*********************************************
* HTMLFieldSecuritySettingCollections
**********************************************/
export interface HTMLFieldSecuritySettingCollections {

}

/*********************************************
* IngestionTaskKey
**********************************************/
export interface IngestionTaskKey {
	IngestionTableAccountKey?: string;
	IngestionTableAccountName?: string;
	JobId?: string;
	TaskId?: string;
	TenantName?: string;
}

/*********************************************
* IngestionTaskKeyCollections
**********************************************/
export interface IngestionTaskKeyCollections {

}

/*********************************************
* ItemOrderUpdateValue
**********************************************/
export interface ItemOrderUpdateValue {
	HasException?: boolean;
	ItemId?: number;
	UpdatedOrder?: any;
}

/*********************************************
* ItemOrderUpdateValueCollections
**********************************************/
export interface ItemOrderUpdateValueCollections {

}

/*********************************************
* LockFileData
**********************************************/
export interface LockFileData {
	lockExpireTimeStamp?: any;
	lockId?: string;
}

/*********************************************
* LockFileDataCollections
**********************************************/
export interface LockFileDataCollections {

}

/*********************************************
* MultiGeoCopyParameters
**********************************************/
export interface MultiGeoCopyParameters {
	binaryPayload?: any;
	jobId?: any;
	userId?: number;
}

/*********************************************
* MultiGeoCopyParametersCollections
**********************************************/
export interface MultiGeoCopyParametersCollections {

}

/*********************************************
* Placeholder
**********************************************/
export interface Placeholder {
	DataType?: string;
	EndPosition?: number;
	Id?: string;
	Name?: string;
	ParagraphId?: string;
	QuestionTitle?: string;
	Source?: string;
	StartPosition?: number;
}

/*********************************************
* PlaceholderCollections
**********************************************/
export interface PlaceholderCollections {

}

/*********************************************
* PublishModernTemplatePayload
**********************************************/
export interface PublishModernTemplatePayload {
	DisableSearchAndApprovals?: boolean;
	Placeholders?: { results: Array<SP.PlaceholderV2> };
	Snippets?: { results: Array<SP.Snippet> };
	Url?: string;
}

/*********************************************
* PublishModernTemplatePayloadCollections
**********************************************/
export interface PublishModernTemplatePayloadCollections {

}

/*********************************************
* Snippet
**********************************************/
export interface Snippet {
	Id?: string;
	Name?: string;
	Placeholders?: { results: Array<SP.PlaceholderV2> };
	SnippetLibraryMappedId?: string;
	SnippetLibraryMappedVersion?: string;
}

/*********************************************
* SnippetCollections
**********************************************/
export interface SnippetCollections {

}

/*********************************************
* PublishSnippetPayload
**********************************************/
export interface PublishSnippetPayload {
	Placeholders?: { results: Array<SP.PlaceholderV2> };
	Url?: string;
}

/*********************************************
* PublishSnippetPayloadCollections
**********************************************/
export interface PublishSnippetPayloadCollections {

}

/*********************************************
* PublishTemplateV2Payload
**********************************************/
export interface PublishTemplateV2Payload {
	DestinationListContentTypeId?: string;
	DestinationSiteContentTypeId?: string;
	Placeholders?: { results: Array<SP.PlaceholderV2> };
	Snippets?: { results: Array<SP.Snippet> };
	Url?: string;
}

/*********************************************
* PublishTemplateV2PayloadCollections
**********************************************/
export interface PublishTemplateV2PayloadCollections {

}

/*********************************************
* RecipientLimitsInfo
**********************************************/
export interface RecipientLimitsInfo {
	AliasOnly?: number;
	EmailOnly?: number;
	MixedRecipients?: number;
	ObjectIdOnly?: number;
}

/*********************************************
* RecipientLimitsInfoCollections
**********************************************/
export interface RecipientLimitsInfoCollections {

}

/*********************************************
* RelatedItem
**********************************************/
export interface RelatedItem {
	IconUrl?: string;
	ItemId?: number;
	ListId?: string;
	Title?: string;
	Url?: string;
	WebId?: string;
}

/*********************************************
* RelatedItemCollections
**********************************************/
export interface RelatedItemCollections {

}

/*********************************************
* RequestedTranslation
**********************************************/
export interface RequestedTranslation {
	LanguageCode?: string;
	WebRelativePath?: SP.ResourcePath;
}

/*********************************************
* RequestedTranslationCollections
**********************************************/
export interface RequestedTranslationCollections {

}

/*********************************************
* ResourceVisualization
**********************************************/
export interface ResourceVisualization {
	Acronym?: string;
	Color?: string;
	PreviewImageUrl?: string;
}

/*********************************************
* ResourceVisualizationCollections
**********************************************/
export interface ResourceVisualizationCollections {

}

/*********************************************
* ReviewConfigurationPayload
**********************************************/
export interface ReviewConfigurationPayload {
	CategoryId?: string;
	Reviewers?: { results: Array<string> };
	ReviewType?: string;
}

/*********************************************
* ReviewConfigurationPayloadCollections
**********************************************/
export interface ReviewConfigurationPayloadCollections {

}

/*********************************************
* ReviewConfigurationResponse
**********************************************/
export interface ReviewConfigurationResponse {
	Action?: string;
	ContractCategory?: string;
	ContractCategoryId?: string;
	Reviewers?: { results: Array<SP.UserDTO> };
	ReviewType?: string;
}

/*********************************************
* ReviewConfigurationResponseCollections
**********************************************/
export interface ReviewConfigurationResponseCollections {

}

/*********************************************
* ReviewDeletionConfigurationResponse
**********************************************/
export interface ReviewDeletionConfigurationResponse {
	Action?: string;
	ContractCategoryId?: string;
	Message?: string;
}

/*********************************************
* ReviewDeletionConfigurationResponseCollections
**********************************************/
export interface ReviewDeletionConfigurationResponseCollections {

}

/*********************************************
* ReviewWorkFlowResponseDTO
**********************************************/
export interface ReviewWorkFlowResponseDTO {
	Action?: string;
	Status?: string;
}

/*********************************************
* ReviewWorkFlowResponseDTOCollections
**********************************************/
export interface ReviewWorkFlowResponseDTOCollections {

}

/*********************************************
* ScriptSafeDomainEntityData
**********************************************/
export interface ScriptSafeDomainEntityData {
	DomainName?: string;
}

/*********************************************
* ScriptSafeDomainEntityDataCollections
**********************************************/
export interface ScriptSafeDomainEntityDataCollections {

}

/*********************************************
* SharedWithUserCollection
**********************************************/
export interface SharedWithUserCollection {
	Items?: { results: Array<SP.SharedWithUser> };
}

/*********************************************
* SharedWithUserCollectionCollections
**********************************************/
export interface SharedWithUserCollectionCollections {

}

/*********************************************
* SharedWithUser
**********************************************/
export interface SharedWithUser {
	Email?: string;
	Name?: string;
}

/*********************************************
* SharedWithUserCollections
**********************************************/
export interface SharedWithUserCollections {

}

/*********************************************
* SharePointIds
**********************************************/
export interface SharePointIds {
	HubSiteId?: string;
	SiteId?: string;
	SiteUrl?: string;
	WebId?: string;
}

/*********************************************
* SharePointIdsCollections
**********************************************/
export interface SharePointIdsCollections {

}

/*********************************************
* SharingLinkData
**********************************************/
export interface SharingLinkData {
	BlocksDownload?: boolean;
	Description?: string;
	Embeddable?: boolean;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	IsAddressBarLink?: boolean;
	IsAnonymous?: boolean;
	IsCreateOnlyLink?: boolean;
	IsFormsLink?: boolean;
	IsManageListLink?: boolean;
	IsOriginatedFromSharingFlow?: boolean;
	IsReviewLink?: boolean;
	IsSharingLink?: boolean;
	IsWritable?: boolean;
	LinkKind?: number;
	ObjectType?: number;
	ObjectUniqueId?: any;
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	RestrictToExistingRelationships?: boolean;
	ShareId?: any;
	TrackLinkUsers?: boolean;
}

/*********************************************
* SharingLinkDataCollections
**********************************************/
export interface SharingLinkDataCollections {

}

/*********************************************
* SharingLinkInfo
**********************************************/
export interface SharingLinkInfo {
	AllowsAnonymousAccess?: boolean;
	ApplicationId?: string;
	BlocksDownload?: boolean;
	Created?: string;
	CreatedBy?: SP.Sharing.Principal;
	Description?: string;
	Embeddable?: boolean;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	Invitations?: { results: Array<SP.Sharing.LinkInvitation> };
	IsActive?: boolean;
	IsAddressBarLink?: boolean;
	IsCreateOnlyLink?: boolean;
	IsDefault?: boolean;
	IsEditLink?: boolean;
	IsEphemeral?: boolean;
	IsFormsLink?: boolean;
	IsManageListLink?: boolean;
	IsReviewLink?: boolean;
	IsUnhealthy?: boolean;
	LastModified?: string;
	LastModifiedBy?: SP.Sharing.Principal;
	LimitUseToApplication?: boolean;
	LinkKind?: number;
	MeetingId?: string;
	PasswordLastModified?: string;
	PasswordLastModifiedBy?: SP.Sharing.Principal;
	RedeemedUsers?: { results: Array<SP.Sharing.LinkInvitation> };
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	RestrictToExistingRelationships?: boolean;
	Scope?: number;
	ShareId?: any;
	ShareTokenString?: string;
	SharingLinkStatus?: number;
	TrackLinkUsers?: boolean;
	Url?: string;
}

/*********************************************
* SharingLinkInfoCollections
**********************************************/
export interface SharingLinkInfoCollections {

}

/*********************************************
* SiteTemplate
**********************************************/
export interface SiteTemplate {
	Name?: string;
}

/*********************************************
* SiteTemplateCollections
**********************************************/
export interface SiteTemplateCollections {

}

/*********************************************
* SmartTemplateContentType
**********************************************/
export interface SmartTemplateContentType {
	Id?: string;
	Name?: string;
	PublishStatus?: string;
}

/*********************************************
* SmartTemplateContentTypeCollections
**********************************************/
export interface SmartTemplateContentTypeCollections {

}

/*********************************************
* SPAgreementsSite
**********************************************/
export interface SPAgreementsSite {
	Description?: string;
	GroupId?: string;
	LastModifiedDateTime?: any;
	ResourceVisualization?: SP.ResourceVisualization;
	SharePointIds?: SP.SharePointIds;
	Template?: SP.SiteTemplate;
	Title?: string;
	WebUrl?: string;
}

/*********************************************
* SPAgreementsSiteCollections
**********************************************/
export interface SPAgreementsSiteCollections {

}

/*********************************************
* AlertCreationInformation
**********************************************/
export interface AlertCreationInformation {
	AlertFrequency?: number;
	AlertTemplateName?: string;
	AlertTime?: any;
	AlertType?: number;
	AlwaysNotify?: boolean;
	DeliveryChannels?: number;
	EventType?: number;
	EventTypeBitmask?: number;
	Filter?: string;
	Properties?: { results: Array<SP.KeyValue> };
	Status?: number;
	Title?: string;
}

/*********************************************
* AlertCreationInformationCollections
**********************************************/
export interface AlertCreationInformationCollections {

}

/*********************************************
* AppLicenseCollection
**********************************************/
export interface AppLicenseCollection {
	Items?: { results: Array<SP.AppLicense> };
}

/*********************************************
* AppLicenseCollectionCollections
**********************************************/
export interface AppLicenseCollectionCollections {

}

/*********************************************
* AppLicense
**********************************************/
export interface AppLicense {
	RawXMLLicenseToken?: string;
}

/*********************************************
* AppLicenseCollections
**********************************************/
export interface AppLicenseCollections {

}

/*********************************************
* AppProperties
**********************************************/
export interface AppProperties {
	AppSettingsEnabled?: boolean;
	Description?: string;
	EulaUrl?: string;
	IsAnonymous?: boolean;
	IsDisabled?: boolean;
	ManagedDeploymentEnabled?: boolean;
	ManagePermissionsEnabled?: boolean;
	ManageSeatsEnabled?: boolean;
	MonitoringEnabled?: boolean;
	Publisher?: string;
	RemoveEnabled?: boolean;
	SideLoadEnabled?: boolean;
	SupportUrl?: string;
	ViewInMarketPlaceEnabled?: boolean;
}

/*********************************************
* AppPropertiesCollections
**********************************************/
export interface AppPropertiesCollections {

}

/*********************************************
* AppSiteContext
**********************************************/
export interface AppSiteContext {
	SiteUrl?: string;
}

/*********************************************
* AppSiteContextCollections
**********************************************/
export interface AppSiteContextCollections {

}

/*********************************************
* AppViewCreationInfo
**********************************************/
export interface AppViewCreationInfo {
	AppId?: any;
	IsPrivate?: boolean;
	Title?: string;
}

/*********************************************
* AppViewCreationInfoCollections
**********************************************/
export interface AppViewCreationInfoCollections {

}

/*********************************************
* AsyncReadJobInfo
**********************************************/
export interface AsyncReadJobInfo {
	CurrentChangeToken?: string;
	JobId?: any;
}

/*********************************************
* AsyncReadJobInfoCollections
**********************************************/
export interface AsyncReadJobInfoCollections {

}

/*********************************************
* AsyncReadOptions
**********************************************/
export interface AsyncReadOptions {
	IncludeDirectDescendantsOnly?: boolean;
	IncludeExtendedMetadata?: boolean;
	IncludePermission?: boolean;
	IncludeSecurity?: boolean;
	IncludeVersions?: boolean;
	StartChangeToken?: string;
}

/*********************************************
* AsyncReadOptionsCollections
**********************************************/
export interface AsyncReadOptionsCollections {

}

/*********************************************
* AttachmentCreationInformation
**********************************************/
export interface AttachmentCreationInformation {
	FileName?: string;
}

/*********************************************
* AttachmentCreationInformationCollections
**********************************************/
export interface AttachmentCreationInformationCollections {

}

/*********************************************
* AutoLabellingWorkInformation
**********************************************/
export interface AutoLabellingWorkInformation {
	RoutingHint?: string;
	ScaleUnitId?: any;
	Watermark?: string;
	WorkItemType?: number;
}

/*********************************************
* AutoLabellingWorkInformationCollections
**********************************************/
export interface AutoLabellingWorkInformationCollections {

}

/*********************************************
* BasePermissions
**********************************************/
export interface BasePermissions {
	High?: number;
	Low?: number;
}

/*********************************************
* BasePermissionsCollections
**********************************************/
export interface BasePermissionsCollections {

}

/*********************************************
* ChangeLogItemQuery
**********************************************/
export interface ChangeLogItemQuery {
	ChangeToken?: string;
	Contains?: string;
	Query?: string;
	QueryOptions?: string;
	RowLimit?: string;
	ViewFields?: string;
	ViewName?: string;
}

/*********************************************
* ChangeLogItemQueryCollections
**********************************************/
export interface ChangeLogItemQueryCollections {

}

/*********************************************
* ChangeQuery
**********************************************/
export interface ChangeQuery {
	Activity?: boolean;
	Add?: boolean;
	Alert?: boolean;
	AppConsentPrincipal?: boolean;
	ChangeTokenEnd?: SP.ChangeToken;
	ChangeTokenStart?: SP.ChangeToken;
	ContentType?: boolean;
	DeleteObject?: boolean;
	FetchLimit?: number;
	Field?: boolean;
	File?: boolean;
	Folder?: boolean;
	Group?: boolean;
	GroupMembershipAdd?: boolean;
	GroupMembershipDelete?: boolean;
	IgnoreStartTokenNotFoundError?: boolean;
	Item?: boolean;
	LatestFirst?: boolean;
	List?: boolean;
	Move?: boolean;
	Navigation?: boolean;
	RecursiveAll?: boolean;
	Rename?: boolean;
	RequireSecurityTrim?: boolean;
	Restore?: boolean;
	RoleAssignmentAdd?: boolean;
	RoleAssignmentDelete?: boolean;
	RoleDefinitionAdd?: boolean;
	RoleDefinitionDelete?: boolean;
	RoleDefinitionUpdate?: boolean;
	SecurityPolicy?: boolean;
	Site?: boolean;
	SystemUpdate?: boolean;
	Update?: boolean;
	User?: boolean;
	View?: boolean;
	Web?: boolean;
}

/*********************************************
* ChangeQueryCollections
**********************************************/
export interface ChangeQueryCollections {

}

/*********************************************
* ChangeToken
**********************************************/
export interface ChangeToken {
	StringValue?: string;
}

/*********************************************
* ChangeTokenCollections
**********************************************/
export interface ChangeTokenCollections {

}

/*********************************************
* ClassificationResult
**********************************************/
export interface ClassificationResult {
	ConfidenceScore?: number;
	ContentTypeId?: string;
	ContentTypeName?: string;
	Error?: string;
	Metas?: { results: Array<SP.KeyValue> };
	ModelId?: string;
	ModelVersion?: string;
	RetentionLabelFlags?: number;
	RetentionLabelName?: string;
	RetryCount?: number;
	SensitivityLabel?: string;
	TableMetas?: { results: Array<SP.KeyValue> };
}

/*********************************************
* ClassificationResultCollections
**********************************************/
export interface ClassificationResultCollections {

}

/*********************************************
* ListItemComplianceInfo
**********************************************/
export interface ListItemComplianceInfo {
	ComplianceTag?: string;
	TagPolicyEventBased?: boolean;
	TagPolicyHold?: boolean;
	TagPolicyRecord?: boolean;
}

/*********************************************
* ListItemComplianceInfoCollections
**********************************************/
export interface ListItemComplianceInfoCollections {

}

/*********************************************
* ContentTypeCreationInformation
**********************************************/
export interface ContentTypeCreationInformation {
	Description?: string;
	Group?: string;
	Id?: string;
	Name?: string;
}

/*********************************************
* ContentTypeCreationInformationCollections
**********************************************/
export interface ContentTypeCreationInformationCollections {

}

/*********************************************
* ContentTypeEntityData
**********************************************/
export interface ContentTypeEntityData {
	Description?: string;
	Group?: string;
	Name?: string;
	ParentContentTypeId?: string;
}

/*********************************************
* ContentTypeEntityDataCollections
**********************************************/
export interface ContentTypeEntityDataCollections {

}

/*********************************************
* ContextWebInformation
**********************************************/
export interface ContextWebInformation {
	FormDigestTimeoutSeconds?: number;
	FormDigestValue?: string;
	LibraryVersion?: string;
	SiteFullUrl?: string;
	SupportedSchemaVersions?: { results: Array<string> };
	WebFullUrl?: string;
}

/*********************************************
* ContextWebInformationCollections
**********************************************/
export interface ContextWebInformationCollections {

}

/*********************************************
* CopyJobProgress
**********************************************/
export interface CopyJobProgress {
	JobState?: number;
	Logs?: { results: Array<string> };
}

/*********************************************
* CopyJobProgressCollections
**********************************************/
export interface CopyJobProgressCollections {

}

/*********************************************
* CopyMigrationInfo
**********************************************/
export interface CopyMigrationInfo {
	EncryptionKey?: any;
	JobId?: any;
	JobQueueUri?: string;
	SourceListItemUniqueIds?: { results: Array<any> };
}

/*********************************************
* CopyMigrationInfoCollections
**********************************************/
export interface CopyMigrationInfoCollections {

}

/*********************************************
* CopyMigrationOptions
**********************************************/
export interface CopyMigrationOptions {
	AllowSchemaMismatch?: boolean;
	AllowSmallerVersionLimitOnDestination?: boolean;
	BypassSharedLock?: boolean;
	ClientEtags?: { results: Array<string> };
	CustomizedItemName?: { results: Array<string> };
	ExcludeChildren?: boolean;
	IgnoreVersionHistory?: boolean;
	IncludeItemPermissions?: boolean;
	IsMoveMode?: boolean;
	MoveAndShareFileInfo?: SP.SPMoveAndShareFileInfo;
	MoveButKeepSource?: boolean;
	NameConflictBehavior?: number;
	SameWebCopyMoveOptimization?: boolean;
}

/*********************************************
* CopyMigrationOptionsCollections
**********************************************/
export interface CopyMigrationOptionsCollections {

}

/*********************************************
* SPMoveAndShareFileInfo
**********************************************/
export interface SPMoveAndShareFileInfo {
	ItemPermissionableUserIds?: { results: Array<number> };
}

/*********************************************
* SPMoveAndShareFileInfoCollections
**********************************************/
export interface SPMoveAndShareFileInfoCollections {

}

/*********************************************
* CustomActionElementCollection
**********************************************/
export interface CustomActionElementCollection {
	Items?: { results: Array<SP.CustomActionElement> };
}

/*********************************************
* CustomActionElementCollectionCollections
**********************************************/
export interface CustomActionElementCollectionCollections {

}

/*********************************************
* CustomActionElement
**********************************************/
export interface CustomActionElement {
	ClientSideComponentId?: any;
	ClientSideComponentProperties?: string;
	CommandUIExtension?: string;
	Id?: string;
	EnabledScript?: string;
	HostProperties?: string;
	ImageUrl?: string;
	Location?: string;
	RegistrationId?: string;
	RegistrationType?: number;
	RequireSiteAdministrator?: boolean;
	Rights?: SP.BasePermissions;
	Title?: string;
	UrlAction?: string;
}

/*********************************************
* CustomActionElementCollections
**********************************************/
export interface CustomActionElementCollections {

}

/*********************************************
* CustomerKeyInfo
**********************************************/
export interface CustomerKeyInfo {
	AvailabilityKeyVault?: SP.CustomerKeyVaultInfo;
	PrimaryKeyVault?: SP.CustomerKeyVaultInfo;
	SecondaryKeyVault?: SP.CustomerKeyVaultInfo;
}

/*********************************************
* CustomerKeyInfoCollections
**********************************************/
export interface CustomerKeyInfoCollections {

}

/*********************************************
* CustomerKeyVaultInfo
**********************************************/
export interface CustomerKeyVaultInfo {
	KeyName?: string;
	KeyVersion?: any;
	ResourceGroupName?: string;
	SubscriptionId?: any;
	Uri?: string;
	VaultName?: string;
}

/*********************************************
* CustomerKeyVaultInfoCollections
**********************************************/
export interface CustomerKeyVaultInfoCollections {

}

/*********************************************
* CustomerKeyStatusInfo
**********************************************/
export interface CustomerKeyStatusInfo {
	AvailabilityKeyVaultUri?: string;
	PrimaryKeyVaultUri?: string;
	RecoveryEnabled?: boolean;
	RegistrationProgress?: number;
	SecondaryKeyVaultUri?: string;
	Status?: number;
}

/*********************************************
* CustomerKeyStatusInfoCollections
**********************************************/
export interface CustomerKeyStatusInfoCollections {

}

/*********************************************
* DocumentLibraryInformation
**********************************************/
export interface DocumentLibraryInformation {
	AbsoluteUrl?: string;
	DriveId?: string;
	FromCrossFarm?: boolean;
	Id?: any;
	IsDefaultDocumentLibrary?: boolean;
	Modified?: any;
	ModifiedFriendlyDisplay?: string;
	ServerRelativeUrl?: string;
	Title?: string;
}

/*********************************************
* DocumentLibraryInformationCollections
**********************************************/
export interface DocumentLibraryInformationCollections {

}

/*********************************************
* EnqueueJobInformation
**********************************************/
export interface EnqueueJobInformation {
	EnqueueJobStatus?: number;
	Message?: string;
}

/*********************************************
* EnqueueJobInformationCollections
**********************************************/
export interface EnqueueJobInformationCollections {

}

/*********************************************
* EventReceiverDefinitionCreationInformation
**********************************************/
export interface EventReceiverDefinitionCreationInformation {
	ReceiverAssembly?: string;
	ReceiverClass?: string;
	ReceiverName?: string;
	SequenceNumber?: number;
	Synchronization?: number;
	EventType?: number;
	ReceiverUrl?: string;
}

/*********************************************
* EventReceiverDefinitionCreationInformationCollections
**********************************************/
export interface EventReceiverDefinitionCreationInformationCollections {

}

/*********************************************
* ListDataValidationFailure
**********************************************/
export interface ListDataValidationFailure {
	DisplayName?: string;
	Message?: string;
	Name?: string;
	Reason?: number;
	ValidationType?: number;
}

/*********************************************
* ListDataValidationFailureCollections
**********************************************/
export interface ListDataValidationFailureCollections {

}

/*********************************************
* FieldCalculatedErrorValue
**********************************************/
export interface FieldCalculatedErrorValue {
	ErrorMessage?: string;
}

/*********************************************
* FieldCalculatedErrorValueCollections
**********************************************/
export interface FieldCalculatedErrorValueCollections {

}

/*********************************************
* FieldCreationInformation
**********************************************/
export interface FieldCreationInformation {
	Choices?: { results: Array<string> };
	IsCompactName?: boolean;
	LookupFieldName?: string;
	LookupListId?: any;
	LookupWebId?: any;
	Required?: boolean;
	Title?: string;
	FieldTypeKind?: number;
}

/*********************************************
* FieldCreationInformationCollections
**********************************************/
export interface FieldCreationInformationCollections {

}

/*********************************************
* FieldGeolocationValue
**********************************************/
export interface FieldGeolocationValue {
	Altitude?: number;
	Latitude?: number;
	Longitude?: number;
	Measure?: number;
}

/*********************************************
* FieldGeolocationValueCollections
**********************************************/
export interface FieldGeolocationValueCollections {

}

/*********************************************
* FieldRatingScaleQuestionAnswer
**********************************************/
export interface FieldRatingScaleQuestionAnswer {
	Answer?: number;
	Question?: string;
}

/*********************************************
* FieldRatingScaleQuestionAnswerCollections
**********************************************/
export interface FieldRatingScaleQuestionAnswerCollections {

}

/*********************************************
* FieldUrlValue
**********************************************/
export interface FieldUrlValue {
	Description?: string;
	Url?: string;
}

/*********************************************
* FieldUrlValueCollections
**********************************************/
export interface FieldUrlValueCollections {

}

/*********************************************
* FileCollectionAddParameters
**********************************************/
export interface FileCollectionAddParameters {
	AutoCheckoutOnInvalidData?: boolean;
	EnsureUniqueFileName?: boolean;
	Overwrite?: boolean;
	XorHash?: string;
}

/*********************************************
* FileCollectionAddParametersCollections
**********************************************/
export interface FileCollectionAddParametersCollections {

}

/*********************************************
* FileDeleteParameters
**********************************************/
export interface FileDeleteParameters {
	BypassSharedLock?: boolean;
	ETagMatch?: string;
}

/*********************************************
* FileDeleteParametersCollections
**********************************************/
export interface FileDeleteParametersCollections {

}

/*********************************************
* FileVersionBatchDeleteParameters
**********************************************/
export interface FileVersionBatchDeleteParameters {
	BatchDeleteMode?: number;
	DeleteOlderThanDays?: number;
	MajorVersionLimit?: number;
	MajorWithMinorVersionsLimit?: number;
}

/*********************************************
* FileVersionBatchDeleteParametersCollections
**********************************************/
export interface FileVersionBatchDeleteParametersCollections {

}

/*********************************************
* FolderColoringInformation
**********************************************/
export interface FolderColoringInformation {
	ColorHex?: string;
	ColorTag?: string;
	Emoji?: string;
}

/*********************************************
* FolderColoringInformationCollections
**********************************************/
export interface FolderColoringInformationCollections {

}

/*********************************************
* FolderCollectionAddParameters
**********************************************/
export interface FolderCollectionAddParameters {
	EnsureUniqueFileName?: boolean;
	Overwrite?: boolean;
}

/*********************************************
* FolderCollectionAddParametersCollections
**********************************************/
export interface FolderCollectionAddParametersCollections {

}

/*********************************************
* FolderDeleteParameters
**********************************************/
export interface FolderDeleteParameters {
	BypassSharedLock?: boolean;
	DeleteIfEmpty?: boolean;
	ETagMatch?: string;
}

/*********************************************
* FolderDeleteParametersCollections
**********************************************/
export interface FolderDeleteParametersCollections {

}

/*********************************************
* FontPackageCreationParameters
**********************************************/
export interface FontPackageCreationParameters {
	IsHidden?: boolean;
	PackageJson?: string;
	Title?: string;
}

/*********************************************
* FontPackageCreationParametersCollections
**********************************************/
export interface FontPackageCreationParametersCollections {

}

/*********************************************
* GetListItemVersionsParameters
**********************************************/
export interface GetListItemVersionsParameters {
	ListItemVersionCollectionPosition?: SP.ListItemVersionCollectionPosition;
	RowLimit?: number;
	SortDescending?: boolean;
}

/*********************************************
* GetListItemVersionsParametersCollections
**********************************************/
export interface GetListItemVersionsParametersCollections {

}

/*********************************************
* ListItemVersionCollectionPosition
**********************************************/
export interface ListItemVersionCollectionPosition {
	PagingInfo?: string;
}

/*********************************************
* ListItemVersionCollectionPositionCollections
**********************************************/
export interface ListItemVersionCollectionPositionCollections {

}

/*********************************************
* GetListsParameters
**********************************************/
export interface GetListsParameters {
	ListCollectionPosition?: SP.ListCollectionPosition;
	RowLimit?: number;
}

/*********************************************
* GetListsParametersCollections
**********************************************/
export interface GetListsParametersCollections {

}

/*********************************************
* ListCollectionPosition
**********************************************/
export interface ListCollectionPosition {
	PagingInfo?: string;
}

/*********************************************
* ListCollectionPositionCollections
**********************************************/
export interface ListCollectionPositionCollections {

}

/*********************************************
* GroupCreationInformation
**********************************************/
export interface GroupCreationInformation {
	Description?: string;
	Title?: string;
	AllowMembersEditMembership?: boolean;
	AllowRequestToJoinLeave?: boolean;
	AutoAcceptRequestToJoinLeave?: boolean;
	OnlyAllowMembersViewMembership?: boolean;
}

/*********************************************
* GroupCreationInformationCollections
**********************************************/
export interface GroupCreationInformationCollections {

}

/*********************************************
* Hashtag
**********************************************/
export interface Hashtag {
	Actor?: string;
	Application?: string;
	Label?: string;
	Timestamp?: any;
}

/*********************************************
* HashtagCollections
**********************************************/
export interface HashtagCollections {

}

/*********************************************
* HubSiteCreationInformation
**********************************************/
export interface HubSiteCreationInformation {
	Description?: string;
	EnablePermissionsSync?: boolean;
	EnforcedECTs?: string;
	EnforcedECTsVersion?: number;
	HideNameInNavigation?: boolean;
	LogoUrl?: string;
	ParentHubSiteId?: any;
	PermissionsSyncTag?: number;
	RequiresJoinApproval?: boolean;
	SiteDesignId?: any;
	SiteId?: any;
	SiteUrl?: string;
	Targets?: string;
	TenantInstanceId?: any;
	Title?: string;
}

/*********************************************
* HubSiteCreationInformationCollections
**********************************************/
export interface HubSiteCreationInformationCollections {

}

/*********************************************
* SPImageItem
**********************************************/
export interface SPImageItem {
	Name?: string;
	ServerRelativeUrl?: string;
	UniqueId?: any;
}

/*********************************************
* SPImageItemCollections
**********************************************/
export interface SPImageItemCollections {

}

/*********************************************
* SPInvitationCreationResult
**********************************************/
export interface SPInvitationCreationResult {
	Email?: string;
	Error?: string;
	InvitationLink?: string;
	Succeeded?: boolean;
}

/*********************************************
* SPInvitationCreationResultCollections
**********************************************/
export interface SPInvitationCreationResultCollections {

}

/*********************************************
* Language
**********************************************/
export interface Language {
	DisplayName?: string;
	LanguageTag?: string;
	Lcid?: number;
}

/*********************************************
* LanguageCollections
**********************************************/
export interface LanguageCollections {

}

/*********************************************
* ListCreationInformation
**********************************************/
export interface ListCreationInformation {
	CustomSchemaXml?: string;
	DataSourceProperties?: { results: Array<SP.KeyValue> };
	Description?: string;
	DocumentTemplateType?: number;
	QuickLaunchOption?: number;
	TemplateFeatureId?: any;
	TemplateType?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* ListCreationInformationCollections
**********************************************/
export interface ListCreationInformationCollections {

}

/*********************************************
* ListDataSource
**********************************************/
export interface ListDataSource {
	Properties?: { results: Array<SP.KeyValue> };
}

/*********************************************
* ListDataSourceCollections
**********************************************/
export interface ListDataSourceCollections {

}

/*********************************************
* ListDataValidationExceptionValue
**********************************************/
export interface ListDataValidationExceptionValue {
	FieldFailures?: { results: Array<SP.ListDataValidationFailure> };
	ItemFailure?: SP.ListDataValidationFailure;
}

/*********************************************
* ListDataValidationExceptionValueCollections
**********************************************/
export interface ListDataValidationExceptionValueCollections {

}

/*********************************************
* ListItemCollectionPosition
**********************************************/
export interface ListItemCollectionPosition {
	PagingInfo?: string;
}

/*********************************************
* ListItemCollectionPositionCollections
**********************************************/
export interface ListItemCollectionPositionCollections {

}

/*********************************************
* ListItemCreationInformationUsingPath
**********************************************/
export interface ListItemCreationInformationUsingPath {
	FolderPath?: SP.ResourcePath;
	LeafName?: SP.ResourcePath;
	UnderlyingObjectType?: number;
}

/*********************************************
* ListItemCreationInformationUsingPathCollections
**********************************************/
export interface ListItemCreationInformationUsingPathCollections {

}

/*********************************************
* ListItemCreationInformation
**********************************************/
export interface ListItemCreationInformation {
	FolderUrl?: string;
	LeafName?: string;
	UnderlyingObjectType?: number;
}

/*********************************************
* ListItemCreationInformationCollections
**********************************************/
export interface ListItemCreationInformationCollections {

}

/*********************************************
* ListItemDeleteParameters
**********************************************/
export interface ListItemDeleteParameters {
	BypassSharedLock?: boolean;
}

/*********************************************
* ListItemDeleteParametersCollections
**********************************************/
export interface ListItemDeleteParametersCollections {

}

/*********************************************
* ListItemFormUpdateValue
**********************************************/
export interface ListItemFormUpdateValue {
	ErrorCode?: number;
	ErrorMessage?: string;
	FieldName?: string;
	FieldValue?: string;
	HasException?: boolean;
	ItemId?: number;
}

/*********************************************
* ListItemFormUpdateValueCollections
**********************************************/
export interface ListItemFormUpdateValueCollections {

}

/*********************************************
* ListItemUpdateParameters
**********************************************/
export interface ListItemUpdateParameters {
	BypassQuotaCheck?: boolean;
	BypassSharedLock?: boolean;
}

/*********************************************
* ListItemUpdateParametersCollections
**********************************************/
export interface ListItemUpdateParametersCollections {

}

/*********************************************
* ListItemUpdateResults
**********************************************/
export interface ListItemUpdateResults {
	UpdatedData?: string;
	UpdateResults?: { results: Array<SP.ListItemFormUpdateValue> };
}

/*********************************************
* ListItemUpdateResultsCollections
**********************************************/
export interface ListItemUpdateResultsCollections {

}

/*********************************************
* SPListItemVersionChange
**********************************************/
export interface SPListItemVersionChange {
	FieldTitle?: string;
	NewValue?: string;
	PreviousValue?: string;
}

/*********************************************
* SPListItemVersionChangeCollections
**********************************************/
export interface SPListItemVersionChangeCollections {

}

/*********************************************
* SPListRule
**********************************************/
export interface SPListRule {
	ActionParams?: string;
	ActionType?: number;
	Condition?: string;
	CreateDate?: any;
	ID?: any;
	IsActive?: boolean;
	LastModifiedBy?: SP.SPRuleUserInfo;
	LastModifiedDate?: any;
	Outcome?: string;
	Owner?: string;
	RuleTemplateId?: any;
	Title?: string;
	TriggerType?: number;
}

/*********************************************
* SPListRuleCollections
**********************************************/
export interface SPListRuleCollections {

}

/*********************************************
* SPRuleUserInfo
**********************************************/
export interface SPRuleUserInfo {
	Name?: string;
	UserId?: number;
}

/*********************************************
* SPRuleUserInfoCollections
**********************************************/
export interface SPRuleUserInfoCollections {

}

/*********************************************
* MachineLearningSampleMeta
**********************************************/
export interface MachineLearningSampleMeta {
	ExtractedText?: string;
}

/*********************************************
* MachineLearningSampleMetaCollections
**********************************************/
export interface MachineLearningSampleMetaCollections {

}

/*********************************************
* MediaServiceUpdateParameters
**********************************************/
export interface MediaServiceUpdateParameters {
	AIPLabelExtractionStatus?: number;
	ChiSquareDistribution?: string;
	ClassificationResult?: SP.ClassificationResult;
	ContentVersion?: number;
	Entropy?: string;
	ETag?: string;
	IsLowPriorityRequest?: boolean;
	IsMediaServiceRequest?: boolean;
	MachineLearningSampleMeta?: SP.MachineLearningSampleMeta;
	MediaLengthInSeconds?: number;
	MediaServiceAutoKeyPoints?: string;
	MediaServiceAutoTags?: string;
	MediaServiceDateTaken?: string;
	MediaServiceDocTags?: string;
	MediaServiceEventHashCode?: string;
	MediaServiceFastMetadata?: string;
	MediaServiceGenerationTime?: string;
	MediaServiceImageHeight?: number;
	MediaServiceImageTags?: string;
	MediaServiceImageWidth?: number;
	MediaServiceKeyPoints?: string;
	MediaServiceLocation?: string;
	MediaServiceMetadata?: string;
	MediaServiceObjectDetectorVersions?: string;
	MediaServiceOCR?: string;
	MediaServicePhotoCategory?: string;
	MediaServiceProtectionKey?: string;
	MediaServiceSearchProperties?: string;
	MediaServiceSystemTags?: string;
	MediaServiceTranscript?: string;
	MonteCarloApproximation?: string;
	SensitivityLabel?: string;
	SensitivityLabelAssignmentMethod?: number;
	SkipSearchReindex?: boolean;
	VirusInfo?: string;
	VirusStatus?: string;
	XTenantLabelInfo?: string;
}

/*********************************************
* MediaServiceUpdateParametersCollections
**********************************************/
export interface MediaServiceUpdateParametersCollections {

}

/*********************************************
* MoveCopyOptions
**********************************************/
export interface MoveCopyOptions {
	KeepBoth?: boolean;
	ResetAuthorAndCreatedOnCopy?: boolean;
	RetainEditorAndModifiedOnMove?: boolean;
	ShouldBypassSharedLocks?: boolean;
}

/*********************************************
* MoveCopyOptionsCollections
**********************************************/
export interface MoveCopyOptionsCollections {

}

/*********************************************
* ProvisionedMigrationContainersInfo
**********************************************/
export interface ProvisionedMigrationContainersInfo {
	DataContainerUri?: string;
	EncryptionKey?: any;
	MetadataContainerUri?: string;
}

/*********************************************
* ProvisionedMigrationContainersInfoCollections
**********************************************/
export interface ProvisionedMigrationContainersInfoCollections {

}

/*********************************************
* ProvisionedMigrationQueueInfo
**********************************************/
export interface ProvisionedMigrationQueueInfo {
	JobQueueUri?: string;
}

/*********************************************
* ProvisionedMigrationQueueInfoCollections
**********************************************/
export interface ProvisionedMigrationQueueInfoCollections {

}

/*********************************************
* ProvisionedTemporaryAzureContainerInfo
**********************************************/
export interface ProvisionedTemporaryAzureContainerInfo {
	EncryptionKey?: any;
	Uri?: string;
}

/*********************************************
* ProvisionedTemporaryAzureContainerInfoCollections
**********************************************/
export interface ProvisionedTemporaryAzureContainerInfoCollections {

}

/*********************************************
* CamlQuery
**********************************************/
export interface CamlQuery {
	AllowIncrementalResults?: boolean;
	DatesInUtc?: boolean;
	FolderServerRelativePath?: SP.ResourcePath;
	FolderServerRelativeUrl?: string;
	ListItemCollectionPosition?: SP.ListItemCollectionPosition;
	ViewXml?: string;
}

/*********************************************
* CamlQueryCollections
**********************************************/
export interface CamlQueryCollections {

}

/*********************************************
* RecycleBinQueryInformation
**********************************************/
export interface RecycleBinQueryInformation {
	IsAscending?: boolean;
	ItemState?: number;
	OrderBy?: number;
	PagingInfo?: string;
	RowLimit?: number;
	ShowOnlyMyItems?: boolean;
}

/*********************************************
* RecycleBinQueryInformationCollections
**********************************************/
export interface RecycleBinQueryInformationCollections {

}

/*********************************************
* RenderListContextMenuDataParameters
**********************************************/
export interface RenderListContextMenuDataParameters {
	CascDelWarnMessage?: string;
	CustomAction?: string;
	Field?: string;
	ID?: string;
	InplaceFullListSearch?: string;
	InplaceSearchQuery?: string;
	IsCSR?: string;
	IsXslView?: string;
	ItemId?: string;
	ListViewPageUrl?: string;
	OverrideScope?: string;
	RootFolder?: string;
	View?: string;
	ViewCount?: string;
}

/*********************************************
* RenderListContextMenuDataParametersCollections
**********************************************/
export interface RenderListContextMenuDataParametersCollections {

}

/*********************************************
* RenderListDataOverrideParameters
**********************************************/
export interface RenderListDataOverrideParameters {
	CascDelWarnMessage?: string;
	CustomAction?: string;
	DrillDown?: string;
	Field?: string;
	FieldInternalName?: string;
	Filter?: string;
	FilterData?: string;
	FilterData1?: string;
	FilterData10?: string;
	FilterData2?: string;
	FilterData3?: string;
	FilterData4?: string;
	FilterData5?: string;
	FilterData6?: string;
	FilterData7?: string;
	FilterData8?: string;
	FilterData9?: string;
	FilterField?: string;
	FilterField1?: string;
	FilterField10?: string;
	FilterField2?: string;
	FilterField3?: string;
	FilterField4?: string;
	FilterField5?: string;
	FilterField6?: string;
	FilterField7?: string;
	FilterField8?: string;
	FilterField9?: string;
	FilterFields?: string;
	FilterFields1?: string;
	FilterFields10?: string;
	FilterFields2?: string;
	FilterFields3?: string;
	FilterFields4?: string;
	FilterFields5?: string;
	FilterFields6?: string;
	FilterFields7?: string;
	FilterFields8?: string;
	FilterFields9?: string;
	FilterLookupId?: string;
	FilterLookupId1?: string;
	FilterLookupId10?: string;
	FilterLookupId2?: string;
	FilterLookupId3?: string;
	FilterLookupId4?: string;
	FilterLookupId5?: string;
	FilterLookupId6?: string;
	FilterLookupId7?: string;
	FilterLookupId8?: string;
	FilterLookupId9?: string;
	FilterOp?: string;
	FilterOp1?: string;
	FilterOp10?: string;
	FilterOp2?: string;
	FilterOp3?: string;
	FilterOp4?: string;
	FilterOp5?: string;
	FilterOp6?: string;
	FilterOp7?: string;
	FilterOp8?: string;
	FilterOp9?: string;
	FilterValue?: string;
	FilterValue1?: string;
	FilterValue10?: string;
	FilterValue2?: string;
	FilterValue3?: string;
	FilterValue4?: string;
	FilterValue5?: string;
	FilterValue6?: string;
	FilterValue7?: string;
	FilterValue8?: string;
	FilterValue9?: string;
	FilterValues?: string;
	FilterValues1?: string;
	FilterValues10?: string;
	FilterValues2?: string;
	FilterValues3?: string;
	FilterValues4?: string;
	FilterValues5?: string;
	FilterValues6?: string;
	FilterValues7?: string;
	FilterValues8?: string;
	FilterValues9?: string;
	GroupString?: string;
	HasOverrideSelectCommand?: string;
	ID?: string;
	InplaceFullListSearch?: string;
	InplaceSearchQuery?: string;
	IsCSR?: string;
	IsGroupRender?: string;
	IsXslView?: string;
	ListViewPageUrl?: string;
	OverrideRowLimit?: string;
	OverrideScope?: string;
	OverrideSelectCommand?: string;
	PageFirstRow?: string;
	PageLastRow?: string;
	QueryParams?: { results: Array<SP.KeyValue> };
	RootFolder?: string;
	RootFolderUniqueId?: string;
	SortDir?: string;
	SortDir1?: string;
	SortDir10?: string;
	SortDir2?: string;
	SortDir3?: string;
	SortDir4?: string;
	SortDir5?: string;
	SortDir6?: string;
	SortDir7?: string;
	SortDir8?: string;
	SortDir9?: string;
	SortField?: string;
	SortField1?: string;
	SortField10?: string;
	SortField2?: string;
	SortField3?: string;
	SortField4?: string;
	SortField5?: string;
	SortField6?: string;
	SortField7?: string;
	SortField8?: string;
	SortField9?: string;
	SortFields?: string;
	SortFieldValues?: string;
	View?: string;
	ViewCount?: string;
	ViewId?: string;
	ViewPath?: string;
	WebPartId?: string;
}

/*********************************************
* RenderListDataOverrideParametersCollections
**********************************************/
export interface RenderListDataOverrideParametersCollections {

}

/*********************************************
* RenderListDataParameters
**********************************************/
export interface RenderListDataParameters {
	AddAllFields?: boolean;
	AddAllViewFields?: boolean;
	AddRegionalSettings?: boolean;
	AddRequiredFields?: boolean;
	AllowMultipleValueFilterForTaxonomyFields?: boolean;
	AudienceTarget?: boolean;
	DatesInUtc?: boolean;
	ExpandGroups?: boolean;
	ExpandUserField?: boolean;
	FilterOutChannelFoldersInDefaultDocLib?: boolean;
	FirstGroupOnly?: boolean;
	FolderServerRelativeUrl?: string;
	ImageFieldsToTryRewriteToCdnUrls?: string;
	MergeDefaultView?: boolean;
	ModernListBoot?: boolean;
	OriginalDate?: boolean;
	OverrideViewXml?: string;
	Paging?: string;
	RenderOptions?: number;
	RenderURLFieldInJSON?: boolean;
	ReplaceGroup?: boolean;
	RequireFolderColoringFields?: boolean;
	ShowStubFile?: boolean;
	ViewXml?: string;
}

/*********************************************
* RenderListDataParametersCollections
**********************************************/
export interface RenderListDataParametersCollections {

}

/*********************************************
* RenderListFilterDataParameters
**********************************************/
export interface RenderListFilterDataParameters {
	ExcludeFieldFilteringHtml?: boolean;
	FieldInternalName?: string;
	OverrideScope?: string;
	ProcessQStringToCAML?: string;
	ViewId?: string;
	ViewXml?: string;
}

/*********************************************
* RenderListFilterDataParametersCollections
**********************************************/
export interface RenderListFilterDataParametersCollections {

}

/*********************************************
* SPResourceEntry
**********************************************/
export interface SPResourceEntry {
	LCID?: number;
	Value?: string;
}

/*********************************************
* SPResourceEntryCollections
**********************************************/
export interface SPResourceEntryCollections {

}

/*********************************************
* RoleDefinitionCreationInformation
**********************************************/
export interface RoleDefinitionCreationInformation {
	BasePermissions?: SP.BasePermissions;
	Description?: string;
	Name?: string;
	Order?: number;
}

/*********************************************
* RoleDefinitionCreationInformationCollections
**********************************************/
export interface RoleDefinitionCreationInformationCollections {

}

/*********************************************
* SPRuleAction
**********************************************/
export interface SPRuleAction {
	ActionParams?: { results: Array<SP.KeyValue> };
	ActionType?: number;
}

/*********************************************
* SPRuleActionCollections
**********************************************/
export interface SPRuleActionCollections {

}

/*********************************************
* SensitivityLabelInfo
**********************************************/
export interface SensitivityLabelInfo {
	DisplayName?: string;
	Id?: string;
	MembersCanShare?: string;
}

/*********************************************
* SensitivityLabelInfoCollections
**********************************************/
export interface SensitivityLabelInfoCollections {

}

/*********************************************
* UpgradeInfo
**********************************************/
export interface UpgradeInfo {
	ErrorFile?: string;
	Errors?: number;
	LastUpdated?: any;
	LogFile?: string;
	RequestDate?: any;
	RetryCount?: number;
	StartTime?: any;
	Status?: number;
	UpgradeType?: number;
	Warnings?: number;
}

/*********************************************
* UpgradeInfoCollections
**********************************************/
export interface UpgradeInfoCollections {

}

/*********************************************
* SubwebQuery
**********************************************/
export interface SubwebQuery {
	ConfigurationFilter?: number;
	WebTemplateFilter?: number;
}

/*********************************************
* SubwebQueryCollections
**********************************************/
export interface SubwebQueryCollections {

}

/*********************************************
* TenantAppInformation
**********************************************/
export interface TenantAppInformation {
	AppPrincipalId?: string;
	AppWebFullUrl?: string;
	CreationTime?: any;
	IconAbsoluteUrl?: string;
	IconFallbackAbsoluteUrl?: string;
	Id?: any;
	LaunchUrl?: string;
	PackageFingerprint?: any;
	ProductId?: any;
	RemoteAppUrl?: string;
	Status?: number;
	Title?: string;
}

/*********************************************
* TenantAppInformationCollections
**********************************************/
export interface TenantAppInformationCollections {

}

/*********************************************
* TimeZoneInformation
**********************************************/
export interface TimeZoneInformation {
	Bias?: number;
	DaylightBias?: number;
	StandardBias?: number;
}

/*********************************************
* TimeZoneInformationCollections
**********************************************/
export interface TimeZoneInformationCollections {

}

/*********************************************
* UsageInfo
**********************************************/
export interface UsageInfo {
	Bandwidth?: number;
	DiscussionStorage?: number;
	Hits?: number;
	Storage?: number;
	StoragePercentageUsed?: number;
	Visits?: number;
}

/*********************************************
* UsageInfoCollections
**********************************************/
export interface UsageInfoCollections {

}

/*********************************************
* UserCreationInformation
**********************************************/
export interface UserCreationInformation {
	Email?: string;
	LoginName?: string;
	Title?: string;
}

/*********************************************
* UserCreationInformationCollections
**********************************************/
export interface UserCreationInformationCollections {

}

/*********************************************
* ViewCreationInformation
**********************************************/
export interface ViewCreationInformation {
	AssociatedContentTypeId?: string;
	baseViewId?: number;
	CalendarViewStyles?: string;
	ColumnWidth?: string;
	Paged?: boolean;
	PersonalView?: boolean;
	Query?: string;
	RowLimit?: number;
	SetAsDefaultView?: boolean;
	Title?: string;
	ViewData?: string;
	ViewFields?: { results: Array<string> };
	ViewTypeKind?: number;
	ViewType2?: string;
}

/*********************************************
* ViewCreationInformationCollections
**********************************************/
export interface ViewCreationInformationCollections {

}

/*********************************************
* VisualizationAppInfo
**********************************************/
export interface VisualizationAppInfo {
	DesignUri?: string;
	Id?: any;
	RuntimeUri?: string;
}

/*********************************************
* VisualizationAppInfoCollections
**********************************************/
export interface VisualizationAppInfoCollections {

}

/*********************************************
* VisualizationField
**********************************************/
export interface VisualizationField {
	InternalName?: string;
	Style?: string;
}

/*********************************************
* VisualizationFieldCollections
**********************************************/
export interface VisualizationFieldCollections {

}

/*********************************************
* VisualizationStyleSet
**********************************************/
export interface VisualizationStyleSet {
	AspectRatio?: string;
	BackgroundColor?: string;
	Fields?: { results: Array<SP.VisualizationField> };
	MinHeight?: string;
}

/*********************************************
* VisualizationStyleSetCollections
**********************************************/
export interface VisualizationStyleSetCollections {

}

/*********************************************
* Visualization
**********************************************/
export interface Visualization {
	DefaultScreen?: SP.VisualizationStyleSet;
	DetailView?: SP.VisualizationStyleSet;
	MediumScreen?: SP.VisualizationStyleSet;
	SmallScreen?: SP.VisualizationStyleSet;
	VisualizationAppInfo?: SP.VisualizationAppInfo;
	VisualizationType?: number;
}

/*********************************************
* VisualizationCollections
**********************************************/
export interface VisualizationCollections {

}

/*********************************************
* WebCreationInformation
**********************************************/
export interface WebCreationInformation {
	Description?: string;
	Language?: number;
	Title?: string;
	Url?: string;
	UseSamePermissionsAsParentSite?: boolean;
	WebTemplate?: string;
}

/*********************************************
* WebCreationInformationCollections
**********************************************/
export interface WebCreationInformationCollections {

}

/*********************************************
* WebInfoCreationInformation
**********************************************/
export interface WebInfoCreationInformation {
	Description?: string;
	Language?: number;
	Title?: string;
	Url?: string;
	UseUniquePermissions?: boolean;
	WebTemplate?: string;
}

/*********************************************
* WebInfoCreationInformationCollections
**********************************************/
export interface WebInfoCreationInformationCollections {

}

/*********************************************
* WebRequestInfo
**********************************************/
export interface WebRequestInfo {
	Body?: string;
	Headers?: { results: Array<SP.KeyValue> };
	Method?: string;
	Url?: string;
}

/*********************************************
* WebRequestInfoCollections
**********************************************/
export interface WebRequestInfoCollections {

}

/*********************************************
* WebResponseInfo
**********************************************/
export interface WebResponseInfo {
	Body?: string;
	Headers?: { results: Array<SP.KeyValue> };
	StatusCode?: number;
}

/*********************************************
* WebResponseInfoCollections
**********************************************/
export interface WebResponseInfoCollections {

}

/*********************************************
* XmlSchemaFieldCreationInformation
**********************************************/
export interface XmlSchemaFieldCreationInformation {
	Options?: number;
	SchemaXml?: string;
}

/*********************************************
* XmlSchemaFieldCreationInformationCollections
**********************************************/
export interface XmlSchemaFieldCreationInformationCollections {

}

/*********************************************
* SystemSiteLockExpirationResult
**********************************************/
export interface SystemSiteLockExpirationResult {
	Error?: number;
	Expiration?: any;
}

/*********************************************
* SystemSiteLockExpirationResultCollections
**********************************************/
export interface SystemSiteLockExpirationResultCollections {

}

/*********************************************
* TemplateMetaData
**********************************************/
export interface TemplateMetaData {
	Placeholders?: { results: Array<SP.Placeholder> };
	ServerRedirectedEmbedUrl?: string;
}

/*********************************************
* TemplateMetaDataCollections
**********************************************/
export interface TemplateMetaDataCollections {

}

/*********************************************
* TemplatizationMetaData
**********************************************/
export interface TemplatizationMetaData {
	FileInfo?: SP.ContentAssemblyFileInfo;
	IsTemplateViewDefault?: boolean;
	PlaceholderColumnTypeInfo?: { results: Array<SP.ColumnTypeInfo> };
	Placeholders?: { results: Array<SP.PlaceholderV2> };
}

/*********************************************
* TemplatizationMetaDataCollections
**********************************************/
export interface TemplatizationMetaDataCollections {

}

/*********************************************
* TemporaryFolderFileInfo
**********************************************/
export interface TemporaryFolderFileInfo {
	DummyFileUrl?: string;
	ServerRedirectedEmbedUrl?: string;
	TemporaryFileUrl?: string;
}

/*********************************************
* TemporaryFolderFileInfoCollections
**********************************************/
export interface TemporaryFolderFileInfoCollections {

}

/*********************************************
* TranslationNotificationRecipientCollection
**********************************************/
export interface TranslationNotificationRecipientCollection {
	LanguageCode?: string;
	Recipients?: { results: Array<SP.TranslationNotificationRecipient> };
}

/*********************************************
* TranslationNotificationRecipientCollectionCollections
**********************************************/
export interface TranslationNotificationRecipientCollectionCollections {

}

/*********************************************
* TranslationNotificationRecipient
**********************************************/
export interface TranslationNotificationRecipient {
	LoginName?: string;
}

/*********************************************
* TranslationNotificationRecipientCollections
**********************************************/
export interface TranslationNotificationRecipientCollections {

}

/*********************************************
* TranslationNotificationRecipientSetRequest
**********************************************/
export interface TranslationNotificationRecipientSetRequest {
	NotificationRecipients?: { results: Array<SP.TranslationNotificationRecipientCollection> };
}

/*********************************************
* TranslationNotificationRecipientSetRequestCollections
**********************************************/
export interface TranslationNotificationRecipientSetRequestCollections {

}

/*********************************************
* TranslationStatusCreationRequest
**********************************************/
export interface TranslationStatusCreationRequest {
	LanguageCodes?: { results: Array<string> };
}

/*********************************************
* TranslationStatusCreationRequestCollections
**********************************************/
export interface TranslationStatusCreationRequestCollections {

}

/*********************************************
* TranslationStatusSetRequest
**********************************************/
export interface TranslationStatusSetRequest {
	RequestedTranslations?: { results: Array<SP.RequestedTranslation> };
}

/*********************************************
* TranslationStatusSetRequestCollections
**********************************************/
export interface TranslationStatusSetRequestCollections {

}

/*********************************************
* TranslationStatus
**********************************************/
export interface TranslationStatus {
	Culture?: string;
	FileStatus?: any;
	HasPublishedVersion?: boolean;
	LastModified?: any;
	Path?: SP.ResourcePath;
	Title?: string;
}

/*********************************************
* TranslationStatusCollections
**********************************************/
export interface TranslationStatusCollections {

}

/*********************************************
* UpdateAgreementESignConfigPayload
**********************************************/
export interface UpdateAgreementESignConfigPayload {
	AgreementId?: string;
	AgreementUrl?: string;
	DocumentId?: string;
	eSignStatus?: string;
	RequestorEmail?: string;
	SignersEmail?: { results: Array<string> };
}

/*********************************************
* UpdateAgreementESignConfigPayloadCollections
**********************************************/
export interface UpdateAgreementESignConfigPayloadCollections {

}

/*********************************************
* UpdateAgreementMetaDataPayload
**********************************************/
export interface UpdateAgreementMetaDataPayload {
	FileUrl?: string;
	MarkAsTerminationLetter?: boolean;
}

/*********************************************
* UpdateAgreementMetaDataPayloadCollections
**********************************************/
export interface UpdateAgreementMetaDataPayloadCollections {

}

/*********************************************
* UpdateAgreementStatePayload
**********************************************/
export interface UpdateAgreementStatePayload {
	AgreementUrl?: string;
	CurrentState?: number;
	NextState?: number;
}

/*********************************************
* UpdateAgreementStatePayloadCollections
**********************************************/
export interface UpdateAgreementStatePayloadCollections {

}

/*********************************************
* UpdateReviewRequestDTO
**********************************************/
export interface UpdateReviewRequestDTO {
	Action?: string;
	Comments?: string;
	DocumentUri?: string;
	ReviewerEmailOrUPN?: string;
}

/*********************************************
* UpdateReviewRequestDTOCollections
**********************************************/
export interface UpdateReviewRequestDTOCollections {

}

/*********************************************
* UpdateTemplateInfoV2
**********************************************/
export interface UpdateTemplateInfoV2 {
	DeletedPlaceholderColumnIds?: { results: Array<string> };
	NewName?: string;
	Operation?: number;
	Placeholders?: { results: Array<SP.PlaceholderV2> };
	SetTemplateViewAsDefaultView?: boolean;
	Url?: string;
}

/*********************************************
* UpdateTemplateInfoV2Collections
**********************************************/
export interface UpdateTemplateInfoV2Collections {

}

/*********************************************
* UpdateTemplateInfo
**********************************************/
export interface UpdateTemplateInfo {
	NewName?: string;
	Operation?: number;
	Placeholders?: { results: Array<SP.Placeholder> };
}

/*********************************************
* UpdateTemplateInfoCollections
**********************************************/
export interface UpdateTemplateInfoCollections {

}

/*********************************************
* UpdateUploadedAgreementMetadataPayload
**********************************************/
export interface UpdateUploadedAgreementMetadataPayload {
	AgreementNumber?: string;
	AgreementUrl?: string;
	Category?: string;
	Country?: string;
	IsDraft?: boolean;
	IsExistingAgreement?: boolean;
	Language?: string;
	State?: string;
}

/*********************************************
* UpdateUploadedAgreementMetadataPayloadCollections
**********************************************/
export interface UpdateUploadedAgreementMetadataPayloadCollections {

}

/*********************************************
* SiteThemes
**********************************************/
export interface SiteThemes {
	themeData?: { results: Array<SP.ThemeData> };
}

/*********************************************
* SiteThemesCollections
**********************************************/
export interface SiteThemesCollections {

}

/*********************************************
* ThemeData
**********************************************/
export interface ThemeData {
	id?: number;
	isVisible?: boolean;
	name?: string;
	source?: number;
	themeJson?: string;
}

/*********************************************
* ThemeDataCollections
**********************************************/
export interface ThemeDataCollections {

}

/*********************************************
* TenantThemes
**********************************************/
export interface TenantThemes {
	hideDefaultThemes?: boolean;
	themeData?: { results: Array<SP.ThemeData> };
}

/*********************************************
* TenantThemesCollections
**********************************************/
export interface TenantThemesCollections {

}

/*********************************************
* MenuNode
**********************************************/
export interface MenuNode {
	AudienceIds?: { results: Array<any> };
	CurrentLCID?: number;
	CustomProperties?: { results: Array<SP.KeyValue> };
	FriendlyUrlSegment?: string;
	IsDeleted?: boolean;
	IsHidden?: boolean;
	IsTitleForExistingLanguage?: boolean;
	Key?: string;
	Nodes?: { results: Array<SP.MenuNode> };
	NodeType?: number;
	OpenInNewWindow?: boolean;
	SimpleUrl?: string;
	Title?: string;
	Translations?: { results: Array<SP.SPResourceEntry> };
}

/*********************************************
* MenuNodeCollections
**********************************************/
export interface MenuNodeCollections {

}

/*********************************************
* MenuState
**********************************************/
export interface MenuState {
	AudienceIds?: { results: Array<any> };
	FriendlyUrlPrefix?: string;
	IsAudienceTargetEnabledForGlobalNav?: boolean;
	Nodes?: { results: Array<SP.MenuNode> };
	SimpleUrl?: string;
	SPSitePrefix?: string;
	SPWebPrefix?: string;
	StartingNodeKey?: string;
	StartingNodeTitle?: string;
	Version?: string;
}

/*********************************************
* MenuStateCollections
**********************************************/
export interface MenuStateCollections {

}

/*********************************************
* NavigationNodeCreationInformation
**********************************************/
export interface NavigationNodeCreationInformation {
	AsLastNode?: boolean;
	IsExternal?: boolean;
	Title?: string;
	Url?: string;
}

/*********************************************
* NavigationNodeCreationInformationCollections
**********************************************/
export interface NavigationNodeCreationInformationCollections {

}

/*********************************************
* ConfiguredUserInfo
**********************************************/
export interface ConfiguredUserInfo {
	Email?: string;
	LoginName?: string;
	Name?: string;
	ProfilePicUrl?: string;
	UserId?: number;
}

/*********************************************
* ConfiguredUserInfoCollections
**********************************************/
export interface ConfiguredUserInfoCollections {

}

/*********************************************
* WorkflowConfigurationResponse
**********************************************/
export interface WorkflowConfigurationResponse {
	Approvers?: { results: Array<SP.ConfiguredUserInfo> };
	CategoryID?: string;
	CategoryName?: string;
	ConfigurationID?: number;
	Country?: string;
	ESignNeeded?: boolean;
	Language?: string;
	Reviewers?: { results: Array<SP.ConfiguredUserInfo> };
	Source?: string;
	Type?: string;
}

/*********************************************
* WorkflowConfigurationResponseCollections
**********************************************/
export interface WorkflowConfigurationResponseCollections {

}

/*********************************************
* DeviationAnalysisRule
**********************************************/
export interface DeviationAnalysisRule {
	Definition?: string;
	FallbackClauses?: { results: Array<string> };
	Id?: any;
	IsAcceptable?: boolean;
	Notes?: { results: Array<string> };
	RuleName?: string;
	SendForApproval?: boolean;
	SnippetPath?: string;
}

/*********************************************
* DeviationAnalysisRuleCollections
**********************************************/
export interface DeviationAnalysisRuleCollections {

}

/*********************************************
* RulesDefinition
**********************************************/
export interface RulesDefinition {
	ActionForInvalidRules?: string;
	CategoryID?: string;
	CreatedByUser?: SP.ReviewerInfo;
	CreatedDateTime?: string;
	IsActive?: boolean;
	IsManual?: boolean;
	ModifiedByUser?: SP.ReviewerInfo;
	ModifiedDateTime?: string;
	Properties?: { results: Array<SP.RulesProperties> };
	Risk?: number;
	RuleGroup?: string;
	RuleId?: number;
	RuleStatement?: string;
}

/*********************************************
* RulesDefinitionCollections
**********************************************/
export interface RulesDefinitionCollections {

}

/*********************************************
* ReviewerInfo
**********************************************/
export interface ReviewerInfo {
	Email?: string;
	Name?: string;
	ReviewerId?: number;
}

/*********************************************
* ReviewerInfoCollections
**********************************************/
export interface ReviewerInfoCollections {

}

/*********************************************
* RulesProperties
**********************************************/
export interface RulesProperties {
	RulesKey?: string;
	RulesValue?: string;
}

/*********************************************
* RulesPropertiesCollections
**********************************************/
export interface RulesPropertiesCollections {

}

/*********************************************
* RulesDefinitionGroup
**********************************************/
export interface RulesDefinitionGroup {
	RuleDefinitionsList?: { results: Array<SP.RulesDefinition> };
	RuleGroup?: string;
}

/*********************************************
* RulesDefinitionGroupCollections
**********************************************/
export interface RulesDefinitionGroupCollections {

}

/*********************************************
* RulesValidationEntryResponse
**********************************************/
export interface RulesValidationEntryResponse {
	Action?: number;
	AISuggestionText?: string;
	BusinessJustification?: string;
	LastUpdatedDateTime?: any;
	Reviewer?: SP.ReviewerInfo;
	Rule?: SP.RulesDefinition;
}

/*********************************************
* RulesValidationEntryResponseCollections
**********************************************/
export interface RulesValidationEntryResponseCollections {

}
