import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ISPAllOrgSGManager
**********************************************/
export interface ISPAllOrgSGManager extends SPAllOrgSGManagerCollections, SPAllOrgSGManagerMethods, Base.IBaseQuery<SPAllOrgSGManager, ISPAllOrgSGManagerQuery> {

}

/*********************************************
* ISPAllOrgSGManagerCollection
**********************************************/
export interface ISPAllOrgSGManagerCollection extends Base.IBaseResults<SPAllOrgSGManager> {
	done?: (resolve: (value?: Array<SPAllOrgSGManager>) => void) => void;
}

/*********************************************
* ISPAllOrgSGManagerQueryCollection
**********************************************/
export interface ISPAllOrgSGManagerQueryCollection extends Base.IBaseResults<SPAllOrgSGManagerOData> {
	done?: (resolve: (value?: Array<SPAllOrgSGManagerOData>) => void) => void;
}

/*********************************************
* ISPAllOrgSGManagerQuery
**********************************************/
export interface ISPAllOrgSGManagerQuery extends SPAllOrgSGManagerOData, SPAllOrgSGManagerMethods {

}

/*********************************************
* SPAllOrgSGManager
**********************************************/
export interface SPAllOrgSGManager extends Base.IBaseResult, SPAllOrgSGManagerProps, SPAllOrgSGManagerCollections, SPAllOrgSGManagerMethods {

}

/*********************************************
* SPAllOrgSGManagerProps
**********************************************/
export interface SPAllOrgSGManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAllOrgSGManagerPropMethods
**********************************************/
export interface SPAllOrgSGManagerPropMethods {

}

/*********************************************
* SPAllOrgSGManagerCollections
**********************************************/
export interface SPAllOrgSGManagerCollections extends SPAllOrgSGManagerPropMethods {

}

/*********************************************
* SPAllOrgSGManagerOData
**********************************************/
export interface SPAllOrgSGManagerOData extends Base.IBaseResult, SPAllOrgSGManagerProps, SPAllOrgSGManagerMethods {

}

/*********************************************
* SPAllOrgSGManagerMethods
**********************************************/
export interface SPAllOrgSGManagerMethods {
	createAllOrgSecurityGroup(): Base.IBaseExecution<Microsoft.SharePoint.IdentityModel.SPAllOrgSGMetadata>;
}

/*********************************************
* SPAllOrgSGMetadata
**********************************************/
export interface SPAllOrgSGMetadata {
	AllOrganizationSecurityGroupId?: any;
	CreationTimeInUtc?: any;
	SiteSubscriptionId?: any;
	StatusCode?: number;
}

/*********************************************
* SPAllOrgSGMetadataCollections
**********************************************/
export interface SPAllOrgSGMetadataCollections {

}

/*********************************************
* SPSyntexRubyAPIController
**********************************************/
export interface SPSyntexRubyAPIController {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSyntexRubyAPIControllerCollections
**********************************************/
export interface SPSyntexRubyAPIControllerCollections {

}
