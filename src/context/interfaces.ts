export interface valueInterface {
  loading: Boolean;
  error: any[];
  contacts: Contact[];
  favorite: Contact[];
}

export interface reducerInterface {
  loading: Boolean;
  error: any[];
  contacts: Contact[];
  favorite: Contact[];
  paginate: Pagination;
  AddToContact: (loading: Boolean, error: any, contact?: Contacts) => void;
  AddToFavorite: (favorite: Contact[], data: ContactWithFav) => void;
}

export interface Contacts {
  contact: Contact[];
}

export interface ContactWithFav {
  created_at: String;
  first_name: String;
  id: 5;
  last_name: String;
  phones: Numbers[];
  isFavorite: Boolean;
}

export interface Contact {
  created_at: String;
  first_name: String;
  id: 5;
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
