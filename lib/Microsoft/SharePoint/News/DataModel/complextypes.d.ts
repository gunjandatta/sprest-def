import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* SerializableType
**********************************************/
export interface SerializableType {
	type?: string;
}

/*********************************************
* SerializableTypeCollections
**********************************************/
export interface SerializableTypeCollections {

}

/*********************************************
* ItemReference
**********************************************/
export interface ItemReference {
	exchangeId?: string;
	siteId?: any;
}

/*********************************************
* ItemReferenceCollections
**********************************************/
export interface ItemReferenceCollections {

}

/*********************************************
* DocumentReference
**********************************************/
export interface DocumentReference {
	uniqueId?: any;
}

/*********************************************
* DocumentReferenceCollections
**********************************************/
export interface DocumentReferenceCollections {

}

/*********************************************
* Item
**********************************************/
export interface Item {
	title?: string;
}

/*********************************************
* ItemCollections
**********************************************/
export interface ItemCollections {

}

/*********************************************
* NavigatableItem
**********************************************/
export interface NavigatableItem {
	id?: string;
	originalUrl?: string;
	serverRedirectedUrl?: string;
	url?: string;
}

/*********************************************
* NavigatableItemCollections
**********************************************/
export interface NavigatableItemCollections {

}

/*********************************************
* Document
**********************************************/
export interface Document {
	comments?: number;
	contentClass?: string;
	contentTypeId?: string;
	fileExtension?: string;
	folder?: Microsoft.SharePoint.News.DataModel.Folder;
	itemReference?: Microsoft.SharePoint.News.DataModel.DocumentReference;
	lastModifiedBy?: Microsoft.SharePoint.News.DataModel.Person;
	lastModifiedTime?: string;
	library?: Microsoft.SharePoint.News.DataModel.Library;
	liked?: boolean;
	likes?: number;
	savedForLater?: boolean;
	site?: Microsoft.SharePoint.News.DataModel.SPOSite;
	size?: number;
	staticTeaser?: string;
	views?: number;
}

/*********************************************
* DocumentCollections
**********************************************/
export interface DocumentCollections {

}

/*********************************************
* Folder
**********************************************/
export interface Folder {
	folderId?: any;
}

/*********************************************
* FolderCollections
**********************************************/
export interface FolderCollections {

}

/*********************************************
* Person
**********************************************/
export interface Person {
	accountName?: string;
	acronym?: string;
	bannerColor?: string;
	itemReference?: Microsoft.SharePoint.News.DataModel.PersonReference;
	workEmail?: string;
}

/*********************************************
* PersonCollections
**********************************************/
export interface PersonCollections {

}

/*********************************************
* PersonReference
**********************************************/
export interface PersonReference {

}

/*********************************************
* PersonReferenceCollections
**********************************************/
export interface PersonReferenceCollections {

}

/*********************************************
* Library
**********************************************/
export interface Library {
	listId?: any;
}

/*********************************************
* LibraryCollections
**********************************************/
export interface LibraryCollections {

}

/*********************************************
* SPOSite
**********************************************/
export interface SPOSite {
	acronym?: string;
	bannerColor?: string;
	bannerImageUrl?: string;
	contentTypeId?: string;
	departmentId?: any;
	isExternalContent?: boolean;
	itemReference?: Microsoft.SharePoint.News.DataModel.SPOSiteReference;
	language?: string;
	lastModifiedTime?: any;
	webTemplate?: string;
}

/*********************************************
* SPOSiteCollections
**********************************************/
export interface SPOSiteCollections {

}

/*********************************************
* SPOSiteReference
**********************************************/
export interface SPOSiteReference {
	webId?: any;
}

/*********************************************
* SPOSiteReferenceCollections
**********************************************/
export interface SPOSiteReferenceCollections {

}

/*********************************************
* ItemsList
**********************************************/
export interface ItemsList {
	items?: Array<Microsoft.SharePoint.News.DataModel.Item>;
}

/*********************************************
* ItemsListCollections
**********************************************/
export interface ItemsListCollections {

}

/*********************************************
* NewsArticle
**********************************************/
export interface NewsArticle {
	author?: Microsoft.SharePoint.News.DataModel.Person;
	description?: string;
	firstPublishedDate?: any;
	imageUrl?: string;
	isAuthoritativeNews?: boolean;
	listItemId?: string;
	newsSourceType?: number;
	newsType?: number;
	relativeAuthorRank?: number;
}

/*********************************************
* NewsArticleCollections
**********************************************/
export interface NewsArticleCollections {

}
