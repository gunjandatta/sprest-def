import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
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
export interface IEntityIdentifier extends EntityIdentifierCollections, EntityIdentifierMethods, IBaseQuery<IEntityIdentifierQuery> {

}

/*********************************************
* IEntityIdentifierCollection
**********************************************/
export interface IEntityIdentifierCollection extends IBaseResults<EntityIdentifier> {
	done?: (resolve: (value?: Array<EntityIdentifier>) => void) => void;
}

/*********************************************
* IEntityIdentifierQueryCollection
**********************************************/
export interface IEntityIdentifierQueryCollection extends IBaseResults<EntityIdentifierOData> {
	done?: (resolve: (value?: Array<EntityIdentifierOData>) => void) => void;
}

/*********************************************
* IEntityIdentifierQuery
**********************************************/
export interface IEntityIdentifierQuery extends EntityIdentifierOData, EntityIdentifierMethods {

}

/*********************************************
* EntityIdentifier
**********************************************/
export interface EntityIdentifier extends IBaseResult, EntityIdentifierProps, EntityIdentifierCollections, EntityIdentifierMethods {

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
* EntityIdentifierOData
**********************************************/
export interface EntityIdentifierOData extends IBaseResult, EntityIdentifierProps, EntityIdentifierMethods {

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
export interface ITypeDescriptor extends TypeDescriptorCollections, TypeDescriptorMethods, IBaseQuery<ITypeDescriptorQuery> {

}

/*********************************************
* ITypeDescriptorCollection
**********************************************/
export interface ITypeDescriptorCollection extends IBaseResults<TypeDescriptor> {
	done?: (resolve: (value?: Array<TypeDescriptor>) => void) => void;
}

/*********************************************
* ITypeDescriptorQueryCollection
**********************************************/
export interface ITypeDescriptorQueryCollection extends IBaseResults<TypeDescriptorOData> {
	done?: (resolve: (value?: Array<TypeDescriptorOData>) => void) => void;
}

/*********************************************
* ITypeDescriptorQuery
**********************************************/
export interface ITypeDescriptorQuery extends TypeDescriptorOData, TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptor
**********************************************/
export interface TypeDescriptor extends IBaseResult, TypeDescriptorProps, TypeDescriptorCollections, TypeDescriptorMethods {

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
* TypeDescriptorOData
**********************************************/
export interface TypeDescriptorOData extends IBaseResult, TypeDescriptorProps, TypeDescriptorMethods {

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
export interface IEntity extends EntityCollections, EntityMethods, IBaseQuery<IEntityQuery> {

}

/*********************************************
* IEntityCollection
**********************************************/
export interface IEntityCollection extends IBaseResults<Entity> {
	done?: (resolve: (value?: Array<Entity>) => void) => void;
}

/*********************************************
* IEntityQueryCollection
**********************************************/
export interface IEntityQueryCollection extends IBaseResults<EntityOData> {
	done?: (resolve: (value?: Array<EntityOData>) => void) => void;
}

/*********************************************
* IEntityQuery
**********************************************/
export interface IEntityQuery extends EntityOData, EntityMethods {

}

/*********************************************
* Entity
**********************************************/
export interface Entity extends IBaseResult, EntityProps, EntityCollections, EntityMethods {

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
* EntityOData
**********************************************/
export interface EntityOData extends IBaseResult, EntityProps, EntityMethods {

}

/*********************************************
* EntityMethods
**********************************************/
export interface EntityMethods {
	getAssociationView(associationName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getCreatorView(methodInstanceName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getDefaultSpecificFinderView(): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getFilters(methodInstanceName?: string): IBaseCollection<SP.BusinessData.Filter>;
	getFinderView(methodInstanceName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getIdentifierCount(): IBaseExecution<number>;
	getIdentifiers(): IBaseCollection<SP.BusinessData.EntityIdentifier>;
	getLobSystem(): IBaseExecution<SP.BusinessData.LobSystem>;
	getSpecificFinderView(specificFinderName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getUpdaterView(updaterName?: string): IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
}

/*********************************************
* ILobSystem
**********************************************/
export interface ILobSystem extends LobSystemCollections, LobSystemMethods, IBaseQuery<ILobSystemQuery> {

}

/*********************************************
* ILobSystemCollection
**********************************************/
export interface ILobSystemCollection extends IBaseResults<LobSystem> {
	done?: (resolve: (value?: Array<LobSystem>) => void) => void;
}

/*********************************************
* ILobSystemQueryCollection
**********************************************/
export interface ILobSystemQueryCollection extends IBaseResults<LobSystemOData> {
	done?: (resolve: (value?: Array<LobSystemOData>) => void) => void;
}

/*********************************************
* ILobSystemQuery
**********************************************/
export interface ILobSystemQuery extends LobSystemOData, LobSystemMethods {

}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem extends IBaseResult, LobSystemProps, LobSystemCollections, LobSystemMethods {

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
* LobSystemOData
**********************************************/
export interface LobSystemOData extends IBaseResult, LobSystemProps, LobSystemMethods {

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
export interface IMethodExecutionResult extends MethodExecutionResultCollections, MethodExecutionResultMethods, IBaseQuery<IMethodExecutionResultQuery> {

}

/*********************************************
* IMethodExecutionResultCollection
**********************************************/
export interface IMethodExecutionResultCollection extends IBaseResults<MethodExecutionResult> {
	done?: (resolve: (value?: Array<MethodExecutionResult>) => void) => void;
}

/*********************************************
* IMethodExecutionResultQueryCollection
**********************************************/
export interface IMethodExecutionResultQueryCollection extends IBaseResults<MethodExecutionResultOData> {
	done?: (resolve: (value?: Array<MethodExecutionResultOData>) => void) => void;
}

/*********************************************
* IMethodExecutionResultQuery
**********************************************/
export interface IMethodExecutionResultQuery extends MethodExecutionResultOData, MethodExecutionResultMethods {

}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult extends IBaseResult, MethodExecutionResultProps, MethodExecutionResultCollections, MethodExecutionResultMethods {

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
* MethodExecutionResultOData
**********************************************/
export interface MethodExecutionResultOData extends IBaseResult, MethodExecutionResultProps, MethodExecutionResultMethods {
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
export interface IEntityView extends EntityViewCollections, EntityViewMethods, IBaseQuery<IEntityViewQuery> {

}

/*********************************************
* IEntityViewCollection
**********************************************/
export interface IEntityViewCollection extends IBaseResults<EntityView> {
	done?: (resolve: (value?: Array<EntityView>) => void) => void;
}

/*********************************************
* IEntityViewQueryCollection
**********************************************/
export interface IEntityViewQueryCollection extends IBaseResults<EntityViewOData> {
	done?: (resolve: (value?: Array<EntityViewOData>) => void) => void;
}

/*********************************************
* IEntityViewQuery
**********************************************/
export interface IEntityViewQuery extends EntityViewOData, EntityViewMethods {

}

/*********************************************
* EntityView
**********************************************/
export interface EntityView extends IBaseResult, EntityViewProps, EntityViewCollections, EntityViewMethods {

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
* EntityViewOData
**********************************************/
export interface EntityViewOData extends IBaseResult, EntityViewProps, EntityViewMethods {
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
export interface IAppBdcCatalog extends AppBdcCatalogCollections, AppBdcCatalogMethods, IBaseQuery<IAppBdcCatalogQuery> {

}

/*********************************************
* IAppBdcCatalogCollection
**********************************************/
export interface IAppBdcCatalogCollection extends IBaseResults<AppBdcCatalog> {
	done?: (resolve: (value?: Array<AppBdcCatalog>) => void) => void;
}

/*********************************************
* IAppBdcCatalogQueryCollection
**********************************************/
export interface IAppBdcCatalogQueryCollection extends IBaseResults<AppBdcCatalogOData> {
	done?: (resolve: (value?: Array<AppBdcCatalogOData>) => void) => void;
}

/*********************************************
* IAppBdcCatalogQuery
**********************************************/
export interface IAppBdcCatalogQuery extends AppBdcCatalogOData, AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog extends IBaseResult, AppBdcCatalogProps, AppBdcCatalogCollections, AppBdcCatalogMethods {

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
* AppBdcCatalogOData
**********************************************/
export interface AppBdcCatalogOData extends IBaseResult, AppBdcCatalogProps, AppBdcCatalogMethods {

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
