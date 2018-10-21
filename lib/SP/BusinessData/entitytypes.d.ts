

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
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityView
**********************************************/
export interface EntityView {
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
