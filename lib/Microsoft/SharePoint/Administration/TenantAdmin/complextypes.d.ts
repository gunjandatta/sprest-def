import { Base } from "../../../../";
import { SP } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* PolicyResourceStorage
**********************************************/
export interface PolicyResourceStorage {
	createdOn?: any;
	lastScopedOn?: any;
	lookupSiteId?: SP.FieldLookupValue;
	notificationData?: string;
	notificationStatus?: number;
	policyActionLog?: string;
	resourceId?: any;
	resourceState?: number;
	resourceStateTransitionData?: string;
	resourceType?: number;
	updatedOn?: any;
	userResponses?: string;
}

/*********************************************
* PolicyResourceStorageCollections
**********************************************/
export interface PolicyResourceStorageCollections {

}

/*********************************************
* AttestationPolicyResourceStorage
**********************************************/
export interface AttestationPolicyResourceStorage {

}

/*********************************************
* AttestationPolicyResourceStorageCollections
**********************************************/
export interface AttestationPolicyResourceStorageCollections {

}

/*********************************************
* AuditData
**********************************************/
export interface AuditData {
	ClientIP?: string;
	CorrelationId?: any;
	CreationTime?: any;
	EventData?: string;
	EventDataParsed?: Microsoft.SharePoint.Administration.TenantAdmin.EventData;
	EventSource?: string;
	Id?: string;
	ItemType?: string;
	ListItemUniqueId?: any;
	ModifiedProperties?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.ModifiedProperty> };
	Name?: string;
	NewValue?: string;
	ObjectId?: string;
	OldValue?: string;
	Parameters?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.Parameter> };
	Site?: string;
	Target?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.TargetProperty> };
	TargetUserOrGroupName?: string;
	TargetUserOrGroupType?: string;
	TeamName?: string;
	UserId?: string;
	UserType?: number;
}

/*********************************************
* AuditDataCollections
**********************************************/
export interface AuditDataCollections {

}

/*********************************************
* EventData
**********************************************/
export interface EventData {
	ArchiveUrl?: string;
	Group?: string;
	HubSiteId?: any;
	Identity?: string;
	IsHubSite?: string;
	NewSiteUrl?: string;
	PreviousHubSiteId?: any;
	SourceSiteUrl?: string;
	StorageMaximumLevel?: number;
	StoragePreviousMaximumLevel?: number;
	StoragePreviousWarningLevel?: number;
	StorageWarningLevel?: number;
	TargetSiteUrl?: string;
}

/*********************************************
* EventDataCollections
**********************************************/
export interface EventDataCollections {

}

/*********************************************
* ModifiedProperty
**********************************************/
export interface ModifiedProperty {
	Name?: string;
	NewValue?: string;
	OldValue?: string;
}

/*********************************************
* ModifiedPropertyCollections
**********************************************/
export interface ModifiedPropertyCollections {

}

/*********************************************
* Parameter
**********************************************/
export interface Parameter {

}

/*********************************************
* ParameterCollections
**********************************************/
export interface ParameterCollections {

}

/*********************************************
* TargetProperty
**********************************************/
export interface TargetProperty {

}

/*********************************************
* TargetPropertyCollections
**********************************************/
export interface TargetPropertyCollections {

}

/*********************************************
* AuditSearchRequestStatus
**********************************************/
export interface AuditSearchRequestStatus {
	CompletedTimeUtc?: any;
	CompletenessPercent?: any;
	CorrelationId?: any;
	CreatedTimeUtc?: any;
	DataGroupId?: string;
	ErrorMessage?: string;
	ExecutedTimeUtc?: any;
	JobId?: string;
	LastModifiedTimeUtc?: any;
	ProgressPercent?: any;
	Request?: string;
	RequestId?: string;
	RequestStorageName?: string;
	ResultStorageName?: string;
	SearchUser?: string;
	Status?: number;
	Throttled?: boolean;
	TotalItemCount?: number;
}

/*********************************************
* AuditSearchRequestStatusCollections
**********************************************/
export interface AuditSearchRequestStatusCollections {

}

/*********************************************
* CollaborationInsightsData
**********************************************/
export interface CollaborationInsightsData {
	collaborativeOneDriveUsers?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.CollaborativeOneDriveUser> };
	collaborativeUsers?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.CollaborativeUser> };
	lastReportDate?: any;
}

/*********************************************
* CollaborationInsightsDataCollections
**********************************************/
export interface CollaborationInsightsDataCollections {

}

/*********************************************
* CollaborativeOneDriveUser
**********************************************/
export interface CollaborativeOneDriveUser {
	anonymousLinkCount?: number;
	fileCount?: number;
	filesSharedExternally?: number;
	filesSharedInternally?: number;
	totalFilesShared?: number;
	userPrincipalName?: string;
}

/*********************************************
* CollaborativeOneDriveUserCollections
**********************************************/
export interface CollaborativeOneDriveUserCollections {

}

/*********************************************
* CollaborativeUser
**********************************************/
export interface CollaborativeUser {
	totalFileInteraction?: number;
	totalFilesSharedExternally?: number;
	totalFilesSharedInternally?: number;
	totalFilesViewedOrEdited?: number;
	userPrincipalName?: string;
}

/*********************************************
* CollaborativeUserCollections
**********************************************/
export interface CollaborativeUserCollections {

}

/*********************************************
* CollaborationInsightsOverview
**********************************************/
export interface CollaborationInsightsOverview {
	lastReportDate?: any;
	totalGuests?: number;
	totalInternalUsers?: number;
	totalOneDrives?: number;
	totalSites?: number;
	totalUsers?: number;
}

/*********************************************
* CollaborationInsightsOverviewCollections
**********************************************/
export interface CollaborationInsightsOverviewCollections {

}

/*********************************************
* GroupSitesActivityDetail
**********************************************/
export interface GroupSitesActivityDetail {
	GroupId?: any;
	LastActivityDate?: any;
}

/*********************************************
* GroupSitesActivityDetailCollections
**********************************************/
export interface GroupSitesActivityDetailCollections {

}

/*********************************************
* InactiveSitePolicyResourceStorage
**********************************************/
export interface InactiveSitePolicyResourceStorage {
	createdOn?: any;
	lastScopedOn?: any;
	lastTransitionedOn?: any;
	lookupSiteId?: SP.FieldLookupValue;
	notificationData?: string;
	notificationStatus?: number;
	resourceId?: any;
	resourceState?: number;
	resourceStateTransitionData?: string;
	resourceType?: number;
	updatedOn?: any;
	userResponses?: string;
}

/*********************************************
* InactiveSitePolicyResourceStorageCollections
**********************************************/
export interface InactiveSitePolicyResourceStorageCollections {

}

/*********************************************
* InsightsSummaryResponse
**********************************************/
export interface InsightsSummaryResponse {
	insightsSummary?: string;
	totalPagedCount?: number;
}

/*********************************************
* InsightsSummaryResponseCollections
**********************************************/
export interface InsightsSummaryResponseCollections {

}

/*********************************************
* OwnershipPolicyResourceStorage
**********************************************/
export interface OwnershipPolicyResourceStorage {
	createdOn?: any;
	lastScopedOn?: any;
	lookupSiteId?: SP.FieldLookupValue;
	notificationData?: string;
	notificationStatus?: number;
	policyActionLog?: string;
	resourceId?: any;
	resourceState?: number;
	resourceStateTransitionData?: string;
	resourceType?: number;
	updatedOn?: any;
	userResponses?: string;
}

/*********************************************
* OwnershipPolicyResourceStorageCollections
**********************************************/
export interface OwnershipPolicyResourceStorageCollections {

}

/*********************************************
* PageResponse
**********************************************/
export interface PageResponse {
	ContinuationToken?: string;
	PageNumber?: number;
	PageResult?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.AuditSearchRequestStatus> };
	PageSize?: number;
	TotalCount?: number;
	TotalPages?: number;
}

/*********************************************
* PageResponseCollections
**********************************************/
export interface PageResponseCollections {

}

/*********************************************
* RansomwareProperties
**********************************************/
export interface RansomwareProperties {
	activityGeneratedOn?: any;
	activityId?: any;
	category?: number;
	detectionSource?: string;
	driveId?: string;
	firstActivity?: any;
	impactedAssetLocation?: string;
	impactedAssetsCount?: number;
	impactedDocLibName?: string;
	impactedSiteType?: number;
	lastActivity?: any;
	processedStatus?: number;
	ransomwareDetectionReason?: string;
	ransomwareDetectionScore?: number;
	runId?: any;
	siteLabelId?: string;
	siteLabelName?: string;
	siteName?: string;
	siteOwnerName?: string;
	siteSubscriptionId?: any;
	siteUrl?: string;
	userName?: string;
}

/*********************************************
* RansomwarePropertiesCollections
**********************************************/
export interface RansomwarePropertiesCollections {

}

/*********************************************
* RecentAdminActionReport
**********************************************/
export interface RecentAdminActionReport {
	actions?: string;
	createdByEmail?: string;
	createdByName?: string;
	createdDate?: any;
	downloadLink?: string;
	name?: string;
	numberOfRecords?: number;
	progressPercentage?: number;
	queryEndDate?: any;
	queryStartDate?: any;
	reportType?: number;
	requestId?: any;
	sites?: string;
	sPOCorrelationId?: any;
	status?: number;
	uALCorrelationId?: any;
	uALNumberOfRecords?: number;
	users?: string;
}

/*********************************************
* RecentAdminActionReportCollections
**********************************************/
export interface RecentAdminActionReportCollections {

}

/*********************************************
* SPContentEventsCustomEmailProperty
**********************************************/
export interface SPContentEventsCustomEmailProperty {
	Category?: number;
	EmailAddresses?: { results: Array<string> };
}

/*********************************************
* SPContentEventsCustomEmailPropertyCollections
**********************************************/
export interface SPContentEventsCustomEmailPropertyCollections {

}

/*********************************************
* ImpactedAsset
**********************************************/
export interface ImpactedAsset {

}

/*********************************************
* ImpactedAssetCollections
**********************************************/
export interface ImpactedAssetCollections {

}

/*********************************************
* TeamsSitesActivityDetail
**********************************************/
export interface TeamsSitesActivityDetail {
	LastActivityDate?: any;
	TeamId?: any;
}

/*********************************************
* TeamsSitesActivityDetailCollections
**********************************************/
export interface TeamsSitesActivityDetailCollections {

}

/*********************************************
* TenantAdminListItemColumnValue
**********************************************/
export interface TenantAdminListItemColumnValue {
	columnName?: string;
	columnValue?: string;
}

/*********************************************
* TenantAdminListItemColumnValueCollections
**********************************************/
export interface TenantAdminListItemColumnValueCollections {

}

/*********************************************
* TenantAdminPolicyDefinition
**********************************************/
export interface TenantAdminPolicyDefinition {
	createdBy?: string;
	lastUpdatedTime?: any;
	policyCreatedTime?: any;
	policyCustomName?: string;
	policyDefinitionDetails?: string;
	policyDeleteReason?: string;
	policyDescription?: string;
	policyFrequencyUnit?: number;
	policyFrequencyValue?: number;
	policyId?: any;
	policyState?: number;
	policyTags?: string;
	policyTemplate?: number;
	policyType?: number;
	policyVersion?: number;
	updatedBy?: string;
}

/*********************************************
* TenantAdminPolicyDefinitionCollections
**********************************************/
export interface TenantAdminPolicyDefinitionCollections {

}

/*********************************************
* TenantAdminPolicyReport
**********************************************/
export interface TenantAdminPolicyReport {
	policyExecutionTime?: any;
	policyExecutionId?: number;
	policyId?: any;
	policyReportDetails?: string;
	policyVersion?: number;
	reportCreationTime?: any;
	reportUpdationTime?: any;
}

/*********************************************
* TenantAdminPolicyReportCollections
**********************************************/
export interface TenantAdminPolicyReportCollections {

}

/*********************************************
* TenantAdminRansomwareActivitiesOverview
**********************************************/
export interface TenantAdminRansomwareActivitiesOverview {
	categoryThresholdLimit?: number;
	firstActivityTime?: any;
	impactedAssetsCount?: number;
	lastActivityTime?: any;
	oneDriveActivityCount?: number;
	sharePointActivityCount?: number;
	totalActivitiesCount?: number;
	totalHighVolumeComponentActivityDetectionCount?: number;
	unresolvedActivitiesCount?: number;
	usersCount?: number;
}

/*********************************************
* TenantAdminRansomwareActivitiesOverviewCollections
**********************************************/
export interface TenantAdminRansomwareActivitiesOverviewCollections {

}

/*********************************************
* TenantAdminRansomwareActivity
**********************************************/
export interface TenantAdminRansomwareActivity {
	activityGeneratedOn?: any;
	activityId?: any;
	assignedTo?: string;
	category?: number;
	classification?: number;
	createdTime?: any;
	detectionSource?: string;
	driveId?: string;
	eventId?: any;
	firstActivity?: any;
	impactedAssetLocation?: string;
	impactedAssets?: string;
	impactedAssetsCount?: number;
	impactedAssetsUserCount?: number;
	impactedDocLibName?: string;
	investigationState?: number;
	lastActivity?: any;
	lastUpdatedTime?: any;
	processedStatus?: number;
	ransomwareDetectionReason?: string;
	RansomwareDetectionScore?: number;
	runId?: any;
	siteId?: any;
	siteName?: string;
	siteOwner?: string;
	siteType?: number;
	siteUrl?: string;
	status?: number;
	syncStatus?: number;
	tagId?: string;
	updatedBy?: string;
	userName?: string;
	webId?: any;
}

/*********************************************
* TenantAdminRansomwareActivityCollections
**********************************************/
export interface TenantAdminRansomwareActivityCollections {

}

/*********************************************
* TenantAdminRansomwareEventsOverview
**********************************************/
export interface TenantAdminRansomwareEventsOverview {
	activeEventsCount?: number;
	openEventsCount?: number;
}

/*********************************************
* TenantAdminRansomwareEventsOverviewCollections
**********************************************/
export interface TenantAdminRansomwareEventsOverviewCollections {

}

/*********************************************
* TenantAdminRansomwareEvent
**********************************************/
export interface TenantAdminRansomwareEvent {
	assignedTo?: string;
	category?: number;
	categoryThresholdLimit?: number;
	classification?: number;
	consolidatedReportLocation?: string;
	createdTime?: any;
	eventId?: any;
	firstOccurrence?: any;
	investigationState?: number;
	lastOccurrence?: any;
	lastUpdatedTime?: any;
	severity?: number;
	status?: number;
	tagId?: string;
	totalHighVolumeComponentActivityDetectionCount?: number;
	updatedBy?: string;
}

/*********************************************
* TenantAdminRansomwareEventCollections
**********************************************/
export interface TenantAdminRansomwareEventCollections {

}

/*********************************************
* TenantAdminRecentActionPayload
**********************************************/
export interface TenantAdminRecentActionPayload {
	adminActionId?: string;
	adminActionSource?: string;
	adminActionStatus?: string;
	adminActionType?: string;
	correlationId?: any;
	createdTime?: any;
	isPartOfBulkUpdate?: boolean;
	key?: string;
	name?: string;
	newValue?: string;
	oldValue?: string;
	url?: string;
	userEmail?: string;
}

/*********************************************
* TenantAdminRecentActionPayloadCollections
**********************************************/
export interface TenantAdminRecentActionPayloadCollections {

}

/*********************************************
* TenantAdminRecentAction
**********************************************/
export interface TenantAdminRecentAction {
	adminActionId?: string;
	adminActionSource?: number;
	adminActionStatus?: number;
	adminActionType?: number;
	correlationId?: any;
	createdTime?: any;
	isPartOfBulkUpdate?: boolean;
	key?: string;
	name?: string;
	newValue?: string;
	oldValue?: string;
	type?: string;
	url?: string;
	userEmail?: string;
}

/*********************************************
* TenantAdminRecentActionCollections
**********************************************/
export interface TenantAdminRecentActionCollections {

}

/*********************************************
* UnifiedAuditRecord
**********************************************/
export interface UnifiedAuditRecord {
	AuditData?: Microsoft.SharePoint.Administration.TenantAdmin.AuditData;
	CreationDate?: any;
	Operation?: string;
	RawAuditData?: string;
	RecordId?: any;
	RecordType?: number;
	UserId?: string;
}

/*********************************************
* UnifiedAuditRecordCollections
**********************************************/
export interface UnifiedAuditRecordCollections {

}
