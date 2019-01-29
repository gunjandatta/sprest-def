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
* EntityIdentifierMethods
**********************************************/
export interface EntityIdentifierMethods {
	containsLocalizedDisplayName<T=boolean>(): T;
	getDefaultDisplayName<T=string>(): T;
	getLocalizedDisplayName<T=string>(): T;
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
* TypeDescriptorMethods
**********************************************/
export interface TypeDescriptorMethods {
	containsLocalizedDisplayName<T=boolean>(): T;
	getChildTypeDescriptors<T=Array<SP.BusinessData.TypeDescriptor>>(): T;
	getDefaultDisplayName<T=string>(): T;
	getLocalizedDisplayName<T=string>(): T;
	getParentTypeDescriptor<T=SP.BusinessData.TypeDescriptor>(): T;
	isLeaf<T=boolean>(): T;
	isRoot<T=boolean>(): T;
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
* EntityMethods
**********************************************/
export interface EntityMethods {
	getAssociationView<T=SP.BusinessData.EntityView>(associationName?: string): T;
	getCreatorView<T=SP.BusinessData.EntityView>(methodInstanceName?: string): T;
	getDefaultSpecificFinderView<T=SP.BusinessData.EntityView>(): T;
	getFilters<T=Array<SP.BusinessData.Filter>>(methodInstanceName?: string): T;
	getFinderView<T=SP.BusinessData.EntityView>(methodInstanceName?: string): T;
	getIdentifierCount<T=number>(): T;
	getIdentifiers<T=Array<SP.BusinessData.EntityIdentifier>>(): T;
	getLobSystem<T=SP.BusinessData.LobSystem>(): T;
	getSpecificFinderView<T=SP.BusinessData.EntityView>(specificFinderName?: string): T;
	getUpdaterView<T=SP.BusinessData.EntityView>(updaterName?: string): T;
}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem {
	Name?: string;
}

/*********************************************
* LobSystemMethods
**********************************************/
export interface LobSystemMethods {
	getLobSystemInstances<T=Array<SP.BusinessData.LobSystemInstance>>(): T;
}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MethodExecutionResultCollections
**********************************************/
export interface MethodExecutionResultCollections {
	ReturnParameterCollection<T=Array<SP.BusinessData.Runtime.EntityFieldValueDictionary>>(): T;
}

/*********************************************
* MethodExecutionResultQuery
**********************************************/
export interface MethodExecutionResultQuery {
	ReturnParameterCollection<T=Array<SP.BusinessData.Runtime.EntityFieldValueDictionary>>(): T;
}

/*********************************************
* EntityView
**********************************************/
export interface EntityView {
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* EntityViewCollections
**********************************************/
export interface EntityViewCollections {
	Fields<T=Array<SP.BusinessData.EntityField>>(): T;
}

/*********************************************
* EntityViewQuery
**********************************************/
export interface EntityViewQuery {
	Fields<T=Array<SP.BusinessData.EntityField>>(): T;
}

/*********************************************
* EntityViewMethods
**********************************************/
export interface EntityViewMethods {
	getDefaultValues<T=SP.BusinessData.Runtime.EntityFieldValueDictionary>(): T;
	getType<T=string>(fieldDotNotation?: string): T;
	getTypeDescriptor<T=SP.BusinessData.TypeDescriptor>(fieldDotNotation?: string): T;
	getXmlSchema<T=string>(): T;
}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppBdcCatalogMethods
**********************************************/
export interface AppBdcCatalogMethods {
	getConnectionId<T=string>(lobSystemName?: string, lobSystemInstanceName?: string): T;
	getEntity<T=SP.BusinessData.Entity>(namespace?: string, name?: string): T;
	getLobSystemInstanceProperty<T=string>(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string): T;
	getLobSystemProperty<T=string>(lobSystemName?: string, propertyName?: string): T;
	getPermissibleConnections<T=Array<string>>(): T;
	setConnectionId<T=void>(lobSystemName?: string, lobSystemInstanceName?: string, connectionId?: string): T;
	setLobSystemInstanceProperty<T=void>(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string, propertyValue?: string): T;
	setLobSystemProperty<T=void>(lobSystemName?: string, propertyName?: string, propertyValue?: string): T;
}
