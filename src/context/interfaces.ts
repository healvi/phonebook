export interface valueInterface {
  loading: Boolean;
  error: any[];
  contacts: Contact[];
  favorite: Contact[];
  pagination: Pagination;
}

export interface reducerInterface {
  loading: Boolean;
  error: any[];
  contacts: Contact[];
  favorite: Contact[];
  pagination: Pagination;
  AddToContact: (loading: Boolean, error: any, contact?: Contacts) => void;
  AddToFavorite: (data: ContactWithFav) => void;
  DeleteContact: (id: number) => void;
  GettingContact: (pagination: Pagination) => void;
  SetPagination: (payload: Pagination) => void;
  CreateContact: (forms: ContactWIthoutID) => void;
}

export interface Contacts {
  contact: Contact[];
}

export interface ContactWithFav {
  first_name: String;
  id: number;
  last_name: String;
  phones: Numbers[];
  isFavorite: Boolean;
}

export interface Contact {
  first_name: String;
  id: number;
  last_name: String;
  phones: Numbers[];
}

export interface ContactWIthoutID {
  first_name: String;
  last_name: String;
  phones: Numbers[];
}

export interface Pagination {
  order_by: Object[];
  offset: number;
  limit: number;
}

export interface Numbers {
  number: String;
}
