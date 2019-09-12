import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { Edm } from "../../../../";

/*********************************************
* ISPMachineLearningHub
**********************************************/
export interface ISPMachineLearningHub extends SPMachineLearningHubCollections, SPMachineLearningHubMethods, Base.IBaseQuery<ISPMachineLearningHubQuery> {

}

/*********************************************
* ISPMachineLearningHubCollection
**********************************************/
export interface ISPMachineLearningHubCollection extends Base.IBaseResults<SPMachineLearningHub> {
	done?: (resolve: (value?: Array<SPMachineLearningHub>) => void) => void;
}

/*********************************************
* ISPMachineLearningHubQueryCollection
**********************************************/
export interface ISPMachineLearningHubQueryCollection extends Base.IBaseResults<SPMachineLearningHubOData> {
	done?: (resolve: (value?: Array<SPMachineLearningHubOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningHubQuery
**********************************************/
export interface ISPMachineLearningHubQuery extends SPMachineLearningHubOData, SPMachineLearningHubMethods {

}

/*********************************************
* SPMachineLearningHub
**********************************************/
export interface SPMachineLearningHub extends Base.IBaseResult, SPMachineLearningHubProps, SPMachineLearningHubCollections, SPMachineLearningHubMethods {

}

/*********************************************
* SPMachineLearningHubProps
**********************************************/
export interface SPMachineLearningHubProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPMachineLearningHubPropMethods
**********************************************/
export interface SPMachineLearningHubPropMethods {

}

/*********************************************
* SPMachineLearningHubCollections
**********************************************/
export interface SPMachineLearningHubCollections extends SPMachineLearningHubPropMethods {
	Models(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollectionMethods;
	Models(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
	Publications(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollectionMethods;
	Publications(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
}

/*********************************************
* SPMachineLearningHubOData
**********************************************/
export interface SPMachineLearningHubOData extends Base.IBaseResult, SPMachineLearningHubProps, SPMachineLearningHubMethods {
	Models: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollectionMethods;
	Publications: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollectionMethods;
}

/*********************************************
* SPMachineLearningHubMethods
**********************************************/
export interface SPMachineLearningHubMethods {

}

/*********************************************
* ISPMachineLearningModel
**********************************************/
export interface ISPMachineLearningModel extends SPMachineLearningModelCollections, SPMachineLearningModelMethods, Base.IBaseQuery<ISPMachineLearningModelQuery> {

}

/*********************************************
* ISPMachineLearningModelCollection
**********************************************/
export interface ISPMachineLearningModelCollection extends Base.IBaseResults<SPMachineLearningModel>, SPMachineLearningModelCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningModel>) => void) => void;
}

/*********************************************
* ISPMachineLearningModelQueryCollection
**********************************************/
export interface ISPMachineLearningModelQueryCollection extends Base.IBaseResults<SPMachineLearningModelOData>, SPMachineLearningModelCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningModelOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningModelQuery
**********************************************/
export interface ISPMachineLearningModelQuery extends SPMachineLearningModelOData, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModel
**********************************************/
export interface SPMachineLearningModel extends Base.IBaseResult, SPMachineLearningModelProps, SPMachineLearningModelCollections, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModelProps
**********************************************/
export interface SPMachineLearningModelProps {
	Accuracy?: Edm.Single;
	ContentTypeGroup?: string;
	ContentTypeId?: string;
	ContentTypeName?: string;
	DriveId?: string;
	Explanations?: string;
	ID?: number;
	LastTrained?: any;
	ObjectId?: string;
	Schemas?: string;
	UniqueId?: any;
}

/*********************************************
* SPMachineLearningModelPropMethods
**********************************************/
export interface SPMachineLearningModelPropMethods {

}

/*********************************************
* SPMachineLearningModelCollections
**********************************************/
export interface SPMachineLearningModelCollections extends SPMachineLearningModelPropMethods {

}

/*********************************************
* SPMachineLearningModelCollectionMethods
**********************************************/
export interface SPMachineLearningModelCollectionMethods {
	getByTitle(title?: string): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
}

/*********************************************
* SPMachineLearningModelOData
**********************************************/
export interface SPMachineLearningModelOData extends Base.IBaseResult, SPMachineLearningModelProps, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModelMethods
**********************************************/
export interface SPMachineLearningModelMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ISPMachineLearningPublication
**********************************************/
export interface ISPMachineLearningPublication extends SPMachineLearningPublicationCollections, SPMachineLearningPublicationMethods, Base.IBaseQuery<ISPMachineLearningPublicationQuery> {

}

/*********************************************
* ISPMachineLearningPublicationCollection
**********************************************/
export interface ISPMachineLearningPublicationCollection extends Base.IBaseResults<SPMachineLearningPublication>, SPMachineLearningPublicationCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningPublication>) => void) => void;
}

/*********************************************
* ISPMachineLearningPublicationQueryCollection
**********************************************/
export interface ISPMachineLearningPublicationQueryCollection extends Base.IBaseResults<SPMachineLearningPublicationOData>, SPMachineLearningPublicationCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningPublicationOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningPublicationQuery
**********************************************/
export interface ISPMachineLearningPublicationQuery extends SPMachineLearningPublicationOData, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublication
**********************************************/
export interface SPMachineLearningPublication extends Base.IBaseResult, SPMachineLearningPublicationProps, SPMachineLearningPublicationCollections, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublicationProps
**********************************************/
export interface SPMachineLearningPublicationProps {
	DriveId?: string;
	ID?: number;
	ModelId?: number;
	ModelUniqueId?: any;
	ModelVersion?: string;
	ObjectId?: string;
	TargetLibraryUrl?: string;
	UniqueId?: any;
}

/*********************************************
* SPMachineLearningPublicationPropMethods
**********************************************/
export interface SPMachineLearningPublicationPropMethods {

}

/*********************************************
* SPMachineLearningPublicationCollections
**********************************************/
export interface SPMachineLearningPublicationCollections extends SPMachineLearningPublicationPropMethods {

}

/*********************************************
* SPMachineLearningPublicationCollectionMethods
**********************************************/
export interface SPMachineLearningPublicationCollectionMethods {
	getByModelUniqueId(modelUniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
}

/*********************************************
* SPMachineLearningPublicationOData
**********************************************/
export interface SPMachineLearningPublicationOData extends Base.IBaseResult, SPMachineLearningPublicationProps, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublicationMethods
**********************************************/
export interface SPMachineLearningPublicationMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* SPMachineLearningPublicationsEntityData
**********************************************/
export interface SPMachineLearningPublicationsEntityData {
	Comment?: string;
	Publications?: { results: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData> };
}

/*********************************************
* SPMachineLearningPublicationsEntityDataCollections
**********************************************/
export interface SPMachineLearningPublicationsEntityDataCollections {

}
