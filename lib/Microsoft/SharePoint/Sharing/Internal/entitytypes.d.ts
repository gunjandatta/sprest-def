import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ISharingRestrictions
**********************************************/
export interface ISharingRestrictions extends SharingRestrictionsCollections, SharingRestrictionsMethods, Base.IBaseQuery<SharingRestrictions, ISharingRestrictionsQuery> {

}

/*********************************************
* ISharingRestrictionsCollection
**********************************************/
export interface ISharingRestrictionsCollection extends Base.IBaseResults<SharingRestrictions> {
	done?: (resolve: (value?: Array<SharingRestrictions>) => void) => void;
}

/*********************************************
* ISharingRestrictionsQueryCollection
**********************************************/
export interface ISharingRestrictionsQueryCollection extends Base.IBaseResults<SharingRestrictionsOData> {
	done?: (resolve: (value?: Array<SharingRestrictionsOData>) => void) => void;
}

/*********************************************
* ISharingRestrictionsQuery
**********************************************/
export interface ISharingRestrictionsQuery extends SharingRestrictionsOData, SharingRestrictionsMethods {

}

/*********************************************
* SharingRestrictions
**********************************************/
export interface SharingRestrictions extends Base.IBaseResult, SharingRestrictionsProps, SharingRestrictionsCollections, SharingRestrictionsMethods {

}

/*********************************************
* SharingRestrictionsProps
**********************************************/
export interface SharingRestrictionsProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	anonymousLinkUseLimit?: Microsoft.SharePoint.Sharing.Internal.CAnonymousLinkUseLimit;
	externalSharingEnforcement?: Microsoft.SharePoint.Sharing.Internal.CExternalSharingEnforcement;
	externalSharingThrottling?: Microsoft.SharePoint.Sharing.Internal.CExternalSharingThrottling;
}

/*********************************************
* SharingRestrictionsPropMethods
**********************************************/
export interface SharingRestrictionsPropMethods {

}

/*********************************************
* SharingRestrictionsCollections
**********************************************/
export interface SharingRestrictionsCollections extends SharingRestrictionsPropMethods {

}

/*********************************************
* SharingRestrictionsOData
**********************************************/
export interface SharingRestrictionsOData extends Base.IBaseResult, SharingRestrictionsProps, SharingRestrictionsMethods {

}

/*********************************************
* SharingRestrictionsMethods
**********************************************/
export interface SharingRestrictionsMethods {
	update(): Base.IBaseExecution<any>;
}
