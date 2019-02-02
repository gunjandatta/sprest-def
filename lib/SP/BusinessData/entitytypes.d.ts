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
* EntityFieldCollections
**********************************************/
export interface EntityFieldCollections {

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
* FilterCollections
**********************************************/
export interface FilterCollections {

}

/*********************************************
* IEntityIdentifier
**********************************************/
export interface IEntityIdentifier extends EntityIdentifierCollections,EntityIdentifierMethods,IBaseQuery<IEntityIdentifierQuery> {

}

/*********************************************
* IEntityIdentifierQuery
**********************************************/
export interface IEntityIdentifierQuery extends EntityIdentifierQuery, EntityIdentifierMethods {

}

/*********************************************
* EntityIdentifier
**********************************************/
export interface EntityIdentifier extends EntityIdentifierProps, EntityIdentifierCollections, EntityIdentifierMethods {

}

/*********************************************
* EntityIdentifierProps
**********************************************/
export interface EntityIdentifierProps {
	IdentifierType?: string;
	Name?: string;
}

/*********************************************
* EntityIdentifierPropMethods
**********************************************/
export interface EntityIdentifierPropMethods {

}

/*********************************************
* EntityIdentifierCollections
**********************************************/
export interface EntityIdentifierCollections extends EntityIdentifierPropMethods {

}

/*********************************************
* EntityIdentifierQuery
**********************************************/
export interface EntityIdentifierQuery extends EntityIdentifierProps, EntityIdentifierMethods {

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
* LobSystemInstanceCollections
**********************************************/
export interface LobSystemInstanceCollections {

}

/*********************************************
* ITypeDescriptor
**********************************************/
export interface ITypeDescriptor extends TypeDescriptorCollections,TypeDescriptorMethods,IBaseQuery<ITypeDescriptorQuery> {

}

/*********************************************
* ITypeDescriptorQuery
**********************************************/
export interface ITypeDescriptorQuery extends TypeDescriptorQuery, TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptor
**********************************************/
export interface TypeDescriptor extends TypeDescriptorProps, TypeDescriptorCollections, TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptorProps
**********************************************/
export interface TypeDescriptorProps {
	ContainsReadOnly?: boolean;
	IsCollection?: boolean;
	IsReadOnly?: boolean;
	Name?: string;
	TypeName?: string;
}

/*********************************************
* TypeDescriptorPropMethods
**********************************************/
export interface TypeDescriptorPropMethods {

}

/*********************************************
* TypeDescriptorCollections
**********************************************/
export interface TypeDescriptorCollections extends TypeDescriptorPropMethods {

}

/*********************************************
* TypeDescriptorQuery
**********************************************/
export interface TypeDescriptorQuery extends TypeDescriptorProps, TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptorMethods
**********************************************/
export interface TypeDescriptorMethods {
	containsLocalizedDisplayName(): IBaseExecution<boolean>;
	getChildTypeDescriptors(): IBaseCollection<SP.BusinessData.TypeDescriptor>;
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
export interface IEntityQuery extends EntityQuery, EntityMethods {

}

/*********************************************
* Entity
**********************************************/
export interface Entity extends EntityProps, EntityCollections, EntityMethods {

}

/*********************************************
* EntityProps
**********************************************/
export interface EntityProps {
	EstimatedInstanceCount?: number;
	Name?: string;
	Namespace?: string;
}

/*********************************************
* EntityPropMethods
**********************************************/
export interface EntityPropMethods {

}

/*********************************************
* EntityCollections
**********************************************/
export interface EntityCollections extends EntityPropMethods {

}

/*********************************************
* EntityQuery
**********************************************/
export interface EntityQuery extends EntityProps, EntityMethods {

}

/*********************************************
* EntityMethods
**********************************************/
export interface EntityMethods {
	getAssociationView(associationName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewQuery> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getCreatorView(methodInstanceName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewQuery> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getDefaultSpecificFinderView(): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewQuery> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getFilters(methodInstanceName?: string): IBaseCollection<SP.BusinessData.Filter>;
	getFinderView(methodInstanceName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewQuery> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getIdentifierCount(): IBaseExecution<number>;
	getIdentifiers(): IBaseCollection<SP.BusinessData.EntityIdentifier>;
	getLobSystem(): IBaseExecution<SP.BusinessData.LobSystem>;
	getSpecificFinderView(specificFinderName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewQuery> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getUpdaterView(updaterName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewQuery> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
}

/*********************************************
* ILobSystem
**********************************************/
export interface ILobSystem extends LobSystemCollections,LobSystemMethods,IBaseQuery<ILobSystemQuery> {

}

/*********************************************
* ILobSystemQuery
**********************************************/
export interface ILobSystemQuery extends LobSystemQuery, LobSystemMethods {

}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem extends LobSystemProps, LobSystemCollections, LobSystemMethods {

}

/*********************************************
* LobSystemProps
**********************************************/
export interface LobSystemProps {
	Name?: string;
}

/*********************************************
* LobSystemPropMethods
**********************************************/
export interface LobSystemPropMethods {

}

/*********************************************
* LobSystemCollections
**********************************************/
export interface LobSystemCollections extends LobSystemPropMethods {

}

/*********************************************
* LobSystemQuery
**********************************************/
export interface LobSystemQuery extends LobSystemProps, LobSystemMethods {

}

/*********************************************
* LobSystemMethods
**********************************************/
export interface LobSystemMethods {
	getLobSystemInstances(): IBaseCollection<SP.BusinessData.LobSystemInstance>;
}

/*********************************************
* IMethodExecutionResult
**********************************************/
export interface IMethodExecutionResult extends MethodExecutionResultCollections,MethodExecutionResultMethods,IBaseQuery<IMethodExecutionResultQuery> {

}

/*********************************************
* IMethodExecutionResultQuery
**********************************************/
export interface IMethodExecutionResultQuery extends MethodExecutionResultQuery, MethodExecutionResultMethods {

}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult extends MethodExecutionResultProps, MethodExecutionResultCollections, MethodExecutionResultMethods {

}

/*********************************************
* MethodExecutionResultProps
**********************************************/
export interface MethodExecutionResultProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MethodExecutionResultPropMethods
**********************************************/
export interface MethodExecutionResultPropMethods {

}

/*********************************************
* MethodExecutionResultCollections
**********************************************/
export interface MethodExecutionResultCollections extends MethodExecutionResultPropMethods {
	ReturnParameterCollection(): IBaseCollection<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
	ReturnParameterCollection(id: string | number): IBaseQuery<SP.BusinessData.Runtime.EntityFieldValueDictionary> & SP.BusinessData.Runtime.EntityFieldValueDictionaryCollections & SP.BusinessData.Runtime.EntityFieldValueDictionaryMethods;
}

/*********************************************
* MethodExecutionResultQuery
**********************************************/
export interface MethodExecutionResultQuery extends MethodExecutionResultProps, MethodExecutionResultMethods {
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
export interface IEntityViewQuery extends EntityViewQuery, EntityViewMethods {

}

/*********************************************
* EntityView
**********************************************/
export interface EntityView extends EntityViewProps, EntityViewCollections, EntityViewMethods {

}

/*********************************************
* EntityViewProps
**********************************************/
export interface EntityViewProps {
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* EntityViewPropMethods
**********************************************/
export interface EntityViewPropMethods {

}

/*********************************************
* EntityViewCollections
**********************************************/
export interface EntityViewCollections extends EntityViewPropMethods {
	Fields(): IBaseCollection<SP.BusinessData.EntityField>;
	Fields(id: string | number): IBaseQuery<SP.BusinessData.EntityField> & SP.BusinessData.EntityFieldCollections;
}

/*********************************************
* EntityViewQuery
**********************************************/
export interface EntityViewQuery extends EntityViewProps, EntityViewMethods {
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
export interface IAppBdcCatalogQuery extends AppBdcCatalogQuery, AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog extends AppBdcCatalogProps, AppBdcCatalogCollections, AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalogProps
**********************************************/
export interface AppBdcCatalogProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppBdcCatalogPropMethods
**********************************************/
export interface AppBdcCatalogPropMethods {

}

/*********************************************
* AppBdcCatalogCollections
**********************************************/
export interface AppBdcCatalogCollections extends AppBdcCatalogPropMethods {

}

/*********************************************
* AppBdcCatalogQuery
**********************************************/
export interface AppBdcCatalogQuery extends AppBdcCatalogProps, AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalogMethods
**********************************************/
export interface AppBdcCatalogMethods {
	getConnectionId(lobSystemName?: string, lobSystemInstanceName?: string): IBaseExecution<string>;
	getEntity(namespace?: string, name?: string): IBaseExecution<SP.BusinessData.Entity>;
	getLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string): IBaseExecution<string>;
	getLobSystemProperty(lobSystemName?: string, propertyName?: string): IBaseExecution<string>;
	getPermissibleConnections(): IBaseCollection<string>;
	setConnectionId(lobSystemName?: string, lobSystemInstanceName?: string, connectionId?: string): IBaseExecution<any>;
	setLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<any>;
	setLobSystemProperty(lobSystemName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<any>;
}
