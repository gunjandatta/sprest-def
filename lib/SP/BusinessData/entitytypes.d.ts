

/*********************************************
* EntityField
**********************************************/
export interface EntityField {
	ContainsLocalizedDisplayName?: boolean;
	DefaultDisplayName?: string;
	LocalizedDisplayName?: string;
	Name?: string;
}

/*********************************************
* Filter
**********************************************/
export interface Filter {
	DefaultDisplayName?: string;
	FilterField?: string;
	FilterType?: string;
	LocalizedDisplayName?: string;
	Name?: string;
	ValueCount?: number;
}

/*********************************************
* EntityIdentifier
**********************************************/
export interface EntityIdentifier {
	IdentifierType?: string;
	Name?: string;
}

/*********************************************
* LobSystemInstance
**********************************************/
export interface LobSystemInstance {
	Name?: string;
}

/*********************************************
* TypeDescriptor
**********************************************/
export interface TypeDescriptor {
	ContainsReadOnly?: boolean;
	IsCollection?: boolean;
	IsReadOnly?: boolean;
	Name?: string;
	TypeName?: string;
}

/*********************************************
* Entity
**********************************************/
export interface Entity {
	EstimatedInstanceCount?: number;
	Name?: string;
	Namespace?: string;
}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem {
	Name?: string;
}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult {
	ReturnParameterCollection?: () => SP.BusinessData.Runtime.SP_BusinessData_MethodExecutionResult_ReturnParameterCollection_SP_BusinessData_Runtime_EntityFieldValueDictionary_ReturnParameterCollectionPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityView
**********************************************/
export interface EntityView {
	Fields?: () => SP.BusinessData.SP_BusinessData_EntityView_Fields_SP_BusinessData_EntityField_FieldsPartner;
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
