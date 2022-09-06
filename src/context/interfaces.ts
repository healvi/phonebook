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
  AddToContact: (loading: Boolean, error: any, contact?: Contacts) => void;
  PaginateToContact: (contact: []) => void;
}

export interface Contacts {
  contact: Contact[];
}

export interface Contact {
  created_at: String;
  first_name: String;
  id: 5;
  last_name: String;
  phones: Numbers[];
}
export interface Numbers {
  number: String;
}
