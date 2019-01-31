import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";
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
* IEntityIdentifier
**********************************************/
export interface IEntityIdentifier extends EntityIdentifierCollections,EntityIdentifierMethods,IBaseQuery<IEntityIdentifierQuery> {

}

/*********************************************
* IEntityIdentifierQuery
**********************************************/
export interface IEntityIdentifierQuery extends EntityIdentifierQuery,EntityIdentifierMethods {

}

/*********************************************
* EntityIdentifier
**********************************************/
export interface EntityIdentifier extends EntityIdentifierCollections, EntityIdentifierMethods {
	IdentifierType?: string;
	Name?: string;
}

/*********************************************
* EntityIdentifierProps
**********************************************/
export interface EntityIdentifierProps {

}

/*********************************************
* EntityIdentifierCollections
**********************************************/
export interface EntityIdentifierCollections extends EntityIdentifierProps {

}

/*********************************************
* EntityIdentifierQuery
**********************************************/
export interface EntityIdentifierQuery extends EntityIdentifierProps {

}

/*********************************************
* EntityIdentifierMethods
**********************************************/
export interface EntityIdentifierMethods {
	containsLocalizedDisplayName(): IBaseExecution<boolean>;
	getDefaultDisplayName(): IBaseExecution<string>;
	getLocalizedDisplayName(): IBaseExecution<string>;
}

/*********************************************
* LobSystemInstance
**********************************************/
export interface LobSystemInstance {
	Name?: string;
}

/*********************************************
* ITypeDescriptor
**********************************************/
export interface ITypeDescriptor extends TypeDescriptorCollections,TypeDescriptorMethods,IBaseQuery<ITypeDescriptorQuery> {

}

/*********************************************
* ITypeDescriptorQuery
**********************************************/
export interface ITypeDescriptorQuery extends TypeDescriptorQuery,TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptor
**********************************************/
export interface TypeDescriptor extends TypeDescriptorCollections, TypeDescriptorMethods {
	ContainsReadOnly?: boolean;
	IsCollection?: boolean;
	IsReadOnly?: boolean;
	Name?: string;
	TypeName?: string;
}

/*********************************************
* TypeDescriptorProps
**********************************************/
export interface TypeDescriptorProps {

}

/*********************************************
* TypeDescriptorCollections
**********************************************/
export interface TypeDescriptorCollections extends TypeDescriptorProps {

}

/*********************************************
* TypeDescriptorQuery
**********************************************/
export interface TypeDescriptorQuery extends TypeDescriptorProps {

}

/*********************************************
* TypeDescriptorMethods
**********************************************/
export interface TypeDescriptorMethods {
	containsLocalizedDisplayName(): IBaseExecution<boolean>;
	getChildTypeDescriptors(): IBaseExecution<Array<SP.BusinessData.TypeDescriptor>>;
	getDefaultDisplayName(): IBaseExecution<string>;
	getLocalizedDisplayName(): IBaseExecution<string>;
	getParentTypeDescriptor(): IBaseExecution<SP.BusinessData.TypeDescriptor>;
	isLeaf(): IBaseExecution<boolean>;
	isRoot(): IBaseExecution<boolean>;
}

/*********************************************
* IEntity
**********************************************/
export interface IEntity extends EntityCollections,EntityMethods,IBaseQuery<IEntityQuery> {

}

/*********************************************
* IEntityQuery
**********************************************/
export interface IEntityQuery extends EntityQuery,EntityMethods {

}

/*********************************************
* Entity
**********************************************/
export interface Entity extends EntityCollections, EntityMethods {
	EstimatedInstanceCount?: number;
	Name?: string;
	Namespace?: string;
}

/*********************************************
* EntityProps
**********************************************/
export interface EntityProps {

}

/*********************************************
* EntityCollections
**********************************************/
export interface EntityCollections extends EntityProps {

}

/*********************************************
* EntityQuery
**********************************************/
export interface EntityQuery extends EntityProps {

}

/*********************************************
* EntityMethods
**********************************************/
export interface EntityMethods {
	getAssociationView(associationName?: string): IBaseExecution<SP.BusinessData.EntityView>;
	getCreatorView(methodInstanceName?: string): IBaseExecution<SP.BusinessData.EntityView>;
	getDefaultSpecificFinderView(): IBaseExecution<SP.BusinessData.EntityView>;
	getFilters(methodInstanceName?: string): IBaseExecution<Array<SP.BusinessData.Filter>>;
	getFinderView(methodInstanceName?: string): IBaseExecution<SP.BusinessData.EntityView>;
	getIdentifierCount(): IBaseExecution<number>;
	getIdentifiers(): IBaseExecution<Array<SP.BusinessData.EntityIdentifier>>;
	getLobSystem(): IBaseExecution<SP.BusinessData.LobSystem>;
	getSpecificFinderView(specificFinderName?: string): IBaseExecution<SP.BusinessData.EntityView>;
	getUpdaterView(updaterName?: string): IBaseExecution<SP.BusinessData.EntityView>;
}

/*********************************************
* ILobSystem
**********************************************/
export interface ILobSystem extends LobSystemCollections,LobSystemMethods,IBaseQuery<ILobSystemQuery> {

}

/*********************************************
* ILobSystemQuery
**********************************************/
export interface ILobSystemQuery extends LobSystemQuery,LobSystemMethods {

}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem extends LobSystemCollections, LobSystemMethods {
	Name?: string;
}

/*********************************************
* LobSystemProps
**********************************************/
export interface LobSystemProps {

}

/*********************************************
* LobSystemCollections
**********************************************/
export interface LobSystemCollections extends LobSystemProps {

}

/*********************************************
* LobSystemQuery
**********************************************/
export interface LobSystemQuery extends LobSystemProps {

}

/*********************************************
* LobSystemMethods
**********************************************/
export interface LobSystemMethods {
	getLobSystemInstances(): IBaseExecution<Array<SP.BusinessData.LobSystemInstance>>;
}

/*********************************************
* IMethodExecutionResult
**********************************************/
export interface IMethodExecutionResult extends MethodExecutionResultCollections,MethodExecutionResultMethods,IBaseQuery<IMethodExecutionResultQuery> {

}

/*********************************************
* IMethodExecutionResultQuery
**********************************************/
export interface IMethodExecutionResultQuery extends MethodExecutionResultQuery,MethodExecutionResultMethods {

}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult extends MethodExecutionResultCollections, MethodExecutionResultMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MethodExecutionResultProps
**********************************************/
export interface MethodExecutionResultProps {

}

/*********************************************
* MethodExecutionResultCollections
**********************************************/
export interface MethodExecutionResultCollections extends MethodExecutionResultProps {
	ReturnParameterCollection(): IBaseCollection<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
	ReturnParameterCollection(id: string | number): IBaseExecution<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
}

/*********************************************
* MethodExecutionResultQuery
**********************************************/
export interface MethodExecutionResultQuery extends MethodExecutionResultProps {
	ReturnParameterCollection: IBaseResults<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
}

/*********************************************
* MethodExecutionResultMethods
**********************************************/
export interface MethodExecutionResultMethods {

}

/*********************************************
* IEntityView
**********************************************/
export interface IEntityView extends EntityViewCollections,EntityViewMethods,IBaseQuery<IEntityViewQuery> {

}

/*********************************************
* IEntityViewQuery
**********************************************/
export interface IEntityViewQuery extends EntityViewQuery,EntityViewMethods {

}

/*********************************************
* EntityView
**********************************************/
export interface EntityView extends EntityViewCollections, EntityViewMethods {
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* EntityViewProps
**********************************************/
export interface EntityViewProps {

}

/*********************************************
* EntityViewCollections
**********************************************/
export interface EntityViewCollections extends EntityViewProps {
	Fields(): IBaseCollection<SP.BusinessData.EntityField>;
	Fields(id: string | number): IBaseExecution<SP.BusinessData.EntityField>;
}

/*********************************************
* EntityViewQuery
**********************************************/
export interface EntityViewQuery extends EntityViewProps {
	Fields: IBaseResults<SP.BusinessData.EntityField>;
}

/*********************************************
* EntityViewMethods
**********************************************/
export interface EntityViewMethods {
	getDefaultValues(): IBaseExecution<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
	getType(fieldDotNotation?: string): IBaseExecution<string>;
	getTypeDescriptor(fieldDotNotation?: string): IBaseExecution<SP.BusinessData.TypeDescriptor>;
	getXmlSchema(): IBaseExecution<string>;
}

/*********************************************
* IAppBdcCatalog
**********************************************/
export interface IAppBdcCatalog extends AppBdcCatalogCollections,AppBdcCatalogMethods,IBaseQuery<IAppBdcCatalogQuery> {

}

/*********************************************
* IAppBdcCatalogQuery
**********************************************/
export interface IAppBdcCatalogQuery extends AppBdcCatalogQuery,AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog extends AppBdcCatalogCollections, AppBdcCatalogMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppBdcCatalogProps
**********************************************/
export interface AppBdcCatalogProps {

}

/*********************************************
* AppBdcCatalogCollections
**********************************************/
export interface AppBdcCatalogCollections extends AppBdcCatalogProps {

}

/*********************************************
* AppBdcCatalogQuery
**********************************************/
export interface AppBdcCatalogQuery extends AppBdcCatalogProps {

}

/*********************************************
* AppBdcCatalogMethods
**********************************************/
export interface AppBdcCatalogMethods {
	getConnectionId(lobSystemName?: string, lobSystemInstanceName?: string): IBaseExecution<string>;
	getEntity(namespace?: string, name?: string): IBaseExecution<SP.BusinessData.Entity>;
	getLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string): IBaseExecution<string>;
	getLobSystemProperty(lobSystemName?: string, propertyName?: string): IBaseExecution<string>;
	getPermissibleConnections(): IBaseExecution<Array<string>>;
	setConnectionId(lobSystemName?: string, lobSystemInstanceName?: string, connectionId?: string): IBaseExecution<any>;
	setLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<any>;
	setLobSystemProperty(lobSystemName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<any>;
}
