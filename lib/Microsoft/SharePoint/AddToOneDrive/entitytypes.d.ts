import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* MountService
**********************************************/
export interface MountService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MountServiceCollections
**********************************************/
export interface MountServiceCollections {

}

/*********************************************
* PlacesEntity
**********************************************/
export interface PlacesEntity {
	actionDate?: any;
	userEntity?: Microsoft.SharePoint.AddToOneDrive.PlacesUserEntity;
}

/*********************************************
* PlacesEntityCollections
**********************************************/
export interface PlacesEntityCollections {

}

/*********************************************
* IplacesInformation
**********************************************/
export interface IplacesInformation extends placesInformationCollections, placesInformationMethods, Base.IBaseQuery<placesInformation, IplacesInformationQuery> {

}

/*********************************************
* IplacesInformationCollection
**********************************************/
export interface IplacesInformationCollection extends Base.IBaseResults<placesInformation> {
	done?: (resolve: (value?: Array<placesInformation>) => void) => void;
}

/*********************************************
* IplacesInformationQueryCollection
**********************************************/
export interface IplacesInformationQueryCollection extends Base.IBaseResults<placesInformationOData> {
	done?: (resolve: (value?: Array<placesInformationOData>) => void) => void;
}

/*********************************************
* IplacesInformationQuery
**********************************************/
export interface IplacesInformationQuery extends placesInformationOData, placesInformationMethods {

}

/*********************************************
* placesInformation
**********************************************/
export interface placesInformation extends Base.IBaseResult, placesInformationProps, placesInformationCollections, placesInformationMethods {

}

/*********************************************
* placesInformationProps
**********************************************/
export interface placesInformationProps {
	inCallersDrive?: string;
	placesCount?: string;
	itemSourceListTitle?: string;
	itemSourcePath?: string;
	itemSourceSiteTemplateId?: string;
	itemSourceSiteTitle?: string;
}

/*********************************************
* placesInformationPropMethods
**********************************************/
export interface placesInformationPropMethods {

}

/*********************************************
* placesInformationCollections
**********************************************/
export interface placesInformationCollections extends placesInformationPropMethods {
	places(): Base.IBaseCollection<Microsoft.SharePoint.AddToOneDrive.PlacesEntity>;
	places(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.AddToOneDrive.PlacesEntity> & Microsoft.SharePoint.AddToOneDrive.PlacesEntityCollections;
}

/*********************************************
* placesInformationOData
**********************************************/
export interface placesInformationOData extends Base.IBaseResult, placesInformationProps, placesInformationMethods {
	places: Base.IBaseResults<Microsoft.SharePoint.AddToOneDrive.PlacesEntity>;
}

/*********************************************
* placesInformationMethods
**********************************************/
export interface placesInformationMethods {

}
