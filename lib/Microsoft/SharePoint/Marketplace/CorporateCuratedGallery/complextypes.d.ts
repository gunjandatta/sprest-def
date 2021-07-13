import { Base } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* AppUpgradeAvailability
**********************************************/
export interface AppUpgradeAvailability {
	AssetId?: string;
	IsUpgradeAvailable?: boolean;
}

/*********************************************
* AppUpgradeAvailabilityCollections
**********************************************/
export interface AppUpgradeAvailabilityCollections {

}

/*********************************************
* SPStoreAppCreateByIdInformation
**********************************************/
export interface SPStoreAppCreateByIdInformation {
	CMU?: string;
	Overwrite?: boolean;
	SkipFeatureDeployment?: boolean;
	StoreAssetId?: string;
}

/*********************************************
* SPStoreAppCreateByIdInformationCollections
**********************************************/
export interface SPStoreAppCreateByIdInformationCollections {

}

/*********************************************
* StoreAppCreationInformation
**********************************************/
export interface StoreAppCreationInformation {
	IconUrl?: string;
	Publisher?: string;
	ShortDescription?: string;
	StoreAssetId?: string;
}

/*********************************************
* StoreAppCreationInformationCollections
**********************************************/
export interface StoreAppCreationInformationCollections {

}

/*********************************************
* SPStoreAppRequestInformation
**********************************************/
export interface SPStoreAppRequestInformation {
	AssetId?: string;
	BillingMarket?: string;
	ContentMarket?: string;
	InstallationSiteId?: any;
	InstallationWebId?: any;
	Justification?: string;
	RequestType?: string;
}

/*********************************************
* SPStoreAppRequestInformationCollections
**********************************************/
export interface SPStoreAppRequestInformationCollections {

}

/*********************************************
* SPStoreAppResponseInformation
**********************************************/
export interface SPStoreAppResponseInformation {
	ItemId?: string;
	ListId?: string;
}

/*********************************************
* SPStoreAppResponseInformationCollections
**********************************************/
export interface SPStoreAppResponseInformationCollections {

}
