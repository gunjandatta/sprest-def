import { IBaseExecution } from "../../";
import { IBaseCollection } from "../../";
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
export interface IEntityIdentifier extends EntityIdentifierProps,EntityIdentifierMethods,IBaseExecution<EntityIdentifier> {

}

/*********************************************
* EntityIdentifier
**********************************************/
export interface EntityIdentifier extends EntityIdentifierProps, EntityIdentifierMethods {
	IdentifierType?: string;
	Name?: string;
}

/*********************************************
* EntityIdentifierProps
**********************************************/
export interface EntityIdentifierProps {

}

/*********************************************
* EntityIdentifierMethods
**********************************************/
export interface EntityIdentifierMethods {
	containsLocalizedDisplayName<T=boolean>(): IBaseExecution<T>;
	getDefaultDisplayName<T=string>(): IBaseExecution<T>;
	getLocalizedDisplayName<T=string>(): IBaseExecution<T>;
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
export interface ITypeDescriptor extends TypeDescriptorProps,TypeDescriptorMethods,IBaseExecution<TypeDescriptor> {

}

/*********************************************
* TypeDescriptor
**********************************************/
export interface TypeDescriptor extends TypeDescriptorProps, TypeDescriptorMethods {
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
* TypeDescriptorMethods
**********************************************/
export interface TypeDescriptorMethods {
	containsLocalizedDisplayName<T=boolean>(): IBaseExecution<T>;
	getChildTypeDescriptors<T=Array<SP.BusinessData.TypeDescriptor>>(): IBaseExecution<T>;
	getDefaultDisplayName<T=string>(): IBaseExecution<T>;
	getLocalizedDisplayName<T=string>(): IBaseExecution<T>;
	getParentTypeDescriptor<T=SP.BusinessData.TypeDescriptor>(): IBaseExecution<T>;
	isLeaf<T=boolean>(): IBaseExecution<T>;
	isRoot<T=boolean>(): IBaseExecution<T>;
}

/*********************************************
* IEntity
**********************************************/
export interface IEntity extends EntityProps,EntityMethods,IBaseExecution<Entity> {

}

/*********************************************
* Entity
**********************************************/
export interface Entity extends EntityProps, EntityMethods {
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
* EntityMethods
**********************************************/
export interface EntityMethods {
	getAssociationView<T=SP.BusinessData.EntityView>(associationName?: string): IBaseExecution<T>;
	getCreatorView<T=SP.BusinessData.EntityView>(methodInstanceName?: string): IBaseExecution<T>;
	getDefaultSpecificFinderView<T=SP.BusinessData.EntityView>(): IBaseExecution<T>;
	getFilters<T=Array<SP.BusinessData.Filter>>(methodInstanceName?: string): IBaseExecution<T>;
	getFinderView<T=SP.BusinessData.EntityView>(methodInstanceName?: string): IBaseExecution<T>;
	getIdentifierCount<T=number>(): IBaseExecution<T>;
	getIdentifiers<T=Array<SP.BusinessData.EntityIdentifier>>(): IBaseExecution<T>;
	getLobSystem<T=SP.BusinessData.LobSystem>(): IBaseExecution<T>;
	getSpecificFinderView<T=SP.BusinessData.EntityView>(specificFinderName?: string): IBaseExecution<T>;
	getUpdaterView<T=SP.BusinessData.EntityView>(updaterName?: string): IBaseExecution<T>;
}

/*********************************************
* ILobSystem
**********************************************/
export interface ILobSystem extends LobSystemProps,LobSystemMethods,IBaseExecution<LobSystem> {

}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem extends LobSystemProps, LobSystemMethods {
	Name?: string;
}

/*********************************************
* LobSystemProps
**********************************************/
export interface LobSystemProps {

}

/*********************************************
* LobSystemMethods
**********************************************/
export interface LobSystemMethods {
	getLobSystemInstances<T=Array<SP.BusinessData.LobSystemInstance>>(): IBaseExecution<T>;
}

/*********************************************
* IMethodExecutionResult
**********************************************/
export interface IMethodExecutionResult extends MethodExecutionResultProps,MethodExecutionResultMethods,IBaseExecution<MethodExecutionResult> {

}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult extends MethodExecutionResultProps, MethodExecutionResultMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MethodExecutionResultProps
**********************************************/
export interface MethodExecutionResultProps {
	ReturnParameterCollection<T=SP.BusinessData.Runtime.EntityFieldValueDictionary>(): IBaseCollection<T>;
}

/*********************************************
* MethodExecutionResultMethods
**********************************************/
export interface MethodExecutionResultMethods {

}

/*********************************************
* IEntityView
**********************************************/
export interface IEntityView extends EntityViewProps,EntityViewMethods,IBaseExecution<EntityView> {

}

/*********************************************
* EntityView
**********************************************/
export interface EntityView extends EntityViewProps, EntityViewMethods {
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* EntityViewProps
**********************************************/
export interface EntityViewProps {
	Fields<T=SP.BusinessData.EntityField>(): IBaseCollection<T>;
}

/*********************************************
* EntityViewMethods
**********************************************/
export interface EntityViewMethods {
	getDefaultValues<T=SP.BusinessData.Runtime.EntityFieldValueDictionary>(): IBaseExecution<T>;
	getType<T=string>(fieldDotNotation?: string): IBaseExecution<T>;
	getTypeDescriptor<T=SP.BusinessData.TypeDescriptor>(fieldDotNotation?: string): IBaseExecution<T>;
	getXmlSchema<T=string>(): IBaseExecution<T>;
}

/*********************************************
* IAppBdcCatalog
**********************************************/
export interface IAppBdcCatalog extends AppBdcCatalogProps,AppBdcCatalogMethods,IBaseExecution<AppBdcCatalog> {

}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog extends AppBdcCatalogProps, AppBdcCatalogMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppBdcCatalogProps
**********************************************/
export interface AppBdcCatalogProps {

}

/*********************************************
* AppBdcCatalogMethods
**********************************************/
export interface AppBdcCatalogMethods {
	getConnectionId<T=string>(lobSystemName?: string, lobSystemInstanceName?: string): IBaseExecution<T>;
	getEntity<T=SP.BusinessData.Entity>(namespace?: string, name?: string): IBaseExecution<T>;
	getLobSystemInstanceProperty<T=string>(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string): IBaseExecution<T>;
	getLobSystemProperty<T=string>(lobSystemName?: string, propertyName?: string): IBaseExecution<T>;
	getPermissibleConnections<T=Array<string>>(): IBaseExecution<T>;
	setConnectionId<T=any>(lobSystemName?: string, lobSystemInstanceName?: string, connectionId?: string): IBaseExecution<T>;
	setLobSystemInstanceProperty<T=any>(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<T>;
	setLobSystemProperty<T=any>(lobSystemName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<T>;
}
