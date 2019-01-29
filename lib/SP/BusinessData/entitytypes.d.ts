import { SP } from "../../";

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
* EntityIdentifierMethods<T = any>
**********************************************/
export interface EntityIdentifierMethods<T = any> {
	containsLocalizedDisplayName(): T;
	getDefaultDisplayName(): T;
	getLocalizedDisplayName(): T;
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
* TypeDescriptorMethods<T = any>
**********************************************/
export interface TypeDescriptorMethods<T = any> {
	containsLocalizedDisplayName(): T;
	getChildTypeDescriptors(): T;
	getDefaultDisplayName(): T;
	getLocalizedDisplayName(): T;
	getParentTypeDescriptor(): T;
	isLeaf(): T;
	isRoot(): T;
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
* EntityMethods<T = any>
**********************************************/
export interface EntityMethods<T = any> {
	getAssociationView(associationName?: string): T;
	getCreatorView(methodInstanceName?: string): T;
	getDefaultSpecificFinderView(): T;
	getFilters(methodInstanceName?: string): T;
	getFinderView(methodInstanceName?: string): T;
	getIdentifierCount(): T;
	getIdentifiers(): T;
	getLobSystem(): T;
	getSpecificFinderView(specificFinderName?: string): T;
	getUpdaterView(updaterName?: string): T;
}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem {
	Name?: string;
}

/*********************************************
* LobSystemMethods<T = any>
**********************************************/
export interface LobSystemMethods<T = any> {
	getLobSystemInstances(): T;
}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MethodExecutionResultCollections<T = any>
**********************************************/
export interface MethodExecutionResultCollections<T = any> {
	ReturnParameterCollection(): T;
}

/*********************************************
* MethodExecutionResultQuery
**********************************************/
export interface MethodExecutionResultQuery {
	ReturnParameterCollection(): T;
}

/*********************************************
* EntityView
**********************************************/
export interface EntityView {
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* EntityViewCollections<T = any>
**********************************************/
export interface EntityViewCollections<T = any> {
	Fields(): T;
}

/*********************************************
* EntityViewQuery
**********************************************/
export interface EntityViewQuery {
	Fields(): T;
}

/*********************************************
* EntityViewMethods<T = any>
**********************************************/
export interface EntityViewMethods<T = any> {
	getDefaultValues(): T;
	getType(fieldDotNotation?: string): T;
	getTypeDescriptor(fieldDotNotation?: string): T;
	getXmlSchema(): T;
}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppBdcCatalogMethods<T = any>
**********************************************/
export interface AppBdcCatalogMethods<T = any> {
	getConnectionId(lobSystemName?: string, lobSystemInstanceName?: string): T;
	getEntity(namespace?: string, name?: string): T;
	getLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string): T;
	getLobSystemProperty(lobSystemName?: string, propertyName?: string): T;
	getPermissibleConnections(): T;
	setConnectionId(lobSystemName?: string, lobSystemInstanceName?: string, connectionId?: string): T;
	setLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string, propertyValue?: string): T;
	setLobSystemProperty(lobSystemName?: string, propertyName?: string, propertyValue?: string): T;
}
