export interface valueInterface {
  loading: Boolean;
  error: any[];
  contacts: Contact[];
  favorite: Contact[];
  pagination: Pagination;
  editData: Contact;
}

export interface reducerInterface {
  loading: Boolean;
  error: any[];
  contacts: Contact[];
  favorite: Contact[];
  pagination: Pagination;
  editData: Contact;
  AddToContact: (loading: Boolean, error: any, contact?: Contacts) => void;
  AddToFavorite: (data: ContactWithFav) => void;
  DeleteContact: (id: number) => void;
  GettingContact: (pagination: Pagination) => void;
  SetPagination: (payload: Pagination) => void;
  CreateContact: (forms: ContactWIthoutID) => void;
  EditContact: (forms: Contact) => void;
  FillEditContact: (forms: Contact) => void;
}

export interface Contacts {
  contact: Contact[];
}

export interface ContactWithFav {
  first_name: string;
  id: number;
  last_name: string;
  phones: Numbers[];
  isFavorite: Boolean;
}

export interface Contact {
  first_name: string;
  id: number;
  last_name: string;
  phones: Numbers[];
}

export interface ContactWIthoutID {
  first_name: string;
  last_name: string;
  phones: Numbers[];
}

export interface Pagination {
  order_by: Object[];
  offset: number;
  limit: number;
}

export interface Numbers {
  number: string;
}
