import { Base } from "../../../";

/*********************************************
* IAddNoLiveBlobsInOdcServiceStateApi
**********************************************/
export interface IAddNoLiveBlobsInOdcServiceStateApi extends AddNoLiveBlobsInOdcServiceStateApiCollections, AddNoLiveBlobsInOdcServiceStateApiMethods, Base.IBaseQuery<AddNoLiveBlobsInOdcServiceStateApi, IAddNoLiveBlobsInOdcServiceStateApiQuery> {

}

/*********************************************
* IAddNoLiveBlobsInOdcServiceStateApiCollection
**********************************************/
export interface IAddNoLiveBlobsInOdcServiceStateApiCollection extends Base.IBaseResults<AddNoLiveBlobsInOdcServiceStateApi> {
	done?: (resolve: (value?: Array<AddNoLiveBlobsInOdcServiceStateApi>) => void) => void;
}

/*********************************************
* IAddNoLiveBlobsInOdcServiceStateApiQueryCollection
**********************************************/
export interface IAddNoLiveBlobsInOdcServiceStateApiQueryCollection extends Base.IBaseResults<AddNoLiveBlobsInOdcServiceStateApiOData> {
	done?: (resolve: (value?: Array<AddNoLiveBlobsInOdcServiceStateApiOData>) => void) => void;
}

/*********************************************
* IAddNoLiveBlobsInOdcServiceStateApiQuery
**********************************************/
export interface IAddNoLiveBlobsInOdcServiceStateApiQuery extends AddNoLiveBlobsInOdcServiceStateApiOData, AddNoLiveBlobsInOdcServiceStateApiMethods {

}

/*********************************************
* AddNoLiveBlobsInOdcServiceStateApi
**********************************************/
export interface AddNoLiveBlobsInOdcServiceStateApi extends Base.IBaseResult, AddNoLiveBlobsInOdcServiceStateApiProps, AddNoLiveBlobsInOdcServiceStateApiCollections, AddNoLiveBlobsInOdcServiceStateApiMethods {

}

/*********************************************
* AddNoLiveBlobsInOdcServiceStateApiProps
**********************************************/
export interface AddNoLiveBlobsInOdcServiceStateApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AddNoLiveBlobsInOdcServiceStateApiPropMethods
**********************************************/
export interface AddNoLiveBlobsInOdcServiceStateApiPropMethods {

}

/*********************************************
* AddNoLiveBlobsInOdcServiceStateApiCollections
**********************************************/
export interface AddNoLiveBlobsInOdcServiceStateApiCollections extends AddNoLiveBlobsInOdcServiceStateApiPropMethods {

}

/*********************************************
* AddNoLiveBlobsInOdcServiceStateApiOData
**********************************************/
export interface AddNoLiveBlobsInOdcServiceStateApiOData extends Base.IBaseResult, AddNoLiveBlobsInOdcServiceStateApiProps, AddNoLiveBlobsInOdcServiceStateApiMethods {

}

/*********************************************
* AddNoLiveBlobsInOdcServiceStateApiMethods
**********************************************/
export interface AddNoLiveBlobsInOdcServiceStateApiMethods {
	addState(): Base.IBaseExecution<any>;
}

/*********************************************
* IConsumerPermissions
**********************************************/
export interface IConsumerPermissions extends ConsumerPermissionsCollections, ConsumerPermissionsMethods, Base.IBaseQuery<ConsumerPermissions, IConsumerPermissionsQuery> {

}

/*********************************************
* IConsumerPermissionsCollection
**********************************************/
export interface IConsumerPermissionsCollection extends Base.IBaseResults<ConsumerPermissions> {
	done?: (resolve: (value?: Array<ConsumerPermissions>) => void) => void;
}

/*********************************************
* IConsumerPermissionsQueryCollection
**********************************************/
export interface IConsumerPermissionsQueryCollection extends Base.IBaseResults<ConsumerPermissionsOData> {
	done?: (resolve: (value?: Array<ConsumerPermissionsOData>) => void) => void;
}

/*********************************************
* IConsumerPermissionsQuery
**********************************************/
export interface IConsumerPermissionsQuery extends ConsumerPermissionsOData, ConsumerPermissionsMethods {

}

/*********************************************
* ConsumerPermissions
**********************************************/
export interface ConsumerPermissions extends Base.IBaseResult, ConsumerPermissionsProps, ConsumerPermissionsCollections, ConsumerPermissionsMethods {

}

/*********************************************
* ConsumerPermissionsProps
**********************************************/
export interface ConsumerPermissionsProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ConsumerPermissionsPropMethods
**********************************************/
export interface ConsumerPermissionsPropMethods {

}

/*********************************************
* ConsumerPermissionsCollections
**********************************************/
export interface ConsumerPermissionsCollections extends ConsumerPermissionsPropMethods {

}

/*********************************************
* ConsumerPermissionsOData
**********************************************/
export interface ConsumerPermissionsOData extends Base.IBaseResult, ConsumerPermissionsProps, ConsumerPermissionsMethods {

}

/*********************************************
* ConsumerPermissionsMethods
**********************************************/
export interface ConsumerPermissionsMethods {
	grantConsumerSitePermissions(): Base.IBaseExecution<any>;
	revokeConsumerSitePermissions(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationCompleteStateApi
**********************************************/
export interface IMigrationCompleteStateApi extends MigrationCompleteStateApiCollections, MigrationCompleteStateApiMethods, Base.IBaseQuery<MigrationCompleteStateApi, IMigrationCompleteStateApiQuery> {

}

/*********************************************
* IMigrationCompleteStateApiCollection
**********************************************/
export interface IMigrationCompleteStateApiCollection extends Base.IBaseResults<MigrationCompleteStateApi> {
	done?: (resolve: (value?: Array<MigrationCompleteStateApi>) => void) => void;
}

/*********************************************
* IMigrationCompleteStateApiQueryCollection
**********************************************/
export interface IMigrationCompleteStateApiQueryCollection extends Base.IBaseResults<MigrationCompleteStateApiOData> {
	done?: (resolve: (value?: Array<MigrationCompleteStateApiOData>) => void) => void;
}

/*********************************************
* IMigrationCompleteStateApiQuery
**********************************************/
export interface IMigrationCompleteStateApiQuery extends MigrationCompleteStateApiOData, MigrationCompleteStateApiMethods {

}

/*********************************************
* MigrationCompleteStateApi
**********************************************/
export interface MigrationCompleteStateApi extends Base.IBaseResult, MigrationCompleteStateApiProps, MigrationCompleteStateApiCollections, MigrationCompleteStateApiMethods {

}

/*********************************************
* MigrationCompleteStateApiProps
**********************************************/
export interface MigrationCompleteStateApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MigrationCompleteStateApiPropMethods
**********************************************/
export interface MigrationCompleteStateApiPropMethods {

}

/*********************************************
* MigrationCompleteStateApiCollections
**********************************************/
export interface MigrationCompleteStateApiCollections extends MigrationCompleteStateApiPropMethods {

}

/*********************************************
* MigrationCompleteStateApiOData
**********************************************/
export interface MigrationCompleteStateApiOData extends Base.IBaseResult, MigrationCompleteStateApiProps, MigrationCompleteStateApiMethods {

}

/*********************************************
* MigrationCompleteStateApiMethods
**********************************************/
export interface MigrationCompleteStateApiMethods {
	addState(): Base.IBaseExecution<any>;
	isDoclibContributorOwnerEnabled(): Base.IBaseExecution<boolean>;
	isSuspended(): Base.IBaseExecution<boolean>;
}

/*********************************************
* IOdcMetadataCleanedUpApi
**********************************************/
export interface IOdcMetadataCleanedUpApi extends OdcMetadataCleanedUpApiCollections, OdcMetadataCleanedUpApiMethods, Base.IBaseQuery<OdcMetadataCleanedUpApi, IOdcMetadataCleanedUpApiQuery> {

}

/*********************************************
* IOdcMetadataCleanedUpApiCollection
**********************************************/
export interface IOdcMetadataCleanedUpApiCollection extends Base.IBaseResults<OdcMetadataCleanedUpApi> {
	done?: (resolve: (value?: Array<OdcMetadataCleanedUpApi>) => void) => void;
}

/*********************************************
* IOdcMetadataCleanedUpApiQueryCollection
**********************************************/
export interface IOdcMetadataCleanedUpApiQueryCollection extends Base.IBaseResults<OdcMetadataCleanedUpApiOData> {
	done?: (resolve: (value?: Array<OdcMetadataCleanedUpApiOData>) => void) => void;
}

/*********************************************
* IOdcMetadataCleanedUpApiQuery
**********************************************/
export interface IOdcMetadataCleanedUpApiQuery extends OdcMetadataCleanedUpApiOData, OdcMetadataCleanedUpApiMethods {

}

/*********************************************
* OdcMetadataCleanedUpApi
**********************************************/
export interface OdcMetadataCleanedUpApi extends Base.IBaseResult, OdcMetadataCleanedUpApiProps, OdcMetadataCleanedUpApiCollections, OdcMetadataCleanedUpApiMethods {

}

/*********************************************
* OdcMetadataCleanedUpApiProps
**********************************************/
export interface OdcMetadataCleanedUpApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OdcMetadataCleanedUpApiPropMethods
**********************************************/
export interface OdcMetadataCleanedUpApiPropMethods {

}

/*********************************************
* OdcMetadataCleanedUpApiCollections
**********************************************/
export interface OdcMetadataCleanedUpApiCollections extends OdcMetadataCleanedUpApiPropMethods {

}

/*********************************************
* OdcMetadataCleanedUpApiOData
**********************************************/
export interface OdcMetadataCleanedUpApiOData extends Base.IBaseResult, OdcMetadataCleanedUpApiProps, OdcMetadataCleanedUpApiMethods {

}

/*********************************************
* OdcMetadataCleanedUpApiMethods
**********************************************/
export interface OdcMetadataCleanedUpApiMethods {
	addState(): Base.IBaseExecution<any>;
}
