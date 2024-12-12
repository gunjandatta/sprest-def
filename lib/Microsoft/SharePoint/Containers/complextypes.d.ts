import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* SPActiveContainerCollection
**********************************************/
export interface SPActiveContainerCollection {
	ContainerCollection?: { results: Array<Microsoft.SharePoint.Containers.SPActiveContainerProperties> };
	PagingToken?: string;
}

/*********************************************
* SPActiveContainerCollectionCollections
**********************************************/
export interface SPActiveContainerCollectionCollections {

}

/*********************************************
* SPActiveContainerProperties
**********************************************/
export interface SPActiveContainerProperties {
	ApplicationName?: string;
	ContainerApiUrl?: string;
	ContainerId?: string;
	ContainerName?: string;
	ContainerSiteUrl?: string;
	ContainerTypeId?: any;
	CreatedBy?: string;
	CreatedOn?: string;
	DeletedOn?: string;
	Description?: string;
	OpticalCharacterRecognitionEnabled?: boolean;
	Owners?: { results: Array<Microsoft.SharePoint.Containers.SPActiveContainerMemberProperties> };
	OwnersCount?: number;
	OwnershipType?: string;
	OwningApplicationId?: any;
	PrincipalOwnerIdentifier?: string;
	PublisherName?: string;
	Readers?: { results: Array<Microsoft.SharePoint.Containers.SPActiveContainerMemberProperties> };
	SensitivityLabel?: string;
	Status?: string;
	StorageUsed?: number;
	Writers?: { results: Array<Microsoft.SharePoint.Containers.SPActiveContainerMemberProperties> };
}

/*********************************************
* SPActiveContainerPropertiesCollections
**********************************************/
export interface SPActiveContainerPropertiesCollections {

}

/*********************************************
* SPActiveContainerMemberProperties
**********************************************/
export interface SPActiveContainerMemberProperties {

}

/*********************************************
* SPActiveContainerMemberPropertiesCollections
**********************************************/
export interface SPActiveContainerMemberPropertiesCollections {

}
